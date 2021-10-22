"use strict";(self.webpackChunkfrappe=self.webpackChunkfrappe||[]).push([[932],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9443:(e,t,n)=>{n.d(t,{Z:()=>r});const r=(0,n(7294).createContext)(void 0)},669:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>b,default:()=>k,frontMatter:()=>v,metadata:()=>g,toc:()=>h});var r=n(7462),a=n(3366),o=n(7294),l=n(3905),i=n(9443);const c=function(){var e=(0,o.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var u=n(6010);const s="tabItem_1uMI",p="tabItemActive_2DSg";const d=function(e){var t,n=e.lazy,r=e.block,a=e.defaultValue,l=e.values,i=e.groupId,d=e.className,m=o.Children.toArray(e.children),f=null!=l?l:m.map((function(e){return{value:e.props.value,label:e.props.label}})),v=null!=a?a:null==(t=m.find((function(e){return e.props.default})))?void 0:t.props.value,b=c(),g=b.tabGroupChoices,h=b.setTabGroupChoices,y=(0,o.useState)(v),k=y[0],O=y[1],w=[];if(null!=i){var T=g[i];null!=T&&T!==k&&f.some((function(e){return e.value===T}))&&O(T)}var j=function(e){var t=e.currentTarget,n=w.indexOf(t),r=f[n].value;O(r),null!=i&&(h(i,r),setTimeout((function(){var e,n,r,a,o,l,i,c;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,l=window,i=l.innerHeight,c=l.innerWidth,n>=0&&o<=c&&a<=i&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(p),setTimeout((function(){return t.classList.remove(p)}),2e3))}),150))},x=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=w.indexOf(e.target)+1;n=w[r]||w[0];break;case"ArrowLeft":var a=w.indexOf(e.target)-1;n=w[a]||w[w.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":r},d)},f.map((function(e){var t=e.value,n=e.label;return o.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,u.Z)("tabs__item",s,{"tabs__item--active":k===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:x,onFocus:j,onClick:j},null!=n?n:t)}))),n?(0,o.cloneElement)(m.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))};const m=function(e){var t=e.children,n=e.hidden,r=e.className;return o.createElement("div",{role:"tabpanel",hidden:n,className:r},t)};var f=["components"],v={title:"Ambiente Local",sidebar_position:1},b="Configuraci\xf3n del ambiente local",g={unversionedId:"architecture/setup/environment-setup",id:"architecture/setup/environment-setup",isDocsHomePage:!1,title:"Ambiente Local",description:"Tecnolog\xedas",source:"@site/docs/architecture/setup/environment-setup.md",sourceDirName:"architecture/setup",slug:"/architecture/setup/environment-setup",permalink:"/frappe/architecture/setup/environment-setup",editUrl:"https://github.com/Taro-IT/frappe/edit/main/apps/docs/docs/architecture/setup/environment-setup.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Ambiente Local",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Estructura de archivos",permalink:"/frappe/architecture/file-structure"},next:{title:"Ambiente de Producci\xf3n",permalink:"/frappe/architecture/setup/production-environment"}},h=[{value:"Tecnolog\xedas",id:"tecnolog\xedas",children:[]},{value:"Instalaci\xf3n",id:"instalaci\xf3n",children:[{value:"Node",id:"node",children:[]},{value:"MongoDB (Opcional)",id:"mongodb-opcional",children:[]}]}],y={toc:h};function k(e){var t=e.components,n=(0,a.Z)(e,f);return(0,l.kt)("wrapper",(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"configuraci\xf3n-del-ambiente-local"},"Configuraci\xf3n del ambiente local"),(0,l.kt)("h2",{id:"tecnolog\xedas"},"Tecnolog\xedas"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Node v14.17.6"),(0,l.kt)("li",{parentName:"ul"},"MongoDB v4.4"),(0,l.kt)("li",{parentName:"ul"},"Docker (Opcional)")),(0,l.kt)("h2",{id:"instalaci\xf3n"},"Instalaci\xf3n"),(0,l.kt)("p",null,"Los siguiente los pasos para instalar las tecnolog\xedas usadas para el desarrollo del proyecto:"),(0,l.kt)("h3",{id:"node"},"Node"),(0,l.kt)(d,{mdxType:"Tabs"},(0,l.kt)(m,{value:"download",label:"Ejecutable",default:!0,mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",null," Acceder a las opciones de descarga del sitio oficial de ",(0,l.kt)("a",{href:"https://nodejs.org/download/release/v14.17.6/"}," nodejs ")," "),(0,l.kt)("li",null," Seleccionar el ejecutable correspondiente para el sistema operativo en el que estes "),(0,l.kt)("li",null," Iniciar el ejecutable una vez termine la descarga "))),(0,l.kt)(m,{value:"nvm",label:"NVM",mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",null," ",(0,l.kt)("a",{href:"https://github.com/nvm-sh/nvm#installing-and-updating"}," Gu\xeda de instalaci\xf3n de NVM ")," "),(0,l.kt)("li",null," En una terminal ejecuta el comando ",(0,l.kt)("code",{class:"language-bash"}," nvm install v14.17.6 ")," "),(0,l.kt)("li",null," Crear un archivo .nvmrc en a nivel root del repositorio "),(0,l.kt)("li",null," Ejecuta el comando ",(0,l.kt)("code",{class:"language-bash"}," nvm use")," "," "," a nivel del archivo .nvmrc ")))),(0,l.kt)("h3",{id:"mongodb-opcional"},"MongoDB (Opcional)"),(0,l.kt)("p",null,"Instalar solo en caso de que se necesite tener una versi\xf3n local de MongoDB en tu ambiente de desarrollo de lo contrario usar la base de datos desplegada en ",(0,l.kt)("a",{href:"https://www.mongodb.com"}," MongoDB Atlas"),"."),(0,l.kt)(d,{mdxType:"Tabs"},(0,l.kt)(m,{value:"download",label:"Ejecutable",default:!0,mdxType:"TabItem"}),(0,l.kt)(m,{value:"docker",label:"Docker",mdxType:"TabItem"})))}k.isMDXComponent=!0},6010:(e,t,n)=>{function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:()=>a})}}]);