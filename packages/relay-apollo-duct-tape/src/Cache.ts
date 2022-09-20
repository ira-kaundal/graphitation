/**
 * Notes:
 *
 * - The RelayModernStore expects data to already be normalized.
 *   https://github.com/facebook/relay/blob/v14.1.0/packages/relay-runtime/store/RelayModernStore.js
 *
 * - Normalization and concurrent access to the store is handled by the
 *   RelayPublishQueue.
 *   https://github.com/facebook/relay/blob/v14.1.0/packages/relay-runtime/store/RelayPublishQueue.js#L69-L79
 *
 * - The RelayModernEnvironment already holds a RelayPublishQueue instance and
 *   would get shared once we add Relay client proper to the app. So it would
 *   be best to access the store through the environment at that time, however
 *   there doesn't apear to be an exposed API to batch multiple updates, which
 *   the publish queue and store do support, so for now we'll side-step the
 *   environment and do the coordination ourselves.
 *   https://github.com/facebook/relay/blob/v14.1.0/packages/relay-runtime/store/RelayModernEnvironment.js
 */

import {
  ConcreteRequest,
  PayloadData,
  ReaderFragment,
  OperationDescriptor,
  ROOT_TYPE,
  getSelector,
} from "relay-runtime";
import { getRequest, createOperationDescriptor, ROOT_ID } from "relay-runtime";
import { NormalizationFragmentSpread } from "relay-runtime/lib/util/NormalizationNode";

import invariant from "invariant";

import {
  ApolloCache,
  Cache as _Cache,
  Reference,
  Transaction,
} from "@apollo/client";

import RelayRecordSource from "relay-runtime/lib/store/RelayRecordSource";
import * as RelayModernRecord from "relay-runtime/lib/store/RelayModernRecord";
import * as RelayResponseNormalizer from "relay-runtime/lib/store/RelayResponseNormalizer";
import {
  PublishQueue,
  SingularReaderSelector,
  Store,
} from "relay-runtime/lib/store/RelayStoreTypes";
const RelayPublishQueue = require("relay-runtime/lib/store/RelayPublishQueue");

type TSerialized = unknown;

export class Cache extends ApolloCache<TSerialized> {
  private publishQueue: PublishQueue;

  constructor(private store: Store) {
    super();
    this.publishQueue = new RelayPublishQueue(store, null, getDataID);
  }

  // ----
  // Required and not yet implemented

  diff<T>(query: _Cache.DiffOptions): _Cache.DiffResult<T> {
    throw new Error("Method not implemented.");
  }

  // TODO: Data selected by any fragment in a query should trigger notifications for the query.
  watch<TData = any, TVariables = any>(
    options: _Cache.WatchOptions<TData, TVariables>,
  ): () => void {
    const operation = createOperationDescriptor(
      options.query,
      options.variables || {},
    );
    const cacheIdentifier = getQueryCacheIdentifier(operation);
    const queryResult = getQueryResult(operation, cacheIdentifier);

    const fragmentSelector = getSelector(
      queryResult.fragmentNode,
      queryResult.fragmentRef,
    );
    invariant(
      fragmentSelector.kind === "SingularReaderSelector",
      "Only singular fragments are supported",
    );
    let lastSnapshot = this.store.lookup(
      fragmentSelector as SingularReaderSelector,
    );

    const disposable = this.store.subscribe(lastSnapshot, (nextSnapshot) => {
      options.callback(
        { result: (nextSnapshot.data as unknown) as TData },
        lastSnapshot.data === undefined || lastSnapshot.isMissingData
          ? undefined
          : { result: (lastSnapshot.data as unknown) as TData },
      );
      lastSnapshot = nextSnapshot;
    });

    return () => {
      disposable.dispose();
    };
  }

  // https://github.com/facebook/relay/issues/233#issuecomment-1054489769
  reset(options?: _Cache.ResetOptions): Promise<void> {
    throw new Error("Method not implemented.");
  }

  evict(options: _Cache.EvictOptions): boolean {
    throw new Error("Method not implemented.");
  }

  restore(serializedState: TSerialized): ApolloCache<TSerialized> {
    throw new Error("Method not implemented.");
  }

  removeOptimistic(id: string): void {
    throw new Error("Method not implemented.");
  }

  // During the transaction, no broadcasts should be triggered.
  performTransaction(
    transaction: Transaction<TSerialized>,
    optimisticId?: string | null,
  ): void {
    throw new Error("Method not implemented.");
  }

  // ----
  // Required and implemented

  // TODO: This is ignoring rootId, is that ok?
  read<TData = any, TVariables = any>(
    options: _Cache.ReadOptions<TVariables, TData>,
  ): TData | null {
    const request = getRequest(options.query);
    const operation = createOperationDescriptor(
      request,
      options.variables || {},
    );
    return (this.store.lookup(operation.fragment).data as unknown) as TData;
  }

  // TODO: When is Reference as return type used?
  // TODO: This is ignoring dataId, is that ok?
  write<TData = any, TVariables = any>(
    options: _Cache.WriteOptions<TData, TVariables>,
  ): Reference | undefined {
    const request = getRequest(options.query);
    const operation = createOperationDescriptor(
      request,
      options.variables || {},
    );

    const selector = operation.root;
    const source = RelayRecordSource.create();
    const record = RelayModernRecord.create(selector.dataID, ROOT_TYPE);
    source.set(selector.dataID, record);
    const relayPayload = RelayResponseNormalizer.normalize(
      source,
      selector,
      options.result as PayloadData,
      {
        getDataID,
        request: operation.request,
      },
    );
    this.publishQueue.commitPayload(operation, relayPayload);
    this.publishQueue.run();

    return undefined;
  }

  // TODO: Unsure if we really would want this as the shape is different,
  //       but for now, for testing purposes, it's here.
  // TODO: Ignoring optimistic param atm
  extract(optimistic?: boolean): TSerialized {
    return this.store.getSource().toJSON();
  }

  // ----
  // Not required, overrides

  // TODO: When is Reference as return type used?
  // TODO: Can we avoid the query write? I.e. how do we build the fragment ref?
  writeFragment<TData = any, TVariables = any>(
    options: _Cache.WriteFragmentOptions<TData, TVariables>,
  ): undefined {
    this.write({
      query: getNodeQuery(options.fragment, options.id || ROOT_ID),
      result: { node: options.data },
      variables: options.variables,
    });
    return undefined;
  }

  // TODO: This version only supports 1 level of fragment atm. We would have to recurse into the data to fetch data of other fragments. Do we need this for TMP cases?
  // TODO: Ignoring optimistic param atm
  // TODO: Can we avoid the query read? I.e. how do we build the fragment ref?
  readFragment<FragmentType, TVariables = any>(
    options: _Cache.ReadFragmentOptions<FragmentType, TVariables>,
    optimistic?: boolean,
  ): FragmentType | null {
    const x = this.read({
      ...options,
      query: getNodeQuery(options.fragment, options.id || ROOT_ID),
      optimistic: false,
    }) as any;
    const fragmentRef = x.node;

    const fragmentSelector = getSelector(options.fragment, fragmentRef);
    invariant(
      fragmentSelector.kind === "SingularReaderSelector",
      "Only singular fragments are supported",
    );
    const snapshot = this.store.lookup(
      fragmentSelector as SingularReaderSelector,
    );
    // TODO: Handle missing data
    invariant(
      snapshot.data !== undefined && !snapshot.isMissingData,
      "Missing data!",
    );
    return (snapshot.data as unknown) as FragmentType;
  }
}

// ----

function getQueryResult(
  operation: OperationDescriptor,
  cacheIdentifier: string,
): {
  cacheIdentifier: string;
  fragmentNode: ReaderFragment;
  fragmentRef: unknown;
  operation: OperationDescriptor;
} {
  const rootFragmentRef = {
    __id: operation.fragment.dataID,
    __fragments: {
      [operation.fragment.node.name]: operation.request.variables,
    },
    __fragmentOwner: operation.request,
  };
  return {
    cacheIdentifier,
    fragmentNode: operation.request.node.fragment,
    fragmentRef: rootFragmentRef,
    operation,
  };
}

function getQueryCacheIdentifier(
  // environment: IEnvironment,
  operation: OperationDescriptor,
  // maybeFetchPolicy: ?FetchPolicy,
  // maybeRenderPolicy: ?RenderPolicy,
  cacheBreaker?: string | number,
): string {
  const fetchPolicy = "fetchPolicy"; // maybeFetchPolicy ?? DEFAULT_FETCH_POLICY;
  const renderPolicy = "full"; // maybeRenderPolicy ?? environment.UNSTABLE_getDefaultRenderPolicy();
  const cacheIdentifier = `${fetchPolicy}-${renderPolicy}-${operation.request.identifier}`;
  if (cacheBreaker != null) {
    return `${cacheIdentifier}-${cacheBreaker}`;
  }
  return cacheIdentifier;
}

function getDataID(
  fieldValue: Record<string, unknown>,
  typeName: string,
): unknown {
  // if (typeName === VIEWER_TYPE) {
  //   // $FlowFixMe[prop-missing]
  //   return fieldValue.id == null ? VIEWER_ID : fieldValue.id;
  // }
  // $FlowFixMe[prop-missing]
  return fieldValue.id;
}

// ----

function getNodeQuery(fragment: ReaderFragment, id: string): ConcreteRequest {
  var v0 = [
      {
        defaultValue: null,
        kind: "LocalArgument",
        name: "id",
      },
    ],
    v1 = [
      {
        kind: "Variable",
        name: "id",
        variableName: "id",
      },
    ];
  return {
    fragment: {
      argumentDefinitions: v0 /*: any*/,
      kind: "Fragment",
      metadata: null,
      name: "CacheTestNodeQuery",
      selections: [
        {
          alias: null,
          args: v1 /*: any*/,
          concreteType: null,
          kind: "LinkedField",
          name: "node",
          plural: false,
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: fragment.name,
            },
          ],
          storageKey: null,
        },
      ],
      type: "Query",
      abstractKey: null,
    },
    kind: "Request",
    operation: {
      argumentDefinitions: v0 /*: any*/,
      kind: "Operation",
      name: "CacheTestNodeQuery",
      selections: [
        {
          alias: null,
          args: v1 /*: any*/,
          concreteType: null,
          kind: "LinkedField",
          name: "node",
          plural: false,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "__typename",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "id",
              storageKey: null,
            },
            {
              kind: "FragmentSpread",
              name: fragment.name,
              storageKey: null,
              fragment: fragment,
            } as NormalizationFragmentSpread,
          ],
          storageKey: null,
        },
      ],
    },
    params: {
      // cacheID: "90613d3754cd5400b0b29433387dbb42", // TODO: What does this do specifically?
      id: id, // TODO: Is this actually the id value?
      metadata: {},
      name: "CacheTestNodeQuery",
      operationKind: "query",
      text: null,
      // text:
      // "query CacheTestNodeQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...CacheTestFragment\n    id\n  }\n}\n\nfragment CacheTestFragment on Conversation {\n  id\n  title\n}\n",
    },
  };
}
