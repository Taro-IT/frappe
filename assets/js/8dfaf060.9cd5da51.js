"use strict";(self.webpackChunkfrappe=self.webpackChunkfrappe||[]).push([[14],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=n,k=u["".concat(c,".").concat(m)]||u[m]||p[m]||i;return r?a.createElement(k,o(o({ref:t},d),{},{components:r})):a.createElement(k,o({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3585:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>l,contentTitle:()=>c,metadata:()=>s,toc:()=>d,default:()=>u});var a=r(7462),n=r(3366),i=(r(7294),r(3905)),o=["components"],l={},c="PP-HA99 Listar \xf3rdenes de compra",s={unversionedId:"architecture/order/delete-category",id:"architecture/order/delete-category",isDocsHomePage:!1,title:"PP-HA99 Listar \xf3rdenes de compra",description:"Requisito",source:"@site/docs/architecture/order/delete-category.md",sourceDirName:"architecture/order",slug:"/architecture/order/delete-category",permalink:"/frappe/architecture/order/delete-category",editUrl:"https://github.com/Taro-IT/frappe/edit/main/apps/docs/docs/architecture/order/delete-category.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"PP-HA-302 Borrar categor\xeda",permalink:"/frappe/architecture/category/delete-category"},next:{title:"PP-HA97 - Publish events (emails)",permalink:"/frappe/architecture/email/send"}},d=[{value:"Requisito",id:"requisito",children:[]},{value:"Acceptance criteria",id:"acceptance-criteria",children:[]},{value:"Diagramas de dise\xf1o",id:"diagramas-de-dise\xf1o",children:[]},{value:"Artefactos generados",id:"artefactos-generados",children:[]},{value:"Autores",id:"autores",children:[]},{value:"Auditor\xeda",id:"auditor\xeda",children:[]},{value:"Versi\xf3n",id:"versi\xf3n",children:[]}],p={toc:d};function u(e){var t=e.components,l=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pp-ha99-listar-\xf3rdenes-de-compra"},"PP-HA99 Listar \xf3rdenes de compra"),(0,i.kt)("h2",{id:"requisito"},"Requisito"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Yo como administrador quiero ver las \xf3rdenes de compra de mis clientes para ver el backlog de las \xf3rdenes.")),(0,i.kt)("h2",{id:"acceptance-criteria"},"Acceptance criteria"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Ver las \xf3rdenes de compra")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Dado")," que existan \xf3rdenes de compra en el sistema"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Cuando")," un usuario administrativo haga click en \xd3rdenes"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Entonces")," el sistema despliega el listado de \xf3rdenes de compra."),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"No existen \xf3rdenes de compra")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Dado")," que no existan ordenes de compra en el sistema"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Cuando")," un usuario administrativo haga click en \xd3rdenes"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Entonces")," el sistema despliega mensaje \u201cNo hay \xf3rdenes de compra\u201c."),(0,i.kt)("h2",{id:"diagramas-de-dise\xf1o"},"Diagramas de dise\xf1o"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Tipo de diagrama"),(0,i.kt)("th",{parentName:"tr",align:null},"Artefactos"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Diagrama de actividad"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{alt:"Solution Chart",src:r(9277).Z,title:"List orders"}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Wireframes"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.figma.com/file/MiuSV67DUVkzMeMKJeAhP0/Backoffice?node-id=0%3A1"},"PP-99"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Dise\xf1o de pruebas"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://taro-depto-ti.atlassian.net/wiki/spaces/FC/pages/10977281/FRAPPE-99+Presentar+Data+al+Taller#Pruebas"},"PP-99"))))),(0,i.kt)("h2",{id:"artefactos-generados"},"Artefactos generados"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:"https://github.com/Taro-IT/frappe/pull/31"},"Pull request"))),(0,i.kt)("h2",{id:"autores"},"Autores"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Mauricio Alvarez Mil\xe1n"),(0,i.kt)("li",{parentName:"ul"},"Jorge Arturo S\xe1nchez Arreola")),(0,i.kt)("h2",{id:"auditor\xeda"},"Auditor\xeda"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"})),(0,i.kt)("h2",{id:"versi\xf3n"},"Versi\xf3n"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"1.0 - Creaci\xf3n del documento")))}u.isMDXComponent=!0},9277:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/pp-99-eb795bfcb8461cb704cec77ef6a6040b.png"}}]);