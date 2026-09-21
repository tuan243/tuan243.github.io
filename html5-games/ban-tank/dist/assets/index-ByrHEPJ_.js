(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var bh={exports:{}},ml={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T_;function pb(){if(T_)return ml;T_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:o,type:s,key:d,ref:l!==void 0?l:null,props:u}}return ml.Fragment=t,ml.jsx=i,ml.jsxs=i,ml}var A_;function mb(){return A_||(A_=1,bh.exports=pb()),bh.exports}var V=mb(),Eh={exports:{}},pt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w_;function gb(){if(w_)return pt;w_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),p=Symbol.for("react.view_transition"),b=Symbol.iterator;function A(B){return B===null||typeof B!="object"?null:(B=b&&B[b]||B["@@iterator"],typeof B=="function"?B:null)}var L={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,S={};function N(B,X,se){this.props=B,this.context=X,this.refs=S,this.updater=se||L}N.prototype.isReactComponent={},N.prototype.setState=function(B,X){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,X,"setState")},N.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function F(){}F.prototype=N.prototype;function R(B,X,se){this.props=B,this.context=X,this.refs=S,this.updater=se||L}var D=R.prototype=new F;D.constructor=R,y(D,N.prototype),D.isPureReactComponent=!0;var C=Array.isArray;function I(){}var M={H:null,A:null,T:null,S:null},U=Object.prototype.hasOwnProperty;function k(B,X,se){var H=se.ref;return{$$typeof:o,type:B,key:X,ref:H!==void 0?H:null,props:se}}function W(B,X){return k(B.type,X,B.props)}function Y(B){return typeof B=="object"&&B!==null&&B.$$typeof===o}function ce(B){var X={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(se){return X[se]})}var $=/\/+/g;function te(B,X){return typeof B=="object"&&B!==null&&B.key!=null?ce(""+B.key):X.toString(36)}function Z(B){switch(B.status){case"fulfilled":return B.value;case"rejected":throw B.reason;default:switch(typeof B.status=="string"?B.then(I,I):(B.status="pending",B.then(function(X){B.status==="pending"&&(B.status="fulfilled",B.value=X)},function(X){B.status==="pending"&&(B.status="rejected",B.reason=X)})),B.status){case"fulfilled":return B.value;case"rejected":throw B.reason}}throw B}function K(B,X,se,H,ee){var Se=typeof B;(Se==="undefined"||Se==="boolean")&&(B=null);var De=!1;if(B===null)De=!0;else switch(Se){case"bigint":case"string":case"number":De=!0;break;case"object":switch(B.$$typeof){case o:case t:De=!0;break;case x:return De=B._init,K(De(B._payload),X,se,H,ee)}}if(De)return ee=ee(B),De=H===""?"."+te(B,0):H,C(ee)?(se="",De!=null&&(se=De.replace($,"$&/")+"/"),K(ee,X,se,"",function(st){return st})):ee!=null&&(Y(ee)&&(ee=W(ee,se+(ee.key==null||B&&B.key===ee.key?"":(""+ee.key).replace($,"$&/")+"/")+De)),X.push(ee)),1;De=0;var de=H===""?".":H+":";if(C(B))for(var Ne=0;Ne<B.length;Ne++)H=B[Ne],Se=de+te(H,Ne),De+=K(H,X,se,Se,ee);else if(Ne=A(B),typeof Ne=="function")for(B=Ne.call(B),Ne=0;!(H=B.next()).done;)H=H.value,Se=de+te(H,Ne++),De+=K(H,X,se,Se,ee);else if(Se==="object"){if(typeof B.then=="function")return K(Z(B),X,se,H,ee);throw X=String(B),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return De}function ge(B,X,se){if(B==null)return B;var H=[],ee=0;return K(B,H,"","",function(Se){return X.call(se,Se,ee++)}),H}function le(B){if(B._status===-1){var X=B._result,se=X();se.then(function(H){(B._status===0||B._status===-1)&&(B._status=1,B._result=H,se.status===void 0&&(se.status="fulfilled",se.value=H))},function(H){(B._status===0||B._status===-1)&&(B._status=2,B._result=H,se.status===void 0&&(se.status="rejected",se.reason=H))}),B._status===-1&&(B._status=0,B._result=se)}if(B._status===1)return B._result.default;throw B._result}var O=typeof reportError=="function"?reportError:function(B){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof B=="object"&&B!==null&&typeof B.message=="string"?String(B.message):String(B),error:B});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",B);return}console.error(B)};function P(B){var X=M.T,se={};se.types=X!==null?X.types:null,M.T=se;try{var H=B(),ee=M.S;ee!==null&&ee(se,H),typeof H=="object"&&H!==null&&typeof H.then=="function"&&H.then(I,O)}catch(Se){O(Se)}finally{X!==null&&se.types!==null&&(X.types=se.types),M.T=X}}function be(B){var X=M.T;if(X!==null){var se=X.types;se===null?X.types=[B]:se.indexOf(B)===-1&&se.push(B)}else P(be.bind(null,B))}var Ce={map:ge,forEach:function(B,X,se){ge(B,function(){X.apply(this,arguments)},se)},count:function(B){var X=0;return ge(B,function(){X++}),X},toArray:function(B){return ge(B,function(X){return X})||[]},only:function(B){if(!Y(B))throw Error("React.Children.only expected to receive a single React element child.");return B}};return pt.Activity=v,pt.Children=Ce,pt.Component=N,pt.Fragment=i,pt.Profiler=l,pt.PureComponent=R,pt.StrictMode=s,pt.Suspense=m,pt.ViewTransition=p,pt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=M,pt.__COMPILER_RUNTIME={__proto__:null,c:function(B){return M.H.useMemoCache(B)}},pt.addTransitionType=be,pt.cache=function(B){return function(){return B.apply(null,arguments)}},pt.cacheSignal=function(){return null},pt.cloneElement=function(B,X,se){if(B==null)throw Error("The argument must be a React element, but you passed "+B+".");var H=y({},B.props),ee=B.key;if(X!=null)for(Se in X.key!==void 0&&(ee=""+X.key),X)!U.call(X,Se)||Se==="key"||Se==="__self"||Se==="__source"||Se==="ref"&&X.ref===void 0||(H[Se]=X[Se]);var Se=arguments.length-2;if(Se===1)H.children=se;else if(1<Se){for(var De=Array(Se),de=0;de<Se;de++)De[de]=arguments[de+2];H.children=De}return k(B.type,ee,H)},pt.createContext=function(B){return B={$$typeof:d,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null},B.Provider=B,B.Consumer={$$typeof:u,_context:B},B},pt.createElement=function(B,X,se){var H,ee={},Se=null;if(X!=null)for(H in X.key!==void 0&&(Se=""+X.key),X)U.call(X,H)&&H!=="key"&&H!=="__self"&&H!=="__source"&&(ee[H]=X[H]);var De=arguments.length-2;if(De===1)ee.children=se;else if(1<De){for(var de=Array(De),Ne=0;Ne<De;Ne++)de[Ne]=arguments[Ne+2];ee.children=de}if(B&&B.defaultProps)for(H in De=B.defaultProps,De)ee[H]===void 0&&(ee[H]=De[H]);return k(B,Se,ee)},pt.createRef=function(){return{current:null}},pt.forwardRef=function(B){return{$$typeof:h,render:B}},pt.isValidElement=Y,pt.lazy=function(B){return{$$typeof:x,_payload:{_status:-1,_result:B},_init:le}},pt.memo=function(B,X){return{$$typeof:g,type:B,compare:X===void 0?null:X}},pt.startTransition=P,pt.unstable_useCacheRefresh=function(){return M.H.useCacheRefresh()},pt.use=function(B){return M.H.use(B)},pt.useActionState=function(B,X,se){return M.H.useActionState(B,X,se)},pt.useCallback=function(B,X){return M.H.useCallback(B,X)},pt.useContext=function(B){return M.H.useContext(B)},pt.useDebugValue=function(){},pt.useDeferredValue=function(B,X){return M.H.useDeferredValue(B,X)},pt.useEffect=function(B,X){return M.H.useEffect(B,X)},pt.useEffectEvent=function(B){return M.H.useEffectEvent(B)},pt.useId=function(){return M.H.useId()},pt.useImperativeHandle=function(B,X,se){return M.H.useImperativeHandle(B,X,se)},pt.useInsertionEffect=function(B,X){return M.H.useInsertionEffect(B,X)},pt.useLayoutEffect=function(B,X){return M.H.useLayoutEffect(B,X)},pt.useMemo=function(B,X){return M.H.useMemo(B,X)},pt.useOptimistic=function(B,X){return M.H.useOptimistic(B,X)},pt.useReducer=function(B,X,se){return M.H.useReducer(B,X,se)},pt.useRef=function(B){return M.H.useRef(B)},pt.useState=function(B){return M.H.useState(B)},pt.useSyncExternalStore=function(B,X,se){return M.H.useSyncExternalStore(B,X,se)},pt.useTransition=function(){return M.H.useTransition()},pt.version="19.3.0",pt}var R_;function Zp(){return R_||(R_=1,Eh.exports=gb()),Eh.exports}var Ct=Zp(),Th={exports:{}},gl={},Ah={exports:{}},wh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C_;function vb(){return C_||(C_=1,(function(o){function t(Z,K){var ge=Z.length;Z.push(K);e:for(;0<ge;){var le=ge-1>>>1,O=Z[le];if(0<l(O,K))Z[le]=K,Z[ge]=O,ge=le;else break e}}function i(Z){return Z.length===0?null:Z[0]}function s(Z){if(Z.length===0)return null;var K=Z[0],ge=Z.pop();if(ge!==K){Z[0]=ge;e:for(var le=0,O=Z.length,P=O>>>1;le<P;){var be=2*(le+1)-1,Ce=Z[be],B=be+1,X=Z[B];if(0>l(Ce,ge))B<O&&0>l(X,Ce)?(Z[le]=X,Z[B]=ge,le=B):(Z[le]=Ce,Z[be]=ge,le=be);else if(B<O&&0>l(X,ge))Z[le]=X,Z[B]=ge,le=B;else break e}}return K}function l(Z,K){var ge=Z.sortIndex-K.sortIndex;return ge!==0?ge:Z.id-K.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],g=[],x=1,v=null,p=3,b=!1,A=!1,L=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate<"u"?setImmediate:null;function R(Z){for(var K=i(g);K!==null;){if(K.callback===null)s(g);else if(K.startTime<=Z)s(g),K.sortIndex=K.expirationTime,t(m,K);else break;K=i(g)}}function D(Z){if(L=!1,R(Z),!A)if(i(m)!==null)A=!0,C||(C=!0,Y());else{var K=i(g);K!==null&&te(D,K.startTime-Z)}}var C=!1,I=-1,M=5,U=-1;function k(){return y?!0:!(o.unstable_now()-U<M)}function W(){if(y=!1,C){var Z=o.unstable_now();U=Z;var K=!0;try{e:{A=!1,L&&(L=!1,N(I),I=-1),b=!0;var ge=p;try{t:{for(R(Z),v=i(m);v!==null&&!(v.expirationTime>Z&&k());){var le=v.callback;if(typeof le=="function"){v.callback=null,p=v.priorityLevel;var O=le(v.expirationTime<=Z);if(Z=o.unstable_now(),typeof O=="function"){v.callback=O,R(Z),K=!0;break t}v===i(m)&&s(m),R(Z)}else s(m);v=i(m)}if(v!==null)K=!0;else{var P=i(g);P!==null&&te(D,P.startTime-Z),K=!1}}break e}finally{v=null,p=ge,b=!1}K=void 0}}finally{K?Y():C=!1}}}var Y;if(typeof F=="function")Y=function(){F(W)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,$=ce.port2;ce.port1.onmessage=W,Y=function(){$.postMessage(null)}}else Y=function(){S(W,0)};function te(Z,K){I=S(function(){Z(o.unstable_now())},K)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(Z){Z.callback=null},o.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<Z?Math.floor(1e3/Z):5},o.unstable_getCurrentPriorityLevel=function(){return p},o.unstable_next=function(Z){switch(p){case 1:case 2:case 3:var K=3;break;default:K=p}var ge=p;p=K;try{return Z()}finally{p=ge}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(Z,K){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var ge=p;p=Z;try{return K()}finally{p=ge}},o.unstable_scheduleCallback=function(Z,K,ge){var le=o.unstable_now();switch(typeof ge=="object"&&ge!==null?(ge=ge.delay,ge=typeof ge=="number"&&0<ge?le+ge:le):ge=le,Z){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=ge+O,Z={id:x++,callback:K,priorityLevel:Z,startTime:ge,expirationTime:O,sortIndex:-1},ge>le?(Z.sortIndex=ge,t(g,Z),i(m)===null&&Z===i(g)&&(L?(N(I),I=-1):L=!0,te(D,ge-le))):(Z.sortIndex=O,t(m,Z),A||b||(A=!0,C||(C=!0,Y()))),Z},o.unstable_shouldYield=k,o.unstable_wrapCallback=function(Z){var K=p;return function(){var ge=p;p=K;try{return Z.apply(this,arguments)}finally{p=ge}}}})(wh)),wh}var N_;function _b(){return N_||(N_=1,Ah.exports=vb()),Ah.exports}var Rh={exports:{}},zn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D_;function xb(){if(D_)return zn;D_=1;var o=Zp();function t(x){var v="https://react.dev/errors/"+x;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var p=2;p<arguments.length;p++)v+="&args[]="+encodeURIComponent(arguments[p])}return"Minified React error #"+x+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),u=Symbol.for("react.recoverable"),d=Symbol.for("react.optimistic_key");function h(x,v,p){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:b==null?null:b===d?d:""+b,children:x,containerInfo:v,implementation:p}}var m=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(x,v){if(x==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return zn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,zn.browser=function(x){return{$$typeof:u,_reason:x}},zn.createPortal=function(x,v){var p=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(t(299));return h(x,v,null,p)},zn.flushSync=function(x){var v=m.T,p=s.p;try{if(m.T=null,s.p=2,x)return x()}finally{m.T=v,s.p=p,s.d.f()}},zn.preconnect=function(x,v){typeof x=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,s.d.C(x,v))},zn.prefetchDNS=function(x){typeof x=="string"&&s.d.D(x)},zn.preinit=function(x,v){if(typeof x=="string"&&v&&typeof v.as=="string"){var p=v.as,b=g(p,v.crossOrigin),A=typeof v.integrity=="string"?v.integrity:void 0,L=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;p==="style"?s.d.S(x,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:b,integrity:A,fetchPriority:L}):p==="script"&&s.d.X(x,{crossOrigin:b,integrity:A,fetchPriority:L,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},zn.preinitModule=function(x,v){if(typeof x=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var p=g(v.as,v.crossOrigin);s.d.M(x,{crossOrigin:p,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0})}}else v==null&&s.d.M(x)},zn.preload=function(x,v){if(typeof x=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var p=v.as,b=g(p,v.crossOrigin);s.d.L(x,p,{crossOrigin:b,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},zn.preloadModule=function(x,v){if(typeof x=="string")if(v){var p=g(v.as,v.crossOrigin);s.d.m(x,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:p,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0})}else s.d.m(x)},zn.requestFormReset=function(x){s.d.r(x)},zn.unstable_batchedUpdates=function(x,v){return x(v)},zn.useFormState=function(x,v,p){return m.H.useFormState(x,v,p)},zn.useFormStatus=function(){return m.H.useHostTransitionStatus()},zn.version="19.3.0",zn}var U_;function Sb(){if(U_)return Rh.exports;U_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Rh.exports=xb(),Rh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L_;function yb(){if(L_)return gl;L_=1;var o=_b(),t=Zp(),i=Sb();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){for(var n=e,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(e=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?e:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(s(188))}function g(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),e;if(f===r)return m(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=c,r=f;else{for(var _=!1,w=c.child;w;){if(w===a){_=!0,a=c,r=f;break}if(w===r){_=!0,r=c,a=f;break}w=w.sibling}if(!_){for(w=f.child;w;){if(w===a){_=!0,a=f,r=c;break}if(w===r){_=!0,r=f,a=c;break}w=w.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function x(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=x(e),n!==null)return n;e=e.sibling}return null}function v(e,n,a,r,c,f){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&a(e,r,c,f)||(e.tag!==22||e.memoizedState===null)&&(n||e.tag!==5&&e.tag!==27)&&v(e.child,n,a,r,c,f))return!0;e=e.sibling}return!1}function p(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function b(e){var n=!1;for(e=e.return;e!==null&&(e.tag===4&&(n=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return n}function A(e){var n=[null,null],a=p(e);return a===null||L(n,e,a.child,{foundSelf:!1}),n}function L(e,n,a,r){for(;a!==null;){if(a===n)r.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(r.foundSelf)return e[1]=a,!0;e[0]=a}else if((a.tag!==22||a.memoizedState===null)&&L(e,n,a.child,r))return!0;a=a.sibling}return!1}function y(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(s(559))}}var S=null,N=null;function F(e,n,a){return e===a?!0:e===n?(S=e,!0):!1}function R(e,n,a){return e===a?(N=e,!1):e===n?(N!==null&&(S=e),!0):!1}function D(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function C(e,n,a){for(var r=0,c=e;c;c=a(c))r++;c=0;for(var f=n;f;f=a(f))c++;for(;0<r-c;)e=a(e),r--;for(;0<c-r;)n=a(n),c--;for(;r--;){if(e===n||n!==null&&e===n.alternate)return e;e=a(e),n=a(n)}return null}var I=Object.assign,M=Symbol.for("react.element"),U=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),W=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),ce=Symbol.for("react.profiler"),$=Symbol.for("react.consumer"),te=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),ge=Symbol.for("react.suspense_list"),le=Symbol.for("react.memo"),O=Symbol.for("react.lazy"),P=Symbol.for("react.activity"),be=Symbol.for("react.legacy_hidden"),Ce=Symbol.for("react.memo_cache_sentinel"),B=Symbol.for("react.view_transition"),X=Symbol.for("react.recoverable"),se=Symbol.iterator;function H(e){return e===null||typeof e!="object"?null:(e=se&&e[se]||e["@@iterator"],typeof e=="function"?e:null)}var ee=Symbol.for("react.client.reference");function Se(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ee?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case W:return"Fragment";case ce:return"Profiler";case Y:return"StrictMode";case K:return"Suspense";case ge:return"SuspenseList";case P:return"Activity";case B:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case k:return"Portal";case te:return e.displayName||"Context";case $:return(e._context.displayName||"Context")+".Consumer";case Z:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case le:return n=e.displayName||null,n!==null?n:Se(e.type)||"Memo";case O:n=e._payload,e=e._init;try{return Se(e(n))}catch{}}return null}var De=Array.isArray,de=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ne=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,st={pending:!1,data:null,method:null,action:null},ke=[],it=-1;function lt(e){return{current:e}}function Pe(e){0>it||(e.current=ke[it],ke[it]=null,it--)}function Be(e,n){it++,ke[it]=e.current,e.current=n}var ot=lt(null),ft=lt(null),mt=lt(null),gt=lt(null);function Q(e,n){switch(Be(mt,n),Be(ft,e),Be(ot,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Ov(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Ov(n),e=Pv(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Pe(ot),Be(ot,e)}function Wt(){Pe(ot),Pe(ft),Pe(mt)}function Et(e){var n=e.memoizedState;n!==null&&(Wr._currentValue=n.memoizedState,Be(gt,e)),n=ot.current;var a=Pv(n,e.type);n!==a&&(Be(ft,e),Be(ot,a))}function z(e){ft.current===e&&(Pe(ot),Pe(ft)),gt.current===e&&(Pe(gt),Wr._currentValue=st)}var E,re;function fe(e){if(E===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);E=n&&n[1]||"",re=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+E+e+re}var xe=!1;function Ie(e,n){if(!e||xe)return"";xe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var Ae=function(){throw Error()};if(Object.defineProperty(Ae.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ae,[])}catch(We){var ne=We}Reflect.construct(e,[],Ae)}else{try{Ae.call()}catch(We){ne=We}Ae=!1;try{var me=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),Ae=!0,new e}finally{Ae&&(me!==void 0?Object.defineProperty(e.prototype,"props",me):delete e.prototype.props)}}}else{try{throw Error()}catch(We){ne=We}(Ae=e())&&typeof Ae.catch=="function"&&Ae.catch(function(){})}}catch(We){if(We&&ne&&typeof We.stack=="string")return[We.stack,ne.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),_=f[0],w=f[1];if(_&&w){var G=_.split(`
`),ae=w.split(`
`);for(c=r=0;r<G.length&&!G[r].includes("DetermineComponentFrameRoot");)r++;for(;c<ae.length&&!ae[c].includes("DetermineComponentFrameRoot");)c++;if(r===G.length||c===ae.length)for(r=G.length-1,c=ae.length-1;1<=r&&0<=c&&G[r]!==ae[c];)c--;for(;1<=r&&0<=c;r--,c--)if(G[r]!==ae[c]){if(r!==1||c!==1)do if(r--,c--,0>c||G[r]!==ae[c]){var ve=`
`+G[r].replace(" at new "," at ");return e.displayName&&ve.includes("<anonymous>")&&(ve=ve.replace("<anonymous>",e.displayName)),ve}while(1<=r&&0<=c);break}}}finally{xe=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?fe(a):""}function Ge(e,n){switch(e.tag){case 26:case 27:case 5:return fe(e.type);case 16:return fe("Lazy");case 13:return e.child!==n&&n!==null?fe("Suspense Fallback"):fe("Suspense");case 19:return fe("SuspenseList");case 0:case 15:return Ie(e.type,!1);case 11:return Ie(e.type.render,!1);case 1:return Ie(e.type,!0);case 31:return fe("Activity");case 30:return fe("ViewTransition");default:return""}}function ye(e){try{var n="",a=null;do n+=Ge(e,a),a=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Ee=Object.prototype.hasOwnProperty,Ue=o.unstable_scheduleCallback,we=o.unstable_cancelCallback,Le=o.unstable_shouldYield,Fe=o.unstable_requestPaint,Oe=o.unstable_now,at=o.unstable_getCurrentPriorityLevel,ct=o.unstable_ImmediatePriority,J=o.unstable_UserBlockingPriority,He=o.unstable_NormalPriority,Me=o.unstable_LowPriority,ze=o.unstable_IdlePriority,Ve=o.log,Re=o.unstable_setDisableYieldValue,$e=null,qe=null;function yt(e){if(typeof Ve=="function"&&Re(e),qe&&typeof qe.setStrictMode=="function")try{qe.setStrictMode($e,e)}catch{}}var vt=Math.clz32?Math.clz32:Qu,ri=Math.log,Si=Math.LN2;function Qu(e){return e>>>=0,e===0?32:31-(ri(e)/Si|0)|0}var or=256,Es=262144,ka=4194304;function ma(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ts(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var c=0,f=e.suspendedLanes,_=e.pingedLanes;e=e.warmLanes;var w=r&134217727;return w!==0?(r=w&~f,r!==0?c=ma(r):(_&=w,_!==0?c=ma(_):a||(a=w&~e,a!==0&&(c=ma(a))))):(w=r&~f,w!==0?c=ma(w):_!==0?c=ma(_):a||(a=r&~e,a!==0&&(c=ma(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Xa(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function qi(e,n){(n&8)!==0&&(n|=n&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=n;0<a;){var r=31-vt(a),c=1<<r;n|=e[r],a&=~c}return n}function yo(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Mo(){var e=ka;return ka<<=1,(ka&62914560)===0&&(ka=4194304),e}function lr(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Yi(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Bl(e,n,a,r,c,f){var _=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var w=e.entanglements,G=e.expirationTimes,ae=e.hiddenUpdates;for(a=_&~a;0<a;){var ve=31-vt(a),Ae=1<<ve;w[ve]=0,G[ve]=-1;var ne=ae[ve];if(ne!==null)for(ae[ve]=null,ve=0;ve<ne.length;ve++){var me=ne[ve];me!==null&&(me.lane&=-536870913)}a&=~Ae}r!==0&&As(e,r,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(_&~n))}function As(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-vt(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&261930}function bo(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-vt(a),c=1<<r;c&n|e[r]&n&&(e[r]|=n),a&=~c}}function Eo(e,n){var a=n&-n;return a=(a&42)!==0?1:To(a),(a&(e.suspendedLanes|n))!==0?0:a}function To(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ao(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Fl(){var e=Ne.p;return e!==0?e:(e=window.event,e===void 0?32:__(e.type))}function Hl(e,n){var a=Ne.p;try{return Ne.p=e,n()}finally{Ne.p=a}}var yi=Math.random().toString(36).slice(2),T="__reactFiber$"+yi,q="__reactProps$"+yi,_e="__reactContainer$"+yi,he="__reactEvents$"+yi,pe="__reactListeners$"+yi,Ye="__reactHandles$"+yi,Ke="__reactResources$"+yi,Xe="__reactMarker$"+yi,et="__reactLoad$"+yi;function tt(e){delete e[T],delete e[q],delete e[pe],delete e[Ye]}function dt(e){var n;if(n=e[T])return n;for(var a=e.parentNode;a;){if(n=a[_e]||a[T]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Jv(e);e!==null;){if(a=e[T])return a;e=Jv(e)}return n}e=a,a=e.parentNode}return null}function _t(e){if(e=e[T]||e[_e]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Qe(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Dt(e){var n=e[Ke];return n||(n=e[Ke]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function At(e){e[Xe]=!0}function Jt(e){e[et]=void 0}var qt=new Set,Mn={};function je(e,n){un(e,n),un(e+"Capture",n)}function un(e,n){for(Mn[e]=n,e=0;e<n.length;e++)qt.add(n[e])}var Ft=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Xn={},oi={};function ji(e){return Ee.call(oi,e)?!0:Ee.call(Xn,e)?!1:Ft.test(e)?oi[e]=!0:(Xn[e]=!0,!1)}var wt=!1;function kt(){var e=wt;return wt=!1,e}function tn(e,n,a){if(ji(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,a)}}function li(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,a)}}function Pt(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,r)}}function fn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ga(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Gl(e,n,a){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,f=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ju(e){if(!e._valueTracker){var n=ga(e)?"checked":"value";e._valueTracker=Gl(e,n,""+e[n])}}function Mm(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=ga(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}var PS=/[\n"\\]/g;function Mi(e){return e.replace(PS,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function $u(e,n,a,r,c,f,_,w){e.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?e.type=_:e.removeAttribute("type"),n!=null?_==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+fn(n)):e.value!==""+fn(n)&&(e.value=""+fn(n)):_!=="submit"&&_!=="reset"||e.removeAttribute("value"),n!=null?_==="number"&&e.value==n?ef(e,fn(e.value)):ef(e,fn(n)):a!=null?ef(e,fn(a)):r!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?e.name=""+fn(w):e.removeAttribute("name")}function bm(e,n,a,r,c,f,_,w){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Ju(e);return}a=a!=null?""+fn(a):"",n=n!=null?""+fn(n):a,w||n===e.value||(e.value=n),e.defaultValue=n}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=w?e.checked:!!r,e.defaultChecked=!!r,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(e.name=_),Ju(e)}function ef(e,n){e.defaultValue!==""+n&&(e.defaultValue=""+n)}function cr(e,n,a,r){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&r&&(e[a].defaultSelected=!0)}else{for(a=""+fn(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,r&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function Em(e,n,a){if(n!=null&&(n=""+fn(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+fn(a):""}function Tm(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(De(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=fn(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r),Ju(e)}function ur(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var IS=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Am(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||IS.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function wm(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="",wt=!0);for(var c in n)r=n[c],n.hasOwnProperty(c)&&a[c]!==r&&(Am(e,c,r),wt=!0)}else for(var f in n)n.hasOwnProperty(f)&&Am(e,f,n[f])}function tf(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),BS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Vl(e){return BS.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Zi(){}var nf=null;function af(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fr=null,dr=null;function Rm(e){var n=_t(e);if(n&&(e=n.stateNode)){var a=e[q]||null;e:switch(e=n.stateNode,n.type){case"input":if($u(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Mi(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var c=r[q]||null;if(!c)throw Error(s(90));$u(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&Mm(r)}break e;case"textarea":Em(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&cr(e,!!a.multiple,n,!1)}}}var sf=!1;function Cm(e,n,a){if(sf)return e(n,a);sf=!0;try{var r=e(n);return r}finally{if(sf=!1,(fr!==null||dr!==null)&&(Vc(),fr&&(n=fr,e=dr,dr=fr=null,Rm(n),e)))for(n=0;n<e.length;n++)Rm(e[n])}}function wo(e,n){var a=e.stateNode;if(a===null)return null;var r=a[q]||null;if(r===null)return null;a=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var va=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),rf=!1;if(va)try{var Ro={};Object.defineProperty(Ro,"passive",{get:function(){rf=!0}}),window.addEventListener("test",Ro,Ro),window.removeEventListener("test",Ro,Ro)}catch{rf=!1}var Wa=null,of=null,kl=null;function Nm(){if(kl)return kl;var e,n=of,a=n.length,r,c="value"in Wa?Wa.value:Wa.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var _=a-e;for(r=1;r<=_&&n[a-r]===c[f-r];r++);return kl=c.slice(e,1<r?1-r:void 0)}function Xl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Wl(){return!0}function Dm(){return!1}function Wn(e){function n(a,r,c,f,_){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var w in e)e.hasOwnProperty(w)&&(a=e[w],this[w]=a?a(f):f[w]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Wl:Dm,this.isPropagationStopped=Dm,this}return I(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Wl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Wl)},persist:function(){},isPersistent:Wl}),n}var qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ql=Wn(qa),Co=I({},qa,{view:0,detail:0}),FS=Wn(Co),lf,cf,No,Yl=I({},Co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ff,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==No&&(No&&e.type==="mousemove"?(lf=e.screenX-No.screenX,cf=e.screenY-No.screenY):cf=lf=0,No=e),lf)},movementY:function(e){return"movementY"in e?e.movementY:cf}}),Um=Wn(Yl),HS=I({},Yl,{dataTransfer:0}),GS=Wn(HS),VS=I({},Co,{relatedTarget:0}),uf=Wn(VS),kS=I({},qa,{animationName:0,elapsedTime:0,pseudoElement:0}),XS=Wn(kS),WS=I({},qa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),qS=Wn(WS),YS=I({},qa,{data:0}),Lm=Wn(YS),jS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ZS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},KS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function QS(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=KS[e])?!!n[e]:!1}function ff(){return QS}var JS=I({},Co,{key:function(e){if(e.key){var n=jS[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Xl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ZS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ff,charCode:function(e){return e.type==="keypress"?Xl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Xl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),$S=Wn(JS),ey=I({},Yl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Om=Wn(ey),ty=I({},qa,{submitter:0}),ny=Wn(ty),iy=I({},Co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ff}),ay=Wn(iy),sy=I({},qa,{propertyName:0,elapsedTime:0,pseudoElement:0}),ry=Wn(sy),oy=I({},Yl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ly=Wn(oy),cy=I({},qa,{newState:0,oldState:0,source:0}),uy=Wn(cy),fy=[9,13,27,32],df=va&&"CompositionEvent"in window,Do=null;va&&"documentMode"in document&&(Do=document.documentMode);var dy=va&&"TextEvent"in window&&!Do,Pm=va&&(!df||Do&&8<Do&&11>=Do),Im=" ",zm=!1;function Bm(e,n){switch(e){case"keyup":return fy.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var hr=!1;function hy(e,n){switch(e){case"compositionend":return Fm(n);case"keypress":return n.which!==32?null:(zm=!0,Im);case"textInput":return e=n.data,e===Im&&zm?null:e;default:return null}}function py(e,n){if(hr)return e==="compositionend"||!df&&Bm(e,n)?(e=Nm(),kl=of=Wa=null,hr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Pm&&n.locale!=="ko"?null:n.data;default:return null}}var my={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hm(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!my[e.type]:n==="textarea"}function Gm(e,n,a,r){fr?dr?dr.push(r):dr=[r]:fr=r,n=jc(n,"onChange"),0<n.length&&(a=new ql("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var Uo=null,Lo=null;function gy(e){Rv(e,0)}function jl(e){var n=Qe(e);if(Mm(n))return e}function Vm(e,n){if(e==="change")return n}var km=!1;if(va){var hf;if(va){var pf="oninput"in document;if(!pf){var Xm=document.createElement("div");Xm.setAttribute("oninput","return;"),pf=typeof Xm.oninput=="function"}hf=pf}else hf=!1;km=hf&&(!document.documentMode||9<document.documentMode)}function Wm(){Uo&&(Uo.detachEvent("onpropertychange",qm),Lo=Uo=null)}function qm(e){if(e.propertyName==="value"&&jl(Lo)){var n=[];Gm(n,Lo,e,af(e)),Cm(gy,n)}}function vy(e,n,a){e==="focusin"?(Wm(),Uo=n,Lo=a,Uo.attachEvent("onpropertychange",qm)):e==="focusout"&&Wm()}function _y(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return jl(Lo)}function xy(e,n){if(e==="click")return jl(n)}function Sy(e,n){if(e==="input"||e==="change")return jl(n)}function yy(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ci=typeof Object.is=="function"?Object.is:yy;function Oo(e,n){if(ci(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!Ee.call(n,c)||!ci(e[c],n[c]))return!1}return!0}function mf(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ym(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function jm(e,n){var a=Ym(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Ym(a)}}function Zm(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Zm(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Km(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=mf(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=mf(e.document)}return n}function gf(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var My=va&&"documentMode"in document&&11>=document.documentMode,pr=null,vf=null,Po=null,_f=!1;function Qm(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;_f||pr==null||pr!==mf(r)||(r=pr,"selectionStart"in r&&gf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Po&&Oo(Po,r)||(Po=r,r=jc(vf,"onSelect"),0<r.length&&(n=new ql("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=pr)))}function ws(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var mr={animationend:ws("Animation","AnimationEnd"),animationiteration:ws("Animation","AnimationIteration"),animationstart:ws("Animation","AnimationStart"),transitionrun:ws("Transition","TransitionRun"),transitionstart:ws("Transition","TransitionStart"),transitioncancel:ws("Transition","TransitionCancel"),transitionend:ws("Transition","TransitionEnd")},xf={},Jm={};va&&(Jm=document.createElement("div").style,"AnimationEvent"in window||(delete mr.animationend.animation,delete mr.animationiteration.animation,delete mr.animationstart.animation),"TransitionEvent"in window||delete mr.transitionend.transition);function Rs(e){if(xf[e])return xf[e];if(!mr[e])return e;var n=mr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Jm)return xf[e]=n[a];return e}var $m=Rs("animationend"),e0=Rs("animationiteration"),t0=Rs("animationstart"),by=Rs("transitionrun"),Ey=Rs("transitionstart"),Ty=Rs("transitioncancel"),n0=Rs("transitionend"),i0=new Map,Sf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Sf.push("scrollEnd");function Oi(e,n){i0.set(e,n),je(n,[e])}var Ay=0;function _a(e,n){if(e.name!=null&&e.name!=="auto")return e.name;if(n.autoName!==null)return n.autoName;e=Bi.identifierPrefix;var a=Ay++;return e="_"+e+"t_"+a.toString(32)+"_",n.autoName=e}function a0(e){if(e==null||typeof e=="string")return e;var n=null,a=Pr;if(a!==null)for(var r=0;r<a.length;r++){var c=e[a[r]];if(c!=null){if(c==="none")return"none";n=n==null?c:n+(" "+c)}}return n??e.default}function xa(e,n){return e=a0(e),n=a0(n),n==null?e==="auto"?null:e:n==="auto"?null:n}var Zl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},bi=[],gr=0,yf=0;function Kl(){for(var e=gr,n=yf=gr=0;n<e;){var a=bi[n];bi[n++]=null;var r=bi[n];bi[n++]=null;var c=bi[n];bi[n++]=null;var f=bi[n];if(bi[n++]=null,r!==null&&c!==null){var _=r.pending;_===null?c.next=c:(c.next=_.next,_.next=c),r.pending=c}f!==0&&s0(a,c,f)}}function Ql(e,n,a,r){bi[gr++]=e,bi[gr++]=n,bi[gr++]=a,bi[gr++]=r,yf|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Mf(e,n,a,r){return Ql(e,n,a,r),Jl(e)}function Cs(e,n){return Ql(e,null,null,n),Jl(e)}function s0(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-vt(a),e=f.hiddenUpdates,r=e[c],r===null?e[c]=[n]:r.push(n),n.lane=a|536870912),f):null}function Jl(e){if(50<il)throw il=0,Gc=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var vr={};function wy(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(e,n,a,r){return new wy(e,n,a,r)}function bf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Sa(e,n){var a=e.alternate;return a===null?(a=Qn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&1206910976,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function r0(e,n){e.flags&=1206910978;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function $l(e,n,a,r,c,f){var _=0;if(r=e,typeof r=="function")bf(r)&&(_=1);else if(typeof r=="string")_=tb(e,a,ot.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(r){case P:return e=Qn(31,a,n,c),e.elementType=P,e.lanes=f,e;case W:return Ns(a.children,c,f,n);case Y:_=8,c|=24;break;case ce:return e=Qn(12,a,n,c|2),e.elementType=ce,e.lanes=f,e;case K:return e=Qn(13,a,n,c),e.elementType=K,e.lanes=f,e;case ge:return e=Qn(19,a,n,c),e.elementType=ge,e.lanes=f,e;case be:case B:return e=c|32,e=Qn(30,a,n,e),e.elementType=B,e.lanes=f,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case te:_=10;break e;case $:_=9;break e;case Z:_=11;break e;case le:_=14;break e;case O:_=16,r=null;break e}_=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=Qn(_,a,n,c),n.elementType=e,n.type=r,n.lanes=f,n}function Ns(e,n,a,r){return e=Qn(7,e,r,n),e.lanes=a,e}function Ef(e,n,a){return e=Qn(6,e,null,n),e.lanes=a,e}function o0(e){var n=Qn(18,null,null,0);return n.stateNode=e,n}function Tf(e,n,a){return n=Qn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var l0=new WeakMap;function Ei(e,n){if(typeof e=="object"&&e!==null){var a=l0.get(e);return a!==void 0?a:(n={value:e,source:n,stack:ye(n)},l0.set(e,n),n)}return{value:e,source:n,stack:ye(n)}}var _r=[],xr=0,ec=null,Io=0,Ti=[],Ai=0,Ya=null,Ki=1,Qi="";function ya(e,n){_r[xr++]=Io,_r[xr++]=ec,ec=e,Io=n}function c0(e,n,a){Ti[Ai++]=Ki,Ti[Ai++]=Qi,Ti[Ai++]=Ya,Ya=e;var r=Ki;e=Qi;var c=32-vt(r)-1;r&=~(1<<c),a+=1;var f=32-vt(n)+c;if(30<f){var _=c-c%5;f=(r&(1<<_)-1).toString(32),r>>=_,c-=_,Ki=1<<32-vt(n)+c|a<<c|r,Qi=f+e}else Ki=1<<f|a<<c|r,Qi=e}function tc(e){e.return!==null&&(ya(e,1),c0(e,1,0))}function Af(e){for(;e===ec;)ec=_r[--xr],_r[xr]=null,Io=_r[--xr],_r[xr]=null;for(;e===Ya;)Ya=Ti[--Ai],Ti[Ai]=null,Qi=Ti[--Ai],Ti[Ai]=null,Ki=Ti[--Ai],Ti[Ai]=null}function u0(e,n){Ti[Ai++]=Ki,Ti[Ai++]=Qi,Ti[Ai++]=Ya,Ki=n.id,Qi=n.overflow,Ya=e}var wn=null,nn=null,Rt=!1,ja=null,wi=!1,wf=Error(s(519));function Za(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw zo(Ei(n,e)),wf}function f0(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[T]=e,n[q]=r,a){case"dialog":Lt("cancel",n),Lt("close",n);break;case"iframe":case"object":case"embed":Lt("load",n);break;case"video":case"audio":for(a=0;a<sl.length;a++)Lt(sl[a],n);break;case"source":Lt("error",n);break;case"img":case"image":case"link":Lt("error",n),Lt("load",n);break;case"details":Lt("toggle",n);break;case"input":Lt("invalid",n),bm(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Lt("invalid",n);break;case"textarea":Lt("invalid",n),Tm(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||Uv(n.textContent,a)?(r.popover!=null&&(Lt("beforetoggle",n),Lt("toggle",n)),r.onScroll!=null&&Lt("scroll",n),r.onScrollEnd!=null&&Lt("scrollend",n),r.onClick!=null&&(n.onclick=Zi),n=!0):n=!1,n||Za(e,!0)}function nc(e){for(wn=e.return;wn;)switch(wn.tag){case 5:case 31:case 13:wi=!1;return;case 27:case 3:wi=!0;return;default:wn=wn.return}}function Sr(e){if(e!==wn)return!1;if(!Rt)return nc(e),Rt=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||ih(e.type,e.memoizedProps)),a=!a),a&&nn&&Za(e),nc(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));nn=Qv(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));nn=Qv(e)}else n===27?(n=nn,fs(e.type)?(e=dh,dh=null,nn=e):nn=n):nn=wn?Ci(e.stateNode.nextSibling):null;return!0}function Ds(){nn=wn=null,Rt=!1}function Rf(){var e=ja;return e!==null&&(ei===null?ei=e:ei.push.apply(ei,e),ja=null),e}function zo(e){ja===null?ja=[e]:ja.push(e)}var Cf=lt(null),Us=null,Ma=null;function Ka(e,n,a){Be(Cf,n._currentValue),n._currentValue=a}function ba(e){e._currentValue=Cf.current,Pe(Cf)}function ic(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function Nf(e,n,a,r){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var _=c.child;f=f.firstContext;e:for(;f!==null;){var w=f;f=c;for(var G=0;G<n.length;G++)if(w.context===n[G]){f.lanes|=a,w=f.alternate,w!==null&&(w.lanes|=a),ic(f.return,a,e),r||(_=null);break e}f=w.next}}else if(c.tag===18){if(_=c.return,_===null)throw Error(s(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),ic(_,a,e),_=null}else c.tag===13&&c.memoizedState!==null&&c.memoizedState.dehydrated===null?(c.lanes|=a,_=c.alternate,_!==null&&(_.lanes|=a),ic(c.return,a,e),_=c.child,_=_!==null?_.sibling:null):_=c.child;if(_!==null)_.return=c;else for(_=c;_!==null;){if(_===e){_=null;break}if(c=_.sibling,c!==null){c.return=_.return,_=c;break}_=_.return}c=_}}function Ls(e,n,a,r){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var _=c.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var w=c.type;ci(c.pendingProps.value,_.value)||(e!==null?e.push(w):e=[w])}}else if(c===gt.current){if(_=c.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Wr):e=[Wr])}c=c.return}return e!==null&&Nf(n,e,a,r),n.flags|=262144,e!==null}function ac(e){for(e=e.firstContext;e!==null;){if(!ci(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Os(e){Us=e,Ma=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Un(e){return d0(Us,e)}function sc(e,n){return Us===null&&Os(e),d0(e,n)}function d0(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ma===null){if(e===null)throw Error(s(308));Ma=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Ma=Ma.next=n;return a}var Ry=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Cy=o.unstable_scheduleCallback,Ny=o.unstable_NormalPriority,gn={$$typeof:te,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Df(){return{controller:new Ry,data:new Map,refCount:0}}function Bo(e){e.refCount--,e.refCount===0&&Cy(Ny,function(){e.controller.abort()})}function h0(e,n){if((e.pendingLanes&4194048)!==0){var a=e.transitionTypes;for(a===null&&(a=e.transitionTypes=[]),e=0;e<n.length;e++){var r=n[e];a.indexOf(r)===-1&&a.push(r)}}}var Fo=null;function Dy(e){var n=e.transitionTypes;return e.transitionTypes=null,n}var Ho=null,Uf=0,Ps=0,yr=null;function Uy(e,n){if(Ho===null){var a=Ho=[];Uf=0,Ps=jd(),yr={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Uf++,n.then(p0,p0),n}function p0(){if(--Uf===0&&(Fo=null,Ho!==null)){yr!==null&&(yr.status="fulfilled");var e=Ho;Ho=null,Ps=0,yr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Ly(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var m0=de.S;de.S=function(e,n){if(ov=Oe(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Uy(e,n),Fo!==null)for(var a=Fr;a!==null;)h0(a,Fo),a=a.next;if(a=e.types,a!==null){for(var r=Fr;r!==null;)h0(r,a),r=r.next;if(Ps!==0){r=Fo,r===null&&(r=Fo=[]);for(var c=0;c<a.length;c++){var f=a[c];r.indexOf(f)===-1&&r.push(f)}}}m0!==null&&m0(e,n)};var Is=lt(null);function Lf(){var e=Is.current;return e!==null?e:en.pooledCache}function rc(e,n){n===null?Be(Is,Is.current):Be(Is,n.pool)}function g0(){var e=Lf();return e===null?null:{parent:gn._currentValue,pool:e}}var Mr=Error(s(460)),Of=Error(s(474)),oc=Error(s(542)),lc={then:function(){}};function v0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function _0(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Zi,Zi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,S0(e),e===void 0&&!("reason"in n)?Error(s(600)):e;default:if(typeof n.status=="string")n.then(Zi,Zi);else{if(e=en,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=r}},function(r){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,S0(e),e}throw Bs=n,Mr}}function zs(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Bs=a,Mr):a}}var Bs=null;function x0(){if(Bs===null)throw Error(s(459));var e=Bs;return Bs=null,e}function S0(e){if(e===Mr||e===oc)throw Error(s(483))}var br=null,Go=0;function cc(e){var n=Go;return Go+=1,br===null&&(br=[]),_0(br,e,n)}function Qa(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function uc(e,n){throw n.$$typeof===M?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function y0(e){function n(ie,j){if(e){var ue=ie.deletions;ue===null?(ie.deletions=[j],ie.flags|=16):ue.push(j)}}function a(ie,j){if(!e)return null;for(;j!==null;)n(ie,j),j=j.sibling;return null}function r(ie){for(var j=new Map;ie!==null;)ie.key===null?j.set(ie.index,ie):j.set(ie.key,ie),ie=ie.sibling;return j}function c(ie,j){return ie=Sa(ie,j),ie.index=0,ie.sibling=null,ie}function f(ie,j,ue){return ie.index=ue,e?(ue=ie.alternate,ue!==null?(ue=ue.index,ue<j?(ie.flags|=2,j):ue):(ie.flags|=134217730,j)):(ie.flags|=1048576,j)}function _(ie){return e&&ie.alternate===null&&(ie.flags|=134217730),ie}function w(ie,j,ue,Te){return j===null||j.tag!==6?(j=Ef(ue,ie.mode,Te),j.return=ie,j):(j=c(j,ue),j.return=ie,j)}function G(ie,j,ue,Te){var Je=ue.type;return Je===W?(ie=ve(ie,j,ue.props.children,Te,ue.key),Qa(ie,ue),ie):j!==null&&(j.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===O&&zs(Je)===j.type)?(j=c(j,ue.props),Qa(j,ue),j.return=ie,j):(j=$l(ue.type,ue.key,ue.props,null,ie.mode,Te),Qa(j,ue),j.return=ie,j)}function ae(ie,j,ue,Te){return j===null||j.tag!==4||j.stateNode.containerInfo!==ue.containerInfo||j.stateNode.implementation!==ue.implementation?(j=Tf(ue,ie.mode,Te),j.return=ie,j):(j=c(j,ue.children||[]),j.return=ie,j)}function ve(ie,j,ue,Te,Je){return j===null||j.tag!==7?(j=Ns(ue,ie.mode,Te,Je),j.return=ie,j):(j=c(j,ue),j.return=ie,j)}function Ae(ie,j,ue){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=Ef(""+j,ie.mode,ue),j.return=ie,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case U:return ue=$l(j.type,j.key,j.props,null,ie.mode,ue),Qa(ue,j),ue.return=ie,ue;case k:return j=Tf(j,ie.mode,ue),j.return=ie,j;case O:return j=zs(j),Ae(ie,j,ue)}if(De(j)||H(j))return j=Ns(j,ie.mode,ue,null),j.return=ie,j;if(typeof j.then=="function")return Ae(ie,cc(j),ue);if(j.$$typeof===te)return Ae(ie,sc(ie,j),ue);uc(ie,j)}return null}function ne(ie,j,ue,Te){var Je=j!==null?j.key:null;if(typeof ue=="string"&&ue!==""||typeof ue=="number"||typeof ue=="bigint")return Je!==null?null:w(ie,j,""+ue,Te);if(typeof ue=="object"&&ue!==null){switch(ue.$$typeof){case U:return ue.key===Je?G(ie,j,ue,Te):null;case k:return ue.key===Je?ae(ie,j,ue,Te):null;case O:return ue=zs(ue),ne(ie,j,ue,Te)}if(De(ue)||H(ue))return Je!==null?null:ve(ie,j,ue,Te,null);if(typeof ue.then=="function")return ne(ie,j,cc(ue),Te);if(ue.$$typeof===te)return ne(ie,j,sc(ie,ue),Te);uc(ie,ue)}return null}function me(ie,j,ue,Te,Je){if(typeof Te=="string"&&Te!==""||typeof Te=="number"||typeof Te=="bigint")return ie=ie.get(ue)||null,w(j,ie,""+Te,Je);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case U:return ie=ie.get(Te.key===null?ue:Te.key)||null,G(j,ie,Te,Je);case k:return ie=ie.get(Te.key===null?ue:Te.key)||null,ae(j,ie,Te,Je);case O:return Te=zs(Te),me(ie,j,ue,Te,Je)}if(De(Te)||H(Te))return ie=ie.get(ue)||null,ve(j,ie,Te,Je,null);if(typeof Te.then=="function")return me(ie,j,ue,cc(Te),Je);if(Te.$$typeof===te)return me(ie,j,ue,sc(j,Te),Je);uc(j,Te)}return null}function We(ie,j,ue,Te){for(var Je=null,zt=null,rt=j,ut=j=0,xn=null;rt!==null&&ut<ue.length;ut++){rt.index>ut?(xn=rt,rt=null):xn=rt.sibling;var Gt=ne(ie,rt,ue[ut],Te);if(Gt===null){rt===null&&(rt=xn);break}e&&rt&&Gt.alternate===null&&n(ie,rt),j=f(Gt,j,ut),zt===null?Je=Gt:zt.sibling=Gt,zt=Gt,rt=xn}if(ut===ue.length)return a(ie,rt),Rt&&ya(ie,ut),Je;if(rt===null){for(;ut<ue.length;ut++)rt=Ae(ie,ue[ut],Te),rt!==null&&(j=f(rt,j,ut),zt===null?Je=rt:zt.sibling=rt,zt=rt);return Rt&&ya(ie,ut),Je}for(rt=r(rt);ut<ue.length;ut++)xn=me(rt,ie,ut,ue[ut],Te),xn!==null&&(e&&(Gt=xn.alternate,Gt!==null&&rt.delete(Gt.key===null?ut:Gt.key)),j=f(xn,j,ut),zt===null?Je=xn:zt.sibling=xn,zt=xn);return e&&rt.forEach(function(gs){return n(ie,gs)}),Rt&&ya(ie,ut),Je}function nt(ie,j,ue,Te){if(ue==null)throw Error(s(151));for(var Je=null,zt=null,rt=j,ut=j=0,xn=null,Gt=ue.next();rt!==null&&!Gt.done;ut++,Gt=ue.next()){rt.index>ut?(xn=rt,rt=null):xn=rt.sibling;var gs=ne(ie,rt,Gt.value,Te);if(gs===null){rt===null&&(rt=xn);break}e&&rt&&gs.alternate===null&&n(ie,rt),j=f(gs,j,ut),zt===null?Je=gs:zt.sibling=gs,zt=gs,rt=xn}if(Gt.done)return a(ie,rt),Rt&&ya(ie,ut),Je;if(rt===null){for(;!Gt.done;ut++,Gt=ue.next())Gt=Ae(ie,Gt.value,Te),Gt!==null&&(j=f(Gt,j,ut),zt===null?Je=Gt:zt.sibling=Gt,zt=Gt);return Rt&&ya(ie,ut),Je}for(rt=r(rt);!Gt.done;ut++,Gt=ue.next())Gt=me(rt,ie,ut,Gt.value,Te),Gt!==null&&(e&&(xn=Gt.alternate,xn!==null&&rt.delete(xn.key===null?ut:xn.key)),j=f(Gt,j,ut),zt===null?Je=Gt:zt.sibling=Gt,zt=Gt);return e&&rt.forEach(function(hb){return n(ie,hb)}),Rt&&ya(ie,ut),Je}function bt(ie,j,ue,Te){if(typeof ue=="object"&&ue!==null&&ue.type===W&&ue.key===null&&ue.props.ref===void 0&&(ue=ue.props.children),typeof ue=="object"&&ue!==null){switch(ue.$$typeof){case U:e:{for(var Je=ue.key;j!==null;){if(j.key===Je){if(Je=ue.type,Je===W){if(j.tag===7){a(ie,j.sibling),Te=c(j,ue.props.children),Qa(Te,ue),Te.return=ie,ie=Te;break e}}else if(j.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===O&&zs(Je)===j.type){a(ie,j.sibling),Te=c(j,ue.props),Qa(Te,ue),Te.return=ie,ie=Te;break e}a(ie,j);break}else n(ie,j);j=j.sibling}ue.type===W?(Te=Ns(ue.props.children,ie.mode,Te,ue.key),Qa(Te,ue),Te.return=ie,ie=Te):(Te=$l(ue.type,ue.key,ue.props,null,ie.mode,Te),Qa(Te,ue),Te.return=ie,ie=Te)}return _(ie);case k:e:{for(Je=ue.key;j!==null;){if(j.key===Je)if(j.tag===4&&j.stateNode.containerInfo===ue.containerInfo&&j.stateNode.implementation===ue.implementation){a(ie,j.sibling),Te=c(j,ue.children||[]),Te.return=ie,ie=Te;break e}else{a(ie,j);break}else n(ie,j);j=j.sibling}Te=Tf(ue,ie.mode,Te),Te.return=ie,ie=Te}return _(ie);case O:return ue=zs(ue),bt(ie,j,ue,Te)}if(De(ue))return We(ie,j,ue,Te);if(H(ue)){if(Je=H(ue),typeof Je!="function")throw Error(s(150));return ue=Je.call(ue),nt(ie,j,ue,Te)}if(typeof ue.then=="function")return bt(ie,j,cc(ue),Te);if(ue.$$typeof===te)return bt(ie,j,sc(ie,ue),Te);uc(ie,ue)}return typeof ue=="string"&&ue!==""||typeof ue=="number"||typeof ue=="bigint"?(ue=""+ue,j!==null&&j.tag===6?(a(ie,j.sibling),Te=c(j,ue),Te.return=ie,ie=Te):(a(ie,j),Te=Ef(ue,ie.mode,Te),Te.return=ie,ie=Te),_(ie)):a(ie,j)}return function(ie,j,ue,Te){try{Go=0;var Je=bt(ie,j,ue,Te);return br=null,Je}catch(rt){if(rt===Mr||rt===oc)throw rt;var zt=Qn(29,rt,null,ie.mode);return zt.lanes=Te,zt.return=ie,zt}finally{}}}var Fs=y0(!0),M0=y0(!1),Ja=!1;function Pf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function If(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function $a(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function es(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Xt&2)!==0){var c=r.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),r.pending=n,n=Jl(e),s0(e,null,a),n}return Ql(e,r,n,a),Jl(e)}function Vo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,bo(e,a)}}function zf(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Bf=!1;function ko(){if(Bf){var e=yr;if(e!==null)throw e}}function Xo(e,n,a,r){Bf=!1;var c=e.updateQueue;Ja=!1;var f=c.firstBaseUpdate,_=c.lastBaseUpdate,w=c.shared.pending;if(w!==null){c.shared.pending=null;var G=w,ae=G.next;G.next=null,_===null?f=ae:_.next=ae,_=G;var ve=e.alternate;ve!==null&&(ve=ve.updateQueue,w=ve.lastBaseUpdate,w!==_&&(w===null?ve.firstBaseUpdate=ae:w.next=ae,ve.lastBaseUpdate=G))}if(f!==null){var Ae=c.baseState;_=0,ve=ae=G=null,w=f;do{var ne=w.lane&-536870913,me=ne!==w.lane;if(me?(It&ne)===ne:(r&ne)===ne){ne!==0&&ne===Ps&&(Bf=!0),ve!==null&&(ve=ve.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var We=e,nt=w;ne=n;var bt=a;switch(nt.tag){case 1:if(We=nt.payload,typeof We=="function"){Ae=We.call(bt,Ae,ne);break e}Ae=We;break e;case 3:We.flags=We.flags&-65537|128;case 0:if(We=nt.payload,ne=typeof We=="function"?We.call(bt,Ae,ne):We,ne==null)break e;Ae=I({},Ae,ne);break e;case 2:Ja=!0}}ne=w.callback,ne!==null&&(e.flags|=64,me&&(e.flags|=8192),me=c.callbacks,me===null?c.callbacks=[ne]:me.push(ne))}else me={lane:ne,tag:w.tag,payload:w.payload,callback:w.callback,next:null},ve===null?(ae=ve=me,G=Ae):ve=ve.next=me,_|=ne;if(w=w.next,w===null){if(w=c.shared.pending,w===null)break;me=w,w=me.next,me.next=null,c.lastBaseUpdate=me,c.shared.pending=null}}while(!0);ve===null&&(G=Ae),c.baseState=G,c.firstBaseUpdate=ae,c.lastBaseUpdate=ve,f===null&&(c.shared.lanes=0),os|=_,e.lanes=_,e.memoizedState=Ae}}function b0(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function E0(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)b0(a[e],n)}var ts=lt(null),fc=lt(0);function T0(e,n){e=Ra,Be(fc,e),Be(ts,n),Ra=e|n.baseLanes}function Ff(){Be(fc,Ra),Be(ts,ts.current)}function Hf(){Ra=fc.current,Pe(ts),Pe(fc)}var Ln=lt(null),Fn=null;function ns(e){var n=e.alternate;Be(On,On.current&1),Be(Ln,e),Fn===null&&(n===null||ts.current!==null||n.memoizedState!==null)&&(Fn=e)}function Gf(e){Be(On,On.current),Be(Ln,e),Fn===null&&(Fn=e)}function A0(e){e.tag===22?(Be(On,On.current),Be(Ln,e),Fn===null&&(Fn=e)):is()}function is(){Be(On,On.current),Be(Ln,Ln.current)}function ui(e){Pe(Ln),Fn===e&&(Fn=null),Pe(On)}var On=lt(0);function Wo(e,n){Be(Ln,Ln.current),Be(On,n)}function Vf(e){Pe(On),Pe(Ln),Fn===e&&(Fn=null)}function dc(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||uh(a)||fh(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ea=0,Mt=null,$t=null,vn=null,hc=!1,Er=!1,Hs=!1,pc=0,qo=0,Tr=null,Oy=0;function dn(){throw Error(s(321))}function kf(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!ci(e[a],n[a]))return!1;return!0}function Xf(e,n,a,r,c,f){return Ea=f,Mt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,de.H=e===null||e.memoizedState===null?cg:ug,Hs=!1,f=a(r,c),Hs=!1,Er&&(f=R0(n,a,r,c)),w0(e),f}function w0(e){de.H=yc;var n=$t!==null&&$t.next!==null;if(Ea=0,vn=$t=Mt=null,hc=!1,qo=0,Tr=null,n)throw Error(s(300));e===null||_n||(e=e.dependencies,e!==null&&ac(e)&&(_n=!0))}function R0(e,n,a,r){Mt=e;var c=0;do{if(Er&&(Tr=null),qo=0,Er=!1,25<=c)throw Error(s(301));if(c+=1,vn=$t=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}de.H=Vy,f=n(a,r)}while(Er);return f}function Py(){var e=de.H,n=e.useState()[0];return n=typeof n.then=="function"?Yo(n):n,e=e.useState()[0],($t!==null?$t.memoizedState:null)!==e&&(Mt.flags|=1024),n}function Wf(){var e=pc!==0;return pc=0,e}function qf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Yf(e){if(hc){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}hc=!1}Ea=0,vn=$t=Mt=null,Er=!1,qo=pc=0,Tr=null}function qn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vn===null?Mt.memoizedState=vn=e:vn=vn.next=e,vn}function pn(){if($t===null){var e=Mt.alternate;e=e!==null?e.memoizedState:null}else e=$t.next;var n=vn===null?Mt.memoizedState:vn.next;if(n!==null)vn=n,$t=e;else{if(e===null)throw Mt.alternate===null?Error(s(467)):Error(s(310));$t=e,e={memoizedState:$t.memoizedState,baseState:$t.baseState,baseQueue:$t.baseQueue,queue:$t.queue,next:null},vn===null?Mt.memoizedState=vn=e:vn=vn.next=e}return vn}function mc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Yo(e){var n=qo;return qo+=1,Tr===null&&(Tr=[]),e=_0(Tr,e,n),n=Mt,(vn===null?n.memoizedState:vn.next)===null&&(n=n.alternate,de.H=n===null||n.memoizedState===null?cg:ug),e}function gc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Yo(e);if(e.$$typeof===X)return;if(e.$$typeof===te)return Un(e)}throw Error(s(438,String(e)))}function jf(e){var n=null,a=Mt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=Mt.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=mc(),Mt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=Ce;return n.index++,a}function Ta(e,n){return typeof n=="function"?n(e):n}function vc(e){var n=pn();return Zf(n,$t,e)}function Zf(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var c=e.baseQueue,f=r.pending;if(f!==null){if(c!==null){var _=c.next;c.next=f.next,f.next=_}n.baseQueue=c=f,r.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var w=_=null,G=null,ae=n,ve=!1;do{var Ae=ae.lane&-536870913;if(Ae!==ae.lane?(It&Ae)===Ae:(Ea&Ae)===Ae){var ne=ae.revertLane;if(ne===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null}),Ae===Ps&&(ve=!0);else if((Ea&ne)===ne){ae=ae.next,ne===Ps&&(ve=!0);continue}else Ae={lane:0,revertLane:ae.revertLane,gesture:null,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null},G===null?(w=G=Ae,_=f):G=G.next=Ae,Mt.lanes|=ne,os|=ne;Ae=ae.action,Hs&&a(f,Ae),f=ae.hasEagerState?ae.eagerState:a(f,Ae)}else ne={lane:Ae,revertLane:ae.revertLane,gesture:ae.gesture,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null},G===null?(w=G=ne,_=f):G=G.next=ne,Mt.lanes|=Ae,os|=Ae;ae=ae.next}while(ae!==null&&ae!==n);if(G===null?_=f:G.next=w,!ci(f,e.memoizedState)&&(_n=!0,ve&&(a=yr,a!==null)))throw a;e.memoizedState=f,e.baseState=_,e.baseQueue=G,r.lastRenderedState=f}return c===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Kf(e){var n=pn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var _=c=c.next;do f=e(f,_.action),_=_.next;while(_!==c);ci(f,n.memoizedState)||(_n=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function C0(e,n,a){var r=Mt,c=pn(),f=Rt;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var _=!ci(($t||c).memoizedState,a);if(_&&(c.memoizedState=a,_n=!0),c=c.queue,$f(U0.bind(null,r,c,e),[e]),e=c.getSnapshot!==n||_||vn!==null&&(vn.memoizedState.tag&1)!==0,Ar(e?9:8,{destroy:void 0},D0.bind(null,r,c,a,n),null),e){if(r.flags|=2048,en===null)throw Error(s(349));f||(Ea&127)!==0||N0(r,n,a)}return a}function N0(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=Mt.updateQueue,n===null?(n=mc(),Mt.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function D0(e,n,a,r){n.value=a,n.getSnapshot=r,L0(n)&&O0(e)}function U0(e,n,a){return a(function(){L0(n)&&O0(e)})}function L0(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!ci(e,a)}catch{return!0}}function O0(e){var n=Cs(e,2);n!==null&&ti(n,e,2)}function Qf(e){var n=qn();if(typeof e=="function"){var a=e;if(e=a(),Hs){yt(!0);try{a()}finally{yt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ta,lastRenderedState:e},n}function P0(e,n,a,r){return e.baseState=a,Zf(e,$t,typeof r=="function"?r:Ta)}function Iy(e,n,a,r,c){if(Sc(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};de.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,I0(n,f)):(f.next=a.next,n.pending=a.next=f)}}function I0(e,n){var a=n.action,r=n.payload,c=e.state;if(n.isTransition){var f=de.T,_={};_.types=f!==null?f.types:null,de.T=_;try{var w=a(c,r),G=de.S;G!==null&&G(_,w),z0(e,n,w)}catch(ae){Jf(e,n,ae)}finally{f!==null&&_.types!==null&&(f.types=_.types),de.T=f}}else try{f=a(c,r),z0(e,n,f)}catch(ae){Jf(e,n,ae)}}function z0(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){B0(e,n,r)},function(r){return Jf(e,n,r)}):B0(e,n,a)}function B0(e,n,a){n.status="fulfilled",n.value=a,F0(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,I0(e,a)))}function Jf(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,F0(n),n=n.next;while(n!==r)}e.action=null}function F0(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function H0(e,n){return n}function G0(e,n){if(Rt){var a=en.formState;if(a!==null){e:{var r=Mt;if(Rt){if(nn){t:{for(var c=nn,f=wi;c.nodeType!==8;){if(!f){c=null;break t}if(c=Ci(c.nextSibling),c===null){c=null;break t}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){nn=Ci(c.nextSibling),r=c.data==="F!";break e}}Za(r)}r=!1}r&&(n=a[0])}}return a=qn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:H0,lastRenderedState:n},a.queue=r,a=rg.bind(null,Mt,r),r.dispatch=a,r=Qf(!1),f=ad.bind(null,Mt,!1,r.queue),r=qn(),c={state:n,dispatch:null,action:e,pending:null},r.queue=c,a=Iy.bind(null,Mt,c,f,a),c.dispatch=a,r.memoizedState=e,[n,a,!1]}function V0(e){var n=pn();return k0(n,$t,e)}function k0(e,n,a){if(n=Zf(e,n,H0)[0],e=vc(Ta)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=Yo(n)}catch(_){throw _===Mr?oc:_}else r=n;n=pn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(Mt.flags|=2048,Ar(9,{destroy:void 0},zy.bind(null,c,a),null)),[r,f,e]}function zy(e,n){e.action=n}function X0(e){var n=pn(),a=$t;if(a!==null)return k0(n,a,e);pn(),n=n.memoizedState,a=pn();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function Ar(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=Mt.updateQueue,n===null&&(n=mc(),Mt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function W0(){return pn().memoizedState}function _c(e,n,a,r){var c=qn();Mt.flags|=e,c.memoizedState=Ar(1|n,{destroy:void 0},a,r===void 0?null:r)}function xc(e,n,a,r){var c=pn();r=r===void 0?null:r;var f=c.memoizedState.inst;$t!==null&&r!==null&&kf(r,$t.memoizedState.deps)?c.memoizedState=Ar(n,f,a,r):(Mt.flags|=e,c.memoizedState=Ar(1|n,f,a,r))}function q0(e,n){_c(8390656,8,e,n)}function $f(e,n){xc(2048,8,e,n)}function By(e){Mt.flags|=4;var n=Mt.updateQueue;if(n===null)n=mc(),Mt.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Y0(e){var n=pn().memoizedState;return By({ref:n,nextImpl:e}),function(){if((Xt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function j0(e,n){return xc(4,2,e,n)}function Z0(e,n){return xc(4,4,e,n)}function K0(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Q0(e,n,a){a=a!=null?a.concat([e]):null,xc(4,4,K0.bind(null,n,e),a)}function ed(){}function J0(e,n){var a=pn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&kf(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function $0(e,n){var a=pn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&kf(n,r[1]))return r[0];if(r=e(),Hs){yt(!0);try{e()}finally{yt(!1)}}return a.memoizedState=[r,n],r}function td(e,n,a){return a===void 0||(Ea&1073741824)!==0&&(It&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=cv(),Mt.lanes|=e,os|=e,a)}function eg(e,n,a,r){return ci(a,n)?a:ts.current!==null?(e=td(e,a,r),ci(e,n)||(_n=!0),e):(Ea&106)===0||(Ea&1073741824)!==0&&(It&261930)===0?(_n=!0,e.memoizedState=a):(e=cv(),Mt.lanes|=e,os|=e,n)}function tg(e,n,a,r,c){var f=Ne.p;Ne.p=f!==0&&8>f?f:8;var _=de.T,w={};w.types=_!==null?_.types:null,de.T=w,ad(e,!1,n,a);try{var G=c(),ae=de.S;if(ae!==null&&ae(w,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var ve=Ly(G,r);jo(e,n,ve,pi(e))}else jo(e,n,r,pi(e))}catch(Ae){jo(e,n,{then:function(){},status:"rejected",reason:Ae},pi())}finally{Ne.p=f,_!==null&&w.types!==null&&(_.types=w.types),de.T=_}}function Fy(){}function nd(e,n,a,r){if(e.tag!==5)throw Error(s(476));var c=ng(e).queue;tg(e,c,n,st,a===null?Fy:function(){return ig(e),a(r)})}function ng(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:st,baseState:st,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ta,lastRenderedState:st},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ta,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function ig(e){var n=ng(e);n.next===null&&(n=e.alternate.memoizedState),jo(e,n.next.queue,{},pi())}function id(){return Un(Wr)}function ag(){return pn().memoizedState}function sg(){return pn().memoizedState}function Hy(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=pi();e=$a(a);var r=es(n,e,a);r!==null&&(ti(r,n,a),Vo(r,n,a)),n={cache:Df()},e.payload=n;return}n=n.return}}function Gy(e,n,a){var r=pi();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Sc(e)?og(n,a):(a=Mf(e,n,a,r),a!==null&&(ti(a,e,r),lg(a,n,r)))}function rg(e,n,a){var r=pi();jo(e,n,a,r)}function jo(e,n,a,r){var c={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Sc(e))og(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,w=f(_,a);if(c.hasEagerState=!0,c.eagerState=w,ci(w,_))return Ql(e,n,c,0),en===null&&Kl(),!1}catch{}finally{}if(a=Mf(e,n,c,r),a!==null)return ti(a,e,r),lg(a,n,r),!0}return!1}function ad(e,n,a,r){if(r={lane:2,revertLane:jd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Sc(e)){if(n)throw Error(s(479))}else n=Mf(e,a,r,2),n!==null&&ti(n,e,2)}function Sc(e){var n=e.alternate;return e===Mt||n!==null&&n===Mt}function og(e,n){Er=hc=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function lg(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,bo(e,a)}}var yc={readContext:Un,use:gc,useCallback:dn,useContext:dn,useEffect:dn,useImperativeHandle:dn,useLayoutEffect:dn,useInsertionEffect:dn,useMemo:dn,useReducer:dn,useRef:dn,useState:dn,useDebugValue:dn,useDeferredValue:dn,useTransition:dn,useSyncExternalStore:dn,useId:dn,useHostTransitionStatus:dn,useFormState:dn,useActionState:dn,useOptimistic:dn,useMemoCache:dn,useCacheRefresh:dn,useEffectEvent:dn},cg={readContext:Un,use:gc,useCallback:function(e,n){return qn().memoizedState=[e,n===void 0?null:n],e},useContext:Un,useEffect:q0,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,_c(4194308,4,K0.bind(null,n,e),a)},useLayoutEffect:function(e,n){return _c(4194308,4,e,n)},useInsertionEffect:function(e,n){_c(4,2,e,n)},useMemo:function(e,n){var a=qn();n=n===void 0?null:n;var r=e();if(Hs){yt(!0);try{e()}finally{yt(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=qn();if(a!==void 0){var c=a(n);if(Hs){yt(!0);try{a(n)}finally{yt(!1)}}}else c=n;return r.memoizedState=r.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},r.queue=e,e=e.dispatch=Gy.bind(null,Mt,e),[r.memoizedState,e]},useRef:function(e){var n=qn();return e={current:e},n.memoizedState=e},useState:function(e){e=Qf(e);var n=e.queue,a=rg.bind(null,Mt,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:ed,useDeferredValue:function(e,n){var a=qn();return td(a,e,n)},useTransition:function(){var e=Qf(!1);return e=tg.bind(null,Mt,e.queue,!0,!1),qn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=Mt,c=qn();if(Rt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),en===null)throw Error(s(349));(It&127)!==0||N0(r,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,q0(U0.bind(null,r,f,e),[e]),r.flags|=2048,Ar(9,{destroy:void 0},D0.bind(null,r,f,a,n),null),a},useId:function(){var e=qn(),n=en.identifierPrefix;if(Rt){var a=Qi,r=Ki;a=(r&~(1<<32-vt(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=pc++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Oy++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:id,useFormState:G0,useActionState:G0,useOptimistic:function(e){var n=qn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=ad.bind(null,Mt,!0,a),a.dispatch=n,[e,n]},useMemoCache:jf,useCacheRefresh:function(){return qn().memoizedState=Hy.bind(null,Mt)},useEffectEvent:function(e){var n=qn(),a={impl:e};return n.memoizedState=a,function(){if((Xt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},ug={readContext:Un,use:gc,useCallback:J0,useContext:Un,useEffect:$f,useImperativeHandle:Q0,useInsertionEffect:j0,useLayoutEffect:Z0,useMemo:$0,useReducer:vc,useRef:W0,useState:function(){return vc(Ta)},useDebugValue:ed,useDeferredValue:function(e,n){var a=pn();return eg(a,$t.memoizedState,e,n)},useTransition:function(){var e=vc(Ta)[0],n=pn().memoizedState;return[typeof e=="boolean"?e:Yo(e),n]},useSyncExternalStore:C0,useId:ag,useHostTransitionStatus:id,useFormState:V0,useActionState:V0,useOptimistic:function(e,n){var a=pn();return P0(a,$t,e,n)},useMemoCache:jf,useCacheRefresh:sg,useEffectEvent:Y0},Vy={readContext:Un,use:gc,useCallback:J0,useContext:Un,useEffect:$f,useImperativeHandle:Q0,useInsertionEffect:j0,useLayoutEffect:Z0,useMemo:$0,useReducer:Kf,useRef:W0,useState:function(){return Kf(Ta)},useDebugValue:ed,useDeferredValue:function(e,n){var a=pn();return $t===null?td(a,e,n):eg(a,$t.memoizedState,e,n)},useTransition:function(){var e=Kf(Ta)[0],n=pn().memoizedState;return[typeof e=="boolean"?e:Yo(e),n]},useSyncExternalStore:C0,useId:ag,useHostTransitionStatus:id,useFormState:X0,useActionState:X0,useOptimistic:function(e,n){var a=pn();return $t!==null?P0(a,$t,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:jf,useCacheRefresh:sg,useEffectEvent:Y0};function sd(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:I({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var rd={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=pi(),c=$a(r);c.payload=n,a!=null&&(c.callback=a),n=es(e,c,r),n!==null&&(ti(n,e,r),Vo(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=pi(),c=$a(r);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=es(e,c,r),n!==null&&(ti(n,e,r),Vo(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=pi(),r=$a(a);r.tag=2,n!=null&&(r.callback=n),n=es(e,r,a),n!==null&&(ti(n,e,a),Vo(n,e,a))}};function fg(e,n,a,r,c,f,_){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,f,_):n.prototype&&n.prototype.isPureReactComponent?!Oo(a,r)||!Oo(c,f):!0}function dg(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&rd.enqueueReplaceState(n,n.state,null)}function Gs(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=I({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function hg(e){Zl(e)}function pg(e){console.error(e)}function mg(e){Zl(e)}function Mc(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function gg(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function od(e,n,a){return a=$a(a),a.tag=3,a.payload={element:null},a.callback=function(){Mc(e,n)},a}function vg(e){return e=$a(e),e.tag=3,e}function _g(e,n,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;e.payload=function(){return c(f)},e.callback=function(){gg(n,a,r)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(e.callback=function(){gg(n,a,r),typeof c!="function"&&(ls===null?ls=new Set([this]):ls.add(this));var w=r.stack;this.componentDidCatch(r.value,{componentStack:w!==null?w:""})})}function ky(e,n,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Ls(n,a,c,!0),a=Ln.current,a!==null){switch(a.tag){case 31:case 13:case 19:return Fn===null?kc():a.alternate===null&&hn===0&&(hn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===lc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Wd(e,r,c)),!1;case 22:return a.flags|=65536,r===lc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Wd(e,r,c)),!1}throw Error(s(435,a.tag))}return Wd(e,r,c),kc(),!1}if(Rt)return n=Ln.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,r!==wf&&(e=Error(s(422),{cause:r}),zo(Ei(e,a)))):(r!==wf&&(n=Error(s(423),{cause:r}),zo(Ei(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,r=Ei(r,a),c=od(e.stateNode,r,c),zf(e,c),hn!==4&&(hn=2)),!1;var f=Error(s(520),{cause:r});if(f=Ei(f,a),nl===null?nl=[f]:nl.push(f),hn!==4&&(hn=2),n===null)return!0;r=Ei(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=od(a.stateNode,r,e),zf(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ls===null||!ls.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=vg(c),_g(c,e,a,r),zf(a,c),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var ld=Error(s(461)),_n=!1;function bn(e,n,a,r){n.child=e===null?M0(n,null,a,r):Fs(n,e.child,a,r)}function xg(e,n,a,r,c){a=a.render;var f=n.ref;if("ref"in r){var _={};for(var w in r)w!=="ref"&&(_[w]=r[w])}else _=r;return Os(n),r=Xf(e,n,a,_,f,c),w=Wf(),e!==null&&!_n?(qf(e,n,c),Aa(e,n,c)):(Rt&&w&&tc(n),n.flags|=1,bn(e,n,r,c),n.child)}function Sg(e,n,a,r,c){if(e===null){var f=a.type;return typeof f=="function"&&!bf(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,yg(e,n,f,r,c)):(e=$l(a.type,null,r,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!gd(e,c)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:Oo,a(_,r)&&e.ref===n.ref)return Aa(e,n,c)}return n.flags|=1,e=Sa(f,r),e.ref=n.ref,e.return=n,n.child=e}function yg(e,n,a,r,c){if(e!==null){var f=e.memoizedProps;if(Oo(f,r)&&e.ref===n.ref)if(_n=!1,n.pendingProps=r=f,gd(e,c))(e.flags&131072)!==0&&(_n=!0);else return n.lanes=e.lanes,Aa(e,n,c)}return cd(e,n,a,r,c)}function Mg(e,n,a,r){var c=r.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(r=n.child=e.child,c=0;r!==null;)c=c|r.lanes|r.childLanes,r=r.sibling;r=c&~f}else r=0,n.child=null;return bg(e,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&rc(n,f!==null?f.cachePool:null),f!==null?T0(n,f):Ff(),A0(n);else return r=n.lanes=536870912,bg(e,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(rc(n,f.cachePool),T0(n,f),is(),n.memoizedState=null):(e!==null&&rc(n,null),Ff(),is());return bn(e,n,c,a),n.child}function Zo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function bg(e,n,a,r,c){var f=Lf();return f=f===null?null:{parent:gn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&rc(n,null),Ff(),A0(n),e!==null&&Ls(e,n,r,!0),n.childLanes=c,null}function bc(e,n){return n=Ec({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Eg(e,n,a){return Fs(n,e.child,null,a),e=bc(n,n.pendingProps),e.flags|=2,ui(n),n.memoizedState=null,e}function Xy(e,n,a){var r=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Rt){if(r.mode==="hidden")return e=bc(n,r),n.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Zo(null,e);if(Gf(n),(e=nn)?(e=Kv(e,wi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ya!==null?{id:Ki,overflow:Qi}:null,retryLane:536870912,hydrationErrors:null},a=o0(e),a.return=n,n.child=a,wn=n,nn=null)):e=null,e===null)throw Za(n);return n.lanes=536870912,null}return bc(n,r)}var f=e.memoizedState;if(f!==null){var _=f.dehydrated;if(Gf(n),c)if(n.flags&256)n.flags&=-257,n=Eg(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(_n||Ls(e,n,a,!1),c=(a&e.childLanes)!==0,_n||c){if(ts.current===null){if(r=en,r!==null&&(_=Eo(r,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,Cs(e,_),ti(r,e,_),ld;kc()}n=Eg(e,n,a)}else e=f.treeContext,nn=Ci(_.nextSibling),wn=n,Rt=!0,ja=null,wi=!1,e!==null&&u0(n,e),n=bc(n,r),n.flags|=134221824;return n}return e=Sa(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function wr(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function cd(e,n,a,r,c){return Os(n),a=Xf(e,n,a,r,void 0,c),r=Wf(),e!==null&&!_n?(qf(e,n,c),Aa(e,n,c)):(Rt&&r&&tc(n),n.flags|=1,bn(e,n,a,c),n.child)}function Tg(e,n,a,r,c,f){return Os(n),n.updateQueue=null,a=R0(n,r,a,c),w0(e),r=Wf(),e!==null&&!_n?(qf(e,n,f),Aa(e,n,f)):(Rt&&r&&tc(n),n.flags|=1,bn(e,n,a,f),n.child)}function Ag(e,n,a,r,c){if(Os(n),n.stateNode===null){var f=vr,_=a.contextType;typeof _=="object"&&_!==null&&(f=Un(_)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=rd,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Pf(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?Un(_):vr,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(sd(n,a,_,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&rd.enqueueReplaceState(f,f.state,null),Xo(n,r,f,c),ko(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){f=n.stateNode;var w=n.memoizedProps,G=Gs(a,w);f.props=G;var ae=f.context,ve=a.contextType;_=vr,typeof ve=="object"&&ve!==null&&(_=Un(ve));var Ae=a.getDerivedStateFromProps;ve=typeof Ae=="function"||typeof f.getSnapshotBeforeUpdate=="function",w=n.pendingProps!==w,ve||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(w||ae!==_)&&dg(n,f,r,_),Ja=!1;var ne=n.memoizedState;f.state=ne,Xo(n,r,f,c),ko(),ae=n.memoizedState,w||ne!==ae||Ja?(typeof Ae=="function"&&(sd(n,a,Ae,r),ae=n.memoizedState),(G=Ja||fg(n,a,G,r,ne,ae,_))?(ve||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=ae),f.props=r,f.state=ae,f.context=_,r=G):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,If(e,n),_=n.memoizedProps,ve=Gs(a,_),f.props=ve,Ae=n.pendingProps,ne=f.context,ae=a.contextType,G=vr,typeof ae=="object"&&ae!==null&&(G=Un(ae)),w=a.getDerivedStateFromProps,(ae=typeof w=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==Ae||ne!==G)&&dg(n,f,r,G),Ja=!1,ne=n.memoizedState,f.state=ne,Xo(n,r,f,c),ko();var me=n.memoizedState;_!==Ae||ne!==me||Ja||e!==null&&e.dependencies!==null&&ac(e.dependencies)?(typeof w=="function"&&(sd(n,a,w,r),me=n.memoizedState),(ve=Ja||fg(n,a,ve,r,ne,me,G)||e!==null&&e.dependencies!==null&&ac(e.dependencies))?(ae||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,me,G),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,me,G)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===e.memoizedProps&&ne===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&ne===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=me),f.props=r,f.state=me,f.context=G,r=ve):(typeof f.componentDidUpdate!="function"||_===e.memoizedProps&&ne===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&ne===e.memoizedState||(n.flags|=1024),r=!1)}return f=r,wr(e,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&r?(n.child=Fs(n,e.child,null,c),n.child=Fs(n,null,a,c)):bn(e,n,a,c),n.memoizedState=f.state,e=n.child):e=Aa(e,n,c),e}function wg(e,n,a,r){return Ds(),n.flags|=256,bn(e,n,a,r),n.child}var ud={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function fd(e){return{baseLanes:e,cachePool:g0()}}function dd(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=hi),e}function Rg(e,n,a){var r=n.pendingProps,c=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=e!==null&&e.memoizedState===null?!1:(On.current&2)!==0),_&&(c=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,e===null){if(Rt){if(c?ns(n):is(),(e=nn)?(e=Kv(e,wi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ya!==null?{id:Ki,overflow:Qi}:null,retryLane:536870912,hydrationErrors:null},a=o0(e),a.return=n,n.child=a,wn=n,nn=null)):e=null,e===null)throw Za(n);return fh(e)?n.lanes=32:n.lanes=536870912,null}return f=r.children,r=r.fallback,c?(is(),c=n.mode,f=Ec({mode:"hidden",children:f},c),r=Ns(r,c,a,null),f.return=n,r.return=n,f.sibling=r,n.child=f,r=n.child,r.memoizedState=fd(a),r.childLanes=dd(e,_,a),n.memoizedState=ud,Zo(null,r)):(ns(n),hd(n,f))}var w=e.memoizedState;if(w!==null){var G=w.dehydrated;if(G!==null)return Wy(e,n,f,_,r,G,w,a)}return c?(is(),c=r.fallback,f=n.mode,w=e.child,G=w.sibling,r=Sa(w,{mode:"hidden",children:r.children}),r.subtreeFlags=w.subtreeFlags&1206910976,G!==null?c=Sa(G,c):(c=Ns(c,f,a,null),c.flags|=2),c.return=n,r.return=n,r.sibling=c,n.child=r,Zo(null,r),r=n.child,c=e.child.memoizedState,c===null?c=fd(a):(f=c.cachePool,f!==null?(w=gn._currentValue,f=f.parent!==w?{parent:w,pool:w}:f):f=g0(),c={baseLanes:c.baseLanes|a,cachePool:f}),r.memoizedState=c,r.childLanes=dd(e,_,a),n.memoizedState=ud,Zo(e.child,r)):(ns(n),a=e.child,e=a.sibling,a=Sa(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(_=n.deletions,_===null?(n.deletions=[e],n.flags|=16):_.push(e)),n.child=a,n.memoizedState=null,a)}function hd(e,n){return n=Ec({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Ec(e,n){return e=Qn(22,e,null,n),e.lanes=0,e}function Tc(e,n,a){return Fs(n,e.child,null,a),e=hd(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Wy(e,n,a,r,c,f,_,w){if(a)return n.flags&256?(ns(n),n.flags&=-257,Tc(e,n,w)):n.memoizedState!==null?(is(),n.child=e.child,n.flags|=128,null):(is(),f=c.fallback,_=n.mode,c=Ec({mode:"visible",children:c.children},_),f=Ns(f,_,w,null),f.flags|=2,c.return=n,f.return=n,c.sibling=f,n.child=c,Fs(n,e.child,null,w),c=n.child,c.memoizedState=fd(w),c.childLanes=dd(e,r,w),n.memoizedState=ud,Zo(null,c));if(ns(n),fh(f)){if(r=f.nextSibling&&f.nextSibling.dataset,r)var G=r.dgst;return r=G,r!==""&&(c=Error(s(419)),c.stack="",c.digest=r,zo({value:c,source:null,stack:null})),Tc(e,n,w)}if(_n||Ls(e,n,w,!1),r=(w&e.childLanes)!==0,_n||r){if(ts.current!==null)return Tc(e,n,w);if(r=en,r!==null&&(c=Eo(r,w),c!==0&&c!==_.retryLane))throw _.retryLane=c,Cs(e,c),ti(r,e,c),ld;return uh(f)||kc(),Tc(e,n,w)}return uh(f)?(n.flags|=192,n.child=e.child,null):(e=_.treeContext,nn=Ci(f.nextSibling),wn=n,Rt=!0,ja=null,wi=!1,e!==null&&u0(n,e),n=hd(n,c.children),n.flags|=134221824,n)}function Cg(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),ic(e.return,n,a)}function Ng(e){for(var n=null;e!==null;){var a=e.alternate;a!==null&&dc(a)===null&&(n=e),e=e.sibling}return n}function Ac(e,n,a,r,c,f){var _=e.memoizedState;_===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=r,_.tail=a,_.tailMode=c,_.treeForkCount=f)}function pd(e){var n=e.child;for(e.child=null;n!==null;){var a=n.sibling;n.sibling=e.child,e.child=n,n=a}}function md(e,n,a){var r=n.pendingProps,c=r.revealOrder,f=r.tail;r=r.children;var _=On.current;if(n.flags&128)return Wo(n,_),null;var w=(_&2)!==0;if(w?(_=_&1|2,n.flags|=128):_&=1,Wo(n,_),c==="backwards"&&e!==null?(pd(e),bn(e,n,r,a),pd(e)):bn(e,n,r,a),r=Rt?Io:0,!w&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Cg(e,a,n);else if(e.tag===19)Cg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"backwards":a=Ng(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null,pd(n)),Ac(n,!0,c,null,f,r);break;case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&dc(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}Ac(n,!0,a,null,f,r);break;case"together":Ac(n,!1,null,null,void 0,r);break;case"independent":n.memoizedState=null;break;default:a=Ng(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Ac(n,!1,c,a,f,r)}return n.child}function Dg(e,n,a){var r=n.pendingProps;return Ka(n,n.type,r.value),bn(e,n,r.children,a),n.child}function Aa(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),os|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Ls(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Sa(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Sa(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function gd(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&ac(e)))}function qy(e,n,a){switch(n.tag){case 3:Q(n,n.stateNode.containerInfo),Ka(n,gn,e.memoizedState.cache),Ds();break;case 27:case 5:Et(n);break;case 4:Q(n,n.stateNode.containerInfo);break;case 10:Ka(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Gf(n),null;break;case 13:var r=n.memoizedState;if(r!==null){if(r.dehydrated!==null)return ns(n),n.flags|=128,null;r=Ls(e,n,a,!1);var c=n.child.childLanes;return r||(a&c)!==0?Rg(e,n,a):(ns(n),e=Aa(e,n,a),e!==null?e.sibling:null)}ns(n);break;case 19:if(n.flags&128)return md(e,n,a);if(c=(e.flags&128)!==0,r=(a&n.childLanes)!==0,r||(Ls(e,n,a,!1),r=(a&n.childLanes)!==0),c){if(r)return md(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Wo(n,On.current),r)break;return null;case 22:return n.lanes=0,Mg(e,n,a,n.pendingProps);case 24:Ka(n,gn,e.memoizedState.cache)}return Aa(e,n,a)}function Ug(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)_n=!0;else{if(!gd(e,a)&&(n.flags&128)===0)return _n=!1,qy(e,n,a);_n=(e.flags&131072)!==0}else _n=!1,Rt&&(n.flags&1048576)!==0&&c0(n,Io,n.index);switch(n.lanes=0,n.tag){case 16:e:{var r=n.pendingProps;if(e=zs(n.elementType),n.type=e,typeof e=="function")bf(e)?(r=Gs(e,r),n.tag=1,n=Ag(null,n,e,r,a)):(n.tag=0,n=cd(null,n,e,r,a));else{if(e!=null){var c=e.$$typeof;if(c===Z){n.tag=11,n=xg(null,n,e,r,a);break e}else if(c===le){n.tag=14,n=Sg(null,n,e,r,a);break e}else if(c===te){n.tag=10,n.type=e,n=Dg(null,n,a);break e}}throw n=Se(e)||e,Error(s(306,n,""))}}return n;case 0:return cd(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,c=Gs(r,n.pendingProps),Ag(e,n,r,c,a);case 3:e:{if(Q(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;c=f.element,If(e,n),Xo(n,r,null,a);var _=n.memoizedState;if(r=_.cache,Ka(n,gn,r),r!==f.cache&&Nf(n,[gn],a,!0),ko(),r=_.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=wg(e,n,r,a);break e}else if(r!==c){c=Ei(Error(s(424)),n),zo(c),n=wg(e,n,r,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(nn=Ci(e.firstChild),wn=n,Rt=!0,ja=null,wi=!0,a=M0(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(Ds(),r===c){n=Aa(e,n,a);break e}bn(e,n,r,a)}n=n.child}return n;case 26:return wr(e,n),e===null?(a=i_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Rt||(n.stateNode=Iv(n.type,n.pendingProps,mt.current,n)):n.memoizedState=i_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Et(n),e===null&&Rt&&(r=n.stateNode=$v(n.type,n.pendingProps,mt.current),wn=n,wi=!0,c=nn,fs(n.type)?(dh=c,nn=Ci(r.firstChild)):nn=c),bn(e,n,n.pendingProps.children,a),wr(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Rt&&((c=r=nn)&&(r=HM(r,n.type,n.pendingProps,wi),r!==null?(n.stateNode=r,wn=n,nn=Ci(r.firstChild),wi=!1,c=!0):c=!1),c||Za(n)),Et(n),c=n.type,f=n.pendingProps,_=e!==null?e.memoizedProps:null,r=f.children,ih(c,f)?r=null:_!==null&&ih(c,_)&&(n.flags|=32),n.memoizedState!==null&&(c=Xf(e,n,Py,null,null,a),Wr._currentValue=c),wr(e,n),bn(e,n,r,a),n.child;case 6:return e===null&&Rt&&((e=a=nn)&&(a=GM(a,n.pendingProps,wi),a!==null?(n.stateNode=a,wn=n,nn=null,e=!0):e=!1),e||Za(n)),null;case 13:return Rg(e,n,a);case 4:return Q(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Fs(n,null,r,a):bn(e,n,r,a),n.child;case 11:return xg(e,n,n.type,n.pendingProps,a);case 7:return r=n.pendingProps,wr(e,n),bn(e,n,r,a),n.child;case 8:return bn(e,n,n.pendingProps.children,a),n.child;case 12:return bn(e,n,n.pendingProps.children,a),n.child;case 10:return Dg(e,n,a);case 9:return c=n.type._context,r=n.pendingProps.children,Os(n),c=Un(c),r=r(c),n.flags|=1,bn(e,n,r,a),n.child;case 14:return Sg(e,n,n.type,n.pendingProps,a);case 15:return yg(e,n,n.type,n.pendingProps,a);case 19:return md(e,n,a);case 31:return Xy(e,n,a);case 22:return Mg(e,n,a,n.pendingProps);case 24:return Os(n),r=Un(gn),e===null?(c=Lf(),c===null&&(c=en,f=Df(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:r,cache:c},Pf(n),Ka(n,gn,c)):((e.lanes&a)!==0&&(If(e,n),Xo(n,null,null,a),ko()),c=e.memoizedState,f=n.memoizedState,c.parent!==r?(c={parent:r,cache:r},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Ka(n,gn,r)):(r=f.cache,Ka(n,gn,r),r!==c.cache&&Nf(n,[gn],a,!0))),bn(e,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=n.pendingProps,r.name!=null&&r.name!=="auto"?n.flags|=e===null?18882560:18874368:Rt&&tc(n),e!==null&&e.memoizedProps.name!==r.name?n.flags|=4194816:wr(e,n),bn(e,n,r.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function wa(e){e.flags|=4}function vd(e,n,a,r,c){var f;if((f=(e.mode&32)!==0)&&(f=a===null?o_(n,r):o_(n,r)&&(r.src!==a.src||r.srcSet!==a.srcSet)),f){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(hv())e.flags|=8192;else throw Bs=lc,Of}else e.flags&=-16777217}function Lg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!l_(n))if(hv())e.flags|=8192;else throw Bs=lc,Of}function wc(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Mo():536870912,e.lanes|=n,Ur|=n)}function Ko(e,n){if(!Rt)switch(e.tailMode){case"visible":break;case"collapsed":for(var a=e.tail,r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(n=e.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null}}function an(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&1206910976,r|=c.flags&1206910976,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function Yy(e,n,a){var r=n.pendingProps;switch(Af(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return an(n),null;case 1:return an(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),ba(gn),Wt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Sr(n)?wa(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Rf())),an(n),null;case 26:var c=n.type,f=n.memoizedState;return e===null?(wa(n),f!==null?(an(n),Lg(n,f)):(an(n),vd(n,c,null,r,a))):f?f!==e.memoizedState?(wa(n),an(n),Lg(n,f)):(an(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&wa(n),an(n),vd(n,c,e,r,a)),null;case 27:if(z(n),a=mt.current,c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&wa(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return an(n),n.subtreeFlags&=-33554433,null}e=ot.current,Sr(n)?f0(n):(e=$v(c,r,a),n.stateNode=e,wa(n))}return an(n),n.subtreeFlags&=-33554433,null;case 5:if(z(n),c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&wa(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return an(n),n.subtreeFlags&=-33554433,null}if(f=ot.current,Sr(n))f0(n);else{var _=ol(mt.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?_.createElement("select",{is:r.is}):_.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?_.createElement(c,{is:r.is}):_.createElement(c)}}f[T]=n,f[q]=r;e:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break e;for(;_.sibling===null;){if(_.return===null||_.return===n)break e;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;e:switch(In(f,c,r),c){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&wa(n)}}return an(n),n.subtreeFlags&=-33554433,vd(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&wa(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=mt.current,Sr(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,c=wn,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}e[T]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||Uv(e.nodeValue,a)),e||Za(n,!0)}else e=ol(e).createTextNode(r),e[T]=n,n.stateNode=e}return an(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(r=Sr(n),a!==null){if(e===null){if(!r)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[T]=n}else Ds(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;an(n),e=!1}else a=Rf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ui(n),n):(ui(n),null);if((n.flags&128)!==0)throw Error(s(558))}return an(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Sr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[T]=n}else Ds(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;an(n),c=!1}else c=Rf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(ui(n),n):(ui(n),null)}return ui(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,e=e!==null&&e.memoizedState!==null,a&&(r=n.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==c&&(r.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),wc(n,n.updateQueue),an(n),null);case 4:return Wt(),e===null&&Jd(n.stateNode.containerInfo),n.flags|=67108864,an(n),null;case 10:return ba(n.type),an(n),null;case 19:if(Vf(n),r=n.memoizedState,r===null)return an(n),null;if(c=(n.flags&128)!==0,f=r.rendering,f===null)if(c)Ko(r,!1);else{if(hn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=dc(e),f!==null){for(n.flags|=128,Ko(r,!1),e=f.updateQueue,n.updateQueue=e,wc(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)r0(a,e),a=a.sibling;return Wo(n,On.current&1|2),Rt&&ya(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&Oe()>Fc&&(n.flags|=128,c=!0,Ko(r,!1),n.lanes=4194304)}else{if(!c)if(e=dc(f),e!==null){if(n.flags|=128,c=!0,e=e.updateQueue,n.updateQueue=e,wc(n,e),Ko(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!f.alternate&&!Rt)return an(n),null}else 2*Oe()-r.renderingStartTime>Fc&&a!==536870912&&(n.flags|=128,c=!0,Ko(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(e=r.last,e!==null?e.sibling=f:n.child=f,r.last=f)}if(r.tail!==null){e=r.tail;e:{for(a=e;a!==null;){if(a.alternate!==null){a=!1;break e}a=a.sibling}a=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Oe(),e.sibling=null,f=On.current,f=c?f&1|2:f&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!a||Rt?Wo(n,f):(a=f,Be(Ln,n),Be(On,a),Fn===null&&(Fn=n)),Rt&&ya(n,r.treeForkCount),e}return an(n),null;case 22:case 23:return ui(n),Hf(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(an(n),n.subtreeFlags&6&&(n.flags|=8192)):an(n),a=n.updateQueue,a!==null&&wc(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&Pe(Is),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ba(gn),an(n),null;case 25:return null;case 30:return n.flags|=33554432,an(n),null}throw Error(s(156,n.tag))}function jy(e,n){switch(Af(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ba(gn),Wt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return z(n),null;case 31:if(n.memoizedState!==null){if(ui(n),n.alternate===null)throw Error(s(340));Ds()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ui(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Ds()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Vf(n),e=n.flags,e&65536?(n.flags=e&-65537|128,e=n.memoizedState,e!==null&&(e.rendering=null,e.tail=null),n.flags|=4,n):null;case 4:return Wt(),null;case 10:return ba(n.type),null;case 22:case 23:return ui(n),Hf(),e!==null&&Pe(Is),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ba(gn),null;case 25:return null;default:return null}}function Og(e,n){switch(Af(n),n.tag){case 3:ba(gn),Wt();break;case 26:case 27:case 5:z(n);break;case 4:Wt();break;case 31:n.memoizedState!==null&&ui(n);break;case 13:ui(n);break;case 19:Vf(n);break;case 10:ba(n.type);break;case 22:case 23:ui(n),Hf(),e!==null&&Pe(Is);break;case 24:ba(gn)}}function Qo(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&e)===e){r=void 0;var f=a.create,_=a.inst;r=f(),_.destroy=r}a=a.next}while(a!==c)}}catch(w){Zt(n,n.return,w)}}function as(e,n,a){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var f=c.next;r=f;do{if((r.tag&e)===e){var _=r.inst,w=_.destroy;if(w!==void 0){_.destroy=void 0,c=n;var G=a,ae=w;try{ae()}catch(ve){Zt(c,G,ve)}}}r=r.next}while(r!==f)}}catch(ve){Zt(n,n.return,ve)}}function Pg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{E0(n,a)}catch(r){Zt(e,e.return,r)}}}function Ig(e,n,a){a.props=Gs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){Zt(e,n,r)}}function Ji(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var c=e.stateNode,f=_a(e.memoizedProps,c);(c.ref===null||c.ref.name!==f)&&(c.ref=kv(f)),r=c.ref;break;case 7:if(e.stateNode===null){var _=new mi(e);v(e.child,!1,BM,_,void 0,void 0),e.stateNode=_}r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(w){Zt(e,n,w)}}function Pn(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){Zt(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Zt(e,n,c)}else a.current=null}function Rc(e,n){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&n!==null)for(var a=0;a<n.length;a++)Zv(e.stateNode,n[a])}function zg(e){for(var n=e.return;n!==null&&(xd(n)&&Zv(e.stateNode,n.stateNode),!_d(n));)n=n.return}function Jo(e){for(var n=e.return;n!==null&&(xd(n)&&FM(e.stateNode,n.stateNode),!_d(n));)n=n.return}function _d(e){return e.tag===5||e.tag===3||e.tag===27}function xd(e){return e&&e.tag===7&&e.stateNode!==null}function Sd(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break e;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){Zt(e,e.return,c)}}function yd(e,n,a){try{var r=e.stateNode;SM(r,e.type,a,n),r[q]=n}catch(c){Zt(e,e.return,c)}}function Bg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&fs(e.type)||e.tag===4}function Md(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Bg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&fs(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function bd(e,n,a,r){var c=e.tag;if(c===5||c===6)c=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(c,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(c),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Zi)),Rc(e,r),wt=!0;else if(c!==4&&(c===27&&(Rc(e,r),r=null,fs(e.type)&&(a=e.stateNode,n=null)),e=e.child,e!==null))for(bd(e,n,a,r),e=e.sibling;e!==null;)bd(e,n,a,r),e=e.sibling}function Cc(e,n,a,r){var c=e.tag;if(c===5||c===6)c=e.stateNode,n?a.insertBefore(c,n):a.appendChild(c),Rc(e,r),wt=!0;else if(c!==4&&(c===27&&(Rc(e,r),r=null,fs(e.type)&&(a=e.stateNode)),e=e.child,e!==null))for(Cc(e,n,a,r),e=e.sibling;e!==null;)Cc(e,n,a,r),e=e.sibling}function Fg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);In(n,r,a),n[T]=e,n[q]=a}catch(f){Zt(e,e.return,f)}}var Nc=!1,fi=null;function Hg(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(Nc=!0)}var $i=null;function Gg(){var e=$i;return $i=null,e}var Jn=0;function Rr(e,n,a,r,c){return Jn=0,Vg(e.child,n,a,r,c)}function Vg(e,n,a,r,c){for(var f=!1;e!==null;){if(e.tag===5){var _=e.stateNode;if(r!==null){var w=rh(_);r.push(w),w.view&&(f=!0)}else f||rh(_).view&&(f=!0);Nc=!0,Gv(_,Jn===0?n:n+"_"+Jn,a),Jn++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&c||Vg(e.child,n,a,r,c)&&(f=!0));e=e.sibling}return f}function ea(e,n){for(;e!==null;)e.tag===5?Vv(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&n||ea(e.child,n)),e=e.sibling}function Dc(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Dc(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var n=e.memoizedProps;if(n.name==null||n.name==="auto")throw Error(s(544));var a=n.name;n=xa(n.default,n.share),n!=="none"&&(Rr(e,a,n,null,!1)||ea(e.child,!1))}e=e.sibling}}function Ed(e,n){if(e.tag===30){var a=e.stateNode,r=e.memoizedProps,c=_a(r,a),f=xa(r.default,a.paired?r.share:r.enter);f!=="none"?Rr(e,c,f,null,!1)?(Dc(e),a.paired||n||Ir(e,r.onEnter)):ea(e.child,!1):Dc(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Ed(e,n),e=e.sibling;else Dc(e)}function Td(e){if(fi!==null&&fi.size!==0){var n=fi;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var a=e.memoizedProps,r=a.name;if(r!=null&&r!=="auto"){var c=n.get(r);if(c!==void 0){var f=xa(a.default,a.share);if(f!=="none"&&(Rr(e,r,f,null,!1)?(f=e.stateNode,c.paired=f,f.paired=c,Ir(e,a.onShare)):ea(e.child,!1)),n.delete(r),n.size===0)break}}}Td(e)}e=e.sibling}}}function Ad(e){if(e.tag===30){var n=e.memoizedProps,a=_a(n,e.stateNode),r=fi!==null?fi.get(a):void 0,c=xa(n.default,r!==void 0?n.share:n.exit);c!=="none"&&(Rr(e,a,c,null,!1)?r!==void 0?(c=e.stateNode,r.paired=c,c.paired=r,fi.delete(a),Ir(e,n.onShare)):Ir(e,n.onExit):ea(e.child,!1)),fi!==null&&Td(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Ad(e),e=e.sibling;else fi!==null&&Td(e)}function kg(e){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,a=_a(n,e.stateNode);n=xa(n.default,n.update),e.flags&=-5,n!=="none"&&Rr(e,a,n,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&kg(e);e=e.sibling}}function wd(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.stateNode;n.paired!==null&&(n.paired=null,ea(e.child,!1))}wd(e)}e=e.sibling}}function Uc(e){if(e.tag===30)e.stateNode.paired=null,ea(e.child,!1),wd(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Uc(e),e=e.sibling;else wd(e)}function Xg(e){for(e=e.child;e!==null;)e.tag===30?ea(e.child,!1):(e.subtreeFlags&33554432)!==0&&Xg(e),e=e.sibling}function Rd(e,n,a,r,c,f,_){for(var w=!1;n!==null;){if(n.tag===5){var G=n.stateNode;if(f!==null&&Jn<f.length){var ae=f[Jn],ve=rh(G);(ae.view||ve.view)&&(w=!0);var Ae;if(Ae=(e.flags&4)===0)if(ve.clip)Ae=!0;else{Ae=ae.rect;var ne=ve.rect;Ae=Ae.y!==ne.y||Ae.x!==ne.x||Ae.height!==ne.height||Ae.width!==ne.width}Ae&&(e.flags|=4),ve.abs?ve=!ae.abs:(ae=ae.rect,ve=ve.rect,ve=ae.height!==ve.height||ae.width!==ve.width),ve&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&Gv(G,Jn===0?a:a+"_"+Jn,c),w&&(e.flags&4)!==0||($i===null&&($i=[]),$i.push(G,Jn===0?r:r+"_"+Jn,n.memoizedProps)),Jn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&_?e.flags|=n.flags&32:Rd(e,n.child,a,r,c,f,_)&&(w=!0));n=n.sibling}return w}function Wg(e,n){for(e=e.child;e!==null;){if(e.tag===30){var a=e.memoizedProps,r=e.stateNode,c=_a(a,r),f=xa(a.default,a.update),_;_=e.memoizedState,e.memoizedState=null,r=e;var w=e.child;Jn=0,c=Rd(r,w,c,c,f,_,!1),(e.flags&4)!==0&&c&&Ir(e,a.onUpdate)}else(e.subtreeFlags&33554432)!==0&&Wg(e);e=e.sibling}}var Rn=!1,Yt=!1,ta=!1,Cd=!1,qg=typeof WeakSet=="function"?WeakSet:Set,Cn=null,na=!1,$o=!1,Lc=!1,Nd=!1;function Zy(e,n,a){if(e=e.containerInfo,th=qr,e=Km(e),gf(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var c=r.getSelection&&r.getSelection();if(c&&c.rangeCount!==0){r=c.anchorNode;var f=c.anchorOffset,_=c.focusNode;c=c.focusOffset;try{r.nodeType,_.nodeType}catch{r=null;break e}var w=0,G=-1,ae=-1,ve=0,Ae=0,ne=e,me=null;t:for(;;){for(var We;ne!==r||f!==0&&ne.nodeType!==3||(G=w+f),ne!==_||c!==0&&ne.nodeType!==3||(ae=w+c),ne.nodeType===3&&(w+=ne.nodeValue.length),(We=ne.firstChild)!==null;)me=ne,ne=We;for(;;){if(ne===e)break t;if(me===r&&++ve===f&&(G=w),me===_&&++Ae===c&&(ae=w),(We=ne.nextSibling)!==null)break;ne=me,me=ne.parentNode}ne=We}r=G===-1||ae===-1?null:{start:G,end:ae}}else r=null}r=r||{start:0,end:0}}else r=null;for(nh={focusedElem:e,selectionRange:r},qr=!1,a=(a&335544064)===a,Cn=n,n=a?9270:1024;Cn!==null;){if(e=Cn,a&&(r=e.deletions,r!==null))for(f=0;f<r.length;f++)a&&Ad(r[f]);if(e.alternate===null&&(e.flags&2)!==0)a&&Hg(e),Oc(a);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&a&&Ad(r),Oc(a);continue}else if(r!==null&&r.memoizedState!==null){a&&Hg(e),Oc(a);continue}}r=e.child,(e.subtreeFlags&n)!==0&&r!==null?(r.return=e,Cn=r):(a&&kg(e),Oc(a))}}fi=null}function Oc(e){for(;Cn!==null;){var n=Cn,a=e,r=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((c&1024)!==0&&r!==null){a=void 0,c=r.memoizedProps,r=r.memoizedState;var f=n.stateNode;try{var _=Gs(n.type,c);a=f.getSnapshotBeforeUpdate(_,r),f.__reactInternalSnapshotBeforeUpdate=a}catch(w){Zt(n,n.return,w)}}break;case 3:if((c&1024)!==0){if(r=n.stateNode.containerInfo,a=r.nodeType,a===9)ch(r);else if(a===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":ch(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&r!==null&&(a=_a(r.memoizedProps,r.stateNode),c=n.memoizedProps,c=xa(c.default,c.update),c!=="none"&&Rr(r,a,c,r.memoizedState=[],!0));break;default:if((c&1024)!==0)throw Error(s(163))}if(r=n.sibling,r!==null){r.return=n.return,Cn=r;break}Cn=n.return}}function Yg(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:ia(e,a),r&4&&Qo(5,a);break;case 1:if(ia(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(_){Zt(a,a.return,_)}else{var c=Gs(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(_){Zt(a,a.return,_)}}r&64&&Pg(a),r&512&&Ji(a,a.return);break;case 3:if(ia(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{E0(e,n)}catch(_){Zt(a,a.return,_)}}break;case 27:n===null&&r&4&&Fg(a);case 26:case 5:ia(e,a),n===null&&r&4&&Sd(a),r&512&&Ji(a,a.return);break;case 12:ia(e,a);break;case 31:ia(e,a),r&4&&Qg(e,a);break;case 13:ia(e,a),r&4&&Jg(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=oM.bind(null,a),VM(e,a))));break;case 22:if(r=a.memoizedState!==null||Rn,!r){var f=n!==null&&n.memoizedState!==null||Yt;n=Rn,c=Yt,Rn=r,(Yt=f)&&!c?(r=2,(a.subtreeFlags&8772)!==0&&(r|=1),zi(e,a,r)):ia(e,a),Rn=n,Yt=c}break;case 30:ia(e,a),r&512&&Ji(a,a.return);break;case 7:r&512&&Ji(a,a.return);default:ia(e,a)}}function Dd(e,n){for(e=e.child;e!==null;)jg(e,n),e=e.sibling}function jg(e,n){switch(e.tag){case 5:case 26:try{var a=e.stateNode;if(n){var r=a.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var c=e.stateNode,f=e.memoizedProps.style,_=f!=null&&f.hasOwnProperty("display")?f.display:null;c.style.display=_==null||typeof _=="boolean"?"":(""+_).trim()}}catch(G){Zt(e,e.return,G)}Ud(e,n);break;case 6:try{e.stateNode.nodeValue=n?"":e.memoizedProps,wt=!0}catch(G){Zt(e,e.return,G)}break;case 18:try{var w=e.stateNode;n?Hv(w,!0):Hv(e.stateNode,!1)}catch(G){Zt(e,e.return,G)}break;case 22:case 23:e.memoizedState===null&&Dd(e,n);break;default:Dd(e,n)}}function Ud(e,n){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){e:{var a=e,r=n;switch(a.tag){case 4:jg(a,r);break e;case 22:a.memoizedState===null&&Ud(a,r);break e;default:Ud(a,r)}}e=e.sibling}}function Zg(e){var n=e.alternate;n!==null&&(e.alternate=null,Zg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&tt(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var rn=null,$n=!1;function Pi(e,n,a){for(a=a.child;a!==null;)Kg(e,n,a),a=a.sibling}function Kg(e,n,a){if(qe&&typeof qe.onCommitFiberUnmount=="function")try{qe.onCommitFiberUnmount($e,a)}catch{}switch(a.tag){case 26:Yt||Pn(a,n),Pi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!Yt&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Yt||Pn(a,n),Jo(a);var r=rn,c=$n;fs(a.type)&&(rn=a.stateNode,$n=!1),Pi(e,n,a),e_(a.stateNode,a.type,a.memoizedProps),rn=r,$n=c;break;case 5:Yt||Pn(a,n),Jo(a);case 6:if(a.tag===6&&Jo(a),r=rn,c=$n,rn=null,Pi(e,n,a),rn=r,$n=c,rn!==null)if($n)try{(rn.nodeType===9?rn.body:rn.nodeName==="HTML"?rn.ownerDocument.body:rn).removeChild(a.stateNode),wt=!0}catch(f){Zt(a,n,f)}else try{rn.removeChild(a.stateNode),wt=!0}catch(f){Zt(a,n,f)}break;case 18:rn!==null&&($n?(e=rn,Fv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Yr(e)):Fv(rn,a.stateNode));break;case 4:r=rn,c=$n,rn=a.stateNode.containerInfo,$n=!0,Pi(e,n,a),rn=r,$n=c;break;case 0:case 11:case 14:case 15:as(2,a,n),Yt||as(4,a,n),Pi(e,n,a);break;case 1:Yt||(Pn(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&Ig(a,n,r)),Pi(e,n,a);break;case 21:Pi(e,n,a);break;case 22:Yt=(r=Yt)||a.memoizedState!==null,Pi(e,n,a),Yt=r;break;case 30:Pn(a,n),Pi(e,n,a);break;case 7:Yt||Pn(a,n),Pi(e,n,a);break;default:Pi(e,n,a)}}function Qg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Yr(e)}catch(a){Zt(n,n.return,a)}}}function Jg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Yr(e)}catch(a){Zt(n,n.return,a)}}function Ky(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new qg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new qg),n;default:throw Error(s(435,e.tag))}}function Pc(e,n){var a=Ky(e);n.forEach(function(r){if(!a.has(r)){a.add(r);var c=lM.bind(null,e,r);r.then(c,c)}})}function Yn(e,n,a){var r=n.deletions;if(r!==null)for(var c=0;c<r.length;c++){var f=r[c],_=e,w=n,G=w;e:for(;G!==null;){switch(G.tag){case 27:if(fs(G.type)){rn=G.stateNode,$n=!1;break e}break;case 5:rn=G.stateNode,$n=!1;break e;case 3:case 4:rn=G.stateNode.containerInfo,$n=!0;break e}G=G.return}if(rn===null)throw Error(s(160));Kg(_,w,f),rn=null,$n=!1,_=f.alternate,_!==null&&(_.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)$g(n,e,a),n=n.sibling}var Ii=null;function $g(e,n,a){var r=e.alternate,c=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(c&4&&(r=e.updateQueue,r=r!==null?r.events:null,r!==null))for(var f=0;f<r.length;f++){var _=r[f];_.ref.impl=_.nextImpl}Yn(n,e,a),jn(e),c&4&&(as(3,e,e.return),Qo(3,e),as(5,e,e.return));break;case 1:Yn(n,e,a),jn(e),c&512&&(Yt||r===null||Pn(r,r.return)),c&64&&Rn&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(f=Ii,Yn(n,e,a),jn(e),c&512&&(Yt||r===null||Pn(r,r.return)),c&4)if(c=r!==null?r.memoizedState:null,a=e.memoizedState,r===null)if(a===null)if(e.stateNode===null)if(Rn)e.stateNode=Iv(e.type,e.memoizedProps,n.containerInfo,e);else{e:{n=e.type,a=e.memoizedProps,c=f.ownerDocument||f;t:switch(n){case"title":r=c.getElementsByTagName("title")[0],(!r||r[Xe]||r[T]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=c.createElement(n),c.head.insertBefore(r,c.querySelector("head > title"))),In(r,n,a),r[T]=e,At(r),n=r;break e;case"link":if(f=r_("link","href",c).get(n+(a.href||""))){for(_=0;_<f.length;_++)if(r=f[_],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){f.splice(_,1);break t}}r=c.createElement(n),In(r,n,a),c.head.appendChild(r);break;case"meta":if(f=r_("meta","content",c).get(n+(a.content||""))){for(_=0;_<f.length;_++)if(r=f[_],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){f.splice(_,1);break t}}r=c.createElement(n),In(r,n,a),c.head.appendChild(r);break;default:throw Error(s(468,n))}r[T]=e,At(r),n=r}e.stateNode=n}else Rn||gh(f,e.type,e.stateNode);else e.stateNode=s_(f,a,e.memoizedProps);else c!==a?(c===null?(n=r.stateNode,n===null||Yt||n.parentNode.removeChild(n)):c.count--,a===null?Rn||gh(f,e.type,e.stateNode):s_(f,a,e.memoizedProps)):a===null&&e.stateNode!==null&&yd(e,e.memoizedProps,r.memoizedProps);break;case 27:Yn(n,e,a),jn(e),c&512&&(Yt||r===null||Pn(r,r.return)),r!==null&&c&4&&yd(e,e.memoizedProps,r.memoizedProps);break;case 5:if(f=ta,ta=!1,Yn(n,e,a),ta=f,jn(e),c&512&&(Yt||r===null||Pn(r,r.return)),e.flags&32){n=e.stateNode;try{ur(n,""),wt=!0}catch(ve){Zt(e,e.return,ve)}}c&4&&e.stateNode!=null&&(n=e.memoizedProps,yd(e,n,r!==null?r.memoizedProps:n)),c&1024&&(Cd=!0);break;case 6:if(Yn(n,e,a),jn(e),c&4){if(e.stateNode===null)throw Error(s(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n,wt=!0}catch(ve){Zt(e,e.return,ve)}}break;case 3:if(wt=!1,Kc=null,f=Ii,Ii=ll(n.containerInfo),Yn(n,e,a),Ii=f,jn(e),c&4&&r!==null&&r.memoizedState.isDehydrated)try{Yr(n.containerInfo)}catch(ve){Zt(e,e.return,ve)}Cd&&(Cd=!1,ev(e)),wt=!1;break;case 4:c=ta,ta=Rn,r=kt(),f=Ii,Ii=ll(e.stateNode.containerInfo),Yn(n,e,a),jn(e),Ii=f,wt&&$o&&(Lc=!0),wt=r,ta=c;break;case 12:Yn(n,e,a),jn(e);break;case 31:Yn(n,e,a),jn(e),c&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Pc(e,n)));break;case 13:Yn(n,e,a),jn(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Bc=Oe()),c&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Pc(e,n)));break;case 22:f=e.memoizedState!==null,_=r!==null&&r.memoizedState!==null;var w=Rn,G=Yt,ae=ta;Rn=w||f,ta=ae||f,Yt=G||_,Yn(n,e,a),Yt=G,ta=ae,Rn=w,jn(e),c&8192&&(n=e.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,!f||r===null||_||Rn||Yt||(n=_||Yt,a=Rn,r=Yt,Rn=f||Rn,Yt=n,ss(e,2),Rn=a,Yt=r),!f&&ta||Dd(e,f)),c&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Pc(e,a))));break;case 19:Yn(n,e,a),jn(e),c&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Pc(e,n)));break;case 30:c&512&&(Yt||r===null||Pn(r,r.return)),c=kt(),f=$o,_=(a&335544064)===a,w=e.memoizedProps,$o=_&&xa(w.default,w.update)!=="none",Yn(n,e,a),jn(e),_&&r!==null&&wt&&(e.flags|=4),$o=f,wt=c;break;case 21:break;case 7:c&512&&(Yt||r===null||Pn(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=e);default:Yn(n,e,a),jn(e)}}function jn(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(Bg(r)){a=r;break}r=r.return}r=null;for(var c=e.return;c!==null;){if(xd(c)){var f=c.stateNode;r===null?r=[f]:r.push(f)}if(_d(c))break;c=c.return}var _=r;if(a==null)throw Error(s(160));switch(a.tag){case 27:var w=a.stateNode,G=Md(e);Cc(e,G,w,_);break;case 5:var ae=a.stateNode;a.flags&32&&(ur(ae,""),a.flags&=-33);var ve=Md(e);Cc(e,ve,ae,_);break;case 3:case 4:var Ae=a.stateNode.containerInfo,ne=Md(e);bd(e,ne,Ae,_);break;default:throw Error(s(161))}}catch(me){Zt(e,e.return,me)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function ev(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;ev(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,qr=!0,n.reset(),qr=!1),e=e.sibling}}function Cr(e,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)tv(n,e),n=n.sibling;else Wg(n)}function tv(e,n){var a=e.alternate;if(a===null)Ed(e,!1);else switch(e.tag){case 3:if(Nd=na=!1,Gg(),Cr(n,e),!na&&!Lc){if(e=$i,e!==null)for(var r=0;r<e.length;r+=3){a=e[r];var c=e[r+1];Vv(a,e[r+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+c+")"})}e=n.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Nd=!0}$i=null;break;case 5:Cr(n,e);break;case 4:r=na,na=!1,Cr(n,e),na&&(Lc=!0),na=r;break;case 22:e.memoizedState===null&&(a.memoizedState!==null?Ed(e,!1):Cr(n,e));break;case 30:r=na,c=Gg(),na=!1,Cr(n,e),na&&(e.flags|=4);var f=e.memoizedProps,_=e.stateNode;n=_a(f,_),_=_a(a.memoizedProps,_);var w=xa(f.default,f.update);w==="none"?n=!1:(f=a.memoizedState,a.memoizedState=null,a=e.child,Jn=0,n=Rd(e,a,n,_,w,f,!0),Jn!==(f===null?0:f.length)&&(e.flags|=32)),(e.flags&4)!==0&&n?(Ir(e,e.memoizedProps.onUpdate),$i=c):c!==null&&(c.push.apply(c,$i),$i=c),na=(e.flags&32)!==0?!0:r;break;default:Cr(n,e)}}function ia(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Yg(e,n.alternate,n),n=n.sibling}function ss(e,n){for(e=e.child;e!==null;){var a=e,r=n;switch(a.tag){case 0:case 11:case 14:case 15:as(4,a,a.return),ss(a,r);break;case 1:Pn(a,a.return);var c=a.stateNode;typeof c.componentWillUnmount=="function"&&Ig(a,a.return,c),ss(a,r);break;case 27:(r&2)!==0&&e_(a.stateNode,a.type,a.memoizedProps);case 5:Pn(a,a.return),a.tag!==5&&a.tag!==27||Jo(a),ss(a,r);break;case 6:Jo(a);break;case 26:Pn(a,a.return),c=a.stateNode,a.memoizedState!==null||c===null||Yt||c.parentNode.removeChild(c),ss(a,r);break;case 22:a.memoizedState===null&&ss(a,r);break;case 30:Pn(a,a.return),ss(a,r);break;case 7:Pn(a,a.return);default:ss(a,r)}e=e.sibling}}function zi(e,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var r=n.alternate,c=e,f=n,_=f.flags,w=(a&1)!==0;switch(f.tag){case 0:case 11:case 15:zi(c,f,a),Qo(4,f);break;case 1:if(zi(c,f,a),r=f,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(ve){Zt(r,r.return,ve)}if(r=f,c=r.updateQueue,c!==null){var G=r.stateNode;try{var ae=c.shared.hiddenCallbacks;if(ae!==null)for(c.shared.hiddenCallbacks=null,c=0;c<ae.length;c++)b0(ae[c],G)}catch(ve){Zt(r,r.return,ve)}}w&&_&64&&Pg(f),Ji(f,f.return);break;case 27:(a&2)!==0&&Fg(f);case 5:f.tag!==5&&f.tag!==27||zg(f),zi(c,f,a),w&&r===null&&_&4&&Sd(f),Ji(f,f.return);break;case 6:zg(f);break;case 26:G=f.stateNode,f.memoizedState!==null||G===null||Rn||gh(ll(G.ownerDocument),f.type,G),zi(c,f,a),w&&r===null&&_&4&&Sd(f),Ji(f,f.return);break;case 12:zi(c,f,a);break;case 31:zi(c,f,a),w&&_&4&&Qg(c,f);break;case 13:zi(c,f,a),w&&_&4&&Jg(c,f);break;case 22:f.memoizedState===null&&zi(c,f,a),Ji(f,f.return);break;case 30:zi(c,f,a),Ji(f,f.return);break;case 7:Ji(f,f.return);default:zi(c,f,a)}n=n.sibling}}function Ld(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Bo(a))}function Od(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Bo(e))}function Ri(e,n,a,r){var c=(a&335544064)===a;if(n.subtreeFlags&(c?10262:10256))for(n=n.child;n!==null;)nv(e,n,a,r),n=n.sibling;else c&&Xg(n)}function nv(e,n,a,r){var c=(a&335544064)===a;c&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&Uc(n);var f=n.flags;switch(n.tag){case 0:case 11:case 15:Ri(e,n,a,r),f&2048&&Qo(9,n);break;case 1:Ri(e,n,a,r);break;case 3:Ri(e,n,a,r),c&&Nd&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),f&2048&&(f=null,n.alternate!==null&&(f=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==f&&(n.refCount++,f!=null&&Bo(f)));break;case 12:if(f&2048){Ri(e,n,a,r),f=n.stateNode;try{var _=n.memoizedProps,w=_.id,G=_.onPostCommit;typeof G=="function"&&G(w,n.alternate===null?"mount":"update",f.passiveEffectDuration,-0)}catch(ae){Zt(n,n.return,ae)}}else Ri(e,n,a,r);break;case 31:Ri(e,n,a,r);break;case 13:Ri(e,n,a,r);break;case 23:break;case 22:_=n.stateNode,w=n.alternate,n.memoizedState!==null?(c&&w!==null&&w.memoizedState===null&&Uc(w),_._visibility&2?Ri(e,n,a,r):el(e,n)):(c&&w!==null&&w.memoizedState!==null&&Uc(n),_._visibility&2?Ri(e,n,a,r):(_._visibility|=2,Nr(e,n,a,r,(n.subtreeFlags&10256)!==0||!1))),f&2048&&Ld(w,n);break;case 24:Ri(e,n,a,r),f&2048&&Od(n.alternate,n);break;case 30:c&&(f=n.alternate,f!==null&&(ea(f.child,!0),ea(n.child,!0))),Ri(e,n,a,r);break;default:Ri(e,n,a,r)}}function Nr(e,n,a,r,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,_=n,w=a,G=r,ae=_.flags;switch(_.tag){case 0:case 11:case 15:Nr(f,_,w,G,c),Qo(8,_);break;case 23:break;case 22:var ve=_.stateNode;_.memoizedState!==null?ve._visibility&2?Nr(f,_,w,G,c):el(f,_):(ve._visibility|=2,Nr(f,_,w,G,c)),c&&ae&2048&&Ld(_.alternate,_);break;case 24:Nr(f,_,w,G,c),c&&ae&2048&&Od(_.alternate,_);break;default:Nr(f,_,w,G,c)}n=n.sibling}}function el(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,c=r.flags;switch(r.tag){case 22:el(a,r),c&2048&&Ld(r.alternate,r);break;case 24:el(a,r),c&2048&&Od(r.alternate,r);break;default:el(a,r)}n=n.sibling}}var Vs=8192;function ks(e,n,a){if(e.subtreeFlags&Vs)for(e=e.child;e!==null;)iv(e,n,a),e=e.sibling}function iv(e,n,a){switch(e.tag){case 26:ks(e,n,a),e.flags&Vs&&(e.memoizedState!==null?nb(a,Ii,e.memoizedState,e.memoizedProps):(e=e.stateNode,(n&335544128)===n&&u_(a,e)));break;case 5:ks(e,n,a),e.flags&Vs&&(e=e.stateNode,(n&335544128)===n&&u_(a,e));break;case 3:case 4:var r=Ii;Ii=ll(e.stateNode.containerInfo),ks(e,n,a),Ii=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Vs,Vs=16777216,ks(e,n,a),Vs=r):ks(e,n,a));break;case 30:if((e.flags&Vs)!==0&&(r=e.memoizedProps.name,r!=null&&r!=="auto")){var c=e.stateNode;c.paired=null,fi===null&&(fi=new Map),fi.set(r,c)}ks(e,n,a);break;default:ks(e,n,a)}}function av(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function tl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Cn=r,rv(r,e)}av(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)sv(e),e=e.sibling}function sv(e){switch(e.tag){case 0:case 11:case 15:tl(e),e.flags&2048&&as(9,e,e.return);break;case 3:tl(e);break;case 12:tl(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Ic(e)):tl(e);break;default:tl(e)}}function Ic(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Cn=r,rv(r,e)}av(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:as(8,n,n.return),Ic(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ic(n));break;default:Ic(n)}e=e.sibling}}function rv(e,n){for(;Cn!==null;){var a=Cn;switch(a.tag){case 0:case 11:case 15:as(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Bo(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,Cn=r;else e:for(a=e;Cn!==null;){r=Cn;var c=r.sibling,f=r.return;if(Zg(r),r===a){Cn=null;break e}if(c!==null){c.return=f,Cn=c;break e}Cn=f}}}var Qy={getCacheForType:function(e){var n=Un(gn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Un(gn).controller.signal}},Jy=typeof WeakMap=="function"?WeakMap:Map,Xt=0,en=null,Ut=null,It=0,jt=0,di=null,rs=!1,Dr=!1,Pd=!1,Ra=0,hn=0,os=0,Xs=0,zc=0,hi=0,Ur=0,nl=null,ei=null,Id=!1,Bc=0,ov=0,Fc=1/0,Hc=null,ls=null,ln=0,Bi=null,Ws=null,aa=0,zd=0,Bd=null,lv=null,Lr=null,Or=null,Pr=null,il=0,Gc=null;function pi(){return(Xt&2)!==0&&It!==0?It&-It:de.T!==null?jd():Fl()}function cv(){if(hi===0)if((It&536870912)===0||Rt){var e=Es;Es<<=1,(Es&3932160)===0&&(Es=262144),hi=e}else hi=536870912;return e=Ln.current,e!==null&&(e.flags|=32),hi}function Ir(e,n){if(n!=null){var a=e.stateNode,r=a.ref;r===null&&(r=a.ref=kv(_a(e.memoizedProps,a))),Or===null&&(Or=[]),Or.push(n.bind(null,r))}}function ti(e,n,a){(e===en&&(jt===2||jt===9)||e.cancelPendingCommit!==null)&&(zr(e,0),cs(e,It,hi,!1)),Yi(e,a),((Xt&2)===0||e!==en)&&(e===en&&((Xt&2)===0&&(Xs|=a),hn===4&&cs(e,It,hi,!1)),sa(e))}function uv(e,n,a){if((Xt&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Xa(e,n),c=r?tM(e,n):Hd(e,n,!0),f=r;do{if(c===0){Dr&&!r&&cs(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!$y(a)){c=Hd(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var _=0;else _=e.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;e:{var w=e;c=nl;var G=w.current.memoizedState.isDehydrated;if(G&&(zr(w,_).flags|=256),_=Hd(w,_,!1),_!==2&&_!==6){if(Pd&&!G){w.errorRecoveryDisabledLanes|=f,Xs|=f,c=4;break e}f=ei,ei=c,f!==null&&(ei===null?ei=f:ei.push.apply(ei,f))}c=_}if(f=!1,c!==2)continue}}if(c===1){zr(e,0),cs(e,n,0,!0);break}e:{switch(r=e,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:cs(r,n,hi,!rs);break e;case 2:ei=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=Bc+300-Oe(),10<c)){if(cs(r,n,hi,!rs),Ts(r,0,!0)!==0)break e;aa=n,r.timeoutHandle=sh(fv.bind(null,r,a,ei,Hc,Id,n,hi,Xs,Ur,rs,f,"Throttled",-0,0),c);break e}fv(r,a,ei,Hc,Id,n,hi,Xs,Ur,rs,f,null,-0,0)}}break}while(!0);sa(e)}function fv(e,n,a,r,c,f,_,w,G,ae,ve,Ae,ne,me){e.timeoutHandle=-1;var We=n.subtreeFlags,nt=(f&335544064)===f;if(Ae=null,(nt||We&8192||(We&16785408)===16785408)&&(Ae={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Zi},fi=null,iv(n,f,Ae),nt&&(We=Ae,nt=e.containerInfo,nt=(nt.nodeType===9?nt:nt.ownerDocument).__reactViewTransition,nt!=null&&(We.count++,We.waitingForViewTransition=!0,We=fl.bind(We),nt.finished.then(We,We))),We=(f&62914560)===f?Bc-Oe():(f&4194048)===f?ov-Oe():0,We=ib(Ae,We),We!==null)){aa=f,e.cancelPendingCommit=We(xv.bind(null,e,n,f,a,r,c,_,w,G,ae,ve,Ae,null,ne,me)),cs(e,f,_,!ae);return}xv(e,n,f,a,r,c,_,w,G,ae,ve,Ae)}function $y(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],f=c.getSnapshot;c=c.value;try{if(!ci(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function cs(e,n,a,r){n=qi(e,n),n&=~zc,n&=~Xs,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var c=n;0<c;){var f=31-vt(c),_=1<<f;r[f]=-1,c&=~_}a!==0&&As(e,a,n)}function Vc(){return(Xt&6)===0?(al(0),!1):!0}function Fd(){if(Ut!==null){if(jt===0)var e=Ut.return;else e=Ut,Ma=Us=null,Yf(e),br=null,Go=0,e=Ut;for(;e!==null;)Og(e.alternate,e),e=e.return;Ut=null}}function zr(e,n){var a=e.timeoutHandle;return a!==-1&&(e.timeoutHandle=-1,bM(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),aa=0,Fd(),en=e,Ut=a=Sa(e.current,null),It=n,jt=0,di=null,rs=!1,Dr=Xa(e,n),Pd=!1,Ur=hi=zc=Xs=os=hn=0,ei=nl=null,Id=!1,Ra=qi(e,n),Kl(),a}function dv(e,n){Mt=null,de.H=yc,n===Mr||n===oc?(n=x0(),jt=3):n===Of?(n=x0(),jt=4):jt=n===ld?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,di=n,Ut===null&&(hn=1,Mc(e,Ei(n,e.current)))}function hv(){var e=Ln.current;return e===null?!0:(It&4194048)===It?Fn===null:(It&62914560)===It||(It&536870912)!==0?e===Fn:!1}function pv(){var e=de.H;return de.H=yc,e===null?yc:e}function mv(){var e=de.A;return de.A=Qy,e}function kc(){hn=4,rs||(It&4194048)!==It&&Ln.current!==null||(Dr=!0),(os&134217727)===0&&(Xs&134217727)===0||en===null||cs(en,It,hi,!1)}function Hd(e,n,a){var r=Xt;Xt|=2;var c=pv(),f=mv();(en!==e||It!==n)&&(Hc=null,zr(e,n)),n=!1;var _=hn;e:do try{if(jt!==0&&Ut!==null){var w=Ut,G=di;switch(jt){case 8:Fd(),_=6;break e;case 3:case 2:case 9:case 6:Ln.current===null&&(n=!0);var ae=jt;if(jt=0,di=null,Br(e,w,G,ae),a&&Dr){_=0;break e}break;default:ae=jt,jt=0,di=null,Br(e,w,G,ae)}}eM(),_=hn;break}catch(ve){dv(e,ve)}while(!0);return n&&e.shellSuspendCounter++,Ma=Us=null,Xt=r,de.H=c,de.A=f,Ut===null&&(en=null,It=0,Kl()),_}function eM(){for(;Ut!==null;)gv(Ut)}function tM(e,n){var a=Xt;Xt|=2;var r=pv(),c=mv();en!==e||It!==n?(Hc=null,Fc=Oe()+500,zr(e,n)):Dr=Xa(e,n);e:do try{if(jt!==0&&Ut!==null){n=Ut;var f=di;t:switch(jt){case 1:jt=0,di=null,Br(e,n,f,1);break;case 2:case 9:if(v0(f)){jt=0,di=null,vv(n);break}n=function(){jt!==2&&jt!==9||en!==e||(jt=7),sa(e)},f.then(n,n);break e;case 3:jt=7;break e;case 4:jt=5;break e;case 7:v0(f)?(jt=0,di=null,vv(n)):(jt=0,di=null,Br(e,n,f,7));break;case 5:var _=null;switch(Ut.tag){case 26:_=Ut.memoizedState;case 5:case 27:var w=Ut;if(_?l_(_):w.stateNode.complete){jt=0,di=null;var G=w.sibling;if(G!==null)Ut=G;else{var ae=w.return;ae!==null?(Ut=ae,Xc(ae)):Ut=null}break t}}jt=0,di=null,Br(e,n,f,5);break;case 6:jt=0,di=null,Br(e,n,f,6);break;case 8:Fd(),hn=6;break e;default:throw Error(s(462))}}nM();break}catch(ve){dv(e,ve)}while(!0);return Ma=Us=null,de.H=r,de.A=c,Xt=a,Ut!==null?0:(en=null,It=0,Kl(),hn)}function nM(){for(;Ut!==null&&!Le();)gv(Ut)}function gv(e){var n=Ug(e.alternate,e,Ra);e.memoizedProps=e.pendingProps,n===null?Xc(e):Ut=n}function vv(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Tg(a,n,n.pendingProps,n.type,void 0,It);break;case 11:n=Tg(a,n,n.pendingProps,n.type.render,n.ref,It);break;case 5:Yf(n);var r=n;r===wn&&(Rt?(nc(r),r.tag===5&&r.stateNode!=null&&(nn=r.stateNode)):(nc(r),Rt=!0));default:Og(a,n),n=Ut=r0(n,Ra),n=Ug(a,n,Ra)}e.memoizedProps=e.pendingProps,n===null?Xc(e):Ut=n}function Br(e,n,a,r){Ma=Us=null,Yf(n),br=null,Go=0;var c=n.return;try{if(ky(e,c,n,a,It)){hn=1,Mc(e,Ei(a,e.current)),Ut=null;return}}catch(f){if(c!==null)throw Ut=c,f;hn=1,Mc(e,Ei(a,e.current)),Ut=null;return}n.flags&32768?(Rt||r===1?e=!0:Dr||(It&536870912)!==0?e=!1:(rs=e=!0,(r===2||r===9||r===3||r===6)&&(r=Ln.current,r!==null&&r.tag===13&&(r.flags|=16384))),_v(n,e)):Xc(n)}function Xc(e){var n=e;do{if((n.flags&32768)!==0){_v(n,rs);return}e=n.return;var a=Yy(n.alternate,n,Ra);if(a!==null){Ut=a;return}if(n=n.sibling,n!==null){Ut=n;return}Ut=n=e}while(n!==null);hn===0&&(hn=5)}function _v(e,n){do{var a=jy(e.alternate,e);if(a!==null){a.flags&=32767,Ut=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Ut=e;return}Ut=e=a}while(e!==null);hn=6,Ut=null}function xv(e,n,a,r,c,f,_,w,G,ae,ve,Ae){e.cancelPendingCommit=null;do Wc();while(ln!==0);if((Xt&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));e===en&&(Ut=en=null,It=0),Ws=n,Bi=e,aa=a,Bd=c,lv=r,iM(e,n,a,_,w,G,Ae)}}function iM(e,n,a,r,c,f,_){var w=n.lanes|n.childLanes;if(zd=w,w|=yf,Bl(e,a,w,r,c,f),Or=null,(a&335544064)===a?(Pr=Dy(e),r=10262):(Pr=null,r=10256),(n.subtreeFlags&r)!==0||(n.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,cM(He,function(){return Xd(),null})):(e.callbackNode=null,e.callbackPriority=0),Nc=!1,r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=de.T,de.T=null,c=Ne.p,Ne.p=2,f=Xt,Xt|=4;try{Zy(e,n,a)}finally{Xt=f,Ne.p=c,de.T=r}}ln=1,Nc?Lr=CM(_,e.containerInfo,Pr,Gd,Vd,sM,kd,Xd,aM):(Gd(),Vd(),kd())}function aM(e){if(ln!==0){var n=Bi.onRecoverableError;n(e,{componentStack:null})}}function sM(){ln===3&&(ln=0,tv(Ws,Bi),ln=4)}function Gd(){if(ln===1){ln=0;var e=Bi,n=Ws,a=aa,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=de.T,de.T=null;var c=Ne.p;Ne.p=2;var f=Xt;Xt|=4;try{$o=Lc=!1,$g(n,e,a),a=nh;var _=Km(e.containerInfo),w=a.focusedElem,G=a.selectionRange;if(_!==w&&w&&w.ownerDocument&&Zm(w.ownerDocument.documentElement,w)){if(G!==null&&gf(w)){var ae=G.start,ve=G.end;if(ve===void 0&&(ve=ae),"selectionStart"in w)w.selectionStart=ae,w.selectionEnd=Math.min(ve,w.value.length);else{var Ae=w.ownerDocument||document,ne=Ae&&Ae.defaultView||window;if(ne.getSelection){var me=ne.getSelection(),We=w.textContent.length,nt=Math.min(G.start,We),bt=G.end===void 0?nt:Math.min(G.end,We);!me.extend&&nt>bt&&(_=bt,bt=nt,nt=_);var ie=jm(w,nt),j=jm(w,bt);if(ie&&j&&(me.rangeCount!==1||me.anchorNode!==ie.node||me.anchorOffset!==ie.offset||me.focusNode!==j.node||me.focusOffset!==j.offset)){var ue=Ae.createRange();ue.setStart(ie.node,ie.offset),me.removeAllRanges(),nt>bt?(me.addRange(ue),me.extend(j.node,j.offset)):(ue.setEnd(j.node,j.offset),me.addRange(ue))}}}}for(Ae=[],me=w;me=me.parentNode;)me.nodeType===1&&Ae.push({element:me,left:me.scrollLeft,top:me.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<Ae.length;w++){var Te=Ae[w];Te.element.scrollLeft=Te.left,Te.element.scrollTop=Te.top}}qr=!!th,nh=th=null}finally{Xt=f,Ne.p=c,de.T=r}}e.current=n,ln=2}}function Vd(){if(ln===2){ln=0;var e=Bi,n=Ws,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=de.T,de.T=null;var r=Ne.p;Ne.p=2;var c=Xt;Xt|=4;try{Yg(e,n.alternate,n)}finally{Xt=c,Ne.p=r,de.T=a}}ln=3}}function kd(){if(ln===4||ln===3){ln=0;var e=Lr;Lr=null,Fe();var n=Bi,a=Ws,r=aa,c=lv,f=(r&335544064)===r?10262:10256;if((a.subtreeFlags&f)!==0||(a.flags&f)!==0?ln=5:(ln=0,Ws=Bi=null,Sv(n,n.pendingLanes)),f=n.pendingLanes,f===0&&(ls=null),Ao(r),a=a.stateNode,qe&&typeof qe.onCommitFiberRoot=="function")try{qe.onCommitFiberRoot($e,a,void 0,(a.current.flags&128)===128)}catch{}if(c!==null){a=de.T,f=Ne.p,Ne.p=2,de.T=null;try{for(var _=n.onRecoverableError,w=0;w<c.length;w++){var G=c[w];_(G.value,{componentStack:G.stack})}}finally{de.T=a,Ne.p=f}}if(c=Or,_=Pr,Pr=null,c!==null&&(Or=null,_===null&&(_=[]),e!==null))for(G=0;G<c.length;G++)a=(0,c[G])(_),a!==void 0&&e.finished.finally(a);(aa&3)!==0&&Wc(),sa(n),f=n.pendingLanes,(r&261930)!==0&&(f&42)!==0?n===Gc?il++:(il=0,Gc=n):(il=0,Gc=null),al(0)}}function Sv(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Bo(n)))}function Wc(){return Lr!==null&&(Lr.skipTransition(),Lr=null),Gd(),Vd(),kd(),Xd()}function Xd(){if(ln!==5)return!1;var e=Bi,n=zd;zd=0;var a=Ao(aa),r=de.T,c=Ne.p;try{Ne.p=32>a?32:a,de.T=null,a=Bd,Bd=null;var f=Bi,_=aa;if(ln=0,Ws=Bi=null,aa=0,(Xt&6)!==0)throw Error(s(331));var w=Xt;if(Xt|=4,sv(f.current),nv(f,f.current,_,a),Xt=w,al(0,!1),qe&&typeof qe.onPostCommitFiberRoot=="function")try{qe.onPostCommitFiberRoot($e,f)}catch{}return!0}finally{Ne.p=c,de.T=r,Sv(e,n)}}function yv(e,n,a){n=Ei(a,n),n=od(e.stateNode,n,2),e=es(e,n,2),e!==null&&(Yi(e,2),sa(e))}function Zt(e,n,a){if(e.tag===3)yv(e,e,a);else for(;n!==null;){if(n.tag===3){yv(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ls===null||!ls.has(r))){e=Ei(a,e),a=vg(2),r=es(n,a,2),r!==null&&(_g(a,r,n,e),Yi(r,2),sa(r));break}}n=n.return}}function Wd(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new Jy;var c=new Set;r.set(n,c)}else c=r.get(n),c===void 0&&(c=new Set,r.set(n,c));c.has(a)||(Pd=!0,c.add(a),e=rM.bind(null,e,n,a),n.then(e,e))}function rM(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,en===e&&(It&a)===a&&((hn===4||hn===3&&(It&62914560)===It&&300>Oe()-Bc)&&(Xt&2)===0?zr(e,0):zc|=a,Ur===It&&(Ur=0)),sa(e)}function Mv(e,n){n===0&&(n=Mo()),e=Cs(e,n),e!==null&&(Yi(e,n),sa(e))}function oM(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Mv(e,a)}function lM(e,n){var a=0;switch(e.tag){case 31:case 13:var r=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),Mv(e,a)}function cM(e,n){return Ue(e,n)}var Fr=null,Hr=null,qd=!1,qc=!1,Yd=!1,us=0;function sa(e){e!==Hr&&e.next===null&&(Hr===null?Fr=Hr=e:Hr=Hr.next=e),qc=!0,qd||(qd=!0,fM())}function al(e,n){if(!Yd&&qc){Yd=!0;do for(var a=!1,r=Fr;r!==null;){if(e!==0){var c=r.pendingLanes;if(c===0)var f=0;else{var _=r.suspendedLanes,w=r.pingedLanes;f=(1<<31-vt(42|e)+1)-1,f&=c&~(_&~w),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Av(r,f))}else f=It,f=Ts(r,r===en?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Xa(r,f)||(a=!0,Av(r,f));r=r.next}while(a);Yd=!1}}function uM(){bv()}function bv(){qc=qd=!1;var e=0;us!==0&&MM()&&(e=us);for(var n=Oe(),a=null,r=Fr;r!==null;){var c=r.next,f=Ev(r,n);f===0?(r.next=null,a===null?Fr=c:a.next=c,c===null&&(Hr=a)):(a=r,(e!==0||(f&3)!==0)&&(qc=!0)),r=c}ln!==0&&ln!==5||al(e),us!==0&&(us=0)}function Ev(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var _=31-vt(f),w=1<<_,G=c[_];G===-1?((w&a)===0||(w&r)!==0)&&(c[_]=yo(w,n)):G<=n&&(e.expiredLanes|=w),f&=~w}if(n=en,a=It,a=Ts(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(jt===2||jt===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&we(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Xa(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&we(r),Ao(a)){case 2:case 8:a=J;break;case 32:a=He;break;case 268435456:a=ze;break;default:a=He}return r=Tv.bind(null,e),a=Ue(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&we(r),e.callbackPriority=2,e.callbackNode=null,2}function Tv(e,n){if(ln!==0&&ln!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Wc()&&e.callbackNode!==a)return null;var r=It;return r=Ts(e,e===en?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(uv(e,r,n),Ev(e,Oe()),e.callbackNode!=null&&e.callbackNode===a?Tv.bind(null,e):null)}function Av(e,n){if(Wc())return null;uv(e,n,!0)}function fM(){EM(function(){(Xt&6)!==0?Ue(ct,uM):bv()})}function jd(){if(us===0){var e=Ps;e===0&&(e=or,or<<=1,(or&261888)===0&&(or=256)),us=e}return us}function wv(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Vl(e)}function dM(e,n,a,r,c){if(n==="submit"&&a&&a.stateNode===c){var f=wv((c[q]||null).action),_=r.submitter;_&&(n=(n=_[q]||null)?wv(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var w=new ql("action","action",null,r,c);e.push({event:w,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(us!==0){var G=new FormData(c,_);nd(a,{pending:!0,data:G,method:c.method,action:f},null,G)}}else typeof f=="function"&&(w.preventDefault(),G=new FormData(c,_),nd(a,{pending:!0,data:G,method:c.method,action:f},f,G))},currentTarget:c}]})}}for(var Zd=0;Zd<Sf.length;Zd++){var Kd=Sf[Zd],hM=Kd.toLowerCase(),pM=Kd[0].toUpperCase()+Kd.slice(1);Oi(hM,"on"+pM)}Oi($m,"onAnimationEnd"),Oi(e0,"onAnimationIteration"),Oi(t0,"onAnimationStart"),Oi("dblclick","onDoubleClick"),Oi("focusin","onFocus"),Oi("focusout","onBlur"),Oi(by,"onTransitionRun"),Oi(Ey,"onTransitionStart"),Oi(Ty,"onTransitionCancel"),Oi(n0,"onTransitionEnd"),un("onMouseEnter",["mouseout","mouseover"]),un("onMouseLeave",["mouseout","mouseover"]),un("onPointerEnter",["pointerout","pointerover"]),un("onPointerLeave",["pointerout","pointerover"]),je("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),je("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),je("onBeforeInput",["compositionend","keypress","textInput","paste"]),je("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),je("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),je("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(sl));function Rv(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],c=r.event;r=r.listeners;e:{var f=void 0;if(n)for(var _=r.length-1;0<=_;_--){var w=r[_],G=w.instance,ae=w.currentTarget;if(w=w.listener,G!==f&&c.isPropagationStopped())break e;f=w,c.currentTarget=ae;try{f(c)}catch(ve){Zl(ve)}c.currentTarget=null,f=G}else for(_=0;_<r.length;_++){if(w=r[_],G=w.instance,ae=w.currentTarget,w=w.listener,G!==f&&c.isPropagationStopped())break e;f=w,c.currentTarget=ae;try{f(c)}catch(ve){Zl(ve)}c.currentTarget=null,f=G}}}}function Lt(e,n){var a=n[he];a===void 0&&(a=n[he]=new Set);var r=e+"__bubble";a.has(r)||(Cv(n,e,2,!1),a.add(r))}function Qd(e,n,a){var r=0;n&&(r|=4),Cv(a,e,r,n)}var Yc="_reactListening"+Math.random().toString(36).slice(2);function Jd(e){if(!e[Yc]){e[Yc]=!0,qt.forEach(function(a){a!=="selectionchange"&&(mM.has(a)||Qd(a,!1,e),Qd(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Yc]||(n[Yc]=!0,Qd("selectionchange",!1,n))}}function Cv(e,n,a,r){switch(__(n)){case 2:var c=ob;break;case 8:c=lb;break;default:c=_h}a=c.bind(null,n,a,e),c=void 0,!rf||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),r?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function $d(e,n,a,r,c){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var _=r.tag;if(_===3||_===4){var w=r.stateNode.containerInfo;if(w===c)break;if(_===4)for(_=r.return;_!==null;){var G=_.tag;if((G===3||G===4)&&_.stateNode.containerInfo===c)return;_=_.return}for(;w!==null;){if(_=dt(w),_===null)return;if(G=_.tag,G===5||G===6||G===26||G===27){r=f=_;continue e}w=w.parentNode}}r=r.return}Cm(function(){var ae=f,ve=af(a),Ae=[];e:{var ne=i0.get(e);if(ne!==void 0){var me=ql,We=e;switch(e){case"keypress":if(Xl(a)===0)break e;case"keydown":case"keyup":me=$S;break;case"focusin":We="focus",me=uf;break;case"focusout":We="blur",me=uf;break;case"beforeblur":case"afterblur":me=uf;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":me=Um;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":me=GS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":me=ay;break;case $m:case e0:case t0:me=XS;break;case n0:me=ry;break;case"scroll":case"scrollend":me=FS;break;case"wheel":me=ly;break;case"copy":case"cut":case"paste":me=qS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":me=Om;break;case"submit":me=ny;break;case"toggle":case"beforetoggle":me=uy}var nt=(n&4)!==0,bt=!nt&&(e==="scroll"||e==="scrollend"),ie=nt?ne!==null?ne+"Capture":null:ne;nt=[];for(var j=ae,ue;j!==null;){var Te=j;if(ue=Te.stateNode,Te=Te.tag,Te!==5&&Te!==26&&Te!==27||ue===null||ie===null||(Te=wo(j,ie),Te!=null&&nt.push(rl(j,Te,ue))),bt)break;j=j.return}0<nt.length&&(ne=new me(ne,We,null,a,ve),Ae.push({event:ne,listeners:nt}))}}if((n&7)===0){e:{if(me=e==="mouseover"||e==="pointerover",ne=e==="mouseout"||e==="pointerout",me&&a!==nf&&(We=a.relatedTarget||a.fromElement)&&(dt(We)||We[_e]))break e;(ne||me)&&(We=ve.window===ve?ve:(me=ve.ownerDocument)?me.defaultView||me.parentWindow:window,ne?(me=a.relatedTarget||a.toElement,ne=ae,me=me?dt(me):null,me!==null&&(bt=u(me),nt=me.tag,me!==bt||nt!==5&&nt!==27&&nt!==6)&&(me=null)):(ne=null,me=ae),ne!==me&&(nt=Um,Te="onMouseLeave",ie="onMouseEnter",j="mouse",(e==="pointerout"||e==="pointerover")&&(nt=Om,Te="onPointerLeave",ie="onPointerEnter",j="pointer"),bt=ne==null?We:Qe(ne),ue=me==null?We:Qe(me),We=new nt(Te,j+"leave",ne,a,ve),We.target=bt,We.relatedTarget=ue,Te=null,dt(ve)===ae&&(nt=new nt(ie,j+"enter",me,a,ve),nt.target=ue,nt.relatedTarget=bt,Te=nt),bt=Te,nt=ne&&me?C(ne,me,gM):null,ne!==null&&Nv(Ae,We,ne,nt,!1),me!==null&&bt!==null&&Nv(Ae,bt,me,nt,!0)))}e:{if(ne=ae?Qe(ae):window,me=ne.nodeName&&ne.nodeName.toLowerCase(),me==="select"||me==="input"&&ne.type==="file")var Je=Vm;else if(Hm(ne))if(km)Je=Sy;else{Je=_y;var zt=vy}else me=ne.nodeName,!me||me.toLowerCase()!=="input"||ne.type!=="checkbox"&&ne.type!=="radio"?ae&&tf(ae.elementType)&&(Je=Vm):Je=xy;if(Je&&(Je=Je(e,ae))){Gm(Ae,Je,a,ve);break e}zt&&zt(e,ne,ae)}switch(zt=ae?Qe(ae):window,e){case"focusin":(Hm(zt)||zt.contentEditable==="true")&&(pr=zt,vf=ae,Po=null);break;case"focusout":Po=vf=pr=null;break;case"mousedown":_f=!0;break;case"contextmenu":case"mouseup":case"dragend":_f=!1,Qm(Ae,a,ve);break;case"selectionchange":if(My)break;case"keydown":case"keyup":Qm(Ae,a,ve)}var rt;if(df)e:{switch(e){case"compositionstart":var ut="onCompositionStart";break e;case"compositionend":ut="onCompositionEnd";break e;case"compositionupdate":ut="onCompositionUpdate";break e}ut=void 0}else hr?Bm(e,a)&&(ut="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ut="onCompositionStart");ut&&(Pm&&a.locale!=="ko"&&(hr||ut!=="onCompositionStart"?ut==="onCompositionEnd"&&hr&&(rt=Nm()):(Wa=ve,of="value"in Wa?Wa.value:Wa.textContent,hr=!0)),zt=jc(ae,ut),0<zt.length&&(ut=new Lm(ut,e,null,a,ve),Ae.push({event:ut,listeners:zt}),rt?ut.data=rt:(rt=Fm(a),rt!==null&&(ut.data=rt)))),(rt=dy?hy(e,a):py(e,a))&&(ut=jc(ae,"onBeforeInput"),0<ut.length&&(zt=new Lm("onBeforeInput","beforeinput",null,a,ve),Ae.push({event:zt,listeners:ut}),zt.data=rt)),dM(Ae,e,ae,a,ve)}Rv(Ae,n)})}function rl(e,n,a){return{instance:e,listener:n,currentTarget:a}}function jc(e,n){for(var a=n+"Capture",r=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=wo(e,a),c!=null&&r.unshift(rl(e,c,f)),c=wo(e,n),c!=null&&r.push(rl(e,c,f))),e.tag===3)return r;e=e.return}return[]}function gM(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Nv(e,n,a,r,c){for(var f=n._reactName,_=[];a!==null&&a!==r;){var w=a,G=w.alternate,ae=w.stateNode;if(w=w.tag,G!==null&&G===r)break;w!==5&&w!==26&&w!==27||ae===null||(G=ae,c?(ae=wo(a,f),ae!=null&&_.unshift(rl(a,ae,G))):c||(ae=wo(a,f),ae!=null&&_.push(rl(a,ae,G)))),a=a.return}_.length!==0&&e.push({event:n,listeners:_})}var vM=/\r\n?/g,_M=/\u0000|\uFFFD/g;function Dv(e){return(typeof e=="string"?e:""+e).replace(vM,`
`).replace(_M,"")}function Uv(e,n){return n=Dv(n),Dv(e)===n}function Kt(e,n,a,r,c,f){switch(a){case"children":if(typeof r=="string")n==="body"||n==="textarea"&&r===""||ur(e,r);else if(typeof r=="number"||typeof r=="bigint")n!=="body"&&ur(e,""+r);else return;break;case"className":li(e,"class",r);break;case"tabIndex":li(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":li(e,a,r);break;case"style":wm(e,r,f);return;case"data":if(n!=="object"){li(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Vl(r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Kt(e,n,"name",c.name,c,null),Kt(e,n,"formEncType",c.formEncType,c,null),Kt(e,n,"formMethod",c.formMethod,c,null),Kt(e,n,"formTarget",c.formTarget,c,null)):(Kt(e,n,"encType",c.encType,c,null),Kt(e,n,"method",c.method,c,null),Kt(e,n,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Vl(r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=Zi);return;case"onScroll":r!=null&&Lt("scroll",e);return;case"onScrollEnd":r!=null&&Lt("scrollend",e);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));(f!=null?f.__html:void 0)!==a&&(e.innerHTML=a)}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=Vl(r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":Lt("beforetoggle",e),Lt("toggle",e),tn(e,"popover",r);break;case"xlinkActuate":Pt(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Pt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Pt(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Pt(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Pt(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Pt(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Pt(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Pt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Pt(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":tn(e,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=zS.get(a)||a,tn(e,a,r);else return}wt=!0}function eh(e,n,a,r,c,f){switch(a){case"style":wm(e,r,f);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));(f!=null?f.__html:void 0)!==a&&(e.innerHTML=a)}}break;case"children":if(typeof r=="string")ur(e,r);else if(typeof r=="number"||typeof r=="bigint")ur(e,""+r);else return;break;case"onScroll":r!=null&&Lt("scroll",e);return;case"onScrollEnd":r!=null&&Lt("scrollend",e);return;case"onClick":r!=null&&(e.onclick=Zi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Mn.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),f=a.slice(2,c?a.length-7:void 0),n=e[q]||null,n=n!=null?n[a]:null,typeof n=="function"&&e.removeEventListener(f,n,c),typeof r=="function")){typeof n!="function"&&n!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(f,r,c);break e}wt=!0,a in e?e[a]=r:r===!0?e.setAttribute(a,""):tn(e,a,r)}return}wt=!0}function In(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Lt("error",e),Lt("load",e);var r=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Kt(e,n,f,_,a,null)}}c&&Kt(e,n,"srcSet",a.srcSet,a,null),r&&Kt(e,n,"src",a.src,a,null);return;case"input":Lt("invalid",e);var w=f=_=c=null,G=null,ae=null;for(r in a)if(a.hasOwnProperty(r)){var ve=a[r];if(ve!=null)switch(r){case"name":c=ve;break;case"type":_=ve;break;case"checked":G=ve;break;case"defaultChecked":ae=ve;break;case"value":f=ve;break;case"defaultValue":w=ve;break;case"children":case"dangerouslySetInnerHTML":if(ve!=null)throw Error(s(137,n));break;default:Kt(e,n,r,ve,a,null)}}bm(e,f,w,G,ae,_,c,!1);return;case"select":Lt("invalid",e),r=_=f=null;for(c in a)if(a.hasOwnProperty(c)&&(w=a[c],w!=null))switch(c){case"value":f=w;break;case"defaultValue":_=w;break;case"multiple":r=w;default:Kt(e,n,c,w,a,null)}n=f,a=_,e.multiple=!!r,n!=null?cr(e,!!r,n,!1):a!=null&&cr(e,!!r,a,!0);return;case"textarea":Lt("invalid",e),f=c=r=null;for(_ in a)if(a.hasOwnProperty(_)&&(w=a[_],w!=null))switch(_){case"value":r=w;break;case"defaultValue":c=w;break;case"children":f=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(s(91));break;default:Kt(e,n,_,w,a,null)}Tm(e,r,c,f);return;case"option":for(G in a)if(a.hasOwnProperty(G)&&(r=a[G],r!=null))switch(G){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Kt(e,n,G,r,a,null)}return;case"dialog":Lt("beforetoggle",e),Lt("toggle",e),Lt("cancel",e),Lt("close",e);break;case"iframe":case"object":Lt("load",e);break;case"video":case"audio":for(r=0;r<sl.length;r++)Lt(sl[r],e);break;case"image":Lt("error",e),Lt("load",e);break;case"details":Lt("toggle",e);break;case"embed":case"source":case"link":Lt("error",e),Lt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ae in a)if(a.hasOwnProperty(ae)&&(r=a[ae],r!=null))switch(ae){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Kt(e,n,ae,r,a,null)}return;default:if(tf(n)){for(ve in a)a.hasOwnProperty(ve)&&(r=a[ve],r!==void 0&&eh(e,n,ve,r,a,void 0));return}}for(w in a)a.hasOwnProperty(w)&&(r=a[w],r!=null&&Kt(e,n,w,r,a,null))}var xM={};function SM(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,_=null,w=null,G=null,ae=null,ve=null;for(me in a){var Ae=a[me];if(a.hasOwnProperty(me)&&Ae!=null)switch(me){case"checked":break;case"value":break;case"defaultValue":G=Ae;default:r.hasOwnProperty(me)||Kt(e,n,me,null,r,Ae)}}for(var ne in r){var me=r[ne];if(Ae=a[ne],r.hasOwnProperty(ne)&&(me!=null||Ae!=null))switch(ne){case"type":me!==Ae&&(wt=!0),f=me;break;case"name":me!==Ae&&(wt=!0),c=me;break;case"checked":me!==Ae&&(wt=!0),ae=me;break;case"defaultChecked":me!==Ae&&(wt=!0),ve=me;break;case"value":me!==Ae&&(wt=!0),_=me;break;case"defaultValue":me!==Ae&&(wt=!0),w=me;break;case"children":case"dangerouslySetInnerHTML":if(me!=null)throw Error(s(137,n));break;default:me!==Ae&&Kt(e,n,ne,me,r,Ae)}}$u(e,_,w,G,ae,ve,f,c);return;case"select":me=_=w=ne=null;for(f in a)if(G=a[f],a.hasOwnProperty(f)&&G!=null)switch(f){case"value":break;case"multiple":me=G;default:r.hasOwnProperty(f)||Kt(e,n,f,null,r,G)}for(c in r)if(f=r[c],G=a[c],r.hasOwnProperty(c)&&(f!=null||G!=null))switch(c){case"value":f!==G&&(wt=!0),ne=f;break;case"defaultValue":f!==G&&(wt=!0),w=f;break;case"multiple":f!==G&&(wt=!0),_=f;default:f!==G&&Kt(e,n,c,f,r,G)}n=w,a=_,r=me,ne!=null?cr(e,!!a,ne,!1):!!r!=!!a&&(n!=null?cr(e,!!a,n,!0):cr(e,!!a,a?[]:"",!1));return;case"textarea":me=ne=null;for(w in a)if(c=a[w],a.hasOwnProperty(w)&&c!=null&&!r.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Kt(e,n,w,null,r,c)}for(_ in r)if(c=r[_],f=a[_],r.hasOwnProperty(_)&&(c!=null||f!=null))switch(_){case"value":c!==f&&(wt=!0),ne=c;break;case"defaultValue":c!==f&&(wt=!0),me=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&Kt(e,n,_,c,r,f)}Em(e,ne,me);return;case"option":for(var We in a)if(ne=a[We],a.hasOwnProperty(We)&&ne!=null&&!r.hasOwnProperty(We))switch(We){case"selected":e.selected=!1;break;default:Kt(e,n,We,null,r,ne)}for(G in r)if(ne=r[G],me=a[G],r.hasOwnProperty(G)&&ne!==me&&(ne!=null||me!=null))switch(G){case"selected":ne!==me&&(wt=!0),e.selected=ne&&typeof ne!="function"&&typeof ne!="symbol";break;default:Kt(e,n,G,ne,r,me)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var nt in a)ne=a[nt],a.hasOwnProperty(nt)&&ne!=null&&!r.hasOwnProperty(nt)&&Kt(e,n,nt,null,r,ne);for(ae in r)if(ne=r[ae],me=a[ae],r.hasOwnProperty(ae)&&ne!==me&&(ne!=null||me!=null))switch(ae){case"children":case"dangerouslySetInnerHTML":if(ne!=null)throw Error(s(137,n));break;default:Kt(e,n,ae,ne,r,me)}return;default:if(tf(n)){for(var bt in a)ne=a[bt],a.hasOwnProperty(bt)&&ne!==void 0&&!r.hasOwnProperty(bt)&&eh(e,n,bt,void 0,r,ne);for(ve in r)ne=r[ve],me=a[ve],!r.hasOwnProperty(ve)||ne===me||ne===void 0&&me===void 0||eh(e,n,ve,ne,r,me);return}}for(var ie in a)ne=a[ie],a.hasOwnProperty(ie)&&ne!=null&&!r.hasOwnProperty(ie)&&Kt(e,n,ie,null,r,ne);for(Ae in r)ne=r[Ae],me=a[Ae],!r.hasOwnProperty(Ae)||ne===me||ne==null&&me==null||Kt(e,n,Ae,ne,r,me)}function Lv(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function yM(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var c=a[r],f=c.transferSize,_=c.initiatorType,w=c.duration;if(f&&w&&Lv(_)){for(_=0,w=c.responseEnd,r+=1;r<a.length;r++){var G=a[r],ae=G.startTime;if(ae>w)break;var ve=G.transferSize,Ae=G.initiatorType;ve&&Lv(Ae)&&(G=G.responseEnd,_+=ve*(G<w?1:(w-ae)/(G-ae)))}if(--r,n+=8*(f+_)/(c.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var th=null,nh=null;function ol(e){return e.nodeType===9?e:e.ownerDocument}function Ov(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Pv(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Iv(e,n,a,r){return a=ol(a).createElement(e),a[T]=r,a[q]=n,In(a,e,n),At(a),a}function ih(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ah=null;function MM(){var e=window.event;return e&&e.type==="popstate"?e===ah?!1:(ah=e,!0):(ah=null,!1)}var sh=typeof setTimeout=="function"?setTimeout:void 0,bM=typeof clearTimeout=="function"?clearTimeout:void 0,zv=typeof Promise=="function"?Promise:void 0,Bv=typeof requestAnimationFrame=="function"?requestAnimationFrame:sh,EM=typeof queueMicrotask=="function"?queueMicrotask:typeof zv<"u"?function(e){return zv.resolve(null).then(e).catch(TM)}:sh;function TM(e){setTimeout(function(){throw e})}function fs(e){return e==="head"}function Fv(e,n){var a=n,r=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(r===0){e.removeChild(c),Yr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")hh(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,hh(a);for(var f=a.firstChild;f;){var _=f.nextSibling,w=f.nodeName;f[Xe]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&hh(e.ownerDocument.body);a=c}while(a);Yr(n)}function Hv(e,n){var a=e;e=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=r}while(a)}function Gv(e,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,e.style.viewTransitionName=n,a!=null&&(e.style.viewTransitionClass=a),a=getComputedStyle(e),a.display==="inline"){if(n=e.getClientRects(),n.length===1)var r=1;else for(var c=r=0;c<n.length;c++){var f=n[c];0<f.width&&0<f.height&&r++}r===1&&(e=e.style,e.display=n.length===1?"inline-block":"block",e.marginTop="-"+a.paddingTop,e.marginBottom="-"+a.paddingBottom)}}function Vv(e,n){e=e.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;e.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,e.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),e.display==="inline-block"&&(n==null?e.display=e.margin="":(a=n.display,e.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?e.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],e.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],e.marginBottom=n==null||typeof n=="boolean"?"":n)))}function AM(e,n,a){return a=a.ownerDocument.defaultView,{rect:e,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=a.innerHeight&&e.left<=a.innerWidth}}function rh(e){var n=e.getBoundingClientRect(),a=getComputedStyle(e);return AM(n,a,e)}function wM(e){return e.documentElement.clientHeight}function RM(e){this.addEventListener("load",e),this.addEventListener("error",e)}function CM(e,n,a,r,c,f,_,w,G){var ae=n.nodeType===9?n:n.ownerDocument;try{var ve=ae.startViewTransition({update:function(){var ne=ae.defaultView,me=ne.navigation&&ne.navigation.transition,We=ae.fonts.status;r();var nt=[];if(We==="loaded"&&(wM(ae),ae.fonts.status==="loading"&&nt.push(ae.fonts.ready)),We=nt.length,e!==null)for(var bt=e.suspenseyImages,ie=0,j=0;j<bt.length;j++){var ue=bt[j];if(!ue.complete){var Te=ue.getBoundingClientRect();if(0<Te.bottom&&0<Te.right&&Te.top<ne.innerHeight&&Te.left<ne.innerWidth){if(ie+=c_(ue),ie>Qc){nt.length=We;break}ue=new Promise(RM.bind(ue)),nt.push(ue)}}}if(0<nt.length)return ne=Promise.race([Promise.all(nt),new Promise(function(Je){return setTimeout(Je,500)})]).then(c,c),(me?Promise.allSettled([me.finished,ne]):ne).then(f,f);if(c(),me)return me.finished.then(f,f);f()},types:a});ae.__reactViewTransition=ve;var Ae=[];return ve.ready.then(function(){for(var ne=ae.documentElement.getAnimations({subtree:!0}),me=0;me<ne.length;me++){var We=ne[me],nt=We.effect,bt=nt.pseudoElement;if(bt!=null&&bt.startsWith("::view-transition")){Ae.push(We),We=nt.getKeyframes();for(var ie=bt=void 0,j=!0,ue=0;ue<We.length;ue++){var Te=We[ue],Je=Te.width;if(bt===void 0)bt=Je;else if(bt!==Je){j=!1;break}if(Je=Te.height,ie===void 0)ie=Je;else if(ie!==Je){j=!1;break}delete Te.width,delete Te.height,Te.transform==="none"&&delete Te.transform}j&&bt!==void 0&&ie!==void 0&&(nt.setKeyframes(We),j=getComputedStyle(nt.target,nt.pseudoElement),j.width!==bt||j.height!==ie)&&(j=We[0],j.width=bt,j.height=ie,j=We[We.length-1],j.width=bt,j.height=ie,nt.setKeyframes(We))}}_()},function(ne){ae.__reactViewTransition===ve&&(ae.__reactViewTransition=null);try{if(typeof ne=="object"&&ne!==null)switch(ne.name){case"InvalidStateError":(ne.message==="View transition was skipped because document visibility state is hidden."||ne.message==="Skipping view transition because document visibility state has become hidden."||ne.message==="Skipping view transition because viewport size changed."||ne.message==="Transition was aborted because of invalid state")&&(ne=null)}ne!==null&&G(ne)}finally{r(),c(),_()}}),ve.finished.finally(function(){for(var ne=0;ne<Ae.length;ne++)Ae[ne].cancel();ae.__reactViewTransition===ve&&(ae.__reactViewTransition=null),w()}),ve}catch{return r(),c(),_(),null}}function qs(e,n){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+n+")"}qs.prototype.animate=function(e,n){return n=typeof n=="number"?{duration:n}:I({},n),n.pseudoElement=this._selector,this._scope.animate(e,n)},qs.prototype.getAnimations=function(){for(var e=this._scope,n=this._selector,a=e.getAnimations({subtree:!0}),r=[],c=0;c<a.length;c++){var f=a[c].effect;f!==null&&f.target===e&&f.pseudoElement===n&&r.push(a[c])}return r},qs.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function kv(e){return{name:e,group:new qs("group",e),imagePair:new qs("image-pair",e),old:new qs("old",e),new:new qs("new",e)}}function mi(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}mi.prototype.addEventListener=function(e,n,a){var r=null,c=null;if(!(a!=null&&typeof a!="boolean"&&(r=a.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var f=this._eventListeners;if(Wv(f,e,n,a)===-1){var _=this,w=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(w=function(G){_.removeEventListener(e,n,a),typeof n=="function"?n.call(this,G):n.handleEvent(G)}),r!==null&&(c=_.removeEventListener.bind(_,e,n,a),r.addEventListener("abort",c,{once:!0}),c=r.removeEventListener.bind(r,"abort",c)),r=Gr(a),f.push({type:e,listener:n,optionsOrUseCapture:a,attachedListener:w,cleanup:c}),v(this._fragmentFiber.child,!1,NM,e,w,r)}this._eventListeners=f}};function NM(e,n,a,r){return y(e).addEventListener(n,a,r),!1}mi.prototype.removeEventListener=function(e,n,a){var r=this._eventListeners;if(r!==null&&(n=Wv(r,e,n,a),n!==-1)){var c=r[n];a=c.attachedListener;var f=c.cleanup;c=Gr(c.optionsOrUseCapture),v(this._fragmentFiber.child,!1,DM,e,a,c),r.splice(n,1),f!==null&&f()}};function DM(e,n,a,r){return y(e).removeEventListener(n,a,r),!1}function Gr(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function Xv(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function Wv(e,n,a,r){if(e.length===0)return-1;r=Xv(r);for(var c=0;c<e.length;c++){var f=e[c];if(f.type===n&&f.listener===a&&Xv(f.optionsOrUseCapture)===r)return c}return-1}mi.prototype.dispatchEvent=function(e){var n=p(this._fragmentFiber);if(n===null)return!0;n=y(n);var a=this._eventListeners;if(a!==null&&0<a.length||!e.bubbles){var r=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var c=0;c<a.length;c++){var f=a[c];r.addEventListener(f.type,f.attachedListener,Gr(f.optionsOrUseCapture))}if(n.appendChild(r),e=r.dispatchEvent(e),a)for(c=0;c<a.length;c++)f=a[c],r.removeEventListener(f.type,f.attachedListener,Gr(f.optionsOrUseCapture));return n.removeChild(r),e}return n.dispatchEvent(e)},mi.prototype.focus=function(e){v(this._fragmentFiber.child,!0,qv,e,void 0,void 0)};function qv(e,n){return e.tag===6?!1:(e=y(e),kM(e,n))}mi.prototype.focusLast=function(e){var n=[];v(this._fragmentFiber.child,!0,oh,n,void 0,void 0);for(var a=n.length-1;0<=a&&!qv(n[a],e);a--);};function oh(e,n){return n.push(e),!1}mi.prototype.blur=function(){var e=p(this._fragmentFiber);e!==null&&(e=y(e),e=ol(e).activeElement,e!==null&&v(this._fragmentFiber.child,!1,UM,e,void 0,void 0))};function UM(e,n){return e.tag===6?!1:(e=y(e),e===n||e.contains(n)?(n.blur(),!0):!1)}mi.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),v(this._fragmentFiber.child,!1,LM,e,void 0,void 0)};function LM(e,n){return e.tag===6||(e=y(e),n.observe(e)),!1}mi.prototype.unobserveUsing=function(e){var n=this._observers;if(n!==null&&n.has(e)){n.delete(e),v(this._fragmentFiber.child,!1,OM,e,void 0,void 0);for(var a=n=0;a<Fi.length;a++){var r=Fi[a];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):Fi[n++]=r}Fi.length=n}};function OM(e,n){return e.tag===6||(e=y(e),n.unobserve(e)),!1}var Fi=[],lh=!1;function PM(e,n,a){Fi.push({fragmentInstance:e,observer:n,instance:a}),lh||(lh=!0,XM(function(){lh=!1;var r=Fi;Fi=[];for(var c=0;c<r.length;c++){var f=r[c];f.observer.unobserve(f.instance)}}))}mi.prototype.getClientRects=function(){var e=[];return v(this._fragmentFiber.child,!1,IM,e,void 0,void 0),e};function IM(e,n){if(e.tag===6){e=e.stateNode;var a=e.ownerDocument.createRange();a.selectNodeContents(e),n.push.apply(n,a.getClientRects())}else e=y(e),n.push.apply(n,e.getClientRects());return!1}mi.prototype.getRootNode=function(e){var n=p(this._fragmentFiber);return n===null?this:y(n).getRootNode(e)},mi.prototype.compareDocumentPosition=function(e){var n=p(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];v(this._fragmentFiber.child,!1,oh,a,void 0,void 0);var r=y(n);if(a.length===0){if(a=r,b(this._fragmentFiber)){e:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break e}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var c=r=a.compareDocumentPosition(e);return a===e?c=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=A(n)[1],a===null?c=Node.DOCUMENT_POSITION_PRECEDING:(e=y(a).compareDocumentPosition(e),c=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),c|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=y(a[0]),c=y(a[a.length-1]);var f=b(this._fragmentFiber)?n.parentElement:r;if(f==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=f.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,f=f.compareDocumentPosition(c)&Node.DOCUMENT_POSITION_CONTAINED_BY;var _=n.compareDocumentPosition(e),w=c.compareDocumentPosition(e),G=_&Node.DOCUMENT_POSITION_CONTAINED_BY||w&Node.DOCUMENT_POSITION_CONTAINED_BY;return w=r&&f&&_&Node.DOCUMENT_POSITION_FOLLOWING&&w&Node.DOCUMENT_POSITION_PRECEDING,n=r&&n===e||f&&c===e||G||w?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&n===e||!f&&c===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:_,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||zM(n,this._fragmentFiber,a[0],a[a.length-1],e)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function zM(e,n,a,r,c){var f=dt(c);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!f)e:{for(;f!==null;){if(f.tag===7&&(f===n||f.alternate===n)){a=!0;break e}f=f.return}a=!1}return a}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(f===null)return f=c.ownerDocument,c===f||c===f.documentElement||c===f.body;e:{for(f=n,n=p(n);f!==null;){if(!(f.tag!==5&&f.tag!==3&&f.tag!==27||f!==n&&f.alternate!==n)){f=!0;break e}f=f.return}f=!1}return f}return e&Node.DOCUMENT_POSITION_PRECEDING?((n=!!f)&&!(n=f===a)&&(n=C(a,f,D),n===null?n=!1:(v(n,!0,F,f,a),f=S,S=null,n=f!==null)),n):e&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!f)&&!(n=f===r)&&(n=C(r,f,D),n===null?n=!1:(v(n,!0,R,f,r),f=S,N=S=null,n=f!==null)),n):!1}function Yv(e,n){var a=e.ownerDocument.createRange();a.selectNodeContents(e),e=a.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,n?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}mi.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(s(566));var n=[];v(this._fragmentFiber.child,!1,oh,n,void 0,void 0);var a=e!==!1;if(n.length===0){var r=A(this._fragmentFiber);if(r=a?r[1]||r[0]||p(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=y(r),Yv(e,a);return}if(r=y(r),r.nodeType!==9){if(r.nodeType===11){a="host"in r?r.host:null,a!==null&&a.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=a?n.length-1:0;r!==(a?-1:n.length);){var c=n[r];c.tag===6?(c=y(c),Yv(c,a)):y(c).scrollIntoView(e),r+=a?-1:1}};function BM(e,n){return e=y(e),jv(e,n),!1}function jv(e,n){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(n)}function Zv(e,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r];e.addEventListener(c.type,c.attachedListener,Gr(c.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){for(var _=0,w=0;w<Fi.length;w++){var G=Fi[w];(G.fragmentInstance!==n||G.observer!==f||G.instance!==e)&&(Fi[_++]=G)}Fi.length=_,f.observe(e)}),jv(e,n))}function FM(e,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r];e.removeEventListener(c.type,c.attachedListener,Gr(c.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){typeof f.rootMargin=="string"?PM(n,f,e):f.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(n))}function ch(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ch(a),tt(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function HM(e,n,a,r){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[Xe])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=Ci(e.nextSibling),e===null)break}return null}function GM(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ci(e.nextSibling),e===null))return null;return e}function Kv(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ci(e.nextSibling),e===null))return null;return e}function uh(e){return e.data==="$?"||e.data==="$~"}function fh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function VM(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function Ci(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var dh=null;function Qv(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return Ci(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Jv(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function kM(e,n){function a(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener("focus",a,!0),(e.focus||HTMLElement.prototype.focus).call(e,n)}finally{e.ownerDocument.removeEventListener("focus",a,!0)}return r}function XM(e){Bv(function(){Bv(function(n){return e(n)})})}function $v(e,n,a){switch(n=ol(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function e_(e,n,a){for(var r in a){var c=a[r];a.hasOwnProperty(r)&&c!=null&&Kt(e,n,r,null,xM,c)}a.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===Zi&&(e.onclick=null),tt(e)}function hh(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);tt(e)}var Ni=new Map,t_=new Set;function ll(e){if(typeof e.getRootNode=="function"){var n=e.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return e.nodeType===9?e:e.ownerDocument}var Ca=Ne.d;Ne.d={f:WM,r:qM,D:YM,C:jM,L:ZM,m:KM,X:JM,S:QM,M:$M};function WM(){var e=Ca.f(),n=Vc();return e||n}function qM(e){var n=_t(e);n!==null&&n.tag===5&&n.type==="form"?ig(n):Ca.r(e)}var Vr=typeof document>"u"?null:document;function n_(e,n,a){var r=Vr;if(r&&typeof n=="string"&&n){var c=Mi(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),t_.has(c)||(t_.add(c),e={rel:e,crossOrigin:a,href:n},r.querySelector(c)===null&&(n=r.createElement("link"),In(n,"link",e),At(n),r.head.appendChild(n)))}}function YM(e){Ca.D(e),n_("dns-prefetch",e,null)}function jM(e,n){Ca.C(e,n),n_("preconnect",e,n)}function ZM(e,n,a){Ca.L(e,n,a);var r=Vr;if(r&&e&&n){var c='link[rel="preload"][as="'+Mi(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Mi(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Mi(a.imageSizes)+'"]')):c+='[href="'+Mi(e)+'"]';var f=c;switch(n){case"style":f=kr(e);break;case"script":f=Xr(e)}if(!(Ni.has(f)||(e=I({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Ni.set(f,e),r.querySelector(c)!==null||n==="style"&&r.querySelector(cl(f))||n==="script"&&r.querySelector(ul(f))))){var _=r.createElement("link");In(_,"link",e),n==="style"&&(_[et]=!0,_.onload=_.onerror=function(){Jt(_)}),At(_),r.head.appendChild(_)}}}function KM(e,n){Ca.m(e,n);var a=Vr;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Mi(r)+'"][href="'+Mi(e)+'"]',f=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Xr(e)}if(!Ni.has(f)&&(e=I({rel:"modulepreload",href:e},n),Ni.set(f,e),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ul(f)))return}r=a.createElement("link"),In(r,"link",e),At(r),a.head.appendChild(r)}}}function QM(e,n,a){Ca.S(e,n,a);var r=Vr;if(r&&e){var c=Dt(r).hoistableStyles,f=kr(e);n=n||"default";var _=c.get(f);if(!_){var w={loading:0,preload:null};if(_=r.querySelector(cl(f)))w.loading=5;else{e=I({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Ni.get(f))&&ph(e,a);var G=_=r.createElement("link");At(G),In(G,"link",e),G._p=new Promise(function(ae,ve){G.onload=ae,G.onerror=ve}),G.addEventListener("load",function(){w.loading|=1}),G.addEventListener("error",function(){w.loading|=2}),w.loading|=4,Zc(_,n,r)}_={type:"stylesheet",instance:_,count:1,state:w},c.set(f,_)}}}function JM(e,n){Ca.X(e,n);var a=Vr;if(a&&e){var r=Dt(a).hoistableScripts,c=Xr(e),f=r.get(c);f||(f=a.querySelector(ul(c)),f||(e=I({src:e,async:!0},n),(n=Ni.get(c))&&mh(e,n),f=a.createElement("script"),At(f),In(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function $M(e,n){Ca.M(e,n);var a=Vr;if(a&&e){var r=Dt(a).hoistableScripts,c=Xr(e),f=r.get(c);f||(f=a.querySelector(ul(c)),f||(e=I({src:e,async:!0,type:"module"},n),(n=Ni.get(c))&&mh(e,n),f=a.createElement("script"),At(f),In(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function i_(e,n,a,r){var c=(c=mt.current)?ll(c):null;if(!c)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=kr(a.href),n=Dt(c).hoistableStyles,r=n.get(a),r||(r={type:"style",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=kr(a.href);var f=Dt(c).hoistableStyles,_=f.get(e);if(_||(c=c.ownerDocument||c,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,_),(f=c.querySelector(cl(e)))?f._p||(_.instance=f,_.state.loading=5):(f=Ni.get(e),f||(f={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ni.set(e,f)),eb(c,e,f,_.state))),n&&r===null)throw Error(s(528,""));return _}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=Xr(a),n=Dt(c).hoistableScripts,r=n.get(a),r||(r={type:"script",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function kr(e){return'href="'+Mi(e)+'"'}function cl(e){return'link[rel="stylesheet"]['+e+"]"}function a_(e){return I({},e,{"data-precedence":e.precedence,precedence:null})}function eb(e,n,a,r){if(n=e.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[et]!==!0){r.loading=1;return}}else n=e.createElement("link"),n[et]=!0,n.onload=n.onerror=Jt.bind(null,n),In(n,"link",a),At(n),e.head.appendChild(n);r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2})}function Xr(e){return'[src="'+Mi(e)+'"]'}function ul(e){return"script[async]"+e}function s_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+Mi(a.href)+'"]');if(r)return n.instance=r,At(r),r;var c=I({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),At(r),In(r,"style",c),Zc(r,a.precedence,e),n.instance=r;case"stylesheet":c=kr(a.href);var f=e.querySelector(cl(c));if(f)return n.state.loading|=4,n.instance=f,At(f),f;r=a_(a),(c=Ni.get(c))&&ph(r,c),f=(e.ownerDocument||e).createElement("link"),At(f);var _=f;return _._p=new Promise(function(w,G){_.onload=w,_.onerror=G}),In(f,"link",r),n.state.loading|=4,Zc(f,a.precedence,e),n.instance=f;case"script":return f=Xr(a.src),(c=e.querySelector(ul(f)))?(n.instance=c,At(c),c):(r=a,(c=Ni.get(f))&&(r=I({},a),mh(r,c)),e=e.ownerDocument||e,c=e.createElement("script"),At(c),In(c,"link",r),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Zc(r,a.precedence,e));return n.instance}function Zc(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,f=c,_=0;_<r.length;_++){var w=r[_];if(w.dataset.precedence===n)f=w;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function ph(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function mh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Kc=null;function r_(e,n,a){if(Kc===null){var r=new Map,c=Kc=new Map;c.set(a,r)}else c=Kc,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[Xe]||f[T]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=e+_;var w=r.get(_);w?w.push(f):r.set(_,[f])}}return r}function gh(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function tb(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function o_(e,n){return e==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function l_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function c_(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function u_(e,n){typeof n.decode=="function"&&(e.imgCount++,n.complete||(e.imgBytes+=c_(n),e.suspenseyImages.push(n)),e=ab.bind(e),n.decode().then(e,e))}function nb(e,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=kr(r.href),f=n.querySelector(cl(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=fl.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,At(f);return}f=n.ownerDocument||n,r=a_(r),(c=Ni.get(c))&&ph(r,c),f=f.createElement("link"),At(f);var _=f;_._p=new Promise(function(w,G){_.onload=w,_.onerror=G}),In(f,"link",r),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=fl.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Qc=0;function ib(e,n){return e.stylesheets&&e.count===0&&$c(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var r=setTimeout(function(){if(e.stylesheets&&$c(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&Qc===0&&(Qc=62500*yM());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&$c(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Qc?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(c)}}:null}function f_(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)$c(e,e.stylesheets);else if(e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}}}function fl(){this.count--,f_(this)}function ab(){this.imgCount--,f_(this)}var Jc=null;function $c(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Jc=new Map,n.forEach(sb,e),Jc=null,fl.call(e))}function sb(e,n){if(!(n.state.loading&4)){var a=Jc.get(e);if(a)var r=a.get(null);else{a=new Map,Jc.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var _=c[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),r=_)}r&&a.set(null,r)}c=n.instance,_=c.getAttribute("data-precedence"),f=a.get(_)||r,f===r&&a.set(null,c),a.set(_,c),this.count++,r=fl.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var Wr={$$typeof:te,Provider:null,Consumer:null,_currentValue:st,_currentValue2:st,_threadCount:0};function rb(e,n,a,r,c,f,_,w,G){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=lr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=lr(0),this.hiddenUpdates=lr(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.transitionTypes=null,this.incompleteTransitions=new Map}function d_(e,n,a,r,c,f,_,w,G,ae,ve,Ae){return e=new rb(e,n,a,_,G,ae,ve,Ae,w),n=1,f===!0&&(n|=24),f=Qn(3,null,null,n),e.current=f,f.stateNode=e,n=Df(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Pf(f),e}function h_(e){return e?(e=vr,e):vr}function p_(e,n,a,r,c,f){c=h_(c),r.context===null?r.context=c:r.pendingContext=c,r=$a(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=es(e,r,n),a!==null&&(ti(a,e,n),Vo(a,e,n))}function m_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function vh(e,n){m_(e,n),(e=e.alternate)&&m_(e,n)}function g_(e){if(e.tag===13||e.tag===31){var n=Cs(e,67108864);n!==null&&ti(n,e,67108864),vh(e,67108864)}}function v_(e){if(e.tag===13||e.tag===31){var n=pi();n=To(n);var a=Cs(e,n);a!==null&&ti(a,e,n),vh(e,n)}}var qr=!0;function ob(e,n,a,r){var c=de.T;de.T=null;var f=Ne.p;try{Ne.p=2,_h(e,n,a,r)}finally{Ne.p=f,de.T=c}}function lb(e,n,a,r){var c=de.T;de.T=null;var f=Ne.p;try{Ne.p=8,_h(e,n,a,r)}finally{Ne.p=f,de.T=c}}function _h(e,n,a,r){if(qr){var c=xh(r);if(c===null)$d(e,n,r,eu,a),x_(e,r);else if(ub(c,e,n,a,r))r.stopPropagation();else if(x_(e,r),n&4&&-1<cb.indexOf(e)){for(;c!==null;){var f=_t(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=ma(f.pendingLanes);if(_!==0){var w=f;for(w.pendingLanes|=2,w.entangledLanes|=2;_;){var G=1<<31-vt(_);w.entanglements[1]|=G,_&=~G}sa(f),(Xt&6)===0&&(Fc=Oe()+500,al(0))}}break;case 31:case 13:w=Cs(f,2),w!==null&&ti(w,f,2),Vc(),vh(f,2)}if(f=xh(r),f===null&&$d(e,n,r,eu,a),f===c)break;c=f}c!==null&&r.stopPropagation()}else $d(e,n,r,null,a)}}function xh(e){return e=af(e),Sh(e)}var eu=null;function Sh(e){if(eu=null,e=dt(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return eu=e,null}function __(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(at()){case ct:return 2;case J:return 8;case He:case Me:return 32;case ze:return 268435456;default:return 32}default:return 32}}var yh=!1,ds=null,hs=null,ps=null,dl=new Map,hl=new Map,ms=[],cb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function x_(e,n){switch(e){case"focusin":case"focusout":ds=null;break;case"dragenter":case"dragleave":hs=null;break;case"mouseover":case"mouseout":ps=null;break;case"pointerover":case"pointerout":dl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":hl.delete(n.pointerId)}}function pl(e,n,a,r,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[c]},n!==null&&(n=_t(n),n!==null&&g_(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function ub(e,n,a,r,c){switch(n){case"focusin":return ds=pl(ds,e,n,a,r,c),!0;case"dragenter":return hs=pl(hs,e,n,a,r,c),!0;case"mouseover":return ps=pl(ps,e,n,a,r,c),!0;case"pointerover":var f=c.pointerId;return dl.set(f,pl(dl.get(f)||null,e,n,a,r,c)),!0;case"gotpointercapture":return f=c.pointerId,hl.set(f,pl(hl.get(f)||null,e,n,a,r,c)),!0}return!1}function S_(e){var n=dt(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,Hl(e.priority,function(){v_(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,Hl(e.priority,function(){v_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function tu(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=xh(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);nf=r,a.target.dispatchEvent(r),nf=null}else return n=_t(a),n!==null&&g_(n),e.blockedOn=a,!1;n.shift()}return!0}function y_(e,n,a){tu(e)&&a.delete(n)}function fb(){yh=!1,ds!==null&&tu(ds)&&(ds=null),hs!==null&&tu(hs)&&(hs=null),ps!==null&&tu(ps)&&(ps=null),dl.forEach(y_),hl.forEach(y_)}function nu(e,n){e.blockedOn===n&&(e.blockedOn=null,yh||(yh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,fb)))}var iu=null;function M_(e){iu!==e&&(iu=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){iu===e&&(iu=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],c=e[n+2];if(typeof r!="function"){if(Sh(r||a)===null)continue;break}var f=_t(a);f!==null&&(e.splice(n,3),n-=3,nd(f,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function Yr(e){function n(G){return nu(G,e)}ds!==null&&nu(ds,e),hs!==null&&nu(hs,e),ps!==null&&nu(ps,e),dl.forEach(n),hl.forEach(n);for(var a=0;a<ms.length;a++){var r=ms[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<ms.length&&(a=ms[0],a.blockedOn===null);)S_(a),a.blockedOn===null&&ms.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],f=a[r+1],_=c[q]||null;if(typeof f=="function")_||M_(a);else if(_){var w=null;if(f&&f.hasAttribute("formAction")){if(c=f,_=f[q]||null)w=_.formAction;else if(Sh(c)!==null)continue}else w=_.action;typeof w=="function"?a[r+1]=w:(a.splice(r,3),r-=3),M_(a)}}}function b_(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return c=_})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Mh(e){this._internalRoot=e}au.prototype.render=Mh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=pi();p_(a,r,e,n,null,null)},au.prototype.unmount=Mh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;p_(e.current,2,null,e,null,null),Vc(),n[_e]=null}};function au(e){this._internalRoot=e}au.prototype.unstable_scheduleHydration=function(e){if(e){var n=Fl();e={blockedOn:null,target:e,priority:n};for(var a=0;a<ms.length&&n!==0&&n<ms[a].priority;a++);ms.splice(a,0,e),a===0&&S_(e)}};var E_=t.version;if(E_!=="19.3.0")throw Error(s(527,E_,"19.3.0"));Ne.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=g(n),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var db={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:de,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var su=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!su.isDisabled&&su.supportsFiber)try{$e=su.inject(db),qe=su}catch{}}return gl.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,r="",c=hg,f=pg,_=mg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=d_(e,1,!1,null,null,a,r,null,c,f,_,b_),e[_e]=n.current,Jd(e),new Mh(n)},gl.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var r=!1,c="",f=hg,_=pg,w=mg,G=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(w=a.onRecoverableError),a.formState!==void 0&&(G=a.formState)),n=d_(e,1,!0,n,a??null,r,c,G,f,_,w,b_),n.context=h_(null),a=n.current,r=pi(),r=To(r),c=$a(r),c.callback=null,es(a,c,r),a=r,n.current.lanes=a,Yi(n,a),sa(n),e[_e]=n.current,Jd(e),new au(n)},gl.version="19.3.0",gl}var O_;function Mb(){if(O_)return Th.exports;O_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Th.exports=yb(),Th.exports}var bb=Mb();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Kp="186",Eb=0,P_=1,Tb=2,Nu=1,Gx=2,El=3,tr=0,ai=1,Ia=2,Ba=0,Al=1,I_=2,z_=3,B_=4,Ab=5,oo=100,wb=101,Rb=102,Cb=103,Nb=104,Db=200,Ub=201,Lb=202,Ob=203,Vx=204,kx=205,Pb=206,Ib=207,zb=208,Bb=209,Fb=210,Hb=211,Gb=212,Vb=213,kb=214,op=0,lp=1,cp=2,Cl=3,up=4,fp=5,dp=6,hp=7,Xx=0,Xb=1,Wb=2,fa=0,Wx=1,qx=2,Yx=3,jx=4,Zx=5,Kx=6,Qx=7,Jx=300,nr=301,ho=302,Ch=303,Nh=304,Wu=306,Ga=1e3,za=1001,pp=1002,Bn=1003,qb=1004,ru=1005,Vn=1006,Dh=1007,Js=1008,xi=1009,$x=1010,eS=1011,Nl=1012,Qp=1013,da=1014,ca=1015,ha=1016,Jp=1017,$p=1018,Dl=1020,tS=35902,nS=35899,iS=1021,aS=1022,Xi=1023,Va=1026,$s=1027,sS=1028,em=1029,ir=1030,tm=1031,nm=1033,Du=33776,Uu=33777,Lu=33778,Ou=33779,mp=35840,gp=35841,vp=35842,_p=35843,xp=36196,Sp=37492,yp=37496,Mp=37488,bp=37489,Iu=37490,Ep=37491,Tp=37808,Ap=37809,wp=37810,Rp=37811,Cp=37812,Np=37813,Dp=37814,Up=37815,Lp=37816,Op=37817,Pp=37818,Ip=37819,zp=37820,Bp=37821,Fp=36492,Hp=36494,Gp=36495,Vp=36283,kp=36284,zu=36285,Xp=36286,Yb=3200,Wp=0,jb=1,Ms="",Ui="srgb",Bu="srgb-linear",Fu="linear",Qt="srgb",Uh=7680,Zb=519,Kb=512,Qb=513,Jb=514,im=515,$b=516,e1=517,am=518,t1=519,n1=35044,F_="300 es",ua=2e3,Ul=2001;function i1(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Hu(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function a1(){const o=Hu("canvas");return o.style.display="block",o}const H_={};function G_(...o){const t="THREE."+o.shift();console.log(t,...o)}function rS(o){const t=o[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function ht(...o){o=rS(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...o)}}function Vt(...o){o=rS(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...o)}}function uo(...o){const t=o.join(" ");t in H_||(H_[t]=!0,ht(...o))}function s1(o,t,i){return new Promise(function(s,l){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}const r1={[op]:lp,[cp]:dp,[up]:hp,[Cl]:fp,[lp]:op,[dp]:cp,[hp]:up,[fp]:Cl};class sr{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,t);t.target=null}}}const Hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let V_=1234567;const wl=Math.PI/180,po=180/Math.PI;function _o(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Hn[o&255]+Hn[o>>8&255]+Hn[o>>16&255]+Hn[o>>24&255]+"-"+Hn[t&255]+Hn[t>>8&255]+"-"+Hn[t>>16&15|64]+Hn[t>>24&255]+"-"+Hn[i&63|128]+Hn[i>>8&255]+"-"+Hn[i>>16&255]+Hn[i>>24&255]+Hn[s&255]+Hn[s>>8&255]+Hn[s>>16&255]+Hn[s>>24&255]).toLowerCase()}function Bt(o,t,i){return Math.max(t,Math.min(i,o))}function sm(o,t){return(o%t+t)%t}function o1(o,t,i,s,l){return s+(o-t)*(l-s)/(i-t)}function l1(o,t,i){return o!==t?(i-o)/(t-o):0}function Rl(o,t,i){return(1-i)*o+i*t}function c1(o,t,i,s){return Rl(o,t,1-Math.exp(-i*s))}function u1(o,t=1){return t-Math.abs(sm(o,t*2)-t)}function f1(o,t,i){return o<=t?0:o>=i?1:(o=(o-t)/(i-t),o*o*(3-2*o))}function d1(o,t,i){return o<=t?0:o>=i?1:(o=(o-t)/(i-t),o*o*o*(o*(o*6-15)+10))}function h1(o,t){return o+Math.floor(Math.random()*(t-o+1))}function p1(o,t){return o+Math.random()*(t-o)}function m1(o){return o*(.5-Math.random())}function g1(o){o!==void 0&&(V_=o);let t=V_+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function v1(o){return o*wl}function _1(o){return o*po}function x1(o){return o>0&&Number.isInteger(o)&&2**Math.round(Math.log2(o))===o}function S1(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function y1(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function M1(o,t,i,s,l){const u=Math.cos,d=Math.sin,h=u(i/2),m=d(i/2),g=u((t+s)/2),x=d((t+s)/2),v=u((t-s)/2),p=d((t-s)/2),b=u((s-t)/2),A=d((s-t)/2);switch(l){case"XYX":o.set(h*x,m*v,m*p,h*g);break;case"YZY":o.set(m*p,h*x,m*v,h*g);break;case"ZXZ":o.set(m*v,m*p,h*x,h*g);break;case"XZX":o.set(h*x,m*A,m*b,h*g);break;case"YXY":o.set(m*b,h*x,m*A,h*g);break;case"ZYZ":o.set(m*A,m*b,h*x,h*g);break;default:ht("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function lo(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:case Uint8ClampedArray:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Zn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const b1={DEG2RAD:wl,RAD2DEG:po,generateUUID:_o,clamp:Bt,euclideanModulo:sm,mapLinear:o1,inverseLerp:l1,lerp:Rl,damp:c1,pingpong:u1,smoothstep:f1,smootherstep:d1,randInt:h1,randFloat:p1,randFloatSpread:m1,seededRandom:g1,degToRad:v1,radToDeg:_1,isPowerOfTwo:x1,ceilPowerOfTwo:S1,floorPowerOfTwo:y1,setQuaternionFromProperEuler:M1,normalize:Zn,denormalize:lo},vm=class vm{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Bt(this.x,t.x,i.x),this.y=Bt(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Bt(this.x,t,i),this.y=Bt(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Bt(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Bt(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-t.x,d=this.y-t.y;return this.x=u*s-d*l+t.x,this.y=u*l+d*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};vm.prototype.isVector2=!0;let Nt=vm;class rr{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,u,d,h){let m=s[l+0],g=s[l+1],x=s[l+2],v=s[l+3],p=u[d+0],b=u[d+1],A=u[d+2],L=u[d+3];if(v!==L||m!==p||g!==b||x!==A){let y=m*p+g*b+x*A+v*L;y<0&&(p=-p,b=-b,A=-A,L=-L,y=-y);let S=1-h;if(y<.9995){const N=Math.acos(y),F=Math.sin(N);S=Math.sin(S*N)/F,h=Math.sin(h*N)/F,m=m*S+p*h,g=g*S+b*h,x=x*S+A*h,v=v*S+L*h}else{m=m*S+p*h,g=g*S+b*h,x=x*S+A*h,v=v*S+L*h;const N=1/Math.sqrt(m*m+g*g+x*x+v*v);m*=N,g*=N,x*=N,v*=N}}t[i]=m,t[i+1]=g,t[i+2]=x,t[i+3]=v}static multiplyQuaternionsFlat(t,i,s,l,u,d){const h=s[l],m=s[l+1],g=s[l+2],x=s[l+3],v=u[d],p=u[d+1],b=u[d+2],A=u[d+3];return t[i]=h*A+x*v+m*b-g*p,t[i+1]=m*A+x*p+g*v-h*b,t[i+2]=g*A+x*b+h*p-m*v,t[i+3]=x*A-h*v-m*p-g*b,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,u=t._z,d=t._order,h=Math.cos,m=Math.sin,g=h(s/2),x=h(l/2),v=h(u/2),p=m(s/2),b=m(l/2),A=m(u/2);switch(d){case"XYZ":this._x=p*x*v+g*b*A,this._y=g*b*v-p*x*A,this._z=g*x*A+p*b*v,this._w=g*x*v-p*b*A;break;case"YXZ":this._x=p*x*v+g*b*A,this._y=g*b*v-p*x*A,this._z=g*x*A-p*b*v,this._w=g*x*v+p*b*A;break;case"ZXY":this._x=p*x*v-g*b*A,this._y=g*b*v+p*x*A,this._z=g*x*A+p*b*v,this._w=g*x*v-p*b*A;break;case"ZYX":this._x=p*x*v-g*b*A,this._y=g*b*v+p*x*A,this._z=g*x*A-p*b*v,this._w=g*x*v+p*b*A;break;case"YZX":this._x=p*x*v+g*b*A,this._y=g*b*v+p*x*A,this._z=g*x*A-p*b*v,this._w=g*x*v-p*b*A;break;case"XZY":this._x=p*x*v-g*b*A,this._y=g*b*v-p*x*A,this._z=g*x*A+p*b*v,this._w=g*x*v+p*b*A;break;default:ht("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],u=i[8],d=i[1],h=i[5],m=i[9],g=i[2],x=i[6],v=i[10],p=s+h+v;if(p>0){const b=.5/Math.sqrt(p+1);this._w=.25/b,this._x=(x-m)*b,this._y=(u-g)*b,this._z=(d-l)*b}else if(s>h&&s>v){const b=2*Math.sqrt(1+s-h-v);this._w=(x-m)/b,this._x=.25*b,this._y=(l+d)/b,this._z=(u+g)/b}else if(h>v){const b=2*Math.sqrt(1+h-s-v);this._w=(u-g)/b,this._x=(l+d)/b,this._y=.25*b,this._z=(m+x)/b}else{const b=2*Math.sqrt(1+v-s-h);this._w=(d-l)/b,this._x=(u+g)/b,this._y=(m+x)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Bt(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,u=t._z,d=t._w,h=i._x,m=i._y,g=i._z,x=i._w;return this._x=s*x+d*h+l*g-u*m,this._y=l*x+d*m+u*h-s*g,this._z=u*x+d*g+s*m-l*h,this._w=d*x-s*h-l*m-u*g,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,u=t._z,d=t._w,h=this.dot(t);h<0&&(s=-s,l=-l,u=-u,d=-d,h=-h);let m=1-i;if(h<.9995){const g=Math.acos(h),x=Math.sin(g);m=Math.sin(m*g)/x,i=Math.sin(i*g)/x,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const _m=class _m{constructor(t=0,i=0,s=0){this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(k_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(k_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=t.elements,d=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*d,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,u=t.x,d=t.y,h=t.z,m=t.w,g=2*(d*l-h*s),x=2*(h*i-u*l),v=2*(u*s-d*i);return this.x=i+m*g+d*v-h*x,this.y=s+m*x+h*g-u*v,this.z=l+m*v+u*x-d*g,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Bt(this.x,t.x,i.x),this.y=Bt(this.y,t.y,i.y),this.z=Bt(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Bt(this.x,t,i),this.y=Bt(this.y,t,i),this.z=Bt(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Bt(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,u=t.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-u*h,this.y=u*d-s*m,this.z=s*h-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Lh.copy(this).projectOnVector(t),this.sub(Lh)}reflect(t){return this.sub(Lh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Bt(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};_m.prototype.isVector3=!0;let oe=_m;const Lh=new oe,k_=new rr,xm=class xm{constructor(t,i,s,l,u,d,h,m,g){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,d,h,m,g)}set(t,i,s,l,u,d,h,m,g){const x=this.elements;return x[0]=t,x[1]=l,x[2]=h,x[3]=i,x[4]=u,x[5]=m,x[6]=s,x[7]=d,x[8]=g,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,d=s[0],h=s[3],m=s[6],g=s[1],x=s[4],v=s[7],p=s[2],b=s[5],A=s[8],L=l[0],y=l[3],S=l[6],N=l[1],F=l[4],R=l[7],D=l[2],C=l[5],I=l[8];return u[0]=d*L+h*N+m*D,u[3]=d*y+h*F+m*C,u[6]=d*S+h*R+m*I,u[1]=g*L+x*N+v*D,u[4]=g*y+x*F+v*C,u[7]=g*S+x*R+v*I,u[2]=p*L+b*N+A*D,u[5]=p*y+b*F+A*C,u[8]=p*S+b*R+A*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],g=t[7],x=t[8];return i*d*x-i*h*g-s*u*x+s*h*m+l*u*g-l*d*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],g=t[7],x=t[8],v=x*d-h*g,p=h*m-x*u,b=g*u-d*m,A=i*v+s*p+l*b;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const L=1/A;return t[0]=v*L,t[1]=(l*g-x*s)*L,t[2]=(h*s-l*d)*L,t[3]=p*L,t[4]=(x*i-l*m)*L,t[5]=(l*u-h*i)*L,t[6]=b*L,t[7]=(s*m-g*i)*L,t[8]=(d*i-s*u)*L,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,u,d,h){const m=Math.cos(u),g=Math.sin(u);return this.set(s*m,s*g,-s*(m*d+g*h)+d+t,-l*g,l*m,-l*(-g*d+m*h)+h+i,0,0,1),this}scale(t,i){return uo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Oh.makeScale(t,i)),this}rotate(t){return uo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Oh.makeRotation(-t)),this}translate(t,i){return uo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Oh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}};xm.prototype.isMatrix3=!0;let St=xm;const Oh=new St,X_=new St().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),W_=new St().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function E1(){const o={enabled:!0,workingColorSpace:Bu,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===Qt&&(l.r=Fa(l.r),l.g=Fa(l.g),l.b=Fa(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Qt&&(l.r=fo(l.r),l.g=fo(l.g),l.b=fo(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ms?Fu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return uo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return uo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Bu]:{primaries:t,whitePoint:s,transfer:Fu,toXYZ:X_,fromXYZ:W_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Ui},outputColorSpaceConfig:{drawingBufferColorSpace:Ui}},[Ui]:{primaries:t,whitePoint:s,transfer:Qt,toXYZ:X_,fromXYZ:W_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Ui}}}),o}const Ht=E1();function Fa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function fo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let jr;class T1{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{jr===void 0&&(jr=Hu("canvas")),jr.width=t.width,jr.height=t.height;const l=jr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=jr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Hu("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=Fa(u[d]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Fa(i[s]/255)*255):i[s]=Fa(i[s]);return{data:i,width:t.width,height:t.height}}else return ht("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let A1=0;class rm{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:A1++}),this.uuid=_o(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayWidth,i.displayHeight,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(Ph(l[d].image)):u.push(Ph(l[d]))}else u=Ph(l);s.url=u}return i||(t.images[this.uuid]=s),s}}function Ph(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?T1.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(ht("Texture: Unable to serialize Texture."),{})}let w1=0;const Ih=new oe;class kn extends sr{constructor(t=kn.DEFAULT_IMAGE,i=kn.DEFAULT_MAPPING,s=za,l=za,u=Vn,d=Js,h=Xi,m=xi,g=kn.DEFAULT_ANISOTROPY,x=Ms){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:w1++}),this.uuid=_o(),this.name="",this.source=new rm(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=g,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new St,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ih).x}get height(){return this.source.getSize(Ih).y}get depth(){return this.source.getSize(Ih).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){ht(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ht(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Jx)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ga:t.x=t.x-Math.floor(t.x);break;case za:t.x=t.x<0?0:1;break;case pp:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ga:t.y=t.y-Math.floor(t.y);break;case za:t.y=t.y<0?0:1;break;case pp:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}kn.DEFAULT_IMAGE=null;kn.DEFAULT_MAPPING=Jx;kn.DEFAULT_ANISOTROPY=1;const Sm=class Sm{constructor(t=0,i=0,s=0,l=1){this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=this.w,d=t.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,u;const m=t.elements,g=m[0],x=m[4],v=m[8],p=m[1],b=m[5],A=m[9],L=m[2],y=m[6],S=m[10];if(Math.abs(x-p)<.01&&Math.abs(v-L)<.01&&Math.abs(A-y)<.01){if(Math.abs(x+p)<.1&&Math.abs(v+L)<.1&&Math.abs(A+y)<.1&&Math.abs(g+b+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const F=(g+1)/2,R=(b+1)/2,D=(S+1)/2,C=(x+p)/4,I=(v+L)/4,M=(A+y)/4;return F>R&&F>D?F<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(F),l=C/s,u=I/s):R>D?R<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(R),s=C/l,u=M/l):D<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(D),s=I/u,l=M/u),this.set(s,l,u,i),this}let N=Math.sqrt((y-A)*(y-A)+(v-L)*(v-L)+(p-x)*(p-x));return Math.abs(N)<.001&&(N=1),this.x=(y-A)/N,this.y=(v-L)/N,this.z=(p-x)/N,this.w=Math.acos((g+b+S-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Bt(this.x,t.x,i.x),this.y=Bt(this.y,t.y,i.y),this.z=Bt(this.z,t.z,i.z),this.w=Bt(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Bt(this.x,t,i),this.y=Bt(this.y,t,i),this.z=Bt(this.z,t,i),this.w=Bt(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Bt(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Sm.prototype.isVector4=!0;let cn=Sm;class R1 extends sr{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new cn(0,0,t,i),this.scissorTest=!1,this.viewport=new cn(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},u=new kn(l),d=s.count;for(let h=0;h<d;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveColorBuffer=s.resolveColorBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.storeMultisampledColorBuffer=s.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=s.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=s.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(t={}){const i={minFilter:Vn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new rm(l)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const i=t.depthTexture.clone();i.renderTarget=null,this.depthTexture=i}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wi extends R1{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class oS extends kn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=za,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class C1 extends kn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=za,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const Xu=class Xu{constructor(t,i,s,l,u,d,h,m,g,x,v,p,b,A,L,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,d,h,m,g,x,v,p,b,A,L,y)}set(t,i,s,l,u,d,h,m,g,x,v,p,b,A,L,y){const S=this.elements;return S[0]=t,S[4]=i,S[8]=s,S[12]=l,S[1]=u,S[5]=d,S[9]=h,S[13]=m,S[2]=g,S[6]=x,S[10]=v,S[14]=p,S[3]=b,S[7]=A,S[11]=L,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xu().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Zr.setFromMatrixColumn(t,0).length(),u=1/Zr.setFromMatrixColumn(t,1).length(),d=1/Zr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,u=t.z,d=Math.cos(s),h=Math.sin(s),m=Math.cos(l),g=Math.sin(l),x=Math.cos(u),v=Math.sin(u);if(t.order==="XYZ"){const p=d*x,b=d*v,A=h*x,L=h*v;i[0]=m*x,i[4]=-m*v,i[8]=g,i[1]=b+A*g,i[5]=p-L*g,i[9]=-h*m,i[2]=L-p*g,i[6]=A+b*g,i[10]=d*m}else if(t.order==="YXZ"){const p=m*x,b=m*v,A=g*x,L=g*v;i[0]=p+L*h,i[4]=A*h-b,i[8]=d*g,i[1]=d*v,i[5]=d*x,i[9]=-h,i[2]=b*h-A,i[6]=L+p*h,i[10]=d*m}else if(t.order==="ZXY"){const p=m*x,b=m*v,A=g*x,L=g*v;i[0]=p-L*h,i[4]=-d*v,i[8]=A+b*h,i[1]=b+A*h,i[5]=d*x,i[9]=L-p*h,i[2]=-d*g,i[6]=h,i[10]=d*m}else if(t.order==="ZYX"){const p=d*x,b=d*v,A=h*x,L=h*v;i[0]=m*x,i[4]=A*g-b,i[8]=p*g+L,i[1]=m*v,i[5]=L*g+p,i[9]=b*g-A,i[2]=-g,i[6]=h*m,i[10]=d*m}else if(t.order==="YZX"){const p=d*m,b=d*g,A=h*m,L=h*g;i[0]=m*x,i[4]=L-p*v,i[8]=A*v+b,i[1]=v,i[5]=d*x,i[9]=-h*x,i[2]=-g*x,i[6]=b*v+A,i[10]=p-L*v}else if(t.order==="XZY"){const p=d*m,b=d*g,A=h*m,L=h*g;i[0]=m*x,i[4]=-v,i[8]=g*x,i[1]=p*v+L,i[5]=d*x,i[9]=b*v-A,i[2]=A*v-b,i[6]=h*x,i[10]=L*v+p}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(N1,t,D1)}lookAt(t,i,s){const l=this.elements;return gi.subVectors(t,i),gi.lengthSq()===0&&(gi.z=1),gi.normalize(),vs.crossVectors(s,gi),vs.lengthSq()===0&&(Math.abs(s.z)===1?gi.x+=1e-4:gi.z+=1e-4,gi.normalize(),vs.crossVectors(s,gi)),vs.normalize(),ou.crossVectors(gi,vs),l[0]=vs.x,l[4]=ou.x,l[8]=gi.x,l[1]=vs.y,l[5]=ou.y,l[9]=gi.y,l[2]=vs.z,l[6]=ou.z,l[10]=gi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,d=s[0],h=s[4],m=s[8],g=s[12],x=s[1],v=s[5],p=s[9],b=s[13],A=s[2],L=s[6],y=s[10],S=s[14],N=s[3],F=s[7],R=s[11],D=s[15],C=l[0],I=l[4],M=l[8],U=l[12],k=l[1],W=l[5],Y=l[9],ce=l[13],$=l[2],te=l[6],Z=l[10],K=l[14],ge=l[3],le=l[7],O=l[11],P=l[15];return u[0]=d*C+h*k+m*$+g*ge,u[4]=d*I+h*W+m*te+g*le,u[8]=d*M+h*Y+m*Z+g*O,u[12]=d*U+h*ce+m*K+g*P,u[1]=x*C+v*k+p*$+b*ge,u[5]=x*I+v*W+p*te+b*le,u[9]=x*M+v*Y+p*Z+b*O,u[13]=x*U+v*ce+p*K+b*P,u[2]=A*C+L*k+y*$+S*ge,u[6]=A*I+L*W+y*te+S*le,u[10]=A*M+L*Y+y*Z+S*O,u[14]=A*U+L*ce+y*K+S*P,u[3]=N*C+F*k+R*$+D*ge,u[7]=N*I+F*W+R*te+D*le,u[11]=N*M+F*Y+R*Z+D*O,u[15]=N*U+F*ce+R*K+D*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],u=t[12],d=t[1],h=t[5],m=t[9],g=t[13],x=t[2],v=t[6],p=t[10],b=t[14],A=t[3],L=t[7],y=t[11],S=t[15],N=m*b-g*p,F=h*b-g*v,R=h*p-m*v,D=d*b-g*x,C=d*p-m*x,I=d*v-h*x;return i*(L*N-y*F+S*R)-s*(A*N-y*D+S*C)+l*(A*F-L*D+S*I)-u*(A*R-L*C+y*I)}determinantAffine(){const t=this.elements,i=t[0],s=t[4],l=t[8],u=t[1],d=t[5],h=t[9],m=t[2],g=t[6],x=t[10];return i*(d*x-h*g)-s*(u*x-h*m)+l*(u*g-d*m)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],g=t[7],x=t[8],v=t[9],p=t[10],b=t[11],A=t[12],L=t[13],y=t[14],S=t[15],N=i*h-s*d,F=i*m-l*d,R=i*g-u*d,D=s*m-l*h,C=s*g-u*h,I=l*g-u*m,M=x*L-v*A,U=x*y-p*A,k=x*S-b*A,W=v*y-p*L,Y=v*S-b*L,ce=p*S-b*y,$=N*ce-F*Y+R*W+D*k-C*U+I*M;if($===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const te=1/$;return t[0]=(h*ce-m*Y+g*W)*te,t[1]=(l*Y-s*ce-u*W)*te,t[2]=(L*I-y*C+S*D)*te,t[3]=(p*C-v*I-b*D)*te,t[4]=(m*k-d*ce-g*U)*te,t[5]=(i*ce-l*k+u*U)*te,t[6]=(y*R-A*I-S*F)*te,t[7]=(x*I-p*R+b*F)*te,t[8]=(d*Y-h*k+g*M)*te,t[9]=(s*k-i*Y-u*M)*te,t[10]=(A*C-L*R+S*N)*te,t[11]=(v*R-x*C-b*N)*te,t[12]=(h*U-d*W-m*M)*te,t[13]=(i*W-s*U+l*M)*te,t[14]=(L*F-A*D-y*N)*te,t[15]=(x*D-v*F+p*N)*te,this}scale(t){const i=this.elements,s=t.x,l=t.y,u=t.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,d=t.x,h=t.y,m=t.z,g=u*d,x=u*h;return this.set(g*d+s,g*h-l*m,g*m+l*h,0,g*h+l*m,x*h+s,x*m-l*d,0,g*m-l*h,x*m+l*d,u*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,u,d){return this.set(1,s,u,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,u=i._x,d=i._y,h=i._z,m=i._w,g=u+u,x=d+d,v=h+h,p=u*g,b=u*x,A=u*v,L=d*x,y=d*v,S=h*v,N=m*g,F=m*x,R=m*v,D=s.x,C=s.y,I=s.z;return l[0]=(1-(L+S))*D,l[1]=(b+R)*D,l[2]=(A-F)*D,l[3]=0,l[4]=(b-R)*C,l[5]=(1-(p+S))*C,l[6]=(y+N)*C,l[7]=0,l[8]=(A+F)*I,l[9]=(y-N)*I,l[10]=(1-(p+L))*I,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const u=this.determinantAffine();if(u===0)return s.set(1,1,1),i.identity(),this;let d=Zr.set(l[0],l[1],l[2]).length();const h=Zr.set(l[4],l[5],l[6]).length(),m=Zr.set(l[8],l[9],l[10]).length();u<0&&(d=-d),Hi.copy(this);const g=1/d,x=1/h,v=1/m;return Hi.elements[0]*=g,Hi.elements[1]*=g,Hi.elements[2]*=g,Hi.elements[4]*=x,Hi.elements[5]*=x,Hi.elements[6]*=x,Hi.elements[8]*=v,Hi.elements[9]*=v,Hi.elements[10]*=v,i.setFromRotationMatrix(Hi),s.x=d,s.y=h,s.z=m,this}makePerspective(t,i,s,l,u,d,h=ua,m=!1){const g=this.elements,x=2*u/(i-t),v=2*u/(s-l),p=(i+t)/(i-t),b=(s+l)/(s-l);let A,L;if(m)A=u/(d-u),L=d*u/(d-u);else if(h===ua)A=-(d+u)/(d-u),L=-2*d*u/(d-u);else if(h===Ul)A=-d/(d-u),L=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return g[0]=x,g[4]=0,g[8]=p,g[12]=0,g[1]=0,g[5]=v,g[9]=b,g[13]=0,g[2]=0,g[6]=0,g[10]=A,g[14]=L,g[3]=0,g[7]=0,g[11]=-1,g[15]=0,this}makeOrthographic(t,i,s,l,u,d,h=ua,m=!1){const g=this.elements,x=2/(i-t),v=2/(s-l),p=-(i+t)/(i-t),b=-(s+l)/(s-l);let A,L;if(m)A=1/(d-u),L=d/(d-u);else if(h===ua)A=-2/(d-u),L=-(d+u)/(d-u);else if(h===Ul)A=-1/(d-u),L=-u/(d-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return g[0]=x,g[4]=0,g[8]=0,g[12]=p,g[1]=0,g[5]=v,g[9]=0,g[13]=b,g[2]=0,g[6]=0,g[10]=A,g[14]=L,g[3]=0,g[7]=0,g[11]=0,g[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}};Xu.prototype.isMatrix4=!0;let on=Xu;const Zr=new oe,Hi=new on,N1=new oe(0,0,0),D1=new oe(1,1,1),vs=new oe,ou=new oe,gi=new oe,q_=new on,Y_=new rr;class bs{constructor(t=0,i=0,s=0,l=bs.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,u=l[0],d=l[4],h=l[8],m=l[1],g=l[5],x=l[9],v=l[2],p=l[6],b=l[10];switch(i){case"XYZ":this._y=Math.asin(Bt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-x,b),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(p,g),this._z=0);break;case"YXZ":this._x=Math.asin(-Bt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(h,b),this._z=Math.atan2(m,g)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(Bt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-v,b),this._z=Math.atan2(-d,g)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Bt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(p,b),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-d,g));break;case"YZX":this._z=Math.asin(Bt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,g),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(h,b));break;case"XZY":this._z=Math.asin(-Bt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,g),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-x,b),this._y=0);break;default:ht("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return q_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(q_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Y_.setFromEuler(this),this.setFromQuaternion(Y_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bs.DEFAULT_ORDER="XYZ";class om{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let U1=0;const j_=new oe,Kr=new rr,Na=new on,lu=new oe,vl=new oe,L1=new oe,O1=new rr,Z_=new oe(1,0,0),K_=new oe(0,1,0),Q_=new oe(0,0,1),J_={type:"added"},P1={type:"removed"},Qr={type:"childadded",child:null},zh={type:"childremoved",child:null};class yn extends sr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:U1++}),this.uuid=_o(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yn.DEFAULT_UP.clone();const t=new oe,i=new bs,s=new rr,l=new oe(1,1,1);function u(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new on},normalMatrix:{value:new St}}),this.matrix=new on,this.matrixWorld=new on,this.matrixAutoUpdate=yn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new om,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Kr.setFromAxisAngle(t,i),this.quaternion.multiply(Kr),this}rotateOnWorldAxis(t,i){return Kr.setFromAxisAngle(t,i),this.quaternion.premultiply(Kr),this}rotateX(t){return this.rotateOnAxis(Z_,t)}rotateY(t){return this.rotateOnAxis(K_,t)}rotateZ(t){return this.rotateOnAxis(Q_,t)}translateOnAxis(t,i){return j_.copy(t).applyQuaternion(this.quaternion),this.position.add(j_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Z_,t)}translateY(t){return this.translateOnAxis(K_,t)}translateZ(t){return this.translateOnAxis(Q_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Na.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?lu.copy(t):lu.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),vl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Na.lookAt(vl,lu,this.up):Na.lookAt(lu,vl,this.up),this.quaternion.setFromRotationMatrix(Na),l&&(Na.extractRotation(l.matrixWorld),Kr.setFromRotationMatrix(Na),this.quaternion.premultiply(Kr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Vt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(J_),Qr.child=t,this.dispatchEvent(Qr),Qr.child=null):Vt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(P1),zh.child=t,this.dispatchEvent(zh),zh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Na.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Na.multiply(t.parent.matrixWorld)),t.applyMatrix4(Na),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(J_),Qr.child=t,this.dispatchEvent(Qr),Qr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vl,t,L1),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vl,O1,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,u=this.matrix.elements;u[12]+=i-u[0]*i-u[4]*s-u[8]*l,u[13]+=s-u[1]*i-u[5]*s-u[9]*l,u[14]+=l-u[2]*i-u[6]*s-u[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i,s=!1){const l=this.parent;if(t===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),i===!0){const u=this.children;for(let d=0,h=u.length;d<h;d++)u[d].updateWorldMatrix(!1,!0,s)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,l.name=this.name,l.castShadow=this.castShadow,l.receiveShadow=this.receiveShadow,l.visible=this.visible,l.frustumCulled=this.frustumCulled,l.renderOrder=this.renderOrder,l.static=this.static,l.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let g=0,x=m.length;g<x;g++){const v=m[g];u(t.shapes,v)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,g=this.material.length;m<g;m++)h.push(u(t.materials,this.material[m]));l.material=h}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(u(t.animations,m))}}if(i){const h=d(t.geometries),m=d(t.materials),g=d(t.textures),x=d(t.images),v=d(t.shapes),p=d(t.skeletons),b=d(t.animations),A=d(t.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),g.length>0&&(s.textures=g),x.length>0&&(s.images=x),v.length>0&&(s.shapes=v),p.length>0&&(s.skeletons=p),b.length>0&&(s.animations=b),A.length>0&&(s.nodes=A)}return s.object=l,s;function d(h){const m=[];for(const g in h){const x=h[g];delete x.metadata,m.push(x)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}yn.DEFAULT_UP=new oe(0,1,0);yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Li extends yn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const I1={type:"move"};class Bh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Li,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Li,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new oe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new oe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Li,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new oe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new oe,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,u=null,d=null;const h=this._targetRay,m=this._grip,g=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(g&&t.hand){d=!0;for(const L of t.hand.values()){const y=i.getJointPose(L,s),S=this._getHandJoint(g,L);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const x=g.joints["index-finger-tip"],v=g.joints["thumb-tip"],p=x.position.distanceTo(v.position),b=.02,A=.005;g.inputState.pinching&&p>b+A?(g.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!g.inputState.pinching&&p<=b-A&&(g.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:t,target:this})));h!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(I1)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),g!==null&&(g.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Li;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const lS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_s={h:0,s:0,l:0},cu={h:0,s:0,l:0};function Fh(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class Ot{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Ui){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ht.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Ht.workingColorSpace){return this.r=t,this.g=i,this.b=s,Ht.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Ht.workingColorSpace){if(t=sm(t,1),i=Bt(i,0,1),s=Bt(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,d=2*s-u;this.r=Fh(d,u,t+1/3),this.g=Fh(d,u,t),this.b=Fh(d,u,t-1/3)}return Ht.colorSpaceToWorking(this,l),this}setStyle(t,i=Ui){function s(u){u!==void 0&&parseFloat(u)<1&&ht("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:ht("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);ht("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Ui){const s=lS[t.toLowerCase()];return s!==void 0?this.setHex(s,i):ht("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Fa(t.r),this.g=Fa(t.g),this.b=Fa(t.b),this}copyLinearToSRGB(t){return this.r=fo(t.r),this.g=fo(t.g),this.b=fo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ui){return Ht.workingToColorSpace(Gn.copy(this),t),Math.round(Bt(Gn.r*255,0,255))*65536+Math.round(Bt(Gn.g*255,0,255))*256+Math.round(Bt(Gn.b*255,0,255))}getHexString(t=Ui){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ht.workingColorSpace){Ht.workingToColorSpace(Gn.copy(this),i);const s=Gn.r,l=Gn.g,u=Gn.b,d=Math.max(s,l,u),h=Math.min(s,l,u);let m,g;const x=(h+d)/2;if(h===d)m=0,g=0;else{const v=d-h;switch(g=x<=.5?v/(d+h):v/(2-d-h),d){case s:m=(l-u)/v+(l<u?6:0);break;case l:m=(u-s)/v+2;break;case u:m=(s-l)/v+4;break}m/=6}return t.h=m,t.s=g,t.l=x,t}getRGB(t,i=Ht.workingColorSpace){return Ht.workingToColorSpace(Gn.copy(this),i),t.r=Gn.r,t.g=Gn.g,t.b=Gn.b,t}getStyle(t=Ui){Ht.workingToColorSpace(Gn.copy(this),t);const i=Gn.r,s=Gn.g,l=Gn.b;return t!==Ui?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(_s),this.setHSL(_s.h+t,_s.s+i,_s.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(_s),t.getHSL(cu);const s=Rl(_s.h,cu.h,i),l=Rl(_s.s,cu.s,i),u=Rl(_s.l,cu.l,i);return this.setHSL(s,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gn=new Ot;Ot.NAMES=lS;class lm{constructor(t,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ot(t),this.density=i}clone(){return new lm(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class z1 extends yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bs,this.environmentIntensity=1,this.environmentRotation=new bs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),i.object.backgroundBlurriness=this.backgroundBlurriness,i.object.backgroundIntensity=this.backgroundIntensity,i.object.backgroundRotation=this.backgroundRotation.toArray(),i.object.environmentIntensity=this.environmentIntensity,i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Gi=new oe,Da=new oe,Hh=new oe,Ua=new oe,Jr=new oe,$r=new oe,$_=new oe,Gh=new oe,Vh=new oe,kh=new oe,Xh=new cn,Wh=new cn,qh=new cn;class ki{constructor(t=new oe,i=new oe,s=new oe){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Gi.subVectors(t,i),l.cross(Gi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,s,l,u){Gi.subVectors(l,i),Da.subVectors(s,i),Hh.subVectors(t,i);const d=Gi.dot(Gi),h=Gi.dot(Da),m=Gi.dot(Hh),g=Da.dot(Da),x=Da.dot(Hh),v=d*g-h*h;if(v===0)return u.set(0,0,0),null;const p=1/v,b=(g*m-h*x)*p,A=(d*x-h*m)*p;return u.set(1-b-A,A,b)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,Ua)===null?!1:Ua.x>=0&&Ua.y>=0&&Ua.x+Ua.y<=1}static getInterpolation(t,i,s,l,u,d,h,m){return this.getBarycoord(t,i,s,l,Ua)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,Ua.x),m.addScaledVector(d,Ua.y),m.addScaledVector(h,Ua.z),m)}static getInterpolatedAttribute(t,i,s,l,u,d){return Xh.setScalar(0),Wh.setScalar(0),qh.setScalar(0),Xh.fromBufferAttribute(t,i),Wh.fromBufferAttribute(t,s),qh.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(Xh,u.x),d.addScaledVector(Wh,u.y),d.addScaledVector(qh,u.z),d}static isFrontFacing(t,i,s,l){return Gi.subVectors(s,i),Da.subVectors(t,i),Gi.cross(Da).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Gi.subVectors(this.c,this.b),Da.subVectors(this.a,this.b),Gi.cross(Da).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ki.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return ki.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,u){return ki.getInterpolation(t,this.a,this.b,this.c,i,s,l,u)}containsPoint(t){return ki.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ki.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,u=this.c;let d,h;Jr.subVectors(l,s),$r.subVectors(u,s),Gh.subVectors(t,s);const m=Jr.dot(Gh),g=$r.dot(Gh);if(m<=0&&g<=0)return i.copy(s);Vh.subVectors(t,l);const x=Jr.dot(Vh),v=$r.dot(Vh);if(x>=0&&v<=x)return i.copy(l);const p=m*v-x*g;if(p<=0&&m>=0&&x<=0)return d=m/(m-x),i.copy(s).addScaledVector(Jr,d);kh.subVectors(t,u);const b=Jr.dot(kh),A=$r.dot(kh);if(A>=0&&b<=A)return i.copy(u);const L=b*g-m*A;if(L<=0&&g>=0&&A<=0)return h=g/(g-A),i.copy(s).addScaledVector($r,h);const y=x*A-b*v;if(y<=0&&v-x>=0&&b-A>=0)return $_.subVectors(u,l),h=(v-x)/(v-x+(b-A)),i.copy(l).addScaledVector($_,h);const S=1/(y+L+p);return d=L*S,h=p*S,i.copy(s).addScaledVector(Jr,d).addScaledVector($r,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Il{constructor(t=new oe(1/0,1/0,1/0),i=new oe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Vi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Vi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Vi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)t.isMesh===!0?t.getVertexPosition(d,Vi):Vi.fromBufferAttribute(u,d),Vi.applyMatrix4(t.matrixWorld),this.expandByPoint(Vi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),uu.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),uu.copy(s.boundingBox)),uu.applyMatrix4(t.matrixWorld),this.union(uu)}const l=t.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Vi),Vi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(_l),fu.subVectors(this.max,_l),eo.subVectors(t.a,_l),to.subVectors(t.b,_l),no.subVectors(t.c,_l),xs.subVectors(to,eo),Ss.subVectors(no,to),Ys.subVectors(eo,no);let i=[0,-xs.z,xs.y,0,-Ss.z,Ss.y,0,-Ys.z,Ys.y,xs.z,0,-xs.x,Ss.z,0,-Ss.x,Ys.z,0,-Ys.x,-xs.y,xs.x,0,-Ss.y,Ss.x,0,-Ys.y,Ys.x,0];return!Yh(i,eo,to,no,fu)||(i=[1,0,0,0,1,0,0,0,1],!Yh(i,eo,to,no,fu))?!1:(du.crossVectors(xs,Ss),i=[du.x,du.y,du.z],Yh(i,eo,to,no,fu))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Vi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Vi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(La[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),La[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),La[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),La[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),La[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),La[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),La[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),La[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(La),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const La=[new oe,new oe,new oe,new oe,new oe,new oe,new oe,new oe],Vi=new oe,uu=new Il,eo=new oe,to=new oe,no=new oe,xs=new oe,Ss=new oe,Ys=new oe,_l=new oe,fu=new oe,du=new oe,js=new oe;function Yh(o,t,i,s,l){for(let u=0,d=o.length-3;u<=d;u+=3){js.fromArray(o,u);const h=l.x*Math.abs(js.x)+l.y*Math.abs(js.y)+l.z*Math.abs(js.z),m=t.dot(js),g=i.dot(js),x=s.dot(js);if(Math.max(-Math.max(m,g,x),Math.min(m,g,x))>h)return!1}return!0}const Sn=new oe,hu=new Nt;let B1=0;class Ha extends sr{constructor(t,i,s=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:B1++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=n1,this.updateRanges=[],this.gpuType=ca,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)hu.fromBufferAttribute(this,i),hu.applyMatrix3(t),this.setXY(i,hu.x,hu.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)Sn.fromBufferAttribute(this,i),Sn.applyMatrix3(t),this.setXYZ(i,Sn.x,Sn.y,Sn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)Sn.fromBufferAttribute(this,i),Sn.applyMatrix4(t),this.setXYZ(i,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)Sn.fromBufferAttribute(this,i),Sn.applyNormalMatrix(t),this.setXYZ(i,Sn.x,Sn.y,Sn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)Sn.fromBufferAttribute(this,i),Sn.transformDirection(t),this.setXYZ(i,Sn.x,Sn.y,Sn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=lo(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Zn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=lo(i,this.array)),i}setX(t,i){return this.normalized&&(i=Zn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=lo(i,this.array)),i}setY(t,i){return this.normalized&&(i=Zn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=lo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Zn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=lo(i,this.array)),i}setW(t,i){return this.normalized&&(i=Zn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Zn(i,this.array),s=Zn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Zn(i,this.array),s=Zn(s,this.array),l=Zn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,u){return t*=this.itemSize,this.normalized&&(i=Zn(i,this.array),s=Zn(s,this.array),l=Zn(l,this.array),u=Zn(u,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class cS extends Ha{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class uS extends Ha{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class En extends Ha{constructor(t,i,s){super(new Float32Array(t),i,s)}}const F1=new Il,xl=new oe,jh=new oe;class qu{constructor(t=new oe,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):F1.setFromPoints(t).getCenter(s);let l=0;for(let u=0,d=t.length;u<d;u++)l=Math.max(l,s.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;xl.subVectors(t,this.center);const i=xl.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(xl,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(jh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(xl.copy(t.center).add(jh)),this.expandByPoint(xl.copy(t.center).sub(jh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let H1=0;const Di=new on,Zh=new yn,io=new oe,vi=new Il,Sl=new Il,Nn=new oe;class si extends sr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:H1++}),this.uuid=_o(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(i1(t)?uS:cS)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new St().getNormalMatrix(t);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Di.makeRotationFromQuaternion(t),this.applyMatrix4(Di),this}rotateX(t){return Di.makeRotationX(t),this.applyMatrix4(Di),this}rotateY(t){return Di.makeRotationY(t),this.applyMatrix4(Di),this}rotateZ(t){return Di.makeRotationZ(t),this.applyMatrix4(Di),this}translate(t,i,s){return Di.makeTranslation(t,i,s),this.applyMatrix4(Di),this}scale(t,i,s){return Di.makeScale(t,i,s),this.applyMatrix4(Di),this}lookAt(t){return Zh.lookAt(t),Zh.updateMatrix(),this.applyMatrix4(Zh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(io).negate(),this.translate(io.x,io.y,io.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=t.length;l<u;l++){const d=t[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new En(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&ht("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Il);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Vt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new oe(-1/0,-1/0,-1/0),new oe(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];vi.setFromBufferAttribute(u),this.morphTargetsRelative?(Nn.addVectors(this.boundingBox.min,vi.min),this.boundingBox.expandByPoint(Nn),Nn.addVectors(this.boundingBox.max,vi.max),this.boundingBox.expandByPoint(Nn)):(this.boundingBox.expandByPoint(vi.min),this.boundingBox.expandByPoint(vi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Vt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qu);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Vt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new oe,1/0);return}if(t){const s=this.boundingSphere.center;if(vi.setFromBufferAttribute(t),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];Sl.setFromBufferAttribute(h),this.morphTargetsRelative?(Nn.addVectors(vi.min,Sl.min),vi.expandByPoint(Nn),Nn.addVectors(vi.max,Sl.max),vi.expandByPoint(Nn)):(vi.expandByPoint(Sl.min),vi.expandByPoint(Sl.max))}vi.getCenter(s);let l=0;for(let u=0,d=t.count;u<d;u++)Nn.fromBufferAttribute(t,u),l=Math.max(l,s.distanceToSquared(Nn));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],m=this.morphTargetsRelative;for(let g=0,x=h.count;g<x;g++)Nn.fromBufferAttribute(h,g),m&&(io.fromBufferAttribute(t,g),Nn.add(io)),l=Math.max(l,s.distanceToSquared(Nn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Vt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Vt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;let d=this.getAttribute("tangent");(d===void 0||d.count!==s.count)&&(d=new Ha(new Float32Array(4*s.count),4),this.setAttribute("tangent",d));const h=[],m=[];for(let M=0;M<s.count;M++)h[M]=new oe,m[M]=new oe;const g=new oe,x=new oe,v=new oe,p=new Nt,b=new Nt,A=new Nt,L=new oe,y=new oe;function S(M,U,k){g.fromBufferAttribute(s,M),x.fromBufferAttribute(s,U),v.fromBufferAttribute(s,k),p.fromBufferAttribute(u,M),b.fromBufferAttribute(u,U),A.fromBufferAttribute(u,k),x.sub(g),v.sub(g),b.sub(p),A.sub(p);const W=1/(b.x*A.y-A.x*b.y);isFinite(W)&&(L.copy(x).multiplyScalar(A.y).addScaledVector(v,-b.y).multiplyScalar(W),y.copy(v).multiplyScalar(b.x).addScaledVector(x,-A.x).multiplyScalar(W),h[M].add(L),h[U].add(L),h[k].add(L),m[M].add(y),m[U].add(y),m[k].add(y))}let N=this.groups;N.length===0&&(N=[{start:0,count:t.count}]);for(let M=0,U=N.length;M<U;++M){const k=N[M],W=k.start,Y=k.count;for(let ce=W,$=W+Y;ce<$;ce+=3)S(t.getX(ce+0),t.getX(ce+1),t.getX(ce+2))}const F=new oe,R=new oe,D=new oe,C=new oe;function I(M){D.fromBufferAttribute(l,M),C.copy(D);const U=h[M];F.copy(U),F.sub(D.multiplyScalar(D.dot(U))).normalize(),R.crossVectors(C,U);const W=R.dot(m[M])<0?-1:1;d.setXYZW(M,F.x,F.y,F.z,W)}for(let M=0,U=N.length;M<U;++M){const k=N[M],W=k.start,Y=k.count;for(let ce=W,$=W+Y;ce<$;ce+=3)I(t.getX(ce+0)),I(t.getX(ce+1)),I(t.getX(ce+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==i.count)s=new Ha(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let p=0,b=s.count;p<b;p++)s.setXYZ(p,0,0,0);const l=new oe,u=new oe,d=new oe,h=new oe,m=new oe,g=new oe,x=new oe,v=new oe;if(t)for(let p=0,b=t.count;p<b;p+=3){const A=t.getX(p+0),L=t.getX(p+1),y=t.getX(p+2);l.fromBufferAttribute(i,A),u.fromBufferAttribute(i,L),d.fromBufferAttribute(i,y),x.subVectors(d,u),v.subVectors(l,u),x.cross(v),h.fromBufferAttribute(s,A),m.fromBufferAttribute(s,L),g.fromBufferAttribute(s,y),h.add(x),m.add(x),g.add(x),s.setXYZ(A,h.x,h.y,h.z),s.setXYZ(L,m.x,m.y,m.z),s.setXYZ(y,g.x,g.y,g.z)}else for(let p=0,b=i.count;p<b;p+=3)l.fromBufferAttribute(i,p+0),u.fromBufferAttribute(i,p+1),d.fromBufferAttribute(i,p+2),x.subVectors(d,u),v.subVectors(l,u),x.cross(v),s.setXYZ(p+0,x.x,x.y,x.z),s.setXYZ(p+1,x.x,x.y,x.z),s.setXYZ(p+2,x.x,x.y,x.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Nn.fromBufferAttribute(t,i),Nn.normalize(),t.setXYZ(i,Nn.x,Nn.y,Nn.z)}toNonIndexed(){function t(h,m){const g=h.array,x=h.itemSize,v=h.normalized,p=new g.constructor(m.length*x);let b=0,A=0;for(let L=0,y=m.length;L<y;L++){h.isInterleavedBufferAttribute?b=m[L]*h.data.stride+h.offset:b=m[L]*x;for(let S=0;S<x;S++)p[A++]=g[b++]}return new Ha(p,x,v)}if(this.index===null)return ht("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new si,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],g=t(m,s);i.setAttribute(h,g)}const u=this.morphAttributes;for(const h in u){const m=[],g=u[h];for(let x=0,v=g.length;x<v;x++){const p=g[x],b=t(p,s);m.push(b)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const g=d[h];i.addGroup(g.start,g.count,g.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const g in m)m[g]!==void 0&&(t[g]=m[g]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const g=s[m];t.data.attributes[m]=g.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const g=this.morphAttributes[m],x=[];for(let v=0,p=g.length;v<p;v++){const b=g[v];x.push(b.toJSON(t.data))}x.length>0&&(l[m]=x,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const g in l){const x=l[g];this.setAttribute(g,x.clone(i))}const u=t.morphAttributes;for(const g in u){const x=[],v=u[g];for(let p=0,b=v.length;p<b;p++)x.push(v[p].clone(i));this.morphAttributes[g]=x}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let g=0,x=d.length;g<x;g++){const v=d[g];this.addGroup(v.start,v.count,v.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Kh=new oe,G1=new oe,V1=new St;class Pa{constructor(t=new oe(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Kh.subVectors(s,i).cross(G1.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i,s=!0){const l=t.delta(Kh),u=this.normal.dot(l);if(u===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const d=-(t.start.dot(this.normal)+this.constant)/u;return s===!0&&(d<0||d>1)?null:i.copy(t.start).addScaledVector(l,d)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||V1.getNormalMatrix(t),l=this.coplanarPoint(Kh).applyMatrix4(t),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let k1=0;class xo extends sr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:k1++}),this.uuid=_o(),this.name="",this.type="Material",this.blending=Al,this.side=tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vx,this.blendDst=kx,this.blendEquation=oo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=Cl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zb,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Uh,this.stencilZFail=Uh,this.stencilZPass=Uh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){ht(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ht(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector2&&s&&s.isVector2||l&&l.isEuler&&s&&s.isEuler||l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,s.blending=this.blending,s.side=this.side,s.shadowSide=this.shadowSide,s.vertexColors=this.vertexColors,s.opacity=this.opacity,s.transparent=this.transparent,s.blendSrc=this.blendSrc,s.blendDst=this.blendDst,s.blendEquation=this.blendEquation,s.blendSrcAlpha=this.blendSrcAlpha,s.blendDstAlpha=this.blendDstAlpha,s.blendEquationAlpha=this.blendEquationAlpha,s.blendColor=this.blendColor.getHex(),s.blendAlpha=this.blendAlpha,s.depthFunc=this.depthFunc,s.depthTest=this.depthTest,s.depthWrite=this.depthWrite,s.colorWrite=this.colorWrite,s.clipIntersection=this.clipIntersection,s.clipShadows=this.clipShadows,s.stencilWriteMask=this.stencilWriteMask,s.stencilFunc=this.stencilFunc,s.stencilRef=this.stencilRef,s.stencilFuncMask=this.stencilFuncMask,s.stencilFail=this.stencilFail,s.stencilZFail=this.stencilZFail,s.stencilZPass=this.stencilZPass,s.stencilWrite=this.stencilWrite,s.polygonOffset=this.polygonOffset,s.polygonOffsetFactor=this.polygonOffsetFactor,s.polygonOffsetUnits=this.polygonOffsetUnits,s.dithering=this.dithering,s.alphaTest=this.alphaTest,s.alphaHash=this.alphaHash,s.alphaToCoverage=this.alphaToCoverage,s.premultipliedAlpha=this.premultipliedAlpha,s.forceSinglePass=this.forceSinglePass,s.allowOverride=this.allowOverride,s.visible=this.visible,s.toneMapped=this.toneMapped,s.name=this.name,this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(s.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(s.clippingPlanes=this.clippingPlanes.map(u=>u.toJSON())),this.rotation!==void 0&&(s.rotation=this.rotation),this.depthPacking!==void 0&&(s.depthPacking=this.depthPacking),this.linewidth!==void 0&&(s.linewidth=this.linewidth),this.linecap!==void 0&&(s.linecap=this.linecap),this.linejoin!==void 0&&(s.linejoin=this.linejoin),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.wireframe!==void 0&&(s.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(s.flatShading=this.flatShading),this.fog!==void 0&&(s.fog=this.fog),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const d=[];for(const h in u){const m=u[h];delete m.metadata,d.push(m)}return d}if(i){const u=l(t.textures),d=l(t.images);u.length>0&&(s.textures=u),d.length>0&&(s.images=d)}return s}fromJSON(t,i){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ot().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(s=>new Pa().fromJSON(s))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=i[t.map]||null),t.matcap!==void 0&&(this.matcap=i[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=i[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=i[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=i[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let s=t.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new Nt().fromArray(s)}return t.displacementMap!==void 0&&(this.displacementMap=i[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=i[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=i[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=i[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=i[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=i[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=i[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=i[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=i[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=i[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=i[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Nt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=i[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=i[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=i[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=i[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=i[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Oa=new oe,Qh=new oe,pu=new oe,mu=new oe;class cm{constructor(t=new oe,i=new oe(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Oa)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Oa.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Oa.copy(this.origin).addScaledVector(this.direction,i),Oa.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Qh.copy(t).add(i).multiplyScalar(.5),pu.copy(i).sub(t).normalize(),mu.copy(this.origin).sub(Qh);const u=t.distanceTo(i)*.5,d=-this.direction.dot(pu),h=mu.dot(this.direction),m=-mu.dot(pu),g=mu.lengthSq(),x=Math.abs(1-d*d);let v,p,b,A;if(x>0)if(v=d*m-h,p=d*h-m,A=u*x,v>=0)if(p>=-A)if(p<=A){const L=1/x;v*=L,p*=L,b=v*(v+d*p+2*h)+p*(d*v+p+2*m)+g}else p=u,v=Math.max(0,-(d*p+h)),b=-v*v+p*(p+2*m)+g;else p=-u,v=Math.max(0,-(d*p+h)),b=-v*v+p*(p+2*m)+g;else p<=-A?(v=Math.max(0,-(-d*u+h)),p=v>0?-u:Math.min(Math.max(-u,-m),u),b=-v*v+p*(p+2*m)+g):p<=A?(v=0,p=Math.min(Math.max(-u,-m),u),b=p*(p+2*m)+g):(v=Math.max(0,-(d*u+h)),p=v>0?u:Math.min(Math.max(-u,-m),u),b=-v*v+p*(p+2*m)+g);else p=d>0?-u:u,v=Math.max(0,-(d*p+h)),b=-v*v+p*(p+2*m)+g;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Qh).addScaledVector(pu,p),b}intersectSphere(t,i){if(t.radius<0)return null;Oa.subVectors(t.center,this.origin);const s=Oa.dot(this.direction),l=Oa.dot(Oa)-s*s,u=t.radius*t.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=s-d,m=s+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,u,d,h,m;const g=1/this.direction.x,x=1/this.direction.y,v=1/this.direction.z,p=this.origin;return g>=0?(s=(t.min.x-p.x)*g,l=(t.max.x-p.x)*g):(s=(t.max.x-p.x)*g,l=(t.min.x-p.x)*g),x>=0?(u=(t.min.y-p.y)*x,d=(t.max.y-p.y)*x):(u=(t.max.y-p.y)*x,d=(t.min.y-p.y)*x),s>d||u>l||((u>s||isNaN(s))&&(s=u),(d<l||isNaN(l))&&(l=d),v>=0?(h=(t.min.z-p.z)*v,m=(t.max.z-p.z)*v):(h=(t.max.z-p.z)*v,m=(t.min.z-p.z)*v),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,Oa)!==null}intersectTriangle(t,i,s,l,u){const d=this.origin,h=this.direction,m=h.x,g=h.y,x=h.z,v=t.x-d.x,p=t.y-d.y,b=t.z-d.z,A=i.x-d.x,L=i.y-d.y,y=i.z-d.z,S=s.x-d.x,N=s.y-d.y,F=s.z-d.z,R=Math.abs(m),D=Math.abs(g),C=Math.abs(x);let I,M,U,k,W,Y,ce,$,te,Z,K,ge;if(R>=D&&R>=C?(U=m,Y=v,te=A,ge=S,m>=0?(I=g,M=x,k=p,W=b,ce=L,$=y,Z=N,K=F):(I=x,M=g,k=b,W=p,ce=y,$=L,Z=F,K=N)):D>=C?(U=g,Y=p,te=L,ge=N,g>=0?(I=x,M=m,k=b,W=v,ce=y,$=A,Z=F,K=S):(I=m,M=x,k=v,W=b,ce=A,$=y,Z=S,K=F)):(U=x,Y=b,te=y,ge=F,x>=0?(I=m,M=g,k=v,W=p,ce=A,$=L,Z=S,K=N):(I=g,M=m,k=p,W=v,ce=L,$=A,Z=N,K=S)),U===0)return null;const le=I/U,O=M/U,P=1/U,be=k-le*Y,Ce=W-O*Y,B=ce-le*te,X=$-O*te,se=Z-le*ge,H=K-O*ge,ee=se*X-H*B,Se=be*H-Ce*se,De=B*Ce-X*be;if(l){if(ee<0||Se<0||De<0)return null}else if((ee<0||Se<0||De<0)&&(ee>0||Se>0||De>0))return null;const de=ee+Se+De;if(de===0)return null;const Ne=P*(ee*Y+Se*te+De*ge);return(de>0?Ne<0:Ne>0)?null:this.at(Ne/de,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mo extends xo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bs,this.combine=Xx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ex=new on,Zs=new cm,gu=new qu,tx=new oe,vu=new oe,_u=new oe,xu=new oe,Jh=new oe,Su=new oe,nx=new oe,yu=new oe;class xt extends yn{constructor(t=new si,i=new mo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(u&&h){Su.set(0,0,0);for(let m=0,g=u.length;m<g;m++){const x=h[m],v=u[m];x!==0&&(Jh.fromBufferAttribute(v,t),d?Su.addScaledVector(Jh,x):Su.addScaledVector(Jh.sub(i),x))}i.add(Su)}return i}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),gu.copy(s.boundingSphere),gu.applyMatrix4(u),Zs.copy(t.ray).recast(t.near),!(gu.containsPoint(Zs.origin)===!1&&(Zs.intersectSphere(gu,tx)===null||Zs.origin.distanceToSquared(tx)>(t.far-t.near)**2))&&(ex.copy(u).invert(),Zs.copy(t.ray).applyMatrix4(ex),!(s.boundingBox!==null&&Zs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Zs)))}_computeIntersections(t,i,s){let l;const u=this.geometry,d=this.material,h=u.index,m=u.attributes.position,g=u.attributes.uv,x=u.attributes.uv1,v=u.attributes.normal,p=u.groups,b=u.drawRange;if(h!==null)if(Array.isArray(d))for(let A=0,L=p.length;A<L;A++){const y=p[A],S=d[y.materialIndex],N=Math.max(y.start,b.start),F=Math.min(h.count,Math.min(y.start+y.count,b.start+b.count));for(let R=N,D=F;R<D;R+=3){const C=h.getX(R),I=h.getX(R+1),M=h.getX(R+2);l=Mu(this,S,t,s,g,x,v,C,I,M),l&&(l.faceIndex=Math.floor(R/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const A=Math.max(0,b.start),L=Math.min(h.count,b.start+b.count);for(let y=A,S=L;y<S;y+=3){const N=h.getX(y),F=h.getX(y+1),R=h.getX(y+2);l=Mu(this,d,t,s,g,x,v,N,F,R),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let A=0,L=p.length;A<L;A++){const y=p[A],S=d[y.materialIndex],N=Math.max(y.start,b.start),F=Math.min(m.count,Math.min(y.start+y.count,b.start+b.count));for(let R=N,D=F;R<D;R+=3){const C=R,I=R+1,M=R+2;l=Mu(this,S,t,s,g,x,v,C,I,M),l&&(l.faceIndex=Math.floor(R/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const A=Math.max(0,b.start),L=Math.min(m.count,b.start+b.count);for(let y=A,S=L;y<S;y+=3){const N=y,F=y+1,R=y+2;l=Mu(this,d,t,s,g,x,v,N,F,R),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function X1(o,t,i,s,l,u,d,h){let m;if(t.side===ai?m=s.intersectTriangle(d,u,l,!0,h):m=s.intersectTriangle(l,u,d,t.side===tr,h),m===null)return null;yu.copy(h),yu.applyMatrix4(o.matrixWorld);const g=i.ray.origin.distanceTo(yu);return g<i.near||g>i.far?null:{distance:g,point:yu.clone(),object:o}}function Mu(o,t,i,s,l,u,d,h,m,g){o.getVertexPosition(h,vu),o.getVertexPosition(m,_u),o.getVertexPosition(g,xu);const x=X1(o,t,i,s,vu,_u,xu,nx);if(x){const v=new oe;ki.getBarycoord(nx,vu,_u,xu,v),l&&(x.uv=ki.getInterpolatedAttribute(l,h,m,g,v,new Nt)),u&&(x.uv1=ki.getInterpolatedAttribute(u,h,m,g,v,new Nt)),d&&(x.normal=ki.getInterpolatedAttribute(d,h,m,g,v,new oe),x.normal.dot(s.direction)>0&&x.normal.multiplyScalar(-1));const p={a:h,b:m,c:g,normal:new oe,materialIndex:0};ki.getNormal(vu,_u,xu,p.normal),x.face=p,x.barycoord=v}return x}class W1 extends kn{constructor(t=null,i=1,s=1,l,u,d,h,m,g=Bn,x=Bn,v,p){super(null,d,h,m,g,x,l,u,v,p),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ks=new qu,q1=new Nt(.5,.5),bu=new oe;class um{constructor(t=new Pa,i=new Pa,s=new Pa,l=new Pa,u=new Pa,d=new Pa){this.planes=[t,i,s,l,u,d]}set(t,i,s,l,u,d){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=ua,s=!1){const l=this.planes,u=t.elements,d=u[0],h=u[1],m=u[2],g=u[3],x=u[4],v=u[5],p=u[6],b=u[7],A=u[8],L=u[9],y=u[10],S=u[11],N=u[12],F=u[13],R=u[14],D=u[15];if(l[0].setComponents(g-d,b-x,S-A,D-N).normalize(),l[1].setComponents(g+d,b+x,S+A,D+N).normalize(),l[2].setComponents(g+h,b+v,S+L,D+F).normalize(),l[3].setComponents(g-h,b-v,S-L,D-F).normalize(),s)l[4].setComponents(m,p,y,R).normalize(),l[5].setComponents(g-m,b-p,S-y,D-R).normalize();else if(l[4].setComponents(g-m,b-p,S-y,D-R).normalize(),i===ua)l[5].setComponents(g+m,b+p,S+y,D+R).normalize();else if(i===Ul)l[5].setComponents(m,p,y,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ks.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ks.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ks)}intersectsSprite(t){Ks.center.set(0,0,0);const i=q1.distanceTo(t.center);return Ks.radius=.7071067811865476+i,Ks.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ks)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(bu.x=l.normal.x>0?t.max.x:t.min.x,bu.y=l.normal.y>0?t.max.y:t.min.y,bu.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(bu)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Y1 extends xo{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Gu=new oe,Vu=new oe,ix=new on,yl=new cm,Eu=new qu,$h=new oe,ax=new oe;class j1 extends yn{constructor(t=new si,i=new Y1){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,u=i.count;l<u;l++)Gu.fromBufferAttribute(i,l-1),Vu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Gu.distanceTo(Vu);t.setAttribute("lineDistance",new En(s,1))}else ht("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,i){const s=this.geometry,l=this.matrixWorld,u=t.params.Line.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Eu.copy(s.boundingSphere),Eu.applyMatrix4(l),Eu.radius+=u,t.ray.intersectsSphere(Eu)===!1)return;ix.copy(l).invert(),yl.copy(t.ray).applyMatrix4(ix);const h=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,g=this.isLineSegments?2:1,x=s.index,p=s.attributes.position;if(x!==null){const b=Math.max(0,d.start),A=Math.min(x.count,d.start+d.count);for(let L=b,y=A-1;L<y;L+=g){const S=x.getX(L),N=x.getX(L+1),F=Tu(this,t,yl,m,S,N,L);F&&i.push(F)}if(this.isLineLoop){const L=x.getX(A-1),y=x.getX(b),S=Tu(this,t,yl,m,L,y,A-1);S&&i.push(S)}}else{const b=Math.max(0,d.start),A=Math.min(p.count,d.start+d.count);for(let L=b,y=A-1;L<y;L+=g){const S=Tu(this,t,yl,m,L,L+1,L);S&&i.push(S)}if(this.isLineLoop){const L=Tu(this,t,yl,m,A-1,b,A-1);L&&i.push(L)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}}function Tu(o,t,i,s,l,u,d){const h=o.geometry.attributes.position;if(Gu.fromBufferAttribute(h,l),Vu.fromBufferAttribute(h,u),i.distanceSqToSegment(Gu,Vu,$h,ax)>s)return;$h.applyMatrix4(o.matrixWorld);const g=t.ray.origin.distanceTo($h);if(!(g<t.near||g>t.far))return{distance:g,point:ax.clone().applyMatrix4(o.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:o}}class fS extends kn{constructor(t=[],i=nr,s,l,u,d,h,m,g,x){super(t,i,s,l,u,d,h,m,g,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Yu extends kn{constructor(t,i,s,l,u,d,h,m,g){super(t,i,s,l,u,d,h,m,g),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ll extends kn{constructor(t,i,s=da,l,u,d,h=Bn,m=Bn,g,x=Va,v=1){if(x!==Va&&x!==$s)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:t,height:i,depth:v};super(p,l,u,d,h,m,x,s,g),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new rm(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return i.compareFunction=this.compareFunction,i}}class Z1 extends Ll{constructor(t,i=da,s=nr,l,u,d=Bn,h=Bn,m,g=Va){const x={width:t,height:t,depth:1},v=[x,x,x,x,x,x];super(t,t,i,s,l,u,d,h,m,g),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class dS extends kn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class mn extends si{constructor(t=1,i=1,s=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const m=[],g=[],x=[],v=[];let p=0,b=0;A("z","y","x",-1,-1,s,i,t,d,u,0),A("z","y","x",1,-1,s,i,-t,d,u,1),A("x","z","y",1,1,t,s,i,l,d,2),A("x","z","y",1,-1,t,s,-i,l,d,3),A("x","y","z",1,-1,t,i,s,l,u,4),A("x","y","z",-1,-1,t,i,-s,l,u,5),this.setIndex(m),this.setAttribute("position",new En(g,3)),this.setAttribute("normal",new En(x,3)),this.setAttribute("uv",new En(v,2));function A(L,y,S,N,F,R,D,C,I,M,U){const k=R/I,W=D/M,Y=R/2,ce=D/2,$=C/2,te=I+1,Z=M+1;let K=0,ge=0;const le=new oe;for(let O=0;O<Z;O++){const P=O*W-ce;for(let be=0;be<te;be++){const Ce=be*k-Y;le[L]=Ce*N,le[y]=P*F,le[S]=$,g.push(le.x,le.y,le.z),le[L]=0,le[y]=0,le[S]=C>0?1:-1,x.push(le.x,le.y,le.z),v.push(be/I),v.push(1-O/M),K+=1}}for(let O=0;O<M;O++)for(let P=0;P<I;P++){const be=p+P+te*O,Ce=p+P+te*(O+1),B=p+(P+1)+te*(O+1),X=p+(P+1)+te*O;m.push(be,Ce,X),m.push(Ce,B,X),ge+=6}h.addGroup(b,ge,U),b+=ge,p+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class _i extends si{constructor(t=1,i=1,s=1,l=32,u=1,d=!1,h=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:u,openEnded:d,thetaStart:h,thetaLength:m};const g=this;l=Math.floor(l),u=Math.floor(u);const x=[],v=[],p=[],b=[];let A=0;const L=[],y=s/2;let S=0;N(),d===!1&&(t>0&&F(!0),i>0&&F(!1)),this.setIndex(x),this.setAttribute("position",new En(v,3)),this.setAttribute("normal",new En(p,3)),this.setAttribute("uv",new En(b,2));function N(){const R=new oe,D=new oe;let C=0;const I=(i-t)/s;for(let M=0;M<=u;M++){const U=[],k=M/u,W=k*(i-t)+t;for(let Y=0;Y<=l;Y++){const ce=Y/l,$=ce*m+h,te=Math.sin($),Z=Math.cos($);D.x=W*te,D.y=-k*s+y,D.z=W*Z,v.push(D.x,D.y,D.z),R.set(te,I,Z).normalize(),p.push(R.x,R.y,R.z),b.push(ce,1-k),U.push(A++)}L.push(U)}for(let M=0;M<l;M++)for(let U=0;U<u;U++){const k=L[U][M],W=L[U+1][M],Y=L[U+1][M+1],ce=L[U][M+1];(t>0||U!==0)&&(x.push(k,W,ce),C+=3),(i>0||U!==u-1)&&(x.push(W,Y,ce),C+=3)}g.addGroup(S,C,0),S+=C}function F(R){const D=A,C=new Nt,I=new oe;let M=0;const U=R===!0?t:i,k=R===!0?1:-1;for(let Y=1;Y<=l;Y++)v.push(0,y*k,0),p.push(0,k,0),b.push(.5,.5),A++;const W=A;for(let Y=0;Y<=l;Y++){const $=Y/l*m+h,te=Math.cos($),Z=Math.sin($);I.x=U*Z,I.y=y*k,I.z=U*te,v.push(I.x,I.y,I.z),p.push(0,k,0),C.x=te*.5+.5,C.y=Z*.5*k+.5,b.push(C.x,C.y),A++}for(let Y=0;Y<l;Y++){const ce=D+Y,$=W+Y;R===!0?x.push($,$+1,ce):x.push($+1,$,ce),M+=3}g.addGroup(S,M,R===!0?1:2),S+=M}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ju extends _i{constructor(t=1,i=1,s=32,l=1,u=!1,d=0,h=Math.PI*2){super(0,t,i,s,l,u,d,h),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:s,heightSegments:l,openEnded:u,thetaStart:d,thetaLength:h}}static fromJSON(t){return new ju(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class fm extends si{constructor(t=[],i=[],s=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:s,detail:l};const u=[],d=[];h(l),g(s),x(),this.setAttribute("position",new En(u,3)),this.setAttribute("normal",new En(u.slice(),3)),this.setAttribute("uv",new En(d,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function h(N){const F=new oe,R=new oe,D=new oe;for(let C=0;C<i.length;C+=3)b(i[C+0],F),b(i[C+1],R),b(i[C+2],D),m(F,R,D,N)}function m(N,F,R,D){const C=D+1,I=[];for(let M=0;M<=C;M++){I[M]=[];const U=N.clone().lerp(R,M/C),k=F.clone().lerp(R,M/C),W=C-M;for(let Y=0;Y<=W;Y++)Y===0&&M===C?I[M][Y]=U:I[M][Y]=U.clone().lerp(k,Y/W)}for(let M=0;M<C;M++)for(let U=0;U<2*(C-M)-1;U++){const k=Math.floor(U/2);U%2===0?(p(I[M][k+1]),p(I[M+1][k]),p(I[M][k])):(p(I[M][k+1]),p(I[M+1][k+1]),p(I[M+1][k]))}}function g(N){const F=new oe;for(let R=0;R<u.length;R+=3)F.x=u[R+0],F.y=u[R+1],F.z=u[R+2],F.normalize().multiplyScalar(N),u[R+0]=F.x,u[R+1]=F.y,u[R+2]=F.z}function x(){const N=new oe;for(let F=0;F<u.length;F+=3){N.x=u[F+0],N.y=u[F+1],N.z=u[F+2];const R=y(N)/2/Math.PI+.5,D=S(N)/Math.PI+.5;d.push(R,1-D)}A(),v()}function v(){for(let N=0;N<d.length;N+=6){const F=d[N+0],R=d[N+2],D=d[N+4],C=Math.max(F,R,D),I=Math.min(F,R,D);C>.9&&I<.1&&(F<.2&&(d[N+0]+=1),R<.2&&(d[N+2]+=1),D<.2&&(d[N+4]+=1))}}function p(N){u.push(N.x,N.y,N.z)}function b(N,F){const R=N*3;F.x=t[R+0],F.y=t[R+1],F.z=t[R+2]}function A(){const N=new oe,F=new oe,R=new oe,D=new oe,C=new Nt,I=new Nt,M=new Nt;for(let U=0,k=0;U<u.length;U+=9,k+=6){N.set(u[U+0],u[U+1],u[U+2]),F.set(u[U+3],u[U+4],u[U+5]),R.set(u[U+6],u[U+7],u[U+8]),C.set(d[k+0],d[k+1]),I.set(d[k+2],d[k+3]),M.set(d[k+4],d[k+5]),D.copy(N).add(F).add(R).divideScalar(3);const W=y(D);L(C,k+0,N,W),L(I,k+2,F,W),L(M,k+4,R,W)}}function L(N,F,R,D){D<0&&N.x===1&&(d[F]=N.x-1),R.x===0&&R.z===0&&(d[F]=D/2/Math.PI+.5)}function y(N){return Math.atan2(N.z,-N.x)}function S(N){return Math.atan2(-N.y,Math.sqrt(N.x*N.x+N.z*N.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fm(t.vertices,t.indices,t.radius,t.detail)}}class dm extends fm{constructor(t=1,i=0){const s=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],l=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(s,l,t,i),this.type="OctahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new dm(t.radius,t.detail)}}class ar extends si{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const u=t/2,d=i/2,h=Math.floor(s),m=Math.floor(l),g=h+1,x=m+1,v=t/h,p=i/m,b=[],A=[],L=[],y=[];for(let S=0;S<x;S++){const N=S*p-d;for(let F=0;F<g;F++){const R=F*v-u;A.push(R,-N,0),L.push(0,0,1),y.push(F/h),y.push(1-S/m)}}for(let S=0;S<m;S++)for(let N=0;N<h;N++){const F=N+g*S,R=N+g*(S+1),D=N+1+g*(S+1),C=N+1+g*S;b.push(F,R,C),b.push(R,D,C)}this.setIndex(b),this.setAttribute("position",new En(A,3)),this.setAttribute("normal",new En(L,3)),this.setAttribute("uv",new En(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ar(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ol extends si{constructor(t=1,i=32,s=16,l=0,u=Math.PI*2,d=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:u,thetaStart:d,thetaLength:h},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(d+h,Math.PI);let g=0;const x=[],v=new oe,p=new oe,b=[],A=[],L=[],y=[];for(let S=0;S<=s;S++){const N=[],F=S/s,R=d+F*h,D=t*Math.cos(R),C=Math.sqrt(t*t-D*D);let I=0;S===0&&d===0?I=.5/i:S===s&&m===Math.PI&&(I=-.5/i);for(let M=0;M<=i;M++){const U=M/i,k=l+U*u;v.x=-C*Math.cos(k),v.y=D,v.z=C*Math.sin(k),A.push(v.x,v.y,v.z),p.copy(v).normalize(),L.push(p.x,p.y,p.z),y.push(U+I,1-F),N.push(g++)}x.push(N)}for(let S=0;S<s;S++)for(let N=0;N<i;N++){const F=x[S][N+1],R=x[S][N],D=x[S+1][N],C=x[S+1][N+1];(S!==0||d>0)&&b.push(F,R,C),(S!==s-1||m<Math.PI)&&b.push(R,D,C)}this.setIndex(b),this.setAttribute("position",new En(A,3)),this.setAttribute("normal",new En(L,3)),this.setAttribute("uv",new En(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ol(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function go(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const l=o[i][s];if(sx(l))l.isRenderTargetTexture?(ht("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone();else if(Array.isArray(l))if(sx(l[0])){const u=[];for(let d=0,h=l.length;d<h;d++)u[d]=l[d].clone();t[i][s]=u}else t[i][s]=l.slice();else t[i][s]=l}}return t}function Kn(o){const t={};for(let i=0;i<o.length;i++){const s=go(o[i]);for(const l in s)t[l]=s[l]}return t}function sx(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function K1(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function hS(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ht.workingColorSpace}const Q1={clone:go,merge:Kn};var J1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pa extends xo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=J1,this.fragmentShader=$1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=go(t.uniforms),this.uniformsGroups=K1(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}fromJSON(t,i){if(super.fromJSON(t,i),t.uniforms!==void 0)for(const s in t.uniforms){const l=t.uniforms[s];switch(this.uniforms[s]={},l.type){case"t":this.uniforms[s].value=i[l.value]||null;break;case"c":this.uniforms[s].value=new Ot().setHex(l.value);break;case"v2":this.uniforms[s].value=new Nt().fromArray(l.value);break;case"v3":this.uniforms[s].value=new oe().fromArray(l.value);break;case"v4":this.uniforms[s].value=new cn().fromArray(l.value);break;case"m3":this.uniforms[s].value=new St().fromArray(l.value);break;case"m4":this.uniforms[s].value=new on().fromArray(l.value);break;default:this.uniforms[s].value=l.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const s in t.extensions)this.extensions[s]=t.extensions[s];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class eE extends pa{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Dn extends xo{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wp,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bs,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class tE extends xo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class nE extends xo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class zl extends yn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ot(t),this.intensity=i}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}class iE extends zl{constructor(t,i,s){super(t,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ot(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}toJSON(t){const i=super.toJSON(t);return i.object.groundColor=this.groundColor.getHex(),i}}const ep=new on,rx=new oe,ox=new oe;class hm{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Nt(512,512),this.mapType=xi,this.map=null,this.mapPass=null,this.matrix=new on,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new um,this._frameExtents=new Nt(1,1),this._viewportCount=1,this._viewports=[new cn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera;rx.setFromMatrixPosition(t.matrixWorld),i.position.copy(rx),ox.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(ox),i.updateMatrixWorld(),this._updateMatrix(i,this.matrix,this._frustum)}_updateMatrix(t,i,s,l){ep.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),s.setFromProjectionMatrix(ep,t.coordinateSystem,t.reversedDepth);const u=this._frameExtents,d=l?l.z/u.x:1,h=l?l.w/u.y:1,m=l?l.x/u.x:0,g=l?l.y/u.y:0;t.coordinateSystem===Ul||t.reversedDepth?i.set(.5*d,0,0,.5*d+m,0,.5*h,0,.5*h+g,0,0,1,0,0,0,0,1):i.set(.5*d,0,0,.5*d+m,0,.5*h,0,.5*h+g,0,0,.5,.5,0,0,0,1),i.multiply(ep)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Au=new oe,wu=new rr,ra=new oe;class pS extends yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new on,this.projectionMatrix=new on,this.projectionMatrixInverse=new on,this.coordinateSystem=ua,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Au,wu,ra),ra.x===1&&ra.y===1&&ra.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Au,wu,ra.set(1,1,1)).invert()}updateWorldMatrix(t,i,s=!1){super.updateWorldMatrix(t,i,s),this.matrixWorld.decompose(Au,wu,ra),ra.x===1&&ra.y===1&&ra.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Au,wu,ra.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ys=new oe,lx=new Nt,cx=new Nt;class ii extends pS{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=po*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(wl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return po*2*Math.atan(Math.tan(wl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){ys.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ys.x,ys.y).multiplyScalar(-t/ys.z),ys.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ys.x,ys.y).multiplyScalar(-t/ys.z)}getViewSize(t,i){return this.getViewBounds(t,lx,cx),i.subVectors(cx,lx)}setViewOffset(t,i,s,l,u,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(wl*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,g=d.fullHeight;u+=d.offsetX*l/m,i-=d.offsetY*s/g,l*=d.width/m,s*=d.height/g}const h=this.filmOffset;h!==0&&(u+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class aE extends hm{constructor(){super(new ii(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const i=this.camera,s=po*2*t.angle*this.focus,l=this.mapSize.width/this.mapSize.height*this.aspect,u=t.distance||i.far;(s!==i.fov||l!==i.aspect||u!==i.far)&&(i.fov=s,i.aspect=l,i.far=u,i.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){const t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}}class sE extends zl{constructor(t,i,s=0,l=Math.PI/3,u=0,d=2){super(t,i),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.target=new yn,this.distance=s,this.angle=l,this.penumbra=u,this.decay=d,this.map=null,this.shadow=new aE}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.angle=this.angle,i.object.decay=this.decay,i.object.penumbra=this.penumbra,i.object.target=this.target.uuid,this.map&&this.map.isTexture&&(i.object.map=this.map.toJSON(t).uuid),i.object.shadow=this.shadow.toJSON(),i}}class rE extends hm{constructor(){super(new ii(90,1,.5,500)),this.isPointLightShadow=!0}}class oE extends zl{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new rE}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class pm extends pS{constructor(t=-1,i=1,s=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-t,d=s+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const g=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=g*this.view.offsetX,d=u+g*this.view.width,h-=x*this.view.offsetY,m=h-x*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class lE extends hm{constructor(){super(new pm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class cE extends zl{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.target=new yn,this.shadow=new lE}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class uE extends zl{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const ao=-90,so=1;class fE extends yn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ii(ao,so,t,i);l.layers=this.layers,this.add(l);const u=new ii(ao,so,t,i);u.layers=this.layers,this.add(u);const d=new ii(ao,so,t,i);d.layers=this.layers,this.add(d);const h=new ii(ao,so,t,i);h.layers=this.layers,this.add(h);const m=new ii(ao,so,t,i);m.layers=this.layers,this.add(m);const g=new ii(ao,so,t,i);g.layers=this.layers,this.add(g)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,u,d,h,m]=i;for(const g of i)this.remove(g);if(t===ua)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Ul)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const g of i)this.add(g),g.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,m,g,x]=this.children,v=t.getRenderTarget(),p=t.getActiveCubeFace(),b=t.getActiveMipmapLevel(),A=t.xr.enabled;t.xr.enabled=!1;const L=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let y=!1;t.isWebGLRenderer===!0?y=t.state.buffers.depth.getReversed():y=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,u),t.setRenderTarget(s,1,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),t.setRenderTarget(s,2,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),t.setRenderTarget(s,3,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,4,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,g),s.texture.generateMipmaps=L,t.setRenderTarget(s,5,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,x),t.setRenderTarget(v,p,b),t.xr.enabled=A,s.texture.needsPMREMUpdate=!0}}class dE extends ii{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const ux=new on;class hE{constructor(t,i,s=0,l=1/0){this.ray=new cm(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new om,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,i.projectionMatrix.elements[14]).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Vt("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return ux.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ux),this}intersectObject(t,i=!0,s=[]){return qp(t,this,s,i),s.sort(fx),s}intersectObjects(t,i=!0,s=[]){for(let l=0,u=t.length;l<u;l++)qp(t[l],this,s,i);return s.sort(fx),s}}function fx(o,t){return o.distance-t.distance}function qp(o,t,i,s){let l=!0;if(o.layers.test(t.layers)&&o.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const u=o.children;for(let d=0,h=u.length;d<h;d++)qp(u[d],t,i,!0)}}const ym=class ym{constructor(t,i,s,l){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let s=0;s<4;s++)this.elements[s]=t[s+i];return this}set(t,i,s,l){const u=this.elements;return u[0]=t,u[2]=i,u[1]=s,u[3]=l,this}};ym.prototype.isMatrix2=!0;let dx=ym;function hx(o,t,i,s){const l=pE(s);switch(i){case iS:return o*t;case sS:return o*t/l.components*l.byteLength;case em:return o*t/l.components*l.byteLength;case ir:return o*t*2/l.components*l.byteLength;case tm:return o*t*2/l.components*l.byteLength;case aS:return o*t*3/l.components*l.byteLength;case Xi:return o*t*4/l.components*l.byteLength;case nm:return o*t*4/l.components*l.byteLength;case Du:case Uu:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Lu:case Ou:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case gp:case _p:return Math.max(o,16)*Math.max(t,8)/4;case mp:case vp:return Math.max(o,8)*Math.max(t,8)/2;case xp:case Sp:case Mp:case bp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case yp:case Iu:case Ep:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Tp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Ap:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case wp:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Rp:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case Cp:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Np:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Dp:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Up:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case Lp:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case Op:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Pp:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Ip:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case zp:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Bp:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Fp:case Hp:case Gp:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Vp:case kp:return Math.ceil(o/4)*Math.ceil(t/4)*8;case zu:case Xp:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function pE(o){switch(o){case xi:case $x:return{byteLength:1,components:1};case Nl:case eS:case ha:return{byteLength:2,components:1};case Jp:case $p:return{byteLength:2,components:4};case da:case Qp:case ca:return{byteLength:4,components:1};case tS:case nS:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kp}}));typeof window<"u"&&(window.__THREE__?ht("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function mS(){let o=null,t=!1,i=null,s=null;function l(u,d){s=o.requestAnimationFrame(l),i(u,d)}return{start:function(){t!==!0&&i!==null&&o!==null&&(s=o.requestAnimationFrame(l),t=!0)},stop:function(){o!==null&&o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function mE(o){const t=new WeakMap;function i(h,m){const g=h.array,x=h.usage,v=g.byteLength,p=o.createBuffer();o.bindBuffer(m,p),o.bufferData(m,g,x),h.onUploadCallback();let b;if(g instanceof Float32Array)b=o.FLOAT;else if(typeof Float16Array<"u"&&g instanceof Float16Array)b=o.HALF_FLOAT;else if(g instanceof Uint16Array)h.isFloat16BufferAttribute?b=o.HALF_FLOAT:b=o.UNSIGNED_SHORT;else if(g instanceof Int16Array)b=o.SHORT;else if(g instanceof Uint32Array)b=o.UNSIGNED_INT;else if(g instanceof Int32Array)b=o.INT;else if(g instanceof Int8Array)b=o.BYTE;else if(g instanceof Uint8Array)b=o.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)b=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:p,type:b,bytesPerElement:g.BYTES_PER_ELEMENT,version:h.version,size:v}}function s(h,m,g){const x=m.array,v=m.updateRanges;if(o.bindBuffer(g,h),v.length===0)o.bufferSubData(g,0,x);else{v.sort((b,A)=>b.start-A.start);let p=0;for(let b=1;b<v.length;b++){const A=v[p],L=v[b];L.start<=A.start+A.count+1?A.count=Math.max(A.count,L.start+L.count-A.start):(++p,v[p]=L)}v.length=p+1;for(let b=0,A=v.length;b<A;b++){const L=v[b];o.bufferSubData(g,L.start*x.BYTES_PER_ELEMENT,x,L.start,L.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(o.deleteBuffer(m.buffer),t.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const x=t.get(h);(!x||x.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const g=t.get(h);if(g===void 0)t.set(h,i(h,m));else if(g.version<h.version){if(g.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(g.buffer,h,m),g.version=h.version}}return{get:l,remove:u,update:d}}var gE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vE=`#ifdef USE_ALPHAHASH
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
#endif`,_E=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,SE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ME=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,bE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,EE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,TE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,AE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,RE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,CE=`#ifdef USE_IRIDESCENCE
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
#endif`,NE=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,DE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,UE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,LE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,OE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,PE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,IE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,zE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,BE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,FE=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,HE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,GE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,VE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,XE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,WE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qE="gl_FragColor = linearToOutputTexel( gl_FragColor );",YE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ZE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,KE=`#ifdef USE_ENVMAP
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
#endif`,QE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,JE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$E=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,eT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,iT=`#ifdef USE_GRADIENTMAP
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
}`,aT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,oT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif
#include <lightprobes_pars_fragment>`,lT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,cT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,pT=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,mT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,gT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,vT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_T=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,xT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ST=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,MT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ET=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,TT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,AT=`#if defined( USE_POINTS_UV )
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
#endif`,wT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,RT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,CT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,NT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,DT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,UT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,LT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,OT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,PT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,IT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,FT=`#ifdef USE_NORMALMAP
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
#endif`,HT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,GT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,VT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,XT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,WT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,qT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,YT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ZT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,KT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,QT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,JT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,$T=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,eA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,tA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,nA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,iA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,aA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sA=`#ifdef USE_SKINNING
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
#endif`,rA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,oA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cA=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,uA=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,fA=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,dA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_A=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,bA=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,EA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,TA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,AA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RA=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,CA=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,NA=`#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,DA=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,UA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,LA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,OA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,PA=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,IA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,zA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,BA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,FA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,HA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,GA=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,kA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,XA=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,WA=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,qA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,YA=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,jA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,ZA=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Tt={alphahash_fragment:gE,alphahash_pars_fragment:vE,alphamap_fragment:_E,alphamap_pars_fragment:xE,alphatest_fragment:SE,alphatest_pars_fragment:yE,aomap_fragment:ME,aomap_pars_fragment:bE,batching_pars_vertex:EE,batching_vertex:TE,begin_vertex:AE,beginnormal_vertex:wE,bsdfs:RE,iridescence_fragment:CE,bumpmap_pars_fragment:NE,clipping_planes_fragment:DE,clipping_planes_pars_fragment:UE,clipping_planes_pars_vertex:LE,clipping_planes_vertex:OE,color_fragment:PE,color_pars_fragment:IE,color_pars_vertex:zE,color_vertex:BE,common:FE,cube_uv_reflection_fragment:HE,defaultnormal_vertex:GE,displacementmap_pars_vertex:VE,displacementmap_vertex:kE,emissivemap_fragment:XE,emissivemap_pars_fragment:WE,colorspace_fragment:qE,colorspace_pars_fragment:YE,envmap_fragment:jE,envmap_common_pars_fragment:ZE,envmap_pars_fragment:KE,envmap_pars_vertex:QE,envmap_physical_pars_fragment:lT,envmap_vertex:JE,fog_vertex:$E,fog_pars_vertex:eT,fog_fragment:tT,fog_pars_fragment:nT,gradientmap_pars_fragment:iT,lightmap_pars_fragment:aT,lights_lambert_fragment:sT,lights_lambert_pars_fragment:rT,lights_pars_begin:oT,lights_toon_fragment:cT,lights_toon_pars_fragment:uT,lights_phong_fragment:fT,lights_phong_pars_fragment:dT,lights_physical_fragment:hT,lights_physical_pars_fragment:pT,lights_fragment_begin:mT,lights_fragment_maps:gT,lights_fragment_end:vT,lightprobes_pars_fragment:_T,logdepthbuf_fragment:xT,logdepthbuf_pars_fragment:ST,logdepthbuf_pars_vertex:yT,logdepthbuf_vertex:MT,map_fragment:bT,map_pars_fragment:ET,map_particle_fragment:TT,map_particle_pars_fragment:AT,metalnessmap_fragment:wT,metalnessmap_pars_fragment:RT,morphinstance_vertex:CT,morphcolor_vertex:NT,morphnormal_vertex:DT,morphtarget_pars_vertex:UT,morphtarget_vertex:LT,normal_fragment_begin:OT,normal_fragment_maps:PT,normal_pars_fragment:IT,normal_pars_vertex:zT,normal_vertex:BT,normalmap_pars_fragment:FT,clearcoat_normal_fragment_begin:HT,clearcoat_normal_fragment_maps:GT,clearcoat_pars_fragment:VT,iridescence_pars_fragment:kT,opaque_fragment:XT,packing:WT,premultiplied_alpha_fragment:qT,project_vertex:YT,dithering_fragment:jT,dithering_pars_fragment:ZT,roughnessmap_fragment:KT,roughnessmap_pars_fragment:QT,shadowmap_pars_fragment:JT,shadowmap_pars_vertex:$T,shadowmap_vertex:eA,shadowmask_pars_fragment:tA,skinbase_vertex:nA,skinning_pars_vertex:iA,skinning_vertex:aA,skinnormal_vertex:sA,specularmap_fragment:rA,specularmap_pars_fragment:oA,tonemapping_fragment:lA,tonemapping_pars_fragment:cA,transmission_fragment:uA,transmission_pars_fragment:fA,uv_pars_fragment:dA,uv_pars_vertex:hA,uv_vertex:pA,worldpos_vertex:mA,background_vert:gA,background_frag:vA,backgroundCube_vert:_A,backgroundCube_frag:xA,cube_vert:SA,cube_frag:yA,depth_vert:MA,depth_frag:bA,distance_vert:EA,distance_frag:TA,equirect_vert:AA,equirect_frag:wA,linedashed_vert:RA,linedashed_frag:CA,meshbasic_vert:NA,meshbasic_frag:DA,meshlambert_vert:UA,meshlambert_frag:LA,meshmatcap_vert:OA,meshmatcap_frag:PA,meshnormal_vert:IA,meshnormal_frag:zA,meshphong_vert:BA,meshphong_frag:FA,meshphysical_vert:HA,meshphysical_frag:GA,meshtoon_vert:VA,meshtoon_frag:kA,points_vert:XA,points_frag:WA,shadow_vert:qA,shadow_frag:YA,sprite_vert:jA,sprite_frag:ZA},Ze={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new St},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new St}},envmap:{envMap:{value:null},envMapRotation:{value:new St},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new St}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new St}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new St},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new St},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new St},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new St}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new St}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new St}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new oe},probesMax:{value:new oe},probesResolution:{value:new oe}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0},uvTransform:{value:new St}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new St},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0}}},la={basic:{uniforms:Kn([Ze.common,Ze.specularmap,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.fog]),vertexShader:Tt.meshbasic_vert,fragmentShader:Tt.meshbasic_frag},lambert:{uniforms:Kn([Ze.common,Ze.specularmap,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.fog,Ze.lights,{emissive:{value:new Ot(0)},envMapIntensity:{value:1}}]),vertexShader:Tt.meshlambert_vert,fragmentShader:Tt.meshlambert_frag},phong:{uniforms:Kn([Ze.common,Ze.specularmap,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.fog,Ze.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphong_vert,fragmentShader:Tt.meshphong_frag},standard:{uniforms:Kn([Ze.common,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.roughnessmap,Ze.metalnessmap,Ze.fog,Ze.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag},toon:{uniforms:Kn([Ze.common,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.gradientmap,Ze.fog,Ze.lights,{emissive:{value:new Ot(0)}}]),vertexShader:Tt.meshtoon_vert,fragmentShader:Tt.meshtoon_frag},matcap:{uniforms:Kn([Ze.common,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.fog,{matcap:{value:null}}]),vertexShader:Tt.meshmatcap_vert,fragmentShader:Tt.meshmatcap_frag},points:{uniforms:Kn([Ze.points,Ze.fog]),vertexShader:Tt.points_vert,fragmentShader:Tt.points_frag},dashed:{uniforms:Kn([Ze.common,Ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Tt.linedashed_vert,fragmentShader:Tt.linedashed_frag},depth:{uniforms:Kn([Ze.common,Ze.displacementmap]),vertexShader:Tt.depth_vert,fragmentShader:Tt.depth_frag},normal:{uniforms:Kn([Ze.common,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,{opacity:{value:1}}]),vertexShader:Tt.meshnormal_vert,fragmentShader:Tt.meshnormal_frag},sprite:{uniforms:Kn([Ze.sprite,Ze.fog]),vertexShader:Tt.sprite_vert,fragmentShader:Tt.sprite_frag},background:{uniforms:{uvTransform:{value:new St},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Tt.background_vert,fragmentShader:Tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new St}},vertexShader:Tt.backgroundCube_vert,fragmentShader:Tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Tt.cube_vert,fragmentShader:Tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Tt.equirect_vert,fragmentShader:Tt.equirect_frag},distance:{uniforms:Kn([Ze.common,Ze.displacementmap,{referencePosition:{value:new oe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Tt.distance_vert,fragmentShader:Tt.distance_frag},shadow:{uniforms:Kn([Ze.lights,Ze.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:Tt.shadow_vert,fragmentShader:Tt.shadow_frag}};la.physical={uniforms:Kn([la.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new St},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new St},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new St},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new St},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new St},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new St},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new St},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new St},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new St},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new St},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new St},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new St}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag};const Ru={r:0,b:0,g:0},KA=new on,gS=new St;gS.set(-1,0,0,0,1,0,0,0,1);function QA(o,t,i,s,l,u){const d=new Ot(0);let h=l===!0?0:1,m,g,x=null,v=0,p=null;function b(N){let F=N.isScene===!0?N.background:null;if(F&&F.isTexture){const R=N.backgroundBlurriness>0;F=t.get(F,R)}return F}function A(N){let F=!1;const R=b(N);R===null?y(d,h):R&&R.isColor&&(y(R,1),F=!0);const D=o.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,u):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(o.autoClear||F)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function L(N,F){const R=b(F);R&&(R.isCubeTexture||R.mapping===Wu)?(g===void 0&&(g=new xt(new mn(1,1,1),new pa({name:"BackgroundCubeMaterial",uniforms:go(la.backgroundCube.uniforms),vertexShader:la.backgroundCube.vertexShader,fragmentShader:la.backgroundCube.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(D,C,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(g)),g.material.uniforms.envMap.value=R,g.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(KA.makeRotationFromEuler(F.backgroundRotation)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&g.material.uniforms.backgroundRotation.value.premultiply(gS),g.material.toneMapped=Ht.getTransfer(R.colorSpace)!==Qt,(x!==R||v!==R.version||p!==o.toneMapping)&&(g.material.needsUpdate=!0,x=R,v=R.version,p=o.toneMapping),g.layers.enableAll(),N.unshift(g,g.geometry,g.material,0,0,null)):R&&R.isTexture&&(m===void 0&&(m=new xt(new ar(2,2),new pa({name:"BackgroundMaterial",uniforms:go(la.background.uniforms),vertexShader:la.background.vertexShader,fragmentShader:la.background.fragmentShader,side:tr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=R,m.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,m.material.toneMapped=Ht.getTransfer(R.colorSpace)!==Qt,R.matrixAutoUpdate===!0&&R.updateMatrix(),m.material.uniforms.uvTransform.value.copy(R.matrix),(x!==R||v!==R.version||p!==o.toneMapping)&&(m.material.needsUpdate=!0,x=R,v=R.version,p=o.toneMapping),m.layers.enableAll(),N.unshift(m,m.geometry,m.material,0,0,null))}function y(N,F){N.getRGB(Ru,hS(o)),i.buffers.color.setClear(Ru.r,Ru.g,Ru.b,F,u)}function S(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(N,F=1){d.set(N),h=F,y(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(N){h=N,y(d,h)},render:A,addToRenderList:L,dispose:S}}function JA(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=p(null);let u=l,d=!1;function h(W,Y,ce,$,te){let Z=!1;const K=v(W,$,ce,Y);u!==K&&(u=K,g(u.object)),Z=b(W,$,ce,te),Z&&A(W,$,ce,te),te!==null&&t.update(te,o.ELEMENT_ARRAY_BUFFER),(Z||d)&&(d=!1,R(W,Y,ce,$),te!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(te).buffer))}function m(){return o.createVertexArray()}function g(W){return o.bindVertexArray(W)}function x(W){return o.deleteVertexArray(W)}function v(W,Y,ce,$){const te=$.wireframe===!0;let Z=s[Y.id];Z===void 0&&(Z={},s[Y.id]=Z);const K=W.isInstancedMesh===!0?W.id:0;let ge=Z[K];ge===void 0&&(ge={},Z[K]=ge);let le=ge[ce.id];le===void 0&&(le={},ge[ce.id]=le);let O=le[te];return O===void 0&&(O=p(m()),le[te]=O),O}function p(W){const Y=[],ce=[],$=[];for(let te=0;te<i;te++)Y[te]=0,ce[te]=0,$[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:ce,attributeDivisors:$,object:W,attributes:{},index:null}}function b(W,Y,ce,$){const te=u.attributes,Z=Y.attributes;let K=0;const ge=ce.getAttributes();for(const le in ge)if(ge[le].location>=0){const P=te[le];let be=Z[le];if(be===void 0&&(le==="instanceMatrix"&&W.instanceMatrix&&(be=W.instanceMatrix),le==="instanceColor"&&W.instanceColor&&(be=W.instanceColor)),P===void 0||P.attribute!==be||be&&P.data!==be.data)return!0;K++}return u.attributesNum!==K||u.index!==$}function A(W,Y,ce,$){const te={},Z=Y.attributes;let K=0;const ge=ce.getAttributes();for(const le in ge)if(ge[le].location>=0){let P=Z[le];P===void 0&&(le==="instanceMatrix"&&W.instanceMatrix&&(P=W.instanceMatrix),le==="instanceColor"&&W.instanceColor&&(P=W.instanceColor));const be={};be.attribute=P,P&&P.data&&(be.data=P.data),te[le]=be,K++}u.attributes=te,u.attributesNum=K,u.index=$}function L(){const W=u.newAttributes;for(let Y=0,ce=W.length;Y<ce;Y++)W[Y]=0}function y(W){S(W,0)}function S(W,Y){const ce=u.newAttributes,$=u.enabledAttributes,te=u.attributeDivisors;ce[W]=1,$[W]===0&&(o.enableVertexAttribArray(W),$[W]=1),te[W]!==Y&&(o.vertexAttribDivisor(W,Y),te[W]=Y)}function N(){const W=u.newAttributes,Y=u.enabledAttributes;for(let ce=0,$=Y.length;ce<$;ce++)Y[ce]!==W[ce]&&(o.disableVertexAttribArray(ce),Y[ce]=0)}function F(W,Y,ce,$,te,Z,K){K===!0?o.vertexAttribIPointer(W,Y,ce,te,Z):o.vertexAttribPointer(W,Y,ce,$,te,Z)}function R(W,Y,ce,$){L();const te=$.attributes,Z=ce.getAttributes(),K=Y.defaultAttributeValues;for(const ge in Z){const le=Z[ge];if(le.location>=0){let O=te[ge];if(O===void 0&&(ge==="instanceMatrix"&&W.instanceMatrix&&(O=W.instanceMatrix),ge==="instanceColor"&&W.instanceColor&&(O=W.instanceColor)),O!==void 0){const P=O.normalized,be=O.itemSize,Ce=t.get(O);if(Ce===void 0)continue;const B=Ce.buffer,X=Ce.type,se=Ce.bytesPerElement,H=X===o.INT||X===o.UNSIGNED_INT||O.gpuType===Qp;if(O.isInterleavedBufferAttribute){const ee=O.data,Se=ee.stride,De=O.offset;if(ee.isInstancedInterleavedBuffer){for(let de=0;de<le.locationSize;de++)S(le.location+de,ee.meshPerAttribute);W.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let de=0;de<le.locationSize;de++)y(le.location+de);o.bindBuffer(o.ARRAY_BUFFER,B);for(let de=0;de<le.locationSize;de++)F(le.location+de,be/le.locationSize,X,P,Se*se,(De+be/le.locationSize*de)*se,H)}else{if(O.isInstancedBufferAttribute){for(let ee=0;ee<le.locationSize;ee++)S(le.location+ee,O.meshPerAttribute);W.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let ee=0;ee<le.locationSize;ee++)y(le.location+ee);o.bindBuffer(o.ARRAY_BUFFER,B);for(let ee=0;ee<le.locationSize;ee++)F(le.location+ee,be/le.locationSize,X,P,be*se,be/le.locationSize*ee*se,H)}}else if(K!==void 0){const P=K[ge];if(P!==void 0)switch(P.length){case 2:o.vertexAttrib2fv(le.location,P);break;case 3:o.vertexAttrib3fv(le.location,P);break;case 4:o.vertexAttrib4fv(le.location,P);break;default:o.vertexAttrib1fv(le.location,P)}}}}N()}function D(){U();for(const W in s){const Y=s[W];for(const ce in Y){const $=Y[ce];for(const te in $){const Z=$[te];for(const K in Z)x(Z[K].object),delete Z[K];delete $[te]}}delete s[W]}}function C(W){if(s[W.id]===void 0)return;const Y=s[W.id];for(const ce in Y){const $=Y[ce];for(const te in $){const Z=$[te];for(const K in Z)x(Z[K].object),delete Z[K];delete $[te]}}delete s[W.id]}function I(W){for(const Y in s){const ce=s[Y];for(const $ in ce){const te=ce[$];if(te[W.id]===void 0)continue;const Z=te[W.id];for(const K in Z)x(Z[K].object),delete Z[K];delete te[W.id]}}}function M(W){for(const Y in s){const ce=s[Y],$=W.isInstancedMesh===!0?W.id:0,te=ce[$];if(te!==void 0){for(const Z in te){const K=te[Z];for(const ge in K)x(K[ge].object),delete K[ge];delete te[Z]}delete ce[$],Object.keys(ce).length===0&&delete s[Y]}}}function U(){k(),d=!0,u!==l&&(u=l,g(u.object))}function k(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:U,resetDefaultState:k,dispose:D,releaseStatesOfGeometry:C,releaseStatesOfObject:M,releaseStatesOfProgram:I,initAttributes:L,enableAttribute:y,disableUnusedAttributes:N}}function $A(o,t,i){let s;function l(m){s=m}function u(m,g){o.drawArrays(s,m,g),i.update(g,s,1)}function d(m,g,x){x!==0&&(o.drawArraysInstanced(s,m,g,x),i.update(g,s,x))}function h(m,g,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,g,0,x);let p=0;for(let b=0;b<x;b++)p+=g[b];i.update(p,s,1)}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h}function e2(o,t,i,s){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(I){return!(I!==Xi&&s.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(I){const M=I===ha&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==xi&&I!==ca&&!M&&s.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE))}function m(I){if(I==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let g=i.precision!==void 0?i.precision:"highp";const x=m(g);x!==g&&(ht("WebGLRenderer:",g,"not supported, using",x,"instead."),g=x);const v=i.logarithmicDepthBuffer===!0,p=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&p===!1&&ht("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const b=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),L=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),S=o.getParameter(o.MAX_VERTEX_ATTRIBS),N=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),F=o.getParameter(o.MAX_VARYING_VECTORS),R=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),D=o.getParameter(o.MAX_SAMPLES),C=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:g,logarithmicDepthBuffer:v,reversedDepthBuffer:p,maxTextures:b,maxVertexTextures:A,maxTextureSize:L,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:N,maxVaryings:F,maxFragmentUniforms:R,maxSamples:D,samples:C}}function t2(o){const t=this;let i=null,s=0,l=!1,u=!1;const d=new Pa,h=new St,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,p){const b=v.length!==0||p||s!==0||l;return l=p,s=v.length,b},this.beginShadows=function(){u=!0,x(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,p){i=x(v,p,0)},this.setState=function(v,p,b){const A=v.clippingPlanes,L=v.clipIntersection,y=v.clipShadows,S=o.get(v);if(!l||A===null||A.length===0||u&&!y)u?x(null):g();else{const N=u?0:s,F=N*4;let R=S.clippingState||null;m.value=R,R=x(A,p,F,b);for(let D=0;D!==F;++D)R[D]=i[D];S.clippingState=R,this.numIntersection=L?this.numPlanes:0,this.numPlanes+=N}};function g(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function x(v,p,b,A){const L=v!==null?v.length:0;let y=null;if(L!==0){if(y=m.value,A!==!0||y===null){const S=b+L*4,N=p.matrixWorldInverse;h.getNormalMatrix(N),(y===null||y.length<S)&&(y=new Float32Array(S));for(let F=0,R=b;F!==L;++F,R+=4)d.copy(v[F]).applyMatrix4(N,h),d.normal.toArray(y,R),y[R+3]=d.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=L,t.numIntersection=0,y}}const co=4,n2=6,i2=20,a2=256,Ml=new pm,px=new Ot;let tp=null,np=0,ip=0,ap=!1;const s2=new oe,Qs=new oe;class mx{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,u={}){const{size:d=256,position:h=s2}=u;tp=this._renderer.getRenderTarget(),np=this._renderer.getActiveCubeFace(),ip=this._renderer.getActiveMipmapLevel(),ap=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_x(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(tp,np,ip),this._renderer.xr.enabled=ap,t.scissorTest=!1,ro(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===nr||t.mapping===ho?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),tp=this._renderer.getRenderTarget(),np=this._renderer.getActiveCubeFace(),ip=this._renderer.getActiveMipmapLevel(),ap=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:ha,format:Xi,colorSpace:Bu,depthBuffer:!1},l=gx(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gx(t,i,s);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=r2(u)),this._blurMaterial=l2(u,t,i),this._ggxMaterial=o2(u,t,i)}return l}_compileMaterial(t){const i=new xt(new si,t);this._renderer.compile(i,Ml)}_sceneToCubeUV(t,i,s,l,u){const m=new ii(90,1,i,s),g=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],v=this._renderer,p=v.autoClear,b=v.toneMapping;v.getClearColor(px),v.toneMapping=fa,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new xt(new mn,new mo({name:"PMREM.Background",side:ai,depthWrite:!1,depthTest:!1})));const L=this._backgroundBox,y=L.material;let S=!1;const N=t.background;N?N.isColor&&(y.color.copy(N),t.background=null,S=!0):(y.color.copy(px),S=!0);for(let F=0;F<6;F++){const R=F%3;R===0?(m.up.set(0,g[F],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+x[F],u.y,u.z)):R===1?(m.up.set(0,0,g[F]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+x[F],u.z)):(m.up.set(0,g[F],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+x[F]));const D=this._cubeSize;ro(l,R*D,F>2?D:0,D,D),v.setRenderTarget(l),S&&v.render(L,m),v.render(t,m)}v.toneMapping=b,v.autoClear=p,t.background=N}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===nr||t.mapping===ho;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=_x()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vx());const u=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=u;const h=u.uniforms;h.envMap.value=t;const m=this._cubeSize;ro(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(d,Ml)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(t,u-1,u);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,u=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[s];h.material=d;const m=d.uniforms,g=s/(this._lodMeshes.length-1),x=i/(this._lodMeshes.length-1),v=Math.sqrt(g*g-x*x),p=g*1.25,b=v*p,{_lodMax:A}=this,L=this._sizeLods[s],y=3*L*(s>A-co?s-A+co:0),S=4*(this._cubeSize-L);m.envMap.value=t.texture,m.roughness.value=b,m.mipInt.value=A-i,ro(u,y,S,3*L,2*L),l.setRenderTarget(u),l.render(h,Ml),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=A-s,ro(t,y,S,3*L,2*L),l.setRenderTarget(t),l.render(h,Ml)}_blur(t,i,s,l){const u=this._pingPongRenderTarget,d=Math.min(l,Math.PI)/Math.SQRT2;this._blurPass(t,u,i,s,d),this._blurPass(u,t,s,s,d)}_blurPass(t,i,s,l,u){const d=this._renderer,h=this._blurMaterial,m=this._lodMeshes[l];m.material=h;const g=h.uniforms;g.envMap.value=t.texture,g.sigma.value=u,g.mipInt.value=this._lodMax-s;const x=this._sizeLods[l],v=3*x*(l>this._lodMax-co?l-this._lodMax+co:0),p=4*(this._cubeSize-x);ro(i,v,p,3*x,2*x),d.setRenderTarget(i),d.render(m,Ml)}}function r2(o){const t=[],i=[];let s=o;const l=o-co+1+n2;for(let u=0;u<l;u++){const d=Math.pow(2,s);t.push(d);const h=1/(d-2),m=-h,g=1+h,x=[m,m,g,m,g,g,m,m,g,g,m,g],v=6,p=6,b=3,A=new Float32Array(b*p*v),L=new Float32Array(b*p*v);for(let S=0;S<v;S++){const N=S%3*2/3-1,F=S>2?0:-1,R=[N,F,0,N+2/3,F,0,N+2/3,F+1,0,N,F,0,N+2/3,F+1,0,N,F+1,0];A.set(R,b*p*S);for(let D=0;D<p;D++){const C=x[D*2]*2-1,I=x[D*2+1]*2-1;S===0?Qs.set(1,I,C):S===1?Qs.set(-C,1,-I):S===2?Qs.set(-C,I,1):S===3?Qs.set(-1,I,-C):S===4?Qs.set(-C,-1,I):Qs.set(C,I,-1),Qs.toArray(L,(S*p+D)*b)}}const y=new si;y.setAttribute("position",new Ha(A,b)),y.setAttribute("outputDirection",new Ha(L,b)),i.push(new xt(y,null)),s>co&&s--}return{lodMeshes:i,sizeLods:t}}function gx(o,t,i){const s=new Wi(o,t,i);return s.texture.mapping=Wu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function ro(o,t,i,s,l){o.viewport.set(t,i,s,l),o.scissor.set(t,i,s,l)}function o2(o,t,i){return new pa({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:a2,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Zu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ba,depthTest:!1,depthWrite:!1})}function l2(o,t,i){return new pa({name:"SphericalGaussianBlur",defines:{SAMPLES:i2,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Zu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Ba,depthTest:!1,depthWrite:!1})}function vx(){return new pa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zu(),fragmentShader:`

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
		`,blending:Ba,depthTest:!1,depthWrite:!1})}function _x(){return new pa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ba,depthTest:!1,depthWrite:!1})}function Zu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class vS extends Wi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new fS(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new mn(5,5,5),u=new pa({name:"CubemapFromEquirect",uniforms:go(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:ai,blending:Ba});u.uniforms.tEquirect.value=i;const d=new xt(l,u),h=i.minFilter;return i.minFilter===Js&&(i.minFilter=Vn),new fE(1,10,this).update(t,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const u=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,s,l);t.setRenderTarget(u)}}function c2(o){let t=new WeakMap,i=new WeakMap,s=null;function l(p,b=!1){return p==null?null:b?d(p):u(p)}function u(p){if(p&&p.isTexture){const b=p.mapping;if(b===Ch||b===Nh)if(t.has(p)){const A=t.get(p).texture;return h(A,p.mapping)}else{const A=p.image;if(A&&A.height>0){const L=new vS(A.height);return L.fromEquirectangularTexture(o,p),t.set(p,L),p.addEventListener("dispose",g),h(L.texture,p.mapping)}else return null}}return p}function d(p){if(p&&p.isTexture){const b=p.mapping,A=b===Ch||b===Nh,L=b===nr||b===ho;if(A||L){let y=i.get(p);const S=y!==void 0?y.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==S)return s===null&&(s=new mx(o)),y=A?s.fromEquirectangular(p,y):s.fromCubemap(p,y),y.texture.pmremVersion=p.pmremVersion,i.set(p,y),y.texture;if(y!==void 0)return y.texture;{const N=p.image;return A&&N&&N.height>0||L&&N&&m(N)?(s===null&&(s=new mx(o)),y=A?s.fromEquirectangular(p):s.fromCubemap(p),y.texture.pmremVersion=p.pmremVersion,i.set(p,y),p.addEventListener("dispose",x),y.texture):null}}}return p}function h(p,b){return b===Ch?p.mapping=nr:b===Nh&&(p.mapping=ho),p}function m(p){let b=0;const A=6;for(let L=0;L<A;L++)p[L]!==void 0&&b++;return b===A}function g(p){const b=p.target;b.removeEventListener("dispose",g);const A=t.get(b);A!==void 0&&(t.delete(b),A.dispose())}function x(p){const b=p.target;b.removeEventListener("dispose",x);const A=i.get(b);A!==void 0&&(i.delete(b),A.dispose())}function v(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:v}}function u2(o){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=o.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&uo("WebGLRenderer: "+s+" extension not supported."),l}}}function f2(o,t,i,s){const l={},u=new WeakMap;function d(v){const p=v.target;p.index!==null&&t.remove(p.index);for(const A in p.attributes)t.remove(p.attributes[A]);p.removeEventListener("dispose",d),delete l[p.id];const b=u.get(p);b&&(t.remove(b),u.delete(p)),s.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,i.memory.geometries--}function h(v,p){return l[p.id]===!0||(p.addEventListener("dispose",d),l[p.id]=!0,i.memory.geometries++),p}function m(v){const p=v.attributes;for(const b in p)t.update(p[b],o.ARRAY_BUFFER)}function g(v){const p=[],b=v.index,A=v.attributes.position;let L=0;if(A===void 0)return;if(b!==null){const N=b.array;L=b.version;for(let F=0,R=N.length;F<R;F+=3){const D=N[F+0],C=N[F+1],I=N[F+2];p.push(D,C,C,I,I,D)}}else{const N=A.array;L=A.version;for(let F=0,R=N.length/3-1;F<R;F+=3){const D=F+0,C=F+1,I=F+2;p.push(D,C,C,I,I,D)}}const y=new(A.count>=65535?uS:cS)(p,1);y.version=L;const S=u.get(v);S&&t.remove(S),u.set(v,y)}function x(v){const p=u.get(v);if(p){const b=v.index;b!==null&&p.version<b.version&&g(v)}else g(v);return u.get(v)}return{get:h,update:m,getWireframeAttribute:x}}function d2(o,t,i){let s;function l(v){s=v}let u,d;function h(v){u=v.type,d=v.bytesPerElement}function m(v,p){o.drawElements(s,p,u,v*d),i.update(p,s,1)}function g(v,p,b){b!==0&&(o.drawElementsInstanced(s,p,u,v*d,b),i.update(p,s,b))}function x(v,p,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,p,0,u,v,0,b);let L=0;for(let y=0;y<b;y++)L+=p[y];i.update(L,s,1)}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=g,this.renderMultiDraw=x}function h2(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(u/3);break;case o.LINES:i.lines+=h*(u/2);break;case o.LINE_STRIP:i.lines+=h*(u-1);break;case o.LINE_LOOP:i.lines+=h*u;break;case o.POINTS:i.points+=h*u;break;default:Vt("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function p2(o,t,i){const s=new WeakMap,l=new cn;function u(d,h,m){const g=d.morphTargetInfluences,x=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=x!==void 0?x.length:0;let p=s.get(h);if(p===void 0||p.count!==v){let k=function(){M.dispose(),s.delete(h),h.removeEventListener("dispose",k)};var b=k;p!==void 0&&p.texture.dispose();const A=h.morphAttributes.position!==void 0,L=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],N=h.morphAttributes.normal||[],F=h.morphAttributes.color||[];let R=0;A===!0&&(R=1),L===!0&&(R=2),y===!0&&(R=3);let D=h.attributes.position.count*R,C=1;D>t.maxTextureSize&&(C=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const I=new Float32Array(D*C*4*v),M=new oS(I,D,C,v);M.type=ca,M.needsUpdate=!0;const U=R*4;for(let W=0;W<v;W++){const Y=S[W],ce=N[W],$=F[W],te=D*C*4*W;for(let Z=0;Z<Y.count;Z++){const K=Z*U;A===!0&&(l.fromBufferAttribute(Y,Z),I[te+K+0]=l.x,I[te+K+1]=l.y,I[te+K+2]=l.z,I[te+K+3]=0),L===!0&&(l.fromBufferAttribute(ce,Z),I[te+K+4]=l.x,I[te+K+5]=l.y,I[te+K+6]=l.z,I[te+K+7]=0),y===!0&&(l.fromBufferAttribute($,Z),I[te+K+8]=l.x,I[te+K+9]=l.y,I[te+K+10]=l.z,I[te+K+11]=$.itemSize===4?l.w:1)}}p={count:v,texture:M,size:new Nt(D,C)},s.set(h,p),h.addEventListener("dispose",k)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let A=0;for(let y=0;y<g.length;y++)A+=g[y];const L=h.morphTargetsRelative?1:1-A;m.getUniforms().setValue(o,"morphTargetBaseInfluence",L),m.getUniforms().setValue(o,"morphTargetInfluences",g)}m.getUniforms().setValue(o,"morphTargetsTexture",p.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",p.size)}return{update:u}}function m2(o,t,i,s,l){let u=new WeakMap;function d(g){const x=l.render.frame,v=g.geometry,p=t.get(g,v);if(u.get(p)!==x&&(t.update(p),u.set(p,x)),g.isInstancedMesh&&(g.hasEventListener("dispose",m)===!1&&g.addEventListener("dispose",m),u.get(g)!==x&&(i.update(g.instanceMatrix,o.ARRAY_BUFFER),g.instanceColor!==null&&i.update(g.instanceColor,o.ARRAY_BUFFER),u.set(g,x))),g.isSkinnedMesh){const b=g.skeleton;u.get(b)!==x&&(b.update(),u.set(b,x))}return p}function h(){u=new WeakMap}function m(g){const x=g.target;x.removeEventListener("dispose",m),s.releaseStatesOfObject(x),i.remove(x.instanceMatrix),x.instanceColor!==null&&i.remove(x.instanceColor)}return{update:d,dispose:h}}const g2={[Wx]:"LINEAR_TONE_MAPPING",[qx]:"REINHARD_TONE_MAPPING",[Yx]:"CINEON_TONE_MAPPING",[jx]:"ACES_FILMIC_TONE_MAPPING",[Kx]:"AGX_TONE_MAPPING",[Qx]:"NEUTRAL_TONE_MAPPING",[Zx]:"CUSTOM_TONE_MAPPING"};function v2(o,t,i,s,l,u){const d=new Wi(t,i,{type:o,depthBuffer:l,stencilBuffer:u,samples:s?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let h=null,m=null;const g=new si;g.setAttribute("position",new En([-1,3,0,-1,-1,0,3,-1,0],3)),g.setAttribute("uv",new En([0,2,0,0,2,0],2));const x=new eE({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),v=new xt(g,x),p=new pm(-1,1,1,-1,0,1);let b=null,A=null,L=!1,y,S=null,N=[],F=!1;this.setSize=function(R,D){d.setSize(R,D),h!==null&&h.setSize(R,D),m!==null&&m.setSize(R,D);for(let C=0;C<N.length;C++){const I=N[C];I.setSize&&I.setSize(R,D)}},this.setEffects=function(R){N=R,F=N.length>0&&N[0].isRenderPass===!0;const D=d.width,C=d.height;N.length>0&&h===null&&(h=new Wi(D,C,{type:ha,depthBuffer:!1,stencilBuffer:!1}),m=new Wi(D,C,{type:ha,depthBuffer:!1,stencilBuffer:!1}));for(let I=0;I<N.length;I++){const M=N[I];M.setSize&&M.setSize(D,C)}},this.begin=function(R,D){if(L||R.toneMapping===fa&&N.length===0)return!1;if(S=D,D!==null){const C=D.width,I=D.height;(d.width!==C||d.height!==I)&&this.setSize(C,I)}return F===!1&&R.setRenderTarget(d),y=R.toneMapping,R.toneMapping=fa,!0},this.hasRenderPass=function(){return F},this.end=function(R,D){R.toneMapping=y,L=!0;let C=d,I=h;for(let M=0;M<N.length;M++){const U=N[M];U.enabled!==!1&&(U.render(R,I,C,D),U.needsSwap!==!1&&(C=I,I=I===h?m:h))}if(b!==R.outputColorSpace||A!==R.toneMapping){b=R.outputColorSpace,A=R.toneMapping,x.defines={},Ht.getTransfer(b)===Qt&&(x.defines.SRGB_TRANSFER="");const M=g2[A];M&&(x.defines[M]=""),x.needsUpdate=!0}x.uniforms.tDiffuse.value=C.texture,R.setRenderTarget(S),R.render(v,p),S=null,L=!1},this.isCompositing=function(){return L},this.dispose=function(){d.dispose(),h!==null&&h.dispose(),m!==null&&m.dispose(),g.dispose(),x.dispose()}}const _S=new kn,Yp=new Ll(1,1),xS=new oS,SS=new C1,yS=new fS,xx=[],Sx=[],yx=new Float32Array(16),Mx=new Float32Array(9),bx=new Float32Array(4);function So(o,t,i){const s=o[0];if(s<=0||s>0)return o;const l=t*i;let u=xx[l];if(u===void 0&&(u=new Float32Array(l),xx[l]=u),t!==0){s.toArray(u,0);for(let d=1,h=0;d!==t;++d)h+=i,o[d].toArray(u,h)}return u}function Tn(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function An(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function Ku(o,t){let i=Sx[t];i===void 0&&(i=new Int32Array(t),Sx[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function _2(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function x2(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Tn(i,t))return;o.uniform2fv(this.addr,t),An(i,t)}}function S2(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Tn(i,t))return;o.uniform3fv(this.addr,t),An(i,t)}}function y2(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Tn(i,t))return;o.uniform4fv(this.addr,t),An(i,t)}}function M2(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(Tn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),An(i,t)}else{if(Tn(i,s))return;bx.set(s),o.uniformMatrix2fv(this.addr,!1,bx),An(i,s)}}function b2(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(Tn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),An(i,t)}else{if(Tn(i,s))return;Mx.set(s),o.uniformMatrix3fv(this.addr,!1,Mx),An(i,s)}}function E2(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(Tn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),An(i,t)}else{if(Tn(i,s))return;yx.set(s),o.uniformMatrix4fv(this.addr,!1,yx),An(i,s)}}function T2(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function A2(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Tn(i,t))return;o.uniform2iv(this.addr,t),An(i,t)}}function w2(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Tn(i,t))return;o.uniform3iv(this.addr,t),An(i,t)}}function R2(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Tn(i,t))return;o.uniform4iv(this.addr,t),An(i,t)}}function C2(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function N2(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Tn(i,t))return;o.uniform2uiv(this.addr,t),An(i,t)}}function D2(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Tn(i,t))return;o.uniform3uiv(this.addr,t),An(i,t)}}function U2(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Tn(i,t))return;o.uniform4uiv(this.addr,t),An(i,t)}}function L2(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(Yp.compareFunction=i.isReversedDepthBuffer()?am:im,u=Yp):u=_S,i.setTexture2D(t||u,l)}function O2(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||SS,l)}function P2(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||yS,l)}function I2(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||xS,l)}function z2(o){switch(o){case 5126:return _2;case 35664:return x2;case 35665:return S2;case 35666:return y2;case 35674:return M2;case 35675:return b2;case 35676:return E2;case 5124:case 35670:return T2;case 35667:case 35671:return A2;case 35668:case 35672:return w2;case 35669:case 35673:return R2;case 5125:return C2;case 36294:return N2;case 36295:return D2;case 36296:return U2;case 35678:case 36198:case 36298:case 36306:case 35682:return L2;case 35679:case 36299:case 36307:return O2;case 35680:case 36300:case 36308:case 36293:return P2;case 36289:case 36303:case 36311:case 36292:return I2}}function B2(o,t){o.uniform1fv(this.addr,t)}function F2(o,t){const i=So(t,this.size,2);o.uniform2fv(this.addr,i)}function H2(o,t){const i=So(t,this.size,3);o.uniform3fv(this.addr,i)}function G2(o,t){const i=So(t,this.size,4);o.uniform4fv(this.addr,i)}function V2(o,t){const i=So(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function k2(o,t){const i=So(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function X2(o,t){const i=So(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function W2(o,t){o.uniform1iv(this.addr,t)}function q2(o,t){o.uniform2iv(this.addr,t)}function Y2(o,t){o.uniform3iv(this.addr,t)}function j2(o,t){o.uniform4iv(this.addr,t)}function Z2(o,t){o.uniform1uiv(this.addr,t)}function K2(o,t){o.uniform2uiv(this.addr,t)}function Q2(o,t){o.uniform3uiv(this.addr,t)}function J2(o,t){o.uniform4uiv(this.addr,t)}function $2(o,t,i){const s=this.cache,l=t.length,u=Ku(i,l);Tn(s,u)||(o.uniform1iv(this.addr,u),An(s,u));let d;this.type===o.SAMPLER_2D_SHADOW?d=Yp:d=_S;for(let h=0;h!==l;++h)i.setTexture2D(t[h]||d,u[h])}function ew(o,t,i){const s=this.cache,l=t.length,u=Ku(i,l);Tn(s,u)||(o.uniform1iv(this.addr,u),An(s,u));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||SS,u[d])}function tw(o,t,i){const s=this.cache,l=t.length,u=Ku(i,l);Tn(s,u)||(o.uniform1iv(this.addr,u),An(s,u));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||yS,u[d])}function nw(o,t,i){const s=this.cache,l=t.length,u=Ku(i,l);Tn(s,u)||(o.uniform1iv(this.addr,u),An(s,u));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||xS,u[d])}function iw(o){switch(o){case 5126:return B2;case 35664:return F2;case 35665:return H2;case 35666:return G2;case 35674:return V2;case 35675:return k2;case 35676:return X2;case 5124:case 35670:return W2;case 35667:case 35671:return q2;case 35668:case 35672:return Y2;case 35669:case 35673:return j2;case 5125:return Z2;case 36294:return K2;case 36295:return Q2;case 36296:return J2;case 35678:case 36198:case 36298:case 36306:case 35682:return $2;case 35679:case 36299:case 36307:return ew;case 35680:case 36300:case 36308:case 36293:return tw;case 36289:case 36303:case 36311:case 36292:return nw}}class aw{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=z2(i.type)}}class sw{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=iw(i.type)}}class rw{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(t,i[h.id],s)}}}const sp=/(\w+)(\])?(\[|\.)?/g;function Ex(o,t){o.seq.push(t),o.map[t.id]=t}function ow(o,t,i){const s=o.name,l=s.length;for(sp.lastIndex=0;;){const u=sp.exec(s),d=sp.lastIndex;let h=u[1];const m=u[2]==="]",g=u[3];if(m&&(h=h|0),g===void 0||g==="["&&d+2===l){Ex(i,g===void 0?new aw(h,o,t):new sw(h,o,t));break}else{let v=i.map[h];v===void 0&&(v=new rw(h),Ex(i,v)),i=v}}}class Pu{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const h=t.getActiveUniform(i,d),m=t.getUniformLocation(i,h.name);ow(h,m,this)}const l=[],u=[];for(const d of this.seq)d.type===t.SAMPLER_2D_SHADOW||d.type===t.SAMPLER_CUBE_SHADOW||d.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(d):u.push(d);l.length>0&&(this.seq=l.concat(u))}setValue(t,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],m=s[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,u=t.length;l!==u;++l){const d=t[l];d.id in i&&s.push(d)}return s}}function Tx(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const lw=37297;let cw=0;function uw(o,t){const i=o.split(`
`),s=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let d=l;d<u;d++){const h=d+1;s.push(`${h===t?">":" "} ${h}: ${i[d]}`)}return s.join(`
`)}const Ax=new St;function fw(o){Ht._getMatrix(Ax,Ht.workingColorSpace,o);const t=`mat3( ${Ax.elements.map(i=>i.toFixed(4))} )`;switch(Ht.getTransfer(o)){case Fu:return[t,"LinearTransferOETF"];case Qt:return[t,"sRGBTransferOETF"];default:return ht("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function wx(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),u=(o.getShaderInfoLog(t)||"").trim();if(s&&u==="")return"";const d=/ERROR: 0:(\d+)/.exec(u);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+u+`

`+uw(o.getShaderSource(t),h)}else return u}function dw(o,t){const i=fw(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const hw={[Wx]:"Linear",[qx]:"Reinhard",[Yx]:"Cineon",[jx]:"ACESFilmic",[Kx]:"AgX",[Qx]:"Neutral",[Zx]:"Custom"};function pw(o,t){const i=hw[t];return i===void 0?(ht("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Cu=new oe;function mw(){Ht.getLuminanceCoefficients(Cu);const o=Cu.x.toFixed(4),t=Cu.y.toFixed(4),i=Cu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gw(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Tl).join(`
`)}function vw(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function _w(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=o.getActiveAttrib(t,l),d=u.name;let h=1;u.type===o.FLOAT_MAT2&&(h=2),u.type===o.FLOAT_MAT3&&(h=3),u.type===o.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:o.getAttribLocation(t,d),locationSize:h}}return i}function Tl(o){return o!==""}function Rx(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Cx(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const xw=/^[ \t]*#include +<([\w\d./]+)>/gm;function jp(o){return o.replace(xw,yw)}const Sw=new Map;function yw(o,t){let i=Tt[t];if(i===void 0){const s=Sw.get(t);if(s!==void 0)i=Tt[s],ht('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return jp(i)}const Mw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nx(o){return o.replace(Mw,bw)}function bw(o,t,i,s){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function Dx(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const Ew={[Nu]:"SHADOWMAP_TYPE_PCF",[El]:"SHADOWMAP_TYPE_VSM"};function Tw(o){return Ew[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Aw={[nr]:"ENVMAP_TYPE_CUBE",[ho]:"ENVMAP_TYPE_CUBE",[Wu]:"ENVMAP_TYPE_CUBE_UV"};function ww(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":Aw[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const Rw={[ho]:"ENVMAP_MODE_REFRACTION"};function Cw(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":Rw[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Nw={[Xx]:"ENVMAP_BLENDING_MULTIPLY",[Xb]:"ENVMAP_BLENDING_MIX",[Wb]:"ENVMAP_BLENDING_ADD"};function Dw(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":Nw[o.combine]||"ENVMAP_BLENDING_NONE"}function Uw(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function Lw(o,t,i,s){const l=o.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=Tw(i),g=ww(i),x=Cw(i),v=Dw(i),p=Uw(i),b=gw(i),A=vw(u),L=l.createProgram();let y,S,N=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Tl).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Tl).join(`
`),S.length>0&&(S+=`
`)):(y=[Dx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Tl).join(`
`),S=[Dx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.envMap?"#define "+x:"",i.envMap?"#define "+v:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==fa?"#define TONE_MAPPING":"",i.toneMapping!==fa?Tt.tonemapping_pars_fragment:"",i.toneMapping!==fa?pw("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Tt.colorspace_pars_fragment,dw("linearToOutputTexel",i.outputColorSpace),mw(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Tl).join(`
`)),d=jp(d),d=Rx(d,i),d=Cx(d,i),h=jp(h),h=Rx(h,i),h=Cx(h,i),d=Nx(d),h=Nx(h),i.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,y=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",i.glslVersion===F_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===F_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const F=N+y+d,R=N+S+h,D=Tx(l,l.VERTEX_SHADER,F),C=Tx(l,l.FRAGMENT_SHADER,R);l.attachShader(L,D),l.attachShader(L,C),i.index0AttributeName!==void 0?l.bindAttribLocation(L,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(L,0,"position"),l.linkProgram(L);function I(W){if(o.debug.checkShaderErrors){const Y=l.getProgramInfoLog(L)||"",ce=l.getShaderInfoLog(D)||"",$=l.getShaderInfoLog(C)||"",te=Y.trim(),Z=ce.trim(),K=$.trim();let ge=!0,le=!0;if(l.getProgramParameter(L,l.LINK_STATUS)===!1)if(ge=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,L,D,C);else{const O=wx(l,D,"vertex"),P=wx(l,C,"fragment");Vt("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(L,l.VALIDATE_STATUS)+`

Material Name: `+W.name+`
Material Type: `+W.type+`

Program Info Log: `+te+`
`+O+`
`+P)}else te!==""?ht("WebGLProgram: Program Info Log:",te):(Z===""||K==="")&&(le=!1);le&&(W.diagnostics={runnable:ge,programLog:te,vertexShader:{log:Z,prefix:y},fragmentShader:{log:K,prefix:S}})}l.deleteShader(D),l.deleteShader(C),M=new Pu(l,L),U=_w(l,L)}let M;this.getUniforms=function(){return M===void 0&&I(this),M};let U;this.getAttributes=function(){return U===void 0&&I(this),U};let k=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=l.getProgramParameter(L,lw)),k},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(L),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=cw++,this.cacheKey=t,this.usedTimes=1,this.program=L,this.vertexShader=D,this.fragmentShader=C,this}let Ow=0;class Pw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,i,s){const l=this._getShaderCacheForMaterial(t);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(s)===!1&&(l.add(s),s.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new Iw(t),i.set(t,s)),s}}class Iw{constructor(t){this.id=Ow++,this.code=t,this.usedTimes=0}}function zw(o){return o===ir||o===Iu||o===zu}function Bw(o,t,i,s,l,u){const d=new om,h=new Pw,m=new Set,g=[],x=new Map,v=s.logarithmicDepthBuffer;let p=s.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(M){return m.add(M),M===0?"uv":`uv${M}`}function L(M,U,k,W,Y,ce){const $=W.fog,te=Y.geometry,Z=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?W.environment:null,K=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,ge=t.get(M.envMap||Z,K),le=ge&&ge.mapping===Wu?ge.image.height:null,O=b[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&ht("WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const P=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,be=P!==void 0?P.length:0;let Ce=0;te.morphAttributes.position!==void 0&&(Ce=1),te.morphAttributes.normal!==void 0&&(Ce=2),te.morphAttributes.color!==void 0&&(Ce=3);let B,X,se,H;if(O){const yt=la[O];B=yt.vertexShader,X=yt.fragmentShader}else{B=M.vertexShader,X=M.fragmentShader;const yt=h.getVertexShaderStage(M),vt=h.getFragmentShaderStage(M);h.update(M,yt,vt),se=yt.id,H=vt.id}const ee=o.getRenderTarget(),Se=o.state.buffers.depth.getReversed(),De=Y.isInstancedMesh===!0,de=Y.isBatchedMesh===!0,Ne=!!M.map,st=!!M.matcap,ke=!!ge,it=!!M.aoMap,lt=!!M.lightMap,Pe=!!M.bumpMap&&M.wireframe===!1,Be=!!M.normalMap,ot=!!M.displacementMap,ft=!!M.emissiveMap,mt=!!M.metalnessMap,gt=!!M.roughnessMap,Q=M.anisotropy>0,Wt=M.clearcoat>0,Et=M.dispersion>0,z=M.retroreflectivity>0,E=M.iridescence>0,re=M.sheen>0,fe=M.transmission>0,xe=Q&&!!M.anisotropyMap,Ie=Wt&&!!M.clearcoatMap,Ge=Wt&&!!M.clearcoatNormalMap,ye=Wt&&!!M.clearcoatRoughnessMap,Ee=E&&!!M.iridescenceMap,Ue=E&&!!M.iridescenceThicknessMap,we=re&&!!M.sheenColorMap,Le=re&&!!M.sheenRoughnessMap,Fe=!!M.specularMap,Oe=!!M.specularColorMap,at=!!M.specularIntensityMap,ct=fe&&!!M.transmissionMap,J=fe&&!!M.thicknessMap,He=!!M.gradientMap,Me=!!M.alphaMap,ze=M.alphaTest>0,Ve=!!M.alphaHash,Re=!!M.extensions;let $e=fa;M.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&($e=o.toneMapping);const qe={shaderID:O,shaderType:M.type,shaderName:M.name,vertexShader:B,fragmentShader:X,defines:M.defines,customVertexShaderID:se,customFragmentShaderID:H,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:de,batchingColor:de&&Y._colorsTexture!==null,instancing:De,instancingColor:De&&Y.instanceColor!==null,instancingMorph:De&&Y.morphTexture!==null,outputColorSpace:ee===null?o.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Ht.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:Ne,matcap:st,envMap:ke,envMapMode:ke&&ge.mapping,envMapCubeUVHeight:le,aoMap:it,lightMap:lt,bumpMap:Pe,normalMap:Be,displacementMap:ot,emissiveMap:ft,normalMapObjectSpace:Be&&M.normalMapType===jb,normalMapTangentSpace:Be&&M.normalMapType===Wp,packedNormalMap:Be&&M.normalMapType===Wp&&zw(M.normalMap.format),metalnessMap:mt,roughnessMap:gt,anisotropy:Q,anisotropyMap:xe,clearcoat:Wt,clearcoatMap:Ie,clearcoatNormalMap:Ge,clearcoatRoughnessMap:ye,dispersion:Et,retroreflection:z,iridescence:E,iridescenceMap:Ee,iridescenceThicknessMap:Ue,sheen:re,sheenColorMap:we,sheenRoughnessMap:Le,specularMap:Fe,specularColorMap:Oe,specularIntensityMap:at,transmission:fe,transmissionMap:ct,thicknessMap:J,gradientMap:He,opaque:M.transparent===!1&&M.blending===Al&&M.alphaToCoverage===!1,alphaMap:Me,alphaTest:ze,alphaHash:Ve,combine:M.combine,mapUv:Ne&&A(M.map.channel),aoMapUv:it&&A(M.aoMap.channel),lightMapUv:lt&&A(M.lightMap.channel),bumpMapUv:Pe&&A(M.bumpMap.channel),normalMapUv:Be&&A(M.normalMap.channel),displacementMapUv:ot&&A(M.displacementMap.channel),emissiveMapUv:ft&&A(M.emissiveMap.channel),metalnessMapUv:mt&&A(M.metalnessMap.channel),roughnessMapUv:gt&&A(M.roughnessMap.channel),anisotropyMapUv:xe&&A(M.anisotropyMap.channel),clearcoatMapUv:Ie&&A(M.clearcoatMap.channel),clearcoatNormalMapUv:Ge&&A(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&A(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&A(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&A(M.iridescenceThicknessMap.channel),sheenColorMapUv:we&&A(M.sheenColorMap.channel),sheenRoughnessMapUv:Le&&A(M.sheenRoughnessMap.channel),specularMapUv:Fe&&A(M.specularMap.channel),specularColorMapUv:Oe&&A(M.specularColorMap.channel),specularIntensityMapUv:at&&A(M.specularIntensityMap.channel),transmissionMapUv:ct&&A(M.transmissionMap.channel),thicknessMapUv:J&&A(M.thicknessMap.channel),alphaMapUv:Me&&A(M.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(Be||Q),vertexNormals:!!te.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!te.attributes.uv&&(Ne||Me),fog:!!$,useFog:M.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||te.attributes.normal===void 0&&Be===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Se,skinning:Y.isSkinnedMesh===!0,hasPositionAttribute:te.attributes.position!==void 0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:Ce,numSunLights:U.sun.length,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numSunLightShadows:U.sunShadowMap.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numLightProbeGrids:ce.length,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:M.dithering,shadowMapEnabled:o.shadowMap.enabled&&k.length>0,shadowMapType:o.shadowMap.type,toneMapping:$e,decodeVideoTexture:Ne&&M.map.isVideoTexture===!0&&Ht.getTransfer(M.map.colorSpace)===Qt,decodeVideoTextureEmissive:ft&&M.emissiveMap.isVideoTexture===!0&&Ht.getTransfer(M.emissiveMap.colorSpace)===Qt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ia,flipSided:M.side===ai,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Re&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&M.extensions.multiDraw===!0||de)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return qe.vertexUv1s=m.has(1),qe.vertexUv2s=m.has(2),qe.vertexUv3s=m.has(3),m.clear(),qe}function y(M){const U=[];if(M.shaderID?U.push(M.shaderID):(U.push(M.customVertexShaderID),U.push(M.customFragmentShaderID)),M.defines!==void 0)for(const k in M.defines)U.push(k),U.push(M.defines[k]);return M.isRawShaderMaterial===!1&&(S(U,M),N(U,M),U.push(o.outputColorSpace)),U.push(M.customProgramCacheKey),U.join()}function S(M,U){M.push(U.precision),M.push(U.outputColorSpace),M.push(U.envMapMode),M.push(U.envMapCubeUVHeight),M.push(U.mapUv),M.push(U.alphaMapUv),M.push(U.lightMapUv),M.push(U.aoMapUv),M.push(U.bumpMapUv),M.push(U.normalMapUv),M.push(U.displacementMapUv),M.push(U.emissiveMapUv),M.push(U.metalnessMapUv),M.push(U.roughnessMapUv),M.push(U.anisotropyMapUv),M.push(U.clearcoatMapUv),M.push(U.clearcoatNormalMapUv),M.push(U.clearcoatRoughnessMapUv),M.push(U.iridescenceMapUv),M.push(U.iridescenceThicknessMapUv),M.push(U.sheenColorMapUv),M.push(U.sheenRoughnessMapUv),M.push(U.specularMapUv),M.push(U.specularColorMapUv),M.push(U.specularIntensityMapUv),M.push(U.transmissionMapUv),M.push(U.thicknessMapUv),M.push(U.combine),M.push(U.fogExp2),M.push(U.sizeAttenuation),M.push(U.morphTargetsCount),M.push(U.morphAttributeCount),M.push(U.numSunLights),M.push(U.numDirLights),M.push(U.numPointLights),M.push(U.numSpotLights),M.push(U.numSpotLightMaps),M.push(U.numHemiLights),M.push(U.numRectAreaLights),M.push(U.numSunLightShadows),M.push(U.numDirLightShadows),M.push(U.numPointLightShadows),M.push(U.numSpotLightShadows),M.push(U.numSpotLightShadowsWithMaps),M.push(U.numLightProbes),M.push(U.shadowMapType),M.push(U.toneMapping),M.push(U.numClippingPlanes),M.push(U.numClipIntersection),M.push(U.depthPacking)}function N(M,U){d.disableAll(),U.instancing&&d.enable(0),U.instancingColor&&d.enable(1),U.instancingMorph&&d.enable(2),U.matcap&&d.enable(3),U.envMap&&d.enable(4),U.normalMapObjectSpace&&d.enable(5),U.normalMapTangentSpace&&d.enable(6),U.clearcoat&&d.enable(7),U.iridescence&&d.enable(8),U.alphaTest&&d.enable(9),U.vertexColors&&d.enable(10),U.vertexAlphas&&d.enable(11),U.vertexUv1s&&d.enable(12),U.vertexUv2s&&d.enable(13),U.vertexUv3s&&d.enable(14),U.vertexTangents&&d.enable(15),U.anisotropy&&d.enable(16),U.alphaHash&&d.enable(17),U.batching&&d.enable(18),U.dispersion&&d.enable(19),U.retroreflection&&d.enable(24),U.batchingColor&&d.enable(20),U.gradientMap&&d.enable(21),U.packedNormalMap&&d.enable(22),U.vertexNormals&&d.enable(23),M.push(d.mask),d.disableAll(),U.fog&&d.enable(0),U.useFog&&d.enable(1),U.flatShading&&d.enable(2),U.logarithmicDepthBuffer&&d.enable(3),U.reversedDepthBuffer&&d.enable(4),U.skinning&&d.enable(5),U.morphTargets&&d.enable(6),U.morphNormals&&d.enable(7),U.morphColors&&d.enable(8),U.premultipliedAlpha&&d.enable(9),U.shadowMapEnabled&&d.enable(10),U.doubleSided&&d.enable(11),U.flipSided&&d.enable(12),U.useDepthPacking&&d.enable(13),U.dithering&&d.enable(14),U.transmission&&d.enable(15),U.sheen&&d.enable(16),U.opaque&&d.enable(17),U.pointsUvs&&d.enable(18),U.decodeVideoTexture&&d.enable(19),U.decodeVideoTextureEmissive&&d.enable(20),U.alphaToCoverage&&d.enable(21),U.numLightProbeGrids>0&&d.enable(22),U.hasPositionAttribute&&d.enable(23),M.push(d.mask)}function F(M){const U=b[M.type];let k;if(U){const W=la[U];k=Q1.clone(W.uniforms)}else k=M.uniforms;return k}function R(M,U){let k=x.get(U);return k!==void 0?++k.usedTimes:(k=new Lw(o,U,M,l),g.push(k),x.set(U,k)),k}function D(M){if(--M.usedTimes===0){const U=g.indexOf(M);g[U]=g[g.length-1],g.pop(),x.delete(M.cacheKey),M.destroy()}}function C(M){h.remove(M)}function I(){h.dispose()}return{getParameters:L,getProgramCacheKey:y,getUniforms:F,acquireProgram:R,releaseProgram:D,releaseShaderCache:C,programs:g,dispose:I}}function Fw(){let o=new WeakMap;function t(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function s(d){o.delete(d)}function l(d,h,m){o.get(d)[h]=m}function u(){o=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:u}}function Hw(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.materialVariant!==t.materialVariant?o.materialVariant-t.materialVariant:o.z!==t.z?o.z-t.z:o.id-t.id}function Ux(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function Lx(){const o=[];let t=0;const i=[],s=[],l=[];function u(){t=0,i.length=0,s.length=0,l.length=0}function d(p){let b=0;return p.isInstancedMesh&&(b+=2),p.isSkinnedMesh&&(b+=1),b}function h(p,b,A,L,y,S){let N=o[t];return N===void 0?(N={id:p.id,object:p,geometry:b,material:A,materialVariant:d(p),groupOrder:L,renderOrder:p.renderOrder,z:y,group:S},o[t]=N):(N.id=p.id,N.object=p,N.geometry=b,N.material=A,N.materialVariant=d(p),N.groupOrder=L,N.renderOrder=p.renderOrder,N.z=y,N.group=S),t++,N}function m(p,b,A,L,y,S,N){N.reversedDepth===!0&&(y=-y);const F=h(p,b,A,L,y,S);A.transmission>0?s.push(F):A.transparent===!0?l.push(F):i.push(F)}function g(p,b,A,L,y,S){const N=h(p,b,A,L,y,S);A.transmission>0?s.unshift(N):A.transparent===!0?l.unshift(N):i.unshift(N)}function x(p,b){i.length>1&&i.sort(p||Hw),s.length>1&&s.sort(b||Ux),l.length>1&&l.sort(b||Ux)}function v(){for(let p=t,b=o.length;p<b;p++){const A=o[p];if(A.id===null)break;A.id=null,A.object=null,A.geometry=null,A.material=null,A.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:m,unshift:g,finish:v,sort:x}}function Gw(){let o=new WeakMap;function t(s,l){const u=o.get(s);let d;return u===void 0?(d=new Lx,o.set(s,[d])):l>=u.length?(d=new Lx,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:t,dispose:i}}function Vw(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new oe,color:new Ot};break;case"SpotLight":i={position:new oe,direction:new oe,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new oe,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":i={direction:new oe,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":i={color:new Ot,position:new oe,halfWidth:new oe,halfHeight:new oe};break}return o[t.id]=i,i}}}function kw(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let Xw=0;function Ww(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function qw(o){const t=new Vw,i=kw(),s={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)s.probe.push(new oe);const l=new oe,u=new on,d=new on;function h(g){let x=0,v=0,p=0;for(let Y=0;Y<9;Y++)s.probe[Y].set(0,0,0);let b=0,A=0,L=0,y=0,S=0,N=0,F=0,R=0,D=0,C=0,I=0,M=0,U=0,k=0;g.sort(Ww);for(let Y=0,ce=g.length;Y<ce;Y++){const $=g[Y],te=$.color,Z=$.intensity,K=$.distance;let ge=null;if($.shadow&&$.shadow.map&&($.shadow.map.texture.format===ir?ge=$.shadow.map.texture:ge=$.shadow.map.depthTexture||$.shadow.map.texture),$.isAmbientLight)x+=te.r*Z,v+=te.g*Z,p+=te.b*Z;else if($.isLightProbe){for(let le=0;le<9;le++)s.probe[le].addScaledVector($.sh.coefficients[le],Z);k++}else if($.isSunLight){const le=t.get($);if(le.color.copy($.color).multiplyScalar($.intensity),$.castShadow){const O=$.shadow,P=i.get($);P.shadowIntensity=O.intensity,P.shadowBias=O.bias,P.shadowNormalBias=O.normalBias,P.shadowRadius=O.radius,P.shadowMapSize.copy(O.mapSize).multiply(O.getFrameExtents()),s.sunShadow[A]=P,s.sunShadowMap[A]=ge;const be=O.getViewportCount();for(let Ce=0;Ce<be;Ce++)s.sunShadowMatrix[L+Ce]=O.getMatrix(Ce),s.sunShadowCascade[L+Ce]=O._cascadeData[Ce];L+=be,A++}s.sun[b]=le,b++}else if($.isDirectionalLight){const le=t.get($);if(le.color.copy($.color).multiplyScalar($.intensity),$.castShadow){const O=$.shadow,P=i.get($);P.shadowIntensity=O.intensity,P.shadowBias=O.bias,P.shadowNormalBias=O.normalBias,P.shadowRadius=O.radius,P.shadowMapSize=O.mapSize,s.directionalShadow[y]=P,s.directionalShadowMap[y]=ge,s.directionalShadowMatrix[y]=$.shadow.matrix,D++}s.directional[y]=le,y++}else if($.isSpotLight){const le=t.get($);le.position.setFromMatrixPosition($.matrixWorld),le.color.copy(te).multiplyScalar(Z),le.distance=K,le.coneCos=Math.cos($.angle),le.penumbraCos=Math.cos($.angle*(1-$.penumbra)),le.decay=$.decay,s.spot[N]=le;const O=$.shadow;if($.map&&(s.spotLightMap[M]=$.map,M++,O.updateMatrices($),$.castShadow&&U++),s.spotLightMatrix[N]=O.matrix,$.castShadow){const P=i.get($);P.shadowIntensity=O.intensity,P.shadowBias=O.bias,P.shadowNormalBias=O.normalBias,P.shadowRadius=O.radius,P.shadowMapSize=O.mapSize,s.spotShadow[N]=P,s.spotShadowMap[N]=ge,I++}N++}else if($.isRectAreaLight){const le=t.get($);le.color.copy(te).multiplyScalar(Z),le.halfWidth.set($.width*.5,0,0),le.halfHeight.set(0,$.height*.5,0),s.rectArea[F]=le,F++}else if($.isPointLight){const le=t.get($);if(le.color.copy($.color).multiplyScalar($.intensity),le.distance=$.distance,le.decay=$.decay,$.castShadow){const O=$.shadow,P=i.get($);P.shadowIntensity=O.intensity,P.shadowBias=O.bias,P.shadowNormalBias=O.normalBias,P.shadowRadius=O.radius,P.shadowMapSize=O.mapSize,P.shadowCameraNear=O.camera.near,P.shadowCameraFar=O.camera.far,s.pointShadow[S]=P,s.pointShadowMap[S]=ge,s.pointShadowMatrix[S]=$.shadow.matrix,C++}s.point[S]=le,S++}else if($.isHemisphereLight){const le=t.get($);le.skyColor.copy($.color).multiplyScalar(Z),le.groundColor.copy($.groundColor).multiplyScalar(Z),s.hemi[R]=le,R++}}F>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ze.LTC_FLOAT_1,s.rectAreaLTC2=Ze.LTC_FLOAT_2):(s.rectAreaLTC1=Ze.LTC_HALF_1,s.rectAreaLTC2=Ze.LTC_HALF_2)),s.ambient[0]=x,s.ambient[1]=v,s.ambient[2]=p;const W=s.hash;(W.sunLength!==b||W.directionalLength!==y||W.pointLength!==S||W.spotLength!==N||W.rectAreaLength!==F||W.hemiLength!==R||W.numSunShadows!==A||W.numDirectionalShadows!==D||W.numPointShadows!==C||W.numSpotShadows!==I||W.numSpotMaps!==M||W.numLightProbes!==k)&&(s.sun.length=b,s.directional.length=y,s.spot.length=N,s.rectArea.length=F,s.point.length=S,s.hemi.length=R,s.sunShadow.length=A,s.sunShadowMap.length=A,s.sunShadowMatrix.length=L,s.sunShadowCascade.length=L,s.directionalShadow.length=D,s.directionalShadowMap.length=D,s.directionalShadowMatrix.length=D,s.pointShadow.length=C,s.pointShadowMap.length=C,s.pointShadowMatrix.length=C,s.spotShadow.length=I,s.spotShadowMap.length=I,s.spotLightMatrix.length=I+M-U,s.spotLightMap.length=M,s.numSpotLightShadowsWithMaps=U,s.numLightProbes=k,W.sunLength=b,W.directionalLength=y,W.pointLength=S,W.spotLength=N,W.rectAreaLength=F,W.hemiLength=R,W.numSunShadows=A,W.numDirectionalShadows=D,W.numPointShadows=C,W.numSpotShadows=I,W.numSpotMaps=M,W.numLightProbes=k,s.version=Xw++)}function m(g,x){let v=0,p=0,b=0,A=0,L=0,y=0;const S=x.matrixWorldInverse;for(let N=0,F=g.length;N<F;N++){const R=g[N];if(R.isSunLight){const D=s.sun[v];D.direction.setFromMatrixPosition(R.matrixWorld),D.direction.transformDirection(S),v++}else if(R.isDirectionalLight){const D=s.directional[p];D.direction.setFromMatrixPosition(R.matrixWorld),l.setFromMatrixPosition(R.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(S),p++}else if(R.isSpotLight){const D=s.spot[A];D.position.setFromMatrixPosition(R.matrixWorld),D.position.applyMatrix4(S),D.direction.setFromMatrixPosition(R.matrixWorld),l.setFromMatrixPosition(R.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(S),A++}else if(R.isRectAreaLight){const D=s.rectArea[L];D.position.setFromMatrixPosition(R.matrixWorld),D.position.applyMatrix4(S),d.identity(),u.copy(R.matrixWorld),u.premultiply(S),d.extractRotation(u),D.halfWidth.set(R.width*.5,0,0),D.halfHeight.set(0,R.height*.5,0),D.halfWidth.applyMatrix4(d),D.halfHeight.applyMatrix4(d),L++}else if(R.isPointLight){const D=s.point[b];D.position.setFromMatrixPosition(R.matrixWorld),D.position.applyMatrix4(S),b++}else if(R.isHemisphereLight){const D=s.hemi[y];D.direction.setFromMatrixPosition(R.matrixWorld),D.direction.transformDirection(S),y++}}}return{setup:h,setupView:m,state:s}}function Ox(o){const t=new qw(o),i=[],s=[],l=[];function u(p){v.camera=p,i.length=0,s.length=0,l.length=0}function d(p){i.push(p)}function h(p){s.push(p)}function m(p){l.push(p)}function g(){t.setup(i)}function x(p){t.setupView(i,p)}const v={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:u,state:v,setupLights:g,setupLightsView:x,pushLight:d,pushShadow:h,pushLightProbeGrid:m}}function Yw(o){let t=new WeakMap;function i(l,u=0){const d=t.get(l);let h;return d===void 0?(h=new Ox(o),t.set(l,[h])):u>=d.length?(h=new Ox(o),d.push(h)):h=d[u],h}function s(){t=new WeakMap}return{get:i,dispose:s}}const jw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Kw=[new oe(1,0,0),new oe(-1,0,0),new oe(0,1,0),new oe(0,-1,0),new oe(0,0,1),new oe(0,0,-1)],Qw=[new oe(0,-1,0),new oe(0,-1,0),new oe(0,0,1),new oe(0,0,-1),new oe(0,-1,0),new oe(0,-1,0)],Px=new on,bl=new oe,rp=new oe;function Jw(o,t,i){let s=new um;const l=new Nt,u=new Nt,d=new cn,h=new tE,m=new nE,g={},x=i.maxTextureSize,v={[tr]:ai,[ai]:tr,[Ia]:Ia},p=new pa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:jw,fragmentShader:Zw}),b=p.clone();b.defines.HORIZONTAL_PASS=1;const A=new si;A.setAttribute("position",new Ha(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const L=new xt(A,p),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nu;let S=this.type;this.render=function(C,I,M){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||C.length===0)return;this.type===Gx&&(ht("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Nu);const U=o.getRenderTarget(),k=o.getActiveCubeFace(),W=o.getActiveMipmapLevel(),Y=o.state;Y.setBlending(Ba),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const ce=S!==this.type;ce&&I.traverse(function($){$.material&&(Array.isArray($.material)?$.material.forEach(te=>te.needsUpdate=!0):$.material.needsUpdate=!0)});for(let $=0,te=C.length;$<te;$++){const Z=C[$],K=Z.shadow;if(K===void 0){ht("WebGLShadowMap:",Z,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;l.copy(K.mapSize);const ge=K.getFrameExtents();l.multiply(ge),u.copy(K.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(u.x=Math.floor(x/ge.x),l.x=u.x*ge.x,K.mapSize.x=u.x),l.y>x&&(u.y=Math.floor(x/ge.y),l.y=u.y*ge.y,K.mapSize.y=u.y));const le=o.state.buffers.depth.getReversed();if(K.camera._reversedDepth=le,K.map===null||ce===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===El){if(Z.isPointLight){ht("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new Wi(l.x,l.y,{format:ir,type:ha,minFilter:Vn,magFilter:Vn,generateMipmaps:!1}),K.map.texture.name=Z.name+".shadowMap",K.map.depthTexture=new Ll(l.x,l.y,ca),K.map.depthTexture.name=Z.name+".shadowMapDepth",K.map.depthTexture.format=Va,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Bn,K.map.depthTexture.magFilter=Bn}else Z.isPointLight?(K.map=new vS(l.x),K.map.depthTexture=new Z1(l.x,da)):(K.map=new Wi(l.x,l.y),K.map.depthTexture=new Ll(l.x,l.y,da)),K.map.depthTexture.name=Z.name+".shadowMap",K.map.depthTexture.format=Va,this.type===Nu?(K.map.depthTexture.compareFunction=le?am:im,K.map.depthTexture.minFilter=Vn,K.map.depthTexture.magFilter=Vn):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Bn,K.map.depthTexture.magFilter=Bn);K.camera.updateProjectionMatrix()}K.map.isWebGLCubeRenderTarget!==!0&&(K.map.width!==l.x||K.map.height!==l.y)&&K.map.setSize(l.x,l.y);const O=K.map.isWebGLCubeRenderTarget?6:K.getViewportCount();Z.isPointLight!==!0&&K.updateMatrices(Z,M);for(let P=0;P<O;P++){const be=K.getCamera(P);if(Z.isPointLight){const Ce=K.camera,B=K.matrix,X=Z.distance||Ce.far;X!==Ce.far&&(Ce.far=X,Ce.updateProjectionMatrix()),bl.setFromMatrixPosition(Z.matrixWorld),Ce.position.copy(bl),rp.copy(Ce.position),rp.add(Kw[P]),Ce.up.copy(Qw[P]),Ce.lookAt(rp),Ce.updateMatrixWorld(),B.makeTranslation(-bl.x,-bl.y,-bl.z),Px.multiplyMatrices(Ce.projectionMatrix,Ce.matrixWorldInverse),K._frustum.setFromProjectionMatrix(Px,Ce.coordinateSystem,Ce.reversedDepth)}if(K.map.isWebGLCubeRenderTarget)o.setRenderTarget(K.map,P),o.clear();else{P===0&&(o.setRenderTarget(K.map),o.clear());const Ce=K.getViewport(P);d.set(u.x*Ce.x,u.y*Ce.y,u.x*Ce.z,u.y*Ce.w),Y.viewport(d)}s=K.getFrustum(P),R(I,M,be,Z,this.type)}K.isPointLightShadow!==!0&&this.type===El&&N(K,M),K.needsUpdate=!1}S=this.type,y.needsUpdate=!1,o.setRenderTarget(U,k,W)};function N(C,I){const M=t.update(L);p.defines.VSM_SAMPLES!==C.blurSamples&&(p.defines.VSM_SAMPLES=C.blurSamples,b.defines.VSM_SAMPLES=C.blurSamples,p.needsUpdate=!0,b.needsUpdate=!0),C.mapPass===null?C.mapPass=new Wi(l.x,l.y,{format:ir,type:ha}):(C.mapPass.width!==C.map.width||C.mapPass.height!==C.map.height)&&C.mapPass.setSize(C.map.width,C.map.height),p.uniforms.shadow_pass.value=C.map.depthTexture,p.uniforms.resolution.value.set(C.map.width,C.map.height),p.uniforms.radius.value=C.radius,o.setRenderTarget(C.mapPass),o.clear(),o.renderBufferDirect(I,null,M,p,L,null),b.uniforms.shadow_pass.value=C.mapPass.texture,b.uniforms.resolution.value.set(C.map.width,C.map.height),b.uniforms.radius.value=C.radius,o.setRenderTarget(C.map),o.clear(),o.renderBufferDirect(I,null,M,b,L,null)}function F(C,I,M,U){let k=null;const W=M.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(W!==void 0)k=W;else if(k=M.isPointLight===!0?m:h,o.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const Y=k.uuid,ce=I.uuid;let $=g[Y];$===void 0&&($={},g[Y]=$);let te=$[ce];te===void 0&&(te=k.clone(),$[ce]=te,I.addEventListener("dispose",D)),k=te}if(k.visible=I.visible,k.wireframe=I.wireframe,U===El?k.side=I.shadowSide!==null?I.shadowSide:I.side:k.side=I.shadowSide!==null?I.shadowSide:v[I.side],k.alphaMap=I.alphaMap,k.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,k.map=I.map,k.clipShadows=I.clipShadows,k.clippingPlanes=I.clippingPlanes,k.clipIntersection=I.clipIntersection,k.displacementMap=I.displacementMap,k.displacementScale=I.displacementScale,k.displacementBias=I.displacementBias,k.wireframeLinewidth=I.wireframeLinewidth,k.linewidth=I.linewidth,M.isPointLight===!0&&k.isMeshDistanceMaterial===!0){const Y=o.properties.get(k);Y.light=M}return k}function R(C,I,M,U,k){if(C.visible===!1)return;if(C.layers.test(I.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&k===El)&&(!C.frustumCulled||C.intersectsFrustum(s))){C.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,C.matrixWorld);const ce=t.update(C),$=C.material;if(Array.isArray($)){const te=ce.groups;for(let Z=0,K=te.length;Z<K;Z++){const ge=te[Z],le=$[ge.materialIndex];if(le&&le.visible){const O=F(C,le,U,k);C.onBeforeShadow(o,C,I,M,ce,O,ge),o.renderBufferDirect(M,null,ce,O,C,ge),C.onAfterShadow(o,C,I,M,ce,O,ge)}}}else if($.visible){const te=F(C,$,U,k);C.onBeforeShadow(o,C,I,M,ce,te,null),o.renderBufferDirect(M,null,ce,te,C,null),C.onAfterShadow(o,C,I,M,ce,te,null)}}const Y=C.children;for(let ce=0,$=Y.length;ce<$;ce++)R(Y[ce],I,M,U,k)}function D(C){C.target.removeEventListener("dispose",D);for(const M in g){const U=g[M],k=C.target.uuid;k in U&&(U[k].dispose(),delete U[k])}}}function $w(o,t){function i(){let J=!1;const He=new cn;let Me=null;const ze=new cn(0,0,0,0);return{setMask:function(Ve){Me!==Ve&&!J&&(o.colorMask(Ve,Ve,Ve,Ve),Me=Ve)},setLocked:function(Ve){J=Ve},setClear:function(Ve,Re,$e,qe,yt){yt===!0&&(Ve*=qe,Re*=qe,$e*=qe),He.set(Ve,Re,$e,qe),ze.equals(He)===!1&&(o.clearColor(Ve,Re,$e,qe),ze.copy(He))},reset:function(){J=!1,Me=null,ze.set(-1,0,0,0)}}}function s(){let J=!1,He=!1,Me=null,ze=null,Ve=null;return{setReversed:function(Re){if(He!==Re){const $e=t.get("EXT_clip_control");Re?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT),He=Re;const qe=Ve;Ve=null,this.setClear(qe)}},getReversed:function(){return He},setTest:function(Re){Re?ee(o.DEPTH_TEST):Se(o.DEPTH_TEST)},setMask:function(Re){Me!==Re&&!J&&(o.depthMask(Re),Me=Re)},setFunc:function(Re){if(He&&(Re=r1[Re]),ze!==Re){switch(Re){case op:o.depthFunc(o.NEVER);break;case lp:o.depthFunc(o.ALWAYS);break;case cp:o.depthFunc(o.LESS);break;case Cl:o.depthFunc(o.LEQUAL);break;case up:o.depthFunc(o.EQUAL);break;case fp:o.depthFunc(o.GEQUAL);break;case dp:o.depthFunc(o.GREATER);break;case hp:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}ze=Re}},setLocked:function(Re){J=Re},setClear:function(Re){Ve!==Re&&(Ve=Re,He&&(Re=1-Re),o.clearDepth(Re))},reset:function(){J=!1,Me=null,ze=null,Ve=null,He=!1}}}function l(){let J=!1,He=null,Me=null,ze=null,Ve=null,Re=null,$e=null,qe=null,yt=null;return{setTest:function(vt){J||(vt?ee(o.STENCIL_TEST):Se(o.STENCIL_TEST))},setMask:function(vt){He!==vt&&!J&&(o.stencilMask(vt),He=vt)},setFunc:function(vt,ri,Si){(Me!==vt||ze!==ri||Ve!==Si)&&(o.stencilFunc(vt,ri,Si),Me=vt,ze=ri,Ve=Si)},setOp:function(vt,ri,Si){(Re!==vt||$e!==ri||qe!==Si)&&(o.stencilOp(vt,ri,Si),Re=vt,$e=ri,qe=Si)},setLocked:function(vt){J=vt},setClear:function(vt){yt!==vt&&(o.clearStencil(vt),yt=vt)},reset:function(){J=!1,He=null,Me=null,ze=null,Ve=null,Re=null,$e=null,qe=null,yt=null}}}const u=new i,d=new s,h=new l,m=new WeakMap,g=new WeakMap;let x={},v={},p={},b=new WeakMap,A=[],L=null,y=!1,S=null,N=null,F=null,R=null,D=null,C=null,I=null,M=new Ot(0,0,0),U=0,k=!1,W=null,Y=null,ce=null,$=null,te=null;const Z=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,ge=0;const le=o.getParameter(o.VERSION);le.indexOf("WebGL")!==-1?(ge=parseFloat(/^WebGL (\d)/.exec(le)[1]),K=ge>=1):le.indexOf("OpenGL ES")!==-1&&(ge=parseFloat(/^OpenGL ES (\d)/.exec(le)[1]),K=ge>=2);let O=null,P={};const be=o.getParameter(o.SCISSOR_BOX),Ce=o.getParameter(o.VIEWPORT),B=new cn().fromArray(be),X=new cn().fromArray(Ce);function se(J,He,Me,ze){const Ve=new Uint8Array(4),Re=o.createTexture();o.bindTexture(J,Re),o.texParameteri(J,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(J,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let $e=0;$e<Me;$e++)J===o.TEXTURE_3D||J===o.TEXTURE_2D_ARRAY?o.texImage3D(He,0,o.RGBA,1,1,ze,0,o.RGBA,o.UNSIGNED_BYTE,Ve):o.texImage2D(He+$e,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ve);return Re}const H={};H[o.TEXTURE_2D]=se(o.TEXTURE_2D,o.TEXTURE_2D,1),H[o.TEXTURE_CUBE_MAP]=se(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[o.TEXTURE_2D_ARRAY]=se(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),H[o.TEXTURE_3D]=se(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),h.setClear(0),ee(o.DEPTH_TEST),d.setFunc(Cl),Pe(!1),Be(P_),ee(o.CULL_FACE),it(Ba);function ee(J){x[J]!==!0&&(o.enable(J),x[J]=!0)}function Se(J){x[J]!==!1&&(o.disable(J),x[J]=!1)}function De(J,He){return p[J]!==He?(o.bindFramebuffer(J,He),p[J]=He,J===o.DRAW_FRAMEBUFFER&&(p[o.FRAMEBUFFER]=He),J===o.FRAMEBUFFER&&(p[o.DRAW_FRAMEBUFFER]=He),!0):!1}function de(J,He){let Me=A,ze=!1;if(J){Me=b.get(He),Me===void 0&&(Me=[],b.set(He,Me));const Ve=J.textures;if(Me.length!==Ve.length||Me[0]!==o.COLOR_ATTACHMENT0){for(let Re=0,$e=Ve.length;Re<$e;Re++)Me[Re]=o.COLOR_ATTACHMENT0+Re;Me.length=Ve.length,ze=!0}}else Me[0]!==o.BACK&&(Me[0]=o.BACK,ze=!0);ze&&o.drawBuffers(Me)}function Ne(J){return L!==J?(o.useProgram(J),L=J,!0):!1}const st={[oo]:o.FUNC_ADD,[wb]:o.FUNC_SUBTRACT,[Rb]:o.FUNC_REVERSE_SUBTRACT};st[Cb]=o.MIN,st[Nb]=o.MAX;const ke={[Db]:o.ZERO,[Ub]:o.ONE,[Lb]:o.SRC_COLOR,[Vx]:o.SRC_ALPHA,[Fb]:o.SRC_ALPHA_SATURATE,[zb]:o.DST_COLOR,[Pb]:o.DST_ALPHA,[Ob]:o.ONE_MINUS_SRC_COLOR,[kx]:o.ONE_MINUS_SRC_ALPHA,[Bb]:o.ONE_MINUS_DST_COLOR,[Ib]:o.ONE_MINUS_DST_ALPHA,[Hb]:o.CONSTANT_COLOR,[Gb]:o.ONE_MINUS_CONSTANT_COLOR,[Vb]:o.CONSTANT_ALPHA,[kb]:o.ONE_MINUS_CONSTANT_ALPHA};function it(J,He,Me,ze,Ve,Re,$e,qe,yt,vt){if(J===Ba){y===!0&&(Se(o.BLEND),y=!1);return}if(y===!1&&(ee(o.BLEND),y=!0),J!==Ab){if(J!==S||vt!==k){if((N!==oo||D!==oo)&&(o.blendEquation(o.FUNC_ADD),N=oo,D=oo),vt)switch(J){case Al:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case I_:o.blendFunc(o.ONE,o.ONE);break;case z_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case B_:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Vt("WebGLState: Invalid blending: ",J);break}else switch(J){case Al:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case I_:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case z_:Vt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case B_:Vt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Vt("WebGLState: Invalid blending: ",J);break}F=null,R=null,C=null,I=null,M.set(0,0,0),U=0,S=J,k=vt}return}Ve=Ve||He,Re=Re||Me,$e=$e||ze,(He!==N||Ve!==D)&&(o.blendEquationSeparate(st[He],st[Ve]),N=He,D=Ve),(Me!==F||ze!==R||Re!==C||$e!==I)&&(o.blendFuncSeparate(ke[Me],ke[ze],ke[Re],ke[$e]),F=Me,R=ze,C=Re,I=$e),(qe.equals(M)===!1||yt!==U)&&(o.blendColor(qe.r,qe.g,qe.b,yt),M.copy(qe),U=yt),S=J,k=!1}function lt(J,He){J.side===Ia?Se(o.CULL_FACE):ee(o.CULL_FACE);let Me=J.side===ai;He&&(Me=!Me),Pe(Me),J.blending===Al&&J.transparent===!1?it(Ba):it(J.blending,J.blendEquation,J.blendSrc,J.blendDst,J.blendEquationAlpha,J.blendSrcAlpha,J.blendDstAlpha,J.blendColor,J.blendAlpha,J.premultipliedAlpha),d.setFunc(J.depthFunc),d.setTest(J.depthTest),d.setMask(J.depthWrite),u.setMask(J.colorWrite);const ze=J.stencilWrite;h.setTest(ze),ze&&(h.setMask(J.stencilWriteMask),h.setFunc(J.stencilFunc,J.stencilRef,J.stencilFuncMask),h.setOp(J.stencilFail,J.stencilZFail,J.stencilZPass)),ft(J.polygonOffset,J.polygonOffsetFactor,J.polygonOffsetUnits),J.alphaToCoverage===!0?ee(o.SAMPLE_ALPHA_TO_COVERAGE):Se(o.SAMPLE_ALPHA_TO_COVERAGE)}function Pe(J){W!==J&&(J?o.frontFace(o.CW):o.frontFace(o.CCW),W=J)}function Be(J){J!==Eb?(ee(o.CULL_FACE),J!==Y&&(J===P_?o.cullFace(o.BACK):J===Tb?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Se(o.CULL_FACE),Y=J}function ot(J){J!==ce&&(K&&o.lineWidth(J),ce=J)}function ft(J,He,Me){J?(ee(o.POLYGON_OFFSET_FILL),($!==He||te!==Me)&&($=He,te=Me,d.getReversed()&&(He=-He),o.polygonOffset(He,Me))):Se(o.POLYGON_OFFSET_FILL)}function mt(J){J?ee(o.SCISSOR_TEST):Se(o.SCISSOR_TEST)}function gt(J){J===void 0&&(J=o.TEXTURE0+Z-1),O!==J&&(o.activeTexture(J),O=J)}function Q(J,He,Me){Me===void 0&&(O===null?Me=o.TEXTURE0+Z-1:Me=O);let ze=P[Me];ze===void 0&&(ze={type:void 0,texture:void 0},P[Me]=ze),(ze.type!==J||ze.texture!==He)&&(O!==Me&&(o.activeTexture(Me),O=Me),o.bindTexture(J,He||H[J]),ze.type=J,ze.texture=He)}function Wt(){const J=P[O];J!==void 0&&J.type!==void 0&&(o.bindTexture(J.type,null),J.type=void 0,J.texture=void 0)}function Et(){try{o.compressedTexImage2D(...arguments)}catch(J){Vt("WebGLState:",J)}}function z(){try{o.compressedTexImage3D(...arguments)}catch(J){Vt("WebGLState:",J)}}function E(){try{o.texSubImage2D(...arguments)}catch(J){Vt("WebGLState:",J)}}function re(){try{o.texSubImage3D(...arguments)}catch(J){Vt("WebGLState:",J)}}function fe(){try{o.compressedTexSubImage2D(...arguments)}catch(J){Vt("WebGLState:",J)}}function xe(){try{o.compressedTexSubImage3D(...arguments)}catch(J){Vt("WebGLState:",J)}}function Ie(){try{o.texStorage2D(...arguments)}catch(J){Vt("WebGLState:",J)}}function Ge(){try{o.texStorage3D(...arguments)}catch(J){Vt("WebGLState:",J)}}function ye(){try{o.texImage2D(...arguments)}catch(J){Vt("WebGLState:",J)}}function Ee(){try{o.texImage3D(...arguments)}catch(J){Vt("WebGLState:",J)}}function Ue(J){return v[J]!==void 0?v[J]:o.getParameter(J)}function we(J,He){v[J]!==He&&(o.pixelStorei(J,He),v[J]=He)}function Le(J){B.equals(J)===!1&&(o.scissor(J.x,J.y,J.z,J.w),B.copy(J))}function Fe(J){X.equals(J)===!1&&(o.viewport(J.x,J.y,J.z,J.w),X.copy(J))}function Oe(J,He){let Me=g.get(He);Me===void 0&&(Me=new WeakMap,g.set(He,Me));let ze=Me.get(J);ze===void 0&&(ze=o.getUniformBlockIndex(He,J.name),Me.set(J,ze))}function at(J,He){const ze=g.get(He).get(J);m.get(He)!==ze&&(o.uniformBlockBinding(He,ze,J.__bindingPointIndex),m.set(He,ze))}function ct(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),o.pixelStorei(o.PACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL),o.pixelStorei(o.PACK_ROW_LENGTH,0),o.pixelStorei(o.PACK_SKIP_PIXELS,0),o.pixelStorei(o.PACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_ROW_LENGTH,0),o.pixelStorei(o.UNPACK_IMAGE_HEIGHT,0),o.pixelStorei(o.UNPACK_SKIP_PIXELS,0),o.pixelStorei(o.UNPACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_SKIP_IMAGES,0),x={},v={},O=null,P={},p={},b=new WeakMap,A=[],L=null,y=!1,S=null,N=null,F=null,R=null,D=null,C=null,I=null,M=new Ot(0,0,0),U=0,k=!1,W=null,Y=null,ce=null,$=null,te=null,B.set(0,0,o.canvas.width,o.canvas.height),X.set(0,0,o.canvas.width,o.canvas.height),u.reset(),d.reset(),h.reset()}return{buffers:{color:u,depth:d,stencil:h},enable:ee,disable:Se,bindFramebuffer:De,drawBuffers:de,useProgram:Ne,setBlending:it,setMaterial:lt,setFlipSided:Pe,setCullFace:Be,setLineWidth:ot,setPolygonOffset:ft,setScissorTest:mt,activeTexture:gt,bindTexture:Q,unbindTexture:Wt,compressedTexImage2D:Et,compressedTexImage3D:z,texImage2D:ye,texImage3D:Ee,pixelStorei:we,getParameter:Ue,updateUBOMapping:Oe,uniformBlockBinding:at,texStorage2D:Ie,texStorage3D:Ge,texSubImage2D:E,texSubImage3D:re,compressedTexSubImage2D:fe,compressedTexSubImage3D:xe,scissor:Le,viewport:Fe,reset:ct}}function e3(o,t,i,s,l,u,d){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new Nt,x=new WeakMap,v=new Set;let p;const b=new WeakMap;let A=!1;try{A=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function L(z,E){return A?new OffscreenCanvas(z,E):Hu("canvas")}function y(z,E,re){let fe=1;const xe=Et(z);if((xe.width>re||xe.height>re)&&(fe=re/Math.max(xe.width,xe.height)),fe<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const Ie=Math.floor(fe*xe.width),Ge=Math.floor(fe*xe.height);p===void 0&&(p=L(Ie,Ge));const ye=E?L(Ie,Ge):p;return ye.width=Ie,ye.height=Ge,ye.getContext("2d").drawImage(z,0,0,Ie,Ge),ht("WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+Ie+"x"+Ge+")."),ye}else return"data"in z&&ht("WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),z;return z}function S(z){return z.generateMipmaps}function N(z){o.generateMipmap(z)}function F(z){return z.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?o.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function R(z,E,re,fe,xe,Ie=!1){if(z!==null){if(o[z]!==void 0)return o[z];ht("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let Ge;fe&&(Ge=t.get("EXT_texture_norm16"),Ge||ht("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ye=E;if(E===o.RED&&(re===o.FLOAT&&(ye=o.R32F),re===o.HALF_FLOAT&&(ye=o.R16F),re===o.UNSIGNED_BYTE&&(ye=o.R8),re===o.UNSIGNED_SHORT&&Ge&&(ye=Ge.R16_EXT),re===o.SHORT&&Ge&&(ye=Ge.R16_SNORM_EXT)),E===o.RED_INTEGER&&(re===o.UNSIGNED_BYTE&&(ye=o.R8UI),re===o.UNSIGNED_SHORT&&(ye=o.R16UI),re===o.UNSIGNED_INT&&(ye=o.R32UI),re===o.BYTE&&(ye=o.R8I),re===o.SHORT&&(ye=o.R16I),re===o.INT&&(ye=o.R32I)),E===o.RG&&(re===o.FLOAT&&(ye=o.RG32F),re===o.HALF_FLOAT&&(ye=o.RG16F),re===o.UNSIGNED_BYTE&&(ye=o.RG8),re===o.UNSIGNED_SHORT&&Ge&&(ye=Ge.RG16_EXT),re===o.SHORT&&Ge&&(ye=Ge.RG16_SNORM_EXT)),E===o.RG_INTEGER&&(re===o.UNSIGNED_BYTE&&(ye=o.RG8UI),re===o.UNSIGNED_SHORT&&(ye=o.RG16UI),re===o.UNSIGNED_INT&&(ye=o.RG32UI),re===o.BYTE&&(ye=o.RG8I),re===o.SHORT&&(ye=o.RG16I),re===o.INT&&(ye=o.RG32I)),E===o.RGB_INTEGER&&(re===o.UNSIGNED_BYTE&&(ye=o.RGB8UI),re===o.UNSIGNED_SHORT&&(ye=o.RGB16UI),re===o.UNSIGNED_INT&&(ye=o.RGB32UI),re===o.BYTE&&(ye=o.RGB8I),re===o.SHORT&&(ye=o.RGB16I),re===o.INT&&(ye=o.RGB32I)),E===o.RGBA_INTEGER&&(re===o.UNSIGNED_BYTE&&(ye=o.RGBA8UI),re===o.UNSIGNED_SHORT&&(ye=o.RGBA16UI),re===o.UNSIGNED_INT&&(ye=o.RGBA32UI),re===o.BYTE&&(ye=o.RGBA8I),re===o.SHORT&&(ye=o.RGBA16I),re===o.INT&&(ye=o.RGBA32I)),E===o.RGB&&(re===o.UNSIGNED_SHORT&&Ge&&(ye=Ge.RGB16_EXT),re===o.SHORT&&Ge&&(ye=Ge.RGB16_SNORM_EXT),re===o.UNSIGNED_INT_5_9_9_9_REV&&(ye=o.RGB9_E5),re===o.UNSIGNED_INT_10F_11F_11F_REV&&(ye=o.R11F_G11F_B10F)),E===o.RGBA){const Ee=Ie?Fu:Ht.getTransfer(xe);re===o.FLOAT&&(ye=o.RGBA32F),re===o.HALF_FLOAT&&(ye=o.RGBA16F),re===o.UNSIGNED_BYTE&&(ye=Ee===Qt?o.SRGB8_ALPHA8:o.RGBA8),re===o.UNSIGNED_SHORT&&Ge&&(ye=Ge.RGBA16_EXT),re===o.SHORT&&Ge&&(ye=Ge.RGBA16_SNORM_EXT),re===o.UNSIGNED_SHORT_4_4_4_4&&(ye=o.RGBA4),re===o.UNSIGNED_SHORT_5_5_5_1&&(ye=o.RGB5_A1)}return(ye===o.R16F||ye===o.R32F||ye===o.RG16F||ye===o.RG32F||ye===o.RGBA16F||ye===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ye}function D(z,E){let re;return z?E===null||E===da||E===Dl?re=o.DEPTH24_STENCIL8:E===ca?re=o.DEPTH32F_STENCIL8:E===Nl&&(re=o.DEPTH24_STENCIL8,ht("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===da||E===Dl?re=o.DEPTH_COMPONENT24:E===ca?re=o.DEPTH_COMPONENT32F:E===Nl&&(re=o.DEPTH_COMPONENT16),re}function C(z,E){return S(z)===!0||z.isFramebufferTexture&&z.minFilter!==Bn&&z.minFilter!==Vn?Math.log2(Math.max(E.width,E.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?E.mipmaps.length:1}function I(z){const E=z.target;E.removeEventListener("dispose",I),U(E),E.isVideoTexture&&x.delete(E),E.isHTMLTexture&&v.delete(E)}function M(z){const E=z.target;E.removeEventListener("dispose",M),W(E)}function U(z){const E=s.get(z);if(E.__webglInit===void 0)return;const re=z.source,fe=b.get(re);if(fe){const xe=fe[E.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&k(z),Object.keys(fe).length===0&&b.delete(re)}s.remove(z)}function k(z){const E=s.get(z);o.deleteTexture(E.__webglTexture);const re=z.source,fe=b.get(re);delete fe[E.__cacheKey],d.memory.textures--}function W(z){const E=s.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),s.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray(E.__webglFramebuffer[fe]))for(let xe=0;xe<E.__webglFramebuffer[fe].length;xe++)o.deleteFramebuffer(E.__webglFramebuffer[fe][xe]);else o.deleteFramebuffer(E.__webglFramebuffer[fe]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[fe])}else{if(Array.isArray(E.__webglFramebuffer))for(let fe=0;fe<E.__webglFramebuffer.length;fe++)o.deleteFramebuffer(E.__webglFramebuffer[fe]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let fe=0;fe<E.__webglColorRenderbuffer.length;fe++)E.__webglColorRenderbuffer[fe]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[fe]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const re=z.textures;for(let fe=0,xe=re.length;fe<xe;fe++){const Ie=s.get(re[fe]);Ie.__webglTexture&&(o.deleteTexture(Ie.__webglTexture),d.memory.textures--),s.remove(re[fe])}s.remove(z)}let Y=0;function ce(){Y=0}function $(){return Y}function te(z){Y=z}function Z(){const z=Y;return z>=l.maxTextures&&ht("WebGLTextures: Trying to use "+(z+1)+" texture units while this GPU supports only "+l.maxTextures),Y+=1,z}function K(z){const E=[];return E.push(z.wrapS),E.push(z.wrapT),E.push(z.wrapR||0),E.push(z.magFilter),E.push(z.minFilter),E.push(z.anisotropy),E.push(z.internalFormat),E.push(z.format),E.push(z.type),E.push(z.generateMipmaps),E.push(z.premultiplyAlpha),E.push(z.flipY),E.push(z.unpackAlignment),E.push(z.colorSpace),E.join()}function ge(z,E){const re=s.get(z);if(z.isVideoTexture&&Q(z),z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&re.__version!==z.version){const fe=z.image;if(fe===null)ht("WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)ht("WebGLRenderer: Texture marked for update but image is incomplete");else{Se(re,z,E);return}}else z.isExternalTexture&&(re.__webglTexture=z.sourceTexture?z.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,re.__webglTexture,o.TEXTURE0+E)}function le(z,E){const re=s.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&re.__version!==z.version){Se(re,z,E);return}else z.isExternalTexture&&(re.__webglTexture=z.sourceTexture?z.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,re.__webglTexture,o.TEXTURE0+E)}function O(z,E){const re=s.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&re.__version!==z.version){Se(re,z,E);return}i.bindTexture(o.TEXTURE_3D,re.__webglTexture,o.TEXTURE0+E)}function P(z,E){const re=s.get(z);if(z.isCubeDepthTexture!==!0&&z.version>0&&re.__version!==z.version){De(re,z,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,re.__webglTexture,o.TEXTURE0+E)}const be={[Ga]:o.REPEAT,[za]:o.CLAMP_TO_EDGE,[pp]:o.MIRRORED_REPEAT},Ce={[Bn]:o.NEAREST,[qb]:o.NEAREST_MIPMAP_NEAREST,[ru]:o.NEAREST_MIPMAP_LINEAR,[Vn]:o.LINEAR,[Dh]:o.LINEAR_MIPMAP_NEAREST,[Js]:o.LINEAR_MIPMAP_LINEAR},B={[Kb]:o.NEVER,[t1]:o.ALWAYS,[Qb]:o.LESS,[im]:o.LEQUAL,[Jb]:o.EQUAL,[am]:o.GEQUAL,[$b]:o.GREATER,[e1]:o.NOTEQUAL};function X(z,E){if(E.type===ca&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Vn||E.magFilter===Dh||E.magFilter===ru||E.magFilter===Js||E.minFilter===Vn||E.minFilter===Dh||E.minFilter===ru||E.minFilter===Js)&&ht("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(z,o.TEXTURE_WRAP_S,be[E.wrapS]),o.texParameteri(z,o.TEXTURE_WRAP_T,be[E.wrapT]),(z===o.TEXTURE_3D||z===o.TEXTURE_2D_ARRAY)&&o.texParameteri(z,o.TEXTURE_WRAP_R,be[E.wrapR]),o.texParameteri(z,o.TEXTURE_MAG_FILTER,Ce[E.magFilter]),o.texParameteri(z,o.TEXTURE_MIN_FILTER,Ce[E.minFilter]),E.compareFunction&&(o.texParameteri(z,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(z,o.TEXTURE_COMPARE_FUNC,B[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Bn||E.minFilter!==ru&&E.minFilter!==Js||E.type===ca&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const re=t.get("EXT_texture_filter_anisotropic");o.texParameterf(z,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function se(z,E){let re=!1;z.__webglInit===void 0&&(z.__webglInit=!0,E.addEventListener("dispose",I));const fe=E.source;let xe=b.get(fe);xe===void 0&&(xe={},b.set(fe,xe));const Ie=K(E);if(Ie!==z.__cacheKey){xe[Ie]===void 0&&(xe[Ie]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,re=!0),xe[Ie].usedTimes++;const Ge=xe[z.__cacheKey];Ge!==void 0&&(xe[z.__cacheKey].usedTimes--,Ge.usedTimes===0&&k(E)),z.__cacheKey=Ie,z.__webglTexture=xe[Ie].texture}return re}function H(z,E,re){return Math.floor(Math.floor(z/re)/E)}function ee(z,E,re,fe){const Ie=z.updateRanges;if(Ie.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,re,fe,E.data);else{Ie.sort((we,Le)=>we.start-Le.start);let Ge=0;for(let we=1;we<Ie.length;we++){const Le=Ie[Ge],Fe=Ie[we],Oe=Le.start+Le.count,at=H(Fe.start,E.width,4),ct=H(Le.start,E.width,4);Fe.start<=Oe+1&&at===ct&&H(Fe.start+Fe.count-1,E.width,4)===at?Le.count=Math.max(Le.count,Fe.start+Fe.count-Le.start):(++Ge,Ie[Ge]=Fe)}Ie.length=Ge+1;const ye=i.getParameter(o.UNPACK_ROW_LENGTH),Ee=i.getParameter(o.UNPACK_SKIP_PIXELS),Ue=i.getParameter(o.UNPACK_SKIP_ROWS);i.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let we=0,Le=Ie.length;we<Le;we++){const Fe=Ie[we],Oe=Math.floor(Fe.start/4),at=Math.ceil(Fe.count/4),ct=Oe%E.width,J=Math.floor(Oe/E.width),He=at,Me=1;i.pixelStorei(o.UNPACK_SKIP_PIXELS,ct),i.pixelStorei(o.UNPACK_SKIP_ROWS,J),i.texSubImage2D(o.TEXTURE_2D,0,ct,J,He,Me,re,fe,E.data)}z.clearUpdateRanges(),i.pixelStorei(o.UNPACK_ROW_LENGTH,ye),i.pixelStorei(o.UNPACK_SKIP_PIXELS,Ee),i.pixelStorei(o.UNPACK_SKIP_ROWS,Ue)}}function Se(z,E,re){let fe=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(fe=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(fe=o.TEXTURE_3D);const xe=se(z,E),Ie=E.source;i.bindTexture(fe,z.__webglTexture,o.TEXTURE0+re);const Ge=s.get(Ie);if(Ie.version!==Ge.__version||xe===!0){if(i.activeTexture(o.TEXTURE0+re),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const Me=Ht.getPrimaries(Ht.workingColorSpace),ze=E.colorSpace===Ms?null:Ht.getPrimaries(E.colorSpace),Ve=E.colorSpace===Ms||Me===ze?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve)}i.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment);let Ee=y(E.image,!1,l.maxTextureSize);Ee=Wt(E,Ee);const Ue=u.convert(E.format,E.colorSpace),we=u.convert(E.type);let Le=R(E.internalFormat,Ue,we,E.normalized,E.colorSpace,E.isVideoTexture);X(fe,E);let Fe;const Oe=E.mipmaps,at=E.isVideoTexture!==!0,ct=Ge.__version===void 0||xe===!0,J=Ie.dataReady,He=C(E,Ee);if(E.isDepthTexture)Le=D(E.format===$s,E.type),ct&&(at?i.texStorage2D(o.TEXTURE_2D,1,Le,Ee.width,Ee.height):i.texImage2D(o.TEXTURE_2D,0,Le,Ee.width,Ee.height,0,Ue,we,null));else if(E.isDataTexture)if(Oe.length>0){at&&ct&&i.texStorage2D(o.TEXTURE_2D,He,Le,Oe[0].width,Oe[0].height);for(let Me=0,ze=Oe.length;Me<ze;Me++)Fe=Oe[Me],at?J&&i.texSubImage2D(o.TEXTURE_2D,Me,0,0,Fe.width,Fe.height,Ue,we,Fe.data):i.texImage2D(o.TEXTURE_2D,Me,Le,Fe.width,Fe.height,0,Ue,we,Fe.data);E.generateMipmaps=!1}else at?(ct&&i.texStorage2D(o.TEXTURE_2D,He,Le,Ee.width,Ee.height),J&&ee(E,Ee,Ue,we)):i.texImage2D(o.TEXTURE_2D,0,Le,Ee.width,Ee.height,0,Ue,we,Ee.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){at&&ct&&i.texStorage3D(o.TEXTURE_2D_ARRAY,He,Le,Oe[0].width,Oe[0].height,Ee.depth);for(let Me=0,ze=Oe.length;Me<ze;Me++)if(Fe=Oe[Me],E.format!==Xi)if(Ue!==null)if(at){if(J)if(E.layerUpdates.size>0){const Ve=hx(Fe.width,Fe.height,E.format,E.type);for(const Re of E.layerUpdates){const $e=Fe.data.subarray(Re*Ve/Fe.data.BYTES_PER_ELEMENT,(Re+1)*Ve/Fe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Me,0,0,Re,Fe.width,Fe.height,1,Ue,$e)}}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Me,0,0,0,Fe.width,Fe.height,Ee.depth,Ue,Fe.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Me,Le,Fe.width,Fe.height,Ee.depth,0,Fe.data,0,0);else ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?J&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Me,0,0,0,Fe.width,Fe.height,Ee.depth,Ue,we,Fe.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Me,Le,Fe.width,Fe.height,Ee.depth,0,Ue,we,Fe.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{at&&ct&&i.texStorage2D(o.TEXTURE_2D,He,Le,Oe[0].width,Oe[0].height);for(let Me=0,ze=Oe.length;Me<ze;Me++)Fe=Oe[Me],E.format!==Xi?Ue!==null?at?J&&i.compressedTexSubImage2D(o.TEXTURE_2D,Me,0,0,Fe.width,Fe.height,Ue,Fe.data):i.compressedTexImage2D(o.TEXTURE_2D,Me,Le,Fe.width,Fe.height,0,Fe.data):ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?J&&i.texSubImage2D(o.TEXTURE_2D,Me,0,0,Fe.width,Fe.height,Ue,we,Fe.data):i.texImage2D(o.TEXTURE_2D,Me,Le,Fe.width,Fe.height,0,Ue,we,Fe.data)}else if(E.isDataArrayTexture)if(at){if(ct&&i.texStorage3D(o.TEXTURE_2D_ARRAY,He,Le,Ee.width,Ee.height,Ee.depth),J)if(E.layerUpdates.size>0){const Me=hx(Ee.width,Ee.height,E.format,E.type);for(const ze of E.layerUpdates){const Ve=Ee.data.subarray(ze*Me/Ee.data.BYTES_PER_ELEMENT,(ze+1)*Me/Ee.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,ze,Ee.width,Ee.height,1,Ue,we,Ve)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ue,we,Ee.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Le,Ee.width,Ee.height,Ee.depth,0,Ue,we,Ee.data);else if(E.isData3DTexture)at?(ct&&i.texStorage3D(o.TEXTURE_3D,He,Le,Ee.width,Ee.height,Ee.depth),J&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ue,we,Ee.data)):i.texImage3D(o.TEXTURE_3D,0,Le,Ee.width,Ee.height,Ee.depth,0,Ue,we,Ee.data);else if(E.isFramebufferTexture){if(ct)if(at)i.texStorage2D(o.TEXTURE_2D,He,Le,Ee.width,Ee.height);else{let Me=Ee.width,ze=Ee.height;for(let Ve=0;Ve<He;Ve++)i.texImage2D(o.TEXTURE_2D,Ve,Le,Me,ze,0,Ue,we,null),Me>>=1,ze>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in o){const Me=o.canvas;if(Me.hasAttribute("layoutsubtree")||Me.setAttribute("layoutsubtree","true"),Ee.parentNode!==Me){Me.appendChild(Ee),v.add(E),Me.onpaint=ze=>{const Ve=ze.changedElements;for(const Re of v)Ve.includes(Re.image)&&(Re.needsUpdate=!0)},Me.requestPaint();return}if(o.texElementImage2D.length===3)o.texElementImage2D(o.TEXTURE_2D,o.RGBA8,Ee);else{const Ve=o.RGBA,Re=o.RGBA,$e=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,0,Ve,Re,$e,Ee)}o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(Oe.length>0){if(at&&ct){const Me=Et(Oe[0]);i.texStorage2D(o.TEXTURE_2D,He,Le,Me.width,Me.height)}for(let Me=0,ze=Oe.length;Me<ze;Me++)Fe=Oe[Me],at?J&&i.texSubImage2D(o.TEXTURE_2D,Me,0,0,Ue,we,Fe):i.texImage2D(o.TEXTURE_2D,Me,Le,Ue,we,Fe);E.generateMipmaps=!1}else if(at){if(ct){const Me=Et(Ee);i.texStorage2D(o.TEXTURE_2D,He,Le,Me.width,Me.height)}J&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ue,we,Ee)}else i.texImage2D(o.TEXTURE_2D,0,Le,Ue,we,Ee);S(E)&&N(fe),Ge.__version=Ie.version,E.onUpdate&&E.onUpdate(E)}z.__version=E.version}function De(z,E,re){if(E.image.length!==6)return;const fe=se(z,E),xe=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,z.__webglTexture,o.TEXTURE0+re);const Ie=s.get(xe);if(xe.version!==Ie.__version||fe===!0){i.activeTexture(o.TEXTURE0+re);const Ge=Ht.getPrimaries(Ht.workingColorSpace),ye=E.colorSpace===Ms?null:Ht.getPrimaries(E.colorSpace),Ee=E.colorSpace===Ms||Ge===ye?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Ue=E.isCompressedTexture||E.image[0].isCompressedTexture,we=E.image[0]&&E.image[0].isDataTexture,Le=[];for(let Re=0;Re<6;Re++)!Ue&&!we?Le[Re]=y(E.image[Re],!0,l.maxCubemapSize):Le[Re]=we?E.image[Re].image:E.image[Re],Le[Re]=Wt(E,Le[Re]);const Fe=Le[0],Oe=u.convert(E.format,E.colorSpace),at=u.convert(E.type),ct=R(E.internalFormat,Oe,at,E.normalized,E.colorSpace),J=E.isVideoTexture!==!0,He=Ie.__version===void 0||fe===!0,Me=xe.dataReady;let ze=C(E,Fe);X(o.TEXTURE_CUBE_MAP,E);let Ve;if(Ue){J&&He&&i.texStorage2D(o.TEXTURE_CUBE_MAP,ze,ct,Fe.width,Fe.height);for(let Re=0;Re<6;Re++){Ve=Le[Re].mipmaps;for(let $e=0;$e<Ve.length;$e++){const qe=Ve[$e];E.format!==Xi?Oe!==null?J?Me&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,$e,0,0,qe.width,qe.height,Oe,qe.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,$e,ct,qe.width,qe.height,0,qe.data):ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):J?Me&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,$e,0,0,qe.width,qe.height,Oe,at,qe.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,$e,ct,qe.width,qe.height,0,Oe,at,qe.data)}}}else{if(Ve=E.mipmaps,J&&He){Ve.length>0&&ze++;const Re=Et(Le[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,ze,ct,Re.width,Re.height)}for(let Re=0;Re<6;Re++)if(we){J?Me&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,Le[Re].width,Le[Re].height,Oe,at,Le[Re].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,ct,Le[Re].width,Le[Re].height,0,Oe,at,Le[Re].data);for(let $e=0;$e<Ve.length;$e++){const yt=Ve[$e].image[Re].image;J?Me&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,$e+1,0,0,yt.width,yt.height,Oe,at,yt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,$e+1,ct,yt.width,yt.height,0,Oe,at,yt.data)}}else{J?Me&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,Oe,at,Le[Re]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,ct,Oe,at,Le[Re]);for(let $e=0;$e<Ve.length;$e++){const qe=Ve[$e];J?Me&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,$e+1,0,0,Oe,at,qe.image[Re]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Re,$e+1,ct,Oe,at,qe.image[Re])}}}S(E)&&N(o.TEXTURE_CUBE_MAP),Ie.__version=xe.version,E.onUpdate&&E.onUpdate(E)}z.__version=E.version}function de(z,E,re,fe,xe,Ie){const Ge=u.convert(re.format,re.colorSpace),ye=u.convert(re.type),Ee=R(re.internalFormat,Ge,ye,re.normalized,re.colorSpace),Ue=s.get(E),we=s.get(re);if(we.__renderTarget=E,!Ue.__hasExternalTextures){const Le=Math.max(1,E.width>>Ie),Fe=Math.max(1,E.height>>Ie);xe===o.TEXTURE_3D||xe===o.TEXTURE_2D_ARRAY?i.texImage3D(xe,Ie,Ee,Le,Fe,E.depth,0,Ge,ye,null):i.texImage2D(xe,Ie,Ee,Le,Fe,0,Ge,ye,null)}i.bindFramebuffer(o.FRAMEBUFFER,z),gt(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,fe,xe,we.__webglTexture,0,mt(E)):(xe===o.TEXTURE_2D||xe>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,fe,xe,we.__webglTexture,Ie),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ne(z,E,re){if(o.bindRenderbuffer(o.RENDERBUFFER,z),E.depthBuffer){const fe=E.depthTexture,xe=fe&&fe.isDepthTexture?fe.type:null,Ie=D(E.stencilBuffer,xe),Ge=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;gt(E)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,mt(E),Ie,E.width,E.height):re?o.renderbufferStorageMultisample(o.RENDERBUFFER,mt(E),Ie,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Ie,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ge,o.RENDERBUFFER,z)}else{const fe=E.textures;for(let xe=0;xe<fe.length;xe++){const Ie=fe[xe],Ge=u.convert(Ie.format,Ie.colorSpace),ye=u.convert(Ie.type),Ee=R(Ie.internalFormat,Ge,ye,Ie.normalized,Ie.colorSpace);gt(E)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,mt(E),Ee,E.width,E.height):re?o.renderbufferStorageMultisample(o.RENDERBUFFER,mt(E),Ee,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Ee,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function st(z,E,re){const fe=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,z),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const xe=s.get(E.depthTexture);if(xe.__renderTarget=E,(!xe.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),fe){if(xe.__webglInit===void 0&&(xe.__webglInit=!0,E.depthTexture.addEventListener("dispose",I)),xe.__webglTexture===void 0){xe.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,xe.__webglTexture),X(o.TEXTURE_CUBE_MAP,E.depthTexture);const Ue=u.convert(E.depthTexture.format),we=u.convert(E.depthTexture.type);let Le;E.depthTexture.format===Va?Le=o.DEPTH_COMPONENT24:E.depthTexture.format===$s&&(Le=o.DEPTH24_STENCIL8);for(let Fe=0;Fe<6;Fe++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,Le,E.width,E.height,0,Ue,we,null)}}else ge(E.depthTexture,0);const Ie=xe.__webglTexture,Ge=mt(E),ye=fe?o.TEXTURE_CUBE_MAP_POSITIVE_X+re:o.TEXTURE_2D,Ee=E.depthTexture.format===$s?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(E.depthTexture.format===Va)gt(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Ee,ye,Ie,0,Ge):o.framebufferTexture2D(o.FRAMEBUFFER,Ee,ye,Ie,0);else if(E.depthTexture.format===$s)gt(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Ee,ye,Ie,0,Ge):o.framebufferTexture2D(o.FRAMEBUFFER,Ee,ye,Ie,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ke(z){const E=s.get(z),re=z.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==z.depthTexture){const fe=z.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),fe){const xe=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,fe.removeEventListener("dispose",xe)};fe.addEventListener("dispose",xe),E.__depthDisposeCallback=xe}E.__boundDepthTexture=fe}if(z.depthTexture&&!E.__autoAllocateDepthBuffer)if(re)for(let fe=0;fe<6;fe++)st(E.__webglFramebuffer[fe],z,fe);else{const fe=z.texture.mipmaps;fe&&fe.length>0?st(E.__webglFramebuffer[0],z,0):st(E.__webglFramebuffer,z,0)}else if(re){E.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[fe]),E.__webglDepthbuffer[fe]===void 0)E.__webglDepthbuffer[fe]=o.createRenderbuffer(),Ne(E.__webglDepthbuffer[fe],z,!1);else{const xe=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ie=E.__webglDepthbuffer[fe];o.bindRenderbuffer(o.RENDERBUFFER,Ie),o.framebufferRenderbuffer(o.FRAMEBUFFER,xe,o.RENDERBUFFER,Ie)}}else{const fe=z.texture.mipmaps;if(fe&&fe.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),Ne(E.__webglDepthbuffer,z,!1);else{const xe=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ie=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Ie),o.framebufferRenderbuffer(o.FRAMEBUFFER,xe,o.RENDERBUFFER,Ie)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function it(z,E,re){const fe=s.get(z);E!==void 0&&de(fe.__webglFramebuffer,z,z.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),re!==void 0&&ke(z)}function lt(z){const E=z.texture,re=s.get(z),fe=s.get(E);z.addEventListener("dispose",M);const xe=z.textures,Ie=z.isWebGLCubeRenderTarget===!0,Ge=xe.length>1;if(Ge||(fe.__webglTexture===void 0&&(fe.__webglTexture=o.createTexture()),fe.__version=E.version,d.memory.textures++),Ie){re.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(E.mipmaps&&E.mipmaps.length>0){re.__webglFramebuffer[ye]=[];for(let Ee=0;Ee<E.mipmaps.length;Ee++)re.__webglFramebuffer[ye][Ee]=o.createFramebuffer()}else re.__webglFramebuffer[ye]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){re.__webglFramebuffer=[];for(let ye=0;ye<E.mipmaps.length;ye++)re.__webglFramebuffer[ye]=o.createFramebuffer()}else re.__webglFramebuffer=o.createFramebuffer();if(Ge)for(let ye=0,Ee=xe.length;ye<Ee;ye++){const Ue=s.get(xe[ye]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=o.createTexture(),d.memory.textures++)}if(z.samples>0&&gt(z)===!1){re.__webglMultisampledFramebuffer=o.createFramebuffer(),re.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,re.__webglMultisampledFramebuffer);for(let ye=0;ye<xe.length;ye++){const Ee=xe[ye];re.__webglColorRenderbuffer[ye]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,re.__webglColorRenderbuffer[ye]);const Ue=u.convert(Ee.format,Ee.colorSpace),we=u.convert(Ee.type),Le=R(Ee.internalFormat,Ue,we,Ee.normalized,Ee.colorSpace,z.isXRRenderTarget===!0),Fe=mt(z);o.renderbufferStorageMultisample(o.RENDERBUFFER,Fe,Le,z.width,z.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ye,o.RENDERBUFFER,re.__webglColorRenderbuffer[ye])}o.bindRenderbuffer(o.RENDERBUFFER,null),z.depthBuffer&&(re.__webglDepthRenderbuffer=o.createRenderbuffer(),Ne(re.__webglDepthRenderbuffer,z,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Ie){i.bindTexture(o.TEXTURE_CUBE_MAP,fe.__webglTexture),X(o.TEXTURE_CUBE_MAP,E);for(let ye=0;ye<6;ye++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ee=0;Ee<E.mipmaps.length;Ee++)de(re.__webglFramebuffer[ye][Ee],z,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ee);else de(re.__webglFramebuffer[ye],z,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);S(E)&&N(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ge){for(let ye=0,Ee=xe.length;ye<Ee;ye++){const Ue=xe[ye],we=s.get(Ue);let Le=o.TEXTURE_2D;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Le=z.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Le,we.__webglTexture),X(Le,Ue),de(re.__webglFramebuffer,z,Ue,o.COLOR_ATTACHMENT0+ye,Le,0),S(Ue)&&N(Le)}i.unbindTexture()}else{let ye=o.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(ye=z.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(ye,fe.__webglTexture),X(ye,E),E.mipmaps&&E.mipmaps.length>0)for(let Ee=0;Ee<E.mipmaps.length;Ee++)de(re.__webglFramebuffer[Ee],z,E,o.COLOR_ATTACHMENT0,ye,Ee);else de(re.__webglFramebuffer,z,E,o.COLOR_ATTACHMENT0,ye,0);S(E)&&N(ye),i.unbindTexture()}z.depthBuffer&&ke(z)}function Pe(z){const E=z.textures;for(let re=0,fe=E.length;re<fe;re++){const xe=E[re];if(S(xe)){const Ie=F(z),Ge=s.get(xe).__webglTexture;i.bindTexture(Ie,Ge),N(Ie),i.unbindTexture()}}}const Be=[],ot=[];function ft(z){if(z.samples>0){if(gt(z)===!1){const E=z.textures,re=z.width,fe=z.height;let xe=o.COLOR_BUFFER_BIT;const Ie=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ge=s.get(z),ye=E.length>1;if(ye)for(let Ue=0;Ue<E.length;Ue++)i.bindFramebuffer(o.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ue,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ge.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ue,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer);const Ee=z.texture.mipmaps;Ee&&Ee.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let Ue=0;Ue<E.length;Ue++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(xe|=o.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(xe|=o.STENCIL_BUFFER_BIT)),ye){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ge.__webglColorRenderbuffer[Ue]);const we=s.get(E[Ue]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,we,0)}o.blitFramebuffer(0,0,re,fe,0,0,re,fe,xe,o.NEAREST),m===!0&&(Be.length=0,ot.length=0,Be.push(o.COLOR_ATTACHMENT0+Ue),z.depthBuffer&&z.storeMultisampledDepthBuffer===!1&&(Be.push(Ie),ot.push(Ie),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ot)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Be))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),ye)for(let Ue=0;Ue<E.length;Ue++){i.bindFramebuffer(o.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ue,o.RENDERBUFFER,Ge.__webglColorRenderbuffer[Ue]);const we=s.get(E[Ue]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ge.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ue,o.TEXTURE_2D,we,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.storeMultisampledDepthBuffer===!1&&m){const E=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function mt(z){return Math.min(l.maxSamples,z.samples)}function gt(z){const E=s.get(z);return z.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Q(z){const E=d.render.frame;x.get(z)!==E&&(x.set(z,E),z.update())}function Wt(z,E){const re=z.colorSpace,fe=z.format,xe=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||re!==Bu&&re!==Ms&&(Ht.getTransfer(re)===Qt?(fe!==Xi||xe!==xi)&&ht("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Vt("WebGLTextures: Unsupported texture color space:",re)),E}function Et(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(g.width=z.naturalWidth||z.width,g.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(g.width=z.displayWidth,g.height=z.displayHeight):(g.width=z.width,g.height=z.height),g}this.allocateTextureUnit=Z,this.resetTextureUnits=ce,this.getTextureUnits=$,this.setTextureUnits=te,this.setTexture2D=ge,this.setTexture2DArray=le,this.setTexture3D=O,this.setTextureCube=P,this.rebindTextures=it,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=Pe,this.updateMultisampleRenderTarget=ft,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=de,this.useMultisampledRTT=gt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function t3(o,t){function i(s,l=Ms){let u;const d=Ht.getTransfer(l);if(s===xi)return o.UNSIGNED_BYTE;if(s===Jp)return o.UNSIGNED_SHORT_4_4_4_4;if(s===$p)return o.UNSIGNED_SHORT_5_5_5_1;if(s===tS)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===nS)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===$x)return o.BYTE;if(s===eS)return o.SHORT;if(s===Nl)return o.UNSIGNED_SHORT;if(s===Qp)return o.INT;if(s===da)return o.UNSIGNED_INT;if(s===ca)return o.FLOAT;if(s===ha)return o.HALF_FLOAT;if(s===iS)return o.ALPHA;if(s===aS)return o.RGB;if(s===Xi)return o.RGBA;if(s===Va)return o.DEPTH_COMPONENT;if(s===$s)return o.DEPTH_STENCIL;if(s===sS)return o.RED;if(s===em)return o.RED_INTEGER;if(s===ir)return o.RG;if(s===tm)return o.RG_INTEGER;if(s===nm)return o.RGBA_INTEGER;if(s===Du||s===Uu||s===Lu||s===Ou)if(d===Qt)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===Du)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Uu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Lu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ou)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===Du)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Uu)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Lu)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ou)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===mp||s===gp||s===vp||s===_p)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===mp)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===gp)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===vp)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===_p)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===xp||s===Sp||s===yp||s===Mp||s===bp||s===Iu||s===Ep)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(s===xp||s===Sp)return d===Qt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===yp)return d===Qt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(s===Mp)return u.COMPRESSED_R11_EAC;if(s===bp)return u.COMPRESSED_SIGNED_R11_EAC;if(s===Iu)return u.COMPRESSED_RG11_EAC;if(s===Ep)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Tp||s===Ap||s===wp||s===Rp||s===Cp||s===Np||s===Dp||s===Up||s===Lp||s===Op||s===Pp||s===Ip||s===zp||s===Bp)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(s===Tp)return d===Qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ap)return d===Qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===wp)return d===Qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Rp)return d===Qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Cp)return d===Qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Np)return d===Qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Dp)return d===Qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Up)return d===Qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Lp)return d===Qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Op)return d===Qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Pp)return d===Qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ip)return d===Qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===zp)return d===Qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Bp)return d===Qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Fp||s===Hp||s===Gp)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(s===Fp)return d===Qt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Hp)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Gp)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Vp||s===kp||s===zu||s===Xp)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(s===Vp)return u.COMPRESSED_RED_RGTC1_EXT;if(s===kp)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===zu)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Xp)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Dl?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const n3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,i3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class a3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new dS(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new pa({vertexShader:n3,fragmentShader:i3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new xt(new ar(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class s3 extends sr{constructor(t,i){super();const s=this;let l=null,u=1,d=null,h="local-floor",m=1,g=null,x=null,v=null,p=null,b=null,A=null;const L=typeof XRWebGLBinding<"u",y=new a3,S={},N=i.getContextAttributes();let F=null,R=null;const D=[],C=[],I=new Nt;let M=null,U=null;const k=new ii;k.viewport=new cn;const W=new ii;W.viewport=new cn;const Y=[k,W],ce=new dE;let $=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let ee=D[H];return ee===void 0&&(ee=new Bh,D[H]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(H){let ee=D[H];return ee===void 0&&(ee=new Bh,D[H]=ee),ee.getGripSpace()},this.getHand=function(H){let ee=D[H];return ee===void 0&&(ee=new Bh,D[H]=ee),ee.getHandSpace()};function Z(H){const ee=C.indexOf(H.inputSource);if(ee===-1)return;const Se=D[ee];Se!==void 0&&(Se.update(H.inputSource,H.frame,g||d),Se.dispatchEvent({type:H.type,data:H.inputSource}))}function K(){l.removeEventListener("select",Z),l.removeEventListener("selectstart",Z),l.removeEventListener("selectend",Z),l.removeEventListener("squeeze",Z),l.removeEventListener("squeezestart",Z),l.removeEventListener("squeezeend",Z),l.removeEventListener("end",K),l.removeEventListener("inputsourceschange",ge);for(let H=0;H<D.length;H++){const ee=C[H];ee!==null&&(C[H]=null,D[H].disconnect(ee))}$=null,te=null,y.reset();for(const H in S)delete S[H];if(t.setRenderTarget(F),b=null,p=null,v=null,l=null,R=null,se.stop(),s.isPresenting=!1,t.setPixelRatio(M),t.setSize(I.width,I.height,!1),U!==null){const H=U.camera;H.fov=U.fov,H.zoom=U.zoom,H.updateProjectionMatrix(),U=null}s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){u=H,s.isPresenting===!0&&ht("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){h=H,s.isPresenting===!0&&ht("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return g||d},this.setReferenceSpace=function(H){g=H},this.getBaseLayer=function(){return p!==null?p:b},this.getBinding=function(){return v===null&&L&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(H){if(l=H,l!==null){if(F=t.getRenderTarget(),l.addEventListener("select",Z),l.addEventListener("selectstart",Z),l.addEventListener("selectend",Z),l.addEventListener("squeeze",Z),l.addEventListener("squeezestart",Z),l.addEventListener("squeezeend",Z),l.addEventListener("end",K),l.addEventListener("inputsourceschange",ge),N.xrCompatible!==!0&&await i.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(I),L&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,De=null,de=null;N.depth&&(de=N.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Se=N.stencil?$s:Va,De=N.stencil?Dl:da);const Ne={colorFormat:i.RGBA8,depthFormat:de,scaleFactor:u};v=this.getBinding(),p=v.createProjectionLayer(Ne),l.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),R=new Wi(p.textureWidth,p.textureHeight,{format:Xi,type:xi,depthTexture:new Ll(p.textureWidth,p.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:N.stencil,colorSpace:t.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}else{const Se={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:u};b=new XRWebGLLayer(l,i,Se),l.updateRenderState({baseLayer:b}),t.setPixelRatio(1),t.setSize(b.framebufferWidth,b.framebufferHeight,!1),R=new Wi(b.framebufferWidth,b.framebufferHeight,{format:Xi,type:xi,colorSpace:t.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1,storeMultisampledDepthBuffer:b.ignoreDepthValues===!1,storeMultisampledStencilBuffer:b.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(m),g=null,d=await l.requestReferenceSpace(h),se.setContext(l),se.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function ge(H){for(let ee=0;ee<H.removed.length;ee++){const Se=H.removed[ee],De=C.indexOf(Se);De>=0&&(C[De]=null,D[De].disconnect(Se))}for(let ee=0;ee<H.added.length;ee++){const Se=H.added[ee];let De=C.indexOf(Se);if(De===-1){for(let Ne=0;Ne<D.length;Ne++)if(Ne>=C.length){C.push(Se),De=Ne;break}else if(C[Ne]===null){C[Ne]=Se,De=Ne;break}if(De===-1)break}const de=D[De];de&&de.connect(Se)}}const le=new oe,O=new oe;function P(H,ee,Se){le.setFromMatrixPosition(ee.matrixWorld),O.setFromMatrixPosition(Se.matrixWorld);const De=le.distanceTo(O),de=ee.projectionMatrix.elements,Ne=Se.projectionMatrix.elements,st=de[14]/(de[10]-1),ke=de[14]/(de[10]+1),it=(de[9]+1)/de[5],lt=(de[9]-1)/de[5],Pe=(de[8]-1)/de[0],Be=(Ne[8]+1)/Ne[0],ot=st*Pe,ft=st*Be,mt=De/(-Pe+Be),gt=mt*-Pe;if(ee.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(gt),H.translateZ(mt),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),de[10]===-1)H.projectionMatrix.copy(ee.projectionMatrix),H.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const Q=st+mt,Wt=ke+mt,Et=ot-gt,z=ft+(De-gt),E=it*ke/Wt*Q,re=lt*ke/Wt*Q;H.projectionMatrix.makePerspective(Et,z,E,re,Q,Wt),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function be(H,ee){ee===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(ee.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(l===null)return;let ee=H.near,Se=H.far;y.texture!==null&&(y.depthNear>0&&(ee=y.depthNear),y.depthFar>0&&(Se=y.depthFar)),ce.near=W.near=k.near=ee,ce.far=W.far=k.far=Se,($!==ce.near||te!==ce.far)&&(l.updateRenderState({depthNear:ce.near,depthFar:ce.far}),$=ce.near,te=ce.far),ce.layers.mask=H.layers.mask|6,k.layers.mask=ce.layers.mask&-5,W.layers.mask=ce.layers.mask&-3;const De=H.parent,de=ce.cameras;be(ce,De);for(let Ne=0;Ne<de.length;Ne++)be(de[Ne],De);de.length===2?P(ce,k,W):ce.projectionMatrix.copy(k.projectionMatrix),U===null&&H.isPerspectiveCamera&&(U={camera:H,fov:H.fov,zoom:H.zoom}),Ce(H,ce,De)};function Ce(H,ee,Se){Se===null?H.matrix.copy(ee.matrixWorld):(H.matrix.copy(Se.matrixWorld),H.matrix.invert(),H.matrix.multiply(ee.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(ee.projectionMatrix),H.projectionMatrixInverse.copy(ee.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=po*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return ce},this.getFoveation=function(){if(!(p===null&&b===null))return m},this.setFoveation=function(H){m=H,p!==null&&(p.fixedFoveation=H),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=H)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(ce)},this.getCameraTexture=function(H){return S[H]};let B=null;function X(H,ee){if(x=ee.getViewerPose(g||d),A=ee,x!==null){const Se=x.views;b!==null&&(t.setRenderTargetFramebuffer(R,b.framebuffer),t.setRenderTarget(R));let De=!1;Se.length!==ce.cameras.length&&(ce.cameras.length=0,De=!0);for(let ke=0;ke<Se.length;ke++){const it=Se[ke];let lt=null;if(b!==null)lt=b.getViewport(it);else{const Be=v.getViewSubImage(p,it);lt=Be.viewport,ke===0&&(t.setRenderTargetTextures(R,Be.colorTexture,Be.depthStencilTexture),t.setRenderTarget(R))}let Pe=Y[ke];Pe===void 0&&(Pe=new ii,Pe.layers.enable(ke),Pe.viewport=new cn,Y[ke]=Pe),Pe.matrix.fromArray(it.transform.matrix),Pe.matrix.decompose(Pe.position,Pe.quaternion,Pe.scale),Pe.projectionMatrix.fromArray(it.projectionMatrix),Pe.projectionMatrixInverse.copy(Pe.projectionMatrix).invert(),Pe.viewport.set(lt.x,lt.y,lt.width,lt.height),ke===0&&(ce.matrix.copy(Pe.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale)),De===!0&&ce.cameras.push(Pe)}const de=l.enabledFeatures;if(de&&de.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&L){v=s.getBinding();const ke=v.getDepthInformation(Se[0]);ke&&ke.isValid&&ke.texture&&y.init(ke,l.renderState)}if(de&&de.includes("camera-access")&&L){t.state.unbindTexture(),v=s.getBinding();for(let ke=0;ke<Se.length;ke++){const it=Se[ke].camera;if(it){let lt=S[it];lt||(lt=new dS,S[it]=lt);const Pe=v.getCameraImage(it);lt.sourceTexture=Pe}}}}for(let Se=0;Se<D.length;Se++){const De=C[Se],de=D[Se];De!==null&&de!==void 0&&de.update(De,ee,g||d)}B&&B(H,ee),ee.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ee}),A=null}const se=new mS;se.setAnimationLoop(X),this.setAnimationLoop=function(H){B=H},this.dispose=function(){}}}const r3=new on,MS=new St;MS.set(-1,0,0,0,1,0,0,0,1);function o3(o,t){function i(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function s(y,S){S.color.getRGB(y.fogColor.value,hS(o)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function l(y,S,N,F,R){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?u(y,S):S.isMeshLambertMaterial?(u(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(u(y,S),v(y,S)):S.isMeshPhongMaterial?(u(y,S),x(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(u(y,S),p(y,S),S.isMeshPhysicalMaterial&&b(y,S,R)):S.isMeshMatcapMaterial?(u(y,S),A(y,S)):S.isMeshDepthMaterial?u(y,S):S.isMeshDistanceMaterial?(u(y,S),L(y,S)):S.isMeshNormalMaterial?u(y,S):S.isLineBasicMaterial?(d(y,S),S.isLineDashedMaterial&&h(y,S)):S.isPointsMaterial?m(y,S,N,F):S.isSpriteMaterial?g(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function u(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,i(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,i(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===ai&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,i(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===ai&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,i(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,i(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const N=t.get(S),F=N.envMap,R=N.envMapRotation;F&&(y.envMap.value=F,y.envMapRotation.value.setFromMatrix4(r3.makeRotationFromEuler(R)).transpose(),F.isCubeTexture&&F.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(MS),y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,y.aoMapTransform))}function d(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,i(S.map,y.mapTransform))}function h(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function m(y,S,N,F){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*N,y.scale.value=F*.5,S.map&&(y.map.value=S.map,i(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function g(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,i(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function x(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function v(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function p(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function b(y,S,N){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===ai&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.retroreflectivity>0&&(y.retroreflectivity.value=S.retroreflectivity),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=N.texture,y.transmissionSamplerSize.value.set(N.width,N.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,y.specularIntensityMapTransform))}function A(y,S){S.matcap&&(y.matcap.value=S.matcap)}function L(y,S){const N=t.get(S).light;y.referencePosition.value.setFromMatrixPosition(N.matrixWorld),y.nearDistance.value=N.shadow.camera.near,y.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function l3(o,t,i,s){let l={},u={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(R,D){const C=D.program;s.uniformBlockBinding(R,C)}function g(R,D){let C=l[R.id];C===void 0&&(y(R),C=x(R),l[R.id]=C,R.addEventListener("dispose",N));const I=D.program;s.updateUBOMapping(R,I);const M=t.render.frame;u[R.id]!==M&&(p(R),u[R.id]=M)}function x(R){const D=v();R.__bindingPointIndex=D;const C=o.createBuffer(),I=R.__size,M=R.usage;return o.bindBuffer(o.UNIFORM_BUFFER,C),o.bufferData(o.UNIFORM_BUFFER,I,M),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,D,C),C}function v(){for(let R=0;R<h;R++)if(d.indexOf(R)===-1)return d.push(R),R;return Vt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(R){const D=l[R.id],C=R.uniforms,I=R.__cache;o.bindBuffer(o.UNIFORM_BUFFER,D);for(let M=0,U=C.length;M<U;M++){const k=C[M];if(Array.isArray(k))for(let W=0,Y=k.length;W<Y;W++)b(k[W],M,W,I);else b(k,M,0,I)}o.bindBuffer(o.UNIFORM_BUFFER,null)}function b(R,D,C,I){if(L(R,D,C,I)===!0){const M=R.__offset,U=R.value;if(Array.isArray(U)){let k=0;for(let W=0;W<U.length;W++){const Y=U[W],ce=S(Y);A(Y,R.__data,k),typeof Y!="number"&&typeof Y!="boolean"&&!Y.isMatrix3&&!ArrayBuffer.isView(Y)&&(k+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}}else A(U,R.__data,0);o.bufferSubData(o.UNIFORM_BUFFER,M,R.__data)}}function A(R,D,C){typeof R=="number"||typeof R=="boolean"?D[0]=R:R.isMatrix3?(D[0]=R.elements[0],D[1]=R.elements[1],D[2]=R.elements[2],D[3]=0,D[4]=R.elements[3],D[5]=R.elements[4],D[6]=R.elements[5],D[7]=0,D[8]=R.elements[6],D[9]=R.elements[7],D[10]=R.elements[8],D[11]=0):ArrayBuffer.isView(R)?D.set(new R.constructor(R.buffer,R.byteOffset,D.length)):R.toArray(D,C)}function L(R,D,C,I){const M=R.value,U=D+"_"+C;if(I[U]===void 0)return typeof M=="number"||typeof M=="boolean"?I[U]=M:ArrayBuffer.isView(M)?I[U]=M.slice():I[U]=M.clone(),!0;{const k=I[U];if(typeof M=="number"||typeof M=="boolean"){if(k!==M)return I[U]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(k.equals(M)===!1)return k.copy(M),!0}}return!1}function y(R){const D=R.uniforms;let C=0;const I=16;for(let U=0,k=D.length;U<k;U++){const W=Array.isArray(D[U])?D[U]:[D[U]];for(let Y=0,ce=W.length;Y<ce;Y++){const $=W[Y],te=Array.isArray($.value)?$.value:[$.value];for(let Z=0,K=te.length;Z<K;Z++){const ge=te[Z],le=S(ge),O=C%I,P=O%le.boundary,be=O+P;C+=P,be!==0&&I-be<le.storage&&(C+=I-be),$.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=C,C+=le.storage}}}const M=C%I;return M>0&&(C+=I-M),R.__size=C,R.__cache={},this}function S(R){const D={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(D.boundary=4,D.storage=4):R.isVector2?(D.boundary=8,D.storage=8):R.isVector3||R.isColor?(D.boundary=16,D.storage=12):R.isVector4?(D.boundary=16,D.storage=16):R.isMatrix3?(D.boundary=48,D.storage=48):R.isMatrix4?(D.boundary=64,D.storage=64):R.isTexture?ht("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(D.boundary=16,D.storage=R.byteLength):ht("WebGLRenderer: Unsupported uniform value type.",R),D}function N(R){const D=R.target;D.removeEventListener("dispose",N);const C=d.indexOf(D.__bindingPointIndex);d.splice(C,1),o.deleteBuffer(l[D.id]),delete l[D.id],delete u[D.id]}function F(){for(const R in l)o.deleteBuffer(l[R]);d=[],l={},u={}}return{bind:m,update:g,dispose:F}}const c3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let oa=null;function u3(){return oa===null&&(oa=new W1(c3,16,16,ir,ha),oa.name="DFG_LUT",oa.minFilter=Vn,oa.magFilter=Vn,oa.wrapS=za,oa.wrapT=za,oa.generateMipmaps=!1,oa.needsUpdate=!0),oa}class f3{constructor(t={}){const{canvas:i=a1(),context:s=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:g=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:p=!1,outputBufferType:b=xi}=t;this.isWebGLRenderer=!0;let A;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=s.getContextAttributes().alpha}else A=d;const L=b,y=new Set([nm,tm,em]),S=new Set([xi,da,Nl,Dl,Jp,$p]),N=new Uint32Array(4),F=new Int32Array(4),R=new oe;let D=null,C=null;const I=[],M=[];let U=null;this.domElement=i,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const k=this;let W=!1,Y=null,ce=null,$=null,te=null;this._outputColorSpace=Ui;let Z=0,K=0,ge=null,le=-1,O=null;const P=new cn,be=new cn;let Ce=null;const B=new Ot(0);let X=0,se=i.width,H=i.height,ee=1,Se=null,De=null;const de=new cn(0,0,se,H),Ne=new cn(0,0,se,H);let st=!1;const ke=new um;let it=!1,lt=!1;const Pe=new on,Be=new oe,ot=new cn,ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let mt=!1;function gt(){return ge===null?ee:1}let Q=s;function Wt(T,q){return i.getContext(T,q)}let Et,z,E,re,fe,xe,Ie,Ge,ye,Ee,Ue,we,Le,Fe,Oe,at,ct,J,He,Me,ze,Ve,Re;try{const T={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:g,powerPreference:x,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Kp}`),i.addEventListener("webglcontextlost",yt,!1),i.addEventListener("webglcontextrestored",vt,!1),i.addEventListener("webglcontextcreationerror",ri,!1),Q===null){const q="webgl2";if(Q=Wt(q,T),Q===null)throw Wt(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}$e()}catch(T){throw i.removeEventListener("webglcontextlost",yt,!1),i.removeEventListener("webglcontextrestored",vt,!1),i.removeEventListener("webglcontextcreationerror",ri,!1),Vt("WebGLRenderer: "+T.message),T}function $e(){Et=new u2(Q),Et.init(),ze=new t3(Q,Et),z=new e2(Q,Et,t,ze),E=new $w(Q,Et),z.reversedDepthBuffer&&p&&E.buffers.depth.setReversed(!0),ce=Q.createFramebuffer(),$=Q.createFramebuffer(),te=Q.createFramebuffer(),re=new h2(Q),fe=new Fw,xe=new e3(Q,Et,E,fe,z,ze,re),Ie=new c2(k),Ge=new mE(Q),Ve=new JA(Q,Ge),ye=new f2(Q,Ge,re,Ve),Ee=new m2(Q,ye,Ge,Ve,re),J=new p2(Q,z,xe),Oe=new t2(fe),Ue=new Bw(k,Ie,Et,z,Ve,Oe),we=new o3(k,fe),Le=new Gw,Fe=new Yw(Et),ct=new QA(k,Ie,E,Ee,A,m),at=new Jw(k,Ee,z),Re=new l3(Q,re,z,E),He=new $A(Q,Et,re),Me=new d2(Q,Et,re),re.programs=Ue.programs,k.capabilities=z,k.extensions=Et,k.properties=fe,k.renderLists=Le,k.shadowMap=at,k.state=E,k.info=re}L!==xi&&(U=new v2(L,i.width,i.height,h,l,u));const qe=new s3(k,Q);this.xr=qe,this.getContext=function(){return Q},this.getContextAttributes=function(){return Q.getContextAttributes()},this.forceContextLoss=function(){const T=Et.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Et.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(T){T!==void 0&&(ee=T,this.setSize(se,H,!1))},this.getSize=function(T){return T.set(se,H)},this.setSize=function(T,q,_e=!0){if(qe.isPresenting){ht("WebGLRenderer: Can't change size while VR device is presenting.");return}se=T,H=q,i.width=Math.floor(T*ee),i.height=Math.floor(q*ee),_e===!0&&(i.style.width=T+"px",i.style.height=q+"px"),U!==null&&U.setSize(i.width,i.height),this.setViewport(0,0,T,q)},this.getDrawingBufferSize=function(T){return T.set(se*ee,H*ee).floor()},this.setDrawingBufferSize=function(T,q,_e){se=T,H=q,ee=_e,i.width=Math.floor(T*_e),i.height=Math.floor(q*_e),this.setViewport(0,0,T,q)},this.setEffects=function(T){if(L===xi){Vt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let q=0;q<T.length;q++)if(T[q].isOutputPass===!0){ht("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(P)},this.getViewport=function(T){return T.copy(de)},this.setViewport=function(T,q,_e,he){T.isVector4?de.set(T.x,T.y,T.z,T.w):de.set(T,q,_e,he),E.viewport(P.copy(de).multiplyScalar(ee).round())},this.getScissor=function(T){return T.copy(Ne)},this.setScissor=function(T,q,_e,he){T.isVector4?Ne.set(T.x,T.y,T.z,T.w):Ne.set(T,q,_e,he),E.scissor(be.copy(Ne).multiplyScalar(ee).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(T){E.setScissorTest(st=T)},this.setOpaqueSort=function(T){Se=T},this.setTransparentSort=function(T){De=T},this.getClearColor=function(T){return T.copy(ct.getClearColor())},this.setClearColor=function(){ct.setClearColor(...arguments)},this.getClearAlpha=function(){return ct.getClearAlpha()},this.setClearAlpha=function(){ct.setClearAlpha(...arguments)},this.clear=function(T=!0,q=!0,_e=!0){let he=0;if(T){let pe=!1;if(ge!==null){const Ye=ge.texture.format;pe=y.has(Ye)}if(pe){const Ye=ge.texture.type,Ke=S.has(Ye),Xe=ct.getClearColor(),et=ct.getClearAlpha(),tt=Xe.r,dt=Xe.g,_t=Xe.b;Ke?(N[0]=tt,N[1]=dt,N[2]=_t,N[3]=et,Q.clearBufferuiv(Q.COLOR,0,N)):(F[0]=tt,F[1]=dt,F[2]=_t,F[3]=et,Q.clearBufferiv(Q.COLOR,0,F))}else he|=Q.COLOR_BUFFER_BIT}q&&(he|=Q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),_e&&(he|=Q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),he!==0&&Q.clear(he)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),Y=T},this.dispose=function(){i.removeEventListener("webglcontextlost",yt,!1),i.removeEventListener("webglcontextrestored",vt,!1),i.removeEventListener("webglcontextcreationerror",ri,!1),ct.dispose(),Le.dispose(),Fe.dispose(),fe.dispose(),Ie.dispose(),Ee.dispose(),Ve.dispose(),Re.dispose(),Ue.dispose(),qe.dispose(),qe.removeEventListener("sessionstart",Ts),qe.removeEventListener("sessionend",Xa),qi.stop()};function yt(T){T.preventDefault(),G_("WebGLRenderer: Context Lost."),W=!0}function vt(){G_("WebGLRenderer: Context Restored."),W=!1;const T=re.autoReset,q=at.enabled,_e=at.autoUpdate,he=at.needsUpdate,pe=at.type;$e(),re.autoReset=T,at.enabled=q,at.autoUpdate=_e,at.needsUpdate=he,at.type=pe}function ri(T){Vt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Si(T){const q=T.target;q.removeEventListener("dispose",Si),Qu(q)}function Qu(T){or(T),fe.remove(T)}function or(T){const q=fe.get(T).programs;q!==void 0&&(q.forEach(function(_e){Ue.releaseProgram(_e)}),T.isShaderMaterial&&Ue.releaseShaderCache(T))}this.renderBufferDirect=function(T,q,_e,he,pe,Ye){q===null&&(q=ft);const Ke=pe.isMesh&&pe.matrixWorld.determinantAffine()<0,Xe=Ao(T,q,_e,he,pe);E.setMaterial(he,Ke);let et=_e.index,tt=1;if(he.wireframe===!0){if(et=ye.getWireframeAttribute(_e),et===void 0)return;tt=2}const dt=_e.drawRange,_t=_e.attributes.position;let Qe=dt.start*tt,Dt=(dt.start+dt.count)*tt;Ye!==null&&(Qe=Math.max(Qe,Ye.start*tt),Dt=Math.min(Dt,(Ye.start+Ye.count)*tt)),et!==null?(Qe=Math.max(Qe,0),Dt=Math.min(Dt,et.count)):_t!=null&&(Qe=Math.max(Qe,0),Dt=Math.min(Dt,_t.count));const At=Dt-Qe;if(At<0||At===1/0)return;Ve.setup(pe,he,Xe,_e,et);let Jt,qt=He;if(et!==null&&(Jt=Ge.get(et),qt=Me,qt.setIndex(Jt)),pe.isMesh)he.wireframe===!0?(E.setLineWidth(he.wireframeLinewidth*gt()),qt.setMode(Q.LINES)):qt.setMode(Q.TRIANGLES);else if(pe.isLine){let Mn=he.linewidth;Mn===void 0&&(Mn=1),E.setLineWidth(Mn*gt()),pe.isLineSegments?qt.setMode(Q.LINES):pe.isLineLoop?qt.setMode(Q.LINE_LOOP):qt.setMode(Q.LINE_STRIP)}else pe.isPoints?qt.setMode(Q.POINTS):pe.isSprite&&qt.setMode(Q.TRIANGLES);if(pe.isBatchedMesh)if(Et.get("WEBGL_multi_draw"))qt.renderMultiDraw(pe._multiDrawStarts,pe._multiDrawCounts,pe._multiDrawCount);else{const Mn=pe._multiDrawStarts,je=pe._multiDrawCounts,un=pe._multiDrawCount,Ft=et?Ge.get(et).bytesPerElement:1,Xn=fe.get(he).currentProgram.getUniforms();for(let oi=0;oi<un;oi++)Xn.setValue(Q,"_gl_DrawID",oi),qt.render(Mn[oi]/Ft,je[oi])}else if(pe.isInstancedMesh)qt.renderInstances(Qe,At,pe.count);else if(_e.isInstancedBufferGeometry){const Mn=_e._maxInstanceCount!==void 0?_e._maxInstanceCount:1/0,je=Math.min(_e.instanceCount,Mn);qt.renderInstances(Qe,At,je)}else qt.render(Qe,At)};function Es(T,q,_e,he){Y!==null&&T.isNodeMaterial&&Y.setObject(he,T),it===!0&&Oe.setState(T,_e,!1),T.transparent===!0&&T.side===Ia&&T.forceSinglePass===!1?(T.side=ai,T.needsUpdate=!0,As(T,q,he),T.side=tr,T.needsUpdate=!0,As(T,q,he),T.side=Ia):As(T,q,he)}this.compile=function(T,q,_e=null){_e===null&&(_e=T),Y!==null&&Y.renderStart(T,q,_e),C=Fe.get(_e),C.init(q),M.push(C),_e.traverseVisible(function(pe){pe.isLight&&pe.layers.test(q.layers)&&(C.pushLight(pe),pe.castShadow&&C.pushShadow(pe))}),T!==_e&&T.traverseVisible(function(pe){pe.isLight&&pe.layers.test(q.layers)&&(C.pushLight(pe),pe.castShadow&&C.pushShadow(pe))}),C.setupLights(),Y!==null&&Y.updateLights(C.state.lightsArray),lt=this.localClippingEnabled,it=Oe.init(this.clippingPlanes,lt),it===!0&&Oe.setGlobalState(this.clippingPlanes,q),Y!==null&&at.render(C.state.shadowsArray,_e,q);const he=new Set;return T.traverse(function(pe){if(!(pe.isMesh||pe.isPoints||pe.isLine||pe.isSprite))return;const Ye=pe.material;if(Ye)if(Array.isArray(Ye))for(let Ke=0;Ke<Ye.length;Ke++){const Xe=Ye[Ke];Es(Xe,_e,q,pe),he.add(Xe)}else Es(Ye,_e,q,pe),he.add(Ye)}),C=M.pop(),Y!==null&&Y.renderEnd(),he},this.compileAsync=function(T,q,_e=null){const he=this.compile(T,q,_e);return new Promise(pe=>{function Ye(){if(he.forEach(function(Ke){const et=fe.get(Ke).currentProgram;(et===void 0||et.isReady())&&he.delete(Ke)}),he.size===0){pe(T);return}setTimeout(Ye,10)}Et.get("KHR_parallel_shader_compile")!==null?Ye():setTimeout(Ye,10)})};let ka=null;function ma(T){ka&&ka(T)}function Ts(){qi.stop()}function Xa(){qi.start()}const qi=new mS;qi.setAnimationLoop(ma),typeof self<"u"&&qi.setContext(self),this.setAnimationLoop=function(T){ka=T,qe.setAnimationLoop(T),T===null?qi.stop():qi.start()},qe.addEventListener("sessionstart",Ts),qe.addEventListener("sessionend",Xa),this.render=function(T,q){if(q!==void 0&&q.isCamera!==!0){Vt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;Y!==null&&Y.renderStart(T,q);const _e=qe.enabled===!0&&qe.isPresenting===!0,he=U!==null&&(ge===null||_e)&&U.begin(k,ge);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),qe.enabled===!0&&qe.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(qe.cameraAutoUpdate===!0&&qe.updateCamera(q),q=qe.getCamera()),T.isScene===!0&&T.onBeforeRender(k,T,q,ge),C=Fe.get(T,M.length),C.init(q),C.state.textureUnits=xe.getTextureUnits(),M.push(C),Pe.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),ke.setFromProjectionMatrix(Pe,ua,q.reversedDepth),lt=this.localClippingEnabled,it=Oe.init(this.clippingPlanes,lt),D=Le.get(T,I.length),D.init(),I.push(D),qe.enabled===!0&&qe.isPresenting===!0){const Ke=k.xr.getDepthSensingMesh();Ke!==null&&yo(Ke,q,-1/0,k.sortObjects)}yo(T,q,0,k.sortObjects),D.finish(),Y!==null&&Y.updateLights(C.state.lightsArray),k.sortObjects===!0&&D.sort(Se,De),mt=qe.enabled===!1||qe.isPresenting===!1||qe.hasDepthSensing()===!1,mt&&ct.addToRenderList(D,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),it===!0&&Oe.beginShadows();const pe=C.state.shadowsArray;if(at.render(pe,T,q),it===!0&&Oe.endShadows(),(he&&U.hasRenderPass())===!1){const Ke=D.opaque,Xe=D.transmissive;if(C.setupLights(),q.isArrayCamera){const et=q.cameras;if(Xe.length>0)for(let tt=0,dt=et.length;tt<dt;tt++){const _t=et[tt];lr(Ke,Xe,T,_t)}mt&&ct.render(T);for(let tt=0,dt=et.length;tt<dt;tt++){const _t=et[tt];Mo(D,T,_t,_t.viewport)}}else Xe.length>0&&lr(Ke,Xe,T,q),mt&&ct.render(T),Mo(D,T,q)}ge!==null&&K===0&&(xe.updateMultisampleRenderTarget(ge),xe.updateRenderTargetMipmap(ge)),he&&U.end(k),T.isScene===!0&&T.onAfterRender(k,T,q),Ve.resetDefaultState(),le=-1,O=null,M.pop(),M.length>0?(C=M[M.length-1],xe.setTextureUnits(C.state.textureUnits),it===!0&&Oe.setGlobalState(k.clippingPlanes,C.state.camera)):C=null,I.pop(),I.length>0?D=I[I.length-1]:D=null,Y!==null&&Y.renderEnd()};function yo(T,q,_e,he){if(T.visible===!1)return;if(T.layers.test(q.layers)){if(T.isGroup)_e=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(q);else if(T.isLightProbeGrid)C.pushLightProbeGrid(T);else if(T.isLight)C.pushLight(T),T.castShadow&&C.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(ke)){he&&ot.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Pe);const Ke=Ee.update(T),Xe=T.material;Xe.visible&&D.push(T,Ke,Xe,_e,ot.z,null,q)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(ke))){const Ke=Ee.update(T),Xe=T.material;if(he&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ot.copy(T.boundingSphere.center)):(Ke.boundingSphere===null&&Ke.computeBoundingSphere(),ot.copy(Ke.boundingSphere.center)),ot.applyMatrix4(T.matrixWorld).applyMatrix4(Pe)),Array.isArray(Xe)){const et=Ke.groups;for(let tt=0,dt=et.length;tt<dt;tt++){const _t=et[tt],Qe=Xe[_t.materialIndex];Qe&&Qe.visible&&D.push(T,Ke,Qe,_e,ot.z,_t,q)}}else Xe.visible&&D.push(T,Ke,Xe,_e,ot.z,null,q)}}const Ye=T.children;for(let Ke=0,Xe=Ye.length;Ke<Xe;Ke++)yo(Ye[Ke],q,_e,he)}function Mo(T,q,_e,he){const{opaque:pe,transmissive:Ye,transparent:Ke}=T;C.setupLightsView(_e),it===!0&&Oe.setGlobalState(k.clippingPlanes,_e),he&&E.viewport(P.copy(he)),pe.length>0&&Yi(pe,q,_e),Ye.length>0&&Yi(Ye,q,_e),Ke.length>0&&Yi(Ke,q,_e),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function lr(T,q,_e,he){if((_e.isScene===!0?_e.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[he.id]===void 0){const Qe=Et.has("EXT_color_buffer_half_float")||Et.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[he.id]=new Wi(1,1,{generateMipmaps:!0,type:Qe?ha:xi,minFilter:Js,samples:Math.max(4,z.samples),stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ht.workingColorSpace})}const Ye=C.state.transmissionRenderTarget[he.id],Ke=he.viewport||P;Ye.setSize(Ke.z*k.transmissionResolutionScale,Ke.w*k.transmissionResolutionScale);const Xe=k.getRenderTarget(),et=k.getActiveCubeFace(),tt=k.getActiveMipmapLevel();k.setRenderTarget(Ye),k.getClearColor(B),X=k.getClearAlpha(),X<1&&k.setClearColor(16777215,.5),k.clear(),mt&&ct.render(_e);const dt=k.toneMapping;k.toneMapping=fa;const _t=he.viewport;if(he.viewport!==void 0&&(he.viewport=void 0),C.setupLightsView(he),it===!0&&Oe.setGlobalState(k.clippingPlanes,he),Yi(T,_e,he),xe.updateMultisampleRenderTarget(Ye),xe.updateRenderTargetMipmap(Ye),Et.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let Dt=0,At=q.length;Dt<At;Dt++){const Jt=q[Dt],{object:qt,geometry:Mn,material:je,group:un}=Jt;if(je.side===Ia&&qt.layers.test(he.layers)){const Ft=je.side;je.side=ai,je.needsUpdate=!0,Bl(qt,_e,he,Mn,je,un),je.side=Ft,je.needsUpdate=!0,Qe=!0}}Qe===!0&&(xe.updateMultisampleRenderTarget(Ye),xe.updateRenderTargetMipmap(Ye))}k.setRenderTarget(Xe,et,tt),k.setClearColor(B,X),_t!==void 0&&(he.viewport=_t),k.toneMapping=dt}function Yi(T,q,_e){const he=q.isScene===!0?q.overrideMaterial:null;for(let pe=0,Ye=T.length;pe<Ye;pe++){const Ke=T[pe],{object:Xe,geometry:et,group:tt}=Ke;let dt=Ke.material;dt.allowOverride===!0&&he!==null&&(dt=he),Xe.layers.test(_e.layers)&&Bl(Xe,q,_e,et,dt,tt)}}function Bl(T,q,_e,he,pe,Ye){Y!==null&&pe.isNodeMaterial&&Y.setObject(T,pe),T.onBeforeRender(k,q,_e,he,pe,Ye),T.modelViewMatrix.multiplyMatrices(_e.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),pe.onBeforeRender(k,q,_e,he,T,Ye),pe.transparent===!0&&pe.side===Ia&&pe.forceSinglePass===!1?(pe.side=ai,pe.needsUpdate=!0,k.renderBufferDirect(_e,q,he,pe,T,Ye),pe.side=tr,pe.needsUpdate=!0,k.renderBufferDirect(_e,q,he,pe,T,Ye),pe.side=Ia):k.renderBufferDirect(_e,q,he,pe,T,Ye),T.onAfterRender(k,q,_e,he,pe,Ye)}function As(T,q,_e){q.isScene!==!0&&(q=ft);const he=fe.get(T),pe=C.state.lights,Ye=C.state.shadowsArray,Ke=pe.state.version,Xe=Ue.getParameters(T,pe.state,Ye,q,_e,C.state.lightProbeGridArray),et=Ue.getProgramCacheKey(Xe);let tt=he.programs;he.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?q.environment:null,he.fog=q.fog;const dt=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;he.envMap=Ie.get(T.envMap||he.environment,dt),he.envMapRotation=he.environment!==null&&T.envMap===null?q.environmentRotation:T.envMapRotation,tt===void 0&&(T.addEventListener("dispose",Si),tt=new Map,he.programs=tt);let _t=tt.get(et);if(_t!==void 0){if(he.currentProgram===_t&&he.lightsStateVersion===Ke)return Eo(T,Xe),_t}else Xe.uniforms=Ue.getUniforms(T),Y!==null&&T.isNodeMaterial&&Y.build(T,_e,Xe),T.onBeforeCompile(Xe,k),_t=Ue.acquireProgram(Xe,et),tt.set(et,_t),he.uniforms=Xe.uniforms;const Qe=he.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Qe.clippingPlanes=Oe.uniform),Eo(T,Xe),he.needsLights=Hl(T),he.lightsStateVersion=Ke,he.needsLights&&(Qe.ambientLightColor.value=pe.state.ambient,Qe.lightProbe.value=pe.state.probe,Qe.sunLights.value=pe.state.sun,Qe.sunLightShadows.value=pe.state.sunShadow,Qe.directionalLights.value=pe.state.directional,Qe.directionalLightShadows.value=pe.state.directionalShadow,Qe.spotLights.value=pe.state.spot,Qe.spotLightShadows.value=pe.state.spotShadow,Qe.rectAreaLights.value=pe.state.rectArea,Qe.ltc_1.value=pe.state.rectAreaLTC1,Qe.ltc_2.value=pe.state.rectAreaLTC2,Qe.pointLights.value=pe.state.point,Qe.pointLightShadows.value=pe.state.pointShadow,Qe.hemisphereLights.value=pe.state.hemi,Qe.sunShadowMatrix.value=pe.state.sunShadowMatrix,Qe.sunShadowCascade.value=pe.state.sunShadowCascade,Qe.directionalShadowMatrix.value=pe.state.directionalShadowMatrix,Qe.spotLightMatrix.value=pe.state.spotLightMatrix,Qe.spotLightMap.value=pe.state.spotLightMap,Qe.pointShadowMatrix.value=pe.state.pointShadowMatrix),he.lightProbeGrid=C.state.lightProbeGridArray.length>0,he.currentProgram=_t,he.uniformsList=null,_t}function bo(T){if(T.uniformsList===null){const q=T.currentProgram.getUniforms();T.uniformsList=Pu.seqWithValue(q.seq,T.uniforms)}return T.uniformsList}function Eo(T,q){const _e=fe.get(T);_e.outputColorSpace=q.outputColorSpace,_e.batching=q.batching,_e.batchingColor=q.batchingColor,_e.instancing=q.instancing,_e.instancingColor=q.instancingColor,_e.instancingMorph=q.instancingMorph,_e.skinning=q.skinning,_e.morphTargets=q.morphTargets,_e.morphNormals=q.morphNormals,_e.morphColors=q.morphColors,_e.morphTargetsCount=q.morphTargetsCount,_e.numClippingPlanes=q.numClippingPlanes,_e.numIntersection=q.numClipIntersection,_e.vertexAlphas=q.vertexAlphas,_e.vertexTangents=q.vertexTangents,_e.toneMapping=q.toneMapping}function To(T,q){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;R.setFromMatrixPosition(q.matrixWorld);for(let _e=0,he=T.length;_e<he;_e++){const pe=T[_e];if(pe.texture!==null&&pe.boundingBox.containsPoint(R))return pe}return null}function Ao(T,q,_e,he,pe){q.isScene!==!0&&(q=ft),xe.resetTextureUnits();const Ye=q.fog,Ke=he.isMeshStandardMaterial||he.isMeshLambertMaterial||he.isMeshPhongMaterial?q.environment:null,Xe=ge===null?k.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:Ht.workingColorSpace,et=he.isMeshStandardMaterial||he.isMeshLambertMaterial&&!he.envMap||he.isMeshPhongMaterial&&!he.envMap,tt=Ie.get(he.envMap||Ke,et),dt=he.vertexColors===!0&&!!_e.attributes.color&&_e.attributes.color.itemSize===4,_t=!!_e.attributes.tangent&&(!!he.normalMap||he.anisotropy>0),Qe=!!_e.morphAttributes.position,Dt=!!_e.morphAttributes.normal,At=!!_e.morphAttributes.color;let Jt=fa;he.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(Jt=k.toneMapping);const qt=_e.morphAttributes.position||_e.morphAttributes.normal||_e.morphAttributes.color,Mn=qt!==void 0?qt.length:0,je=fe.get(he),un=C.state.lights;if(it===!0&&(lt===!0||T!==O)){const Pt=T===O&&he.id===le;Oe.setState(he,T,Pt)}let Ft=!1;he.version===je.__version?(je.needsLights&&je.lightsStateVersion!==un.state.version||je.outputColorSpace!==Xe||pe.isBatchedMesh&&je.batching===!1||!pe.isBatchedMesh&&je.batching===!0||pe.isBatchedMesh&&je.batchingColor===!0&&pe._colorsTexture===null||pe.isBatchedMesh&&je.batchingColor===!1&&pe._colorsTexture!==null||pe.isInstancedMesh&&je.instancing===!1||!pe.isInstancedMesh&&je.instancing===!0||pe.isSkinnedMesh&&je.skinning===!1||!pe.isSkinnedMesh&&je.skinning===!0||pe.isInstancedMesh&&je.instancingColor===!0&&pe.instanceColor===null||pe.isInstancedMesh&&je.instancingColor===!1&&pe.instanceColor!==null||pe.isInstancedMesh&&je.instancingMorph===!0&&pe.morphTexture===null||pe.isInstancedMesh&&je.instancingMorph===!1&&pe.morphTexture!==null||je.envMap!==tt||he.fog===!0&&je.fog!==Ye||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==Oe.numPlanes||je.numIntersection!==Oe.numIntersection)||je.vertexAlphas!==dt||je.vertexTangents!==_t||je.morphTargets!==Qe||je.morphNormals!==Dt||je.morphColors!==At||je.toneMapping!==Jt||je.morphTargetsCount!==Mn||!!je.lightProbeGrid!=C.state.lightProbeGridArray.length>0)&&(Ft=!0):(Ft=!0,je.__version=he.version);let Xn=je.currentProgram;Ft===!0&&(Xn=As(he,q,pe),Y&&he.isNodeMaterial&&Y.onUpdateProgram(he,Xn,je));let oi=!1,ji=!1,wt=!1;const kt=Xn.getUniforms(),tn=je.uniforms;if(E.useProgram(Xn.program)&&(oi=!0,ji=!0,wt=!0),he.id!==le&&(le=he.id,ji=!0),je.needsLights){const Pt=To(C.state.lightProbeGridArray,pe);je.lightProbeGrid!==Pt&&(je.lightProbeGrid=Pt,ji=!0)}if(oi||O!==T){E.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),kt.setValue(Q,"projectionMatrix",T.projectionMatrix),kt.setValue(Q,"viewMatrix",T.matrixWorldInverse);const fn=kt.map.cameraPosition;fn!==void 0&&fn.setValue(Q,Be.setFromMatrixPosition(T.matrixWorld)),z.logarithmicDepthBuffer&&kt.setValue(Q,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(he.isMeshPhongMaterial||he.isMeshToonMaterial||he.isMeshLambertMaterial||he.isMeshBasicMaterial||he.isMeshStandardMaterial||he.isShaderMaterial)&&kt.setValue(Q,"isOrthographic",T.isOrthographicCamera===!0),O!==T&&(O=T,ji=!0,wt=!0)}if(je.needsLights&&(un.state.sunShadowMap.length>0&&kt.setValue(Q,"sunShadowMap",un.state.sunShadowMap,xe),un.state.directionalShadowMap.length>0&&kt.setValue(Q,"directionalShadowMap",un.state.directionalShadowMap,xe),un.state.spotShadowMap.length>0&&kt.setValue(Q,"spotShadowMap",un.state.spotShadowMap,xe),un.state.pointShadowMap.length>0&&kt.setValue(Q,"pointShadowMap",un.state.pointShadowMap,xe)),pe.isSkinnedMesh){kt.setOptional(Q,pe,"bindMatrix"),kt.setOptional(Q,pe,"bindMatrixInverse");const Pt=pe.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),kt.setValue(Q,"boneTexture",Pt.boneTexture,xe))}pe.isBatchedMesh&&(kt.setOptional(Q,pe,"batchingTexture"),kt.setValue(Q,"batchingTexture",pe._matricesTexture,xe),kt.setOptional(Q,pe,"batchingIdTexture"),kt.setValue(Q,"batchingIdTexture",pe._indirectTexture,xe),kt.setOptional(Q,pe,"batchingColorTexture"),pe._colorsTexture!==null&&kt.setValue(Q,"batchingColorTexture",pe._colorsTexture,xe));const li=_e.morphAttributes;if((li.position!==void 0||li.normal!==void 0||li.color!==void 0)&&J.update(pe,_e,Xn),(ji||je.receiveShadow!==pe.receiveShadow)&&(je.receiveShadow=pe.receiveShadow,kt.setValue(Q,"receiveShadow",pe.receiveShadow)),(he.isMeshStandardMaterial||he.isMeshLambertMaterial||he.isMeshPhongMaterial)&&he.envMap===null&&q.environment!==null&&(tn.envMapIntensity.value=q.environmentIntensity),tn.dfgLUT!==void 0&&(tn.dfgLUT.value=u3()),ji){if(kt.setValue(Q,"toneMappingExposure",k.toneMappingExposure),je.needsLights&&Fl(tn,wt),Ye&&he.fog===!0&&we.refreshFogUniforms(tn,Ye),we.refreshMaterialUniforms(tn,he,ee,H,C.state.transmissionRenderTarget[T.id]),je.needsLights&&je.lightProbeGrid){const Pt=je.lightProbeGrid;tn.probesSH.value=Pt.texture,tn.probesMin.value.copy(Pt.boundingBox.min),tn.probesMax.value.copy(Pt.boundingBox.max),tn.probesResolution.value.copy(Pt.resolution)}Pu.upload(Q,bo(je),tn,xe)}if(he.isShaderMaterial&&he.uniformsNeedUpdate===!0&&(Pu.upload(Q,bo(je),tn,xe),he.uniformsNeedUpdate=!1),he.isSpriteMaterial&&kt.setValue(Q,"center",pe.center),kt.setValue(Q,"modelViewMatrix",pe.modelViewMatrix),kt.setValue(Q,"normalMatrix",pe.normalMatrix),kt.setValue(Q,"modelMatrix",pe.matrixWorld),he.uniformsGroups!==void 0){const Pt=he.uniformsGroups;for(let fn=0,ga=Pt.length;fn<ga;fn++){const Gl=Pt[fn];Re.update(Gl,Xn),Re.bind(Gl,Xn)}}return Xn}function Fl(T,q){T.ambientLightColor.needsUpdate=q,T.lightProbe.needsUpdate=q,T.sunLights.needsUpdate=q,T.sunLightShadows.needsUpdate=q,T.directionalLights.needsUpdate=q,T.directionalLightShadows.needsUpdate=q,T.pointLights.needsUpdate=q,T.pointLightShadows.needsUpdate=q,T.spotLights.needsUpdate=q,T.spotLightShadows.needsUpdate=q,T.rectAreaLights.needsUpdate=q,T.hemisphereLights.needsUpdate=q}function Hl(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return ge},this.setRenderTargetTextures=function(T,q,_e){const he=fe.get(T);he.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,he.__autoAllocateDepthBuffer===!1&&(he.__useRenderToTexture=!1),fe.get(T.texture).__webglTexture=q,fe.get(T.depthTexture).__webglTexture=he.__autoAllocateDepthBuffer?void 0:_e,he.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,q){const _e=fe.get(T);_e.__webglFramebuffer=q,_e.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(T,q=0,_e=0){ge=T,Z=q,K=_e;let he=null,pe=!1,Ye=!1;if(T){const Xe=fe.get(T);if(Xe.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(Q.FRAMEBUFFER,Xe.__webglFramebuffer),P.copy(T.viewport),be.copy(T.scissor),Ce=T.scissorTest,E.viewport(P),E.scissor(be),E.setScissorTest(Ce),le=-1;return}else if(Xe.__webglFramebuffer===void 0)xe.setupRenderTarget(T);else if(Xe.__hasExternalTextures)xe.rebindTextures(T,fe.get(T.texture).__webglTexture,fe.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const dt=T.depthTexture;if(Xe.__boundDepthTexture!==dt){if(dt!==null&&fe.has(dt)&&(T.width!==dt.image.width||T.height!==dt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");xe.setupDepthRenderbuffer(T)}}const et=T.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Ye=!0);const tt=fe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(tt[q])?he=tt[q][_e]:he=tt[q],pe=!0):T.samples>0&&xe.useMultisampledRTT(T)===!1?he=fe.get(T).__webglMultisampledFramebuffer:Array.isArray(tt)?he=tt[_e]:he=tt,P.copy(T.viewport),be.copy(T.scissor),Ce=T.scissorTest}else P.copy(de).multiplyScalar(ee).floor(),be.copy(Ne).multiplyScalar(ee).floor(),Ce=st;if(_e!==0&&(he=ce),E.bindFramebuffer(Q.FRAMEBUFFER,he)&&E.drawBuffers(T,he),E.viewport(P),E.scissor(be),E.setScissorTest(Ce),pe){const Xe=fe.get(T.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_CUBE_MAP_POSITIVE_X+q,Xe.__webglTexture,_e)}else if(Ye){const Xe=q;for(let et=0;et<T.textures.length;et++){const tt=fe.get(T.textures[et]);Q.framebufferTextureLayer(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0+et,tt.__webglTexture,_e,Xe)}}else if(T!==null&&_e!==0){const Xe=fe.get(T.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,Xe.__webglTexture,_e)}le=-1};function yi(T){const q=fe.get(T);return(q.__readFormat!==T.format||q.__readType!==T.type)&&(q.__readFormat=T.format,q.__readType=T.type,q.__formatReadable=z.textureFormatReadable(T.format),q.__typeReadable=z.textureTypeReadable(T.type)),q}this.readRenderTargetPixels=function(T,q,_e,he,pe,Ye,Ke,Xe=0){if(!(T&&T.isWebGLRenderTarget)){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let et=fe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ke!==void 0&&(et=et[Ke]),et){E.bindFramebuffer(Q.FRAMEBUFFER,et);try{const tt=T.textures[Xe],dt=tt.format,_t=tt.type;T.textures.length>1&&Q.readBuffer(Q.COLOR_ATTACHMENT0+Xe);const Qe=yi(tt);if(Qe.__formatReadable===!1){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Qe.__typeReadable===!1){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=T.width-he&&_e>=0&&_e<=T.height-pe&&Q.readPixels(q,_e,he,pe,ze.convert(dt),ze.convert(_t),Ye)}finally{const tt=ge!==null?fe.get(ge).__webglFramebuffer:null;E.bindFramebuffer(Q.FRAMEBUFFER,tt)}}},this.readRenderTargetPixelsAsync=async function(T,q,_e,he,pe,Ye,Ke,Xe=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let et=fe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ke!==void 0&&(et=et[Ke]),et)if(q>=0&&q<=T.width-he&&_e>=0&&_e<=T.height-pe){E.bindFramebuffer(Q.FRAMEBUFFER,et);const tt=T.textures[Xe],dt=tt.format,_t=tt.type;T.textures.length>1&&Q.readBuffer(Q.COLOR_ATTACHMENT0+Xe);const Qe=yi(tt);if(Qe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Qe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Dt=Q.createBuffer();Q.bindBuffer(Q.PIXEL_PACK_BUFFER,Dt),Q.bufferData(Q.PIXEL_PACK_BUFFER,Ye.byteLength,Q.STREAM_READ),Q.readPixels(q,_e,he,pe,ze.convert(dt),ze.convert(_t),0),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,null);const At=ge!==null?fe.get(ge).__webglFramebuffer:null;E.bindFramebuffer(Q.FRAMEBUFFER,At);const Jt=Q.fenceSync(Q.SYNC_GPU_COMMANDS_COMPLETE,0);return Q.flush(),await s1(Q,Jt,4),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,Dt),Q.getBufferSubData(Q.PIXEL_PACK_BUFFER,0,Ye),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,null),Q.deleteBuffer(Dt),Q.deleteSync(Jt),Ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,q=null,_e=0){const he=Math.pow(2,-_e),pe=Math.floor(T.image.width*he),Ye=Math.floor(T.image.height*he),Ke=q!==null?q.x:0,Xe=q!==null?q.y:0;xe.setTexture2D(T,0),Q.copyTexSubImage2D(Q.TEXTURE_2D,_e,0,0,Ke,Xe,pe,Ye),E.unbindTexture()},this.copyTextureToTexture=function(T,q,_e=null,he=null,pe=0,Ye=0){let Ke,Xe,et,tt,dt,_t,Qe,Dt,At;const Jt=T.isCompressedTexture?T.mipmaps[Ye]:T.image;if(_e!==null)Ke=_e.max.x-_e.min.x,Xe=_e.max.y-_e.min.y,et=_e.isBox3?_e.max.z-_e.min.z:1,tt=_e.min.x,dt=_e.min.y,_t=_e.isBox3?_e.min.z:0;else{const tn=Math.pow(2,-pe);Ke=Math.floor(Jt.width*tn),Xe=Math.floor(Jt.height*tn),T.isDataArrayTexture?et=Jt.depth:T.isData3DTexture?et=Math.floor(Jt.depth*tn):et=1,tt=0,dt=0,_t=0}he!==null?(Qe=he.x,Dt=he.y,At=he.z):(Qe=0,Dt=0,At=0);const qt=ze.convert(q.format),Mn=ze.convert(q.type);let je;q.isData3DTexture?(xe.setTexture3D(q,0),je=Q.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(xe.setTexture2DArray(q,0),je=Q.TEXTURE_2D_ARRAY):(xe.setTexture2D(q,0),je=Q.TEXTURE_2D),E.activeTexture(Q.TEXTURE0),E.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,q.flipY),E.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),E.pixelStorei(Q.UNPACK_ALIGNMENT,q.unpackAlignment);const un=E.getParameter(Q.UNPACK_ROW_LENGTH),Ft=E.getParameter(Q.UNPACK_IMAGE_HEIGHT),Xn=E.getParameter(Q.UNPACK_SKIP_PIXELS),oi=E.getParameter(Q.UNPACK_SKIP_ROWS),ji=E.getParameter(Q.UNPACK_SKIP_IMAGES);E.pixelStorei(Q.UNPACK_ROW_LENGTH,Jt.width),E.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,Jt.height),E.pixelStorei(Q.UNPACK_SKIP_PIXELS,tt),E.pixelStorei(Q.UNPACK_SKIP_ROWS,dt),E.pixelStorei(Q.UNPACK_SKIP_IMAGES,_t);const wt=T.isDataArrayTexture||T.isData3DTexture,kt=q.isDataArrayTexture||q.isData3DTexture;if(T.isDepthTexture){const tn=fe.get(T),li=fe.get(q),Pt=fe.get(tn.__renderTarget),fn=fe.get(li.__renderTarget);E.bindFramebuffer(Q.READ_FRAMEBUFFER,Pt.__webglFramebuffer),E.bindFramebuffer(Q.DRAW_FRAMEBUFFER,fn.__webglFramebuffer);for(let ga=0;ga<et;ga++)wt&&(Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,fe.get(T).__webglTexture,pe,_t+ga),Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,fe.get(q).__webglTexture,Ye,At+ga)),Q.blitFramebuffer(tt,dt,Ke,Xe,Qe,Dt,Ke,Xe,Q.DEPTH_BUFFER_BIT,Q.NEAREST);E.bindFramebuffer(Q.READ_FRAMEBUFFER,null),E.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else if(pe!==0||T.isRenderTargetTexture||fe.has(T)){const tn=fe.get(T),li=fe.get(q);E.bindFramebuffer(Q.READ_FRAMEBUFFER,$),E.bindFramebuffer(Q.DRAW_FRAMEBUFFER,te);for(let Pt=0;Pt<et;Pt++)wt?Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,tn.__webglTexture,pe,_t+Pt):Q.framebufferTexture2D(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,tn.__webglTexture,pe),kt?Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,li.__webglTexture,Ye,At+Pt):Q.framebufferTexture2D(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,li.__webglTexture,Ye),pe!==0?Q.blitFramebuffer(tt,dt,Ke,Xe,Qe,Dt,Ke,Xe,Q.COLOR_BUFFER_BIT,Q.NEAREST):kt?Q.copyTexSubImage3D(je,Ye,Qe,Dt,At+Pt,tt,dt,Ke,Xe):Q.copyTexSubImage2D(je,Ye,Qe,Dt,tt,dt,Ke,Xe);E.bindFramebuffer(Q.READ_FRAMEBUFFER,null),E.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else kt?T.isDataTexture||T.isData3DTexture?Q.texSubImage3D(je,Ye,Qe,Dt,At,Ke,Xe,et,qt,Mn,Jt.data):q.isCompressedArrayTexture?Q.compressedTexSubImage3D(je,Ye,Qe,Dt,At,Ke,Xe,et,qt,Jt.data):Q.texSubImage3D(je,Ye,Qe,Dt,At,Ke,Xe,et,qt,Mn,Jt):T.isDataTexture?Q.texSubImage2D(Q.TEXTURE_2D,Ye,Qe,Dt,Ke,Xe,qt,Mn,Jt.data):T.isCompressedTexture?Q.compressedTexSubImage2D(Q.TEXTURE_2D,Ye,Qe,Dt,Jt.width,Jt.height,qt,Jt.data):Q.texSubImage2D(Q.TEXTURE_2D,Ye,Qe,Dt,Ke,Xe,qt,Mn,Jt);E.pixelStorei(Q.UNPACK_ROW_LENGTH,un),E.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,Ft),E.pixelStorei(Q.UNPACK_SKIP_PIXELS,Xn),E.pixelStorei(Q.UNPACK_SKIP_ROWS,oi),E.pixelStorei(Q.UNPACK_SKIP_IMAGES,ji),Ye===0&&q.generateMipmaps&&Q.generateMipmap(je),E.unbindTexture()},this.initRenderTarget=function(T){fe.get(T).__webglFramebuffer===void 0&&xe.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?xe.setTextureCube(T,0):T.isData3DTexture?xe.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?xe.setTexture2DArray(T,0):xe.setTexture2D(T,0),E.unbindTexture()},this.resetState=function(){Z=0,K=0,ge=null,E.reset(),Ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ua}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ht._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ht._getUnpackColorSpace()}}const er=[{id:"abrams",name:"M1A2 Abrams",country:"USA 🇺🇸",description:"Xe tăng chiến đấu chủ lực hiện đại với giáp Chobham và pháo 120mm bắn bóng bọc thép.",type:"Heavy",price:0,unlocked:!0,baseDamage:25,baseFireRate:5,baseSpeed:1,barrelsCount:1,camoType:"woodland",primaryColor:"#3a5311",secondaryColor:"#273809",specialSkillName:"Bóng Đạn Phá Giáp",specialSkillDesc:"Bắn ra bóng đạn xuyên qua mọi khối số trên đường đi.",bulletType:"standard"},{id:"t90",name:"T-90MS Tagil",country:"RUSSIA 🇷🇺",description:"Cỗ máy bọc thép sa mạc được trang bị pháo phản lực nổ mạnh 125mm và giáp bộc nổ Relikt.",type:"Heavy",price:1500,unlocked:!1,baseDamage:45,baseFireRate:4,baseSpeed:.9,barrelsCount:1,camoType:"desert",primaryColor:"#c2a649",secondaryColor:"#7a6422",specialSkillName:"Nổ Mìn Hàng Loạt",specialSkillDesc:"Tạo ra vụ nổ lớn gây sát thương xung quanh khối số bị trúng.",bulletType:"explosive"},{id:"leopard",name:"Leopard 2A7",country:"GERMANY 🇩🇪",description:"Đỉnh cao kỹ thuật Đức. Nòng kép bắn siêu tốc với độ chính xác tuyệt đối.",type:"Medium",price:3500,unlocked:!1,baseDamage:35,baseFireRate:7,baseSpeed:1.2,barrelsCount:2,camoType:"digital",primaryColor:"#4f5d54",secondaryColor:"#2b362e",specialSkillName:"Nòng Kép Siêu Tốc",specialSkillDesc:"Bắn liên hoàn 2 luồng bóng đạn liên tục không ngừng.",bulletType:"armor_piercing"},{id:"tiger",name:"Tiger I Titan",country:"GERMANY 🇩🇪",description:"Huyền thoại bọc thép hạng nặng. Sức mạnh hủy diệt cực cao chèn ép mọi đợt khối số.",type:"Heavy",price:7e3,unlocked:!1,baseDamage:80,baseFireRate:3.5,baseSpeed:.8,barrelsCount:1,camoType:"snow",primaryColor:"#6c757d",secondaryColor:"#343a40",specialSkillName:"Bóng Trọng Lực",specialSkillDesc:"Bóng đạn nặng dội nhiều lần phá hủy hàng loạt khối số.",bulletType:"standard"},{id:"pl01",name:"PL-01 Stealth",country:"POLAND 🇵🇱",description:"Xe tăng tàng hình thế hệ mới với vỏ carbon tản nhiệt và pháo Plasma Laser kép.",type:"Futuristic",price:15e3,unlocked:!1,baseDamage:110,baseFireRate:8,baseSpeed:1.3,barrelsCount:2,camoType:"stealth",primaryColor:"#1e293b",secondaryColor:"#0f172a",specialSkillName:"Laser Huyết Áp",specialSkillDesc:"Chùm tia Laser thiêu rụi khối số tức thì.",bulletType:"laser"},{id:"cyber_destroyer",name:"Cyber Railgun Titan",country:"FUTURE 🌌",description:"Cỗ xe tăng tối thượng 4 nòng Pháo Ray Điện Từ (Railgun). Hủy diệt tuyệt đối!",type:"Futuristic",price:35e3,unlocked:!1,baseDamage:220,baseFireRate:10,baseSpeed:1.4,barrelsCount:4,camoType:"cyber",primaryColor:"#0369a1",secondaryColor:"#0284c7",specialSkillName:"Bão Điện Từ Quad-Railgun",specialSkillDesc:"4 nòng pháo đồng loạt xả bão đạn năng lượng điện từ.",bulletType:"railgun"}];class d3{constructor(){this.ctx=null,this.soundEnabled=!0,this.engineOsc=null,this.engineGain=null,this.isEnginePlaying=!1}init(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;t&&(this.ctx=new t)}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}setSoundEnabled(t){this.soundEnabled=t,!t&&this.isEnginePlaying&&this.stopEngineSound()}isEnabled(){return this.soundEnabled}playCannonShot(t="heavy"){if(!this.soundEnabled||(this.init(),!this.ctx))return;const i=this.ctx.currentTime;if(t==="laser"){const v=this.ctx.createOscillator(),p=this.ctx.createGain();v.type="sawtooth",v.frequency.setValueAtTime(1200,i),v.frequency.exponentialRampToValueAtTime(100,i+.15),p.gain.setValueAtTime(.3,i),p.gain.exponentialRampToValueAtTime(.01,i+.15),v.connect(p),p.connect(this.ctx.destination),v.start(i),v.stop(i+.15);return}if(t==="railgun"){const v=this.ctx.createOscillator(),p=this.ctx.createGain();v.type="triangle",v.frequency.setValueAtTime(100,i),v.frequency.exponentialRampToValueAtTime(2400,i+.08),v.frequency.exponentialRampToValueAtTime(40,i+.35),p.gain.setValueAtTime(.4,i),p.gain.exponentialRampToValueAtTime(.001,i+.35),v.connect(p),p.connect(this.ctx.destination),v.start(i),v.stop(i+.35);return}const s=this.ctx.createOscillator(),l=this.ctx.createGain();s.type="sine",s.frequency.setValueAtTime(220,i),s.frequency.exponentialRampToValueAtTime(30,i+.3),l.gain.setValueAtTime(.8,i),l.gain.exponentialRampToValueAtTime(.001,i+.3),s.connect(l),l.connect(this.ctx.destination),s.start(i),s.stop(i+.3);const u=this.ctx.sampleRate*.25,d=this.ctx.createBuffer(1,u,this.ctx.sampleRate),h=d.getChannelData(0);for(let v=0;v<u;v++)h[v]=Math.random()*2-1;const m=this.ctx.createBufferSource();m.buffer=d;const g=this.ctx.createBiquadFilter();g.type="lowpass",g.frequency.setValueAtTime(1200,i),g.frequency.exponentialRampToValueAtTime(100,i+.25);const x=this.ctx.createGain();x.gain.setValueAtTime(.6,i),x.gain.exponentialRampToValueAtTime(.001,i+.25),m.connect(g),g.connect(x),x.connect(this.ctx.destination),m.start(i),m.stop(i+.25)}playShellClink(){if(!this.soundEnabled||(this.init(),!this.ctx))return;const t=this.ctx.currentTime+.15,i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="sine",i.frequency.setValueAtTime(2800,t),i.frequency.setValueAtTime(3200,t+.03),s.gain.setValueAtTime(.15,t),s.gain.exponentialRampToValueAtTime(.001,t+.1),i.connect(s),s.connect(this.ctx.destination),i.start(t),i.stop(t+.1)}playBlockHit(){if(!this.soundEnabled||(this.init(),!this.ctx))return;const t=this.ctx.currentTime,i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="triangle",i.frequency.setValueAtTime(400,t),i.frequency.exponentialRampToValueAtTime(120,t+.06),s.gain.setValueAtTime(.2,t),s.gain.exponentialRampToValueAtTime(.001,t+.06),i.connect(s),s.connect(this.ctx.destination),i.start(t),i.stop(t+.06)}playExplosion(t=!1){if(!this.soundEnabled||(this.init(),!this.ctx))return;const i=this.ctx.currentTime,s=t?.7:.35,l=this.ctx.sampleRate*s,u=this.ctx.createBuffer(1,l,this.ctx.sampleRate),d=u.getChannelData(0);for(let x=0;x<l;x++)d[x]=Math.random()*2-1;const h=this.ctx.createBufferSource();h.buffer=u;const m=this.ctx.createBiquadFilter();m.type="lowpass",m.frequency.setValueAtTime(t?800:1500,i),m.frequency.exponentialRampToValueAtTime(60,i+s);const g=this.ctx.createGain();g.gain.setValueAtTime(t?.8:.4,i),g.gain.exponentialRampToValueAtTime(.001,i+s),h.connect(m),m.connect(g),g.connect(this.ctx.destination),h.start(i),h.stop(i+s)}playCoin(){if(!this.soundEnabled||(this.init(),!this.ctx))return;const t=this.ctx.currentTime,i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="sine",i.frequency.setValueAtTime(987.77,t),i.frequency.setValueAtTime(1318.51,t+.07),s.gain.setValueAtTime(.2,t),s.gain.exponentialRampToValueAtTime(.001,t+.2),i.connect(s),s.connect(this.ctx.destination),i.start(t),i.stop(t+.2)}playPowerup(){if(!this.soundEnabled||(this.init(),!this.ctx))return;const t=this.ctx.currentTime,i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="sawtooth",i.frequency.setValueAtTime(300,t),i.frequency.exponentialRampToValueAtTime(1200,t+.3),s.gain.setValueAtTime(.3,t),s.gain.exponentialRampToValueAtTime(.001,t+.3),i.connect(s),s.connect(this.ctx.destination),i.start(t),i.stop(t+.3)}startEngineSound(){if(!(!this.soundEnabled||this.isEnginePlaying)&&(this.init(),!!this.ctx))try{const t=this.ctx.currentTime;this.engineOsc=this.ctx.createOscillator(),this.engineGain=this.ctx.createGain(),this.engineOsc.type="sawtooth",this.engineOsc.frequency.setValueAtTime(45,t);const i=this.ctx.createBiquadFilter();i.type="lowpass",i.frequency.setValueAtTime(180,t),this.engineGain.gain.setValueAtTime(.08,t),this.engineOsc.connect(i),i.connect(this.engineGain),this.engineGain.connect(this.ctx.destination),this.engineOsc.start(t),this.isEnginePlaying=!0}catch{this.isEnginePlaying=!1}}updateEnginePitch(t){if(this.engineOsc&&this.ctx&&this.isEnginePlaying){const i=45+Math.abs(t)*35;this.engineOsc.frequency.setTargetAtTime(i,this.ctx.currentTime,.1)}}stopEngineSound(){if(this.engineOsc&&this.isEnginePlaying){try{this.engineOsc.stop(),this.engineOsc.disconnect()}catch{}this.engineOsc=null,this.engineGain=null,this.isEnginePlaying=!1}}}const ni=new d3;function h3(o,t,i){const s=document.createElement("canvas");s.width=512,s.height=512;const l=s.getContext("2d");if(l.fillStyle=t,l.fillRect(0,0,512,512),l.fillStyle=i,o==="woodland"||o==="desert"||o==="snow"){for(let d=0;d<40;d++){const h=Math.random()*512,m=Math.random()*512,g=20+Math.random()*60;l.beginPath(),l.arc(h,m,g,0,Math.PI*2),l.fill()}l.fillStyle="#111827";for(let d=0;d<20;d++){const h=Math.random()*512,m=Math.random()*512,g=10+Math.random()*30;l.beginPath(),l.arc(h,m,g,0,Math.PI*2),l.fill()}}else if(o==="digital")for(let h=0;h<512;h+=16)for(let m=0;m<512;m+=16)Math.random()>.5?(l.fillStyle=i,l.fillRect(h,m,16,16)):Math.random()>.8&&(l.fillStyle="#1e293b",l.fillRect(h,m,16,16));else if(o==="stealth"){l.fillStyle="#0f172a",l.fillRect(0,0,512,512),l.strokeStyle="#334155",l.lineWidth=2;const d=24;for(let h=0;h<512+d;h+=d*1.5)for(let m=0;m<512+d;m+=d*Math.sqrt(3)){l.beginPath();for(let g=0;g<6;g++){const x=Math.PI/3*g,v=m+d*Math.cos(x),p=h+d*Math.sin(x);g===0?l.moveTo(v,p):l.lineTo(v,p)}l.closePath(),l.stroke()}}else if(o==="cyber"){l.fillStyle="#030712",l.fillRect(0,0,512,512),l.strokeStyle="#38bdf8",l.lineWidth=4,l.strokeRect(10,10,492,492);for(let d=0;d<512;d+=32)l.beginPath(),l.moveTo(d,0),l.lineTo(d,512),l.moveTo(0,d),l.lineTo(512,d),l.stroke()}const u=new Yu(s);return u.wrapS=Ga,u.wrapT=Ga,u.repeat.set(2,2),u}function p3(o){const t=new Li,i=h3(o.camoType,o.primaryColor,o.secondaryColor),s=new Dn({map:i,roughness:.4,metalness:.6}),l=new Dn({color:2042167,roughness:.3,metalness:.8}),u=new Dn({color:1120295,roughness:.9,metalness:.2}),d=new Dn({color:13751771,roughness:.1,metalness:.95}),h=o.camoType==="cyber"?440020:o.camoType==="stealth"?11032055:15680580,m=new mo({color:h,transparent:!0,opacity:.8}),g=new mn(2.4,.7,3.8),x=new xt(g,s);x.position.y=.6,x.castShadow=!0,x.receiveShadow=!0,t.add(x);const v=new mn(2.38,.4,1.2),p=new xt(v,s);p.position.set(0,.7,-1.8),p.rotation.x=Math.PI/6,p.castShadow=!0,t.add(p);const b=new mn(.15,.6,3.6),A=new xt(b,s);A.position.set(-1.25,.5,0),A.castShadow=!0,t.add(A);const L=new xt(b,s);L.position.set(1.25,.5,0),L.castShadow=!0,t.add(L);const y=new mn(.5,.75,4),S=new xt(y,u);S.position.set(-1.45,.4,0),S.castShadow=!0,t.add(S);const N=new xt(y,u);N.position.set(1.45,.4,0),N.castShadow=!0,t.add(N);const F=new _i(.32,.32,.2,16);F.rotateZ(Math.PI/2);for(let Se=-1;Se<=1;Se+=2)for(let De=-2.5;De<=2.5;De+=1){const de=new xt(F,l);de.position.set(Se*1.48,.35,De*.6),de.castShadow=!0,t.add(de);const Ne=new _i(.1,.1,.22,12);Ne.rotateZ(Math.PI/2);const st=new xt(Ne,d);st.position.copy(de.position),t.add(st)}const R=new _i(.12,.12,.1,12);R.rotateX(Math.PI/2);const D=new mo({color:16776171}),C=new xt(R,D);C.position.set(-.9,.7,-2),t.add(C);const I=new xt(R,D);I.position.set(.9,.7,-2),t.add(I);const M=new sE(16776171,4,15,Math.PI/6,.5);M.position.set(0,.8,-2),M.target.position.set(0,.8,-10),t.add(M),t.add(M.target);const U=new Li;U.position.set(0,1.05,-.2),t.add(U);let k;o.camoType==="stealth"?(k=new ju(1.5,.8,5),k.rotateY(Math.PI/5)):o.camoType==="cyber"?k=new mn(1.8,.7,2.2):k=new mn(1.7,.65,2.3);const W=new xt(k,s);W.position.set(0,.35,0),W.castShadow=!0,U.add(W);const Y=new _i(.28,.28,.1,16),ce=new xt(Y,l);ce.position.set(-.4,.7,.1),U.add(ce);const $=new mn(.1,.3,.1),te=new xt($,l);te.position.set(-.4,.85,.1),U.add(te);const Z=new _i(.03,.03,.8,8);Z.rotateX(Math.PI/2);const K=new xt(Z,l);K.position.set(-.4,.95,-.2),U.add(K);const ge=new _i(.01,.01,1.4,6),le=new xt(ge,l);le.position.set(.6,1.1,.8),U.add(le);const O=new Li;O.position.set(0,.35,-.8),U.add(O);const P=new mn(.9,.45,.5),be=new xt(P,l);be.position.set(0,0,-.1),be.castShadow=!0,O.add(be);const Ce=[],B=o.barrelsCount;(B===1?[0]:B===2?[-.25,.25]:[-.45,-.15,.15,.45]).forEach(Se=>{const De=o.type==="Futuristic"?2.8:2.4,de=new _i(.08,.1,De,16);de.rotateX(Math.PI/2);const Ne=new xt(de,l);Ne.position.set(Se,0,-De/2),Ne.castShadow=!0,O.add(Ne);const st=new _i(.13,.13,.35,12);st.rotateX(Math.PI/2);const ke=new Dn({color:h,roughness:.2,metalness:.9}),it=new xt(st,ke);it.position.set(Se,0,-De-.15),O.add(it),Ce.push(it)});const se=[new oe(0,0,-1),new oe(0,0,-35)],H=new si().setFromPoints(se),ee=new j1(H,m);return O.add(ee),{group:t,turretGroup:U,barrelGroup:O,barrelTipMesh:Ce,laserLine:ee,leftTracks:S,rightTracks:N}}function m3(){const o=document.createElement("canvas");o.width=512,o.height=512;const t=o.getContext("2d");t.fillStyle="#1e293b",t.fillRect(0,0,512,512),t.strokeStyle="#334155",t.lineWidth=4;for(let s=0;s<512;s+=32)t.beginPath(),t.moveTo(0,s),t.lineTo(512,s),t.stroke();t.fillStyle="#38bdf8",t.fillRect(8,0,8,512),t.fillRect(496,0,8,512),t.fillStyle="#ef4444",t.fillRect(0,440,512,20),t.fillStyle="#0f172a",t.fillRect(140,0,36,512),t.fillRect(336,0,36,512);const i=new Yu(o);return i.wrapS=Ga,i.wrapT=Ga,i.repeat.set(1,4),i}function g3(){const o=new Li,t=new ar(24,60);t.rotateX(-Math.PI/2);const i=m3(),s=new Dn({map:i,roughness:.6,metalness:.2}),l=new xt(t,s);l.position.set(0,0,-15),l.receiveShadow=!0,o.add(l);const u=new ar(160,160);u.rotateX(-Math.PI/2);const d=new Dn({color:3359061,roughness:.9,metalness:.1}),h=new xt(u,d);h.position.set(0,-.15,-30),h.receiveShadow=!0,o.add(h);const m=new Dn({color:4674921,roughness:.4,metalness:.8}),g=new xt(new mn(.8,1.2,60),m);g.position.set(-11.6,.6,-15),g.castShadow=!0,g.receiveShadow=!0,o.add(g);const x=new xt(new mn(.8,1.2,60),m);x.position.set(11.6,.6,-15),x.castShadow=!0,x.receiveShadow=!0,o.add(x);const v=new Dn({color:1976635,roughness:.8,metalness:.2});for(let F=-1;F<=1;F+=2)if(F!==0)for(let R=-50;R<=10;R+=16){const D=14+Math.random()*8,C=12+Math.random()*6,I=new ju(C,D,6),M=new xt(I,v);M.position.set(F*(24+Math.random()*6),D/2-1,R),M.rotation.y=Math.random()*Math.PI,M.castShadow=!0,o.add(M)}const p=new Dn({color:4674921,roughness:.5,metalness:.7}),b=new Dn({color:7877903,roughness:.8});[{x:-16,z:-35},{x:16,z:-35},{x:-16,z:-10},{x:16,z:-10}].forEach(F=>{const R=new Li;R.position.set(F.x,0,F.z);for(let C=-1;C<=1;C+=2)for(let I=-1;I<=1;I+=2){const M=new xt(new _i(.12,.2,8,8),p);M.position.set(C*.8,4,I*.8),M.castShadow=!0,R.add(M)}const D=new xt(new mn(2.2,1.2,2.2),b);D.position.set(0,8.2,0),D.castShadow=!0,R.add(D),o.add(R)});const L=new Dn({color:13273604,roughness:.9}),y=new Dn({color:6583435,metalness:.8,roughness:.3});for(let F=-40;F<=5;F+=10){const R=new xt(new mn(2.5,.8,1),L);R.position.set(-13,.4,F),R.castShadow=!0,o.add(R);const D=new Li;D.position.set(13,.6,F+5);for(let C=0;C<3;C++){const I=new xt(new mn(.15,1.8,.15),y);I.rotation.set(C*.8,C*.5,C*.3),I.castShadow=!0,D.add(I)}o.add(D)}const S=new Li,N=new Dn({color:16777215,transparent:!0,opacity:.7,roughness:1});for(let F=0;F<10;F++){const R=new Li;R.position.set((Math.random()-.5)*80,20+Math.random()*6,-50+Math.random()*40);for(let D=0;D<4;D++){const C=new xt(new Ol(3+Math.random()*3,8,8),N);C.position.set((Math.random()-.5)*5,(Math.random()-.5)*2,(Math.random()-.5)*5),R.add(C)}S.add(R)}return o.add(S),{group:o,clouds:S}}function Ix(o){return o<20?"#22c55e":o<100?"#eab308":o<500?"#f97316":o<2e3?"#ef4444":o<1e4?"#a855f7":"#3b82f6"}function bS(o,t,i){const s=o.getContext("2d");s.fillStyle=i,s.fillRect(0,0,256,256),s.strokeStyle="#ffffff",s.lineWidth=16,s.strokeRect(8,8,240,240),s.fillStyle="rgba(255, 255, 255, 0.15)",s.fillRect(16,16,224,224),s.fillStyle="#ffffff",s.strokeStyle="#000000",s.lineWidth=8,s.font='900 72px "Plus Jakarta Sans", sans-serif',s.textAlign="center",s.textBaseline="middle";let l=t;const u=parseInt(t,10);isNaN(u)||(u>=1e6?l=(u/1e6).toFixed(1)+"M":u>=1e4&&(l=(u/1e3).toFixed(1)+"k")),s.strokeText(l,128,128),s.fillText(l,128,128)}function v3(o,t){const i=document.createElement("canvas");i.width=256,i.height=256,bS(i,o,t);const s=new Yu(i);return{canvas:i,texture:s}}const _3=({gameStatus:o,selectedTankId:t,upgrades:i,activeSkillState:s,score:l,wave:u,onUpdateScore:d,onTakeDamage:h,onWaveComplete:m,onGameOver:g,touchInput:x})=>{const v=Ct.useRef(null),p=Ct.useRef({tankPos:0,tankTargetX:0,aimWorldPos:new oe(0,0,-20),isFiring:!1,lastFireTime:0,recoilAnim:0,blocks:[],blockMeshes:new Map,projectiles:[],projectileMeshes:new Map,particles:[],particleMeshes:[],dropItems:[],dropMeshes:new Map,blockCanvases:new Map,blockTextures:new Map,waveSpawned:0,waveTotalNeeded:15,shieldMesh:null,nukeMesh:null}),b=Ct.useRef({});return Ct.useEffect(()=>{const A=y=>{b.current[y.code]=!0},L=y=>{b.current[y.code]=!1};return window.addEventListener("keydown",A),window.addEventListener("keyup",L),()=>{window.removeEventListener("keydown",A),window.removeEventListener("keyup",L)}},[]),Ct.useEffect(()=>{if(!v.current)return;const A=v.current.clientWidth||window.innerWidth||800,L=v.current.clientHeight||window.innerHeight||600,y=new z1;y.background=new Ot(1976635),y.fog=new lm(3359061,.012);const S=g3();y.add(S.group);const N=new ii(50,A/L,.1,200);N.position.set(0,14,12),N.lookAt(0,0,-6);const F=new f3({antialias:!0,alpha:!1});F.setSize(A,L),F.setPixelRatio(Math.min(window.devicePixelRatio||1,2));try{F.shadowMap.enabled=!0,F.shadowMap.type=Gx}catch{}const R=F.domElement;R.style.position="absolute",R.style.top="0",R.style.left="0",R.style.width="100%",R.style.height="100%",R.style.display="block",v.current.appendChild(R);const D=new ResizeObserver(Pe=>{for(const Be of Pe){const ot=Be.contentRect.width||window.innerWidth,ft=Be.contentRect.height||window.innerHeight;ot>0&&ft>0&&(N.aspect=ot/ft,N.updateProjectionMatrix(),F.setSize(ot,ft))}});D.observe(v.current);const C=new uE(16777215,1.2);y.add(C);const I=new iE(3718648,1976635,1);y.add(I);const M=new cE(16776171,2);M.position.set(12,28,12),M.castShadow=!0,M.shadow.mapSize.width=2048,M.shadow.mapSize.height=2048,M.shadow.camera.near=.5,M.shadow.camera.far=60,M.shadow.camera.left=-18,M.shadow.camera.right=18,M.shadow.camera.top=20,M.shadow.camera.bottom=-35,y.add(M);const U=new oE(16755200,0,12);y.add(U);const k=new ar(24,60);k.rotateX(-Math.PI/2);const W=document.createElement("canvas");W.width=512,W.height=512;const Y=W.getContext("2d");Y.fillStyle="#111827",Y.fillRect(0,0,512,512),Y.strokeStyle="#1f2937",Y.lineWidth=4;for(let Pe=0;Pe<512;Pe+=32)Y.beginPath(),Y.moveTo(Pe,0),Y.lineTo(Pe,512),Y.moveTo(0,Pe),Y.lineTo(512,Pe),Y.stroke();Y.fillStyle="#ef4444",Y.fillRect(0,420,512,16);const ce=new Yu(W);ce.wrapS=Ga,ce.wrapT=Ga,ce.repeat.set(1,2);const $=new Dn({map:ce,roughness:.8,metalness:.2}),te=new xt(k,$);te.position.set(0,0,-15),te.receiveShadow=!0,y.add(te);const Z=new Dn({color:3621201,roughness:.5}),K=new xt(new mn(.8,1.2,60),Z);K.position.set(-11.6,.6,-15),K.castShadow=!0,y.add(K);const ge=new xt(new mn(.8,1.2,60),Z);ge.position.set(11.6,.6,-15),ge.castShadow=!0,y.add(ge);const le=er.find(Pe=>Pe.id===t)||er[0],O=p3(le);O.group.position.set(0,0,4),y.add(O.group);const P=new Ol(2.8,32,16),be=new mo({color:3718648,transparent:!0,opacity:.4,wireframe:!0}),Ce=new xt(P,be);Ce.visible=!1,O.group.add(Ce),p.current.shieldMesh=Ce,ni.startEngineSound();const B=new hE,X=new Pa(new oe(0,1,0),0),se=new Nt,H=Pe=>{let Be=0,ot=0;if("touches"in Pe&&Pe.touches.length>0)Be=Pe.touches[0].clientX,ot=Pe.touches[0].clientY;else if("clientX"in Pe)Be=Pe.clientX,ot=Pe.clientY;else return;const ft=F.domElement.getBoundingClientRect();se.x=(Be-ft.left)/ft.width*2-1,se.y=-((ot-ft.top)/ft.height)*2+1,B.setFromCamera(se,N);const mt=new oe;B.ray.intersectPlane(X,mt),mt&&p.current.aimWorldPos.copy(mt)},ee=()=>{p.current.isFiring=!0},Se=()=>{p.current.isFiring=!1};window.addEventListener("mousemove",H),window.addEventListener("touchmove",H),window.addEventListener("mousedown",ee),window.addEventListener("touchstart",ee),window.addEventListener("mouseup",Se),window.addEventListener("touchend",Se);const De=()=>{if(!v.current)return;const Pe=v.current.clientWidth,Be=v.current.clientHeight;N.aspect=Pe/Be,N.updateProjectionMatrix(),F.setSize(Pe,Be)};window.addEventListener("resize",De);const de=Pe=>{const Be=Math.random()*16-8,ot=(15+u*25+Math.floor(Math.random()*u*15))*(i.damageLevel>5?2:1),ft=u%5===0&&Math.random()<.3,mt=ft?ot*5:ot,gt={id:"b_"+Math.random(),x:Be,y:1.2,z:Pe!==void 0?Pe:-32,vx:(Math.random()-.5)*1.5,vy:0,vz:2.2+u*.25,maxHealth:mt,health:mt,size:ft?2.4:1.5,color:Ix(mt),shape:ft?"boss":"cube",isBoss:ft};p.current.blocks.push(gt);const Q=ft?new dm(gt.size/2):new mn(gt.size,gt.size,gt.size),{canvas:Wt,texture:Et}=v3(Math.round(gt.health).toString(),gt.color);p.current.blockCanvases.set(gt.id,Wt),p.current.blockTextures.set(gt.id,Et);const z=new Dn({map:Et,roughness:.3,metalness:.5}),E=new xt(Q,z);E.position.set(gt.x,gt.y,gt.z),E.castShadow=!0,y.add(E),p.current.blockMeshes.set(gt.id,E)};[-10,-16,-22,-28,-34].forEach(Pe=>{de(Pe)});let st,ke=performance.now(),it=1.8;const lt=Pe=>{st=requestAnimationFrame(lt);const Be=Math.min((Pe-ke)/1e3,.1);if(ke=Pe,S.clouds.children.forEach(Ue=>{Ue.position.x+=Be*.6,Ue.position.x>40&&(Ue.position.x=-40)}),o!=="PLAYING"){F.render(y,N);return}let ot=0;(b.current.KeyA||b.current.ArrowLeft)&&(ot-=1),(b.current.KeyD||b.current.ArrowRight)&&(ot+=1),x!=null&&x.moveDir&&(ot=x.moveDir);const ft=(i==null?void 0:i.bulletSpeedLevel)||0,mt=le.baseSpeed*(1+ft*.1);p.current.tankPos+=ot*mt*12*Be,p.current.tankPos=Math.max(-9.2,Math.min(9.2,p.current.tankPos)),O.group.position.x=p.current.tankPos,ni.updateEnginePitch(ot);const gt=O.group.position;let Q=p.current.aimWorldPos;(x!=null&&x.aimX||x!=null&&x.aimY)&&(Q=new oe(p.current.tankPos+(x.aimX||0)*10,0,4-(x.aimY||0)*20));const Wt=Q.x-gt.x,Et=Q.z-(gt.z-.5),z=Math.atan2(-Wt,-Et);O.turretGroup.rotation.y=b1.lerp(O.turretGroup.rotation.y,z,.2),p.current.recoilAnim>0?(p.current.recoilAnim-=Be*12,O.barrelGroup.position.z=-.8+Math.max(0,p.current.recoilAnim)*.3):O.barrelGroup.position.z=-.8,((s==null?void 0:s.shieldActive)||0)>0&&p.current.shieldMesh?(p.current.shieldMesh.visible=!0,p.current.shieldMesh.rotation.y+=Be*2):p.current.shieldMesh&&(p.current.shieldMesh.visible=!1);const re=b.current.Space||p.current.isFiring||!!(x!=null&&x.isFiring),fe=(i==null?void 0:i.fireRateLevel)||0,xe=(s==null?void 0:s.rapidFireActive)||0,Ie=le.baseFireRate+fe*1.5,Ge=1/(xe>0?Ie*2.5:Ie);if(re&&Pe/1e3-p.current.lastFireTime>=Ge){p.current.lastFireTime=Pe/1e3,p.current.recoilAnim=.3,ni.playCannonShot(le.bulletType==="laser"?"laser":le.bulletType==="railgun"?"railgun":"heavy"),ni.playShellClink(),U.position.set(O.group.position.x,1.4,O.group.position.z-2.5),U.intensity=8;const Ue=O.barrelTipMesh,we=(i==null?void 0:i.damageLevel)||0,Le=(le.baseDamage+we*15)*(xe>0?1.5:1);Ue.forEach(Fe=>{const Oe=new oe;Fe.getWorldPosition(Oe);const at=new oe(0,0,-1);at.applyQuaternion(O.turretGroup.getWorldQuaternion(new rr));const ct=Math.max(1,(i==null?void 0:i.barrelsLevel)||1);for(let J=0;J<ct;J++){const He=(J-(ct-1)/2)*.08,Me=at.clone().applyAxisAngle(new oe(0,1,0),He),ze=Math.random()<i.critChanceLevel*.08,Ve=ze?Le*2.5:Le,Re={id:"p_"+Math.random(),x:Oe.x,y:Oe.y,z:Oe.z,vx:Me.x*32,vy:0,vz:Me.z*32,damage:Ve,isCrit:ze,type:le.bulletType,radius:.35,color:ze?"#f59e0b":le.bulletType==="laser"?"#a855f7":"#06b6d4"};p.current.projectiles.push(Re);const $e=new Ol(Re.radius,12,12),qe=new mo({color:Re.color}),yt=new xt($e,qe);yt.position.set(Re.x,Re.y,Re.z),y.add(yt),p.current.projectileMeshes.set(Re.id,yt)}})}U.intensity>0&&(U.intensity-=Be*40),it+=Be;const ye=((s==null?void 0:s.freezeActive)||0)>0;if(!ye&&it>Math.max(1,3.2-u*.2)){it=0;const Ue=Math.floor(Math.random()*2)+2;for(let we=0;we<Ue;we++)de()}for(let Ue=p.current.projectiles.length-1;Ue>=0;Ue--){const we=p.current.projectiles[Ue];we.x+=we.vx*Be,we.z+=we.vz*Be;const Le=p.current.projectileMeshes.get(we.id);if(Le&&Le.position.set(we.x,we.y,we.z),we.z<-45||we.z>10||Math.abs(we.x)>15){y.remove(Le),p.current.projectileMeshes.delete(we.id),p.current.projectiles.splice(Ue,1);continue}for(let Fe=p.current.blocks.length-1;Fe>=0;Fe--){const Oe=p.current.blocks[Fe];if(Math.hypot(we.x-Oe.x,we.z-Oe.z)<we.radius+Oe.size/2){Oe.health-=we.damage,ni.playBlockHit();for(let He=0;He<4;He++)p.current.particles.push({x:we.x,y:we.y,z:we.z,vx:(Math.random()-.5)*6,vy:Math.random()*4,vz:(Math.random()-.5)*6,size:.15,color:we.color,alpha:1,life:0,maxLife:.25,type:"spark"});we.type!=="laser"&&(Le&&y.remove(Le),p.current.projectileMeshes.delete(we.id),p.current.projectiles.splice(Ue,1));const ct=p.current.blockCanvases.get(Oe.id),J=p.current.blockTextures.get(Oe.id);if(ct&&J&&Oe.health>0&&(bS(ct,Math.ceil(Oe.health).toString(),Ix(Oe.health)),J.needsUpdate=!0),Oe.health<=0){ni.playExplosion(Oe.isBoss);const He=p.current.blockTextures.get(Oe.id);He&&(He.dispose(),p.current.blockTextures.delete(Oe.id)),p.current.blockCanvases.delete(Oe.id);for(let Ve=0;Ve<12;Ve++)p.current.particles.push({x:Oe.x,y:Oe.y,z:Oe.z,vx:(Math.random()-.5)*8,vy:Math.random()*6+2,vz:(Math.random()-.5)*8,size:.3,color:Oe.color,alpha:1,life:0,maxLife:.6,type:"debris"});const Me=Math.floor(Oe.maxHealth*.2)+5;if(d(Math.floor(Oe.maxHealth),Me),Math.random()<.4){const Ve=Math.random()<.6?"coin":Math.random()<.8?"rapid_fire":"shield",Re={id:"d_"+Math.random(),x:Oe.x,y:1,z:Oe.z,type:Ve,value:Me,vy:3};p.current.dropItems.push(Re);const $e=new _i(.3,.3,.1,12);$e.rotateX(Math.PI/2);const qe=new Dn({color:Ve==="coin"?16096779:3718648,metalness:.8,roughness:.2}),yt=new xt($e,qe);yt.position.set(Re.x,Re.y,Re.z),y.add(yt),p.current.dropMeshes.set(Re.id,yt)}const ze=p.current.blockMeshes.get(Oe.id);ze&&(y.remove(ze),ze.geometry&&ze.geometry.dispose(),ze.material&&ze.material.dispose()),p.current.blockMeshes.delete(Oe.id),p.current.blocks.splice(Fe,1)}break}}}for(let Ue=p.current.blocks.length-1;Ue>=0;Ue--){const we=p.current.blocks[Ue];ye||(we.z+=we.vz*Be,we.x+=we.vx*Be,(we.x<-9||we.x>9)&&(we.vx*=-1));const Le=p.current.blockMeshes.get(we.id);if(Le&&(Le.position.set(we.x,we.y,we.z),Le.rotation.x+=Be*.5,Le.rotation.y+=Be*.5),we.z>=2.5){((s==null?void 0:s.shieldActive)||0)<=0?(h(15),ni.playExplosion(!0)):ni.playBlockHit(),Le&&(y.remove(Le),Le.geometry&&Le.geometry.dispose(),Le.material&&Le.material.dispose());const Fe=p.current.blockTextures.get(we.id);Fe&&(Fe.dispose(),p.current.blockTextures.delete(we.id)),p.current.blockCanvases.delete(we.id),p.current.blockMeshes.delete(we.id),p.current.blocks.splice(Ue,1)}}const Ee=((i==null?void 0:i.coinMagnetLevel)||0)*4;for(let Ue=p.current.dropItems.length-1;Ue>=0;Ue--){const we=p.current.dropItems[Ue];if(we.z+=we.vy*Be,Ee>0){const Oe=O.group.position.x-we.x,at=O.group.position.z-we.z;we.x+=Oe*Ee*Be*.5,we.z+=at*Ee*Be*.5}const Le=p.current.dropMeshes.get(we.id);Le&&(Le.position.set(we.x,we.y,we.z),Le.rotation.y+=Be*3),(Math.hypot(we.x-O.group.position.x,we.z-O.group.position.z)<2||we.z>6)&&(ni.playCoin(),Le&&y.remove(Le),p.current.dropMeshes.delete(we.id),p.current.dropItems.splice(Ue,1))}F.render(y,N)};return st=requestAnimationFrame(lt),()=>{cancelAnimationFrame(st),ni.stopEngineSound(),p.current.blockTextures.forEach(Pe=>Pe.dispose()),p.current.blockTextures.clear(),p.current.blockCanvases.clear(),window.removeEventListener("mousemove",H),window.removeEventListener("touchmove",H),window.removeEventListener("mousedown",ee),window.removeEventListener("touchstart",ee),window.removeEventListener("mouseup",Se),window.removeEventListener("touchend",Se),window.removeEventListener("resize",De),D.disconnect(),F.domElement&&v.current&&v.current.removeChild(F.domElement),F.dispose()}},[o,t,u]),V.jsx("div",{ref:v,className:"absolute inset-0 w-full h-full overflow-hidden bg-slate-950 select-none touch-none z-0"})};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x3=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),S3=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,i,s)=>s?s.toUpperCase():i.toLowerCase()),zx=o=>{const t=S3(o);return t.charAt(0).toUpperCase()+t.slice(1)},ES=(...o)=>o.filter((t,i,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===i).join(" ").trim(),y3=o=>{for(const t in o)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var M3={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b3=Ct.forwardRef(({color:o="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:u,iconNode:d,...h},m)=>Ct.createElement("svg",{ref:m,...M3,width:t,height:t,stroke:o,strokeWidth:s?Number(i)*24/Number(t):i,className:ES("lucide",l),...!u&&!y3(h)&&{"aria-hidden":"true"},...h},[...d.map(([g,x])=>Ct.createElement(g,x)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sn=(o,t)=>{const i=Ct.forwardRef(({className:s,...l},u)=>Ct.createElement(b3,{ref:u,iconNode:t,className:ES(`lucide-${x3(zx(o))}`,`lucide-${o}`,s),...l}));return i.displayName=zx(o),i};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E3=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],T3=sn("arrow-left",E3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A3=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],w3=sn("arrow-right",A3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R3=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],TS=sn("arrow-up",R3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C3=[["circle",{cx:"11",cy:"13",r:"9",key:"hd149"}],["path",{d:"M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95",key:"jp4j1b"}],["path",{d:"m22 2-1.5 1.5",key:"ay92ug"}]],N3=sn("bomb",C3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D3=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],U3=sn("check",D3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L3=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],O3=sn("circle-question-mark",L3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P3=[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]],vo=sn("coins",P3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I3=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]],mm=sn("crosshair",I3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z3=[["path",{d:"M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z",key:"b19h5q"}],["path",{d:"M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z",key:"h7h5ge"}]],B3=sn("fast-forward",z3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F3=[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]],AS=sn("flame",F3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H3=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],wS=sn("house",H3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G3=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],Bx=sn("lock",G3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V3=[["path",{d:"m12 15 4 4",key:"lnac28"}],["path",{d:"M2.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l6.029-6.029a1 1 0 1 1 3 3l-6.029 6.029a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l6.365-6.367A1 1 0 0 0 8.716 4.282z",key:"nlhkjb"}],["path",{d:"m5 8 4 4",key:"j6kj7e"}]],k3=sn("magnet",V3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X3=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],W3=sn("pause",X3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q3=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],RS=sn("play",q3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y3=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],CS=sn("rotate-ccw",Y3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j3=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Pl=sn("shield",j3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z3=[["path",{d:"m10 20-1.25-2.5L6 18",key:"18frcb"}],["path",{d:"M10 4 8.75 6.5 6 6",key:"7mghy3"}],["path",{d:"m14 20 1.25-2.5L18 18",key:"1chtki"}],["path",{d:"m14 4 1.25 2.5L18 6",key:"1b4wsy"}],["path",{d:"m17 21-3-6h-4",key:"15hhxa"}],["path",{d:"m17 3-3 6 1.5 3",key:"11697g"}],["path",{d:"M2 12h6.5L10 9",key:"kv9z4n"}],["path",{d:"m20 10-1.5 2 1.5 2",key:"1swlpi"}],["path",{d:"M22 12h-6.5L14 15",key:"1mxi28"}],["path",{d:"m4 10 1.5 2L4 14",key:"k9enpj"}],["path",{d:"m7 21 3-6-1.5-3",key:"j8hb9u"}],["path",{d:"m7 3 3 6h4",key:"1otusx"}]],Fx=sn("snowflake",Z3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K3=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Q3=sn("sparkles",K3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J3=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],NS=sn("target",J3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $3=[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",key:"1n3hpd"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",key:"rfe1zi"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18",key:"7xy6bh"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6",key:"tex48p"}]],DS=sn("trophy",$3);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eR=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],US=sn("volume-2",eR);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tR=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],LS=sn("volume-x",tR);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nR=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],OS=sn("x",nR);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iR=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],ku=sn("zap",iR),aR=({score:o,wave:t,coins:i,hp:s,maxHp:l,activeSkillState:u,soundEnabled:d,onToggleSound:h,onPause:m,onActivateSkill:g})=>{const x=Math.max(0,Math.min(100,s/l*100));return V.jsxs("div",{className:"absolute inset-0 pointer-events-none flex flex-col justify-between p-4 z-20",children:[V.jsxs("div",{className:"flex items-center justify-between w-full gap-4",children:[V.jsxs("div",{className:"flex items-center gap-3 bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-2xl border border-slate-700/60 shadow-lg pointer-events-auto",children:[V.jsxs("div",{className:"flex flex-col gap-1 w-36",children:[V.jsxs("div",{className:"flex justify-between items-center text-xs font-bold text-slate-300",children:[V.jsxs("span",{className:"flex items-center gap-1",children:[V.jsx(AS,{className:"w-3.5 h-3.5 text-red-400"})," Giáp"]}),V.jsxs("span",{children:[s,"/",l]})]}),V.jsx("div",{className:"w-full h-3 bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-700",children:V.jsx("div",{className:"h-full bg-gradient-to-r from-red-600 via-amber-500 to-emerald-500 rounded-full transition-all duration-300",style:{width:`${x}%`}})})]}),V.jsx("div",{className:"h-8 w-px bg-slate-700"}),V.jsxs("div",{className:"flex flex-col",children:[V.jsx("span",{className:"text-[10px] uppercase tracking-wider text-slate-400 font-bold",children:"Đợt Sóng"}),V.jsxs("span",{className:"text-xl font-black text-amber-400 leading-none",children:["CẤP ",t]})]})]}),V.jsxs("div",{className:"flex items-center gap-4 bg-slate-900/80 backdrop-blur-md px-5 py-2 rounded-2xl border border-slate-700/60 shadow-lg pointer-events-auto",children:[V.jsxs("div",{className:"flex flex-col items-center",children:[V.jsx("span",{className:"text-[10px] uppercase tracking-widest text-slate-400 font-bold",children:"Điểm Số"}),V.jsx("span",{className:"text-2xl font-black text-white tracking-tight leading-none",children:o.toLocaleString()})]}),V.jsx("div",{className:"h-8 w-px bg-slate-700"}),V.jsxs("div",{className:"flex items-center gap-2",children:[V.jsx(vo,{className:"w-6 h-6 text-amber-400 animate-pulse"}),V.jsx("span",{className:"text-xl font-extrabold text-amber-300",children:i.toLocaleString()})]})]}),V.jsxs("div",{className:"flex items-center gap-2 pointer-events-auto",children:[V.jsx("button",{onClick:h,className:"p-3 bg-slate-900/80 hover:bg-slate-800/90 text-slate-200 rounded-xl border border-slate-700 transition active:scale-95 shadow-lg",title:"Bật/Tắt Âm Thanh",children:d?V.jsx(US,{className:"w-5 h-5 text-emerald-400"}):V.jsx(LS,{className:"w-5 h-5 text-rose-400"})}),V.jsx("button",{onClick:m,className:"p-3 bg-slate-900/80 hover:bg-slate-800/90 text-slate-200 rounded-xl border border-slate-700 transition active:scale-95 shadow-lg",title:"Tạm Dừng",children:V.jsx(W3,{className:"w-5 h-5 text-sky-400"})})]})]}),V.jsxs("div",{className:"flex items-center justify-center gap-3",children:[u.shieldActive>0&&V.jsxs("div",{className:"bg-sky-500/20 border border-sky-400 text-sky-300 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 animate-pulse",children:[V.jsx(Pl,{className:"w-4 h-4"})," Khiên Bảo Vệ (",Math.ceil(u.shieldActive),"s)"]}),u.freezeActive>0&&V.jsxs("div",{className:"bg-blue-500/20 border border-blue-400 text-blue-300 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 animate-pulse",children:[V.jsx(Fx,{className:"w-4 h-4"})," Băng Giá (",Math.ceil(u.freezeActive),"s)"]}),u.rapidFireActive>0&&V.jsxs("div",{className:"bg-amber-500/20 border border-amber-400 text-amber-300 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 animate-pulse",children:[V.jsx(ku,{className:"w-4 h-4"})," Bão Bắn Siêu Tốc (",Math.ceil(u.rapidFireActive),"s)"]})]}),V.jsxs("div",{className:"flex items-center justify-end gap-3 pointer-events-auto",children:[V.jsxs("button",{onClick:()=>g("nuke"),disabled:u.nukeCooldown>0,className:`relative group p-3.5 rounded-2xl border flex flex-col items-center gap-1 transition-all active:scale-95 ${u.nukeCooldown>0?"bg-slate-900/70 border-slate-800 text-slate-600 opacity-60":"bg-rose-950/80 hover:bg-rose-900/90 border-rose-500/60 text-rose-300 shadow-lg shadow-rose-950/50"}`,children:[V.jsx(N3,{className:"w-6 h-6 text-rose-400"}),V.jsx("span",{className:"text-[10px] font-black uppercase",children:"Bom Hạt Nhân [1]"}),u.nukeCooldown>0&&V.jsxs("span",{className:"absolute inset-0 bg-black/70 rounded-2xl flex items-center justify-center text-xs font-bold text-rose-400",children:[Math.ceil(u.nukeCooldown),"s"]})]}),V.jsxs("button",{onClick:()=>g("shield"),disabled:u.shieldActive>0,className:`relative group p-3.5 rounded-2xl border flex flex-col items-center gap-1 transition-all active:scale-95 ${u.shieldActive>0?"bg-slate-900/70 border-slate-800 text-slate-600 opacity-60":"bg-sky-950/80 hover:bg-sky-900/90 border-sky-500/60 text-sky-300 shadow-lg shadow-sky-950/50"}`,children:[V.jsx(Pl,{className:"w-6 h-6 text-sky-400"}),V.jsx("span",{className:"text-[10px] font-black uppercase",children:"Lá Chắn [2]"})]}),V.jsxs("button",{onClick:()=>g("freeze"),disabled:u.freezeActive>0,className:`relative group p-3.5 rounded-2xl border flex flex-col items-center gap-1 transition-all active:scale-95 ${u.freezeActive>0?"bg-slate-900/70 border-slate-800 text-slate-600 opacity-60":"bg-blue-950/80 hover:bg-blue-900/90 border-blue-500/60 text-blue-300 shadow-lg shadow-blue-950/50"}`,children:[V.jsx(Fx,{className:"w-6 h-6 text-blue-400"}),V.jsx("span",{className:"text-[10px] font-black uppercase",children:"Băng Giá [3]"})]})]})]})},sR=({onTouchMove:o,onTouchAim:t,onSetFiring:i})=>{const[s,l]=Ct.useState(!0);return V.jsx("div",{className:"absolute inset-0 pointer-events-none z-10 flex flex-col justify-end p-4",children:V.jsxs("div",{className:"flex items-center justify-between w-full pointer-events-auto gap-4",children:[V.jsxs("div",{className:"flex items-center gap-2 bg-slate-900/80 backdrop-blur-md p-2 rounded-2xl border border-slate-700/60 shadow-xl",children:[V.jsx("button",{onTouchStart:()=>o(-1),onTouchEnd:()=>o(0),onMouseDown:()=>o(-1),onMouseUp:()=>o(0),className:"p-4 bg-slate-800 hover:bg-slate-700 active:bg-amber-600 text-white rounded-xl transition active:scale-90 border border-slate-600 shadow-md flex items-center justify-center",children:V.jsx(T3,{className:"w-8 h-8"})}),V.jsx("button",{onTouchStart:()=>o(1),onTouchEnd:()=>o(0),onMouseDown:()=>o(1),onMouseUp:()=>o(0),className:"p-4 bg-slate-800 hover:bg-slate-700 active:bg-amber-600 text-white rounded-xl transition active:scale-90 border border-slate-600 shadow-md flex items-center justify-center",children:V.jsx(w3,{className:"w-8 h-8"})})]}),V.jsxs("div",{className:"flex items-center gap-2 bg-slate-900/80 backdrop-blur-md p-2 rounded-2xl border border-slate-700/60 shadow-xl",children:[V.jsxs("button",{onClick:()=>{const u=!s;l(u),i(u)},className:`px-4 py-3 rounded-xl border font-bold text-xs flex items-center gap-2 transition ${s?"bg-amber-500/20 border-amber-500 text-amber-300 shadow-lg shadow-amber-500/20":"bg-slate-800 border-slate-600 text-slate-400"}`,children:[V.jsx(NS,{className:"w-5 h-5"}),V.jsx("span",{children:s?"Tự Bắn: BẬT":"Tự Bắn: TẮT"})]}),!s&&V.jsxs("button",{onTouchStart:()=>i(!0),onTouchEnd:()=>i(!1),onMouseDown:()=>i(!0),onMouseUp:()=>i(!1),className:"p-4 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-black rounded-xl shadow-xl active:scale-95 flex items-center gap-2 border border-red-400",children:[V.jsx(mm,{className:"w-7 h-7"}),V.jsx("span",{className:"text-sm uppercase tracking-wider",children:"BẮN"})]})]})]})})},rR=({coins:o,highScore:t,selectedTankId:i,onStartGame:s,onOpenGarage:l,onOpenUpgrades:u})=>{const d=er.find(h=>h.id===i)||er[0];return V.jsxs("div",{className:"absolute inset-0 z-30 bg-slate-950/90 backdrop-blur-md flex flex-col items-center justify-between p-6 overflow-y-auto",children:[V.jsxs("div",{className:"w-full max-w-2xl flex items-center justify-between",children:[V.jsxs("div",{className:"flex items-center gap-2 bg-slate-900/80 px-4 py-2 rounded-2xl border border-slate-700 shadow-lg",children:[V.jsx(DS,{className:"w-5 h-5 text-amber-400"}),V.jsx("span",{className:"text-xs uppercase font-bold text-slate-400",children:"Kỷ Lục:"}),V.jsx("span",{className:"text-lg font-black text-amber-300",children:t.toLocaleString()})]}),V.jsxs("div",{className:"flex items-center gap-2 bg-slate-900/80 px-4 py-2 rounded-2xl border border-slate-700 shadow-lg",children:[V.jsx(vo,{className:"w-5 h-5 text-amber-400"}),V.jsx("span",{className:"text-lg font-black text-amber-300",children:o.toLocaleString()})]})]}),V.jsxs("div",{className:"flex flex-col items-center text-center my-auto",children:[V.jsx("div",{className:"inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold px-4 py-1.5 rounded-full mb-4 shadow-inner",children:"🪖 GAME BẮN TĂNG 3D THỰC TẾ"}),V.jsxs("h1",{className:"text-5xl md:text-7xl font-black text-white tracking-tight uppercase drop-shadow-2xl mb-2",children:["BẮN TĂNG ",V.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-red-500",children:"3D"})]}),V.jsx("p",{className:"text-slate-300 max-w-md text-sm md:text-base leading-relaxed mb-6 font-medium",children:"Dùng pháo xe tăng bắn bóng công phá các khối số bọc thép. Nâng cấp hỏa lực và mở khóa những chiếc xe tăng siêu ngầu!"}),V.jsxs("div",{className:"bg-slate-900/80 border border-slate-700/80 p-4 rounded-2xl flex items-center gap-4 mb-8 shadow-xl",children:[V.jsx("div",{className:"w-12 h-12 rounded-xl flex items-center justify-center text-xl font-black shadow-inner",style:{backgroundColor:d.primaryColor,color:"#ffffff"},children:d.country.split(" ")[1]||"🎖️"}),V.jsxs("div",{className:"text-left",children:[V.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider text-slate-400",children:"Xe Tăng Đang Dùng"}),V.jsx("h3",{className:"text-lg font-black text-white",children:d.name})]})]}),V.jsxs("div",{className:"flex flex-col gap-3 w-full max-w-xs",children:[V.jsxs("button",{onClick:s,className:"w-full py-5 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-600 to-red-600 hover:from-amber-400 hover:to-red-500 text-slate-950 font-black text-lg uppercase tracking-wider shadow-2xl shadow-amber-500/30 active:scale-95 transition flex items-center justify-center gap-3",children:[V.jsx(RS,{className:"w-6 h-6 fill-slate-950"})," XUẤT TRẬN NGAY"]}),V.jsxs("div",{className:"grid grid-cols-2 gap-3 w-full",children:[V.jsxs("button",{onClick:l,className:"py-3.5 px-4 rounded-2xl bg-slate-800/80 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider border border-slate-700 flex items-center justify-center gap-2 active:scale-95 transition shadow-lg",children:[V.jsx(Pl,{className:"w-4 h-4 text-sky-400"})," Tủ Xe Tăng"]}),V.jsxs("button",{onClick:u,className:"py-3.5 px-4 rounded-2xl bg-slate-800/80 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider border border-slate-700 flex items-center justify-center gap-2 active:scale-95 transition shadow-lg",children:[V.jsx(TS,{className:"w-4 h-4 text-emerald-400"})," Nâng Cấp"]})]})]})]}),V.jsxs("div",{className:"bg-slate-900/60 border border-slate-800 p-4 rounded-2xl max-w-lg w-full flex items-center gap-3 text-xs text-slate-400",children:[V.jsx(O3,{className:"w-6 h-6 text-sky-400 shrink-0"}),V.jsxs("div",{children:[V.jsx("span",{className:"font-bold text-slate-200",children:"Cách Điều Khiển:"})," PC: Dùng nút ",V.jsx("kbd",{className:"px-1.5 py-0.5 bg-slate-800 rounded border border-slate-700 text-slate-300",children:"A"}),"/",V.jsx("kbd",{className:"px-1.5 py-0.5 bg-slate-800 rounded border border-slate-700 text-slate-300",children:"D"})," hoặc Phím Mũi Tên di chuyển, Chuột nhắm bắn. Mobile: Dùng Nút Bắn & Điều Hướng Cảm Ứng."]})]})]})},oR=({coins:o,unlockedTanks:t,selectedTankId:i,onSelectTank:s,onUnlockTank:l,onClose:u})=>{const[d,h]=Ct.useState(er.findIndex(p=>p.id===i)||0),m=er[d],g=t.includes(m.id),x=i===m.id,v=o>=m.price;return V.jsx("div",{className:"fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xl flex items-center justify-center p-4",children:V.jsxs("div",{className:"relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]",children:[V.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-slate-800 bg-slate-900/50",children:[V.jsxs("div",{children:[V.jsxs("h2",{className:"text-2xl font-black text-white flex items-center gap-2",children:[V.jsx(Q3,{className:"w-6 h-6 text-amber-400"})," PHÒNG TRƯNG BÀY XE TĂNG"]}),V.jsx("p",{className:"text-sm text-slate-400",children:"Mở khóa và nâng cấp siêu xe tăng chiến đấu 3D"})]}),V.jsxs("div",{className:"flex items-center gap-4",children:[V.jsxs("div",{className:"flex items-center gap-2 bg-slate-800/80 px-4 py-2 rounded-xl border border-slate-700",children:[V.jsx(vo,{className:"w-5 h-5 text-amber-400"}),V.jsx("span",{className:"text-lg font-black text-amber-300",children:o.toLocaleString()})]}),V.jsx("button",{onClick:u,className:"p-2.5 bg-slate-800 hover:bg-slate-700 rounded-xl text-slate-400 hover:text-white transition",children:V.jsx(OS,{className:"w-6 h-6"})})]})]}),V.jsxs("div",{className:"flex-1 grid grid-cols-1 md:grid-cols-12 gap-6 p-6 overflow-y-auto",children:[V.jsxs("div",{className:"md:col-span-5 flex flex-col gap-3",children:[V.jsx("h3",{className:"text-xs font-bold uppercase tracking-wider text-slate-400",children:"Danh Sách Tăng"}),er.map((p,b)=>{const A=t.includes(p.id),L=i===p.id;return V.jsxs("button",{onClick:()=>h(b),className:`flex items-center justify-between p-4 rounded-2xl border transition-all text-left ${b===d?"bg-amber-500/10 border-amber-500 shadow-lg shadow-amber-500/10":"bg-slate-800/60 hover:bg-slate-800 border-slate-700/60"}`,children:[V.jsxs("div",{className:"flex items-center gap-3",children:[V.jsx("div",{className:"w-10 h-10 rounded-xl flex items-center justify-center font-black text-lg shadow-inner",style:{backgroundColor:p.primaryColor,color:"#ffffff"},children:p.country.split(" ")[1]||"🎖️"}),V.jsxs("div",{children:[V.jsxs("h4",{className:"font-bold text-white text-sm flex items-center gap-2",children:[p.name,L&&V.jsx("span",{className:"text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/30",children:"Đang dùng"})]}),V.jsxs("p",{className:"text-xs text-slate-400",children:[p.type," • ",p.barrelsCount," Nòng Pháo"]})]})]}),V.jsx("div",{children:A?V.jsx(U3,{className:`w-5 h-5 ${L?"text-amber-400":"text-slate-500"}`}):V.jsx(Bx,{className:"w-5 h-5 text-slate-500"})})]},p.id)})]}),V.jsxs("div",{className:"md:col-span-7 bg-slate-950/60 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between",children:[V.jsxs("div",{children:[V.jsxs("div",{className:"flex items-center justify-between mb-4",children:[V.jsxs("div",{children:[V.jsx("span",{className:"text-xs font-bold uppercase tracking-widest text-amber-400",children:m.country}),V.jsx("h3",{className:"text-3xl font-black text-white",children:m.name})]}),V.jsx("span",{className:"text-xs font-bold px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700",children:m.type})]}),V.jsx("p",{className:"text-sm text-slate-300 leading-relaxed mb-6 bg-slate-900/60 p-4 rounded-xl border border-slate-800",children:m.description}),V.jsxs("div",{className:"space-y-4 mb-6",children:[V.jsxs("div",{children:[V.jsxs("div",{className:"flex justify-between text-xs font-bold mb-1",children:[V.jsxs("span",{className:"text-slate-400 flex items-center gap-1",children:[V.jsx(mm,{className:"w-4 h-4 text-red-400"})," Sát Thương"]}),V.jsx("span",{className:"text-white",children:m.baseDamage})]}),V.jsx("div",{className:"w-full h-2 bg-slate-800 rounded-full overflow-hidden",children:V.jsx("div",{className:"h-full bg-red-500",style:{width:`${Math.min(100,m.baseDamage/220*100)}%`}})})]}),V.jsxs("div",{children:[V.jsxs("div",{className:"flex justify-between text-xs font-bold mb-1",children:[V.jsxs("span",{className:"text-slate-400 flex items-center gap-1",children:[V.jsx(ku,{className:"w-4 h-4 text-amber-400"})," Tốc Độ Bắn"]}),V.jsxs("span",{className:"text-white",children:[m.baseFireRate," shot/s"]})]}),V.jsx("div",{className:"w-full h-2 bg-slate-800 rounded-full overflow-hidden",children:V.jsx("div",{className:"h-full bg-amber-500",style:{width:`${Math.min(100,m.baseFireRate/10*100)}%`}})})]}),V.jsxs("div",{children:[V.jsxs("div",{className:"flex justify-between text-xs font-bold mb-1",children:[V.jsxs("span",{className:"text-slate-400 flex items-center gap-1",children:[V.jsx(Pl,{className:"w-4 h-4 text-sky-400"})," Số Nòng Pháo"]}),V.jsxs("span",{className:"text-white",children:[m.barrelsCount," Nòng"]})]}),V.jsx("div",{className:"w-full h-2 bg-slate-800 rounded-full overflow-hidden",children:V.jsx("div",{className:"h-full bg-sky-500",style:{width:`${m.barrelsCount/4*100}%`}})})]})]}),V.jsxs("div",{className:"bg-amber-950/30 border border-amber-500/30 p-4 rounded-xl mb-6",children:[V.jsxs("h4",{className:"text-xs font-black uppercase text-amber-400 mb-1",children:["Kỹ Năng Đặc Biệt: ",m.specialSkillName]}),V.jsx("p",{className:"text-xs text-amber-200/80",children:m.specialSkillDesc})]})]}),V.jsx("div",{children:g?V.jsx("button",{onClick:()=>s(m.id),disabled:x,className:`w-full py-4 rounded-2xl font-black text-sm uppercase tracking-wider transition ${x?"bg-slate-800 text-slate-500 border border-slate-700 cursor-not-allowed":"bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-600/30 active:scale-98"}`,children:x?"Đang Trang Bị":"Trang Bị Xe Tăng"}):V.jsxs("button",{onClick:()=>l(m),disabled:!v,className:`w-full py-4 rounded-2xl font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition ${v?"bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-xl shadow-amber-500/20 active:scale-98":"bg-slate-800 text-slate-500 border border-slate-700 cursor-not-allowed"}`,children:[V.jsx(Bx,{className:"w-5 h-5"}),V.jsxs("span",{children:["Mở Khóa - ",m.price.toLocaleString()," Xu"]})]})})]})]})]})})},lR=[{key:"damageLevel",name:"Sức Mạnh Pháo",desc:"Tăng sát thương gây ra cho mỗi quả bóng đạn.",icon:V.jsx(mm,{className:"w-5 h-5 text-red-400"}),maxLevel:20,baseCost:200,costMultiplier:1.5},{key:"fireRateLevel",name:"Tốc Độ Bắn",desc:"Tăng số quả bóng đạn bắn ra mỗi giây.",icon:V.jsx(ku,{className:"w-5 h-5 text-amber-400"}),maxLevel:15,baseCost:250,costMultiplier:1.6},{key:"barrelsLevel",name:"Bắn Chùm / Đa Nòng",desc:"Bắn ra nhiều đường bóng đạn cùng lúc.",icon:V.jsx(NS,{className:"w-5 h-5 text-sky-400"}),maxLevel:3,baseCost:1e3,costMultiplier:3},{key:"bulletSpeedLevel",name:"Tốc Độ Đạn & Di Chuyển",desc:"Bóng đạn bay nhanh hơn và xe tăng di chuyển linh hoạt.",icon:V.jsx(B3,{className:"w-5 h-5 text-emerald-400"}),maxLevel:10,baseCost:300,costMultiplier:1.4},{key:"critChanceLevel",name:"Tỷ Lệ Chí Mạng",desc:"Tăng xác xuất bắn quả bóng bộc nổ x2.5 sát thương.",icon:V.jsx(ku,{className:"w-5 h-5 text-purple-400"}),maxLevel:10,baseCost:400,costMultiplier:1.8},{key:"coinMagnetLevel",name:"Nam Châm Hút Xu",desc:"Tự động hút vàng từ các khối số bị phá hủy.",icon:V.jsx(k3,{className:"w-5 h-5 text-yellow-400"}),maxLevel:5,baseCost:500,costMultiplier:2}],cR=({coins:o,upgrades:t,onUpgradeStat:i,onClose:s})=>V.jsx("div",{className:"fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xl flex items-center justify-center p-4",children:V.jsxs("div",{className:"relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]",children:[V.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-slate-800 bg-slate-900/50",children:[V.jsxs("div",{children:[V.jsxs("h2",{className:"text-2xl font-black text-white flex items-center gap-2",children:[V.jsx(TS,{className:"w-6 h-6 text-emerald-400"})," NÂNG CẤP TĂNG"]}),V.jsx("p",{className:"text-sm text-slate-400",children:"Nâng cao sức mạnh hỏa lực cho mọi trận chiến"})]}),V.jsxs("div",{className:"flex items-center gap-4",children:[V.jsxs("div",{className:"flex items-center gap-2 bg-slate-800/80 px-4 py-2 rounded-xl border border-slate-700",children:[V.jsx(vo,{className:"w-5 h-5 text-amber-400"}),V.jsx("span",{className:"text-lg font-black text-amber-300",children:o.toLocaleString()})]}),V.jsx("button",{onClick:s,className:"p-2.5 bg-slate-800 hover:bg-slate-700 rounded-xl text-slate-400 hover:text-white transition",children:V.jsx(OS,{className:"w-6 h-6"})})]})]}),V.jsx("div",{className:"p-6 overflow-y-auto space-y-4",children:lR.map(l=>{const u=t[l.key],d=u>=l.maxLevel,h=Math.floor(l.baseCost*Math.pow(l.costMultiplier,u)),m=o>=h;return V.jsxs("div",{className:"bg-slate-950/60 border border-slate-800 p-4 rounded-2xl flex items-center justify-between gap-4",children:[V.jsxs("div",{className:"flex items-start gap-3",children:[V.jsx("div",{className:"p-3 bg-slate-900 border border-slate-800 rounded-xl",children:l.icon}),V.jsxs("div",{children:[V.jsxs("h3",{className:"font-bold text-white text-base flex items-center gap-2",children:[l.name,V.jsxs("span",{className:"text-xs font-black bg-slate-800 text-amber-400 px-2 py-0.5 rounded-full border border-slate-700",children:["Cấp ",u,"/",l.maxLevel]})]}),V.jsx("p",{className:"text-xs text-slate-400 mt-0.5",children:l.desc})]})]}),V.jsx("div",{children:d?V.jsx("span",{className:"text-xs font-black uppercase text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-4 py-2 rounded-xl",children:"Tối Đa"}):V.jsxs("button",{onClick:()=>i(l.key,h),disabled:!m,className:`px-4 py-3 rounded-xl font-black text-xs uppercase flex items-center gap-1.5 transition ${m?"bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/20 active:scale-95":"bg-slate-800 text-slate-500 border border-slate-700 cursor-not-allowed"}`,children:[V.jsx(vo,{className:"w-4 h-4"}),V.jsxs("span",{children:[h.toLocaleString()," Xu"]})]})})]},l.key)})})]})}),uR=({soundEnabled:o,onToggleSound:t,onResume:i,onRestart:s,onMainMenu:l})=>V.jsx("div",{className:"fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xl flex items-center justify-center p-4",children:V.jsxs("div",{className:"relative w-full max-w-sm bg-slate-900 border border-slate-700/80 rounded-3xl p-6 shadow-2xl flex flex-col items-center text-center",children:[V.jsx("h2",{className:"text-3xl font-black text-white uppercase tracking-tight mb-2",children:"TẠM DỪNG"}),V.jsx("p",{className:"text-xs text-slate-400 mb-6",children:"Trò chơi đang được tạm dừng"}),V.jsxs("div",{className:"flex flex-col gap-3 w-full mb-6",children:[V.jsxs("button",{onClick:i,className:"w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-sm uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 active:scale-95 transition",children:[V.jsx(RS,{className:"w-5 h-5 fill-slate-950"})," Tiếp Tục Bắn"]}),V.jsxs("button",{onClick:s,className:"w-full py-3.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider border border-slate-700 flex items-center justify-center gap-2 active:scale-95 transition",children:[V.jsx(CS,{className:"w-4 h-4 text-sky-400"})," Bắn Lai"]}),V.jsxs("button",{onClick:l,className:"w-full py-3.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider border border-slate-700 flex items-center justify-center gap-2 active:scale-95 transition",children:[V.jsx(wS,{className:"w-4 h-4 text-emerald-400"})," Trang Chủ"]})]}),V.jsxs("button",{onClick:t,className:"flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition",children:[o?V.jsx(US,{className:"w-4 h-4 text-emerald-400"}):V.jsx(LS,{className:"w-4 h-4 text-rose-400"}),V.jsx("span",{children:o?"Âm Thanh: BẬT":"Âm Thanh: TẮT"})]})]})});var gm={};(function o(t,i,s,l){var u=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),d=typeof Path2D=="function"&&typeof DOMMatrix=="function",h=(function(){if(!t.OffscreenCanvas)return!1;try{var O=new OffscreenCanvas(1,1),P=O.getContext("2d");P.fillRect(0,0,1,1);var be=O.transferToImageBitmap();P.createPattern(be,"no-repeat")}catch{return!1}return!0})();function m(){}function g(O){var P=i.exports.Promise,be=P!==void 0?P:t.Promise;return typeof be=="function"?new be(O):(O(m,m),null)}var x=(function(O,P){return{transform:function(be){if(O)return be;if(P.has(be))return P.get(be);var Ce=new OffscreenCanvas(be.width,be.height),B=Ce.getContext("2d");return B.drawImage(be,0,0),P.set(be,Ce),Ce},clear:function(){P.clear()}}})(h,new Map),v=(function(){var O=Math.floor(16.666666666666668),P,be,Ce={},B=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(P=function(X){var se=Math.random();return Ce[se]=requestAnimationFrame(function H(ee){B===ee||B+O-1<ee?(B=ee,delete Ce[se],X()):Ce[se]=requestAnimationFrame(H)}),se},be=function(X){Ce[X]&&cancelAnimationFrame(Ce[X])}):(P=function(X){return setTimeout(X,O)},be=function(X){return clearTimeout(X)}),{frame:P,cancel:be}})(),p=(function(){var O,P,be={};function Ce(B){function X(se,H){B.postMessage({options:se||{},callback:H})}B.init=function(H){var ee=H.transferControlToOffscreen();B.postMessage({canvas:ee},[ee])},B.fire=function(H,ee,Se){if(P)return X(H,null),P;var De=Math.random().toString(36).slice(2);return P=g(function(de){function Ne(st){st.data.callback===De&&(delete be[De],B.removeEventListener("message",Ne),P=null,x.clear(),Se(),de())}B.addEventListener("message",Ne),X(H,De),be[De]=Ne.bind(null,{data:{callback:De}})}),P},B.reset=function(){B.postMessage({reset:!0});for(var H in be)be[H](),delete be[H]}}return function(){if(O)return O;if(!s&&u){var B=["var CONFETTI, SIZE = {}, module = {};","("+o.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{O=new Worker(URL.createObjectURL(new Blob([B])))}catch(X){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",X),null}Ce(O)}return O}})(),b={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function A(O,P){return P?P(O):O}function L(O){return O!=null}function y(O,P,be){return A(O&&L(O[P])?O[P]:b[P],be)}function S(O){return O<0?0:Math.floor(O)}function N(O,P){return Math.floor(Math.random()*(P-O))+O}function F(O){return parseInt(O,16)}function R(O){return O.map(D)}function D(O){var P=String(O).replace(/[^0-9a-f]/gi,"");return P.length<6&&(P=P[0]+P[0]+P[1]+P[1]+P[2]+P[2]),{r:F(P.substring(0,2)),g:F(P.substring(2,4)),b:F(P.substring(4,6))}}function C(O){var P=y(O,"origin",Object);return P.x=y(P,"x",Number),P.y=y(P,"y",Number),P}function I(O){O.width=document.documentElement.clientWidth,O.height=document.documentElement.clientHeight}function M(O){var P=O.getBoundingClientRect();O.width=P.width,O.height=P.height}function U(O){var P=document.createElement("canvas");return P.style.position="fixed",P.style.top="0px",P.style.left="0px",P.style.pointerEvents="none",P.style.zIndex=O,P}function k(O,P,be,Ce,B,X,se,H,ee){O.save(),O.translate(P,be),O.rotate(X),O.scale(Ce,B),O.arc(0,0,1,se,H,ee),O.restore()}function W(O){var P=O.angle*(Math.PI/180),be=O.spread*(Math.PI/180);return{x:O.x,y:O.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:O.startVelocity*.5+Math.random()*O.startVelocity,angle2D:-P+(.5*be-Math.random()*be),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:O.color,shape:O.shape,tick:0,totalTicks:O.ticks,decay:O.decay,drift:O.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:O.gravity*3,ovalScalar:.6,scalar:O.scalar,flat:O.flat}}function Y(O,P){P.x+=Math.cos(P.angle2D)*P.velocity+P.drift,P.y+=Math.sin(P.angle2D)*P.velocity+P.gravity,P.velocity*=P.decay,P.flat?(P.wobble=0,P.wobbleX=P.x+10*P.scalar,P.wobbleY=P.y+10*P.scalar,P.tiltSin=0,P.tiltCos=0,P.random=1):(P.wobble+=P.wobbleSpeed,P.wobbleX=P.x+10*P.scalar*Math.cos(P.wobble),P.wobbleY=P.y+10*P.scalar*Math.sin(P.wobble),P.tiltAngle+=.1,P.tiltSin=Math.sin(P.tiltAngle),P.tiltCos=Math.cos(P.tiltAngle),P.random=Math.random()+2);var be=P.tick++/P.totalTicks,Ce=P.x+P.random*P.tiltCos,B=P.y+P.random*P.tiltSin,X=P.wobbleX+P.random*P.tiltCos,se=P.wobbleY+P.random*P.tiltSin;if(O.fillStyle="rgba("+P.color.r+", "+P.color.g+", "+P.color.b+", "+(1-be)+")",O.beginPath(),d&&P.shape.type==="path"&&typeof P.shape.path=="string"&&Array.isArray(P.shape.matrix))O.fill(K(P.shape.path,P.shape.matrix,P.x,P.y,Math.abs(X-Ce)*.1,Math.abs(se-B)*.1,Math.PI/10*P.wobble));else if(P.shape.type==="bitmap"){var H=Math.PI/10*P.wobble,ee=Math.abs(X-Ce)*.1,Se=Math.abs(se-B)*.1,De=P.shape.bitmap.width*P.scalar,de=P.shape.bitmap.height*P.scalar,Ne=new DOMMatrix([Math.cos(H)*ee,Math.sin(H)*ee,-Math.sin(H)*Se,Math.cos(H)*Se,P.x,P.y]);Ne.multiplySelf(new DOMMatrix(P.shape.matrix));var st=O.createPattern(x.transform(P.shape.bitmap),"no-repeat");st.setTransform(Ne),O.globalAlpha=1-be,O.fillStyle=st,O.fillRect(P.x-De/2,P.y-de/2,De,de),O.globalAlpha=1}else if(P.shape==="circle")O.ellipse?O.ellipse(P.x,P.y,Math.abs(X-Ce)*P.ovalScalar,Math.abs(se-B)*P.ovalScalar,Math.PI/10*P.wobble,0,2*Math.PI):k(O,P.x,P.y,Math.abs(X-Ce)*P.ovalScalar,Math.abs(se-B)*P.ovalScalar,Math.PI/10*P.wobble,0,2*Math.PI);else if(P.shape==="star")for(var ke=Math.PI/2*3,it=4*P.scalar,lt=8*P.scalar,Pe=P.x,Be=P.y,ot=5,ft=Math.PI/ot;ot--;)Pe=P.x+Math.cos(ke)*lt,Be=P.y+Math.sin(ke)*lt,O.lineTo(Pe,Be),ke+=ft,Pe=P.x+Math.cos(ke)*it,Be=P.y+Math.sin(ke)*it,O.lineTo(Pe,Be),ke+=ft;else O.moveTo(Math.floor(P.x),Math.floor(P.y)),O.lineTo(Math.floor(P.wobbleX),Math.floor(B)),O.lineTo(Math.floor(X),Math.floor(se)),O.lineTo(Math.floor(Ce),Math.floor(P.wobbleY));return O.closePath(),O.fill(),P.tick<P.totalTicks}function ce(O,P,be,Ce,B){var X=P.slice(),se=O.getContext("2d"),H,ee,Se=g(function(De){function de(){H=ee=null,se.clearRect(0,0,Ce.width,Ce.height),x.clear(),B(),De()}function Ne(){s&&!(Ce.width===l.width&&Ce.height===l.height)&&(Ce.width=O.width=l.width,Ce.height=O.height=l.height),!Ce.width&&!Ce.height&&(be(O),Ce.width=O.width,Ce.height=O.height),se.clearRect(0,0,Ce.width,Ce.height),X=X.filter(function(st){return Y(se,st)}),X.length?H=v.frame(Ne):de()}H=v.frame(Ne),ee=de});return{addFettis:function(De){return X=X.concat(De),Se},canvas:O,promise:Se,reset:function(){H&&v.cancel(H),ee&&ee()}}}function $(O,P){var be=!O,Ce=!!y(P||{},"resize"),B=!1,X=y(P,"disableForReducedMotion",Boolean),se=u&&!!y(P||{},"useWorker"),H=se?p():null,ee=be?I:M,Se=O&&H?!!O.__confetti_initialized:!1,De=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,de;function Ne(ke,it,lt){for(var Pe=y(ke,"particleCount",S),Be=y(ke,"angle",Number),ot=y(ke,"spread",Number),ft=y(ke,"startVelocity",Number),mt=y(ke,"decay",Number),gt=y(ke,"gravity",Number),Q=y(ke,"drift",Number),Wt=y(ke,"colors",R),Et=y(ke,"ticks",Number),z=y(ke,"shapes"),E=y(ke,"scalar"),re=!!y(ke,"flat"),fe=C(ke),xe=Pe,Ie=[],Ge=O.width*fe.x,ye=O.height*fe.y;xe--;)Ie.push(W({x:Ge,y:ye,angle:Be,spread:ot,startVelocity:ft,color:Wt[xe%Wt.length],shape:z[N(0,z.length)],ticks:Et,decay:mt,gravity:gt,drift:Q,scalar:E,flat:re}));return de?de.addFettis(Ie):(de=ce(O,Ie,ee,it,lt),de.promise)}function st(ke){var it=X||y(ke,"disableForReducedMotion",Boolean),lt=y(ke,"zIndex",Number);if(it&&De)return g(function(ft){ft()});be&&de?O=de.canvas:be&&!O&&(O=U(lt),document.body.appendChild(O)),Ce&&!Se&&ee(O);var Pe={width:O.width,height:O.height};H&&!Se&&H.init(O),Se=!0,H&&(O.__confetti_initialized=!0);function Be(){if(H){var ft={getBoundingClientRect:function(){if(!be)return O.getBoundingClientRect()}};ee(ft),H.postMessage({resize:{width:ft.width,height:ft.height}});return}Pe.width=Pe.height=null}function ot(){de=null,Ce&&(B=!1,t.removeEventListener("resize",Be)),be&&O&&(document.body.contains(O)&&document.body.removeChild(O),O=null,Se=!1)}return Ce&&!B&&(B=!0,t.addEventListener("resize",Be,!1)),H?H.fire(ke,Pe,ot):Ne(ke,Pe,ot)}return st.reset=function(){H&&H.reset(),de&&de.reset()},st}var te;function Z(){return te||(te=$(null,{useWorker:!0,resize:!0})),te}function K(O,P,be,Ce,B,X,se){var H=new Path2D(O),ee=new Path2D;ee.addPath(H,new DOMMatrix(P));var Se=new Path2D;return Se.addPath(ee,new DOMMatrix([Math.cos(se)*B,Math.sin(se)*B,-Math.sin(se)*X,Math.cos(se)*X,be,Ce])),Se}function ge(O){if(!d)throw new Error("path confetti are not supported in this browser");var P,be;typeof O=="string"?P=O:(P=O.path,be=O.matrix);var Ce=new Path2D(P),B=document.createElement("canvas"),X=B.getContext("2d");if(!be){for(var se=1e3,H=se,ee=se,Se=0,De=0,de,Ne,st=0;st<se;st+=2)for(var ke=0;ke<se;ke+=2)X.isPointInPath(Ce,st,ke,"nonzero")&&(H=Math.min(H,st),ee=Math.min(ee,ke),Se=Math.max(Se,st),De=Math.max(De,ke));de=Se-H,Ne=De-ee;var it=10,lt=Math.min(it/de,it/Ne);be=[lt,0,0,lt,-Math.round(de/2+H)*lt,-Math.round(Ne/2+ee)*lt]}return{type:"path",path:P,matrix:be}}function le(O){var P,be=1,Ce="#000000",B='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof O=="string"?P=O:(P=O.text,be="scalar"in O?O.scalar:be,B="fontFamily"in O?O.fontFamily:B,Ce="color"in O?O.color:Ce);var X=10*be,se=""+X+"px "+B,H=new OffscreenCanvas(X,X),ee=H.getContext("2d");ee.font=se;var Se=ee.measureText(P),De=Math.ceil(Se.actualBoundingBoxRight+Se.actualBoundingBoxLeft),de=Math.ceil(Se.actualBoundingBoxAscent+Se.actualBoundingBoxDescent),Ne=2,st=Se.actualBoundingBoxLeft+Ne,ke=Se.actualBoundingBoxAscent+Ne;De+=Ne+Ne,de+=Ne+Ne,H=new OffscreenCanvas(De,de),ee=H.getContext("2d"),ee.font=se,ee.fillStyle=Ce,ee.fillText(P,st,ke);var it=1/be;return{type:"bitmap",bitmap:H.transferToImageBitmap(),matrix:[it,0,0,it,-De*it/2,-de*it/2]}}i.exports=function(){return Z().apply(this,arguments)},i.exports.reset=function(){Z().reset()},i.exports.create=$,i.exports.shapeFromPath=ge,i.exports.shapeFromText=le})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),gm,!1);const fR=gm.exports;gm.exports.create;const dR=({score:o,highScore:t,isNewHighScore:i,wave:s,earnedCoins:l,onRestart:u,onMainMenu:d,onOpenGarage:h})=>(Ct.useEffect(()=>{i&&fR({particleCount:100,spread:70,origin:{y:.6}})},[i]),V.jsx("div",{className:"fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-xl flex items-center justify-center p-4",children:V.jsxs("div",{className:"relative w-full max-w-md bg-slate-900 border border-slate-700/80 rounded-3xl p-6 shadow-2xl flex flex-col items-center text-center",children:[V.jsx("div",{className:"w-16 h-16 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center mb-3",children:V.jsx(AS,{className:"w-8 h-8 text-rose-500 animate-pulse"})}),V.jsx("h2",{className:"text-3xl font-black text-white uppercase tracking-tight mb-1",children:"KẾT THÚC TRẬN BẮN"}),V.jsx("p",{className:"text-xs text-slate-400 mb-6",children:"Xe tăng của bạn đã thất thủ trước bão khối số!"}),V.jsxs("div",{className:"w-full bg-slate-950/60 border border-slate-800 rounded-2xl p-4 mb-6 space-y-3",children:[V.jsxs("div",{className:"flex justify-between items-center text-sm",children:[V.jsxs("span",{className:"text-slate-400 font-bold flex items-center gap-1.5",children:[V.jsx(DS,{className:"w-4 h-4 text-amber-400"})," Tổng Điểm"]}),V.jsx("span",{className:"text-xl font-black text-white",children:o.toLocaleString()})]}),i&&V.jsx("div",{className:"bg-amber-500/20 border border-amber-500/40 text-amber-300 py-1.5 px-3 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2",children:"🎉 KỶ LỤC MỚI XÁC LẬP!"}),V.jsx("div",{className:"h-px bg-slate-800"}),V.jsxs("div",{className:"flex justify-between items-center text-sm",children:[V.jsx("span",{className:"text-slate-400 font-bold",children:"Cấp Đợt Sóng Khối Số"}),V.jsxs("span",{className:"font-bold text-amber-400",children:["Cấp ",s]})]}),V.jsxs("div",{className:"flex justify-between items-center text-sm",children:[V.jsxs("span",{className:"text-slate-400 font-bold flex items-center gap-1.5",children:[V.jsx(vo,{className:"w-4 h-4 text-amber-400"})," Xu Nhận Được"]}),V.jsxs("span",{className:"font-bold text-amber-300",children:["+",l.toLocaleString()," Xu"]})]})]}),V.jsxs("div",{className:"flex flex-col gap-3 w-full",children:[V.jsxs("button",{onClick:u,className:"w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-sm uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 active:scale-95 transition",children:[V.jsx(CS,{className:"w-5 h-5 fill-slate-950"})," Bắn Lại Trận Mới"]}),V.jsxs("div",{className:"grid grid-cols-2 gap-3 w-full",children:[V.jsxs("button",{onClick:h,className:"py-3.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider border border-slate-700 flex items-center justify-center gap-2 active:scale-95 transition",children:[V.jsx(Pl,{className:"w-4 h-4 text-sky-400"})," Tủ Xe Tăng"]}),V.jsxs("button",{onClick:d,className:"py-3.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider border border-slate-700 flex items-center justify-center gap-2 active:scale-95 transition",children:[V.jsx(wS,{className:"w-4 h-4 text-emerald-400"})," Trang Chủ"]})]})]})]})})),Hx="ban_tang_progress_v1";function hR(){const[o,t]=Ct.useState("MENU"),[i,s]=Ct.useState(null),[l,u]=Ct.useState(500),[d,h]=Ct.useState(0),[m,g]=Ct.useState(["abrams"]),[x,v]=Ct.useState("abrams"),[p,b]=Ct.useState({damageLevel:0,fireRateLevel:0,barrelsLevel:1,bulletSpeedLevel:0,critChanceLevel:0,coinMagnetLevel:0}),[A,L]=Ct.useState(0),[y,S]=Ct.useState(1),[N,F]=Ct.useState(100),[R]=Ct.useState(100),[D,C]=Ct.useState(0),[I,M]=Ct.useState(!1),[U,k]=Ct.useState(!0),[W,Y]=Ct.useState({moveDir:0,aimX:0,aimY:0,isFiring:!0}),ce=Ct.useCallback(X=>{Y(se=>se.moveDir===X?se:{...se,moveDir:X})},[]),$=Ct.useCallback((X,se)=>{Y(H=>({...H,aimX:X,aimY:se}))},[]),te=Ct.useCallback(X=>{Y(se=>se.isFiring===X?se:{...se,isFiring:X})},[]),[Z,K]=Ct.useState({nukeCooldown:0,shieldActive:0,freezeActive:0,rapidFireActive:0});Ct.useEffect(()=>{try{const X=localStorage.getItem(Hx);if(X){const se=JSON.parse(X);se.coins!==void 0&&u(se.coins),se.highScore!==void 0&&h(se.highScore),se.unlockedTanks&&g(se.unlockedTanks),se.selectedTankId&&v(se.selectedTankId),se.upgrades&&b(se.upgrades)}}catch{}},[]),Ct.useEffect(()=>{try{localStorage.setItem(Hx,JSON.stringify({coins:l,highScore:d,unlockedTanks:m,selectedTankId:x,upgrades:p}))}catch{}},[l,d,m,x,p]),Ct.useEffect(()=>{if(o!=="PLAYING")return;const X=setInterval(()=>{K(se=>({nukeCooldown:Math.max(0,se.nukeCooldown-.2),shieldActive:Math.max(0,se.shieldActive-.2),freezeActive:Math.max(0,se.freezeActive-.2),rapidFireActive:Math.max(0,se.rapidFireActive-.2)}))},200);return()=>clearInterval(X)},[o]),Ct.useEffect(()=>{const X=se=>{o==="PLAYING"&&(se.code==="Digit1"&&P("nuke"),se.code==="Digit2"&&P("shield"),se.code==="Digit3"&&P("freeze"))};return window.addEventListener("keydown",X),()=>window.removeEventListener("keydown",X)},[o,Z]);const ge=()=>{L(0),S(1),F(100),C(0),M(!1),K({nukeCooldown:0,shieldActive:0,freezeActive:0,rapidFireActive:0}),t("PLAYING"),s(null)},le=Ct.useCallback((X,se)=>{L(H=>{const ee=H+X;return ee>d&&(h(ee),M(!0)),ee}),u(H=>H+se),C(H=>H+se)},[d]),O=Ct.useCallback(X=>{F(se=>{const H=se-X;return H<=0?(t("GAMEOVER"),0):H})},[]),P=X=>{ni.playPowerup(),X==="nuke"&&Z.nukeCooldown<=0?(K(se=>({...se,nukeCooldown:30})),le(500,50)):X==="shield"&&Z.shieldActive<=0?K(se=>({...se,shieldActive:8})):X==="freeze"&&Z.freezeActive<=0&&K(se=>({...se,freezeActive:6}))},be=()=>{const X=!U;k(X),ni.setSoundEnabled(X)},Ce=X=>{l>=X.price&&!m.includes(X.id)&&(u(se=>se-X.price),g(se=>[...se,X.id]),v(X.id),ni.playPowerup())},B=(X,se)=>{l>=se&&(u(H=>H-se),b(H=>({...H,[X]:H[X]+1})),ni.playPowerup())};return V.jsxs("div",{className:"relative w-screen h-screen overflow-hidden bg-slate-950 font-sans select-none",children:[V.jsx(_3,{gameStatus:o,selectedTankId:x,upgrades:p,activeSkillState:Z,score:A,wave:y,coins:l,hp:N,maxHp:R,onUpdateScore:le,onTakeDamage:O,onWaveComplete:()=>S(X=>X+1),onGameOver:()=>t("GAMEOVER"),touchInput:W}),o==="PLAYING"&&V.jsxs(V.Fragment,{children:[V.jsx(aR,{score:A,wave:y,coins:l,hp:N,maxHp:R,activeSkillState:Z,soundEnabled:U,onToggleSound:be,onPause:()=>t("PAUSED"),onActivateSkill:P}),V.jsx(sR,{onTouchMove:ce,onTouchAim:$,onSetFiring:te})]}),o==="MENU"&&V.jsx(rR,{coins:l,highScore:d,selectedTankId:x,onStartGame:ge,onOpenGarage:()=>s("GARAGE"),onOpenUpgrades:()=>s("UPGRADE")}),o==="PAUSED"&&V.jsx(uR,{soundEnabled:U,onToggleSound:be,onResume:()=>t("PLAYING"),onRestart:ge,onMainMenu:()=>t("MENU")}),o==="GAMEOVER"&&V.jsx(dR,{score:A,highScore:d,isNewHighScore:I,wave:y,earnedCoins:D,onRestart:ge,onMainMenu:()=>t("MENU"),onOpenGarage:()=>{t("MENU"),s("GARAGE")}}),i==="GARAGE"&&V.jsx(oR,{coins:l,unlockedTanks:m,selectedTankId:x,onSelectTank:X=>v(X),onUnlockTank:Ce,onClose:()=>s(null)}),i==="UPGRADE"&&V.jsx(cR,{coins:l,upgrades:p,onUpgradeStat:B,onClose:()=>s(null)})]})}bb.createRoot(document.getElementById("root")).render(V.jsx(Ct.StrictMode,{children:V.jsx(hR,{})}));
