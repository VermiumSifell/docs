(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[606],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,m=d["".concat(u,".").concat(f)]||d[f]||c[f]||a;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1632:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),l=["components"],i={sidebar_position:3},u="Translating",s={unversionedId:"Contributing/translate",id:"Contributing/translate",isDocsHomePage:!1,title:"Translating",description:"You can speak your mother tongue?",source:"@site/docs/Contributing/translate.md",sourceDirName:"Contributing",slug:"/Contributing/translate",permalink:"/docs/Contributing/translate",editUrl:"https://github.com/ControlPanel-gg/docs/tree/main/docs/docs/Contributing/translate.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Donating",permalink:"/docs/Contributing/donating"},next:{title:"Products",permalink:"/docs/Guides/products"}},p=[{value:"How to help",id:"how-to-help",children:[]},{value:"Translators",id:"translators",children:[]}],c={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"translating"},"Translating"),(0,a.kt)("p",null,"You can speak your mother tongue?",(0,a.kt)("br",null),"\nYou understand a certain language very well?",(0,a.kt)("br",null),"\nThen we need exactly ",(0,a.kt)("strong",{parentName:"p"},"you for our translator team!"),(0,a.kt)("br",null)),(0,a.kt)("p",null,"After a long wait, the controlpanel has now been equipped with a translation system.",(0,a.kt)("br",null)),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Now we need people who help us translate!"),(0,a.kt)("br",null)),(0,a.kt)("h2",{id:"how-to-help"},"How to help"),(0,a.kt)("p",null,"The Translation list can be found here: ",(0,a.kt)("br",null),"\n",(0,a.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/ControlPanel-gg/dashboard/development/resources/lang/en.json"},"https://raw.githubusercontent.com/ControlPanel-gg/dashboard/development/resources/lang/en.json")),(0,a.kt)("p",null,"Its simple to understand. The syntax goes like this ",(0,a.kt)("br",null),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"'English-Phrase' : 'Your-Language-Translation',"),(0,a.kt)("br",null)),(0,a.kt)("p",null,"You first need a JSON-File named after your language's Language-Code ",(0,a.kt)("br",null),"\nThese can be taken from here ",(0,a.kt)("br",null),"\n",(0,a.kt)("a",{parentName:"p",href:"https://www.loc.gov/standards/iso639-2/php/code_list.php"},"https://www.loc.gov/standards/iso639-2/php/code_list.php")),(0,a.kt)("p",null,"Example:\n",(0,a.kt)("inlineCode",{parentName:"p"},"German = de"),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"Dutch = nl"),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"French = fr")),(0,a.kt)("p",null,'Copy the Contents of the above linked "en.json" and use it as a template for your language and just translate! ',(0,a.kt)("br",null),"\nIts very easy and everyone can help us translate our panel!",(0,a.kt)("br",null)),(0,a.kt)("h2",{id:"translators"},"Translators"),(0,a.kt)("p",null," \ud83c\udde9\ud83c\uddea German: ",(0,a.kt)("strong",{parentName:"p"},"1Day2Die"),(0,a.kt)("br",null)))}d.isMDXComponent=!0}}]);