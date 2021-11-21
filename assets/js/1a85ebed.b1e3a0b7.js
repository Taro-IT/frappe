"use strict";(self.webpackChunkfrappe=self.webpackChunkfrappe||[]).push([[238],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),u=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=u(a),d=r,k=s["".concat(p,".").concat(d)]||s[d]||m[d]||i;return a?n.createElement(k,l(l({ref:t},c),{},{components:a})):n.createElement(k,l({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},6739:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>o,contentTitle:()=>p,metadata:()=>u,toc:()=>c,default:()=>s});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),l=["components"],o={title:"Ambiente de Producci\xf3n",sidebar_position:2},p="Ambiente de Producci\xf3n",u={unversionedId:"architecture/setup/production-environment",id:"architecture/setup/production-environment",isDocsHomePage:!1,title:"Ambiente de Producci\xf3n",description:"Tecnolog\xedas",source:"@site/docs/architecture/setup/production-environment.md",sourceDirName:"architecture/setup",slug:"/architecture/setup/production-environment",permalink:"/frappe/architecture/setup/production-environment",editUrl:"https://github.com/Taro-IT/frappe/edit/main/apps/docs/docs/architecture/setup/production-environment.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Ambiente de Producci\xf3n",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Ambiente Local",permalink:"/frappe/architecture/setup/environment-setup"},next:{title:"Comandos \xfatiles",permalink:"/frappe/architecture/setup/useful-commands"}},c=[{value:"Tecnolog\xedas",id:"tecnolog\xedas",children:[],level:2}],m={toc:c};function s(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ambiente-de-producci\xf3n"},"Ambiente de Producci\xf3n"),(0,i.kt)("h2",{id:"tecnolog\xedas"},"Tecnolog\xedas"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Firebase Hosting - Alojamiento de Front-End"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\xbfPor qu\xe9?",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Servicio gratuito hasta 10 GB y con 360 MB al d\xeda de data transfer"),(0,i.kt)("li",{parentName:"ul"},"Si se opta por el plan de prepago son $ 0.0026 por GB de almacenamiento y $ 0.15 por GB de transferencia de datos"),(0,i.kt)("li",{parentName:"ul"},"Ambos planes (gratuito y de prepago) incluyen un dominio custom y SSL"),(0,i.kt)("li",{parentName:"ul"},"Sencilla implementaci\xf3n"),(0,i.kt)("li",{parentName:"ul"},"Se puede automatizar su despliegue a producci\xf3n"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Firebase Auth"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\xbfPor qu\xe9?",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Plan gratuito con hasta 10,000 autenticaciones al mes (v\xeda telef\xf3nica) internacionalmente"),(0,i.kt)("li",{parentName:"ul"},'Permite tanto autenticaci\xf3n telef\xf3nica como "otros servicios de autenticaci\xf3n"'),(0,i.kt)("li",{parentName:"ul"},"Implementaci\xf3n r\xe1pida"),(0,i.kt)("li",{parentName:"ul"},"Garant\xedas de seguridad"),(0,i.kt)("li",{parentName:"ul"},"Es parte de la plataforma de Firebase"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Microsoft Azure"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"App Service",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\xbfPor qu\xe9?",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Facilidad de uso"),(0,i.kt)("li",{parentName:"ul"},"Se encarga de la actualizaci\xf3n de dependencias"),(0,i.kt)("li",{parentName:"ul"},"Se puede automatizar el despliegue"))))),(0,i.kt)("li",{parentName:"ul"},"Azure Cosmos DB",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Precios flexibles/baratos"),(0,i.kt)("li",{parentName:"ul"},"Soporte para Mongo DB"),(0,i.kt)("li",{parentName:"ul"},"Actualizaciones de seguridad"),(0,i.kt)("li",{parentName:"ul"},"Copias peri\xf3dicas de respaldos"),(0,i.kt)("li",{parentName:"ul"},"Escalabilidad"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Factorum"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Es el sistema contratado actualmente por la socia"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Motor de pagos"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Stripe",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Pros",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"La tarifa fija por cobro exitoso no incluye el IVA"),(0,i.kt)("li",{parentName:"ul"},"Facilita la expansi\xf3n al extranjero con muchos m\xe9todos de pago"),(0,i.kt)("li",{parentName:"ul"},"F\xe1cil implementaci\xf3n y buena documentaci\xf3n"),(0,i.kt)("li",{parentName:"ul"},"Proporciona herramientas de an\xe1lisis"),(0,i.kt)("li",{parentName:"ul"},"Muy buena reputaci\xf3n"))),(0,i.kt)("li",{parentName:"ul"},"Cons",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"El porcentaje de comisi\xf3n es mayor que con Conekta"),(0,i.kt)("li",{parentName:"ul"},"No tiene soporte para transferencias SEPI"),(0,i.kt)("li",{parentName:"ul"},"La documentaci\xf3n no esta traducida al espa\xf1ol al 100 %"))))),(0,i.kt)("li",{parentName:"ul"},"Conekta",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Pros",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Mejor porcentaje de comisi\xf3n"),(0,i.kt)("li",{parentName:"ul"},"Buena documentaci\xf3n"),(0,i.kt)("li",{parentName:"ul"},"Permite los pagos por transferencia SEPI"))),(0,i.kt)("li",{parentName:"ul"},"Cons",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"No facilita tanto el crecimiento internacional"),(0,i.kt)("li",{parentName:"ul"},"No hay muchas empresas conocidas que lo usen"))))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Skydropx"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Implementaci\xf3n gratuita"),(0,i.kt)("li",{parentName:"ul"},"Ofrece retornos"),(0,i.kt)("li",{parentName:"ul"},"Ofrece herramientas de informes y anal\xedtica"),(0,i.kt)("li",{parentName:"ul"},"Bien documentada y muy usada a nivel nacional"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"SendGrid"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Las necesidades de negocio se cubren con el plan gratuito de la aplicaci\xf3n"),(0,i.kt)("li",{parentName:"ul"},"Bien documentado"),(0,i.kt)("li",{parentName:"ul"},"Tiene un editor de templates de correo"),(0,i.kt)("li",{parentName:"ul"},"Provee anal\xedtica"),(0,i.kt)("li",{parentName:"ul"},'No llega a "spam"'),(0,i.kt)("li",{parentName:"ul"},"Tiene correo profesional con dominio")))))}s.isMDXComponent=!0}}]);