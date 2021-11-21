"use strict";(self.webpackChunkfrappe=self.webpackChunkfrappe||[]).push([[690],{3905:(e,a,r)=>{r.d(a,{Zo:()=>p,kt:()=>u});var t=r(7294);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function o(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?o(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function s(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=t.createContext({}),c=function(e){var a=t.useContext(l),r=a;return e&&(r="function"==typeof e?e(a):i(i({},a),e)),r},p=function(e){var a=c(e.components);return t.createElement(l.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),u=n,g=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return r?t.createElement(g,i(i({ref:a},p),{},{components:r})):t.createElement(g,i({ref:a},p))}));function u(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4594:(e,a,r)=>{r.r(a),r.d(a,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>c,toc:()=>p,default:()=>d});var t=r(7462),n=r(3366),o=(r(7294),r(3905)),i=["components"],s={},l="PP-G02 - Gu\xeda para hacer las librer\xedas de Backend",c={unversionedId:"guides/PPG02 - Gu\xeda para hacer un caso de uso en backend",id:"guides/PPG02 - Gu\xeda para hacer un caso de uso en backend",isDocsHomePage:!1,title:"PP-G02 - Gu\xeda para hacer las librer\xedas de Backend",description:"Objetivo(s)",source:"@site/docs/guides/PPG02 - Gu\xeda para hacer un caso de uso en backend.md",sourceDirName:"guides",slug:"/guides/PPG02 - Gu\xeda para hacer un caso de uso en backend",permalink:"/frappe/guides/PPG02 - Gu\xeda para hacer un caso de uso en backend",editUrl:"https://github.com/Taro-IT/frappe/edit/main/apps/docs/docs/guides/PPG02 - Gu\xeda para hacer un caso de uso en backend.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"PP-G01 - Gu\xeda de daily meetings",permalink:"/frappe/guides/PPG01 - Gu\xeda de daily meetings"},next:{title:"G03 - Gu\xeda para adquirir conocimiento t\xe9cnico",permalink:"/frappe/guides/PPG03-Guia-adquirir-conocimiento"}},p=[{value:"Objetivo(s)",id:"objetivos",children:[],level:2},{value:"Pre-requisitos",id:"pre-requisitos",children:[],level:2},{value:"Pasos a seguir",id:"pasos-a-seguir",children:[{value:"1 - Capa Domain",id:"1---capa-domain",children:[{value:"<strong>Custom errors</strong>",id:"custom-errors",children:[],level:4}],level:3},{value:"2 - Capa Persistence",id:"2---capa-persistence",children:[],level:3},{value:"3 - Capa Application",id:"3---capa-application",children:[],level:3}],level:2},{value:"Salidas",id:"salidas",children:[],level:2},{value:"Autores",id:"autores",children:[],level:2},{value:"Auditor\xeda",id:"auditor\xeda",children:[],level:2},{value:"Versi\xf3n 1.0",id:"versi\xf3n-10",children:[],level:2}],m={toc:p};function d(e){var a=e.components,s=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},m,s,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"pp-g02---gu\xeda-para-hacer-las-librer\xedas-de-backend"},"PP-G02 - Gu\xeda para hacer las librer\xedas de Backend"),(0,o.kt)("h2",{id:"objetivos"},"Objetivo(s)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Orientar en la manera en la que se programa un caso de uso de creaci\xf3n en el backend")),(0,o.kt)("h2",{id:"pre-requisitos"},"Pre-requisitos"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Tener instalado el repositorio y poder correrlo"),(0,o.kt)("li",{parentName:"ul"},"Haber leido ",(0,o.kt)("a",{parentName:"li",href:"../architecture/file-structure"},"la estructura de archivos"))),(0,o.kt)("h2",{id:"pasos-a-seguir"},"Pasos a seguir"),(0,o.kt)("h3",{id:"1---capa-domain"},"1 - Capa Domain"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Para crear una librer\xeda de dominio debes correr el comando\n",(0,o.kt)("inlineCode",{parentName:"p"},"nx g @nrwl/node:lib <lib-name/domain>")),(0,o.kt)("p",{parentName:"li"},"   El comando anterior crear\xe1  la siguiente estructura de archivos\n",(0,o.kt)("img",{alt:"domain basic structure",src:r(1232).Z}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Debes borrar la carpeta ",(0,o.kt)("inlineCode",{parentName:"p"},"lib"),"y el contenido del archivo index.ts. ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Crea la carpeta ",(0,o.kt)("inlineCode",{parentName:"p"},"model"),", donde definir\xe1s los campos de tu entidad de la base de datos.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Crea 1 archivo con el nombre de tu caso de uso, para este ejemplo usaremos ",(0,o.kt)("strong",{parentName:"p"},"Category.ts"),", el cu\xe1l contendr\xe1 2 m\xe9todos:"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"fromPrimitives:\nEste m\xe9todo recibe categoryPrimitives, y devuelve una nueva categor\xeda"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"static fromPrimitives(primitives: CategoryPrimitives): Category {\n  return new Category(new CategoryId(primitives.id), new CategoryName(primitives.name));\n}\n\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"toPrimitives:\nDevuelve los datos primitivos de un caso de uso."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"toPrimitives(): CategoryPrimitives {\n  return {\n    id: this.id.value,\n    name: this.name.value\n  };\n}\n")),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Recuerda que primitives hace referencia a los tipos de dato primitivos, es decir, strings, numbers, etc. Y los Value Objects son una representaci\xf3n espec\xedfica de un primitivo."))))),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Crea 1 archivo para cada campo de tu entidad, con el nombre ",(0,o.kt)("inlineCode",{parentName:"p"},"<CasoDeUso><NombreDelCampo>.ts"),", por ejemplo, CategoryId.ts\nCada uno de estos archivos debe ser una clase que extiende del value object de su primitive, por ejemplo:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-typescript"}," // CategoryId.ts\n import { Uuid } from '@frappe/common/value-object';\n\n export class CategoryId extends Uuid {}\n\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Crea un archivo ",(0,o.kt)("inlineCode",{parentName:"p"},"index.ts")," al nivel de la carpeta ",(0,o.kt)("strong",{parentName:"p"},"model"),", el cual debe exportar cada archivo que hayas creado. Por ejemplo:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"  export { Category } from './Category';\n  export { CategoryId } from './CategoryId';\n  export { CategoryName } from './CategoryName';\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Crea una carpeta ",(0,o.kt)("strong",{parentName:"p"},"utils")," al nivel de src, la cual contendr\xe1 3 archivos"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"CasoDeUsoPrimitives.ts"),(0,o.kt)("p",{parentName:"li"},"En nuestro caso se llamar\xe1 ",(0,o.kt)("inlineCode",{parentName:"p"},"CategoryPrimitives.ts"),", y debe definir una interfaz que tenga todos los primitivos que confirman a tu entidad. Por ejemplo:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"  export interface CategoryPrimitives {\n    readonly id: string;\n    readonly name: string;\n  }\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"ModuloRepository.ts"),(0,o.kt)("p",{parentName:"li"},"  En este caso se llamar\xe1 ",(0,o.kt)("inlineCode",{parentName:"p"},"CategoryRepository.ts"),". Este archivo define una interfaz con los headers para los m\xe9todos que se implementar\xe1n en el repositorio de mongo, en el paso siguiente. "),(0,o.kt)("p",{parentName:"li"},'  En t\xe9rminos m\xe1s generales, un repository representa la definici\xf3n del "Contrato" para acceso de datos o integraci\xf3n para un servicio externo I/O.'),(0,o.kt)("p",{parentName:"li"},"  Un ejemplo puede ser:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"  import { Category, CategoryId, CategoryName } from '../model';\n  import { Nullable } from '@frappe/common/utils';\n\n  export interface CategoryRepository {\n    save(category: Category): Promise<void>;\n    findByName(name: CategoryName): Promise<Nullable<Category>>;\n  }\n\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"index.ts"),(0,o.kt)("p",{parentName:"li"},"Aqu\xed debes exportar los archivos que creaste dentro de la carpeta. Debe verse como:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"  export type { CategoryPrimitives } from './CategoryPrimitives';\n  export type { CategoryRepository } from './CategoryRepository';\n\n")),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"  En esta capa tambi\xe9n crear\xe1s los Custom Errors que puedas necesitar cuando crees tus m\xe9todos en la capa de aplicaci\xf3n"))))),(0,o.kt)("ol",{start:8},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"En el index.ts al nivel de domain, exporta todas las carpetas que creaste."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export * from './model';\nexport * from './utils';\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Verifica que la estructura de estas carpetas se vea as\xed\n",(0,o.kt)("img",{alt:"domain final structure",src:r(297).Z})))),(0,o.kt)("h4",{id:"custom-errors"},(0,o.kt)("strong",{parentName:"h4"},"Custom errors")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Los errores custom sirven para validar ciertos casos, para crearlos debes hacer una carpeta en la capa de dominio llamada ",(0,o.kt)("inlineCode",{parentName:"li"},"error")),(0,o.kt)("li",{parentName:"ol"},"Crea un archivo con el nombre del error, por ejemplo ",(0,o.kt)("inlineCode",{parentName:"li"},"CategoryAlreadyExists.ts"),". Este archivo contendr\xe1 una clase con su constructor, el cu\xe1l tendr\xe1 el texto del error, por ejemplo:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export class CategoryAlreadyExists extends Error {\n  // El constructor recibe el nombre de la categoria que ya existe. Un error puede recibir cualquier par\xe1metro para hacer el texto\n  constructor(name: string) {\n    // Llamas al super y ah\xed mandas el mensaje que quieres que se despliegue\n    super(`The category with name '${name}' already exists.`);\n  }\n}\n\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Crea un archivo ",(0,o.kt)("inlineCode",{parentName:"li"},"index.ts")," y exporta tus errores. Por ejemplo:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export { CategoryAlreadyExists } from './CategoryAlreadyExists';\n\n")),(0,o.kt)("h3",{id:"2---capa-persistence"},"2 - Capa Persistence"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Para crear una librer\xeda de persistence debes correr el comando\n",(0,o.kt)("inlineCode",{parentName:"p"},"nx g @nrwl/node:lib <lib-name/persistence/mongodb>")),(0,o.kt)("p",{parentName:"li"},"   Cambia la palabra mongodb si est\xe1s conectandote a otro servicio externo. En esta gu\xeda nos conectaremos a mongodb."),(0,o.kt)("p",{parentName:"li"},"   El comando anterior crear\xe1  la siguiente estructura de archivos\n",(0,o.kt)("img",{alt:"persistence basic structure",src:r(3420).Z}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Debes borrar la carpeta ",(0,o.kt)("inlineCode",{parentName:"p"},"lib"),"y el contenido del archivo index.ts. ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Despu\xe9s crea una carpeta que se llame ",(0,o.kt)("inlineCode",{parentName:"p"},"utils")," y crea un archivo que se llame ",(0,o.kt)("inlineCode",{parentName:"p"},"Mongo<NombreLib>Repository.ts"),", adem\xe1s de un archivo llamado ",(0,o.kt)("inlineCode",{parentName:"p"},"index.ts"),'. En el Repository deber\xe1s implementar todos los "contratos" que definiste en la capa de dominio.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"En el archivo ",(0,o.kt)("inlineCode",{parentName:"p"},"Mongo<NombreLib>Repository.ts")," debe ir toda la l\xf3gica que conecta al servicio externo, en este caso, a Mongo. Puedes basarte en un archivo de alg\xfan otro caso de uso para crear el tuyo"),(0,o.kt)("p",{parentName:"li"},"Para esta gu\xeda crearemos una categor\xeda, as\xed que el archivo de repository deber\xeda tener al menos 2 m\xe9todos:"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { MongoRepository } from '@frappe/common/persistence/mongodb'; // Importas el Repositorio de Mongo\nimport { Category, CategoryId, CategoryName, CategoryPrimitives, CategoryRepository } from '@frappe/category/domain'; // Importas los tipos que creaste en la capa de dominio\n\nexport class MongoCategoryRepository extends MongoRepository implements CategoryRepository {\n\n  // Obtienes el nombre del m\xf3dulo de Mongo\n  protected moduleName(): string {\n    return 'categories';\n  }\n\n  // Este m\xe9todo guarda la categor\xeda que recibe en la base de datos\n  // Toma en cuenta que recibe una categor\xeda de tipo Category, es decir, de su propio tipo\n  async save(category: Category): Promise<void> {\n    return this.persist(category.id.value, category);\n  }\n\n\n  // \xc9ste m\xe9todo encuentra una categor\xeda, dado su nombre, el cu\xe1l recibe como tipo ValueObject, como lo definiste en la capa de dominio\n  async findByName(name: CategoryName): Promise<Nullable<Category>> {\n    const collection = await this.collection();\n    const document = await collection.findOne({ name: name.value });\n\n\n    if (document === null) {\n      return null;\n    }\n\n    return Category.fromPrimitives({ ...document, id: document._id } as CategoryPrimitives);\n  }\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"En el archivo ",(0,o.kt)("inlineCode",{parentName:"li"},"index.ts")," a nivel de la carpeta ",(0,o.kt)("inlineCode",{parentName:"li"},"utils"),", exporta el archivo que acabas de crear.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"  export { MongoCategoryRepository } from './MongoCategoryRepository';\n")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"En el archivo ",(0,o.kt)("inlineCode",{parentName:"li"},"index.ts")," a nivel de la carpeta ",(0,o.kt)("inlineCode",{parentName:"li"},"src"),", exporta la carpeta utils.")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"3---capa-application"},"3 - Capa Application"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Para crear una librer\xeda de aplicaci\xf3n debes correr el comando\n",(0,o.kt)("inlineCode",{parentName:"p"},"nx g @nrwl/node:lib <lib-name/application>")),(0,o.kt)("p",{parentName:"li"}," El comando anterior crear\xe1 la misma estructura de archivos como en las capas anteriores")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Debes borrar la carpeta ",(0,o.kt)("inlineCode",{parentName:"p"},"lib"),"y el contenido del archivo index.ts. ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"A nivel de ",(0,o.kt)("inlineCode",{parentName:"p"},"src")," crear\xe1s las carpetas para cada acci\xf3n de tu caso de uso. Algunos nombres de dichas acciones son ",(0,o.kt)("strong",{parentName:"p"},"create, delete, find, list, etc.")),(0,o.kt)("p",{parentName:"li"},"  Para el ejemplo de esta gu\xeda debes crear una carpeta que se llame ",(0,o.kt)("inlineCode",{parentName:"p"},"create"),", la cu\xe1l contendr\xe1 3 archivos principales, ",(0,o.kt)("inlineCode",{parentName:"p"},"CategoryCreator.ts"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"CreateCategoryCommand.ts")," y ",(0,o.kt)("inlineCode",{parentName:"p"},"CreateCategoryCommandHandler.ts"),".\n",(0,o.kt)("strong",{parentName:"p"},"Recuerda sustituir la palabra ",(0,o.kt)("em",{parentName:"strong"},"Category")," por la correspondiente a tu caso de uso.")))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"  Recuerda que para los casos de uso de lectura crear\xe1s Queries, y QueryHandlers. Y para los casos de uso de escritura de datos Commands y CommandHandlers."))),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Para llenar el archivo ",(0,o.kt)("inlineCode",{parentName:"li"},"CreateCategoryCommand.ts")," deber\xe1s crear el payload necesario para crear una categor\xeda en forma de una interfaz. Adem\xe1s de un constructor para tu comando. Por ejemplo:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Command } from '@tshio/command-bus';\n\n// Los campos necesarios para crear una categor\xeda\ninterface CreateCategoryCommandPayload {\n  readonly id: string;\n  readonly name: string;\n}\n\n//El constructor del comando\nexport class CreateCategoryCommand implements Command<CreateCategoryCommandPayload> {\n  //Esta linea crea una variable type que guarda el nombre del comando.\n  readonly type = CreateCategoryCommand.name;\n\n  constructor(readonly payload: CreateCategoryCommandPayload) {}\n}\n\n")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"El archivo ",(0,o.kt)("inlineCode",{parentName:"li"},"CategoryCreator.ts")," es quien hace toda la m\xe1gia ya que es el encargado que hacer llegar la informaci\xf3n a nuestro repositorio que escribirmos en la capa de persitence. Aqu\xed vas a poner una parte la l\xf3gica de verificaci\xf3n de datos y podr\xe1s llamar los m\xe9todos del repositorio.  Por ejemplo:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Category, CategoryAlreadyExists, CategoryId, CategoryName, CategoryRepository } from '@frappe/category/domain';\nimport { CategoryNameFinder } from '../find'; // En esta gu\xeda suponemos que ya se implement\xf3 este caso\n\n// Los atributos (props) del Creator deben ser el repositorio y cualquier otro caso de uso que necesites. Normalmente son finders.\ninterface Props {\n  readonly categoryRepository: CategoryRepository;\n  readonly categoryNameFinder: CategoryNameFinder;\n}\n\nexport class CategoryCreator {\n  // Atributos de la clase Creator\n  private readonly categoryNameFinder: CategoryNameFinder;\n  private readonly categoryRepository: CategoryRepository;\n\n  // El constructor inicializa los atributos\n  constructor({ categoryRepository, categoryNameFinder }: Props) {\n    this.categoryRepository = categoryRepository;\n    this.categoryNameFinder = categoryNameFinder;\n  }\n\n  // Este es el \xfanico m\xe9todo publico que tendr\xe1 esta clase, y es el que ejecuta la acci\xf3n de crear un registro dados los campos de una categor\xeda (atributos de la funci\xf3n)\n  async execute(id: string, name: string) {\n\n    // Primero verificamos que no exista una categor\xeda con el mismo nombre\n    const exists = await this.categoryExists(name);\n\n    if (exists === null) {\n      // Si la categor\xeda ya existe, entonces arroja un error custom.\n      throw new CategoryAlreadyExists(name);\n    }\n\n    // Si no existe la categor\xeda creamos una, con sus tipos, CategoryName y CategoryId\n    const category = new Category(new CategoryId(id), new CategoryName(name));\n\n    // Esta l\xednea llama al comando save del repositorio y y guarda la categor\xeda\n    return this.categoryRepository.save(category);\n  }\n\n  // Esta funci\xf3n es la que llama a la funci\xf3n execute del caso de uso CategoryNameFinder\n  private async categoryExists(name: string) {\n    try {\n      await this.categoryNameFinder.execute(name);\n      return null;\n    } catch (error) {\n      return error;\n    }\n  }\n}\n\n")),(0,o.kt)("p",null,"Los creators son muy similares en la forma, sin embargo la implementaci\xf3n de execute puede variar."),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"El archivo ",(0,o.kt)("inlineCode",{parentName:"li"},"CreateCategoryCommandHandler.ts")," es el encargado de manejar la l\xf3gica de los comandos, es decir, cuando se llama un comando, el handler es el encargado de que se ejecute.  Un command handler puede verse as\xed:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { CommandHandler } from '@tshio/command-bus';\n\n// Debes importar el command y el creator\nimport { CreateCategoryCommand } from './CreateCategoryCommand';\nimport { CategoryCreator } from './CategoryCreator';\n\n// Los atributos de un command handler son el creator\ntype CategoryProps = {\n  readonly categoryCreator: CategoryCreator;\n};\n\nexport class CreateCategoryCommandHandler implements CommandHandler<CreateCategoryCommand> {\n  private readonly categoryCreator: CategoryCreator;\n\n  // Obtienes el nombre del comando \n  readonly commandType = CreateCategoryCommand.name;\n\n  // Inicializas el creator\n  constructor({ categoryCreator }: CategoryProps) {\n    this.categoryCreator = categoryCreator;\n  }\n\n  // El m\xe9todo execute llama al m\xe9todo execute del creator, con el payload que definiste en en command\n  async execute(command: CreateCategoryCommand) {\n    const { id, name } = command.payload;\n\n    // Llamas al m\xe9todo execute del creator\n    return this.categoryCreator.execute(id, name);\n  }\n}\n\n")),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"Vuelve al ",(0,o.kt)("inlineCode",{parentName:"li"},"index.ts")," del nivel src y exporta los casos que creaste. Por ejemplo:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export * from './create';\nexport * from './find';\n")),(0,o.kt)("ol",{start:8},(0,o.kt)("li",{parentName:"ol"},"Aseg\xfarate que la estructura de archivos se vea algo as\xed.\n",(0,o.kt)("img",{alt:"final structure 1",src:r(5998).Z}),(0,o.kt)("img",{alt:"final structure 2",src:r(5853).Z}))),(0,o.kt)("h2",{id:"salidas"},"Salidas"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Las librer\xedas de backend listas")),(0,o.kt)("h2",{id:"autores"},"Autores"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Karla Daniela Romero P\xe9rez")),(0,o.kt)("h2",{id:"auditor\xeda"},"Auditor\xeda"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Vladimir Salvador"),(0,o.kt)("li",{parentName:"ul"},"Mauricio \xc1lvarez"),(0,o.kt)("li",{parentName:"ul"},"Ra\xfal Rosario G\xe1laviz ")),(0,o.kt)("h2",{id:"versi\xf3n-10"},"Versi\xf3n 1.0"),(0,o.kt)("p",null,"Se crea la gu\xeda"))}d.isMDXComponent=!0},5998:(e,a,r)=>{r.d(a,{Z:()=>t});const t=r.p+"assets/images/PPG02-1-final-structure-f2264c4bb0f697873ed4bde389678602.png"},5853:(e,a,r)=>{r.d(a,{Z:()=>t});const t=r.p+"assets/images/PPG02-2-final-structure-4b4712b6360ccc0c16d9b874418afff5.png"},1232:(e,a,r)=>{r.d(a,{Z:()=>t});const t=r.p+"assets/images/PPG02-domain-structure-75f12cc0b3cde4c7f6c0252d2b7ba508.png"},297:(e,a,r)=>{r.d(a,{Z:()=>t});const t=r.p+"assets/images/PPG02-final-domain-structure-2e46c81635dc24230c54b905ed03a756.png"},3420:(e,a,r)=>{r.d(a,{Z:()=>t});const t=r.p+"assets/images/PPG02-persistence-structure-7a60d89cc2fcf3b36b5ca56c444ebe1f.png"}}]);