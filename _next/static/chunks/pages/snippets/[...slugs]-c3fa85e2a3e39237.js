(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[906,919],{2350:function(){},5426:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/snippets/[...slugs]",function(){return n(5659)}])},9578:function(e,t,n){var r=n(3454);n(2350);var s=n(7294),i=s&&"object"==typeof s&&"default"in s?s:{default:s};function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=void 0!==r&&r.env&&!0,a=function(e){return"[object String]"===Object.prototype.toString.call(e)},c=function(){function e(e){var t=void 0===e?{}:e,n=t.name,r=void 0===n?"stylesheet":n,s=t.optimizeForSpeed,i=void 0===s?l:s;u(a(r),"`name` must be a string"),this._name=r,this._deletedRulePlaceholder="#"+r+"-deleted-rule____{}",u("boolean"==typeof i,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=i,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var o=document.querySelector('meta[property="csp-nonce"]');this._nonce=o?o.getAttribute("content"):null}var t,n=e.prototype;return n.setOptimizeForSpeed=function(e){u("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),u(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},n.isOptimizeForSpeed=function(){return this._optimizeForSpeed},n.inject=function(){var e=this;if(u(!this._injected,"sheet already injected"),this._injected=!0,this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),this._optimizeForSpeed||(l||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0);return}this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"==typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},n.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},n.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},n.insertRule=function(e,t){if(u(a(e),"`insertRule` accepts only strings"),this._optimizeForSpeed){var n=this.getSheet();"number"!=typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(t){return l||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var r=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,r))}return this._rulesCount++},n.replaceRule=function(e,t){if(this._optimizeForSpeed){var n=this.getSheet();if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(r){l||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var r=this._tags[e];u(r,"old rule at index `"+e+"` not found"),r.textContent=t}return e},n.deleteRule=function(e){if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];u(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}},n.flush=function(){this._injected=!1,this._rulesCount=0,this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]},n.cssRules=function(){var e=this;return this._tags.reduce(function(t,n){return n?t=t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules,function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[])},n.makeStyleTag=function(e,t,n){t&&u(a(t),"makeStyleTag accepts only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var s=document.head||document.getElementsByTagName("head")[0];return n?s.insertBefore(r,n):s.appendChild(r),r},o(e.prototype,[{key:"length",get:function(){return this._rulesCount}}]),t&&o(e,t),e}();function u(e,t){if(!e)throw Error("StyleSheet: "+t+".")}var d=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0},h={};function f(e,t){if(!t)return"jsx-"+e;var n=String(t),r=e+n;return h[r]||(h[r]="jsx-"+d(e+"-"+n)),h[r]}function m(e,t){var n=e+t;return h[n]||(h[n]=t.replace(/__jsx-style-dynamic-selector/g,e)),h[n]}var p=function(){function e(e){var t=void 0===e?{}:e,n=t.styleSheet,r=void 0===n?null:n,s=t.optimizeForSpeed,i=void 0!==s&&s;this._sheet=r||new c({name:"styled-jsx",optimizeForSpeed:i}),this._sheet.inject(),r&&"boolean"==typeof i&&(this._sheet.setOptimizeForSpeed(i),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer||(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var n=this.getIdAndRules(e),r=n.styleId,s=n.rules;if(r in this._instancesCounts){this._instancesCounts[r]+=1;return}var i=s.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return -1!==e});this._indices[r]=i,this._instancesCounts[r]=1},t.remove=function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var r=this._fromServer&&this._fromServer[n];r?(r.parentNode.removeChild(r),delete this._fromServer[n]):(this._indices[n].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[n]),delete this._instancesCounts[n]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return n[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return!!e[1]}))},t.styles=function(e){var t,n;return t=this.cssRules(),void 0===(n=e)&&(n={}),t.map(function(e){var t=e[0],r=e[1];return i.default.createElement("style",{id:"__"+t,key:"__"+t,nonce:n.nonce?n.nonce:void 0,dangerouslySetInnerHTML:{__html:r}})})},t.getIdAndRules=function(e){var t=e.children,n=e.dynamic,r=e.id;if(n){var s=f(r,n);return{styleId:s,rules:Array.isArray(t)?t.map(function(e){return m(s,e)}):[m(s,t)]}}return{styleId:f(r),rules:Array.isArray(t)?t:[t]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})},e}(),v=s.createContext(null);v.displayName="StyleSheetContext";var x=i.default.useInsertionEffect||i.default.useLayoutEffect,g=new p;function _(e){var t=g||s.useContext(v);return t&&x(function(){return t.add(e),function(){t.remove(e)}},[e.id,String(e.dynamic)]),null}_.dynamic=function(e){return e.map(function(e){return f(e[0],e[1])}).join(" ")},t.style=_},6465:function(e,t,n){"use strict";e.exports=n(9578).style},5919:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return L}});var r=n(5893),s=n(7294),i=n(1664),o=n.n(i),l=n(7484),a=n.n(l),c=n(7614),u=n(4503),d=n(1244),h=n(644);function f(e){let{className:t,...n}=e;return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:t,...n,children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"})})}var m=n(9060),p=n(4636);function v(e){let{tableOfContents:t,className:n,indentDepth:s=3,fromHeading:i=1,toHeading:o=6,exclude:l=""}=e;if((null==t?void 0:t.length)===0)return(0,r.jsx)(r.Fragment,{});let a=Array.isArray(l)?RegExp("^("+l.join("|")+")$","i"):RegExp("^("+l+")$","i"),c=t.filter(e=>e.depth>=i&&e.depth<=o&&!a.test(e.value)),u=(0,r.jsx)("ul",{children:c.map(e=>(0,r.jsx)("li",{className:"".concat(e.depth>=s&&"ml-6"),children:(0,r.jsx)("a",{href:e.url,children:e.value})},e.value))});return(0,r.jsx)("div",{children:(0,r.jsxs)("div",{className:n,children:[(0,r.jsx)("h2",{id:"table-of-contents",children:"Table of contents"}),u,(0,r.jsx)(d.Z,{})]})})}var x=n(3287),g=n(5748);function _(e){let{className:t,...n}=e;return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"16",width:"16",viewBox:"0 0 16 16",fill:"currentColor",className:t,...n,children:(0,r.jsx)("path",{d:"M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"})})}function j(e){let{className:t,...n}=e;return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:t,...n,children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"})})}function y(e){let{className:t,type:n="button",...s}=e;return(0,r.jsx)("button",{"aria-label":"icon-button",...s,type:n,className:(0,x.$)("flex h-9 w-9 items-center justify-center rounded-lg transition-all","text-secondary hover:bg-secondary",t)})}function b(e){var t;let[n,i]=(0,s.useState)(!1);t=()=>{i(!1)},(0,s.useEffect)(()=>{let e;return n&&(e=setTimeout(t,1500)),()=>{e&&clearInterval(e)}},[n]);let o=async()=>{let e=window.document.location.href;try{await navigator.clipboard.writeText(e),i(!0),(0,g.Am)("Copied the link.",{icon:"\uD83D\uDD17"})}catch(e){console.error(e),g.Am.error("Link copy failed.")}};return(0,r.jsx)(y,{...e,"aria-label":"copy-link",onClick:o,children:n?(0,r.jsx)(_,{width:20}):(0,r.jsx)(j,{width:20})})}function S(e){let{className:t,...n}=e;return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:t,...n,children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"})})}function w(e){let{className:t,...n}=e;return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:t,...n,children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 9l6-6m0 0l6 6m-6-6v12a6 6 0 01-12 0v-3"})})}function k(e){let{tableOfContents:t,className:n,indentDepth:s=3,fromHeading:i=1,toHeading:o=6,exclude:l=""}=e,a=Array.isArray(l)?RegExp("^("+l.join("|")+")$","i"):RegExp("^("+l+")$","i"),c=t.filter(e=>e.depth>=i&&e.depth<=o&&!a.test(e.value)),u=(0,r.jsx)("ul",{id:"toc-content",className:"mt-2 flex flex-col items-start justify-start text-sm",children:c.map(e=>(0,r.jsx)("li",{className:"".concat(e.depth>=s&&"ml-6"),children:(0,r.jsx)("a",{href:e.url,children:e.value})},e.value))});return(0,r.jsxs)("div",{className:(0,x.$)("overflow-hidden rounded-xl border border-neutral-200 transition-all dark:border-neutral-800",n),children:[(null==t?void 0:t.length)!==0&&(0,r.jsxs)("div",{className:"p-4 pr-2 dark:border-neutral-700 dark:bg-neutral-800",children:[(0,r.jsx)("p",{id:"toc-header",className:"text-primary text-sm font-extrabold leading-6",children:"Table of content"}),u]}),(0,r.jsxs)("div",{className:(0,x.$)("flex items-center justify-end p-2","bg-neutral-150 dark:bg-neutral-750"),children:[(0,r.jsx)(b,{className:"mr-auto hover:bg-mute"}),(0,r.jsx)(y,{className:"hover:bg-mute","aria-label":"scroll-up",onClick:()=>window.scrollTo({top:0}),children:(0,r.jsx)(w,{width:20})}),(0,r.jsx)(y,{className:"hover:bg-mute","aria-label":"scroll-down",onClick:()=>{var e;return null===(e=document.querySelector(".giscus"))||void 0===e?void 0:e.scrollIntoView()},children:(0,r.jsx)(S,{width:20})})]})]})}var N=n(6465),C=n.n(N);function R(e){let{className:t=""}=e,[n,i]=(0,s.useState)(0),o=()=>{let e=document.documentElement,t=e.scrollTop||document.body.scrollTop,n=e.scrollHeight||document.body.scrollHeight,r=t/(n-e.clientHeight)*100;i(r)};return(0,s.useEffect)(()=>(window.addEventListener("scroll",o),()=>window.removeEventListener("scroll",o)),[]),(0,r.jsxs)("div",{style:{width:"".concat(n,"%")},className:"jsx-bb058033bf3ae31d "+((0,x.$)("progressBar",t)||""),children:[(0,r.jsx)(C(),{id:"174668e2f4c9122a",children:".progressBar.jsx-bb058033bf3ae31d{position:fixed;z-index:50;top:64px;left:0px;height:3px;-webkit-border-radius:0px 2px 0px 0px;-moz-border-radius:0px 2px 0px 0px;border-radius:0px 2px 0px 0px;background:-webkit-linear-gradient(left,#fd0,#fbb034);background:-moz-linear-gradient(left,#fd0,#fbb034);background:-o-linear-gradient(left,#fd0,#fbb034);background:linear-gradient(90deg,#fd0,#fbb034)}"}),(0,r.jsx)(C(),{id:"e712141ccd62a9a3",children:"body{-ms-overflow-style:none;scrollbar-width:none}body::-webkit-scrollbar{display:none}"})]})}var z=n(6182),F=n(7925),E=n(7463),T=n(7603);function A(){return(0,r.jsx)("div",{className:"text-center pt-20",children:(0,r.jsxs)(T.Z,{children:["Under Construction ",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("span",{role:"img","aria-label":"roadwork sign",children:"\uD83D\uDEA7"})]})})}var O=n(9607);function L(e){var t,n,s,i;let{category:l,frontMatter:x,mdxSource:g,tableOfContents:_}=e,j=null==x?void 0:x.category,y="/".concat(null===(t=null==x?void 0:null===(n=x.slug)||void 0===n?void 0:n.split("/"))||void 0===t?void 0:t.at(0),"?key=").concat(null!==(i=null==x?void 0:x.category)&&void 0!==i?i:"all");return(null==x?void 0:x.draft)===!0?(0,r.jsxs)(z.default,{className:"flex flex-col justify-between",children:[(0,r.jsx)(O.T,{title:"Under Construction - ".concat(x.title)}),(0,r.jsx)(A,{})]}):(0,r.jsxs)(z.default,{className:"flex flex-col justify-between",children:[(0,r.jsx)(O.U,{...x,url:x.slug,summary:x.description,images:[]}),(0,r.jsx)(R,{}),(0,r.jsx)("div",{className:"max-w-full prose prose-lg dark:prose-dark",children:(0,r.jsxs)(c.E.section,{variants:u.Oj,initial:"initial",animate:"animate",exit:"exit",className:"grid justify-center grid-cols-1 lg:grid-cols-12 ",children:[(0,r.jsx)(c.E.div,{variants:u.YK,className:"col-span-12 mt-0",children:(0,r.jsx)("div",{className:"space-y-16",children:(0,r.jsxs)("div",{children:[(0,r.jsx)(p.Z,{className:"mx-auto mb-4 max-w-3xl text-center",children:null==x?void 0:x.title}),j&&(0,r.jsxs)("div",{className:"mt-2 flex justify-center gap-1",children:[x.category&&(0,r.jsxs)("span",{children:[l,": "]}),(0,r.jsx)(o(),{href:y,children:(0,r.jsx)("span",{className:"text-sm font-medium sm:text-base",children:j})})]}),(0,r.jsx)("div",{className:"text-center",children:(0,r.jsxs)("div",{className:"flex items-center justify-center mb-2 space-x-2 text-base",children:[(0,r.jsx)(m.Z,{Icon:h.Z,text:a()(x.date).format("YYYY.MM.DD")}),(0,r.jsx)(m.Z,{Icon:f,text:null==x?void 0:null===(s=x.readingTime)||void 0===s?void 0:s.text})]})}),(0,r.jsx)(d.Z,{className:"mt-4"})]})})}),(0,r.jsx)(c.E.div,{variants:u.YK,className:"lg:col-start-1 lg:col-end-13 ",children:(0,r.jsxs)("div",{className:"flex gap-6",children:[(0,r.jsxs)("div",{className:"w-full",children:[(0,r.jsx)(v,{className:"lg:hidden",tableOfContents:_}),(0,r.jsx)(F.R,{...g,components:E.t})]}),(null==_?void 0:_.length)>0&&(0,r.jsx)("div",{className:"sticky top-[120px] hidden min-w-[240px] max-w-[260px] self-start lg:block",children:(0,r.jsx)(k,{tableOfContents:_})})]})})]})})]})}},5659:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return i},default:function(){return o}});var r=n(5893);n(7294);var s=n(5919),i=!0;function o(e){return(0,r.jsx)(s.default,{category:"snippet",...e})}}},function(e){e.O(0,[477,887,614,974,157,774,888,179],function(){return e(e.s=5426)}),_N_E=e.O()}]);