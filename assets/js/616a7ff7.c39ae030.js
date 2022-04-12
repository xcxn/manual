"use strict";(self.webpackChunkmanual=self.webpackChunkmanual||[]).push([[506],{3905:function(e,r,t){t.d(r,{Zo:function(){return f},kt:function(){return m}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},f=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,f=a(e,["components","mdxType","originalType","parentName"]),s=u(t),m=o,d=s["".concat(c,".").concat(m)]||s[m]||p[m]||i;return t?n.createElement(d,l(l({ref:r},f),{},{components:t})):n.createElement(d,l({ref:r},f))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=s;var a={};for(var c in r)hasOwnProperty.call(r,c)&&(a[c]=r[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var u=2;u<i;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},1477:function(e,r,t){t.r(r),t.d(r,{assets:function(){return f},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return p}});var n=t(7462),o=t(3366),i=(t(7294),t(3905)),l=["components"],a={},c="[Rule]",u={unversionedId:"profile-format/rule/index",id:"profile-format/rule/index",title:"[Rule]",description:"Rule is a collection of rules which will apply on network traffic.",source:"@site/docs/profile-format/rule/index.md",sourceDirName:"profile-format/rule",slug:"/profile-format/rule/",permalink:"/docs/profile-format/rule/",editUrl:"https://github.com/getsurfboard/manual/edit/main/docs/profile-format/rule/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Auto select",permalink:"/docs/profile-format/proxygroup/auto"},next:{title:"Domain",permalink:"/docs/profile-format/rule/domain"}},f={},p=[],s={toc:p};function m(e){var r=e.components,t=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"rule"},(0,i.kt)("inlineCode",{parentName:"h1"},"[Rule]")),(0,i.kt)("p",null,"Rule is a collection of rules which will apply on network traffic."),(0,i.kt)("p",null,"Traffic which match rules defined in ","[Rule]"," section will be redirected to specified proxy or proxy group."),(0,i.kt)("p",null,"Traffic will try to match rules in sequence according defined in the profile."))}m.isMDXComponent=!0}}]);