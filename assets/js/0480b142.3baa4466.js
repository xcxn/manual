"use strict";(self.webpackChunkmanual=self.webpackChunkmanual||[]).push([[836],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=r,m=d["".concat(s,".").concat(f)]||d[f]||c[f]||a;return n?o.createElement(m,i(i({ref:t},u),{},{components:n})):o.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3584:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:6},s="FAQ",p={unversionedId:"faq",id:"faq",title:"FAQ",description:"Update profile automatically?",source:"@site/docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/docs/faq",editUrl:"https://github.com/getsurfboard/manual/edit/main/docs/faq.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"ChangeLog",permalink:"/docs/changelog"},next:{title:"Deeplink",permalink:"/docs/deeplink"}},u={},c=[{value:"Update profile automatically?",id:"update-profile-automatically",level:2},{value:"High battery consumption?",id:"high-battery-consumption",level:2},{value:"How to reduce battery consumption?",id:"how-to-reduce-battery-consumption",level:2},{value:"Analyzing network issues",id:"analyzing-network-issues",level:2},{value:"Whether protocol defined in profile is supported",id:"whether-protocol-defined-in-profile-is-supported",level:3},{value:"Reset bypass config",id:"reset-bypass-config",level:3},{value:"Try global outbound mode",id:"try-global-outbound-mode",level:3},{value:"Why not support these Surge standard",id:"why-not-support-these-surge-standard",level:2},{value:"MITM",id:"mitm",level:3},{value:"<code>USER-AGENT</code>",id:"user-agent",level:3},{value:"<code>URL-REGEX</code>",id:"url-regex",level:3},{value:"Why not support SSR/Trojan gRPC/VLESS/Xray/...",id:"why-not-support-ssrtrojan-grpcvlessxray",level:2}],d={toc:c};function f(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"faq"},"FAQ"),(0,a.kt)("h2",{id:"update-profile-automatically"},"Update profile automatically?"),(0,a.kt)("p",null,"Surfboard support update profiles automatically, even when app is in background."),(0,a.kt)("p",null,"It is achieved through defining a ",(0,a.kt)("a",{parentName:"p",href:"/docs/profile-format/managed_config"},"managed-config")," at the first line of the profile"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"#!MANAGED-CONFIG http://test.com/surge.conf interval=60 strict=true\n")),(0,a.kt)("h2",{id:"high-battery-consumption"},"High battery consumption?"),(0,a.kt)("p",null,"By default, Surfboard will take over the whole system's network traffic handling."),(0,a.kt)("p",null,"On some ROMs, the battery consumption of other applications due to the network transmission will be counted on Surfboard."),(0,a.kt)("p",null,"Please subjectively perceive whether the battery consumption has increased significantly after turning on Surfboard, instead of only referring to the battery consumption percentage displayed in the system settings."),(0,a.kt)("h2",{id:"how-to-reduce-battery-consumption"},"How to reduce battery consumption?"),(0,a.kt)("p",null,"Please try to use bypass config in the 'tools' tab. Filtering/allowing some app traffic into VPN can reduce battery consumption."),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Use bypass config settings only if you know what are you doing. Incorrect configuration may cause some applications to not work properly"))),(0,a.kt)("h2",{id:"analyzing-network-issues"},"Analyzing network issues"),(0,a.kt)("p",null,"Please check the following entries:"),(0,a.kt)("h3",{id:"whether-protocol-defined-in-profile-is-supported"},"Whether protocol defined in profile is supported"),(0,a.kt)("p",null,"Check the ",(0,a.kt)("a",{parentName:"p",href:"/docs/profile-format/proxy"},"protocol supported list")),(0,a.kt)("h3",{id:"reset-bypass-config"},"Reset bypass config"),(0,a.kt)("p",null,"Uncheck all entries in bypass config"),(0,a.kt)("h3",{id:"try-global-outbound-mode"},"Try global outbound mode"),(0,a.kt)("p",null,"You can change outbound mode in the dashboard UI."),(0,a.kt)("p",null,"If global outbound mode is working, it may be caused by following issue:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"DNS poisoning"),(0,a.kt)("li",{parentName:"ul"},"Profile rules")),(0,a.kt)("h2",{id:"why-not-support-these-surge-standard"},"Why not support these Surge standard"),(0,a.kt)("h3",{id:"mitm"},"MITM"),(0,a.kt)("p",null,"After Android 7.0, ",(0,a.kt)("a",{parentName:"p",href:"https://android-developers.googleblog.com/2016/07/changes-to-trusted-certificate.html"},"Google drop support for trusting custom CAs installed by user"),". MITM is only achieved on rooted devices after that."),(0,a.kt)("h3",{id:"user-agent"},(0,a.kt)("inlineCode",{parentName:"h3"},"USER-AGENT")),(0,a.kt)("p",null,"User-Agent info is only available on plaintext HTTP traffic or by MITM. "),(0,a.kt)("p",null,"Since MITM is not achievable anymore and most of the traffic on the Internet today is based on https,\nsupport for ",(0,a.kt)("inlineCode",{parentName:"p"},"USER-AGENT")," is impossible and unnecessary on Android platform."),(0,a.kt)("h3",{id:"url-regex"},(0,a.kt)("inlineCode",{parentName:"h3"},"URL-REGEX")),(0,a.kt)("p",null,"Just like ",(0,a.kt)("inlineCode",{parentName:"p"},"USER-AGENT")," rule mention above, ",(0,a.kt)("inlineCode",{parentName:"p"},"URL-REGEX")," is only achievable by MITM."),(0,a.kt)("h2",{id:"why-not-support-ssrtrojan-grpcvlessxray"},"Why not support SSR/Trojan gRPC/VLESS/Xray/..."),(0,a.kt)("p",null,"Surfboard has always followed the Surge configuration format as a standard. "),(0,a.kt)("p",null,"Similarly, Surfboard will try its best to support the protocol standards supported by Surge, but will not actively support protocols not supported by Surge to avoid the problem of standard fragmentation."),(0,a.kt)("p",null,"At the same time, I personally believe that blindly supporting as many protocols as possible will not bring additional benefits, but will increase the difficulty of application maintenance."),(0,a.kt)("p",null,"If you want to use a protocol that Surfboard does not support, please consider using other applications that support more complete protocols, such as ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Kr328/ClashForAndroid"},"Clash")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/2dust/v2rayNG"},"V2rayNG"),", they are all very good applications."))}f.isMDXComponent=!0}}]);