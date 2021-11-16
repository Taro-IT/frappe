"use strict";(self.webpackChunkfrappe=self.webpackChunkfrappe||[]).push([[500],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),u=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=u(r),m=n,f=s["".concat(c,".").concat(m)]||s[m]||p[m]||i;return r?a.createElement(f,o(o({ref:t},d),{},{components:r})):a.createElement(f,o({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},7526:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>l,contentTitle:()=>c,metadata:()=>u,toc:()=>d,default:()=>s});var a=r(7462),n=r(3366),i=(r(7294),r(3905)),o=["components"],l={},c="PP - HA79 - Ver resumen del pedido",u={unversionedId:"architecture/cart/cart",id:"architecture/cart/cart",isDocsHomePage:!1,title:"PP - HA79 - Ver resumen del pedido",description:"Requisito",source:"@site/docs/architecture/cart/cart.md",sourceDirName:"architecture/cart",slug:"/architecture/cart/cart",permalink:"/frappe/architecture/cart/cart",editUrl:"https://github.com/Taro-IT/frappe/edit/main/apps/docs/docs/architecture/cart/cart.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"PP-HA507 Modificar estado de orden de compra",permalink:"/frappe/architecture/order/update-order-status"},next:{title:"PP-HA97 - Publish events (emails)",permalink:"/frappe/architecture/email/send"}},d=[{value:"Requisito",id:"requisito",children:[],level:2},{value:"Acceptance criteria",id:"acceptance-criteria",children:[],level:2},{value:"Diagramas de dise\xf1o",id:"diagramas-de-dise\xf1o",children:[],level:2},{value:"Artefactos generados",id:"artefactos-generados",children:[],level:2},{value:"Autores",id:"autores",children:[],level:2},{value:"Auditor\xeda",id:"auditor\xeda",children:[],level:2},{value:"Versi\xf3n",id:"versi\xf3n",children:[],level:2}],p={toc:d};function s(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pp---ha79---ver-resumen-del-pedido"},"PP - HA79 - Ver resumen del pedido"),(0,i.kt)("h2",{id:"requisito"},"Requisito"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'"Yo como usuario quiero entrar a mi carrito para ver el resumen del pedido".')),(0,i.kt)("h2",{id:"acceptance-criteria"},"Acceptance criteria"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Ver productos en el carrito"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Dado que hay productos agregados en el carrito\nCuando el usuario de clic en su carrito\nEntonces podr\xe1 ver todos los productos que agreg\xf3"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"No hay productos en el carrito"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Dado que no hay productos en el carrito\nCuando el usuario de clic en su carrito\nEntonces podr\xe1 ver un mensaje que le indica que su carrito est\xe1 vac\xedo")))),(0,i.kt)("h2",{id:"diagramas-de-dise\xf1o"},"Diagramas de dise\xf1o"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Diagrama de flujo"),(0,i.kt)("th",{parentName:"tr",align:null},"Artefactos de dise\xf1o"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Wireframe"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.figma.com/file/MiuSV67DUVkzMeMKJeAhP0/Untitled?node-id=0%3A1"},"Wireframe en figma"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Casos de prueba"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://taro-depto-ti.atlassian.net/wiki/spaces/FC/pages/17465345/FRAPP+-+79+Yo+como+usuario+quieto+entrar+a+mi+carrito+para+ver+la+orden+del+pedido"},"Hoja de spreadsheets con los casos de prueba."))))),(0,i.kt)("h2",{id:"artefactos-generados"},"Artefactos generados"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:"https://github.com/Taro-IT/frappe/pull/45"},"Pull request"))),(0,i.kt)("h2",{id:"autores"},"Autores"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Iv\xe1n D\xedaz")),(0,i.kt)("h2",{id:"auditor\xeda"},"Auditor\xeda"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"})),(0,i.kt)("h2",{id:"versi\xf3n"},"Versi\xf3n"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"1.0")))}s.isMDXComponent=!0}}]);