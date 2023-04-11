"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[916],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=a,f=u["".concat(c,".").concat(h)]||u[h]||d[h]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3974:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l}});var r=n(3117),a=(n(7294),n(3905));const o={sidebar_position:1},i="Intro",s={unversionedId:"learn-graphql/intro",id:"learn-graphql/intro",title:"Intro",description:"Preface",source:"@site/docs/learn-graphql/intro.md",sourceDirName:"learn-graphql",slug:"/learn-graphql/intro",permalink:"/graphitation/docs/learn-graphql/intro",draft:!1,editUrl:"https://github.com/microsoft/graphitation/tree/main/website/docs/learn-graphql/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"The design of GraphQL",permalink:"/graphitation/docs/learn-graphql/the-design-of-graphql"}},c={},l=[{value:"Preface",id:"preface",level:2},{value:"About",id:"about",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"intro"},"Intro"),(0,a.kt)("h2",{id:"preface"},"Preface"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API."),(0,a.kt)("p",{parentName:"blockquote"},"\u2014 ",(0,a.kt)("a",{parentName:"p",href:"https://graphql.org"},"graphql.org"))),(0,a.kt)("p",null,"While technically accurate, its brevity leaves a lot of room for misguided understanding, typically based on prior experiences."),(0,a.kt)("p",null,"The authors of this guide have observed that ",(0,a.kt)("strong",{parentName:"p"},"the original premise of GraphQL is lost on most users"),". On the one hand this speaks to the versatility of GraphQL, but on the other hand it means that missing key nuances can cause incorrect application of GraphQL, even in the exact same context it was designed for: ",(0,a.kt)("strong",{parentName:"p"},"complex data-driven UI applications"),"."),(0,a.kt)("p",null,"This guide aims to teach you everything you need to understand about GraphQL from that perspective, including how to design schemas, how to implement field resolvers, and how to effectively use this to build these data-driven UIs."),(0,a.kt)("p",null,"This guide does not aim to replace ",(0,a.kt)("a",{parentName:"p",href:"https://graphql.org/learn/"},"the canonical graphql.org site\u2019s documentation"),". Some familiarity with GraphQL might be necessary for some sections, where possible the guide will link to the relevant existing documentation."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Each section of this guide builds upon the knowledge gained in the previous section. Not taking this into account means you may end-up repeating the mistakes made in the community to learn about GraphQL outside of the context that it was designed for."),(0,a.kt)("p",{parentName:"admonition"},"If possible, read the guide from start to finish.")),(0,a.kt)("h2",{id:"about"},"About"),(0,a.kt)("p",null,"GraphQL is a new way of thinking about data and how to access it. It is a data query language that was invented by Facebook in 2012 to make it easier to deal with the complexity of data and state driven UI applications, combined with the scale of their workforce and codebase. GraphQL has since been open-sourced and is now used by many companies that have to deal with the same complexities."),(0,a.kt)("p",null,"GraphQL isn't tied to any specific database or storage engine, instead it is an abstraction over the underlying APIs, expressed using a GraphQL schema. This higher level interface is more convenient for UI developers, as it allows them to access the data in a more consistent and predictable way. Additionally, a good GraphQL schema is focussed on expressing the actual domain models and the semantics thereof, rather than the underlying API data and the many disparate forms it can take. By carefully designing your schema, you can optimize your data retrieval to get exactly the data your UI needs, and ",(0,a.kt)("em",{parentName:"p"},"only")," that data."))}d.isMDXComponent=!0}}]);