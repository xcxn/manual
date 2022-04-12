"use strict";(self.webpackChunkmanual=self.webpackChunkmanual||[]).push([[4842],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=p(r),f=a,s=d["".concat(u,".").concat(f)]||d[f]||c[f]||l;return r?n.createElement(s,o(o({ref:t},m),{},{components:r})):n.createElement(s,o({ref:t},m))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5825:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var n=r(7462),a=r(3366),l=(r(7294),r(3905)),o=["components"],i={sidebar_position:0},u="Domain",p={unversionedId:"profile-format/rule/domain",id:"profile-format/rule/domain",title:"Domain",description:"Sample",source:"@site/docs/profile-format/rule/domain.md",sourceDirName:"profile-format/rule",slug:"/profile-format/rule/domain",permalink:"/docs/profile-format/rule/domain",editUrl:"https://github.com/getsurfboard/manual/edit/main/docs/profile-format/rule/domain.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"[Rule]",permalink:"/docs/profile-format/rule/"},next:{title:"IP",permalink:"/docs/profile-format/rule/ip"}},m={},c=[{value:"Sample",id:"sample",level:2},{value:"Format",id:"format",level:2},{value:"Param",id:"param",level:2}],d={toc:c};function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"domain"},"Domain"),(0,l.kt)("h2",{id:"sample"},"Sample"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini"},"DOMAIN, www.apple.com, ProxyHTTP, force-remote-dns\nDOMAIN-SUFFIX, apple.com, Proxy, enhanced-mode\nDOMAIN-KEYWORD, google, Proxy\n")),(0,l.kt)("h2",{id:"format"},"Format"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini"},"{type}, {domain rule}, {target proxy}[, force-remote-dns][, enhanced-mode]\n")),(0,l.kt)("h2",{id:"param"},"Param"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Mandatory"),(0,l.kt)("th",{parentName:"tr",align:null},"Note"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"DOMAIN",(0,l.kt)("br",null),"DOMAIN-SUFFIX",(0,l.kt)("br",null),"DOMAIN-KEYWORD",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"DOMAIN means exact matching",(0,l.kt)("br",null),"DOMAIN-SUFFIX means suffix matching",(0,l.kt)("br",null),"DOMAIN-KEYWORK means keyword matching")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"domain rule"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"target proxy"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"Specified proxy or proxy group must existed in profile")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"force-remote-dns"),(0,l.kt)("td",{parentName:"tr",align:null},"true",(0,l.kt)("br",null),"false"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Default value: false",(0,l.kt)("br",null),"If set to true, DNS query will triggered in the remote proxy")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"enhanced-mode"),(0,l.kt)("td",{parentName:"tr",align:null},"true",(0,l.kt)("br",null),"false"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Default value: false",(0,l.kt)("br",null),"If set to true, a fake ip will be returned in DNS query")))))}f.isMDXComponent=!0}}]);