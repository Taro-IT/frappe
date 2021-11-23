"use strict";(self.webpackChunkfrappe=self.webpackChunkfrappe||[]).push([[331],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),c=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return r?a.createElement(f,o(o({ref:t},s),{},{components:r})):a.createElement(f,o({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7877:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>l,contentTitle:()=>u,metadata:()=>c,toc:()=>s,default:()=>d});var a=r(7462),n=r(3366),i=(r(7294),r(3905)),o=["components"],l={},u="PP-HA510 Actualizar usuario",c={unversionedId:"architecture/user/update-user",id:"architecture/user/update-user",isDocsHomePage:!1,title:"PP-HA510 Actualizar usuario",description:"Requisito",source:"@site/docs/architecture/user/update-user.md",sourceDirName:"architecture/user",slug:"/architecture/user/update-user",permalink:"/frappe/architecture/user/update-user",editUrl:"https://github.com/Taro-IT/frappe/edit/main/apps/docs/docs/architecture/user/update-user.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"PP-HA505 - Buscar usuarios",permalink:"/frappe/architecture/user/search-user"},next:{title:"PP-G01 - Gu\xeda de daily meetings",permalink:"/frappe/guides/PPG01 - Gu\xeda de daily meetings"}},s=[{value:"Requisito",id:"requisito",children:[],level:2},{value:"Acceptance criteria",id:"acceptance-criteria",children:[],level:2},{value:"Diagramas de dise\xf1o",id:"diagramas-de-dise\xf1o",children:[],level:2},{value:"Artefactos generados",id:"artefactos-generados",children:[],level:2},{value:"Autores",id:"autores",children:[],level:2},{value:"Auditor\xeda",id:"auditor\xeda",children:[],level:2},{value:"Versi\xf3n",id:"versi\xf3n",children:[],level:2}],p={toc:s};function d(e){var t=e.components,l=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pp-ha510-actualizar-usuario"},"PP-HA510 Actualizar usuario"),(0,i.kt)("h2",{id:"requisito"},"Requisito"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'"Yo como administrador quiero poder editar la informaci\xf3n de un usuarios para poder tener un mejor control de los usuarios."')),(0,i.kt)("h2",{id:"acceptance-criteria"},"Acceptance criteria"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Dada")," la p\xe1gina de UserDetails"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Cuando")," un administrador haga click en editar"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Entonces")," mostrar forma de edici\xf3n y guardar los cambios hechos"),(0,i.kt)("h2",{id:"diagramas-de-dise\xf1o"},"Diagramas de dise\xf1o"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Tipo de diagrama"),(0,i.kt)("th",{parentName:"tr",align:null},"Artefactos"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Diagrama de actividad"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{alt:"Solution Chart",src:r(9518).Z,title:"Update User"}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Dise\xf1o de pruebas"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://taro-depto-ti.atlassian.net/l/c/hdtsS1xR"},"PP-TS510"))))),(0,i.kt)("h2",{id:"artefactos-generados"},"Artefactos generados"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Taro-IT/frappe/pull/58"},"Pull Request Backend"))),(0,i.kt)("h2",{id:"autores"},"Autores"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Alonso Vladimir Salvador Camacho")),(0,i.kt)("h2",{id:"auditor\xeda"},"Auditor\xeda"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"})),(0,i.kt)("h2",{id:"versi\xf3n"},"Versi\xf3n"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"1.0 - Creaci\xf3n del documento")))}d.isMDXComponent=!0},9518:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/PP-HA-510-d41dfecc320521eeea69a1f059c82cbe.png"}}]);