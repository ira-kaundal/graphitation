"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[796],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return u}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,u=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(u,r(r({ref:t},h),{},{components:n})):a.createElement(u,r({ref:t},h))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5113:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return r},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var a=n(3117),o=(n(7294),n(3905));const i={sidebar_position:2,id:"the-design-of-graphql",title:"The design of GraphQL",description:"What was GraphQL designed to solve for and how to leverage that?"},r="The design of GraphQL",s={unversionedId:"learn-graphql/the-design-of-graphql",id:"learn-graphql/the-design-of-graphql",title:"The design of GraphQL",description:"What was GraphQL designed to solve for and how to leverage that?",source:"@site/docs/learn-graphql/the-design-of-graphql.md",sourceDirName:"learn-graphql",slug:"/learn-graphql/the-design-of-graphql",permalink:"/graphitation/docs/learn-graphql/the-design-of-graphql",draft:!1,editUrl:"https://github.com/microsoft/graphitation/tree/main/website/docs/learn-graphql/the-design-of-graphql.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,id:"the-design-of-graphql",title:"The design of GraphQL",description:"What was GraphQL designed to solve for and how to leverage that?"},sidebar:"tutorialSidebar",previous:{title:"Intro",permalink:"/graphitation/docs/learn-graphql/intro"},next:{title:"Thinking in GraphQL",permalink:"/graphitation/docs/learn-graphql/thinking-in-graphql"}},l={},p=[{value:"Example",id:"example",level:2},{value:"Problem",id:"problem",level:2},{value:"The Solution",id:"the-solution",level:2},{value:"Composition",id:"composition",level:3},{value:"Local Reasoning",id:"local-reasoning",level:3},{value:"Global Optimization",id:"global-optimization",level:3},{value:"Takeaways",id:"takeaways",level:2}],h={toc:p},c="wrapper";function d(e){let{components:t,...i}=e;return(0,o.kt)(c,(0,a.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"the-design-of-graphql"},"The design of GraphQL"),(0,o.kt)("p",null,"Unfortunately, the community has largely lost sight of the original design considerations that Facebook had for GraphQL. Key components of its design are misunderstood and often entirely ignored by popular GraphQL clients. Facebook\u2019s own GraphQL client, ",(0,o.kt)("a",{parentName:"p",href:"https://relay.dev"},"Relay"),", incorporates all the GraphQL best-practices learned from using GraphQL ",(0,o.kt)("em",{parentName:"p"},"as it was designed"),", but alas the choice was made to separate the strong opinions of how to use GraphQL from GraphQL\u2019s own documentation to avoid being prescriptive."),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Any GraphQL client for data-driven UI applications that does ",(0,o.kt)("strong",{parentName:"p"},"not")," have a strong opinion on making \u201cfragments\u201d the unit around which the user-interface components are built, is ",(0,o.kt)("strong",{parentName:"p"},"not")," leveraging key GraphQL design components nor setting you up for success with complex data-driven UI applications.")),(0,o.kt)("p",null,"With that in mind, forget what you might already know about GraphQL for a bit and let\u2019s go back to when Facebook designed GraphQL\u2014when they had realized that user-interfaces and the back-end services backing them would end up getting coupled together, making iterating on complex applications like theirs extremely hard."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"Let\u2019s take a look at the ",(0,o.kt)("inlineCode",{parentName:"p"},"ChatList")," component of Teams. There\u2019s a list of conversations, content preview, and some details about the participants. So if we would structure this, there would be 3 major components."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"There\u2019s going to be the outer ",(0,o.kt)("inlineCode",{parentName:"li"},"ChatList")," component."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"ChatList")," component would contain many ",(0,o.kt)("inlineCode",{parentName:"li"},"ChatListItem")," components, one for each conversation that the user has."),(0,o.kt)("li",{parentName:"ul"},"And for each conversation we render some ",(0,o.kt)("inlineCode",{parentName:"li"},"ConversationInfo"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(9918).Z,width:"1440",height:"810"})),(0,o.kt)("p",null,"So our application looks something like this. We have our tree of components on the client-side, and we have our service endpoint."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(1655).Z,width:"1440",height:"810"})),(0,o.kt)("p",null,"The service sends some data down to the client, ",(0,o.kt)("inlineCode",{parentName:"p"},"ChatList")," passes it on to its children, and we populate the data further down through the tree."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(8477).Z,width:"1440",height:"810"})),(0,o.kt)("h2",{id:"problem"},"Problem"),(0,o.kt)("p",null,"But of course this is a simplification, what happens when we add some color to this? The ",(0,o.kt)("inlineCode",{parentName:"p"},"ChatList")," component needs an item count, the ",(0,o.kt)("inlineCode",{parentName:"p"},"ChatListItem")," component needs an avatar, and the ",(0,o.kt)("inlineCode",{parentName:"p"},"ConversationInfo")," needs a title and last message preview."),(0,o.kt)("p",null,"If we look at what\u2019s actually happening here, we\u2019ve encoded the implementation details of all 3 of our components on the service-side, so it knows what data to pass down.\nFurthermore, if we look at ",(0,o.kt)("inlineCode",{parentName:"p"},"ConversationInfo"),", we have actually leaked its details into ",(0,o.kt)("inlineCode",{parentName:"p"},"ChatListItem"),", because it has to know what to pass down as props."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(7161).Z,width:"1440",height:"810"})),(0,o.kt)("p",null,"So what happens when we change ",(0,o.kt)("inlineCode",{parentName:"p"},"ConversationInfo"),"? Well, we\u2019re not just changing ",(0,o.kt)("inlineCode",{parentName:"p"},"ConversationInfo"),", we\u2019re also changing ",(0,o.kt)("inlineCode",{parentName:"p"},"ChatListItem")," and what it passes down. We might have to change ",(0,o.kt)("inlineCode",{parentName:"p"},"ChatList"),", dependending on how it structured things. And we ",(0,o.kt)("em",{parentName:"p"},"certainly")," have to change the service, so that it sends the new information."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(1468).Z,width:"1440",height:"810"})),(0,o.kt)("p",null,"How did we get here? How did we get to a place where making a simple change to ",(0,o.kt)("inlineCode",{parentName:"p"},"ConversationInfo"),", required us not just to touch that component, but to touch its parents\u2014which are potentially many, in a complex application\u2014and to touch the service?"),(0,o.kt)("p",null,"The big problem was a lack of modularity. We wanted ",(0,o.kt)("inlineCode",{parentName:"p"},"ConversationInfo")," to be a self-contained component, but it wasn\u2019t. Its implementation details were leaked to ",(0,o.kt)("inlineCode",{parentName:"p"},"ChatListItem"),", ",(0,o.kt)("em",{parentName:"p"},"and")," up to the service. The thing that was missing was a way for ",(0,o.kt)("inlineCode",{parentName:"p"},"ConversationInfo")," and other components to specify what data they require. That specification didn\u2019t live in the component itself, it was spread all over the application."),(0,o.kt)("h2",{id:"the-solution"},"The Solution"),(0,o.kt)("p",null,"What we want is some way for each component to statically define its data needs in a simple way."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(1213).Z,width:"1440",height:"810"})),(0,o.kt)("p",null,"And if it can do so in a way that each of its parents can gather up those data needs\u2026"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(8041).Z,width:"1440",height:"810"})),(0,o.kt)("p",null,"\u2026we can gather up the data requirements ",(0,o.kt)("em",{parentName:"p"},"all")," the way up the stack to the root."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(818).Z,width:"1440",height:"810"})),(0,o.kt)("p",null,"The root component can then communicate that up to the service. And instead of the service having these data requirements hardcoded, the service can use this aggregated data specification to decide what data to send back to the client."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(1305).Z,width:"1440",height:"810"})),(0,o.kt)("p",null,"From here on out, it\u2019s exactly the same diagram as before. We have a service, the service has the data that our application needs, it sends it to ",(0,o.kt)("inlineCode",{parentName:"p"},"ChatList"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ChatList")," passes it down to the children, and so forth."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(6725).Z,width:"1440",height:"810"})),(0,o.kt)("p",null,"It\u2019s a subtle change, but a ",(0,o.kt)("em",{parentName:"p"},"key")," one."),(0,o.kt)("p",null,"We\u2019ve taken the details about what data ",(0,o.kt)("inlineCode",{parentName:"p"},"ConversationInfo")," requires ",(0,o.kt)("em",{parentName:"p"},"out")," of the service, where it doesn\u2019t belong, and have put it ",(0,o.kt)("em",{parentName:"p"},"in")," the ",(0,o.kt)("inlineCode",{parentName:"p"},"ConversationInfo")," component where it does."),(0,o.kt)("p",null,"Because inherently, our rendering logic for ",(0,o.kt)("inlineCode",{parentName:"p"},"ConversationInfo")," and its data-specifications are tied together. We can\u2019t change one without changing the other. So having them both be in the same component makes life a lot easier."),(0,o.kt)("p",null,"So if we want to do this, if we want each component to be able to specify its own data needs, how can we do so? The realization is that our data-specification has a key property that it needs to fulfill, which is composition."),(0,o.kt)("h3",{id:"composition"},"Composition"),(0,o.kt)("p",null,"Composition in GraphQL is achieved by leveraging fragments, which are snippets of a query that can be composed together to form larger queries. These fragments are colocated with their components and composed into a tree that very much follows the shape of the component tree."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"function ChatList() {\n  const data = useLazyLoadQuery(\n    graphql`\n      query ChatListQuery {\n        conversations {\n          id\n          ...ChatListItemFragment\n        }\n      }\n    `,\n  );\n  return (\n    <ul>\n      {data.conversations.map((conversation) => (\n        <ChatListItem conversation={conversation} key={conversation.id} />\n      ))}\n    </ul>\n  );\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"function ChatListItem(props) {\n  const conversation = useFragment(\n    graphql`\n      fragment ChatListItemFragment on Conversation {\n        lastMessage {\n          arrivalTime\n          ...ConversationInfoFragment\n        }\n      }\n    `,\n    props.conversation,\n  );\n  return (\n    <li>\n      <ConversationInfo conversation={conversation} />\n      <span>{conversation.lastMessage.arrivalTime}</span>\n    </li>\n  );\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"function ConversationInfo(props) {\n  const conversation = useFragment(\n    graphql`\n      fragment ConversationInfoFragment on Conversation {\n        title\n        lastMessage {\n          preview\n        }\n      }\n    `,\n    props.conversation,\n  );\n  return (\n    <div>\n      <h2>{conversation.title}</h2>\n      <p>{conversation.lastMessage.preview}</p>\n    </div>\n  );\n}\n")),(0,o.kt)("h3",{id:"local-reasoning"},"Local Reasoning"),(0,o.kt)("p",null,"Because a component and its data requirements are self-contained:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Engineers don\u2019t need to jump around the codebase"),(0,o.kt)("li",{parentName:"ul"},"Engineers can safely cleanup data requirements"),(0,o.kt)("li",{parentName:"ul"},"Isolated components can be re-composed into new features"),(0,o.kt)("li",{parentName:"ul"},"Isolated components provide improved developer-experience")),(0,o.kt)("h3",{id:"global-optimization"},"Global Optimization"),(0,o.kt)("p",null,"At the framework level, transperantly to the UI engineer, we can:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use tooling to extract and optimize query"),(0,o.kt)("li",{parentName:"ul"},"Fetch data in single request for a single render pass"),(0,o.kt)("li",{parentName:"ul"},"Start fetching data ",(0,o.kt)("em",{parentName:"li"},"before")," rendering. For instance at application launch, or when hovering over/near an element"),(0,o.kt)("li",{parentName:"ul"},"Leverage component fragments for narrow store observables, to avoid unnecessary re-rendering of ancestor/sibling components"),(0,o.kt)("li",{parentName:"ul"},"Couple lazy asset loading to data resolving, including the required components themselves"),(0,o.kt)("li",{parentName:"ul"},"Move extracted queries upstream so the pipeline can ahead-of-time optimize/prepare data in a generic manner across builds")),(0,o.kt)("h2",{id:"takeaways"},"Takeaways"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"GraphQL was created to allow composition of data-requirements for UI components in complex data-driven applications.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Smaller network payloads is great, but not the primary design goal."))),(0,o.kt)("li",{parentName:"ul"},"Fragments are the manner in which a component's unique data-requirements can be composed.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"They are not meant simply for DRY purposes, nor should they be shared by different components.")))))}d.isMDXComponent=!0},1655:function(e,t,n){t.Z=n.p+"assets/images/Slide10-1298febd4fd724fbd900e8c1b52a62a2.png"},8477:function(e,t,n){t.Z=n.p+"assets/images/Slide11-fc704ce0a6249d9e7772991628f1467b.png"},7161:function(e,t,n){t.Z=n.p+"assets/images/Slide13-b2f8c27204e307316722d047dcc219aa.png"},1468:function(e,t,n){t.Z=n.p+"assets/images/Slide14-0d8974bc92a64288e8d3967041ae1af5.png"},1213:function(e,t,n){t.Z=n.p+"assets/images/Slide18-96d1b3db202e1a31aac06dee03e7b958.png"},8041:function(e,t,n){t.Z=n.p+"assets/images/Slide19-e01a363fe393519d687fb9dbb80d7fee.png"},818:function(e,t,n){t.Z=n.p+"assets/images/Slide20-6385aadfe571f12db3fb937dbe338460.png"},1305:function(e,t,n){t.Z=n.p+"assets/images/Slide22-f6c232cb7962e56d6365e81d40c0f031.png"},6725:function(e,t,n){t.Z=n.p+"assets/images/Slide25-425ae0858073a3d304499d21b370a9e4.png"},9918:function(e,t,n){t.Z=n.p+"assets/images/Slide7+8+9-e961e765b175dddb6e4a59dc8fe627dc.png"}}]);