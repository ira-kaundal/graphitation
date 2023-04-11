"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[485],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),h=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=h(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=h(n),u=r,m=c["".concat(l,".").concat(u)]||c[u]||d[u]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var h=2;h<i;h++)o[h]=n[h];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},482:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return h}});var a=n(3117),r=(n(7294),n(3905));const i={sidebar_position:3,id:"thinking-in-graphql",title:"Thinking in GraphQL",description:"How to think of the GraphQL abstraction layer and its purpose."},o="Thinking in GraphQL",s={unversionedId:"learn-graphql/thinking-in-graphql",id:"learn-graphql/thinking-in-graphql",title:"Thinking in GraphQL",description:"How to think of the GraphQL abstraction layer and its purpose.",source:"@site/docs/learn-graphql/thinking-in-graphql.md",sourceDirName:"learn-graphql",slug:"/learn-graphql/thinking-in-graphql",permalink:"/graphitation/docs/learn-graphql/thinking-in-graphql",draft:!1,editUrl:"https://github.com/microsoft/graphitation/tree/main/website/docs/learn-graphql/thinking-in-graphql.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,id:"thinking-in-graphql",title:"Thinking in GraphQL",description:"How to think of the GraphQL abstraction layer and its purpose."},sidebar:"tutorialSidebar",previous:{title:"The design of GraphQL",permalink:"/graphitation/docs/learn-graphql/the-design-of-graphql"},next:{title:"GraphQL Resolution",permalink:"/graphitation/docs/learn-graphql/resolution"}},l={},h=[{value:"Abstractions for complex data-driven UI",id:"abstractions-for-complex-data-driven-ui",level:2},{value:"The \u201cgraph\u201d in GraphQL",id:"the-graph-in-graphql",level:2},{value:"\ud83d\udc4d Design from front-end perspective",id:"-design-from-front-end-perspective",level:3},{value:"\ud83d\udc4e Design from back-end perspective",id:"-design-from-back-end-perspective",level:3},{value:"Generic <em>and</em> domain-specific",id:"generic-and-domain-specific",level:2}],p={toc:h},c="wrapper";function d(e){let{components:t,...i}=e;return(0,r.kt)(c,(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"thinking-in-graphql"},"Thinking in GraphQL"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This section shows GraphQL query and schema definition syntax. The first part of ",(0,r.kt)("a",{parentName:"p",href:"https://graphql.org/learn/schema/"},"this upstream guide")," will be useful to explain any bits that are not immediately clear.")),(0,r.kt)("p",null,"As you have learned in ",(0,r.kt)("a",{parentName:"p",href:"/graphitation/docs/learn-graphql/the-design-of-graphql"},"the design of GraphQL")," section, GraphQL was designed to allow components to express their own data requirements, and for those requirements to be composable into one or more larger UIs\u2014whilst not introducing any unnecessary coupling between the various components that make up the larger UI. There is one part of this equation that we have not touched on yet, however, which is the other side of the data contract: the schema."),(0,r.kt)("h2",{id:"abstractions-for-complex-data-driven-ui"},"Abstractions for complex data-driven UI"),(0,r.kt)("p",null,"The GraphQL schema encodes the data requirements that the host is expected to be able to provide to the UI. At ",(0,r.kt)("em",{parentName:"p"},"minimum"),", this schema will be an intersection of all of the data requirements expressed by the UIs\u2014but it may be a superset because of past or future UI design iterations."),(0,r.kt)("p",null,'It is very natural to initially view GraphQL from a "back-end" perspective, but this way of thinking will lead your schema design down the wrong path. Instead, you should view the schema as sitting in between your back-end and the front-end. Once you understand that this schema is ',(0,r.kt)("em",{parentName:"p"},"in service of")," the UI, it then logically follows that the schema exposes the domain data in ways that will very much resemble the way in which the data is presented in the UI."),(0,r.kt)("p",null,"For instance, a conversation list UI might care about presenting a list of conversations the user is in, with their last messages, associated participants, their avatars, and so on and so forth. It does not care about:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the conversation metadata coming from a different back-end service than the participant metadata"),(0,r.kt)("li",{parentName:"ul"},"that in some cases the back-end might have denormalised ","[parts of]"," message metadata onto the conversation"),(0,r.kt)("li",{parentName:"ul"},"that multiple back-end services might return different subsets for what is, semantically speaking, the same conversation object"),(0,r.kt)("li",{parentName:"ul"},"or even the very act of fetching the data from the various back-end services")),(0,r.kt)("p",null,"These are the types of implementation details that you want to abstract away from complex data-driven UI code, as that makes it easier to reason about and thus to maintain/optimise over time. Additionally, when thinking of complex applications, you will want to encapsulate business logic in a way that allows you to re-use it for other UIs, or perhaps even compute/transform the data in a background thread."),(0,r.kt)("p",null,"All of these needs are met by a GraphQL schema that acts as the abstraction layer between your back-end and front-end."),(0,r.kt)("h2",{id:"the-graph-in-graphql"},"The \u201cgraph\u201d in GraphQL"),(0,r.kt)("p",null,"Another important UI consideration is rendering performance, or sometimes perceived performance. The former is achieved by having all data available that is necessary, for the initial state of the UI that the user should see, such that only a single render pass is required. (Sometimes this might mean that it can take a little while longer before rendering can start, but even then a single render pass can still provide an improvement to perceived performance.)"),(0,r.kt)("p",null,"Ideally all this data can be provided within a reasonable time-frame, but even then there are provisions in state-of-the-art GraphQL stacks that allow you to design a controlled loading experience using ",(0,r.kt)("a",{parentName:"p",href:"https://17.reactjs.org/docs/concurrent-mode-suspense.html#traditional-approaches-vs-suspense"},"the \u201crender-as-you-fetch\u201d pattern"),", as outlined in ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=Tl0S7QkxFE4"},"this in-depth presentation")," by a Facebook/Relay engineer."),(0,r.kt)("p",null,"All in all, what this means is that the schema ",(0,r.kt)("em",{parentName:"p"},"should")," enable a piece of UI to fetch all data it needs, in a single request. This is where \u201cthe graph\u201d comes in, which means that the types that make up the schema are connected to each other in semantically meaningful ways and can be retrieved as a meaningful whole."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("h3",{parentName:"admonition",id:"broad-query"},"Broad-Query"),(0,r.kt)("p",{parentName:"admonition"},"This concept might seem foreign even to those already familiar with GraphQL. To solve this at Microsoft, we had to go as far as invent a new name for this very core concept: ",(0,r.kt)("strong",{parentName:"p"},"Broad-Query"),"."),(0,r.kt)("p",{parentName:"admonition"},"However, because in GraphQL ",(0,r.kt)("em",{parentName:"p"},"all")," queries are meant to be \u201cbroad\u201d, we will ",(0,r.kt)("strong",{parentName:"p"},"not")," keep repeating the \u201cBroad-Query\u201d term. After all, we want you to walk away from this guide as someone who truly understands GraphQL!")),(0,r.kt)("h3",{id:"-design-from-front-end-perspective"},"\ud83d\udc4d Design from front-end perspective"),(0,r.kt)("p",null,"When designing the schema in a vacuum, it might be hard to imagine what those connections should be. However, when considered from the perspective of a concrete piece of UI, and working your way backwards, it actually becomes a lot easier."),(0,r.kt)("p",null,"Let's consider the conversation list UI example again:"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Conversation list"),(0,r.kt)("th",null,"UI components"),(0,r.kt)("th",null,"GraphQL query")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("img",{src:n(9375).Z,border:"1"})),(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<ChatList>\n  <ChatListItem>\n    <Avatar />\n    <Title />\n    <LastMessage />\n    <Timestamp />\n  </ChatListItem>\n</ChatList>\n"))),(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"query {\n  conversations {\n    participants {\n      avatarUrl\n    }\n    title\n    lastMessage\n    receivedAt\n  }\n}\n"))))),(0,r.kt)("p",null,"The UI components were probably very natural to imagine, right? Well, as you can see, the GraphQL query you would want to be able to write is an equally natural extrapolation."),(0,r.kt)("p",null,"Finally, completing our top-down approach from UI design to GraphQL schema, the schema to power this would need to look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type Query {\n  conversations: [Conversation]\n}\n\ntype Conversation {\n  participants: [Person]\n  title: String\n  lastMessage: String\n  receivedAt: String\n}\n\ntype Person {\n  avatarURL: String\n}\n")),(0,r.kt)("h3",{id:"-design-from-back-end-perspective"},"\ud83d\udc4e Design from back-end perspective"),(0,r.kt)("p",null,"To contrast, let\u2019s look at a back-end perspective schema, and how it makes it impossible to fetch all data in a single request."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type Query {\n  conversations: [Conversation]\n  person(id: ID): Person\n}\n\ntype Conversation {\n  participantIDs: [ID]\n}\n")),(0,r.kt)("p",null,"In this case, every root-field maps to a back-end service, and it of course does not return the full data for each related entity in its response payload, but rather contains foreign-keys to those related entities."),(0,r.kt)("p",null,"Because we can only get the IDs of participants in a conversation, rather than the actual ",(0,r.kt)("inlineCode",{parentName:"p"},"Person")," objects they refer to, we are being forced to make an aditional request for ",(0,r.kt)("em",{parentName:"p"},"each")," participant in all of the conversations in the list. This is the N+1 problem and forces the UI to perform a waterfall of requests. This in turn will lead to a slow loading experience or staggered UI rendering."),(0,r.kt)("h2",{id:"generic-and-domain-specific"},"Generic ",(0,r.kt)("em",{parentName:"h2"},"and")," domain-specific"),(0,r.kt)("p",null,"The benefit of GraphQL is that it allows you to design your data schema in a way that reflects the domain of your application, rather than the structure of your database or the layout of your UI. This means that you can define types and fields that represent the entities and relationships in your domain, and expose them through a single endpoint that can be queried in a concise manner."),(0,r.kt)("p",null,"However, this does not mean that you should create a schema that is tailored to a specific UI component or view. Doing so would limit the reusability and composability of your schema, and make it harder to evolve over time. Instead, you should aim to create a schema that is generic enough to support any UI requirement, but still specific enough to capture the domain logic and constraints."),(0,r.kt)("p",null,"By using GraphQL, you can then leverage its powerful features to fetch exactly what you need from your schema, and nothing more. We will explore these features in more detail in the next section."))}d.isMDXComponent=!0},9375:function(e,t,n){t.Z=n.p+"assets/images/SmallChatList-48df39d6d39f34b20876ae5f9e68c64a.png"}}]);