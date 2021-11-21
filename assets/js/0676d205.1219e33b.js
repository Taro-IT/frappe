"use strict";(self.webpackChunkfrappe=self.webpackChunkfrappe||[]).push([[560],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(a),m=n,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return a?r.createElement(f,l(l({ref:t},u),{},{components:a})):r.createElement(f,l({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4265:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>o,contentTitle:()=>c,metadata:()=>s,toc:()=>u,default:()=>d});var r=a(7462),n=a(3366),i=(a(7294),a(3905)),l=["components"],o={},c="PP-HA68 - List materials",s={unversionedId:"architecture/material/list",id:"architecture/material/list",isDocsHomePage:!1,title:"PP-HA68 - List materials",description:"Requisito",source:"@site/docs/architecture/material/list.md",sourceDirName:"architecture/material",slug:"/architecture/material/list",permalink:"/frappe/architecture/material/list",editUrl:"https://github.com/Taro-IT/frappe/edit/main/apps/docs/docs/architecture/material/list.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"PP-HA68 - Delete material",permalink:"/frappe/architecture/material/delete"},next:{title:"PP-HA67 - Update material",permalink:"/frappe/architecture/material/update"}},u=[{value:"Requisito",id:"requisito",children:[],level:2},{value:"Acceptance criteria",id:"acceptance-criteria",children:[],level:2},{value:"Diagramas",id:"diagramas",children:[],level:2},{value:"Documentaci\xf3n API",id:"documentaci\xf3n-api",children:[{value:"GET List Materials",id:"get-list-materials",children:[],level:3}],level:2},{value:"Artefactos generados",id:"artefactos-generados",children:[],level:2},{value:"Autores",id:"autores",children:[],level:2},{value:"Auditor\xeda",id:"auditor\xeda",children:[],level:2},{value:"Versi\xf3n",id:"versi\xf3n",children:[],level:2}],p={toc:u};function d(e){var t=e.components,o=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pp-ha68---list-materials"},"PP-HA68 - List materials"),(0,i.kt)("h2",{id:"requisito"},"Requisito"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Yo como administrador quiero ver las opciones de customizaci\xf3n disponibles para tener una idea de lo que le ofrezco a mis clientes.")),(0,i.kt)("h2",{id:"acceptance-criteria"},"Acceptance criteria"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Dado un usuario")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Cuando el usuario ingrese a la pantalla de materiales")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Entonces mostrar los materiales disponibles.")),(0,i.kt)("h2",{id:"diagramas"},"Diagramas"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Diagrama"),(0,i.kt)("th",{parentName:"tr",align:null},"Artefactos"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Diagrama de actividad"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{alt:"Diagrama",src:a(649).Z}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Wireframe"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{alt:"Wireframe de read materials",src:a(851).Z}))))),(0,i.kt)("h2",{id:"documentaci\xf3n-api"},"Documentaci\xf3n API"),(0,i.kt)("h3",{id:"get-list-materials"},"GET List Materials"),(0,i.kt)("p",null,"  ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/api/material/")),(0,i.kt)("p",null,"  ",(0,i.kt)("strong",{parentName:"p"},"Outputs")),(0,i.kt)("p",null,"  ",(0,i.kt)("em",{parentName:"p"},"Default:")," Un arreglo con objetos que representan los materiales"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'  {\n  "result": [\n      {\n          "id": "d2e3ded7-5b4e-4743-9dc1-e71c079be0f4",\n          "name": "Cuero rojo",\n          "image": "https://cinicastaticfiles.blob.core.windows.net/uploads/55d40f61-b485-4d12-9862-e56c7b6d3f36.jpeg",\n          "isActive": true\n      },\n      {\n          "id": "f026636c-a8da-4837-93fb-60982e678fed",\n          "name": "Piel amarilla",\n          "image": "https://cinicastaticfiles.blob.core.windows.net/uploads/979dddb0-b081-4829-8cfd-0d1e1dd8a9d4.jpeg",\n          "isActive": true\n      }\n    ]\n  }\n  \n')),(0,i.kt)("h2",{id:"artefactos-generados"},"Artefactos generados"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Taro-IT/frappe/pull/53/"},"Pull Request"))),(0,i.kt)("h2",{id:"autores"},"Autores"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Karla Daniela Romero P\xe9rez")),(0,i.kt)("h2",{id:"auditor\xeda"},"Auditor\xeda"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Jan Limpens Gutierrez")),(0,i.kt)("h2",{id:"versi\xf3n"},"Versi\xf3n"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"1.0 - Creaci\xf3n del documento"),(0,i.kt)("li",{parentName:"ul"},"1.1 - Agregar im\xe1genes a los artefactos generados")))}d.isMDXComponent=!0},649:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/list_activity_diagram-4348afa370042ccee7199a4cedffefe9.png"},851:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/list_wireframe-0d75d7a8700acb86ed6ad99d20416928.png"}}]);