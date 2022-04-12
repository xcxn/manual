"use strict";(self.webpackChunkmanual=self.webpackChunkmanual||[]).push([[3842],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(r),f=a,d=m["".concat(u,".").concat(f)]||m[f]||s[f]||l;return r?n.createElement(d,o(o({ref:t},c),{},{components:r})):n.createElement(d,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9771:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return s}});var n=r(7462),a=r(3366),l=(r(7294),r(3905)),o=["components"],i={sidebar_position:3},u="Rule Set",p={unversionedId:"profile-format/rule/ruleset",id:"profile-format/rule/ruleset",title:"Rule Set",description:"Rule Set is a remote url configuration, whose content is a collection of Rule, but without target definition in it.",source:"@site/docs/profile-format/rule/ruleset.md",sourceDirName:"profile-format/rule",slug:"/profile-format/rule/ruleset",permalink:"/docs/profile-format/rule/ruleset",editUrl:"https://github.com/getsurfboard/manual/edit/main/docs/profile-format/rule/ruleset.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Process",permalink:"/docs/profile-format/rule/process"},next:{title:"Final",permalink:"/docs/profile-format/rule/final"}},c={},s=[{value:"Sample",id:"sample",level:2},{value:"Rule Set definition",id:"rule-set-definition",level:3},{value:"Remote Rule Set content sample",id:"remote-rule-set-content-sample",level:3},{value:"Format",id:"format",level:2},{value:"Param",id:"param",level:2}],m={toc:s};function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"rule-set"},"Rule Set"),(0,l.kt)("p",null,"Rule Set is a remote url configuration, whose content is a collection of Rule, but without target definition in it."),(0,l.kt)("p",null,"Use Rule Set can greatly simplify the content complexity of profile which has a lot of rules in it,\nand also can reuse rules encapsulated by other contributors."),(0,l.kt)("h2",{id:"sample"},"Sample"),(0,l.kt)("h3",{id:"rule-set-definition"},"Rule Set definition"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini"},"RULE-SET,https://ruleset.com/cn,ProxyVMess\n")),(0,l.kt)("h3",{id:"remote-rule-set-content-sample"},"Remote Rule Set content sample"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini"},"DOMAIN,www.apple.com\nDOMAIN,www.google.com\nDOMAIN-SUFFIX,apple.com\nDOMAIN-KEYWORD,google\nIP-CIDR,192.168.0.0/16\nGEOIP,US\n")),(0,l.kt)("p",null,"You can see that there is no target definition in it, all matching traffic will use proxy 'ProxyVMess' as target"),(0,l.kt)("h2",{id:"format"},"Format"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini"},"RULE-SET, {rule set url}, {target}\n")),(0,l.kt)("h2",{id:"param"},"Param"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Mandatory"),(0,l.kt)("th",{parentName:"tr",align:null},"Note"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rule set url"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"target"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"Specified proxy or proxy group must existed in profile")))))}f.isMDXComponent=!0}}]);