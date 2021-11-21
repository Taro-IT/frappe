"use strict";(self.webpackChunkfrappe=self.webpackChunkfrappe||[]).push([[685],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),d=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=d(e.components);return a.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},s=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=d(t),m=n,f=s["".concat(l,".").concat(m)]||s[m]||p[m]||i;return t?a.createElement(f,o(o({ref:r},u),{},{components:t})):a.createElement(f,o({ref:r},u))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=s;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var d=2;d<i;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},2212:(e,r,t)=>{t.r(r),t.d(r,{frontMatter:()=>c,contentTitle:()=>l,metadata:()=>d,toc:()=>u,default:()=>s});var a=t(7462),n=t(3366),i=(t(7294),t(3905)),o=["components"],c={},l="PP-HA91 - Consultar \xf3rdenes de compra",d={unversionedId:"architecture/order/consult-orders",id:"architecture/order/consult-orders",isDocsHomePage:!1,title:"PP-HA91 - Consultar \xf3rdenes de compra",description:"Requisito",source:"@site/docs/architecture/order/consult-orders.md",sourceDirName:"architecture/order",slug:"/architecture/order/consult-orders",permalink:"/frappe/architecture/order/consult-orders",editUrl:"https://github.com/Taro-IT/frappe/edit/main/apps/docs/docs/architecture/order/consult-orders.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"PP-HA-302 Borrar categor\xeda",permalink:"/frappe/architecture/category/delete-category"},next:{title:"PP-HA85 Ver PDFs de \xf3rdenes de compra",permalink:"/frappe/architecture/order/generate-pdfs"}},u=[{value:"Requisito",id:"requisito",children:[],level:2},{value:"Acceptance criteria",id:"acceptance-criteria",children:[],level:2},{value:"Diagramas",id:"diagramas",children:[],level:2},{value:"Architecture Spike",id:"architecture-spike",children:[],level:2},{value:"Artefactos generados",id:"artefactos-generados",children:[],level:2},{value:"Autores",id:"autores",children:[],level:2},{value:"Auditor\xeda",id:"auditor\xeda",children:[],level:2},{value:"Versi\xf3n",id:"versi\xf3n",children:[],level:2}],p={toc:u};function s(e){var r=e.components,c=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,c,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pp-ha91---consultar-\xf3rdenes-de-compra"},"PP-HA91 - Consultar \xf3rdenes de compra"),(0,i.kt)("h2",{id:"requisito"},"Requisito"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Yo como administrador quiero consultar las \xf3rdenes de compra que tengo para ver su estatus, resumen y poder enviarlos.")),(0,i.kt)("h2",{id:"acceptance-criteria"},"Acceptance criteria"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Dada una lista de \xf3rdenes de compra realizadas, cuando el usuario administrador de clic en una en espec\xedfico, entonces podr\xe1 ver su detalle.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Dada una orden de compra en progreso, cuando se actualize su estado a \u201cListo para enviar\u201d, entonces el usuario administrador podr\xe1 ver el cambio en el detalle y se activar\xe1 el bot\xf3n para imprimir la gu\xeda y poder mandar el pedido."))),(0,i.kt)("h2",{id:"diagramas"},"Diagramas"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Diagrama"),(0,i.kt)("th",{parentName:"tr",align:null},"Artefactos"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://lucid.app/lucidchart/80b0ae20-abab-4483-b7b3-e84da4d89fcc/edit?viewport_loc=-193%2C-36%2C1646%2C745%2C0_0&invitationId=inv_a0fc9cbc-245e-4379-a6e3-c117b0bec304"},"Diagrama de actividad")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{alt:"Diagrama",src:t(6859).Z}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.figma.com/file/MiuSV67DUVkzMeMKJeAhP0/Backoffice?node-id=0%3A1"},"Mockup")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{alt:"Mockup",src:t(2672).Z}))))),(0,i.kt)("h2",{id:"architecture-spike"},"Architecture Spike"),(0,i.kt)("h2",{id:"artefactos-generados"},"Artefactos generados"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"})),(0,i.kt)("h2",{id:"autores"},"Autores"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Eric Buitr\xf3n L\xf3pez")),(0,i.kt)("h2",{id:"auditor\xeda"},"Auditor\xeda"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"})),(0,i.kt)("h2",{id:"versi\xf3n"},"Versi\xf3n"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"1.0 - Creaci\xf3n del documento")))}s.isMDXComponent=!0},6859:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/PP-HA91-1e574e693c13e2f9267c6e7379bb4d50.png"},2672:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/PP-WF91-8591549070f05cfc194f4f95a17b5db2.png"}}]);