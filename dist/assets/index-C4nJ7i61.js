import{r as fu,b as yc,a as pu,g as mu}from"./react-UnWXGYuj.js";import{r as q,R as gu,a as Ut,p as _u,D as vu,P as yu}from"./pdf-DF2K9dFT.js";function xu(i,e){for(var t=0;t<e.length;t++){const n=e[t];if(typeof n!="string"&&!Array.isArray(n)){for(const r in n)if(r!=="default"&&!(r in i)){const s=Object.getOwnPropertyDescriptor(n,r);s&&Object.defineProperty(i,r,s.get?s:{enumerable:!0,get:()=>n[r]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var As={exports:{}},$i={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var po;function wu(){if(po)return $i;po=1;var i=fu(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,r=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function a(o,l,c){var h,d={},f=null,_=null;c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),l.ref!==void 0&&(_=l.ref);for(h in l)n.call(l,h)&&!s.hasOwnProperty(h)&&(d[h]=l[h]);if(o&&o.defaultProps)for(h in l=o.defaultProps,l)d[h]===void 0&&(d[h]=l[h]);return{$$typeof:e,type:o,key:f,ref:_,props:d,_owner:r.current}}return $i.Fragment=t,$i.jsx=a,$i.jsxs=a,$i}var mo;function Su(){return mo||(mo=1,As.exports=wu()),As.exports}var L=Su(),wr={},go;function bu(){if(go)return wr;go=1;var i=yc();return wr.createRoot=i.createRoot,wr.hydrateRoot=i.hydrateRoot,wr}var Eu=bu();yc();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sr(){return sr=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(i[n]=t[n])}return i},sr.apply(this,arguments)}var bn;(function(i){i.Pop="POP",i.Push="PUSH",i.Replace="REPLACE"})(bn||(bn={}));const _o="popstate";function Mu(i){i===void 0&&(i={});function e(n,r){let{pathname:s,search:a,hash:o}=n.location;return pa("",{pathname:s,search:a,hash:o},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function t(n,r){return typeof r=="string"?r:ts(r)}return Au(e,t,null,i)}function et(i,e){if(i===!1||i===null||typeof i>"u")throw new Error(e)}function xc(i,e){if(!i){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Tu(){return Math.random().toString(36).substr(2,8)}function vo(i,e){return{usr:i.state,key:i.key,idx:e}}function pa(i,e,t,n){return t===void 0&&(t=null),sr({pathname:typeof i=="string"?i:i.pathname,search:"",hash:""},typeof e=="string"?ki(e):e,{state:t,key:e&&e.key||n||Tu()})}function ts(i){let{pathname:e="/",search:t="",hash:n=""}=i;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function ki(i){let e={};if(i){let t=i.indexOf("#");t>=0&&(e.hash=i.substr(t),i=i.substr(0,t));let n=i.indexOf("?");n>=0&&(e.search=i.substr(n),i=i.substr(0,n)),i&&(e.pathname=i)}return e}function Au(i,e,t,n){n===void 0&&(n={});let{window:r=document.defaultView,v5Compat:s=!1}=n,a=r.history,o=bn.Pop,l=null,c=h();c==null&&(c=0,a.replaceState(sr({},a.state,{idx:c}),""));function h(){return(a.state||{idx:null}).idx}function d(){o=bn.Pop;let m=h(),g=m==null?null:m-c;c=m,l&&l({action:o,location:x.location,delta:g})}function f(m,g){o=bn.Push;let M=pa(x.location,m,g);c=h()+1;let v=vo(M,c),u=x.createHref(M);try{a.pushState(v,"",u)}catch(p){if(p instanceof DOMException&&p.name==="DataCloneError")throw p;r.location.assign(u)}s&&l&&l({action:o,location:x.location,delta:1})}function _(m,g){o=bn.Replace;let M=pa(x.location,m,g);c=h();let v=vo(M,c),u=x.createHref(M);a.replaceState(v,"",u),s&&l&&l({action:o,location:x.location,delta:0})}function y(m){let g=r.location.origin!=="null"?r.location.origin:r.location.href,M=typeof m=="string"?m:ts(m);return M=M.replace(/ $/,"%20"),et(g,"No window.location.(origin|href) available to create URL for href: "+M),new URL(M,g)}let x={get action(){return o},get location(){return i(r,a)},listen(m){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(_o,d),l=m,()=>{r.removeEventListener(_o,d),l=null}},createHref(m){return e(r,m)},createURL:y,encodeLocation(m){let g=y(m);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:f,replace:_,go(m){return a.go(m)}};return x}var yo;(function(i){i.data="data",i.deferred="deferred",i.redirect="redirect",i.error="error"})(yo||(yo={}));function Ru(i,e,t){return t===void 0&&(t="/"),Pu(i,e,t)}function Pu(i,e,t,n){let r=typeof e=="string"?ki(e):e,s=Va(r.pathname||"/",t);if(s==null)return null;let a=wc(i);Cu(a);let o=null;for(let l=0;o==null&&l<a.length;++l){let c=Gu(s);o=Bu(a[l],c)}return o}function wc(i,e,t,n){e===void 0&&(e=[]),t===void 0&&(t=[]),n===void 0&&(n="");let r=(s,a,o)=>{let l={relativePath:o===void 0?s.path||"":o,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};l.relativePath.startsWith("/")&&(et(l.relativePath.startsWith(n),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(n.length));let c=Rn([n,l.relativePath]),h=t.concat(l);s.children&&s.children.length>0&&(et(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),wc(s.children,e,h,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:Fu(c,s.index),routesMeta:h})};return i.forEach((s,a)=>{var o;if(s.path===""||!((o=s.path)!=null&&o.includes("?")))r(s,a);else for(let l of Sc(s.path))r(s,a,l)}),e}function Sc(i){let e=i.split("/");if(e.length===0)return[];let[t,...n]=e,r=t.endsWith("?"),s=t.replace(/\?$/,"");if(n.length===0)return r?[s,""]:[s];let a=Sc(n.join("/")),o=[];return o.push(...a.map(l=>l===""?s:[s,l].join("/"))),r&&o.push(...a),o.map(l=>i.startsWith("/")&&l===""?"/":l)}function Cu(i){i.sort((e,t)=>e.score!==t.score?t.score-e.score:ku(e.routesMeta.map(n=>n.childrenIndex),t.routesMeta.map(n=>n.childrenIndex)))}const Lu=/^:[\w-]+$/,Iu=3,Uu=2,Du=1,Ou=10,Nu=-2,xo=i=>i==="*";function Fu(i,e){let t=i.split("/"),n=t.length;return t.some(xo)&&(n+=Nu),e&&(n+=Uu),t.filter(r=>!xo(r)).reduce((r,s)=>r+(Lu.test(s)?Iu:s===""?Du:Ou),n)}function ku(i,e){return i.length===e.length&&i.slice(0,-1).every((n,r)=>n===e[r])?i[i.length-1]-e[e.length-1]:0}function Bu(i,e,t){let{routesMeta:n}=i,r={},s="/",a=[];for(let o=0;o<n.length;++o){let l=n[o],c=o===n.length-1,h=s==="/"?e:e.slice(s.length)||"/",d=zu({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},h),f=l.route;if(!d)return null;Object.assign(r,d.params),a.push({params:r,pathname:Rn([s,d.pathname]),pathnameBase:$u(Rn([s,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(s=Rn([s,d.pathnameBase]))}return a}function zu(i,e){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[t,n]=Hu(i.path,i.caseSensitive,i.end),r=e.match(t);if(!r)return null;let s=r[0],a=s.replace(/(.)\/+$/,"$1"),o=r.slice(1);return{params:n.reduce((c,h,d)=>{let{paramName:f,isOptional:_}=h;if(f==="*"){let x=o[d]||"";a=s.slice(0,s.length-x.length).replace(/(.)\/+$/,"$1")}const y=o[d];return _&&!y?c[f]=void 0:c[f]=(y||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:a,pattern:i}}function Hu(i,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),xc(i==="*"||!i.endsWith("*")||i.endsWith("/*"),'Route path "'+i+'" will be treated as if it were '+('"'+i.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+i.replace(/\*$/,"/*")+'".'));let n=[],r="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,o,l)=>(n.push({paramName:o,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return i.endsWith("*")?(n.push({paramName:"*"}),r+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?r+="\\/*$":i!==""&&i!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),n]}function Gu(i){try{return i.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return xc(!1,'The URL path "'+i+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),i}}function Va(i,e){if(e==="/")return i;if(!i.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,n=i.charAt(t);return n&&n!=="/"?null:i.slice(t)||"/"}function Vu(i,e){e===void 0&&(e="/");let{pathname:t,search:n="",hash:r=""}=typeof i=="string"?ki(i):i;return{pathname:t?t.startsWith("/")?t:Wu(t,e):e,search:qu(n),hash:Xu(r)}}function Wu(i,e){let t=e.replace(/\/+$/,"").split("/");return i.split("/").forEach(r=>{r===".."?t.length>1&&t.pop():r!=="."&&t.push(r)}),t.length>1?t.join("/"):"/"}function Rs(i,e,t,n){return"Cannot include a '"+i+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ju(i){return i.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Wa(i,e){let t=ju(i);return e?t.map((n,r)=>r===t.length-1?n.pathname:n.pathnameBase):t.map(n=>n.pathnameBase)}function ja(i,e,t,n){n===void 0&&(n=!1);let r;typeof i=="string"?r=ki(i):(r=sr({},i),et(!r.pathname||!r.pathname.includes("?"),Rs("?","pathname","search",r)),et(!r.pathname||!r.pathname.includes("#"),Rs("#","pathname","hash",r)),et(!r.search||!r.search.includes("#"),Rs("#","search","hash",r)));let s=i===""||r.pathname==="",a=s?"/":r.pathname,o;if(a==null)o=t;else{let d=e.length-1;if(!n&&a.startsWith("..")){let f=a.split("/");for(;f[0]==="..";)f.shift(),d-=1;r.pathname=f.join("/")}o=d>=0?e[d]:"/"}let l=Vu(r,o),c=a&&a!=="/"&&a.endsWith("/"),h=(s||a===".")&&t.endsWith("/");return!l.pathname.endsWith("/")&&(c||h)&&(l.pathname+="/"),l}const Rn=i=>i.join("/").replace(/\/\/+/g,"/"),$u=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),qu=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,Xu=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function Ku(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}const bc=["post","put","patch","delete"];new Set(bc);const Yu=["get",...bc];new Set(Yu);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ar(){return ar=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(i[n]=t[n])}return i},ar.apply(this,arguments)}const $a=q.createContext(null),Ju=q.createContext(null),Un=q.createContext(null),us=q.createContext(null),pn=q.createContext({outlet:null,matches:[],isDataRoute:!1}),Ec=q.createContext(null);function Zu(i,e){let{relative:t}=e===void 0?{}:e;Bi()||et(!1);let{basename:n,navigator:r}=q.useContext(Un),{hash:s,pathname:a,search:o}=Tc(i,{relative:t}),l=a;return n!=="/"&&(l=a==="/"?n:Rn([n,a])),r.createHref({pathname:l,search:o,hash:s})}function Bi(){return q.useContext(us)!=null}function Dn(){return Bi()||et(!1),q.useContext(us).location}function Mc(i){q.useContext(Un).static||q.useLayoutEffect(i)}function zi(){let{isDataRoute:i}=q.useContext(pn);return i?dd():Qu()}function Qu(){Bi()||et(!1);let i=q.useContext($a),{basename:e,future:t,navigator:n}=q.useContext(Un),{matches:r}=q.useContext(pn),{pathname:s}=Dn(),a=JSON.stringify(Wa(r,t.v7_relativeSplatPath)),o=q.useRef(!1);return Mc(()=>{o.current=!0}),q.useCallback(function(c,h){if(h===void 0&&(h={}),!o.current)return;if(typeof c=="number"){n.go(c);return}let d=ja(c,JSON.parse(a),s,h.relative==="path");i==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:Rn([e,d.pathname])),(h.replace?n.replace:n.push)(d,h.state,h)},[e,n,a,s,i])}function ed(){let{matches:i}=q.useContext(pn),e=i[i.length-1];return e?e.params:{}}function Tc(i,e){let{relative:t}=e===void 0?{}:e,{future:n}=q.useContext(Un),{matches:r}=q.useContext(pn),{pathname:s}=Dn(),a=JSON.stringify(Wa(r,n.v7_relativeSplatPath));return q.useMemo(()=>ja(i,JSON.parse(a),s,t==="path"),[i,a,s,t])}function td(i,e){return nd(i,e)}function nd(i,e,t,n){Bi()||et(!1);let{navigator:r}=q.useContext(Un),{matches:s}=q.useContext(pn),a=s[s.length-1],o=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let c=Dn(),h;if(e){var d;let m=typeof e=="string"?ki(e):e;l==="/"||(d=m.pathname)!=null&&d.startsWith(l)||et(!1),h=m}else h=c;let f=h.pathname||"/",_=f;if(l!=="/"){let m=l.replace(/^\//,"").split("/");_="/"+f.replace(/^\//,"").split("/").slice(m.length).join("/")}let y=Ru(i,{pathname:_}),x=od(y&&y.map(m=>Object.assign({},m,{params:Object.assign({},o,m.params),pathname:Rn([l,r.encodeLocation?r.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?l:Rn([l,r.encodeLocation?r.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),s,t,n);return e&&x?q.createElement(us.Provider,{value:{location:ar({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:bn.Pop}},x):x}function id(){let i=ud(),e=Ku(i)?i.status+" "+i.statusText:i instanceof Error?i.message:JSON.stringify(i),t=i instanceof Error?i.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return q.createElement(q.Fragment,null,q.createElement("h2",null,"Unexpected Application Error!"),q.createElement("h3",{style:{fontStyle:"italic"}},e),t?q.createElement("pre",{style:r},t):null,null)}const rd=q.createElement(id,null);class sd extends q.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?q.createElement(pn.Provider,{value:this.props.routeContext},q.createElement(Ec.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ad(i){let{routeContext:e,match:t,children:n}=i,r=q.useContext($a);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),q.createElement(pn.Provider,{value:e},n)}function od(i,e,t,n){var r;if(e===void 0&&(e=[]),t===void 0&&(t=null),n===void 0&&(n=null),i==null){var s;if(!t)return null;if(t.errors)i=t.matches;else if((s=n)!=null&&s.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)i=t.matches;else return null}let a=i,o=(r=t)==null?void 0:r.errors;if(o!=null){let h=a.findIndex(d=>d.route.id&&o?.[d.route.id]!==void 0);h>=0||et(!1),a=a.slice(0,Math.min(a.length,h+1))}let l=!1,c=-1;if(t&&n&&n.v7_partialHydration)for(let h=0;h<a.length;h++){let d=a[h];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(c=h),d.route.id){let{loaderData:f,errors:_}=t,y=d.route.loader&&f[d.route.id]===void 0&&(!_||_[d.route.id]===void 0);if(d.route.lazy||y){l=!0,c>=0?a=a.slice(0,c+1):a=[a[0]];break}}}return a.reduceRight((h,d,f)=>{let _,y=!1,x=null,m=null;t&&(_=o&&d.route.id?o[d.route.id]:void 0,x=d.route.errorElement||rd,l&&(c<0&&f===0?(fd("route-fallback"),y=!0,m=null):c===f&&(y=!0,m=d.route.hydrateFallbackElement||null)));let g=e.concat(a.slice(0,f+1)),M=()=>{let v;return _?v=x:y?v=m:d.route.Component?v=q.createElement(d.route.Component,null):d.route.element?v=d.route.element:v=h,q.createElement(ad,{match:d,routeContext:{outlet:h,matches:g,isDataRoute:t!=null},children:v})};return t&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?q.createElement(sd,{location:t.location,revalidation:t.revalidation,component:x,error:_,children:M(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):M()},null)}var Ac=(function(i){return i.UseBlocker="useBlocker",i.UseRevalidator="useRevalidator",i.UseNavigateStable="useNavigate",i})(Ac||{}),Rc=(function(i){return i.UseBlocker="useBlocker",i.UseLoaderData="useLoaderData",i.UseActionData="useActionData",i.UseRouteError="useRouteError",i.UseNavigation="useNavigation",i.UseRouteLoaderData="useRouteLoaderData",i.UseMatches="useMatches",i.UseRevalidator="useRevalidator",i.UseNavigateStable="useNavigate",i.UseRouteId="useRouteId",i})(Rc||{});function ld(i){let e=q.useContext($a);return e||et(!1),e}function cd(i){let e=q.useContext(Ju);return e||et(!1),e}function hd(i){let e=q.useContext(pn);return e||et(!1),e}function Pc(i){let e=hd(),t=e.matches[e.matches.length-1];return t.route.id||et(!1),t.route.id}function ud(){var i;let e=q.useContext(Ec),t=cd(),n=Pc();return e!==void 0?e:(i=t.errors)==null?void 0:i[n]}function dd(){let{router:i}=ld(Ac.UseNavigateStable),e=Pc(Rc.UseNavigateStable),t=q.useRef(!1);return Mc(()=>{t.current=!0}),q.useCallback(function(r,s){s===void 0&&(s={}),t.current&&(typeof r=="number"?i.navigate(r):i.navigate(r,ar({fromRouteId:e},s)))},[i,e])}const wo={};function fd(i,e,t){wo[i]||(wo[i]=!0)}function pd(i,e){i?.v7_startTransition,i?.v7_relativeSplatPath}function Cc(i){let{to:e,replace:t,state:n,relative:r}=i;Bi()||et(!1);let{future:s,static:a}=q.useContext(Un),{matches:o}=q.useContext(pn),{pathname:l}=Dn(),c=zi(),h=ja(e,Wa(o,s.v7_relativeSplatPath),l,r==="path"),d=JSON.stringify(h);return q.useEffect(()=>c(JSON.parse(d),{replace:t,state:n,relative:r}),[c,d,r,t,n]),null}function Wn(i){et(!1)}function md(i){let{basename:e="/",children:t=null,location:n,navigationType:r=bn.Pop,navigator:s,static:a=!1,future:o}=i;Bi()&&et(!1);let l=e.replace(/^\/*/,"/"),c=q.useMemo(()=>({basename:l,navigator:s,static:a,future:ar({v7_relativeSplatPath:!1},o)}),[l,o,s,a]);typeof n=="string"&&(n=ki(n));let{pathname:h="/",search:d="",hash:f="",state:_=null,key:y="default"}=n,x=q.useMemo(()=>{let m=Va(h,l);return m==null?null:{location:{pathname:m,search:d,hash:f,state:_,key:y},navigationType:r}},[l,h,d,f,_,y,r]);return x==null?null:q.createElement(Un.Provider,{value:c},q.createElement(us.Provider,{children:t,value:x}))}function gd(i){let{children:e,location:t}=i;return td(ma(e),t)}new Promise(()=>{});function ma(i,e){e===void 0&&(e=[]);let t=[];return q.Children.forEach(i,(n,r)=>{if(!q.isValidElement(n))return;let s=[...e,r];if(n.type===q.Fragment){t.push.apply(t,ma(n.props.children,s));return}n.type!==Wn&&et(!1),!n.props.index||!n.props.children||et(!1);let a={id:n.props.id||s.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(a.children=ma(n.props.children,s)),t.push(a)}),t}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ga(){return ga=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(i[n]=t[n])}return i},ga.apply(this,arguments)}function _d(i,e){if(i==null)return{};var t={},n=Object.keys(i),r,s;for(s=0;s<n.length;s++)r=n[s],!(e.indexOf(r)>=0)&&(t[r]=i[r]);return t}function vd(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function yd(i,e){return i.button===0&&(!e||e==="_self")&&!vd(i)}const xd=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],wd="6";try{window.__reactRouterVersion=wd}catch{}const Sd="startTransition",So=gu[Sd];function bd(i){let{basename:e,children:t,future:n,window:r}=i,s=q.useRef();s.current==null&&(s.current=Mu({window:r,v5Compat:!0}));let a=s.current,[o,l]=q.useState({action:a.action,location:a.location}),{v7_startTransition:c}=n||{},h=q.useCallback(d=>{c&&So?So(()=>l(d)):l(d)},[l,c]);return q.useLayoutEffect(()=>a.listen(h),[a,h]),q.useEffect(()=>pd(n),[n]),q.createElement(md,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,future:n})}const Ed=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Md=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Td=q.forwardRef(function(e,t){let{onClick:n,relative:r,reloadDocument:s,replace:a,state:o,target:l,to:c,preventScrollReset:h,viewTransition:d}=e,f=_d(e,xd),{basename:_}=q.useContext(Un),y,x=!1;if(typeof c=="string"&&Md.test(c)&&(y=c,Ed))try{let v=new URL(window.location.href),u=c.startsWith("//")?new URL(v.protocol+c):new URL(c),p=Va(u.pathname,_);u.origin===v.origin&&p!=null?c=p+u.search+u.hash:x=!0}catch{}let m=Zu(c,{relative:r}),g=Ad(c,{replace:a,state:o,target:l,preventScrollReset:h,relative:r,viewTransition:d});function M(v){n&&n(v),v.defaultPrevented||g(v)}return q.createElement("a",ga({},f,{href:y||m,onClick:x||s?n:M,ref:t,target:l}))});var bo;(function(i){i.UseScrollRestoration="useScrollRestoration",i.UseSubmit="useSubmit",i.UseSubmitFetcher="useSubmitFetcher",i.UseFetcher="useFetcher",i.useViewTransitionState="useViewTransitionState"})(bo||(bo={}));var Eo;(function(i){i.UseFetcher="useFetcher",i.UseFetchers="useFetchers",i.UseScrollRestoration="useScrollRestoration"})(Eo||(Eo={}));function Ad(i,e){let{target:t,replace:n,state:r,preventScrollReset:s,relative:a,viewTransition:o}=e===void 0?{}:e,l=zi(),c=Dn(),h=Tc(i,{relative:a});return q.useCallback(d=>{if(yd(d,t)){d.preventDefault();let f=n!==void 0?n:ts(c)===ts(h);l(i,{replace:f,state:r,preventScrollReset:s,relative:a,viewTransition:o})}},[c,l,h,n,r,t,i,s,a,o])}var _a=function(i,e){return _a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])},_a(i,e)};function Lc(i,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");_a(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var ns=function(){return ns=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},ns.apply(this,arguments)};function Hi(i,e){var t={};for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&e.indexOf(n)<0&&(t[n]=i[n]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(i);r<n.length;r++)e.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(i,n[r])&&(t[n[r]]=i[n[r]]);return t}function Ic(i,e,t,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var o=i.length-1;o>=0;o--)(a=i[o])&&(s=(r<3?a(s):r>3?a(e,t,s):a(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s}function Uc(i,e){return function(t,n){e(t,n,i)}}function Dc(i,e,t,n,r,s){function a(g){if(g!==void 0&&typeof g!="function")throw new TypeError("Function expected");return g}for(var o=n.kind,l=o==="getter"?"get":o==="setter"?"set":"value",c=!e&&i?n.static?i:i.prototype:null,h=e||(c?Object.getOwnPropertyDescriptor(c,n.name):{}),d,f=!1,_=t.length-1;_>=0;_--){var y={};for(var x in n)y[x]=x==="access"?{}:n[x];for(var x in n.access)y.access[x]=n.access[x];y.addInitializer=function(g){if(f)throw new TypeError("Cannot add initializers after decoration has completed");s.push(a(g||null))};var m=(0,t[_])(o==="accessor"?{get:h.get,set:h.set}:h[l],y);if(o==="accessor"){if(m===void 0)continue;if(m===null||typeof m!="object")throw new TypeError("Object expected");(d=a(m.get))&&(h.get=d),(d=a(m.set))&&(h.set=d),(d=a(m.init))&&r.unshift(d)}else(d=a(m))&&(o==="field"?r.unshift(d):h[l]=d)}c&&Object.defineProperty(c,n.name,h),f=!0}function Oc(i,e,t){for(var n=arguments.length>2,r=0;r<e.length;r++)t=n?e[r].call(i,t):e[r].call(i);return n?t:void 0}function Nc(i){return typeof i=="symbol"?i:"".concat(i)}function Fc(i,e,t){return typeof e=="symbol"&&(e=e.description?"[".concat(e.description,"]"):""),Object.defineProperty(i,"name",{configurable:!0,value:t?"".concat(t," ",e):e})}function kc(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)}function pe(i,e,t,n){function r(s){return s instanceof t?s:new t(function(a){a(s)})}return new(t||(t=Promise))(function(s,a){function o(h){try{c(n.next(h))}catch(d){a(d)}}function l(h){try{c(n.throw(h))}catch(d){a(d)}}function c(h){h.done?s(h.value):r(h.value).then(o,l)}c((n=n.apply(i,e||[])).next())})}function Bc(i,e){var t={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},n,r,s,a=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return a.next=o(0),a.throw=o(1),a.return=o(2),typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function o(c){return function(h){return l([c,h])}}function l(c){if(n)throw new TypeError("Generator is already executing.");for(;a&&(a=0,c[0]&&(t=0)),t;)try{if(n=1,r&&(s=c[0]&2?r.return:c[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,c[1])).done)return s;switch(r=0,s&&(c=[c[0]&2,s.value]),c[0]){case 0:case 1:s=c;break;case 4:return t.label++,{value:c[1],done:!1};case 5:t.label++,r=c[1],c=[0];continue;case 7:c=t.ops.pop(),t.trys.pop();continue;default:if(s=t.trys,!(s=s.length>0&&s[s.length-1])&&(c[0]===6||c[0]===2)){t=0;continue}if(c[0]===3&&(!s||c[1]>s[0]&&c[1]<s[3])){t.label=c[1];break}if(c[0]===6&&t.label<s[1]){t.label=s[1],s=c;break}if(s&&t.label<s[2]){t.label=s[2],t.ops.push(c);break}s[2]&&t.ops.pop(),t.trys.pop();continue}c=e.call(i,t)}catch(h){c=[6,h],r=0}finally{n=s=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}var ds=Object.create?(function(i,e,t,n){n===void 0&&(n=t);var r=Object.getOwnPropertyDescriptor(e,t);(!r||("get"in r?!e.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(i,n,r)}):(function(i,e,t,n){n===void 0&&(n=t),i[n]=e[t]});function zc(i,e){for(var t in i)t!=="default"&&!Object.prototype.hasOwnProperty.call(e,t)&&ds(e,i,t)}function is(i){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&i[e],n=0;if(t)return t.call(i);if(i&&typeof i.length=="number")return{next:function(){return i&&n>=i.length&&(i=void 0),{value:i&&i[n++],done:!i}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function qa(i,e){var t=typeof Symbol=="function"&&i[Symbol.iterator];if(!t)return i;var n=t.call(i),r,s=[],a;try{for(;(e===void 0||e-- >0)&&!(r=n.next()).done;)s.push(r.value)}catch(o){a={error:o}}finally{try{r&&!r.done&&(t=n.return)&&t.call(n)}finally{if(a)throw a.error}}return s}function Hc(){for(var i=[],e=0;e<arguments.length;e++)i=i.concat(qa(arguments[e]));return i}function Gc(){for(var i=0,e=0,t=arguments.length;e<t;e++)i+=arguments[e].length;for(var n=Array(i),r=0,e=0;e<t;e++)for(var s=arguments[e],a=0,o=s.length;a<o;a++,r++)n[r]=s[a];return n}function Vc(i,e,t){if(t||arguments.length===2)for(var n=0,r=e.length,s;n<r;n++)(s||!(n in e))&&(s||(s=Array.prototype.slice.call(e,0,n)),s[n]=e[n]);return i.concat(s||Array.prototype.slice.call(e))}function Ui(i){return this instanceof Ui?(this.v=i,this):new Ui(i)}function Wc(i,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=t.apply(i,e||[]),r,s=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),o("next"),o("throw"),o("return",a),r[Symbol.asyncIterator]=function(){return this},r;function a(_){return function(y){return Promise.resolve(y).then(_,d)}}function o(_,y){n[_]&&(r[_]=function(x){return new Promise(function(m,g){s.push([_,x,m,g])>1||l(_,x)})},y&&(r[_]=y(r[_])))}function l(_,y){try{c(n[_](y))}catch(x){f(s[0][3],x)}}function c(_){_.value instanceof Ui?Promise.resolve(_.value.v).then(h,d):f(s[0][2],_)}function h(_){l("next",_)}function d(_){l("throw",_)}function f(_,y){_(y),s.shift(),s.length&&l(s[0][0],s[0][1])}}function jc(i){var e,t;return e={},n("next"),n("throw",function(r){throw r}),n("return"),e[Symbol.iterator]=function(){return this},e;function n(r,s){e[r]=i[r]?function(a){return(t=!t)?{value:Ui(i[r](a)),done:!1}:s?s(a):a}:s}}function $c(i){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=i[Symbol.asyncIterator],t;return e?e.call(i):(i=typeof is=="function"?is(i):i[Symbol.iterator](),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(s){t[s]=i[s]&&function(a){return new Promise(function(o,l){a=i[s](a),r(o,l,a.done,a.value)})}}function r(s,a,o,l){Promise.resolve(l).then(function(c){s({value:c,done:o})},a)}}function qc(i,e){return Object.defineProperty?Object.defineProperty(i,"raw",{value:e}):i.raw=e,i}var Rd=Object.create?(function(i,e){Object.defineProperty(i,"default",{enumerable:!0,value:e})}):function(i,e){i.default=e},va=function(i){return va=Object.getOwnPropertyNames||function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[t.length]=n);return t},va(i)};function Xc(i){if(i&&i.__esModule)return i;var e={};if(i!=null)for(var t=va(i),n=0;n<t.length;n++)t[n]!=="default"&&ds(e,i,t[n]);return Rd(e,i),e}function Kc(i){return i&&i.__esModule?i:{default:i}}function Yc(i,e,t,n){if(t==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?i!==e||!n:!e.has(i))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?n:t==="a"?n.call(i):n?n.value:e.get(i)}function Jc(i,e,t,n,r){if(n==="m")throw new TypeError("Private method is not writable");if(n==="a"&&!r)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?i!==e||!r:!e.has(i))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n==="a"?r.call(i,t):r?r.value=t:e.set(i,t),t}function Zc(i,e){if(e===null||typeof e!="object"&&typeof e!="function")throw new TypeError("Cannot use 'in' operator on non-object");return typeof i=="function"?e===i:i.has(e)}function Qc(i,e,t){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var n,r;if(t){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");n=e[Symbol.asyncDispose]}if(n===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");n=e[Symbol.dispose],t&&(r=n)}if(typeof n!="function")throw new TypeError("Object not disposable.");r&&(n=function(){try{r.call(this)}catch(s){return Promise.reject(s)}}),i.stack.push({value:e,dispose:n,async:t})}else t&&i.stack.push({async:!0});return e}var Pd=typeof SuppressedError=="function"?SuppressedError:function(i,e,t){var n=new Error(t);return n.name="SuppressedError",n.error=i,n.suppressed=e,n};function eh(i){function e(s){i.error=i.hasError?new Pd(s,i.error,"An error was suppressed during disposal."):s,i.hasError=!0}var t,n=0;function r(){for(;t=i.stack.pop();)try{if(!t.async&&n===1)return n=0,i.stack.push(t),Promise.resolve().then(r);if(t.dispose){var s=t.dispose.call(t.value);if(t.async)return n|=2,Promise.resolve(s).then(r,function(a){return e(a),r()})}else n|=1}catch(a){e(a)}if(n===1)return i.hasError?Promise.reject(i.error):Promise.resolve();if(i.hasError)throw i.error}return r()}function th(i,e){return typeof i=="string"&&/^\.\.?\//.test(i)?i.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i,function(t,n,r,s,a){return n?e?".jsx":".js":r&&(!s||!a)?t:r+s+"."+a.toLowerCase()+"js"}):i}const Cd={__extends:Lc,__assign:ns,__rest:Hi,__decorate:Ic,__param:Uc,__esDecorate:Dc,__runInitializers:Oc,__propKey:Nc,__setFunctionName:Fc,__metadata:kc,__awaiter:pe,__generator:Bc,__createBinding:ds,__exportStar:zc,__values:is,__read:qa,__spread:Hc,__spreadArrays:Gc,__spreadArray:Vc,__await:Ui,__asyncGenerator:Wc,__asyncDelegator:jc,__asyncValues:$c,__makeTemplateObject:qc,__importStar:Xc,__importDefault:Kc,__classPrivateFieldGet:Yc,__classPrivateFieldSet:Jc,__classPrivateFieldIn:Zc,__addDisposableResource:Qc,__disposeResources:eh,__rewriteRelativeImportExtension:th},Ld=Object.freeze(Object.defineProperty({__proto__:null,__addDisposableResource:Qc,get __assign(){return ns},__asyncDelegator:jc,__asyncGenerator:Wc,__asyncValues:$c,__await:Ui,__awaiter:pe,__classPrivateFieldGet:Yc,__classPrivateFieldIn:Zc,__classPrivateFieldSet:Jc,__createBinding:ds,__decorate:Ic,__disposeResources:eh,__esDecorate:Dc,__exportStar:zc,__extends:Lc,__generator:Bc,__importDefault:Kc,__importStar:Xc,__makeTemplateObject:qc,__metadata:kc,__param:Uc,__propKey:Nc,__read:qa,__rest:Hi,__rewriteRelativeImportExtension:th,__runInitializers:Oc,__setFunctionName:Fc,__spread:Hc,__spreadArray:Vc,__spreadArrays:Gc,__values:is,default:Cd},Symbol.toStringTag,{value:"Module"})),Id=i=>i?(...e)=>i(...e):(...e)=>fetch(...e);class Xa extends Error{constructor(e,t="FunctionsError",n){super(e),this.name=t,this.context=n}}class Ud extends Xa{constructor(e){super("Failed to send a request to the Edge Function","FunctionsFetchError",e)}}class Mo extends Xa{constructor(e){super("Relay Error invoking the Edge Function","FunctionsRelayError",e)}}class To extends Xa{constructor(e){super("Edge Function returned a non-2xx status code","FunctionsHttpError",e)}}var ya;(function(i){i.Any="any",i.ApNortheast1="ap-northeast-1",i.ApNortheast2="ap-northeast-2",i.ApSouth1="ap-south-1",i.ApSoutheast1="ap-southeast-1",i.ApSoutheast2="ap-southeast-2",i.CaCentral1="ca-central-1",i.EuCentral1="eu-central-1",i.EuWest1="eu-west-1",i.EuWest2="eu-west-2",i.EuWest3="eu-west-3",i.SaEast1="sa-east-1",i.UsEast1="us-east-1",i.UsWest1="us-west-1",i.UsWest2="us-west-2"})(ya||(ya={}));class Dd{constructor(e,{headers:t={},customFetch:n,region:r=ya.Any}={}){this.url=e,this.headers=t,this.region=r,this.fetch=Id(n)}setAuth(e){this.headers.Authorization=`Bearer ${e}`}invoke(e){return pe(this,arguments,void 0,function*(t,n={}){var r;let s,a;try{const{headers:o,method:l,body:c,signal:h,timeout:d}=n;let f={},{region:_}=n;_||(_=this.region);const y=new URL(`${this.url}/${t}`);_&&_!=="any"&&(f["x-region"]=_,y.searchParams.set("forceFunctionRegion",_));let x;c&&(o&&!Object.prototype.hasOwnProperty.call(o,"Content-Type")||!o)?typeof Blob<"u"&&c instanceof Blob||c instanceof ArrayBuffer?(f["Content-Type"]="application/octet-stream",x=c):typeof c=="string"?(f["Content-Type"]="text/plain",x=c):typeof FormData<"u"&&c instanceof FormData?x=c:(f["Content-Type"]="application/json",x=JSON.stringify(c)):x=c;let m=h;d&&(a=new AbortController,s=setTimeout(()=>a.abort(),d),h?(m=a.signal,h.addEventListener("abort",()=>a.abort())):m=a.signal);const g=yield this.fetch(y.toString(),{method:l||"POST",headers:Object.assign(Object.assign(Object.assign({},f),this.headers),o),body:x,signal:m}).catch(p=>{throw new Ud(p)}),M=g.headers.get("x-relay-error");if(M&&M==="true")throw new Mo(g);if(!g.ok)throw new To(g);let v=((r=g.headers.get("Content-Type"))!==null&&r!==void 0?r:"text/plain").split(";")[0].trim(),u;return v==="application/json"?u=yield g.json():v==="application/octet-stream"||v==="application/pdf"?u=yield g.blob():v==="text/event-stream"?u=g:v==="multipart/form-data"?u=yield g.formData():u=yield g.text(),{data:u,error:null,response:g}}catch(o){return{data:null,error:o,response:o instanceof To||o instanceof Mo?o.context:void 0}}finally{s&&clearTimeout(s)}})}}var mt={};const Gi=pu(Ld);var Sr={},br={},Er={},Mr={},Tr={},Ar={},Ao;function nh(){if(Ao)return Ar;Ao=1,Object.defineProperty(Ar,"__esModule",{value:!0});class i extends Error{constructor(t){super(t.message),this.name="PostgrestError",this.details=t.details,this.hint=t.hint,this.code=t.code}}return Ar.default=i,Ar}var Ro;function ih(){if(Ro)return Tr;Ro=1,Object.defineProperty(Tr,"__esModule",{value:!0});const e=Gi.__importDefault(nh());class t{constructor(r){var s,a;this.shouldThrowOnError=!1,this.method=r.method,this.url=r.url,this.headers=new Headers(r.headers),this.schema=r.schema,this.body=r.body,this.shouldThrowOnError=(s=r.shouldThrowOnError)!==null&&s!==void 0?s:!1,this.signal=r.signal,this.isMaybeSingle=(a=r.isMaybeSingle)!==null&&a!==void 0?a:!1,r.fetch?this.fetch=r.fetch:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}setHeader(r,s){return this.headers=new Headers(this.headers),this.headers.set(r,s),this}then(r,s){this.schema===void 0||(["GET","HEAD"].includes(this.method)?this.headers.set("Accept-Profile",this.schema):this.headers.set("Content-Profile",this.schema)),this.method!=="GET"&&this.method!=="HEAD"&&this.headers.set("Content-Type","application/json");const a=this.fetch;let o=a(this.url.toString(),{method:this.method,headers:this.headers,body:JSON.stringify(this.body),signal:this.signal}).then(async l=>{var c,h,d,f;let _=null,y=null,x=null,m=l.status,g=l.statusText;if(l.ok){if(this.method!=="HEAD"){const p=await l.text();p===""||(this.headers.get("Accept")==="text/csv"||this.headers.get("Accept")&&(!((c=this.headers.get("Accept"))===null||c===void 0)&&c.includes("application/vnd.pgrst.plan+text"))?y=p:y=JSON.parse(p))}const v=(h=this.headers.get("Prefer"))===null||h===void 0?void 0:h.match(/count=(exact|planned|estimated)/),u=(d=l.headers.get("content-range"))===null||d===void 0?void 0:d.split("/");v&&u&&u.length>1&&(x=parseInt(u[1])),this.isMaybeSingle&&this.method==="GET"&&Array.isArray(y)&&(y.length>1?(_={code:"PGRST116",details:`Results contain ${y.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:"JSON object requested, multiple (or no) rows returned"},y=null,x=null,m=406,g="Not Acceptable"):y.length===1?y=y[0]:y=null)}else{const v=await l.text();try{_=JSON.parse(v),Array.isArray(_)&&l.status===404&&(y=[],_=null,m=200,g="OK")}catch{l.status===404&&v===""?(m=204,g="No Content"):_={message:v}}if(_&&this.isMaybeSingle&&(!((f=_?.details)===null||f===void 0)&&f.includes("0 rows"))&&(_=null,m=200,g="OK"),_&&this.shouldThrowOnError)throw new e.default(_)}return{error:_,data:y,count:x,status:m,statusText:g}});return this.shouldThrowOnError||(o=o.catch(l=>{var c,h,d;return{error:{message:`${(c=l?.name)!==null&&c!==void 0?c:"FetchError"}: ${l?.message}`,details:`${(h=l?.stack)!==null&&h!==void 0?h:""}`,hint:"",code:`${(d=l?.code)!==null&&d!==void 0?d:""}`},data:null,count:null,status:0,statusText:""}})),o.then(r,s)}returns(){return this}overrideTypes(){return this}}return Tr.default=t,Tr}var Po;function rh(){if(Po)return Mr;Po=1,Object.defineProperty(Mr,"__esModule",{value:!0});const e=Gi.__importDefault(ih());class t extends e.default{select(r){let s=!1;const a=(r??"*").split("").map(o=>/\s/.test(o)&&!s?"":(o==='"'&&(s=!s),o)).join("");return this.url.searchParams.set("select",a),this.headers.append("Prefer","return=representation"),this}order(r,{ascending:s=!0,nullsFirst:a,foreignTable:o,referencedTable:l=o}={}){const c=l?`${l}.order`:"order",h=this.url.searchParams.get(c);return this.url.searchParams.set(c,`${h?`${h},`:""}${r}.${s?"asc":"desc"}${a===void 0?"":a?".nullsfirst":".nullslast"}`),this}limit(r,{foreignTable:s,referencedTable:a=s}={}){const o=typeof a>"u"?"limit":`${a}.limit`;return this.url.searchParams.set(o,`${r}`),this}range(r,s,{foreignTable:a,referencedTable:o=a}={}){const l=typeof o>"u"?"offset":`${o}.offset`,c=typeof o>"u"?"limit":`${o}.limit`;return this.url.searchParams.set(l,`${r}`),this.url.searchParams.set(c,`${s-r+1}`),this}abortSignal(r){return this.signal=r,this}single(){return this.headers.set("Accept","application/vnd.pgrst.object+json"),this}maybeSingle(){return this.method==="GET"?this.headers.set("Accept","application/json"):this.headers.set("Accept","application/vnd.pgrst.object+json"),this.isMaybeSingle=!0,this}csv(){return this.headers.set("Accept","text/csv"),this}geojson(){return this.headers.set("Accept","application/geo+json"),this}explain({analyze:r=!1,verbose:s=!1,settings:a=!1,buffers:o=!1,wal:l=!1,format:c="text"}={}){var h;const d=[r?"analyze":null,s?"verbose":null,a?"settings":null,o?"buffers":null,l?"wal":null].filter(Boolean).join("|"),f=(h=this.headers.get("Accept"))!==null&&h!==void 0?h:"application/json";return this.headers.set("Accept",`application/vnd.pgrst.plan+${c}; for="${f}"; options=${d};`),c==="json"?this:this}rollback(){return this.headers.append("Prefer","tx=rollback"),this}returns(){return this}maxAffected(r){return this.headers.append("Prefer","handling=strict"),this.headers.append("Prefer",`max-affected=${r}`),this}}return Mr.default=t,Mr}var Co;function Ka(){if(Co)return Er;Co=1,Object.defineProperty(Er,"__esModule",{value:!0});const e=Gi.__importDefault(rh()),t=new RegExp("[,()]");class n extends e.default{eq(s,a){return this.url.searchParams.append(s,`eq.${a}`),this}neq(s,a){return this.url.searchParams.append(s,`neq.${a}`),this}gt(s,a){return this.url.searchParams.append(s,`gt.${a}`),this}gte(s,a){return this.url.searchParams.append(s,`gte.${a}`),this}lt(s,a){return this.url.searchParams.append(s,`lt.${a}`),this}lte(s,a){return this.url.searchParams.append(s,`lte.${a}`),this}like(s,a){return this.url.searchParams.append(s,`like.${a}`),this}likeAllOf(s,a){return this.url.searchParams.append(s,`like(all).{${a.join(",")}}`),this}likeAnyOf(s,a){return this.url.searchParams.append(s,`like(any).{${a.join(",")}}`),this}ilike(s,a){return this.url.searchParams.append(s,`ilike.${a}`),this}ilikeAllOf(s,a){return this.url.searchParams.append(s,`ilike(all).{${a.join(",")}}`),this}ilikeAnyOf(s,a){return this.url.searchParams.append(s,`ilike(any).{${a.join(",")}}`),this}is(s,a){return this.url.searchParams.append(s,`is.${a}`),this}in(s,a){const o=Array.from(new Set(a)).map(l=>typeof l=="string"&&t.test(l)?`"${l}"`:`${l}`).join(",");return this.url.searchParams.append(s,`in.(${o})`),this}contains(s,a){return typeof a=="string"?this.url.searchParams.append(s,`cs.${a}`):Array.isArray(a)?this.url.searchParams.append(s,`cs.{${a.join(",")}}`):this.url.searchParams.append(s,`cs.${JSON.stringify(a)}`),this}containedBy(s,a){return typeof a=="string"?this.url.searchParams.append(s,`cd.${a}`):Array.isArray(a)?this.url.searchParams.append(s,`cd.{${a.join(",")}}`):this.url.searchParams.append(s,`cd.${JSON.stringify(a)}`),this}rangeGt(s,a){return this.url.searchParams.append(s,`sr.${a}`),this}rangeGte(s,a){return this.url.searchParams.append(s,`nxl.${a}`),this}rangeLt(s,a){return this.url.searchParams.append(s,`sl.${a}`),this}rangeLte(s,a){return this.url.searchParams.append(s,`nxr.${a}`),this}rangeAdjacent(s,a){return this.url.searchParams.append(s,`adj.${a}`),this}overlaps(s,a){return typeof a=="string"?this.url.searchParams.append(s,`ov.${a}`):this.url.searchParams.append(s,`ov.{${a.join(",")}}`),this}textSearch(s,a,{config:o,type:l}={}){let c="";l==="plain"?c="pl":l==="phrase"?c="ph":l==="websearch"&&(c="w");const h=o===void 0?"":`(${o})`;return this.url.searchParams.append(s,`${c}fts${h}.${a}`),this}match(s){return Object.entries(s).forEach(([a,o])=>{this.url.searchParams.append(a,`eq.${o}`)}),this}not(s,a,o){return this.url.searchParams.append(s,`not.${a}.${o}`),this}or(s,{foreignTable:a,referencedTable:o=a}={}){const l=o?`${o}.or`:"or";return this.url.searchParams.append(l,`(${s})`),this}filter(s,a,o){return this.url.searchParams.append(s,`${a}.${o}`),this}}return Er.default=n,Er}var Lo;function sh(){if(Lo)return br;Lo=1,Object.defineProperty(br,"__esModule",{value:!0});const e=Gi.__importDefault(Ka());class t{constructor(r,{headers:s={},schema:a,fetch:o}){this.url=r,this.headers=new Headers(s),this.schema=a,this.fetch=o}select(r,s){const{head:a=!1,count:o}=s??{},l=a?"HEAD":"GET";let c=!1;const h=(r??"*").split("").map(d=>/\s/.test(d)&&!c?"":(d==='"'&&(c=!c),d)).join("");return this.url.searchParams.set("select",h),o&&this.headers.append("Prefer",`count=${o}`),new e.default({method:l,url:this.url,headers:this.headers,schema:this.schema,fetch:this.fetch})}insert(r,{count:s,defaultToNull:a=!0}={}){var o;const l="POST";if(s&&this.headers.append("Prefer",`count=${s}`),a||this.headers.append("Prefer","missing=default"),Array.isArray(r)){const c=r.reduce((h,d)=>h.concat(Object.keys(d)),[]);if(c.length>0){const h=[...new Set(c)].map(d=>`"${d}"`);this.url.searchParams.set("columns",h.join(","))}}return new e.default({method:l,url:this.url,headers:this.headers,schema:this.schema,body:r,fetch:(o=this.fetch)!==null&&o!==void 0?o:fetch})}upsert(r,{onConflict:s,ignoreDuplicates:a=!1,count:o,defaultToNull:l=!0}={}){var c;const h="POST";if(this.headers.append("Prefer",`resolution=${a?"ignore":"merge"}-duplicates`),s!==void 0&&this.url.searchParams.set("on_conflict",s),o&&this.headers.append("Prefer",`count=${o}`),l||this.headers.append("Prefer","missing=default"),Array.isArray(r)){const d=r.reduce((f,_)=>f.concat(Object.keys(_)),[]);if(d.length>0){const f=[...new Set(d)].map(_=>`"${_}"`);this.url.searchParams.set("columns",f.join(","))}}return new e.default({method:h,url:this.url,headers:this.headers,schema:this.schema,body:r,fetch:(c=this.fetch)!==null&&c!==void 0?c:fetch})}update(r,{count:s}={}){var a;const o="PATCH";return s&&this.headers.append("Prefer",`count=${s}`),new e.default({method:o,url:this.url,headers:this.headers,schema:this.schema,body:r,fetch:(a=this.fetch)!==null&&a!==void 0?a:fetch})}delete({count:r}={}){var s;const a="DELETE";return r&&this.headers.append("Prefer",`count=${r}`),new e.default({method:a,url:this.url,headers:this.headers,schema:this.schema,fetch:(s=this.fetch)!==null&&s!==void 0?s:fetch})}}return br.default=t,br}var Io;function Od(){if(Io)return Sr;Io=1,Object.defineProperty(Sr,"__esModule",{value:!0});const i=Gi,e=i.__importDefault(sh()),t=i.__importDefault(Ka());class n{constructor(s,{headers:a={},schema:o,fetch:l}={}){this.url=s,this.headers=new Headers(a),this.schemaName=o,this.fetch=l}from(s){const a=new URL(`${this.url}/${s}`);return new e.default(a,{headers:new Headers(this.headers),schema:this.schemaName,fetch:this.fetch})}schema(s){return new n(this.url,{headers:this.headers,schema:s,fetch:this.fetch})}rpc(s,a={},{head:o=!1,get:l=!1,count:c}={}){var h;let d;const f=new URL(`${this.url}/rpc/${s}`);let _;o||l?(d=o?"HEAD":"GET",Object.entries(a).filter(([x,m])=>m!==void 0).map(([x,m])=>[x,Array.isArray(m)?`{${m.join(",")}}`:`${m}`]).forEach(([x,m])=>{f.searchParams.append(x,m)})):(d="POST",_=a);const y=new Headers(this.headers);return c&&y.set("Prefer",`count=${c}`),new t.default({method:d,url:f,headers:y,schema:this.schemaName,body:_,fetch:(h=this.fetch)!==null&&h!==void 0?h:fetch})}}return Sr.default=n,Sr}var Uo;function Nd(){if(Uo)return mt;Uo=1,Object.defineProperty(mt,"__esModule",{value:!0}),mt.PostgrestError=mt.PostgrestBuilder=mt.PostgrestTransformBuilder=mt.PostgrestFilterBuilder=mt.PostgrestQueryBuilder=mt.PostgrestClient=void 0;const i=Gi,e=i.__importDefault(Od());mt.PostgrestClient=e.default;const t=i.__importDefault(sh());mt.PostgrestQueryBuilder=t.default;const n=i.__importDefault(Ka());mt.PostgrestFilterBuilder=n.default;const r=i.__importDefault(rh());mt.PostgrestTransformBuilder=r.default;const s=i.__importDefault(ih());mt.PostgrestBuilder=s.default;const a=i.__importDefault(nh());return mt.PostgrestError=a.default,mt.default={PostgrestClient:e.default,PostgrestQueryBuilder:t.default,PostgrestFilterBuilder:n.default,PostgrestTransformBuilder:r.default,PostgrestBuilder:s.default,PostgrestError:a.default},mt}var ah=Nd();const oh=mu(ah),Fd=xu({__proto__:null,default:oh},[ah]),{PostgrestClient:kd,PostgrestQueryBuilder:qx,PostgrestFilterBuilder:Xx,PostgrestTransformBuilder:Kx,PostgrestBuilder:Yx,PostgrestError:Jx}=oh||Fd;class Bd{static detectEnvironment(){var e;if(typeof WebSocket<"u")return{type:"native",constructor:WebSocket};if(typeof globalThis<"u"&&typeof globalThis.WebSocket<"u")return{type:"native",constructor:globalThis.WebSocket};if(typeof global<"u"&&typeof global.WebSocket<"u")return{type:"native",constructor:global.WebSocket};if(typeof globalThis<"u"&&typeof globalThis.WebSocketPair<"u"&&typeof globalThis.WebSocket>"u")return{type:"cloudflare",error:"Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",workaround:"Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."};if(typeof globalThis<"u"&&globalThis.EdgeRuntime||typeof navigator<"u"&&(!((e=navigator.userAgent)===null||e===void 0)&&e.includes("Vercel-Edge")))return{type:"unsupported",error:"Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",workaround:"Use serverless functions or a different deployment target for WebSocket functionality."};if(typeof process<"u"){const t=process.versions;if(t&&t.node){const n=t.node,r=parseInt(n.replace(/^v/,"").split(".")[0]);return r>=22?typeof globalThis.WebSocket<"u"?{type:"native",constructor:globalThis.WebSocket}:{type:"unsupported",error:`Node.js ${r} detected but native WebSocket not found.`,workaround:"Provide a WebSocket implementation via the transport option."}:{type:"unsupported",error:`Node.js ${r} detected without native WebSocket support.`,workaround:`For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`}}}return{type:"unsupported",error:"Unknown JavaScript runtime without WebSocket support.",workaround:"Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."}}static getWebSocketConstructor(){const e=this.detectEnvironment();if(e.constructor)return e.constructor;let t=e.error||"WebSocket not supported in this environment.";throw e.workaround&&(t+=`

Suggested solution: ${e.workaround}`),new Error(t)}static createWebSocket(e,t){const n=this.getWebSocketConstructor();return new n(e,t)}static isWebSocketSupported(){try{const e=this.detectEnvironment();return e.type==="native"||e.type==="ws"}catch{return!1}}}const zd="2.81.0",Hd=`realtime-js/${zd}`,lh="1.0.0",Gd="2.0.0",Do=lh,xa=1e4,Vd=1e3,Wd=100;var Xn;(function(i){i[i.connecting=0]="connecting",i[i.open=1]="open",i[i.closing=2]="closing",i[i.closed=3]="closed"})(Xn||(Xn={}));var at;(function(i){i.closed="closed",i.errored="errored",i.joined="joined",i.joining="joining",i.leaving="leaving"})(at||(at={}));var kt;(function(i){i.close="phx_close",i.error="phx_error",i.join="phx_join",i.reply="phx_reply",i.leave="phx_leave",i.access_token="access_token"})(kt||(kt={}));var wa;(function(i){i.websocket="websocket"})(wa||(wa={}));var Kn;(function(i){i.Connecting="connecting",i.Open="open",i.Closing="closing",i.Closed="closed"})(Kn||(Kn={}));class jd{constructor(){this.HEADER_LENGTH=1,this.META_LENGTH=4,this.USER_BROADCAST_PUSH_META_LENGTH=5,this.KINDS={push:0,reply:1,broadcast:2,userBroadcastPush:3,userBroadcast:4},this.BINARY_ENCODING=0,this.JSON_ENCODING=1,this.BROADCAST="broadcast"}encode(e,t){if(this._isArrayBuffer(e.payload))return t(this._binaryEncodePush(e));if(e.event===this.BROADCAST&&!(e.payload instanceof ArrayBuffer)&&typeof e.payload.event=="string")return t(this._binaryEncodeUserBroadcastPush(e));let n=[e.join_ref,e.ref,e.topic,e.event,e.payload];return t(JSON.stringify(n))}_binaryEncodePush(e){const{join_ref:t,ref:n,event:r,topic:s,payload:a}=e,o=this.META_LENGTH+t.length+n.length+s.length+r.length,l=new ArrayBuffer(this.HEADER_LENGTH+o);let c=new DataView(l),h=0;c.setUint8(h++,this.KINDS.push),c.setUint8(h++,t.length),c.setUint8(h++,n.length),c.setUint8(h++,s.length),c.setUint8(h++,r.length),Array.from(t,f=>c.setUint8(h++,f.charCodeAt(0))),Array.from(n,f=>c.setUint8(h++,f.charCodeAt(0))),Array.from(s,f=>c.setUint8(h++,f.charCodeAt(0))),Array.from(r,f=>c.setUint8(h++,f.charCodeAt(0)));var d=new Uint8Array(l.byteLength+a.byteLength);return d.set(new Uint8Array(l),0),d.set(new Uint8Array(a),l.byteLength),d.buffer}_binaryEncodeUserBroadcastPush(e){var t;return this._isArrayBuffer((t=e.payload)===null||t===void 0?void 0:t.payload)?this._encodeBinaryUserBroadcastPush(e):this._encodeJsonUserBroadcastPush(e)}_encodeBinaryUserBroadcastPush(e){var t,n;const{join_ref:r,ref:s,topic:a}=e,o=e.payload.event,l=(n=(t=e.payload)===null||t===void 0?void 0:t.payload)!==null&&n!==void 0?n:new ArrayBuffer(0),c=this.USER_BROADCAST_PUSH_META_LENGTH+r.length+s.length+a.length+o.length,h=new ArrayBuffer(this.HEADER_LENGTH+c);let d=new DataView(h),f=0;d.setUint8(f++,this.KINDS.userBroadcastPush),d.setUint8(f++,r.length),d.setUint8(f++,s.length),d.setUint8(f++,a.length),d.setUint8(f++,o.length),d.setUint8(f++,this.BINARY_ENCODING),Array.from(r,y=>d.setUint8(f++,y.charCodeAt(0))),Array.from(s,y=>d.setUint8(f++,y.charCodeAt(0))),Array.from(a,y=>d.setUint8(f++,y.charCodeAt(0))),Array.from(o,y=>d.setUint8(f++,y.charCodeAt(0)));var _=new Uint8Array(h.byteLength+l.byteLength);return _.set(new Uint8Array(h),0),_.set(new Uint8Array(l),h.byteLength),_.buffer}_encodeJsonUserBroadcastPush(e){var t,n;const{join_ref:r,ref:s,topic:a}=e,o=e.payload.event,l=(n=(t=e.payload)===null||t===void 0?void 0:t.payload)!==null&&n!==void 0?n:{},h=new TextEncoder().encode(JSON.stringify(l)).buffer,d=this.USER_BROADCAST_PUSH_META_LENGTH+r.length+s.length+a.length+o.length,f=new ArrayBuffer(this.HEADER_LENGTH+d);let _=new DataView(f),y=0;_.setUint8(y++,this.KINDS.userBroadcastPush),_.setUint8(y++,r.length),_.setUint8(y++,s.length),_.setUint8(y++,a.length),_.setUint8(y++,o.length),_.setUint8(y++,this.JSON_ENCODING),Array.from(r,m=>_.setUint8(y++,m.charCodeAt(0))),Array.from(s,m=>_.setUint8(y++,m.charCodeAt(0))),Array.from(a,m=>_.setUint8(y++,m.charCodeAt(0))),Array.from(o,m=>_.setUint8(y++,m.charCodeAt(0)));var x=new Uint8Array(f.byteLength+h.byteLength);return x.set(new Uint8Array(f),0),x.set(new Uint8Array(h),f.byteLength),x.buffer}decode(e,t){if(this._isArrayBuffer(e)){let n=this._binaryDecode(e);return t(n)}if(typeof e=="string"){const n=JSON.parse(e),[r,s,a,o,l]=n;return t({join_ref:r,ref:s,topic:a,event:o,payload:l})}return t({})}_binaryDecode(e){const t=new DataView(e),n=t.getUint8(0),r=new TextDecoder;switch(n){case this.KINDS.push:return this._decodePush(e,t,r);case this.KINDS.reply:return this._decodeReply(e,t,r);case this.KINDS.broadcast:return this._decodeBroadcast(e,t,r);case this.KINDS.userBroadcast:return this._decodeUserBroadcast(e,t,r)}}_decodePush(e,t,n){const r=t.getUint8(1),s=t.getUint8(2),a=t.getUint8(3);let o=this.HEADER_LENGTH+this.META_LENGTH-1;const l=n.decode(e.slice(o,o+r));o=o+r;const c=n.decode(e.slice(o,o+s));o=o+s;const h=n.decode(e.slice(o,o+a));o=o+a;const d=JSON.parse(n.decode(e.slice(o,e.byteLength)));return{join_ref:l,ref:null,topic:c,event:h,payload:d}}_decodeReply(e,t,n){const r=t.getUint8(1),s=t.getUint8(2),a=t.getUint8(3),o=t.getUint8(4);let l=this.HEADER_LENGTH+this.META_LENGTH;const c=n.decode(e.slice(l,l+r));l=l+r;const h=n.decode(e.slice(l,l+s));l=l+s;const d=n.decode(e.slice(l,l+a));l=l+a;const f=n.decode(e.slice(l,l+o));l=l+o;const _=JSON.parse(n.decode(e.slice(l,e.byteLength))),y={status:f,response:_};return{join_ref:c,ref:h,topic:d,event:kt.reply,payload:y}}_decodeBroadcast(e,t,n){const r=t.getUint8(1),s=t.getUint8(2);let a=this.HEADER_LENGTH+2;const o=n.decode(e.slice(a,a+r));a=a+r;const l=n.decode(e.slice(a,a+s));a=a+s;const c=JSON.parse(n.decode(e.slice(a,e.byteLength)));return{join_ref:null,ref:null,topic:o,event:l,payload:c}}_decodeUserBroadcast(e,t,n){const r=t.getUint8(1),s=t.getUint8(2),a=t.getUint8(3),o=t.getUint8(4);let l=this.HEADER_LENGTH+4;const c=n.decode(e.slice(l,l+r));l=l+r;const h=n.decode(e.slice(l,l+s));l=l+s;const d=n.decode(e.slice(l,l+a));l=l+a;const f=e.slice(l,e.byteLength),_=o===this.JSON_ENCODING?JSON.parse(n.decode(f)):f,y={type:this.BROADCAST,event:h,payload:_};return a>0&&(y.meta=JSON.parse(d)),{join_ref:null,ref:null,topic:c,event:this.BROADCAST,payload:y}}_isArrayBuffer(e){var t;return e instanceof ArrayBuffer||((t=e?.constructor)===null||t===void 0?void 0:t.name)==="ArrayBuffer"}}class ch{constructor(e,t){this.callback=e,this.timerCalc=t,this.timer=void 0,this.tries=0,this.callback=e,this.timerCalc=t}reset(){this.tries=0,clearTimeout(this.timer),this.timer=void 0}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries=this.tries+1,this.callback()},this.timerCalc(this.tries+1))}}var $e;(function(i){i.abstime="abstime",i.bool="bool",i.date="date",i.daterange="daterange",i.float4="float4",i.float8="float8",i.int2="int2",i.int4="int4",i.int4range="int4range",i.int8="int8",i.int8range="int8range",i.json="json",i.jsonb="jsonb",i.money="money",i.numeric="numeric",i.oid="oid",i.reltime="reltime",i.text="text",i.time="time",i.timestamp="timestamp",i.timestamptz="timestamptz",i.timetz="timetz",i.tsrange="tsrange",i.tstzrange="tstzrange"})($e||($e={}));const Oo=(i,e,t={})=>{var n;const r=(n=t.skipTypes)!==null&&n!==void 0?n:[];return e?Object.keys(e).reduce((s,a)=>(s[a]=$d(a,i,e,r),s),{}):{}},$d=(i,e,t,n)=>{const r=e.find(o=>o.name===i),s=r?.type,a=t[i];return s&&!n.includes(s)?hh(s,a):Sa(a)},hh=(i,e)=>{if(i.charAt(0)==="_"){const t=i.slice(1,i.length);return Yd(e,t)}switch(i){case $e.bool:return qd(e);case $e.float4:case $e.float8:case $e.int2:case $e.int4:case $e.int8:case $e.numeric:case $e.oid:return Xd(e);case $e.json:case $e.jsonb:return Kd(e);case $e.timestamp:return Jd(e);case $e.abstime:case $e.date:case $e.daterange:case $e.int4range:case $e.int8range:case $e.money:case $e.reltime:case $e.text:case $e.time:case $e.timestamptz:case $e.timetz:case $e.tsrange:case $e.tstzrange:return Sa(e);default:return Sa(e)}},Sa=i=>i,qd=i=>{switch(i){case"t":return!0;case"f":return!1;default:return i}},Xd=i=>{if(typeof i=="string"){const e=parseFloat(i);if(!Number.isNaN(e))return e}return i},Kd=i=>{if(typeof i=="string")try{return JSON.parse(i)}catch(e){return console.log(`JSON parse error: ${e}`),i}return i},Yd=(i,e)=>{if(typeof i!="string")return i;const t=i.length-1,n=i[t];if(i[0]==="{"&&n==="}"){let s;const a=i.slice(1,t);try{s=JSON.parse("["+a+"]")}catch{s=a?a.split(","):[]}return s.map(o=>hh(e,o))}return i},Jd=i=>typeof i=="string"?i.replace(" ","T"):i,uh=i=>{const e=new URL(i);return e.protocol=e.protocol.replace(/^ws/i,"http"),e.pathname=e.pathname.replace(/\/+$/,"").replace(/\/socket\/websocket$/i,"").replace(/\/socket$/i,"").replace(/\/websocket$/i,""),e.pathname===""||e.pathname==="/"?e.pathname="/api/broadcast":e.pathname=e.pathname+"/api/broadcast",e.href};class Ps{constructor(e,t,n={},r=xa){this.channel=e,this.event=t,this.payload=n,this.timeout=r,this.sent=!1,this.timeoutTimer=void 0,this.ref="",this.receivedResp=null,this.recHooks=[],this.refEvent=null}resend(e){this.timeout=e,this._cancelRefEvent(),this.ref="",this.refEvent=null,this.receivedResp=null,this.sent=!1,this.send()}send(){this._hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload,ref:this.ref,join_ref:this.channel._joinRef()}))}updatePayload(e){this.payload=Object.assign(Object.assign({},this.payload),e)}receive(e,t){var n;return this._hasReceived(e)&&t((n=this.receivedResp)===null||n===void 0?void 0:n.response),this.recHooks.push({status:e,callback:t}),this}startTimeout(){if(this.timeoutTimer)return;this.ref=this.channel.socket._makeRef(),this.refEvent=this.channel._replyEventName(this.ref);const e=t=>{this._cancelRefEvent(),this._cancelTimeout(),this.receivedResp=t,this._matchReceive(t)};this.channel._on(this.refEvent,{},e),this.timeoutTimer=setTimeout(()=>{this.trigger("timeout",{})},this.timeout)}trigger(e,t){this.refEvent&&this.channel._trigger(this.refEvent,{status:e,response:t})}destroy(){this._cancelRefEvent(),this._cancelTimeout()}_cancelRefEvent(){this.refEvent&&this.channel._off(this.refEvent,{})}_cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=void 0}_matchReceive({status:e,response:t}){this.recHooks.filter(n=>n.status===e).forEach(n=>n.callback(t))}_hasReceived(e){return this.receivedResp&&this.receivedResp.status===e}}var No;(function(i){i.SYNC="sync",i.JOIN="join",i.LEAVE="leave"})(No||(No={}));class tr{constructor(e,t){this.channel=e,this.state={},this.pendingDiffs=[],this.joinRef=null,this.enabled=!1,this.caller={onJoin:()=>{},onLeave:()=>{},onSync:()=>{}};const n=t?.events||{state:"presence_state",diff:"presence_diff"};this.channel._on(n.state,{},r=>{const{onJoin:s,onLeave:a,onSync:o}=this.caller;this.joinRef=this.channel._joinRef(),this.state=tr.syncState(this.state,r,s,a),this.pendingDiffs.forEach(l=>{this.state=tr.syncDiff(this.state,l,s,a)}),this.pendingDiffs=[],o()}),this.channel._on(n.diff,{},r=>{const{onJoin:s,onLeave:a,onSync:o}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(r):(this.state=tr.syncDiff(this.state,r,s,a),o())}),this.onJoin((r,s,a)=>{this.channel._trigger("presence",{event:"join",key:r,currentPresences:s,newPresences:a})}),this.onLeave((r,s,a)=>{this.channel._trigger("presence",{event:"leave",key:r,currentPresences:s,leftPresences:a})}),this.onSync(()=>{this.channel._trigger("presence",{event:"sync"})})}static syncState(e,t,n,r){const s=this.cloneDeep(e),a=this.transformState(t),o={},l={};return this.map(s,(c,h)=>{a[c]||(l[c]=h)}),this.map(a,(c,h)=>{const d=s[c];if(d){const f=h.map(m=>m.presence_ref),_=d.map(m=>m.presence_ref),y=h.filter(m=>_.indexOf(m.presence_ref)<0),x=d.filter(m=>f.indexOf(m.presence_ref)<0);y.length>0&&(o[c]=y),x.length>0&&(l[c]=x)}else o[c]=h}),this.syncDiff(s,{joins:o,leaves:l},n,r)}static syncDiff(e,t,n,r){const{joins:s,leaves:a}={joins:this.transformState(t.joins),leaves:this.transformState(t.leaves)};return n||(n=()=>{}),r||(r=()=>{}),this.map(s,(o,l)=>{var c;const h=(c=e[o])!==null&&c!==void 0?c:[];if(e[o]=this.cloneDeep(l),h.length>0){const d=e[o].map(_=>_.presence_ref),f=h.filter(_=>d.indexOf(_.presence_ref)<0);e[o].unshift(...f)}n(o,h,l)}),this.map(a,(o,l)=>{let c=e[o];if(!c)return;const h=l.map(d=>d.presence_ref);c=c.filter(d=>h.indexOf(d.presence_ref)<0),e[o]=c,r(o,c,l),c.length===0&&delete e[o]}),e}static map(e,t){return Object.getOwnPropertyNames(e).map(n=>t(n,e[n]))}static transformState(e){return e=this.cloneDeep(e),Object.getOwnPropertyNames(e).reduce((t,n)=>{const r=e[n];return"metas"in r?t[n]=r.metas.map(s=>(s.presence_ref=s.phx_ref,delete s.phx_ref,delete s.phx_ref_prev,s)):t[n]=r,t},{})}static cloneDeep(e){return JSON.parse(JSON.stringify(e))}onJoin(e){this.caller.onJoin=e}onLeave(e){this.caller.onLeave=e}onSync(e){this.caller.onSync=e}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel._joinRef()}}var Fo;(function(i){i.ALL="*",i.INSERT="INSERT",i.UPDATE="UPDATE",i.DELETE="DELETE"})(Fo||(Fo={}));var nr;(function(i){i.BROADCAST="broadcast",i.PRESENCE="presence",i.POSTGRES_CHANGES="postgres_changes",i.SYSTEM="system"})(nr||(nr={}));var hn;(function(i){i.SUBSCRIBED="SUBSCRIBED",i.TIMED_OUT="TIMED_OUT",i.CLOSED="CLOSED",i.CHANNEL_ERROR="CHANNEL_ERROR"})(hn||(hn={}));class Ya{constructor(e,t={config:{}},n){var r,s;if(this.topic=e,this.params=t,this.socket=n,this.bindings={},this.state=at.closed,this.joinedOnce=!1,this.pushBuffer=[],this.subTopic=e.replace(/^realtime:/i,""),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:"",enabled:!1},private:!1},t.config),this.timeout=this.socket.timeout,this.joinPush=new Ps(this,kt.join,this.params,this.timeout),this.rejoinTimer=new ch(()=>this._rejoinUntilConnected(),this.socket.reconnectAfterMs),this.joinPush.receive("ok",()=>{this.state=at.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(a=>a.send()),this.pushBuffer=[]}),this._onClose(()=>{this.rejoinTimer.reset(),this.socket.log("channel",`close ${this.topic} ${this._joinRef()}`),this.state=at.closed,this.socket._remove(this)}),this._onError(a=>{this._isLeaving()||this._isClosed()||(this.socket.log("channel",`error ${this.topic}`,a),this.state=at.errored,this.rejoinTimer.scheduleTimeout())}),this.joinPush.receive("timeout",()=>{this._isJoining()&&(this.socket.log("channel",`timeout ${this.topic}`,this.joinPush.timeout),this.state=at.errored,this.rejoinTimer.scheduleTimeout())}),this.joinPush.receive("error",a=>{this._isLeaving()||this._isClosed()||(this.socket.log("channel",`error ${this.topic}`,a),this.state=at.errored,this.rejoinTimer.scheduleTimeout())}),this._on(kt.reply,{},(a,o)=>{this._trigger(this._replyEventName(o),a)}),this.presence=new tr(this),this.broadcastEndpointURL=uh(this.socket.endPoint),this.private=this.params.config.private||!1,!this.private&&(!((s=(r=this.params.config)===null||r===void 0?void 0:r.broadcast)===null||s===void 0)&&s.replay))throw`tried to use replay on public channel '${this.topic}'. It must be a private channel.`}subscribe(e,t=this.timeout){var n,r,s;if(this.socket.isConnected()||this.socket.connect(),this.state==at.closed){const{config:{broadcast:a,presence:o,private:l}}=this.params,c=(r=(n=this.bindings.postgres_changes)===null||n===void 0?void 0:n.map(_=>_.filter))!==null&&r!==void 0?r:[],h=!!this.bindings[nr.PRESENCE]&&this.bindings[nr.PRESENCE].length>0||((s=this.params.config.presence)===null||s===void 0?void 0:s.enabled)===!0,d={},f={broadcast:a,presence:Object.assign(Object.assign({},o),{enabled:h}),postgres_changes:c,private:l};this.socket.accessTokenValue&&(d.access_token=this.socket.accessTokenValue),this._onError(_=>e?.(hn.CHANNEL_ERROR,_)),this._onClose(()=>e?.(hn.CLOSED)),this.updateJoinPayload(Object.assign({config:f},d)),this.joinedOnce=!0,this._rejoin(t),this.joinPush.receive("ok",async({postgres_changes:_})=>{var y;if(this.socket.setAuth(),_===void 0){e?.(hn.SUBSCRIBED);return}else{const x=this.bindings.postgres_changes,m=(y=x?.length)!==null&&y!==void 0?y:0,g=[];for(let M=0;M<m;M++){const v=x[M],{filter:{event:u,schema:p,table:w,filter:b}}=v,P=_&&_[M];if(P&&P.event===u&&P.schema===p&&P.table===w&&P.filter===b)g.push(Object.assign(Object.assign({},v),{id:P.id}));else{this.unsubscribe(),this.state=at.errored,e?.(hn.CHANNEL_ERROR,new Error("mismatch between server and client bindings for postgres changes"));return}}this.bindings.postgres_changes=g,e&&e(hn.SUBSCRIBED);return}}).receive("error",_=>{this.state=at.errored,e?.(hn.CHANNEL_ERROR,new Error(JSON.stringify(Object.values(_).join(", ")||"error")))}).receive("timeout",()=>{e?.(hn.TIMED_OUT)})}return this}presenceState(){return this.presence.state}async track(e,t={}){return await this.send({type:"presence",event:"track",payload:e},t.timeout||this.timeout)}async untrack(e={}){return await this.send({type:"presence",event:"untrack"},e)}on(e,t,n){return this.state===at.joined&&e===nr.PRESENCE&&(this.socket.log("channel",`resubscribe to ${this.topic} due to change in presence callbacks on joined channel`),this.unsubscribe().then(()=>this.subscribe())),this._on(e,t,n)}async httpSend(e,t,n={}){var r;const s=this.socket.accessTokenValue?`Bearer ${this.socket.accessTokenValue}`:"";if(t==null)return Promise.reject("Payload is required for httpSend()");const a={method:"POST",headers:{Authorization:s,apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"},body:JSON.stringify({messages:[{topic:this.subTopic,event:e,payload:t,private:this.private}]})},o=await this._fetchWithTimeout(this.broadcastEndpointURL,a,(r=n.timeout)!==null&&r!==void 0?r:this.timeout);if(o.status===202)return{success:!0};let l=o.statusText;try{const c=await o.json();l=c.error||c.message||l}catch{}return Promise.reject(new Error(l))}async send(e,t={}){var n,r;if(!this._canPush()&&e.type==="broadcast"){console.warn("Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.");const{event:s,payload:a}=e,l={method:"POST",headers:{Authorization:this.socket.accessTokenValue?`Bearer ${this.socket.accessTokenValue}`:"",apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"},body:JSON.stringify({messages:[{topic:this.subTopic,event:s,payload:a,private:this.private}]})};try{const c=await this._fetchWithTimeout(this.broadcastEndpointURL,l,(n=t.timeout)!==null&&n!==void 0?n:this.timeout);return await((r=c.body)===null||r===void 0?void 0:r.cancel()),c.ok?"ok":"error"}catch(c){return c.name==="AbortError"?"timed out":"error"}}else return new Promise(s=>{var a,o,l;const c=this._push(e.type,e,t.timeout||this.timeout);e.type==="broadcast"&&!(!((l=(o=(a=this.params)===null||a===void 0?void 0:a.config)===null||o===void 0?void 0:o.broadcast)===null||l===void 0)&&l.ack)&&s("ok"),c.receive("ok",()=>s("ok")),c.receive("error",()=>s("error")),c.receive("timeout",()=>s("timed out"))})}updateJoinPayload(e){this.joinPush.updatePayload(e)}unsubscribe(e=this.timeout){this.state=at.leaving;const t=()=>{this.socket.log("channel",`leave ${this.topic}`),this._trigger(kt.close,"leave",this._joinRef())};this.joinPush.destroy();let n=null;return new Promise(r=>{n=new Ps(this,kt.leave,{},e),n.receive("ok",()=>{t(),r("ok")}).receive("timeout",()=>{t(),r("timed out")}).receive("error",()=>{r("error")}),n.send(),this._canPush()||n.trigger("ok",{})}).finally(()=>{n?.destroy()})}teardown(){this.pushBuffer.forEach(e=>e.destroy()),this.pushBuffer=[],this.rejoinTimer.reset(),this.joinPush.destroy(),this.state=at.closed,this.bindings={}}async _fetchWithTimeout(e,t,n){const r=new AbortController,s=setTimeout(()=>r.abort(),n),a=await this.socket.fetch(e,Object.assign(Object.assign({},t),{signal:r.signal}));return clearTimeout(s),a}_push(e,t,n=this.timeout){if(!this.joinedOnce)throw`tried to push '${e}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;let r=new Ps(this,e,t,n);return this._canPush()?r.send():this._addToPushBuffer(r),r}_addToPushBuffer(e){if(e.startTimeout(),this.pushBuffer.push(e),this.pushBuffer.length>Wd){const t=this.pushBuffer.shift();t&&(t.destroy(),this.socket.log("channel",`discarded push due to buffer overflow: ${t.event}`,t.payload))}}_onMessage(e,t,n){return t}_isMember(e){return this.topic===e}_joinRef(){return this.joinPush.ref}_trigger(e,t,n){var r,s;const a=e.toLocaleLowerCase(),{close:o,error:l,leave:c,join:h}=kt;if(n&&[o,l,c,h].indexOf(a)>=0&&n!==this._joinRef())return;let f=this._onMessage(a,t,n);if(t&&!f)throw"channel onMessage callbacks must return the payload, modified or unmodified";["insert","update","delete"].includes(a)?(r=this.bindings.postgres_changes)===null||r===void 0||r.filter(_=>{var y,x,m;return((y=_.filter)===null||y===void 0?void 0:y.event)==="*"||((m=(x=_.filter)===null||x===void 0?void 0:x.event)===null||m===void 0?void 0:m.toLocaleLowerCase())===a}).map(_=>_.callback(f,n)):(s=this.bindings[a])===null||s===void 0||s.filter(_=>{var y,x,m,g,M,v;if(["broadcast","presence","postgres_changes"].includes(a))if("id"in _){const u=_.id,p=(y=_.filter)===null||y===void 0?void 0:y.event;return u&&((x=t.ids)===null||x===void 0?void 0:x.includes(u))&&(p==="*"||p?.toLocaleLowerCase()===((m=t.data)===null||m===void 0?void 0:m.type.toLocaleLowerCase()))}else{const u=(M=(g=_?.filter)===null||g===void 0?void 0:g.event)===null||M===void 0?void 0:M.toLocaleLowerCase();return u==="*"||u===((v=t?.event)===null||v===void 0?void 0:v.toLocaleLowerCase())}else return _.type.toLocaleLowerCase()===a}).map(_=>{if(typeof f=="object"&&"ids"in f){const y=f.data,{schema:x,table:m,commit_timestamp:g,type:M,errors:v}=y;f=Object.assign(Object.assign({},{schema:x,table:m,commit_timestamp:g,eventType:M,new:{},old:{},errors:v}),this._getPayloadRecords(y))}_.callback(f,n)})}_isClosed(){return this.state===at.closed}_isJoined(){return this.state===at.joined}_isJoining(){return this.state===at.joining}_isLeaving(){return this.state===at.leaving}_replyEventName(e){return`chan_reply_${e}`}_on(e,t,n){const r=e.toLocaleLowerCase(),s={type:r,filter:t,callback:n};return this.bindings[r]?this.bindings[r].push(s):this.bindings[r]=[s],this}_off(e,t){const n=e.toLocaleLowerCase();return this.bindings[n]&&(this.bindings[n]=this.bindings[n].filter(r=>{var s;return!(((s=r.type)===null||s===void 0?void 0:s.toLocaleLowerCase())===n&&Ya.isEqual(r.filter,t))})),this}static isEqual(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(e[n]!==t[n])return!1;return!0}_rejoinUntilConnected(){this.rejoinTimer.scheduleTimeout(),this.socket.isConnected()&&this._rejoin()}_onClose(e){this._on(kt.close,{},e)}_onError(e){this._on(kt.error,{},t=>e(t))}_canPush(){return this.socket.isConnected()&&this._isJoined()}_rejoin(e=this.timeout){this._isLeaving()||(this.socket._leaveOpenTopic(this.topic),this.state=at.joining,this.joinPush.resend(e))}_getPayloadRecords(e){const t={new:{},old:{}};return(e.type==="INSERT"||e.type==="UPDATE")&&(t.new=Oo(e.columns,e.record)),(e.type==="UPDATE"||e.type==="DELETE")&&(t.old=Oo(e.columns,e.old_record)),t}}const Cs=()=>{},Rr={HEARTBEAT_INTERVAL:25e3,RECONNECT_DELAY:10,HEARTBEAT_TIMEOUT_FALLBACK:100},Zd=[1e3,2e3,5e3,1e4],Qd=1e4,ef=`
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;class tf{constructor(e,t){var n;if(this.accessTokenValue=null,this.apiKey=null,this.channels=new Array,this.endPoint="",this.httpEndpoint="",this.headers={},this.params={},this.timeout=xa,this.transport=null,this.heartbeatIntervalMs=Rr.HEARTBEAT_INTERVAL,this.heartbeatTimer=void 0,this.pendingHeartbeatRef=null,this.heartbeatCallback=Cs,this.ref=0,this.reconnectTimer=null,this.vsn=Do,this.logger=Cs,this.conn=null,this.sendBuffer=[],this.serializer=new jd,this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.accessToken=null,this._connectionState="disconnected",this._wasManualDisconnect=!1,this._authPromise=null,this._resolveFetch=r=>r?(...s)=>r(...s):(...s)=>fetch(...s),!(!((n=t?.params)===null||n===void 0)&&n.apikey))throw new Error("API key is required to connect to Realtime");this.apiKey=t.params.apikey,this.endPoint=`${e}/${wa.websocket}`,this.httpEndpoint=uh(e),this._initializeOptions(t),this._setupReconnectionTimer(),this.fetch=this._resolveFetch(t?.fetch)}connect(){if(!(this.isConnecting()||this.isDisconnecting()||this.conn!==null&&this.isConnected())){if(this._setConnectionState("connecting"),this._setAuthSafely("connect"),this.transport)this.conn=new this.transport(this.endpointURL());else try{this.conn=Bd.createWebSocket(this.endpointURL())}catch(e){this._setConnectionState("disconnected");const t=e.message;throw t.includes("Node.js")?new Error(`${t}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`):new Error(`WebSocket not available: ${t}`)}this._setupConnectionHandlers()}}endpointURL(){return this._appendParams(this.endPoint,Object.assign({},this.params,{vsn:this.vsn}))}disconnect(e,t){if(!this.isDisconnecting())if(this._setConnectionState("disconnecting",!0),this.conn){const n=setTimeout(()=>{this._setConnectionState("disconnected")},100);this.conn.onclose=()=>{clearTimeout(n),this._setConnectionState("disconnected")},e?this.conn.close(e,t??""):this.conn.close(),this._teardownConnection()}else this._setConnectionState("disconnected")}getChannels(){return this.channels}async removeChannel(e){const t=await e.unsubscribe();return this.channels.length===0&&this.disconnect(),t}async removeAllChannels(){const e=await Promise.all(this.channels.map(t=>t.unsubscribe()));return this.channels=[],this.disconnect(),e}log(e,t,n){this.logger(e,t,n)}connectionState(){switch(this.conn&&this.conn.readyState){case Xn.connecting:return Kn.Connecting;case Xn.open:return Kn.Open;case Xn.closing:return Kn.Closing;default:return Kn.Closed}}isConnected(){return this.connectionState()===Kn.Open}isConnecting(){return this._connectionState==="connecting"}isDisconnecting(){return this._connectionState==="disconnecting"}channel(e,t={config:{}}){const n=`realtime:${e}`,r=this.getChannels().find(s=>s.topic===n);if(r)return r;{const s=new Ya(`realtime:${e}`,t,this);return this.channels.push(s),s}}push(e){const{topic:t,event:n,payload:r,ref:s}=e,a=()=>{this.encode(e,o=>{var l;(l=this.conn)===null||l===void 0||l.send(o)})};this.log("push",`${t} ${n} (${s})`,r),this.isConnected()?a():this.sendBuffer.push(a)}async setAuth(e=null){this._authPromise=this._performAuth(e);try{await this._authPromise}finally{this._authPromise=null}}async sendHeartbeat(){var e;if(!this.isConnected()){try{this.heartbeatCallback("disconnected")}catch(t){this.log("error","error in heartbeat callback",t)}return}if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this.log("transport","heartbeat timeout. Attempting to re-establish connection");try{this.heartbeatCallback("timeout")}catch(t){this.log("error","error in heartbeat callback",t)}this._wasManualDisconnect=!1,(e=this.conn)===null||e===void 0||e.close(Vd,"heartbeat timeout"),setTimeout(()=>{var t;this.isConnected()||(t=this.reconnectTimer)===null||t===void 0||t.scheduleTimeout()},Rr.HEARTBEAT_TIMEOUT_FALLBACK);return}this.pendingHeartbeatRef=this._makeRef(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef});try{this.heartbeatCallback("sent")}catch(t){this.log("error","error in heartbeat callback",t)}this._setAuthSafely("heartbeat")}onHeartbeat(e){this.heartbeatCallback=e}flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(e=>e()),this.sendBuffer=[])}_makeRef(){let e=this.ref+1;return e===this.ref?this.ref=0:this.ref=e,this.ref.toString()}_leaveOpenTopic(e){let t=this.channels.find(n=>n.topic===e&&(n._isJoined()||n._isJoining()));t&&(this.log("transport",`leaving duplicate topic "${e}"`),t.unsubscribe())}_remove(e){this.channels=this.channels.filter(t=>t.topic!==e.topic)}_onConnMessage(e){this.decode(e.data,t=>{if(t.topic==="phoenix"&&t.event==="phx_reply")try{this.heartbeatCallback(t.payload.status==="ok"?"ok":"error")}catch(c){this.log("error","error in heartbeat callback",c)}t.ref&&t.ref===this.pendingHeartbeatRef&&(this.pendingHeartbeatRef=null);const{topic:n,event:r,payload:s,ref:a}=t,o=a?`(${a})`:"",l=s.status||"";this.log("receive",`${l} ${n} ${r} ${o}`.trim(),s),this.channels.filter(c=>c._isMember(n)).forEach(c=>c._trigger(r,s,a)),this._triggerStateCallbacks("message",t)})}_clearTimer(e){var t;e==="heartbeat"&&this.heartbeatTimer?(clearInterval(this.heartbeatTimer),this.heartbeatTimer=void 0):e==="reconnect"&&((t=this.reconnectTimer)===null||t===void 0||t.reset())}_clearAllTimers(){this._clearTimer("heartbeat"),this._clearTimer("reconnect")}_setupConnectionHandlers(){this.conn&&("binaryType"in this.conn&&(this.conn.binaryType="arraybuffer"),this.conn.onopen=()=>this._onConnOpen(),this.conn.onerror=e=>this._onConnError(e),this.conn.onmessage=e=>this._onConnMessage(e),this.conn.onclose=e=>this._onConnClose(e))}_teardownConnection(){if(this.conn){if(this.conn.readyState===Xn.open||this.conn.readyState===Xn.connecting)try{this.conn.close()}catch(e){this.log("error","Error closing connection",e)}this.conn.onopen=null,this.conn.onerror=null,this.conn.onmessage=null,this.conn.onclose=null,this.conn=null}this._clearAllTimers(),this.channels.forEach(e=>e.teardown())}_onConnOpen(){this._setConnectionState("connected"),this.log("transport",`connected to ${this.endpointURL()}`),this.flushSendBuffer(),this._clearTimer("reconnect"),this.worker?this.workerRef||this._startWorkerHeartbeat():this._startHeartbeat(),this._triggerStateCallbacks("open")}_startHeartbeat(){this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.heartbeatTimer=setInterval(()=>this.sendHeartbeat(),this.heartbeatIntervalMs)}_startWorkerHeartbeat(){this.workerUrl?this.log("worker",`starting worker for from ${this.workerUrl}`):this.log("worker","starting default worker");const e=this._workerObjectUrl(this.workerUrl);this.workerRef=new Worker(e),this.workerRef.onerror=t=>{this.log("worker","worker error",t.message),this.workerRef.terminate()},this.workerRef.onmessage=t=>{t.data.event==="keepAlive"&&this.sendHeartbeat()},this.workerRef.postMessage({event:"start",interval:this.heartbeatIntervalMs})}_onConnClose(e){var t;this._setConnectionState("disconnected"),this.log("transport","close",e),this._triggerChanError(),this._clearTimer("heartbeat"),this._wasManualDisconnect||(t=this.reconnectTimer)===null||t===void 0||t.scheduleTimeout(),this._triggerStateCallbacks("close",e)}_onConnError(e){this._setConnectionState("disconnected"),this.log("transport",`${e}`),this._triggerChanError(),this._triggerStateCallbacks("error",e)}_triggerChanError(){this.channels.forEach(e=>e._trigger(kt.error))}_appendParams(e,t){if(Object.keys(t).length===0)return e;const n=e.match(/\?/)?"&":"?",r=new URLSearchParams(t);return`${e}${n}${r}`}_workerObjectUrl(e){let t;if(e)t=e;else{const n=new Blob([ef],{type:"application/javascript"});t=URL.createObjectURL(n)}return t}_setConnectionState(e,t=!1){this._connectionState=e,e==="connecting"?this._wasManualDisconnect=!1:e==="disconnecting"&&(this._wasManualDisconnect=t)}async _performAuth(e=null){let t;e?t=e:this.accessToken?t=await this.accessToken():t=this.accessTokenValue,this.accessTokenValue!=t&&(this.accessTokenValue=t,this.channels.forEach(n=>{const r={access_token:t,version:Hd};t&&n.updateJoinPayload(r),n.joinedOnce&&n._isJoined()&&n._push(kt.access_token,{access_token:t})}))}async _waitForAuthIfNeeded(){this._authPromise&&await this._authPromise}_setAuthSafely(e="general"){this.setAuth().catch(t=>{this.log("error",`error setting auth in ${e}`,t)})}_triggerStateCallbacks(e,t){try{this.stateChangeCallbacks[e].forEach(n=>{try{n(t)}catch(r){this.log("error",`error in ${e} callback`,r)}})}catch(n){this.log("error",`error triggering ${e} callbacks`,n)}}_setupReconnectionTimer(){this.reconnectTimer=new ch(async()=>{setTimeout(async()=>{await this._waitForAuthIfNeeded(),this.isConnected()||this.connect()},Rr.RECONNECT_DELAY)},this.reconnectAfterMs)}_initializeOptions(e){var t,n,r,s,a,o,l,c,h,d,f,_;switch(this.transport=(t=e?.transport)!==null&&t!==void 0?t:null,this.timeout=(n=e?.timeout)!==null&&n!==void 0?n:xa,this.heartbeatIntervalMs=(r=e?.heartbeatIntervalMs)!==null&&r!==void 0?r:Rr.HEARTBEAT_INTERVAL,this.worker=(s=e?.worker)!==null&&s!==void 0?s:!1,this.accessToken=(a=e?.accessToken)!==null&&a!==void 0?a:null,this.heartbeatCallback=(o=e?.heartbeatCallback)!==null&&o!==void 0?o:Cs,this.vsn=(l=e?.vsn)!==null&&l!==void 0?l:Do,e?.params&&(this.params=e.params),e?.logger&&(this.logger=e.logger),(e?.logLevel||e?.log_level)&&(this.logLevel=e.logLevel||e.log_level,this.params=Object.assign(Object.assign({},this.params),{log_level:this.logLevel})),this.reconnectAfterMs=(c=e?.reconnectAfterMs)!==null&&c!==void 0?c:(y=>Zd[y-1]||Qd),this.vsn){case lh:this.encode=(h=e?.encode)!==null&&h!==void 0?h:((y,x)=>x(JSON.stringify(y))),this.decode=(d=e?.decode)!==null&&d!==void 0?d:((y,x)=>x(JSON.parse(y)));break;case Gd:this.encode=(f=e?.encode)!==null&&f!==void 0?f:this.serializer.encode.bind(this.serializer),this.decode=(_=e?.decode)!==null&&_!==void 0?_:this.serializer.decode.bind(this.serializer);break;default:throw new Error(`Unsupported serializer version: ${this.vsn}`)}if(this.worker){if(typeof window<"u"&&!window.Worker)throw new Error("Web Worker is not supported");this.workerUrl=e?.workerUrl}}}class Ja extends Error{constructor(e){super(e),this.__isStorageError=!0,this.name="StorageError"}}function Je(i){return typeof i=="object"&&i!==null&&"__isStorageError"in i}class nf extends Ja{constructor(e,t,n){super(e),this.name="StorageApiError",this.status=t,this.statusCode=n}toJSON(){return{name:this.name,message:this.message,status:this.status,statusCode:this.statusCode}}}class ba extends Ja{constructor(e,t){super(e),this.name="StorageUnknownError",this.originalError=t}}const Za=i=>i?(...e)=>i(...e):(...e)=>fetch(...e),rf=()=>Response,Ea=i=>{if(Array.isArray(i))return i.map(t=>Ea(t));if(typeof i=="function"||i!==Object(i))return i;const e={};return Object.entries(i).forEach(([t,n])=>{const r=t.replace(/([-_][a-z])/gi,s=>s.toUpperCase().replace(/[-_]/g,""));e[r]=Ea(n)}),e},sf=i=>{if(typeof i!="object"||i===null)return!1;const e=Object.getPrototypeOf(i);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in i)&&!(Symbol.iterator in i)},Ls=i=>{var e;return i.msg||i.message||i.error_description||(typeof i.error=="string"?i.error:(e=i.error)===null||e===void 0?void 0:e.message)||JSON.stringify(i)},af=(i,e,t)=>pe(void 0,void 0,void 0,function*(){const n=yield rf();i instanceof n&&!t?.noResolveJson?i.json().then(r=>{const s=i.status||500,a=r?.statusCode||s+"";e(new nf(Ls(r),s,a))}).catch(r=>{e(new ba(Ls(r),r))}):e(new ba(Ls(i),i))}),of=(i,e,t,n)=>{const r={method:i,headers:e?.headers||{}};return i==="GET"||!n?r:(sf(n)?(r.headers=Object.assign({"Content-Type":"application/json"},e?.headers),r.body=JSON.stringify(n)):r.body=n,e?.duplex&&(r.duplex=e.duplex),Object.assign(Object.assign({},r),t))};function fr(i,e,t,n,r,s){return pe(this,void 0,void 0,function*(){return new Promise((a,o)=>{i(t,of(e,n,r,s)).then(l=>{if(!l.ok)throw l;return n?.noResolveJson?l:l.json()}).then(l=>a(l)).catch(l=>af(l,o,n))})})}function or(i,e,t,n){return pe(this,void 0,void 0,function*(){return fr(i,"GET",e,t,n)})}function qt(i,e,t,n,r){return pe(this,void 0,void 0,function*(){return fr(i,"POST",e,n,r,t)})}function Ma(i,e,t,n,r){return pe(this,void 0,void 0,function*(){return fr(i,"PUT",e,n,r,t)})}function lf(i,e,t,n){return pe(this,void 0,void 0,function*(){return fr(i,"HEAD",e,Object.assign(Object.assign({},t),{noResolveJson:!0}),n)})}function Qa(i,e,t,n,r){return pe(this,void 0,void 0,function*(){return fr(i,"DELETE",e,n,r,t)})}class cf{constructor(e,t){this.downloadFn=e,this.shouldThrowOnError=t}then(e,t){return this.execute().then(e,t)}execute(){return pe(this,void 0,void 0,function*(){try{return{data:(yield this.downloadFn()).body,error:null}}catch(e){if(this.shouldThrowOnError)throw e;if(Je(e))return{data:null,error:e};throw e}})}}var dh;class hf{constructor(e,t){this.downloadFn=e,this.shouldThrowOnError=t,this[dh]="BlobDownloadBuilder",this.promise=null}asStream(){return new cf(this.downloadFn,this.shouldThrowOnError)}then(e,t){return this.getPromise().then(e,t)}catch(e){return this.getPromise().catch(e)}finally(e){return this.getPromise().finally(e)}getPromise(){return this.promise||(this.promise=this.execute()),this.promise}execute(){return pe(this,void 0,void 0,function*(){try{return{data:yield(yield this.downloadFn()).blob(),error:null}}catch(e){if(this.shouldThrowOnError)throw e;if(Je(e))return{data:null,error:e};throw e}})}}dh=Symbol.toStringTag;const uf={limit:100,offset:0,sortBy:{column:"name",order:"asc"}},ko={cacheControl:"3600",contentType:"text/plain;charset=UTF-8",upsert:!1};class df{constructor(e,t={},n,r){this.shouldThrowOnError=!1,this.url=e,this.headers=t,this.bucketId=n,this.fetch=Za(r)}throwOnError(){return this.shouldThrowOnError=!0,this}uploadOrUpdate(e,t,n,r){return pe(this,void 0,void 0,function*(){try{let s;const a=Object.assign(Object.assign({},ko),r);let o=Object.assign(Object.assign({},this.headers),e==="POST"&&{"x-upsert":String(a.upsert)});const l=a.metadata;typeof Blob<"u"&&n instanceof Blob?(s=new FormData,s.append("cacheControl",a.cacheControl),l&&s.append("metadata",this.encodeMetadata(l)),s.append("",n)):typeof FormData<"u"&&n instanceof FormData?(s=n,s.has("cacheControl")||s.append("cacheControl",a.cacheControl),l&&!s.has("metadata")&&s.append("metadata",this.encodeMetadata(l))):(s=n,o["cache-control"]=`max-age=${a.cacheControl}`,o["content-type"]=a.contentType,l&&(o["x-metadata"]=this.toBase64(this.encodeMetadata(l))),(typeof ReadableStream<"u"&&s instanceof ReadableStream||s&&typeof s=="object"&&"pipe"in s&&typeof s.pipe=="function")&&!a.duplex&&(a.duplex="half")),r?.headers&&(o=Object.assign(Object.assign({},o),r.headers));const c=this._removeEmptyFolders(t),h=this._getFinalPath(c),d=yield(e=="PUT"?Ma:qt)(this.fetch,`${this.url}/object/${h}`,s,Object.assign({headers:o},a?.duplex?{duplex:a.duplex}:{}));return{data:{path:c,id:d.Id,fullPath:d.Key},error:null}}catch(s){if(this.shouldThrowOnError)throw s;if(Je(s))return{data:null,error:s};throw s}})}upload(e,t,n){return pe(this,void 0,void 0,function*(){return this.uploadOrUpdate("POST",e,t,n)})}uploadToSignedUrl(e,t,n,r){return pe(this,void 0,void 0,function*(){const s=this._removeEmptyFolders(e),a=this._getFinalPath(s),o=new URL(this.url+`/object/upload/sign/${a}`);o.searchParams.set("token",t);try{let l;const c=Object.assign({upsert:ko.upsert},r),h=Object.assign(Object.assign({},this.headers),{"x-upsert":String(c.upsert)});typeof Blob<"u"&&n instanceof Blob?(l=new FormData,l.append("cacheControl",c.cacheControl),l.append("",n)):typeof FormData<"u"&&n instanceof FormData?(l=n,l.append("cacheControl",c.cacheControl)):(l=n,h["cache-control"]=`max-age=${c.cacheControl}`,h["content-type"]=c.contentType);const d=yield Ma(this.fetch,o.toString(),l,{headers:h});return{data:{path:s,fullPath:d.Key},error:null}}catch(l){if(this.shouldThrowOnError)throw l;if(Je(l))return{data:null,error:l};throw l}})}createSignedUploadUrl(e,t){return pe(this,void 0,void 0,function*(){try{let n=this._getFinalPath(e);const r=Object.assign({},this.headers);t?.upsert&&(r["x-upsert"]="true");const s=yield qt(this.fetch,`${this.url}/object/upload/sign/${n}`,{},{headers:r}),a=new URL(this.url+s.url),o=a.searchParams.get("token");if(!o)throw new Ja("No token returned by API");return{data:{signedUrl:a.toString(),path:e,token:o},error:null}}catch(n){if(this.shouldThrowOnError)throw n;if(Je(n))return{data:null,error:n};throw n}})}update(e,t,n){return pe(this,void 0,void 0,function*(){return this.uploadOrUpdate("PUT",e,t,n)})}move(e,t,n){return pe(this,void 0,void 0,function*(){try{return{data:yield qt(this.fetch,`${this.url}/object/move`,{bucketId:this.bucketId,sourceKey:e,destinationKey:t,destinationBucket:n?.destinationBucket},{headers:this.headers}),error:null}}catch(r){if(this.shouldThrowOnError)throw r;if(Je(r))return{data:null,error:r};throw r}})}copy(e,t,n){return pe(this,void 0,void 0,function*(){try{return{data:{path:(yield qt(this.fetch,`${this.url}/object/copy`,{bucketId:this.bucketId,sourceKey:e,destinationKey:t,destinationBucket:n?.destinationBucket},{headers:this.headers})).Key},error:null}}catch(r){if(this.shouldThrowOnError)throw r;if(Je(r))return{data:null,error:r};throw r}})}createSignedUrl(e,t,n){return pe(this,void 0,void 0,function*(){try{let r=this._getFinalPath(e),s=yield qt(this.fetch,`${this.url}/object/sign/${r}`,Object.assign({expiresIn:t},n?.transform?{transform:n.transform}:{}),{headers:this.headers});const a=n?.download?`&download=${n.download===!0?"":n.download}`:"";return s={signedUrl:encodeURI(`${this.url}${s.signedURL}${a}`)},{data:s,error:null}}catch(r){if(this.shouldThrowOnError)throw r;if(Je(r))return{data:null,error:r};throw r}})}createSignedUrls(e,t,n){return pe(this,void 0,void 0,function*(){try{const r=yield qt(this.fetch,`${this.url}/object/sign/${this.bucketId}`,{expiresIn:t,paths:e},{headers:this.headers}),s=n?.download?`&download=${n.download===!0?"":n.download}`:"";return{data:r.map(a=>Object.assign(Object.assign({},a),{signedUrl:a.signedURL?encodeURI(`${this.url}${a.signedURL}${s}`):null})),error:null}}catch(r){if(this.shouldThrowOnError)throw r;if(Je(r))return{data:null,error:r};throw r}})}download(e,t){const r=typeof t?.transform<"u"?"render/image/authenticated":"object",s=this.transformOptsToQueryString(t?.transform||{}),a=s?`?${s}`:"",o=this._getFinalPath(e),l=()=>or(this.fetch,`${this.url}/${r}/${o}${a}`,{headers:this.headers,noResolveJson:!0});return new hf(l,this.shouldThrowOnError)}info(e){return pe(this,void 0,void 0,function*(){const t=this._getFinalPath(e);try{const n=yield or(this.fetch,`${this.url}/object/info/${t}`,{headers:this.headers});return{data:Ea(n),error:null}}catch(n){if(this.shouldThrowOnError)throw n;if(Je(n))return{data:null,error:n};throw n}})}exists(e){return pe(this,void 0,void 0,function*(){const t=this._getFinalPath(e);try{return yield lf(this.fetch,`${this.url}/object/${t}`,{headers:this.headers}),{data:!0,error:null}}catch(n){if(this.shouldThrowOnError)throw n;if(Je(n)&&n instanceof ba){const r=n.originalError;if([400,404].includes(r?.status))return{data:!1,error:n}}throw n}})}getPublicUrl(e,t){const n=this._getFinalPath(e),r=[],s=t?.download?`download=${t.download===!0?"":t.download}`:"";s!==""&&r.push(s);const o=typeof t?.transform<"u"?"render/image":"object",l=this.transformOptsToQueryString(t?.transform||{});l!==""&&r.push(l);let c=r.join("&");return c!==""&&(c=`?${c}`),{data:{publicUrl:encodeURI(`${this.url}/${o}/public/${n}${c}`)}}}remove(e){return pe(this,void 0,void 0,function*(){try{return{data:yield Qa(this.fetch,`${this.url}/object/${this.bucketId}`,{prefixes:e},{headers:this.headers}),error:null}}catch(t){if(this.shouldThrowOnError)throw t;if(Je(t))return{data:null,error:t};throw t}})}list(e,t,n){return pe(this,void 0,void 0,function*(){try{const r=Object.assign(Object.assign(Object.assign({},uf),t),{prefix:e||""});return{data:yield qt(this.fetch,`${this.url}/object/list/${this.bucketId}`,r,{headers:this.headers},n),error:null}}catch(r){if(this.shouldThrowOnError)throw r;if(Je(r))return{data:null,error:r};throw r}})}listV2(e,t){return pe(this,void 0,void 0,function*(){try{const n=Object.assign({},e);return{data:yield qt(this.fetch,`${this.url}/object/list-v2/${this.bucketId}`,n,{headers:this.headers},t),error:null}}catch(n){if(this.shouldThrowOnError)throw n;if(Je(n))return{data:null,error:n};throw n}})}encodeMetadata(e){return JSON.stringify(e)}toBase64(e){return typeof Buffer<"u"?Buffer.from(e).toString("base64"):btoa(e)}_getFinalPath(e){return`${this.bucketId}/${e.replace(/^\/+/,"")}`}_removeEmptyFolders(e){return e.replace(/^\/|\/$/g,"").replace(/\/+/g,"/")}transformOptsToQueryString(e){const t=[];return e.width&&t.push(`width=${e.width}`),e.height&&t.push(`height=${e.height}`),e.resize&&t.push(`resize=${e.resize}`),e.format&&t.push(`format=${e.format}`),e.quality&&t.push(`quality=${e.quality}`),t.join("&")}}const fh="2.81.0",ph={"X-Client-Info":`storage-js/${fh}`};class ff{constructor(e,t={},n,r){this.shouldThrowOnError=!1;const s=new URL(e);r?.useNewHostname&&/supabase\.(co|in|red)$/.test(s.hostname)&&!s.hostname.includes("storage.supabase.")&&(s.hostname=s.hostname.replace("supabase.","storage.supabase.")),this.url=s.href.replace(/\/$/,""),this.headers=Object.assign(Object.assign({},ph),t),this.fetch=Za(n)}throwOnError(){return this.shouldThrowOnError=!0,this}listBuckets(e){return pe(this,void 0,void 0,function*(){try{const t=this.listBucketOptionsToQueryString(e);return{data:yield or(this.fetch,`${this.url}/bucket${t}`,{headers:this.headers}),error:null}}catch(t){if(this.shouldThrowOnError)throw t;if(Je(t))return{data:null,error:t};throw t}})}getBucket(e){return pe(this,void 0,void 0,function*(){try{return{data:yield or(this.fetch,`${this.url}/bucket/${e}`,{headers:this.headers}),error:null}}catch(t){if(this.shouldThrowOnError)throw t;if(Je(t))return{data:null,error:t};throw t}})}createBucket(e){return pe(this,arguments,void 0,function*(t,n={public:!1}){try{return{data:yield qt(this.fetch,`${this.url}/bucket`,{id:t,name:t,type:n.type,public:n.public,file_size_limit:n.fileSizeLimit,allowed_mime_types:n.allowedMimeTypes},{headers:this.headers}),error:null}}catch(r){if(this.shouldThrowOnError)throw r;if(Je(r))return{data:null,error:r};throw r}})}updateBucket(e,t){return pe(this,void 0,void 0,function*(){try{return{data:yield Ma(this.fetch,`${this.url}/bucket/${e}`,{id:e,name:e,public:t.public,file_size_limit:t.fileSizeLimit,allowed_mime_types:t.allowedMimeTypes},{headers:this.headers}),error:null}}catch(n){if(this.shouldThrowOnError)throw n;if(Je(n))return{data:null,error:n};throw n}})}emptyBucket(e){return pe(this,void 0,void 0,function*(){try{return{data:yield qt(this.fetch,`${this.url}/bucket/${e}/empty`,{},{headers:this.headers}),error:null}}catch(t){if(this.shouldThrowOnError)throw t;if(Je(t))return{data:null,error:t};throw t}})}deleteBucket(e){return pe(this,void 0,void 0,function*(){try{return{data:yield Qa(this.fetch,`${this.url}/bucket/${e}`,{},{headers:this.headers}),error:null}}catch(t){if(this.shouldThrowOnError)throw t;if(Je(t))return{data:null,error:t};throw t}})}listBucketOptionsToQueryString(e){const t={};return e&&("limit"in e&&(t.limit=String(e.limit)),"offset"in e&&(t.offset=String(e.offset)),e.search&&(t.search=e.search),e.sortColumn&&(t.sortColumn=e.sortColumn),e.sortOrder&&(t.sortOrder=e.sortOrder)),Object.keys(t).length>0?"?"+new URLSearchParams(t).toString():""}}class pf{constructor(e,t={},n){this.shouldThrowOnError=!1,this.url=e.replace(/\/$/,""),this.headers=Object.assign(Object.assign({},ph),t),this.fetch=Za(n)}throwOnError(){return this.shouldThrowOnError=!0,this}createBucket(e){return pe(this,void 0,void 0,function*(){try{return{data:yield qt(this.fetch,`${this.url}/bucket`,{name:e},{headers:this.headers}),error:null}}catch(t){if(this.shouldThrowOnError)throw t;if(Je(t))return{data:null,error:t};throw t}})}listBuckets(e){return pe(this,void 0,void 0,function*(){try{const t=new URLSearchParams;e?.limit!==void 0&&t.set("limit",e.limit.toString()),e?.offset!==void 0&&t.set("offset",e.offset.toString()),e?.sortColumn&&t.set("sortColumn",e.sortColumn),e?.sortOrder&&t.set("sortOrder",e.sortOrder),e?.search&&t.set("search",e.search);const n=t.toString(),r=n?`${this.url}/bucket?${n}`:`${this.url}/bucket`;return{data:yield or(this.fetch,r,{headers:this.headers}),error:null}}catch(t){if(this.shouldThrowOnError)throw t;if(Je(t))return{data:null,error:t};throw t}})}deleteBucket(e){return pe(this,void 0,void 0,function*(){try{return{data:yield Qa(this.fetch,`${this.url}/bucket/${e}`,{},{headers:this.headers}),error:null}}catch(t){if(this.shouldThrowOnError)throw t;if(Je(t))return{data:null,error:t};throw t}})}}const eo={"X-Client-Info":`storage-js/${fh}`,"Content-Type":"application/json"};class mh extends Error{constructor(e){super(e),this.__isStorageVectorsError=!0,this.name="StorageVectorsError"}}function Lt(i){return typeof i=="object"&&i!==null&&"__isStorageVectorsError"in i}class Is extends mh{constructor(e,t,n){super(e),this.name="StorageVectorsApiError",this.status=t,this.statusCode=n}toJSON(){return{name:this.name,message:this.message,status:this.status,statusCode:this.statusCode}}}class mf extends mh{constructor(e,t){super(e),this.name="StorageVectorsUnknownError",this.originalError=t}}var Bo;(function(i){i.InternalError="InternalError",i.S3VectorConflictException="S3VectorConflictException",i.S3VectorNotFoundException="S3VectorNotFoundException",i.S3VectorBucketNotEmpty="S3VectorBucketNotEmpty",i.S3VectorMaxBucketsExceeded="S3VectorMaxBucketsExceeded",i.S3VectorMaxIndexesExceeded="S3VectorMaxIndexesExceeded"})(Bo||(Bo={}));const to=i=>i?(...e)=>i(...e):(...e)=>fetch(...e),gf=i=>{if(typeof i!="object"||i===null)return!1;const e=Object.getPrototypeOf(i);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in i)&&!(Symbol.iterator in i)},zo=i=>i.msg||i.message||i.error_description||i.error||JSON.stringify(i),_f=(i,e,t)=>pe(void 0,void 0,void 0,function*(){if(i&&typeof i=="object"&&"status"in i&&"ok"in i&&typeof i.status=="number"&&!t?.noResolveJson){const r=i.status||500,s=i;if(typeof s.json=="function")s.json().then(a=>{const o=a?.statusCode||a?.code||r+"";e(new Is(zo(a),r,o))}).catch(()=>{const a=r+"",o=s.statusText||`HTTP ${r} error`;e(new Is(o,r,a))});else{const a=r+"",o=s.statusText||`HTTP ${r} error`;e(new Is(o,r,a))}}else e(new mf(zo(i),i))}),vf=(i,e,t,n)=>{const r={method:i,headers:e?.headers||{}};return n?(gf(n)?(r.headers=Object.assign({"Content-Type":"application/json"},e?.headers),r.body=JSON.stringify(n)):r.body=n,Object.assign(Object.assign({},r),t)):r};function yf(i,e,t,n,r,s){return pe(this,void 0,void 0,function*(){return new Promise((a,o)=>{i(t,vf(e,n,r,s)).then(l=>{if(!l.ok)throw l;if(n?.noResolveJson)return l;const c=l.headers.get("content-type");return!c||!c.includes("application/json")?{}:l.json()}).then(l=>a(l)).catch(l=>_f(l,o,n))})})}function It(i,e,t,n,r){return pe(this,void 0,void 0,function*(){return yf(i,"POST",e,n,r,t)})}class xf{constructor(e,t={},n){this.shouldThrowOnError=!1,this.url=e.replace(/\/$/,""),this.headers=Object.assign(Object.assign({},eo),t),this.fetch=to(n)}throwOnError(){return this.shouldThrowOnError=!0,this}createIndex(e){return pe(this,void 0,void 0,function*(){try{return{data:(yield It(this.fetch,`${this.url}/CreateIndex`,e,{headers:this.headers}))||{},error:null}}catch(t){if(this.shouldThrowOnError)throw t;if(Lt(t))return{data:null,error:t};throw t}})}getIndex(e,t){return pe(this,void 0,void 0,function*(){try{return{data:yield It(this.fetch,`${this.url}/GetIndex`,{vectorBucketName:e,indexName:t},{headers:this.headers}),error:null}}catch(n){if(this.shouldThrowOnError)throw n;if(Lt(n))return{data:null,error:n};throw n}})}listIndexes(e){return pe(this,void 0,void 0,function*(){try{return{data:yield It(this.fetch,`${this.url}/ListIndexes`,e,{headers:this.headers}),error:null}}catch(t){if(this.shouldThrowOnError)throw t;if(Lt(t))return{data:null,error:t};throw t}})}deleteIndex(e,t){return pe(this,void 0,void 0,function*(){try{return{data:(yield It(this.fetch,`${this.url}/DeleteIndex`,{vectorBucketName:e,indexName:t},{headers:this.headers}))||{},error:null}}catch(n){if(this.shouldThrowOnError)throw n;if(Lt(n))return{data:null,error:n};throw n}})}}class wf{constructor(e,t={},n){this.shouldThrowOnError=!1,this.url=e.replace(/\/$/,""),this.headers=Object.assign(Object.assign({},eo),t),this.fetch=to(n)}throwOnError(){return this.shouldThrowOnError=!0,this}putVectors(e){return pe(this,void 0,void 0,function*(){try{if(e.vectors.length<1||e.vectors.length>500)throw new Error("Vector batch size must be between 1 and 500 items");return{data:(yield It(this.fetch,`${this.url}/PutVectors`,e,{headers:this.headers}))||{},error:null}}catch(t){if(this.shouldThrowOnError)throw t;if(Lt(t))return{data:null,error:t};throw t}})}getVectors(e){return pe(this,void 0,void 0,function*(){try{return{data:yield It(this.fetch,`${this.url}/GetVectors`,e,{headers:this.headers}),error:null}}catch(t){if(this.shouldThrowOnError)throw t;if(Lt(t))return{data:null,error:t};throw t}})}listVectors(e){return pe(this,void 0,void 0,function*(){try{if(e.segmentCount!==void 0){if(e.segmentCount<1||e.segmentCount>16)throw new Error("segmentCount must be between 1 and 16");if(e.segmentIndex!==void 0&&(e.segmentIndex<0||e.segmentIndex>=e.segmentCount))throw new Error(`segmentIndex must be between 0 and ${e.segmentCount-1}`)}return{data:yield It(this.fetch,`${this.url}/ListVectors`,e,{headers:this.headers}),error:null}}catch(t){if(this.shouldThrowOnError)throw t;if(Lt(t))return{data:null,error:t};throw t}})}queryVectors(e){return pe(this,void 0,void 0,function*(){try{return{data:yield It(this.fetch,`${this.url}/QueryVectors`,e,{headers:this.headers}),error:null}}catch(t){if(this.shouldThrowOnError)throw t;if(Lt(t))return{data:null,error:t};throw t}})}deleteVectors(e){return pe(this,void 0,void 0,function*(){try{if(e.keys.length<1||e.keys.length>500)throw new Error("Keys batch size must be between 1 and 500 items");return{data:(yield It(this.fetch,`${this.url}/DeleteVectors`,e,{headers:this.headers}))||{},error:null}}catch(t){if(this.shouldThrowOnError)throw t;if(Lt(t))return{data:null,error:t};throw t}})}}class Sf{constructor(e,t={},n){this.shouldThrowOnError=!1,this.url=e.replace(/\/$/,""),this.headers=Object.assign(Object.assign({},eo),t),this.fetch=to(n)}throwOnError(){return this.shouldThrowOnError=!0,this}createBucket(e){return pe(this,void 0,void 0,function*(){try{return{data:(yield It(this.fetch,`${this.url}/CreateVectorBucket`,{vectorBucketName:e},{headers:this.headers}))||{},error:null}}catch(t){if(this.shouldThrowOnError)throw t;if(Lt(t))return{data:null,error:t};throw t}})}getBucket(e){return pe(this,void 0,void 0,function*(){try{return{data:yield It(this.fetch,`${this.url}/GetVectorBucket`,{vectorBucketName:e},{headers:this.headers}),error:null}}catch(t){if(this.shouldThrowOnError)throw t;if(Lt(t))return{data:null,error:t};throw t}})}listBuckets(){return pe(this,arguments,void 0,function*(e={}){try{return{data:yield It(this.fetch,`${this.url}/ListVectorBuckets`,e,{headers:this.headers}),error:null}}catch(t){if(this.shouldThrowOnError)throw t;if(Lt(t))return{data:null,error:t};throw t}})}deleteBucket(e){return pe(this,void 0,void 0,function*(){try{return{data:(yield It(this.fetch,`${this.url}/DeleteVectorBucket`,{vectorBucketName:e},{headers:this.headers}))||{},error:null}}catch(t){if(this.shouldThrowOnError)throw t;if(Lt(t))return{data:null,error:t};throw t}})}}class bf extends Sf{constructor(e,t={}){super(e,t.headers||{},t.fetch)}from(e){return new Ef(this.url,this.headers,e,this.fetch)}}class Ef extends xf{constructor(e,t,n,r){super(e,t,r),this.vectorBucketName=n}createIndex(e){const t=Object.create(null,{createIndex:{get:()=>super.createIndex}});return pe(this,void 0,void 0,function*(){return t.createIndex.call(this,Object.assign(Object.assign({},e),{vectorBucketName:this.vectorBucketName}))})}listIndexes(){const e=Object.create(null,{listIndexes:{get:()=>super.listIndexes}});return pe(this,arguments,void 0,function*(t={}){return e.listIndexes.call(this,Object.assign(Object.assign({},t),{vectorBucketName:this.vectorBucketName}))})}getIndex(e){const t=Object.create(null,{getIndex:{get:()=>super.getIndex}});return pe(this,void 0,void 0,function*(){return t.getIndex.call(this,this.vectorBucketName,e)})}deleteIndex(e){const t=Object.create(null,{deleteIndex:{get:()=>super.deleteIndex}});return pe(this,void 0,void 0,function*(){return t.deleteIndex.call(this,this.vectorBucketName,e)})}index(e){return new Mf(this.url,this.headers,this.vectorBucketName,e,this.fetch)}}class Mf extends wf{constructor(e,t,n,r,s){super(e,t,s),this.vectorBucketName=n,this.indexName=r}putVectors(e){const t=Object.create(null,{putVectors:{get:()=>super.putVectors}});return pe(this,void 0,void 0,function*(){return t.putVectors.call(this,Object.assign(Object.assign({},e),{vectorBucketName:this.vectorBucketName,indexName:this.indexName}))})}getVectors(e){const t=Object.create(null,{getVectors:{get:()=>super.getVectors}});return pe(this,void 0,void 0,function*(){return t.getVectors.call(this,Object.assign(Object.assign({},e),{vectorBucketName:this.vectorBucketName,indexName:this.indexName}))})}listVectors(){const e=Object.create(null,{listVectors:{get:()=>super.listVectors}});return pe(this,arguments,void 0,function*(t={}){return e.listVectors.call(this,Object.assign(Object.assign({},t),{vectorBucketName:this.vectorBucketName,indexName:this.indexName}))})}queryVectors(e){const t=Object.create(null,{queryVectors:{get:()=>super.queryVectors}});return pe(this,void 0,void 0,function*(){return t.queryVectors.call(this,Object.assign(Object.assign({},e),{vectorBucketName:this.vectorBucketName,indexName:this.indexName}))})}deleteVectors(e){const t=Object.create(null,{deleteVectors:{get:()=>super.deleteVectors}});return pe(this,void 0,void 0,function*(){return t.deleteVectors.call(this,Object.assign(Object.assign({},e),{vectorBucketName:this.vectorBucketName,indexName:this.indexName}))})}}class Tf extends ff{constructor(e,t={},n,r){super(e,t,n,r)}from(e){return new df(this.url,this.headers,e,this.fetch)}get vectors(){return new bf(this.url+"/vector",{headers:this.headers,fetch:this.fetch})}get analytics(){return new pf(this.url+"/iceberg",this.headers,this.fetch)}}const Af="2.81.0";let Zi="";typeof Deno<"u"?Zi="deno":typeof document<"u"?Zi="web":typeof navigator<"u"&&navigator.product==="ReactNative"?Zi="react-native":Zi="node";const Rf={"X-Client-Info":`supabase-js-${Zi}/${Af}`},Pf={headers:Rf},Cf={schema:"public"},Lf={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:"implicit"},If={},Uf=i=>i?(...e)=>i(...e):(...e)=>fetch(...e),Df=()=>Headers,Of=(i,e,t)=>{const n=Uf(t),r=Df();return async(s,a)=>{var o;const l=(o=await e())!==null&&o!==void 0?o:i;let c=new r(a?.headers);return c.has("apikey")||c.set("apikey",i),c.has("Authorization")||c.set("Authorization",`Bearer ${l}`),n(s,Object.assign(Object.assign({},a),{headers:c}))}};function Nf(i){return i.endsWith("/")?i:i+"/"}function Ff(i,e){var t,n;const{db:r,auth:s,realtime:a,global:o}=i,{db:l,auth:c,realtime:h,global:d}=e,f={db:Object.assign(Object.assign({},l),r),auth:Object.assign(Object.assign({},c),s),realtime:Object.assign(Object.assign({},h),a),storage:{},global:Object.assign(Object.assign(Object.assign({},d),o),{headers:Object.assign(Object.assign({},(t=d?.headers)!==null&&t!==void 0?t:{}),(n=o?.headers)!==null&&n!==void 0?n:{})}),accessToken:async()=>""};return i.accessToken?f.accessToken=i.accessToken:delete f.accessToken,f}function kf(i){const e=i?.trim();if(!e)throw new Error("supabaseUrl is required.");if(!e.match(/^https?:\/\//i))throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");try{return new URL(Nf(e))}catch{throw Error("Invalid supabaseUrl: Provided URL is malformed.")}}const gh="2.81.0",Ti=30*1e3,Ta=3,Us=Ta*Ti,Bf="http://localhost:9999",zf="supabase.auth.token",Hf={"X-Client-Info":`gotrue-js/${gh}`},Aa="X-Supabase-Api-Version",_h={"2024-01-01":{timestamp:Date.parse("2024-01-01T00:00:00.0Z"),name:"2024-01-01"}},Gf=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,Vf=600*1e3;class lr extends Error{constructor(e,t,n){super(e),this.__isAuthError=!0,this.name="AuthError",this.status=t,this.code=n}}function me(i){return typeof i=="object"&&i!==null&&"__isAuthError"in i}class Wf extends lr{constructor(e,t,n){super(e,t,n),this.name="AuthApiError",this.status=t,this.code=n}}function jf(i){return me(i)&&i.name==="AuthApiError"}class Yn extends lr{constructor(e,t){super(e),this.name="AuthUnknownError",this.originalError=t}}class On extends lr{constructor(e,t,n,r){super(e,n,r),this.name=t,this.status=n}}class jt extends On{constructor(){super("Auth session missing!","AuthSessionMissingError",400,void 0)}}function $f(i){return me(i)&&i.name==="AuthSessionMissingError"}class si extends On{constructor(){super("Auth session or user missing","AuthInvalidTokenResponseError",500,void 0)}}class Pr extends On{constructor(e){super(e,"AuthInvalidCredentialsError",400,void 0)}}class Cr extends On{constructor(e,t=null){super(e,"AuthImplicitGrantRedirectError",500,void 0),this.details=null,this.details=t}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}function qf(i){return me(i)&&i.name==="AuthImplicitGrantRedirectError"}class Ho extends On{constructor(e,t=null){super(e,"AuthPKCEGrantCodeExchangeError",500,void 0),this.details=null,this.details=t}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}class Ra extends On{constructor(e,t){super(e,"AuthRetryableFetchError",t,void 0)}}function Ds(i){return me(i)&&i.name==="AuthRetryableFetchError"}class Go extends On{constructor(e,t,n){super(e,"AuthWeakPasswordError",t,"weak_password"),this.reasons=n}}class Pa extends On{constructor(e){super(e,"AuthInvalidJwtError",400,"invalid_jwt")}}const rs="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""),Vo=` 	
\r=`.split(""),Xf=(()=>{const i=new Array(128);for(let e=0;e<i.length;e+=1)i[e]=-1;for(let e=0;e<Vo.length;e+=1)i[Vo[e].charCodeAt(0)]=-2;for(let e=0;e<rs.length;e+=1)i[rs[e].charCodeAt(0)]=e;return i})();function Wo(i,e,t){if(i!==null)for(e.queue=e.queue<<8|i,e.queuedBits+=8;e.queuedBits>=6;){const n=e.queue>>e.queuedBits-6&63;t(rs[n]),e.queuedBits-=6}else if(e.queuedBits>0)for(e.queue=e.queue<<6-e.queuedBits,e.queuedBits=6;e.queuedBits>=6;){const n=e.queue>>e.queuedBits-6&63;t(rs[n]),e.queuedBits-=6}}function vh(i,e,t){const n=Xf[i];if(n>-1)for(e.queue=e.queue<<6|n,e.queuedBits+=6;e.queuedBits>=8;)t(e.queue>>e.queuedBits-8&255),e.queuedBits-=8;else{if(n===-2)return;throw new Error(`Invalid Base64-URL character "${String.fromCharCode(i)}"`)}}function jo(i){const e=[],t=a=>{e.push(String.fromCodePoint(a))},n={utf8seq:0,codepoint:0},r={queue:0,queuedBits:0},s=a=>{Jf(a,n,t)};for(let a=0;a<i.length;a+=1)vh(i.charCodeAt(a),r,s);return e.join("")}function Kf(i,e){if(i<=127){e(i);return}else if(i<=2047){e(192|i>>6),e(128|i&63);return}else if(i<=65535){e(224|i>>12),e(128|i>>6&63),e(128|i&63);return}else if(i<=1114111){e(240|i>>18),e(128|i>>12&63),e(128|i>>6&63),e(128|i&63);return}throw new Error(`Unrecognized Unicode codepoint: ${i.toString(16)}`)}function Yf(i,e){for(let t=0;t<i.length;t+=1){let n=i.charCodeAt(t);if(n>55295&&n<=56319){const r=(n-55296)*1024&65535;n=(i.charCodeAt(t+1)-56320&65535|r)+65536,t+=1}Kf(n,e)}}function Jf(i,e,t){if(e.utf8seq===0){if(i<=127){t(i);return}for(let n=1;n<6;n+=1)if((i>>7-n&1)===0){e.utf8seq=n;break}if(e.utf8seq===2)e.codepoint=i&31;else if(e.utf8seq===3)e.codepoint=i&15;else if(e.utf8seq===4)e.codepoint=i&7;else throw new Error("Invalid UTF-8 sequence");e.utf8seq-=1}else if(e.utf8seq>0){if(i<=127)throw new Error("Invalid UTF-8 sequence");e.codepoint=e.codepoint<<6|i&63,e.utf8seq-=1,e.utf8seq===0&&t(e.codepoint)}}function Ci(i){const e=[],t={queue:0,queuedBits:0},n=r=>{e.push(r)};for(let r=0;r<i.length;r+=1)vh(i.charCodeAt(r),t,n);return new Uint8Array(e)}function Zf(i){const e=[];return Yf(i,t=>e.push(t)),new Uint8Array(e)}function Zn(i){const e=[],t={queue:0,queuedBits:0},n=r=>{e.push(r)};return i.forEach(r=>Wo(r,t,n)),Wo(null,t,n),e.join("")}function Qf(i){return Math.round(Date.now()/1e3)+i}function ep(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(i){const e=Math.random()*16|0;return(i=="x"?e:e&3|8).toString(16)})}const vt=()=>typeof window<"u"&&typeof document<"u",kn={tested:!1,writable:!1},yh=()=>{if(!vt())return!1;try{if(typeof globalThis.localStorage!="object")return!1}catch{return!1}if(kn.tested)return kn.writable;const i=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(i,i),globalThis.localStorage.removeItem(i),kn.tested=!0,kn.writable=!0}catch{kn.tested=!0,kn.writable=!1}return kn.writable};function tp(i){const e={},t=new URL(i);if(t.hash&&t.hash[0]==="#")try{new URLSearchParams(t.hash.substring(1)).forEach((r,s)=>{e[s]=r})}catch{}return t.searchParams.forEach((n,r)=>{e[r]=n}),e}const xh=i=>i?(...e)=>i(...e):(...e)=>fetch(...e),np=i=>typeof i=="object"&&i!==null&&"status"in i&&"ok"in i&&"json"in i&&typeof i.json=="function",Ai=async(i,e,t)=>{await i.setItem(e,JSON.stringify(t))},Bn=async(i,e)=>{const t=await i.getItem(e);if(!t)return null;try{return JSON.parse(t)}catch{return t}},_n=async(i,e)=>{await i.removeItem(e)};class fs{constructor(){this.promise=new fs.promiseConstructor((e,t)=>{this.resolve=e,this.reject=t})}}fs.promiseConstructor=Promise;function Os(i){const e=i.split(".");if(e.length!==3)throw new Pa("Invalid JWT structure");for(let n=0;n<e.length;n++)if(!Gf.test(e[n]))throw new Pa("JWT not in base64url format");return{header:JSON.parse(jo(e[0])),payload:JSON.parse(jo(e[1])),signature:Ci(e[2]),raw:{header:e[0],payload:e[1]}}}async function ip(i){return await new Promise(e=>{setTimeout(()=>e(null),i)})}function rp(i,e){return new Promise((n,r)=>{(async()=>{for(let s=0;s<1/0;s++)try{const a=await i(s);if(!e(s,null,a)){n(a);return}}catch(a){if(!e(s,a)){r(a);return}}})()})}function sp(i){return("0"+i.toString(16)).substr(-2)}function ap(){const e=new Uint32Array(56);if(typeof crypto>"u"){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",n=t.length;let r="";for(let s=0;s<56;s++)r+=t.charAt(Math.floor(Math.random()*n));return r}return crypto.getRandomValues(e),Array.from(e,sp).join("")}async function op(i){const t=new TextEncoder().encode(i),n=await crypto.subtle.digest("SHA-256",t),r=new Uint8Array(n);return Array.from(r).map(s=>String.fromCharCode(s)).join("")}async function lp(i){if(!(typeof crypto<"u"&&typeof crypto.subtle<"u"&&typeof TextEncoder<"u"))return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),i;const t=await op(i);return btoa(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function ai(i,e,t=!1){const n=ap();let r=n;t&&(r+="/PASSWORD_RECOVERY"),await Ai(i,`${e}-code-verifier`,r);const s=await lp(n);return[s,n===s?"plain":"s256"]}const cp=/^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;function hp(i){const e=i.headers.get(Aa);if(!e||!e.match(cp))return null;try{return new Date(`${e}T00:00:00.0Z`)}catch{return null}}function up(i){if(!i)throw new Error("Missing exp claim");const e=Math.floor(Date.now()/1e3);if(i<=e)throw new Error("JWT has expired")}function dp(i){switch(i){case"RS256":return{name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-256"}};case"ES256":return{name:"ECDSA",namedCurve:"P-256",hash:{name:"SHA-256"}};default:throw new Error("Invalid alg claim")}}const fp=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;function oi(i){if(!fp.test(i))throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not")}function Ns(){const i={};return new Proxy(i,{get:(e,t)=>{if(t==="__isUserNotAvailableProxy")return!0;if(typeof t=="symbol"){const n=t.toString();if(n==="Symbol(Symbol.toPrimitive)"||n==="Symbol(Symbol.toStringTag)"||n==="Symbol(util.inspect.custom)")return}throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${t}" property of the session object is not supported. Please use getUser() instead.`)},set:(e,t)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${t}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)},deleteProperty:(e,t)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${t}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)}})}function pp(i,e){return new Proxy(i,{get:(t,n,r)=>{if(n==="__isInsecureUserWarningProxy")return!0;if(typeof n=="symbol"){const s=n.toString();if(s==="Symbol(Symbol.toPrimitive)"||s==="Symbol(Symbol.toStringTag)"||s==="Symbol(util.inspect.custom)"||s==="Symbol(nodejs.util.inspect.custom)")return Reflect.get(t,n,r)}return!e.value&&typeof n=="string"&&(console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."),e.value=!0),Reflect.get(t,n,r)}})}function $o(i){return JSON.parse(JSON.stringify(i))}const jn=i=>i.msg||i.message||i.error_description||i.error||JSON.stringify(i),mp=[502,503,504];async function qo(i){var e;if(!np(i))throw new Ra(jn(i),0);if(mp.includes(i.status))throw new Ra(jn(i),i.status);let t;try{t=await i.json()}catch(s){throw new Yn(jn(s),s)}let n;const r=hp(i);if(r&&r.getTime()>=_h["2024-01-01"].timestamp&&typeof t=="object"&&t&&typeof t.code=="string"?n=t.code:typeof t=="object"&&t&&typeof t.error_code=="string"&&(n=t.error_code),n){if(n==="weak_password")throw new Go(jn(t),i.status,((e=t.weak_password)===null||e===void 0?void 0:e.reasons)||[]);if(n==="session_not_found")throw new jt}else if(typeof t=="object"&&t&&typeof t.weak_password=="object"&&t.weak_password&&Array.isArray(t.weak_password.reasons)&&t.weak_password.reasons.length&&t.weak_password.reasons.reduce((s,a)=>s&&typeof a=="string",!0))throw new Go(jn(t),i.status,t.weak_password.reasons);throw new Wf(jn(t),i.status||500,n)}const gp=(i,e,t,n)=>{const r={method:i,headers:e?.headers||{}};return i==="GET"?r:(r.headers=Object.assign({"Content-Type":"application/json;charset=UTF-8"},e?.headers),r.body=JSON.stringify(n),Object.assign(Object.assign({},r),t))};async function Se(i,e,t,n){var r;const s=Object.assign({},n?.headers);s[Aa]||(s[Aa]=_h["2024-01-01"].name),n?.jwt&&(s.Authorization=`Bearer ${n.jwt}`);const a=(r=n?.query)!==null&&r!==void 0?r:{};n?.redirectTo&&(a.redirect_to=n.redirectTo);const o=Object.keys(a).length?"?"+new URLSearchParams(a).toString():"",l=await _p(i,e,t+o,{headers:s,noResolveJson:n?.noResolveJson},{},n?.body);return n?.xform?n?.xform(l):{data:Object.assign({},l),error:null}}async function _p(i,e,t,n,r,s){const a=gp(e,n,r,s);let o;try{o=await i(t,Object.assign({},a))}catch(l){throw console.error(l),new Ra(jn(l),0)}if(o.ok||await qo(o),n?.noResolveJson)return o;try{return await o.json()}catch(l){await qo(l)}}function $t(i){var e;let t=null;xp(i)&&(t=Object.assign({},i),i.expires_at||(t.expires_at=Qf(i.expires_in)));const n=(e=i.user)!==null&&e!==void 0?e:i;return{data:{session:t,user:n},error:null}}function Xo(i){const e=$t(i);return!e.error&&i.weak_password&&typeof i.weak_password=="object"&&Array.isArray(i.weak_password.reasons)&&i.weak_password.reasons.length&&i.weak_password.message&&typeof i.weak_password.message=="string"&&i.weak_password.reasons.reduce((t,n)=>t&&typeof n=="string",!0)&&(e.data.weak_password=i.weak_password),e}function Sn(i){var e;return{data:{user:(e=i.user)!==null&&e!==void 0?e:i},error:null}}function vp(i){return{data:i,error:null}}function yp(i){const{action_link:e,email_otp:t,hashed_token:n,redirect_to:r,verification_type:s}=i,a=Hi(i,["action_link","email_otp","hashed_token","redirect_to","verification_type"]),o={action_link:e,email_otp:t,hashed_token:n,redirect_to:r,verification_type:s},l=Object.assign({},a);return{data:{properties:o,user:l},error:null}}function Ko(i){return i}function xp(i){return i.access_token&&i.refresh_token&&i.expires_in}const Fs=["global","local","others"];class wp{constructor({url:e="",headers:t={},fetch:n}){this.url=e,this.headers=t,this.fetch=xh(n),this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)},this.oauth={listClients:this._listOAuthClients.bind(this),createClient:this._createOAuthClient.bind(this),getClient:this._getOAuthClient.bind(this),updateClient:this._updateOAuthClient.bind(this),deleteClient:this._deleteOAuthClient.bind(this),regenerateClientSecret:this._regenerateOAuthClientSecret.bind(this)}}async signOut(e,t=Fs[0]){if(Fs.indexOf(t)<0)throw new Error(`@supabase/auth-js: Parameter scope must be one of ${Fs.join(", ")}`);try{return await Se(this.fetch,"POST",`${this.url}/logout?scope=${t}`,{headers:this.headers,jwt:e,noResolveJson:!0}),{data:null,error:null}}catch(n){if(me(n))return{data:null,error:n};throw n}}async inviteUserByEmail(e,t={}){try{return await Se(this.fetch,"POST",`${this.url}/invite`,{body:{email:e,data:t.data},headers:this.headers,redirectTo:t.redirectTo,xform:Sn})}catch(n){if(me(n))return{data:{user:null},error:n};throw n}}async generateLink(e){try{const{options:t}=e,n=Hi(e,["options"]),r=Object.assign(Object.assign({},n),t);return"newEmail"in n&&(r.new_email=n?.newEmail,delete r.newEmail),await Se(this.fetch,"POST",`${this.url}/admin/generate_link`,{body:r,headers:this.headers,xform:yp,redirectTo:t?.redirectTo})}catch(t){if(me(t))return{data:{properties:null,user:null},error:t};throw t}}async createUser(e){try{return await Se(this.fetch,"POST",`${this.url}/admin/users`,{body:e,headers:this.headers,xform:Sn})}catch(t){if(me(t))return{data:{user:null},error:t};throw t}}async listUsers(e){var t,n,r,s,a,o,l;try{const c={nextPage:null,lastPage:0,total:0},h=await Se(this.fetch,"GET",`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(n=(t=e?.page)===null||t===void 0?void 0:t.toString())!==null&&n!==void 0?n:"",per_page:(s=(r=e?.perPage)===null||r===void 0?void 0:r.toString())!==null&&s!==void 0?s:""},xform:Ko});if(h.error)throw h.error;const d=await h.json(),f=(a=h.headers.get("x-total-count"))!==null&&a!==void 0?a:0,_=(l=(o=h.headers.get("link"))===null||o===void 0?void 0:o.split(","))!==null&&l!==void 0?l:[];return _.length>0&&(_.forEach(y=>{const x=parseInt(y.split(";")[0].split("=")[1].substring(0,1)),m=JSON.parse(y.split(";")[1].split("=")[1]);c[`${m}Page`]=x}),c.total=parseInt(f)),{data:Object.assign(Object.assign({},d),c),error:null}}catch(c){if(me(c))return{data:{users:[]},error:c};throw c}}async getUserById(e){oi(e);try{return await Se(this.fetch,"GET",`${this.url}/admin/users/${e}`,{headers:this.headers,xform:Sn})}catch(t){if(me(t))return{data:{user:null},error:t};throw t}}async updateUserById(e,t){oi(e);try{return await Se(this.fetch,"PUT",`${this.url}/admin/users/${e}`,{body:t,headers:this.headers,xform:Sn})}catch(n){if(me(n))return{data:{user:null},error:n};throw n}}async deleteUser(e,t=!1){oi(e);try{return await Se(this.fetch,"DELETE",`${this.url}/admin/users/${e}`,{headers:this.headers,body:{should_soft_delete:t},xform:Sn})}catch(n){if(me(n))return{data:{user:null},error:n};throw n}}async _listFactors(e){oi(e.userId);try{const{data:t,error:n}=await Se(this.fetch,"GET",`${this.url}/admin/users/${e.userId}/factors`,{headers:this.headers,xform:r=>({data:{factors:r},error:null})});return{data:t,error:n}}catch(t){if(me(t))return{data:null,error:t};throw t}}async _deleteFactor(e){oi(e.userId),oi(e.id);try{return{data:await Se(this.fetch,"DELETE",`${this.url}/admin/users/${e.userId}/factors/${e.id}`,{headers:this.headers}),error:null}}catch(t){if(me(t))return{data:null,error:t};throw t}}async _listOAuthClients(e){var t,n,r,s,a,o,l;try{const c={nextPage:null,lastPage:0,total:0},h=await Se(this.fetch,"GET",`${this.url}/admin/oauth/clients`,{headers:this.headers,noResolveJson:!0,query:{page:(n=(t=e?.page)===null||t===void 0?void 0:t.toString())!==null&&n!==void 0?n:"",per_page:(s=(r=e?.perPage)===null||r===void 0?void 0:r.toString())!==null&&s!==void 0?s:""},xform:Ko});if(h.error)throw h.error;const d=await h.json(),f=(a=h.headers.get("x-total-count"))!==null&&a!==void 0?a:0,_=(l=(o=h.headers.get("link"))===null||o===void 0?void 0:o.split(","))!==null&&l!==void 0?l:[];return _.length>0&&(_.forEach(y=>{const x=parseInt(y.split(";")[0].split("=")[1].substring(0,1)),m=JSON.parse(y.split(";")[1].split("=")[1]);c[`${m}Page`]=x}),c.total=parseInt(f)),{data:Object.assign(Object.assign({},d),c),error:null}}catch(c){if(me(c))return{data:{clients:[]},error:c};throw c}}async _createOAuthClient(e){try{return await Se(this.fetch,"POST",`${this.url}/admin/oauth/clients`,{body:e,headers:this.headers,xform:t=>({data:t,error:null})})}catch(t){if(me(t))return{data:null,error:t};throw t}}async _getOAuthClient(e){try{return await Se(this.fetch,"GET",`${this.url}/admin/oauth/clients/${e}`,{headers:this.headers,xform:t=>({data:t,error:null})})}catch(t){if(me(t))return{data:null,error:t};throw t}}async _updateOAuthClient(e,t){try{return await Se(this.fetch,"PUT",`${this.url}/admin/oauth/clients/${e}`,{body:t,headers:this.headers,xform:n=>({data:n,error:null})})}catch(n){if(me(n))return{data:null,error:n};throw n}}async _deleteOAuthClient(e){try{return await Se(this.fetch,"DELETE",`${this.url}/admin/oauth/clients/${e}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(t){if(me(t))return{data:null,error:t};throw t}}async _regenerateOAuthClientSecret(e){try{return await Se(this.fetch,"POST",`${this.url}/admin/oauth/clients/${e}/regenerate_secret`,{headers:this.headers,xform:t=>({data:t,error:null})})}catch(t){if(me(t))return{data:null,error:t};throw t}}}function Yo(i={}){return{getItem:e=>i[e]||null,setItem:(e,t)=>{i[e]=t},removeItem:e=>{delete i[e]}}}const li={debug:!!(globalThis&&yh()&&globalThis.localStorage&&globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug")==="true")};class wh extends Error{constructor(e){super(e),this.isAcquireTimeout=!0}}class Sp extends wh{}async function bp(i,e,t){li.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquire lock",i,e);const n=new globalThis.AbortController;return e>0&&setTimeout(()=>{n.abort(),li.debug&&console.log("@supabase/gotrue-js: navigatorLock acquire timed out",i)},e),await Promise.resolve().then(()=>globalThis.navigator.locks.request(i,e===0?{mode:"exclusive",ifAvailable:!0}:{mode:"exclusive",signal:n.signal},async r=>{if(r){li.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquired",i,r.name);try{return await t()}finally{li.debug&&console.log("@supabase/gotrue-js: navigatorLock: released",i,r.name)}}else{if(e===0)throw li.debug&&console.log("@supabase/gotrue-js: navigatorLock: not immediately available",i),new Sp(`Acquiring an exclusive Navigator LockManager lock "${i}" immediately failed`);if(li.debug)try{const s=await globalThis.navigator.locks.query();console.log("@supabase/gotrue-js: Navigator LockManager state",JSON.stringify(s,null,"  "))}catch(s){console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state",s)}return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"),await t()}}))}function Ep(){if(typeof globalThis!="object")try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<"u"&&(self.globalThis=self)}}function Sh(i){if(!/^0x[a-fA-F0-9]{40}$/.test(i))throw new Error(`@supabase/auth-js: Address "${i}" is invalid.`);return i.toLowerCase()}function Mp(i){return parseInt(i,16)}function Tp(i){const e=new TextEncoder().encode(i);return"0x"+Array.from(e,n=>n.toString(16).padStart(2,"0")).join("")}function Ap(i){var e;const{chainId:t,domain:n,expirationTime:r,issuedAt:s=new Date,nonce:a,notBefore:o,requestId:l,resources:c,scheme:h,uri:d,version:f}=i;{if(!Number.isInteger(t))throw new Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${t}`);if(!n)throw new Error('@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.');if(a&&a.length<8)throw new Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${a}`);if(!d)throw new Error('@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.');if(f!=="1")throw new Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${f}`);if(!((e=i.statement)===null||e===void 0)&&e.includes(`
`))throw new Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${i.statement}`)}const _=Sh(i.address),y=h?`${h}://${n}`:n,x=i.statement?`${i.statement}
`:"",m=`${y} wants you to sign in with your Ethereum account:
${_}

${x}`;let g=`URI: ${d}
Version: ${f}
Chain ID: ${t}${a?`
Nonce: ${a}`:""}
Issued At: ${s.toISOString()}`;if(r&&(g+=`
Expiration Time: ${r.toISOString()}`),o&&(g+=`
Not Before: ${o.toISOString()}`),l&&(g+=`
Request ID: ${l}`),c){let M=`
Resources:`;for(const v of c){if(!v||typeof v!="string")throw new Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${v}`);M+=`
- ${v}`}g+=M}return`${m}
${g}`}class st extends Error{constructor({message:e,code:t,cause:n,name:r}){var s;super(e,{cause:n}),this.__isWebAuthnError=!0,this.name=(s=r??(n instanceof Error?n.name:void 0))!==null&&s!==void 0?s:"Unknown Error",this.code=t}}class ss extends st{constructor(e,t){super({code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:t,message:e}),this.name="WebAuthnUnknownError",this.originalError=t}}function Rp({error:i,options:e}){var t,n,r;const{publicKey:s}=e;if(!s)throw Error("options was missing required publicKey property");if(i.name==="AbortError"){if(e.signal instanceof AbortSignal)return new st({message:"Registration ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:i})}else if(i.name==="ConstraintError"){if(((t=s.authenticatorSelection)===null||t===void 0?void 0:t.requireResidentKey)===!0)return new st({message:"Discoverable credentials were required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",cause:i});if(e.mediation==="conditional"&&((n=s.authenticatorSelection)===null||n===void 0?void 0:n.userVerification)==="required")return new st({message:"User verification was required during automatic registration but it could not be performed",code:"ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",cause:i});if(((r=s.authenticatorSelection)===null||r===void 0?void 0:r.userVerification)==="required")return new st({message:"User verification was required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",cause:i})}else{if(i.name==="InvalidStateError")return new st({message:"The authenticator was previously registered",code:"ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",cause:i});if(i.name==="NotAllowedError")return new st({message:i.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:i});if(i.name==="NotSupportedError")return s.pubKeyCredParams.filter(o=>o.type==="public-key").length===0?new st({message:'No entry in pubKeyCredParams was of type "public-key"',code:"ERROR_MALFORMED_PUBKEYCREDPARAMS",cause:i}):new st({message:"No available authenticator supported any of the specified pubKeyCredParams algorithms",code:"ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",cause:i});if(i.name==="SecurityError"){const a=window.location.hostname;if(bh(a)){if(s.rp.id!==a)return new st({message:`The RP ID "${s.rp.id}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:i})}else return new st({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:i})}else if(i.name==="TypeError"){if(s.user.id.byteLength<1||s.user.id.byteLength>64)return new st({message:"User ID was not between 1 and 64 characters",code:"ERROR_INVALID_USER_ID_LENGTH",cause:i})}else if(i.name==="UnknownError")return new st({message:"The authenticator was unable to process the specified options, or could not create a new credential",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:i})}return new st({message:"a Non-Webauthn related error has occurred",code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:i})}function Pp({error:i,options:e}){const{publicKey:t}=e;if(!t)throw Error("options was missing required publicKey property");if(i.name==="AbortError"){if(e.signal instanceof AbortSignal)return new st({message:"Authentication ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:i})}else{if(i.name==="NotAllowedError")return new st({message:i.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:i});if(i.name==="SecurityError"){const n=window.location.hostname;if(bh(n)){if(t.rpId!==n)return new st({message:`The RP ID "${t.rpId}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:i})}else return new st({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:i})}else if(i.name==="UnknownError")return new st({message:"The authenticator was unable to process the specified options, or could not create a new assertion signature",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:i})}return new st({message:"a Non-Webauthn related error has occurred",code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:i})}class Cp{createNewAbortSignal(){if(this.controller){const t=new Error("Cancelling existing WebAuthn API call for new one");t.name="AbortError",this.controller.abort(t)}const e=new AbortController;return this.controller=e,e.signal}cancelCeremony(){if(this.controller){const e=new Error("Manually cancelling existing WebAuthn API call");e.name="AbortError",this.controller.abort(e),this.controller=void 0}}}const Lp=new Cp;function Ip(i){if(!i)throw new Error("Credential creation options are required");if(typeof PublicKeyCredential<"u"&&"parseCreationOptionsFromJSON"in PublicKeyCredential&&typeof PublicKeyCredential.parseCreationOptionsFromJSON=="function")return PublicKeyCredential.parseCreationOptionsFromJSON(i);const{challenge:e,user:t,excludeCredentials:n}=i,r=Hi(i,["challenge","user","excludeCredentials"]),s=Ci(e).buffer,a=Object.assign(Object.assign({},t),{id:Ci(t.id).buffer}),o=Object.assign(Object.assign({},r),{challenge:s,user:a});if(n&&n.length>0){o.excludeCredentials=new Array(n.length);for(let l=0;l<n.length;l++){const c=n[l];o.excludeCredentials[l]=Object.assign(Object.assign({},c),{id:Ci(c.id).buffer,type:c.type||"public-key",transports:c.transports})}}return o}function Up(i){if(!i)throw new Error("Credential request options are required");if(typeof PublicKeyCredential<"u"&&"parseRequestOptionsFromJSON"in PublicKeyCredential&&typeof PublicKeyCredential.parseRequestOptionsFromJSON=="function")return PublicKeyCredential.parseRequestOptionsFromJSON(i);const{challenge:e,allowCredentials:t}=i,n=Hi(i,["challenge","allowCredentials"]),r=Ci(e).buffer,s=Object.assign(Object.assign({},n),{challenge:r});if(t&&t.length>0){s.allowCredentials=new Array(t.length);for(let a=0;a<t.length;a++){const o=t[a];s.allowCredentials[a]=Object.assign(Object.assign({},o),{id:Ci(o.id).buffer,type:o.type||"public-key",transports:o.transports})}}return s}function Dp(i){var e;if("toJSON"in i&&typeof i.toJSON=="function")return i.toJSON();const t=i;return{id:i.id,rawId:i.id,response:{attestationObject:Zn(new Uint8Array(i.response.attestationObject)),clientDataJSON:Zn(new Uint8Array(i.response.clientDataJSON))},type:"public-key",clientExtensionResults:i.getClientExtensionResults(),authenticatorAttachment:(e=t.authenticatorAttachment)!==null&&e!==void 0?e:void 0}}function Op(i){var e;if("toJSON"in i&&typeof i.toJSON=="function")return i.toJSON();const t=i,n=i.getClientExtensionResults(),r=i.response;return{id:i.id,rawId:i.id,response:{authenticatorData:Zn(new Uint8Array(r.authenticatorData)),clientDataJSON:Zn(new Uint8Array(r.clientDataJSON)),signature:Zn(new Uint8Array(r.signature)),userHandle:r.userHandle?Zn(new Uint8Array(r.userHandle)):void 0},type:"public-key",clientExtensionResults:n,authenticatorAttachment:(e=t.authenticatorAttachment)!==null&&e!==void 0?e:void 0}}function bh(i){return i==="localhost"||/^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(i)}function Jo(){var i,e;return!!(vt()&&"PublicKeyCredential"in window&&window.PublicKeyCredential&&"credentials"in navigator&&typeof((i=navigator?.credentials)===null||i===void 0?void 0:i.create)=="function"&&typeof((e=navigator?.credentials)===null||e===void 0?void 0:e.get)=="function")}async function Np(i){try{const e=await navigator.credentials.create(i);return e?e instanceof PublicKeyCredential?{data:e,error:null}:{data:null,error:new ss("Browser returned unexpected credential type",e)}:{data:null,error:new ss("Empty credential response",e)}}catch(e){return{data:null,error:Rp({error:e,options:i})}}}async function Fp(i){try{const e=await navigator.credentials.get(i);return e?e instanceof PublicKeyCredential?{data:e,error:null}:{data:null,error:new ss("Browser returned unexpected credential type",e)}:{data:null,error:new ss("Empty credential response",e)}}catch(e){return{data:null,error:Pp({error:e,options:i})}}}const kp={hints:["security-key"],authenticatorSelection:{authenticatorAttachment:"cross-platform",requireResidentKey:!1,userVerification:"preferred",residentKey:"discouraged"},attestation:"direct"},Bp={userVerification:"preferred",hints:["security-key"],attestation:"direct"};function as(...i){const e=r=>r!==null&&typeof r=="object"&&!Array.isArray(r),t=r=>r instanceof ArrayBuffer||ArrayBuffer.isView(r),n={};for(const r of i)if(r)for(const s in r){const a=r[s];if(a!==void 0)if(Array.isArray(a))n[s]=a;else if(t(a))n[s]=a;else if(e(a)){const o=n[s];e(o)?n[s]=as(o,a):n[s]=as(a)}else n[s]=a}return n}function zp(i,e){return as(kp,i,e||{})}function Hp(i,e){return as(Bp,i,e||{})}class Gp{constructor(e){this.client=e,this.enroll=this._enroll.bind(this),this.challenge=this._challenge.bind(this),this.verify=this._verify.bind(this),this.authenticate=this._authenticate.bind(this),this.register=this._register.bind(this)}async _enroll(e){return this.client.mfa.enroll(Object.assign(Object.assign({},e),{factorType:"webauthn"}))}async _challenge({factorId:e,webauthn:t,friendlyName:n,signal:r},s){try{const{data:a,error:o}=await this.client.mfa.challenge({factorId:e,webauthn:t});if(!a)return{data:null,error:o};const l=r??Lp.createNewAbortSignal();if(a.webauthn.type==="create"){const{user:c}=a.webauthn.credential_options.publicKey;c.name||(c.name=`${c.id}:${n}`),c.displayName||(c.displayName=c.name)}switch(a.webauthn.type){case"create":{const c=zp(a.webauthn.credential_options.publicKey,s?.create),{data:h,error:d}=await Np({publicKey:c,signal:l});return h?{data:{factorId:e,challengeId:a.id,webauthn:{type:a.webauthn.type,credential_response:h}},error:null}:{data:null,error:d}}case"request":{const c=Hp(a.webauthn.credential_options.publicKey,s?.request),{data:h,error:d}=await Fp(Object.assign(Object.assign({},a.webauthn.credential_options),{publicKey:c,signal:l}));return h?{data:{factorId:e,challengeId:a.id,webauthn:{type:a.webauthn.type,credential_response:h}},error:null}:{data:null,error:d}}}}catch(a){return me(a)?{data:null,error:a}:{data:null,error:new Yn("Unexpected error in challenge",a)}}}async _verify({challengeId:e,factorId:t,webauthn:n}){return this.client.mfa.verify({factorId:t,challengeId:e,webauthn:n})}async _authenticate({factorId:e,webauthn:{rpId:t=typeof window<"u"?window.location.hostname:void 0,rpOrigins:n=typeof window<"u"?[window.location.origin]:void 0,signal:r}={}},s){if(!t)return{data:null,error:new lr("rpId is required for WebAuthn authentication")};try{if(!Jo())return{data:null,error:new Yn("Browser does not support WebAuthn",null)};const{data:a,error:o}=await this.challenge({factorId:e,webauthn:{rpId:t,rpOrigins:n},signal:r},{request:s});if(!a)return{data:null,error:o};const{webauthn:l}=a;return this._verify({factorId:e,challengeId:a.challengeId,webauthn:{type:l.type,rpId:t,rpOrigins:n,credential_response:l.credential_response}})}catch(a){return me(a)?{data:null,error:a}:{data:null,error:new Yn("Unexpected error in authenticate",a)}}}async _register({friendlyName:e,webauthn:{rpId:t=typeof window<"u"?window.location.hostname:void 0,rpOrigins:n=typeof window<"u"?[window.location.origin]:void 0,signal:r}={}},s){if(!t)return{data:null,error:new lr("rpId is required for WebAuthn registration")};try{if(!Jo())return{data:null,error:new Yn("Browser does not support WebAuthn",null)};const{data:a,error:o}=await this._enroll({friendlyName:e});if(!a)return await this.client.mfa.listFactors().then(h=>{var d;return(d=h.data)===null||d===void 0?void 0:d.all.find(f=>f.factor_type==="webauthn"&&f.friendly_name===e&&f.status!=="unverified")}).then(h=>h?this.client.mfa.unenroll({factorId:h?.id}):void 0),{data:null,error:o};const{data:l,error:c}=await this._challenge({factorId:a.id,friendlyName:a.friendly_name,webauthn:{rpId:t,rpOrigins:n},signal:r},{create:s});return l?this._verify({factorId:a.id,challengeId:l.challengeId,webauthn:{rpId:t,rpOrigins:n,type:l.webauthn.type,credential_response:l.webauthn.credential_response}}):{data:null,error:c}}catch(a){return me(a)?{data:null,error:a}:{data:null,error:new Yn("Unexpected error in register",a)}}}}Ep();const Vp={url:Bf,storageKey:zf,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:Hf,flowType:"implicit",debug:!1,hasCustomAuthorizationHeader:!1,throwOnError:!1};async function Zo(i,e,t){return await t()}const ci={};class cr{get jwks(){var e,t;return(t=(e=ci[this.storageKey])===null||e===void 0?void 0:e.jwks)!==null&&t!==void 0?t:{keys:[]}}set jwks(e){ci[this.storageKey]=Object.assign(Object.assign({},ci[this.storageKey]),{jwks:e})}get jwks_cached_at(){var e,t;return(t=(e=ci[this.storageKey])===null||e===void 0?void 0:e.cachedAt)!==null&&t!==void 0?t:Number.MIN_SAFE_INTEGER}set jwks_cached_at(e){ci[this.storageKey]=Object.assign(Object.assign({},ci[this.storageKey]),{cachedAt:e})}constructor(e){var t,n,r;this.userStorage=null,this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.initializePromise=null,this.detectSessionInUrl=!0,this.hasCustomAuthorizationHeader=!1,this.suppressGetSessionWarning=!1,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log;const s=Object.assign(Object.assign({},Vp),e);if(this.storageKey=s.storageKey,this.instanceID=(t=cr.nextInstanceID[this.storageKey])!==null&&t!==void 0?t:0,cr.nextInstanceID[this.storageKey]=this.instanceID+1,this.logDebugMessages=!!s.debug,typeof s.debug=="function"&&(this.logger=s.debug),this.instanceID>0&&vt()){const a=`${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;console.warn(a),this.logDebugMessages&&console.trace(a)}if(this.persistSession=s.persistSession,this.autoRefreshToken=s.autoRefreshToken,this.admin=new wp({url:s.url,headers:s.headers,fetch:s.fetch}),this.url=s.url,this.headers=s.headers,this.fetch=xh(s.fetch),this.lock=s.lock||Zo,this.detectSessionInUrl=s.detectSessionInUrl,this.flowType=s.flowType,this.hasCustomAuthorizationHeader=s.hasCustomAuthorizationHeader,this.throwOnError=s.throwOnError,s.lock?this.lock=s.lock:vt()&&(!((n=globalThis?.navigator)===null||n===void 0)&&n.locks)?this.lock=bp:this.lock=Zo,this.jwks||(this.jwks={keys:[]},this.jwks_cached_at=Number.MIN_SAFE_INTEGER),this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this),webauthn:new Gp(this)},this.oauth={getAuthorizationDetails:this._getAuthorizationDetails.bind(this),approveAuthorization:this._approveAuthorization.bind(this),denyAuthorization:this._denyAuthorization.bind(this)},this.persistSession?(s.storage?this.storage=s.storage:yh()?this.storage=globalThis.localStorage:(this.memoryStorage={},this.storage=Yo(this.memoryStorage)),s.userStorage&&(this.userStorage=s.userStorage)):(this.memoryStorage={},this.storage=Yo(this.memoryStorage)),vt()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(a){console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available",a)}(r=this.broadcastChannel)===null||r===void 0||r.addEventListener("message",async a=>{this._debug("received broadcast notification from other tab or client",a),await this._notifyAllSubscribers(a.data.event,a.data.session,!1)})}this.initialize()}isThrowOnErrorEnabled(){return this.throwOnError}_returnResult(e){if(this.throwOnError&&e&&e.error)throw e.error;return e}_logPrefix(){return`GoTrueClient@${this.storageKey}:${this.instanceID} (${gh}) ${new Date().toISOString()}`}_debug(...e){return this.logDebugMessages&&this.logger(this._logPrefix(),...e),this}async initialize(){return this.initializePromise?await this.initializePromise:(this.initializePromise=(async()=>await this._acquireLock(-1,async()=>await this._initialize()))(),await this.initializePromise)}async _initialize(){var e;try{let t={},n="none";if(vt()&&(t=tp(window.location.href),this._isImplicitGrantCallback(t)?n="implicit":await this._isPKCECallback(t)&&(n="pkce")),vt()&&this.detectSessionInUrl&&n!=="none"){const{data:r,error:s}=await this._getSessionFromURL(t,n);if(s){if(this._debug("#_initialize()","error detecting session from URL",s),qf(s)){const l=(e=s.details)===null||e===void 0?void 0:e.code;if(l==="identity_already_exists"||l==="identity_not_found"||l==="single_identity_not_deletable")return{error:s}}return await this._removeSession(),{error:s}}const{session:a,redirectType:o}=r;return this._debug("#_initialize()","detected session in URL",a,"redirect type",o),await this._saveSession(a),setTimeout(async()=>{o==="recovery"?await this._notifyAllSubscribers("PASSWORD_RECOVERY",a):await this._notifyAllSubscribers("SIGNED_IN",a)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(t){return me(t)?this._returnResult({error:t}):this._returnResult({error:new Yn("Unexpected error during initialization",t)})}finally{await this._handleVisibilityChange(),this._debug("#_initialize()","end")}}async signInAnonymously(e){var t,n,r;try{const s=await Se(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{data:(n=(t=e?.options)===null||t===void 0?void 0:t.data)!==null&&n!==void 0?n:{},gotrue_meta_security:{captcha_token:(r=e?.options)===null||r===void 0?void 0:r.captchaToken}},xform:$t}),{data:a,error:o}=s;if(o||!a)return this._returnResult({data:{user:null,session:null},error:o});const l=a.session,c=a.user;return a.session&&(await this._saveSession(a.session),await this._notifyAllSubscribers("SIGNED_IN",l)),this._returnResult({data:{user:c,session:l},error:null})}catch(s){if(me(s))return this._returnResult({data:{user:null,session:null},error:s});throw s}}async signUp(e){var t,n,r;try{let s;if("email"in e){const{email:h,password:d,options:f}=e;let _=null,y=null;this.flowType==="pkce"&&([_,y]=await ai(this.storage,this.storageKey)),s=await Se(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,redirectTo:f?.emailRedirectTo,body:{email:h,password:d,data:(t=f?.data)!==null&&t!==void 0?t:{},gotrue_meta_security:{captcha_token:f?.captchaToken},code_challenge:_,code_challenge_method:y},xform:$t})}else if("phone"in e){const{phone:h,password:d,options:f}=e;s=await Se(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{phone:h,password:d,data:(n=f?.data)!==null&&n!==void 0?n:{},channel:(r=f?.channel)!==null&&r!==void 0?r:"sms",gotrue_meta_security:{captcha_token:f?.captchaToken}},xform:$t})}else throw new Pr("You must provide either an email or phone number and a password");const{data:a,error:o}=s;if(o||!a)return this._returnResult({data:{user:null,session:null},error:o});const l=a.session,c=a.user;return a.session&&(await this._saveSession(a.session),await this._notifyAllSubscribers("SIGNED_IN",l)),this._returnResult({data:{user:c,session:l},error:null})}catch(s){if(me(s))return this._returnResult({data:{user:null,session:null},error:s});throw s}}async signInWithPassword(e){try{let t;if("email"in e){const{email:s,password:a,options:o}=e;t=await Se(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:s,password:a,gotrue_meta_security:{captcha_token:o?.captchaToken}},xform:Xo})}else if("phone"in e){const{phone:s,password:a,options:o}=e;t=await Se(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:s,password:a,gotrue_meta_security:{captcha_token:o?.captchaToken}},xform:Xo})}else throw new Pr("You must provide either an email or phone number and a password");const{data:n,error:r}=t;if(r)return this._returnResult({data:{user:null,session:null},error:r});if(!n||!n.session||!n.user){const s=new si;return this._returnResult({data:{user:null,session:null},error:s})}return n.session&&(await this._saveSession(n.session),await this._notifyAllSubscribers("SIGNED_IN",n.session)),this._returnResult({data:Object.assign({user:n.user,session:n.session},n.weak_password?{weakPassword:n.weak_password}:null),error:r})}catch(t){if(me(t))return this._returnResult({data:{user:null,session:null},error:t});throw t}}async signInWithOAuth(e){var t,n,r,s;return await this._handleProviderSignIn(e.provider,{redirectTo:(t=e.options)===null||t===void 0?void 0:t.redirectTo,scopes:(n=e.options)===null||n===void 0?void 0:n.scopes,queryParams:(r=e.options)===null||r===void 0?void 0:r.queryParams,skipBrowserRedirect:(s=e.options)===null||s===void 0?void 0:s.skipBrowserRedirect})}async exchangeCodeForSession(e){return await this.initializePromise,this._acquireLock(-1,async()=>this._exchangeCodeForSession(e))}async signInWithWeb3(e){const{chain:t}=e;switch(t){case"ethereum":return await this.signInWithEthereum(e);case"solana":return await this.signInWithSolana(e);default:throw new Error(`@supabase/auth-js: Unsupported chain "${t}"`)}}async signInWithEthereum(e){var t,n,r,s,a,o,l,c,h,d,f;let _,y;if("message"in e)_=e.message,y=e.signature;else{const{chain:x,wallet:m,statement:g,options:M}=e;let v;if(vt())if(typeof m=="object")v=m;else{const S=window;if("ethereum"in S&&typeof S.ethereum=="object"&&"request"in S.ethereum&&typeof S.ethereum.request=="function")v=S.ethereum;else throw new Error("@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.")}else{if(typeof m!="object"||!M?.url)throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");v=m}const u=new URL((t=M?.url)!==null&&t!==void 0?t:window.location.href),p=await v.request({method:"eth_requestAccounts"}).then(S=>S).catch(()=>{throw new Error("@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid")});if(!p||p.length===0)throw new Error("@supabase/auth-js: No accounts available. Please ensure the wallet is connected.");const w=Sh(p[0]);let b=(n=M?.signInWithEthereum)===null||n===void 0?void 0:n.chainId;if(!b){const S=await v.request({method:"eth_chainId"});b=Mp(S)}const P={domain:u.host,address:w,statement:g,uri:u.href,version:"1",chainId:b,nonce:(r=M?.signInWithEthereum)===null||r===void 0?void 0:r.nonce,issuedAt:(a=(s=M?.signInWithEthereum)===null||s===void 0?void 0:s.issuedAt)!==null&&a!==void 0?a:new Date,expirationTime:(o=M?.signInWithEthereum)===null||o===void 0?void 0:o.expirationTime,notBefore:(l=M?.signInWithEthereum)===null||l===void 0?void 0:l.notBefore,requestId:(c=M?.signInWithEthereum)===null||c===void 0?void 0:c.requestId,resources:(h=M?.signInWithEthereum)===null||h===void 0?void 0:h.resources};_=Ap(P),y=await v.request({method:"personal_sign",params:[Tp(_),w]})}try{const{data:x,error:m}=await Se(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"ethereum",message:_,signature:y},!((d=e.options)===null||d===void 0)&&d.captchaToken?{gotrue_meta_security:{captcha_token:(f=e.options)===null||f===void 0?void 0:f.captchaToken}}:null),xform:$t});if(m)throw m;if(!x||!x.session||!x.user){const g=new si;return this._returnResult({data:{user:null,session:null},error:g})}return x.session&&(await this._saveSession(x.session),await this._notifyAllSubscribers("SIGNED_IN",x.session)),this._returnResult({data:Object.assign({},x),error:m})}catch(x){if(me(x))return this._returnResult({data:{user:null,session:null},error:x});throw x}}async signInWithSolana(e){var t,n,r,s,a,o,l,c,h,d,f,_;let y,x;if("message"in e)y=e.message,x=e.signature;else{const{chain:m,wallet:g,statement:M,options:v}=e;let u;if(vt())if(typeof g=="object")u=g;else{const w=window;if("solana"in w&&typeof w.solana=="object"&&("signIn"in w.solana&&typeof w.solana.signIn=="function"||"signMessage"in w.solana&&typeof w.solana.signMessage=="function"))u=w.solana;else throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.")}else{if(typeof g!="object"||!v?.url)throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");u=g}const p=new URL((t=v?.url)!==null&&t!==void 0?t:window.location.href);if("signIn"in u&&u.signIn){const w=await u.signIn(Object.assign(Object.assign(Object.assign({issuedAt:new Date().toISOString()},v?.signInWithSolana),{version:"1",domain:p.host,uri:p.href}),M?{statement:M}:null));let b;if(Array.isArray(w)&&w[0]&&typeof w[0]=="object")b=w[0];else if(w&&typeof w=="object"&&"signedMessage"in w&&"signature"in w)b=w;else throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");if("signedMessage"in b&&"signature"in b&&(typeof b.signedMessage=="string"||b.signedMessage instanceof Uint8Array)&&b.signature instanceof Uint8Array)y=typeof b.signedMessage=="string"?b.signedMessage:new TextDecoder().decode(b.signedMessage),x=b.signature;else throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields")}else{if(!("signMessage"in u)||typeof u.signMessage!="function"||!("publicKey"in u)||typeof u!="object"||!u.publicKey||!("toBase58"in u.publicKey)||typeof u.publicKey.toBase58!="function")throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");y=[`${p.host} wants you to sign in with your Solana account:`,u.publicKey.toBase58(),...M?["",M,""]:[""],"Version: 1",`URI: ${p.href}`,`Issued At: ${(r=(n=v?.signInWithSolana)===null||n===void 0?void 0:n.issuedAt)!==null&&r!==void 0?r:new Date().toISOString()}`,...!((s=v?.signInWithSolana)===null||s===void 0)&&s.notBefore?[`Not Before: ${v.signInWithSolana.notBefore}`]:[],...!((a=v?.signInWithSolana)===null||a===void 0)&&a.expirationTime?[`Expiration Time: ${v.signInWithSolana.expirationTime}`]:[],...!((o=v?.signInWithSolana)===null||o===void 0)&&o.chainId?[`Chain ID: ${v.signInWithSolana.chainId}`]:[],...!((l=v?.signInWithSolana)===null||l===void 0)&&l.nonce?[`Nonce: ${v.signInWithSolana.nonce}`]:[],...!((c=v?.signInWithSolana)===null||c===void 0)&&c.requestId?[`Request ID: ${v.signInWithSolana.requestId}`]:[],...!((d=(h=v?.signInWithSolana)===null||h===void 0?void 0:h.resources)===null||d===void 0)&&d.length?["Resources",...v.signInWithSolana.resources.map(b=>`- ${b}`)]:[]].join(`
`);const w=await u.signMessage(new TextEncoder().encode(y),"utf8");if(!w||!(w instanceof Uint8Array))throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");x=w}}try{const{data:m,error:g}=await Se(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"solana",message:y,signature:Zn(x)},!((f=e.options)===null||f===void 0)&&f.captchaToken?{gotrue_meta_security:{captcha_token:(_=e.options)===null||_===void 0?void 0:_.captchaToken}}:null),xform:$t});if(g)throw g;if(!m||!m.session||!m.user){const M=new si;return this._returnResult({data:{user:null,session:null},error:M})}return m.session&&(await this._saveSession(m.session),await this._notifyAllSubscribers("SIGNED_IN",m.session)),this._returnResult({data:Object.assign({},m),error:g})}catch(m){if(me(m))return this._returnResult({data:{user:null,session:null},error:m});throw m}}async _exchangeCodeForSession(e){const t=await Bn(this.storage,`${this.storageKey}-code-verifier`),[n,r]=(t??"").split("/");try{const{data:s,error:a}=await Se(this.fetch,"POST",`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:e,code_verifier:n},xform:$t});if(await _n(this.storage,`${this.storageKey}-code-verifier`),a)throw a;if(!s||!s.session||!s.user){const o=new si;return this._returnResult({data:{user:null,session:null,redirectType:null},error:o})}return s.session&&(await this._saveSession(s.session),await this._notifyAllSubscribers("SIGNED_IN",s.session)),this._returnResult({data:Object.assign(Object.assign({},s),{redirectType:r??null}),error:a})}catch(s){if(me(s))return this._returnResult({data:{user:null,session:null,redirectType:null},error:s});throw s}}async signInWithIdToken(e){try{const{options:t,provider:n,token:r,access_token:s,nonce:a}=e,o=await Se(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:n,id_token:r,access_token:s,nonce:a,gotrue_meta_security:{captcha_token:t?.captchaToken}},xform:$t}),{data:l,error:c}=o;if(c)return this._returnResult({data:{user:null,session:null},error:c});if(!l||!l.session||!l.user){const h=new si;return this._returnResult({data:{user:null,session:null},error:h})}return l.session&&(await this._saveSession(l.session),await this._notifyAllSubscribers("SIGNED_IN",l.session)),this._returnResult({data:l,error:c})}catch(t){if(me(t))return this._returnResult({data:{user:null,session:null},error:t});throw t}}async signInWithOtp(e){var t,n,r,s,a;try{if("email"in e){const{email:o,options:l}=e;let c=null,h=null;this.flowType==="pkce"&&([c,h]=await ai(this.storage,this.storageKey));const{error:d}=await Se(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{email:o,data:(t=l?.data)!==null&&t!==void 0?t:{},create_user:(n=l?.shouldCreateUser)!==null&&n!==void 0?n:!0,gotrue_meta_security:{captcha_token:l?.captchaToken},code_challenge:c,code_challenge_method:h},redirectTo:l?.emailRedirectTo});return this._returnResult({data:{user:null,session:null},error:d})}if("phone"in e){const{phone:o,options:l}=e,{data:c,error:h}=await Se(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{phone:o,data:(r=l?.data)!==null&&r!==void 0?r:{},create_user:(s=l?.shouldCreateUser)!==null&&s!==void 0?s:!0,gotrue_meta_security:{captcha_token:l?.captchaToken},channel:(a=l?.channel)!==null&&a!==void 0?a:"sms"}});return this._returnResult({data:{user:null,session:null,messageId:c?.message_id},error:h})}throw new Pr("You must provide either an email or phone number.")}catch(o){if(me(o))return this._returnResult({data:{user:null,session:null},error:o});throw o}}async verifyOtp(e){var t,n;try{let r,s;"options"in e&&(r=(t=e.options)===null||t===void 0?void 0:t.redirectTo,s=(n=e.options)===null||n===void 0?void 0:n.captchaToken);const{data:a,error:o}=await Se(this.fetch,"POST",`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},e),{gotrue_meta_security:{captcha_token:s}}),redirectTo:r,xform:$t});if(o)throw o;if(!a)throw new Error("An error occurred on token verification.");const l=a.session,c=a.user;return l?.access_token&&(await this._saveSession(l),await this._notifyAllSubscribers(e.type=="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",l)),this._returnResult({data:{user:c,session:l},error:null})}catch(r){if(me(r))return this._returnResult({data:{user:null,session:null},error:r});throw r}}async signInWithSSO(e){var t,n,r;try{let s=null,a=null;this.flowType==="pkce"&&([s,a]=await ai(this.storage,this.storageKey));const o=await Se(this.fetch,"POST",`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},"providerId"in e?{provider_id:e.providerId}:null),"domain"in e?{domain:e.domain}:null),{redirect_to:(n=(t=e.options)===null||t===void 0?void 0:t.redirectTo)!==null&&n!==void 0?n:void 0}),!((r=e?.options)===null||r===void 0)&&r.captchaToken?{gotrue_meta_security:{captcha_token:e.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:s,code_challenge_method:a}),headers:this.headers,xform:vp});return this._returnResult(o)}catch(s){if(me(s))return this._returnResult({data:null,error:s});throw s}}async reauthenticate(){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._reauthenticate())}async _reauthenticate(){try{return await this._useSession(async e=>{const{data:{session:t},error:n}=e;if(n)throw n;if(!t)throw new jt;const{error:r}=await Se(this.fetch,"GET",`${this.url}/reauthenticate`,{headers:this.headers,jwt:t.access_token});return this._returnResult({data:{user:null,session:null},error:r})})}catch(e){if(me(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async resend(e){try{const t=`${this.url}/resend`;if("email"in e){const{email:n,type:r,options:s}=e,{error:a}=await Se(this.fetch,"POST",t,{headers:this.headers,body:{email:n,type:r,gotrue_meta_security:{captcha_token:s?.captchaToken}},redirectTo:s?.emailRedirectTo});return this._returnResult({data:{user:null,session:null},error:a})}else if("phone"in e){const{phone:n,type:r,options:s}=e,{data:a,error:o}=await Se(this.fetch,"POST",t,{headers:this.headers,body:{phone:n,type:r,gotrue_meta_security:{captcha_token:s?.captchaToken}}});return this._returnResult({data:{user:null,session:null,messageId:a?.message_id},error:o})}throw new Pr("You must provide either an email or phone number and a type")}catch(t){if(me(t))return this._returnResult({data:{user:null,session:null},error:t});throw t}}async getSession(){return await this.initializePromise,await this._acquireLock(-1,async()=>this._useSession(async t=>t))}async _acquireLock(e,t){this._debug("#_acquireLock","begin",e);try{if(this.lockAcquired){const n=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),r=(async()=>(await n,await t()))();return this.pendingInLock.push((async()=>{try{await r}catch{}})()),r}return await this.lock(`lock:${this.storageKey}`,e,async()=>{this._debug("#_acquireLock","lock acquired for storage key",this.storageKey);try{this.lockAcquired=!0;const n=t();for(this.pendingInLock.push((async()=>{try{await n}catch{}})()),await n;this.pendingInLock.length;){const r=[...this.pendingInLock];await Promise.all(r),this.pendingInLock.splice(0,r.length)}return await n}finally{this._debug("#_acquireLock","lock released for storage key",this.storageKey),this.lockAcquired=!1}})}finally{this._debug("#_acquireLock","end")}}async _useSession(e){this._debug("#_useSession","begin");try{const t=await this.__loadSession();return await e(t)}finally{this._debug("#_useSession","end")}}async __loadSession(){this._debug("#__loadSession()","begin"),this.lockAcquired||this._debug("#__loadSession()","used outside of an acquired lock!",new Error().stack);try{let e=null;const t=await Bn(this.storage,this.storageKey);if(this._debug("#getSession()","session from storage",t),t!==null&&(this._isValidSession(t)?e=t:(this._debug("#getSession()","session from storage is not valid"),await this._removeSession())),!e)return{data:{session:null},error:null};const n=e.expires_at?e.expires_at*1e3-Date.now()<Us:!1;if(this._debug("#__loadSession()",`session has${n?"":" not"} expired`,"expires_at",e.expires_at),!n){if(this.userStorage){const a=await Bn(this.userStorage,this.storageKey+"-user");a?.user?e.user=a.user:e.user=Ns()}if(this.storage.isServer&&e.user&&!e.user.__isUserNotAvailableProxy){const a={value:this.suppressGetSessionWarning};e.user=pp(e.user,a),a.value&&(this.suppressGetSessionWarning=!0)}return{data:{session:e},error:null}}const{data:r,error:s}=await this._callRefreshToken(e.refresh_token);return s?this._returnResult({data:{session:null},error:s}):this._returnResult({data:{session:r},error:null})}finally{this._debug("#__loadSession()","end")}}async getUser(e){return e?await this._getUser(e):(await this.initializePromise,await this._acquireLock(-1,async()=>await this._getUser()))}async _getUser(e){try{return e?await Se(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:e,xform:Sn}):await this._useSession(async t=>{var n,r,s;const{data:a,error:o}=t;if(o)throw o;return!(!((n=a.session)===null||n===void 0)&&n.access_token)&&!this.hasCustomAuthorizationHeader?{data:{user:null},error:new jt}:await Se(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:(s=(r=a.session)===null||r===void 0?void 0:r.access_token)!==null&&s!==void 0?s:void 0,xform:Sn})})}catch(t){if(me(t))return $f(t)&&(await this._removeSession(),await _n(this.storage,`${this.storageKey}-code-verifier`)),this._returnResult({data:{user:null},error:t});throw t}}async updateUser(e,t={}){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._updateUser(e,t))}async _updateUser(e,t={}){try{return await this._useSession(async n=>{const{data:r,error:s}=n;if(s)throw s;if(!r.session)throw new jt;const a=r.session;let o=null,l=null;this.flowType==="pkce"&&e.email!=null&&([o,l]=await ai(this.storage,this.storageKey));const{data:c,error:h}=await Se(this.fetch,"PUT",`${this.url}/user`,{headers:this.headers,redirectTo:t?.emailRedirectTo,body:Object.assign(Object.assign({},e),{code_challenge:o,code_challenge_method:l}),jwt:a.access_token,xform:Sn});if(h)throw h;return a.user=c.user,await this._saveSession(a),await this._notifyAllSubscribers("USER_UPDATED",a),this._returnResult({data:{user:a.user},error:null})})}catch(n){if(me(n))return this._returnResult({data:{user:null},error:n});throw n}}async setSession(e){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._setSession(e))}async _setSession(e){try{if(!e.access_token||!e.refresh_token)throw new jt;const t=Date.now()/1e3;let n=t,r=!0,s=null;const{payload:a}=Os(e.access_token);if(a.exp&&(n=a.exp,r=n<=t),r){const{data:o,error:l}=await this._callRefreshToken(e.refresh_token);if(l)return this._returnResult({data:{user:null,session:null},error:l});if(!o)return{data:{user:null,session:null},error:null};s=o}else{const{data:o,error:l}=await this._getUser(e.access_token);if(l)throw l;s={access_token:e.access_token,refresh_token:e.refresh_token,user:o.user,token_type:"bearer",expires_in:n-t,expires_at:n},await this._saveSession(s),await this._notifyAllSubscribers("SIGNED_IN",s)}return this._returnResult({data:{user:s.user,session:s},error:null})}catch(t){if(me(t))return this._returnResult({data:{session:null,user:null},error:t});throw t}}async refreshSession(e){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._refreshSession(e))}async _refreshSession(e){try{return await this._useSession(async t=>{var n;if(!e){const{data:a,error:o}=t;if(o)throw o;e=(n=a.session)!==null&&n!==void 0?n:void 0}if(!e?.refresh_token)throw new jt;const{data:r,error:s}=await this._callRefreshToken(e.refresh_token);return s?this._returnResult({data:{user:null,session:null},error:s}):r?this._returnResult({data:{user:r.user,session:r},error:null}):this._returnResult({data:{user:null,session:null},error:null})})}catch(t){if(me(t))return this._returnResult({data:{user:null,session:null},error:t});throw t}}async _getSessionFromURL(e,t){try{if(!vt())throw new Cr("No browser detected.");if(e.error||e.error_description||e.error_code)throw new Cr(e.error_description||"Error in URL with unspecified error_description",{error:e.error||"unspecified_error",code:e.error_code||"unspecified_code"});switch(t){case"implicit":if(this.flowType==="pkce")throw new Ho("Not a valid PKCE flow url.");break;case"pkce":if(this.flowType==="implicit")throw new Cr("Not a valid implicit grant flow url.");break;default:}if(t==="pkce"){if(this._debug("#_initialize()","begin","is PKCE flow",!0),!e.code)throw new Ho("No code detected.");const{data:M,error:v}=await this._exchangeCodeForSession(e.code);if(v)throw v;const u=new URL(window.location.href);return u.searchParams.delete("code"),window.history.replaceState(window.history.state,"",u.toString()),{data:{session:M.session,redirectType:null},error:null}}const{provider_token:n,provider_refresh_token:r,access_token:s,refresh_token:a,expires_in:o,expires_at:l,token_type:c}=e;if(!s||!o||!a||!c)throw new Cr("No session defined in URL");const h=Math.round(Date.now()/1e3),d=parseInt(o);let f=h+d;l&&(f=parseInt(l));const _=f-h;_*1e3<=Ti&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${_}s, should have been closer to ${d}s`);const y=f-d;h-y>=120?console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",y,f,h):h-y<0&&console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",y,f,h);const{data:x,error:m}=await this._getUser(s);if(m)throw m;const g={provider_token:n,provider_refresh_token:r,access_token:s,expires_in:d,expires_at:f,refresh_token:a,token_type:c,user:x.user};return window.location.hash="",this._debug("#_getSessionFromURL()","clearing window.location.hash"),this._returnResult({data:{session:g,redirectType:e.type},error:null})}catch(n){if(me(n))return this._returnResult({data:{session:null,redirectType:null},error:n});throw n}}_isImplicitGrantCallback(e){return!!(e.access_token||e.error_description)}async _isPKCECallback(e){const t=await Bn(this.storage,`${this.storageKey}-code-verifier`);return!!(e.code&&t)}async signOut(e={scope:"global"}){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._signOut(e))}async _signOut({scope:e}={scope:"global"}){return await this._useSession(async t=>{var n;const{data:r,error:s}=t;if(s)return this._returnResult({error:s});const a=(n=r.session)===null||n===void 0?void 0:n.access_token;if(a){const{error:o}=await this.admin.signOut(a,e);if(o&&!(jf(o)&&(o.status===404||o.status===401||o.status===403)))return this._returnResult({error:o})}return e!=="others"&&(await this._removeSession(),await _n(this.storage,`${this.storageKey}-code-verifier`)),this._returnResult({error:null})})}onAuthStateChange(e){const t=ep(),n={id:t,callback:e,unsubscribe:()=>{this._debug("#unsubscribe()","state change callback with id removed",t),this.stateChangeEmitters.delete(t)}};return this._debug("#onAuthStateChange()","registered callback with id",t),this.stateChangeEmitters.set(t,n),(async()=>(await this.initializePromise,await this._acquireLock(-1,async()=>{this._emitInitialSession(t)})))(),{data:{subscription:n}}}async _emitInitialSession(e){return await this._useSession(async t=>{var n,r;try{const{data:{session:s},error:a}=t;if(a)throw a;await((n=this.stateChangeEmitters.get(e))===null||n===void 0?void 0:n.callback("INITIAL_SESSION",s)),this._debug("INITIAL_SESSION","callback id",e,"session",s)}catch(s){await((r=this.stateChangeEmitters.get(e))===null||r===void 0?void 0:r.callback("INITIAL_SESSION",null)),this._debug("INITIAL_SESSION","callback id",e,"error",s),console.error(s)}})}async resetPasswordForEmail(e,t={}){let n=null,r=null;this.flowType==="pkce"&&([n,r]=await ai(this.storage,this.storageKey,!0));try{return await Se(this.fetch,"POST",`${this.url}/recover`,{body:{email:e,code_challenge:n,code_challenge_method:r,gotrue_meta_security:{captcha_token:t.captchaToken}},headers:this.headers,redirectTo:t.redirectTo})}catch(s){if(me(s))return this._returnResult({data:null,error:s});throw s}}async getUserIdentities(){var e;try{const{data:t,error:n}=await this.getUser();if(n)throw n;return this._returnResult({data:{identities:(e=t.user.identities)!==null&&e!==void 0?e:[]},error:null})}catch(t){if(me(t))return this._returnResult({data:null,error:t});throw t}}async linkIdentity(e){return"token"in e?this.linkIdentityIdToken(e):this.linkIdentityOAuth(e)}async linkIdentityOAuth(e){var t;try{const{data:n,error:r}=await this._useSession(async s=>{var a,o,l,c,h;const{data:d,error:f}=s;if(f)throw f;const _=await this._getUrlForProvider(`${this.url}/user/identities/authorize`,e.provider,{redirectTo:(a=e.options)===null||a===void 0?void 0:a.redirectTo,scopes:(o=e.options)===null||o===void 0?void 0:o.scopes,queryParams:(l=e.options)===null||l===void 0?void 0:l.queryParams,skipBrowserRedirect:!0});return await Se(this.fetch,"GET",_,{headers:this.headers,jwt:(h=(c=d.session)===null||c===void 0?void 0:c.access_token)!==null&&h!==void 0?h:void 0})});if(r)throw r;return vt()&&!(!((t=e.options)===null||t===void 0)&&t.skipBrowserRedirect)&&window.location.assign(n?.url),this._returnResult({data:{provider:e.provider,url:n?.url},error:null})}catch(n){if(me(n))return this._returnResult({data:{provider:e.provider,url:null},error:n});throw n}}async linkIdentityIdToken(e){return await this._useSession(async t=>{var n;try{const{error:r,data:{session:s}}=t;if(r)throw r;const{options:a,provider:o,token:l,access_token:c,nonce:h}=e,d=await Se(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,jwt:(n=s?.access_token)!==null&&n!==void 0?n:void 0,body:{provider:o,id_token:l,access_token:c,nonce:h,link_identity:!0,gotrue_meta_security:{captcha_token:a?.captchaToken}},xform:$t}),{data:f,error:_}=d;return _?this._returnResult({data:{user:null,session:null},error:_}):!f||!f.session||!f.user?this._returnResult({data:{user:null,session:null},error:new si}):(f.session&&(await this._saveSession(f.session),await this._notifyAllSubscribers("USER_UPDATED",f.session)),this._returnResult({data:f,error:_}))}catch(r){if(me(r))return this._returnResult({data:{user:null,session:null},error:r});throw r}})}async unlinkIdentity(e){try{return await this._useSession(async t=>{var n,r;const{data:s,error:a}=t;if(a)throw a;return await Se(this.fetch,"DELETE",`${this.url}/user/identities/${e.identity_id}`,{headers:this.headers,jwt:(r=(n=s.session)===null||n===void 0?void 0:n.access_token)!==null&&r!==void 0?r:void 0})})}catch(t){if(me(t))return this._returnResult({data:null,error:t});throw t}}async _refreshAccessToken(e){const t=`#_refreshAccessToken(${e.substring(0,5)}...)`;this._debug(t,"begin");try{const n=Date.now();return await rp(async r=>(r>0&&await ip(200*Math.pow(2,r-1)),this._debug(t,"refreshing attempt",r),await Se(this.fetch,"POST",`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:e},headers:this.headers,xform:$t})),(r,s)=>{const a=200*Math.pow(2,r);return s&&Ds(s)&&Date.now()+a-n<Ti})}catch(n){if(this._debug(t,"error",n),me(n))return this._returnResult({data:{session:null,user:null},error:n});throw n}finally{this._debug(t,"end")}}_isValidSession(e){return typeof e=="object"&&e!==null&&"access_token"in e&&"refresh_token"in e&&"expires_at"in e}async _handleProviderSignIn(e,t){const n=await this._getUrlForProvider(`${this.url}/authorize`,e,{redirectTo:t.redirectTo,scopes:t.scopes,queryParams:t.queryParams});return this._debug("#_handleProviderSignIn()","provider",e,"options",t,"url",n),vt()&&!t.skipBrowserRedirect&&window.location.assign(n),{data:{provider:e,url:n},error:null}}async _recoverAndRefresh(){var e,t;const n="#_recoverAndRefresh()";this._debug(n,"begin");try{const r=await Bn(this.storage,this.storageKey);if(r&&this.userStorage){let a=await Bn(this.userStorage,this.storageKey+"-user");!this.storage.isServer&&Object.is(this.storage,this.userStorage)&&!a&&(a={user:r.user},await Ai(this.userStorage,this.storageKey+"-user",a)),r.user=(e=a?.user)!==null&&e!==void 0?e:Ns()}else if(r&&!r.user&&!r.user){const a=await Bn(this.storage,this.storageKey+"-user");a&&a?.user?(r.user=a.user,await _n(this.storage,this.storageKey+"-user"),await Ai(this.storage,this.storageKey,r)):r.user=Ns()}if(this._debug(n,"session from storage",r),!this._isValidSession(r)){this._debug(n,"session is not valid"),r!==null&&await this._removeSession();return}const s=((t=r.expires_at)!==null&&t!==void 0?t:1/0)*1e3-Date.now()<Us;if(this._debug(n,`session has${s?"":" not"} expired with margin of ${Us}s`),s){if(this.autoRefreshToken&&r.refresh_token){const{error:a}=await this._callRefreshToken(r.refresh_token);a&&(console.error(a),Ds(a)||(this._debug(n,"refresh failed with a non-retryable error, removing the session",a),await this._removeSession()))}}else if(r.user&&r.user.__isUserNotAvailableProxy===!0)try{const{data:a,error:o}=await this._getUser(r.access_token);!o&&a?.user?(r.user=a.user,await this._saveSession(r),await this._notifyAllSubscribers("SIGNED_IN",r)):this._debug(n,"could not get user data, skipping SIGNED_IN notification")}catch(a){console.error("Error getting user data:",a),this._debug(n,"error getting user data, skipping SIGNED_IN notification",a)}else await this._notifyAllSubscribers("SIGNED_IN",r)}catch(r){this._debug(n,"error",r),console.error(r);return}finally{this._debug(n,"end")}}async _callRefreshToken(e){var t,n;if(!e)throw new jt;if(this.refreshingDeferred)return this.refreshingDeferred.promise;const r=`#_callRefreshToken(${e.substring(0,5)}...)`;this._debug(r,"begin");try{this.refreshingDeferred=new fs;const{data:s,error:a}=await this._refreshAccessToken(e);if(a)throw a;if(!s.session)throw new jt;await this._saveSession(s.session),await this._notifyAllSubscribers("TOKEN_REFRESHED",s.session);const o={data:s.session,error:null};return this.refreshingDeferred.resolve(o),o}catch(s){if(this._debug(r,"error",s),me(s)){const a={data:null,error:s};return Ds(s)||await this._removeSession(),(t=this.refreshingDeferred)===null||t===void 0||t.resolve(a),a}throw(n=this.refreshingDeferred)===null||n===void 0||n.reject(s),s}finally{this.refreshingDeferred=null,this._debug(r,"end")}}async _notifyAllSubscribers(e,t,n=!0){const r=`#_notifyAllSubscribers(${e})`;this._debug(r,"begin",t,`broadcast = ${n}`);try{this.broadcastChannel&&n&&this.broadcastChannel.postMessage({event:e,session:t});const s=[],a=Array.from(this.stateChangeEmitters.values()).map(async o=>{try{await o.callback(e,t)}catch(l){s.push(l)}});if(await Promise.all(a),s.length>0){for(let o=0;o<s.length;o+=1)console.error(s[o]);throw s[0]}}finally{this._debug(r,"end")}}async _saveSession(e){this._debug("#_saveSession()",e),this.suppressGetSessionWarning=!0;const t=Object.assign({},e),n=t.user&&t.user.__isUserNotAvailableProxy===!0;if(this.userStorage){!n&&t.user&&await Ai(this.userStorage,this.storageKey+"-user",{user:t.user});const r=Object.assign({},t);delete r.user;const s=$o(r);await Ai(this.storage,this.storageKey,s)}else{const r=$o(t);await Ai(this.storage,this.storageKey,r)}}async _removeSession(){this._debug("#_removeSession()"),await _n(this.storage,this.storageKey),await _n(this.storage,this.storageKey+"-code-verifier"),await _n(this.storage,this.storageKey+"-user"),this.userStorage&&await _n(this.userStorage,this.storageKey+"-user"),await this._notifyAllSubscribers("SIGNED_OUT",null)}_removeVisibilityChangedCallback(){this._debug("#_removeVisibilityChangedCallback()");const e=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{e&&vt()&&window?.removeEventListener&&window.removeEventListener("visibilitychange",e)}catch(t){console.error("removing visibilitychange callback failed",t)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug("#_startAutoRefresh()");const e=setInterval(()=>this._autoRefreshTokenTick(),Ti);this.autoRefreshTicker=e,e&&typeof e=="object"&&typeof e.unref=="function"?e.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(e),setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0)}async _stopAutoRefresh(){this._debug("#_stopAutoRefresh()");const e=this.autoRefreshTicker;this.autoRefreshTicker=null,e&&clearInterval(e)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async _autoRefreshTokenTick(){this._debug("#_autoRefreshTokenTick()","begin");try{await this._acquireLock(0,async()=>{try{const e=Date.now();try{return await this._useSession(async t=>{const{data:{session:n}}=t;if(!n||!n.refresh_token||!n.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const r=Math.floor((n.expires_at*1e3-e)/Ti);this._debug("#_autoRefreshTokenTick()",`access token expires in ${r} ticks, a tick lasts ${Ti}ms, refresh threshold is ${Ta} ticks`),r<=Ta&&await this._callRefreshToken(n.refresh_token)})}catch(t){console.error("Auto refresh tick failed with error. This is likely a transient error.",t)}}finally{this._debug("#_autoRefreshTokenTick()","end")}})}catch(e){if(e.isAcquireTimeout||e instanceof wh)this._debug("auto refresh token tick lock not available");else throw e}}async _handleVisibilityChange(){if(this._debug("#_handleVisibilityChange()"),!vt()||!window?.addEventListener)return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>await this._onVisibilityChanged(!1),window?.addEventListener("visibilitychange",this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(e){console.error("_handleVisibilityChange",e)}}async _onVisibilityChanged(e){const t=`#_onVisibilityChanged(${e})`;this._debug(t,"visibilityState",document.visibilityState),document.visibilityState==="visible"?(this.autoRefreshToken&&this._startAutoRefresh(),e||(await this.initializePromise,await this._acquireLock(-1,async()=>{if(document.visibilityState!=="visible"){this._debug(t,"acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");return}await this._recoverAndRefresh()}))):document.visibilityState==="hidden"&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(e,t,n){const r=[`provider=${encodeURIComponent(t)}`];if(n?.redirectTo&&r.push(`redirect_to=${encodeURIComponent(n.redirectTo)}`),n?.scopes&&r.push(`scopes=${encodeURIComponent(n.scopes)}`),this.flowType==="pkce"){const[s,a]=await ai(this.storage,this.storageKey),o=new URLSearchParams({code_challenge:`${encodeURIComponent(s)}`,code_challenge_method:`${encodeURIComponent(a)}`});r.push(o.toString())}if(n?.queryParams){const s=new URLSearchParams(n.queryParams);r.push(s.toString())}return n?.skipBrowserRedirect&&r.push(`skip_http_redirect=${n.skipBrowserRedirect}`),`${e}?${r.join("&")}`}async _unenroll(e){try{return await this._useSession(async t=>{var n;const{data:r,error:s}=t;return s?this._returnResult({data:null,error:s}):await Se(this.fetch,"DELETE",`${this.url}/factors/${e.factorId}`,{headers:this.headers,jwt:(n=r?.session)===null||n===void 0?void 0:n.access_token})})}catch(t){if(me(t))return this._returnResult({data:null,error:t});throw t}}async _enroll(e){try{return await this._useSession(async t=>{var n,r;const{data:s,error:a}=t;if(a)return this._returnResult({data:null,error:a});const o=Object.assign({friendly_name:e.friendlyName,factor_type:e.factorType},e.factorType==="phone"?{phone:e.phone}:e.factorType==="totp"?{issuer:e.issuer}:{}),{data:l,error:c}=await Se(this.fetch,"POST",`${this.url}/factors`,{body:o,headers:this.headers,jwt:(n=s?.session)===null||n===void 0?void 0:n.access_token});return c?this._returnResult({data:null,error:c}):(e.factorType==="totp"&&l.type==="totp"&&(!((r=l?.totp)===null||r===void 0)&&r.qr_code)&&(l.totp.qr_code=`data:image/svg+xml;utf-8,${l.totp.qr_code}`),this._returnResult({data:l,error:null}))})}catch(t){if(me(t))return this._returnResult({data:null,error:t});throw t}}async _verify(e){return this._acquireLock(-1,async()=>{try{return await this._useSession(async t=>{var n;const{data:r,error:s}=t;if(s)return this._returnResult({data:null,error:s});const a=Object.assign({challenge_id:e.challengeId},"webauthn"in e?{webauthn:Object.assign(Object.assign({},e.webauthn),{credential_response:e.webauthn.type==="create"?Dp(e.webauthn.credential_response):Op(e.webauthn.credential_response)})}:{code:e.code}),{data:o,error:l}=await Se(this.fetch,"POST",`${this.url}/factors/${e.factorId}/verify`,{body:a,headers:this.headers,jwt:(n=r?.session)===null||n===void 0?void 0:n.access_token});return l?this._returnResult({data:null,error:l}):(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+o.expires_in},o)),await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED",o),this._returnResult({data:o,error:l}))})}catch(t){if(me(t))return this._returnResult({data:null,error:t});throw t}})}async _challenge(e){return this._acquireLock(-1,async()=>{try{return await this._useSession(async t=>{var n;const{data:r,error:s}=t;if(s)return this._returnResult({data:null,error:s});const a=await Se(this.fetch,"POST",`${this.url}/factors/${e.factorId}/challenge`,{body:e,headers:this.headers,jwt:(n=r?.session)===null||n===void 0?void 0:n.access_token});if(a.error)return a;const{data:o}=a;if(o.type!=="webauthn")return{data:o,error:null};switch(o.webauthn.type){case"create":return{data:Object.assign(Object.assign({},o),{webauthn:Object.assign(Object.assign({},o.webauthn),{credential_options:Object.assign(Object.assign({},o.webauthn.credential_options),{publicKey:Ip(o.webauthn.credential_options.publicKey)})})}),error:null};case"request":return{data:Object.assign(Object.assign({},o),{webauthn:Object.assign(Object.assign({},o.webauthn),{credential_options:Object.assign(Object.assign({},o.webauthn.credential_options),{publicKey:Up(o.webauthn.credential_options.publicKey)})})}),error:null}}})}catch(t){if(me(t))return this._returnResult({data:null,error:t});throw t}})}async _challengeAndVerify(e){const{data:t,error:n}=await this._challenge({factorId:e.factorId});return n?this._returnResult({data:null,error:n}):await this._verify({factorId:e.factorId,challengeId:t.id,code:e.code})}async _listFactors(){var e;const{data:{user:t},error:n}=await this.getUser();if(n)return{data:null,error:n};const r={all:[],phone:[],totp:[],webauthn:[]};for(const s of(e=t?.factors)!==null&&e!==void 0?e:[])r.all.push(s),s.status==="verified"&&r[s.factor_type].push(s);return{data:r,error:null}}async _getAuthenticatorAssuranceLevel(){var e,t;const{data:{session:n},error:r}=await this.getSession();if(r)return this._returnResult({data:null,error:r});if(!n)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};const{payload:s}=Os(n.access_token);let a=null;s.aal&&(a=s.aal);let o=a;((t=(e=n.user.factors)===null||e===void 0?void 0:e.filter(h=>h.status==="verified"))!==null&&t!==void 0?t:[]).length>0&&(o="aal2");const c=s.amr||[];return{data:{currentLevel:a,nextLevel:o,currentAuthenticationMethods:c},error:null}}async _getAuthorizationDetails(e){try{return await this._useSession(async t=>{const{data:{session:n},error:r}=t;return r?this._returnResult({data:null,error:r}):n?await Se(this.fetch,"GET",`${this.url}/oauth/authorizations/${e}`,{headers:this.headers,jwt:n.access_token,xform:s=>({data:s,error:null})}):this._returnResult({data:null,error:new jt})})}catch(t){if(me(t))return this._returnResult({data:null,error:t});throw t}}async _approveAuthorization(e,t){try{return await this._useSession(async n=>{const{data:{session:r},error:s}=n;if(s)return this._returnResult({data:null,error:s});if(!r)return this._returnResult({data:null,error:new jt});const a=await Se(this.fetch,"POST",`${this.url}/oauth/authorizations/${e}/consent`,{headers:this.headers,jwt:r.access_token,body:{action:"approve"},xform:o=>({data:o,error:null})});return a.data&&a.data.redirect_url&&vt()&&!t?.skipBrowserRedirect&&window.location.assign(a.data.redirect_url),a})}catch(n){if(me(n))return this._returnResult({data:null,error:n});throw n}}async _denyAuthorization(e,t){try{return await this._useSession(async n=>{const{data:{session:r},error:s}=n;if(s)return this._returnResult({data:null,error:s});if(!r)return this._returnResult({data:null,error:new jt});const a=await Se(this.fetch,"POST",`${this.url}/oauth/authorizations/${e}/consent`,{headers:this.headers,jwt:r.access_token,body:{action:"deny"},xform:o=>({data:o,error:null})});return a.data&&a.data.redirect_url&&vt()&&!t?.skipBrowserRedirect&&window.location.assign(a.data.redirect_url),a})}catch(n){if(me(n))return this._returnResult({data:null,error:n});throw n}}async fetchJwk(e,t={keys:[]}){let n=t.keys.find(o=>o.kid===e);if(n)return n;const r=Date.now();if(n=this.jwks.keys.find(o=>o.kid===e),n&&this.jwks_cached_at+Vf>r)return n;const{data:s,error:a}=await Se(this.fetch,"GET",`${this.url}/.well-known/jwks.json`,{headers:this.headers});if(a)throw a;return!s.keys||s.keys.length===0||(this.jwks=s,this.jwks_cached_at=r,n=s.keys.find(o=>o.kid===e),!n)?null:n}async getClaims(e,t={}){try{let n=e;if(!n){const{data:_,error:y}=await this.getSession();if(y||!_.session)return this._returnResult({data:null,error:y});n=_.session.access_token}const{header:r,payload:s,signature:a,raw:{header:o,payload:l}}=Os(n);t?.allowExpired||up(s.exp);const c=!r.alg||r.alg.startsWith("HS")||!r.kid||!("crypto"in globalThis&&"subtle"in globalThis.crypto)?null:await this.fetchJwk(r.kid,t?.keys?{keys:t.keys}:t?.jwks);if(!c){const{error:_}=await this.getUser(n);if(_)throw _;return{data:{claims:s,header:r,signature:a},error:null}}const h=dp(r.alg),d=await crypto.subtle.importKey("jwk",c,h,!0,["verify"]);if(!await crypto.subtle.verify(h,d,a,Zf(`${o}.${l}`)))throw new Pa("Invalid JWT signature");return{data:{claims:s,header:r,signature:a},error:null}}catch(n){if(me(n))return this._returnResult({data:null,error:n});throw n}}}cr.nextInstanceID={};const Wp=cr;class jp extends Wp{constructor(e){super(e)}}class $p{constructor(e,t,n){var r,s,a;this.supabaseUrl=e,this.supabaseKey=t;const o=kf(e);if(!t)throw new Error("supabaseKey is required.");this.realtimeUrl=new URL("realtime/v1",o),this.realtimeUrl.protocol=this.realtimeUrl.protocol.replace("http","ws"),this.authUrl=new URL("auth/v1",o),this.storageUrl=new URL("storage/v1",o),this.functionsUrl=new URL("functions/v1",o);const l=`sb-${o.hostname.split(".")[0]}-auth-token`,c={db:Cf,realtime:If,auth:Object.assign(Object.assign({},Lf),{storageKey:l}),global:Pf},h=Ff(n??{},c);this.storageKey=(r=h.auth.storageKey)!==null&&r!==void 0?r:"",this.headers=(s=h.global.headers)!==null&&s!==void 0?s:{},h.accessToken?(this.accessToken=h.accessToken,this.auth=new Proxy({},{get:(d,f)=>{throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(f)} is not possible`)}})):this.auth=this._initSupabaseAuthClient((a=h.auth)!==null&&a!==void 0?a:{},this.headers,h.global.fetch),this.fetch=Of(t,this._getAccessToken.bind(this),h.global.fetch),this.realtime=this._initRealtimeClient(Object.assign({headers:this.headers,accessToken:this._getAccessToken.bind(this)},h.realtime)),this.rest=new kd(new URL("rest/v1",o).href,{headers:this.headers,schema:h.db.schema,fetch:this.fetch}),this.storage=new Tf(this.storageUrl.href,this.headers,this.fetch,n?.storage),h.accessToken||this._listenForAuthEvents()}get functions(){return new Dd(this.functionsUrl.href,{headers:this.headers,customFetch:this.fetch})}from(e){return this.rest.from(e)}schema(e){return this.rest.schema(e)}rpc(e,t={},n={head:!1,get:!1,count:void 0}){return this.rest.rpc(e,t,n)}channel(e,t={config:{}}){return this.realtime.channel(e,t)}getChannels(){return this.realtime.getChannels()}removeChannel(e){return this.realtime.removeChannel(e)}removeAllChannels(){return this.realtime.removeAllChannels()}async _getAccessToken(){var e,t;if(this.accessToken)return await this.accessToken();const{data:n}=await this.auth.getSession();return(t=(e=n.session)===null||e===void 0?void 0:e.access_token)!==null&&t!==void 0?t:this.supabaseKey}_initSupabaseAuthClient({autoRefreshToken:e,persistSession:t,detectSessionInUrl:n,storage:r,userStorage:s,storageKey:a,flowType:o,lock:l,debug:c,throwOnError:h},d,f){const _={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new jp({url:this.authUrl.href,headers:Object.assign(Object.assign({},_),d),storageKey:a,autoRefreshToken:e,persistSession:t,detectSessionInUrl:n,storage:r,userStorage:s,flowType:o,lock:l,debug:c,throwOnError:h,fetch:f,hasCustomAuthorizationHeader:Object.keys(this.headers).some(y=>y.toLowerCase()==="authorization")})}_initRealtimeClient(e){return new tf(this.realtimeUrl.href,Object.assign(Object.assign({},e),{params:Object.assign({apikey:this.supabaseKey},e?.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((t,n)=>{this._handleTokenChanged(t,"CLIENT",n?.access_token)})}_handleTokenChanged(e,t,n){(e==="TOKEN_REFRESHED"||e==="SIGNED_IN")&&this.changedAccessToken!==n?(this.changedAccessToken=n,this.realtime.setAuth(n)):e==="SIGNED_OUT"&&(this.realtime.setAuth(),t=="STORAGE"&&this.auth.signOut(),this.changedAccessToken=void 0)}}const qp=(i,e,t)=>new $p(i,e,t);function Xp(){if(typeof window<"u"||typeof process>"u")return!1;const i=process.version;if(i==null)return!1;const e=i.match(/^v(\d+)\./);return e?parseInt(e[1],10)<=18:!1}Xp()&&console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");const Kp="https://vuducjxwflkxjaajqzxb.supabase.co",Yp="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ1ZHVjanh3ZmxreGphYWpxenhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI4MjI5MTYsImV4cCI6MjA3ODM5ODkxNn0.J3HGTVL8U_z0qrAi8skfiHs_QF2O51Upp_hNy0Fi5Pk",En=qp(Kp,Yp,{auth:{autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0}}),Eh=q.createContext({}),Jp=({children:i})=>{const[e,t]=q.useState(null),[n,r]=q.useState(!0);q.useEffect(()=>{(async()=>{const{data:{session:c}}=await En.auth.getSession();t(c?.user??null),r(!1)})();const{data:{subscription:l}}=En.auth.onAuthStateChange((c,h)=>{t(h?.user??null),r(!1)});return()=>l.unsubscribe()},[]);const s=async o=>await En.auth.signInWithOtp({email:o,options:{emailRedirectTo:`${window.location.origin}/auth/callback`}}),a=async()=>await En.auth.signOut();return L.jsx(Eh.Provider,{value:{user:e,login:s,logout:a,loading:n},children:!n&&i})},no=()=>q.useContext(Eh);var Mh={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Qo=Ut.createContext&&Ut.createContext(Mh),Zp=["attr","size","title"];function Qp(i,e){if(i==null)return{};var t=em(i,e),n,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(i);for(r=0;r<s.length;r++)n=s[r],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(i,n)&&(t[n]=i[n])}return t}function em(i,e){if(i==null)return{};var t={};for(var n in i)if(Object.prototype.hasOwnProperty.call(i,n)){if(e.indexOf(n)>=0)continue;t[n]=i[n]}return t}function os(){return os=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(i[n]=t[n])}return i},os.apply(this,arguments)}function el(i,e){var t=Object.keys(i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(i);e&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(i,r).enumerable})),t.push.apply(t,n)}return t}function ls(i){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?el(Object(t),!0).forEach(function(n){tm(i,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(t)):el(Object(t)).forEach(function(n){Object.defineProperty(i,n,Object.getOwnPropertyDescriptor(t,n))})}return i}function tm(i,e,t){return e=nm(e),e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}function nm(i){var e=im(i,"string");return typeof e=="symbol"?e:e+""}function im(i,e){if(typeof i!="object"||!i)return i;var t=i[Symbol.toPrimitive];if(t!==void 0){var n=t.call(i,e);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(i)}function Th(i){return i&&i.map((e,t)=>Ut.createElement(e.tag,ls({key:t},e.attr),Th(e.child)))}function ps(i){return e=>Ut.createElement(rm,os({attr:ls({},i.attr)},e),Th(i.child))}function rm(i){var e=t=>{var{attr:n,size:r,title:s}=i,a=Qp(i,Zp),o=r||t.size||"1em",l;return t.className&&(l=t.className),i.className&&(l=(l?l+" ":"")+i.className),Ut.createElement("svg",os({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,a,{className:l,style:ls(ls({color:i.color||t.color},t.style),i.style),height:o,width:o,xmlns:"http://www.w3.org/2000/svg"}),s&&Ut.createElement("title",null,s),i.children)};return Qo!==void 0?Ut.createElement(Qo.Consumer,null,t=>e(t)):e(Mh)}function sm(i){return ps({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M436 192H312c-13.3 0-24-10.7-24-24V44c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v84h84c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm-276-24V44c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v84H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24zm0 300V344c0-13.3-10.7-24-24-24H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-84h84c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12H312c-13.3 0-24 10.7-24 24v124c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12z"},child:[]}]})(i)}function am(i){return ps({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"},child:[]}]})(i)}function om(i){return ps({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 180V56c0-13.3 10.7-24 24-24h124c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H64v84c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12zM288 44v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12V56c0-13.3-10.7-24-24-24H300c-6.6 0-12 5.4-12 12zm148 276h-40c-6.6 0-12 5.4-12 12v84h-84c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24V332c0-6.6-5.4-12-12-12zM160 468v-40c0-6.6-5.4-12-12-12H64v-84c0-6.6-5.4-12-12-12H12c-6.6 0-12 5.4-12 12v124c0 13.3 10.7 24 24 24h124c6.6 0 12-5.4 12-12z"},child:[]}]})(i)}function lm(i){return ps({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"},child:[]}]})(i)}var Qi={exports:{}},cm=Qi.exports,tl;function hm(){return tl||(tl=1,(function(i,e){(function(t,n){n(e)})(cm,(function(t){class n{constructor(u,p){this.state={angle:0,area:[],position:{x:0,y:0},hardAngle:0,hardDrawingAngle:0},this.createdDensity=p,this.nowDrawingDensity=this.createdDensity,this.render=u}setDensity(u){this.createdDensity=u,this.nowDrawingDensity=u}setDrawingDensity(u){this.nowDrawingDensity=u}setPosition(u){this.state.position=u}setAngle(u){this.state.angle=u}setArea(u){this.state.area=u}setHardDrawingAngle(u){this.state.hardDrawingAngle=u}setHardAngle(u){this.state.hardAngle=u,this.state.hardDrawingAngle=u}setOrientation(u){this.orientation=u}getDrawingDensity(){return this.nowDrawingDensity}getDensity(){return this.createdDensity}getHardAngle(){return this.state.hardAngle}}class r extends n{constructor(u,p,w){super(u,w),this.image=null,this.isLoad=!1,this.loadingAngle=0,this.image=new Image,this.image.src=p}draw(u){const p=this.render.getContext(),w=this.render.convertToGlobal(this.state.position),b=this.render.getRect().pageWidth,P=this.render.getRect().height;p.save(),p.translate(w.x,w.y),p.beginPath();for(let S of this.state.area)S!==null&&(S=this.render.convertToGlobal(S),p.lineTo(S.x-w.x,S.y-w.y));p.rotate(this.state.angle),p.clip(),this.isLoad?p.drawImage(this.image,0,0,b,P):this.drawLoader(p,{x:0,y:0},b,P),p.restore()}simpleDraw(u){const p=this.render.getRect(),w=this.render.getContext(),b=p.pageWidth,P=p.height,S=u===1?p.left+p.pageWidth:p.left,T=p.top;this.isLoad?w.drawImage(this.image,S,T,b,P):this.drawLoader(w,{x:S,y:T},b,P)}drawLoader(u,p,w,b){u.beginPath(),u.strokeStyle="rgb(200, 200, 200)",u.fillStyle="rgb(255, 255, 255)",u.lineWidth=1,u.rect(p.x+1,p.y+1,w-1,b-1),u.stroke(),u.fill();const P={x:p.x+w/2,y:p.y+b/2};u.beginPath(),u.lineWidth=10,u.arc(P.x,P.y,20,this.loadingAngle,3*Math.PI/2+this.loadingAngle),u.stroke(),u.closePath(),this.loadingAngle+=.07,this.loadingAngle>=2*Math.PI&&(this.loadingAngle=0)}load(){this.isLoad||(this.image.onload=()=>{this.isLoad=!0})}newTemporaryCopy(){return this}getTemporaryCopy(){return this}hideTemporaryCopy(){}}class s{constructor(u,p){this.pages=[],this.currentPageIndex=0,this.currentSpreadIndex=0,this.landscapeSpread=[],this.portraitSpread=[],this.render=p,this.app=u,this.currentPageIndex=0,this.isShowCover=this.app.getSettings().showCover}destroy(){this.pages=[]}createSpread(){this.landscapeSpread=[],this.portraitSpread=[];for(let p=0;p<this.pages.length;p++)this.portraitSpread.push([p]);let u=0;this.isShowCover&&(this.pages[0].setDensity("hard"),this.landscapeSpread.push([u]),u++);for(let p=u;p<this.pages.length;p+=2)p<this.pages.length-1?this.landscapeSpread.push([p,p+1]):(this.landscapeSpread.push([p]),this.pages[p].setDensity("hard"))}getSpread(){return this.render.getOrientation()==="landscape"?this.landscapeSpread:this.portraitSpread}getSpreadIndexByPage(u){const p=this.getSpread();for(let w=0;w<p.length;w++)if(u===p[w][0]||u===p[w][1])return w;return null}getPageCount(){return this.pages.length}getPages(){return this.pages}getPage(u){if(u>=0&&u<this.pages.length)return this.pages[u];throw new Error("Invalid page number")}nextBy(u){const p=this.pages.indexOf(u);return p<this.pages.length-1?this.pages[p+1]:null}prevBy(u){const p=this.pages.indexOf(u);return p>0?this.pages[p-1]:null}getFlippingPage(u){const p=this.currentSpreadIndex;if(this.render.getOrientation()==="portrait")return u===0?this.pages[p].newTemporaryCopy():this.pages[p-1];{const w=u===0?this.getSpread()[p+1]:this.getSpread()[p-1];return w.length===1||u===0?this.pages[w[0]]:this.pages[w[1]]}}getBottomPage(u){const p=this.currentSpreadIndex;if(this.render.getOrientation()==="portrait")return u===0?this.pages[p+1]:this.pages[p-1];{const w=u===0?this.getSpread()[p+1]:this.getSpread()[p-1];return w.length===1?this.pages[w[0]]:u===0?this.pages[w[1]]:this.pages[w[0]]}}showNext(){this.currentSpreadIndex<this.getSpread().length&&(this.currentSpreadIndex++,this.showSpread())}showPrev(){this.currentSpreadIndex>0&&(this.currentSpreadIndex--,this.showSpread())}getCurrentPageIndex(){return this.currentPageIndex}show(u=null){if(u===null&&(u=this.currentPageIndex),u<0||u>=this.pages.length)return;const p=this.getSpreadIndexByPage(u);p!==null&&(this.currentSpreadIndex=p,this.showSpread())}getCurrentSpreadIndex(){return this.currentSpreadIndex}setCurrentSpreadIndex(u){if(!(u>=0&&u<this.getSpread().length))throw new Error("Invalid page");this.currentSpreadIndex=u}showSpread(){const u=this.getSpread()[this.currentSpreadIndex];u.length===2?(this.render.setLeftPage(this.pages[u[0]]),this.render.setRightPage(this.pages[u[1]])):this.render.getOrientation()==="landscape"&&u[0]===this.pages.length-1?(this.render.setLeftPage(this.pages[u[0]]),this.render.setRightPage(null)):(this.render.setLeftPage(null),this.render.setRightPage(this.pages[u[0]])),this.currentPageIndex=u[0],this.app.updatePageIndex(this.currentPageIndex)}}class a extends s{constructor(u,p,w){super(u,p),this.imagesHref=w}load(){for(const u of this.imagesHref){const p=new r(this.render,u,"soft");p.load(),this.pages.push(p)}this.createSpread()}}class o{static GetDistanceBetweenTwoPoint(u,p){return u===null||p===null?1/0:Math.sqrt(Math.pow(p.x-u.x,2)+Math.pow(p.y-u.y,2))}static GetSegmentLength(u){return o.GetDistanceBetweenTwoPoint(u[0],u[1])}static GetAngleBetweenTwoLine(u,p){const w=u[0].y-u[1].y,b=p[0].y-p[1].y,P=u[1].x-u[0].x,S=p[1].x-p[0].x;return Math.acos((w*b+P*S)/(Math.sqrt(w*w+P*P)*Math.sqrt(b*b+S*S)))}static PointInRect(u,p){return p===null?null:p.x>=u.left&&p.x<=u.width+u.left&&p.y>=u.top&&p.y<=u.top+u.height?p:null}static GetRotatedPoint(u,p,w){return{x:u.x*Math.cos(w)+u.y*Math.sin(w)+p.x,y:u.y*Math.cos(w)-u.x*Math.sin(w)+p.y}}static LimitPointToCircle(u,p,w){if(o.GetDistanceBetweenTwoPoint(u,w)<=p)return w;const b=u.x,P=u.y,S=w.x,T=w.y;let N=Math.sqrt(Math.pow(p,2)*Math.pow(b-S,2)/(Math.pow(b-S,2)+Math.pow(P-T,2)))+b;w.x<0&&(N*=-1);let Y=(N-b)*(P-T)/(b-S)+P;return b-S+P===0&&(Y=p),{x:N,y:Y}}static GetIntersectBetweenTwoSegment(u,p,w){return o.PointInRect(u,o.GetIntersectBeetwenTwoLine(p,w))}static GetIntersectBeetwenTwoLine(u,p){const w=u[0].y-u[1].y,b=p[0].y-p[1].y,P=u[1].x-u[0].x,S=p[1].x-p[0].x,T=u[0].x*u[1].y-u[1].x*u[0].y,N=p[0].x*p[1].y-p[1].x*p[0].y,Y=w*N-b*T,D=P*N-S*T,z=-(T*S-N*P)/(w*S-b*P),V=-(w*N-b*T)/(w*S-b*P);if(isFinite(z)&&isFinite(V))return{x:z,y:V};if(Math.abs(Y-D)<.1)throw new Error("Segment included");return null}static GetCordsFromTwoPoint(u,p){const w=Math.abs(u.x-p.x),b=Math.abs(u.y-p.y),P=Math.max(w,b),S=[u];function T(N,Y,D,z,V){return Y>N?N+V*(D/z):Y<N?N-V*(D/z):N}for(let N=1;N<=P;N+=1)S.push({x:T(u.x,p.x,w,P,N),y:T(u.y,p.y,b,P,N)});return S}}class l extends n{constructor(u,p,w){super(u,w),this.copiedElement=null,this.temporaryCopy=null,this.isLoad=!1,this.element=p,this.element.classList.add("stf__item"),this.element.classList.add("--"+w)}newTemporaryCopy(){return this.nowDrawingDensity==="hard"?this:(this.temporaryCopy===null&&(this.copiedElement=this.element.cloneNode(!0),this.element.parentElement.appendChild(this.copiedElement),this.temporaryCopy=new l(this.render,this.copiedElement,this.nowDrawingDensity)),this.getTemporaryCopy())}getTemporaryCopy(){return this.temporaryCopy}hideTemporaryCopy(){this.temporaryCopy!==null&&(this.copiedElement.remove(),this.copiedElement=null,this.temporaryCopy=null)}draw(u){const p=u||this.nowDrawingDensity,w=this.render.convertToGlobal(this.state.position),b=this.render.getRect().pageWidth,P=this.render.getRect().height;this.element.classList.remove("--simple");const S=`
            display: block;
            z-index: ${this.element.style.zIndex};
            left: 0;
            top: 0;
            width: ${b}px;
            height: ${P}px;
        `;p==="hard"?this.drawHard(S):this.drawSoft(w,S)}drawHard(u=""){const p=this.render.getRect().left+this.render.getRect().width/2,w=this.state.hardDrawingAngle,b=u+`
                backface-visibility: hidden;
                -webkit-backface-visibility: hidden;
                clip-path: none;
                -webkit-clip-path: none;
            `+(this.orientation===0?`transform-origin: ${this.render.getRect().pageWidth}px 0; 
                   transform: translate3d(0, 0, 0) rotateY(${w}deg);`:`transform-origin: 0 0; 
                   transform: translate3d(${p}px, 0, 0) rotateY(${w}deg);`);this.element.style.cssText=b}drawSoft(u,p=""){let w="polygon( ";for(const P of this.state.area)if(P!==null){let S=this.render.getDirection()===1?{x:-P.x+this.state.position.x,y:P.y-this.state.position.y}:{x:P.x-this.state.position.x,y:P.y-this.state.position.y};S=o.GetRotatedPoint(S,{x:0,y:0},this.state.angle),w+=S.x+"px "+S.y+"px, "}w=w.slice(0,-2),w+=")";const b=p+`transform-origin: 0 0; clip-path: ${w}; -webkit-clip-path: ${w};`+(this.render.isSafari()&&this.state.angle===0?`transform: translate(${u.x}px, ${u.y}px);`:`transform: translate3d(${u.x}px, ${u.y}px, 0) rotate(${this.state.angle}rad);`);this.element.style.cssText=b}simpleDraw(u){const p=this.render.getRect(),w=p.pageWidth,b=p.height,P=u===1?p.left+p.pageWidth:p.left,S=p.top;this.element.classList.add("--simple"),this.element.style.cssText=`
            position: absolute; 
            display: block; 
            height: ${b}px; 
            left: ${P}px; 
            top: ${S}px; 
            width: ${w}px; 
            z-index: ${this.render.getSettings().startZIndex+1};`}getElement(){return this.element}load(){this.isLoad=!0}setOrientation(u){super.setOrientation(u),this.element.classList.remove("--left","--right"),this.element.classList.add(u===1?"--right":"--left")}setDrawingDensity(u){this.element.classList.remove("--soft","--hard"),this.element.classList.add("--"+u),super.setDrawingDensity(u)}}class c extends s{constructor(u,p,w,b){super(u,p),this.element=w,this.pagesElement=b}load(){for(const u of this.pagesElement){const p=new l(this.render,u,u.dataset.density==="hard"?"hard":"soft");p.load(),this.pages.push(p)}this.createSpread()}}class h{constructor(u,p,w,b){this.direction=u,this.corner=p,this.topIntersectPoint=null,this.sideIntersectPoint=null,this.bottomIntersectPoint=null,this.pageWidth=parseInt(w,10),this.pageHeight=parseInt(b,10)}calc(u){try{return this.position=this.calcAngleAndPosition(u),this.calculateIntersectPoint(this.position),!0}catch{return!1}}getFlippingClipArea(){const u=[];let p=!1;return u.push(this.rect.topLeft),u.push(this.topIntersectPoint),this.sideIntersectPoint===null?p=!0:(u.push(this.sideIntersectPoint),this.bottomIntersectPoint===null&&(p=!1)),u.push(this.bottomIntersectPoint),(p||this.corner==="bottom")&&u.push(this.rect.bottomLeft),u}getBottomClipArea(){const u=[];return u.push(this.topIntersectPoint),this.corner==="top"?u.push({x:this.pageWidth,y:0}):(this.topIntersectPoint!==null&&u.push({x:this.pageWidth,y:0}),u.push({x:this.pageWidth,y:this.pageHeight})),this.sideIntersectPoint!==null?o.GetDistanceBetweenTwoPoint(this.sideIntersectPoint,this.topIntersectPoint)>=10&&u.push(this.sideIntersectPoint):this.corner==="top"&&u.push({x:this.pageWidth,y:this.pageHeight}),u.push(this.bottomIntersectPoint),u.push(this.topIntersectPoint),u}getAngle(){return this.direction===0?-this.angle:this.angle}getRect(){return this.rect}getPosition(){return this.position}getActiveCorner(){return this.direction===0?this.rect.topLeft:this.rect.topRight}getDirection(){return this.direction}getFlippingProgress(){return Math.abs((this.position.x-this.pageWidth)/(2*this.pageWidth)*100)}getCorner(){return this.corner}getBottomPagePosition(){return this.direction===1?{x:this.pageWidth,y:0}:{x:0,y:0}}getShadowStartPoint(){return this.corner==="top"?this.topIntersectPoint:this.sideIntersectPoint!==null?this.sideIntersectPoint:this.topIntersectPoint}getShadowAngle(){const u=o.GetAngleBetweenTwoLine(this.getSegmentToShadowLine(),[{x:0,y:0},{x:this.pageWidth,y:0}]);return this.direction===0?u:Math.PI-u}calcAngleAndPosition(u){let p=u;if(this.updateAngleAndGeometry(p),p=this.corner==="top"?this.checkPositionAtCenterLine(p,{x:0,y:0},{x:0,y:this.pageHeight}):this.checkPositionAtCenterLine(p,{x:0,y:this.pageHeight},{x:0,y:0}),Math.abs(p.x-this.pageWidth)<1&&Math.abs(p.y)<1)throw new Error("Point is too small");return p}updateAngleAndGeometry(u){this.angle=this.calculateAngle(u),this.rect=this.getPageRect(u)}calculateAngle(u){const p=this.pageWidth-u.x+1,w=this.corner==="bottom"?this.pageHeight-u.y:u.y;let b=2*Math.acos(p/Math.sqrt(w*w+p*p));w<0&&(b=-b);const P=Math.PI-b;if(!isFinite(b)||P>=0&&P<.003)throw new Error("The G point is too small");return this.corner==="bottom"&&(b=-b),b}getPageRect(u){return this.corner==="top"?this.getRectFromBasePoint([{x:0,y:0},{x:this.pageWidth,y:0},{x:0,y:this.pageHeight},{x:this.pageWidth,y:this.pageHeight}],u):this.getRectFromBasePoint([{x:0,y:-this.pageHeight},{x:this.pageWidth,y:-this.pageHeight},{x:0,y:0},{x:this.pageWidth,y:0}],u)}getRectFromBasePoint(u,p){return{topLeft:this.getRotatedPoint(u[0],p),topRight:this.getRotatedPoint(u[1],p),bottomLeft:this.getRotatedPoint(u[2],p),bottomRight:this.getRotatedPoint(u[3],p)}}getRotatedPoint(u,p){return{x:u.x*Math.cos(this.angle)+u.y*Math.sin(this.angle)+p.x,y:u.y*Math.cos(this.angle)-u.x*Math.sin(this.angle)+p.y}}calculateIntersectPoint(u){const p={left:-1,top:-1,width:this.pageWidth+2,height:this.pageHeight+2};this.corner==="top"?(this.topIntersectPoint=o.GetIntersectBetweenTwoSegment(p,[u,this.rect.topRight],[{x:0,y:0},{x:this.pageWidth,y:0}]),this.sideIntersectPoint=o.GetIntersectBetweenTwoSegment(p,[u,this.rect.bottomLeft],[{x:this.pageWidth,y:0},{x:this.pageWidth,y:this.pageHeight}]),this.bottomIntersectPoint=o.GetIntersectBetweenTwoSegment(p,[this.rect.bottomLeft,this.rect.bottomRight],[{x:0,y:this.pageHeight},{x:this.pageWidth,y:this.pageHeight}])):(this.topIntersectPoint=o.GetIntersectBetweenTwoSegment(p,[this.rect.topLeft,this.rect.topRight],[{x:0,y:0},{x:this.pageWidth,y:0}]),this.sideIntersectPoint=o.GetIntersectBetweenTwoSegment(p,[u,this.rect.topLeft],[{x:this.pageWidth,y:0},{x:this.pageWidth,y:this.pageHeight}]),this.bottomIntersectPoint=o.GetIntersectBetweenTwoSegment(p,[this.rect.bottomLeft,this.rect.bottomRight],[{x:0,y:this.pageHeight},{x:this.pageWidth,y:this.pageHeight}]))}checkPositionAtCenterLine(u,p,w){let b=u;const P=o.LimitPointToCircle(p,this.pageWidth,b);b!==P&&(b=P,this.updateAngleAndGeometry(b));const S=Math.sqrt(Math.pow(this.pageWidth,2)+Math.pow(this.pageHeight,2));let T=this.rect.bottomRight,N=this.rect.topLeft;if(this.corner==="bottom"&&(T=this.rect.topRight,N=this.rect.bottomLeft),T.x<=0){const Y=o.LimitPointToCircle(w,S,N);Y!==b&&(b=Y,this.updateAngleAndGeometry(b))}return b}getSegmentToShadowLine(){const u=this.getShadowStartPoint();return[u,u!==this.sideIntersectPoint&&this.sideIntersectPoint!==null?this.sideIntersectPoint:this.bottomIntersectPoint]}}class d{constructor(u,p){this.flippingPage=null,this.bottomPage=null,this.calc=null,this.state="read",this.render=u,this.app=p}fold(u){this.setState("user_fold"),this.calc===null&&this.start(u),this.do(this.render.convertToPage(u))}flip(u){if(this.app.getSettings().disableFlipByClick&&!this.isPointOnCorners(u)||(this.calc!==null&&this.render.finishAnimation(),!this.start(u)))return;const p=this.getBoundsRect();this.setState("flipping");const w=p.height/10,b=this.calc.getCorner()==="bottom"?p.height-w:w,P=this.calc.getCorner()==="bottom"?p.height:0;this.calc.calc({x:p.pageWidth-w,y:b}),this.animateFlippingTo({x:p.pageWidth-w,y:b},{x:-p.pageWidth,y:P},!0)}start(u){this.reset();const p=this.render.convertToBook(u),w=this.getBoundsRect(),b=this.getDirectionByPoint(p),P=p.y>=w.height/2?"bottom":"top";if(!this.checkDirection(b))return!1;try{if(this.flippingPage=this.app.getPageCollection().getFlippingPage(b),this.bottomPage=this.app.getPageCollection().getBottomPage(b),this.render.getOrientation()==="landscape")if(b===1){const S=this.app.getPageCollection().nextBy(this.flippingPage);S!==null&&this.flippingPage.getDensity()!==S.getDensity()&&(this.flippingPage.setDrawingDensity("hard"),S.setDrawingDensity("hard"))}else{const S=this.app.getPageCollection().prevBy(this.flippingPage);S!==null&&this.flippingPage.getDensity()!==S.getDensity()&&(this.flippingPage.setDrawingDensity("hard"),S.setDrawingDensity("hard"))}return this.render.setDirection(b),this.calc=new h(b,P,w.pageWidth.toString(10),w.height.toString(10)),!0}catch{return!1}}do(u){if(this.calc!==null&&this.calc.calc(u)){const p=this.calc.getFlippingProgress();this.bottomPage.setArea(this.calc.getBottomClipArea()),this.bottomPage.setPosition(this.calc.getBottomPagePosition()),this.bottomPage.setAngle(0),this.bottomPage.setHardAngle(0),this.flippingPage.setArea(this.calc.getFlippingClipArea()),this.flippingPage.setPosition(this.calc.getActiveCorner()),this.flippingPage.setAngle(this.calc.getAngle()),this.calc.getDirection()===0?this.flippingPage.setHardAngle(90*(200-2*p)/100):this.flippingPage.setHardAngle(-90*(200-2*p)/100),this.render.setPageRect(this.calc.getRect()),this.render.setBottomPage(this.bottomPage),this.render.setFlippingPage(this.flippingPage),this.render.setShadowData(this.calc.getShadowStartPoint(),this.calc.getShadowAngle(),p,this.calc.getDirection())}}flipToPage(u,p){const w=this.app.getPageCollection().getCurrentSpreadIndex(),b=this.app.getPageCollection().getSpreadIndexByPage(u);try{b>w&&(this.app.getPageCollection().setCurrentSpreadIndex(b-1),this.flipNext(p)),b<w&&(this.app.getPageCollection().setCurrentSpreadIndex(b+1),this.flipPrev(p))}catch{}}flipNext(u){this.flip({x:this.render.getRect().left+2*this.render.getRect().pageWidth-10,y:u==="top"?1:this.render.getRect().height-2})}flipPrev(u){this.flip({x:10,y:u==="top"?1:this.render.getRect().height-2})}stopMove(){if(this.calc===null)return;const u=this.calc.getPosition(),p=this.getBoundsRect(),w=this.calc.getCorner()==="bottom"?p.height:0;u.x<=0?this.animateFlippingTo(u,{x:-p.pageWidth,y:w},!0):this.animateFlippingTo(u,{x:p.pageWidth,y:w},!1)}showCorner(u){if(!this.checkState("read","fold_corner"))return;const p=this.getBoundsRect(),w=p.pageWidth;if(this.isPointOnCorners(u))if(this.calc===null){if(!this.start(u))return;this.setState("fold_corner"),this.calc.calc({x:w-1,y:1});const b=50,P=this.calc.getCorner()==="bottom"?p.height-1:1,S=this.calc.getCorner()==="bottom"?p.height-b:b;this.animateFlippingTo({x:w-1,y:P},{x:w-b,y:S},!1,!1)}else this.do(this.render.convertToPage(u));else this.setState("read"),this.render.finishAnimation(),this.stopMove()}animateFlippingTo(u,p,w,b=!0){const P=o.GetCordsFromTwoPoint(u,p),S=[];for(const N of P)S.push(()=>this.do(N));const T=this.getAnimationDuration(P.length);this.render.startAnimation(S,T,()=>{this.calc&&(w&&(this.calc.getDirection()===1?this.app.turnToPrevPage():this.app.turnToNextPage()),b&&(this.render.setBottomPage(null),this.render.setFlippingPage(null),this.render.clearShadow(),this.setState("read"),this.reset()))})}getCalculation(){return this.calc}getState(){return this.state}setState(u){this.state!==u&&(this.app.updateState(u),this.state=u)}getDirectionByPoint(u){const p=this.getBoundsRect();if(this.render.getOrientation()==="portrait"){if(u.x-p.pageWidth<=p.width/5)return 1}else if(u.x<p.width/2)return 1;return 0}getAnimationDuration(u){const p=this.app.getSettings().flippingTime;return u>=1e3?p:u/1e3*p}checkDirection(u){return u===0?this.app.getCurrentPageIndex()<this.app.getPageCount()-1:this.app.getCurrentPageIndex()>=1}reset(){this.calc=null,this.flippingPage=null,this.bottomPage=null}getBoundsRect(){return this.render.getRect()}checkState(...u){for(const p of u)if(this.state===p)return!0;return!1}isPointOnCorners(u){const p=this.getBoundsRect(),w=p.pageWidth,b=Math.sqrt(Math.pow(w,2)+Math.pow(p.height,2))/5,P=this.render.convertToBook(u);return P.x>0&&P.y>0&&P.x<p.width&&P.y<p.height&&(P.x<b||P.x>p.width-b)&&(P.y<b||P.y>p.height-b)}}class f{constructor(u,p){this.leftPage=null,this.rightPage=null,this.flippingPage=null,this.bottomPage=null,this.direction=null,this.orientation=null,this.shadow=null,this.animation=null,this.pageRect=null,this.boundsRect=null,this.timer=0,this.safari=!1,this.setting=p,this.app=u;const w=new RegExp("Version\\/[\\d\\.]+.*Safari/");this.safari=w.exec(window.navigator.userAgent)!==null}render(u){if(this.animation!==null){const p=Math.round((u-this.animation.startedAt)/this.animation.durationFrame);p<this.animation.frames.length?this.animation.frames[p]():(this.animation.onAnimateEnd(),this.animation=null)}this.timer=u,this.drawFrame()}start(){this.update();const u=p=>{this.render(p),requestAnimationFrame(u)};requestAnimationFrame(u)}startAnimation(u,p,w){this.finishAnimation(),this.animation={frames:u,duration:p,durationFrame:p/u.length,onAnimateEnd:w,startedAt:this.timer}}finishAnimation(){this.animation!==null&&(this.animation.frames[this.animation.frames.length-1](),this.animation.onAnimateEnd!==null&&this.animation.onAnimateEnd()),this.animation=null}update(){this.boundsRect=null;const u=this.calculateBoundsRect();this.orientation!==u&&(this.orientation=u,this.app.updateOrientation(u))}calculateBoundsRect(){let u="landscape";const p=this.getBlockWidth(),w=p/2,b=this.getBlockHeight()/2,P=this.setting.width/this.setting.height;let S=this.setting.width,T=this.setting.height,N=w-S;return this.setting.size==="stretch"?(p<2*this.setting.minWidth&&this.app.getSettings().usePortrait&&(u="portrait"),S=u==="portrait"?this.getBlockWidth():this.getBlockWidth()/2,S>this.setting.maxWidth&&(S=this.setting.maxWidth),T=S/P,T>this.getBlockHeight()&&(T=this.getBlockHeight(),S=T*P),N=u==="portrait"?w-S/2-S:w-S):p<2*S&&this.app.getSettings().usePortrait&&(u="portrait",N=w-S/2-S),this.boundsRect={left:N,top:b-T/2,width:2*S,height:T,pageWidth:S},u}setShadowData(u,p,w,b){if(!this.app.getSettings().drawShadow)return;const P=100*this.getSettings().maxShadowOpacity;this.shadow={pos:u,angle:p,width:3*this.getRect().pageWidth/4*w/100,opacity:(100-w)*P/100/100,direction:b,progress:2*w}}clearShadow(){this.shadow=null}getBlockWidth(){return this.app.getUI().getDistElement().offsetWidth}getBlockHeight(){return this.app.getUI().getDistElement().offsetHeight}getDirection(){return this.direction}getRect(){return this.boundsRect===null&&this.calculateBoundsRect(),this.boundsRect}getSettings(){return this.app.getSettings()}getOrientation(){return this.orientation}setPageRect(u){this.pageRect=u}setDirection(u){this.direction=u}setRightPage(u){u!==null&&u.setOrientation(1),this.rightPage=u}setLeftPage(u){u!==null&&u.setOrientation(0),this.leftPage=u}setBottomPage(u){u!==null&&u.setOrientation(this.direction===1?0:1),this.bottomPage=u}setFlippingPage(u){u!==null&&u.setOrientation(this.direction===0&&this.orientation!=="portrait"?0:1),this.flippingPage=u}convertToBook(u){const p=this.getRect();return{x:u.x-p.left,y:u.y-p.top}}isSafari(){return this.safari}convertToPage(u,p){p||(p=this.direction);const w=this.getRect();return{x:p===0?u.x-w.left-w.width/2:w.width/2-u.x+w.left,y:u.y-w.top}}convertToGlobal(u,p){if(p||(p=this.direction),u==null)return null;const w=this.getRect();return{x:p===0?u.x+w.left+w.width/2:w.width/2-u.x+w.left,y:u.y+w.top}}convertRectToGlobal(u,p){return p||(p=this.direction),{topLeft:this.convertToGlobal(u.topLeft,p),topRight:this.convertToGlobal(u.topRight,p),bottomLeft:this.convertToGlobal(u.bottomLeft,p),bottomRight:this.convertToGlobal(u.bottomRight,p)}}}class _ extends f{constructor(u,p,w){super(u,p),this.canvas=w,this.ctx=w.getContext("2d")}getContext(){return this.ctx}reload(){}drawFrame(){this.clear(),this.orientation!=="portrait"&&this.leftPage!=null&&this.leftPage.simpleDraw(0),this.rightPage!=null&&this.rightPage.simpleDraw(1),this.bottomPage!=null&&this.bottomPage.draw(),this.drawBookShadow(),this.flippingPage!=null&&this.flippingPage.draw(),this.shadow!=null&&(this.drawOuterShadow(),this.drawInnerShadow());const u=this.getRect();this.orientation==="portrait"&&(this.ctx.beginPath(),this.ctx.rect(u.left+u.pageWidth,u.top,u.width,u.height),this.ctx.clip())}drawBookShadow(){const u=this.getRect();this.ctx.save(),this.ctx.beginPath();const p=u.width/20;this.ctx.rect(u.left,u.top,u.width,u.height);const w={x:u.left+u.width/2-p/2,y:0};this.ctx.translate(w.x,w.y);const b=this.ctx.createLinearGradient(0,0,p,0);b.addColorStop(0,"rgba(0, 0, 0, 0)"),b.addColorStop(.4,"rgba(0, 0, 0, 0.2)"),b.addColorStop(.49,"rgba(0, 0, 0, 0.1)"),b.addColorStop(.5,"rgba(0, 0, 0, 0.5)"),b.addColorStop(.51,"rgba(0, 0, 0, 0.4)"),b.addColorStop(1,"rgba(0, 0, 0, 0)"),this.ctx.clip(),this.ctx.fillStyle=b,this.ctx.fillRect(0,0,p,2*u.height),this.ctx.restore()}drawOuterShadow(){const u=this.getRect();this.ctx.save(),this.ctx.beginPath(),this.ctx.rect(u.left,u.top,u.width,u.height);const p=this.convertToGlobal({x:this.shadow.pos.x,y:this.shadow.pos.y});this.ctx.translate(p.x,p.y),this.ctx.rotate(Math.PI+this.shadow.angle+Math.PI/2);const w=this.ctx.createLinearGradient(0,0,this.shadow.width,0);this.shadow.direction===0?(this.ctx.translate(0,-100),w.addColorStop(0,"rgba(0, 0, 0, "+this.shadow.opacity+")"),w.addColorStop(1,"rgba(0, 0, 0, 0)")):(this.ctx.translate(-this.shadow.width,-100),w.addColorStop(0,"rgba(0, 0, 0, 0)"),w.addColorStop(1,"rgba(0, 0, 0, "+this.shadow.opacity+")")),this.ctx.clip(),this.ctx.fillStyle=w,this.ctx.fillRect(0,0,this.shadow.width,2*u.height),this.ctx.restore()}drawInnerShadow(){const u=this.getRect();this.ctx.save(),this.ctx.beginPath();const p=this.convertToGlobal({x:this.shadow.pos.x,y:this.shadow.pos.y}),w=this.convertRectToGlobal(this.pageRect);this.ctx.moveTo(w.topLeft.x,w.topLeft.y),this.ctx.lineTo(w.topRight.x,w.topRight.y),this.ctx.lineTo(w.bottomRight.x,w.bottomRight.y),this.ctx.lineTo(w.bottomLeft.x,w.bottomLeft.y),this.ctx.translate(p.x,p.y),this.ctx.rotate(Math.PI+this.shadow.angle+Math.PI/2);const b=3*this.shadow.width/4,P=this.ctx.createLinearGradient(0,0,b,0);this.shadow.direction===0?(this.ctx.translate(-b,-100),P.addColorStop(1,"rgba(0, 0, 0, "+this.shadow.opacity+")"),P.addColorStop(.9,"rgba(0, 0, 0, 0.05)"),P.addColorStop(.7,"rgba(0, 0, 0, "+this.shadow.opacity+")"),P.addColorStop(0,"rgba(0, 0, 0, 0)")):(this.ctx.translate(0,-100),P.addColorStop(0,"rgba(0, 0, 0, "+this.shadow.opacity+")"),P.addColorStop(.1,"rgba(0, 0, 0, 0.05)"),P.addColorStop(.3,"rgba(0, 0, 0, "+this.shadow.opacity+")"),P.addColorStop(1,"rgba(0, 0, 0, 0)")),this.ctx.clip(),this.ctx.fillStyle=P,this.ctx.fillRect(0,0,b,2*u.height),this.ctx.restore()}clear(){this.ctx.fillStyle="white",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height)}}class y{constructor(u,p,w){this.touchPoint=null,this.swipeTimeout=250,this.onResize=()=>{this.update()},this.onMouseDown=P=>{if(this.checkTarget(P.target)){const S=this.getMousePos(P.clientX,P.clientY);this.app.startUserTouch(S),P.preventDefault()}},this.onTouchStart=P=>{if(this.checkTarget(P.target)&&P.changedTouches.length>0){const S=P.changedTouches[0],T=this.getMousePos(S.clientX,S.clientY);this.touchPoint={point:T,time:Date.now()},setTimeout(()=>{this.touchPoint!==null&&this.app.startUserTouch(T)},this.swipeTimeout),this.app.getSettings().mobileScrollSupport||P.preventDefault()}},this.onMouseUp=P=>{const S=this.getMousePos(P.clientX,P.clientY);this.app.userStop(S)},this.onMouseMove=P=>{const S=this.getMousePos(P.clientX,P.clientY);this.app.userMove(S,!1)},this.onTouchMove=P=>{if(P.changedTouches.length>0){const S=P.changedTouches[0],T=this.getMousePos(S.clientX,S.clientY);this.app.getSettings().mobileScrollSupport?(this.touchPoint!==null&&(Math.abs(this.touchPoint.point.x-T.x)>10||this.app.getState()!=="read")&&P.cancelable&&this.app.userMove(T,!0),this.app.getState()!=="read"&&P.preventDefault()):this.app.userMove(T,!0)}},this.onTouchEnd=P=>{if(P.changedTouches.length>0){const S=P.changedTouches[0],T=this.getMousePos(S.clientX,S.clientY);let N=!1;if(this.touchPoint!==null){const Y=T.x-this.touchPoint.point.x,D=Math.abs(T.y-this.touchPoint.point.y);Math.abs(Y)>this.swipeDistance&&D<2*this.swipeDistance&&Date.now()-this.touchPoint.time<this.swipeTimeout&&(Y>0?this.app.flipPrev(this.touchPoint.point.y<this.app.getRender().getRect().height/2?"top":"bottom"):this.app.flipNext(this.touchPoint.point.y<this.app.getRender().getRect().height/2?"top":"bottom"),N=!0),this.touchPoint=null}this.app.userStop(T,N)}},this.parentElement=u,u.classList.add("stf__parent"),u.insertAdjacentHTML("afterbegin",'<div class="stf__wrapper"></div>'),this.wrapper=u.querySelector(".stf__wrapper"),this.app=p;const b=this.app.getSettings().usePortrait?1:2;u.style.minWidth=w.minWidth*b+"px",u.style.minHeight=w.minHeight+"px",w.size==="fixed"&&(u.style.minWidth=w.width*b+"px",u.style.minHeight=w.height+"px"),w.autoSize&&(u.style.width="100%",u.style.maxWidth=2*w.maxWidth+"px"),u.style.display="block",window.addEventListener("resize",this.onResize,!1),this.swipeDistance=w.swipeDistance}destroy(){this.app.getSettings().useMouseEvents&&this.removeHandlers(),this.distElement.remove(),this.wrapper.remove()}getDistElement(){return this.distElement}getWrapper(){return this.wrapper}setOrientationStyle(u){this.wrapper.classList.remove("--portrait","--landscape"),u==="portrait"?(this.app.getSettings().autoSize&&(this.wrapper.style.paddingBottom=this.app.getSettings().height/this.app.getSettings().width*100+"%"),this.wrapper.classList.add("--portrait")):(this.app.getSettings().autoSize&&(this.wrapper.style.paddingBottom=this.app.getSettings().height/(2*this.app.getSettings().width)*100+"%"),this.wrapper.classList.add("--landscape")),this.update()}removeHandlers(){window.removeEventListener("resize",this.onResize),this.distElement.removeEventListener("mousedown",this.onMouseDown),this.distElement.removeEventListener("touchstart",this.onTouchStart),window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("touchmove",this.onTouchMove),window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("touchend",this.onTouchEnd)}setHandlers(){window.addEventListener("resize",this.onResize,!1),this.app.getSettings().useMouseEvents&&(this.distElement.addEventListener("mousedown",this.onMouseDown),this.distElement.addEventListener("touchstart",this.onTouchStart),window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("touchmove",this.onTouchMove,{passive:!this.app.getSettings().mobileScrollSupport}),window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("touchend",this.onTouchEnd))}getMousePos(u,p){const w=this.distElement.getBoundingClientRect();return{x:u-w.left,y:p-w.top}}checkTarget(u){return!this.app.getSettings().clickEventForward||!["a","button"].includes(u.tagName.toLowerCase())}}class x extends y{constructor(u,p,w,b){super(u,p,w),this.wrapper.insertAdjacentHTML("afterbegin",'<div class="stf__block"></div>'),this.distElement=u.querySelector(".stf__block"),this.items=b;for(const P of b)this.distElement.appendChild(P);this.setHandlers()}clear(){for(const u of this.items)this.parentElement.appendChild(u)}updateItems(u){this.removeHandlers(),this.distElement.innerHTML="";for(const p of u)this.distElement.appendChild(p);this.items=u,this.setHandlers()}update(){this.app.getRender().update()}}class m extends y{constructor(u,p,w){super(u,p,w),this.wrapper.innerHTML='<canvas class="stf__canvas"></canvas>',this.canvas=u.querySelectorAll("canvas")[0],this.distElement=this.canvas,this.resizeCanvas(),this.setHandlers()}resizeCanvas(){const u=getComputedStyle(this.canvas),p=parseInt(u.getPropertyValue("width"),10),w=parseInt(u.getPropertyValue("height"),10);this.canvas.width=p,this.canvas.height=w}getCanvas(){return this.canvas}update(){this.resizeCanvas(),this.app.getRender().update()}}class g extends f{constructor(u,p,w){super(u,p),this.outerShadow=null,this.innerShadow=null,this.hardShadow=null,this.hardInnerShadow=null,this.element=w,this.createShadows()}createShadows(){this.element.insertAdjacentHTML("beforeend",`<div class="stf__outerShadow"></div>
             <div class="stf__innerShadow"></div>
             <div class="stf__hardShadow"></div>
             <div class="stf__hardInnerShadow"></div>`),this.outerShadow=this.element.querySelector(".stf__outerShadow"),this.innerShadow=this.element.querySelector(".stf__innerShadow"),this.hardShadow=this.element.querySelector(".stf__hardShadow"),this.hardInnerShadow=this.element.querySelector(".stf__hardInnerShadow")}clearShadow(){super.clearShadow(),this.outerShadow.style.cssText="display: none",this.innerShadow.style.cssText="display: none",this.hardShadow.style.cssText="display: none",this.hardInnerShadow.style.cssText="display: none"}reload(){this.element.querySelector(".stf__outerShadow")||this.createShadows()}drawHardInnerShadow(){const u=this.getRect(),p=this.shadow.progress>100?200-this.shadow.progress:this.shadow.progress;let w=(100-p)*(2.5*u.pageWidth)/100+20;w>u.pageWidth&&(w=u.pageWidth);let b=`
            display: block;
            z-index: ${(this.getSettings().startZIndex+5).toString(10)};
            width: ${w}px;
            height: ${u.height}px;
            background: linear-gradient(to right,
                rgba(0, 0, 0, ${this.shadow.opacity*p/100}) 5%,
                rgba(0, 0, 0, 0) 100%);
            left: ${u.left+u.width/2}px;
            transform-origin: 0 0;
        `;b+=this.getDirection()===0&&this.shadow.progress>100||this.getDirection()===1&&this.shadow.progress<=100?"transform: translate3d(0, 0, 0);":"transform: translate3d(0, 0, 0) rotateY(180deg);",this.hardInnerShadow.style.cssText=b}drawHardOuterShadow(){const u=this.getRect();let p=(100-(this.shadow.progress>100?200-this.shadow.progress:this.shadow.progress))*(2.5*u.pageWidth)/100+20;p>u.pageWidth&&(p=u.pageWidth);let w=`
            display: block;
            z-index: ${(this.getSettings().startZIndex+4).toString(10)};
            width: ${p}px;
            height: ${u.height}px;
            background: linear-gradient(to left, rgba(0, 0, 0, ${this.shadow.opacity}) 5%, rgba(0, 0, 0, 0) 100%);
            left: ${u.left+u.width/2}px;
            transform-origin: 0 0;
        `;w+=this.getDirection()===0&&this.shadow.progress>100||this.getDirection()===1&&this.shadow.progress<=100?"transform: translate3d(0, 0, 0) rotateY(180deg);":"transform: translate3d(0, 0, 0);",this.hardShadow.style.cssText=w}drawInnerShadow(){const u=this.getRect(),p=3*this.shadow.width/4,w=this.getDirection()===0?p:0,b=this.getDirection()===0?"to left":"to right",P=this.convertToGlobal(this.shadow.pos),S=this.shadow.angle+3*Math.PI/2,T=[this.pageRect.topLeft,this.pageRect.topRight,this.pageRect.bottomRight,this.pageRect.bottomLeft];let N="polygon( ";for(const D of T){let z=this.getDirection()===1?{x:-D.x+this.shadow.pos.x,y:D.y-this.shadow.pos.y}:{x:D.x-this.shadow.pos.x,y:D.y-this.shadow.pos.y};z=o.GetRotatedPoint(z,{x:w,y:100},S),N+=z.x+"px "+z.y+"px, "}N=N.slice(0,-2),N+=")";const Y=`
            display: block;
            z-index: ${(this.getSettings().startZIndex+10).toString(10)};
            width: ${p}px;
            height: ${2*u.height}px;
            background: linear-gradient(${b},
                rgba(0, 0, 0, ${this.shadow.opacity}) 5%,
                rgba(0, 0, 0, 0.05) 15%,
                rgba(0, 0, 0, ${this.shadow.opacity}) 35%,
                rgba(0, 0, 0, 0) 100%);
            transform-origin: ${w}px 100px;
            transform: translate3d(${P.x-w}px, ${P.y-100}px, 0) rotate(${S}rad);
            clip-path: ${N};
            -webkit-clip-path: ${N};
        `;this.innerShadow.style.cssText=Y}drawOuterShadow(){const u=this.getRect(),p=this.convertToGlobal({x:this.shadow.pos.x,y:this.shadow.pos.y}),w=this.shadow.angle+3*Math.PI/2,b=this.getDirection()===1?this.shadow.width:0,P=this.getDirection()===0?"to right":"to left",S=[{x:0,y:0},{x:u.pageWidth,y:0},{x:u.pageWidth,y:u.height},{x:0,y:u.height}];let T="polygon( ";for(const Y of S)if(Y!==null){let D=this.getDirection()===1?{x:-Y.x+this.shadow.pos.x,y:Y.y-this.shadow.pos.y}:{x:Y.x-this.shadow.pos.x,y:Y.y-this.shadow.pos.y};D=o.GetRotatedPoint(D,{x:b,y:100},w),T+=D.x+"px "+D.y+"px, "}T=T.slice(0,-2),T+=")";const N=`
            display: block;
            z-index: ${(this.getSettings().startZIndex+10).toString(10)};
            width: ${this.shadow.width}px;
            height: ${2*u.height}px;
            background: linear-gradient(${P}, rgba(0, 0, 0, ${this.shadow.opacity}), rgba(0, 0, 0, 0));
            transform-origin: ${b}px 100px;
            transform: translate3d(${p.x-b}px, ${p.y-100}px, 0) rotate(${w}rad);
            clip-path: ${T};
            -webkit-clip-path: ${T};
        `;this.outerShadow.style.cssText=N}drawLeftPage(){this.orientation!=="portrait"&&this.leftPage!==null&&(this.direction===1&&this.flippingPage!==null&&this.flippingPage.getDrawingDensity()==="hard"?(this.leftPage.getElement().style.zIndex=(this.getSettings().startZIndex+5).toString(10),this.leftPage.setHardDrawingAngle(180+this.flippingPage.getHardAngle()),this.leftPage.draw(this.flippingPage.getDrawingDensity())):this.leftPage.simpleDraw(0))}drawRightPage(){this.rightPage!==null&&(this.direction===0&&this.flippingPage!==null&&this.flippingPage.getDrawingDensity()==="hard"?(this.rightPage.getElement().style.zIndex=(this.getSettings().startZIndex+5).toString(10),this.rightPage.setHardDrawingAngle(180+this.flippingPage.getHardAngle()),this.rightPage.draw(this.flippingPage.getDrawingDensity())):this.rightPage.simpleDraw(1))}drawBottomPage(){if(this.bottomPage===null)return;const u=this.flippingPage!=null?this.flippingPage.getDrawingDensity():null;this.orientation==="portrait"&&this.direction===1||(this.bottomPage.getElement().style.zIndex=(this.getSettings().startZIndex+3).toString(10),this.bottomPage.draw(u))}drawFrame(){this.clear(),this.drawLeftPage(),this.drawRightPage(),this.drawBottomPage(),this.flippingPage!=null&&(this.flippingPage.getElement().style.zIndex=(this.getSettings().startZIndex+5).toString(10),this.flippingPage.draw()),this.shadow!=null&&this.flippingPage!==null&&(this.flippingPage.getDrawingDensity()==="soft"?(this.drawOuterShadow(),this.drawInnerShadow()):(this.drawHardOuterShadow(),this.drawHardInnerShadow()))}clear(){for(const u of this.app.getPageCollection().getPages())u!==this.leftPage&&u!==this.rightPage&&u!==this.flippingPage&&u!==this.bottomPage&&(u.getElement().style.cssText="display: none"),u.getTemporaryCopy()!==this.flippingPage&&u.hideTemporaryCopy()}update(){super.update(),this.rightPage!==null&&this.rightPage.setOrientation(1),this.leftPage!==null&&this.leftPage.setOrientation(0)}}class M{constructor(){this._default={startPage:0,size:"fixed",width:0,height:0,minWidth:0,maxWidth:0,minHeight:0,maxHeight:0,drawShadow:!0,flippingTime:1e3,usePortrait:!0,startZIndex:0,autoSize:!0,maxShadowOpacity:1,showCover:!1,mobileScrollSupport:!0,swipeDistance:30,clickEventForward:!0,useMouseEvents:!0,showPageCorners:!0,disableFlipByClick:!1}}getSettings(u){const p=this._default;if(Object.assign(p,u),p.size!=="stretch"&&p.size!=="fixed")throw new Error('Invalid size type. Available only "fixed" and "stretch" value');if(p.width<=0||p.height<=0)throw new Error("Invalid width or height");if(p.flippingTime<=0)throw new Error("Invalid flipping time");return p.size==="stretch"?(p.minWidth<=0&&(p.minWidth=100),p.maxWidth<p.minWidth&&(p.maxWidth=2e3),p.minHeight<=0&&(p.minHeight=100),p.maxHeight<p.minHeight&&(p.maxHeight=2e3)):(p.minWidth=p.width,p.maxWidth=p.width,p.minHeight=p.height,p.maxHeight=p.height),p}}(function(v,u){u===void 0&&(u={});var p=u.insertAt;if(typeof document<"u"){var w=document.head||document.getElementsByTagName("head")[0],b=document.createElement("style");b.type="text/css",p==="top"&&w.firstChild?w.insertBefore(b,w.firstChild):w.appendChild(b),b.styleSheet?b.styleSheet.cssText=v:b.appendChild(document.createTextNode(v))}})(`.stf__parent {
  position: relative;
  display: block;
  box-sizing: border-box;
  transform: translateZ(0);

  -ms-touch-action: pan-y;
  touch-action: pan-y;
}

.sft__wrapper {
  position: relative;
  width: 100%;
  box-sizing: border-box;
}

.stf__parent canvas {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}

.stf__block {
  position: absolute;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  perspective: 2000px;
}

.stf__item {
  display: none;
  position: absolute;
  transform-style: preserve-3d;
}

.stf__outerShadow {
  position: absolute;
  left: 0;
  top: 0;
}

.stf__innerShadow {
  position: absolute;
  left: 0;
  top: 0;
}

.stf__hardShadow {
  position: absolute;
  left: 0;
  top: 0;
}

.stf__hardInnerShadow {
  position: absolute;
  left: 0;
  top: 0;
}`),t.PageFlip=class extends class{constructor(){this.events=new Map}on(v,u){return this.events.has(v)?this.events.get(v).push(u):this.events.set(v,[u]),this}off(v){this.events.delete(v)}trigger(v,u,p=null){if(this.events.has(v))for(const w of this.events.get(v))w({data:p,object:u})}}{constructor(v,u){super(),this.isUserTouch=!1,this.isUserMove=!1,this.setting=null,this.pages=null,this.setting=new M().getSettings(u),this.block=v}destroy(){this.ui.destroy(),this.block.remove()}update(){this.render.update(),this.pages.show()}loadFromImages(v){this.ui=new m(this.block,this,this.setting);const u=this.ui.getCanvas();this.render=new _(this,this.setting,u),this.flipController=new d(this.render,this),this.pages=new a(this,this.render,v),this.pages.load(),this.render.start(),this.pages.show(this.setting.startPage),setTimeout(()=>{this.ui.update(),this.trigger("init",this,{page:this.setting.startPage,mode:this.render.getOrientation()})},1)}loadFromHTML(v){this.ui=new x(this.block,this,this.setting,v),this.render=new g(this,this.setting,this.ui.getDistElement()),this.flipController=new d(this.render,this),this.pages=new c(this,this.render,this.ui.getDistElement(),v),this.pages.load(),this.render.start(),this.pages.show(this.setting.startPage),setTimeout(()=>{this.ui.update(),this.trigger("init",this,{page:this.setting.startPage,mode:this.render.getOrientation()})},1)}updateFromImages(v){const u=this.pages.getCurrentPageIndex();this.pages.destroy(),this.pages=new a(this,this.render,v),this.pages.load(),this.pages.show(u),this.trigger("update",this,{page:u,mode:this.render.getOrientation()})}updateFromHtml(v){const u=this.pages.getCurrentPageIndex();this.pages.destroy(),this.pages=new c(this,this.render,this.ui.getDistElement(),v),this.pages.load(),this.ui.updateItems(v),this.render.reload(),this.pages.show(u),this.trigger("update",this,{page:u,mode:this.render.getOrientation()})}clear(){this.pages.destroy(),this.ui.clear()}turnToPrevPage(){this.pages.showPrev()}turnToNextPage(){this.pages.showNext()}turnToPage(v){this.pages.show(v)}flipNext(v="top"){this.flipController.flipNext(v)}flipPrev(v="top"){this.flipController.flipPrev(v)}flip(v,u="top"){this.flipController.flipToPage(v,u)}updateState(v){this.trigger("changeState",this,v)}updatePageIndex(v){this.trigger("flip",this,v)}updateOrientation(v){this.ui.setOrientationStyle(v),this.update(),this.trigger("changeOrientation",this,v)}getPageCount(){return this.pages.getPageCount()}getCurrentPageIndex(){return this.pages.getCurrentPageIndex()}getPage(v){return this.pages.getPage(v)}getRender(){return this.render}getFlipController(){return this.flipController}getOrientation(){return this.render.getOrientation()}getBoundsRect(){return this.render.getRect()}getSettings(){return this.setting}getUI(){return this.ui}getState(){return this.flipController.getState()}getPageCollection(){return this.pages}startUserTouch(v){this.mousePosition=v,this.isUserTouch=!0,this.isUserMove=!1}userMove(v,u){this.isUserTouch||u||!this.setting.showPageCorners?this.isUserTouch&&o.GetDistanceBetweenTwoPoint(this.mousePosition,v)>5&&(this.isUserMove=!0,this.flipController.fold(v)):this.flipController.showCorner(v)}userStop(v,u=!1){this.isUserTouch&&(this.isUserTouch=!1,u||(this.isUserMove?this.flipController.stopMove():this.flipController.flip(v)))}},Object.defineProperty(t,"__esModule",{value:!0})}))})(Qi,Qi.exports)),Qi.exports}var um=hm();const dm=Ut.forwardRef((i,e)=>{const t=q.useRef(null),n=q.useRef([]),r=q.useRef(),[s,a]=q.useState([]);q.useImperativeHandle(e,()=>({pageFlip:()=>r.current}));const o=q.useCallback(()=>{r.current&&r.current.clear()},[]),l=q.useCallback(()=>{const c=r.current;c&&(c.off("flip"),c.off("changeOrientation"),c.off("changeState"),c.off("init"),c.off("update"))},[]);return q.useEffect(()=>{if(n.current=[],i.children){const c=Ut.Children.map(i.children,h=>Ut.cloneElement(h,{ref:d=>{d&&n.current.push(d)}}));(!i.renderOnlyPageLengthChange||s.length!==c.length)&&(c.length<s.length&&o(),a(c))}},[i.children]),q.useEffect(()=>{const c=()=>{const h=r.current;h&&(i.onFlip&&h.on("flip",d=>i.onFlip(d)),i.onChangeOrientation&&h.on("changeOrientation",d=>i.onChangeOrientation(d)),i.onChangeState&&h.on("changeState",d=>i.onChangeState(d)),i.onInit&&h.on("init",d=>i.onInit(d)),i.onUpdate&&h.on("update",d=>i.onUpdate(d)))};s.length>0&&n.current.length>0&&(l(),t.current&&!r.current&&(r.current=new um.PageFlip(t.current,i)),r.current.getFlipController()?r.current.updateFromHtml(n.current):r.current.loadFromHTML(n.current),c())},[s]),Ut.createElement("div",{ref:t,className:i.className,style:i.style},s)}),fm=Ut.memo(dm),Ca="3.11.174",pm=()=>{if(typeof window>"u")return null;window.pdfjsWorker&&window.pdfjsWorker.terminate();try{const i=new Blob([`importScripts('https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${Ca}/pdf.worker.min.js');`],{type:"application/javascript"}),e=URL.createObjectURL(i),t=new Worker(e);return t._workerUrl=e,t}catch(i){return console.error("Failed to initialize PDF worker:",i),null}};function mm(){const i=q.useMemo(()=>({cMapUrl:`https://unpkg.com/pdfjs-dist@${Ca}/cmaps/`,cMapPacked:!0,standardFontDataUrl:`https://unpkg.com/pdfjs-dist@${Ca}/standard_fonts/`}),[]),[e,t]=q.useState(null),[n,r]=q.useState(!0),[s,a]=q.useState(null),[o,l]=q.useState(""),[c,h]=q.useState(!1),[d,f]=q.useState({width:typeof window<"u"?window.innerWidth:1200,height:typeof window<"u"?"calc(100vh)":"800px"});q.useEffect(()=>{const p=()=>{h(!!document.fullscreenElement)};return document.addEventListener("fullscreenchange",p),()=>{document.removeEventListener("fullscreenchange",p)}},[]);const _=zi(),y=q.useCallback(()=>{_("/")},[_]),x=q.useCallback(()=>{const p=document.createElement("a");p.href="/ANTROPONOMADAS 1 ED.pdf",p.download="ANTROPONOMADAS-1-ED.pdf",document.body.appendChild(p),p.click(),document.body.removeChild(p)},[]),m=q.useCallback(()=>{document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen().catch(p=>{console.error("Error attempting to exit fullscreen:",p)}):document.documentElement.requestFullscreen().catch(p=>{console.error("Error attempting to enable fullscreen:",p)})},[]);q.useEffect(()=>{const p=()=>{f({width:window.innerWidth,height:"calc(100vh)"})};return window.addEventListener("resize",p),()=>window.removeEventListener("resize",p)},[]);const g=q.useMemo(()=>{const w=d.height-40,b=d.width-40,P=Math.sqrt(2);let S=b*.97,T=S*P;T>w&&(T=w*.97,S=T/P);const N=300,Y=N*P;return{width:Math.max(Math.floor(S),N),height:Math.max(Math.floor(T),Math.floor(Y))}},[d]);q.useEffect(()=>{const p=pm();p&&(_u.GlobalWorkerOptions.workerPort=p),l("/ANTROPONOMADAS 1 ED.pdf");const w=setTimeout(()=>{r(!1)},18e3);return()=>{clearTimeout(w),p&&(p.terminate(),p._workerUrl&&URL.revokeObjectURL(p._workerUrl))}},[]);const M=q.useCallback(({numPages:p})=>{t(p),a(null)},[]),v=q.useCallback(p=>{console.error("Error loading PDF:",p),a("Error al cargar el PDF. Por favor, inténtalo de nuevo.")},[]);function u(){return e?Array.from({length:e},(p,w)=>w+1).map(p=>L.jsx("div",{className:"page",style:{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"white",padding:0,margin:0,overflow:"hidden",width:"100%",height:"100%"},children:L.jsx(yu,{pageNumber:p,width:g.width,loading:L.jsxs("div",{children:["Loading page ",p,"..."]}),renderTextLayer:!1,renderAnnotationLayer:!1,className:"pdf-page"},`page-${p}`)},`page-${p}`)):null}return L.jsxs("div",{style:{position:"relative",width:"100%",height:"100%"},children:[L.jsx("div",{style:{opacity:n?0:1,transition:"opacity 0.5s ease-in-out",height:"100%",position:"relative",zIndex:1},children:s?L.jsxs("div",{className:"error-message",children:[L.jsx("p",{children:"Error al cargar el PDF. Por favor, inténtalo de nuevo más tarde."}),L.jsx("button",{onClick:()=>window.location.reload(),className:"retry-button",children:"Reintentar"})]}):L.jsxs("div",{className:"flipbook-container",children:[L.jsxs("div",{className:"floating-buttons",children:[L.jsx("button",{className:"floating-button",onClick:y,title:"Volver a inicio","aria-label":"Volver a inicio",children:L.jsx(lm,{})}),L.jsx("button",{className:"floating-button",onClick:x,title:"Descargar PDF","aria-label":"Descargar PDF",children:L.jsx(am,{})}),L.jsx("button",{className:"floating-button",onClick:m,title:c?"Salir de pantalla completa":"Pantalla completa","aria-label":c?"Salir de pantalla completa":"Pantalla completa",children:c?L.jsx(sm,{}):L.jsx(om,{})})]}),L.jsx(vu,{file:o,onLoadSuccess:M,onLoadError:v,loading:L.jsxs("div",{className:"loading-state",children:[L.jsx("div",{className:"loading-spinner"}),L.jsx("p",{children:"Cargando revista..."})]}),options:i,children:L.jsx(fm,{width:g.width,height:g.height,minWidth:g.width*.5,maxWidth:g.width*1.2,minHeight:g.height*.1,maxHeight:g.height*1.2,size:"stretch",autoSize:!1,drawShadow:!0,flippingTime:800,usePortrait:!1,showCover:!0,startPage:0,useMouseEvents:!0,swipeDistance:20,showPageCorners:!0,disableFlipByClick:!1,className:"flipbook",style:{margin:"0",display:"flex",justifyContent:"center",alignItems:"center",boxShadow:"0 10px 30px rgba(0,0,0,0.2)"},children:u()})})]})}),n&&L.jsx("div",{className:"loader-container",style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.8)",display:"flex",justifyContent:"center",alignItems:"center",zIndex:1e3},children:L.jsxs("div",{className:"modern-loader",children:[L.jsx("div",{className:"loader-circle"}),L.jsx("div",{className:"loader-circle"}),L.jsx("div",{className:"loader-circle"}),L.jsx("div",{className:"loader-circle"}),L.jsx("div",{className:"loader-text",children:"Cargando revista..."})]})})]})}class gm extends q.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,t){console.error("Error caught by boundary:",e,t)}render(){return this.state.hasError?L.jsxs("div",{className:"error-boundary",style:{padding:"20px",textAlign:"center",color:"#721c24",backgroundColor:"#f8d7da",border:"1px solid #f5c6cb",borderRadius:"4px",margin:"20px"},children:[L.jsx("h2",{children:"Something went wrong"}),L.jsx("p",{children:this.state.error?.message||"Unknown error occurred"}),L.jsx("button",{onClick:()=>window.location.reload(),style:{padding:"8px 16px",backgroundColor:"#dc3545",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",marginTop:"10px"},children:"Reload Page"})]}):this.props.children}}function _m(){const{id:i}=ed(),[e,t]=q.useState({height:typeof window<"u"?window.innerHeight:800,width:typeof window<"u"?window.innerWidth:1024});return q.useEffect(()=>{const n=()=>{t({height:window.innerHeight,width:window.innerWidth})};return document.body.style.overflow="hidden",window.addEventListener("resize",n),()=>{document.body.style.overflow="auto",window.removeEventListener("resize",n)}},[]),console.log("Cargando edición ID:",i),L.jsx("div",{className:"edition-container",style:{height:"calc(100vh - var(--header-height))",width:"100%",position:"relative"},children:L.jsx(gm,{children:L.jsx(mm,{},`${e.width}x${e.height}`)})})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const io="155",vm=0,nl=1,ym=2,Ah=1,xm=2,cn=3,In=0,Tt=1,un=2,Pn=0,Li=1,La=2,il=3,rl=4,wm=5,Ri=100,Sm=101,bm=102,sl=103,al=104,Em=200,Mm=201,Tm=202,Am=203,Rh=204,Ph=205,Rm=206,Pm=207,Cm=208,Lm=209,Im=210,Um=0,Dm=1,Om=2,Ia=3,Nm=4,Fm=5,km=6,Bm=7,Ch=0,zm=1,Hm=2,Cn=0,Gm=1,Vm=2,Wm=3,jm=4,$m=5,Lh=300,Di=301,Oi=302,Ua=303,Da=304,ms=306,Oa=1e3,Kt=1001,Na=1002,St=1003,ol=1004,ks=1005,Bt=1006,qm=1007,hr=1008,Ln=1009,Xm=1010,Km=1011,ro=1012,Ih=1013,Mn=1014,Tn=1015,ur=1016,Uh=1017,Dh=1018,Qn=1020,Ym=1021,Yt=1023,Jm=1024,Zm=1025,ei=1026,Ni=1027,Qm=1028,Oh=1029,eg=1030,Nh=1031,Fh=1033,Bs=33776,zs=33777,Hs=33778,Gs=33779,ll=35840,cl=35841,hl=35842,ul=35843,tg=36196,dl=37492,fl=37496,pl=37808,ml=37809,gl=37810,_l=37811,vl=37812,yl=37813,xl=37814,wl=37815,Sl=37816,bl=37817,El=37818,Ml=37819,Tl=37820,Al=37821,Vs=36492,ng=36283,Rl=36284,Pl=36285,Cl=36286,kh=3e3,ti=3001,ig=3200,rg=3201,sg=0,ag=1,ni="",Ue="srgb",en="srgb-linear",Bh="display-p3",Ws=7680,og=519,lg=512,cg=513,hg=514,ug=515,dg=516,fg=517,pg=518,mg=519,Ll=35044,Il="300 es",Fa=1035,dn=2e3,cs=2001;class Vi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],js=Math.PI/180,ka=180/Math.PI;function pr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gt[i&255]+gt[i>>8&255]+gt[i>>16&255]+gt[i>>24&255]+"-"+gt[e&255]+gt[e>>8&255]+"-"+gt[e>>16&15|64]+gt[e>>24&255]+"-"+gt[t&63|128]+gt[t>>8&255]+"-"+gt[t>>16&255]+gt[t>>24&255]+gt[n&255]+gt[n>>8&255]+gt[n>>16&255]+gt[n>>24&255]).toLowerCase()}function Mt(i,e,t){return Math.max(e,Math.min(t,i))}function gg(i,e){return(i%e+e)%e}function $s(i,e,t){return(1-t)*i+t*e}function Ul(i){return(i&i-1)===0&&i!==0}function Ba(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function qi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Et(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class We{constructor(e=0,t=0){We.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ne{constructor(e,t,n,r,s,a,o,l,c){Ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],_=n[5],y=n[8],x=r[0],m=r[3],g=r[6],M=r[1],v=r[4],u=r[7],p=r[2],w=r[5],b=r[8];return s[0]=a*x+o*M+l*p,s[3]=a*m+o*v+l*w,s[6]=a*g+o*u+l*b,s[1]=c*x+h*M+d*p,s[4]=c*m+h*v+d*w,s[7]=c*g+h*u+d*b,s[2]=f*x+_*M+y*p,s[5]=f*m+_*v+y*w,s[8]=f*g+_*u+y*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,f=o*l-h*s,_=c*s-a*l,y=t*d+n*f+r*_;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/y;return e[0]=d*x,e[1]=(r*c-h*n)*x,e[2]=(o*n-r*a)*x,e[3]=f*x,e[4]=(h*t-r*l)*x,e[5]=(r*s-o*t)*x,e[6]=_*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(qs.makeScale(e,t)),this}rotate(e){return this.premultiply(qs.makeRotation(-e)),this}translate(e,t){return this.premultiply(qs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const qs=new Ne;function zh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function hs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}const Dl={};function ir(i){i in Dl||(Dl[i]=!0,console.warn(i))}function Ii(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Xs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const _g=new Ne().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),vg=new Ne().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function yg(i){return i.convertSRGBToLinear().applyMatrix3(vg)}function xg(i){return i.applyMatrix3(_g).convertLinearToSRGB()}const wg={[en]:i=>i,[Ue]:i=>i.convertSRGBToLinear(),[Bh]:yg},Sg={[en]:i=>i,[Ue]:i=>i.convertLinearToSRGB(),[Bh]:xg},Ht={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return en},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=wg[e],r=Sg[t];if(n===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}};let hi;class Hh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{hi===void 0&&(hi=hs("canvas")),hi.width=e.width,hi.height=e.height;const n=hi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=hi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=hs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ii(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ii(t[n]/255)*255):t[n]=Ii(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let bg=0;class Gh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bg++}),this.uuid=pr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ks(r[a].image)):s.push(Ks(r[a]))}else s=Ks(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ks(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Hh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Eg=0;class Dt extends Vi{constructor(e=Dt.DEFAULT_IMAGE,t=Dt.DEFAULT_MAPPING,n=Kt,r=Kt,s=Bt,a=hr,o=Yt,l=Ln,c=Dt.DEFAULT_ANISOTROPY,h=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Eg++}),this.uuid=pr(),this.name="",this.source=new Gh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(ir("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ti?Ue:ni),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Oa:e.x=e.x-Math.floor(e.x);break;case Kt:e.x=e.x<0?0:1;break;case Na:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Oa:e.y=e.y-Math.floor(e.y);break;case Kt:e.y=e.y<0?0:1;break;case Na:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ir("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ue?ti:kh}set encoding(e){ir("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ti?Ue:ni}}Dt.DEFAULT_IMAGE=null;Dt.DEFAULT_MAPPING=Lh;Dt.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,t=0,n=0,r=1){dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],_=l[5],y=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-x)<.01&&Math.abs(y-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+x)<.1&&Math.abs(y+m)<.1&&Math.abs(c+_+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,u=(_+1)/2,p=(g+1)/2,w=(h+f)/4,b=(d+x)/4,P=(y+m)/4;return v>u&&v>p?v<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(v),r=w/n,s=b/n):u>p?u<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(u),n=w/r,s=P/r):p<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(p),n=b/s,r=P/s),this.set(n,r,s,t),this}let M=Math.sqrt((m-y)*(m-y)+(d-x)*(d-x)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(m-y)/M,this.y=(d-x)/M,this.z=(f-h)/M,this.w=Math.acos((c+_+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Mg extends Vi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(ir("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ti?Ue:ni),this.texture=new Dt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Bt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Gh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ii extends Mg{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Vh extends Dt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=St,this.minFilter=St,this.wrapR=Kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tg extends Dt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=St,this.minFilter=St,this.wrapR=Kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mr{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],h=n[r+2],d=n[r+3];const f=s[a+0],_=s[a+1],y=s[a+2],x=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=f,e[t+1]=_,e[t+2]=y,e[t+3]=x;return}if(d!==x||l!==f||c!==_||h!==y){let m=1-o;const g=l*f+c*_+h*y+d*x,M=g>=0?1:-1,v=1-g*g;if(v>Number.EPSILON){const p=Math.sqrt(v),w=Math.atan2(p,g*M);m=Math.sin(m*w)/p,o=Math.sin(o*w)/p}const u=o*M;if(l=l*m+f*u,c=c*m+_*u,h=h*m+y*u,d=d*m+x*u,m===1-o){const p=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=p,c*=p,h*=p,d*=p}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],h=n[r+3],d=s[a],f=s[a+1],_=s[a+2],y=s[a+3];return e[t]=o*y+h*d+l*_-c*f,e[t+1]=l*y+h*f+c*d-o*_,e[t+2]=c*y+h*_+o*f-l*d,e[t+3]=h*y-o*d-l*f-c*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(r/2),d=o(s/2),f=l(n/2),_=l(r/2),y=l(s/2);switch(a){case"XYZ":this._x=f*h*d+c*_*y,this._y=c*_*d-f*h*y,this._z=c*h*y+f*_*d,this._w=c*h*d-f*_*y;break;case"YXZ":this._x=f*h*d+c*_*y,this._y=c*_*d-f*h*y,this._z=c*h*y-f*_*d,this._w=c*h*d+f*_*y;break;case"ZXY":this._x=f*h*d-c*_*y,this._y=c*_*d+f*h*y,this._z=c*h*y+f*_*d,this._w=c*h*d-f*_*y;break;case"ZYX":this._x=f*h*d-c*_*y,this._y=c*_*d+f*h*y,this._z=c*h*y-f*_*d,this._w=c*h*d+f*_*y;break;case"YZX":this._x=f*h*d+c*_*y,this._y=c*_*d+f*h*y,this._z=c*h*y-f*_*d,this._w=c*h*d-f*_*y;break;case"XZY":this._x=f*h*d-c*_*y,this._y=c*_*d-f*h*y,this._z=c*h*y+f*_*d,this._w=c*h*d+f*_*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],f=n+o+d;if(f>0){const _=.5/Math.sqrt(f+1);this._w=.25/_,this._x=(h-l)*_,this._y=(s-c)*_,this._z=(a-r)*_}else if(n>o&&n>d){const _=2*Math.sqrt(1+n-o-d);this._w=(h-l)/_,this._x=.25*_,this._y=(r+a)/_,this._z=(s+c)/_}else if(o>d){const _=2*Math.sqrt(1+o-n-d);this._w=(s-c)/_,this._x=(r+a)/_,this._y=.25*_,this._z=(l+h)/_}else{const _=2*Math.sqrt(1+d-n-o);this._w=(a-r)/_,this._x=(s+c)/_,this._y=(l+h)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-r*o,this._w=a*h-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const _=1-t;return this._w=_*a+t*this._w,this._x=_*n+t*this._x,this._y=_*r+t*this._y,this._z=_*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=a*d+this._w*f,this._x=n*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,n=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ol.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ol.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*r-o*n,h=l*n+o*t-s*r,d=l*r+s*n-a*t,f=-s*t-a*n-o*r;return this.x=c*l+f*-s+h*-o-d*-a,this.y=h*l+f*-a+d*-s-c*-o,this.z=d*l+f*-o+c*-a-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ys.copy(this).projectOnVector(e),this.sub(Ys)}reflect(e){return this.sub(Ys.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ys=new B,Ol=new mr;class gr{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),ui.copy(e.boundingBox),ui.applyMatrix4(e.matrixWorld),this.union(ui);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let a=0,o=s.count;a<o;a++)rn.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(rn)}else r.boundingBox===null&&r.computeBoundingBox(),ui.copy(r.boundingBox),ui.applyMatrix4(e.matrixWorld),this.union(ui)}const n=e.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,rn),rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xi),Lr.subVectors(this.max,Xi),di.subVectors(e.a,Xi),fi.subVectors(e.b,Xi),pi.subVectors(e.c,Xi),vn.subVectors(fi,di),yn.subVectors(pi,fi),zn.subVectors(di,pi);let t=[0,-vn.z,vn.y,0,-yn.z,yn.y,0,-zn.z,zn.y,vn.z,0,-vn.x,yn.z,0,-yn.x,zn.z,0,-zn.x,-vn.y,vn.x,0,-yn.y,yn.x,0,-zn.y,zn.x,0];return!Js(t,di,fi,pi,Lr)||(t=[1,0,0,0,1,0,0,0,1],!Js(t,di,fi,pi,Lr))?!1:(Ir.crossVectors(vn,yn),t=[Ir.x,Ir.y,Ir.z],Js(t,di,fi,pi,Lr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(nn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const nn=[new B,new B,new B,new B,new B,new B,new B,new B],rn=new B,ui=new gr,di=new B,fi=new B,pi=new B,vn=new B,yn=new B,zn=new B,Xi=new B,Lr=new B,Ir=new B,Hn=new B;function Js(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Hn.fromArray(i,s);const o=r.x*Math.abs(Hn.x)+r.y*Math.abs(Hn.y)+r.z*Math.abs(Hn.z),l=e.dot(Hn),c=t.dot(Hn),h=n.dot(Hn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Ag=new gr,Ki=new B,Zs=new B;class gs{constructor(e=new B,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ag.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ki.subVectors(e,this.center);const t=Ki.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ki,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ki.copy(e.center).add(Zs)),this.expandByPoint(Ki.copy(e.center).sub(Zs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const sn=new B,Qs=new B,Ur=new B,xn=new B,ea=new B,Dr=new B,ta=new B;class Wh{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,sn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=sn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(sn.copy(this.origin).addScaledVector(this.direction,t),sn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Qs.copy(e).add(t).multiplyScalar(.5),Ur.copy(t).sub(e).normalize(),xn.copy(this.origin).sub(Qs);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ur),o=xn.dot(this.direction),l=-xn.dot(Ur),c=xn.lengthSq(),h=Math.abs(1-a*a);let d,f,_,y;if(h>0)if(d=a*l-o,f=a*o-l,y=s*h,d>=0)if(f>=-y)if(f<=y){const x=1/h;d*=x,f*=x,_=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=s,d=Math.max(0,-(a*f+o)),_=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(a*f+o)),_=-d*d+f*(f+2*l)+c;else f<=-y?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-l),s),_=-d*d+f*(f+2*l)+c):f<=y?(d=0,f=Math.min(Math.max(-s,-l),s),_=f*(f+2*l)+c):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-l),s),_=-d*d+f*(f+2*l)+c);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),_=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Qs).addScaledVector(Ur,f),_}intersectSphere(e,t){sn.subVectors(e.center,this.origin);const n=sn.dot(this.direction),r=sn.dot(sn)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,sn)!==null}intersectTriangle(e,t,n,r,s){ea.subVectors(t,e),Dr.subVectors(n,e),ta.crossVectors(ea,Dr);let a=this.direction.dot(ta),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;xn.subVectors(this.origin,e);const l=o*this.direction.dot(Dr.crossVectors(xn,Dr));if(l<0)return null;const c=o*this.direction.dot(ea.cross(xn));if(c<0||l+c>a)return null;const h=-o*xn.dot(ta);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,t,n,r,s,a,o,l,c,h,d,f,_,y,x,m){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,h,d,f,_,y,x,m)}set(e,t,n,r,s,a,o,l,c,h,d,f,_,y,x,m){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=s,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=f,g[3]=_,g[7]=y,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/mi.setFromMatrixColumn(e,0).length(),s=1/mi.setFromMatrixColumn(e,1).length(),a=1/mi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=a*h,_=a*d,y=o*h,x=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=_+y*c,t[5]=f-x*c,t[9]=-o*l,t[2]=x-f*c,t[6]=y+_*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*h,_=l*d,y=c*h,x=c*d;t[0]=f+x*o,t[4]=y*o-_,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=_*o-y,t[6]=x+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*h,_=l*d,y=c*h,x=c*d;t[0]=f-x*o,t[4]=-a*d,t[8]=y+_*o,t[1]=_+y*o,t[5]=a*h,t[9]=x-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*h,_=a*d,y=o*h,x=o*d;t[0]=l*h,t[4]=y*c-_,t[8]=f*c+x,t[1]=l*d,t[5]=x*c+f,t[9]=_*c-y,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,_=a*c,y=o*l,x=o*c;t[0]=l*h,t[4]=x-f*d,t[8]=y*d+_,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=_*d+y,t[10]=f-x*d}else if(e.order==="XZY"){const f=a*l,_=a*c,y=o*l,x=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=f*d+x,t[5]=a*h,t[9]=_*d-y,t[2]=y*d-_,t[6]=o*h,t[10]=x*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rg,e,Pg)}lookAt(e,t,n){const r=this.elements;return Pt.subVectors(e,t),Pt.lengthSq()===0&&(Pt.z=1),Pt.normalize(),wn.crossVectors(n,Pt),wn.lengthSq()===0&&(Math.abs(n.z)===1?Pt.x+=1e-4:Pt.z+=1e-4,Pt.normalize(),wn.crossVectors(n,Pt)),wn.normalize(),Or.crossVectors(Pt,wn),r[0]=wn.x,r[4]=Or.x,r[8]=Pt.x,r[1]=wn.y,r[5]=Or.y,r[9]=Pt.y,r[2]=wn.z,r[6]=Or.z,r[10]=Pt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],_=n[13],y=n[2],x=n[6],m=n[10],g=n[14],M=n[3],v=n[7],u=n[11],p=n[15],w=r[0],b=r[4],P=r[8],S=r[12],T=r[1],N=r[5],Y=r[9],D=r[13],z=r[2],V=r[6],ee=r[10],$=r[14],K=r[3],J=r[7],Z=r[11],F=r[15];return s[0]=a*w+o*T+l*z+c*K,s[4]=a*b+o*N+l*V+c*J,s[8]=a*P+o*Y+l*ee+c*Z,s[12]=a*S+o*D+l*$+c*F,s[1]=h*w+d*T+f*z+_*K,s[5]=h*b+d*N+f*V+_*J,s[9]=h*P+d*Y+f*ee+_*Z,s[13]=h*S+d*D+f*$+_*F,s[2]=y*w+x*T+m*z+g*K,s[6]=y*b+x*N+m*V+g*J,s[10]=y*P+x*Y+m*ee+g*Z,s[14]=y*S+x*D+m*$+g*F,s[3]=M*w+v*T+u*z+p*K,s[7]=M*b+v*N+u*V+p*J,s[11]=M*P+v*Y+u*ee+p*Z,s[15]=M*S+v*D+u*$+p*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],_=e[14],y=e[3],x=e[7],m=e[11],g=e[15];return y*(+s*l*d-r*c*d-s*o*f+n*c*f+r*o*_-n*l*_)+x*(+t*l*_-t*c*f+s*a*f-r*a*_+r*c*h-s*l*h)+m*(+t*c*d-t*o*_-s*a*d+n*a*_+s*o*h-n*c*h)+g*(-r*o*h-t*l*d+t*o*f+r*a*d-n*a*f+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],_=e[11],y=e[12],x=e[13],m=e[14],g=e[15],M=d*m*c-x*f*c+x*l*_-o*m*_-d*l*g+o*f*g,v=y*f*c-h*m*c-y*l*_+a*m*_+h*l*g-a*f*g,u=h*x*c-y*d*c+y*o*_-a*x*_-h*o*g+a*d*g,p=y*d*l-h*x*l-y*o*f+a*x*f+h*o*m-a*d*m,w=t*M+n*v+r*u+s*p;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/w;return e[0]=M*b,e[1]=(x*f*s-d*m*s-x*r*_+n*m*_+d*r*g-n*f*g)*b,e[2]=(o*m*s-x*l*s+x*r*c-n*m*c-o*r*g+n*l*g)*b,e[3]=(d*l*s-o*f*s-d*r*c+n*f*c+o*r*_-n*l*_)*b,e[4]=v*b,e[5]=(h*m*s-y*f*s+y*r*_-t*m*_-h*r*g+t*f*g)*b,e[6]=(y*l*s-a*m*s-y*r*c+t*m*c+a*r*g-t*l*g)*b,e[7]=(a*f*s-h*l*s+h*r*c-t*f*c-a*r*_+t*l*_)*b,e[8]=u*b,e[9]=(y*d*s-h*x*s-y*n*_+t*x*_+h*n*g-t*d*g)*b,e[10]=(a*x*s-y*o*s+y*n*c-t*x*c-a*n*g+t*o*g)*b,e[11]=(h*o*s-a*d*s-h*n*c+t*d*c+a*n*_-t*o*_)*b,e[12]=p*b,e[13]=(h*x*r-y*d*r+y*n*f-t*x*f-h*n*m+t*d*m)*b,e[14]=(y*o*r-a*x*r-y*n*l+t*x*l+a*n*m-t*o*m)*b,e[15]=(a*d*r-h*o*r+h*n*l-t*d*l-a*n*f+t*o*f)*b,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+n,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,d=o+o,f=s*c,_=s*h,y=s*d,x=a*h,m=a*d,g=o*d,M=l*c,v=l*h,u=l*d,p=n.x,w=n.y,b=n.z;return r[0]=(1-(x+g))*p,r[1]=(_+u)*p,r[2]=(y-v)*p,r[3]=0,r[4]=(_-u)*w,r[5]=(1-(f+g))*w,r[6]=(m+M)*w,r[7]=0,r[8]=(y+v)*b,r[9]=(m-M)*b,r[10]=(1-(f+x))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=mi.set(r[0],r[1],r[2]).length();const a=mi.set(r[4],r[5],r[6]).length(),o=mi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Gt.copy(this);const c=1/s,h=1/a,d=1/o;return Gt.elements[0]*=c,Gt.elements[1]*=c,Gt.elements[2]*=c,Gt.elements[4]*=h,Gt.elements[5]*=h,Gt.elements[6]*=h,Gt.elements[8]*=d,Gt.elements[9]*=d,Gt.elements[10]*=d,t.setFromRotationMatrix(Gt),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=dn){const l=this.elements,c=2*s/(t-e),h=2*s/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r);let _,y;if(o===dn)_=-(a+s)/(a-s),y=-2*a*s/(a-s);else if(o===cs)_=-a/(a-s),y=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=dn){const l=this.elements,c=1/(t-e),h=1/(n-r),d=1/(a-s),f=(t+e)*c,_=(n+r)*h;let y,x;if(o===dn)y=(a+s)*d,x=-2*d;else if(o===cs)y=s*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-_,l[2]=0,l[6]=0,l[10]=x,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const mi=new B,Gt=new ht,Rg=new B(0,0,0),Pg=new B(1,1,1),wn=new B,Or=new B,Pt=new B,Nl=new ht,Fl=new mr;class _s{constructor(e=0,t=0,n=0,r=_s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],d=r[2],f=r[6],_=r[10];switch(t){case"XYZ":this._y=Math.asin(Mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,_),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,_),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,_),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,_),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,_));break;case"XZY":this._z=Math.asin(-Mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Nl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Nl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Fl.setFromEuler(this),this.setFromQuaternion(Fl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_s.DEFAULT_ORDER="XYZ";class jh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Cg=0;const kl=new B,gi=new mr,an=new ht,Nr=new B,Yi=new B,Lg=new B,Ig=new mr,Bl=new B(1,0,0),zl=new B(0,1,0),Hl=new B(0,0,1),Ug={type:"added"},Gl={type:"removed"};class At extends Vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cg++}),this.uuid=pr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=At.DEFAULT_UP.clone();const e=new B,t=new _s,n=new mr,r=new B(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ht},normalMatrix:{value:new Ne}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=At.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new jh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gi.setFromAxisAngle(e,t),this.quaternion.multiply(gi),this}rotateOnWorldAxis(e,t){return gi.setFromAxisAngle(e,t),this.quaternion.premultiply(gi),this}rotateX(e){return this.rotateOnAxis(Bl,e)}rotateY(e){return this.rotateOnAxis(zl,e)}rotateZ(e){return this.rotateOnAxis(Hl,e)}translateOnAxis(e,t){return kl.copy(e).applyQuaternion(this.quaternion),this.position.add(kl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bl,e)}translateY(e){return this.translateOnAxis(zl,e)}translateZ(e){return this.translateOnAxis(Hl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(an.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Nr.copy(e):Nr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Yi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?an.lookAt(Yi,Nr,this.up):an.lookAt(Nr,Yi,this.up),this.quaternion.setFromRotationMatrix(an),r&&(an.extractRotation(r.matrixWorld),gi.setFromRotationMatrix(an),this.quaternion.premultiply(gi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ug)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Gl)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Gl)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),an.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),an.multiply(e.parent.matrixWorld)),e.applyMatrix4(an),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,s=this.children.length;r<s;r++){const a=this.children[r].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yi,e,Lg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yi,Ig,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),f=a(e.skeletons),_=a(e.animations),y=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),_.length>0&&(n.animations=_),y.length>0&&(n.nodes=y)}return n.object=r,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}At.DEFAULT_UP=new B(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vt=new B,on=new B,na=new B,ln=new B,_i=new B,vi=new B,Vl=new B,ia=new B,ra=new B,sa=new B;let Fr=!1;class Xt{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Vt.subVectors(e,t),r.cross(Vt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Vt.subVectors(r,t),on.subVectors(n,t),na.subVectors(e,t);const a=Vt.dot(Vt),o=Vt.dot(on),l=Vt.dot(na),c=on.dot(on),h=on.dot(na),d=a*c-o*o;if(d===0)return s.set(-2,-1,-1);const f=1/d,_=(c*l-o*h)*f,y=(a*h-o*l)*f;return s.set(1-_-y,y,_)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,ln),ln.x>=0&&ln.y>=0&&ln.x+ln.y<=1}static getUV(e,t,n,r,s,a,o,l){return Fr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Fr=!0),this.getInterpolation(e,t,n,r,s,a,o,l)}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,ln),l.setScalar(0),l.addScaledVector(s,ln.x),l.addScaledVector(a,ln.y),l.addScaledVector(o,ln.z),l}static isFrontFacing(e,t,n,r){return Vt.subVectors(n,t),on.subVectors(e,t),Vt.cross(on).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vt.subVectors(this.c,this.b),on.subVectors(this.a,this.b),Vt.cross(on).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Xt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return Fr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Fr=!0),Xt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}getInterpolation(e,t,n,r,s){return Xt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Xt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;_i.subVectors(r,n),vi.subVectors(s,n),ia.subVectors(e,n);const l=_i.dot(ia),c=vi.dot(ia);if(l<=0&&c<=0)return t.copy(n);ra.subVectors(e,r);const h=_i.dot(ra),d=vi.dot(ra);if(h>=0&&d<=h)return t.copy(r);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(_i,a);sa.subVectors(e,s);const _=_i.dot(sa),y=vi.dot(sa);if(y>=0&&_<=y)return t.copy(s);const x=_*c-l*y;if(x<=0&&c>=0&&y<=0)return o=c/(c-y),t.copy(n).addScaledVector(vi,o);const m=h*y-_*d;if(m<=0&&d-h>=0&&_-y>=0)return Vl.subVectors(s,r),o=(d-h)/(d-h+(_-y)),t.copy(r).addScaledVector(Vl,o);const g=1/(m+x+f);return a=x*g,o=f*g,t.copy(n).addScaledVector(_i,a).addScaledVector(vi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Dg=0;class _r extends Vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dg++}),this.uuid=pr(),this.name="",this.type="Material",this.blending=Li,this.side=In,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rh,this.blendDst=Ph,this.blendEquation=Ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ia,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=og,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ws,this.stencilZFail=Ws,this.stencilZPass=Ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Li&&(n.blending=this.blending),this.side!==In&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const $h={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wt={h:0,s:0,l:0},kr={h:0,s:0,l:0};function aa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class qe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ue){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ht.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ht.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Ht.workingColorSpace){if(e=gg(e,1),t=Mt(t,0,1),n=Mt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=aa(a,s,e+1/3),this.g=aa(a,s,e),this.b=aa(a,s,e-1/3)}return Ht.toWorkingColorSpace(this,r),this}setStyle(e,t=Ue){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ue){const n=$h[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ii(e.r),this.g=Ii(e.g),this.b=Ii(e.b),this}copyLinearToSRGB(e){return this.r=Xs(e.r),this.g=Xs(e.g),this.b=Xs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ue){return Ht.fromWorkingColorSpace(_t.copy(this),e),Math.round(Mt(_t.r*255,0,255))*65536+Math.round(Mt(_t.g*255,0,255))*256+Math.round(Mt(_t.b*255,0,255))}getHexString(e=Ue){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ht.workingColorSpace){Ht.fromWorkingColorSpace(_t.copy(this),t);const n=_t.r,r=_t.g,s=_t.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-n)/d+2;break;case s:l=(n-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ht.workingColorSpace){return Ht.fromWorkingColorSpace(_t.copy(this),t),e.r=_t.r,e.g=_t.g,e.b=_t.b,e}getStyle(e=Ue){Ht.fromWorkingColorSpace(_t.copy(this),e);const t=_t.r,n=_t.g,r=_t.b;return e!==Ue?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Wt),Wt.h+=e,Wt.s+=t,Wt.l+=n,this.setHSL(Wt.h,Wt.s,Wt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Wt),e.getHSL(kr);const n=$s(Wt.h,kr.h,t),r=$s(Wt.s,kr.s,t),s=$s(Wt.l,kr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _t=new qe;qe.NAMES=$h;class qh extends _r{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ch,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rt=new B,Br=new We;class Qt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ll,this.updateRange={offset:0,count:-1},this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Br.fromBufferAttribute(this,t),Br.applyMatrix3(e),this.setXY(t,Br.x,Br.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix3(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix4(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyNormalMatrix(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.transformDirection(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=qi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=qi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=qi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=qi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=qi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),r=Et(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),r=Et(r,this.array),s=Et(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ll&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Xh extends Qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Kh extends Qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class fn extends Qt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Og=0;const Nt=new ht,oa=new At,yi=new B,Ct=new gr,Ji=new gr,ct=new B;class mn extends Vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Og++}),this.uuid=pr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zh(e)?Kh:Xh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ne().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nt.makeRotationFromQuaternion(e),this.applyMatrix4(Nt),this}rotateX(e){return Nt.makeRotationX(e),this.applyMatrix4(Nt),this}rotateY(e){return Nt.makeRotationY(e),this.applyMatrix4(Nt),this}rotateZ(e){return Nt.makeRotationZ(e),this.applyMatrix4(Nt),this}translate(e,t,n){return Nt.makeTranslation(e,t,n),this.applyMatrix4(Nt),this}scale(e,t,n){return Nt.makeScale(e,t,n),this.applyMatrix4(Nt),this}lookAt(e){return oa.lookAt(e),oa.updateMatrix(),this.applyMatrix4(oa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yi).negate(),this.translate(yi.x,yi.y,yi.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new fn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Ct.setFromBufferAttribute(s),this.morphTargetsRelative?(ct.addVectors(this.boundingBox.min,Ct.min),this.boundingBox.expandByPoint(ct),ct.addVectors(this.boundingBox.max,Ct.max),this.boundingBox.expandByPoint(ct)):(this.boundingBox.expandByPoint(Ct.min),this.boundingBox.expandByPoint(Ct.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new B,1/0);return}if(e){const n=this.boundingSphere.center;if(Ct.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ji.setFromBufferAttribute(o),this.morphTargetsRelative?(ct.addVectors(Ct.min,Ji.min),Ct.expandByPoint(ct),ct.addVectors(Ct.max,Ji.max),Ct.expandByPoint(ct)):(Ct.expandByPoint(Ji.min),Ct.expandByPoint(Ji.max))}Ct.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)ct.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(ct));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ct.fromBufferAttribute(o,c),l&&(yi.fromBufferAttribute(e,c),ct.add(yi)),r=Math.max(r,n.distanceToSquared(ct))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qt(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let T=0;T<o;T++)c[T]=new B,h[T]=new B;const d=new B,f=new B,_=new B,y=new We,x=new We,m=new We,g=new B,M=new B;function v(T,N,Y){d.fromArray(r,T*3),f.fromArray(r,N*3),_.fromArray(r,Y*3),y.fromArray(a,T*2),x.fromArray(a,N*2),m.fromArray(a,Y*2),f.sub(d),_.sub(d),x.sub(y),m.sub(y);const D=1/(x.x*m.y-m.x*x.y);isFinite(D)&&(g.copy(f).multiplyScalar(m.y).addScaledVector(_,-x.y).multiplyScalar(D),M.copy(_).multiplyScalar(x.x).addScaledVector(f,-m.x).multiplyScalar(D),c[T].add(g),c[N].add(g),c[Y].add(g),h[T].add(M),h[N].add(M),h[Y].add(M))}let u=this.groups;u.length===0&&(u=[{start:0,count:n.length}]);for(let T=0,N=u.length;T<N;++T){const Y=u[T],D=Y.start,z=Y.count;for(let V=D,ee=D+z;V<ee;V+=3)v(n[V+0],n[V+1],n[V+2])}const p=new B,w=new B,b=new B,P=new B;function S(T){b.fromArray(s,T*3),P.copy(b);const N=c[T];p.copy(N),p.sub(b.multiplyScalar(b.dot(N))).normalize(),w.crossVectors(P,N);const D=w.dot(h[T])<0?-1:1;l[T*4]=p.x,l[T*4+1]=p.y,l[T*4+2]=p.z,l[T*4+3]=D}for(let T=0,N=u.length;T<N;++T){const Y=u[T],D=Y.start,z=Y.count;for(let V=D,ee=D+z;V<ee;V+=3)S(n[V+0]),S(n[V+1]),S(n[V+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,_=n.count;f<_;f++)n.setXYZ(f,0,0,0);const r=new B,s=new B,a=new B,o=new B,l=new B,c=new B,h=new B,d=new B;if(e)for(let f=0,_=e.count;f<_;f+=3){const y=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,y),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),o.fromBufferAttribute(n,y),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(y,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,_=t.count;f<_;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ct.fromBufferAttribute(e,t),ct.normalize(),e.setXYZ(t,ct.x,ct.y,ct.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,f=new c.constructor(l.length*h);let _=0,y=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?_=l[x]*o.data.stride+o.offset:_=l[x]*h;for(let g=0;g<h;g++)f[y++]=c[_++]}return new Qt(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new mn,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){const f=c[h],_=e(f,n);l.push(_)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const _=c[d];h.push(_.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],d=s[c];for(let f=0,_=d.length;f<_;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wl=new ht,Gn=new Wh,zr=new gs,jl=new B,xi=new B,wi=new B,Si=new B,la=new B,Hr=new B,Gr=new We,Vr=new We,Wr=new We,$l=new B,ql=new B,Xl=new B,jr=new B,$r=new B;class An extends At{constructor(e=new mn,t=new qh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Hr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],d=s[l];h!==0&&(la.fromBufferAttribute(d,e),a?Hr.addScaledVector(la,h):Hr.addScaledVector(la.sub(t),h))}t.add(Hr)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),zr.copy(n.boundingSphere),zr.applyMatrix4(s),Gn.copy(e.ray).recast(e.near),!(zr.containsPoint(Gn.origin)===!1&&(Gn.intersectSphere(zr,jl)===null||Gn.origin.distanceToSquared(jl)>(e.far-e.near)**2))&&(Wl.copy(s).invert(),Gn.copy(e.ray).applyMatrix4(Wl),!(n.boundingBox!==null&&Gn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Gn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,f=s.groups,_=s.drawRange;if(o!==null)if(Array.isArray(a))for(let y=0,x=f.length;y<x;y++){const m=f[y],g=a[m.materialIndex],M=Math.max(m.start,_.start),v=Math.min(o.count,Math.min(m.start+m.count,_.start+_.count));for(let u=M,p=v;u<p;u+=3){const w=o.getX(u),b=o.getX(u+1),P=o.getX(u+2);r=qr(this,g,e,n,c,h,d,w,b,P),r&&(r.faceIndex=Math.floor(u/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const y=Math.max(0,_.start),x=Math.min(o.count,_.start+_.count);for(let m=y,g=x;m<g;m+=3){const M=o.getX(m),v=o.getX(m+1),u=o.getX(m+2);r=qr(this,a,e,n,c,h,d,M,v,u),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let y=0,x=f.length;y<x;y++){const m=f[y],g=a[m.materialIndex],M=Math.max(m.start,_.start),v=Math.min(l.count,Math.min(m.start+m.count,_.start+_.count));for(let u=M,p=v;u<p;u+=3){const w=u,b=u+1,P=u+2;r=qr(this,g,e,n,c,h,d,w,b,P),r&&(r.faceIndex=Math.floor(u/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const y=Math.max(0,_.start),x=Math.min(l.count,_.start+_.count);for(let m=y,g=x;m<g;m+=3){const M=m,v=m+1,u=m+2;r=qr(this,a,e,n,c,h,d,M,v,u),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Ng(i,e,t,n,r,s,a,o){let l;if(e.side===Tt?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===In,o),l===null)return null;$r.copy(o),$r.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo($r);return c<t.near||c>t.far?null:{distance:c,point:$r.clone(),object:i}}function qr(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,xi),i.getVertexPosition(l,wi),i.getVertexPosition(c,Si);const h=Ng(i,e,t,n,xi,wi,Si,jr);if(h){r&&(Gr.fromBufferAttribute(r,o),Vr.fromBufferAttribute(r,l),Wr.fromBufferAttribute(r,c),h.uv=Xt.getInterpolation(jr,xi,wi,Si,Gr,Vr,Wr,new We)),s&&(Gr.fromBufferAttribute(s,o),Vr.fromBufferAttribute(s,l),Wr.fromBufferAttribute(s,c),h.uv1=Xt.getInterpolation(jr,xi,wi,Si,Gr,Vr,Wr,new We),h.uv2=h.uv1),a&&($l.fromBufferAttribute(a,o),ql.fromBufferAttribute(a,l),Xl.fromBufferAttribute(a,c),h.normal=Xt.getInterpolation(jr,xi,wi,Si,$l,ql,Xl,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new B,materialIndex:0};Xt.getNormal(xi,wi,Si,d.normal),h.face=d}return h}class vr extends mn{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],d=[];let f=0,_=0;y("z","y","x",-1,-1,n,t,e,a,s,0),y("z","y","x",1,-1,n,t,-e,a,s,1),y("x","z","y",1,1,e,n,t,r,a,2),y("x","z","y",1,-1,e,n,-t,r,a,3),y("x","y","z",1,-1,e,t,n,r,s,4),y("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new fn(c,3)),this.setAttribute("normal",new fn(h,3)),this.setAttribute("uv",new fn(d,2));function y(x,m,g,M,v,u,p,w,b,P,S){const T=u/b,N=p/P,Y=u/2,D=p/2,z=w/2,V=b+1,ee=P+1;let $=0,K=0;const J=new B;for(let Z=0;Z<ee;Z++){const F=Z*N-D;for(let X=0;X<V;X++){const le=X*T-Y;J[x]=le*M,J[m]=F*v,J[g]=z,c.push(J.x,J.y,J.z),J[x]=0,J[m]=0,J[g]=w>0?1:-1,h.push(J.x,J.y,J.z),d.push(X/b),d.push(1-Z/P),$+=1}}for(let Z=0;Z<P;Z++)for(let F=0;F<b;F++){const X=f+F+V*Z,le=f+F+V*(Z+1),ce=f+(F+1)+V*(Z+1),he=f+(F+1)+V*Z;l.push(X,le,he),l.push(le,ce,he),K+=6}o.addGroup(_,K,S),_+=K,f+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function wt(i){const e={};for(let t=0;t<i.length;t++){const n=Fi(i[t]);for(const r in n)e[r]=n[r]}return e}function Fg(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Yh(i){return i.getRenderTarget()===null?i.outputColorSpace:en}const kg={clone:Fi,merge:wt};var Bg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ri extends _r{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bg,this.fragmentShader=zg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fi(e.uniforms),this.uniformsGroups=Fg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Jh extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=dn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class zt extends Jh{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ka*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(js*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ka*2*Math.atan(Math.tan(js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(js*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const bi=-90,Ei=1;class Hg extends At{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const r=new zt(bi,Ei,e,t);r.layers=this.layers,this.add(r);const s=new zt(bi,Ei,e,t);s.layers=this.layers,this.add(s);const a=new zt(bi,Ei,e,t);a.layers=this.layers,this.add(a);const o=new zt(bi,Ei,e,t);o.layers=this.layers,this.add(o);const l=new zt(bi,Ei,e,t);l.layers=this.layers,this.add(l);const c=new zt(bi,Ei,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===dn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===cs)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,a,o,l,c]=this.children,h=e.getRenderTarget(),d=e.xr.enabled;e.xr.enabled=!1;const f=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=f,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(h),e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class Zh extends Dt{constructor(e,t,n,r,s,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Di,super(e,t,n,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Gg extends ii{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(ir("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ti?Ue:ni),this.texture=new Zh(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Bt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new vr(5,5,5),s=new ri({name:"CubemapFromEquirect",uniforms:Fi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Tt,blending:Pn});s.uniforms.tEquirect.value=t;const a=new An(r,s),o=t.minFilter;return t.minFilter===hr&&(t.minFilter=Bt),new Hg(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const ca=new B,Vg=new B,Wg=new Ne;class $n{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=ca.subVectors(n,t).cross(Vg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ca),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Wg.getNormalMatrix(e),r=this.coplanarPoint(ca).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vn=new gs,Xr=new B;class Qh{constructor(e=new $n,t=new $n,n=new $n,r=new $n,s=new $n,a=new $n){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=dn){const n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],h=r[5],d=r[6],f=r[7],_=r[8],y=r[9],x=r[10],m=r[11],g=r[12],M=r[13],v=r[14],u=r[15];if(n[0].setComponents(l-s,f-c,m-_,u-g).normalize(),n[1].setComponents(l+s,f+c,m+_,u+g).normalize(),n[2].setComponents(l+a,f+h,m+y,u+M).normalize(),n[3].setComponents(l-a,f-h,m-y,u-M).normalize(),n[4].setComponents(l-o,f-d,m-x,u-v).normalize(),t===dn)n[5].setComponents(l+o,f+d,m+x,u+v).normalize();else if(t===cs)n[5].setComponents(o,d,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vn)}intersectsSprite(e){return Vn.center.set(0,0,0),Vn.radius=.7071067811865476,Vn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Xr.x=r.normal.x>0?e.max.x:e.min.x,Xr.y=r.normal.y>0?e.max.y:e.min.y,Xr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Xr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function eu(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function jg(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,h){const d=c.array,f=c.usage,_=i.createBuffer();i.bindBuffer(h,_),i.bufferData(h,d,f),c.onUploadCallback();let y;if(d instanceof Float32Array)y=i.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)y=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=i.SHORT;else if(d instanceof Uint32Array)y=i.UNSIGNED_INT;else if(d instanceof Int32Array)y=i.INT;else if(d instanceof Int8Array)y=i.BYTE;else if(d instanceof Uint8Array)y=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,d){const f=h.array,_=h.updateRange;i.bindBuffer(d,c),_.count===-1?i.bufferSubData(d,0,f):(t?i.bufferSubData(d,_.offset*f.BYTES_PER_ELEMENT,f,_.offset,_.count):i.bufferSubData(d,_.offset*f.BYTES_PER_ELEMENT,f.subarray(_.offset,_.offset+_.count)),_.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d===void 0?n.set(c,r(c,h)):d.version<c.version&&(s(d.buffer,c,h),d.version=c.version)}return{get:a,remove:o,update:l}}class so extends mn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,h=l+1,d=e/o,f=t/l,_=[],y=[],x=[],m=[];for(let g=0;g<h;g++){const M=g*f-a;for(let v=0;v<c;v++){const u=v*d-s;y.push(u,-M,0),x.push(0,0,1),m.push(v/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let M=0;M<o;M++){const v=M+c*g,u=M+c*(g+1),p=M+1+c*(g+1),w=M+1+c*g;_.push(v,u,w),_.push(u,p,w)}this.setIndex(_),this.setAttribute("position",new fn(y,3)),this.setAttribute("normal",new fn(x,3)),this.setAttribute("uv",new fn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new so(e.width,e.height,e.widthSegments,e.heightSegments)}}var $g=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Xg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yg=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Jg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Qg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,e_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,t_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,n_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,i_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,r_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,s_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,a_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,o_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,l_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,c_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,h_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,u_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,d_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,f_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,p_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,m_=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,g_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,__=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,v_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,y_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,x_="gl_FragColor = linearToOutputTexel( gl_FragColor );",w_=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,S_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,b_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,E_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,M_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,T_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,A_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,R_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,P_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,C_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,L_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,I_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,U_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,D_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,O_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,N_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,F_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,k_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,B_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,z_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,H_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,G_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,V_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,W_=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,j_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,q_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,X_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,K_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Y_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,J_=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,Z_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Q_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ev=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,iv=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,sv=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,av=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,ov=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,lv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,fv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,pv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_v=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,yv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ev=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Tv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Av=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Rv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Pv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Lv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Iv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Uv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ov=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Nv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,kv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Bv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Gv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$v=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kv=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Yv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Jv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Zv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Qv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,e0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,n0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,i0=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,r0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,l0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,h0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,u0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,d0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,p0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,g0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,v0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,y0=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,x0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,w0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,S0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ie={alphahash_fragment:$g,alphahash_pars_fragment:qg,alphamap_fragment:Xg,alphamap_pars_fragment:Kg,alphatest_fragment:Yg,alphatest_pars_fragment:Jg,aomap_fragment:Zg,aomap_pars_fragment:Qg,begin_vertex:e_,beginnormal_vertex:t_,bsdfs:n_,iridescence_fragment:i_,bumpmap_pars_fragment:r_,clipping_planes_fragment:s_,clipping_planes_pars_fragment:a_,clipping_planes_pars_vertex:o_,clipping_planes_vertex:l_,color_fragment:c_,color_pars_fragment:h_,color_pars_vertex:u_,color_vertex:d_,common:f_,cube_uv_reflection_fragment:p_,defaultnormal_vertex:m_,displacementmap_pars_vertex:g_,displacementmap_vertex:__,emissivemap_fragment:v_,emissivemap_pars_fragment:y_,colorspace_fragment:x_,colorspace_pars_fragment:w_,envmap_fragment:S_,envmap_common_pars_fragment:b_,envmap_pars_fragment:E_,envmap_pars_vertex:M_,envmap_physical_pars_fragment:F_,envmap_vertex:T_,fog_vertex:A_,fog_pars_vertex:R_,fog_fragment:P_,fog_pars_fragment:C_,gradientmap_pars_fragment:L_,lightmap_fragment:I_,lightmap_pars_fragment:U_,lights_lambert_fragment:D_,lights_lambert_pars_fragment:O_,lights_pars_begin:N_,lights_toon_fragment:k_,lights_toon_pars_fragment:B_,lights_phong_fragment:z_,lights_phong_pars_fragment:H_,lights_physical_fragment:G_,lights_physical_pars_fragment:V_,lights_fragment_begin:W_,lights_fragment_maps:j_,lights_fragment_end:$_,logdepthbuf_fragment:q_,logdepthbuf_pars_fragment:X_,logdepthbuf_pars_vertex:K_,logdepthbuf_vertex:Y_,map_fragment:J_,map_pars_fragment:Z_,map_particle_fragment:Q_,map_particle_pars_fragment:ev,metalnessmap_fragment:tv,metalnessmap_pars_fragment:nv,morphcolor_vertex:iv,morphnormal_vertex:rv,morphtarget_pars_vertex:sv,morphtarget_vertex:av,normal_fragment_begin:ov,normal_fragment_maps:lv,normal_pars_fragment:cv,normal_pars_vertex:hv,normal_vertex:uv,normalmap_pars_fragment:dv,clearcoat_normal_fragment_begin:fv,clearcoat_normal_fragment_maps:pv,clearcoat_pars_fragment:mv,iridescence_pars_fragment:gv,opaque_fragment:_v,packing:vv,premultiplied_alpha_fragment:yv,project_vertex:xv,dithering_fragment:wv,dithering_pars_fragment:Sv,roughnessmap_fragment:bv,roughnessmap_pars_fragment:Ev,shadowmap_pars_fragment:Mv,shadowmap_pars_vertex:Tv,shadowmap_vertex:Av,shadowmask_pars_fragment:Rv,skinbase_vertex:Pv,skinning_pars_vertex:Cv,skinning_vertex:Lv,skinnormal_vertex:Iv,specularmap_fragment:Uv,specularmap_pars_fragment:Dv,tonemapping_fragment:Ov,tonemapping_pars_fragment:Nv,transmission_fragment:Fv,transmission_pars_fragment:kv,uv_pars_fragment:Bv,uv_pars_vertex:zv,uv_vertex:Hv,worldpos_vertex:Gv,background_vert:Vv,background_frag:Wv,backgroundCube_vert:jv,backgroundCube_frag:$v,cube_vert:qv,cube_frag:Xv,depth_vert:Kv,depth_frag:Yv,distanceRGBA_vert:Jv,distanceRGBA_frag:Zv,equirect_vert:Qv,equirect_frag:e0,linedashed_vert:t0,linedashed_frag:n0,meshbasic_vert:i0,meshbasic_frag:r0,meshlambert_vert:s0,meshlambert_frag:a0,meshmatcap_vert:o0,meshmatcap_frag:l0,meshnormal_vert:c0,meshnormal_frag:h0,meshphong_vert:u0,meshphong_frag:d0,meshphysical_vert:f0,meshphysical_frag:p0,meshtoon_vert:m0,meshtoon_frag:g0,points_vert:_0,points_frag:v0,shadow_vert:y0,shadow_frag:x0,sprite_vert:w0,sprite_frag:S0},se={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},Zt={basic:{uniforms:wt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:wt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:wt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:wt([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:wt([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:wt([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:wt([se.points,se.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:wt([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:wt([se.common,se.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:wt([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:wt([se.sprite,se.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:wt([se.common,se.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:wt([se.lights,se.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};Zt.physical={uniforms:wt([Zt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};const Kr={r:0,b:0,g:0};function b0(i,e,t,n,r,s,a){const o=new qe(0);let l=s===!0?0:1,c,h,d=null,f=0,_=null;function y(m,g){let M=!1,v=g.isScene===!0?g.background:null;switch(v&&v.isTexture&&(v=(g.backgroundBlurriness>0?t:e).get(v)),v===null?x(o,l):v&&v.isColor&&(x(v,1),M=!0),i.xr.getEnvironmentBlendMode()){case"opaque":M=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,a),M=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,a),M=!0;break}(i.autoClear||M)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===ms)?(h===void 0&&(h=new An(new vr(1,1,1),new ri({name:"BackgroundCubeMaterial",uniforms:Fi(Zt.backgroundCube.uniforms),vertexShader:Zt.backgroundCube.vertexShader,fragmentShader:Zt.backgroundCube.fragmentShader,side:Tt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,b,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,h.material.toneMapped=v.colorSpace!==Ue,(d!==v||f!==v.version||_!==i.toneMapping)&&(h.material.needsUpdate=!0,d=v,f=v.version,_=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new An(new so(2,2),new ri({name:"BackgroundMaterial",uniforms:Fi(Zt.background.uniforms),vertexShader:Zt.background.vertexShader,fragmentShader:Zt.background.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=v.colorSpace!==Ue,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||f!==v.version||_!==i.toneMapping)&&(c.material.needsUpdate=!0,d=v,f=v.version,_=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function x(m,g){m.getRGB(Kr,Yh(i)),n.buffers.color.setClear(Kr.r,Kr.g,Kr.b,g,a)}return{getClearColor:function(){return o},setClearColor:function(m,g=1){o.set(m),l=g,x(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(o,l)},render:y}}function E0(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=m(null);let c=l,h=!1;function d(z,V,ee,$,K){let J=!1;if(a){const Z=x($,ee,V);c!==Z&&(c=Z,_(c.object)),J=g(z,$,ee,K),J&&M(z,$,ee,K)}else{const Z=V.wireframe===!0;(c.geometry!==$.id||c.program!==ee.id||c.wireframe!==Z)&&(c.geometry=$.id,c.program=ee.id,c.wireframe=Z,J=!0)}K!==null&&t.update(K,i.ELEMENT_ARRAY_BUFFER),(J||h)&&(h=!1,P(z,V,ee,$),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function f(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function _(z){return n.isWebGL2?i.bindVertexArray(z):s.bindVertexArrayOES(z)}function y(z){return n.isWebGL2?i.deleteVertexArray(z):s.deleteVertexArrayOES(z)}function x(z,V,ee){const $=ee.wireframe===!0;let K=o[z.id];K===void 0&&(K={},o[z.id]=K);let J=K[V.id];J===void 0&&(J={},K[V.id]=J);let Z=J[$];return Z===void 0&&(Z=m(f()),J[$]=Z),Z}function m(z){const V=[],ee=[],$=[];for(let K=0;K<r;K++)V[K]=0,ee[K]=0,$[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:ee,attributeDivisors:$,object:z,attributes:{},index:null}}function g(z,V,ee,$){const K=c.attributes,J=V.attributes;let Z=0;const F=ee.getAttributes();for(const X in F)if(F[X].location>=0){const ce=K[X];let he=J[X];if(he===void 0&&(X==="instanceMatrix"&&z.instanceMatrix&&(he=z.instanceMatrix),X==="instanceColor"&&z.instanceColor&&(he=z.instanceColor)),ce===void 0||ce.attribute!==he||he&&ce.data!==he.data)return!0;Z++}return c.attributesNum!==Z||c.index!==$}function M(z,V,ee,$){const K={},J=V.attributes;let Z=0;const F=ee.getAttributes();for(const X in F)if(F[X].location>=0){let ce=J[X];ce===void 0&&(X==="instanceMatrix"&&z.instanceMatrix&&(ce=z.instanceMatrix),X==="instanceColor"&&z.instanceColor&&(ce=z.instanceColor));const he={};he.attribute=ce,ce&&ce.data&&(he.data=ce.data),K[X]=he,Z++}c.attributes=K,c.attributesNum=Z,c.index=$}function v(){const z=c.newAttributes;for(let V=0,ee=z.length;V<ee;V++)z[V]=0}function u(z){p(z,0)}function p(z,V){const ee=c.newAttributes,$=c.enabledAttributes,K=c.attributeDivisors;ee[z]=1,$[z]===0&&(i.enableVertexAttribArray(z),$[z]=1),K[z]!==V&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](z,V),K[z]=V)}function w(){const z=c.newAttributes,V=c.enabledAttributes;for(let ee=0,$=V.length;ee<$;ee++)V[ee]!==z[ee]&&(i.disableVertexAttribArray(ee),V[ee]=0)}function b(z,V,ee,$,K,J,Z){Z===!0?i.vertexAttribIPointer(z,V,ee,K,J):i.vertexAttribPointer(z,V,ee,$,K,J)}function P(z,V,ee,$){if(n.isWebGL2===!1&&(z.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const K=$.attributes,J=ee.getAttributes(),Z=V.defaultAttributeValues;for(const F in J){const X=J[F];if(X.location>=0){let le=K[F];if(le===void 0&&(F==="instanceMatrix"&&z.instanceMatrix&&(le=z.instanceMatrix),F==="instanceColor"&&z.instanceColor&&(le=z.instanceColor)),le!==void 0){const ce=le.normalized,he=le.itemSize,we=t.get(le);if(we===void 0)continue;const Pe=we.buffer,be=we.type,Ge=we.bytesPerElement,bt=n.isWebGL2===!0&&(be===i.INT||be===i.UNSIGNED_INT||le.gpuType===Ih);if(le.isInterleavedBufferAttribute){const De=le.data,O=De.stride,ft=le.offset;if(De.isInstancedInterleavedBuffer){for(let Ee=0;Ee<X.locationSize;Ee++)p(X.location+Ee,De.meshPerAttribute);z.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=De.meshPerAttribute*De.count)}else for(let Ee=0;Ee<X.locationSize;Ee++)u(X.location+Ee);i.bindBuffer(i.ARRAY_BUFFER,Pe);for(let Ee=0;Ee<X.locationSize;Ee++)b(X.location+Ee,he/X.locationSize,be,ce,O*Ge,(ft+he/X.locationSize*Ee)*Ge,bt)}else{if(le.isInstancedBufferAttribute){for(let De=0;De<X.locationSize;De++)p(X.location+De,le.meshPerAttribute);z.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let De=0;De<X.locationSize;De++)u(X.location+De);i.bindBuffer(i.ARRAY_BUFFER,Pe);for(let De=0;De<X.locationSize;De++)b(X.location+De,he/X.locationSize,be,ce,he*Ge,he/X.locationSize*De*Ge,bt)}}else if(Z!==void 0){const ce=Z[F];if(ce!==void 0)switch(ce.length){case 2:i.vertexAttrib2fv(X.location,ce);break;case 3:i.vertexAttrib3fv(X.location,ce);break;case 4:i.vertexAttrib4fv(X.location,ce);break;default:i.vertexAttrib1fv(X.location,ce)}}}}w()}function S(){Y();for(const z in o){const V=o[z];for(const ee in V){const $=V[ee];for(const K in $)y($[K].object),delete $[K];delete V[ee]}delete o[z]}}function T(z){if(o[z.id]===void 0)return;const V=o[z.id];for(const ee in V){const $=V[ee];for(const K in $)y($[K].object),delete $[K];delete V[ee]}delete o[z.id]}function N(z){for(const V in o){const ee=o[V];if(ee[z.id]===void 0)continue;const $=ee[z.id];for(const K in $)y($[K].object),delete $[K];delete ee[z.id]}}function Y(){D(),h=!0,c!==l&&(c=l,_(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Y,resetDefaultState:D,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfProgram:N,initAttributes:v,enableAttribute:u,disableUnusedAttributes:w}}function M0(i,e,t,n){const r=n.isWebGL2;let s;function a(c){s=c}function o(c,h){i.drawArrays(s,c,h),t.update(h,s,1)}function l(c,h,d){if(d===0)return;let f,_;if(r)f=i,_="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[_](s,c,h,d),t.update(h,s,d)}this.setMode=a,this.render=o,this.renderInstances=l}function T0(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),y=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),g=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,u=a||e.has("OES_texture_float"),p=v&&u,w=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:_,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:m,maxVaryings:g,maxFragmentUniforms:M,vertexTextures:v,floatFragmentTextures:u,floatVertexTextures:p,maxSamples:w}}function A0(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new $n,o=new Ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const _=d.length!==0||f||n!==0||r;return r=f,n=d.length,_},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,_){const y=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,g=i.get(d);if(!r||y===null||y.length===0||s&&!m)s?h(null):c();else{const M=s?0:n,v=M*4;let u=g.clippingState||null;l.value=u,u=h(y,f,v,_);for(let p=0;p!==v;++p)u[p]=t[p];g.clippingState=u,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,_,y){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=l.value,y!==!0||m===null){const g=_+x*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<g)&&(m=new Float32Array(g));for(let v=0,u=_;v!==x;++v,u+=4)a.copy(d[v]).applyMatrix4(M,o),a.normal.toArray(m,u),m[u+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function R0(i){let e=new WeakMap;function t(a,o){return o===Ua?a.mapping=Di:o===Da&&(a.mapping=Oi),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Ua||o===Da)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Gg(l.height/2);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class P0 extends Jh{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Pi=4,Kl=[.125,.215,.35,.446,.526,.582],Jn=20,ha=new P0,Yl=new qe;let ua=null;const qn=(1+Math.sqrt(5))/2,Mi=1/qn,Jl=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,qn,Mi),new B(0,qn,-Mi),new B(Mi,0,qn),new B(-Mi,0,qn),new B(qn,Mi,0),new B(-qn,Mi,0)];class Zl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){ua=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ec(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ua),e.scissorTest=!1,Yr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Di||e.mapping===Oi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ua=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Bt,minFilter:Bt,generateMipmaps:!1,type:ur,format:Yt,colorSpace:en,depthBuffer:!1},r=Ql(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ql(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=C0(s)),this._blurMaterial=L0(s,e,t)}return r}_compileMaterial(e){const t=new An(this._lodPlanes[0],e);this._renderer.compile(t,ha)}_sceneToCubeUV(e,t,n,r){const o=new zt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Yl),h.toneMapping=Cn,h.autoClear=!1;const _=new qh({name:"PMREM.Background",side:Tt,depthWrite:!1,depthTest:!1}),y=new An(new vr,_);let x=!1;const m=e.background;m?m.isColor&&(_.color.copy(m),e.background=null,x=!0):(_.color.copy(Yl),x=!0);for(let g=0;g<6;g++){const M=g%3;M===0?(o.up.set(0,l[g],0),o.lookAt(c[g],0,0)):M===1?(o.up.set(0,0,l[g]),o.lookAt(0,c[g],0)):(o.up.set(0,l[g],0),o.lookAt(0,0,c[g]));const v=this._cubeSize;Yr(r,M*v,g>2?v:0,v,v),h.setRenderTarget(r),x&&h.render(y,o),h.render(e,o)}y.geometry.dispose(),y.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Di||e.mapping===Oi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=tc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ec());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new An(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Yr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,ha)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Jl[(r-1)%Jl.length];this._blur(e,r-1,r,s,a)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new An(this._lodPlanes[r],c),f=c.uniforms,_=this._sizeLods[n]-1,y=isFinite(s)?Math.PI/(2*_):2*Math.PI/(2*Jn-1),x=s/y,m=isFinite(s)?1+Math.floor(h*x):Jn;m>Jn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Jn}`);const g=[];let M=0;for(let b=0;b<Jn;++b){const P=b/x,S=Math.exp(-P*P/2);g.push(S),b===0?M+=S:b<m&&(M+=2*S)}for(let b=0;b<g.length;b++)g[b]=g[b]/M;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=g,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:v}=this;f.dTheta.value=y,f.mipInt.value=v-n;const u=this._sizeLods[r],p=3*u*(r>v-Pi?r-v+Pi:0),w=4*(this._cubeSize-u);Yr(t,p,w,3*u,2*u),l.setRenderTarget(t),l.render(d,ha)}}function C0(i){const e=[],t=[],n=[];let r=i;const s=i-Pi+1+Kl.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>i-Pi?l=Kl[a-i+Pi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],_=6,y=6,x=3,m=2,g=1,M=new Float32Array(x*y*_),v=new Float32Array(m*y*_),u=new Float32Array(g*y*_);for(let w=0;w<_;w++){const b=w%3*2/3-1,P=w>2?0:-1,S=[b,P,0,b+2/3,P,0,b+2/3,P+1,0,b,P,0,b+2/3,P+1,0,b,P+1,0];M.set(S,x*y*w),v.set(f,m*y*w);const T=[w,w,w,w,w,w];u.set(T,g*y*w)}const p=new mn;p.setAttribute("position",new Qt(M,x)),p.setAttribute("uv",new Qt(v,m)),p.setAttribute("faceIndex",new Qt(u,g)),e.push(p),r>Pi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ql(i,e,t){const n=new ii(i,e,t);return n.texture.mapping=ms,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Yr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function L0(i,e,t){const n=new Float32Array(Jn),r=new B(0,1,0);return new ri({name:"SphericalGaussianBlur",defines:{n:Jn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ao(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function ec(){return new ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ao(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function tc(){return new ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ao(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function ao(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function I0(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ua||l===Da,h=l===Di||l===Oi;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return t===null&&(t=new Zl(i)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{const d=o.image;if(c&&d&&d.height>0||h&&d&&r(d)){t===null&&(t=new Zl(i));const f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",s),f.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function U0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function D0(i,e,t,n){const r={},s=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const y in f.attributes)e.remove(f.attributes[y]);for(const y in f.morphAttributes){const x=f.morphAttributes[y];for(let m=0,g=x.length;m<g;m++)e.remove(x[m])}f.removeEventListener("dispose",a),delete r[f.id];const _=s.get(f);_&&(e.remove(_),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const y in f)e.update(f[y],i.ARRAY_BUFFER);const _=d.morphAttributes;for(const y in _){const x=_[y];for(let m=0,g=x.length;m<g;m++)e.update(x[m],i.ARRAY_BUFFER)}}function c(d){const f=[],_=d.index,y=d.attributes.position;let x=0;if(_!==null){const M=_.array;x=_.version;for(let v=0,u=M.length;v<u;v+=3){const p=M[v+0],w=M[v+1],b=M[v+2];f.push(p,w,w,b,b,p)}}else if(y!==void 0){const M=y.array;x=y.version;for(let v=0,u=M.length/3-1;v<u;v+=3){const p=v+0,w=v+1,b=v+2;f.push(p,w,w,b,b,p)}}else return;const m=new(zh(f)?Kh:Xh)(f,1);m.version=x;const g=s.get(d);g&&e.remove(g),s.set(d,m)}function h(d){const f=s.get(d);if(f){const _=d.index;_!==null&&f.version<_.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function O0(i,e,t,n){const r=n.isWebGL2;let s;function a(f){s=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function h(f,_){i.drawElements(s,_,o,f*l),t.update(_,s,1)}function d(f,_,y){if(y===0)return;let x,m;if(r)x=i,m="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[m](s,_,o,f*l,y),t.update(_,s,y)}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=d}function N0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function F0(i,e){return i[0]-e[0]}function k0(i,e){return Math.abs(e[1])-Math.abs(i[1])}function B0(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,a=new dt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,d){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,y=_!==void 0?_.length:0;let x=s.get(h);if(x===void 0||x.count!==y){let z=function(){Y.dispose(),s.delete(h),h.removeEventListener("dispose",z)};x!==void 0&&x.texture.dispose();const M=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,u=h.morphAttributes.color!==void 0,p=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],b=h.morphAttributes.color||[];let P=0;M===!0&&(P=1),v===!0&&(P=2),u===!0&&(P=3);let S=h.attributes.position.count*P,T=1;S>e.maxTextureSize&&(T=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const N=new Float32Array(S*T*4*y),Y=new Vh(N,S,T,y);Y.type=Tn,Y.needsUpdate=!0;const D=P*4;for(let V=0;V<y;V++){const ee=p[V],$=w[V],K=b[V],J=S*T*4*V;for(let Z=0;Z<ee.count;Z++){const F=Z*D;M===!0&&(a.fromBufferAttribute(ee,Z),N[J+F+0]=a.x,N[J+F+1]=a.y,N[J+F+2]=a.z,N[J+F+3]=0),v===!0&&(a.fromBufferAttribute($,Z),N[J+F+4]=a.x,N[J+F+5]=a.y,N[J+F+6]=a.z,N[J+F+7]=0),u===!0&&(a.fromBufferAttribute(K,Z),N[J+F+8]=a.x,N[J+F+9]=a.y,N[J+F+10]=a.z,N[J+F+11]=K.itemSize===4?a.w:1)}}x={count:y,texture:Y,size:new We(S,T)},s.set(h,x),h.addEventListener("dispose",z)}let m=0;for(let M=0;M<f.length;M++)m+=f[M];const g=h.morphTargetsRelative?1:1-m;d.getUniforms().setValue(i,"morphTargetBaseInfluence",g),d.getUniforms().setValue(i,"morphTargetInfluences",f),d.getUniforms().setValue(i,"morphTargetsTexture",x.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}else{const _=f===void 0?0:f.length;let y=n[h.id];if(y===void 0||y.length!==_){y=[];for(let v=0;v<_;v++)y[v]=[v,0];n[h.id]=y}for(let v=0;v<_;v++){const u=y[v];u[0]=v,u[1]=f[v]}y.sort(k0);for(let v=0;v<8;v++)v<_&&y[v][1]?(o[v][0]=y[v][0],o[v][1]=y[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(F0);const x=h.morphAttributes.position,m=h.morphAttributes.normal;let g=0;for(let v=0;v<8;v++){const u=o[v],p=u[0],w=u[1];p!==Number.MAX_SAFE_INTEGER&&w?(x&&h.getAttribute("morphTarget"+v)!==x[p]&&h.setAttribute("morphTarget"+v,x[p]),m&&h.getAttribute("morphNormal"+v)!==m[p]&&h.setAttribute("morphNormal"+v,m[p]),r[v]=w,g+=w):(x&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),m&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),r[v]=0)}const M=h.morphTargetsRelative?1:1-g;d.getUniforms().setValue(i,"morphTargetBaseInfluence",M),d.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function z0(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,d=e.get(l,h);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const tu=new Dt,nu=new Vh,iu=new Tg,ru=new Zh,nc=[],ic=[],rc=new Float32Array(16),sc=new Float32Array(9),ac=new Float32Array(4);function Wi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=nc[r];if(s===void 0&&(s=new Float32Array(r),nc[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function ot(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function lt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function vs(i,e){let t=ic[e];t===void 0&&(t=new Int32Array(e),ic[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function H0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function G0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;i.uniform2fv(this.addr,e),lt(t,e)}}function V0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ot(t,e))return;i.uniform3fv(this.addr,e),lt(t,e)}}function W0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;i.uniform4fv(this.addr,e),lt(t,e)}}function j0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,n))return;ac.set(n),i.uniformMatrix2fv(this.addr,!1,ac),lt(t,n)}}function $0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,n))return;sc.set(n),i.uniformMatrix3fv(this.addr,!1,sc),lt(t,n)}}function q0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),lt(t,e)}else{if(ot(t,n))return;rc.set(n),i.uniformMatrix4fv(this.addr,!1,rc),lt(t,n)}}function X0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function K0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;i.uniform2iv(this.addr,e),lt(t,e)}}function Y0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ot(t,e))return;i.uniform3iv(this.addr,e),lt(t,e)}}function J0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;i.uniform4iv(this.addr,e),lt(t,e)}}function Z0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Q0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;i.uniform2uiv(this.addr,e),lt(t,e)}}function ey(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ot(t,e))return;i.uniform3uiv(this.addr,e),lt(t,e)}}function ty(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;i.uniform4uiv(this.addr,e),lt(t,e)}}function ny(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||tu,r)}function iy(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||iu,r)}function ry(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||ru,r)}function sy(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||nu,r)}function ay(i){switch(i){case 5126:return H0;case 35664:return G0;case 35665:return V0;case 35666:return W0;case 35674:return j0;case 35675:return $0;case 35676:return q0;case 5124:case 35670:return X0;case 35667:case 35671:return K0;case 35668:case 35672:return Y0;case 35669:case 35673:return J0;case 5125:return Z0;case 36294:return Q0;case 36295:return ey;case 36296:return ty;case 35678:case 36198:case 36298:case 36306:case 35682:return ny;case 35679:case 36299:case 36307:return iy;case 35680:case 36300:case 36308:case 36293:return ry;case 36289:case 36303:case 36311:case 36292:return sy}}function oy(i,e){i.uniform1fv(this.addr,e)}function ly(i,e){const t=Wi(e,this.size,2);i.uniform2fv(this.addr,t)}function cy(i,e){const t=Wi(e,this.size,3);i.uniform3fv(this.addr,t)}function hy(i,e){const t=Wi(e,this.size,4);i.uniform4fv(this.addr,t)}function uy(i,e){const t=Wi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function dy(i,e){const t=Wi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function fy(i,e){const t=Wi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function py(i,e){i.uniform1iv(this.addr,e)}function my(i,e){i.uniform2iv(this.addr,e)}function gy(i,e){i.uniform3iv(this.addr,e)}function _y(i,e){i.uniform4iv(this.addr,e)}function vy(i,e){i.uniform1uiv(this.addr,e)}function yy(i,e){i.uniform2uiv(this.addr,e)}function xy(i,e){i.uniform3uiv(this.addr,e)}function wy(i,e){i.uniform4uiv(this.addr,e)}function Sy(i,e,t){const n=this.cache,r=e.length,s=vs(t,r);ot(n,s)||(i.uniform1iv(this.addr,s),lt(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||tu,s[a])}function by(i,e,t){const n=this.cache,r=e.length,s=vs(t,r);ot(n,s)||(i.uniform1iv(this.addr,s),lt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||iu,s[a])}function Ey(i,e,t){const n=this.cache,r=e.length,s=vs(t,r);ot(n,s)||(i.uniform1iv(this.addr,s),lt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||ru,s[a])}function My(i,e,t){const n=this.cache,r=e.length,s=vs(t,r);ot(n,s)||(i.uniform1iv(this.addr,s),lt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||nu,s[a])}function Ty(i){switch(i){case 5126:return oy;case 35664:return ly;case 35665:return cy;case 35666:return hy;case 35674:return uy;case 35675:return dy;case 35676:return fy;case 5124:case 35670:return py;case 35667:case 35671:return my;case 35668:case 35672:return gy;case 35669:case 35673:return _y;case 5125:return vy;case 36294:return yy;case 36295:return xy;case 36296:return wy;case 35678:case 36198:case 36298:case 36306:case 35682:return Sy;case 35679:case 36299:case 36307:return by;case 35680:case 36300:case 36308:case 36293:return Ey;case 36289:case 36303:case 36311:case 36292:return My}}class Ay{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=ay(t.type)}}class Ry{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Ty(t.type)}}class Py{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const da=/(\w+)(\])?(\[|\.)?/g;function oc(i,e){i.seq.push(e),i.map[e.id]=e}function Cy(i,e,t){const n=i.name,r=n.length;for(da.lastIndex=0;;){const s=da.exec(n),a=da.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){oc(t,c===void 0?new Ay(o,i,e):new Ry(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new Py(o),oc(t,d)),t=d}}}class es{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Cy(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function lc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let Ly=0;function Iy(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Uy(i){switch(i){case en:return["Linear","( value )"];case Ue:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),["Linear","( value )"]}}function cc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Iy(i.getShaderSource(e),a)}else return r}function Dy(i,e){const t=Uy(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Oy(i,e){let t;switch(e){case Gm:t="Linear";break;case Vm:t="Reinhard";break;case Wm:t="OptimizedCineon";break;case jm:t="ACESFilmic";break;case $m:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Ny(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(er).join(`
`)}function Fy(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ky(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function er(i){return i!==""}function hc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function uc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const By=/^[ \t]*#include +<([\w\d./]+)>/gm;function za(i){return i.replace(By,Hy)}const zy=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Hy(i,e){let t=Ie[e];if(t===void 0){const n=zy.get(e);if(n!==void 0)t=Ie[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return za(t)}const Gy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dc(i){return i.replace(Gy,Vy)}function Vy(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function fc(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Wy(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ah?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===xm?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===cn&&(e="SHADOWMAP_TYPE_VSM"),e}function jy(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Di:case Oi:e="ENVMAP_TYPE_CUBE";break;case ms:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $y(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Oi:e="ENVMAP_MODE_REFRACTION";break}return e}function qy(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ch:e="ENVMAP_BLENDING_MULTIPLY";break;case zm:e="ENVMAP_BLENDING_MIX";break;case Hm:e="ENVMAP_BLENDING_ADD";break}return e}function Xy(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Ky(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Wy(t),c=jy(t),h=$y(t),d=qy(t),f=Xy(t),_=t.isWebGL2?"":Ny(t),y=Fy(s),x=r.createProgram();let m,g,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(er).join(`
`),m.length>0&&(m+=`
`),g=[_,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(er).join(`
`),g.length>0&&(g+=`
`)):(m=[fc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(er).join(`
`),g=[_,fc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Cn?"#define TONE_MAPPING":"",t.toneMapping!==Cn?Ie.tonemapping_pars_fragment:"",t.toneMapping!==Cn?Oy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ie.colorspace_pars_fragment,Dy("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(er).join(`
`)),a=za(a),a=hc(a,t),a=uc(a,t),o=za(o),o=hc(o,t),o=uc(o,t),a=dc(a),o=dc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===Il?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Il?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const v=M+m+a,u=M+g+o,p=lc(r,r.VERTEX_SHADER,v),w=lc(r,r.FRAGMENT_SHADER,u);if(r.attachShader(x,p),r.attachShader(x,w),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x),i.debug.checkShaderErrors){const S=r.getProgramInfoLog(x).trim(),T=r.getShaderInfoLog(p).trim(),N=r.getShaderInfoLog(w).trim();let Y=!0,D=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,p,w);else{const z=cc(r,p,"vertex"),V=cc(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Program Info Log: `+S+`
`+z+`
`+V)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(T===""||N==="")&&(D=!1);D&&(this.diagnostics={runnable:Y,programLog:S,vertexShader:{log:T,prefix:m},fragmentShader:{log:N,prefix:g}})}r.deleteShader(p),r.deleteShader(w);let b;this.getUniforms=function(){return b===void 0&&(b=new es(r,x)),b};let P;return this.getAttributes=function(){return P===void 0&&(P=ky(r,x)),P},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ly++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=p,this.fragmentShader=w,this}let Yy=0;class Jy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Zy(e),t.set(e,n)),n}}class Zy{constructor(e){this.id=Yy++,this.code=e,this.usedTimes=0}}function Qy(i,e,t,n,r,s,a){const o=new jh,l=new Jy,c=[],h=r.isWebGL2,d=r.logarithmicDepthBuffer,f=r.vertexTextures;let _=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return S===0?"uv":`uv${S}`}function m(S,T,N,Y,D){const z=Y.fog,V=D.geometry,ee=S.isMeshStandardMaterial?Y.environment:null,$=(S.isMeshStandardMaterial?t:e).get(S.envMap||ee),K=$&&$.mapping===ms?$.image.height:null,J=y[S.type];S.precision!==null&&(_=r.getMaxPrecision(S.precision),_!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",_,"instead."));const Z=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,F=Z!==void 0?Z.length:0;let X=0;V.morphAttributes.position!==void 0&&(X=1),V.morphAttributes.normal!==void 0&&(X=2),V.morphAttributes.color!==void 0&&(X=3);let le,ce,he,we;if(J){const Xe=Zt[J];le=Xe.vertexShader,ce=Xe.fragmentShader}else le=S.vertexShader,ce=S.fragmentShader,l.update(S),he=l.getVertexShaderID(S),we=l.getFragmentShaderID(S);const Pe=i.getRenderTarget(),be=D.isInstancedMesh===!0,Ge=!!S.map,bt=!!S.matcap,De=!!$,O=!!S.aoMap,ft=!!S.lightMap,Ee=!!S.bumpMap,Ce=!!S.normalMap,Re=!!S.displacementMap,Ke=!!S.emissiveMap,ze=!!S.metalnessMap,Oe=!!S.roughnessMap,Ve=S.anisotropy>0,ut=S.clearcoat>0,pt=S.iridescence>0,R=S.sheen>0,E=S.transmission>0,k=Ve&&!!S.anisotropyMap,te=ut&&!!S.clearcoatMap,Q=ut&&!!S.clearcoatNormalMap,ne=ut&&!!S.clearcoatRoughnessMap,ge=pt&&!!S.iridescenceMap,ie=pt&&!!S.iridescenceThicknessMap,G=R&&!!S.sheenColorMap,ye=R&&!!S.sheenRoughnessMap,_e=!!S.specularMap,ve=!!S.specularColorMap,de=!!S.specularIntensityMap,fe=E&&!!S.transmissionMap,Fe=E&&!!S.thicknessMap,je=!!S.gradientMap,C=!!S.alphaMap,ae=S.alphaTest>0,H=!!S.alphaHash,re=!!S.extensions,oe=!!V.attributes.uv1,He=!!V.attributes.uv2,Ye=!!V.attributes.uv3;let tt=Cn;return S.toneMapped&&(Pe===null||Pe.isXRRenderTarget===!0)&&(tt=i.toneMapping),{isWebGL2:h,shaderID:J,shaderType:S.type,shaderName:S.name,vertexShader:le,fragmentShader:ce,defines:S.defines,customVertexShaderID:he,customFragmentShaderID:we,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:_,instancing:be,instancingColor:be&&D.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Pe===null?i.outputColorSpace:Pe.isXRRenderTarget===!0?Pe.texture.colorSpace:en,map:Ge,matcap:bt,envMap:De,envMapMode:De&&$.mapping,envMapCubeUVHeight:K,aoMap:O,lightMap:ft,bumpMap:Ee,normalMap:Ce,displacementMap:f&&Re,emissiveMap:Ke,normalMapObjectSpace:Ce&&S.normalMapType===ag,normalMapTangentSpace:Ce&&S.normalMapType===sg,metalnessMap:ze,roughnessMap:Oe,anisotropy:Ve,anisotropyMap:k,clearcoat:ut,clearcoatMap:te,clearcoatNormalMap:Q,clearcoatRoughnessMap:ne,iridescence:pt,iridescenceMap:ge,iridescenceThicknessMap:ie,sheen:R,sheenColorMap:G,sheenRoughnessMap:ye,specularMap:_e,specularColorMap:ve,specularIntensityMap:de,transmission:E,transmissionMap:fe,thicknessMap:Fe,gradientMap:je,opaque:S.transparent===!1&&S.blending===Li,alphaMap:C,alphaTest:ae,alphaHash:H,combine:S.combine,mapUv:Ge&&x(S.map.channel),aoMapUv:O&&x(S.aoMap.channel),lightMapUv:ft&&x(S.lightMap.channel),bumpMapUv:Ee&&x(S.bumpMap.channel),normalMapUv:Ce&&x(S.normalMap.channel),displacementMapUv:Re&&x(S.displacementMap.channel),emissiveMapUv:Ke&&x(S.emissiveMap.channel),metalnessMapUv:ze&&x(S.metalnessMap.channel),roughnessMapUv:Oe&&x(S.roughnessMap.channel),anisotropyMapUv:k&&x(S.anisotropyMap.channel),clearcoatMapUv:te&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:Q&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:G&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:ye&&x(S.sheenRoughnessMap.channel),specularMapUv:_e&&x(S.specularMap.channel),specularColorMapUv:ve&&x(S.specularColorMap.channel),specularIntensityMapUv:de&&x(S.specularIntensityMap.channel),transmissionMapUv:fe&&x(S.transmissionMap.channel),thicknessMapUv:Fe&&x(S.thicknessMap.channel),alphaMapUv:C&&x(S.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Ce||Ve),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,vertexUv1s:oe,vertexUv2s:He,vertexUv3s:Ye,pointsUvs:D.isPoints===!0&&!!V.attributes.uv&&(Ge||C),fog:!!z,useFog:S.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:D.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:X,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:tt,useLegacyLights:i._useLegacyLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===un,flipSided:S.side===Tt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:re&&S.extensions.derivatives===!0,extensionFragDepth:re&&S.extensions.fragDepth===!0,extensionDrawBuffers:re&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:re&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function g(S){const T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(const N in S.defines)T.push(N),T.push(S.defines[N]);return S.isRawShaderMaterial===!1&&(M(T,S),v(T,S),T.push(i.outputColorSpace)),T.push(S.customProgramCacheKey),T.join()}function M(S,T){S.push(T.precision),S.push(T.outputColorSpace),S.push(T.envMapMode),S.push(T.envMapCubeUVHeight),S.push(T.mapUv),S.push(T.alphaMapUv),S.push(T.lightMapUv),S.push(T.aoMapUv),S.push(T.bumpMapUv),S.push(T.normalMapUv),S.push(T.displacementMapUv),S.push(T.emissiveMapUv),S.push(T.metalnessMapUv),S.push(T.roughnessMapUv),S.push(T.anisotropyMapUv),S.push(T.clearcoatMapUv),S.push(T.clearcoatNormalMapUv),S.push(T.clearcoatRoughnessMapUv),S.push(T.iridescenceMapUv),S.push(T.iridescenceThicknessMapUv),S.push(T.sheenColorMapUv),S.push(T.sheenRoughnessMapUv),S.push(T.specularMapUv),S.push(T.specularColorMapUv),S.push(T.specularIntensityMapUv),S.push(T.transmissionMapUv),S.push(T.thicknessMapUv),S.push(T.combine),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.morphTargetsCount),S.push(T.morphAttributeCount),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numSpotLightMaps),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.numSpotLightShadowsWithMaps),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.depthPacking)}function v(S,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),S.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),S.push(o.mask)}function u(S){const T=y[S.type];let N;if(T){const Y=Zt[T];N=kg.clone(Y.uniforms)}else N=S.uniforms;return N}function p(S,T){let N;for(let Y=0,D=c.length;Y<D;Y++){const z=c[Y];if(z.cacheKey===T){N=z,++N.usedTimes;break}}return N===void 0&&(N=new Ky(i,T,S,s),c.push(N)),N}function w(S){if(--S.usedTimes===0){const T=c.indexOf(S);c[T]=c[c.length-1],c.pop(),S.destroy()}}function b(S){l.remove(S)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:g,getUniforms:u,acquireProgram:p,releaseProgram:w,releaseShaderCache:b,programs:c,dispose:P}}function ex(){let i=new WeakMap;function e(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function t(s){i.delete(s)}function n(s,a,o){i.get(s)[a]=o}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function tx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function pc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function mc(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(d,f,_,y,x,m){let g=i[e];return g===void 0?(g={id:d.id,object:d,geometry:f,material:_,groupOrder:y,renderOrder:d.renderOrder,z:x,group:m},i[e]=g):(g.id=d.id,g.object=d,g.geometry=f,g.material=_,g.groupOrder=y,g.renderOrder=d.renderOrder,g.z=x,g.group=m),e++,g}function o(d,f,_,y,x,m){const g=a(d,f,_,y,x,m);_.transmission>0?n.push(g):_.transparent===!0?r.push(g):t.push(g)}function l(d,f,_,y,x,m){const g=a(d,f,_,y,x,m);_.transmission>0?n.unshift(g):_.transparent===!0?r.unshift(g):t.unshift(g)}function c(d,f){t.length>1&&t.sort(d||tx),n.length>1&&n.sort(f||pc),r.length>1&&r.sort(f||pc)}function h(){for(let d=e,f=i.length;d<f;d++){const _=i[d];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:h,sort:c}}function nx(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new mc,i.set(n,[a])):r>=s.length?(a=new mc,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function ix(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new qe};break;case"SpotLight":t={position:new B,direction:new B,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new B,halfWidth:new B,halfHeight:new B};break}return i[e.id]=t,t}}}function rx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let sx=0;function ax(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function ox(i,e){const t=new ix,n=rx(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)r.probe.push(new B);const s=new B,a=new ht,o=new ht;function l(h,d){let f=0,_=0,y=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let x=0,m=0,g=0,M=0,v=0,u=0,p=0,w=0,b=0,P=0;h.sort(ax);const S=d===!0?Math.PI:1;for(let N=0,Y=h.length;N<Y;N++){const D=h[N],z=D.color,V=D.intensity,ee=D.distance,$=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)f+=z.r*V*S,_+=z.g*V*S,y+=z.b*V*S;else if(D.isLightProbe)for(let K=0;K<9;K++)r.probe[K].addScaledVector(D.sh.coefficients[K],V);else if(D.isDirectionalLight){const K=t.get(D);if(K.color.copy(D.color).multiplyScalar(D.intensity*S),D.castShadow){const J=D.shadow,Z=n.get(D);Z.shadowBias=J.bias,Z.shadowNormalBias=J.normalBias,Z.shadowRadius=J.radius,Z.shadowMapSize=J.mapSize,r.directionalShadow[x]=Z,r.directionalShadowMap[x]=$,r.directionalShadowMatrix[x]=D.shadow.matrix,u++}r.directional[x]=K,x++}else if(D.isSpotLight){const K=t.get(D);K.position.setFromMatrixPosition(D.matrixWorld),K.color.copy(z).multiplyScalar(V*S),K.distance=ee,K.coneCos=Math.cos(D.angle),K.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),K.decay=D.decay,r.spot[g]=K;const J=D.shadow;if(D.map&&(r.spotLightMap[b]=D.map,b++,J.updateMatrices(D),D.castShadow&&P++),r.spotLightMatrix[g]=J.matrix,D.castShadow){const Z=n.get(D);Z.shadowBias=J.bias,Z.shadowNormalBias=J.normalBias,Z.shadowRadius=J.radius,Z.shadowMapSize=J.mapSize,r.spotShadow[g]=Z,r.spotShadowMap[g]=$,w++}g++}else if(D.isRectAreaLight){const K=t.get(D);K.color.copy(z).multiplyScalar(V),K.halfWidth.set(D.width*.5,0,0),K.halfHeight.set(0,D.height*.5,0),r.rectArea[M]=K,M++}else if(D.isPointLight){const K=t.get(D);if(K.color.copy(D.color).multiplyScalar(D.intensity*S),K.distance=D.distance,K.decay=D.decay,D.castShadow){const J=D.shadow,Z=n.get(D);Z.shadowBias=J.bias,Z.shadowNormalBias=J.normalBias,Z.shadowRadius=J.radius,Z.shadowMapSize=J.mapSize,Z.shadowCameraNear=J.camera.near,Z.shadowCameraFar=J.camera.far,r.pointShadow[m]=Z,r.pointShadowMap[m]=$,r.pointShadowMatrix[m]=D.shadow.matrix,p++}r.point[m]=K,m++}else if(D.isHemisphereLight){const K=t.get(D);K.skyColor.copy(D.color).multiplyScalar(V*S),K.groundColor.copy(D.groundColor).multiplyScalar(V*S),r.hemi[v]=K,v++}}M>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=se.LTC_FLOAT_1,r.rectAreaLTC2=se.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=se.LTC_HALF_1,r.rectAreaLTC2=se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=_,r.ambient[2]=y;const T=r.hash;(T.directionalLength!==x||T.pointLength!==m||T.spotLength!==g||T.rectAreaLength!==M||T.hemiLength!==v||T.numDirectionalShadows!==u||T.numPointShadows!==p||T.numSpotShadows!==w||T.numSpotMaps!==b)&&(r.directional.length=x,r.spot.length=g,r.rectArea.length=M,r.point.length=m,r.hemi.length=v,r.directionalShadow.length=u,r.directionalShadowMap.length=u,r.pointShadow.length=p,r.pointShadowMap.length=p,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=u,r.pointShadowMatrix.length=p,r.spotLightMatrix.length=w+b-P,r.spotLightMap.length=b,r.numSpotLightShadowsWithMaps=P,T.directionalLength=x,T.pointLength=m,T.spotLength=g,T.rectAreaLength=M,T.hemiLength=v,T.numDirectionalShadows=u,T.numPointShadows=p,T.numSpotShadows=w,T.numSpotMaps=b,r.version=sx++)}function c(h,d){let f=0,_=0,y=0,x=0,m=0;const g=d.matrixWorldInverse;for(let M=0,v=h.length;M<v;M++){const u=h[M];if(u.isDirectionalLight){const p=r.directional[f];p.direction.setFromMatrixPosition(u.matrixWorld),s.setFromMatrixPosition(u.target.matrixWorld),p.direction.sub(s),p.direction.transformDirection(g),f++}else if(u.isSpotLight){const p=r.spot[y];p.position.setFromMatrixPosition(u.matrixWorld),p.position.applyMatrix4(g),p.direction.setFromMatrixPosition(u.matrixWorld),s.setFromMatrixPosition(u.target.matrixWorld),p.direction.sub(s),p.direction.transformDirection(g),y++}else if(u.isRectAreaLight){const p=r.rectArea[x];p.position.setFromMatrixPosition(u.matrixWorld),p.position.applyMatrix4(g),o.identity(),a.copy(u.matrixWorld),a.premultiply(g),o.extractRotation(a),p.halfWidth.set(u.width*.5,0,0),p.halfHeight.set(0,u.height*.5,0),p.halfWidth.applyMatrix4(o),p.halfHeight.applyMatrix4(o),x++}else if(u.isPointLight){const p=r.point[_];p.position.setFromMatrixPosition(u.matrixWorld),p.position.applyMatrix4(g),_++}else if(u.isHemisphereLight){const p=r.hemi[m];p.direction.setFromMatrixPosition(u.matrixWorld),p.direction.transformDirection(g),m++}}}return{setup:l,setupView:c,state:r}}function gc(i,e){const t=new ox(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function a(d){n.push(d)}function o(d){r.push(d)}function l(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function lx(i,e){let t=new WeakMap;function n(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new gc(i,e),t.set(s,[l])):a>=o.length?(l=new gc(i,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class cx extends _r{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ig,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class hx extends _r{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ux=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function fx(i,e,t){let n=new Qh;const r=new We,s=new We,a=new dt,o=new cx({depthPacking:rg}),l=new hx,c={},h=t.maxTextureSize,d={[In]:Tt,[Tt]:In,[un]:un},f=new ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:ux,fragmentShader:dx}),_=f.clone();_.defines.HORIZONTAL_PASS=1;const y=new mn;y.setAttribute("position",new Qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new An(y,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ah;let g=this.type;this.render=function(p,w,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||p.length===0)return;const P=i.getRenderTarget(),S=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Pn),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const Y=g!==cn&&this.type===cn,D=g===cn&&this.type!==cn;for(let z=0,V=p.length;z<V;z++){const ee=p[z],$=ee.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;r.copy($.mapSize);const K=$.getFrameExtents();if(r.multiply(K),s.copy($.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/K.x),r.x=s.x*K.x,$.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/K.y),r.y=s.y*K.y,$.mapSize.y=s.y)),$.map===null||Y===!0||D===!0){const Z=this.type!==cn?{minFilter:St,magFilter:St}:{};$.map!==null&&$.map.dispose(),$.map=new ii(r.x,r.y,Z),$.map.texture.name=ee.name+".shadowMap",$.camera.updateProjectionMatrix()}i.setRenderTarget($.map),i.clear();const J=$.getViewportCount();for(let Z=0;Z<J;Z++){const F=$.getViewport(Z);a.set(s.x*F.x,s.y*F.y,s.x*F.z,s.y*F.w),N.viewport(a),$.updateMatrices(ee,Z),n=$.getFrustum(),u(w,b,$.camera,ee,this.type)}$.isPointLightShadow!==!0&&this.type===cn&&M($,b),$.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(P,S,T)};function M(p,w){const b=e.update(x);f.defines.VSM_SAMPLES!==p.blurSamples&&(f.defines.VSM_SAMPLES=p.blurSamples,_.defines.VSM_SAMPLES=p.blurSamples,f.needsUpdate=!0,_.needsUpdate=!0),p.mapPass===null&&(p.mapPass=new ii(r.x,r.y)),f.uniforms.shadow_pass.value=p.map.texture,f.uniforms.resolution.value=p.mapSize,f.uniforms.radius.value=p.radius,i.setRenderTarget(p.mapPass),i.clear(),i.renderBufferDirect(w,null,b,f,x,null),_.uniforms.shadow_pass.value=p.mapPass.texture,_.uniforms.resolution.value=p.mapSize,_.uniforms.radius.value=p.radius,i.setRenderTarget(p.map),i.clear(),i.renderBufferDirect(w,null,b,_,x,null)}function v(p,w,b,P){let S=null;const T=b.isPointLight===!0?p.customDistanceMaterial:p.customDepthMaterial;if(T!==void 0)S=T;else if(S=b.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const N=S.uuid,Y=w.uuid;let D=c[N];D===void 0&&(D={},c[N]=D);let z=D[Y];z===void 0&&(z=S.clone(),D[Y]=z),S=z}if(S.visible=w.visible,S.wireframe=w.wireframe,P===cn?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:d[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,b.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const N=i.properties.get(S);N.light=b}return S}function u(p,w,b,P,S){if(p.visible===!1)return;if(p.layers.test(w.layers)&&(p.isMesh||p.isLine||p.isPoints)&&(p.castShadow||p.receiveShadow&&S===cn)&&(!p.frustumCulled||n.intersectsObject(p))){p.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,p.matrixWorld);const Y=e.update(p),D=p.material;if(Array.isArray(D)){const z=Y.groups;for(let V=0,ee=z.length;V<ee;V++){const $=z[V],K=D[$.materialIndex];if(K&&K.visible){const J=v(p,K,P,S);i.renderBufferDirect(b,null,Y,J,p,$)}}}else if(D.visible){const z=v(p,D,P,S);i.renderBufferDirect(b,null,Y,z,p,null)}}const N=p.children;for(let Y=0,D=N.length;Y<D;Y++)u(N[Y],w,b,P,S)}}function px(i,e,t){const n=t.isWebGL2;function r(){let C=!1;const ae=new dt;let H=null;const re=new dt(0,0,0,0);return{setMask:function(oe){H!==oe&&!C&&(i.colorMask(oe,oe,oe,oe),H=oe)},setLocked:function(oe){C=oe},setClear:function(oe,He,Ye,tt,gn){gn===!0&&(oe*=tt,He*=tt,Ye*=tt),ae.set(oe,He,Ye,tt),re.equals(ae)===!1&&(i.clearColor(oe,He,Ye,tt),re.copy(ae))},reset:function(){C=!1,H=null,re.set(-1,0,0,0)}}}function s(){let C=!1,ae=null,H=null,re=null;return{setTest:function(oe){oe?Pe(i.DEPTH_TEST):be(i.DEPTH_TEST)},setMask:function(oe){ae!==oe&&!C&&(i.depthMask(oe),ae=oe)},setFunc:function(oe){if(H!==oe){switch(oe){case Um:i.depthFunc(i.NEVER);break;case Dm:i.depthFunc(i.ALWAYS);break;case Om:i.depthFunc(i.LESS);break;case Ia:i.depthFunc(i.LEQUAL);break;case Nm:i.depthFunc(i.EQUAL);break;case Fm:i.depthFunc(i.GEQUAL);break;case km:i.depthFunc(i.GREATER);break;case Bm:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}H=oe}},setLocked:function(oe){C=oe},setClear:function(oe){re!==oe&&(i.clearDepth(oe),re=oe)},reset:function(){C=!1,ae=null,H=null,re=null}}}function a(){let C=!1,ae=null,H=null,re=null,oe=null,He=null,Ye=null,tt=null,gn=null;return{setTest:function(Xe){C||(Xe?Pe(i.STENCIL_TEST):be(i.STENCIL_TEST))},setMask:function(Xe){ae!==Xe&&!C&&(i.stencilMask(Xe),ae=Xe)},setFunc:function(Xe,Jt,yt){(H!==Xe||re!==Jt||oe!==yt)&&(i.stencilFunc(Xe,Jt,yt),H=Xe,re=Jt,oe=yt)},setOp:function(Xe,Jt,yt){(He!==Xe||Ye!==Jt||tt!==yt)&&(i.stencilOp(Xe,Jt,yt),He=Xe,Ye=Jt,tt=yt)},setLocked:function(Xe){C=Xe},setClear:function(Xe){gn!==Xe&&(i.clearStencil(Xe),gn=Xe)},reset:function(){C=!1,ae=null,H=null,re=null,oe=null,He=null,Ye=null,tt=null,gn=null}}}const o=new r,l=new s,c=new a,h=new WeakMap,d=new WeakMap;let f={},_={},y=new WeakMap,x=[],m=null,g=!1,M=null,v=null,u=null,p=null,w=null,b=null,P=null,S=!1,T=null,N=null,Y=null,D=null,z=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,$=0;const K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(K)[1]),ee=$>=1):K.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),ee=$>=2);let J=null,Z={};const F=i.getParameter(i.SCISSOR_BOX),X=i.getParameter(i.VIEWPORT),le=new dt().fromArray(F),ce=new dt().fromArray(X);function he(C,ae,H,re){const oe=new Uint8Array(4),He=i.createTexture();i.bindTexture(C,He),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ye=0;Ye<H;Ye++)n&&(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)?i.texImage3D(ae,0,i.RGBA,1,1,re,0,i.RGBA,i.UNSIGNED_BYTE,oe):i.texImage2D(ae+Ye,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,oe);return He}const we={};we[i.TEXTURE_2D]=he(i.TEXTURE_2D,i.TEXTURE_2D,1),we[i.TEXTURE_CUBE_MAP]=he(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(we[i.TEXTURE_2D_ARRAY]=he(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),we[i.TEXTURE_3D]=he(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Pe(i.DEPTH_TEST),l.setFunc(Ia),Re(!1),Ke(nl),Pe(i.CULL_FACE),Ee(Pn);function Pe(C){f[C]!==!0&&(i.enable(C),f[C]=!0)}function be(C){f[C]!==!1&&(i.disable(C),f[C]=!1)}function Ge(C,ae){return _[C]!==ae?(i.bindFramebuffer(C,ae),_[C]=ae,n&&(C===i.DRAW_FRAMEBUFFER&&(_[i.FRAMEBUFFER]=ae),C===i.FRAMEBUFFER&&(_[i.DRAW_FRAMEBUFFER]=ae)),!0):!1}function bt(C,ae){let H=x,re=!1;if(C)if(H=y.get(ae),H===void 0&&(H=[],y.set(ae,H)),C.isWebGLMultipleRenderTargets){const oe=C.texture;if(H.length!==oe.length||H[0]!==i.COLOR_ATTACHMENT0){for(let He=0,Ye=oe.length;He<Ye;He++)H[He]=i.COLOR_ATTACHMENT0+He;H.length=oe.length,re=!0}}else H[0]!==i.COLOR_ATTACHMENT0&&(H[0]=i.COLOR_ATTACHMENT0,re=!0);else H[0]!==i.BACK&&(H[0]=i.BACK,re=!0);re&&(t.isWebGL2?i.drawBuffers(H):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(H))}function De(C){return m!==C?(i.useProgram(C),m=C,!0):!1}const O={[Ri]:i.FUNC_ADD,[Sm]:i.FUNC_SUBTRACT,[bm]:i.FUNC_REVERSE_SUBTRACT};if(n)O[sl]=i.MIN,O[al]=i.MAX;else{const C=e.get("EXT_blend_minmax");C!==null&&(O[sl]=C.MIN_EXT,O[al]=C.MAX_EXT)}const ft={[Em]:i.ZERO,[Mm]:i.ONE,[Tm]:i.SRC_COLOR,[Rh]:i.SRC_ALPHA,[Im]:i.SRC_ALPHA_SATURATE,[Cm]:i.DST_COLOR,[Rm]:i.DST_ALPHA,[Am]:i.ONE_MINUS_SRC_COLOR,[Ph]:i.ONE_MINUS_SRC_ALPHA,[Lm]:i.ONE_MINUS_DST_COLOR,[Pm]:i.ONE_MINUS_DST_ALPHA};function Ee(C,ae,H,re,oe,He,Ye,tt){if(C===Pn){g===!0&&(be(i.BLEND),g=!1);return}if(g===!1&&(Pe(i.BLEND),g=!0),C!==wm){if(C!==M||tt!==S){if((v!==Ri||w!==Ri)&&(i.blendEquation(i.FUNC_ADD),v=Ri,w=Ri),tt)switch(C){case Li:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case La:i.blendFunc(i.ONE,i.ONE);break;case il:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Li:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case La:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case il:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}u=null,p=null,b=null,P=null,M=C,S=tt}return}oe=oe||ae,He=He||H,Ye=Ye||re,(ae!==v||oe!==w)&&(i.blendEquationSeparate(O[ae],O[oe]),v=ae,w=oe),(H!==u||re!==p||He!==b||Ye!==P)&&(i.blendFuncSeparate(ft[H],ft[re],ft[He],ft[Ye]),u=H,p=re,b=He,P=Ye),M=C,S=!1}function Ce(C,ae){C.side===un?be(i.CULL_FACE):Pe(i.CULL_FACE);let H=C.side===Tt;ae&&(H=!H),Re(H),C.blending===Li&&C.transparent===!1?Ee(Pn):Ee(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.premultipliedAlpha),l.setFunc(C.depthFunc),l.setTest(C.depthTest),l.setMask(C.depthWrite),o.setMask(C.colorWrite);const re=C.stencilWrite;c.setTest(re),re&&(c.setMask(C.stencilWriteMask),c.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),c.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Oe(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Pe(i.SAMPLE_ALPHA_TO_COVERAGE):be(i.SAMPLE_ALPHA_TO_COVERAGE)}function Re(C){T!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),T=C)}function Ke(C){C!==vm?(Pe(i.CULL_FACE),C!==N&&(C===nl?i.cullFace(i.BACK):C===ym?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):be(i.CULL_FACE),N=C}function ze(C){C!==Y&&(ee&&i.lineWidth(C),Y=C)}function Oe(C,ae,H){C?(Pe(i.POLYGON_OFFSET_FILL),(D!==ae||z!==H)&&(i.polygonOffset(ae,H),D=ae,z=H)):be(i.POLYGON_OFFSET_FILL)}function Ve(C){C?Pe(i.SCISSOR_TEST):be(i.SCISSOR_TEST)}function ut(C){C===void 0&&(C=i.TEXTURE0+V-1),J!==C&&(i.activeTexture(C),J=C)}function pt(C,ae,H){H===void 0&&(J===null?H=i.TEXTURE0+V-1:H=J);let re=Z[H];re===void 0&&(re={type:void 0,texture:void 0},Z[H]=re),(re.type!==C||re.texture!==ae)&&(J!==H&&(i.activeTexture(H),J=H),i.bindTexture(C,ae||we[C]),re.type=C,re.texture=ae)}function R(){const C=Z[J];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function E(){try{i.compressedTexImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function k(){try{i.compressedTexImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function te(){try{i.texSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Q(){try{i.texSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ne(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ge(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ie(){try{i.texStorage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function G(){try{i.texStorage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ye(){try{i.texImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function _e(){try{i.texImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ve(C){le.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),le.copy(C))}function de(C){ce.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),ce.copy(C))}function fe(C,ae){let H=d.get(ae);H===void 0&&(H=new WeakMap,d.set(ae,H));let re=H.get(C);re===void 0&&(re=i.getUniformBlockIndex(ae,C.name),H.set(C,re))}function Fe(C,ae){const re=d.get(ae).get(C);h.get(ae)!==re&&(i.uniformBlockBinding(ae,re,C.__bindingPointIndex),h.set(ae,re))}function je(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},J=null,Z={},_={},y=new WeakMap,x=[],m=null,g=!1,M=null,v=null,u=null,p=null,w=null,b=null,P=null,S=!1,T=null,N=null,Y=null,D=null,z=null,le.set(0,0,i.canvas.width,i.canvas.height),ce.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Pe,disable:be,bindFramebuffer:Ge,drawBuffers:bt,useProgram:De,setBlending:Ee,setMaterial:Ce,setFlipSided:Re,setCullFace:Ke,setLineWidth:ze,setPolygonOffset:Oe,setScissorTest:Ve,activeTexture:ut,bindTexture:pt,unbindTexture:R,compressedTexImage2D:E,compressedTexImage3D:k,texImage2D:ye,texImage3D:_e,updateUBOMapping:fe,uniformBlockBinding:Fe,texStorage2D:ie,texStorage3D:G,texSubImage2D:te,texSubImage3D:Q,compressedTexSubImage2D:ne,compressedTexSubImage3D:ge,scissor:ve,viewport:de,reset:je}}function mx(i,e,t,n,r,s,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,h=r.maxTextureSize,d=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,_=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),y=new WeakMap;let x;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(R,E){return g?new OffscreenCanvas(R,E):hs("canvas")}function v(R,E,k,te){let Q=1;if((R.width>te||R.height>te)&&(Q=te/Math.max(R.width,R.height)),Q<1||E===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const ne=E?Ba:Math.floor,ge=ne(Q*R.width),ie=ne(Q*R.height);x===void 0&&(x=M(ge,ie));const G=k?M(ge,ie):x;return G.width=ge,G.height=ie,G.getContext("2d").drawImage(R,0,0,ge,ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+ge+"x"+ie+")."),G}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function u(R){return Ul(R.width)&&Ul(R.height)}function p(R){return o?!1:R.wrapS!==Kt||R.wrapT!==Kt||R.minFilter!==St&&R.minFilter!==Bt}function w(R,E){return R.generateMipmaps&&E&&R.minFilter!==St&&R.minFilter!==Bt}function b(R){i.generateMipmap(R)}function P(R,E,k,te,Q=!1){if(o===!1)return E;if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ne=E;return E===i.RED&&(k===i.FLOAT&&(ne=i.R32F),k===i.HALF_FLOAT&&(ne=i.R16F),k===i.UNSIGNED_BYTE&&(ne=i.R8)),E===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(ne=i.R8UI),k===i.UNSIGNED_SHORT&&(ne=i.R16UI),k===i.UNSIGNED_INT&&(ne=i.R32UI),k===i.BYTE&&(ne=i.R8I),k===i.SHORT&&(ne=i.R16I),k===i.INT&&(ne=i.R32I)),E===i.RG&&(k===i.FLOAT&&(ne=i.RG32F),k===i.HALF_FLOAT&&(ne=i.RG16F),k===i.UNSIGNED_BYTE&&(ne=i.RG8)),E===i.RGBA&&(k===i.FLOAT&&(ne=i.RGBA32F),k===i.HALF_FLOAT&&(ne=i.RGBA16F),k===i.UNSIGNED_BYTE&&(ne=te===Ue&&Q===!1?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(ne=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(ne=i.RGB5_A1)),(ne===i.R16F||ne===i.R32F||ne===i.RG16F||ne===i.RG32F||ne===i.RGBA16F||ne===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function S(R,E,k){return w(R,k)===!0||R.isFramebufferTexture&&R.minFilter!==St&&R.minFilter!==Bt?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function T(R){return R===St||R===ol||R===ks?i.NEAREST:i.LINEAR}function N(R){const E=R.target;E.removeEventListener("dispose",N),D(E),E.isVideoTexture&&y.delete(E)}function Y(R){const E=R.target;E.removeEventListener("dispose",Y),V(E)}function D(R){const E=n.get(R);if(E.__webglInit===void 0)return;const k=R.source,te=m.get(k);if(te){const Q=te[E.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&z(R),Object.keys(te).length===0&&m.delete(k)}n.remove(R)}function z(R){const E=n.get(R);i.deleteTexture(E.__webglTexture);const k=R.source,te=m.get(k);delete te[E.__cacheKey],a.memory.textures--}function V(R){const E=R.texture,k=n.get(R),te=n.get(E);if(te.__webglTexture!==void 0&&(i.deleteTexture(te.__webglTexture),a.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(k.__webglFramebuffer[Q]))for(let ne=0;ne<k.__webglFramebuffer[Q].length;ne++)i.deleteFramebuffer(k.__webglFramebuffer[Q][ne]);else i.deleteFramebuffer(k.__webglFramebuffer[Q]);k.__webglDepthbuffer&&i.deleteRenderbuffer(k.__webglDepthbuffer[Q])}else{if(Array.isArray(k.__webglFramebuffer))for(let Q=0;Q<k.__webglFramebuffer.length;Q++)i.deleteFramebuffer(k.__webglFramebuffer[Q]);else i.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&i.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&i.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let Q=0;Q<k.__webglColorRenderbuffer.length;Q++)k.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(k.__webglColorRenderbuffer[Q]);k.__webglDepthRenderbuffer&&i.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let Q=0,ne=E.length;Q<ne;Q++){const ge=n.get(E[Q]);ge.__webglTexture&&(i.deleteTexture(ge.__webglTexture),a.memory.textures--),n.remove(E[Q])}n.remove(E),n.remove(R)}let ee=0;function $(){ee=0}function K(){const R=ee;return R>=l&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+l),ee+=1,R}function J(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function Z(R,E){const k=n.get(R);if(R.isVideoTexture&&ut(R),R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){const te=R.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ge(k,R,E);return}}t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+E)}function F(R,E){const k=n.get(R);if(R.version>0&&k.__version!==R.version){Ge(k,R,E);return}t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+E)}function X(R,E){const k=n.get(R);if(R.version>0&&k.__version!==R.version){Ge(k,R,E);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+E)}function le(R,E){const k=n.get(R);if(R.version>0&&k.__version!==R.version){bt(k,R,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+E)}const ce={[Oa]:i.REPEAT,[Kt]:i.CLAMP_TO_EDGE,[Na]:i.MIRRORED_REPEAT},he={[St]:i.NEAREST,[ol]:i.NEAREST_MIPMAP_NEAREST,[ks]:i.NEAREST_MIPMAP_LINEAR,[Bt]:i.LINEAR,[qm]:i.LINEAR_MIPMAP_NEAREST,[hr]:i.LINEAR_MIPMAP_LINEAR},we={[lg]:i.NEVER,[mg]:i.ALWAYS,[cg]:i.LESS,[ug]:i.LEQUAL,[hg]:i.EQUAL,[pg]:i.GEQUAL,[dg]:i.GREATER,[fg]:i.NOTEQUAL};function Pe(R,E,k){if(k?(i.texParameteri(R,i.TEXTURE_WRAP_S,ce[E.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,ce[E.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,ce[E.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,he[E.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,he[E.minFilter])):(i.texParameteri(R,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(R,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(E.wrapS!==Kt||E.wrapT!==Kt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(R,i.TEXTURE_MAG_FILTER,T(E.magFilter)),i.texParameteri(R,i.TEXTURE_MIN_FILTER,T(E.minFilter)),E.minFilter!==St&&E.minFilter!==Bt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,we[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===St||E.minFilter!==ks&&E.minFilter!==hr||E.type===Tn&&e.has("OES_texture_float_linear")===!1||o===!1&&E.type===ur&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(i.texParameterf(R,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function be(R,E){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",N));const te=E.source;let Q=m.get(te);Q===void 0&&(Q={},m.set(te,Q));const ne=J(E);if(ne!==R.__cacheKey){Q[ne]===void 0&&(Q[ne]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),Q[ne].usedTimes++;const ge=Q[R.__cacheKey];ge!==void 0&&(Q[R.__cacheKey].usedTimes--,ge.usedTimes===0&&z(E)),R.__cacheKey=ne,R.__webglTexture=Q[ne].texture}return k}function Ge(R,E,k){let te=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(te=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(te=i.TEXTURE_3D);const Q=be(R,E),ne=E.source;t.bindTexture(te,R.__webglTexture,i.TEXTURE0+k);const ge=n.get(ne);if(ne.version!==ge.__version||Q===!0){t.activeTexture(i.TEXTURE0+k),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const ie=p(E)&&u(E.image)===!1;let G=v(E.image,ie,!1,h);G=pt(E,G);const ye=u(G)||o,_e=s.convert(E.format,E.colorSpace);let ve=s.convert(E.type),de=P(E.internalFormat,_e,ve,E.colorSpace);Pe(te,E,ye);let fe;const Fe=E.mipmaps,je=o&&E.isVideoTexture!==!0,C=ge.__version===void 0||Q===!0,ae=S(E,G,ye);if(E.isDepthTexture)de=i.DEPTH_COMPONENT,o?E.type===Tn?de=i.DEPTH_COMPONENT32F:E.type===Mn?de=i.DEPTH_COMPONENT24:E.type===Qn?de=i.DEPTH24_STENCIL8:de=i.DEPTH_COMPONENT16:E.type===Tn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===ei&&de===i.DEPTH_COMPONENT&&E.type!==ro&&E.type!==Mn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Mn,ve=s.convert(E.type)),E.format===Ni&&de===i.DEPTH_COMPONENT&&(de=i.DEPTH_STENCIL,E.type!==Qn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Qn,ve=s.convert(E.type))),C&&(je?t.texStorage2D(i.TEXTURE_2D,1,de,G.width,G.height):t.texImage2D(i.TEXTURE_2D,0,de,G.width,G.height,0,_e,ve,null));else if(E.isDataTexture)if(Fe.length>0&&ye){je&&C&&t.texStorage2D(i.TEXTURE_2D,ae,de,Fe[0].width,Fe[0].height);for(let H=0,re=Fe.length;H<re;H++)fe=Fe[H],je?t.texSubImage2D(i.TEXTURE_2D,H,0,0,fe.width,fe.height,_e,ve,fe.data):t.texImage2D(i.TEXTURE_2D,H,de,fe.width,fe.height,0,_e,ve,fe.data);E.generateMipmaps=!1}else je?(C&&t.texStorage2D(i.TEXTURE_2D,ae,de,G.width,G.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,G.width,G.height,_e,ve,G.data)):t.texImage2D(i.TEXTURE_2D,0,de,G.width,G.height,0,_e,ve,G.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){je&&C&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ae,de,Fe[0].width,Fe[0].height,G.depth);for(let H=0,re=Fe.length;H<re;H++)fe=Fe[H],E.format!==Yt?_e!==null?je?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,0,fe.width,fe.height,G.depth,_e,fe.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,H,de,fe.width,fe.height,G.depth,0,fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?t.texSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,0,fe.width,fe.height,G.depth,_e,ve,fe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,H,de,fe.width,fe.height,G.depth,0,_e,ve,fe.data)}else{je&&C&&t.texStorage2D(i.TEXTURE_2D,ae,de,Fe[0].width,Fe[0].height);for(let H=0,re=Fe.length;H<re;H++)fe=Fe[H],E.format!==Yt?_e!==null?je?t.compressedTexSubImage2D(i.TEXTURE_2D,H,0,0,fe.width,fe.height,_e,fe.data):t.compressedTexImage2D(i.TEXTURE_2D,H,de,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?t.texSubImage2D(i.TEXTURE_2D,H,0,0,fe.width,fe.height,_e,ve,fe.data):t.texImage2D(i.TEXTURE_2D,H,de,fe.width,fe.height,0,_e,ve,fe.data)}else if(E.isDataArrayTexture)je?(C&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ae,de,G.width,G.height,G.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,G.width,G.height,G.depth,_e,ve,G.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,de,G.width,G.height,G.depth,0,_e,ve,G.data);else if(E.isData3DTexture)je?(C&&t.texStorage3D(i.TEXTURE_3D,ae,de,G.width,G.height,G.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,G.width,G.height,G.depth,_e,ve,G.data)):t.texImage3D(i.TEXTURE_3D,0,de,G.width,G.height,G.depth,0,_e,ve,G.data);else if(E.isFramebufferTexture){if(C)if(je)t.texStorage2D(i.TEXTURE_2D,ae,de,G.width,G.height);else{let H=G.width,re=G.height;for(let oe=0;oe<ae;oe++)t.texImage2D(i.TEXTURE_2D,oe,de,H,re,0,_e,ve,null),H>>=1,re>>=1}}else if(Fe.length>0&&ye){je&&C&&t.texStorage2D(i.TEXTURE_2D,ae,de,Fe[0].width,Fe[0].height);for(let H=0,re=Fe.length;H<re;H++)fe=Fe[H],je?t.texSubImage2D(i.TEXTURE_2D,H,0,0,_e,ve,fe):t.texImage2D(i.TEXTURE_2D,H,de,_e,ve,fe);E.generateMipmaps=!1}else je?(C&&t.texStorage2D(i.TEXTURE_2D,ae,de,G.width,G.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,_e,ve,G)):t.texImage2D(i.TEXTURE_2D,0,de,_e,ve,G);w(E,ye)&&b(te),ge.__version=ne.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function bt(R,E,k){if(E.image.length!==6)return;const te=be(R,E),Q=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+k);const ne=n.get(Q);if(Q.version!==ne.__version||te===!0){t.activeTexture(i.TEXTURE0+k),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const ge=E.isCompressedTexture||E.image[0].isCompressedTexture,ie=E.image[0]&&E.image[0].isDataTexture,G=[];for(let H=0;H<6;H++)!ge&&!ie?G[H]=v(E.image[H],!1,!0,c):G[H]=ie?E.image[H].image:E.image[H],G[H]=pt(E,G[H]);const ye=G[0],_e=u(ye)||o,ve=s.convert(E.format,E.colorSpace),de=s.convert(E.type),fe=P(E.internalFormat,ve,de,E.colorSpace),Fe=o&&E.isVideoTexture!==!0,je=ne.__version===void 0||te===!0;let C=S(E,ye,_e);Pe(i.TEXTURE_CUBE_MAP,E,_e);let ae;if(ge){Fe&&je&&t.texStorage2D(i.TEXTURE_CUBE_MAP,C,fe,ye.width,ye.height);for(let H=0;H<6;H++){ae=G[H].mipmaps;for(let re=0;re<ae.length;re++){const oe=ae[re];E.format!==Yt?ve!==null?Fe?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,re,0,0,oe.width,oe.height,ve,oe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,re,fe,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,re,0,0,oe.width,oe.height,ve,de,oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,re,fe,oe.width,oe.height,0,ve,de,oe.data)}}}else{ae=E.mipmaps,Fe&&je&&(ae.length>0&&C++,t.texStorage2D(i.TEXTURE_CUBE_MAP,C,fe,G[0].width,G[0].height));for(let H=0;H<6;H++)if(ie){Fe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,G[H].width,G[H].height,ve,de,G[H].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,fe,G[H].width,G[H].height,0,ve,de,G[H].data);for(let re=0;re<ae.length;re++){const He=ae[re].image[H].image;Fe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,re+1,0,0,He.width,He.height,ve,de,He.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,re+1,fe,He.width,He.height,0,ve,de,He.data)}}else{Fe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,ve,de,G[H]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,fe,ve,de,G[H]);for(let re=0;re<ae.length;re++){const oe=ae[re];Fe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,re+1,0,0,ve,de,oe.image[H]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,re+1,fe,ve,de,oe.image[H])}}}w(E,_e)&&b(i.TEXTURE_CUBE_MAP),ne.__version=Q.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function De(R,E,k,te,Q,ne){const ge=s.convert(k.format,k.colorSpace),ie=s.convert(k.type),G=P(k.internalFormat,ge,ie,k.colorSpace);if(!n.get(E).__hasExternalTextures){const _e=Math.max(1,E.width>>ne),ve=Math.max(1,E.height>>ne);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,ne,G,_e,ve,E.depth,0,ge,ie,null):t.texImage2D(Q,ne,G,_e,ve,0,ge,ie,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),Ve(E)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,Q,n.get(k).__webglTexture,0,Oe(E)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,te,Q,n.get(k).__webglTexture,ne),t.bindFramebuffer(i.FRAMEBUFFER,null)}function O(R,E,k){if(i.bindRenderbuffer(i.RENDERBUFFER,R),E.depthBuffer&&!E.stencilBuffer){let te=i.DEPTH_COMPONENT16;if(k||Ve(E)){const Q=E.depthTexture;Q&&Q.isDepthTexture&&(Q.type===Tn?te=i.DEPTH_COMPONENT32F:Q.type===Mn&&(te=i.DEPTH_COMPONENT24));const ne=Oe(E);Ve(E)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne,te,E.width,E.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,te,E.width,E.height)}else i.renderbufferStorage(i.RENDERBUFFER,te,E.width,E.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,R)}else if(E.depthBuffer&&E.stencilBuffer){const te=Oe(E);k&&Ve(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,te,i.DEPTH24_STENCIL8,E.width,E.height):Ve(E)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,te,i.DEPTH24_STENCIL8,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,R)}else{const te=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let Q=0;Q<te.length;Q++){const ne=te[Q],ge=s.convert(ne.format,ne.colorSpace),ie=s.convert(ne.type),G=P(ne.internalFormat,ge,ie,ne.colorSpace),ye=Oe(E);k&&Ve(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,G,E.width,E.height):Ve(E)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ye,G,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,G,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ft(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Z(E.depthTexture,0);const te=n.get(E.depthTexture).__webglTexture,Q=Oe(E);if(E.depthTexture.format===ei)Ve(E)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0);else if(E.depthTexture.format===Ni)Ve(E)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Ee(R){const E=n.get(R),k=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");ft(E.__webglFramebuffer,R)}else if(k){E.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[te]),E.__webglDepthbuffer[te]=i.createRenderbuffer(),O(E.__webglDepthbuffer[te],R,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=i.createRenderbuffer(),O(E.__webglDepthbuffer,R,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ce(R,E,k){const te=n.get(R);E!==void 0&&De(te.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&Ee(R)}function Re(R){const E=R.texture,k=n.get(R),te=n.get(E);R.addEventListener("dispose",Y),R.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture()),te.__version=E.version,a.memory.textures++);const Q=R.isWebGLCubeRenderTarget===!0,ne=R.isWebGLMultipleRenderTargets===!0,ge=u(R)||o;if(Q){k.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(o&&E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer[ie]=[];for(let G=0;G<E.mipmaps.length;G++)k.__webglFramebuffer[ie][G]=i.createFramebuffer()}else k.__webglFramebuffer[ie]=i.createFramebuffer()}else{if(o&&E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer=[];for(let ie=0;ie<E.mipmaps.length;ie++)k.__webglFramebuffer[ie]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(ne)if(r.drawBuffers){const ie=R.texture;for(let G=0,ye=ie.length;G<ye;G++){const _e=n.get(ie[G]);_e.__webglTexture===void 0&&(_e.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&R.samples>0&&Ve(R)===!1){const ie=ne?E:[E];k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let G=0;G<ie.length;G++){const ye=ie[G];k.__webglColorRenderbuffer[G]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[G]);const _e=s.convert(ye.format,ye.colorSpace),ve=s.convert(ye.type),de=P(ye.internalFormat,_e,ve,ye.colorSpace,R.isXRRenderTarget===!0),fe=Oe(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,de,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+G,i.RENDERBUFFER,k.__webglColorRenderbuffer[G])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),O(k.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),Pe(i.TEXTURE_CUBE_MAP,E,ge);for(let ie=0;ie<6;ie++)if(o&&E.mipmaps&&E.mipmaps.length>0)for(let G=0;G<E.mipmaps.length;G++)De(k.__webglFramebuffer[ie][G],R,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,G);else De(k.__webglFramebuffer[ie],R,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);w(E,ge)&&b(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ne){const ie=R.texture;for(let G=0,ye=ie.length;G<ye;G++){const _e=ie[G],ve=n.get(_e);t.bindTexture(i.TEXTURE_2D,ve.__webglTexture),Pe(i.TEXTURE_2D,_e,ge),De(k.__webglFramebuffer,R,_e,i.COLOR_ATTACHMENT0+G,i.TEXTURE_2D,0),w(_e,ge)&&b(i.TEXTURE_2D)}t.unbindTexture()}else{let ie=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(o?ie=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ie,te.__webglTexture),Pe(ie,E,ge),o&&E.mipmaps&&E.mipmaps.length>0)for(let G=0;G<E.mipmaps.length;G++)De(k.__webglFramebuffer[G],R,E,i.COLOR_ATTACHMENT0,ie,G);else De(k.__webglFramebuffer,R,E,i.COLOR_ATTACHMENT0,ie,0);w(E,ge)&&b(ie),t.unbindTexture()}R.depthBuffer&&Ee(R)}function Ke(R){const E=u(R)||o,k=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let te=0,Q=k.length;te<Q;te++){const ne=k[te];if(w(ne,E)){const ge=R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ie=n.get(ne).__webglTexture;t.bindTexture(ge,ie),b(ge),t.unbindTexture()}}}function ze(R){if(o&&R.samples>0&&Ve(R)===!1){const E=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],k=R.width,te=R.height;let Q=i.COLOR_BUFFER_BIT;const ne=[],ge=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=n.get(R),G=R.isWebGLMultipleRenderTargets===!0;if(G)for(let ye=0;ye<E.length;ye++)t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ie.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ie.__webglFramebuffer);for(let ye=0;ye<E.length;ye++){ne.push(i.COLOR_ATTACHMENT0+ye),R.depthBuffer&&ne.push(ge);const _e=ie.__ignoreDepthValues!==void 0?ie.__ignoreDepthValues:!1;if(_e===!1&&(R.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),G&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ie.__webglColorRenderbuffer[ye]),_e===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[ge]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[ge])),G){const ve=n.get(E[ye]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ve,0)}i.blitFramebuffer(0,0,k,te,0,0,k,te,Q,i.NEAREST),_&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ne)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),G)for(let ye=0;ye<E.length;ye++){t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,ie.__webglColorRenderbuffer[ye]);const _e=n.get(E[ye]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,_e,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ie.__webglMultisampledFramebuffer)}}function Oe(R){return Math.min(d,R.samples)}function Ve(R){const E=n.get(R);return o&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ut(R){const E=a.render.frame;y.get(R)!==E&&(y.set(R,E),R.update())}function pt(R,E){const k=R.colorSpace,te=R.format,Q=R.type;return R.isCompressedTexture===!0||R.format===Fa||k!==en&&k!==ni&&(k===Ue?o===!1?e.has("EXT_sRGB")===!0&&te===Yt?(R.format=Fa,R.minFilter=Bt,R.generateMipmaps=!1):E=Hh.sRGBToLinear(E):(te!==Yt||Q!==Ln)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),E}this.allocateTextureUnit=K,this.resetTextureUnits=$,this.setTexture2D=Z,this.setTexture2DArray=F,this.setTexture3D=X,this.setTextureCube=le,this.rebindTextures=Ce,this.setupRenderTarget=Re,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=De,this.useMultisampledRTT=Ve}function gx(i,e,t){const n=t.isWebGL2;function r(s,a=ni){let o;if(s===Ln)return i.UNSIGNED_BYTE;if(s===Uh)return i.UNSIGNED_SHORT_4_4_4_4;if(s===Dh)return i.UNSIGNED_SHORT_5_5_5_1;if(s===Xm)return i.BYTE;if(s===Km)return i.SHORT;if(s===ro)return i.UNSIGNED_SHORT;if(s===Ih)return i.INT;if(s===Mn)return i.UNSIGNED_INT;if(s===Tn)return i.FLOAT;if(s===ur)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Ym)return i.ALPHA;if(s===Yt)return i.RGBA;if(s===Jm)return i.LUMINANCE;if(s===Zm)return i.LUMINANCE_ALPHA;if(s===ei)return i.DEPTH_COMPONENT;if(s===Ni)return i.DEPTH_STENCIL;if(s===Fa)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Qm)return i.RED;if(s===Oh)return i.RED_INTEGER;if(s===eg)return i.RG;if(s===Nh)return i.RG_INTEGER;if(s===Fh)return i.RGBA_INTEGER;if(s===Bs||s===zs||s===Hs||s===Gs)if(a===Ue)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Bs)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===zs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Hs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Gs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Bs)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===zs)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Hs)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Gs)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ll||s===cl||s===hl||s===ul)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===ll)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===cl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===hl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ul)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===tg)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===dl||s===fl)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===dl)return a===Ue?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===fl)return a===Ue?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===pl||s===ml||s===gl||s===_l||s===vl||s===yl||s===xl||s===wl||s===Sl||s===bl||s===El||s===Ml||s===Tl||s===Al)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===pl)return a===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ml)return a===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===gl)return a===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===_l)return a===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===vl)return a===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===yl)return a===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===xl)return a===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===wl)return a===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Sl)return a===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===bl)return a===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===El)return a===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ml)return a===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Tl)return a===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Al)return a===Ue?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Vs)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Vs)return a===Ue?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===ng||s===Rl||s===Pl||s===Cl)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Vs)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Rl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Pl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Cl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Qn?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class _x extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Jr extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vx={type:"move"};class fa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),_=.02,y=.005;c.inputState.pinching&&f>_+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=_-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(vx)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Jr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class yx extends Dt{constructor(e,t,n,r,s,a,o,l,c,h){if(h=h!==void 0?h:ei,h!==ei&&h!==Ni)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ei&&(n=Mn),n===void 0&&h===Ni&&(n=Qn),super(null,r,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:St,this.minFilter=l!==void 0?l:St,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class xx extends Vi{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,f=null,_=null,y=null;const x=t.getContextAttributes();let m=null,g=null;const M=[],v=[],u=new zt;u.layers.enable(1),u.viewport=new dt;const p=new zt;p.layers.enable(2),p.viewport=new dt;const w=[u,p],b=new _x;b.layers.enable(1),b.layers.enable(2);let P=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let X=M[F];return X===void 0&&(X=new fa,M[F]=X),X.getTargetRaySpace()},this.getControllerGrip=function(F){let X=M[F];return X===void 0&&(X=new fa,M[F]=X),X.getGripSpace()},this.getHand=function(F){let X=M[F];return X===void 0&&(X=new fa,M[F]=X),X.getHandSpace()};function T(F){const X=v.indexOf(F.inputSource);if(X===-1)return;const le=M[X];le!==void 0&&(le.update(F.inputSource,F.frame,c||a),le.dispatchEvent({type:F.type,data:F.inputSource}))}function N(){r.removeEventListener("select",T),r.removeEventListener("selectstart",T),r.removeEventListener("selectend",T),r.removeEventListener("squeeze",T),r.removeEventListener("squeezestart",T),r.removeEventListener("squeezeend",T),r.removeEventListener("end",N),r.removeEventListener("inputsourceschange",Y);for(let F=0;F<M.length;F++){const X=v[F];X!==null&&(v[F]=null,M[F].disconnect(X))}P=null,S=null,e.setRenderTarget(m),_=null,f=null,d=null,r=null,g=null,Z.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){s=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){o=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(F){c=F},this.getBaseLayer=function(){return f!==null?f:_},this.getBinding=function(){return d},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(F){if(r=F,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",T),r.addEventListener("selectstart",T),r.addEventListener("selectend",T),r.addEventListener("squeeze",T),r.addEventListener("squeezestart",T),r.addEventListener("squeezeend",T),r.addEventListener("end",N),r.addEventListener("inputsourceschange",Y),x.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const X={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};_=new XRWebGLLayer(r,t,X),r.updateRenderState({baseLayer:_}),g=new ii(_.framebufferWidth,_.framebufferHeight,{format:Yt,type:Ln,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let X=null,le=null,ce=null;x.depth&&(ce=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,X=x.stencil?Ni:ei,le=x.stencil?Qn:Mn);const he={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(he),r.updateRenderState({layers:[f]}),g=new ii(f.textureWidth,f.textureHeight,{format:Yt,type:Ln,depthTexture:new yx(f.textureWidth,f.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const we=e.properties.get(g);we.__ignoreDepthValues=f.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Z.setContext(r),Z.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function Y(F){for(let X=0;X<F.removed.length;X++){const le=F.removed[X],ce=v.indexOf(le);ce>=0&&(v[ce]=null,M[ce].disconnect(le))}for(let X=0;X<F.added.length;X++){const le=F.added[X];let ce=v.indexOf(le);if(ce===-1){for(let we=0;we<M.length;we++)if(we>=v.length){v.push(le),ce=we;break}else if(v[we]===null){v[we]=le,ce=we;break}if(ce===-1)break}const he=M[ce];he&&he.connect(le)}}const D=new B,z=new B;function V(F,X,le){D.setFromMatrixPosition(X.matrixWorld),z.setFromMatrixPosition(le.matrixWorld);const ce=D.distanceTo(z),he=X.projectionMatrix.elements,we=le.projectionMatrix.elements,Pe=he[14]/(he[10]-1),be=he[14]/(he[10]+1),Ge=(he[9]+1)/he[5],bt=(he[9]-1)/he[5],De=(he[8]-1)/he[0],O=(we[8]+1)/we[0],ft=Pe*De,Ee=Pe*O,Ce=ce/(-De+O),Re=Ce*-De;X.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(Re),F.translateZ(Ce),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert();const Ke=Pe+Ce,ze=be+Ce,Oe=ft-Re,Ve=Ee+(ce-Re),ut=Ge*be/ze*Ke,pt=bt*be/ze*Ke;F.projectionMatrix.makePerspective(Oe,Ve,ut,pt,Ke,ze),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}function ee(F,X){X===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(X.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(r===null)return;b.near=p.near=u.near=F.near,b.far=p.far=u.far=F.far,(P!==b.near||S!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),P=b.near,S=b.far);const X=F.parent,le=b.cameras;ee(b,X);for(let ce=0;ce<le.length;ce++)ee(le[ce],X);le.length===2?V(b,u,p):b.projectionMatrix.copy(u.projectionMatrix),$(F,b,X)};function $(F,X,le){le===null?F.matrix.copy(X.matrixWorld):(F.matrix.copy(le.matrixWorld),F.matrix.invert(),F.matrix.multiply(X.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0);const ce=F.children;for(let he=0,we=ce.length;he<we;he++)ce[he].updateMatrixWorld(!0);F.projectionMatrix.copy(X.projectionMatrix),F.projectionMatrixInverse.copy(X.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=ka*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&_===null))return l},this.setFoveation=function(F){l=F,f!==null&&(f.fixedFoveation=F),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=F)};let K=null;function J(F,X){if(h=X.getViewerPose(c||a),y=X,h!==null){const le=h.views;_!==null&&(e.setRenderTargetFramebuffer(g,_.framebuffer),e.setRenderTarget(g));let ce=!1;le.length!==b.cameras.length&&(b.cameras.length=0,ce=!0);for(let he=0;he<le.length;he++){const we=le[he];let Pe=null;if(_!==null)Pe=_.getViewport(we);else{const Ge=d.getViewSubImage(f,we);Pe=Ge.viewport,he===0&&(e.setRenderTargetTextures(g,Ge.colorTexture,f.ignoreDepthValues?void 0:Ge.depthStencilTexture),e.setRenderTarget(g))}let be=w[he];be===void 0&&(be=new zt,be.layers.enable(he),be.viewport=new dt,w[he]=be),be.matrix.fromArray(we.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(we.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),he===0&&(b.matrix.copy(be.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ce===!0&&b.cameras.push(be)}}for(let le=0;le<M.length;le++){const ce=v[le],he=M[le];ce!==null&&he!==void 0&&he.update(ce,X,c||a)}K&&K(F,X),X.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:X}),y=null}const Z=new eu;Z.setAnimationLoop(J),this.setAnimationLoop=function(F){K=F},this.dispose=function(){}}}function wx(i,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Yh(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function r(m,g,M,v,u){g.isMeshBasicMaterial||g.isMeshLambertMaterial?s(m,g):g.isMeshToonMaterial?(s(m,g),d(m,g)):g.isMeshPhongMaterial?(s(m,g),h(m,g)):g.isMeshStandardMaterial?(s(m,g),f(m,g),g.isMeshPhysicalMaterial&&_(m,g,u)):g.isMeshMatcapMaterial?(s(m,g),y(m,g)):g.isMeshDepthMaterial?s(m,g):g.isMeshDistanceMaterial?(s(m,g),x(m,g)):g.isMeshNormalMaterial?s(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?l(m,g,M,v):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Tt&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Tt&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const M=e.get(g).envMap;if(M&&(m.envMap.value=M,m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap){m.lightMap.value=g.lightMap;const v=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=g.lightMapIntensity*v,t(g.lightMap,m.lightMapTransform)}g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,M,v){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*M,m.scale.value=v*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),e.get(g).envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function _(m,g,M){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Tt&&m.clearcoatNormalScale.value.negate())),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function y(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){const M=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Sx(i,e,t,n){let r={},s={},a=[];const o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,v){const u=v.program;n.uniformBlockBinding(M,u)}function c(M,v){let u=r[M.id];u===void 0&&(y(M),u=h(M),r[M.id]=u,M.addEventListener("dispose",m));const p=v.program;n.updateUBOMapping(M,p);const w=e.render.frame;s[M.id]!==w&&(f(M),s[M.id]=w)}function h(M){const v=d();M.__bindingPointIndex=v;const u=i.createBuffer(),p=M.__size,w=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,u),i.bufferData(i.UNIFORM_BUFFER,p,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,u),u}function d(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const v=r[M.id],u=M.uniforms,p=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let w=0,b=u.length;w<b;w++){const P=u[w];if(_(P,w,p)===!0){const S=P.__offset,T=Array.isArray(P.value)?P.value:[P.value];let N=0;for(let Y=0;Y<T.length;Y++){const D=T[Y],z=x(D);typeof D=="number"?(P.__data[0]=D,i.bufferSubData(i.UNIFORM_BUFFER,S+N,P.__data)):D.isMatrix3?(P.__data[0]=D.elements[0],P.__data[1]=D.elements[1],P.__data[2]=D.elements[2],P.__data[3]=D.elements[0],P.__data[4]=D.elements[3],P.__data[5]=D.elements[4],P.__data[6]=D.elements[5],P.__data[7]=D.elements[0],P.__data[8]=D.elements[6],P.__data[9]=D.elements[7],P.__data[10]=D.elements[8],P.__data[11]=D.elements[0]):(D.toArray(P.__data,N),N+=z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,S,P.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function _(M,v,u){const p=M.value;if(u[v]===void 0){if(typeof p=="number")u[v]=p;else{const w=Array.isArray(p)?p:[p],b=[];for(let P=0;P<w.length;P++)b.push(w[P].clone());u[v]=b}return!0}else if(typeof p=="number"){if(u[v]!==p)return u[v]=p,!0}else{const w=Array.isArray(u[v])?u[v]:[u[v]],b=Array.isArray(p)?p:[p];for(let P=0;P<w.length;P++){const S=w[P];if(S.equals(b[P])===!1)return S.copy(b[P]),!0}}return!1}function y(M){const v=M.uniforms;let u=0;const p=16;let w=0;for(let b=0,P=v.length;b<P;b++){const S=v[b],T={boundary:0,storage:0},N=Array.isArray(S.value)?S.value:[S.value];for(let Y=0,D=N.length;Y<D;Y++){const z=N[Y],V=x(z);T.boundary+=V.boundary,T.storage+=V.storage}if(S.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=u,b>0){w=u%p;const Y=p-w;w!==0&&Y-T.boundary<0&&(u+=p-w,S.__offset=u)}u+=T.storage}return w=u%p,w>0&&(u+=p-w),M.__size=u,M.__cache={},this}function x(M){const v={boundary:0,storage:0};return typeof M=="number"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function m(M){const v=M.target;v.removeEventListener("dispose",m);const u=a.indexOf(v.__bindingPointIndex);a.splice(u,1),i.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function g(){for(const M in r)i.deleteBuffer(r[M]);a=[],r={},s={}}return{bind:l,update:c,dispose:g}}function bx(){const i=hs("canvas");return i.style.display="block",i}class su{constructor(e={}){const{canvas:t=bx(),context:n=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=a;const _=new Uint32Array(4),y=new Int32Array(4);let x=null,m=null;const g=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Ue,this._useLegacyLights=!1,this.toneMapping=Cn,this.toneMappingExposure=1;const v=this;let u=!1,p=0,w=0,b=null,P=-1,S=null;const T=new dt,N=new dt;let Y=null;const D=new qe(0);let z=0,V=t.width,ee=t.height,$=1,K=null,J=null;const Z=new dt(0,0,V,ee),F=new dt(0,0,V,ee);let X=!1;const le=new Qh;let ce=!1,he=!1,we=null;const Pe=new ht,be=new We,Ge=new B,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function De(){return b===null?$:1}let O=n;function ft(A,U){for(let j=0;j<A.length;j++){const I=A[j],W=t.getContext(I,U);if(W!==null)return W}return null}try{const A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${io}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",H,!1),t.addEventListener("webglcontextcreationerror",re,!1),O===null){const U=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&U.shift(),O=ft(U,A),O===null)throw ft(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Ee,Ce,Re,Ke,ze,Oe,Ve,ut,pt,R,E,k,te,Q,ne,ge,ie,G,ye,_e,ve,de,fe,Fe;function je(){Ee=new U0(O),Ce=new T0(O,Ee,e),Ee.init(Ce),de=new gx(O,Ee,Ce),Re=new px(O,Ee,Ce),Ke=new N0(O),ze=new ex,Oe=new mx(O,Ee,Re,ze,Ce,de,Ke),Ve=new R0(v),ut=new I0(v),pt=new jg(O,Ce),fe=new E0(O,Ee,pt,Ce),R=new D0(O,pt,Ke,fe),E=new z0(O,R,pt,Ke),ye=new B0(O,Ce,Oe),ge=new A0(ze),k=new Qy(v,Ve,ut,Ee,Ce,fe,ge),te=new wx(v,ze),Q=new nx,ne=new lx(Ee,Ce),G=new b0(v,Ve,ut,Re,E,f,l),ie=new fx(v,E,Ce),Fe=new Sx(O,Ke,Ce,Re),_e=new M0(O,Ee,Ke,Ce),ve=new O0(O,Ee,Ke,Ce),Ke.programs=k.programs,v.capabilities=Ce,v.extensions=Ee,v.properties=ze,v.renderLists=Q,v.shadowMap=ie,v.state=Re,v.info=Ke}je();const C=new xx(v,O);this.xr=C,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const A=Ee.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ee.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(A){A!==void 0&&($=A,this.setSize(V,ee,!1))},this.getSize=function(A){return A.set(V,ee)},this.setSize=function(A,U,j=!0){if(C.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=A,ee=U,t.width=Math.floor(A*$),t.height=Math.floor(U*$),j===!0&&(t.style.width=A+"px",t.style.height=U+"px"),this.setViewport(0,0,A,U)},this.getDrawingBufferSize=function(A){return A.set(V*$,ee*$).floor()},this.setDrawingBufferSize=function(A,U,j){V=A,ee=U,$=j,t.width=Math.floor(A*j),t.height=Math.floor(U*j),this.setViewport(0,0,A,U)},this.getCurrentViewport=function(A){return A.copy(T)},this.getViewport=function(A){return A.copy(Z)},this.setViewport=function(A,U,j,I){A.isVector4?Z.set(A.x,A.y,A.z,A.w):Z.set(A,U,j,I),Re.viewport(T.copy(Z).multiplyScalar($).floor())},this.getScissor=function(A){return A.copy(F)},this.setScissor=function(A,U,j,I){A.isVector4?F.set(A.x,A.y,A.z,A.w):F.set(A,U,j,I),Re.scissor(N.copy(F).multiplyScalar($).floor())},this.getScissorTest=function(){return X},this.setScissorTest=function(A){Re.setScissorTest(X=A)},this.setOpaqueSort=function(A){K=A},this.setTransparentSort=function(A){J=A},this.getClearColor=function(A){return A.copy(G.getClearColor())},this.setClearColor=function(){G.setClearColor.apply(G,arguments)},this.getClearAlpha=function(){return G.getClearAlpha()},this.setClearAlpha=function(){G.setClearAlpha.apply(G,arguments)},this.clear=function(A=!0,U=!0,j=!0){let I=0;if(A){let W=!1;if(b!==null){const ue=b.texture.format;W=ue===Fh||ue===Nh||ue===Oh}if(W){const ue=b.texture.type,xe=ue===Ln||ue===Mn||ue===ro||ue===Qn||ue===Uh||ue===Dh,Te=G.getClearColor(),Ae=G.getClearAlpha(),ke=Te.r,Me=Te.g,Le=Te.b;xe?(_[0]=ke,_[1]=Me,_[2]=Le,_[3]=Ae,O.clearBufferuiv(O.COLOR,0,_)):(y[0]=ke,y[1]=Me,y[2]=Le,y[3]=Ae,O.clearBufferiv(O.COLOR,0,y))}else I|=O.COLOR_BUFFER_BIT}U&&(I|=O.DEPTH_BUFFER_BIT),j&&(I|=O.STENCIL_BUFFER_BIT),O.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",H,!1),t.removeEventListener("webglcontextcreationerror",re,!1),Q.dispose(),ne.dispose(),ze.dispose(),Ve.dispose(),ut.dispose(),E.dispose(),fe.dispose(),Fe.dispose(),k.dispose(),C.dispose(),C.removeEventListener("sessionstart",Xe),C.removeEventListener("sessionend",Jt),we&&(we.dispose(),we=null),yt.stop()};function ae(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),u=!0}function H(){console.log("THREE.WebGLRenderer: Context Restored."),u=!1;const A=Ke.autoReset,U=ie.enabled,j=ie.autoUpdate,I=ie.needsUpdate,W=ie.type;je(),Ke.autoReset=A,ie.enabled=U,ie.autoUpdate=j,ie.needsUpdate=I,ie.type=W}function re(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function oe(A){const U=A.target;U.removeEventListener("dispose",oe),He(U)}function He(A){Ye(A),ze.remove(A)}function Ye(A){const U=ze.get(A).programs;U!==void 0&&(U.forEach(function(j){k.releaseProgram(j)}),A.isShaderMaterial&&k.releaseShaderCache(A))}this.renderBufferDirect=function(A,U,j,I,W,ue){U===null&&(U=bt);const xe=W.isMesh&&W.matrixWorld.determinant()<0,Te=cu(A,U,j,I,W);Re.setMaterial(I,xe);let Ae=j.index,ke=1;if(I.wireframe===!0){if(Ae=R.getWireframeAttribute(j),Ae===void 0)return;ke=2}const Me=j.drawRange,Le=j.attributes.position;let Ze=Me.start*ke,Qe=(Me.start+Me.count)*ke;ue!==null&&(Ze=Math.max(Ze,ue.start*ke),Qe=Math.min(Qe,(ue.start+ue.count)*ke)),Ae!==null?(Ze=Math.max(Ze,0),Qe=Math.min(Qe,Ae.count)):Le!=null&&(Ze=Math.max(Ze,0),Qe=Math.min(Qe,Le.count));const Ot=Qe-Ze;if(Ot<0||Ot===1/0)return;fe.setup(W,I,Te,j,Ae);let tn,nt=_e;if(Ae!==null&&(tn=pt.get(Ae),nt=ve,nt.setIndex(tn)),W.isMesh)I.wireframe===!0?(Re.setLineWidth(I.wireframeLinewidth*De()),nt.setMode(O.LINES)):nt.setMode(O.TRIANGLES);else if(W.isLine){let Be=I.linewidth;Be===void 0&&(Be=1),Re.setLineWidth(Be*De()),W.isLineSegments?nt.setMode(O.LINES):W.isLineLoop?nt.setMode(O.LINE_LOOP):nt.setMode(O.LINE_STRIP)}else W.isPoints?nt.setMode(O.POINTS):W.isSprite&&nt.setMode(O.TRIANGLES);if(W.isInstancedMesh)nt.renderInstances(Ze,Ot,W.count);else if(j.isInstancedBufferGeometry){const Be=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,bs=Math.min(j.instanceCount,Be);nt.renderInstances(Ze,Ot,bs)}else nt.render(Ze,Ot)},this.compile=function(A,U){function j(I,W,ue){I.transparent===!0&&I.side===un&&I.forceSinglePass===!1?(I.side=Tt,I.needsUpdate=!0,xr(I,W,ue),I.side=In,I.needsUpdate=!0,xr(I,W,ue),I.side=un):xr(I,W,ue)}m=ne.get(A),m.init(),M.push(m),A.traverseVisible(function(I){I.isLight&&I.layers.test(U.layers)&&(m.pushLight(I),I.castShadow&&m.pushShadow(I))}),m.setupLights(v._useLegacyLights),A.traverse(function(I){const W=I.material;if(W)if(Array.isArray(W))for(let ue=0;ue<W.length;ue++){const xe=W[ue];j(xe,A,I)}else j(W,A,I)}),M.pop(),m=null};let tt=null;function gn(A){tt&&tt(A)}function Xe(){yt.stop()}function Jt(){yt.start()}const yt=new eu;yt.setAnimationLoop(gn),typeof self<"u"&&yt.setContext(self),this.setAnimationLoop=function(A){tt=A,C.setAnimationLoop(A),A===null?yt.stop():yt.start()},C.addEventListener("sessionstart",Xe),C.addEventListener("sessionend",Jt),this.render=function(A,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(u===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),C.enabled===!0&&C.isPresenting===!0&&(C.cameraAutoUpdate===!0&&C.updateCamera(U),U=C.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,U,b),m=ne.get(A,M.length),m.init(),M.push(m),Pe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),le.setFromProjectionMatrix(Pe),he=this.localClippingEnabled,ce=ge.init(this.clippingPlanes,he),x=Q.get(A,g.length),x.init(),g.push(x),oo(A,U,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(K,J),this.info.render.frame++,ce===!0&&ge.beginShadows();const j=m.state.shadowsArray;if(ie.render(j,A,U),ce===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),G.render(x,A),m.setupLights(v._useLegacyLights),U.isArrayCamera){const I=U.cameras;for(let W=0,ue=I.length;W<ue;W++){const xe=I[W];lo(x,A,xe,xe.viewport)}}else lo(x,A,U);b!==null&&(Oe.updateMultisampleRenderTarget(b),Oe.updateRenderTargetMipmap(b)),A.isScene===!0&&A.onAfterRender(v,A,U),fe.resetDefaultState(),P=-1,S=null,M.pop(),M.length>0?m=M[M.length-1]:m=null,g.pop(),g.length>0?x=g[g.length-1]:x=null};function oo(A,U,j,I){if(A.visible===!1)return;if(A.layers.test(U.layers)){if(A.isGroup)j=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(U);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||le.intersectsSprite(A)){I&&Ge.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Pe);const xe=E.update(A),Te=A.material;Te.visible&&x.push(A,xe,Te,j,Ge.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||le.intersectsObject(A))){const xe=E.update(A),Te=A.material;if(I&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ge.copy(A.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Ge.copy(xe.boundingSphere.center)),Ge.applyMatrix4(A.matrixWorld).applyMatrix4(Pe)),Array.isArray(Te)){const Ae=xe.groups;for(let ke=0,Me=Ae.length;ke<Me;ke++){const Le=Ae[ke],Ze=Te[Le.materialIndex];Ze&&Ze.visible&&x.push(A,xe,Ze,j,Ge.z,Le)}}else Te.visible&&x.push(A,xe,Te,j,Ge.z,null)}}const ue=A.children;for(let xe=0,Te=ue.length;xe<Te;xe++)oo(ue[xe],U,j,I)}function lo(A,U,j,I){const W=A.opaque,ue=A.transmissive,xe=A.transparent;m.setupLightsView(j),ce===!0&&ge.setGlobalState(v.clippingPlanes,j),ue.length>0&&lu(W,ue,U,j),I&&Re.viewport(T.copy(I)),W.length>0&&yr(W,U,j),ue.length>0&&yr(ue,U,j),xe.length>0&&yr(xe,U,j),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function lu(A,U,j,I){const W=Ce.isWebGL2;we===null&&(we=new ii(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")?ur:Ln,minFilter:hr,samples:W?4:0})),v.getDrawingBufferSize(be),W?we.setSize(be.x,be.y):we.setSize(Ba(be.x),Ba(be.y));const ue=v.getRenderTarget();v.setRenderTarget(we),v.getClearColor(D),z=v.getClearAlpha(),z<1&&v.setClearColor(16777215,.5),v.clear();const xe=v.toneMapping;v.toneMapping=Cn,yr(A,j,I),Oe.updateMultisampleRenderTarget(we),Oe.updateRenderTargetMipmap(we);let Te=!1;for(let Ae=0,ke=U.length;Ae<ke;Ae++){const Me=U[Ae],Le=Me.object,Ze=Me.geometry,Qe=Me.material,Ot=Me.group;if(Qe.side===un&&Le.layers.test(I.layers)){const tn=Qe.side;Qe.side=Tt,Qe.needsUpdate=!0,co(Le,j,I,Ze,Qe,Ot),Qe.side=tn,Qe.needsUpdate=!0,Te=!0}}Te===!0&&(Oe.updateMultisampleRenderTarget(we),Oe.updateRenderTargetMipmap(we)),v.setRenderTarget(ue),v.setClearColor(D,z),v.toneMapping=xe}function yr(A,U,j){const I=U.isScene===!0?U.overrideMaterial:null;for(let W=0,ue=A.length;W<ue;W++){const xe=A[W],Te=xe.object,Ae=xe.geometry,ke=I===null?xe.material:I,Me=xe.group;Te.layers.test(j.layers)&&co(Te,U,j,Ae,ke,Me)}}function co(A,U,j,I,W,ue){A.onBeforeRender(v,U,j,I,W,ue),A.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),W.onBeforeRender(v,U,j,I,A,ue),W.transparent===!0&&W.side===un&&W.forceSinglePass===!1?(W.side=Tt,W.needsUpdate=!0,v.renderBufferDirect(j,U,I,W,A,ue),W.side=In,W.needsUpdate=!0,v.renderBufferDirect(j,U,I,W,A,ue),W.side=un):v.renderBufferDirect(j,U,I,W,A,ue),A.onAfterRender(v,U,j,I,W,ue)}function xr(A,U,j){U.isScene!==!0&&(U=bt);const I=ze.get(A),W=m.state.lights,ue=m.state.shadowsArray,xe=W.state.version,Te=k.getParameters(A,W.state,ue,U,j),Ae=k.getProgramCacheKey(Te);let ke=I.programs;I.environment=A.isMeshStandardMaterial?U.environment:null,I.fog=U.fog,I.envMap=(A.isMeshStandardMaterial?ut:Ve).get(A.envMap||I.environment),ke===void 0&&(A.addEventListener("dispose",oe),ke=new Map,I.programs=ke);let Me=ke.get(Ae);if(Me!==void 0){if(I.currentProgram===Me&&I.lightsStateVersion===xe)return ho(A,Te),Me}else Te.uniforms=k.getUniforms(A),A.onBuild(j,Te,v),A.onBeforeCompile(Te,v),Me=k.acquireProgram(Te,Ae),ke.set(Ae,Me),I.uniforms=Te.uniforms;const Le=I.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Le.clippingPlanes=ge.uniform),ho(A,Te),I.needsLights=uu(A),I.lightsStateVersion=xe,I.needsLights&&(Le.ambientLightColor.value=W.state.ambient,Le.lightProbe.value=W.state.probe,Le.directionalLights.value=W.state.directional,Le.directionalLightShadows.value=W.state.directionalShadow,Le.spotLights.value=W.state.spot,Le.spotLightShadows.value=W.state.spotShadow,Le.rectAreaLights.value=W.state.rectArea,Le.ltc_1.value=W.state.rectAreaLTC1,Le.ltc_2.value=W.state.rectAreaLTC2,Le.pointLights.value=W.state.point,Le.pointLightShadows.value=W.state.pointShadow,Le.hemisphereLights.value=W.state.hemi,Le.directionalShadowMap.value=W.state.directionalShadowMap,Le.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Le.spotShadowMap.value=W.state.spotShadowMap,Le.spotLightMatrix.value=W.state.spotLightMatrix,Le.spotLightMap.value=W.state.spotLightMap,Le.pointShadowMap.value=W.state.pointShadowMap,Le.pointShadowMatrix.value=W.state.pointShadowMatrix);const Ze=Me.getUniforms(),Qe=es.seqWithValue(Ze.seq,Le);return I.currentProgram=Me,I.uniformsList=Qe,Me}function ho(A,U){const j=ze.get(A);j.outputColorSpace=U.outputColorSpace,j.instancing=U.instancing,j.instancingColor=U.instancingColor,j.skinning=U.skinning,j.morphTargets=U.morphTargets,j.morphNormals=U.morphNormals,j.morphColors=U.morphColors,j.morphTargetsCount=U.morphTargetsCount,j.numClippingPlanes=U.numClippingPlanes,j.numIntersection=U.numClipIntersection,j.vertexAlphas=U.vertexAlphas,j.vertexTangents=U.vertexTangents,j.toneMapping=U.toneMapping}function cu(A,U,j,I,W){U.isScene!==!0&&(U=bt),Oe.resetTextureUnits();const ue=U.fog,xe=I.isMeshStandardMaterial?U.environment:null,Te=b===null?v.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:en,Ae=(I.isMeshStandardMaterial?ut:Ve).get(I.envMap||xe),ke=I.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Me=!!j.attributes.tangent&&(!!I.normalMap||I.anisotropy>0),Le=!!j.morphAttributes.position,Ze=!!j.morphAttributes.normal,Qe=!!j.morphAttributes.color;let Ot=Cn;I.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Ot=v.toneMapping);const tn=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,nt=tn!==void 0?tn.length:0,Be=ze.get(I),bs=m.state.lights;if(ce===!0&&(he===!0||A!==S)){const Rt=A===S&&I.id===P;ge.setState(I,A,Rt)}let it=!1;I.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==bs.state.version||Be.outputColorSpace!==Te||W.isInstancedMesh&&Be.instancing===!1||!W.isInstancedMesh&&Be.instancing===!0||W.isSkinnedMesh&&Be.skinning===!1||!W.isSkinnedMesh&&Be.skinning===!0||W.isInstancedMesh&&Be.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Be.instancingColor===!1&&W.instanceColor!==null||Be.envMap!==Ae||I.fog===!0&&Be.fog!==ue||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==ge.numPlanes||Be.numIntersection!==ge.numIntersection)||Be.vertexAlphas!==ke||Be.vertexTangents!==Me||Be.morphTargets!==Le||Be.morphNormals!==Ze||Be.morphColors!==Qe||Be.toneMapping!==Ot||Ce.isWebGL2===!0&&Be.morphTargetsCount!==nt)&&(it=!0):(it=!0,Be.__version=I.version);let Nn=Be.currentProgram;it===!0&&(Nn=xr(I,U,W));let uo=!1,ji=!1,Es=!1;const xt=Nn.getUniforms(),Fn=Be.uniforms;if(Re.useProgram(Nn.program)&&(uo=!0,ji=!0,Es=!0),I.id!==P&&(P=I.id,ji=!0),uo||S!==A){if(xt.setValue(O,"projectionMatrix",A.projectionMatrix),Ce.logarithmicDepthBuffer&&xt.setValue(O,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),S!==A&&(S=A,ji=!0,Es=!0),I.isShaderMaterial||I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshStandardMaterial||I.envMap){const Rt=xt.map.cameraPosition;Rt!==void 0&&Rt.setValue(O,Ge.setFromMatrixPosition(A.matrixWorld))}(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&xt.setValue(O,"isOrthographic",A.isOrthographicCamera===!0),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial||I.isShadowMaterial||W.isSkinnedMesh)&&xt.setValue(O,"viewMatrix",A.matrixWorldInverse)}if(W.isSkinnedMesh){xt.setOptional(O,W,"bindMatrix"),xt.setOptional(O,W,"bindMatrixInverse");const Rt=W.skeleton;Rt&&(Ce.floatVertexTextures?(Rt.boneTexture===null&&Rt.computeBoneTexture(),xt.setValue(O,"boneTexture",Rt.boneTexture,Oe),xt.setValue(O,"boneTextureSize",Rt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ms=j.morphAttributes;if((Ms.position!==void 0||Ms.normal!==void 0||Ms.color!==void 0&&Ce.isWebGL2===!0)&&ye.update(W,j,Nn),(ji||Be.receiveShadow!==W.receiveShadow)&&(Be.receiveShadow=W.receiveShadow,xt.setValue(O,"receiveShadow",W.receiveShadow)),I.isMeshGouraudMaterial&&I.envMap!==null&&(Fn.envMap.value=Ae,Fn.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),ji&&(xt.setValue(O,"toneMappingExposure",v.toneMappingExposure),Be.needsLights&&hu(Fn,Es),ue&&I.fog===!0&&te.refreshFogUniforms(Fn,ue),te.refreshMaterialUniforms(Fn,I,$,ee,we),es.upload(O,Be.uniformsList,Fn,Oe)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(es.upload(O,Be.uniformsList,Fn,Oe),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&xt.setValue(O,"center",W.center),xt.setValue(O,"modelViewMatrix",W.modelViewMatrix),xt.setValue(O,"normalMatrix",W.normalMatrix),xt.setValue(O,"modelMatrix",W.matrixWorld),I.isShaderMaterial||I.isRawShaderMaterial){const Rt=I.uniformsGroups;for(let Ts=0,du=Rt.length;Ts<du;Ts++)if(Ce.isWebGL2){const fo=Rt[Ts];Fe.update(fo,Nn),Fe.bind(fo,Nn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Nn}function hu(A,U){A.ambientLightColor.needsUpdate=U,A.lightProbe.needsUpdate=U,A.directionalLights.needsUpdate=U,A.directionalLightShadows.needsUpdate=U,A.pointLights.needsUpdate=U,A.pointLightShadows.needsUpdate=U,A.spotLights.needsUpdate=U,A.spotLightShadows.needsUpdate=U,A.rectAreaLights.needsUpdate=U,A.hemisphereLights.needsUpdate=U}function uu(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return p},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(A,U,j){ze.get(A.texture).__webglTexture=U,ze.get(A.depthTexture).__webglTexture=j;const I=ze.get(A);I.__hasExternalTextures=!0,I.__hasExternalTextures&&(I.__autoAllocateDepthBuffer=j===void 0,I.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),I.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,U){const j=ze.get(A);j.__webglFramebuffer=U,j.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(A,U=0,j=0){b=A,p=U,w=j;let I=!0,W=null,ue=!1,xe=!1;if(A){const Ae=ze.get(A);Ae.__useDefaultFramebuffer!==void 0?(Re.bindFramebuffer(O.FRAMEBUFFER,null),I=!1):Ae.__webglFramebuffer===void 0?Oe.setupRenderTarget(A):Ae.__hasExternalTextures&&Oe.rebindTextures(A,ze.get(A.texture).__webglTexture,ze.get(A.depthTexture).__webglTexture);const ke=A.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(xe=!0);const Me=ze.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Me[U])?W=Me[U][j]:W=Me[U],ue=!0):Ce.isWebGL2&&A.samples>0&&Oe.useMultisampledRTT(A)===!1?W=ze.get(A).__webglMultisampledFramebuffer:Array.isArray(Me)?W=Me[j]:W=Me,T.copy(A.viewport),N.copy(A.scissor),Y=A.scissorTest}else T.copy(Z).multiplyScalar($).floor(),N.copy(F).multiplyScalar($).floor(),Y=X;if(Re.bindFramebuffer(O.FRAMEBUFFER,W)&&Ce.drawBuffers&&I&&Re.drawBuffers(A,W),Re.viewport(T),Re.scissor(N),Re.setScissorTest(Y),ue){const Ae=ze.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ae.__webglTexture,j)}else if(xe){const Ae=ze.get(A.texture),ke=U||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ae.__webglTexture,j||0,ke)}P=-1},this.readRenderTargetPixels=function(A,U,j,I,W,ue,xe){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=ze.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&xe!==void 0&&(Te=Te[xe]),Te){Re.bindFramebuffer(O.FRAMEBUFFER,Te);try{const Ae=A.texture,ke=Ae.format,Me=Ae.type;if(ke!==Yt&&de.convert(ke)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Le=Me===ur&&(Ee.has("EXT_color_buffer_half_float")||Ce.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(Me!==Ln&&de.convert(Me)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Me===Tn&&(Ce.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!Le){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=A.width-I&&j>=0&&j<=A.height-W&&O.readPixels(U,j,I,W,de.convert(ke),de.convert(Me),ue)}finally{const Ae=b!==null?ze.get(b).__webglFramebuffer:null;Re.bindFramebuffer(O.FRAMEBUFFER,Ae)}}},this.copyFramebufferToTexture=function(A,U,j=0){const I=Math.pow(2,-j),W=Math.floor(U.image.width*I),ue=Math.floor(U.image.height*I);Oe.setTexture2D(U,0),O.copyTexSubImage2D(O.TEXTURE_2D,j,0,0,A.x,A.y,W,ue),Re.unbindTexture()},this.copyTextureToTexture=function(A,U,j,I=0){const W=U.image.width,ue=U.image.height,xe=de.convert(j.format),Te=de.convert(j.type);Oe.setTexture2D(j,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,j.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,j.unpackAlignment),U.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,I,A.x,A.y,W,ue,xe,Te,U.image.data):U.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,I,A.x,A.y,U.mipmaps[0].width,U.mipmaps[0].height,xe,U.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,I,A.x,A.y,xe,Te,U.image),I===0&&j.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),Re.unbindTexture()},this.copyTextureToTexture3D=function(A,U,j,I,W=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ue=A.max.x-A.min.x+1,xe=A.max.y-A.min.y+1,Te=A.max.z-A.min.z+1,Ae=de.convert(I.format),ke=de.convert(I.type);let Me;if(I.isData3DTexture)Oe.setTexture3D(I,0),Me=O.TEXTURE_3D;else if(I.isDataArrayTexture)Oe.setTexture2DArray(I,0),Me=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,I.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,I.unpackAlignment);const Le=O.getParameter(O.UNPACK_ROW_LENGTH),Ze=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Qe=O.getParameter(O.UNPACK_SKIP_PIXELS),Ot=O.getParameter(O.UNPACK_SKIP_ROWS),tn=O.getParameter(O.UNPACK_SKIP_IMAGES),nt=j.isCompressedTexture?j.mipmaps[0]:j.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,nt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,nt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,A.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,A.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,A.min.z),j.isDataTexture||j.isData3DTexture?O.texSubImage3D(Me,W,U.x,U.y,U.z,ue,xe,Te,Ae,ke,nt.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(Me,W,U.x,U.y,U.z,ue,xe,Te,Ae,nt.data)):O.texSubImage3D(Me,W,U.x,U.y,U.z,ue,xe,Te,Ae,ke,nt),O.pixelStorei(O.UNPACK_ROW_LENGTH,Le),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ze),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Qe),O.pixelStorei(O.UNPACK_SKIP_ROWS,Ot),O.pixelStorei(O.UNPACK_SKIP_IMAGES,tn),W===0&&I.generateMipmaps&&O.generateMipmap(Me),Re.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?Oe.setTextureCube(A,0):A.isData3DTexture?Oe.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Oe.setTexture2DArray(A,0):Oe.setTexture2D(A,0),Re.unbindTexture()},this.resetState=function(){p=0,w=0,b=null,Re.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return dn}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ue?ti:kh}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ti?Ue:en}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Ex extends su{}Ex.prototype.isWebGL1Renderer=!0;class Mx extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class au extends _r{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const _c=new ht,Ha=new Wh,Zr=new gs,Qr=new B;class Tx extends At{constructor(e=new mn,t=new au){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere),Zr.applyMatrix4(r),Zr.radius+=s,e.ray.intersectsSphere(Zr)===!1)return;_c.copy(r).invert(),Ha.copy(e.ray).applyMatrix4(_c);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),_=Math.min(c.count,a.start+a.count);for(let y=f,x=_;y<x;y++){const m=c.getX(y);Qr.fromBufferAttribute(d,m),vc(Qr,m,l,r,e,t,this)}}else{const f=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let y=f,x=_;y<x;y++)Qr.fromBufferAttribute(d,y),vc(Qr,y,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function vc(i,e,t,n,r,s,a){const o=Ha.distanceSqToPoint(i);if(o<t){const l=new B;Ha.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:io}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=io);let Ga,dr,rr,Ft,ys=0,xs=0,ws=window.innerWidth/2,Ss=window.innerHeight/2;const Ax=()=>{const i=document.getElementById("particles-canvas");Ga=new Mx,dr=new zt(75,window.innerWidth/window.innerHeight,1,1e4),dr.position.z=1e3,rr=new su({canvas:i,alpha:!0,antialias:!0}),rr.setSize(window.innerWidth,window.innerHeight),rr.setPixelRatio(window.devicePixelRatio);const e=new mn,t=[],n=[],r=window.innerWidth<768?1e3:2e3;for(let a=0;a<r;a++){const o=Math.random()*2e3-1e3,l=Math.random()*2e3-1e3,c=Math.random()*2e3-1e3;t.push(o,l,c),n.push((Math.random()-.5)*.3,(Math.random()-.5)*.3,(Math.random()-.5)*.3)}e.setAttribute("position",new fn(t,3)),e.setAttribute("velocity",new fn(n,3));const s=new au({color:16777215,size:2,transparent:!0,opacity:.8,blending:La});Ft=new Tx(e,s),Ga.add(Ft),document.addEventListener("mousemove",Rx),document.addEventListener("touchstart",Px),document.addEventListener("touchmove",Cx),window.addEventListener("resize",Lx)},Rx=i=>{ys=(i.clientX-ws)*.05,xs=(i.clientY-Ss)*.05},Px=i=>{i.touches.length===1&&(ys=(i.touches[0].pageX-ws)*.05,xs=(i.touches[0].pageY-Ss)*.05)},Cx=i=>{i.touches.length===1&&(i.preventDefault(),ys=(i.touches[0].pageX-ws)*.05,xs=(i.touches[0].pageY-Ss)*.05)},Lx=()=>{ws=window.innerWidth/2,Ss=window.innerHeight/2,dr.aspect=window.innerWidth/window.innerHeight,dr.updateProjectionMatrix(),rr.setSize(window.innerWidth,window.innerHeight)},ou=()=>{requestAnimationFrame(ou),Ix()},Ix=()=>{if(!Ft)return;const i=Date.now()*5e-5,e=Ft.geometry.attributes.position.array,t=Ft.geometry.attributes.velocity.array;for(let n=0;n<e.length;n+=3)e[n]+=t[n]*1.5,e[n+1]+=t[n+1]*1.5,e[n+2]+=t[n+2]*1.5,Math.abs(e[n])>800&&(t[n]*=-1.1),Math.abs(e[n+1])>800&&(t[n+1]*=-1.1),Math.abs(e[n+2])>800&&(t[n+2]*=-1.1);Ft.geometry.attributes.position.needsUpdate=!0,Ft.rotation.x=i*.1,Ft.rotation.y=i*.15,Ft.rotation.x+=(xs-Ft.rotation.x)*.01,Ft.rotation.y+=(ys-Ft.rotation.y)*.01,rr.render(Ga,dr)},Ux=()=>L.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:L.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})}),Dx=()=>L.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:L.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})}),Ox=()=>{q.useEffect(()=>(Ax(),ou(),document.body.classList.add("antroponomas-body"),()=>{document.body.classList.remove("antroponomas-body")}),[]);const i=q.useRef(null),e=()=>{i.current&&i.current.scrollBy({left:-300,behavior:"smooth"})},t=()=>{i.current&&i.current.scrollBy({left:300,behavior:"smooth"})},n=[{id:"1",title:"Edición Inaugural",description:"La primera edición de nuestra revista digital con artículos exclusivos y contenido inédito.",date:"Noviembre 2023",pages:24,isNew:!0,enabled:!0},{id:"2",title:"Edición Especial",description:"Próximamente - Disponible en Diciembre 2023",date:"Diciembre 2023",pages:0,isNew:!1,enabled:!1},{id:"3",title:"Tendencias Actuales",description:"Próximamente - Disponible en Enero 2024",date:"Enero 2024",pages:0,isNew:!1,enabled:!1},{id:"4",title:"Culturas Antiguas",description:"Próximamente - Disponible en Febrero 2024",date:"Febrero 2024",pages:0,isNew:!1,enabled:!1},{id:"5",title:"Futuro de la Humanidad",description:"Próximamente - Disponible en Marzo 2024",date:"Marzo 2024",pages:0,isNew:!1,enabled:!1}];return L.jsxs("div",{className:"antroponomas-home",children:[L.jsx("canvas",{id:"particles-canvas"}),L.jsxs("div",{className:"container",children:[L.jsx("header",{className:"header",children:L.jsxs("div",{className:"logo",children:[L.jsx("h1",{className:"logo-text",children:"Antroponómadas"}),L.jsx("p",{className:"logo-subtitle",children:"Revista Digital"})]})}),L.jsxs("main",{className:"main-content",children:[L.jsxs("section",{className:"hero",children:[L.jsx("h2",{className:"hero-title",children:"Explora el mundo a través de la antropología"}),L.jsx("p",{className:"hero-subtitle",children:"Nuevas perspectivas, historias únicas, culturas fascinantes"})]}),L.jsxs("section",{className:"editions-container",children:[L.jsx("button",{onClick:e,className:"scroll-button left","aria-label":"Desplazar a la izquierda",children:L.jsx(Ux,{})}),L.jsx("div",{className:"editions-scroll",ref:i,children:n.map(r=>L.jsxs(Td,{to:r.enabled?`/ediciones/${r.id}`:"#",className:`edition-card glass ${r.enabled?"":"coming-soon"}`,onClick:r.enabled?void 0:s=>s.preventDefault(),children:[r.isNew&&L.jsx("div",{className:"edition-badge",children:"Nueva Edición"}),L.jsxs("div",{className:"edition-content",children:[L.jsx("h3",{className:"edition-title",children:r.title}),L.jsx("p",{className:"edition-description",children:r.description}),L.jsxs("div",{className:"edition-meta",children:[L.jsx("span",{className:"edition-date",children:r.date}),r.pages>0&&L.jsxs("span",{className:"edition-pages",children:["• ",r.pages," páginas"]})]})]}),r.enabled&&L.jsx("div",{className:"edition-hover",children:L.jsx("span",{children:"Leer ahora →"})})]},r.id))}),L.jsx("button",{onClick:t,className:"scroll-button right","aria-label":"Desplazar a la derecha",children:L.jsx(Dx,{})})]})]})]})]})};function Nx(){const[i,e]=q.useState({titulo:"",descripcion:"",fecha_publicacion:"",portada:null,archivo:null}),[t,n]=q.useState(!1),[r,s]=q.useState({text:"",type:""}),a=zi(),o=c=>{const{name:h,value:d,files:f}=c.target;e(_=>({..._,[h]:f?f[0]:d}))},l=async c=>{c.preventDefault(),n(!0),s({text:"",type:""});try{let h="";if(i.portada){const y=i.portada.name.split(".").pop(),x=`portadas/${Date.now()}.${y}`,{error:m}=await En.storage.from("covers").upload(x,i.portada);if(m)throw m;h=x}let d="";if(i.archivo){const y=i.archivo.name.split(".").pop(),x=`ediciones/${Date.now()}.${y}`,{error:m}=await En.storage.from("editions").upload(x,i.archivo);if(m)throw m;d=x}const{data:f,error:_}=await En.from("editions").insert([{titulo:i.titulo,descripcion:i.descripcion,fecha_publicacion:i.fecha_publicacion,portada_url:h,archivo_url:d,estado:"publicado"}]).select().single();if(_)throw _;s({text:"¡Edición creada exitosamente!",type:"success"}),setTimeout(()=>{a(`/ediciones/${f.id}`)},2e3)}catch(h){console.error("Error al crear la edición:",h),s({text:h.message||"Error al crear la edición",type:"error"})}finally{n(!1)}};return L.jsx("div",{className:"max-w-4xl mx-auto p-4 sm:p-6",children:L.jsxs("div",{className:"bg-white rounded-lg shadow-md overflow-hidden",children:[L.jsx("div",{className:"px-4 py-5 sm:px-6 bg-gray-50 border-b border-gray-200",children:L.jsx("h1",{className:"text-xl sm:text-2xl font-bold text-gray-900",children:"Crear Nueva Edición"})}),r.text&&L.jsx("div",{className:`p-4 mx-4 mt-4 rounded-md ${r.type==="success"?"bg-green-50 text-green-800 border border-green-200":"bg-red-50 text-red-800 border border-red-200"}`,children:L.jsxs("div",{className:"flex",children:[L.jsx("div",{className:"flex-shrink-0",children:r.type==="success"?L.jsx("svg",{className:"h-5 w-5 text-green-400",viewBox:"0 0 20 20",fill:"currentColor",children:L.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})}):L.jsx("svg",{className:"h-5 w-5 text-red-400",viewBox:"0 0 20 20",fill:"currentColor",children:L.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",clipRule:"evenodd"})})}),L.jsx("div",{className:"ml-3",children:L.jsx("p",{className:"text-sm font-medium",children:r.text})})]})}),L.jsxs("form",{onSubmit:l,className:"divide-y divide-gray-200",children:[L.jsx("div",{className:"px-4 py-6 sm:p-6 space-y-6",children:L.jsxs("div",{className:"grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6",children:[L.jsxs("div",{className:"sm:col-span-6",children:[L.jsx("label",{htmlFor:"titulo",className:"block text-sm font-medium text-gray-700",children:"Título *"}),L.jsx("div",{className:"mt-1",children:L.jsx("input",{type:"text",name:"titulo",id:"titulo",value:i.titulo,onChange:o,required:!0,className:"block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",placeholder:"Título de la edición"})})]}),L.jsxs("div",{className:"sm:col-span-6",children:[L.jsx("label",{htmlFor:"descripcion",className:"block text-sm font-medium text-gray-700",children:"Descripción"}),L.jsx("div",{className:"mt-1",children:L.jsx("textarea",{id:"descripcion",name:"descripcion",rows:3,className:"block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",value:i.descripcion,onChange:o,placeholder:"Descripción de la edición"})}),L.jsx("p",{className:"mt-2 text-sm text-gray-500",children:"Escribe una breve descripción de esta edición."})]}),L.jsxs("div",{className:"sm:col-span-6 md:col-span-3",children:[L.jsx("label",{htmlFor:"fecha_publicacion",className:"block text-sm font-medium text-gray-700",children:"Fecha de Publicación *"}),L.jsx("div",{className:"mt-1",children:L.jsx("input",{type:"date",name:"fecha_publicacion",id:"fecha_publicacion",value:i.fecha_publicacion,onChange:o,required:!0,className:"block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"})})]}),L.jsx("div",{className:"sm:col-span-6",children:L.jsxs("div",{className:"border-2 border-dashed border-gray-300 rounded-lg p-6 text-center",children:[L.jsx("svg",{className:"mx-auto h-12 w-12 text-gray-400",stroke:"currentColor",fill:"none",viewBox:"0 0 48 48","aria-hidden":"true",children:L.jsx("path",{d:"M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})}),L.jsxs("div",{className:"mt-4 flex text-sm text-gray-600",children:[L.jsxs("label",{htmlFor:"portada",className:"relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500",children:[L.jsx("span",{children:"Subir una imagen de portada"}),L.jsx("input",{id:"portada",name:"portada",type:"file",accept:"image/*",onChange:o,required:!0,className:"sr-only"})]}),L.jsx("p",{className:"pl-1",children:"o arrastra y suelta"})]}),L.jsx("p",{className:"text-xs text-gray-500 mt-2",children:"PNG, JPG, WEBP hasta 5MB"}),i.portada&&L.jsxs("p",{className:"mt-2 text-sm text-gray-500",children:["Archivo seleccionado: ",i.portada.name]})]})}),L.jsx("div",{className:"sm:col-span-6",children:L.jsxs("div",{className:"border-2 border-dashed border-gray-300 rounded-lg p-6 text-center",children:[L.jsx("svg",{className:"mx-auto h-12 w-12 text-gray-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:L.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})}),L.jsxs("div",{className:"mt-4 flex text-sm text-gray-600",children:[L.jsxs("label",{htmlFor:"archivo",className:"relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500",children:[L.jsx("span",{children:"Subir archivo PDF"}),L.jsx("input",{id:"archivo",name:"archivo",type:"file",accept:".pdf",onChange:o,required:!0,className:"sr-only"})]}),L.jsx("p",{className:"pl-1",children:"o arrastra y suelta"})]}),L.jsx("p",{className:"text-xs text-gray-500 mt-2",children:"PDF hasta 50MB"}),i.archivo&&L.jsxs("p",{className:"mt-2 text-sm text-gray-500",children:["Archivo seleccionado: ",i.archivo.name]})]})})]})}),L.jsx("div",{className:"px-4 py-3 bg-gray-50 text-right sm:px-6",children:L.jsxs("div",{className:"flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-3",children:[L.jsx("button",{type:"button",onClick:()=>a("/"),className:"mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",disabled:t,children:"Cancelar"}),L.jsx("button",{type:"submit",className:"w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm disabled:opacity-50",disabled:t,children:t?L.jsxs(L.Fragment,{children:[L.jsxs("svg",{className:"animate-spin -ml-1 mr-3 h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[L.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),L.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Guardando..."]}):"Guardar Edición"})]})})]})]})})}function Fx(){const[i,e]=q.useState(""),[t,n]=q.useState(""),[r,s]=q.useState(!1),{login:a}=no(),o=async l=>{l.preventDefault(),s(!0),n("");try{const{error:c}=await a(i);if(c)throw c;n("Check your email for the login link!")}catch(c){n(c.error_description||c.message)}finally{s(!1)}};return L.jsxs("div",{className:"max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md",children:[L.jsx("h2",{className:"text-2xl font-bold mb-6 text-center",children:"Sign In"}),t&&L.jsx("div",{className:`p-3 mb-4 rounded ${t.includes("Check")?"bg-green-100 text-green-700":"bg-red-100 text-red-700"}`,children:t}),L.jsxs("form",{onSubmit:o,className:"space-y-4",children:[L.jsxs("div",{children:[L.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700",children:"Email address"}),L.jsx("input",{id:"email",type:"email",value:i,onChange:l=>e(l.target.value),required:!0,className:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500",placeholder:"you@example.com"})]}),L.jsx("div",{children:L.jsx("button",{type:"submit",disabled:r,className:"w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50",children:r?"Sending magic link...":"Send Magic Link"})})]})]})}function kx(){const i=zi();return q.useEffect(()=>{(async()=>{const{data:{session:t}}=await En.auth.getSession();i(t?"/dashboard":"/login")})()},[i]),L.jsx("div",{className:"flex items-center justify-center min-h-screen",children:L.jsxs("div",{className:"text-center",children:[L.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500 mx-auto mb-4"}),L.jsx("p",{className:"text-gray-600",children:"Completing login..."})]})})}function Bx(){const i=zi(),e=Dn(),[t,n]=q.useState(!1),[r,s]=q.useState(""),[a,o]=q.useState(!1);q.useEffect(()=>{const d=f=>{f.detail&&f.detail.type==="PDF_URL_UPDATE"&&s(f.detail.url)};return window.addEventListener("pdfUrlUpdate",d),()=>{window.removeEventListener("pdfUrlUpdate",d)}},[]);const l=()=>{i("/")},c=()=>{if(r){const d=document.createElement("a");d.href=r,d.download="documento.pdf",document.body.appendChild(d),d.click(),document.body.removeChild(d)}},h=()=>{document.fullscreenElement?document.exitFullscreen&&(document.exitFullscreen(),n(!1)):(document.documentElement.requestFullscreen().catch(d=>{console.error(`Error attempting to enable fullscreen: ${d.message}`)}),n(!0))};return q.useEffect(()=>{const d=()=>{n(!!document.fullscreenElement)};return document.addEventListener("fullscreenchange",d),()=>{document.removeEventListener("fullscreenchange",d)}},[]),L.jsxs("div",{children:[L.jsxs("div",{className:`header-buttons ${a?"mobile-visible":""}`,children:[e.pathname!=="/"&&L.jsxs("button",{className:"header-button",onClick:l,"aria-label":"Go to home",children:[L.jsx("i",{className:"fas fa-home"}),L.jsx("span",{children:"Inicio"})]}),e.pathname.startsWith("/ediciones/")&&L.jsxs(L.Fragment,{children:[L.jsxs("button",{className:"header-button",onClick:c,"aria-label":"Download PDF",disabled:!r,children:[L.jsx("i",{className:"fas fa-download"}),L.jsx("span",{children:"Descargar"})]}),L.jsxs("button",{className:"header-button",onClick:h,"aria-label":t?"Exit fullscreen":"Enter fullscreen",children:[L.jsx("i",{className:t?"fas fa-compress":"fas fa-expand"}),L.jsx("span",{children:t?"Salir pantalla completa":"Pantalla completa"})]})]})]}),L.jsx("button",{className:"mobile-menu-button",onClick:()=>o(!a),"aria-label":"Toggle menu",children:L.jsx("i",{className:a?"fas fa-times":"fas fa-bars"})})]})}const zx=({children:i})=>{const{user:e,loading:t}=no(),n=Dn();return t?L.jsx("div",{className:"flex items-center justify-center min-h-screen",children:L.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"})}):e?i:L.jsx(Cc,{to:"/login",state:{from:n},replace:!0})};function Hx(){const i=Dn(),{user:e}=no(),t=i.pathname.startsWith("/ediciones/");return q.useEffect(()=>{const n=document.documentElement,r=document.body;return document.body.classList.add("antroponomas-body"),t?(n.style.overflow="hidden",r.style.overflow="hidden"):(n.style.overflow="auto",r.style.overflow="auto"),()=>{n.style.overflow="auto",r.style.overflow="auto",document.body.classList.remove("antroponomas-body")}},[t]),L.jsxs("div",{className:"antroponomas-app",children:[!t&&L.jsx(Bx,{}),L.jsxs(gd,{children:[L.jsx(Wn,{path:"/",element:L.jsx(Ox,{})}),L.jsx(Wn,{path:"/ediciones/:editionId",element:L.jsx(_m,{})}),L.jsx(Wn,{path:"/crear-edicion",element:L.jsx(zx,{children:L.jsx(Nx,{})})}),L.jsx(Wn,{path:"/login",element:L.jsx(Fx,{})}),L.jsx(Wn,{path:"/auth/callback",element:L.jsx(kx,{})}),L.jsx(Wn,{path:"*",element:L.jsx(Cc,{to:"/",replace:!0})})]})]})}function Gx(){return L.jsx(bd,{children:L.jsx(Jp,{children:L.jsx(Hx,{})})})}const Vx=document.getElementById("root"),Wx=Eu.createRoot(Vx);Wx.render(L.jsx(Ut.StrictMode,{children:L.jsx(Gx,{})}));
