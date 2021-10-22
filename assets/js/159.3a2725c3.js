/*! For license information please see 159.3a2725c3.js.LICENSE.txt */
"use strict";(self.webpackChunkfrappe=self.webpackChunkfrappe||[]).push([[159],{6742:(e,t,n)=>{n.d(t,{Z:()=>v});var r=n(3366),o=n(7294),a=n(3727),i=n(2263),u=n(3919),c=n(412),s=(0,o.createContext)({collectLink:function(){}}),l=n(4996),f=n(8780),d=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];const v=function(e){var t,n,v=e.isNavLink,p=e.to,g=e.href,h=e.activeClassName,m=e.isActive,y=e["data-noBrokenLinkCheck"],b=e.autoAddBaseUrl,w=void 0===b||b,P=(0,r.Z)(e,d),_=(0,i.Z)().siteConfig,E=_.trailingSlash,D=_.baseUrl,S=(0,l.C)().withBaseUrl,A=(0,o.useContext)(s),O=p||g,C=(0,u.Z)(O),j=null==O?void 0:O.replace("pathname://",""),x=void 0!==j?(n=j,w&&function(e){return e.startsWith("/")}(n)?S(n):n):void 0;x&&C&&(x=(0,f.applyTrailingSlash)(x,{trailingSlash:E,baseUrl:D}));var V,k=(0,o.useRef)(!1),L=v?a.OL:a.rU,T=c.Z.canUseIntersectionObserver;(0,o.useEffect)((function(){return!T&&C&&null!=x&&window.docusaurus.prefetch(x),function(){T&&V&&V.disconnect()}}),[x,T,C]);var R=null!==(t=null==x?void 0:x.startsWith("#"))&&void 0!==t&&t,I=!x||!C||R;return x&&C&&!R&&!y&&A.collectLink(x),I?o.createElement("a",Object.assign({href:x},O&&!C&&{target:"_blank",rel:"noopener noreferrer"},P)):o.createElement(L,Object.assign({},P,{onMouseEnter:function(){k.current||null==x||(window.docusaurus.preload(x),k.current=!0)},innerRef:function(e){var t,n;T&&e&&C&&(t=e,n=function(){null!=x&&window.docusaurus.prefetch(x)},(V=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(V.unobserve(t),V.disconnect(),n())}))}))).observe(t))},to:x||""},v&&{isActive:m,activeClassName:h}))}},4973:(e,t,n)=>{n.d(t,{Z:()=>f,I:()=>l});var r=n(7294),o=/{\w+}/g,a="{}";function i(e,t){var n=[],i=e.replace(o,(function(e){var o=e.substr(1,e.length-2),i=null==t?void 0:t[o];if(void 0!==i){var u=r.isValidElement(i)?i:String(i);return n.push(u),a}return e}));return 0===n.length?e:n.every((function(e){return"string"==typeof e}))?i.split(a).reduce((function(e,t,r){var o;return e.concat(t).concat(null!==(o=n[r])&&void 0!==o?o:"")}),""):i.split(a).reduce((function(e,t,o){return[].concat(e,[r.createElement(r.Fragment,{key:o},t,n[o])])}),[])}function u(e){var t=e.children,n=e.values;if("string"!=typeof t)throw console.warn("Illegal <Interpolate> children",t),new Error("The Docusaurus <Interpolate> component only accept simple string values");return i(t,n)}var c=n(8379);function s(e){var t,n=e.id,r=e.message;return null!==(t=c[null!=n?n:r])&&void 0!==t?t:r}function l(e,t){var n,r=e.message;return i(null!==(n=s({message:r,id:e.id}))&&void 0!==n?n:r,t)}function f(e){var t,n=e.children,o=e.id,a=e.values;if("string"!=typeof n)throw console.warn("Illegal <Translate> children",n),new Error("The Docusaurus <Translate> component only accept simple string values");var i=null!==(t=s({message:n,id:o}))&&void 0!==t?t:n;return r.createElement(u,{values:a},i)}},3919:(e,t,n)=>{function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{b:()=>r,Z:()=>o})},8143:(e,t,n)=>{n.r(t),n.d(t,{BrowserRouter:()=>r.VK,HashRouter:()=>r.UT,Link:()=>r.rU,MemoryRouter:()=>r.VA,NavLink:()=>r.OL,Prompt:()=>r.NL,Redirect:()=>r.l_,Route:()=>r.AW,Router:()=>r.F0,StaticRouter:()=>r.gx,Switch:()=>r.rs,generatePath:()=>r.Gn,matchPath:()=>r.LX,useHistory:()=>r.k6,useLocation:()=>r.TH,useParams:()=>r.UO,useRouteMatch:()=>r.$B,withRouter:()=>r.EN});var r=n(3727)},4996:(e,t,n)=>{n.d(t,{C:()=>a,Z:()=>i});var r=n(2263),o=n(3919);function a(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,i=a.forcePrependBaseUrl,u=void 0!==i&&i,c=a.absolute,s=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(u)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+l:l}(a,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},8084:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o,useAllPluginInstancesData:()=>a,usePluginData:()=>i});var r=n(2263);function o(){var e=(0,r.Z)().globalData;if(!e)throw new Error("Docusaurus global data not found.");return e}function a(e){var t=o()[e];if(!t)throw new Error('Docusaurus plugin global data not found for "'+e+'" plugin.');return t}function i(e,t){void 0===t&&(t="default");var n=a(e)[t];if(!n)throw new Error('Docusaurus plugin global data not found for "'+e+'" plugin with id "'+t+'".');return n}},2389:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(7294),o=n(9913);function a(){return(0,r.useContext)(o._)}},8408:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;var r=n(8143);t.getActivePlugin=function(e,t,n){void 0===n&&(n={});var o=Object.entries(e).find((function(e){e[0];var n=e[1];return!!r.matchPath(t,{path:n.path,exact:!1,strict:!1})})),a=o?{pluginId:o[0],pluginData:o[1]}:void 0;if(!a&&n.failfast)throw new Error("Can't find active docs plugin for \""+t+'" pathname, while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: '+Object.values(e).map((function(e){return e.path})).join(", "));return a};t.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))};t.getActiveVersion=function(e,n){var o=t.getLatestVersion(e);return[].concat(e.versions.filter((function(e){return e!==o})),[o]).find((function(e){return!!r.matchPath(n,{path:e.path,exact:!1,strict:!1})}))};t.getActiveDocContext=function(e,n){var o,a,i=t.getActiveVersion(e,n),u=null==i?void 0:i.docs.find((function(e){return!!r.matchPath(n,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:i,activeDoc:u,alternateDocVersions:u?(o=u.id,a={},e.versions.forEach((function(e){e.docs.forEach((function(t){t.id===o&&(a[e.name]=t)}))})),a):{}}};t.getDocVersionSuggestions=function(e,n){var r=t.getLatestVersion(e),o=t.getActiveDocContext(e,n);return{latestDocSuggestion:null==o?void 0:o.alternateDocVersions[r.name],latestVersionSuggestion:r}}},6730:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;var r=n(655),o=n(8143),a=r.__importStar(n(8084)),i=n(8408),u={};t.useAllDocsData=function(){var e;return null!==(e=a.default()["docusaurus-plugin-content-docs"])&&void 0!==e?e:u};t.useDocsData=function(e){return a.usePluginData("docusaurus-plugin-content-docs",e)};t.useActivePlugin=function(e){void 0===e&&(e={});var n=t.useAllDocsData(),r=o.useLocation().pathname;return i.getActivePlugin(n,r,e)};t.useActivePluginAndVersion=function(e){void 0===e&&(e={});var n=t.useActivePlugin(e),r=o.useLocation().pathname;if(n)return{activePlugin:n,activeVersion:i.getActiveVersion(n.pluginData,r)}};t.useVersions=function(e){return t.useDocsData(e).versions};t.useLatestVersion=function(e){var n=t.useDocsData(e);return i.getLatestVersion(n)};t.useActiveVersion=function(e){var n=t.useDocsData(e),r=o.useLocation().pathname;return i.getActiveVersion(n,r)};t.useActiveDocContext=function(e){var n=t.useDocsData(e),r=o.useLocation().pathname;return i.getActiveDocContext(n,r)};t.useDocVersionSuggestions=function(e){var n=t.useDocsData(e),r=o.useLocation().pathname;return i.getDocVersionSuggestions(n,r)}},1217:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(7294),o=n(9105),a=n(941),i=n(4996);function u(e){var t=e.title,n=e.description,u=e.keywords,c=e.image,s=e.children,l=(0,a.pe)(t),f=(0,i.C)().withBaseUrl,d=c?f(c,{absolute:!0}):void 0;return r.createElement(o.Z,null,t&&r.createElement("title",null,l),t&&r.createElement("meta",{property:"og:title",content:l}),n&&r.createElement("meta",{name:"description",content:n}),n&&r.createElement("meta",{property:"og:description",content:n}),u&&r.createElement("meta",{name:"keywords",content:Array.isArray(u)?u.join(","):u}),d&&r.createElement("meta",{property:"og:image",content:d}),d&&r.createElement("meta",{name:"twitter:image",content:d}),s)}},907:(e,t,n)=>{n.d(t,{Iw:()=>r.useActiveDocContext,gA:()=>r.useActivePlugin,zu:()=>r.useActiveVersion,_r:()=>r.useAllDocsData,Jo:()=>r.useDocVersionSuggestions,zh:()=>r.useDocsData,yW:()=>r.useLatestVersion,gB:()=>r.useVersions});var r=n(6730)},3783:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(7294),o=n(412),a="desktop",i="mobile",u="ssr";function c(){return o.Z.canUseDOM?window.innerWidth>996?a:i:u}const s=function(){var e=(0,r.useState)((function(){return c()})),t=e[0],n=e[1];return(0,r.useEffect)((function(){function e(){n(c())}return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e),clearTimeout(undefined)}}),[]),t}},941:(e,t,n)=>{n.d(t,{pl:()=>ve,zF:()=>Z,HX:()=>g,PO:()=>G,L5:()=>oe,Cv:()=>Y,Cn:()=>X,kM:()=>ue,WA:()=>s,os:()=>h,Mg:()=>b,_f:()=>l,PZ:()=>ye,bc:()=>p,MA:()=>me,l5:()=>d,nT:()=>pe,uR:()=>x,J:()=>ie,Rb:()=>be,be:()=>ge,SL:()=>S,g8:()=>Q,D9:()=>D,LU:()=>o,pe:()=>w});var r=n(2263);function o(){return(0,r.Z)().siteConfig.themeConfig}var a="localStorage";function i(e){if(void 0===e&&(e=a),"undefined"==typeof window)throw new Error("Browser storage is not available on Node.js/Docusaurus SSR process.");if("none"===e)return null;try{return window[e]}catch(n){return t=n,u||(console.warn("Docusaurus browser storage is not available.\nPossible reasons: running Docusaurus in an iframe, in an incognito browser session, or using too strict browser privacy settings.",t),u=!0),null}var t}var u=!1;var c={get:function(){return null},set:function(){},del:function(){}};var s=function(e,t){if("undefined"==typeof window)return function(e){function t(){throw new Error('Illegal storage API usage for storage key "'+e+'".\nDocusaurus storage APIs are not supposed to be called on the server-rendering process.\nPlease only call storage APIs in effects and event handlers.')}return{get:t,set:t,del:t}}(e);var n=i(null==t?void 0:t.persistence);return null===n?c:{get:function(){return n.getItem(e)},set:function(t){return n.setItem(e,t)},del:function(){return n.removeItem(e)}}};function l(e){void 0===e&&(e=a);var t=i(e);if(!t)return[];for(var n=[],r=0;r<t.length;r+=1){var o=t.key(r);null!==o&&n.push(o)}return n}var f=n(5977);function d(){var e=(0,r.Z)(),t=e.siteConfig,n=t.baseUrl,o=t.url,a=e.i18n,i=a.defaultLocale,u=a.currentLocale,c=(0,f.TH)().pathname,s=u===i?n:n.replace("/"+u+"/","/"),l=c.replace(n,"");return{createUrl:function(e){var t=e.locale;return""+(e.fullyQualified?o:"")+function(e){return e===i?""+s:""+s+e+"/"}(t)+l}}}var v=/title=(["'])(.*?)\1/;function p(e){var t,n;return null!==(n=null===(t=null==e?void 0:e.match(v))||void 0===t?void 0:t[2])&&void 0!==n?n:""}var g="default";function h(e,t){return"docs-"+e+"-"+t}var m=n(907),y=!!m._r,b=function(e,t){var n=function(e){return!e||(null==e?void 0:e.endsWith("/"))?e:e+"/"};return n(e)===n(t)},w=function(e){var t=(0,r.Z)().siteConfig,n=t.title,o=t.titleDelimiter;return e&&e.trim().length?e.trim()+" "+o+" "+n:n},P=n(7294),_=["zero","one","two","few","many","other"];function E(e){return _.filter((function(t){return e.includes(t)}))}E(["one","other"]);function D(e){var t=(0,P.useRef)();return(0,P.useEffect)((function(){t.current=e})),t.current}function S(e){var t=(0,f.TH)(),n=D(t),r=(0,P.useRef)(!0);(0,P.useEffect)((function(){r.current?r.current=!1:e({location:t,previousLocation:n})}),[t])}var A=n(3366),O=n(412),C=["collapsed"],j=["lazy"];function x(e){var t=e.initialState,n=(0,P.useState)(null!=t&&t),r=n[0],o=n[1],a=(0,P.useCallback)((function(){o((function(e){return!e}))}),[]);return{collapsed:r,setCollapsed:o,toggleCollapsed:a}}var V={display:"none",overflow:"hidden",height:"0px"},k={display:"block",overflow:"visible",height:"auto"};function L(e,t){var n=t?V:k;e.style.display=n.display,e.style.overflow=n.overflow,e.style.height=n.height}function T(e){var t=e.collapsibleRef,n=e.collapsed,r=e.animation,o=(0,P.useRef)(!1);(0,P.useEffect)((function(){var e,a=t.current;function i(){var e,t,n=a.scrollHeight,o=null!==(e=null==r?void 0:r.duration)&&void 0!==e?e:function(e){var t=e/36;return Math.round(10*(4+15*Math.pow(t,.25)+t/5))}(n);return{transition:"height "+o+"ms "+(null!==(t=null==r?void 0:r.easing)&&void 0!==t?t:"ease-in-out"),height:n+"px"}}function u(){var e=i();a.style.transition=e.transition,a.style.height=e.height}if(!o.current)return L(a,n),void(o.current=!0);return a.style.willChange="height",e=requestAnimationFrame((function(){n?(u(),requestAnimationFrame((function(){a.style.height=V.height,a.style.overflow=V.overflow}))):(a.style.display="block",requestAnimationFrame((function(){u()})))})),function(){return cancelAnimationFrame(e)}}),[t,n,r])}function R(e){if(!O.Z.canUseDOM)return e?V:k}function I(e){var t=e.as,n=void 0===t?"div":t,r=e.collapsed,o=e.children,a=e.animation,i=e.onCollapseTransitionEnd,u=e.className,c=e.disableSSRStyle,s=(0,P.useRef)(null);return T({collapsibleRef:s,collapsed:r,animation:a}),P.createElement(n,{ref:s,style:c?void 0:R(r),onTransitionEnd:function(e){if("height"===e.propertyName){var t=s.current,n=t.style.height;r||parseInt(n,10)!==t.scrollHeight||(L(t,!1),null==i||i(!1)),n===V.height&&(L(t,!0),null==i||i(!0))}},className:u},o)}function M(e){var t=e.collapsed,n=(0,A.Z)(e,C),r=(0,P.useState)(!t),o=r[0],a=r[1];(0,P.useLayoutEffect)((function(){t||a(!0)}),[t]);var i=(0,P.useState)(t),u=i[0],c=i[1];return(0,P.useLayoutEffect)((function(){o&&c(t)}),[o,t]),o?P.createElement(I,Object.assign({},n,{collapsed:u})):null}function Z(e){var t=e.lazy,n=(0,A.Z)(e,j),r=t?M:I;return P.createElement(r,Object.assign({},n))}var U=n(2389),N=n(6010);const B="details_2Ziz",F="isBrowser_2j9b",W="collapsibleContent_3OHp";var z=["summary","children"];function H(e){return!!e&&("SUMMARY"===e.tagName||H(e.parentElement))}function q(e,t){return!!e&&(e===t||q(e.parentElement,t))}const G=function(e){var t,n=e.summary,r=e.children,o=(0,A.Z)(e,z),a=(0,U.Z)(),i=(0,P.useRef)(null),u=x({initialState:!o.open}),c=u.collapsed,s=u.setCollapsed,l=(0,P.useState)(o.open),f=l[0],d=l[1];return P.createElement("details",Object.assign({},o,{ref:i,open:f,"data-collapsed":c,className:(0,N.Z)(B,(t={},t[F]=a,t),o.className),onMouseDown:function(e){H(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;H(t)&&q(t,i.current)&&(e.preventDefault(),c?(s(!1),d(!0)):s(!0))}}),n,P.createElement(Z,{lazy:!1,collapsed:c,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){s(e),d(!e)}},P.createElement("div",{className:W},r)))};var J=(0,P.createContext)(null);function X(e){var t=e.children;return P.createElement(J.Provider,{value:(0,P.useState)(null)},t)}function K(){var e=(0,P.useContext)(J);if(null===e)throw new Error("MobileSecondaryMenuProvider was not used correctly, context value is null");return e}function Q(){var e=K()[0];if(e){var t=e.component;return function(n){return P.createElement(t,Object.assign({},e.props,n))}}return function(){}}function Y(e){var t,n=e.component,r=e.props,o=K()[1],a=(t=r,(0,P.useMemo)((function(){return t}),[].concat(Object.keys(t),Object.values(t))));return(0,P.useEffect)((function(){o({component:n,props:a})}),[o,n,a]),(0,P.useEffect)((function(){return function(){return o(null)}}),[o]),null}var $=function(e){return"docs-preferred-version-"+e};const ee={save:function(e,t,n){s($(e),{persistence:t}).set(n)},read:function(e,t){return s($(e),{persistence:t}).get()},clear:function(e,t){s($(e),{persistence:t}).del()}};function te(e){var t=e.pluginIds,n=e.versionPersistence,r=e.allDocsData;var o={};return t.forEach((function(e){o[e]=function(e){var t=ee.read(e,n);return r[e].versions.some((function(e){return e.name===t}))?{preferredVersionName:t}:(ee.clear(e,n),{preferredVersionName:null})}(e)})),o}function ne(){var e=(0,m._r)(),t=o().docs.versionPersistence,n=(0,P.useMemo)((function(){return Object.keys(e)}),[e]),r=(0,P.useState)((function(){return function(e){var t={};return e.forEach((function(e){t[e]={preferredVersionName:null}})),t}(n)})),a=r[0],i=r[1];return(0,P.useEffect)((function(){i(te({allDocsData:e,versionPersistence:t,pluginIds:n}))}),[e,t,n]),[a,(0,P.useMemo)((function(){return{savePreferredVersion:function(e,n){ee.save(e,t,n),i((function(t){var r;return Object.assign({},t,((r={})[e]={preferredVersionName:n},r))}))}}}),[i])]}var re=(0,P.createContext)(null);function oe(e){var t=e.children;return y?P.createElement(ae,null,t):P.createElement(P.Fragment,null,t)}function ae(e){var t=e.children,n=ne();return P.createElement(re.Provider,{value:n},t)}function ie(e){void 0===e&&(e="default");var t=(0,m.zh)(e),n=function(){var e=(0,P.useContext)(re);if(!e)throw new Error('Can\'t find docs preferred context, maybe you forgot to use the "DocsPreferredVersionContextProvider"?');return e}(),r=n[0],o=n[1],a=r[e].preferredVersionName;return{preferredVersion:a?t.versions.find((function(e){return e.name===a})):null,savePreferredVersionName:(0,P.useCallback)((function(t){o.savePreferredVersion(e,t)}),[o])}}var ue={page:{blogListPage:"blog-list-page",blogPostPage:"blog-post-page",blogTagsListPage:"blog-tags-list-page",blogTagPostListPage:"blog-tags-post-list-page",docsDocPage:"docs-doc-page",docsTagsListPage:"docs-tags-list-page",docsTagDocListPage:"docs-tags-doc-list-page",mdxPage:"mdx-page"},wrapper:{main:"main-wrapper",blogPages:"blog-wrapper",docsPages:"docs-wrapper",mdxPages:"mdx-wrapper"},common:{editThisPage:"theme-edit-this-page",lastUpdated:"theme-last-updated"},layout:{},docs:{docVersionBanner:"theme-doc-version-banner",docVersionBadge:"theme-doc-version-badge",docMarkdown:"theme-doc-markdown",docTocMobile:"theme-doc-toc-mobile",docTocDesktop:"theme-doc-toc-desktop",docFooter:"theme-doc-footer",docFooterTagsRow:"theme-doc-footer-tags-row",docFooterEditMetaRow:"theme-doc-footer-edit-meta-row",docSidebarMenu:"theme-doc-sidebar-menu",docSidebarItemCategory:"theme-doc-sidebar-item-category",docSidebarItemLink:"theme-doc-sidebar-item-link"},blog:{}},ce=s("docusaurus.announcement.dismiss"),se=s("docusaurus.announcement.id"),le=function(){return"true"===ce.get()},fe=function(e){return ce.set(String(e))},de=(0,P.createContext)(null),ve=function(e){var t=e.children,n=function(){var e=o().announcementBar,t=(0,U.Z)(),n=(0,P.useState)((function(){return!!t&&le()})),r=n[0],a=n[1];(0,P.useEffect)((function(){a(le())}),[]);var i=(0,P.useCallback)((function(){fe(!0),a(!0)}),[]);return(0,P.useEffect)((function(){if(e){var t=e.id,n=se.get();"annoucement-bar"===n&&(n="announcement-bar");var r=t!==n;se.set(t),r&&fe(!1),!r&&le()||a(!1)}}),[]),(0,P.useMemo)((function(){return{isClosed:r,close:i}}),[r])}();return P.createElement(de.Provider,{value:n},t)},pe=function(){var e=(0,P.useContext)(de);if(!e)throw new Error("useAnnouncementBar(): AnnouncementBar not found in React context: make sure to use the AnnouncementBarProvider on top of the tree");return e};function ge(){var e=(0,r.Z)().siteConfig.baseUrl;return(0,f.TH)().pathname.replace(e,"/")}var he=n(4973),me=function(){return(0,he.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"})};function ye(e){var t={};return Object.values(e).forEach((function(e){var n,r=function(e){return e[0].toUpperCase()}(e.name);t[r]=null!==(n=t[r])&&void 0!==n?n:[],t[r].push(e)})),Object.entries(t).sort((function(e,t){var n=e[0],r=t[0];return n.localeCompare(r)})).map((function(e){return{letter:e[0],tags:e[1].sort((function(e,t){return e.name.localeCompare(t.name)}))}}))}function be(e){!function(e){var t=(0,f.k6)().block,n=(0,P.useRef)(e);(0,P.useEffect)((function(){n.current=e}),[e]),(0,P.useEffect)((function(){return t((function(e,t){return n.current(e,t)}))}),[t,n])}((function(t,n){if("POP"===n)return e(t,n)}))}},8802:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var o,a=e.split(/[#?]/)[0],i="/"===a||a===r?a:(o=a,n?function(e){return e.endsWith("/")?e:e+"/"}(o):function(e){return e.endsWith("/")?e.slice(0,-1):e}(o));return e.replace(a,i)}},8780:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var o=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(o).default}});var a=n(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(a).default}})},9964:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},6010:(e,t,n)=>{function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:()=>o})},655:(e,t,n)=>{n.r(t),n.d(t,{__extends:()=>o,__assign:()=>a,__rest:()=>i,__decorate:()=>u,__param:()=>c,__metadata:()=>s,__awaiter:()=>l,__generator:()=>f,__createBinding:()=>d,__exportStar:()=>v,__values:()=>p,__read:()=>g,__spread:()=>h,__spreadArrays:()=>m,__spreadArray:()=>y,__await:()=>b,__asyncGenerator:()=>w,__asyncDelegator:()=>P,__asyncValues:()=>_,__makeTemplateObject:()=>E,__importStar:()=>S,__importDefault:()=>A,__classPrivateFieldGet:()=>O,__classPrivateFieldSet:()=>C});var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)};function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var a=function(){return a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},a.apply(this,arguments)};function i(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function u(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i}function c(e,t){return function(n,r){t(n,r,e)}}function s(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function l(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{c(r.next(e))}catch(t){a(t)}}function u(e){try{c(r.throw(e))}catch(t){a(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,u)}c((r=r.apply(e,t||[])).next())}))}function f(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(u){a=[6,u],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}}var d=Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]};function v(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||d(t,e,n)}function p(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function g(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,a=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(u){o={error:u}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return i}function h(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(g(arguments[t]));return e}function m(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var a=arguments[t],i=0,u=a.length;i<u;i++,o++)r[o]=a[i];return r}function y(e,t,n){if(n||2===arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}function b(e){return this instanceof b?(this.v=e,this):new b(e)}function w(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(e,t||[]),a=[];return r={},i("next"),i("throw"),i("return"),r[Symbol.asyncIterator]=function(){return this},r;function i(e){o[e]&&(r[e]=function(t){return new Promise((function(n,r){a.push([e,t,n,r])>1||u(e,t)}))})}function u(e,t){try{(n=o[e](t)).value instanceof b?Promise.resolve(n.value.v).then(c,s):l(a[0][2],n)}catch(r){l(a[0][3],r)}var n}function c(e){u("next",e)}function s(e){u("throw",e)}function l(e,t){e(t),a.shift(),a.length&&u(a[0][0],a[0][1])}}function P(e){var t,n;return t={},r("next"),r("throw",(function(e){throw e})),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,o){t[r]=e[r]?function(t){return(n=!n)?{value:b(e[r](t)),done:"return"===r}:o?o(t):t}:o}}function _(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=p(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise((function(r,o){(function(e,t,n,r){Promise.resolve(r).then((function(t){e({value:t,done:n})}),t)})(r,o,(t=e[n](t)).done,t.value)}))}}}function E(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var D=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function S(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&d(t,e,n);return D(t,e),t}function A(e){return e&&e.__esModule?e:{default:e}}function O(e,t,n,r){if("a"===n&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?r:"a"===n?r.call(e):r?r.value:t.get(e)}function C(e,t,n,r,o){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?o.call(e,n):o?o.value=n:t.set(e,n),n}}}]);