(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var ah={exports:{}},Po={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w_;function qS(){if(w_)return Po;w_=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var f=null;if(u!==void 0&&(f=""+u),l.key!==void 0&&(f=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:s,type:r,key:f,ref:l!==void 0?l:null,props:u}}return Po.Fragment=e,Po.jsx=i,Po.jsxs=i,Po}var D_;function YS(){return D_||(D_=1,ah.exports=qS()),ah.exports}var ct=YS(),rh={exports:{}},rt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U_;function jS(){if(U_)return rt;U_=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function v(N){return N===null||typeof N!="object"?null:(N=_&&N[_]||N["@@iterator"],typeof N=="function"?N:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,A={};function y(N,ee,xe){this.props=N,this.context=ee,this.refs=A,this.updater=xe||S}y.prototype.isReactComponent={},y.prototype.setState=function(N,ee){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,ee,"setState")},y.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function x(){}x.prototype=y.prototype;function D(N,ee,xe){this.props=N,this.context=ee,this.refs=A,this.updater=xe||S}var L=D.prototype=new x;L.constructor=D,E(L,y.prototype),L.isPureReactComponent=!0;var w=Array.isArray,I={H:null,A:null,T:null,S:null,V:null},F=Object.prototype.hasOwnProperty;function O(N,ee,xe,ye,Q,me){return xe=me.ref,{$$typeof:s,type:N,key:ee,ref:xe!==void 0?xe:null,props:me}}function V(N,ee){return O(N.type,ee,void 0,void 0,void 0,N.props)}function U(N){return typeof N=="object"&&N!==null&&N.$$typeof===s}function R(N){var ee={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(xe){return ee[xe]})}var G=/\/+/g;function oe(N,ee){return typeof N=="object"&&N!==null&&N.key!=null?R(""+N.key):ee.toString(36)}function se(){}function ve(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(se,se):(N.status="pending",N.then(function(ee){N.status==="pending"&&(N.status="fulfilled",N.value=ee)},function(ee){N.status==="pending"&&(N.status="rejected",N.reason=ee)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function de(N,ee,xe,ye,Q){var me=typeof N;(me==="undefined"||me==="boolean")&&(N=null);var Me=!1;if(N===null)Me=!0;else switch(me){case"bigint":case"string":case"number":Me=!0;break;case"object":switch(N.$$typeof){case s:case e:Me=!0;break;case g:return Me=N._init,de(Me(N._payload),ee,xe,ye,Q)}}if(Me)return Q=Q(N),Me=ye===""?"."+oe(N,0):ye,w(Q)?(xe="",Me!=null&&(xe=Me.replace(G,"$&/")+"/"),de(Q,ee,xe,"",function(lt){return lt})):Q!=null&&(U(Q)&&(Q=V(Q,xe+(Q.key==null||N&&N.key===Q.key?"":(""+Q.key).replace(G,"$&/")+"/")+Me)),ee.push(Q)),1;Me=0;var Re=ye===""?".":ye+":";if(w(N))for(var we=0;we<N.length;we++)ye=N[we],me=Re+oe(ye,we),Me+=de(ye,ee,xe,me,Q);else if(we=v(N),typeof we=="function")for(N=we.call(N),we=0;!(ye=N.next()).done;)ye=ye.value,me=Re+oe(ye,we++),Me+=de(ye,ee,xe,me,Q);else if(me==="object"){if(typeof N.then=="function")return de(ve(N),ee,xe,ye,Q);throw ee=String(N),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.")}return Me}function B(N,ee,xe){if(N==null)return N;var ye=[],Q=0;return de(N,ye,"","",function(me){return ee.call(xe,me,Q++)}),ye}function Z(N){if(N._status===-1){var ee=N._result;ee=ee(),ee.then(function(xe){(N._status===0||N._status===-1)&&(N._status=1,N._result=xe)},function(xe){(N._status===0||N._status===-1)&&(N._status=2,N._result=xe)}),N._status===-1&&(N._status=0,N._result=ee)}if(N._status===1)return N._result.default;throw N._result}var Y=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ee=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(ee))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function Ee(){}return rt.Children={map:B,forEach:function(N,ee,xe){B(N,function(){ee.apply(this,arguments)},xe)},count:function(N){var ee=0;return B(N,function(){ee++}),ee},toArray:function(N){return B(N,function(ee){return ee})||[]},only:function(N){if(!U(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},rt.Component=y,rt.Fragment=i,rt.Profiler=l,rt.PureComponent=D,rt.StrictMode=r,rt.Suspense=m,rt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,rt.__COMPILER_RUNTIME={__proto__:null,c:function(N){return I.H.useMemoCache(N)}},rt.cache=function(N){return function(){return N.apply(null,arguments)}},rt.cloneElement=function(N,ee,xe){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var ye=E({},N.props),Q=N.key,me=void 0;if(ee!=null)for(Me in ee.ref!==void 0&&(me=void 0),ee.key!==void 0&&(Q=""+ee.key),ee)!F.call(ee,Me)||Me==="key"||Me==="__self"||Me==="__source"||Me==="ref"&&ee.ref===void 0||(ye[Me]=ee[Me]);var Me=arguments.length-2;if(Me===1)ye.children=xe;else if(1<Me){for(var Re=Array(Me),we=0;we<Me;we++)Re[we]=arguments[we+2];ye.children=Re}return O(N.type,Q,void 0,void 0,me,ye)},rt.createContext=function(N){return N={$$typeof:f,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:u,_context:N},N},rt.createElement=function(N,ee,xe){var ye,Q={},me=null;if(ee!=null)for(ye in ee.key!==void 0&&(me=""+ee.key),ee)F.call(ee,ye)&&ye!=="key"&&ye!=="__self"&&ye!=="__source"&&(Q[ye]=ee[ye]);var Me=arguments.length-2;if(Me===1)Q.children=xe;else if(1<Me){for(var Re=Array(Me),we=0;we<Me;we++)Re[we]=arguments[we+2];Q.children=Re}if(N&&N.defaultProps)for(ye in Me=N.defaultProps,Me)Q[ye]===void 0&&(Q[ye]=Me[ye]);return O(N,me,void 0,void 0,null,Q)},rt.createRef=function(){return{current:null}},rt.forwardRef=function(N){return{$$typeof:d,render:N}},rt.isValidElement=U,rt.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:Z}},rt.memo=function(N,ee){return{$$typeof:p,type:N,compare:ee===void 0?null:ee}},rt.startTransition=function(N){var ee=I.T,xe={};I.T=xe;try{var ye=N(),Q=I.S;Q!==null&&Q(xe,ye),typeof ye=="object"&&ye!==null&&typeof ye.then=="function"&&ye.then(Ee,Y)}catch(me){Y(me)}finally{I.T=ee}},rt.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},rt.use=function(N){return I.H.use(N)},rt.useActionState=function(N,ee,xe){return I.H.useActionState(N,ee,xe)},rt.useCallback=function(N,ee){return I.H.useCallback(N,ee)},rt.useContext=function(N){return I.H.useContext(N)},rt.useDebugValue=function(){},rt.useDeferredValue=function(N,ee){return I.H.useDeferredValue(N,ee)},rt.useEffect=function(N,ee,xe){var ye=I.H;if(typeof xe=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ye.useEffect(N,ee)},rt.useId=function(){return I.H.useId()},rt.useImperativeHandle=function(N,ee,xe){return I.H.useImperativeHandle(N,ee,xe)},rt.useInsertionEffect=function(N,ee){return I.H.useInsertionEffect(N,ee)},rt.useLayoutEffect=function(N,ee){return I.H.useLayoutEffect(N,ee)},rt.useMemo=function(N,ee){return I.H.useMemo(N,ee)},rt.useOptimistic=function(N,ee){return I.H.useOptimistic(N,ee)},rt.useReducer=function(N,ee,xe){return I.H.useReducer(N,ee,xe)},rt.useRef=function(N){return I.H.useRef(N)},rt.useState=function(N){return I.H.useState(N)},rt.useSyncExternalStore=function(N,ee,xe){return I.H.useSyncExternalStore(N,ee,xe)},rt.useTransition=function(){return I.H.useTransition()},rt.version="19.1.0",rt}var L_;function Od(){return L_||(L_=1,rh.exports=jS()),rh.exports}var le=Od(),sh={exports:{}},Oo={},oh={exports:{}},lh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N_;function ZS(){return N_||(N_=1,function(s){function e(B,Z){var Y=B.length;B.push(Z);e:for(;0<Y;){var Ee=Y-1>>>1,N=B[Ee];if(0<l(N,Z))B[Ee]=Z,B[Y]=N,Y=Ee;else break e}}function i(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var Z=B[0],Y=B.pop();if(Y!==Z){B[0]=Y;e:for(var Ee=0,N=B.length,ee=N>>>1;Ee<ee;){var xe=2*(Ee+1)-1,ye=B[xe],Q=xe+1,me=B[Q];if(0>l(ye,Y))Q<N&&0>l(me,ye)?(B[Ee]=me,B[Q]=Y,Ee=Q):(B[Ee]=ye,B[xe]=Y,Ee=xe);else if(Q<N&&0>l(me,Y))B[Ee]=me,B[Q]=Y,Ee=Q;else break e}}return Z}function l(B,Z){var Y=B.sortIndex-Z.sortIndex;return Y!==0?Y:B.id-Z.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var f=Date,d=f.now();s.unstable_now=function(){return f.now()-d}}var m=[],p=[],g=1,_=null,v=3,S=!1,E=!1,A=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function w(B){for(var Z=i(p);Z!==null;){if(Z.callback===null)r(p);else if(Z.startTime<=B)r(p),Z.sortIndex=Z.expirationTime,e(m,Z);else break;Z=i(p)}}function I(B){if(A=!1,w(B),!E)if(i(m)!==null)E=!0,F||(F=!0,oe());else{var Z=i(p);Z!==null&&de(I,Z.startTime-B)}}var F=!1,O=-1,V=5,U=-1;function R(){return y?!0:!(s.unstable_now()-U<V)}function G(){if(y=!1,F){var B=s.unstable_now();U=B;var Z=!0;try{e:{E=!1,A&&(A=!1,D(O),O=-1),S=!0;var Y=v;try{t:{for(w(B),_=i(m);_!==null&&!(_.expirationTime>B&&R());){var Ee=_.callback;if(typeof Ee=="function"){_.callback=null,v=_.priorityLevel;var N=Ee(_.expirationTime<=B);if(B=s.unstable_now(),typeof N=="function"){_.callback=N,w(B),Z=!0;break t}_===i(m)&&r(m),w(B)}else r(m);_=i(m)}if(_!==null)Z=!0;else{var ee=i(p);ee!==null&&de(I,ee.startTime-B),Z=!1}}break e}finally{_=null,v=Y,S=!1}Z=void 0}}finally{Z?oe():F=!1}}}var oe;if(typeof L=="function")oe=function(){L(G)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,ve=se.port2;se.port1.onmessage=G,oe=function(){ve.postMessage(null)}}else oe=function(){x(G,0)};function de(B,Z){O=x(function(){B(s.unstable_now())},Z)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(B){B.callback=null},s.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<B?Math.floor(1e3/B):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_next=function(B){switch(v){case 1:case 2:case 3:var Z=3;break;default:Z=v}var Y=v;v=Z;try{return B()}finally{v=Y}},s.unstable_requestPaint=function(){y=!0},s.unstable_runWithPriority=function(B,Z){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Y=v;v=B;try{return Z()}finally{v=Y}},s.unstable_scheduleCallback=function(B,Z,Y){var Ee=s.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?Ee+Y:Ee):Y=Ee,B){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=Y+N,B={id:g++,callback:Z,priorityLevel:B,startTime:Y,expirationTime:N,sortIndex:-1},Y>Ee?(B.sortIndex=Y,e(p,B),i(m)===null&&B===i(p)&&(A?(D(O),O=-1):A=!0,de(I,Y-Ee))):(B.sortIndex=N,e(m,B),E||S||(E=!0,F||(F=!0,oe()))),B},s.unstable_shouldYield=R,s.unstable_wrapCallback=function(B){var Z=v;return function(){var Y=v;v=Z;try{return B.apply(this,arguments)}finally{v=Y}}}}(lh)),lh}var P_;function KS(){return P_||(P_=1,oh.exports=ZS()),oh.exports}var uh={exports:{}},Cn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O_;function QS(){if(O_)return Cn;O_=1;var s=Od();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:g}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Cn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Cn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,g)},Cn.flushSync=function(m){var p=f.T,g=r.p;try{if(f.T=null,r.p=2,m)return m()}finally{f.T=p,r.p=g,r.d.f()}},Cn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Cn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Cn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:S}):g==="script"&&r.d.X(m,{crossOrigin:_,integrity:v,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Cn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Cn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Cn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Cn.requestFormReset=function(m){r.d.r(m)},Cn.unstable_batchedUpdates=function(m,p){return m(p)},Cn.useFormState=function(m,p,g){return f.H.useFormState(m,p,g)},Cn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Cn.version="19.1.0",Cn}var z_;function JS(){if(z_)return uh.exports;z_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),uh.exports=QS(),uh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B_;function $S(){if(B_)return Oo;B_=1;var s=KS(),e=Od(),i=JS();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(u(t)!==t)throw Error(r(188))}function m(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,o=n;;){var c=a.return;if(c===null)break;var h=c.alternate;if(h===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===a)return d(c),t;if(h===o)return d(c),n;h=h.sibling}throw Error(r(188))}if(a.return!==o.return)a=c,o=h;else{for(var M=!1,b=c.child;b;){if(b===a){M=!0,a=c,o=h;break}if(b===o){M=!0,o=c,a=h;break}b=b.sibling}if(!M){for(b=h.child;b;){if(b===a){M=!0,a=h,o=c;break}if(b===o){M=!0,o=h,a=c;break}b=b.sibling}if(!M)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function p(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=p(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,_=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),D=Symbol.for("react.consumer"),L=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function oe(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var se=Symbol.for("react.client.reference");function ve(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===se?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case E:return"Fragment";case y:return"Profiler";case A:return"StrictMode";case I:return"Suspense";case F:return"SuspenseList";case U:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case S:return"Portal";case L:return(t.displayName||"Context")+".Provider";case D:return(t._context.displayName||"Context")+".Consumer";case w:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case O:return n=t.displayName||null,n!==null?n:ve(t.type)||"Memo";case V:n=t._payload,t=t._init;try{return ve(t(n))}catch{}}return null}var de=Array.isArray,B=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},Ee=[],N=-1;function ee(t){return{current:t}}function xe(t){0>N||(t.current=Ee[N],Ee[N]=null,N--)}function ye(t,n){N++,Ee[N]=t.current,t.current=n}var Q=ee(null),me=ee(null),Me=ee(null),Re=ee(null);function we(t,n){switch(ye(Me,n),ye(me,t),ye(Q,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?i_(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=i_(n),t=a_(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}xe(Q),ye(Q,t)}function lt(){xe(Q),xe(me),xe(Me)}function Qe(t){t.memoizedState!==null&&ye(Re,t);var n=Q.current,a=a_(n,t.type);n!==a&&(ye(me,t),ye(Q,a))}function Ot(t){me.current===t&&(xe(Q),xe(me)),Re.current===t&&(xe(Re),wo._currentValue=Y)}var Ft=Object.prototype.hasOwnProperty,_t=s.unstable_scheduleCallback,H=s.unstable_cancelCallback,xn=s.unstable_shouldYield,Et=s.unstable_requestPaint,pt=s.unstable_now,Ve=s.unstable_getCurrentPriorityLevel,vt=s.unstable_ImmediatePriority,je=s.unstable_UserBlockingPriority,at=s.unstable_NormalPriority,Qt=s.unstable_LowPriority,P=s.unstable_IdlePriority,T=s.log,te=s.unstable_setDisableYieldValue,fe=null,pe=null;function ue(t){if(typeof T=="function"&&te(t),pe&&typeof pe.setStrictMode=="function")try{pe.setStrictMode(fe,t)}catch{}}var Oe=Math.clz32?Math.clz32:ke,Ue=Math.log,Ge=Math.LN2;function ke(t){return t>>>=0,t===0?32:31-(Ue(t)/Ge|0)|0}var Se=256,ze=4194304;function qe(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ye(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var c=0,h=t.suspendedLanes,M=t.pingedLanes;t=t.warmLanes;var b=o&134217727;return b!==0?(o=b&~h,o!==0?c=qe(o):(M&=b,M!==0?c=qe(M):a||(a=b&~t,a!==0&&(c=qe(a))))):(b=o&~h,b!==0?c=qe(b):M!==0?c=qe(M):a||(a=o&~t,a!==0&&(c=qe(a)))),c===0?0:n!==0&&n!==c&&(n&h)===0&&(h=c&-c,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:c}function Ce(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function it(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function X(){var t=Se;return Se<<=1,(Se&4194048)===0&&(Se=256),t}function Le(){var t=ze;return ze<<=1,(ze&62914560)===0&&(ze=4194304),t}function Te(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Be(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Ae(t,n,a,o,c,h){var M=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var b=t.entanglements,z=t.expirationTimes,J=t.hiddenUpdates;for(a=M&~a;0<a;){var ce=31-Oe(a),ge=1<<ce;b[ce]=0,z[ce]=-1;var ne=J[ce];if(ne!==null)for(J[ce]=null,ce=0;ce<ne.length;ce++){var ie=ne[ce];ie!==null&&(ie.lane&=-536870913)}a&=~ge}o!==0&&_e(t,o,0),h!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=h&~(M&~n))}function _e(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Oe(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&4194090}function Fe(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Oe(a),c=1<<o;c&n|t[o]&n&&(t[o]|=n),a&=~c}}function nt(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ut(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function At(){var t=Z.p;return t!==0?t:(t=window.event,t===void 0?32:E_(t.type))}function kn(t,n){var a=Z.p;try{return Z.p=t,n()}finally{Z.p=a}}var dn=Math.random().toString(36).slice(2),on="__reactFiber$"+dn,Sn="__reactProps$"+dn,On="__reactContainer$"+dn,Ja="__reactEvents$"+dn,nl="__reactListeners$"+dn,il="__reactHandles$"+dn,$a="__reactResources$"+dn,ga="__reactMarker$"+dn;function _a(t){delete t[on],delete t[Sn],delete t[Ja],delete t[nl],delete t[il]}function Li(t){var n=t[on];if(n)return n;for(var a=t.parentNode;a;){if(n=a[On]||a[on]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=l_(t);t!==null;){if(a=t[on])return a;t=l_(t)}return n}t=a,a=t.parentNode}return null}function Ni(t){if(t=t[on]||t[On]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function er(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function va(t){var n=t[$a];return n||(n=t[$a]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function tn(t){t[ga]=!0}var al=new Set,rl={};function Pi(t,n){C(t,n),C(t+"Capture",n)}function C(t,n){for(rl[t]=n,t=0;t<n.length;t++)al.add(n[t])}var q=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ae={},re={};function j(t){return Ft.call(re,t)?!0:Ft.call(ae,t)?!1:q.test(t)?re[t]=!0:(ae[t]=!0,!1)}function be(t,n,a){if(j(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function De(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Pe(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}var Ie,$e;function Ze(t){if(Ie===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ie=n&&n[1]||"",$e=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ie+t+$e}var Xe=!1;function ft(t,n){if(!t||Xe)return"";Xe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var ge=function(){throw Error()};if(Object.defineProperty(ge.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ge,[])}catch(ie){var ne=ie}Reflect.construct(t,[],ge)}else{try{ge.call()}catch(ie){ne=ie}t.call(ge.prototype)}}else{try{throw Error()}catch(ie){ne=ie}(ge=t())&&typeof ge.catch=="function"&&ge.catch(function(){})}}catch(ie){if(ie&&ne&&typeof ie.stack=="string")return[ie.stack,ne.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),M=h[0],b=h[1];if(M&&b){var z=M.split(`
`),J=b.split(`
`);for(c=o=0;o<z.length&&!z[o].includes("DetermineComponentFrameRoot");)o++;for(;c<J.length&&!J[c].includes("DetermineComponentFrameRoot");)c++;if(o===z.length||c===J.length)for(o=z.length-1,c=J.length-1;1<=o&&0<=c&&z[o]!==J[c];)c--;for(;1<=o&&0<=c;o--,c--)if(z[o]!==J[c]){if(o!==1||c!==1)do if(o--,c--,0>c||z[o]!==J[c]){var ce=`
`+z[o].replace(" at new "," at ");return t.displayName&&ce.includes("<anonymous>")&&(ce=ce.replace("<anonymous>",t.displayName)),ce}while(1<=o&&0<=c);break}}}finally{Xe=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Ze(a):""}function wt(t){switch(t.tag){case 26:case 27:case 5:return Ze(t.type);case 16:return Ze("Lazy");case 13:return Ze("Suspense");case 19:return Ze("SuspenseList");case 0:case 15:return ft(t.type,!1);case 11:return ft(t.type.render,!1);case 1:return ft(t.type,!0);case 31:return Ze("Activity");default:return""}}function Vt(t){try{var n="";do n+=wt(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function xt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function St(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ke(t){var n=St(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),o=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,h=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(M){o=""+M,h.call(this,M)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(M){o=""+M},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function jt(t){t._valueTracker||(t._valueTracker=Ke(t))}function Tt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=St(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function bn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var xa=/[\n"\\]/g;function kt(t){return t.replace(xa,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Oi(t,n,a,o,c,h,M,b){t.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?t.type=M:t.removeAttribute("type"),n!=null?M==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+xt(n)):t.value!==""+xt(n)&&(t.value=""+xt(n)):M!=="submit"&&M!=="reset"||t.removeAttribute("value"),n!=null?An(t,M,xt(n)):a!=null?An(t,M,xt(a)):o!=null&&t.removeAttribute("value"),c==null&&h!=null&&(t.defaultChecked=!!h),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.name=""+xt(b):t.removeAttribute("name")}function Ht(t,n,a,o,c,h,M,b){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null))return;a=a!=null?""+xt(a):"",n=n!=null?""+xt(n):a,b||n===t.value||(t.value=n),t.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=b?t.checked:!!o,t.defaultChecked=!!o,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(t.name=M)}function An(t,n,a){n==="number"&&bn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function ln(t,n,a,o){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&o&&(t[a].defaultSelected=!0)}else{for(a=""+xt(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,o&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function pn(t,n,a){if(n!=null&&(n=""+xt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+xt(a):""}function yn(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(de(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=xt(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o)}function yi(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var zi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ip(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||zi.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function ap(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&a[c]!==o&&ip(t,c,o)}else for(var h in n)n.hasOwnProperty(h)&&ip(t,h,n[h])}function nc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var X0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),W0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function sl(t){return W0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var ic=null;function ac(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Pr=null,Or=null;function rp(t){var n=Ni(t);if(n&&(t=n.stateNode)){var a=t[Sn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Oi(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+kt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var c=o[Sn]||null;if(!c)throw Error(r(90));Oi(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Tt(o)}break e;case"textarea":pn(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&ln(t,!!a.multiple,n,!1)}}}var rc=!1;function sp(t,n,a){if(rc)return t(n,a);rc=!0;try{var o=t(n);return o}finally{if(rc=!1,(Pr!==null||Or!==null)&&(Wl(),Pr&&(n=Pr,t=Or,Or=Pr=null,rp(n),t)))for(n=0;n<t.length;n++)rp(t[n])}}function Gs(t,n){var a=t.stateNode;if(a===null)return null;var o=a[Sn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Bi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sc=!1;if(Bi)try{var Vs={};Object.defineProperty(Vs,"passive",{get:function(){sc=!0}}),window.addEventListener("test",Vs,Vs),window.removeEventListener("test",Vs,Vs)}catch{sc=!1}var Sa=null,oc=null,ol=null;function op(){if(ol)return ol;var t,n=oc,a=n.length,o,c="value"in Sa?Sa.value:Sa.textContent,h=c.length;for(t=0;t<a&&n[t]===c[t];t++);var M=a-t;for(o=1;o<=M&&n[a-o]===c[h-o];o++);return ol=c.slice(t,1<o?1-o:void 0)}function ll(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function ul(){return!0}function lp(){return!1}function zn(t){function n(a,o,c,h,M){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=h,this.target=M,this.currentTarget=null;for(var b in t)t.hasOwnProperty(b)&&(a=t[b],this[b]=a?a(h):h[b]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?ul:lp,this.isPropagationStopped=lp,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ul)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ul)},persist:function(){},isPersistent:ul}),n}var tr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cl=zn(tr),ks=g({},tr,{view:0,detail:0}),q0=zn(ks),lc,uc,Xs,fl=g({},ks,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xs&&(Xs&&t.type==="mousemove"?(lc=t.screenX-Xs.screenX,uc=t.screenY-Xs.screenY):uc=lc=0,Xs=t),lc)},movementY:function(t){return"movementY"in t?t.movementY:uc}}),up=zn(fl),Y0=g({},fl,{dataTransfer:0}),j0=zn(Y0),Z0=g({},ks,{relatedTarget:0}),cc=zn(Z0),K0=g({},tr,{animationName:0,elapsedTime:0,pseudoElement:0}),Q0=zn(K0),J0=g({},tr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),$0=zn(J0),ex=g({},tr,{data:0}),cp=zn(ex),tx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ix={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ax(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=ix[t])?!!n[t]:!1}function fc(){return ax}var rx=g({},ks,{key:function(t){if(t.key){var n=tx[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=ll(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?nx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fc,charCode:function(t){return t.type==="keypress"?ll(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ll(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),sx=zn(rx),ox=g({},fl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fp=zn(ox),lx=g({},ks,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fc}),ux=zn(lx),cx=g({},tr,{propertyName:0,elapsedTime:0,pseudoElement:0}),fx=zn(cx),hx=g({},fl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),dx=zn(hx),px=g({},tr,{newState:0,oldState:0}),mx=zn(px),gx=[9,13,27,32],hc=Bi&&"CompositionEvent"in window,Ws=null;Bi&&"documentMode"in document&&(Ws=document.documentMode);var _x=Bi&&"TextEvent"in window&&!Ws,hp=Bi&&(!hc||Ws&&8<Ws&&11>=Ws),dp=" ",pp=!1;function mp(t,n){switch(t){case"keyup":return gx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var zr=!1;function vx(t,n){switch(t){case"compositionend":return gp(n);case"keypress":return n.which!==32?null:(pp=!0,dp);case"textInput":return t=n.data,t===dp&&pp?null:t;default:return null}}function xx(t,n){if(zr)return t==="compositionend"||!hc&&mp(t,n)?(t=op(),ol=oc=Sa=null,zr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return hp&&n.locale!=="ko"?null:n.data;default:return null}}var Sx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _p(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Sx[t.type]:n==="textarea"}function vp(t,n,a,o){Pr?Or?Or.push(o):Or=[o]:Pr=o,n=Ql(n,"onChange"),0<n.length&&(a=new cl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var qs=null,Ys=null;function yx(t){Jg(t,0)}function hl(t){var n=er(t);if(Tt(n))return t}function xp(t,n){if(t==="change")return n}var Sp=!1;if(Bi){var dc;if(Bi){var pc="oninput"in document;if(!pc){var yp=document.createElement("div");yp.setAttribute("oninput","return;"),pc=typeof yp.oninput=="function"}dc=pc}else dc=!1;Sp=dc&&(!document.documentMode||9<document.documentMode)}function Mp(){qs&&(qs.detachEvent("onpropertychange",Ep),Ys=qs=null)}function Ep(t){if(t.propertyName==="value"&&hl(Ys)){var n=[];vp(n,Ys,t,ac(t)),sp(yx,n)}}function Mx(t,n,a){t==="focusin"?(Mp(),qs=n,Ys=a,qs.attachEvent("onpropertychange",Ep)):t==="focusout"&&Mp()}function Ex(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return hl(Ys)}function Tx(t,n){if(t==="click")return hl(n)}function bx(t,n){if(t==="input"||t==="change")return hl(n)}function Ax(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Xn=typeof Object.is=="function"?Object.is:Ax;function js(t,n){if(Xn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!Ft.call(n,c)||!Xn(t[c],n[c]))return!1}return!0}function Tp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function bp(t,n){var a=Tp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Tp(a)}}function Ap(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Ap(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Rp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=bn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=bn(t.document)}return n}function mc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Rx=Bi&&"documentMode"in document&&11>=document.documentMode,Br=null,gc=null,Zs=null,_c=!1;function Cp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;_c||Br==null||Br!==bn(o)||(o=Br,"selectionStart"in o&&mc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Zs&&js(Zs,o)||(Zs=o,o=Ql(gc,"onSelect"),0<o.length&&(n=new cl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Br)))}function nr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Ir={animationend:nr("Animation","AnimationEnd"),animationiteration:nr("Animation","AnimationIteration"),animationstart:nr("Animation","AnimationStart"),transitionrun:nr("Transition","TransitionRun"),transitionstart:nr("Transition","TransitionStart"),transitioncancel:nr("Transition","TransitionCancel"),transitionend:nr("Transition","TransitionEnd")},vc={},wp={};Bi&&(wp=document.createElement("div").style,"AnimationEvent"in window||(delete Ir.animationend.animation,delete Ir.animationiteration.animation,delete Ir.animationstart.animation),"TransitionEvent"in window||delete Ir.transitionend.transition);function ir(t){if(vc[t])return vc[t];if(!Ir[t])return t;var n=Ir[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in wp)return vc[t]=n[a];return t}var Dp=ir("animationend"),Up=ir("animationiteration"),Lp=ir("animationstart"),Cx=ir("transitionrun"),wx=ir("transitionstart"),Dx=ir("transitioncancel"),Np=ir("transitionend"),Pp=new Map,xc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");xc.push("scrollEnd");function ci(t,n){Pp.set(t,n),Pi(n,[t])}var Op=new WeakMap;function ei(t,n){if(typeof t=="object"&&t!==null){var a=Op.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Vt(n)},Op.set(t,n),n)}return{value:t,source:n,stack:Vt(n)}}var ti=[],Fr=0,Sc=0;function dl(){for(var t=Fr,n=Sc=Fr=0;n<t;){var a=ti[n];ti[n++]=null;var o=ti[n];ti[n++]=null;var c=ti[n];ti[n++]=null;var h=ti[n];if(ti[n++]=null,o!==null&&c!==null){var M=o.pending;M===null?c.next=c:(c.next=M.next,M.next=c),o.pending=c}h!==0&&zp(a,c,h)}}function pl(t,n,a,o){ti[Fr++]=t,ti[Fr++]=n,ti[Fr++]=a,ti[Fr++]=o,Sc|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function yc(t,n,a,o){return pl(t,n,a,o),ml(t)}function Hr(t,n){return pl(t,null,null,n),ml(t)}function zp(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var c=!1,h=t.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(t=h.stateNode,t===null||t._visibility&1||(c=!0)),t=h,h=h.return;return t.tag===3?(h=t.stateNode,c&&n!==null&&(c=31-Oe(a),t=h.hiddenUpdates,o=t[c],o===null?t[c]=[n]:o.push(n),n.lane=a|536870912),h):null}function ml(t){if(50<yo)throw yo=0,Cf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Gr={};function Ux(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(t,n,a,o){return new Ux(t,n,a,o)}function Mc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ii(t,n){var a=t.alternate;return a===null?(a=Wn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Bp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function gl(t,n,a,o,c,h){var M=0;if(o=t,typeof t=="function")Mc(t)&&(M=1);else if(typeof t=="string")M=NS(t,a,Q.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case U:return t=Wn(31,a,n,c),t.elementType=U,t.lanes=h,t;case E:return ar(a.children,c,h,n);case A:M=8,c|=24;break;case y:return t=Wn(12,a,n,c|2),t.elementType=y,t.lanes=h,t;case I:return t=Wn(13,a,n,c),t.elementType=I,t.lanes=h,t;case F:return t=Wn(19,a,n,c),t.elementType=F,t.lanes=h,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case x:case L:M=10;break e;case D:M=9;break e;case w:M=11;break e;case O:M=14;break e;case V:M=16,o=null;break e}M=29,a=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=Wn(M,a,n,c),n.elementType=t,n.type=o,n.lanes=h,n}function ar(t,n,a,o){return t=Wn(7,t,o,n),t.lanes=a,t}function Ec(t,n,a){return t=Wn(6,t,null,n),t.lanes=a,t}function Tc(t,n,a){return n=Wn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Vr=[],kr=0,_l=null,vl=0,ni=[],ii=0,rr=null,Fi=1,Hi="";function sr(t,n){Vr[kr++]=vl,Vr[kr++]=_l,_l=t,vl=n}function Ip(t,n,a){ni[ii++]=Fi,ni[ii++]=Hi,ni[ii++]=rr,rr=t;var o=Fi;t=Hi;var c=32-Oe(o)-1;o&=~(1<<c),a+=1;var h=32-Oe(n)+c;if(30<h){var M=c-c%5;h=(o&(1<<M)-1).toString(32),o>>=M,c-=M,Fi=1<<32-Oe(n)+c|a<<c|o,Hi=h+t}else Fi=1<<h|a<<c|o,Hi=t}function bc(t){t.return!==null&&(sr(t,1),Ip(t,1,0))}function Ac(t){for(;t===_l;)_l=Vr[--kr],Vr[kr]=null,vl=Vr[--kr],Vr[kr]=null;for(;t===rr;)rr=ni[--ii],ni[ii]=null,Hi=ni[--ii],ni[ii]=null,Fi=ni[--ii],ni[ii]=null}var Ln=null,Zt=null,Dt=!1,or=null,Mi=!1,Rc=Error(r(519));function lr(t){var n=Error(r(418,""));throw Js(ei(n,t)),Rc}function Fp(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[on]=t,n[Sn]=o,a){case"dialog":gt("cancel",n),gt("close",n);break;case"iframe":case"object":case"embed":gt("load",n);break;case"video":case"audio":for(a=0;a<Eo.length;a++)gt(Eo[a],n);break;case"source":gt("error",n);break;case"img":case"image":case"link":gt("error",n),gt("load",n);break;case"details":gt("toggle",n);break;case"input":gt("invalid",n),Ht(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),jt(n);break;case"select":gt("invalid",n);break;case"textarea":gt("invalid",n),yn(n,o.value,o.defaultValue,o.children),jt(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||n_(n.textContent,a)?(o.popover!=null&&(gt("beforetoggle",n),gt("toggle",n)),o.onScroll!=null&&gt("scroll",n),o.onScrollEnd!=null&&gt("scrollend",n),o.onClick!=null&&(n.onclick=Jl),n=!0):n=!1,n||lr(t)}function Hp(t){for(Ln=t.return;Ln;)switch(Ln.tag){case 5:case 13:Mi=!1;return;case 27:case 3:Mi=!0;return;default:Ln=Ln.return}}function Ks(t){if(t!==Ln)return!1;if(!Dt)return Hp(t),Dt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Xf(t.type,t.memoizedProps)),a=!a),a&&Zt&&lr(t),Hp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){Zt=hi(t.nextSibling);break e}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}Zt=null}}else n===27?(n=Zt,za(t.type)?(t=jf,jf=null,Zt=t):Zt=n):Zt=Ln?hi(t.stateNode.nextSibling):null;return!0}function Qs(){Zt=Ln=null,Dt=!1}function Gp(){var t=or;return t!==null&&(Fn===null?Fn=t:Fn.push.apply(Fn,t),or=null),t}function Js(t){or===null?or=[t]:or.push(t)}var Cc=ee(null),ur=null,Gi=null;function ya(t,n,a){ye(Cc,n._currentValue),n._currentValue=a}function Vi(t){t._currentValue=Cc.current,xe(Cc)}function wc(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Dc(t,n,a,o){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var h=c.dependencies;if(h!==null){var M=c.child;h=h.firstContext;e:for(;h!==null;){var b=h;h=c;for(var z=0;z<n.length;z++)if(b.context===n[z]){h.lanes|=a,b=h.alternate,b!==null&&(b.lanes|=a),wc(h.return,a,t),o||(M=null);break e}h=b.next}}else if(c.tag===18){if(M=c.return,M===null)throw Error(r(341));M.lanes|=a,h=M.alternate,h!==null&&(h.lanes|=a),wc(M,a,t),M=null}else M=c.child;if(M!==null)M.return=c;else for(M=c;M!==null;){if(M===t){M=null;break}if(c=M.sibling,c!==null){c.return=M.return,M=c;break}M=M.return}c=M}}function $s(t,n,a,o){t=null;for(var c=n,h=!1;c!==null;){if(!h){if((c.flags&524288)!==0)h=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var M=c.alternate;if(M===null)throw Error(r(387));if(M=M.memoizedProps,M!==null){var b=c.type;Xn(c.pendingProps.value,M.value)||(t!==null?t.push(b):t=[b])}}else if(c===Re.current){if(M=c.alternate,M===null)throw Error(r(387));M.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(wo):t=[wo])}c=c.return}t!==null&&Dc(n,t,a,o),n.flags|=262144}function xl(t){for(t=t.firstContext;t!==null;){if(!Xn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function cr(t){ur=t,Gi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Rn(t){return Vp(ur,t)}function Sl(t,n){return ur===null&&cr(t),Vp(t,n)}function Vp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Gi===null){if(t===null)throw Error(r(308));Gi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Gi=Gi.next=n;return a}var Lx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Nx=s.unstable_scheduleCallback,Px=s.unstable_NormalPriority,un={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Uc(){return{controller:new Lx,data:new Map,refCount:0}}function eo(t){t.refCount--,t.refCount===0&&Nx(Px,function(){t.controller.abort()})}var to=null,Lc=0,Xr=0,Wr=null;function Ox(t,n){if(to===null){var a=to=[];Lc=0,Xr=Of(),Wr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Lc++,n.then(kp,kp),n}function kp(){if(--Lc===0&&to!==null){Wr!==null&&(Wr.status="fulfilled");var t=to;to=null,Xr=0,Wr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function zx(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var Xp=B.S;B.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Ox(t,n),Xp!==null&&Xp(t,n)};var fr=ee(null);function Nc(){var t=fr.current;return t!==null?t:Xt.pooledCache}function yl(t,n){n===null?ye(fr,fr.current):ye(fr,n.pool)}function Wp(){var t=Nc();return t===null?null:{parent:un._currentValue,pool:t}}var no=Error(r(460)),qp=Error(r(474)),Ml=Error(r(542)),Pc={then:function(){}};function Yp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function El(){}function jp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(El,El),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Kp(t),t;default:if(typeof n.status=="string")n.then(El,El);else{if(t=Xt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Kp(t),t}throw io=n,no}}var io=null;function Zp(){if(io===null)throw Error(r(459));var t=io;return io=null,t}function Kp(t){if(t===no||t===Ml)throw Error(r(483))}var Ma=!1;function Oc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function zc(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ea(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ta(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Lt&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=ml(t),zp(t,null,a),n}return pl(t,o,n,a),ml(t)}function ao(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Fe(t,a)}}function Bc(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var M={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?c=h=M:h=h.next=M,a=a.next}while(a!==null);h===null?c=h=n:h=h.next=n}else c=h=n;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Ic=!1;function ro(){if(Ic){var t=Wr;if(t!==null)throw t}}function so(t,n,a,o){Ic=!1;var c=t.updateQueue;Ma=!1;var h=c.firstBaseUpdate,M=c.lastBaseUpdate,b=c.shared.pending;if(b!==null){c.shared.pending=null;var z=b,J=z.next;z.next=null,M===null?h=J:M.next=J,M=z;var ce=t.alternate;ce!==null&&(ce=ce.updateQueue,b=ce.lastBaseUpdate,b!==M&&(b===null?ce.firstBaseUpdate=J:b.next=J,ce.lastBaseUpdate=z))}if(h!==null){var ge=c.baseState;M=0,ce=J=z=null,b=h;do{var ne=b.lane&-536870913,ie=ne!==b.lane;if(ie?(Mt&ne)===ne:(o&ne)===ne){ne!==0&&ne===Xr&&(Ic=!0),ce!==null&&(ce=ce.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var tt=t,Je=b;ne=n;var It=a;switch(Je.tag){case 1:if(tt=Je.payload,typeof tt=="function"){ge=tt.call(It,ge,ne);break e}ge=tt;break e;case 3:tt.flags=tt.flags&-65537|128;case 0:if(tt=Je.payload,ne=typeof tt=="function"?tt.call(It,ge,ne):tt,ne==null)break e;ge=g({},ge,ne);break e;case 2:Ma=!0}}ne=b.callback,ne!==null&&(t.flags|=64,ie&&(t.flags|=8192),ie=c.callbacks,ie===null?c.callbacks=[ne]:ie.push(ne))}else ie={lane:ne,tag:b.tag,payload:b.payload,callback:b.callback,next:null},ce===null?(J=ce=ie,z=ge):ce=ce.next=ie,M|=ne;if(b=b.next,b===null){if(b=c.shared.pending,b===null)break;ie=b,b=ie.next,ie.next=null,c.lastBaseUpdate=ie,c.shared.pending=null}}while(!0);ce===null&&(z=ge),c.baseState=z,c.firstBaseUpdate=J,c.lastBaseUpdate=ce,h===null&&(c.shared.lanes=0),La|=M,t.lanes=M,t.memoizedState=ge}}function Qp(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Jp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Qp(a[t],n)}var qr=ee(null),Tl=ee(0);function $p(t,n){t=Zi,ye(Tl,t),ye(qr,n),Zi=t|n.baseLanes}function Fc(){ye(Tl,Zi),ye(qr,qr.current)}function Hc(){Zi=Tl.current,xe(qr),xe(Tl)}var ba=0,ht=null,zt=null,nn=null,bl=!1,Yr=!1,hr=!1,Al=0,oo=0,jr=null,Bx=0;function Jt(){throw Error(r(321))}function Gc(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Xn(t[a],n[a]))return!1;return!0}function Vc(t,n,a,o,c,h){return ba=h,ht=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=t===null||t.memoizedState===null?zm:Bm,hr=!1,h=a(o,c),hr=!1,Yr&&(h=tm(n,a,o,c)),em(t),h}function em(t){B.H=Ll;var n=zt!==null&&zt.next!==null;if(ba=0,nn=zt=ht=null,bl=!1,oo=0,jr=null,n)throw Error(r(300));t===null||mn||(t=t.dependencies,t!==null&&xl(t)&&(mn=!0))}function tm(t,n,a,o){ht=t;var c=0;do{if(Yr&&(jr=null),oo=0,Yr=!1,25<=c)throw Error(r(301));if(c+=1,nn=zt=null,t.updateQueue!=null){var h=t.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}B.H=Xx,h=n(a,o)}while(Yr);return h}function Ix(){var t=B.H,n=t.useState()[0];return n=typeof n.then=="function"?lo(n):n,t=t.useState()[0],(zt!==null?zt.memoizedState:null)!==t&&(ht.flags|=1024),n}function kc(){var t=Al!==0;return Al=0,t}function Xc(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Wc(t){if(bl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}bl=!1}ba=0,nn=zt=ht=null,Yr=!1,oo=Al=0,jr=null}function Bn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nn===null?ht.memoizedState=nn=t:nn=nn.next=t,nn}function an(){if(zt===null){var t=ht.alternate;t=t!==null?t.memoizedState:null}else t=zt.next;var n=nn===null?ht.memoizedState:nn.next;if(n!==null)nn=n,zt=t;else{if(t===null)throw ht.alternate===null?Error(r(467)):Error(r(310));zt=t,t={memoizedState:zt.memoizedState,baseState:zt.baseState,baseQueue:zt.baseQueue,queue:zt.queue,next:null},nn===null?ht.memoizedState=nn=t:nn=nn.next=t}return nn}function qc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function lo(t){var n=oo;return oo+=1,jr===null&&(jr=[]),t=jp(jr,t,n),n=ht,(nn===null?n.memoizedState:nn.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?zm:Bm),t}function Rl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return lo(t);if(t.$$typeof===L)return Rn(t)}throw Error(r(438,String(t)))}function Yc(t){var n=null,a=ht.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ht.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=qc(),ht.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=R;return n.index++,a}function ki(t,n){return typeof n=="function"?n(t):n}function Cl(t){var n=an();return jc(n,zt,t)}function jc(t,n,a){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var c=t.baseQueue,h=o.pending;if(h!==null){if(c!==null){var M=c.next;c.next=h.next,h.next=M}n.baseQueue=c=h,o.pending=null}if(h=t.baseState,c===null)t.memoizedState=h;else{n=c.next;var b=M=null,z=null,J=n,ce=!1;do{var ge=J.lane&-536870913;if(ge!==J.lane?(Mt&ge)===ge:(ba&ge)===ge){var ne=J.revertLane;if(ne===0)z!==null&&(z=z.next={lane:0,revertLane:0,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),ge===Xr&&(ce=!0);else if((ba&ne)===ne){J=J.next,ne===Xr&&(ce=!0);continue}else ge={lane:0,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},z===null?(b=z=ge,M=h):z=z.next=ge,ht.lanes|=ne,La|=ne;ge=J.action,hr&&a(h,ge),h=J.hasEagerState?J.eagerState:a(h,ge)}else ne={lane:ge,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},z===null?(b=z=ne,M=h):z=z.next=ne,ht.lanes|=ge,La|=ge;J=J.next}while(J!==null&&J!==n);if(z===null?M=h:z.next=b,!Xn(h,t.memoizedState)&&(mn=!0,ce&&(a=Wr,a!==null)))throw a;t.memoizedState=h,t.baseState=M,t.baseQueue=z,o.lastRenderedState=h}return c===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function Zc(t){var n=an(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var o=a.dispatch,c=a.pending,h=n.memoizedState;if(c!==null){a.pending=null;var M=c=c.next;do h=t(h,M.action),M=M.next;while(M!==c);Xn(h,n.memoizedState)||(mn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function nm(t,n,a){var o=ht,c=an(),h=Dt;if(h){if(a===void 0)throw Error(r(407));a=a()}else a=n();var M=!Xn((zt||c).memoizedState,a);M&&(c.memoizedState=a,mn=!0),c=c.queue;var b=rm.bind(null,o,c,t);if(uo(2048,8,b,[t]),c.getSnapshot!==n||M||nn!==null&&nn.memoizedState.tag&1){if(o.flags|=2048,Zr(9,wl(),am.bind(null,o,c,a,n),null),Xt===null)throw Error(r(349));h||(ba&124)!==0||im(o,n,a)}return a}function im(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ht.updateQueue,n===null?(n=qc(),ht.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function am(t,n,a,o){n.value=a,n.getSnapshot=o,sm(n)&&om(t)}function rm(t,n,a){return a(function(){sm(n)&&om(t)})}function sm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Xn(t,a)}catch{return!0}}function om(t){var n=Hr(t,2);n!==null&&Kn(n,t,2)}function Kc(t){var n=Bn();if(typeof t=="function"){var a=t;if(t=a(),hr){ue(!0);try{a()}finally{ue(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:t},n}function lm(t,n,a,o){return t.baseState=a,jc(t,zt,typeof o=="function"?o:ki)}function Fx(t,n,a,o,c){if(Ul(t))throw Error(r(485));if(t=n.action,t!==null){var h={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){h.listeners.push(M)}};B.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,um(n,h)):(h.next=a.next,n.pending=a.next=h)}}function um(t,n){var a=n.action,o=n.payload,c=t.state;if(n.isTransition){var h=B.T,M={};B.T=M;try{var b=a(c,o),z=B.S;z!==null&&z(M,b),cm(t,n,b)}catch(J){Qc(t,n,J)}finally{B.T=h}}else try{h=a(c,o),cm(t,n,h)}catch(J){Qc(t,n,J)}}function cm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){fm(t,n,o)},function(o){return Qc(t,n,o)}):fm(t,n,a)}function fm(t,n,a){n.status="fulfilled",n.value=a,hm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,um(t,a)))}function Qc(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,hm(n),n=n.next;while(n!==o)}t.action=null}function hm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function dm(t,n){return n}function pm(t,n){if(Dt){var a=Xt.formState;if(a!==null){e:{var o=ht;if(Dt){if(Zt){t:{for(var c=Zt,h=Mi;c.nodeType!==8;){if(!h){c=null;break t}if(c=hi(c.nextSibling),c===null){c=null;break t}}h=c.data,c=h==="F!"||h==="F"?c:null}if(c){Zt=hi(c.nextSibling),o=c.data==="F!";break e}}lr(o)}o=!1}o&&(n=a[0])}}return a=Bn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:dm,lastRenderedState:n},a.queue=o,a=Nm.bind(null,ht,o),o.dispatch=a,o=Kc(!1),h=nf.bind(null,ht,!1,o.queue),o=Bn(),c={state:n,dispatch:null,action:t,pending:null},o.queue=c,a=Fx.bind(null,ht,c,h,a),c.dispatch=a,o.memoizedState=t,[n,a,!1]}function mm(t){var n=an();return gm(n,zt,t)}function gm(t,n,a){if(n=jc(t,n,dm)[0],t=Cl(ki)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=lo(n)}catch(M){throw M===no?Ml:M}else o=n;n=an();var c=n.queue,h=c.dispatch;return a!==n.memoizedState&&(ht.flags|=2048,Zr(9,wl(),Hx.bind(null,c,a),null)),[o,h,t]}function Hx(t,n){t.action=n}function _m(t){var n=an(),a=zt;if(a!==null)return gm(n,a,t);an(),n=n.memoizedState,a=an();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function Zr(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=ht.updateQueue,n===null&&(n=qc(),ht.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function wl(){return{destroy:void 0,resource:void 0}}function vm(){return an().memoizedState}function Dl(t,n,a,o){var c=Bn();o=o===void 0?null:o,ht.flags|=t,c.memoizedState=Zr(1|n,wl(),a,o)}function uo(t,n,a,o){var c=an();o=o===void 0?null:o;var h=c.memoizedState.inst;zt!==null&&o!==null&&Gc(o,zt.memoizedState.deps)?c.memoizedState=Zr(n,h,a,o):(ht.flags|=t,c.memoizedState=Zr(1|n,h,a,o))}function xm(t,n){Dl(8390656,8,t,n)}function Sm(t,n){uo(2048,8,t,n)}function ym(t,n){return uo(4,2,t,n)}function Mm(t,n){return uo(4,4,t,n)}function Em(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Tm(t,n,a){a=a!=null?a.concat([t]):null,uo(4,4,Em.bind(null,n,t),a)}function Jc(){}function bm(t,n){var a=an();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Gc(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Am(t,n){var a=an();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Gc(n,o[1]))return o[0];if(o=t(),hr){ue(!0);try{t()}finally{ue(!1)}}return a.memoizedState=[o,n],o}function $c(t,n,a){return a===void 0||(ba&1073741824)!==0?t.memoizedState=n:(t.memoizedState=a,t=wg(),ht.lanes|=t,La|=t,a)}function Rm(t,n,a,o){return Xn(a,n)?a:qr.current!==null?(t=$c(t,a,o),Xn(t,n)||(mn=!0),t):(ba&42)===0?(mn=!0,t.memoizedState=a):(t=wg(),ht.lanes|=t,La|=t,n)}function Cm(t,n,a,o,c){var h=Z.p;Z.p=h!==0&&8>h?h:8;var M=B.T,b={};B.T=b,nf(t,!1,n,a);try{var z=c(),J=B.S;if(J!==null&&J(b,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var ce=zx(z,o);co(t,n,ce,Zn(t))}else co(t,n,o,Zn(t))}catch(ge){co(t,n,{then:function(){},status:"rejected",reason:ge},Zn())}finally{Z.p=h,B.T=M}}function Gx(){}function ef(t,n,a,o){if(t.tag!==5)throw Error(r(476));var c=wm(t).queue;Cm(t,c,n,Y,a===null?Gx:function(){return Dm(t),a(o)})}function wm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:Y},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Dm(t){var n=wm(t).next.queue;co(t,n,{},Zn())}function tf(){return Rn(wo)}function Um(){return an().memoizedState}function Lm(){return an().memoizedState}function Vx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Zn();t=Ea(a);var o=Ta(n,t,a);o!==null&&(Kn(o,n,a),ao(o,n,a)),n={cache:Uc()},t.payload=n;return}n=n.return}}function kx(t,n,a){var o=Zn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Ul(t)?Pm(n,a):(a=yc(t,n,a,o),a!==null&&(Kn(a,t,o),Om(a,n,o)))}function Nm(t,n,a){var o=Zn();co(t,n,a,o)}function co(t,n,a,o){var c={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ul(t))Pm(n,c);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var M=n.lastRenderedState,b=h(M,a);if(c.hasEagerState=!0,c.eagerState=b,Xn(b,M))return pl(t,n,c,0),Xt===null&&dl(),!1}catch{}finally{}if(a=yc(t,n,c,o),a!==null)return Kn(a,t,o),Om(a,n,o),!0}return!1}function nf(t,n,a,o){if(o={lane:2,revertLane:Of(),action:o,hasEagerState:!1,eagerState:null,next:null},Ul(t)){if(n)throw Error(r(479))}else n=yc(t,a,o,2),n!==null&&Kn(n,t,2)}function Ul(t){var n=t.alternate;return t===ht||n!==null&&n===ht}function Pm(t,n){Yr=bl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Om(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Fe(t,a)}}var Ll={readContext:Rn,use:Rl,useCallback:Jt,useContext:Jt,useEffect:Jt,useImperativeHandle:Jt,useLayoutEffect:Jt,useInsertionEffect:Jt,useMemo:Jt,useReducer:Jt,useRef:Jt,useState:Jt,useDebugValue:Jt,useDeferredValue:Jt,useTransition:Jt,useSyncExternalStore:Jt,useId:Jt,useHostTransitionStatus:Jt,useFormState:Jt,useActionState:Jt,useOptimistic:Jt,useMemoCache:Jt,useCacheRefresh:Jt},zm={readContext:Rn,use:Rl,useCallback:function(t,n){return Bn().memoizedState=[t,n===void 0?null:n],t},useContext:Rn,useEffect:xm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Dl(4194308,4,Em.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Dl(4194308,4,t,n)},useInsertionEffect:function(t,n){Dl(4,2,t,n)},useMemo:function(t,n){var a=Bn();n=n===void 0?null:n;var o=t();if(hr){ue(!0);try{t()}finally{ue(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Bn();if(a!==void 0){var c=a(n);if(hr){ue(!0);try{a(n)}finally{ue(!1)}}}else c=n;return o.memoizedState=o.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},o.queue=t,t=t.dispatch=kx.bind(null,ht,t),[o.memoizedState,t]},useRef:function(t){var n=Bn();return t={current:t},n.memoizedState=t},useState:function(t){t=Kc(t);var n=t.queue,a=Nm.bind(null,ht,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Jc,useDeferredValue:function(t,n){var a=Bn();return $c(a,t,n)},useTransition:function(){var t=Kc(!1);return t=Cm.bind(null,ht,t.queue,!0,!1),Bn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=ht,c=Bn();if(Dt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Xt===null)throw Error(r(349));(Mt&124)!==0||im(o,n,a)}c.memoizedState=a;var h={value:a,getSnapshot:n};return c.queue=h,xm(rm.bind(null,o,h,t),[t]),o.flags|=2048,Zr(9,wl(),am.bind(null,o,h,a,n),null),a},useId:function(){var t=Bn(),n=Xt.identifierPrefix;if(Dt){var a=Hi,o=Fi;a=(o&~(1<<32-Oe(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=Al++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=Bx++,n="«"+n+"r"+a.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:tf,useFormState:pm,useActionState:pm,useOptimistic:function(t){var n=Bn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=nf.bind(null,ht,!0,a),a.dispatch=n,[t,n]},useMemoCache:Yc,useCacheRefresh:function(){return Bn().memoizedState=Vx.bind(null,ht)}},Bm={readContext:Rn,use:Rl,useCallback:bm,useContext:Rn,useEffect:Sm,useImperativeHandle:Tm,useInsertionEffect:ym,useLayoutEffect:Mm,useMemo:Am,useReducer:Cl,useRef:vm,useState:function(){return Cl(ki)},useDebugValue:Jc,useDeferredValue:function(t,n){var a=an();return Rm(a,zt.memoizedState,t,n)},useTransition:function(){var t=Cl(ki)[0],n=an().memoizedState;return[typeof t=="boolean"?t:lo(t),n]},useSyncExternalStore:nm,useId:Um,useHostTransitionStatus:tf,useFormState:mm,useActionState:mm,useOptimistic:function(t,n){var a=an();return lm(a,zt,t,n)},useMemoCache:Yc,useCacheRefresh:Lm},Xx={readContext:Rn,use:Rl,useCallback:bm,useContext:Rn,useEffect:Sm,useImperativeHandle:Tm,useInsertionEffect:ym,useLayoutEffect:Mm,useMemo:Am,useReducer:Zc,useRef:vm,useState:function(){return Zc(ki)},useDebugValue:Jc,useDeferredValue:function(t,n){var a=an();return zt===null?$c(a,t,n):Rm(a,zt.memoizedState,t,n)},useTransition:function(){var t=Zc(ki)[0],n=an().memoizedState;return[typeof t=="boolean"?t:lo(t),n]},useSyncExternalStore:nm,useId:Um,useHostTransitionStatus:tf,useFormState:_m,useActionState:_m,useOptimistic:function(t,n){var a=an();return zt!==null?lm(a,zt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Yc,useCacheRefresh:Lm},Kr=null,fo=0;function Nl(t){var n=fo;return fo+=1,Kr===null&&(Kr=[]),jp(Kr,t,n)}function ho(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Pl(t,n){throw n.$$typeof===_?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Im(t){var n=t._init;return n(t._payload)}function Fm(t){function n(W,k){if(t){var K=W.deletions;K===null?(W.deletions=[k],W.flags|=16):K.push(k)}}function a(W,k){if(!t)return null;for(;k!==null;)n(W,k),k=k.sibling;return null}function o(W){for(var k=new Map;W!==null;)W.key!==null?k.set(W.key,W):k.set(W.index,W),W=W.sibling;return k}function c(W,k){return W=Ii(W,k),W.index=0,W.sibling=null,W}function h(W,k,K){return W.index=K,t?(K=W.alternate,K!==null?(K=K.index,K<k?(W.flags|=67108866,k):K):(W.flags|=67108866,k)):(W.flags|=1048576,k)}function M(W){return t&&W.alternate===null&&(W.flags|=67108866),W}function b(W,k,K,he){return k===null||k.tag!==6?(k=Ec(K,W.mode,he),k.return=W,k):(k=c(k,K),k.return=W,k)}function z(W,k,K,he){var He=K.type;return He===E?ce(W,k,K.props.children,he,K.key):k!==null&&(k.elementType===He||typeof He=="object"&&He!==null&&He.$$typeof===V&&Im(He)===k.type)?(k=c(k,K.props),ho(k,K),k.return=W,k):(k=gl(K.type,K.key,K.props,null,W.mode,he),ho(k,K),k.return=W,k)}function J(W,k,K,he){return k===null||k.tag!==4||k.stateNode.containerInfo!==K.containerInfo||k.stateNode.implementation!==K.implementation?(k=Tc(K,W.mode,he),k.return=W,k):(k=c(k,K.children||[]),k.return=W,k)}function ce(W,k,K,he,He){return k===null||k.tag!==7?(k=ar(K,W.mode,he,He),k.return=W,k):(k=c(k,K),k.return=W,k)}function ge(W,k,K){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Ec(""+k,W.mode,K),k.return=W,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case v:return K=gl(k.type,k.key,k.props,null,W.mode,K),ho(K,k),K.return=W,K;case S:return k=Tc(k,W.mode,K),k.return=W,k;case V:var he=k._init;return k=he(k._payload),ge(W,k,K)}if(de(k)||oe(k))return k=ar(k,W.mode,K,null),k.return=W,k;if(typeof k.then=="function")return ge(W,Nl(k),K);if(k.$$typeof===L)return ge(W,Sl(W,k),K);Pl(W,k)}return null}function ne(W,k,K,he){var He=k!==null?k.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return He!==null?null:b(W,k,""+K,he);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case v:return K.key===He?z(W,k,K,he):null;case S:return K.key===He?J(W,k,K,he):null;case V:return He=K._init,K=He(K._payload),ne(W,k,K,he)}if(de(K)||oe(K))return He!==null?null:ce(W,k,K,he,null);if(typeof K.then=="function")return ne(W,k,Nl(K),he);if(K.$$typeof===L)return ne(W,k,Sl(W,K),he);Pl(W,K)}return null}function ie(W,k,K,he,He){if(typeof he=="string"&&he!==""||typeof he=="number"||typeof he=="bigint")return W=W.get(K)||null,b(k,W,""+he,He);if(typeof he=="object"&&he!==null){switch(he.$$typeof){case v:return W=W.get(he.key===null?K:he.key)||null,z(k,W,he,He);case S:return W=W.get(he.key===null?K:he.key)||null,J(k,W,he,He);case V:var dt=he._init;return he=dt(he._payload),ie(W,k,K,he,He)}if(de(he)||oe(he))return W=W.get(K)||null,ce(k,W,he,He,null);if(typeof he.then=="function")return ie(W,k,K,Nl(he),He);if(he.$$typeof===L)return ie(W,k,K,Sl(k,he),He);Pl(k,he)}return null}function tt(W,k,K,he){for(var He=null,dt=null,We=k,et=k=0,_n=null;We!==null&&et<K.length;et++){We.index>et?(_n=We,We=null):_n=We.sibling;var Rt=ne(W,We,K[et],he);if(Rt===null){We===null&&(We=_n);break}t&&We&&Rt.alternate===null&&n(W,We),k=h(Rt,k,et),dt===null?He=Rt:dt.sibling=Rt,dt=Rt,We=_n}if(et===K.length)return a(W,We),Dt&&sr(W,et),He;if(We===null){for(;et<K.length;et++)We=ge(W,K[et],he),We!==null&&(k=h(We,k,et),dt===null?He=We:dt.sibling=We,dt=We);return Dt&&sr(W,et),He}for(We=o(We);et<K.length;et++)_n=ie(We,W,et,K[et],he),_n!==null&&(t&&_n.alternate!==null&&We.delete(_n.key===null?et:_n.key),k=h(_n,k,et),dt===null?He=_n:dt.sibling=_n,dt=_n);return t&&We.forEach(function(Ga){return n(W,Ga)}),Dt&&sr(W,et),He}function Je(W,k,K,he){if(K==null)throw Error(r(151));for(var He=null,dt=null,We=k,et=k=0,_n=null,Rt=K.next();We!==null&&!Rt.done;et++,Rt=K.next()){We.index>et?(_n=We,We=null):_n=We.sibling;var Ga=ne(W,We,Rt.value,he);if(Ga===null){We===null&&(We=_n);break}t&&We&&Ga.alternate===null&&n(W,We),k=h(Ga,k,et),dt===null?He=Ga:dt.sibling=Ga,dt=Ga,We=_n}if(Rt.done)return a(W,We),Dt&&sr(W,et),He;if(We===null){for(;!Rt.done;et++,Rt=K.next())Rt=ge(W,Rt.value,he),Rt!==null&&(k=h(Rt,k,et),dt===null?He=Rt:dt.sibling=Rt,dt=Rt);return Dt&&sr(W,et),He}for(We=o(We);!Rt.done;et++,Rt=K.next())Rt=ie(We,W,et,Rt.value,he),Rt!==null&&(t&&Rt.alternate!==null&&We.delete(Rt.key===null?et:Rt.key),k=h(Rt,k,et),dt===null?He=Rt:dt.sibling=Rt,dt=Rt);return t&&We.forEach(function(WS){return n(W,WS)}),Dt&&sr(W,et),He}function It(W,k,K,he){if(typeof K=="object"&&K!==null&&K.type===E&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case v:e:{for(var He=K.key;k!==null;){if(k.key===He){if(He=K.type,He===E){if(k.tag===7){a(W,k.sibling),he=c(k,K.props.children),he.return=W,W=he;break e}}else if(k.elementType===He||typeof He=="object"&&He!==null&&He.$$typeof===V&&Im(He)===k.type){a(W,k.sibling),he=c(k,K.props),ho(he,K),he.return=W,W=he;break e}a(W,k);break}else n(W,k);k=k.sibling}K.type===E?(he=ar(K.props.children,W.mode,he,K.key),he.return=W,W=he):(he=gl(K.type,K.key,K.props,null,W.mode,he),ho(he,K),he.return=W,W=he)}return M(W);case S:e:{for(He=K.key;k!==null;){if(k.key===He)if(k.tag===4&&k.stateNode.containerInfo===K.containerInfo&&k.stateNode.implementation===K.implementation){a(W,k.sibling),he=c(k,K.children||[]),he.return=W,W=he;break e}else{a(W,k);break}else n(W,k);k=k.sibling}he=Tc(K,W.mode,he),he.return=W,W=he}return M(W);case V:return He=K._init,K=He(K._payload),It(W,k,K,he)}if(de(K))return tt(W,k,K,he);if(oe(K)){if(He=oe(K),typeof He!="function")throw Error(r(150));return K=He.call(K),Je(W,k,K,he)}if(typeof K.then=="function")return It(W,k,Nl(K),he);if(K.$$typeof===L)return It(W,k,Sl(W,K),he);Pl(W,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,k!==null&&k.tag===6?(a(W,k.sibling),he=c(k,K),he.return=W,W=he):(a(W,k),he=Ec(K,W.mode,he),he.return=W,W=he),M(W)):a(W,k)}return function(W,k,K,he){try{fo=0;var He=It(W,k,K,he);return Kr=null,He}catch(We){if(We===no||We===Ml)throw We;var dt=Wn(29,We,null,W.mode);return dt.lanes=he,dt.return=W,dt}finally{}}}var Qr=Fm(!0),Hm=Fm(!1),ai=ee(null),Ei=null;function Aa(t){var n=t.alternate;ye(cn,cn.current&1),ye(ai,t),Ei===null&&(n===null||qr.current!==null||n.memoizedState!==null)&&(Ei=t)}function Gm(t){if(t.tag===22){if(ye(cn,cn.current),ye(ai,t),Ei===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(Ei=t)}}else Ra()}function Ra(){ye(cn,cn.current),ye(ai,ai.current)}function Xi(t){xe(ai),Ei===t&&(Ei=null),xe(cn)}var cn=ee(0);function Ol(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Yf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function af(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var rf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=Zn(),c=Ea(o);c.payload=n,a!=null&&(c.callback=a),n=Ta(t,c,o),n!==null&&(Kn(n,t,o),ao(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=Zn(),c=Ea(o);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Ta(t,c,o),n!==null&&(Kn(n,t,o),ao(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Zn(),o=Ea(a);o.tag=2,n!=null&&(o.callback=n),n=Ta(t,o,a),n!==null&&(Kn(n,t,a),ao(n,t,a))}};function Vm(t,n,a,o,c,h,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,h,M):n.prototype&&n.prototype.isPureReactComponent?!js(a,o)||!js(c,h):!0}function km(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&rf.enqueueReplaceState(n,n.state,null)}function dr(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}var zl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Xm(t){zl(t)}function Wm(t){console.error(t)}function qm(t){zl(t)}function Bl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Ym(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function sf(t,n,a){return a=Ea(a),a.tag=3,a.payload={element:null},a.callback=function(){Bl(t,n)},a}function jm(t){return t=Ea(t),t.tag=3,t}function Zm(t,n,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var h=o.value;t.payload=function(){return c(h)},t.callback=function(){Ym(n,a,o)}}var M=a.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(t.callback=function(){Ym(n,a,o),typeof c!="function"&&(Na===null?Na=new Set([this]):Na.add(this));var b=o.stack;this.componentDidCatch(o.value,{componentStack:b!==null?b:""})})}function Wx(t,n,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&$s(n,a,c,!0),a=ai.current,a!==null){switch(a.tag){case 13:return Ei===null?Df():a.alternate===null&&Kt===0&&(Kt=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===Pc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Lf(t,o,c)),!1;case 22:return a.flags|=65536,o===Pc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Lf(t,o,c)),!1}throw Error(r(435,a.tag))}return Lf(t,o,c),Df(),!1}if(Dt)return n=ai.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==Rc&&(t=Error(r(422),{cause:o}),Js(ei(t,a)))):(o!==Rc&&(n=Error(r(423),{cause:o}),Js(ei(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,o=ei(o,a),c=sf(t.stateNode,o,c),Bc(t,c),Kt!==4&&(Kt=2)),!1;var h=Error(r(520),{cause:o});if(h=ei(h,a),So===null?So=[h]:So.push(h),Kt!==4&&(Kt=2),n===null)return!0;o=ei(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=sf(a.stateNode,o,t),Bc(a,t),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Na===null||!Na.has(h))))return a.flags|=65536,c&=-c,a.lanes|=c,c=jm(c),Zm(c,t,a,o),Bc(a,c),!1}a=a.return}while(a!==null);return!1}var Km=Error(r(461)),mn=!1;function Mn(t,n,a,o){n.child=t===null?Hm(n,null,a,o):Qr(n,t.child,a,o)}function Qm(t,n,a,o,c){a=a.render;var h=n.ref;if("ref"in o){var M={};for(var b in o)b!=="ref"&&(M[b]=o[b])}else M=o;return cr(n),o=Vc(t,n,a,M,h,c),b=kc(),t!==null&&!mn?(Xc(t,n,c),Wi(t,n,c)):(Dt&&b&&bc(n),n.flags|=1,Mn(t,n,o,c),n.child)}function Jm(t,n,a,o,c){if(t===null){var h=a.type;return typeof h=="function"&&!Mc(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,$m(t,n,h,o,c)):(t=gl(a.type,null,o,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(h=t.child,!pf(t,c)){var M=h.memoizedProps;if(a=a.compare,a=a!==null?a:js,a(M,o)&&t.ref===n.ref)return Wi(t,n,c)}return n.flags|=1,t=Ii(h,o),t.ref=n.ref,t.return=n,n.child=t}function $m(t,n,a,o,c){if(t!==null){var h=t.memoizedProps;if(js(h,o)&&t.ref===n.ref)if(mn=!1,n.pendingProps=o=h,pf(t,c))(t.flags&131072)!==0&&(mn=!0);else return n.lanes=t.lanes,Wi(t,n,c)}return of(t,n,a,o,c)}function eg(t,n,a){var o=n.pendingProps,c=o.children,h=t!==null?t.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=h!==null?h.baseLanes|a:a,t!==null){for(c=n.child=t.child,h=0;c!==null;)h=h|c.lanes|c.childLanes,c=c.sibling;n.childLanes=h&~o}else n.childLanes=0,n.child=null;return tg(t,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&yl(n,h!==null?h.cachePool:null),h!==null?$p(n,h):Fc(),Gm(n);else return n.lanes=n.childLanes=536870912,tg(t,n,h!==null?h.baseLanes|a:a,a)}else h!==null?(yl(n,h.cachePool),$p(n,h),Ra(),n.memoizedState=null):(t!==null&&yl(n,null),Fc(),Ra());return Mn(t,n,c,a),n.child}function tg(t,n,a,o){var c=Nc();return c=c===null?null:{parent:un._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},t!==null&&yl(n,null),Fc(),Gm(n),t!==null&&$s(t,n,o,!0),null}function Il(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function of(t,n,a,o,c){return cr(n),a=Vc(t,n,a,o,void 0,c),o=kc(),t!==null&&!mn?(Xc(t,n,c),Wi(t,n,c)):(Dt&&o&&bc(n),n.flags|=1,Mn(t,n,a,c),n.child)}function ng(t,n,a,o,c,h){return cr(n),n.updateQueue=null,a=tm(n,o,a,c),em(t),o=kc(),t!==null&&!mn?(Xc(t,n,h),Wi(t,n,h)):(Dt&&o&&bc(n),n.flags|=1,Mn(t,n,a,h),n.child)}function ig(t,n,a,o,c){if(cr(n),n.stateNode===null){var h=Gr,M=a.contextType;typeof M=="object"&&M!==null&&(h=Rn(M)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=rf,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},Oc(n),M=a.contextType,h.context=typeof M=="object"&&M!==null?Rn(M):Gr,h.state=n.memoizedState,M=a.getDerivedStateFromProps,typeof M=="function"&&(af(n,a,M,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(M=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),M!==h.state&&rf.enqueueReplaceState(h,h.state,null),so(n,o,h,c),ro(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){h=n.stateNode;var b=n.memoizedProps,z=dr(a,b);h.props=z;var J=h.context,ce=a.contextType;M=Gr,typeof ce=="object"&&ce!==null&&(M=Rn(ce));var ge=a.getDerivedStateFromProps;ce=typeof ge=="function"||typeof h.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,ce||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(b||J!==M)&&km(n,h,o,M),Ma=!1;var ne=n.memoizedState;h.state=ne,so(n,o,h,c),ro(),J=n.memoizedState,b||ne!==J||Ma?(typeof ge=="function"&&(af(n,a,ge,o),J=n.memoizedState),(z=Ma||Vm(n,a,z,o,ne,J,M))?(ce||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=J),h.props=o,h.state=J,h.context=M,o=z):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,zc(t,n),M=n.memoizedProps,ce=dr(a,M),h.props=ce,ge=n.pendingProps,ne=h.context,J=a.contextType,z=Gr,typeof J=="object"&&J!==null&&(z=Rn(J)),b=a.getDerivedStateFromProps,(J=typeof b=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(M!==ge||ne!==z)&&km(n,h,o,z),Ma=!1,ne=n.memoizedState,h.state=ne,so(n,o,h,c),ro();var ie=n.memoizedState;M!==ge||ne!==ie||Ma||t!==null&&t.dependencies!==null&&xl(t.dependencies)?(typeof b=="function"&&(af(n,a,b,o),ie=n.memoizedState),(ce=Ma||Vm(n,a,ce,o,ne,ie,z)||t!==null&&t.dependencies!==null&&xl(t.dependencies))?(J||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,ie,z),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,ie,z)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||M===t.memoizedProps&&ne===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&ne===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ie),h.props=o,h.state=ie,h.context=z,o=ce):(typeof h.componentDidUpdate!="function"||M===t.memoizedProps&&ne===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&ne===t.memoizedState||(n.flags|=1024),o=!1)}return h=o,Il(t,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,t!==null&&o?(n.child=Qr(n,t.child,null,c),n.child=Qr(n,null,a,c)):Mn(t,n,a,c),n.memoizedState=h.state,t=n.child):t=Wi(t,n,c),t}function ag(t,n,a,o){return Qs(),n.flags|=256,Mn(t,n,a,o),n.child}var lf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function uf(t){return{baseLanes:t,cachePool:Wp()}}function cf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ri),t}function rg(t,n,a){var o=n.pendingProps,c=!1,h=(n.flags&128)!==0,M;if((M=h)||(M=t!==null&&t.memoizedState===null?!1:(cn.current&2)!==0),M&&(c=!0,n.flags&=-129),M=(n.flags&32)!==0,n.flags&=-33,t===null){if(Dt){if(c?Aa(n):Ra(),Dt){var b=Zt,z;if(z=b){e:{for(z=b,b=Mi;z.nodeType!==8;){if(!b){b=null;break e}if(z=hi(z.nextSibling),z===null){b=null;break e}}b=z}b!==null?(n.memoizedState={dehydrated:b,treeContext:rr!==null?{id:Fi,overflow:Hi}:null,retryLane:536870912,hydrationErrors:null},z=Wn(18,null,null,0),z.stateNode=b,z.return=n,n.child=z,Ln=n,Zt=null,z=!0):z=!1}z||lr(n)}if(b=n.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return Yf(b)?n.lanes=32:n.lanes=536870912,null;Xi(n)}return b=o.children,o=o.fallback,c?(Ra(),c=n.mode,b=Fl({mode:"hidden",children:b},c),o=ar(o,c,a,null),b.return=n,o.return=n,b.sibling=o,n.child=b,c=n.child,c.memoizedState=uf(a),c.childLanes=cf(t,M,a),n.memoizedState=lf,o):(Aa(n),ff(n,b))}if(z=t.memoizedState,z!==null&&(b=z.dehydrated,b!==null)){if(h)n.flags&256?(Aa(n),n.flags&=-257,n=hf(t,n,a)):n.memoizedState!==null?(Ra(),n.child=t.child,n.flags|=128,n=null):(Ra(),c=o.fallback,b=n.mode,o=Fl({mode:"visible",children:o.children},b),c=ar(c,b,a,null),c.flags|=2,o.return=n,c.return=n,o.sibling=c,n.child=o,Qr(n,t.child,null,a),o=n.child,o.memoizedState=uf(a),o.childLanes=cf(t,M,a),n.memoizedState=lf,n=c);else if(Aa(n),Yf(b)){if(M=b.nextSibling&&b.nextSibling.dataset,M)var J=M.dgst;M=J,o=Error(r(419)),o.stack="",o.digest=M,Js({value:o,source:null,stack:null}),n=hf(t,n,a)}else if(mn||$s(t,n,a,!1),M=(a&t.childLanes)!==0,mn||M){if(M=Xt,M!==null&&(o=a&-a,o=(o&42)!==0?1:nt(o),o=(o&(M.suspendedLanes|a))!==0?0:o,o!==0&&o!==z.retryLane))throw z.retryLane=o,Hr(t,o),Kn(M,t,o),Km;b.data==="$?"||Df(),n=hf(t,n,a)}else b.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=z.treeContext,Zt=hi(b.nextSibling),Ln=n,Dt=!0,or=null,Mi=!1,t!==null&&(ni[ii++]=Fi,ni[ii++]=Hi,ni[ii++]=rr,Fi=t.id,Hi=t.overflow,rr=n),n=ff(n,o.children),n.flags|=4096);return n}return c?(Ra(),c=o.fallback,b=n.mode,z=t.child,J=z.sibling,o=Ii(z,{mode:"hidden",children:o.children}),o.subtreeFlags=z.subtreeFlags&65011712,J!==null?c=Ii(J,c):(c=ar(c,b,a,null),c.flags|=2),c.return=n,o.return=n,o.sibling=c,n.child=o,o=c,c=n.child,b=t.child.memoizedState,b===null?b=uf(a):(z=b.cachePool,z!==null?(J=un._currentValue,z=z.parent!==J?{parent:J,pool:J}:z):z=Wp(),b={baseLanes:b.baseLanes|a,cachePool:z}),c.memoizedState=b,c.childLanes=cf(t,M,a),n.memoizedState=lf,o):(Aa(n),a=t.child,t=a.sibling,a=Ii(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(M=n.deletions,M===null?(n.deletions=[t],n.flags|=16):M.push(t)),n.child=a,n.memoizedState=null,a)}function ff(t,n){return n=Fl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Fl(t,n){return t=Wn(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function hf(t,n,a){return Qr(n,t.child,null,a),t=ff(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function sg(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),wc(t.return,n,a)}function df(t,n,a,o,c){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c}:(h.isBackwards=n,h.rendering=null,h.renderingStartTime=0,h.last=o,h.tail=a,h.tailMode=c)}function og(t,n,a){var o=n.pendingProps,c=o.revealOrder,h=o.tail;if(Mn(t,n,o.children,a),o=cn.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&sg(t,a,n);else if(t.tag===19)sg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}switch(ye(cn,o),c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&Ol(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),df(n,!1,c,a,h);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&Ol(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}df(n,!0,a,null,h);break;case"together":df(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Wi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),La|=n.lanes,(a&n.childLanes)===0)if(t!==null){if($s(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Ii(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Ii(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function pf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&xl(t)))}function qx(t,n,a){switch(n.tag){case 3:we(n,n.stateNode.containerInfo),ya(n,un,t.memoizedState.cache),Qs();break;case 27:case 5:Qe(n);break;case 4:we(n,n.stateNode.containerInfo);break;case 10:ya(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Aa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?rg(t,n,a):(Aa(n),t=Wi(t,n,a),t!==null?t.sibling:null);Aa(n);break;case 19:var c=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||($s(t,n,a,!1),o=(a&n.childLanes)!==0),c){if(o)return og(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),ye(cn,cn.current),o)break;return null;case 22:case 23:return n.lanes=0,eg(t,n,a);case 24:ya(n,un,t.memoizedState.cache)}return Wi(t,n,a)}function lg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)mn=!0;else{if(!pf(t,a)&&(n.flags&128)===0)return mn=!1,qx(t,n,a);mn=(t.flags&131072)!==0}else mn=!1,Dt&&(n.flags&1048576)!==0&&Ip(n,vl,n.index);switch(n.lanes=0,n.tag){case 16:e:{t=n.pendingProps;var o=n.elementType,c=o._init;if(o=c(o._payload),n.type=o,typeof o=="function")Mc(o)?(t=dr(o,t),n.tag=1,n=ig(null,n,o,t,a)):(n.tag=0,n=of(null,n,o,t,a));else{if(o!=null){if(c=o.$$typeof,c===w){n.tag=11,n=Qm(null,n,o,t,a);break e}else if(c===O){n.tag=14,n=Jm(null,n,o,t,a);break e}}throw n=ve(o)||o,Error(r(306,n,""))}}return n;case 0:return of(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,c=dr(o,n.pendingProps),ig(t,n,o,c,a);case 3:e:{if(we(n,n.stateNode.containerInfo),t===null)throw Error(r(387));o=n.pendingProps;var h=n.memoizedState;c=h.element,zc(t,n),so(n,o,null,a);var M=n.memoizedState;if(o=M.cache,ya(n,un,o),o!==h.cache&&Dc(n,[un],a,!0),ro(),o=M.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:M.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=ag(t,n,o,a);break e}else if(o!==c){c=ei(Error(r(424)),n),Js(c),n=ag(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Zt=hi(t.firstChild),Ln=n,Dt=!0,or=null,Mi=!0,a=Hm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Qs(),o===c){n=Wi(t,n,a);break e}Mn(t,n,o,a)}n=n.child}return n;case 26:return Il(t,n),t===null?(a=h_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Dt||(a=n.type,t=n.pendingProps,o=$l(Me.current).createElement(a),o[on]=n,o[Sn]=t,Tn(o,a,t),tn(o),n.stateNode=o):n.memoizedState=h_(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Qe(n),t===null&&Dt&&(o=n.stateNode=u_(n.type,n.pendingProps,Me.current),Ln=n,Mi=!0,c=Zt,za(n.type)?(jf=c,Zt=hi(o.firstChild)):Zt=c),Mn(t,n,n.pendingProps.children,a),Il(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Dt&&((c=o=Zt)&&(o=SS(o,n.type,n.pendingProps,Mi),o!==null?(n.stateNode=o,Ln=n,Zt=hi(o.firstChild),Mi=!1,c=!0):c=!1),c||lr(n)),Qe(n),c=n.type,h=n.pendingProps,M=t!==null?t.memoizedProps:null,o=h.children,Xf(c,h)?o=null:M!==null&&Xf(c,M)&&(n.flags|=32),n.memoizedState!==null&&(c=Vc(t,n,Ix,null,null,a),wo._currentValue=c),Il(t,n),Mn(t,n,o,a),n.child;case 6:return t===null&&Dt&&((t=a=Zt)&&(a=yS(a,n.pendingProps,Mi),a!==null?(n.stateNode=a,Ln=n,Zt=null,t=!0):t=!1),t||lr(n)),null;case 13:return rg(t,n,a);case 4:return we(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Qr(n,null,o,a):Mn(t,n,o,a),n.child;case 11:return Qm(t,n,n.type,n.pendingProps,a);case 7:return Mn(t,n,n.pendingProps,a),n.child;case 8:return Mn(t,n,n.pendingProps.children,a),n.child;case 12:return Mn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,ya(n,n.type,o.value),Mn(t,n,o.children,a),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,cr(n),c=Rn(c),o=o(c),n.flags|=1,Mn(t,n,o,a),n.child;case 14:return Jm(t,n,n.type,n.pendingProps,a);case 15:return $m(t,n,n.type,n.pendingProps,a);case 19:return og(t,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},t===null?(a=Fl(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Ii(t.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return eg(t,n,a);case 24:return cr(n),o=Rn(un),t===null?(c=Nc(),c===null&&(c=Xt,h=Uc(),c.pooledCache=h,h.refCount++,h!==null&&(c.pooledCacheLanes|=a),c=h),n.memoizedState={parent:o,cache:c},Oc(n),ya(n,un,c)):((t.lanes&a)!==0&&(zc(t,n),so(n,null,null,a),ro()),c=t.memoizedState,h=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),ya(n,un,o)):(o=h.cache,ya(n,un,o),o!==c.cache&&Dc(n,[un],a,!0))),Mn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function qi(t){t.flags|=4}function ug(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!__(n)){if(n=ai.current,n!==null&&((Mt&4194048)===Mt?Ei!==null:(Mt&62914560)!==Mt&&(Mt&536870912)===0||n!==Ei))throw io=Pc,qp;t.flags|=8192}}function Hl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Le():536870912,t.lanes|=n,ts|=n)}function po(t,n){if(!Dt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function qt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function Yx(t,n,a){var o=n.pendingProps;switch(Ac(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qt(n),null;case 1:return qt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Vi(un),lt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Ks(n)?qi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Gp())),qt(n),null;case 26:return a=n.memoizedState,t===null?(qi(n),a!==null?(qt(n),ug(n,a)):(qt(n),n.flags&=-16777217)):a?a!==t.memoizedState?(qi(n),qt(n),ug(n,a)):(qt(n),n.flags&=-16777217):(t.memoizedProps!==o&&qi(n),qt(n),n.flags&=-16777217),null;case 27:Ot(n),a=Me.current;var c=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==o&&qi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return qt(n),null}t=Q.current,Ks(n)?Fp(n):(t=u_(c,o,a),n.stateNode=t,qi(n))}return qt(n),null;case 5:if(Ot(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&qi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return qt(n),null}if(t=Q.current,Ks(n))Fp(n);else{switch(c=$l(Me.current),t){case 1:t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=c.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof o.is=="string"?c.createElement("select",{is:o.is}):c.createElement("select"),o.multiple?t.multiple=!0:o.size&&(t.size=o.size);break;default:t=typeof o.is=="string"?c.createElement(a,{is:o.is}):c.createElement(a)}}t[on]=n,t[Sn]=o;e:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)t.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break e;for(;c.sibling===null;){if(c.return===null||c.return===n)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=t;e:switch(Tn(t,a,o),a){case"button":case"input":case"select":case"textarea":t=!!o.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&qi(n)}}return qt(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&qi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=Me.current,Ks(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,c=Ln,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}t[on]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||n_(t.nodeValue,a)),t||lr(n)}else t=$l(t).createTextNode(o),t[on]=n,n.stateNode=t}return qt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Ks(n),o!==null&&o.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[on]=n}else Qs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qt(n),c=!1}else c=Gp(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Xi(n),n):(Xi(n),null)}if(Xi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,t=t!==null&&t.memoizedState!==null,a){o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool);var h=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==c&&(o.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),Hl(n,n.updateQueue),qt(n),null;case 4:return lt(),t===null&&Ff(n.stateNode.containerInfo),qt(n),null;case 10:return Vi(n.type),qt(n),null;case 19:if(xe(cn),c=n.memoizedState,c===null)return qt(n),null;if(o=(n.flags&128)!==0,h=c.rendering,h===null)if(o)po(c,!1);else{if(Kt!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(h=Ol(t),h!==null){for(n.flags|=128,po(c,!1),t=h.updateQueue,n.updateQueue=t,Hl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Bp(a,t),a=a.sibling;return ye(cn,cn.current&1|2),n.child}t=t.sibling}c.tail!==null&&pt()>kl&&(n.flags|=128,o=!0,po(c,!1),n.lanes=4194304)}else{if(!o)if(t=Ol(h),t!==null){if(n.flags|=128,o=!0,t=t.updateQueue,n.updateQueue=t,Hl(n,t),po(c,!0),c.tail===null&&c.tailMode==="hidden"&&!h.alternate&&!Dt)return qt(n),null}else 2*pt()-c.renderingStartTime>kl&&a!==536870912&&(n.flags|=128,o=!0,po(c,!1),n.lanes=4194304);c.isBackwards?(h.sibling=n.child,n.child=h):(t=c.last,t!==null?t.sibling=h:n.child=h,c.last=h)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=pt(),n.sibling=null,t=cn.current,ye(cn,o?t&1|2:t&1),n):(qt(n),null);case 22:case 23:return Xi(n),Hc(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(qt(n),n.subtreeFlags&6&&(n.flags|=8192)):qt(n),a=n.updateQueue,a!==null&&Hl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&xe(fr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Vi(un),qt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function jx(t,n){switch(Ac(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Vi(un),lt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Ot(n),null;case 13:if(Xi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Qs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return xe(cn),null;case 4:return lt(),null;case 10:return Vi(n.type),null;case 22:case 23:return Xi(n),Hc(),t!==null&&xe(fr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Vi(un),null;case 25:return null;default:return null}}function cg(t,n){switch(Ac(n),n.tag){case 3:Vi(un),lt();break;case 26:case 27:case 5:Ot(n);break;case 4:lt();break;case 13:Xi(n);break;case 19:xe(cn);break;case 10:Vi(n.type);break;case 22:case 23:Xi(n),Hc(),t!==null&&xe(fr);break;case 24:Vi(un)}}function mo(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&t)===t){o=void 0;var h=a.create,M=a.inst;o=h(),M.destroy=o}a=a.next}while(a!==c)}}catch(b){Gt(n,n.return,b)}}function Ca(t,n,a){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var h=c.next;o=h;do{if((o.tag&t)===t){var M=o.inst,b=M.destroy;if(b!==void 0){M.destroy=void 0,c=n;var z=a,J=b;try{J()}catch(ce){Gt(c,z,ce)}}}o=o.next}while(o!==h)}}catch(ce){Gt(n,n.return,ce)}}function fg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Jp(n,a)}catch(o){Gt(t,t.return,o)}}}function hg(t,n,a){a.props=dr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Gt(t,n,o)}}function go(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(c){Gt(t,n,c)}}function Ti(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){Gt(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Gt(t,n,c)}else a.current=null}function dg(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){Gt(t,t.return,c)}}function mf(t,n,a){try{var o=t.stateNode;mS(o,t.type,a,n),o[Sn]=n}catch(c){Gt(t,t.return,c)}}function pg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&za(t.type)||t.tag===4}function gf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||pg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&za(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function _f(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Jl));else if(o!==4&&(o===27&&za(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(_f(t,n,a),t=t.sibling;t!==null;)_f(t,n,a),t=t.sibling}function Gl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&za(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Gl(t,n,a),t=t.sibling;t!==null;)Gl(t,n,a),t=t.sibling}function mg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Tn(n,o,a),n[on]=t,n[Sn]=a}catch(h){Gt(t,t.return,h)}}var Yi=!1,$t=!1,vf=!1,gg=typeof WeakSet=="function"?WeakSet:Set,gn=null;function Zx(t,n){if(t=t.containerInfo,Vf=ru,t=Rp(t),mc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break e}var M=0,b=-1,z=-1,J=0,ce=0,ge=t,ne=null;t:for(;;){for(var ie;ge!==a||c!==0&&ge.nodeType!==3||(b=M+c),ge!==h||o!==0&&ge.nodeType!==3||(z=M+o),ge.nodeType===3&&(M+=ge.nodeValue.length),(ie=ge.firstChild)!==null;)ne=ge,ge=ie;for(;;){if(ge===t)break t;if(ne===a&&++J===c&&(b=M),ne===h&&++ce===o&&(z=M),(ie=ge.nextSibling)!==null)break;ge=ne,ne=ge.parentNode}ge=ie}a=b===-1||z===-1?null:{start:b,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(kf={focusedElem:t,selectionRange:a},ru=!1,gn=n;gn!==null;)if(n=gn,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,gn=t;else for(;gn!==null;){switch(n=gn,h=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&h!==null){t=void 0,a=n,c=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var tt=dr(a.type,c,a.elementType===a.type);t=o.getSnapshotBeforeUpdate(tt,h),o.__reactInternalSnapshotBeforeUpdate=t}catch(Je){Gt(a,a.return,Je)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)qf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":qf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,gn=t;break}gn=n.return}}function _g(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:wa(t,a),o&4&&mo(5,a);break;case 1:if(wa(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(M){Gt(a,a.return,M)}else{var c=dr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(M){Gt(a,a.return,M)}}o&64&&fg(a),o&512&&go(a,a.return);break;case 3:if(wa(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Jp(t,n)}catch(M){Gt(a,a.return,M)}}break;case 27:n===null&&o&4&&mg(a);case 26:case 5:wa(t,a),n===null&&o&4&&dg(a),o&512&&go(a,a.return);break;case 12:wa(t,a);break;case 13:wa(t,a),o&4&&Sg(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=aS.bind(null,a),MS(t,a))));break;case 22:if(o=a.memoizedState!==null||Yi,!o){n=n!==null&&n.memoizedState!==null||$t,c=Yi;var h=$t;Yi=o,($t=n)&&!h?Da(t,a,(a.subtreeFlags&8772)!==0):wa(t,a),Yi=c,$t=h}break;case 30:break;default:wa(t,a)}}function vg(t){var n=t.alternate;n!==null&&(t.alternate=null,vg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&_a(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Wt=null,In=!1;function ji(t,n,a){for(a=a.child;a!==null;)xg(t,n,a),a=a.sibling}function xg(t,n,a){if(pe&&typeof pe.onCommitFiberUnmount=="function")try{pe.onCommitFiberUnmount(fe,a)}catch{}switch(a.tag){case 26:$t||Ti(a,n),ji(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:$t||Ti(a,n);var o=Wt,c=In;za(a.type)&&(Wt=a.stateNode,In=!1),ji(t,n,a),bo(a.stateNode),Wt=o,In=c;break;case 5:$t||Ti(a,n);case 6:if(o=Wt,c=In,Wt=null,ji(t,n,a),Wt=o,In=c,Wt!==null)if(In)try{(Wt.nodeType===9?Wt.body:Wt.nodeName==="HTML"?Wt.ownerDocument.body:Wt).removeChild(a.stateNode)}catch(h){Gt(a,n,h)}else try{Wt.removeChild(a.stateNode)}catch(h){Gt(a,n,h)}break;case 18:Wt!==null&&(In?(t=Wt,o_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),No(t)):o_(Wt,a.stateNode));break;case 4:o=Wt,c=In,Wt=a.stateNode.containerInfo,In=!0,ji(t,n,a),Wt=o,In=c;break;case 0:case 11:case 14:case 15:$t||Ca(2,a,n),$t||Ca(4,a,n),ji(t,n,a);break;case 1:$t||(Ti(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&hg(a,n,o)),ji(t,n,a);break;case 21:ji(t,n,a);break;case 22:$t=(o=$t)||a.memoizedState!==null,ji(t,n,a),$t=o;break;default:ji(t,n,a)}}function Sg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{No(t)}catch(a){Gt(n,n.return,a)}}function Kx(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new gg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new gg),n;default:throw Error(r(435,t.tag))}}function xf(t,n){var a=Kx(t);n.forEach(function(o){var c=rS.bind(null,t,o);a.has(o)||(a.add(o),o.then(c,c))})}function qn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],h=t,M=n,b=M;e:for(;b!==null;){switch(b.tag){case 27:if(za(b.type)){Wt=b.stateNode,In=!1;break e}break;case 5:Wt=b.stateNode,In=!1;break e;case 3:case 4:Wt=b.stateNode.containerInfo,In=!0;break e}b=b.return}if(Wt===null)throw Error(r(160));xg(h,M,c),Wt=null,In=!1,h=c.alternate,h!==null&&(h.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)yg(n,t),n=n.sibling}var fi=null;function yg(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:qn(n,t),Yn(t),o&4&&(Ca(3,t,t.return),mo(3,t),Ca(5,t,t.return));break;case 1:qn(n,t),Yn(t),o&512&&($t||a===null||Ti(a,a.return)),o&64&&Yi&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=fi;if(qn(n,t),Yn(t),o&512&&($t||a===null||Ti(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,c=c.ownerDocument||c;t:switch(o){case"title":h=c.getElementsByTagName("title")[0],(!h||h[ga]||h[on]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=c.createElement(o),c.head.insertBefore(h,c.querySelector("head > title"))),Tn(h,o,a),h[on]=t,tn(h),o=h;break e;case"link":var M=m_("link","href",c).get(o+(a.href||""));if(M){for(var b=0;b<M.length;b++)if(h=M[b],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){M.splice(b,1);break t}}h=c.createElement(o),Tn(h,o,a),c.head.appendChild(h);break;case"meta":if(M=m_("meta","content",c).get(o+(a.content||""))){for(b=0;b<M.length;b++)if(h=M[b],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){M.splice(b,1);break t}}h=c.createElement(o),Tn(h,o,a),c.head.appendChild(h);break;default:throw Error(r(468,o))}h[on]=t,tn(h),o=h}t.stateNode=o}else g_(c,t.type,t.stateNode);else t.stateNode=p_(c,o,t.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?g_(c,t.type,t.stateNode):p_(c,o,t.memoizedProps)):o===null&&t.stateNode!==null&&mf(t,t.memoizedProps,a.memoizedProps)}break;case 27:qn(n,t),Yn(t),o&512&&($t||a===null||Ti(a,a.return)),a!==null&&o&4&&mf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(qn(n,t),Yn(t),o&512&&($t||a===null||Ti(a,a.return)),t.flags&32){c=t.stateNode;try{yi(c,"")}catch(ie){Gt(t,t.return,ie)}}o&4&&t.stateNode!=null&&(c=t.memoizedProps,mf(t,c,a!==null?a.memoizedProps:c)),o&1024&&(vf=!0);break;case 6:if(qn(n,t),Yn(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(ie){Gt(t,t.return,ie)}}break;case 3:if(nu=null,c=fi,fi=eu(n.containerInfo),qn(n,t),fi=c,Yn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{No(n.containerInfo)}catch(ie){Gt(t,t.return,ie)}vf&&(vf=!1,Mg(t));break;case 4:o=fi,fi=eu(t.stateNode.containerInfo),qn(n,t),Yn(t),fi=o;break;case 12:qn(n,t),Yn(t);break;case 13:qn(n,t),Yn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(bf=pt()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,xf(t,o)));break;case 22:c=t.memoizedState!==null;var z=a!==null&&a.memoizedState!==null,J=Yi,ce=$t;if(Yi=J||c,$t=ce||z,qn(n,t),$t=ce,Yi=J,Yn(t),o&8192)e:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||z||Yi||$t||pr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){z=a=n;try{if(h=z.stateNode,c)M=h.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{b=z.stateNode;var ge=z.memoizedProps.style,ne=ge!=null&&ge.hasOwnProperty("display")?ge.display:null;b.style.display=ne==null||typeof ne=="boolean"?"":(""+ne).trim()}}catch(ie){Gt(z,z.return,ie)}}}else if(n.tag===6){if(a===null){z=n;try{z.stateNode.nodeValue=c?"":z.memoizedProps}catch(ie){Gt(z,z.return,ie)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,xf(t,a))));break;case 19:qn(n,t),Yn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,xf(t,o)));break;case 30:break;case 21:break;default:qn(n,t),Yn(t)}}function Yn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(pg(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,h=gf(t);Gl(t,h,c);break;case 5:var M=a.stateNode;a.flags&32&&(yi(M,""),a.flags&=-33);var b=gf(t);Gl(t,b,M);break;case 3:case 4:var z=a.stateNode.containerInfo,J=gf(t);_f(t,J,z);break;default:throw Error(r(161))}}catch(ce){Gt(t,t.return,ce)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Mg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Mg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function wa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)_g(t,n.alternate,n),n=n.sibling}function pr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ca(4,n,n.return),pr(n);break;case 1:Ti(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&hg(n,n.return,a),pr(n);break;case 27:bo(n.stateNode);case 26:case 5:Ti(n,n.return),pr(n);break;case 22:n.memoizedState===null&&pr(n);break;case 30:pr(n);break;default:pr(n)}t=t.sibling}}function Da(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=t,h=n,M=h.flags;switch(h.tag){case 0:case 11:case 15:Da(c,h,a),mo(4,h);break;case 1:if(Da(c,h,a),o=h,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(J){Gt(o,o.return,J)}if(o=h,c=o.updateQueue,c!==null){var b=o.stateNode;try{var z=c.shared.hiddenCallbacks;if(z!==null)for(c.shared.hiddenCallbacks=null,c=0;c<z.length;c++)Qp(z[c],b)}catch(J){Gt(o,o.return,J)}}a&&M&64&&fg(h),go(h,h.return);break;case 27:mg(h);case 26:case 5:Da(c,h,a),a&&o===null&&M&4&&dg(h),go(h,h.return);break;case 12:Da(c,h,a);break;case 13:Da(c,h,a),a&&M&4&&Sg(c,h);break;case 22:h.memoizedState===null&&Da(c,h,a),go(h,h.return);break;case 30:break;default:Da(c,h,a)}n=n.sibling}}function Sf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&eo(a))}function yf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&eo(t))}function bi(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Eg(t,n,a,o),n=n.sibling}function Eg(t,n,a,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:bi(t,n,a,o),c&2048&&mo(9,n);break;case 1:bi(t,n,a,o);break;case 3:bi(t,n,a,o),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&eo(t)));break;case 12:if(c&2048){bi(t,n,a,o),t=n.stateNode;try{var h=n.memoizedProps,M=h.id,b=h.onPostCommit;typeof b=="function"&&b(M,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(z){Gt(n,n.return,z)}}else bi(t,n,a,o);break;case 13:bi(t,n,a,o);break;case 23:break;case 22:h=n.stateNode,M=n.alternate,n.memoizedState!==null?h._visibility&2?bi(t,n,a,o):_o(t,n):h._visibility&2?bi(t,n,a,o):(h._visibility|=2,Jr(t,n,a,o,(n.subtreeFlags&10256)!==0)),c&2048&&Sf(M,n);break;case 24:bi(t,n,a,o),c&2048&&yf(n.alternate,n);break;default:bi(t,n,a,o)}}function Jr(t,n,a,o,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var h=t,M=n,b=a,z=o,J=M.flags;switch(M.tag){case 0:case 11:case 15:Jr(h,M,b,z,c),mo(8,M);break;case 23:break;case 22:var ce=M.stateNode;M.memoizedState!==null?ce._visibility&2?Jr(h,M,b,z,c):_o(h,M):(ce._visibility|=2,Jr(h,M,b,z,c)),c&&J&2048&&Sf(M.alternate,M);break;case 24:Jr(h,M,b,z,c),c&&J&2048&&yf(M.alternate,M);break;default:Jr(h,M,b,z,c)}n=n.sibling}}function _o(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,c=o.flags;switch(o.tag){case 22:_o(a,o),c&2048&&Sf(o.alternate,o);break;case 24:_o(a,o),c&2048&&yf(o.alternate,o);break;default:_o(a,o)}n=n.sibling}}var vo=8192;function $r(t){if(t.subtreeFlags&vo)for(t=t.child;t!==null;)Tg(t),t=t.sibling}function Tg(t){switch(t.tag){case 26:$r(t),t.flags&vo&&t.memoizedState!==null&&OS(fi,t.memoizedState,t.memoizedProps);break;case 5:$r(t);break;case 3:case 4:var n=fi;fi=eu(t.stateNode.containerInfo),$r(t),fi=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=vo,vo=16777216,$r(t),vo=n):$r(t));break;default:$r(t)}}function bg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function xo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];gn=o,Rg(o,t)}bg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ag(t),t=t.sibling}function Ag(t){switch(t.tag){case 0:case 11:case 15:xo(t),t.flags&2048&&Ca(9,t,t.return);break;case 3:xo(t);break;case 12:xo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Vl(t)):xo(t);break;default:xo(t)}}function Vl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];gn=o,Rg(o,t)}bg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ca(8,n,n.return),Vl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Vl(n));break;default:Vl(n)}t=t.sibling}}function Rg(t,n){for(;gn!==null;){var a=gn;switch(a.tag){case 0:case 11:case 15:Ca(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:eo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,gn=o;else e:for(a=t;gn!==null;){o=gn;var c=o.sibling,h=o.return;if(vg(o),o===a){gn=null;break e}if(c!==null){c.return=h,gn=c;break e}gn=h}}}var Qx={getCacheForType:function(t){var n=Rn(un),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},Jx=typeof WeakMap=="function"?WeakMap:Map,Lt=0,Xt=null,mt=null,Mt=0,Nt=0,jn=null,Ua=!1,es=!1,Mf=!1,Zi=0,Kt=0,La=0,mr=0,Ef=0,ri=0,ts=0,So=null,Fn=null,Tf=!1,bf=0,kl=1/0,Xl=null,Na=null,En=0,Pa=null,ns=null,is=0,Af=0,Rf=null,Cg=null,yo=0,Cf=null;function Zn(){if((Lt&2)!==0&&Mt!==0)return Mt&-Mt;if(B.T!==null){var t=Xr;return t!==0?t:Of()}return At()}function wg(){ri===0&&(ri=(Mt&536870912)===0||Dt?X():536870912);var t=ai.current;return t!==null&&(t.flags|=32),ri}function Kn(t,n,a){(t===Xt&&(Nt===2||Nt===9)||t.cancelPendingCommit!==null)&&(as(t,0),Oa(t,Mt,ri,!1)),Be(t,a),((Lt&2)===0||t!==Xt)&&(t===Xt&&((Lt&2)===0&&(mr|=a),Kt===4&&Oa(t,Mt,ri,!1)),Ai(t))}function Dg(t,n,a){if((Lt&6)!==0)throw Error(r(327));var o=!a&&(n&124)===0&&(n&t.expiredLanes)===0||Ce(t,n),c=o?tS(t,n):Uf(t,n,!0),h=o;do{if(c===0){es&&!o&&Oa(t,n,0,!1);break}else{if(a=t.current.alternate,h&&!$x(a)){c=Uf(t,n,!1),h=!1;continue}if(c===2){if(h=n,t.errorRecoveryDisabledLanes&h)var M=0;else M=t.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){n=M;e:{var b=t;c=So;var z=b.current.memoizedState.isDehydrated;if(z&&(as(b,M).flags|=256),M=Uf(b,M,!1),M!==2){if(Mf&&!z){b.errorRecoveryDisabledLanes|=h,mr|=h,c=4;break e}h=Fn,Fn=c,h!==null&&(Fn===null?Fn=h:Fn.push.apply(Fn,h))}c=M}if(h=!1,c!==2)continue}}if(c===1){as(t,0),Oa(t,n,0,!0);break}e:{switch(o=t,h=c,h){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Oa(o,n,ri,!Ua);break e;case 2:Fn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=bf+300-pt(),10<c)){if(Oa(o,n,ri,!Ua),Ye(o,0,!0)!==0)break e;o.timeoutHandle=r_(Ug.bind(null,o,a,Fn,Xl,Tf,n,ri,mr,ts,Ua,h,2,-0,0),c);break e}Ug(o,a,Fn,Xl,Tf,n,ri,mr,ts,Ua,h,0,-0,0)}}break}while(!0);Ai(t)}function Ug(t,n,a,o,c,h,M,b,z,J,ce,ge,ne,ie){if(t.timeoutHandle=-1,ge=n.subtreeFlags,(ge&8192||(ge&16785408)===16785408)&&(Co={stylesheets:null,count:0,unsuspend:PS},Tg(n),ge=zS(),ge!==null)){t.cancelPendingCommit=ge(Ig.bind(null,t,n,h,a,o,c,M,b,z,ce,1,ne,ie)),Oa(t,h,M,!J);return}Ig(t,n,h,a,o,c,M,b,z)}function $x(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],h=c.getSnapshot;c=c.value;try{if(!Xn(h(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Oa(t,n,a,o){n&=~Ef,n&=~mr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var c=n;0<c;){var h=31-Oe(c),M=1<<h;o[h]=-1,c&=~M}a!==0&&_e(t,a,n)}function Wl(){return(Lt&6)===0?(Mo(0),!1):!0}function wf(){if(mt!==null){if(Nt===0)var t=mt.return;else t=mt,Gi=ur=null,Wc(t),Kr=null,fo=0,t=mt;for(;t!==null;)cg(t.alternate,t),t=t.return;mt=null}}function as(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,_S(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),wf(),Xt=t,mt=a=Ii(t.current,null),Mt=n,Nt=0,jn=null,Ua=!1,es=Ce(t,n),Mf=!1,ts=ri=Ef=mr=La=Kt=0,Fn=So=null,Tf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var c=31-Oe(o),h=1<<c;n|=t[c],o&=~h}return Zi=n,dl(),a}function Lg(t,n){ht=null,B.H=Ll,n===no||n===Ml?(n=Zp(),Nt=3):n===qp?(n=Zp(),Nt=4):Nt=n===Km?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,jn=n,mt===null&&(Kt=1,Bl(t,ei(n,t.current)))}function Ng(){var t=B.H;return B.H=Ll,t===null?Ll:t}function Pg(){var t=B.A;return B.A=Qx,t}function Df(){Kt=4,Ua||(Mt&4194048)!==Mt&&ai.current!==null||(es=!0),(La&134217727)===0&&(mr&134217727)===0||Xt===null||Oa(Xt,Mt,ri,!1)}function Uf(t,n,a){var o=Lt;Lt|=2;var c=Ng(),h=Pg();(Xt!==t||Mt!==n)&&(Xl=null,as(t,n)),n=!1;var M=Kt;e:do try{if(Nt!==0&&mt!==null){var b=mt,z=jn;switch(Nt){case 8:wf(),M=6;break e;case 3:case 2:case 9:case 6:ai.current===null&&(n=!0);var J=Nt;if(Nt=0,jn=null,rs(t,b,z,J),a&&es){M=0;break e}break;default:J=Nt,Nt=0,jn=null,rs(t,b,z,J)}}eS(),M=Kt;break}catch(ce){Lg(t,ce)}while(!0);return n&&t.shellSuspendCounter++,Gi=ur=null,Lt=o,B.H=c,B.A=h,mt===null&&(Xt=null,Mt=0,dl()),M}function eS(){for(;mt!==null;)Og(mt)}function tS(t,n){var a=Lt;Lt|=2;var o=Ng(),c=Pg();Xt!==t||Mt!==n?(Xl=null,kl=pt()+500,as(t,n)):es=Ce(t,n);e:do try{if(Nt!==0&&mt!==null){n=mt;var h=jn;t:switch(Nt){case 1:Nt=0,jn=null,rs(t,n,h,1);break;case 2:case 9:if(Yp(h)){Nt=0,jn=null,zg(n);break}n=function(){Nt!==2&&Nt!==9||Xt!==t||(Nt=7),Ai(t)},h.then(n,n);break e;case 3:Nt=7;break e;case 4:Nt=5;break e;case 7:Yp(h)?(Nt=0,jn=null,zg(n)):(Nt=0,jn=null,rs(t,n,h,7));break;case 5:var M=null;switch(mt.tag){case 26:M=mt.memoizedState;case 5:case 27:var b=mt;if(!M||__(M)){Nt=0,jn=null;var z=b.sibling;if(z!==null)mt=z;else{var J=b.return;J!==null?(mt=J,ql(J)):mt=null}break t}}Nt=0,jn=null,rs(t,n,h,5);break;case 6:Nt=0,jn=null,rs(t,n,h,6);break;case 8:wf(),Kt=6;break e;default:throw Error(r(462))}}nS();break}catch(ce){Lg(t,ce)}while(!0);return Gi=ur=null,B.H=o,B.A=c,Lt=a,mt!==null?0:(Xt=null,Mt=0,dl(),Kt)}function nS(){for(;mt!==null&&!xn();)Og(mt)}function Og(t){var n=lg(t.alternate,t,Zi);t.memoizedProps=t.pendingProps,n===null?ql(t):mt=n}function zg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=ng(a,n,n.pendingProps,n.type,void 0,Mt);break;case 11:n=ng(a,n,n.pendingProps,n.type.render,n.ref,Mt);break;case 5:Wc(n);default:cg(a,n),n=mt=Bp(n,Zi),n=lg(a,n,Zi)}t.memoizedProps=t.pendingProps,n===null?ql(t):mt=n}function rs(t,n,a,o){Gi=ur=null,Wc(n),Kr=null,fo=0;var c=n.return;try{if(Wx(t,c,n,a,Mt)){Kt=1,Bl(t,ei(a,t.current)),mt=null;return}}catch(h){if(c!==null)throw mt=c,h;Kt=1,Bl(t,ei(a,t.current)),mt=null;return}n.flags&32768?(Dt||o===1?t=!0:es||(Mt&536870912)!==0?t=!1:(Ua=t=!0,(o===2||o===9||o===3||o===6)&&(o=ai.current,o!==null&&o.tag===13&&(o.flags|=16384))),Bg(n,t)):ql(n)}function ql(t){var n=t;do{if((n.flags&32768)!==0){Bg(n,Ua);return}t=n.return;var a=Yx(n.alternate,n,Zi);if(a!==null){mt=a;return}if(n=n.sibling,n!==null){mt=n;return}mt=n=t}while(n!==null);Kt===0&&(Kt=5)}function Bg(t,n){do{var a=jx(t.alternate,t);if(a!==null){a.flags&=32767,mt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){mt=t;return}mt=t=a}while(t!==null);Kt=6,mt=null}function Ig(t,n,a,o,c,h,M,b,z){t.cancelPendingCommit=null;do Yl();while(En!==0);if((Lt&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(h=n.lanes|n.childLanes,h|=Sc,Ae(t,a,h,M,b,z),t===Xt&&(mt=Xt=null,Mt=0),ns=n,Pa=t,is=a,Af=h,Rf=c,Cg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,sS(at,function(){return kg(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=B.T,B.T=null,c=Z.p,Z.p=2,M=Lt,Lt|=4;try{Zx(t,n,a)}finally{Lt=M,Z.p=c,B.T=o}}En=1,Fg(),Hg(),Gg()}}function Fg(){if(En===1){En=0;var t=Pa,n=ns,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var o=Z.p;Z.p=2;var c=Lt;Lt|=4;try{yg(n,t);var h=kf,M=Rp(t.containerInfo),b=h.focusedElem,z=h.selectionRange;if(M!==b&&b&&b.ownerDocument&&Ap(b.ownerDocument.documentElement,b)){if(z!==null&&mc(b)){var J=z.start,ce=z.end;if(ce===void 0&&(ce=J),"selectionStart"in b)b.selectionStart=J,b.selectionEnd=Math.min(ce,b.value.length);else{var ge=b.ownerDocument||document,ne=ge&&ge.defaultView||window;if(ne.getSelection){var ie=ne.getSelection(),tt=b.textContent.length,Je=Math.min(z.start,tt),It=z.end===void 0?Je:Math.min(z.end,tt);!ie.extend&&Je>It&&(M=It,It=Je,Je=M);var W=bp(b,Je),k=bp(b,It);if(W&&k&&(ie.rangeCount!==1||ie.anchorNode!==W.node||ie.anchorOffset!==W.offset||ie.focusNode!==k.node||ie.focusOffset!==k.offset)){var K=ge.createRange();K.setStart(W.node,W.offset),ie.removeAllRanges(),Je>It?(ie.addRange(K),ie.extend(k.node,k.offset)):(K.setEnd(k.node,k.offset),ie.addRange(K))}}}}for(ge=[],ie=b;ie=ie.parentNode;)ie.nodeType===1&&ge.push({element:ie,left:ie.scrollLeft,top:ie.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<ge.length;b++){var he=ge[b];he.element.scrollLeft=he.left,he.element.scrollTop=he.top}}ru=!!Vf,kf=Vf=null}finally{Lt=c,Z.p=o,B.T=a}}t.current=n,En=2}}function Hg(){if(En===2){En=0;var t=Pa,n=ns,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var o=Z.p;Z.p=2;var c=Lt;Lt|=4;try{_g(t,n.alternate,n)}finally{Lt=c,Z.p=o,B.T=a}}En=3}}function Gg(){if(En===4||En===3){En=0,Et();var t=Pa,n=ns,a=is,o=Cg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?En=5:(En=0,ns=Pa=null,Vg(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Na=null),Ut(a),n=n.stateNode,pe&&typeof pe.onCommitFiberRoot=="function")try{pe.onCommitFiberRoot(fe,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=B.T,c=Z.p,Z.p=2,B.T=null;try{for(var h=t.onRecoverableError,M=0;M<o.length;M++){var b=o[M];h(b.value,{componentStack:b.stack})}}finally{B.T=n,Z.p=c}}(is&3)!==0&&Yl(),Ai(t),c=t.pendingLanes,(a&4194090)!==0&&(c&42)!==0?t===Cf?yo++:(yo=0,Cf=t):yo=0,Mo(0)}}function Vg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,eo(n)))}function Yl(t){return Fg(),Hg(),Gg(),kg()}function kg(){if(En!==5)return!1;var t=Pa,n=Af;Af=0;var a=Ut(is),o=B.T,c=Z.p;try{Z.p=32>a?32:a,B.T=null,a=Rf,Rf=null;var h=Pa,M=is;if(En=0,ns=Pa=null,is=0,(Lt&6)!==0)throw Error(r(331));var b=Lt;if(Lt|=4,Ag(h.current),Eg(h,h.current,M,a),Lt=b,Mo(0,!1),pe&&typeof pe.onPostCommitFiberRoot=="function")try{pe.onPostCommitFiberRoot(fe,h)}catch{}return!0}finally{Z.p=c,B.T=o,Vg(t,n)}}function Xg(t,n,a){n=ei(a,n),n=sf(t.stateNode,n,2),t=Ta(t,n,2),t!==null&&(Be(t,2),Ai(t))}function Gt(t,n,a){if(t.tag===3)Xg(t,t,a);else for(;n!==null;){if(n.tag===3){Xg(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Na===null||!Na.has(o))){t=ei(a,t),a=jm(2),o=Ta(n,a,2),o!==null&&(Zm(a,o,n,t),Be(o,2),Ai(o));break}}n=n.return}}function Lf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new Jx;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(a)||(Mf=!0,c.add(a),t=iS.bind(null,t,n,a),n.then(t,t))}function iS(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Xt===t&&(Mt&a)===a&&(Kt===4||Kt===3&&(Mt&62914560)===Mt&&300>pt()-bf?(Lt&2)===0&&as(t,0):Ef|=a,ts===Mt&&(ts=0)),Ai(t)}function Wg(t,n){n===0&&(n=Le()),t=Hr(t,n),t!==null&&(Be(t,n),Ai(t))}function aS(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Wg(t,a)}function rS(t,n){var a=0;switch(t.tag){case 13:var o=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),Wg(t,a)}function sS(t,n){return _t(t,n)}var jl=null,ss=null,Nf=!1,Zl=!1,Pf=!1,gr=0;function Ai(t){t!==ss&&t.next===null&&(ss===null?jl=ss=t:ss=ss.next=t),Zl=!0,Nf||(Nf=!0,lS())}function Mo(t,n){if(!Pf&&Zl){Pf=!0;do for(var a=!1,o=jl;o!==null;){if(t!==0){var c=o.pendingLanes;if(c===0)var h=0;else{var M=o.suspendedLanes,b=o.pingedLanes;h=(1<<31-Oe(42|t)+1)-1,h&=c&~(M&~b),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,Zg(o,h))}else h=Mt,h=Ye(o,o===Xt?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||Ce(o,h)||(a=!0,Zg(o,h));o=o.next}while(a);Pf=!1}}function oS(){qg()}function qg(){Zl=Nf=!1;var t=0;gr!==0&&(gS()&&(t=gr),gr=0);for(var n=pt(),a=null,o=jl;o!==null;){var c=o.next,h=Yg(o,n);h===0?(o.next=null,a===null?jl=c:a.next=c,c===null&&(ss=a)):(a=o,(t!==0||(h&3)!==0)&&(Zl=!0)),o=c}Mo(t)}function Yg(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,c=t.expirationTimes,h=t.pendingLanes&-62914561;0<h;){var M=31-Oe(h),b=1<<M,z=c[M];z===-1?((b&a)===0||(b&o)!==0)&&(c[M]=it(b,n)):z<=n&&(t.expiredLanes|=b),h&=~b}if(n=Xt,a=Mt,a=Ye(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Nt===2||Nt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&H(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ce(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&H(o),Ut(a)){case 2:case 8:a=je;break;case 32:a=at;break;case 268435456:a=P;break;default:a=at}return o=jg.bind(null,t),a=_t(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&H(o),t.callbackPriority=2,t.callbackNode=null,2}function jg(t,n){if(En!==0&&En!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Yl()&&t.callbackNode!==a)return null;var o=Mt;return o=Ye(t,t===Xt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(Dg(t,o,n),Yg(t,pt()),t.callbackNode!=null&&t.callbackNode===a?jg.bind(null,t):null)}function Zg(t,n){if(Yl())return null;Dg(t,n,!0)}function lS(){vS(function(){(Lt&6)!==0?_t(vt,oS):qg()})}function Of(){return gr===0&&(gr=X()),gr}function Kg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:sl(""+t)}function Qg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function uS(t,n,a,o,c){if(n==="submit"&&a&&a.stateNode===c){var h=Kg((c[Sn]||null).action),M=o.submitter;M&&(n=(n=M[Sn]||null)?Kg(n.formAction):M.getAttribute("formAction"),n!==null&&(h=n,M=null));var b=new cl("action","action",null,o,c);t.push({event:b,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(gr!==0){var z=M?Qg(c,M):new FormData(c);ef(a,{pending:!0,data:z,method:c.method,action:h},null,z)}}else typeof h=="function"&&(b.preventDefault(),z=M?Qg(c,M):new FormData(c),ef(a,{pending:!0,data:z,method:c.method,action:h},h,z))},currentTarget:c}]})}}for(var zf=0;zf<xc.length;zf++){var Bf=xc[zf],cS=Bf.toLowerCase(),fS=Bf[0].toUpperCase()+Bf.slice(1);ci(cS,"on"+fS)}ci(Dp,"onAnimationEnd"),ci(Up,"onAnimationIteration"),ci(Lp,"onAnimationStart"),ci("dblclick","onDoubleClick"),ci("focusin","onFocus"),ci("focusout","onBlur"),ci(Cx,"onTransitionRun"),ci(wx,"onTransitionStart"),ci(Dx,"onTransitionCancel"),ci(Np,"onTransitionEnd"),C("onMouseEnter",["mouseout","mouseover"]),C("onMouseLeave",["mouseout","mouseover"]),C("onPointerEnter",["pointerout","pointerover"]),C("onPointerLeave",["pointerout","pointerover"]),Pi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Pi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Pi("onBeforeInput",["compositionend","keypress","textInput","paste"]),Pi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Pi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Pi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Eo));function Jg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],c=o.event;o=o.listeners;e:{var h=void 0;if(n)for(var M=o.length-1;0<=M;M--){var b=o[M],z=b.instance,J=b.currentTarget;if(b=b.listener,z!==h&&c.isPropagationStopped())break e;h=b,c.currentTarget=J;try{h(c)}catch(ce){zl(ce)}c.currentTarget=null,h=z}else for(M=0;M<o.length;M++){if(b=o[M],z=b.instance,J=b.currentTarget,b=b.listener,z!==h&&c.isPropagationStopped())break e;h=b,c.currentTarget=J;try{h(c)}catch(ce){zl(ce)}c.currentTarget=null,h=z}}}}function gt(t,n){var a=n[Ja];a===void 0&&(a=n[Ja]=new Set);var o=t+"__bubble";a.has(o)||($g(n,t,2,!1),a.add(o))}function If(t,n,a){var o=0;n&&(o|=4),$g(a,t,o,n)}var Kl="_reactListening"+Math.random().toString(36).slice(2);function Ff(t){if(!t[Kl]){t[Kl]=!0,al.forEach(function(a){a!=="selectionchange"&&(hS.has(a)||If(a,!1,t),If(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Kl]||(n[Kl]=!0,If("selectionchange",!1,n))}}function $g(t,n,a,o){switch(E_(n)){case 2:var c=FS;break;case 8:c=HS;break;default:c=$f}a=c.bind(null,n,a,t),c=void 0,!sc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function Hf(t,n,a,o,c){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var M=o.tag;if(M===3||M===4){var b=o.stateNode.containerInfo;if(b===c)break;if(M===4)for(M=o.return;M!==null;){var z=M.tag;if((z===3||z===4)&&M.stateNode.containerInfo===c)return;M=M.return}for(;b!==null;){if(M=Li(b),M===null)return;if(z=M.tag,z===5||z===6||z===26||z===27){o=h=M;continue e}b=b.parentNode}}o=o.return}sp(function(){var J=h,ce=ac(a),ge=[];e:{var ne=Pp.get(t);if(ne!==void 0){var ie=cl,tt=t;switch(t){case"keypress":if(ll(a)===0)break e;case"keydown":case"keyup":ie=sx;break;case"focusin":tt="focus",ie=cc;break;case"focusout":tt="blur",ie=cc;break;case"beforeblur":case"afterblur":ie=cc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ie=up;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ie=j0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ie=ux;break;case Dp:case Up:case Lp:ie=Q0;break;case Np:ie=fx;break;case"scroll":case"scrollend":ie=q0;break;case"wheel":ie=dx;break;case"copy":case"cut":case"paste":ie=$0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ie=fp;break;case"toggle":case"beforetoggle":ie=mx}var Je=(n&4)!==0,It=!Je&&(t==="scroll"||t==="scrollend"),W=Je?ne!==null?ne+"Capture":null:ne;Je=[];for(var k=J,K;k!==null;){var he=k;if(K=he.stateNode,he=he.tag,he!==5&&he!==26&&he!==27||K===null||W===null||(he=Gs(k,W),he!=null&&Je.push(To(k,he,K))),It)break;k=k.return}0<Je.length&&(ne=new ie(ne,tt,null,a,ce),ge.push({event:ne,listeners:Je}))}}if((n&7)===0){e:{if(ne=t==="mouseover"||t==="pointerover",ie=t==="mouseout"||t==="pointerout",ne&&a!==ic&&(tt=a.relatedTarget||a.fromElement)&&(Li(tt)||tt[On]))break e;if((ie||ne)&&(ne=ce.window===ce?ce:(ne=ce.ownerDocument)?ne.defaultView||ne.parentWindow:window,ie?(tt=a.relatedTarget||a.toElement,ie=J,tt=tt?Li(tt):null,tt!==null&&(It=u(tt),Je=tt.tag,tt!==It||Je!==5&&Je!==27&&Je!==6)&&(tt=null)):(ie=null,tt=J),ie!==tt)){if(Je=up,he="onMouseLeave",W="onMouseEnter",k="mouse",(t==="pointerout"||t==="pointerover")&&(Je=fp,he="onPointerLeave",W="onPointerEnter",k="pointer"),It=ie==null?ne:er(ie),K=tt==null?ne:er(tt),ne=new Je(he,k+"leave",ie,a,ce),ne.target=It,ne.relatedTarget=K,he=null,Li(ce)===J&&(Je=new Je(W,k+"enter",tt,a,ce),Je.target=K,Je.relatedTarget=It,he=Je),It=he,ie&&tt)t:{for(Je=ie,W=tt,k=0,K=Je;K;K=os(K))k++;for(K=0,he=W;he;he=os(he))K++;for(;0<k-K;)Je=os(Je),k--;for(;0<K-k;)W=os(W),K--;for(;k--;){if(Je===W||W!==null&&Je===W.alternate)break t;Je=os(Je),W=os(W)}Je=null}else Je=null;ie!==null&&e_(ge,ne,ie,Je,!1),tt!==null&&It!==null&&e_(ge,It,tt,Je,!0)}}e:{if(ne=J?er(J):window,ie=ne.nodeName&&ne.nodeName.toLowerCase(),ie==="select"||ie==="input"&&ne.type==="file")var He=xp;else if(_p(ne))if(Sp)He=bx;else{He=Ex;var dt=Mx}else ie=ne.nodeName,!ie||ie.toLowerCase()!=="input"||ne.type!=="checkbox"&&ne.type!=="radio"?J&&nc(J.elementType)&&(He=xp):He=Tx;if(He&&(He=He(t,J))){vp(ge,He,a,ce);break e}dt&&dt(t,ne,J),t==="focusout"&&J&&ne.type==="number"&&J.memoizedProps.value!=null&&An(ne,"number",ne.value)}switch(dt=J?er(J):window,t){case"focusin":(_p(dt)||dt.contentEditable==="true")&&(Br=dt,gc=J,Zs=null);break;case"focusout":Zs=gc=Br=null;break;case"mousedown":_c=!0;break;case"contextmenu":case"mouseup":case"dragend":_c=!1,Cp(ge,a,ce);break;case"selectionchange":if(Rx)break;case"keydown":case"keyup":Cp(ge,a,ce)}var We;if(hc)e:{switch(t){case"compositionstart":var et="onCompositionStart";break e;case"compositionend":et="onCompositionEnd";break e;case"compositionupdate":et="onCompositionUpdate";break e}et=void 0}else zr?mp(t,a)&&(et="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(et="onCompositionStart");et&&(hp&&a.locale!=="ko"&&(zr||et!=="onCompositionStart"?et==="onCompositionEnd"&&zr&&(We=op()):(Sa=ce,oc="value"in Sa?Sa.value:Sa.textContent,zr=!0)),dt=Ql(J,et),0<dt.length&&(et=new cp(et,t,null,a,ce),ge.push({event:et,listeners:dt}),We?et.data=We:(We=gp(a),We!==null&&(et.data=We)))),(We=_x?vx(t,a):xx(t,a))&&(et=Ql(J,"onBeforeInput"),0<et.length&&(dt=new cp("onBeforeInput","beforeinput",null,a,ce),ge.push({event:dt,listeners:et}),dt.data=We)),uS(ge,t,J,a,ce)}Jg(ge,n)})}function To(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Ql(t,n){for(var a=n+"Capture",o=[];t!==null;){var c=t,h=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||h===null||(c=Gs(t,a),c!=null&&o.unshift(To(t,c,h)),c=Gs(t,n),c!=null&&o.push(To(t,c,h))),t.tag===3)return o;t=t.return}return[]}function os(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function e_(t,n,a,o,c){for(var h=n._reactName,M=[];a!==null&&a!==o;){var b=a,z=b.alternate,J=b.stateNode;if(b=b.tag,z!==null&&z===o)break;b!==5&&b!==26&&b!==27||J===null||(z=J,c?(J=Gs(a,h),J!=null&&M.unshift(To(a,J,z))):c||(J=Gs(a,h),J!=null&&M.push(To(a,J,z)))),a=a.return}M.length!==0&&t.push({event:n,listeners:M})}var dS=/\r\n?/g,pS=/\u0000|\uFFFD/g;function t_(t){return(typeof t=="string"?t:""+t).replace(dS,`
`).replace(pS,"")}function n_(t,n){return n=t_(n),t_(t)===n}function Jl(){}function Bt(t,n,a,o,c,h){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||yi(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&yi(t,""+o);break;case"className":De(t,"class",o);break;case"tabIndex":De(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":De(t,a,o);break;case"style":ap(t,o,h);break;case"data":if(n!=="object"){De(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=sl(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&Bt(t,n,"name",c.name,c,null),Bt(t,n,"formEncType",c.formEncType,c,null),Bt(t,n,"formMethod",c.formMethod,c,null),Bt(t,n,"formTarget",c.formTarget,c,null)):(Bt(t,n,"encType",c.encType,c,null),Bt(t,n,"method",c.method,c,null),Bt(t,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=sl(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=Jl);break;case"onScroll":o!=null&&gt("scroll",t);break;case"onScrollEnd":o!=null&&gt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=sl(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":gt("beforetoggle",t),gt("toggle",t),be(t,"popover",o);break;case"xlinkActuate":Pe(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Pe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Pe(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Pe(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Pe(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Pe(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Pe(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Pe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Pe(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":be(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=X0.get(a)||a,be(t,a,o))}}function Gf(t,n,a,o,c,h){switch(a){case"style":ap(t,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof o=="string"?yi(t,o):(typeof o=="number"||typeof o=="bigint")&&yi(t,""+o);break;case"onScroll":o!=null&&gt("scroll",t);break;case"onScrollEnd":o!=null&&gt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Jl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!rl.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),h=t[Sn]||null,h=h!=null?h[a]:null,typeof h=="function"&&t.removeEventListener(n,h,c),typeof o=="function")){typeof h!="function"&&h!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,c);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):be(t,a,o)}}}function Tn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":gt("error",t),gt("load",t);var o=!1,c=!1,h;for(h in a)if(a.hasOwnProperty(h)){var M=a[h];if(M!=null)switch(h){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Bt(t,n,h,M,a,null)}}c&&Bt(t,n,"srcSet",a.srcSet,a,null),o&&Bt(t,n,"src",a.src,a,null);return;case"input":gt("invalid",t);var b=h=M=c=null,z=null,J=null;for(o in a)if(a.hasOwnProperty(o)){var ce=a[o];if(ce!=null)switch(o){case"name":c=ce;break;case"type":M=ce;break;case"checked":z=ce;break;case"defaultChecked":J=ce;break;case"value":h=ce;break;case"defaultValue":b=ce;break;case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(r(137,n));break;default:Bt(t,n,o,ce,a,null)}}Ht(t,h,b,z,J,M,c,!1),jt(t);return;case"select":gt("invalid",t),o=M=h=null;for(c in a)if(a.hasOwnProperty(c)&&(b=a[c],b!=null))switch(c){case"value":h=b;break;case"defaultValue":M=b;break;case"multiple":o=b;default:Bt(t,n,c,b,a,null)}n=h,a=M,t.multiple=!!o,n!=null?ln(t,!!o,n,!1):a!=null&&ln(t,!!o,a,!0);return;case"textarea":gt("invalid",t),h=c=o=null;for(M in a)if(a.hasOwnProperty(M)&&(b=a[M],b!=null))switch(M){case"value":o=b;break;case"defaultValue":c=b;break;case"children":h=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(r(91));break;default:Bt(t,n,M,b,a,null)}yn(t,o,c,h),jt(t);return;case"option":for(z in a)if(a.hasOwnProperty(z)&&(o=a[z],o!=null))switch(z){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Bt(t,n,z,o,a,null)}return;case"dialog":gt("beforetoggle",t),gt("toggle",t),gt("cancel",t),gt("close",t);break;case"iframe":case"object":gt("load",t);break;case"video":case"audio":for(o=0;o<Eo.length;o++)gt(Eo[o],t);break;case"image":gt("error",t),gt("load",t);break;case"details":gt("toggle",t);break;case"embed":case"source":case"link":gt("error",t),gt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(o=a[J],o!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Bt(t,n,J,o,a,null)}return;default:if(nc(n)){for(ce in a)a.hasOwnProperty(ce)&&(o=a[ce],o!==void 0&&Gf(t,n,ce,o,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(o=a[b],o!=null&&Bt(t,n,b,o,a,null))}function mS(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,h=null,M=null,b=null,z=null,J=null,ce=null;for(ie in a){var ge=a[ie];if(a.hasOwnProperty(ie)&&ge!=null)switch(ie){case"checked":break;case"value":break;case"defaultValue":z=ge;default:o.hasOwnProperty(ie)||Bt(t,n,ie,null,o,ge)}}for(var ne in o){var ie=o[ne];if(ge=a[ne],o.hasOwnProperty(ne)&&(ie!=null||ge!=null))switch(ne){case"type":h=ie;break;case"name":c=ie;break;case"checked":J=ie;break;case"defaultChecked":ce=ie;break;case"value":M=ie;break;case"defaultValue":b=ie;break;case"children":case"dangerouslySetInnerHTML":if(ie!=null)throw Error(r(137,n));break;default:ie!==ge&&Bt(t,n,ne,ie,o,ge)}}Oi(t,M,b,z,J,ce,h,c);return;case"select":ie=M=b=ne=null;for(h in a)if(z=a[h],a.hasOwnProperty(h)&&z!=null)switch(h){case"value":break;case"multiple":ie=z;default:o.hasOwnProperty(h)||Bt(t,n,h,null,o,z)}for(c in o)if(h=o[c],z=a[c],o.hasOwnProperty(c)&&(h!=null||z!=null))switch(c){case"value":ne=h;break;case"defaultValue":b=h;break;case"multiple":M=h;default:h!==z&&Bt(t,n,c,h,o,z)}n=b,a=M,o=ie,ne!=null?ln(t,!!a,ne,!1):!!o!=!!a&&(n!=null?ln(t,!!a,n,!0):ln(t,!!a,a?[]:"",!1));return;case"textarea":ie=ne=null;for(b in a)if(c=a[b],a.hasOwnProperty(b)&&c!=null&&!o.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Bt(t,n,b,null,o,c)}for(M in o)if(c=o[M],h=a[M],o.hasOwnProperty(M)&&(c!=null||h!=null))switch(M){case"value":ne=c;break;case"defaultValue":ie=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==h&&Bt(t,n,M,c,o,h)}pn(t,ne,ie);return;case"option":for(var tt in a)if(ne=a[tt],a.hasOwnProperty(tt)&&ne!=null&&!o.hasOwnProperty(tt))switch(tt){case"selected":t.selected=!1;break;default:Bt(t,n,tt,null,o,ne)}for(z in o)if(ne=o[z],ie=a[z],o.hasOwnProperty(z)&&ne!==ie&&(ne!=null||ie!=null))switch(z){case"selected":t.selected=ne&&typeof ne!="function"&&typeof ne!="symbol";break;default:Bt(t,n,z,ne,o,ie)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Je in a)ne=a[Je],a.hasOwnProperty(Je)&&ne!=null&&!o.hasOwnProperty(Je)&&Bt(t,n,Je,null,o,ne);for(J in o)if(ne=o[J],ie=a[J],o.hasOwnProperty(J)&&ne!==ie&&(ne!=null||ie!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(ne!=null)throw Error(r(137,n));break;default:Bt(t,n,J,ne,o,ie)}return;default:if(nc(n)){for(var It in a)ne=a[It],a.hasOwnProperty(It)&&ne!==void 0&&!o.hasOwnProperty(It)&&Gf(t,n,It,void 0,o,ne);for(ce in o)ne=o[ce],ie=a[ce],!o.hasOwnProperty(ce)||ne===ie||ne===void 0&&ie===void 0||Gf(t,n,ce,ne,o,ie);return}}for(var W in a)ne=a[W],a.hasOwnProperty(W)&&ne!=null&&!o.hasOwnProperty(W)&&Bt(t,n,W,null,o,ne);for(ge in o)ne=o[ge],ie=a[ge],!o.hasOwnProperty(ge)||ne===ie||ne==null&&ie==null||Bt(t,n,ge,ne,o,ie)}var Vf=null,kf=null;function $l(t){return t.nodeType===9?t:t.ownerDocument}function i_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function a_(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Xf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Wf=null;function gS(){var t=window.event;return t&&t.type==="popstate"?t===Wf?!1:(Wf=t,!0):(Wf=null,!1)}var r_=typeof setTimeout=="function"?setTimeout:void 0,_S=typeof clearTimeout=="function"?clearTimeout:void 0,s_=typeof Promise=="function"?Promise:void 0,vS=typeof queueMicrotask=="function"?queueMicrotask:typeof s_<"u"?function(t){return s_.resolve(null).then(t).catch(xS)}:r_;function xS(t){setTimeout(function(){throw t})}function za(t){return t==="head"}function o_(t,n){var a=n,o=0,c=0;do{var h=a.nextSibling;if(t.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(0<o&&8>o){a=o;var M=t.ownerDocument;if(a&1&&bo(M.documentElement),a&2&&bo(M.body),a&4)for(a=M.head,bo(a),M=a.firstChild;M;){var b=M.nextSibling,z=M.nodeName;M[ga]||z==="SCRIPT"||z==="STYLE"||z==="LINK"&&M.rel.toLowerCase()==="stylesheet"||a.removeChild(M),M=b}}if(c===0){t.removeChild(h),No(n);return}c--}else a==="$"||a==="$?"||a==="$!"?c++:o=a.charCodeAt(0)-48;else o=0;a=h}while(a);No(n)}function qf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":qf(a),_a(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function SS(t,n,a,o){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[ga])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(h=t.getAttribute("rel"),h==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(h!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(h=t.getAttribute("src"),(h!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&h&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var h=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===h)return t}else return t;if(t=hi(t.nextSibling),t===null)break}return null}function yS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=hi(t.nextSibling),t===null))return null;return t}function Yf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function MS(t,n){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function hi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var jf=null;function l_(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function u_(t,n,a){switch(n=$l(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function bo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);_a(t)}var si=new Map,c_=new Set;function eu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ki=Z.d;Z.d={f:ES,r:TS,D:bS,C:AS,L:RS,m:CS,X:DS,S:wS,M:US};function ES(){var t=Ki.f(),n=Wl();return t||n}function TS(t){var n=Ni(t);n!==null&&n.tag===5&&n.type==="form"?Dm(n):Ki.r(t)}var ls=typeof document>"u"?null:document;function f_(t,n,a){var o=ls;if(o&&typeof n=="string"&&n){var c=kt(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),c_.has(c)||(c_.add(c),t={rel:t,crossOrigin:a,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),Tn(n,"link",t),tn(n),o.head.appendChild(n)))}}function bS(t){Ki.D(t),f_("dns-prefetch",t,null)}function AS(t,n){Ki.C(t,n),f_("preconnect",t,n)}function RS(t,n,a){Ki.L(t,n,a);var o=ls;if(o&&t&&n){var c='link[rel="preload"][as="'+kt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+kt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+kt(a.imageSizes)+'"]')):c+='[href="'+kt(t)+'"]';var h=c;switch(n){case"style":h=us(t);break;case"script":h=cs(t)}si.has(h)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),si.set(h,t),o.querySelector(c)!==null||n==="style"&&o.querySelector(Ao(h))||n==="script"&&o.querySelector(Ro(h))||(n=o.createElement("link"),Tn(n,"link",t),tn(n),o.head.appendChild(n)))}}function CS(t,n){Ki.m(t,n);var a=ls;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+kt(o)+'"][href="'+kt(t)+'"]',h=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=cs(t)}if(!si.has(h)&&(t=g({rel:"modulepreload",href:t},n),si.set(h,t),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ro(h)))return}o=a.createElement("link"),Tn(o,"link",t),tn(o),a.head.appendChild(o)}}}function wS(t,n,a){Ki.S(t,n,a);var o=ls;if(o&&t){var c=va(o).hoistableStyles,h=us(t);n=n||"default";var M=c.get(h);if(!M){var b={loading:0,preload:null};if(M=o.querySelector(Ao(h)))b.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=si.get(h))&&Zf(t,a);var z=M=o.createElement("link");tn(z),Tn(z,"link",t),z._p=new Promise(function(J,ce){z.onload=J,z.onerror=ce}),z.addEventListener("load",function(){b.loading|=1}),z.addEventListener("error",function(){b.loading|=2}),b.loading|=4,tu(M,n,o)}M={type:"stylesheet",instance:M,count:1,state:b},c.set(h,M)}}}function DS(t,n){Ki.X(t,n);var a=ls;if(a&&t){var o=va(a).hoistableScripts,c=cs(t),h=o.get(c);h||(h=a.querySelector(Ro(c)),h||(t=g({src:t,async:!0},n),(n=si.get(c))&&Kf(t,n),h=a.createElement("script"),tn(h),Tn(h,"link",t),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(c,h))}}function US(t,n){Ki.M(t,n);var a=ls;if(a&&t){var o=va(a).hoistableScripts,c=cs(t),h=o.get(c);h||(h=a.querySelector(Ro(c)),h||(t=g({src:t,async:!0,type:"module"},n),(n=si.get(c))&&Kf(t,n),h=a.createElement("script"),tn(h),Tn(h,"link",t),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(c,h))}}function h_(t,n,a,o){var c=(c=Me.current)?eu(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=us(a.href),a=va(c).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=us(a.href);var h=va(c).hoistableStyles,M=h.get(t);if(M||(c=c.ownerDocument||c,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(t,M),(h=c.querySelector(Ao(t)))&&!h._p&&(M.instance=h,M.state.loading=5),si.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},si.set(t,a),h||LS(c,t,a,M.state))),n&&o===null)throw Error(r(528,""));return M}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=cs(a),a=va(c).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function us(t){return'href="'+kt(t)+'"'}function Ao(t){return'link[rel="stylesheet"]['+t+"]"}function d_(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function LS(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Tn(n,"link",a),tn(n),t.head.appendChild(n))}function cs(t){return'[src="'+kt(t)+'"]'}function Ro(t){return"script[async]"+t}function p_(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+kt(a.href)+'"]');if(o)return n.instance=o,tn(o),o;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),tn(o),Tn(o,"style",c),tu(o,a.precedence,t),n.instance=o;case"stylesheet":c=us(a.href);var h=t.querySelector(Ao(c));if(h)return n.state.loading|=4,n.instance=h,tn(h),h;o=d_(a),(c=si.get(c))&&Zf(o,c),h=(t.ownerDocument||t).createElement("link"),tn(h);var M=h;return M._p=new Promise(function(b,z){M.onload=b,M.onerror=z}),Tn(h,"link",o),n.state.loading|=4,tu(h,a.precedence,t),n.instance=h;case"script":return h=cs(a.src),(c=t.querySelector(Ro(h)))?(n.instance=c,tn(c),c):(o=a,(c=si.get(h))&&(o=g({},a),Kf(o,c)),t=t.ownerDocument||t,c=t.createElement("script"),tn(c),Tn(c,"link",o),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,tu(o,a.precedence,t));return n.instance}function tu(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,h=c,M=0;M<o.length;M++){var b=o[M];if(b.dataset.precedence===n)h=b;else if(h!==c)break}h?h.parentNode.insertBefore(t,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Zf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Kf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var nu=null;function m_(t,n,a){if(nu===null){var o=new Map,c=nu=new Map;c.set(a,o)}else c=nu,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var h=a[c];if(!(h[ga]||h[on]||t==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var M=h.getAttribute(n)||"";M=t+M;var b=o.get(M);b?b.push(h):o.set(M,[h])}}return o}function g_(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function NS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function __(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Co=null;function PS(){}function OS(t,n,a){if(Co===null)throw Error(r(475));var o=Co;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=us(a.href),h=t.querySelector(Ao(c));if(h){t=h._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(o.count++,o=iu.bind(o),t.then(o,o)),n.state.loading|=4,n.instance=h,tn(h);return}h=t.ownerDocument||t,a=d_(a),(c=si.get(c))&&Zf(a,c),h=h.createElement("link"),tn(h);var M=h;M._p=new Promise(function(b,z){M.onload=b,M.onerror=z}),Tn(h,"link",a),n.instance=h}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=iu.bind(o),t.addEventListener("load",n),t.addEventListener("error",n))}}function zS(){if(Co===null)throw Error(r(475));var t=Co;return t.stylesheets&&t.count===0&&Qf(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&Qf(t,t.stylesheets),t.unsuspend){var o=t.unsuspend;t.unsuspend=null,o()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function iu(){if(this.count--,this.count===0){if(this.stylesheets)Qf(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var au=null;function Qf(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,au=new Map,n.forEach(BS,t),au=null,iu.call(t))}function BS(t,n){if(!(n.state.loading&4)){var a=au.get(t);if(a)var o=a.get(null);else{a=new Map,au.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<c.length;h++){var M=c[h];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(a.set(M.dataset.precedence,M),o=M)}o&&a.set(null,o)}c=n.instance,M=c.getAttribute("data-precedence"),h=a.get(M)||o,h===o&&a.set(null,c),a.set(M,c),this.count++,o=iu.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),h?h.parentNode.insertBefore(c,h.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var wo={$$typeof:L,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function IS(t,n,a,o,c,h,M,b){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Te(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Te(0),this.hiddenUpdates=Te(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=h,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function v_(t,n,a,o,c,h,M,b,z,J,ce,ge){return t=new IS(t,n,a,M,b,z,J,ge),n=1,h===!0&&(n|=24),h=Wn(3,null,null,n),t.current=h,h.stateNode=t,n=Uc(),n.refCount++,t.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},Oc(h),t}function x_(t){return t?(t=Gr,t):Gr}function S_(t,n,a,o,c,h){c=x_(c),o.context===null?o.context=c:o.pendingContext=c,o=Ea(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=Ta(t,o,n),a!==null&&(Kn(a,t,n),ao(a,t,n))}function y_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Jf(t,n){y_(t,n),(t=t.alternate)&&y_(t,n)}function M_(t){if(t.tag===13){var n=Hr(t,67108864);n!==null&&Kn(n,t,67108864),Jf(t,67108864)}}var ru=!0;function FS(t,n,a,o){var c=B.T;B.T=null;var h=Z.p;try{Z.p=2,$f(t,n,a,o)}finally{Z.p=h,B.T=c}}function HS(t,n,a,o){var c=B.T;B.T=null;var h=Z.p;try{Z.p=8,$f(t,n,a,o)}finally{Z.p=h,B.T=c}}function $f(t,n,a,o){if(ru){var c=eh(o);if(c===null)Hf(t,n,o,su,a),T_(t,o);else if(VS(c,t,n,a,o))o.stopPropagation();else if(T_(t,o),n&4&&-1<GS.indexOf(t)){for(;c!==null;){var h=Ni(c);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var M=qe(h.pendingLanes);if(M!==0){var b=h;for(b.pendingLanes|=2,b.entangledLanes|=2;M;){var z=1<<31-Oe(M);b.entanglements[1]|=z,M&=~z}Ai(h),(Lt&6)===0&&(kl=pt()+500,Mo(0))}}break;case 13:b=Hr(h,2),b!==null&&Kn(b,h,2),Wl(),Jf(h,2)}if(h=eh(o),h===null&&Hf(t,n,o,su,a),h===c)break;c=h}c!==null&&o.stopPropagation()}else Hf(t,n,o,null,a)}}function eh(t){return t=ac(t),th(t)}var su=null;function th(t){if(su=null,t=Li(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=f(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return su=t,null}function E_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ve()){case vt:return 2;case je:return 8;case at:case Qt:return 32;case P:return 268435456;default:return 32}default:return 32}}var nh=!1,Ba=null,Ia=null,Fa=null,Do=new Map,Uo=new Map,Ha=[],GS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function T_(t,n){switch(t){case"focusin":case"focusout":Ba=null;break;case"dragenter":case"dragleave":Ia=null;break;case"mouseover":case"mouseout":Fa=null;break;case"pointerover":case"pointerout":Do.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Uo.delete(n.pointerId)}}function Lo(t,n,a,o,c,h){return t===null||t.nativeEvent!==h?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[c]},n!==null&&(n=Ni(n),n!==null&&M_(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function VS(t,n,a,o,c){switch(n){case"focusin":return Ba=Lo(Ba,t,n,a,o,c),!0;case"dragenter":return Ia=Lo(Ia,t,n,a,o,c),!0;case"mouseover":return Fa=Lo(Fa,t,n,a,o,c),!0;case"pointerover":var h=c.pointerId;return Do.set(h,Lo(Do.get(h)||null,t,n,a,o,c)),!0;case"gotpointercapture":return h=c.pointerId,Uo.set(h,Lo(Uo.get(h)||null,t,n,a,o,c)),!0}return!1}function b_(t){var n=Li(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){t.blockedOn=n,kn(t.priority,function(){if(a.tag===13){var o=Zn();o=nt(o);var c=Hr(a,o);c!==null&&Kn(c,a,o),Jf(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ou(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=eh(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);ic=o,a.target.dispatchEvent(o),ic=null}else return n=Ni(a),n!==null&&M_(n),t.blockedOn=a,!1;n.shift()}return!0}function A_(t,n,a){ou(t)&&a.delete(n)}function kS(){nh=!1,Ba!==null&&ou(Ba)&&(Ba=null),Ia!==null&&ou(Ia)&&(Ia=null),Fa!==null&&ou(Fa)&&(Fa=null),Do.forEach(A_),Uo.forEach(A_)}function lu(t,n){t.blockedOn===n&&(t.blockedOn=null,nh||(nh=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,kS)))}var uu=null;function R_(t){uu!==t&&(uu=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){uu===t&&(uu=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],c=t[n+2];if(typeof o!="function"){if(th(o||a)===null)continue;break}var h=Ni(a);h!==null&&(t.splice(n,3),n-=3,ef(h,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function No(t){function n(z){return lu(z,t)}Ba!==null&&lu(Ba,t),Ia!==null&&lu(Ia,t),Fa!==null&&lu(Fa,t),Do.forEach(n),Uo.forEach(n);for(var a=0;a<Ha.length;a++){var o=Ha[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Ha.length&&(a=Ha[0],a.blockedOn===null);)b_(a),a.blockedOn===null&&Ha.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],h=a[o+1],M=c[Sn]||null;if(typeof h=="function")M||R_(a);else if(M){var b=null;if(h&&h.hasAttribute("formAction")){if(c=h,M=h[Sn]||null)b=M.formAction;else if(th(c)!==null)continue}else b=M.action;typeof b=="function"?a[o+1]=b:(a.splice(o,3),o-=3),R_(a)}}}function ih(t){this._internalRoot=t}cu.prototype.render=ih.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=Zn();S_(a,o,t,n,null,null)},cu.prototype.unmount=ih.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;S_(t.current,2,null,t,null,null),Wl(),n[On]=null}};function cu(t){this._internalRoot=t}cu.prototype.unstable_scheduleHydration=function(t){if(t){var n=At();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ha.length&&n!==0&&n<Ha[a].priority;a++);Ha.splice(a,0,t),a===0&&b_(t)}};var C_=e.version;if(C_!=="19.1.0")throw Error(r(527,C_,"19.1.0"));Z.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=m(n),t=t!==null?p(t):null,t=t===null?null:t.stateNode,t};var XS={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fu.isDisabled&&fu.supportsFiber)try{fe=fu.inject(XS),pe=fu}catch{}}return Oo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,o="",c=Xm,h=Wm,M=qm,b=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(M=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(b=n.unstable_transitionCallbacks)),n=v_(t,1,!1,null,null,a,o,c,h,M,b,null),t[On]=n.current,Ff(t),new ih(n)},Oo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var o=!1,c="",h=Xm,M=Wm,b=qm,z=null,J=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(M=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(z=a.unstable_transitionCallbacks),a.formState!==void 0&&(J=a.formState)),n=v_(t,1,!0,n,a??null,o,c,h,M,b,z,J),n.context=x_(null),a=n.current,o=Zn(),o=nt(o),c=Ea(o),c.callback=null,Ta(a,c,o),a=o,n.current.lanes=a,Be(n,a),Ai(n),t[On]=n.current,Ff(t),new cu(n)},Oo.version="19.1.0",Oo}var I_;function ey(){if(I_)return sh.exports;I_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),sh.exports=$S(),sh.exports}var ty=ey(),zo={},F_;function ny(){if(F_)return zo;F_=1,Object.defineProperty(zo,"__esModule",{value:!0}),zo.parse=f,zo.serialize=p;const s=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,i=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,r=/^[\u0020-\u003A\u003D-\u007E]*$/,l=Object.prototype.toString,u=(()=>{const v=function(){};return v.prototype=Object.create(null),v})();function f(v,S){const E=new u,A=v.length;if(A<2)return E;const y=(S==null?void 0:S.decode)||g;let x=0;do{const D=v.indexOf("=",x);if(D===-1)break;const L=v.indexOf(";",x),w=L===-1?A:L;if(D>w){x=v.lastIndexOf(";",D-1)+1;continue}const I=d(v,x,D),F=m(v,D,I),O=v.slice(I,F);if(E[O]===void 0){let V=d(v,D+1,w),U=m(v,w,V);const R=y(v.slice(V,U));E[O]=R}x=w+1}while(x<A);return E}function d(v,S,E){do{const A=v.charCodeAt(S);if(A!==32&&A!==9)return S}while(++S<E);return E}function m(v,S,E){for(;S>E;){const A=v.charCodeAt(--S);if(A!==32&&A!==9)return S+1}return E}function p(v,S,E){const A=(E==null?void 0:E.encode)||encodeURIComponent;if(!s.test(v))throw new TypeError(`argument name is invalid: ${v}`);const y=A(S);if(!e.test(y))throw new TypeError(`argument val is invalid: ${S}`);let x=v+"="+y;if(!E)return x;if(E.maxAge!==void 0){if(!Number.isInteger(E.maxAge))throw new TypeError(`option maxAge is invalid: ${E.maxAge}`);x+="; Max-Age="+E.maxAge}if(E.domain){if(!i.test(E.domain))throw new TypeError(`option domain is invalid: ${E.domain}`);x+="; Domain="+E.domain}if(E.path){if(!r.test(E.path))throw new TypeError(`option path is invalid: ${E.path}`);x+="; Path="+E.path}if(E.expires){if(!_(E.expires)||!Number.isFinite(E.expires.valueOf()))throw new TypeError(`option expires is invalid: ${E.expires}`);x+="; Expires="+E.expires.toUTCString()}if(E.httpOnly&&(x+="; HttpOnly"),E.secure&&(x+="; Secure"),E.partitioned&&(x+="; Partitioned"),E.priority)switch(typeof E.priority=="string"?E.priority.toLowerCase():void 0){case"low":x+="; Priority=Low";break;case"medium":x+="; Priority=Medium";break;case"high":x+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${E.priority}`)}if(E.sameSite)switch(typeof E.sameSite=="string"?E.sameSite.toLowerCase():E.sameSite){case!0:case"strict":x+="; SameSite=Strict";break;case"lax":x+="; SameSite=Lax";break;case"none":x+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${E.sameSite}`)}return x}function g(v){if(v.indexOf("%")===-1)return v;try{return decodeURIComponent(v)}catch{return v}}function _(v){return l.call(v)==="[object Date]"}return zo}ny();var H_="popstate";function iy(s={}){function e(r,l){let{pathname:u,search:f,hash:d}=r.location;return Xh("",{pathname:u,search:f,hash:d},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function i(r,l){return typeof l=="string"?l:Xo(l)}return ry(e,i,null,s)}function Yt(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function Di(s,e){if(!s){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function ay(){return Math.random().toString(36).substring(2,10)}function G_(s,e){return{usr:s.state,key:s.key,idx:e}}function Xh(s,e,i=null,r){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof e=="string"?Os(e):e,state:i,key:e&&e.key||r||ay()}}function Xo({pathname:s="/",search:e="",hash:i=""}){return e&&e!=="?"&&(s+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(s+=i.charAt(0)==="#"?i:"#"+i),s}function Os(s){let e={};if(s){let i=s.indexOf("#");i>=0&&(e.hash=s.substring(i),s=s.substring(0,i));let r=s.indexOf("?");r>=0&&(e.search=s.substring(r),s=s.substring(0,r)),s&&(e.pathname=s)}return e}function ry(s,e,i,r={}){let{window:l=document.defaultView,v5Compat:u=!1}=r,f=l.history,d="POP",m=null,p=g();p==null&&(p=0,f.replaceState({...f.state,idx:p},""));function g(){return(f.state||{idx:null}).idx}function _(){d="POP";let y=g(),x=y==null?null:y-p;p=y,m&&m({action:d,location:A.location,delta:x})}function v(y,x){d="PUSH";let D=Xh(A.location,y,x);p=g()+1;let L=G_(D,p),w=A.createHref(D);try{f.pushState(L,"",w)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;l.location.assign(w)}u&&m&&m({action:d,location:A.location,delta:1})}function S(y,x){d="REPLACE";let D=Xh(A.location,y,x);p=g();let L=G_(D,p),w=A.createHref(D);f.replaceState(L,"",w),u&&m&&m({action:d,location:A.location,delta:0})}function E(y){return sy(y)}let A={get action(){return d},get location(){return s(l,f)},listen(y){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(H_,_),m=y,()=>{l.removeEventListener(H_,_),m=null}},createHref(y){return e(l,y)},createURL:E,encodeLocation(y){let x=E(y);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:v,replace:S,go(y){return f.go(y)}};return A}function sy(s,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Yt(i,"No window.location.(origin|href) available to create URL");let r=typeof s=="string"?s:Xo(s);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=i+r),new URL(r,i)}function kv(s,e,i="/"){return oy(s,e,i,!1)}function oy(s,e,i,r){let l=typeof e=="string"?Os(e):e,u=fa(l.pathname||"/",i);if(u==null)return null;let f=Xv(s);ly(f);let d=null;for(let m=0;d==null&&m<f.length;++m){let p=xy(u);d=_y(f[m],p,r)}return d}function Xv(s,e=[],i=[],r=""){let l=(u,f,d)=>{let m={relativePath:d===void 0?u.path||"":d,caseSensitive:u.caseSensitive===!0,childrenIndex:f,route:u};m.relativePath.startsWith("/")&&(Yt(m.relativePath.startsWith(r),`Absolute route path "${m.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(r.length));let p=oa([r,m.relativePath]),g=i.concat(m);u.children&&u.children.length>0&&(Yt(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),Xv(u.children,e,g,p)),!(u.path==null&&!u.index)&&e.push({path:p,score:my(p,u.index),routesMeta:g})};return s.forEach((u,f)=>{var d;if(u.path===""||!((d=u.path)!=null&&d.includes("?")))l(u,f);else for(let m of Wv(u.path))l(u,f,m)}),e}function Wv(s){let e=s.split("/");if(e.length===0)return[];let[i,...r]=e,l=i.endsWith("?"),u=i.replace(/\?$/,"");if(r.length===0)return l?[u,""]:[u];let f=Wv(r.join("/")),d=[];return d.push(...f.map(m=>m===""?u:[u,m].join("/"))),l&&d.push(...f),d.map(m=>s.startsWith("/")&&m===""?"/":m)}function ly(s){s.sort((e,i)=>e.score!==i.score?i.score-e.score:gy(e.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var uy=/^:[\w-]+$/,cy=3,fy=2,hy=1,dy=10,py=-2,V_=s=>s==="*";function my(s,e){let i=s.split("/"),r=i.length;return i.some(V_)&&(r+=py),e&&(r+=fy),i.filter(l=>!V_(l)).reduce((l,u)=>l+(uy.test(u)?cy:u===""?hy:dy),r)}function gy(s,e){return s.length===e.length&&s.slice(0,-1).every((r,l)=>r===e[l])?s[s.length-1]-e[e.length-1]:0}function _y(s,e,i=!1){let{routesMeta:r}=s,l={},u="/",f=[];for(let d=0;d<r.length;++d){let m=r[d],p=d===r.length-1,g=u==="/"?e:e.slice(u.length)||"/",_=qu({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},g),v=m.route;if(!_&&p&&i&&!r[r.length-1].route.index&&(_=qu({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},g)),!_)return null;Object.assign(l,_.params),f.push({params:l,pathname:oa([u,_.pathname]),pathnameBase:Ey(oa([u,_.pathnameBase])),route:v}),_.pathnameBase!=="/"&&(u=oa([u,_.pathnameBase]))}return f}function qu(s,e){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,r]=vy(s.path,s.caseSensitive,s.end),l=e.match(i);if(!l)return null;let u=l[0],f=u.replace(/(.)\/+$/,"$1"),d=l.slice(1);return{params:r.reduce((p,{paramName:g,isOptional:_},v)=>{if(g==="*"){let E=d[v]||"";f=u.slice(0,u.length-E.length).replace(/(.)\/+$/,"$1")}const S=d[v];return _&&!S?p[g]=void 0:p[g]=(S||"").replace(/%2F/g,"/"),p},{}),pathname:u,pathnameBase:f,pattern:s}}function vy(s,e=!1,i=!0){Di(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let r=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,d,m)=>(r.push({paramName:d,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return s.endsWith("*")?(r.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),r]}function xy(s){try{return s.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Di(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),s}}function fa(s,e){if(e==="/")return s;if(!s.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,r=s.charAt(i);return r&&r!=="/"?null:s.slice(i)||"/"}function Sy(s,e="/"){let{pathname:i,search:r="",hash:l=""}=typeof s=="string"?Os(s):s;return{pathname:i?i.startsWith("/")?i:yy(i,e):e,search:Ty(r),hash:by(l)}}function yy(s,e){let i=e.replace(/\/+$/,"").split("/");return s.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function ch(s,e,i,r){return`Cannot include a '${s}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function My(s){return s.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function qv(s){let e=My(s);return e.map((i,r)=>r===e.length-1?i.pathname:i.pathnameBase)}function Yv(s,e,i,r=!1){let l;typeof s=="string"?l=Os(s):(l={...s},Yt(!l.pathname||!l.pathname.includes("?"),ch("?","pathname","search",l)),Yt(!l.pathname||!l.pathname.includes("#"),ch("#","pathname","hash",l)),Yt(!l.search||!l.search.includes("#"),ch("#","search","hash",l)));let u=s===""||l.pathname==="",f=u?"/":l.pathname,d;if(f==null)d=i;else{let _=e.length-1;if(!r&&f.startsWith("..")){let v=f.split("/");for(;v[0]==="..";)v.shift(),_-=1;l.pathname=v.join("/")}d=_>=0?e[_]:"/"}let m=Sy(l,d),p=f&&f!=="/"&&f.endsWith("/"),g=(u||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(p||g)&&(m.pathname+="/"),m}var oa=s=>s.join("/").replace(/\/\/+/g,"/"),Ey=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),Ty=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,by=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function Ay(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}var jv=["POST","PUT","PATCH","DELETE"];new Set(jv);var Ry=["GET",...jv];new Set(Ry);var zs=le.createContext(null);zs.displayName="DataRouter";var Ku=le.createContext(null);Ku.displayName="DataRouterState";var Zv=le.createContext({isTransitioning:!1});Zv.displayName="ViewTransition";var Cy=le.createContext(new Map);Cy.displayName="Fetchers";var wy=le.createContext(null);wy.displayName="Await";var Ui=le.createContext(null);Ui.displayName="Navigation";var Ko=le.createContext(null);Ko.displayName="Location";var pa=le.createContext({outlet:null,matches:[],isDataRoute:!1});pa.displayName="Route";var zd=le.createContext(null);zd.displayName="RouteError";function Dy(s,{relative:e}={}){Yt(Qo(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=le.useContext(Ui),{hash:l,pathname:u,search:f}=Jo(s,{relative:e}),d=u;return i!=="/"&&(d=u==="/"?i:oa([i,u])),r.createHref({pathname:d,search:f,hash:l})}function Qo(){return le.useContext(Ko)!=null}function Nr(){return Yt(Qo(),"useLocation() may be used only in the context of a <Router> component."),le.useContext(Ko).location}var Kv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Qv(s){le.useContext(Ui).static||le.useLayoutEffect(s)}function Uy(){let{isDataRoute:s}=le.useContext(pa);return s?Xy():Ly()}function Ly(){Yt(Qo(),"useNavigate() may be used only in the context of a <Router> component.");let s=le.useContext(zs),{basename:e,navigator:i}=le.useContext(Ui),{matches:r}=le.useContext(pa),{pathname:l}=Nr(),u=JSON.stringify(qv(r)),f=le.useRef(!1);return Qv(()=>{f.current=!0}),le.useCallback((m,p={})=>{if(Di(f.current,Kv),!f.current)return;if(typeof m=="number"){i.go(m);return}let g=Yv(m,JSON.parse(u),l,p.relative==="path");s==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:oa([e,g.pathname])),(p.replace?i.replace:i.push)(g,p.state,p)},[e,i,u,l,s])}le.createContext(null);function Jo(s,{relative:e}={}){let{matches:i}=le.useContext(pa),{pathname:r}=Nr(),l=JSON.stringify(qv(i));return le.useMemo(()=>Yv(s,JSON.parse(l),r,e==="path"),[s,l,r,e])}function Ny(s,e){return Jv(s,e)}function Jv(s,e,i,r){var x;Yt(Qo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l}=le.useContext(Ui),{matches:u}=le.useContext(pa),f=u[u.length-1],d=f?f.params:{},m=f?f.pathname:"/",p=f?f.pathnameBase:"/",g=f&&f.route;{let D=g&&g.path||"";$v(m,!g||D.endsWith("*")||D.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${D}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${D}"> to <Route path="${D==="/"?"*":`${D}/*`}">.`)}let _=Nr(),v;if(e){let D=typeof e=="string"?Os(e):e;Yt(p==="/"||((x=D.pathname)==null?void 0:x.startsWith(p)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${D.pathname}" was given in the \`location\` prop.`),v=D}else v=_;let S=v.pathname||"/",E=S;if(p!=="/"){let D=p.replace(/^\//,"").split("/");E="/"+S.replace(/^\//,"").split("/").slice(D.length).join("/")}let A=kv(s,{pathname:E});Di(g||A!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),Di(A==null||A[A.length-1].route.element!==void 0||A[A.length-1].route.Component!==void 0||A[A.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let y=Iy(A&&A.map(D=>Object.assign({},D,{params:Object.assign({},d,D.params),pathname:oa([p,l.encodeLocation?l.encodeLocation(D.pathname).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?p:oa([p,l.encodeLocation?l.encodeLocation(D.pathnameBase).pathname:D.pathnameBase])})),u,i,r);return e&&y?le.createElement(Ko.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...v},navigationType:"POP"}},y):y}function Py(){let s=ky(),e=Ay(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},u={padding:"2px 4px",backgroundColor:r},f=null;return console.error("Error handled by React Router default ErrorBoundary:",s),f=le.createElement(le.Fragment,null,le.createElement("p",null,"💿 Hey developer 👋"),le.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",le.createElement("code",{style:u},"ErrorBoundary")," or"," ",le.createElement("code",{style:u},"errorElement")," prop on your route.")),le.createElement(le.Fragment,null,le.createElement("h2",null,"Unexpected Application Error!"),le.createElement("h3",{style:{fontStyle:"italic"}},e),i?le.createElement("pre",{style:l},i):null,f)}var Oy=le.createElement(Py,null),zy=class extends le.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,e){return e.location!==s.location||e.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:e.error,location:e.location,revalidation:s.revalidation||e.revalidation}}componentDidCatch(s,e){console.error("React Router caught the following error during render",s,e)}render(){return this.state.error!==void 0?le.createElement(pa.Provider,{value:this.props.routeContext},le.createElement(zd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function By({routeContext:s,match:e,children:i}){let r=le.useContext(zs);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),le.createElement(pa.Provider,{value:s},i)}function Iy(s,e=[],i=null,r=null){if(s==null){if(!i)return null;if(i.errors)s=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)s=i.matches;else return null}let l=s,u=i==null?void 0:i.errors;if(u!=null){let m=l.findIndex(p=>p.route.id&&(u==null?void 0:u[p.route.id])!==void 0);Yt(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),l=l.slice(0,Math.min(l.length,m+1))}let f=!1,d=-1;if(i)for(let m=0;m<l.length;m++){let p=l[m];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(d=m),p.route.id){let{loaderData:g,errors:_}=i,v=p.route.loader&&!g.hasOwnProperty(p.route.id)&&(!_||_[p.route.id]===void 0);if(p.route.lazy||v){f=!0,d>=0?l=l.slice(0,d+1):l=[l[0]];break}}}return l.reduceRight((m,p,g)=>{let _,v=!1,S=null,E=null;i&&(_=u&&p.route.id?u[p.route.id]:void 0,S=p.route.errorElement||Oy,f&&(d<0&&g===0?($v("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),v=!0,E=null):d===g&&(v=!0,E=p.route.hydrateFallbackElement||null)));let A=e.concat(l.slice(0,g+1)),y=()=>{let x;return _?x=S:v?x=E:p.route.Component?x=le.createElement(p.route.Component,null):p.route.element?x=p.route.element:x=m,le.createElement(By,{match:p,routeContext:{outlet:m,matches:A,isDataRoute:i!=null},children:x})};return i&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?le.createElement(zy,{location:i.location,revalidation:i.revalidation,component:S,error:_,children:y(),routeContext:{outlet:null,matches:A,isDataRoute:!0}}):y()},null)}function Bd(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Fy(s){let e=le.useContext(zs);return Yt(e,Bd(s)),e}function Hy(s){let e=le.useContext(Ku);return Yt(e,Bd(s)),e}function Gy(s){let e=le.useContext(pa);return Yt(e,Bd(s)),e}function Id(s){let e=Gy(s),i=e.matches[e.matches.length-1];return Yt(i.route.id,`${s} can only be used on routes that contain a unique "id"`),i.route.id}function Vy(){return Id("useRouteId")}function ky(){var r;let s=le.useContext(zd),e=Hy("useRouteError"),i=Id("useRouteError");return s!==void 0?s:(r=e.errors)==null?void 0:r[i]}function Xy(){let{router:s}=Fy("useNavigate"),e=Id("useNavigate"),i=le.useRef(!1);return Qv(()=>{i.current=!0}),le.useCallback(async(l,u={})=>{Di(i.current,Kv),i.current&&(typeof l=="number"?s.navigate(l):await s.navigate(l,{fromRouteId:e,...u}))},[s,e])}var k_={};function $v(s,e,i){!e&&!k_[s]&&(k_[s]=!0,Di(!1,i))}le.memo(Wy);function Wy({routes:s,future:e,state:i}){return Jv(s,void 0,i,e)}function Wh(s){Yt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function qy({basename:s="/",children:e=null,location:i,navigationType:r="POP",navigator:l,static:u=!1}){Yt(!Qo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=s.replace(/^\/*/,"/"),d=le.useMemo(()=>({basename:f,navigator:l,static:u,future:{}}),[f,l,u]);typeof i=="string"&&(i=Os(i));let{pathname:m="/",search:p="",hash:g="",state:_=null,key:v="default"}=i,S=le.useMemo(()=>{let E=fa(m,f);return E==null?null:{location:{pathname:E,search:p,hash:g,state:_,key:v},navigationType:r}},[f,m,p,g,_,v,r]);return Di(S!=null,`<Router basename="${f}"> is not able to match the URL "${m}${p}${g}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:le.createElement(Ui.Provider,{value:d},le.createElement(Ko.Provider,{children:e,value:S}))}function Yy({children:s,location:e}){return Ny(qh(s),e)}function qh(s,e=[]){let i=[];return le.Children.forEach(s,(r,l)=>{if(!le.isValidElement(r))return;let u=[...e,l];if(r.type===le.Fragment){i.push.apply(i,qh(r.props.children,u));return}Yt(r.type===Wh,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Yt(!r.props.index||!r.props.children,"An index route cannot have child routes.");let f={id:r.props.id||u.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(f.children=qh(r.props.children,u)),i.push(f)}),i}var Bu="get",Iu="application/x-www-form-urlencoded";function Qu(s){return s!=null&&typeof s.tagName=="string"}function jy(s){return Qu(s)&&s.tagName.toLowerCase()==="button"}function Zy(s){return Qu(s)&&s.tagName.toLowerCase()==="form"}function Ky(s){return Qu(s)&&s.tagName.toLowerCase()==="input"}function Qy(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function Jy(s,e){return s.button===0&&(!e||e==="_self")&&!Qy(s)}var hu=null;function $y(){if(hu===null)try{new FormData(document.createElement("form"),0),hu=!1}catch{hu=!0}return hu}var eM=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function fh(s){return s!=null&&!eM.has(s)?(Di(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Iu}"`),null):s}function tM(s,e){let i,r,l,u,f;if(Zy(s)){let d=s.getAttribute("action");r=d?fa(d,e):null,i=s.getAttribute("method")||Bu,l=fh(s.getAttribute("enctype"))||Iu,u=new FormData(s)}else if(jy(s)||Ky(s)&&(s.type==="submit"||s.type==="image")){let d=s.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=s.getAttribute("formaction")||d.getAttribute("action");if(r=m?fa(m,e):null,i=s.getAttribute("formmethod")||d.getAttribute("method")||Bu,l=fh(s.getAttribute("formenctype"))||fh(d.getAttribute("enctype"))||Iu,u=new FormData(d,s),!$y()){let{name:p,type:g,value:_}=s;if(g==="image"){let v=p?`${p}.`:"";u.append(`${v}x`,"0"),u.append(`${v}y`,"0")}else p&&u.append(p,_)}}else{if(Qu(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Bu,r=null,l=Iu,f=s}return u&&l==="text/plain"&&(f=u,u=void 0),{action:r,method:i.toLowerCase(),encType:l,formData:u,body:f}}function Fd(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}async function nM(s,e){if(s.id in e)return e[s.id];try{let i=await import(s.module);return e[s.id]=i,i}catch(i){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function iM(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function aM(s,e,i){let r=await Promise.all(s.map(async l=>{let u=e.routes[l.route.id];if(u){let f=await nM(u,i);return f.links?f.links():[]}return[]}));return lM(r.flat(1).filter(iM).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function X_(s,e,i,r,l,u){let f=(m,p)=>i[p]?m.route.id!==i[p].route.id:!0,d=(m,p)=>{var g;return i[p].pathname!==m.pathname||((g=i[p].route.path)==null?void 0:g.endsWith("*"))&&i[p].params["*"]!==m.params["*"]};return u==="assets"?e.filter((m,p)=>f(m,p)||d(m,p)):u==="data"?e.filter((m,p)=>{var _;let g=r.routes[m.route.id];if(!g||!g.hasLoader)return!1;if(f(m,p)||d(m,p))return!0;if(m.route.shouldRevalidate){let v=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:((_=i[0])==null?void 0:_.params)||{},nextUrl:new URL(s,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function rM(s,e,{includeHydrateFallback:i}={}){return sM(s.map(r=>{let l=e.routes[r.route.id];if(!l)return[];let u=[l.module];return l.clientActionModule&&(u=u.concat(l.clientActionModule)),l.clientLoaderModule&&(u=u.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(u=u.concat(l.hydrateFallbackModule)),l.imports&&(u=u.concat(l.imports)),u}).flat(1))}function sM(s){return[...new Set(s)]}function oM(s){let e={},i=Object.keys(s).sort();for(let r of i)e[r]=s[r];return e}function lM(s,e){let i=new Set;return new Set(e),s.reduce((r,l)=>{let u=JSON.stringify(oM(l));return i.has(u)||(i.add(u),r.push({key:u,link:l})),r},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var uM=new Set([100,101,204,205]);function cM(s,e){let i=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return i.pathname==="/"?i.pathname="_root.data":e&&fa(i.pathname,e)==="/"?i.pathname=`${e.replace(/\/$/,"")}/_root.data`:i.pathname=`${i.pathname.replace(/\/$/,"")}.data`,i}function e0(){let s=le.useContext(zs);return Fd(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function fM(){let s=le.useContext(Ku);return Fd(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var Hd=le.createContext(void 0);Hd.displayName="FrameworkContext";function t0(){let s=le.useContext(Hd);return Fd(s,"You must render this element inside a <HydratedRouter> element"),s}function hM(s,e){let i=le.useContext(Hd),[r,l]=le.useState(!1),[u,f]=le.useState(!1),{onFocus:d,onBlur:m,onMouseEnter:p,onMouseLeave:g,onTouchStart:_}=e,v=le.useRef(null);le.useEffect(()=>{if(s==="render"&&f(!0),s==="viewport"){let A=x=>{x.forEach(D=>{f(D.isIntersecting)})},y=new IntersectionObserver(A,{threshold:.5});return v.current&&y.observe(v.current),()=>{y.disconnect()}}},[s]),le.useEffect(()=>{if(r){let A=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(A)}}},[r]);let S=()=>{l(!0)},E=()=>{l(!1),f(!1)};return i?s!=="intent"?[u,v,{}]:[u,v,{onFocus:Bo(d,S),onBlur:Bo(m,E),onMouseEnter:Bo(p,S),onMouseLeave:Bo(g,E),onTouchStart:Bo(_,S)}]:[!1,v,{}]}function Bo(s,e){return i=>{s&&s(i),i.defaultPrevented||e(i)}}function dM({page:s,...e}){let{router:i}=e0(),r=le.useMemo(()=>kv(i.routes,s,i.basename),[i.routes,s,i.basename]);return r?le.createElement(mM,{page:s,matches:r,...e}):null}function pM(s){let{manifest:e,routeModules:i}=t0(),[r,l]=le.useState([]);return le.useEffect(()=>{let u=!1;return aM(s,e,i).then(f=>{u||l(f)}),()=>{u=!0}},[s,e,i]),r}function mM({page:s,matches:e,...i}){let r=Nr(),{manifest:l,routeModules:u}=t0(),{basename:f}=e0(),{loaderData:d,matches:m}=fM(),p=le.useMemo(()=>X_(s,e,m,l,r,"data"),[s,e,m,l,r]),g=le.useMemo(()=>X_(s,e,m,l,r,"assets"),[s,e,m,l,r]),_=le.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let E=new Set,A=!1;if(e.forEach(x=>{var L;let D=l.routes[x.route.id];!D||!D.hasLoader||(!p.some(w=>w.route.id===x.route.id)&&x.route.id in d&&((L=u[x.route.id])!=null&&L.shouldRevalidate)||D.hasClientLoader?A=!0:E.add(x.route.id))}),E.size===0)return[];let y=cM(s,f);return A&&E.size>0&&y.searchParams.set("_routes",e.filter(x=>E.has(x.route.id)).map(x=>x.route.id).join(",")),[y.pathname+y.search]},[f,d,r,l,p,e,s,u]),v=le.useMemo(()=>rM(g,l),[g,l]),S=pM(g);return le.createElement(le.Fragment,null,_.map(E=>le.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...i})),v.map(E=>le.createElement("link",{key:E,rel:"modulepreload",href:E,...i})),S.map(({key:E,link:A})=>le.createElement("link",{key:E,...A})))}function gM(...s){return e=>{s.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var n0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{n0&&(window.__reactRouterVersion="7.6.2")}catch{}function _M({basename:s,children:e,window:i}){let r=le.useRef();r.current==null&&(r.current=iy({window:i,v5Compat:!0}));let l=r.current,[u,f]=le.useState({action:l.action,location:l.location}),d=le.useCallback(m=>{le.startTransition(()=>f(m))},[f]);return le.useLayoutEffect(()=>l.listen(d),[l,d]),le.createElement(qy,{basename:s,children:e,location:u.location,navigationType:u.action,navigator:l})}var i0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,a0=le.forwardRef(function({onClick:e,discover:i="render",prefetch:r="none",relative:l,reloadDocument:u,replace:f,state:d,target:m,to:p,preventScrollReset:g,viewTransition:_,...v},S){let{basename:E}=le.useContext(Ui),A=typeof p=="string"&&i0.test(p),y,x=!1;if(typeof p=="string"&&A&&(y=p,n0))try{let U=new URL(window.location.href),R=p.startsWith("//")?new URL(U.protocol+p):new URL(p),G=fa(R.pathname,E);R.origin===U.origin&&G!=null?p=G+R.search+R.hash:x=!0}catch{Di(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let D=Dy(p,{relative:l}),[L,w,I]=hM(r,v),F=yM(p,{replace:f,state:d,target:m,preventScrollReset:g,relative:l,viewTransition:_});function O(U){e&&e(U),U.defaultPrevented||F(U)}let V=le.createElement("a",{...v,...I,href:y||D,onClick:x||u?e:O,ref:gM(S,w),target:m,"data-discover":!A&&i==="render"?"true":void 0});return L&&!A?le.createElement(le.Fragment,null,V,le.createElement(dM,{page:D})):V});a0.displayName="Link";var vM=le.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:r="",end:l=!1,style:u,to:f,viewTransition:d,children:m,...p},g){let _=Jo(f,{relative:p.relative}),v=Nr(),S=le.useContext(Ku),{navigator:E,basename:A}=le.useContext(Ui),y=S!=null&&AM(_)&&d===!0,x=E.encodeLocation?E.encodeLocation(_).pathname:_.pathname,D=v.pathname,L=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;i||(D=D.toLowerCase(),L=L?L.toLowerCase():null,x=x.toLowerCase()),L&&A&&(L=fa(L,A)||L);const w=x!=="/"&&x.endsWith("/")?x.length-1:x.length;let I=D===x||!l&&D.startsWith(x)&&D.charAt(w)==="/",F=L!=null&&(L===x||!l&&L.startsWith(x)&&L.charAt(x.length)==="/"),O={isActive:I,isPending:F,isTransitioning:y},V=I?e:void 0,U;typeof r=="function"?U=r(O):U=[r,I?"active":null,F?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let R=typeof u=="function"?u(O):u;return le.createElement(a0,{...p,"aria-current":V,className:U,ref:g,style:R,to:f,viewTransition:d},typeof m=="function"?m(O):m)});vM.displayName="NavLink";var xM=le.forwardRef(({discover:s="render",fetcherKey:e,navigate:i,reloadDocument:r,replace:l,state:u,method:f=Bu,action:d,onSubmit:m,relative:p,preventScrollReset:g,viewTransition:_,...v},S)=>{let E=TM(),A=bM(d,{relative:p}),y=f.toLowerCase()==="get"?"get":"post",x=typeof d=="string"&&i0.test(d),D=L=>{if(m&&m(L),L.defaultPrevented)return;L.preventDefault();let w=L.nativeEvent.submitter,I=(w==null?void 0:w.getAttribute("formmethod"))||f;E(w||L.currentTarget,{fetcherKey:e,method:I,navigate:i,replace:l,state:u,relative:p,preventScrollReset:g,viewTransition:_})};return le.createElement("form",{ref:S,method:y,action:A,onSubmit:r?m:D,...v,"data-discover":!x&&s==="render"?"true":void 0})});xM.displayName="Form";function SM(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function r0(s){let e=le.useContext(zs);return Yt(e,SM(s)),e}function yM(s,{target:e,replace:i,state:r,preventScrollReset:l,relative:u,viewTransition:f}={}){let d=Uy(),m=Nr(),p=Jo(s,{relative:u});return le.useCallback(g=>{if(Jy(g,e)){g.preventDefault();let _=i!==void 0?i:Xo(m)===Xo(p);d(s,{replace:_,state:r,preventScrollReset:l,relative:u,viewTransition:f})}},[m,d,p,i,r,e,s,l,u,f])}var MM=0,EM=()=>`__${String(++MM)}__`;function TM(){let{router:s}=r0("useSubmit"),{basename:e}=le.useContext(Ui),i=Vy();return le.useCallback(async(r,l={})=>{let{action:u,method:f,encType:d,formData:m,body:p}=tM(r,e);if(l.navigate===!1){let g=l.fetcherKey||EM();await s.fetch(g,i,l.action||u,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||f,formEncType:l.encType||d,flushSync:l.flushSync})}else await s.navigate(l.action||u,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||f,formEncType:l.encType||d,replace:l.replace,state:l.state,fromRouteId:i,flushSync:l.flushSync,viewTransition:l.viewTransition})},[s,e,i])}function bM(s,{relative:e}={}){let{basename:i}=le.useContext(Ui),r=le.useContext(pa);Yt(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),u={...Jo(s||".",{relative:e})},f=Nr();if(s==null){u.search=f.search;let d=new URLSearchParams(u.search),m=d.getAll("index");if(m.some(g=>g==="")){d.delete("index"),m.filter(_=>_).forEach(_=>d.append("index",_));let g=d.toString();u.search=g?`?${g}`:""}}return(!s||s===".")&&l.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(u.pathname=u.pathname==="/"?i:oa([i,u.pathname])),Xo(u)}function AM(s,e={}){let i=le.useContext(Zv);Yt(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=r0("useViewTransitionState"),l=Jo(s,{relative:e.relative});if(!i.isTransitioning)return!1;let u=fa(i.currentLocation.pathname,r)||i.currentLocation.pathname,f=fa(i.nextLocation.pathname,r)||i.nextLocation.pathname;return qu(l.pathname,f)!=null||qu(l.pathname,u)!=null}[...uM];const RM=s=>{const[e,i]=le.useState(null),[r,l]=le.useState(null),[u,f]=le.useState(!1);return le.useEffect(()=>{const d=new EventSource(s);return d.onopen=()=>{f(!0)},d.onmessage=m=>{i(JSON.parse(m.data))},d.onerror=m=>{l(m),f(!1),console.error("EventSource failed:",m)},()=>{d.close()}},[s]),{data:e,error:r,isOpen:u}},CM=new Map([[1,"/wikibeat//audio/C2v10.mp3"],[2,"/wikibeat//audio/C3v10.mp3"],[3,"/wikibeat//audio/C4v10.mp3"],[4,"/wikibeat//audio/C5v10.mp3"],[5,"/wikibeat//audio/C6v10.mp3"],[6,"/wikibeat//audio/C7v10.mp3"]]),W_=new Map([["en","English"],["de","German"],["fr","French"],["es","Spanish"],["ja","Japanese"],["ru","Russian"],["pt","Portuguese"],["it","Italian"],["zh","Chinese"],["pl","Polish"],["af","Afrikaans"],["sq","Albanian"],["ar","Arabic"],["hy","Armenian"],["az","Azeri"],["eu","Basque"],["be","Belarusian"],["bn","Bengali"],["bs","Bosnian"],["bg","Bulgarian"],["ca","Catalan"],["ceb","Cebuano"],["hr","Croatian"],["cs","Czech"],["da","Danish"],["eo","Esperanto"],["et","Estonian"],["fi","Finnish"],["gl","Galician"],["ka","Georgian"],["el","Greek"],["he","Hebrew"],["hi","Hindi"],["hu","Hungarian"],["id","Indonesian"],["ga","Irish"],["kn","Kannada"],["kk","Kazakh"],["ko","Korean"],["la","Latin"],["lv","Latvian"],["lt","Lithuanian"],["mk","Macedonian"],["ml","Malayalam"],["ms","Malay"],["mr","Marathi"],["min","Minangkabau"],["zh-min-nan","Min Nan Chinese"],["mn","Mongolian"],["nap","Neapolitan"],["new","Nepal Bhasa"],["ne","Nepali"],["no","Norwegian Bokmål"],["nn","Norwegian Nynorsk"],["oc","Occitan"],["or","Oriya (Odia)"],["pa","Punjabi"],["fa","Persian"],["ro","Romanian"],["sr","Serbian"],["sh","Serbo-Croatian"],["sk","Slovak"],["sl","Slovene"],["sv","Swedish"],["sw","Swahili"],["ta","Tamil"],["te","Telugu"],["th","Thai"],["tr","Turkish"],["uk","Ukrainian"],["ur","Urdu"],["uz","Uzbek"],["vi","Vietnamese"],["cy","Welsh"],["vo","Volapük"],["wo","Wolof"],["yi","Yiddish"],["zu","Zulu"]]);function wM(s){const{children:e,buttonText:i,buttonStyle:r}=s,l=le.useRef(null),u=()=>{l.current&&(l.current.open?l.current.close():l.current.showModal())};return ct.jsxs(ct.Fragment,{children:[ct.jsx("button",{type:"button",className:"toggle",style:{...r},onClick:u,children:i??"TOGGLE"}),ct.jsxs("dialog",{ref:l,className:"dialog",children:[ct.jsx("form",{method:"dialog",className:"close-btn-wrapper",children:ct.jsx("button",{type:"submit",className:"close-btn",children:ct.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px",viewBox:"0 -960 960 960",fill:"currentColor",children:ct.jsx("path",{d:"m322.15-293.08-29.07-29.07L450.92-480 293.08-636.85l29.07-29.07L480-508.08l156.85-157.84 29.07 29.07L508.08-480l157.84 157.85-29.07 29.07L480-450.92 322.15-293.08Z"})})})}),ct.jsx("div",{className:"dialog__content",children:e})]})]})}const DM=le.forwardRef((s,e)=>{const{isAudio:i}=s,r=le.useRef(null),l=le.useRef(new Map);return le.useEffect(()=>{var u;return i?r.current=new window.AudioContext:((u=r.current)==null||u.close(),r.current=null),()=>{var f;(f=r.current)==null||f.close(),r.current=null}},[i]),le.useImperativeHandle(e,()=>({playNote:(u,f,d=0)=>{if(!r.current)return;const m=l.current.get(u);m||fetch(u).then(_=>_.arrayBuffer()).then(_=>r.current.decodeAudioData(_)).then(_=>{l.current.set(u,_)}).catch(_=>{console.error("Errore nel caricamento del file audio",_)});const p=r.current.createBufferSource();p.buffer=m??null,p.playbackRate.value=f;const g=r.current.createStereoPanner();g.pan.value=d,p.connect(g),g.connect(r.current.destination),p.start(),p.onended=()=>p.disconnect()}})),null});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gd="177",UM=0,q_=1,LM=2,s0=1,NM=2,ia=3,Qa=0,Gn=1,aa=2,la=0,As=1,Yh=2,Y_=3,j_=4,PM=5,Cr=100,OM=101,zM=102,BM=103,IM=104,FM=200,HM=201,GM=202,VM=203,jh=204,Zh=205,kM=206,XM=207,WM=208,qM=209,YM=210,jM=211,ZM=212,KM=213,QM=214,Kh=0,Qh=1,Jh=2,ws=3,$h=4,ed=5,td=6,nd=7,o0=0,JM=1,$M=2,Ka=0,l0=1,u0=2,c0=3,f0=4,h0=5,d0=6,p0=7,m0=300,Ds=301,Us=302,id=303,ad=304,Ju=306,rd=1e3,Dr=1001,sd=1002,xi=1003,eE=1004,du=1005,Ci=1006,hh=1007,Ur=1008,ha=1009,g0=1010,_0=1011,Wo=1012,Vd=1013,Lr=1014,ra=1015,ua=1016,kd=1017,Xd=1018,qo=1020,v0=35902,x0=1021,S0=1022,_i=1023,Yo=1026,jo=1027,y0=1028,Wd=1029,M0=1030,qd=1031,Yd=1033,Fu=33776,Hu=33777,Gu=33778,Vu=33779,od=35840,ld=35841,ud=35842,cd=35843,fd=36196,hd=37492,dd=37496,pd=37808,md=37809,gd=37810,_d=37811,vd=37812,xd=37813,Sd=37814,yd=37815,Md=37816,Ed=37817,Td=37818,bd=37819,Ad=37820,Rd=37821,ku=36492,Cd=36494,wd=36495,E0=36283,Dd=36284,Ud=36285,Ld=36286,tE=3200,nE=3201,iE=0,aE=1,Za="",$n="srgb",Ls="srgb-linear",Yu="linear",Pt="srgb",fs=7680,Z_=519,rE=512,sE=513,oE=514,T0=515,lE=516,uE=517,cE=518,fE=519,K_=35044,Q_="300 es",sa=2e3,ju=2001;class Bs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,f=l.length;u<f;u++)l[u].call(this,e);e.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],dh=Math.PI/180,Nd=180/Math.PI;function $o(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(wn[s&255]+wn[s>>8&255]+wn[s>>16&255]+wn[s>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[i&63|128]+wn[i>>8&255]+"-"+wn[i>>16&255]+wn[i>>24&255]+wn[r&255]+wn[r>>8&255]+wn[r>>16&255]+wn[r>>24&255]).toLowerCase()}function yt(s,e,i){return Math.max(e,Math.min(i,s))}function hE(s,e){return(s%e+e)%e}function ph(s,e,i){return(1-i)*s+i*e}function Io(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Hn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class ot{constructor(e=0,i=0){ot.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=yt(this.x,e.x,i.x),this.y=yt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=yt(this.x,e,i),this.y=yt(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(yt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,f=this.y-e.y;return this.x=u*r-f*l+e.x,this.y=u*l+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Is{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,f,d){let m=r[l+0],p=r[l+1],g=r[l+2],_=r[l+3];const v=u[f+0],S=u[f+1],E=u[f+2],A=u[f+3];if(d===0){e[i+0]=m,e[i+1]=p,e[i+2]=g,e[i+3]=_;return}if(d===1){e[i+0]=v,e[i+1]=S,e[i+2]=E,e[i+3]=A;return}if(_!==A||m!==v||p!==S||g!==E){let y=1-d;const x=m*v+p*S+g*E+_*A,D=x>=0?1:-1,L=1-x*x;if(L>Number.EPSILON){const I=Math.sqrt(L),F=Math.atan2(I,x*D);y=Math.sin(y*F)/I,d=Math.sin(d*F)/I}const w=d*D;if(m=m*y+v*w,p=p*y+S*w,g=g*y+E*w,_=_*y+A*w,y===1-d){const I=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=I,p*=I,g*=I,_*=I}}e[i]=m,e[i+1]=p,e[i+2]=g,e[i+3]=_}static multiplyQuaternionsFlat(e,i,r,l,u,f){const d=r[l],m=r[l+1],p=r[l+2],g=r[l+3],_=u[f],v=u[f+1],S=u[f+2],E=u[f+3];return e[i]=d*E+g*_+m*S-p*v,e[i+1]=m*E+g*v+p*_-d*S,e[i+2]=p*E+g*S+d*v-m*_,e[i+3]=g*E-d*_-m*v-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,f=e._order,d=Math.cos,m=Math.sin,p=d(r/2),g=d(l/2),_=d(u/2),v=m(r/2),S=m(l/2),E=m(u/2);switch(f){case"XYZ":this._x=v*g*_+p*S*E,this._y=p*S*_-v*g*E,this._z=p*g*E+v*S*_,this._w=p*g*_-v*S*E;break;case"YXZ":this._x=v*g*_+p*S*E,this._y=p*S*_-v*g*E,this._z=p*g*E-v*S*_,this._w=p*g*_+v*S*E;break;case"ZXY":this._x=v*g*_-p*S*E,this._y=p*S*_+v*g*E,this._z=p*g*E+v*S*_,this._w=p*g*_-v*S*E;break;case"ZYX":this._x=v*g*_-p*S*E,this._y=p*S*_+v*g*E,this._z=p*g*E-v*S*_,this._w=p*g*_+v*S*E;break;case"YZX":this._x=v*g*_+p*S*E,this._y=p*S*_+v*g*E,this._z=p*g*E-v*S*_,this._w=p*g*_-v*S*E;break;case"XZY":this._x=v*g*_-p*S*E,this._y=p*S*_-v*g*E,this._z=p*g*E+v*S*_,this._w=p*g*_+v*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],f=i[1],d=i[5],m=i[9],p=i[2],g=i[6],_=i[10],v=r+d+_;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(g-m)*S,this._y=(u-p)*S,this._z=(f-l)*S}else if(r>d&&r>_){const S=2*Math.sqrt(1+r-d-_);this._w=(g-m)/S,this._x=.25*S,this._y=(l+f)/S,this._z=(u+p)/S}else if(d>_){const S=2*Math.sqrt(1+d-r-_);this._w=(u-p)/S,this._x=(l+f)/S,this._y=.25*S,this._z=(m+g)/S}else{const S=2*Math.sqrt(1+_-r-d);this._w=(f-l)/S,this._x=(u+p)/S,this._y=(m+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,f=e._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+f*d+l*p-u*m,this._y=l*g+f*m+u*d-r*p,this._z=u*g+f*p+r*m-l*d,this._w=f*g-r*d-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,u=this._z,f=this._w;let d=f*e._w+r*e._x+l*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=f,this._x=r,this._y=l,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const S=1-i;return this._w=S*f+i*this._w,this._x=S*r+i*this._x,this._y=S*l+i*this._y,this._z=S*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),_=Math.sin((1-i)*g)/p,v=Math.sin(i*g)/p;return this._w=f*_+this._w*v,this._x=r*_+this._x*v,this._y=l*_+this._y*v,this._z=u*_+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,i=0,r=0){$.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(J_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(J_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,f=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*f,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*f,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*f,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,f=e.y,d=e.z,m=e.w,p=2*(f*l-d*r),g=2*(d*i-u*l),_=2*(u*r-f*i);return this.x=i+m*p+f*_-d*g,this.y=r+m*g+d*p-u*_,this.z=l+m*_+u*g-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=yt(this.x,e.x,i.x),this.y=yt(this.y,e.y,i.y),this.z=yt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=yt(this.x,e,i),this.y=yt(this.y,e,i),this.z=yt(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,f=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*f-r*m,this.z=r*d-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return mh.copy(this).projectOnVector(e),this.sub(mh)}reflect(e){return this.sub(mh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(yt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const mh=new $,J_=new Is;class st{constructor(e,i,r,l,u,f,d,m,p){st.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,f,d,m,p)}set(e,i,r,l,u,f,d,m,p){const g=this.elements;return g[0]=e,g[1]=l,g[2]=d,g[3]=i,g[4]=u,g[5]=m,g[6]=r,g[7]=f,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,f=r[0],d=r[3],m=r[6],p=r[1],g=r[4],_=r[7],v=r[2],S=r[5],E=r[8],A=l[0],y=l[3],x=l[6],D=l[1],L=l[4],w=l[7],I=l[2],F=l[5],O=l[8];return u[0]=f*A+d*D+m*I,u[3]=f*y+d*L+m*F,u[6]=f*x+d*w+m*O,u[1]=p*A+g*D+_*I,u[4]=p*y+g*L+_*F,u[7]=p*x+g*w+_*O,u[2]=v*A+S*D+E*I,u[5]=v*y+S*L+E*F,u[8]=v*x+S*w+E*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],f=e[4],d=e[5],m=e[6],p=e[7],g=e[8];return i*f*g-i*d*p-r*u*g+r*d*m+l*u*p-l*f*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],f=e[4],d=e[5],m=e[6],p=e[7],g=e[8],_=g*f-d*p,v=d*m-g*u,S=p*u-f*m,E=i*_+r*v+l*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=_*A,e[1]=(l*p-g*r)*A,e[2]=(d*r-l*f)*A,e[3]=v*A,e[4]=(g*i-l*m)*A,e[5]=(l*u-d*i)*A,e[6]=S*A,e[7]=(r*m-p*i)*A,e[8]=(f*i-r*u)*A,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,f,d){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*f+p*d)+f+e,-l*p,l*m,-l*(-p*f+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(gh.makeScale(e,i)),this}rotate(e){return this.premultiply(gh.makeRotation(-e)),this}translate(e,i){return this.premultiply(gh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const gh=new st;function b0(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Zu(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function dE(){const s=Zu("canvas");return s.style.display="block",s}const $_={};function Rs(s){s in $_||($_[s]=!0,console.warn(s))}function pE(s,e,i){return new Promise(function(r,l){function u(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}function mE(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function gE(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ev=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tv=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _E(){const s={enabled:!0,workingColorSpace:Ls,spaces:{},convert:function(l,u,f){return this.enabled===!1||u===f||!u||!f||(this.spaces[u].transfer===Pt&&(l.r=ca(l.r),l.g=ca(l.g),l.b=ca(l.b)),this.spaces[u].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Pt&&(l.r=Cs(l.r),l.g=Cs(l.g),l.b=Cs(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Za?Yu:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,f){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Rs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Rs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Ls]:{primaries:e,whitePoint:r,transfer:Yu,toXYZ:ev,fromXYZ:tv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:$n},outputColorSpaceConfig:{drawingBufferColorSpace:$n}},[$n]:{primaries:e,whitePoint:r,transfer:Pt,toXYZ:ev,fromXYZ:tv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:$n}}}),s}const bt=_E();function ca(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Cs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let hs;class vE{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{hs===void 0&&(hs=Zu("canvas")),hs.width=e.width,hs.height=e.height;const l=hs.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=hs}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Zu("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let f=0;f<u.length;f++)u[f]=ca(u[f]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ca(i[r]/255)*255):i[r]=ca(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let xE=0;class jd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xE++}),this.uuid=$o(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?u.push(_h(l[f].image)):u.push(_h(l[f]))}else u=_h(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function _h(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?vE.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let SE=0;const vh=new $;class Vn extends Bs{constructor(e=Vn.DEFAULT_IMAGE,i=Vn.DEFAULT_MAPPING,r=Dr,l=Dr,u=Ci,f=Ur,d=_i,m=ha,p=Vn.DEFAULT_ANISOTROPY,g=Za){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:SE++}),this.uuid=$o(),this.name="",this.source=new jd(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=f,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(vh).x}get height(){return this.source.getSize(vh).y}get depth(){return this.source.getSize(vh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==m0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case rd:e.x=e.x-Math.floor(e.x);break;case Dr:e.x=e.x<0?0:1;break;case sd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case rd:e.y=e.y-Math.floor(e.y);break;case Dr:e.y=e.y<0?0:1;break;case sd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=m0;Vn.DEFAULT_ANISOTROPY=1;class en{constructor(e=0,i=0,r=0,l=1){en.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,f=e.elements;return this.x=f[0]*i+f[4]*r+f[8]*l+f[12]*u,this.y=f[1]*i+f[5]*r+f[9]*l+f[13]*u,this.z=f[2]*i+f[6]*r+f[10]*l+f[14]*u,this.w=f[3]*i+f[7]*r+f[11]*l+f[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const m=e.elements,p=m[0],g=m[4],_=m[8],v=m[1],S=m[5],E=m[9],A=m[2],y=m[6],x=m[10];if(Math.abs(g-v)<.01&&Math.abs(_-A)<.01&&Math.abs(E-y)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+A)<.1&&Math.abs(E+y)<.1&&Math.abs(p+S+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,w=(S+1)/2,I=(x+1)/2,F=(g+v)/4,O=(_+A)/4,V=(E+y)/4;return L>w&&L>I?L<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(L),l=F/r,u=O/r):w>I?w<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(w),r=F/l,u=V/l):I<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(I),r=O/u,l=V/u),this.set(r,l,u,i),this}let D=Math.sqrt((y-E)*(y-E)+(_-A)*(_-A)+(v-g)*(v-g));return Math.abs(D)<.001&&(D=1),this.x=(y-E)/D,this.y=(_-A)/D,this.z=(v-g)/D,this.w=Math.acos((p+S+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=yt(this.x,e.x,i.x),this.y=yt(this.y,e.y,i.y),this.z=yt(this.z,e.z,i.z),this.w=yt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=yt(this.x,e,i),this.y=yt(this.y,e,i),this.z=yt(this.z,e,i),this.w=yt(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yE extends Bs{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ci,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new en(0,0,e,i),this.scissorTest=!1,this.viewport=new en(0,0,e,i);const l={width:e,height:i,depth:r.depth},u=new Vn(l);this.textures=[];const f=r.count;for(let d=0;d<f;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:Ci,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new jd(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Si extends yE{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class A0 extends Vn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=xi,this.minFilter=xi,this.wrapR=Dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ME extends Vn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=xi,this.minFilter=xi,this.wrapR=Dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class el{constructor(e=new $(1/0,1/0,1/0),i=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(di.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(di.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=di.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let f=0,d=u.count;f<d;f++)e.isMesh===!0?e.getVertexPosition(f,di):di.fromBufferAttribute(u,f),di.applyMatrix4(e.matrixWorld),this.expandByPoint(di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),pu.copy(r.boundingBox)),pu.applyMatrix4(e.matrixWorld),this.union(pu)}const l=e.children;for(let u=0,f=l.length;u<f;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,di),di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fo),mu.subVectors(this.max,Fo),ds.subVectors(e.a,Fo),ps.subVectors(e.b,Fo),ms.subVectors(e.c,Fo),Va.subVectors(ps,ds),ka.subVectors(ms,ps),_r.subVectors(ds,ms);let i=[0,-Va.z,Va.y,0,-ka.z,ka.y,0,-_r.z,_r.y,Va.z,0,-Va.x,ka.z,0,-ka.x,_r.z,0,-_r.x,-Va.y,Va.x,0,-ka.y,ka.x,0,-_r.y,_r.x,0];return!xh(i,ds,ps,ms,mu)||(i=[1,0,0,0,1,0,0,0,1],!xh(i,ds,ps,ms,mu))?!1:(gu.crossVectors(Va,ka),i=[gu.x,gu.y,gu.z],xh(i,ds,ps,ms,mu))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Qi=[new $,new $,new $,new $,new $,new $,new $,new $],di=new $,pu=new el,ds=new $,ps=new $,ms=new $,Va=new $,ka=new $,_r=new $,Fo=new $,mu=new $,gu=new $,vr=new $;function xh(s,e,i,r,l){for(let u=0,f=s.length-3;u<=f;u+=3){vr.fromArray(s,u);const d=l.x*Math.abs(vr.x)+l.y*Math.abs(vr.y)+l.z*Math.abs(vr.z),m=e.dot(vr),p=i.dot(vr),g=r.dot(vr);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const EE=new el,Ho=new $,Sh=new $;class Zd{constructor(e=new $,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):EE.setFromPoints(e).getCenter(r);let l=0;for(let u=0,f=e.length;u<f;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ho.subVectors(e,this.center);const i=Ho.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Ho,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ho.copy(e.center).add(Sh)),this.expandByPoint(Ho.copy(e.center).sub(Sh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ji=new $,yh=new $,_u=new $,Xa=new $,Mh=new $,vu=new $,Eh=new $;class TE{constructor(e=new $,i=new $(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ji)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ji.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ji.copy(this.origin).addScaledVector(this.direction,i),Ji.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){yh.copy(e).add(i).multiplyScalar(.5),_u.copy(i).sub(e).normalize(),Xa.copy(this.origin).sub(yh);const u=e.distanceTo(i)*.5,f=-this.direction.dot(_u),d=Xa.dot(this.direction),m=-Xa.dot(_u),p=Xa.lengthSq(),g=Math.abs(1-f*f);let _,v,S,E;if(g>0)if(_=f*m-d,v=f*d-m,E=u*g,_>=0)if(v>=-E)if(v<=E){const A=1/g;_*=A,v*=A,S=_*(_+f*v+2*d)+v*(f*_+v+2*m)+p}else v=u,_=Math.max(0,-(f*v+d)),S=-_*_+v*(v+2*m)+p;else v=-u,_=Math.max(0,-(f*v+d)),S=-_*_+v*(v+2*m)+p;else v<=-E?(_=Math.max(0,-(-f*u+d)),v=_>0?-u:Math.min(Math.max(-u,-m),u),S=-_*_+v*(v+2*m)+p):v<=E?(_=0,v=Math.min(Math.max(-u,-m),u),S=v*(v+2*m)+p):(_=Math.max(0,-(f*u+d)),v=_>0?u:Math.min(Math.max(-u,-m),u),S=-_*_+v*(v+2*m)+p);else v=f>0?-u:u,_=Math.max(0,-(f*v+d)),S=-_*_+v*(v+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(yh).addScaledVector(_u,v),S}intersectSphere(e,i){Ji.subVectors(e.center,this.origin);const r=Ji.dot(this.direction),l=Ji.dot(Ji)-r*r,u=e.radius*e.radius;if(l>u)return null;const f=Math.sqrt(u-l),d=r-f,m=r+f;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,f,d,m;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return p>=0?(r=(e.min.x-v.x)*p,l=(e.max.x-v.x)*p):(r=(e.max.x-v.x)*p,l=(e.min.x-v.x)*p),g>=0?(u=(e.min.y-v.y)*g,f=(e.max.y-v.y)*g):(u=(e.max.y-v.y)*g,f=(e.min.y-v.y)*g),r>f||u>l||((u>r||isNaN(r))&&(r=u),(f<l||isNaN(l))&&(l=f),_>=0?(d=(e.min.z-v.z)*_,m=(e.max.z-v.z)*_):(d=(e.max.z-v.z)*_,m=(e.min.z-v.z)*_),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Ji)!==null}intersectTriangle(e,i,r,l,u){Mh.subVectors(i,e),vu.subVectors(r,e),Eh.crossVectors(Mh,vu);let f=this.direction.dot(Eh),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;Xa.subVectors(this.origin,e);const m=d*this.direction.dot(vu.crossVectors(Xa,vu));if(m<0)return null;const p=d*this.direction.dot(Mh.cross(Xa));if(p<0||m+p>f)return null;const g=-d*Xa.dot(Eh);return g<0?null:this.at(g/f,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class sn{constructor(e,i,r,l,u,f,d,m,p,g,_,v,S,E,A,y){sn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,f,d,m,p,g,_,v,S,E,A,y)}set(e,i,r,l,u,f,d,m,p,g,_,v,S,E,A,y){const x=this.elements;return x[0]=e,x[4]=i,x[8]=r,x[12]=l,x[1]=u,x[5]=f,x[9]=d,x[13]=m,x[2]=p,x[6]=g,x[10]=_,x[14]=v,x[3]=S,x[7]=E,x[11]=A,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/gs.setFromMatrixColumn(e,0).length(),u=1/gs.setFromMatrixColumn(e,1).length(),f=1/gs.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*f,i[9]=r[9]*f,i[10]=r[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,f=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(u),_=Math.sin(u);if(e.order==="XYZ"){const v=f*g,S=f*_,E=d*g,A=d*_;i[0]=m*g,i[4]=-m*_,i[8]=p,i[1]=S+E*p,i[5]=v-A*p,i[9]=-d*m,i[2]=A-v*p,i[6]=E+S*p,i[10]=f*m}else if(e.order==="YXZ"){const v=m*g,S=m*_,E=p*g,A=p*_;i[0]=v+A*d,i[4]=E*d-S,i[8]=f*p,i[1]=f*_,i[5]=f*g,i[9]=-d,i[2]=S*d-E,i[6]=A+v*d,i[10]=f*m}else if(e.order==="ZXY"){const v=m*g,S=m*_,E=p*g,A=p*_;i[0]=v-A*d,i[4]=-f*_,i[8]=E+S*d,i[1]=S+E*d,i[5]=f*g,i[9]=A-v*d,i[2]=-f*p,i[6]=d,i[10]=f*m}else if(e.order==="ZYX"){const v=f*g,S=f*_,E=d*g,A=d*_;i[0]=m*g,i[4]=E*p-S,i[8]=v*p+A,i[1]=m*_,i[5]=A*p+v,i[9]=S*p-E,i[2]=-p,i[6]=d*m,i[10]=f*m}else if(e.order==="YZX"){const v=f*m,S=f*p,E=d*m,A=d*p;i[0]=m*g,i[4]=A-v*_,i[8]=E*_+S,i[1]=_,i[5]=f*g,i[9]=-d*g,i[2]=-p*g,i[6]=S*_+E,i[10]=v-A*_}else if(e.order==="XZY"){const v=f*m,S=f*p,E=d*m,A=d*p;i[0]=m*g,i[4]=-_,i[8]=p*g,i[1]=v*_+A,i[5]=f*g,i[9]=S*_-E,i[2]=E*_-S,i[6]=d*g,i[10]=A*_+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bE,e,AE)}lookAt(e,i,r){const l=this.elements;return Qn.subVectors(e,i),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),Wa.crossVectors(r,Qn),Wa.lengthSq()===0&&(Math.abs(r.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),Wa.crossVectors(r,Qn)),Wa.normalize(),xu.crossVectors(Qn,Wa),l[0]=Wa.x,l[4]=xu.x,l[8]=Qn.x,l[1]=Wa.y,l[5]=xu.y,l[9]=Qn.y,l[2]=Wa.z,l[6]=xu.z,l[10]=Qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,f=r[0],d=r[4],m=r[8],p=r[12],g=r[1],_=r[5],v=r[9],S=r[13],E=r[2],A=r[6],y=r[10],x=r[14],D=r[3],L=r[7],w=r[11],I=r[15],F=l[0],O=l[4],V=l[8],U=l[12],R=l[1],G=l[5],oe=l[9],se=l[13],ve=l[2],de=l[6],B=l[10],Z=l[14],Y=l[3],Ee=l[7],N=l[11],ee=l[15];return u[0]=f*F+d*R+m*ve+p*Y,u[4]=f*O+d*G+m*de+p*Ee,u[8]=f*V+d*oe+m*B+p*N,u[12]=f*U+d*se+m*Z+p*ee,u[1]=g*F+_*R+v*ve+S*Y,u[5]=g*O+_*G+v*de+S*Ee,u[9]=g*V+_*oe+v*B+S*N,u[13]=g*U+_*se+v*Z+S*ee,u[2]=E*F+A*R+y*ve+x*Y,u[6]=E*O+A*G+y*de+x*Ee,u[10]=E*V+A*oe+y*B+x*N,u[14]=E*U+A*se+y*Z+x*ee,u[3]=D*F+L*R+w*ve+I*Y,u[7]=D*O+L*G+w*de+I*Ee,u[11]=D*V+L*oe+w*B+I*N,u[15]=D*U+L*se+w*Z+I*ee,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],f=e[1],d=e[5],m=e[9],p=e[13],g=e[2],_=e[6],v=e[10],S=e[14],E=e[3],A=e[7],y=e[11],x=e[15];return E*(+u*m*_-l*p*_-u*d*v+r*p*v+l*d*S-r*m*S)+A*(+i*m*S-i*p*v+u*f*v-l*f*S+l*p*g-u*m*g)+y*(+i*p*_-i*d*S-u*f*_+r*f*S+u*d*g-r*p*g)+x*(-l*d*g-i*m*_+i*d*v+l*f*_-r*f*v+r*m*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],f=e[4],d=e[5],m=e[6],p=e[7],g=e[8],_=e[9],v=e[10],S=e[11],E=e[12],A=e[13],y=e[14],x=e[15],D=_*y*p-A*v*p+A*m*S-d*y*S-_*m*x+d*v*x,L=E*v*p-g*y*p-E*m*S+f*y*S+g*m*x-f*v*x,w=g*A*p-E*_*p+E*d*S-f*A*S-g*d*x+f*_*x,I=E*_*m-g*A*m-E*d*v+f*A*v+g*d*y-f*_*y,F=i*D+r*L+l*w+u*I;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/F;return e[0]=D*O,e[1]=(A*v*u-_*y*u-A*l*S+r*y*S+_*l*x-r*v*x)*O,e[2]=(d*y*u-A*m*u+A*l*p-r*y*p-d*l*x+r*m*x)*O,e[3]=(_*m*u-d*v*u-_*l*p+r*v*p+d*l*S-r*m*S)*O,e[4]=L*O,e[5]=(g*y*u-E*v*u+E*l*S-i*y*S-g*l*x+i*v*x)*O,e[6]=(E*m*u-f*y*u-E*l*p+i*y*p+f*l*x-i*m*x)*O,e[7]=(f*v*u-g*m*u+g*l*p-i*v*p-f*l*S+i*m*S)*O,e[8]=w*O,e[9]=(E*_*u-g*A*u-E*r*S+i*A*S+g*r*x-i*_*x)*O,e[10]=(f*A*u-E*d*u+E*r*p-i*A*p-f*r*x+i*d*x)*O,e[11]=(g*d*u-f*_*u-g*r*p+i*_*p+f*r*S-i*d*S)*O,e[12]=I*O,e[13]=(g*A*l-E*_*l+E*r*v-i*A*v-g*r*y+i*_*y)*O,e[14]=(E*d*l-f*A*l-E*r*m+i*A*m+f*r*y-i*d*y)*O,e[15]=(f*_*l-g*d*l+g*r*m-i*_*m-f*r*v+i*d*v)*O,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,f=e.x,d=e.y,m=e.z,p=u*f,g=u*d;return this.set(p*f+r,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+r,g*m-l*f,0,p*m-l*d,g*m+l*f,u*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,f){return this.set(1,r,u,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,f=i._y,d=i._z,m=i._w,p=u+u,g=f+f,_=d+d,v=u*p,S=u*g,E=u*_,A=f*g,y=f*_,x=d*_,D=m*p,L=m*g,w=m*_,I=r.x,F=r.y,O=r.z;return l[0]=(1-(A+x))*I,l[1]=(S+w)*I,l[2]=(E-L)*I,l[3]=0,l[4]=(S-w)*F,l[5]=(1-(v+x))*F,l[6]=(y+D)*F,l[7]=0,l[8]=(E+L)*O,l[9]=(y-D)*O,l[10]=(1-(v+A))*O,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let u=gs.set(l[0],l[1],l[2]).length();const f=gs.set(l[4],l[5],l[6]).length(),d=gs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],pi.copy(this);const p=1/u,g=1/f,_=1/d;return pi.elements[0]*=p,pi.elements[1]*=p,pi.elements[2]*=p,pi.elements[4]*=g,pi.elements[5]*=g,pi.elements[6]*=g,pi.elements[8]*=_,pi.elements[9]*=_,pi.elements[10]*=_,i.setFromRotationMatrix(pi),r.x=u,r.y=f,r.z=d,this}makePerspective(e,i,r,l,u,f,d=sa){const m=this.elements,p=2*u/(i-e),g=2*u/(r-l),_=(i+e)/(i-e),v=(r+l)/(r-l);let S,E;if(d===sa)S=-(f+u)/(f-u),E=-2*f*u/(f-u);else if(d===ju)S=-f/(f-u),E=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=_,m[12]=0,m[1]=0,m[5]=g,m[9]=v,m[13]=0,m[2]=0,m[6]=0,m[10]=S,m[14]=E,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,r,l,u,f,d=sa){const m=this.elements,p=1/(i-e),g=1/(r-l),_=1/(f-u),v=(i+e)*p,S=(r+l)*g;let E,A;if(d===sa)E=(f+u)*_,A=-2*_;else if(d===ju)E=u*_,A=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-v,m[1]=0,m[5]=2*g,m[9]=0,m[13]=-S,m[2]=0,m[6]=0,m[10]=A,m[14]=-E,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const gs=new $,pi=new sn,bE=new $(0,0,0),AE=new $(1,1,1),Wa=new $,xu=new $,Qn=new $,nv=new sn,iv=new Is;class da{constructor(e=0,i=0,r=0,l=da.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],f=l[4],d=l[8],m=l[1],p=l[5],g=l[9],_=l[2],v=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(yt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,u),this._z=0);break;case"ZXY":this._x=Math.asin(yt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-yt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(yt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,u)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-yt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return nv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nv,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return iv.setFromEuler(this),this.setFromQuaternion(iv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}da.DEFAULT_ORDER="XYZ";class R0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let RE=0;const av=new $,_s=new Is,$i=new sn,Su=new $,Go=new $,CE=new $,wE=new Is,rv=new $(1,0,0),sv=new $(0,1,0),ov=new $(0,0,1),lv={type:"added"},DE={type:"removed"},vs={type:"childadded",child:null},Th={type:"childremoved",child:null};class Pn extends Bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:RE++}),this.uuid=$o(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pn.DEFAULT_UP.clone();const e=new $,i=new da,r=new Is,l=new $(1,1,1);function u(){r.setFromEuler(i,!1)}function f(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new sn},normalMatrix:{value:new st}}),this.matrix=new sn,this.matrixWorld=new sn,this.matrixAutoUpdate=Pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new R0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return _s.setFromAxisAngle(e,i),this.quaternion.multiply(_s),this}rotateOnWorldAxis(e,i){return _s.setFromAxisAngle(e,i),this.quaternion.premultiply(_s),this}rotateX(e){return this.rotateOnAxis(rv,e)}rotateY(e){return this.rotateOnAxis(sv,e)}rotateZ(e){return this.rotateOnAxis(ov,e)}translateOnAxis(e,i){return av.copy(e).applyQuaternion(this.quaternion),this.position.add(av.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(rv,e)}translateY(e){return this.translateOnAxis(sv,e)}translateZ(e){return this.translateOnAxis(ov,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($i.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Su.copy(e):Su.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$i.lookAt(Go,Su,this.up):$i.lookAt(Su,Go,this.up),this.quaternion.setFromRotationMatrix($i),l&&($i.extractRotation(l.matrixWorld),_s.setFromRotationMatrix($i),this.quaternion.premultiply(_s.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(lv),vs.child=e,this.dispatchEvent(vs),vs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(DE),Th.child=e,this.dispatchEvent(Th),Th.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$i.multiply(e.parent.matrixWorld)),e.applyMatrix4($i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(lv),vs.child=e,this.dispatchEvent(vs),vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,e,CE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,wE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];u(e.shapes,_)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(e.materials,this.material[m]));l.material=d}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(e.animations,m))}}if(i){const d=f(e.geometries),m=f(e.materials),p=f(e.textures),g=f(e.images),_=f(e.shapes),v=f(e.skeletons),S=f(e.animations),E=f(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),_.length>0&&(r.shapes=_),v.length>0&&(r.skeletons=v),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=l,r;function f(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Pn.DEFAULT_UP=new $(0,1,0);Pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mi=new $,ea=new $,bh=new $,ta=new $,xs=new $,Ss=new $,uv=new $,Ah=new $,Rh=new $,Ch=new $,wh=new en,Dh=new en,Uh=new en;class gi{constructor(e=new $,i=new $,r=new $){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),mi.subVectors(e,i),l.cross(mi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){mi.subVectors(l,i),ea.subVectors(r,i),bh.subVectors(e,i);const f=mi.dot(mi),d=mi.dot(ea),m=mi.dot(bh),p=ea.dot(ea),g=ea.dot(bh),_=f*p-d*d;if(_===0)return u.set(0,0,0),null;const v=1/_,S=(p*m-d*g)*v,E=(f*g-d*m)*v;return u.set(1-S-E,E,S)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,ta)===null?!1:ta.x>=0&&ta.y>=0&&ta.x+ta.y<=1}static getInterpolation(e,i,r,l,u,f,d,m){return this.getBarycoord(e,i,r,l,ta)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,ta.x),m.addScaledVector(f,ta.y),m.addScaledVector(d,ta.z),m)}static getInterpolatedAttribute(e,i,r,l,u,f){return wh.setScalar(0),Dh.setScalar(0),Uh.setScalar(0),wh.fromBufferAttribute(e,i),Dh.fromBufferAttribute(e,r),Uh.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(wh,u.x),f.addScaledVector(Dh,u.y),f.addScaledVector(Uh,u.z),f}static isFrontFacing(e,i,r,l){return mi.subVectors(r,i),ea.subVectors(e,i),mi.cross(ea).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mi.subVectors(this.c,this.b),ea.subVectors(this.a,this.b),mi.cross(ea).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return gi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return gi.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return gi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let f,d;xs.subVectors(l,r),Ss.subVectors(u,r),Ah.subVectors(e,r);const m=xs.dot(Ah),p=Ss.dot(Ah);if(m<=0&&p<=0)return i.copy(r);Rh.subVectors(e,l);const g=xs.dot(Rh),_=Ss.dot(Rh);if(g>=0&&_<=g)return i.copy(l);const v=m*_-g*p;if(v<=0&&m>=0&&g<=0)return f=m/(m-g),i.copy(r).addScaledVector(xs,f);Ch.subVectors(e,u);const S=xs.dot(Ch),E=Ss.dot(Ch);if(E>=0&&S<=E)return i.copy(u);const A=S*p-m*E;if(A<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(r).addScaledVector(Ss,d);const y=g*E-S*_;if(y<=0&&_-g>=0&&S-E>=0)return uv.subVectors(u,l),d=(_-g)/(_-g+(S-E)),i.copy(l).addScaledVector(uv,d);const x=1/(y+A+v);return f=A*x,d=v*x,i.copy(r).addScaledVector(xs,f).addScaledVector(Ss,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const C0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qa={h:0,s:0,l:0},yu={h:0,s:0,l:0};function Lh(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class Ct{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=$n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=bt.workingColorSpace){return this.r=e,this.g=i,this.b=r,bt.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=bt.workingColorSpace){if(e=hE(e,1),i=yt(i,0,1),r=yt(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,f=2*r-u;this.r=Lh(f,u,e+1/3),this.g=Lh(f,u,e),this.b=Lh(f,u,e-1/3)}return bt.colorSpaceToWorking(this,l),this}setStyle(e,i=$n){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=$n){const r=C0[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ca(e.r),this.g=ca(e.g),this.b=ca(e.b),this}copyLinearToSRGB(e){return this.r=Cs(e.r),this.g=Cs(e.g),this.b=Cs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$n){return bt.workingToColorSpace(Dn.copy(this),e),Math.round(yt(Dn.r*255,0,255))*65536+Math.round(yt(Dn.g*255,0,255))*256+Math.round(yt(Dn.b*255,0,255))}getHexString(e=$n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=bt.workingColorSpace){bt.workingToColorSpace(Dn.copy(this),i);const r=Dn.r,l=Dn.g,u=Dn.b,f=Math.max(r,l,u),d=Math.min(r,l,u);let m,p;const g=(d+f)/2;if(d===f)m=0,p=0;else{const _=f-d;switch(p=g<=.5?_/(f+d):_/(2-f-d),f){case r:m=(l-u)/_+(l<u?6:0);break;case l:m=(u-r)/_+2;break;case u:m=(r-l)/_+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,i=bt.workingColorSpace){return bt.workingToColorSpace(Dn.copy(this),i),e.r=Dn.r,e.g=Dn.g,e.b=Dn.b,e}getStyle(e=$n){bt.workingToColorSpace(Dn.copy(this),e);const i=Dn.r,r=Dn.g,l=Dn.b;return e!==$n?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(qa),this.setHSL(qa.h+e,qa.s+i,qa.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(qa),e.getHSL(yu);const r=ph(qa.h,yu.h,i),l=ph(qa.s,yu.s,i),u=ph(qa.l,yu.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new Ct;Ct.NAMES=C0;let UE=0;class $u extends Bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:UE++}),this.uuid=$o(),this.name="",this.type="Material",this.blending=As,this.side=Qa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jh,this.blendDst=Zh,this.blendEquation=Cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Z_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fs,this.stencilZFail=fs,this.stencilZPass=fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==As&&(r.blending=this.blending),this.side!==Qa&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==jh&&(r.blendSrc=this.blendSrc),this.blendDst!==Zh&&(r.blendDst=this.blendDst),this.blendEquation!==Cr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ws&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Z_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==fs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==fs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const f=[];for(const d in u){const m=u[d];delete m.metadata,f.push(m)}return f}if(i){const u=l(e.textures),f=l(e.images);u.length>0&&(r.textures=u),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Kd extends $u{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new da,this.combine=o0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rn=new $,Mu=new ot;let LE=0;class wi{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:LE++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=K_,this.updateRanges=[],this.gpuType=ra,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Mu.fromBufferAttribute(this,i),Mu.applyMatrix3(e),this.setXY(i,Mu.x,Mu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.applyMatrix3(e),this.setXYZ(i,rn.x,rn.y,rn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.applyMatrix4(e),this.setXYZ(i,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.applyNormalMatrix(e),this.setXYZ(i,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.transformDirection(e),this.setXYZ(i,rn.x,rn.y,rn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Io(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Hn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Io(i,this.array)),i}setX(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Io(i,this.array)),i}setY(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Io(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Io(i,this.array)),i}setW(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array),l=Hn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array),l=Hn(l,this.array),u=Hn(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==K_&&(e.usage=this.usage),e}}class w0 extends wi{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class D0 extends wi{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class ui extends wi{constructor(e,i,r){super(new Float32Array(e),i,r)}}let NE=0;const oi=new sn,Nh=new Pn,ys=new $,Jn=new el,Vo=new el,vn=new $;class ma extends Bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:NE++}),this.uuid=$o(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(b0(e)?D0:w0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new st().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return oi.makeRotationFromQuaternion(e),this.applyMatrix4(oi),this}rotateX(e){return oi.makeRotationX(e),this.applyMatrix4(oi),this}rotateY(e){return oi.makeRotationY(e),this.applyMatrix4(oi),this}rotateZ(e){return oi.makeRotationZ(e),this.applyMatrix4(oi),this}translate(e,i,r){return oi.makeTranslation(e,i,r),this.applyMatrix4(oi),this}scale(e,i,r){return oi.makeScale(e,i,r),this.applyMatrix4(oi),this}lookAt(e){return Nh.lookAt(e),Nh.updateMatrix(),this.applyMatrix4(Nh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=e.length;l<u;l++){const f=e[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new ui(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new el);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];Jn.setFromBufferAttribute(u),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zd);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const r=this.boundingSphere.center;if(Jn.setFromBufferAttribute(e),i)for(let u=0,f=i.length;u<f;u++){const d=i[u];Vo.setFromBufferAttribute(d),this.morphTargetsRelative?(vn.addVectors(Jn.min,Vo.min),Jn.expandByPoint(vn),vn.addVectors(Jn.max,Vo.max),Jn.expandByPoint(vn)):(Jn.expandByPoint(Vo.min),Jn.expandByPoint(Vo.max))}Jn.getCenter(r);let l=0;for(let u=0,f=e.count;u<f;u++)vn.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(vn));if(i)for(let u=0,f=i.length;u<f;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)vn.fromBufferAttribute(d,p),m&&(ys.fromBufferAttribute(e,p),vn.add(ys)),l=Math.max(l,r.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wi(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),d=[],m=[];for(let V=0;V<r.count;V++)d[V]=new $,m[V]=new $;const p=new $,g=new $,_=new $,v=new ot,S=new ot,E=new ot,A=new $,y=new $;function x(V,U,R){p.fromBufferAttribute(r,V),g.fromBufferAttribute(r,U),_.fromBufferAttribute(r,R),v.fromBufferAttribute(u,V),S.fromBufferAttribute(u,U),E.fromBufferAttribute(u,R),g.sub(p),_.sub(p),S.sub(v),E.sub(v);const G=1/(S.x*E.y-E.x*S.y);isFinite(G)&&(A.copy(g).multiplyScalar(E.y).addScaledVector(_,-S.y).multiplyScalar(G),y.copy(_).multiplyScalar(S.x).addScaledVector(g,-E.x).multiplyScalar(G),d[V].add(A),d[U].add(A),d[R].add(A),m[V].add(y),m[U].add(y),m[R].add(y))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let V=0,U=D.length;V<U;++V){const R=D[V],G=R.start,oe=R.count;for(let se=G,ve=G+oe;se<ve;se+=3)x(e.getX(se+0),e.getX(se+1),e.getX(se+2))}const L=new $,w=new $,I=new $,F=new $;function O(V){I.fromBufferAttribute(l,V),F.copy(I);const U=d[V];L.copy(U),L.sub(I.multiplyScalar(I.dot(U))).normalize(),w.crossVectors(F,U);const G=w.dot(m[V])<0?-1:1;f.setXYZW(V,L.x,L.y,L.z,G)}for(let V=0,U=D.length;V<U;++V){const R=D[V],G=R.start,oe=R.count;for(let se=G,ve=G+oe;se<ve;se+=3)O(e.getX(se+0)),O(e.getX(se+1)),O(e.getX(se+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new wi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let v=0,S=r.count;v<S;v++)r.setXYZ(v,0,0,0);const l=new $,u=new $,f=new $,d=new $,m=new $,p=new $,g=new $,_=new $;if(e)for(let v=0,S=e.count;v<S;v+=3){const E=e.getX(v+0),A=e.getX(v+1),y=e.getX(v+2);l.fromBufferAttribute(i,E),u.fromBufferAttribute(i,A),f.fromBufferAttribute(i,y),g.subVectors(f,u),_.subVectors(l,u),g.cross(_),d.fromBufferAttribute(r,E),m.fromBufferAttribute(r,A),p.fromBufferAttribute(r,y),d.add(g),m.add(g),p.add(g),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(A,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let v=0,S=i.count;v<S;v+=3)l.fromBufferAttribute(i,v+0),u.fromBufferAttribute(i,v+1),f.fromBufferAttribute(i,v+2),g.subVectors(f,u),_.subVectors(l,u),g.cross(_),r.setXYZ(v+0,g.x,g.y,g.z),r.setXYZ(v+1,g.x,g.y,g.z),r.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)vn.fromBufferAttribute(e,i),vn.normalize(),e.setXYZ(i,vn.x,vn.y,vn.z)}toNonIndexed(){function e(d,m){const p=d.array,g=d.itemSize,_=d.normalized,v=new p.constructor(m.length*g);let S=0,E=0;for(let A=0,y=m.length;A<y;A++){d.isInterleavedBufferAttribute?S=m[A]*d.data.stride+d.offset:S=m[A]*g;for(let x=0;x<g;x++)v[E++]=p[S++]}return new wi(v,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ma,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,r);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let g=0,_=p.length;g<_;g++){const v=p[g],S=e(v,r);m.push(S)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,m=f.length;d<m;d++){const p=f[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let _=0,v=p.length;_<v;_++){const S=p[_];g.push(S.toJSON(e.data))}g.length>0&&(l[m]=g,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const u=e.morphAttributes;for(const p in u){const g=[],_=u[p];for(let v=0,S=_.length;v<S;v++)g.push(_[v].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,g=f.length;p<g;p++){const _=f[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cv=new sn,xr=new TE,Eu=new Zd,fv=new $,Tu=new $,bu=new $,Au=new $,Ph=new $,Ru=new $,hv=new $,Cu=new $;class vi extends Pn{constructor(e=new ma,i=new Kd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=l.length;u<f;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,f=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(u&&d){Ru.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const g=d[m],_=u[m];g!==0&&(Ph.fromBufferAttribute(_,e),f?Ru.addScaledVector(Ph,g):Ru.addScaledVector(Ph.sub(i),g))}i.add(Ru)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Eu.copy(r.boundingSphere),Eu.applyMatrix4(u),xr.copy(e.ray).recast(e.near),!(Eu.containsPoint(xr.origin)===!1&&(xr.intersectSphere(Eu,fv)===null||xr.origin.distanceToSquared(fv)>(e.far-e.near)**2))&&(cv.copy(u).invert(),xr.copy(e.ray).applyMatrix4(cv),!(r.boundingBox!==null&&xr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,xr)))}_computeIntersections(e,i,r){let l;const u=this.geometry,f=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,g=u.attributes.uv1,_=u.attributes.normal,v=u.groups,S=u.drawRange;if(d!==null)if(Array.isArray(f))for(let E=0,A=v.length;E<A;E++){const y=v[E],x=f[y.materialIndex],D=Math.max(y.start,S.start),L=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let w=D,I=L;w<I;w+=3){const F=d.getX(w),O=d.getX(w+1),V=d.getX(w+2);l=wu(this,x,e,r,p,g,_,F,O,V),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),A=Math.min(d.count,S.start+S.count);for(let y=E,x=A;y<x;y+=3){const D=d.getX(y),L=d.getX(y+1),w=d.getX(y+2);l=wu(this,f,e,r,p,g,_,D,L,w),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,A=v.length;E<A;E++){const y=v[E],x=f[y.materialIndex],D=Math.max(y.start,S.start),L=Math.min(m.count,Math.min(y.start+y.count,S.start+S.count));for(let w=D,I=L;w<I;w+=3){const F=w,O=w+1,V=w+2;l=wu(this,x,e,r,p,g,_,F,O,V),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),A=Math.min(m.count,S.start+S.count);for(let y=E,x=A;y<x;y+=3){const D=y,L=y+1,w=y+2;l=wu(this,f,e,r,p,g,_,D,L,w),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function PE(s,e,i,r,l,u,f,d){let m;if(e.side===Gn?m=r.intersectTriangle(f,u,l,!0,d):m=r.intersectTriangle(l,u,f,e.side===Qa,d),m===null)return null;Cu.copy(d),Cu.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(Cu);return p<i.near||p>i.far?null:{distance:p,point:Cu.clone(),object:s}}function wu(s,e,i,r,l,u,f,d,m,p){s.getVertexPosition(d,Tu),s.getVertexPosition(m,bu),s.getVertexPosition(p,Au);const g=PE(s,e,i,r,Tu,bu,Au,hv);if(g){const _=new $;gi.getBarycoord(hv,Tu,bu,Au,_),l&&(g.uv=gi.getInterpolatedAttribute(l,d,m,p,_,new ot)),u&&(g.uv1=gi.getInterpolatedAttribute(u,d,m,p,_,new ot)),f&&(g.normal=gi.getInterpolatedAttribute(f,d,m,p,_,new $),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const v={a:d,b:m,c:p,normal:new $,materialIndex:0};gi.getNormal(Tu,bu,Au,v.normal),g.face=v,g.barycoord=_}return g}class tl extends ma{constructor(e=1,i=1,r=1,l=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:f};const d=this;l=Math.floor(l),u=Math.floor(u),f=Math.floor(f);const m=[],p=[],g=[],_=[];let v=0,S=0;E("z","y","x",-1,-1,r,i,e,f,u,0),E("z","y","x",1,-1,r,i,-e,f,u,1),E("x","z","y",1,1,e,r,i,l,f,2),E("x","z","y",1,-1,e,r,-i,l,f,3),E("x","y","z",1,-1,e,i,r,l,u,4),E("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new ui(p,3)),this.setAttribute("normal",new ui(g,3)),this.setAttribute("uv",new ui(_,2));function E(A,y,x,D,L,w,I,F,O,V,U){const R=w/O,G=I/V,oe=w/2,se=I/2,ve=F/2,de=O+1,B=V+1;let Z=0,Y=0;const Ee=new $;for(let N=0;N<B;N++){const ee=N*G-se;for(let xe=0;xe<de;xe++){const ye=xe*R-oe;Ee[A]=ye*D,Ee[y]=ee*L,Ee[x]=ve,p.push(Ee.x,Ee.y,Ee.z),Ee[A]=0,Ee[y]=0,Ee[x]=F>0?1:-1,g.push(Ee.x,Ee.y,Ee.z),_.push(xe/O),_.push(1-N/V),Z+=1}}for(let N=0;N<V;N++)for(let ee=0;ee<O;ee++){const xe=v+ee+de*N,ye=v+ee+de*(N+1),Q=v+(ee+1)+de*(N+1),me=v+(ee+1)+de*N;m.push(xe,ye,me),m.push(ye,Q,me),Y+=6}d.addGroup(S,Y,U),S+=Y,v+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ns(s){const e={};for(const i in s){e[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Nn(s){const e={};for(let i=0;i<s.length;i++){const r=Ns(s[i]);for(const l in r)e[l]=r[l]}return e}function OE(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function U0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:bt.workingColorSpace}const Zo={clone:Ns,merge:Nn};var zE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,BE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Un extends $u{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zE,this.fragmentShader=BE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ns(e.uniforms),this.uniformsGroups=OE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class L0 extends Pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new sn,this.projectionMatrix=new sn,this.projectionMatrixInverse=new sn,this.coordinateSystem=sa}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ya=new $,dv=new ot,pv=new ot;class li extends L0{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Nd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(dh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Nd*2*Math.atan(Math.tan(dh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Ya.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ya.x,Ya.y).multiplyScalar(-e/Ya.z),Ya.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ya.x,Ya.y).multiplyScalar(-e/Ya.z)}getViewSize(e,i){return this.getViewBounds(e,dv,pv),i.subVectors(pv,dv)}setViewOffset(e,i,r,l,u,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(dh*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;u+=f.offsetX*l/m,i-=f.offsetY*r/p,l*=f.width/m,r*=f.height/p}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Ms=-90,Es=1;class IE extends Pn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new li(Ms,Es,e,i);l.layers=this.layers,this.add(l);const u=new li(Ms,Es,e,i);u.layers=this.layers,this.add(u);const f=new li(Ms,Es,e,i);f.layers=this.layers,this.add(f);const d=new li(Ms,Es,e,i);d.layers=this.layers,this.add(d);const m=new li(Ms,Es,e,i);m.layers=this.layers,this.add(m);const p=new li(Ms,Es,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,f,d,m]=i;for(const p of i)this.remove(p);if(e===sa)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===ju)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,f,d,m,p,g]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,u),e.setRenderTarget(r,1,l),e.render(i,f),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,l),e.render(i,g),e.setRenderTarget(_,v,S),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class N0 extends Vn{constructor(e=[],i=Ds,r,l,u,f,d,m,p,g){super(e,i,r,l,u,f,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class FE extends Si{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new N0(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new tl(5,5,5),u=new Un({name:"CubemapFromEquirect",uniforms:Ns(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Gn,blending:la});u.uniforms.tEquirect.value=i;const f=new vi(l,u),d=i.minFilter;return i.minFilter===Ur&&(i.minFilter=Ci),new IE(1,10,this).update(e,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const u=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,r,l);e.setRenderTarget(u)}}class Du extends Pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const HE={type:"move"};class Oh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Du,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Du,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Du,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,f=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const A of e.hand.values()){const y=i.getJointPose(A,r),x=this._getHandJoint(p,A);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],v=g.position.distanceTo(_.position),S=.02,E=.005;p.inputState.pinching&&v>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&v<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(HE)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Du;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class GE extends Pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new da,this.environmentIntensity=1,this.environmentRotation=new da,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const zh=new $,VE=new $,kE=new st;class Ar{constructor(e=new $(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=zh.subVectors(r,i).cross(VE.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(zh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||kE.getNormalMatrix(e),l=this.coplanarPoint(zh).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Sr=new Zd,Uu=new $;class P0{constructor(e=new Ar,i=new Ar,r=new Ar,l=new Ar,u=new Ar,f=new Ar){this.planes=[e,i,r,l,u,f]}set(e,i,r,l,u,f){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(u),d[5].copy(f),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=sa){const r=this.planes,l=e.elements,u=l[0],f=l[1],d=l[2],m=l[3],p=l[4],g=l[5],_=l[6],v=l[7],S=l[8],E=l[9],A=l[10],y=l[11],x=l[12],D=l[13],L=l[14],w=l[15];if(r[0].setComponents(m-u,v-p,y-S,w-x).normalize(),r[1].setComponents(m+u,v+p,y+S,w+x).normalize(),r[2].setComponents(m+f,v+g,y+E,w+D).normalize(),r[3].setComponents(m-f,v-g,y-E,w-D).normalize(),r[4].setComponents(m-d,v-_,y-A,w-L).normalize(),i===sa)r[5].setComponents(m+d,v+_,y+A,w+L).normalize();else if(i===ju)r[5].setComponents(d,_,A,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Sr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Sr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Sr)}intersectsSprite(e){return Sr.center.set(0,0,0),Sr.radius=.7071067811865476,Sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Sr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Uu.x=l.normal.x>0?e.max.x:e.min.x,Uu.y=l.normal.y>0?e.max.y:e.min.y,Uu.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Uu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class O0 extends Vn{constructor(e,i,r=Lr,l,u,f,d=xi,m=xi,p,g=Yo,_=1){if(g!==Yo&&g!==jo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:i,depth:_};super(v,l,u,f,d,m,g,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new jd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Qd extends ma{constructor(e=[],i=[],r=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:i,radius:r,detail:l};const u=[],f=[];d(l),p(r),g(),this.setAttribute("position",new ui(u,3)),this.setAttribute("normal",new ui(u.slice(),3)),this.setAttribute("uv",new ui(f,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function d(D){const L=new $,w=new $,I=new $;for(let F=0;F<i.length;F+=3)S(i[F+0],L),S(i[F+1],w),S(i[F+2],I),m(L,w,I,D)}function m(D,L,w,I){const F=I+1,O=[];for(let V=0;V<=F;V++){O[V]=[];const U=D.clone().lerp(w,V/F),R=L.clone().lerp(w,V/F),G=F-V;for(let oe=0;oe<=G;oe++)oe===0&&V===F?O[V][oe]=U:O[V][oe]=U.clone().lerp(R,oe/G)}for(let V=0;V<F;V++)for(let U=0;U<2*(F-V)-1;U++){const R=Math.floor(U/2);U%2===0?(v(O[V][R+1]),v(O[V+1][R]),v(O[V][R])):(v(O[V][R+1]),v(O[V+1][R+1]),v(O[V+1][R]))}}function p(D){const L=new $;for(let w=0;w<u.length;w+=3)L.x=u[w+0],L.y=u[w+1],L.z=u[w+2],L.normalize().multiplyScalar(D),u[w+0]=L.x,u[w+1]=L.y,u[w+2]=L.z}function g(){const D=new $;for(let L=0;L<u.length;L+=3){D.x=u[L+0],D.y=u[L+1],D.z=u[L+2];const w=y(D)/2/Math.PI+.5,I=x(D)/Math.PI+.5;f.push(w,1-I)}E(),_()}function _(){for(let D=0;D<f.length;D+=6){const L=f[D+0],w=f[D+2],I=f[D+4],F=Math.max(L,w,I),O=Math.min(L,w,I);F>.9&&O<.1&&(L<.2&&(f[D+0]+=1),w<.2&&(f[D+2]+=1),I<.2&&(f[D+4]+=1))}}function v(D){u.push(D.x,D.y,D.z)}function S(D,L){const w=D*3;L.x=e[w+0],L.y=e[w+1],L.z=e[w+2]}function E(){const D=new $,L=new $,w=new $,I=new $,F=new ot,O=new ot,V=new ot;for(let U=0,R=0;U<u.length;U+=9,R+=6){D.set(u[U+0],u[U+1],u[U+2]),L.set(u[U+3],u[U+4],u[U+5]),w.set(u[U+6],u[U+7],u[U+8]),F.set(f[R+0],f[R+1]),O.set(f[R+2],f[R+3]),V.set(f[R+4],f[R+5]),I.copy(D).add(L).add(w).divideScalar(3);const G=y(I);A(F,R+0,D,G),A(O,R+2,L,G),A(V,R+4,w,G)}}function A(D,L,w,I){I<0&&D.x===1&&(f[L]=D.x-1),w.x===0&&w.z===0&&(f[L]=I/2/Math.PI+.5)}function y(D){return Math.atan2(D.z,-D.x)}function x(D){return Math.atan2(-D.y,Math.sqrt(D.x*D.x+D.z*D.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qd(e.vertices,e.indices,e.radius,e.details)}}class Jd extends Qd{constructor(e=1,i=0){const r=(1+Math.sqrt(5))/2,l=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],u=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,u,e,i),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new Jd(e.radius,e.detail)}}class ec extends ma{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,f=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,g=m+1,_=e/d,v=i/m,S=[],E=[],A=[],y=[];for(let x=0;x<g;x++){const D=x*v-f;for(let L=0;L<p;L++){const w=L*_-u;E.push(w,-D,0),A.push(0,0,1),y.push(L/d),y.push(1-x/m)}}for(let x=0;x<m;x++)for(let D=0;D<d;D++){const L=D+p*x,w=D+p*(x+1),I=D+1+p*(x+1),F=D+1+p*x;S.push(L,w,F),S.push(w,I,F)}this.setIndex(S),this.setAttribute("position",new ui(E,3)),this.setAttribute("normal",new ui(A,3)),this.setAttribute("uv",new ui(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ec(e.width,e.height,e.widthSegments,e.heightSegments)}}class XE extends Un{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class WE extends $u{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class qE extends $u{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const mv={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class YE{constructor(e,i,r){const l=this;let u=!1,f=0,d=0,m;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=i,this.onError=r,this.itemStart=function(g){d++,u===!1&&l.onStart!==void 0&&l.onStart(g,f,d),u=!0},this.itemEnd=function(g){f++,l.onProgress!==void 0&&l.onProgress(g,f,d),f===d&&(u=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(g){l.onError!==void 0&&l.onError(g)},this.resolveURL=function(g){return m?m(g):g},this.setURLModifier=function(g){return m=g,this},this.addHandler=function(g,_){return p.push(g,_),this},this.removeHandler=function(g){const _=p.indexOf(g);return _!==-1&&p.splice(_,2),this},this.getHandler=function(g){for(let _=0,v=p.length;_<v;_+=2){const S=p[_],E=p[_+1];if(S.global&&(S.lastIndex=0),S.test(g))return E}return null}}}const jE=new YE;class $d{constructor(e){this.manager=e!==void 0?e:jE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,i){const r=this;return new Promise(function(l,u){r.load(e,l,i,u)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}$d.DEFAULT_MATERIAL_NAME="__DEFAULT";const na={};class ZE extends Error{constructor(e,i){super(e),this.response=i}}class KE extends $d{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,i,r,l){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const u=mv.get(e);if(u!==void 0)return this.manager.itemStart(e),setTimeout(()=>{i&&i(u),this.manager.itemEnd(e)},0),u;if(na[e]!==void 0){na[e].push({onLoad:i,onProgress:r,onError:l});return}na[e]=[],na[e].push({onLoad:i,onProgress:r,onError:l});const f=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),d=this.mimeType,m=this.responseType;fetch(f).then(p=>{if(p.status===200||p.status===0){if(p.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||p.body===void 0||p.body.getReader===void 0)return p;const g=na[e],_=p.body.getReader(),v=p.headers.get("X-File-Size")||p.headers.get("Content-Length"),S=v?parseInt(v):0,E=S!==0;let A=0;const y=new ReadableStream({start(x){D();function D(){_.read().then(({done:L,value:w})=>{if(L)x.close();else{A+=w.byteLength;const I=new ProgressEvent("progress",{lengthComputable:E,loaded:A,total:S});for(let F=0,O=g.length;F<O;F++){const V=g[F];V.onProgress&&V.onProgress(I)}x.enqueue(w),D()}},L=>{x.error(L)})}}});return new Response(y)}else throw new ZE(`fetch for "${p.url}" responded with ${p.status}: ${p.statusText}`,p)}).then(p=>{switch(m){case"arraybuffer":return p.arrayBuffer();case"blob":return p.blob();case"document":return p.text().then(g=>new DOMParser().parseFromString(g,d));case"json":return p.json();default:if(d==="")return p.text();{const _=/charset="?([^;"\s]*)"?/i.exec(d),v=_&&_[1]?_[1].toLowerCase():void 0,S=new TextDecoder(v);return p.arrayBuffer().then(E=>S.decode(E))}}}).then(p=>{mv.add(e,p);const g=na[e];delete na[e];for(let _=0,v=g.length;_<v;_++){const S=g[_];S.onLoad&&S.onLoad(p)}}).catch(p=>{const g=na[e];if(g===void 0)throw this.manager.itemError(e),p;delete na[e];for(let _=0,v=g.length;_<v;_++){const S=g[_];S.onError&&S.onError(p)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class z0 extends L0{constructor(e=-1,i=1,r=1,l=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,f=r+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,f=u+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(u,f,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}let Lu;class B0{static getContext(){return Lu===void 0&&(Lu=new(window.AudioContext||window.webkitAudioContext)),Lu}static setContext(e){Lu=e}}class QE extends $d{constructor(e){super(e)}load(e,i,r,l){const u=this,f=new KE(this.manager);f.setResponseType("arraybuffer"),f.setPath(this.path),f.setRequestHeader(this.requestHeader),f.setWithCredentials(this.withCredentials),f.load(e,function(m){try{const p=m.slice(0);B0.getContext().decodeAudioData(p,function(_){i(_)}).catch(d)}catch(p){d(p)}},r,l);function d(m){l?l(m):console.error(m),u.manager.itemError(e)}}}class JE extends li{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class ep{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=gv(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=gv();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function gv(){return performance.now()}const yr=new $,Bh=new Is,$E=new $,Mr=new $,Er=new $;class eT extends Pn{constructor(){super(),this.type="AudioListener",this.context=B0.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new ep}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const i=this.context.listener;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(yr,Bh,$E),Mr.set(0,0,-1).applyQuaternion(Bh),Er.set(0,1,0).applyQuaternion(Bh),i.positionX){const r=this.context.currentTime+this.timeDelta;i.positionX.linearRampToValueAtTime(yr.x,r),i.positionY.linearRampToValueAtTime(yr.y,r),i.positionZ.linearRampToValueAtTime(yr.z,r),i.forwardX.linearRampToValueAtTime(Mr.x,r),i.forwardY.linearRampToValueAtTime(Mr.y,r),i.forwardZ.linearRampToValueAtTime(Mr.z,r),i.upX.linearRampToValueAtTime(Er.x,r),i.upY.linearRampToValueAtTime(Er.y,r),i.upZ.linearRampToValueAtTime(Er.z,r)}else i.setPosition(yr.x,yr.y,yr.z),i.setOrientation(Mr.x,Mr.y,Mr.z,Er.x,Er.y,Er.z)}}class tT extends Pn{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const i=this.context.createBufferSource();return i.buffer=this.buffer,i.loop=this.loop,i.loopStart=this.loopStart,i.loopEnd=this.loopEnd,i.onended=this.onEnded.bind(this),i.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=i,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,i=this.filters.length;e<i;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,i=this.filters.length;e<i;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}copy(e,i){return super.copy(e,i),e.sourceType!=="buffer"?(console.warn("THREE.Audio: Audio source type cannot be copied."),this):(this.autoplay=e.autoplay,this.buffer=e.buffer,this.detune=e.detune,this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this.offset=e.offset,this.duration=e.duration,this.playbackRate=e.playbackRate,this.hasPlaybackControl=e.hasPlaybackControl,this.sourceType=e.sourceType,this.filters=e.filters.slice(),this)}clone(e){return new this.constructor(this.listener).copy(this,e)}}class nT{constructor(e,i=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=i,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const i=this.getFrequencyData();for(let r=0;r<i.length;r++)e+=i[r];return e/i.length}}function _v(s,e,i,r){const l=iT(r);switch(i){case x0:return s*e;case y0:return s*e/l.components*l.byteLength;case Wd:return s*e/l.components*l.byteLength;case M0:return s*e*2/l.components*l.byteLength;case qd:return s*e*2/l.components*l.byteLength;case S0:return s*e*3/l.components*l.byteLength;case _i:return s*e*4/l.components*l.byteLength;case Yd:return s*e*4/l.components*l.byteLength;case Fu:case Hu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Gu:case Vu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ld:case cd:return Math.max(s,16)*Math.max(e,8)/4;case od:case ud:return Math.max(s,8)*Math.max(e,8)/2;case fd:case hd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case dd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case pd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case md:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case gd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case _d:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case vd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case xd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Sd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case yd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Md:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Ed:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Td:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case bd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Ad:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Rd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case ku:case Cd:case wd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case E0:case Dd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Ud:case Ld:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function iT(s){switch(s){case ha:case g0:return{byteLength:1,components:1};case Wo:case _0:case ua:return{byteLength:2,components:1};case kd:case Xd:return{byteLength:2,components:4};case Lr:case Vd:case ra:return{byteLength:4,components:1};case v0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function I0(){let s=null,e=!1,i=null,r=null;function l(u,f){i(u,f),r=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=s.requestAnimationFrame(l),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){s=u}}}function aT(s){const e=new WeakMap;function i(d,m){const p=d.array,g=d.usage,_=p.byteLength,v=s.createBuffer();s.bindBuffer(m,v),s.bufferData(m,p,g),d.onUploadCallback();let S;if(p instanceof Float32Array)S=s.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=s.SHORT;else if(p instanceof Uint32Array)S=s.UNSIGNED_INT;else if(p instanceof Int32Array)S=s.INT;else if(p instanceof Int8Array)S=s.BYTE;else if(p instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function r(d,m,p){const g=m.array,_=m.updateRanges;if(s.bindBuffer(p,d),_.length===0)s.bufferSubData(p,0,g);else{_.sort((S,E)=>S.start-E.start);let v=0;for(let S=1;S<_.length;S++){const E=_[v],A=_[S];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++v,_[v]=A)}_.length=v+1;for(let S=0,E=_.length;S<E;S++){const A=_[S];s.bufferSubData(p,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(s.deleteBuffer(m.buffer),e.delete(d))}function f(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:f}}var rT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sT=`#ifdef USE_ALPHAHASH
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
#endif`,oT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fT=`#ifdef USE_AOMAP
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
#endif`,hT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dT=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,pT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_T=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vT=`#ifdef USE_IRIDESCENCE
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
#endif`,xT=`#ifdef USE_BUMPMAP
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
#endif`,ST=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,yT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,MT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ET=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,TT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,AT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,RT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,CT=`#define PI 3.141592653589793
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
} // validated`,wT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,DT=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,UT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,LT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,NT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,PT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,OT="gl_FragColor = linearToOutputTexel( gl_FragColor );",zT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,BT=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,IT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,FT=`#ifdef USE_ENVMAP
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
#endif`,HT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,GT=`#ifdef USE_ENVMAP
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
#endif`,VT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,XT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,WT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qT=`#ifdef USE_GRADIENTMAP
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
}`,YT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ZT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,KT=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,QT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,JT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$T=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,eb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ib=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,ab=`
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,rb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,sb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ob=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lb=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ub=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,db=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,pb=`#if defined( USE_POINTS_UV )
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
#endif`,mb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_b=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sb=`#ifdef USE_MORPHTARGETS
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
#endif`,yb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Eb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Tb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ab=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rb=`#ifdef USE_NORMALMAP
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
#endif`,Cb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Db=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ub=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Pb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ob=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ib=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Gb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,Vb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,kb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Xb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wb=`#ifdef USE_SKINNING
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
#endif`,qb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yb=`#ifdef USE_SKINNING
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
#endif`,jb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jb=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$b=`#ifdef USE_TRANSMISSION
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
#endif`,e1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,t1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,n1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,i1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const a1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,r1=`uniform sampler2D t2D;
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
}`,s1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,o1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c1=`#include <common>
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
}`,f1=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,h1=`#define DISTANCE
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
}`,d1=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,p1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,m1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g1=`uniform float scale;
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
}`,_1=`uniform vec3 diffuse;
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
}`,v1=`#include <common>
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
}`,x1=`uniform vec3 diffuse;
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
}`,S1=`#define LAMBERT
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
}`,y1=`#define LAMBERT
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
}`,M1=`#define MATCAP
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
}`,E1=`#define MATCAP
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
}`,T1=`#define NORMAL
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
}`,b1=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,A1=`#define PHONG
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
}`,R1=`#define PHONG
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
}`,C1=`#define STANDARD
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
}`,w1=`#define STANDARD
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,D1=`#define TOON
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
}`,U1=`#define TOON
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
}`,L1=`uniform float size;
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
}`,N1=`uniform vec3 diffuse;
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
}`,P1=`#include <common>
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
}`,O1=`uniform vec3 color;
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
}`,z1=`uniform float rotation;
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
}`,B1=`uniform vec3 diffuse;
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
}`,ut={alphahash_fragment:rT,alphahash_pars_fragment:sT,alphamap_fragment:oT,alphamap_pars_fragment:lT,alphatest_fragment:uT,alphatest_pars_fragment:cT,aomap_fragment:fT,aomap_pars_fragment:hT,batching_pars_vertex:dT,batching_vertex:pT,begin_vertex:mT,beginnormal_vertex:gT,bsdfs:_T,iridescence_fragment:vT,bumpmap_pars_fragment:xT,clipping_planes_fragment:ST,clipping_planes_pars_fragment:yT,clipping_planes_pars_vertex:MT,clipping_planes_vertex:ET,color_fragment:TT,color_pars_fragment:bT,color_pars_vertex:AT,color_vertex:RT,common:CT,cube_uv_reflection_fragment:wT,defaultnormal_vertex:DT,displacementmap_pars_vertex:UT,displacementmap_vertex:LT,emissivemap_fragment:NT,emissivemap_pars_fragment:PT,colorspace_fragment:OT,colorspace_pars_fragment:zT,envmap_fragment:BT,envmap_common_pars_fragment:IT,envmap_pars_fragment:FT,envmap_pars_vertex:HT,envmap_physical_pars_fragment:QT,envmap_vertex:GT,fog_vertex:VT,fog_pars_vertex:kT,fog_fragment:XT,fog_pars_fragment:WT,gradientmap_pars_fragment:qT,lightmap_pars_fragment:YT,lights_lambert_fragment:jT,lights_lambert_pars_fragment:ZT,lights_pars_begin:KT,lights_toon_fragment:JT,lights_toon_pars_fragment:$T,lights_phong_fragment:eb,lights_phong_pars_fragment:tb,lights_physical_fragment:nb,lights_physical_pars_fragment:ib,lights_fragment_begin:ab,lights_fragment_maps:rb,lights_fragment_end:sb,logdepthbuf_fragment:ob,logdepthbuf_pars_fragment:lb,logdepthbuf_pars_vertex:ub,logdepthbuf_vertex:cb,map_fragment:fb,map_pars_fragment:hb,map_particle_fragment:db,map_particle_pars_fragment:pb,metalnessmap_fragment:mb,metalnessmap_pars_fragment:gb,morphinstance_vertex:_b,morphcolor_vertex:vb,morphnormal_vertex:xb,morphtarget_pars_vertex:Sb,morphtarget_vertex:yb,normal_fragment_begin:Mb,normal_fragment_maps:Eb,normal_pars_fragment:Tb,normal_pars_vertex:bb,normal_vertex:Ab,normalmap_pars_fragment:Rb,clearcoat_normal_fragment_begin:Cb,clearcoat_normal_fragment_maps:wb,clearcoat_pars_fragment:Db,iridescence_pars_fragment:Ub,opaque_fragment:Lb,packing:Nb,premultiplied_alpha_fragment:Pb,project_vertex:Ob,dithering_fragment:zb,dithering_pars_fragment:Bb,roughnessmap_fragment:Ib,roughnessmap_pars_fragment:Fb,shadowmap_pars_fragment:Hb,shadowmap_pars_vertex:Gb,shadowmap_vertex:Vb,shadowmask_pars_fragment:kb,skinbase_vertex:Xb,skinning_pars_vertex:Wb,skinning_vertex:qb,skinnormal_vertex:Yb,specularmap_fragment:jb,specularmap_pars_fragment:Zb,tonemapping_fragment:Kb,tonemapping_pars_fragment:Qb,transmission_fragment:Jb,transmission_pars_fragment:$b,uv_pars_fragment:e1,uv_pars_vertex:t1,uv_vertex:n1,worldpos_vertex:i1,background_vert:a1,background_frag:r1,backgroundCube_vert:s1,backgroundCube_frag:o1,cube_vert:l1,cube_frag:u1,depth_vert:c1,depth_frag:f1,distanceRGBA_vert:h1,distanceRGBA_frag:d1,equirect_vert:p1,equirect_frag:m1,linedashed_vert:g1,linedashed_frag:_1,meshbasic_vert:v1,meshbasic_frag:x1,meshlambert_vert:S1,meshlambert_frag:y1,meshmatcap_vert:M1,meshmatcap_frag:E1,meshnormal_vert:T1,meshnormal_frag:b1,meshphong_vert:A1,meshphong_frag:R1,meshphysical_vert:C1,meshphysical_frag:w1,meshtoon_vert:D1,meshtoon_frag:U1,points_vert:L1,points_frag:N1,shadow_vert:P1,shadow_frag:O1,sprite_vert:z1,sprite_frag:B1},Ne={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},Ri={basic:{uniforms:Nn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:Nn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Ct(0)}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:Nn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:Nn([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:Nn([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new Ct(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:Nn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:Nn([Ne.points,Ne.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:Nn([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:Nn([Ne.common,Ne.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:Nn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:Nn([Ne.sprite,Ne.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distanceRGBA:{uniforms:Nn([Ne.common,Ne.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distanceRGBA_vert,fragmentShader:ut.distanceRGBA_frag},shadow:{uniforms:Nn([Ne.lights,Ne.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};Ri.physical={uniforms:Nn([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};const Nu={r:0,b:0,g:0},Tr=new da,I1=new sn;function F1(s,e,i,r,l,u,f){const d=new Ct(0);let m=u===!0?0:1,p,g,_=null,v=0,S=null;function E(L){let w=L.isScene===!0?L.background:null;return w&&w.isTexture&&(w=(L.backgroundBlurriness>0?i:e).get(w)),w}function A(L){let w=!1;const I=E(L);I===null?x(d,m):I&&I.isColor&&(x(I,1),w=!0);const F=s.xr.getEnvironmentBlendMode();F==="additive"?r.buffers.color.setClear(0,0,0,1,f):F==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||w)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(L,w){const I=E(w);I&&(I.isCubeTexture||I.mapping===Ju)?(g===void 0&&(g=new vi(new tl(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:Ns(Ri.backgroundCube.uniforms),vertexShader:Ri.backgroundCube.vertexShader,fragmentShader:Ri.backgroundCube.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(F,O,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Tr.copy(w.backgroundRotation),Tr.x*=-1,Tr.y*=-1,Tr.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Tr.y*=-1,Tr.z*=-1),g.material.uniforms.envMap.value=I,g.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(I1.makeRotationFromEuler(Tr)),g.material.toneMapped=bt.getTransfer(I.colorSpace)!==Pt,(_!==I||v!==I.version||S!==s.toneMapping)&&(g.material.needsUpdate=!0,_=I,v=I.version,S=s.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):I&&I.isTexture&&(p===void 0&&(p=new vi(new ec(2,2),new Un({name:"BackgroundMaterial",uniforms:Ns(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:Qa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=I,p.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,p.material.toneMapped=bt.getTransfer(I.colorSpace)!==Pt,I.matrixAutoUpdate===!0&&I.updateMatrix(),p.material.uniforms.uvTransform.value.copy(I.matrix),(_!==I||v!==I.version||S!==s.toneMapping)&&(p.material.needsUpdate=!0,_=I,v=I.version,S=s.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function x(L,w){L.getRGB(Nu,U0(s)),r.buffers.color.setClear(Nu.r,Nu.g,Nu.b,w,f)}function D(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(L,w=1){d.set(L),m=w,x(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,x(d,m)},render:A,addToRenderList:y,dispose:D}}function H1(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=v(null);let u=l,f=!1;function d(R,G,oe,se,ve){let de=!1;const B=_(se,oe,G);u!==B&&(u=B,p(u.object)),de=S(R,se,oe,ve),de&&E(R,se,oe,ve),ve!==null&&e.update(ve,s.ELEMENT_ARRAY_BUFFER),(de||f)&&(f=!1,w(R,G,oe,se),ve!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ve).buffer))}function m(){return s.createVertexArray()}function p(R){return s.bindVertexArray(R)}function g(R){return s.deleteVertexArray(R)}function _(R,G,oe){const se=oe.wireframe===!0;let ve=r[R.id];ve===void 0&&(ve={},r[R.id]=ve);let de=ve[G.id];de===void 0&&(de={},ve[G.id]=de);let B=de[se];return B===void 0&&(B=v(m()),de[se]=B),B}function v(R){const G=[],oe=[],se=[];for(let ve=0;ve<i;ve++)G[ve]=0,oe[ve]=0,se[ve]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:oe,attributeDivisors:se,object:R,attributes:{},index:null}}function S(R,G,oe,se){const ve=u.attributes,de=G.attributes;let B=0;const Z=oe.getAttributes();for(const Y in Z)if(Z[Y].location>=0){const N=ve[Y];let ee=de[Y];if(ee===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(ee=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(ee=R.instanceColor)),N===void 0||N.attribute!==ee||ee&&N.data!==ee.data)return!0;B++}return u.attributesNum!==B||u.index!==se}function E(R,G,oe,se){const ve={},de=G.attributes;let B=0;const Z=oe.getAttributes();for(const Y in Z)if(Z[Y].location>=0){let N=de[Y];N===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(N=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(N=R.instanceColor));const ee={};ee.attribute=N,N&&N.data&&(ee.data=N.data),ve[Y]=ee,B++}u.attributes=ve,u.attributesNum=B,u.index=se}function A(){const R=u.newAttributes;for(let G=0,oe=R.length;G<oe;G++)R[G]=0}function y(R){x(R,0)}function x(R,G){const oe=u.newAttributes,se=u.enabledAttributes,ve=u.attributeDivisors;oe[R]=1,se[R]===0&&(s.enableVertexAttribArray(R),se[R]=1),ve[R]!==G&&(s.vertexAttribDivisor(R,G),ve[R]=G)}function D(){const R=u.newAttributes,G=u.enabledAttributes;for(let oe=0,se=G.length;oe<se;oe++)G[oe]!==R[oe]&&(s.disableVertexAttribArray(oe),G[oe]=0)}function L(R,G,oe,se,ve,de,B){B===!0?s.vertexAttribIPointer(R,G,oe,ve,de):s.vertexAttribPointer(R,G,oe,se,ve,de)}function w(R,G,oe,se){A();const ve=se.attributes,de=oe.getAttributes(),B=G.defaultAttributeValues;for(const Z in de){const Y=de[Z];if(Y.location>=0){let Ee=ve[Z];if(Ee===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(Ee=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(Ee=R.instanceColor)),Ee!==void 0){const N=Ee.normalized,ee=Ee.itemSize,xe=e.get(Ee);if(xe===void 0)continue;const ye=xe.buffer,Q=xe.type,me=xe.bytesPerElement,Me=Q===s.INT||Q===s.UNSIGNED_INT||Ee.gpuType===Vd;if(Ee.isInterleavedBufferAttribute){const Re=Ee.data,we=Re.stride,lt=Ee.offset;if(Re.isInstancedInterleavedBuffer){for(let Qe=0;Qe<Y.locationSize;Qe++)x(Y.location+Qe,Re.meshPerAttribute);R.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=Re.meshPerAttribute*Re.count)}else for(let Qe=0;Qe<Y.locationSize;Qe++)y(Y.location+Qe);s.bindBuffer(s.ARRAY_BUFFER,ye);for(let Qe=0;Qe<Y.locationSize;Qe++)L(Y.location+Qe,ee/Y.locationSize,Q,N,we*me,(lt+ee/Y.locationSize*Qe)*me,Me)}else{if(Ee.isInstancedBufferAttribute){for(let Re=0;Re<Y.locationSize;Re++)x(Y.location+Re,Ee.meshPerAttribute);R.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let Re=0;Re<Y.locationSize;Re++)y(Y.location+Re);s.bindBuffer(s.ARRAY_BUFFER,ye);for(let Re=0;Re<Y.locationSize;Re++)L(Y.location+Re,ee/Y.locationSize,Q,N,ee*me,ee/Y.locationSize*Re*me,Me)}}else if(B!==void 0){const N=B[Z];if(N!==void 0)switch(N.length){case 2:s.vertexAttrib2fv(Y.location,N);break;case 3:s.vertexAttrib3fv(Y.location,N);break;case 4:s.vertexAttrib4fv(Y.location,N);break;default:s.vertexAttrib1fv(Y.location,N)}}}}D()}function I(){V();for(const R in r){const G=r[R];for(const oe in G){const se=G[oe];for(const ve in se)g(se[ve].object),delete se[ve];delete G[oe]}delete r[R]}}function F(R){if(r[R.id]===void 0)return;const G=r[R.id];for(const oe in G){const se=G[oe];for(const ve in se)g(se[ve].object),delete se[ve];delete G[oe]}delete r[R.id]}function O(R){for(const G in r){const oe=r[G];if(oe[R.id]===void 0)continue;const se=oe[R.id];for(const ve in se)g(se[ve].object),delete se[ve];delete oe[R.id]}}function V(){U(),f=!0,u!==l&&(u=l,p(u.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:V,resetDefaultState:U,dispose:I,releaseStatesOfGeometry:F,releaseStatesOfProgram:O,initAttributes:A,enableAttribute:y,disableUnusedAttributes:D}}function G1(s,e,i){let r;function l(p){r=p}function u(p,g){s.drawArrays(r,p,g),i.update(g,r,1)}function f(p,g,_){_!==0&&(s.drawArraysInstanced(r,p,g,_),i.update(g,r,_))}function d(p,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,_);let S=0;for(let E=0;E<_;E++)S+=g[E];i.update(S,r,1)}function m(p,g,_,v){if(_===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<p.length;E++)f(p[E],g[E],v[E]);else{S.multiDrawArraysInstancedWEBGL(r,p,0,g,0,v,0,_);let E=0;for(let A=0;A<_;A++)E+=g[A]*v[A];i.update(E,r,1)}}this.setMode=l,this.render=u,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function V1(s,e,i,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(O){return!(O!==_i&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(O){const V=O===ua&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==ha&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==ra&&!V)}function m(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=i.logarithmicDepthBuffer===!0,v=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),D=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),w=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=E>0,F=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reverseDepthBuffer:v,maxTextures:S,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:D,maxVaryings:L,maxFragmentUniforms:w,vertexTextures:I,maxSamples:F}}function k1(s){const e=this;let i=null,r=0,l=!1,u=!1;const f=new Ar,d=new st,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const S=_.length!==0||v||r!==0||l;return l=v,r=_.length,S},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(_,v){i=g(_,v,0)},this.setState=function(_,v,S){const E=_.clippingPlanes,A=_.clipIntersection,y=_.clipShadows,x=s.get(_);if(!l||E===null||E.length===0||u&&!y)u?g(null):p();else{const D=u?0:r,L=D*4;let w=x.clippingState||null;m.value=w,w=g(E,v,L,S);for(let I=0;I!==L;++I)w[I]=i[I];x.clippingState=w,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=D}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(_,v,S,E){const A=_!==null?_.length:0;let y=null;if(A!==0){if(y=m.value,E!==!0||y===null){const x=S+A*4,D=v.matrixWorldInverse;d.getNormalMatrix(D),(y===null||y.length<x)&&(y=new Float32Array(x));for(let L=0,w=S;L!==A;++L,w+=4)f.copy(_[L]).applyMatrix4(D,d),f.normal.toArray(y,w),y[w+3]=f.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,y}}function X1(s){let e=new WeakMap;function i(f,d){return d===id?f.mapping=Ds:d===ad&&(f.mapping=Us),f}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===id||d===ad)if(e.has(f)){const m=e.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new FE(m.height);return p.fromEquirectangularTexture(s,f),e.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const d=f.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const bs=4,vv=[.125,.215,.35,.446,.526,.582],wr=20,Ih=new z0,xv=new Ct;let Fh=null,Hh=0,Gh=0,Vh=!1;const Rr=(1+Math.sqrt(5))/2,Ts=1/Rr,Sv=[new $(-Rr,Ts,0),new $(Rr,Ts,0),new $(-Ts,0,Rr),new $(Ts,0,Rr),new $(0,Rr,-Ts),new $(0,Rr,Ts),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)],W1=new $;class yv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100,u={}){const{size:f=256,position:d=W1}=u;Fh=this._renderer.getRenderTarget(),Hh=this._renderer.getActiveCubeFace(),Gh=this._renderer.getActiveMipmapLevel(),Vh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ev(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fh,Hh,Gh),this._renderer.xr.enabled=Vh,e.scissorTest=!1,Pu(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Ds||e.mapping===Us?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fh=this._renderer.getRenderTarget(),Hh=this._renderer.getActiveCubeFace(),Gh=this._renderer.getActiveMipmapLevel(),Vh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ci,minFilter:Ci,generateMipmaps:!1,type:ua,format:_i,colorSpace:Ls,depthBuffer:!1},l=Mv(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mv(e,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=q1(u)),this._blurMaterial=Y1(u,e,i)}return l}_compileMaterial(e){const i=new vi(this._lodPlanes[0],e);this._renderer.compile(i,Ih)}_sceneToCubeUV(e,i,r,l,u){const m=new li(90,1,i,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,S=_.toneMapping;_.getClearColor(xv),_.toneMapping=Ka,_.autoClear=!1;const E=new Kd({name:"PMREM.Background",side:Gn,depthWrite:!1,depthTest:!1}),A=new vi(new tl,E);let y=!1;const x=e.background;x?x.isColor&&(E.color.copy(x),e.background=null,y=!0):(E.color.copy(xv),y=!0);for(let D=0;D<6;D++){const L=D%3;L===0?(m.up.set(0,p[D],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+g[D],u.y,u.z)):L===1?(m.up.set(0,0,p[D]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+g[D],u.z)):(m.up.set(0,p[D],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+g[D]));const w=this._cubeSize;Pu(l,L*w,D>2?w:0,w,w),_.setRenderTarget(l),y&&_.render(A,m),_.render(e,m)}A.geometry.dispose(),A.material.dispose(),_.toneMapping=S,_.autoClear=v,e.background=x}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Ds||e.mapping===Us;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ev());const u=l?this._cubemapMaterial:this._equirectMaterial,f=new vi(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const m=this._cubeSize;Pu(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(f,Ih)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const f=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=Sv[(l-u-1)%Sv.length];this._blur(e,u-1,u,f,d)}i.autoClear=r}_blur(e,i,r,l,u){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,r,l,"latitudinal",u),this._halfBlur(f,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,f,d){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new vi(this._lodPlanes[l],p),v=p.uniforms,S=this._sizeLods[r]-1,E=isFinite(u)?Math.PI/(2*S):2*Math.PI/(2*wr-1),A=u/E,y=isFinite(u)?1+Math.floor(g*A):wr;y>wr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${wr}`);const x=[];let D=0;for(let O=0;O<wr;++O){const V=O/A,U=Math.exp(-V*V/2);x.push(U),O===0?D+=U:O<y&&(D+=2*U)}for(let O=0;O<x.length;O++)x[O]=x[O]/D;v.envMap.value=e.texture,v.samples.value=y,v.weights.value=x,v.latitudinal.value=f==="latitudinal",d&&(v.poleAxis.value=d);const{_lodMax:L}=this;v.dTheta.value=E,v.mipInt.value=L-r;const w=this._sizeLods[l],I=3*w*(l>L-bs?l-L+bs:0),F=4*(this._cubeSize-w);Pu(i,I,F,3*w,2*w),m.setRenderTarget(i),m.render(_,Ih)}}function q1(s){const e=[],i=[],r=[];let l=s;const u=s-bs+1+vv.length;for(let f=0;f<u;f++){const d=Math.pow(2,l);i.push(d);let m=1/d;f>s-bs?m=vv[f-s+bs-1]:f===0&&(m=0),r.push(m);const p=1/(d-2),g=-p,_=1+p,v=[g,g,_,g,_,_,g,g,_,_,g,_],S=6,E=6,A=3,y=2,x=1,D=new Float32Array(A*E*S),L=new Float32Array(y*E*S),w=new Float32Array(x*E*S);for(let F=0;F<S;F++){const O=F%3*2/3-1,V=F>2?0:-1,U=[O,V,0,O+2/3,V,0,O+2/3,V+1,0,O,V,0,O+2/3,V+1,0,O,V+1,0];D.set(U,A*E*F),L.set(v,y*E*F);const R=[F,F,F,F,F,F];w.set(R,x*E*F)}const I=new ma;I.setAttribute("position",new wi(D,A)),I.setAttribute("uv",new wi(L,y)),I.setAttribute("faceIndex",new wi(w,x)),e.push(I),l>bs&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function Mv(s,e,i){const r=new Si(s,e,i);return r.texture.mapping=Ju,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Pu(s,e,i,r,l){s.viewport.set(e,i,r,l),s.scissor.set(e,i,r,l)}function Y1(s,e,i){const r=new Float32Array(wr),l=new $(0,1,0);return new Un({name:"SphericalGaussianBlur",defines:{n:wr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:tp(),fragmentShader:`

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
		`,blending:la,depthTest:!1,depthWrite:!1})}function Ev(){return new Un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tp(),fragmentShader:`

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
		`,blending:la,depthTest:!1,depthWrite:!1})}function Tv(){return new Un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:la,depthTest:!1,depthWrite:!1})}function tp(){return`

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
	`}function j1(s){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===id||m===ad,g=m===Ds||m===Us;if(p||g){let _=e.get(d);const v=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==v)return i===null&&(i=new yv(s)),_=p?i.fromEquirectangular(d,_):i.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),_.texture;if(_!==void 0)return _.texture;{const S=d.image;return p&&S&&S.height>0||g&&S&&l(S)?(i===null&&(i=new yv(s)),_=p?i.fromEquirectangular(d):i.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),d.addEventListener("dispose",u),_.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function f(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function Z1(s){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Rs("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function K1(s,e,i,r){const l={},u=new WeakMap;function f(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const E in v.attributes)e.remove(v.attributes[E]);v.removeEventListener("dispose",f),delete l[v.id];const S=u.get(v);S&&(e.remove(S),u.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function d(_,v){return l[v.id]===!0||(v.addEventListener("dispose",f),l[v.id]=!0,i.memory.geometries++),v}function m(_){const v=_.attributes;for(const S in v)e.update(v[S],s.ARRAY_BUFFER)}function p(_){const v=[],S=_.index,E=_.attributes.position;let A=0;if(S!==null){const D=S.array;A=S.version;for(let L=0,w=D.length;L<w;L+=3){const I=D[L+0],F=D[L+1],O=D[L+2];v.push(I,F,F,O,O,I)}}else if(E!==void 0){const D=E.array;A=E.version;for(let L=0,w=D.length/3-1;L<w;L+=3){const I=L+0,F=L+1,O=L+2;v.push(I,F,F,O,O,I)}}else return;const y=new(b0(v)?D0:w0)(v,1);y.version=A;const x=u.get(_);x&&e.remove(x),u.set(_,y)}function g(_){const v=u.get(_);if(v){const S=_.index;S!==null&&v.version<S.version&&p(_)}else p(_);return u.get(_)}return{get:d,update:m,getWireframeAttribute:g}}function Q1(s,e,i){let r;function l(v){r=v}let u,f;function d(v){u=v.type,f=v.bytesPerElement}function m(v,S){s.drawElements(r,S,u,v*f),i.update(S,r,1)}function p(v,S,E){E!==0&&(s.drawElementsInstanced(r,S,u,v*f,E),i.update(S,r,E))}function g(v,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,u,v,0,E);let y=0;for(let x=0;x<E;x++)y+=S[x];i.update(y,r,1)}function _(v,S,E,A){if(E===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<v.length;x++)p(v[x]/f,S[x],A[x]);else{y.multiDrawElementsInstancedWEBGL(r,S,0,u,v,0,A,0,E);let x=0;for(let D=0;D<E;D++)x+=S[D]*A[D];i.update(x,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function J1(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,f,d){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=d*(u/3);break;case s.LINES:i.lines+=d*(u/2);break;case s.LINE_STRIP:i.lines+=d*(u-1);break;case s.LINE_LOOP:i.lines+=d*u;break;case s.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function $1(s,e,i){const r=new WeakMap,l=new en;function u(f,d,m){const p=f.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let v=r.get(d);if(v===void 0||v.count!==_){let R=function(){V.dispose(),r.delete(d),d.removeEventListener("dispose",R)};var S=R;v!==void 0&&v.texture.dispose();const E=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],D=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let w=0;E===!0&&(w=1),A===!0&&(w=2),y===!0&&(w=3);let I=d.attributes.position.count*w,F=1;I>e.maxTextureSize&&(F=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const O=new Float32Array(I*F*4*_),V=new A0(O,I,F,_);V.type=ra,V.needsUpdate=!0;const U=w*4;for(let G=0;G<_;G++){const oe=x[G],se=D[G],ve=L[G],de=I*F*4*G;for(let B=0;B<oe.count;B++){const Z=B*U;E===!0&&(l.fromBufferAttribute(oe,B),O[de+Z+0]=l.x,O[de+Z+1]=l.y,O[de+Z+2]=l.z,O[de+Z+3]=0),A===!0&&(l.fromBufferAttribute(se,B),O[de+Z+4]=l.x,O[de+Z+5]=l.y,O[de+Z+6]=l.z,O[de+Z+7]=0),y===!0&&(l.fromBufferAttribute(ve,B),O[de+Z+8]=l.x,O[de+Z+9]=l.y,O[de+Z+10]=l.z,O[de+Z+11]=ve.itemSize===4?l.w:1)}}v={count:_,texture:V,size:new ot(I,F)},r.set(d,v),d.addEventListener("dispose",R)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let E=0;for(let y=0;y<p.length;y++)E+=p[y];const A=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(s,"morphTargetBaseInfluence",A),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",v.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:u}}function eA(s,e,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,g=m.geometry,_=e.get(m,g);if(l.get(_)!==p&&(e.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const v=m.skeleton;l.get(v)!==p&&(v.update(),l.set(v,p))}return _}function f(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:f}}const F0=new Vn,bv=new O0(1,1),H0=new A0,G0=new ME,V0=new N0,Av=[],Rv=[],Cv=new Float32Array(16),wv=new Float32Array(9),Dv=new Float32Array(4);function Fs(s,e,i){const r=s[0];if(r<=0||r>0)return s;const l=e*i;let u=Av[l];if(u===void 0&&(u=new Float32Array(l),Av[l]=u),e!==0){r.toArray(u,0);for(let f=1,d=0;f!==e;++f)d+=i,s[f].toArray(u,d)}return u}function fn(s,e){if(s.length!==e.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==e[i])return!1;return!0}function hn(s,e){for(let i=0,r=e.length;i<r;i++)s[i]=e[i]}function tc(s,e){let i=Rv[e];i===void 0&&(i=new Int32Array(e),Rv[e]=i);for(let r=0;r!==e;++r)i[r]=s.allocateTextureUnit();return i}function tA(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function nA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(fn(i,e))return;s.uniform2fv(this.addr,e),hn(i,e)}}function iA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(fn(i,e))return;s.uniform3fv(this.addr,e),hn(i,e)}}function aA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(fn(i,e))return;s.uniform4fv(this.addr,e),hn(i,e)}}function rA(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(fn(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),hn(i,e)}else{if(fn(i,r))return;Dv.set(r),s.uniformMatrix2fv(this.addr,!1,Dv),hn(i,r)}}function sA(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(fn(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),hn(i,e)}else{if(fn(i,r))return;wv.set(r),s.uniformMatrix3fv(this.addr,!1,wv),hn(i,r)}}function oA(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(fn(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),hn(i,e)}else{if(fn(i,r))return;Cv.set(r),s.uniformMatrix4fv(this.addr,!1,Cv),hn(i,r)}}function lA(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function uA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(fn(i,e))return;s.uniform2iv(this.addr,e),hn(i,e)}}function cA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(fn(i,e))return;s.uniform3iv(this.addr,e),hn(i,e)}}function fA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(fn(i,e))return;s.uniform4iv(this.addr,e),hn(i,e)}}function hA(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function dA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(fn(i,e))return;s.uniform2uiv(this.addr,e),hn(i,e)}}function pA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(fn(i,e))return;s.uniform3uiv(this.addr,e),hn(i,e)}}function mA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(fn(i,e))return;s.uniform4uiv(this.addr,e),hn(i,e)}}function gA(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let u;this.type===s.SAMPLER_2D_SHADOW?(bv.compareFunction=T0,u=bv):u=F0,i.setTexture2D(e||u,l)}function _A(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||G0,l)}function vA(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||V0,l)}function xA(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||H0,l)}function SA(s){switch(s){case 5126:return tA;case 35664:return nA;case 35665:return iA;case 35666:return aA;case 35674:return rA;case 35675:return sA;case 35676:return oA;case 5124:case 35670:return lA;case 35667:case 35671:return uA;case 35668:case 35672:return cA;case 35669:case 35673:return fA;case 5125:return hA;case 36294:return dA;case 36295:return pA;case 36296:return mA;case 35678:case 36198:case 36298:case 36306:case 35682:return gA;case 35679:case 36299:case 36307:return _A;case 35680:case 36300:case 36308:case 36293:return vA;case 36289:case 36303:case 36311:case 36292:return xA}}function yA(s,e){s.uniform1fv(this.addr,e)}function MA(s,e){const i=Fs(e,this.size,2);s.uniform2fv(this.addr,i)}function EA(s,e){const i=Fs(e,this.size,3);s.uniform3fv(this.addr,i)}function TA(s,e){const i=Fs(e,this.size,4);s.uniform4fv(this.addr,i)}function bA(s,e){const i=Fs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function AA(s,e){const i=Fs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function RA(s,e){const i=Fs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function CA(s,e){s.uniform1iv(this.addr,e)}function wA(s,e){s.uniform2iv(this.addr,e)}function DA(s,e){s.uniform3iv(this.addr,e)}function UA(s,e){s.uniform4iv(this.addr,e)}function LA(s,e){s.uniform1uiv(this.addr,e)}function NA(s,e){s.uniform2uiv(this.addr,e)}function PA(s,e){s.uniform3uiv(this.addr,e)}function OA(s,e){s.uniform4uiv(this.addr,e)}function zA(s,e,i){const r=this.cache,l=e.length,u=tc(i,l);fn(r,u)||(s.uniform1iv(this.addr,u),hn(r,u));for(let f=0;f!==l;++f)i.setTexture2D(e[f]||F0,u[f])}function BA(s,e,i){const r=this.cache,l=e.length,u=tc(i,l);fn(r,u)||(s.uniform1iv(this.addr,u),hn(r,u));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||G0,u[f])}function IA(s,e,i){const r=this.cache,l=e.length,u=tc(i,l);fn(r,u)||(s.uniform1iv(this.addr,u),hn(r,u));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||V0,u[f])}function FA(s,e,i){const r=this.cache,l=e.length,u=tc(i,l);fn(r,u)||(s.uniform1iv(this.addr,u),hn(r,u));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||H0,u[f])}function HA(s){switch(s){case 5126:return yA;case 35664:return MA;case 35665:return EA;case 35666:return TA;case 35674:return bA;case 35675:return AA;case 35676:return RA;case 5124:case 35670:return CA;case 35667:case 35671:return wA;case 35668:case 35672:return DA;case 35669:case 35673:return UA;case 5125:return LA;case 36294:return NA;case 36295:return PA;case 36296:return OA;case 35678:case 36198:case 36298:case 36306:case 35682:return zA;case 35679:case 36299:case 36307:return BA;case 35680:case 36300:case 36308:case 36293:return IA;case 36289:case 36303:case 36311:case 36292:return FA}}class GA{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=SA(i.type)}}class VA{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=HA(i.type)}}class kA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,f=l.length;u!==f;++u){const d=l[u];d.setValue(e,i[d.id],r)}}}const kh=/(\w+)(\])?(\[|\.)?/g;function Uv(s,e){s.seq.push(e),s.map[e.id]=e}function XA(s,e,i){const r=s.name,l=r.length;for(kh.lastIndex=0;;){const u=kh.exec(r),f=kh.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&f+2===l){Uv(i,p===void 0?new GA(d,s,e):new VA(d,s,e));break}else{let _=i.map[d];_===void 0&&(_=new kA(d),Uv(i,_)),i=_}}}class Xu{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=e.getActiveUniform(i,l),f=e.getUniformLocation(i,u.name);XA(u,f,this)}}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,f=i.length;u!==f;++u){const d=i[u],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const f=e[l];f.id in i&&r.push(f)}return r}}function Lv(s,e,i){const r=s.createShader(e);return s.shaderSource(r,i),s.compileShader(r),r}const WA=37297;let qA=0;function YA(s,e){const i=s.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let f=l;f<u;f++){const d=f+1;r.push(`${d===e?">":" "} ${d}: ${i[f]}`)}return r.join(`
`)}const Nv=new st;function jA(s){bt._getMatrix(Nv,bt.workingColorSpace,s);const e=`mat3( ${Nv.elements.map(i=>i.toFixed(4))} )`;switch(bt.getTransfer(s)){case Yu:return[e,"LinearTransferOETF"];case Pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Pv(s,e,i){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=s.getShaderInfoLog(e).trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+YA(s.getShaderSource(e),f)}else return l}function ZA(s,e){const i=jA(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function KA(s,e){let i;switch(e){case l0:i="Linear";break;case u0:i="Reinhard";break;case c0:i="Cineon";break;case f0:i="ACESFilmic";break;case d0:i="AgX";break;case p0:i="Neutral";break;case h0:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Ou=new $;function QA(){bt.getLuminanceCoefficients(Ou);const s=Ou.x.toFixed(4),e=Ou.y.toFixed(4),i=Ou.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function JA(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ko).join(`
`)}function $A(s){const e=[];for(const i in s){const r=s[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function eR(s,e){const i={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=s.getActiveAttrib(e,l),f=u.name;let d=1;u.type===s.FLOAT_MAT2&&(d=2),u.type===s.FLOAT_MAT3&&(d=3),u.type===s.FLOAT_MAT4&&(d=4),i[f]={type:u.type,location:s.getAttribLocation(e,f),locationSize:d}}return i}function ko(s){return s!==""}function Ov(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zv(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const tR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pd(s){return s.replace(tR,iR)}const nR=new Map;function iR(s,e){let i=ut[e];if(i===void 0){const r=nR.get(e);if(r!==void 0)i=ut[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Pd(i)}const aR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bv(s){return s.replace(aR,rR)}function rR(s,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function Iv(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function sR(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===s0?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===NM?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ia&&(e="SHADOWMAP_TYPE_VSM"),e}function oR(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ds:case Us:e="ENVMAP_TYPE_CUBE";break;case Ju:e="ENVMAP_TYPE_CUBE_UV";break}return e}function lR(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Us:e="ENVMAP_MODE_REFRACTION";break}return e}function uR(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case o0:e="ENVMAP_BLENDING_MULTIPLY";break;case JM:e="ENVMAP_BLENDING_MIX";break;case $M:e="ENVMAP_BLENDING_ADD";break}return e}function cR(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function fR(s,e,i,r){const l=s.getContext(),u=i.defines;let f=i.vertexShader,d=i.fragmentShader;const m=sR(i),p=oR(i),g=lR(i),_=uR(i),v=cR(i),S=JA(i),E=$A(u),A=l.createProgram();let y,x,D=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(ko).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(ko).join(`
`),x.length>0&&(x+=`
`)):(y=[Iv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ko).join(`
`),x=[Iv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ka?"#define TONE_MAPPING":"",i.toneMapping!==Ka?ut.tonemapping_pars_fragment:"",i.toneMapping!==Ka?KA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,ZA("linearToOutputTexel",i.outputColorSpace),QA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(ko).join(`
`)),f=Pd(f),f=Ov(f,i),f=zv(f,i),d=Pd(d),d=Ov(d,i),d=zv(d,i),f=Bv(f),d=Bv(d),i.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",i.glslVersion===Q_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Q_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const L=D+y+f,w=D+x+d,I=Lv(l,l.VERTEX_SHADER,L),F=Lv(l,l.FRAGMENT_SHADER,w);l.attachShader(A,I),l.attachShader(A,F),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function O(G){if(s.debug.checkShaderErrors){const oe=l.getProgramInfoLog(A).trim(),se=l.getShaderInfoLog(I).trim(),ve=l.getShaderInfoLog(F).trim();let de=!0,B=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(de=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,A,I,F);else{const Z=Pv(l,I,"vertex"),Y=Pv(l,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+oe+`
`+Z+`
`+Y)}else oe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",oe):(se===""||ve==="")&&(B=!1);B&&(G.diagnostics={runnable:de,programLog:oe,vertexShader:{log:se,prefix:y},fragmentShader:{log:ve,prefix:x}})}l.deleteShader(I),l.deleteShader(F),V=new Xu(l,A),U=eR(l,A)}let V;this.getUniforms=function(){return V===void 0&&O(this),V};let U;this.getAttributes=function(){return U===void 0&&O(this),U};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(A,WA)),R},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=qA++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=I,this.fragmentShader=F,this}let hR=0;class dR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new pR(e),i.set(e,r)),r}}class pR{constructor(e){this.id=hR++,this.code=e,this.usedTimes=0}}function mR(s,e,i,r,l,u,f){const d=new R0,m=new dR,p=new Set,g=[],_=l.logarithmicDepthBuffer,v=l.vertexTextures;let S=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(U){return p.add(U),U===0?"uv":`uv${U}`}function y(U,R,G,oe,se){const ve=oe.fog,de=se.geometry,B=U.isMeshStandardMaterial?oe.environment:null,Z=(U.isMeshStandardMaterial?i:e).get(U.envMap||B),Y=Z&&Z.mapping===Ju?Z.image.height:null,Ee=E[U.type];U.precision!==null&&(S=l.getMaxPrecision(U.precision),S!==U.precision&&console.warn("THREE.WebGLProgram.getParameters:",U.precision,"not supported, using",S,"instead."));const N=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,ee=N!==void 0?N.length:0;let xe=0;de.morphAttributes.position!==void 0&&(xe=1),de.morphAttributes.normal!==void 0&&(xe=2),de.morphAttributes.color!==void 0&&(xe=3);let ye,Q,me,Me;if(Ee){const At=Ri[Ee];ye=At.vertexShader,Q=At.fragmentShader}else ye=U.vertexShader,Q=U.fragmentShader,m.update(U),me=m.getVertexShaderID(U),Me=m.getFragmentShaderID(U);const Re=s.getRenderTarget(),we=s.state.buffers.depth.getReversed(),lt=se.isInstancedMesh===!0,Qe=se.isBatchedMesh===!0,Ot=!!U.map,Ft=!!U.matcap,_t=!!Z,H=!!U.aoMap,xn=!!U.lightMap,Et=!!U.bumpMap,pt=!!U.normalMap,Ve=!!U.displacementMap,vt=!!U.emissiveMap,je=!!U.metalnessMap,at=!!U.roughnessMap,Qt=U.anisotropy>0,P=U.clearcoat>0,T=U.dispersion>0,te=U.iridescence>0,fe=U.sheen>0,pe=U.transmission>0,ue=Qt&&!!U.anisotropyMap,Oe=P&&!!U.clearcoatMap,Ue=P&&!!U.clearcoatNormalMap,Ge=P&&!!U.clearcoatRoughnessMap,ke=te&&!!U.iridescenceMap,Se=te&&!!U.iridescenceThicknessMap,ze=fe&&!!U.sheenColorMap,qe=fe&&!!U.sheenRoughnessMap,Ye=!!U.specularMap,Ce=!!U.specularColorMap,it=!!U.specularIntensityMap,X=pe&&!!U.transmissionMap,Le=pe&&!!U.thicknessMap,Te=!!U.gradientMap,Be=!!U.alphaMap,Ae=U.alphaTest>0,_e=!!U.alphaHash,Fe=!!U.extensions;let nt=Ka;U.toneMapped&&(Re===null||Re.isXRRenderTarget===!0)&&(nt=s.toneMapping);const Ut={shaderID:Ee,shaderType:U.type,shaderName:U.name,vertexShader:ye,fragmentShader:Q,defines:U.defines,customVertexShaderID:me,customFragmentShaderID:Me,isRawShaderMaterial:U.isRawShaderMaterial===!0,glslVersion:U.glslVersion,precision:S,batching:Qe,batchingColor:Qe&&se._colorsTexture!==null,instancing:lt,instancingColor:lt&&se.instanceColor!==null,instancingMorph:lt&&se.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:Re===null?s.outputColorSpace:Re.isXRRenderTarget===!0?Re.texture.colorSpace:Ls,alphaToCoverage:!!U.alphaToCoverage,map:Ot,matcap:Ft,envMap:_t,envMapMode:_t&&Z.mapping,envMapCubeUVHeight:Y,aoMap:H,lightMap:xn,bumpMap:Et,normalMap:pt,displacementMap:v&&Ve,emissiveMap:vt,normalMapObjectSpace:pt&&U.normalMapType===aE,normalMapTangentSpace:pt&&U.normalMapType===iE,metalnessMap:je,roughnessMap:at,anisotropy:Qt,anisotropyMap:ue,clearcoat:P,clearcoatMap:Oe,clearcoatNormalMap:Ue,clearcoatRoughnessMap:Ge,dispersion:T,iridescence:te,iridescenceMap:ke,iridescenceThicknessMap:Se,sheen:fe,sheenColorMap:ze,sheenRoughnessMap:qe,specularMap:Ye,specularColorMap:Ce,specularIntensityMap:it,transmission:pe,transmissionMap:X,thicknessMap:Le,gradientMap:Te,opaque:U.transparent===!1&&U.blending===As&&U.alphaToCoverage===!1,alphaMap:Be,alphaTest:Ae,alphaHash:_e,combine:U.combine,mapUv:Ot&&A(U.map.channel),aoMapUv:H&&A(U.aoMap.channel),lightMapUv:xn&&A(U.lightMap.channel),bumpMapUv:Et&&A(U.bumpMap.channel),normalMapUv:pt&&A(U.normalMap.channel),displacementMapUv:Ve&&A(U.displacementMap.channel),emissiveMapUv:vt&&A(U.emissiveMap.channel),metalnessMapUv:je&&A(U.metalnessMap.channel),roughnessMapUv:at&&A(U.roughnessMap.channel),anisotropyMapUv:ue&&A(U.anisotropyMap.channel),clearcoatMapUv:Oe&&A(U.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&A(U.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ge&&A(U.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&A(U.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&A(U.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&A(U.sheenColorMap.channel),sheenRoughnessMapUv:qe&&A(U.sheenRoughnessMap.channel),specularMapUv:Ye&&A(U.specularMap.channel),specularColorMapUv:Ce&&A(U.specularColorMap.channel),specularIntensityMapUv:it&&A(U.specularIntensityMap.channel),transmissionMapUv:X&&A(U.transmissionMap.channel),thicknessMapUv:Le&&A(U.thicknessMap.channel),alphaMapUv:Be&&A(U.alphaMap.channel),vertexTangents:!!de.attributes.tangent&&(pt||Qt),vertexColors:U.vertexColors,vertexAlphas:U.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pointsUvs:se.isPoints===!0&&!!de.attributes.uv&&(Ot||Be),fog:!!ve,useFog:U.fog===!0,fogExp2:!!ve&&ve.isFogExp2,flatShading:U.flatShading===!0,sizeAttenuation:U.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:we,skinning:se.isSkinnedMesh===!0,morphTargets:de.morphAttributes.position!==void 0,morphNormals:de.morphAttributes.normal!==void 0,morphColors:de.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:xe,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:U.dithering,shadowMapEnabled:s.shadowMap.enabled&&G.length>0,shadowMapType:s.shadowMap.type,toneMapping:nt,decodeVideoTexture:Ot&&U.map.isVideoTexture===!0&&bt.getTransfer(U.map.colorSpace)===Pt,decodeVideoTextureEmissive:vt&&U.emissiveMap.isVideoTexture===!0&&bt.getTransfer(U.emissiveMap.colorSpace)===Pt,premultipliedAlpha:U.premultipliedAlpha,doubleSided:U.side===aa,flipSided:U.side===Gn,useDepthPacking:U.depthPacking>=0,depthPacking:U.depthPacking||0,index0AttributeName:U.index0AttributeName,extensionClipCullDistance:Fe&&U.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&U.extensions.multiDraw===!0||Qe)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:U.customProgramCacheKey()};return Ut.vertexUv1s=p.has(1),Ut.vertexUv2s=p.has(2),Ut.vertexUv3s=p.has(3),p.clear(),Ut}function x(U){const R=[];if(U.shaderID?R.push(U.shaderID):(R.push(U.customVertexShaderID),R.push(U.customFragmentShaderID)),U.defines!==void 0)for(const G in U.defines)R.push(G),R.push(U.defines[G]);return U.isRawShaderMaterial===!1&&(D(R,U),L(R,U),R.push(s.outputColorSpace)),R.push(U.customProgramCacheKey),R.join()}function D(U,R){U.push(R.precision),U.push(R.outputColorSpace),U.push(R.envMapMode),U.push(R.envMapCubeUVHeight),U.push(R.mapUv),U.push(R.alphaMapUv),U.push(R.lightMapUv),U.push(R.aoMapUv),U.push(R.bumpMapUv),U.push(R.normalMapUv),U.push(R.displacementMapUv),U.push(R.emissiveMapUv),U.push(R.metalnessMapUv),U.push(R.roughnessMapUv),U.push(R.anisotropyMapUv),U.push(R.clearcoatMapUv),U.push(R.clearcoatNormalMapUv),U.push(R.clearcoatRoughnessMapUv),U.push(R.iridescenceMapUv),U.push(R.iridescenceThicknessMapUv),U.push(R.sheenColorMapUv),U.push(R.sheenRoughnessMapUv),U.push(R.specularMapUv),U.push(R.specularColorMapUv),U.push(R.specularIntensityMapUv),U.push(R.transmissionMapUv),U.push(R.thicknessMapUv),U.push(R.combine),U.push(R.fogExp2),U.push(R.sizeAttenuation),U.push(R.morphTargetsCount),U.push(R.morphAttributeCount),U.push(R.numDirLights),U.push(R.numPointLights),U.push(R.numSpotLights),U.push(R.numSpotLightMaps),U.push(R.numHemiLights),U.push(R.numRectAreaLights),U.push(R.numDirLightShadows),U.push(R.numPointLightShadows),U.push(R.numSpotLightShadows),U.push(R.numSpotLightShadowsWithMaps),U.push(R.numLightProbes),U.push(R.shadowMapType),U.push(R.toneMapping),U.push(R.numClippingPlanes),U.push(R.numClipIntersection),U.push(R.depthPacking)}function L(U,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),U.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reverseDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),U.push(d.mask)}function w(U){const R=E[U.type];let G;if(R){const oe=Ri[R];G=Zo.clone(oe.uniforms)}else G=U.uniforms;return G}function I(U,R){let G;for(let oe=0,se=g.length;oe<se;oe++){const ve=g[oe];if(ve.cacheKey===R){G=ve,++G.usedTimes;break}}return G===void 0&&(G=new fR(s,R,U,u),g.push(G)),G}function F(U){if(--U.usedTimes===0){const R=g.indexOf(U);g[R]=g[g.length-1],g.pop(),U.destroy()}}function O(U){m.remove(U)}function V(){m.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:w,acquireProgram:I,releaseProgram:F,releaseShaderCache:O,programs:g,dispose:V}}function gR(){let s=new WeakMap;function e(f){return s.has(f)}function i(f){let d=s.get(f);return d===void 0&&(d={},s.set(f,d)),d}function r(f){s.delete(f)}function l(f,d,m){s.get(f)[d]=m}function u(){s=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:u}}function _R(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Fv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Hv(){const s=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function f(_,v,S,E,A,y){let x=s[e];return x===void 0?(x={id:_.id,object:_,geometry:v,material:S,groupOrder:E,renderOrder:_.renderOrder,z:A,group:y},s[e]=x):(x.id=_.id,x.object=_,x.geometry=v,x.material=S,x.groupOrder=E,x.renderOrder=_.renderOrder,x.z=A,x.group=y),e++,x}function d(_,v,S,E,A,y){const x=f(_,v,S,E,A,y);S.transmission>0?r.push(x):S.transparent===!0?l.push(x):i.push(x)}function m(_,v,S,E,A,y){const x=f(_,v,S,E,A,y);S.transmission>0?r.unshift(x):S.transparent===!0?l.unshift(x):i.unshift(x)}function p(_,v){i.length>1&&i.sort(_||_R),r.length>1&&r.sort(v||Fv),l.length>1&&l.sort(v||Fv)}function g(){for(let _=e,v=s.length;_<v;_++){const S=s[_];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:d,unshift:m,finish:g,sort:p}}function vR(){let s=new WeakMap;function e(r,l){const u=s.get(r);let f;return u===void 0?(f=new Hv,s.set(r,[f])):l>=u.length?(f=new Hv,u.push(f)):f=u[l],f}function i(){s=new WeakMap}return{get:e,dispose:i}}function xR(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new $,color:new Ct};break;case"SpotLight":i={position:new $,direction:new $,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new $,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":i={direction:new $,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":i={color:new Ct,position:new $,halfWidth:new $,halfHeight:new $};break}return s[e.id]=i,i}}}function SR(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let yR=0;function MR(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function ER(s){const e=new xR,i=SR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new $);const l=new $,u=new sn,f=new sn;function d(p){let g=0,_=0,v=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let S=0,E=0,A=0,y=0,x=0,D=0,L=0,w=0,I=0,F=0,O=0;p.sort(MR);for(let U=0,R=p.length;U<R;U++){const G=p[U],oe=G.color,se=G.intensity,ve=G.distance,de=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)g+=oe.r*se,_+=oe.g*se,v+=oe.b*se;else if(G.isLightProbe){for(let B=0;B<9;B++)r.probe[B].addScaledVector(G.sh.coefficients[B],se);O++}else if(G.isDirectionalLight){const B=e.get(G);if(B.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const Z=G.shadow,Y=i.get(G);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,r.directionalShadow[S]=Y,r.directionalShadowMap[S]=de,r.directionalShadowMatrix[S]=G.shadow.matrix,D++}r.directional[S]=B,S++}else if(G.isSpotLight){const B=e.get(G);B.position.setFromMatrixPosition(G.matrixWorld),B.color.copy(oe).multiplyScalar(se),B.distance=ve,B.coneCos=Math.cos(G.angle),B.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),B.decay=G.decay,r.spot[A]=B;const Z=G.shadow;if(G.map&&(r.spotLightMap[I]=G.map,I++,Z.updateMatrices(G),G.castShadow&&F++),r.spotLightMatrix[A]=Z.matrix,G.castShadow){const Y=i.get(G);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,r.spotShadow[A]=Y,r.spotShadowMap[A]=de,w++}A++}else if(G.isRectAreaLight){const B=e.get(G);B.color.copy(oe).multiplyScalar(se),B.halfWidth.set(G.width*.5,0,0),B.halfHeight.set(0,G.height*.5,0),r.rectArea[y]=B,y++}else if(G.isPointLight){const B=e.get(G);if(B.color.copy(G.color).multiplyScalar(G.intensity),B.distance=G.distance,B.decay=G.decay,G.castShadow){const Z=G.shadow,Y=i.get(G);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,Y.shadowCameraNear=Z.camera.near,Y.shadowCameraFar=Z.camera.far,r.pointShadow[E]=Y,r.pointShadowMap[E]=de,r.pointShadowMatrix[E]=G.shadow.matrix,L++}r.point[E]=B,E++}else if(G.isHemisphereLight){const B=e.get(G);B.skyColor.copy(G.color).multiplyScalar(se),B.groundColor.copy(G.groundColor).multiplyScalar(se),r.hemi[x]=B,x++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ne.LTC_FLOAT_1,r.rectAreaLTC2=Ne.LTC_FLOAT_2):(r.rectAreaLTC1=Ne.LTC_HALF_1,r.rectAreaLTC2=Ne.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=_,r.ambient[2]=v;const V=r.hash;(V.directionalLength!==S||V.pointLength!==E||V.spotLength!==A||V.rectAreaLength!==y||V.hemiLength!==x||V.numDirectionalShadows!==D||V.numPointShadows!==L||V.numSpotShadows!==w||V.numSpotMaps!==I||V.numLightProbes!==O)&&(r.directional.length=S,r.spot.length=A,r.rectArea.length=y,r.point.length=E,r.hemi.length=x,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=D,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=w+I-F,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=O,V.directionalLength=S,V.pointLength=E,V.spotLength=A,V.rectAreaLength=y,V.hemiLength=x,V.numDirectionalShadows=D,V.numPointShadows=L,V.numSpotShadows=w,V.numSpotMaps=I,V.numLightProbes=O,r.version=yR++)}function m(p,g){let _=0,v=0,S=0,E=0,A=0;const y=g.matrixWorldInverse;for(let x=0,D=p.length;x<D;x++){const L=p[x];if(L.isDirectionalLight){const w=r.directional[_];w.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(y),_++}else if(L.isSpotLight){const w=r.spot[S];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(y),w.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(y),S++}else if(L.isRectAreaLight){const w=r.rectArea[E];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(y),f.identity(),u.copy(L.matrixWorld),u.premultiply(y),f.extractRotation(u),w.halfWidth.set(L.width*.5,0,0),w.halfHeight.set(0,L.height*.5,0),w.halfWidth.applyMatrix4(f),w.halfHeight.applyMatrix4(f),E++}else if(L.isPointLight){const w=r.point[v];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(y),v++}else if(L.isHemisphereLight){const w=r.hemi[A];w.direction.setFromMatrixPosition(L.matrixWorld),w.direction.transformDirection(y),A++}}}return{setup:d,setupView:m,state:r}}function Gv(s){const e=new ER(s),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function u(g){i.push(g)}function f(g){r.push(g)}function d(){e.setup(i)}function m(g){e.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:f}}function TR(s){let e=new WeakMap;function i(l,u=0){const f=e.get(l);let d;return f===void 0?(d=new Gv(s),e.set(l,[d])):u>=f.length?(d=new Gv(s),f.push(d)):d=f[u],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const bR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,AR=`uniform sampler2D shadow_pass;
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
}`;function RR(s,e,i){let r=new P0;const l=new ot,u=new ot,f=new en,d=new WE({depthPacking:nE}),m=new qE,p={},g=i.maxTextureSize,_={[Qa]:Gn,[Gn]:Qa,[aa]:aa},v=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:bR,fragmentShader:AR}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const E=new ma;E.setAttribute("position",new wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new vi(E,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=s0;let x=this.type;this.render=function(F,O,V){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||F.length===0)return;const U=s.getRenderTarget(),R=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),oe=s.state;oe.setBlending(la),oe.buffers.color.setClear(1,1,1,1),oe.buffers.depth.setTest(!0),oe.setScissorTest(!1);const se=x!==ia&&this.type===ia,ve=x===ia&&this.type!==ia;for(let de=0,B=F.length;de<B;de++){const Z=F[de],Y=Z.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const Ee=Y.getFrameExtents();if(l.multiply(Ee),u.copy(Y.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/Ee.x),l.x=u.x*Ee.x,Y.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/Ee.y),l.y=u.y*Ee.y,Y.mapSize.y=u.y)),Y.map===null||se===!0||ve===!0){const ee=this.type!==ia?{minFilter:xi,magFilter:xi}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Si(l.x,l.y,ee),Y.map.texture.name=Z.name+".shadowMap",Y.camera.updateProjectionMatrix()}s.setRenderTarget(Y.map),s.clear();const N=Y.getViewportCount();for(let ee=0;ee<N;ee++){const xe=Y.getViewport(ee);f.set(u.x*xe.x,u.y*xe.y,u.x*xe.z,u.y*xe.w),oe.viewport(f),Y.updateMatrices(Z,ee),r=Y.getFrustum(),w(O,V,Y.camera,Z,this.type)}Y.isPointLightShadow!==!0&&this.type===ia&&D(Y,V),Y.needsUpdate=!1}x=this.type,y.needsUpdate=!1,s.setRenderTarget(U,R,G)};function D(F,O){const V=e.update(A);v.defines.VSM_SAMPLES!==F.blurSamples&&(v.defines.VSM_SAMPLES=F.blurSamples,S.defines.VSM_SAMPLES=F.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Si(l.x,l.y)),v.uniforms.shadow_pass.value=F.map.texture,v.uniforms.resolution.value=F.mapSize,v.uniforms.radius.value=F.radius,s.setRenderTarget(F.mapPass),s.clear(),s.renderBufferDirect(O,null,V,v,A,null),S.uniforms.shadow_pass.value=F.mapPass.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,s.setRenderTarget(F.map),s.clear(),s.renderBufferDirect(O,null,V,S,A,null)}function L(F,O,V,U){let R=null;const G=V.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(G!==void 0)R=G;else if(R=V.isPointLight===!0?m:d,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const oe=R.uuid,se=O.uuid;let ve=p[oe];ve===void 0&&(ve={},p[oe]=ve);let de=ve[se];de===void 0&&(de=R.clone(),ve[se]=de,O.addEventListener("dispose",I)),R=de}if(R.visible=O.visible,R.wireframe=O.wireframe,U===ia?R.side=O.shadowSide!==null?O.shadowSide:O.side:R.side=O.shadowSide!==null?O.shadowSide:_[O.side],R.alphaMap=O.alphaMap,R.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,R.map=O.map,R.clipShadows=O.clipShadows,R.clippingPlanes=O.clippingPlanes,R.clipIntersection=O.clipIntersection,R.displacementMap=O.displacementMap,R.displacementScale=O.displacementScale,R.displacementBias=O.displacementBias,R.wireframeLinewidth=O.wireframeLinewidth,R.linewidth=O.linewidth,V.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const oe=s.properties.get(R);oe.light=V}return R}function w(F,O,V,U,R){if(F.visible===!1)return;if(F.layers.test(O.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&R===ia)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,F.matrixWorld);const se=e.update(F),ve=F.material;if(Array.isArray(ve)){const de=se.groups;for(let B=0,Z=de.length;B<Z;B++){const Y=de[B],Ee=ve[Y.materialIndex];if(Ee&&Ee.visible){const N=L(F,Ee,U,R);F.onBeforeShadow(s,F,O,V,se,N,Y),s.renderBufferDirect(V,null,se,N,F,Y),F.onAfterShadow(s,F,O,V,se,N,Y)}}}else if(ve.visible){const de=L(F,ve,U,R);F.onBeforeShadow(s,F,O,V,se,de,null),s.renderBufferDirect(V,null,se,de,F,null),F.onAfterShadow(s,F,O,V,se,de,null)}}const oe=F.children;for(let se=0,ve=oe.length;se<ve;se++)w(oe[se],O,V,U,R)}function I(F){F.target.removeEventListener("dispose",I);for(const V in p){const U=p[V],R=F.target.uuid;R in U&&(U[R].dispose(),delete U[R])}}}const CR={[Kh]:Qh,[Jh]:td,[$h]:nd,[ws]:ed,[Qh]:Kh,[td]:Jh,[nd]:$h,[ed]:ws};function wR(s,e){function i(){let X=!1;const Le=new en;let Te=null;const Be=new en(0,0,0,0);return{setMask:function(Ae){Te!==Ae&&!X&&(s.colorMask(Ae,Ae,Ae,Ae),Te=Ae)},setLocked:function(Ae){X=Ae},setClear:function(Ae,_e,Fe,nt,Ut){Ut===!0&&(Ae*=nt,_e*=nt,Fe*=nt),Le.set(Ae,_e,Fe,nt),Be.equals(Le)===!1&&(s.clearColor(Ae,_e,Fe,nt),Be.copy(Le))},reset:function(){X=!1,Te=null,Be.set(-1,0,0,0)}}}function r(){let X=!1,Le=!1,Te=null,Be=null,Ae=null;return{setReversed:function(_e){if(Le!==_e){const Fe=e.get("EXT_clip_control");_e?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),Le=_e;const nt=Ae;Ae=null,this.setClear(nt)}},getReversed:function(){return Le},setTest:function(_e){_e?Re(s.DEPTH_TEST):we(s.DEPTH_TEST)},setMask:function(_e){Te!==_e&&!X&&(s.depthMask(_e),Te=_e)},setFunc:function(_e){if(Le&&(_e=CR[_e]),Be!==_e){switch(_e){case Kh:s.depthFunc(s.NEVER);break;case Qh:s.depthFunc(s.ALWAYS);break;case Jh:s.depthFunc(s.LESS);break;case ws:s.depthFunc(s.LEQUAL);break;case $h:s.depthFunc(s.EQUAL);break;case ed:s.depthFunc(s.GEQUAL);break;case td:s.depthFunc(s.GREATER);break;case nd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Be=_e}},setLocked:function(_e){X=_e},setClear:function(_e){Ae!==_e&&(Le&&(_e=1-_e),s.clearDepth(_e),Ae=_e)},reset:function(){X=!1,Te=null,Be=null,Ae=null,Le=!1}}}function l(){let X=!1,Le=null,Te=null,Be=null,Ae=null,_e=null,Fe=null,nt=null,Ut=null;return{setTest:function(At){X||(At?Re(s.STENCIL_TEST):we(s.STENCIL_TEST))},setMask:function(At){Le!==At&&!X&&(s.stencilMask(At),Le=At)},setFunc:function(At,kn,dn){(Te!==At||Be!==kn||Ae!==dn)&&(s.stencilFunc(At,kn,dn),Te=At,Be=kn,Ae=dn)},setOp:function(At,kn,dn){(_e!==At||Fe!==kn||nt!==dn)&&(s.stencilOp(At,kn,dn),_e=At,Fe=kn,nt=dn)},setLocked:function(At){X=At},setClear:function(At){Ut!==At&&(s.clearStencil(At),Ut=At)},reset:function(){X=!1,Le=null,Te=null,Be=null,Ae=null,_e=null,Fe=null,nt=null,Ut=null}}}const u=new i,f=new r,d=new l,m=new WeakMap,p=new WeakMap;let g={},_={},v=new WeakMap,S=[],E=null,A=!1,y=null,x=null,D=null,L=null,w=null,I=null,F=null,O=new Ct(0,0,0),V=0,U=!1,R=null,G=null,oe=null,se=null,ve=null;const de=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,Z=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(Y)[1]),B=Z>=1):Y.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),B=Z>=2);let Ee=null,N={};const ee=s.getParameter(s.SCISSOR_BOX),xe=s.getParameter(s.VIEWPORT),ye=new en().fromArray(ee),Q=new en().fromArray(xe);function me(X,Le,Te,Be){const Ae=new Uint8Array(4),_e=s.createTexture();s.bindTexture(X,_e),s.texParameteri(X,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(X,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Fe=0;Fe<Te;Fe++)X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?s.texImage3D(Le,0,s.RGBA,1,1,Be,0,s.RGBA,s.UNSIGNED_BYTE,Ae):s.texImage2D(Le+Fe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ae);return _e}const Me={};Me[s.TEXTURE_2D]=me(s.TEXTURE_2D,s.TEXTURE_2D,1),Me[s.TEXTURE_CUBE_MAP]=me(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[s.TEXTURE_2D_ARRAY]=me(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Me[s.TEXTURE_3D]=me(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),f.setClear(1),d.setClear(0),Re(s.DEPTH_TEST),f.setFunc(ws),Et(!1),pt(q_),Re(s.CULL_FACE),H(la);function Re(X){g[X]!==!0&&(s.enable(X),g[X]=!0)}function we(X){g[X]!==!1&&(s.disable(X),g[X]=!1)}function lt(X,Le){return _[X]!==Le?(s.bindFramebuffer(X,Le),_[X]=Le,X===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=Le),X===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=Le),!0):!1}function Qe(X,Le){let Te=S,Be=!1;if(X){Te=v.get(Le),Te===void 0&&(Te=[],v.set(Le,Te));const Ae=X.textures;if(Te.length!==Ae.length||Te[0]!==s.COLOR_ATTACHMENT0){for(let _e=0,Fe=Ae.length;_e<Fe;_e++)Te[_e]=s.COLOR_ATTACHMENT0+_e;Te.length=Ae.length,Be=!0}}else Te[0]!==s.BACK&&(Te[0]=s.BACK,Be=!0);Be&&s.drawBuffers(Te)}function Ot(X){return E!==X?(s.useProgram(X),E=X,!0):!1}const Ft={[Cr]:s.FUNC_ADD,[OM]:s.FUNC_SUBTRACT,[zM]:s.FUNC_REVERSE_SUBTRACT};Ft[BM]=s.MIN,Ft[IM]=s.MAX;const _t={[FM]:s.ZERO,[HM]:s.ONE,[GM]:s.SRC_COLOR,[jh]:s.SRC_ALPHA,[YM]:s.SRC_ALPHA_SATURATE,[WM]:s.DST_COLOR,[kM]:s.DST_ALPHA,[VM]:s.ONE_MINUS_SRC_COLOR,[Zh]:s.ONE_MINUS_SRC_ALPHA,[qM]:s.ONE_MINUS_DST_COLOR,[XM]:s.ONE_MINUS_DST_ALPHA,[jM]:s.CONSTANT_COLOR,[ZM]:s.ONE_MINUS_CONSTANT_COLOR,[KM]:s.CONSTANT_ALPHA,[QM]:s.ONE_MINUS_CONSTANT_ALPHA};function H(X,Le,Te,Be,Ae,_e,Fe,nt,Ut,At){if(X===la){A===!0&&(we(s.BLEND),A=!1);return}if(A===!1&&(Re(s.BLEND),A=!0),X!==PM){if(X!==y||At!==U){if((x!==Cr||w!==Cr)&&(s.blendEquation(s.FUNC_ADD),x=Cr,w=Cr),At)switch(X){case As:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Yh:s.blendFunc(s.ONE,s.ONE);break;case Y_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case j_:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case As:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Yh:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Y_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case j_:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}D=null,L=null,I=null,F=null,O.set(0,0,0),V=0,y=X,U=At}return}Ae=Ae||Le,_e=_e||Te,Fe=Fe||Be,(Le!==x||Ae!==w)&&(s.blendEquationSeparate(Ft[Le],Ft[Ae]),x=Le,w=Ae),(Te!==D||Be!==L||_e!==I||Fe!==F)&&(s.blendFuncSeparate(_t[Te],_t[Be],_t[_e],_t[Fe]),D=Te,L=Be,I=_e,F=Fe),(nt.equals(O)===!1||Ut!==V)&&(s.blendColor(nt.r,nt.g,nt.b,Ut),O.copy(nt),V=Ut),y=X,U=!1}function xn(X,Le){X.side===aa?we(s.CULL_FACE):Re(s.CULL_FACE);let Te=X.side===Gn;Le&&(Te=!Te),Et(Te),X.blending===As&&X.transparent===!1?H(la):H(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),f.setFunc(X.depthFunc),f.setTest(X.depthTest),f.setMask(X.depthWrite),u.setMask(X.colorWrite);const Be=X.stencilWrite;d.setTest(Be),Be&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),vt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?Re(s.SAMPLE_ALPHA_TO_COVERAGE):we(s.SAMPLE_ALPHA_TO_COVERAGE)}function Et(X){R!==X&&(X?s.frontFace(s.CW):s.frontFace(s.CCW),R=X)}function pt(X){X!==UM?(Re(s.CULL_FACE),X!==G&&(X===q_?s.cullFace(s.BACK):X===LM?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):we(s.CULL_FACE),G=X}function Ve(X){X!==oe&&(B&&s.lineWidth(X),oe=X)}function vt(X,Le,Te){X?(Re(s.POLYGON_OFFSET_FILL),(se!==Le||ve!==Te)&&(s.polygonOffset(Le,Te),se=Le,ve=Te)):we(s.POLYGON_OFFSET_FILL)}function je(X){X?Re(s.SCISSOR_TEST):we(s.SCISSOR_TEST)}function at(X){X===void 0&&(X=s.TEXTURE0+de-1),Ee!==X&&(s.activeTexture(X),Ee=X)}function Qt(X,Le,Te){Te===void 0&&(Ee===null?Te=s.TEXTURE0+de-1:Te=Ee);let Be=N[Te];Be===void 0&&(Be={type:void 0,texture:void 0},N[Te]=Be),(Be.type!==X||Be.texture!==Le)&&(Ee!==Te&&(s.activeTexture(Te),Ee=Te),s.bindTexture(X,Le||Me[X]),Be.type=X,Be.texture=Le)}function P(){const X=N[Ee];X!==void 0&&X.type!==void 0&&(s.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function T(){try{s.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function te(){try{s.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function fe(){try{s.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function pe(){try{s.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ue(){try{s.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Oe(){try{s.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ue(){try{s.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ge(){try{s.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ke(){try{s.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Se(){try{s.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ze(X){ye.equals(X)===!1&&(s.scissor(X.x,X.y,X.z,X.w),ye.copy(X))}function qe(X){Q.equals(X)===!1&&(s.viewport(X.x,X.y,X.z,X.w),Q.copy(X))}function Ye(X,Le){let Te=p.get(Le);Te===void 0&&(Te=new WeakMap,p.set(Le,Te));let Be=Te.get(X);Be===void 0&&(Be=s.getUniformBlockIndex(Le,X.name),Te.set(X,Be))}function Ce(X,Le){const Be=p.get(Le).get(X);m.get(Le)!==Be&&(s.uniformBlockBinding(Le,Be,X.__bindingPointIndex),m.set(Le,Be))}function it(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},Ee=null,N={},_={},v=new WeakMap,S=[],E=null,A=!1,y=null,x=null,D=null,L=null,w=null,I=null,F=null,O=new Ct(0,0,0),V=0,U=!1,R=null,G=null,oe=null,se=null,ve=null,ye.set(0,0,s.canvas.width,s.canvas.height),Q.set(0,0,s.canvas.width,s.canvas.height),u.reset(),f.reset(),d.reset()}return{buffers:{color:u,depth:f,stencil:d},enable:Re,disable:we,bindFramebuffer:lt,drawBuffers:Qe,useProgram:Ot,setBlending:H,setMaterial:xn,setFlipSided:Et,setCullFace:pt,setLineWidth:Ve,setPolygonOffset:vt,setScissorTest:je,activeTexture:at,bindTexture:Qt,unbindTexture:P,compressedTexImage2D:T,compressedTexImage3D:te,texImage2D:ke,texImage3D:Se,updateUBOMapping:Ye,uniformBlockBinding:Ce,texStorage2D:Ue,texStorage3D:Ge,texSubImage2D:fe,texSubImage3D:pe,compressedTexSubImage2D:ue,compressedTexSubImage3D:Oe,scissor:ze,viewport:qe,reset:it}}function DR(s,e,i,r,l,u,f){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ot,g=new WeakMap;let _;const v=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(P,T){return S?new OffscreenCanvas(P,T):Zu("canvas")}function A(P,T,te){let fe=1;const pe=Qt(P);if((pe.width>te||pe.height>te)&&(fe=te/Math.max(pe.width,pe.height)),fe<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ue=Math.floor(fe*pe.width),Oe=Math.floor(fe*pe.height);_===void 0&&(_=E(ue,Oe));const Ue=T?E(ue,Oe):_;return Ue.width=ue,Ue.height=Oe,Ue.getContext("2d").drawImage(P,0,0,ue,Oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+ue+"x"+Oe+")."),Ue}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),P;return P}function y(P){return P.generateMipmaps}function x(P){s.generateMipmap(P)}function D(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(P,T,te,fe,pe=!1){if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ue=T;if(T===s.RED&&(te===s.FLOAT&&(ue=s.R32F),te===s.HALF_FLOAT&&(ue=s.R16F),te===s.UNSIGNED_BYTE&&(ue=s.R8)),T===s.RED_INTEGER&&(te===s.UNSIGNED_BYTE&&(ue=s.R8UI),te===s.UNSIGNED_SHORT&&(ue=s.R16UI),te===s.UNSIGNED_INT&&(ue=s.R32UI),te===s.BYTE&&(ue=s.R8I),te===s.SHORT&&(ue=s.R16I),te===s.INT&&(ue=s.R32I)),T===s.RG&&(te===s.FLOAT&&(ue=s.RG32F),te===s.HALF_FLOAT&&(ue=s.RG16F),te===s.UNSIGNED_BYTE&&(ue=s.RG8)),T===s.RG_INTEGER&&(te===s.UNSIGNED_BYTE&&(ue=s.RG8UI),te===s.UNSIGNED_SHORT&&(ue=s.RG16UI),te===s.UNSIGNED_INT&&(ue=s.RG32UI),te===s.BYTE&&(ue=s.RG8I),te===s.SHORT&&(ue=s.RG16I),te===s.INT&&(ue=s.RG32I)),T===s.RGB_INTEGER&&(te===s.UNSIGNED_BYTE&&(ue=s.RGB8UI),te===s.UNSIGNED_SHORT&&(ue=s.RGB16UI),te===s.UNSIGNED_INT&&(ue=s.RGB32UI),te===s.BYTE&&(ue=s.RGB8I),te===s.SHORT&&(ue=s.RGB16I),te===s.INT&&(ue=s.RGB32I)),T===s.RGBA_INTEGER&&(te===s.UNSIGNED_BYTE&&(ue=s.RGBA8UI),te===s.UNSIGNED_SHORT&&(ue=s.RGBA16UI),te===s.UNSIGNED_INT&&(ue=s.RGBA32UI),te===s.BYTE&&(ue=s.RGBA8I),te===s.SHORT&&(ue=s.RGBA16I),te===s.INT&&(ue=s.RGBA32I)),T===s.RGB&&te===s.UNSIGNED_INT_5_9_9_9_REV&&(ue=s.RGB9_E5),T===s.RGBA){const Oe=pe?Yu:bt.getTransfer(fe);te===s.FLOAT&&(ue=s.RGBA32F),te===s.HALF_FLOAT&&(ue=s.RGBA16F),te===s.UNSIGNED_BYTE&&(ue=Oe===Pt?s.SRGB8_ALPHA8:s.RGBA8),te===s.UNSIGNED_SHORT_4_4_4_4&&(ue=s.RGBA4),te===s.UNSIGNED_SHORT_5_5_5_1&&(ue=s.RGB5_A1)}return(ue===s.R16F||ue===s.R32F||ue===s.RG16F||ue===s.RG32F||ue===s.RGBA16F||ue===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function w(P,T){let te;return P?T===null||T===Lr||T===qo?te=s.DEPTH24_STENCIL8:T===ra?te=s.DEPTH32F_STENCIL8:T===Wo&&(te=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Lr||T===qo?te=s.DEPTH_COMPONENT24:T===ra?te=s.DEPTH_COMPONENT32F:T===Wo&&(te=s.DEPTH_COMPONENT16),te}function I(P,T){return y(P)===!0||P.isFramebufferTexture&&P.minFilter!==xi&&P.minFilter!==Ci?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function F(P){const T=P.target;T.removeEventListener("dispose",F),V(T),T.isVideoTexture&&g.delete(T)}function O(P){const T=P.target;T.removeEventListener("dispose",O),R(T)}function V(P){const T=r.get(P);if(T.__webglInit===void 0)return;const te=P.source,fe=v.get(te);if(fe){const pe=fe[T.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&U(P),Object.keys(fe).length===0&&v.delete(te)}r.remove(P)}function U(P){const T=r.get(P);s.deleteTexture(T.__webglTexture);const te=P.source,fe=v.get(te);delete fe[T.__cacheKey],f.memory.textures--}function R(P){const T=r.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),r.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray(T.__webglFramebuffer[fe]))for(let pe=0;pe<T.__webglFramebuffer[fe].length;pe++)s.deleteFramebuffer(T.__webglFramebuffer[fe][pe]);else s.deleteFramebuffer(T.__webglFramebuffer[fe]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[fe])}else{if(Array.isArray(T.__webglFramebuffer))for(let fe=0;fe<T.__webglFramebuffer.length;fe++)s.deleteFramebuffer(T.__webglFramebuffer[fe]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let fe=0;fe<T.__webglColorRenderbuffer.length;fe++)T.__webglColorRenderbuffer[fe]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[fe]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const te=P.textures;for(let fe=0,pe=te.length;fe<pe;fe++){const ue=r.get(te[fe]);ue.__webglTexture&&(s.deleteTexture(ue.__webglTexture),f.memory.textures--),r.remove(te[fe])}r.remove(P)}let G=0;function oe(){G=0}function se(){const P=G;return P>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l.maxTextures),G+=1,P}function ve(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function de(P,T){const te=r.get(P);if(P.isVideoTexture&&je(P),P.isRenderTargetTexture===!1&&P.version>0&&te.__version!==P.version){const fe=P.image;if(fe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Me(te,P,T);return}}i.bindTexture(s.TEXTURE_2D,te.__webglTexture,s.TEXTURE0+T)}function B(P,T){const te=r.get(P);if(P.version>0&&te.__version!==P.version){Me(te,P,T);return}i.bindTexture(s.TEXTURE_2D_ARRAY,te.__webglTexture,s.TEXTURE0+T)}function Z(P,T){const te=r.get(P);if(P.version>0&&te.__version!==P.version){Me(te,P,T);return}i.bindTexture(s.TEXTURE_3D,te.__webglTexture,s.TEXTURE0+T)}function Y(P,T){const te=r.get(P);if(P.version>0&&te.__version!==P.version){Re(te,P,T);return}i.bindTexture(s.TEXTURE_CUBE_MAP,te.__webglTexture,s.TEXTURE0+T)}const Ee={[rd]:s.REPEAT,[Dr]:s.CLAMP_TO_EDGE,[sd]:s.MIRRORED_REPEAT},N={[xi]:s.NEAREST,[eE]:s.NEAREST_MIPMAP_NEAREST,[du]:s.NEAREST_MIPMAP_LINEAR,[Ci]:s.LINEAR,[hh]:s.LINEAR_MIPMAP_NEAREST,[Ur]:s.LINEAR_MIPMAP_LINEAR},ee={[rE]:s.NEVER,[fE]:s.ALWAYS,[sE]:s.LESS,[T0]:s.LEQUAL,[oE]:s.EQUAL,[cE]:s.GEQUAL,[lE]:s.GREATER,[uE]:s.NOTEQUAL};function xe(P,T){if(T.type===ra&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Ci||T.magFilter===hh||T.magFilter===du||T.magFilter===Ur||T.minFilter===Ci||T.minFilter===hh||T.minFilter===du||T.minFilter===Ur)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,Ee[T.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,Ee[T.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,Ee[T.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,N[T.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,N[T.minFilter]),T.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,ee[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===xi||T.minFilter!==du&&T.minFilter!==Ur||T.type===ra&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const te=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function ye(P,T){let te=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",F));const fe=T.source;let pe=v.get(fe);pe===void 0&&(pe={},v.set(fe,pe));const ue=ve(T);if(ue!==P.__cacheKey){pe[ue]===void 0&&(pe[ue]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,te=!0),pe[ue].usedTimes++;const Oe=pe[P.__cacheKey];Oe!==void 0&&(pe[P.__cacheKey].usedTimes--,Oe.usedTimes===0&&U(T)),P.__cacheKey=ue,P.__webglTexture=pe[ue].texture}return te}function Q(P,T,te){return Math.floor(Math.floor(P/te)/T)}function me(P,T,te,fe){const ue=P.updateRanges;if(ue.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,te,fe,T.data);else{ue.sort((Se,ze)=>Se.start-ze.start);let Oe=0;for(let Se=1;Se<ue.length;Se++){const ze=ue[Oe],qe=ue[Se],Ye=ze.start+ze.count,Ce=Q(qe.start,T.width,4),it=Q(ze.start,T.width,4);qe.start<=Ye+1&&Ce===it&&Q(qe.start+qe.count-1,T.width,4)===Ce?ze.count=Math.max(ze.count,qe.start+qe.count-ze.start):(++Oe,ue[Oe]=qe)}ue.length=Oe+1;const Ue=s.getParameter(s.UNPACK_ROW_LENGTH),Ge=s.getParameter(s.UNPACK_SKIP_PIXELS),ke=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let Se=0,ze=ue.length;Se<ze;Se++){const qe=ue[Se],Ye=Math.floor(qe.start/4),Ce=Math.ceil(qe.count/4),it=Ye%T.width,X=Math.floor(Ye/T.width),Le=Ce,Te=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,it),s.pixelStorei(s.UNPACK_SKIP_ROWS,X),i.texSubImage2D(s.TEXTURE_2D,0,it,X,Le,Te,te,fe,T.data)}P.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Ue),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ge),s.pixelStorei(s.UNPACK_SKIP_ROWS,ke)}}function Me(P,T,te){let fe=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(fe=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(fe=s.TEXTURE_3D);const pe=ye(P,T),ue=T.source;i.bindTexture(fe,P.__webglTexture,s.TEXTURE0+te);const Oe=r.get(ue);if(ue.version!==Oe.__version||pe===!0){i.activeTexture(s.TEXTURE0+te);const Ue=bt.getPrimaries(bt.workingColorSpace),Ge=T.colorSpace===Za?null:bt.getPrimaries(T.colorSpace),ke=T.colorSpace===Za||Ue===Ge?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let Se=A(T.image,!1,l.maxTextureSize);Se=at(T,Se);const ze=u.convert(T.format,T.colorSpace),qe=u.convert(T.type);let Ye=L(T.internalFormat,ze,qe,T.colorSpace,T.isVideoTexture);xe(fe,T);let Ce;const it=T.mipmaps,X=T.isVideoTexture!==!0,Le=Oe.__version===void 0||pe===!0,Te=ue.dataReady,Be=I(T,Se);if(T.isDepthTexture)Ye=w(T.format===jo,T.type),Le&&(X?i.texStorage2D(s.TEXTURE_2D,1,Ye,Se.width,Se.height):i.texImage2D(s.TEXTURE_2D,0,Ye,Se.width,Se.height,0,ze,qe,null));else if(T.isDataTexture)if(it.length>0){X&&Le&&i.texStorage2D(s.TEXTURE_2D,Be,Ye,it[0].width,it[0].height);for(let Ae=0,_e=it.length;Ae<_e;Ae++)Ce=it[Ae],X?Te&&i.texSubImage2D(s.TEXTURE_2D,Ae,0,0,Ce.width,Ce.height,ze,qe,Ce.data):i.texImage2D(s.TEXTURE_2D,Ae,Ye,Ce.width,Ce.height,0,ze,qe,Ce.data);T.generateMipmaps=!1}else X?(Le&&i.texStorage2D(s.TEXTURE_2D,Be,Ye,Se.width,Se.height),Te&&me(T,Se,ze,qe)):i.texImage2D(s.TEXTURE_2D,0,Ye,Se.width,Se.height,0,ze,qe,Se.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){X&&Le&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Be,Ye,it[0].width,it[0].height,Se.depth);for(let Ae=0,_e=it.length;Ae<_e;Ae++)if(Ce=it[Ae],T.format!==_i)if(ze!==null)if(X){if(Te)if(T.layerUpdates.size>0){const Fe=_v(Ce.width,Ce.height,T.format,T.type);for(const nt of T.layerUpdates){const Ut=Ce.data.subarray(nt*Fe/Ce.data.BYTES_PER_ELEMENT,(nt+1)*Fe/Ce.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ae,0,0,nt,Ce.width,Ce.height,1,ze,Ut)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ae,0,0,0,Ce.width,Ce.height,Se.depth,ze,Ce.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Ae,Ye,Ce.width,Ce.height,Se.depth,0,Ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Te&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,Ae,0,0,0,Ce.width,Ce.height,Se.depth,ze,qe,Ce.data):i.texImage3D(s.TEXTURE_2D_ARRAY,Ae,Ye,Ce.width,Ce.height,Se.depth,0,ze,qe,Ce.data)}else{X&&Le&&i.texStorage2D(s.TEXTURE_2D,Be,Ye,it[0].width,it[0].height);for(let Ae=0,_e=it.length;Ae<_e;Ae++)Ce=it[Ae],T.format!==_i?ze!==null?X?Te&&i.compressedTexSubImage2D(s.TEXTURE_2D,Ae,0,0,Ce.width,Ce.height,ze,Ce.data):i.compressedTexImage2D(s.TEXTURE_2D,Ae,Ye,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Te&&i.texSubImage2D(s.TEXTURE_2D,Ae,0,0,Ce.width,Ce.height,ze,qe,Ce.data):i.texImage2D(s.TEXTURE_2D,Ae,Ye,Ce.width,Ce.height,0,ze,qe,Ce.data)}else if(T.isDataArrayTexture)if(X){if(Le&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Be,Ye,Se.width,Se.height,Se.depth),Te)if(T.layerUpdates.size>0){const Ae=_v(Se.width,Se.height,T.format,T.type);for(const _e of T.layerUpdates){const Fe=Se.data.subarray(_e*Ae/Se.data.BYTES_PER_ELEMENT,(_e+1)*Ae/Se.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,_e,Se.width,Se.height,1,ze,qe,Fe)}T.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,ze,qe,Se.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Ye,Se.width,Se.height,Se.depth,0,ze,qe,Se.data);else if(T.isData3DTexture)X?(Le&&i.texStorage3D(s.TEXTURE_3D,Be,Ye,Se.width,Se.height,Se.depth),Te&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,ze,qe,Se.data)):i.texImage3D(s.TEXTURE_3D,0,Ye,Se.width,Se.height,Se.depth,0,ze,qe,Se.data);else if(T.isFramebufferTexture){if(Le)if(X)i.texStorage2D(s.TEXTURE_2D,Be,Ye,Se.width,Se.height);else{let Ae=Se.width,_e=Se.height;for(let Fe=0;Fe<Be;Fe++)i.texImage2D(s.TEXTURE_2D,Fe,Ye,Ae,_e,0,ze,qe,null),Ae>>=1,_e>>=1}}else if(it.length>0){if(X&&Le){const Ae=Qt(it[0]);i.texStorage2D(s.TEXTURE_2D,Be,Ye,Ae.width,Ae.height)}for(let Ae=0,_e=it.length;Ae<_e;Ae++)Ce=it[Ae],X?Te&&i.texSubImage2D(s.TEXTURE_2D,Ae,0,0,ze,qe,Ce):i.texImage2D(s.TEXTURE_2D,Ae,Ye,ze,qe,Ce);T.generateMipmaps=!1}else if(X){if(Le){const Ae=Qt(Se);i.texStorage2D(s.TEXTURE_2D,Be,Ye,Ae.width,Ae.height)}Te&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,ze,qe,Se)}else i.texImage2D(s.TEXTURE_2D,0,Ye,ze,qe,Se);y(T)&&x(fe),Oe.__version=ue.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function Re(P,T,te){if(T.image.length!==6)return;const fe=ye(P,T),pe=T.source;i.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+te);const ue=r.get(pe);if(pe.version!==ue.__version||fe===!0){i.activeTexture(s.TEXTURE0+te);const Oe=bt.getPrimaries(bt.workingColorSpace),Ue=T.colorSpace===Za?null:bt.getPrimaries(T.colorSpace),Ge=T.colorSpace===Za||Oe===Ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);const ke=T.isCompressedTexture||T.image[0].isCompressedTexture,Se=T.image[0]&&T.image[0].isDataTexture,ze=[];for(let _e=0;_e<6;_e++)!ke&&!Se?ze[_e]=A(T.image[_e],!0,l.maxCubemapSize):ze[_e]=Se?T.image[_e].image:T.image[_e],ze[_e]=at(T,ze[_e]);const qe=ze[0],Ye=u.convert(T.format,T.colorSpace),Ce=u.convert(T.type),it=L(T.internalFormat,Ye,Ce,T.colorSpace),X=T.isVideoTexture!==!0,Le=ue.__version===void 0||fe===!0,Te=pe.dataReady;let Be=I(T,qe);xe(s.TEXTURE_CUBE_MAP,T);let Ae;if(ke){X&&Le&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Be,it,qe.width,qe.height);for(let _e=0;_e<6;_e++){Ae=ze[_e].mipmaps;for(let Fe=0;Fe<Ae.length;Fe++){const nt=Ae[Fe];T.format!==_i?Ye!==null?X?Te&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Fe,0,0,nt.width,nt.height,Ye,nt.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Fe,it,nt.width,nt.height,0,nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Te&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Fe,0,0,nt.width,nt.height,Ye,Ce,nt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Fe,it,nt.width,nt.height,0,Ye,Ce,nt.data)}}}else{if(Ae=T.mipmaps,X&&Le){Ae.length>0&&Be++;const _e=Qt(ze[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Be,it,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(Se){X?Te&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,ze[_e].width,ze[_e].height,Ye,Ce,ze[_e].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,it,ze[_e].width,ze[_e].height,0,Ye,Ce,ze[_e].data);for(let Fe=0;Fe<Ae.length;Fe++){const Ut=Ae[Fe].image[_e].image;X?Te&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Fe+1,0,0,Ut.width,Ut.height,Ye,Ce,Ut.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Fe+1,it,Ut.width,Ut.height,0,Ye,Ce,Ut.data)}}else{X?Te&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Ye,Ce,ze[_e]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,it,Ye,Ce,ze[_e]);for(let Fe=0;Fe<Ae.length;Fe++){const nt=Ae[Fe];X?Te&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Fe+1,0,0,Ye,Ce,nt.image[_e]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Fe+1,it,Ye,Ce,nt.image[_e])}}}y(T)&&x(s.TEXTURE_CUBE_MAP),ue.__version=pe.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function we(P,T,te,fe,pe,ue){const Oe=u.convert(te.format,te.colorSpace),Ue=u.convert(te.type),Ge=L(te.internalFormat,Oe,Ue,te.colorSpace),ke=r.get(T),Se=r.get(te);if(Se.__renderTarget=T,!ke.__hasExternalTextures){const ze=Math.max(1,T.width>>ue),qe=Math.max(1,T.height>>ue);pe===s.TEXTURE_3D||pe===s.TEXTURE_2D_ARRAY?i.texImage3D(pe,ue,Ge,ze,qe,T.depth,0,Oe,Ue,null):i.texImage2D(pe,ue,Ge,ze,qe,0,Oe,Ue,null)}i.bindFramebuffer(s.FRAMEBUFFER,P),vt(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,fe,pe,Se.__webglTexture,0,Ve(T)):(pe===s.TEXTURE_2D||pe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,fe,pe,Se.__webglTexture,ue),i.bindFramebuffer(s.FRAMEBUFFER,null)}function lt(P,T,te){if(s.bindRenderbuffer(s.RENDERBUFFER,P),T.depthBuffer){const fe=T.depthTexture,pe=fe&&fe.isDepthTexture?fe.type:null,ue=w(T.stencilBuffer,pe),Oe=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ue=Ve(T);vt(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ue,ue,T.width,T.height):te?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ue,ue,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,ue,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Oe,s.RENDERBUFFER,P)}else{const fe=T.textures;for(let pe=0;pe<fe.length;pe++){const ue=fe[pe],Oe=u.convert(ue.format,ue.colorSpace),Ue=u.convert(ue.type),Ge=L(ue.internalFormat,Oe,Ue,ue.colorSpace),ke=Ve(T);te&&vt(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ke,Ge,T.width,T.height):vt(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ke,Ge,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Ge,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Qe(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const fe=r.get(T.depthTexture);fe.__renderTarget=T,(!fe.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),de(T.depthTexture,0);const pe=fe.__webglTexture,ue=Ve(T);if(T.depthTexture.format===Yo)vt(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,pe,0,ue):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,pe,0);else if(T.depthTexture.format===jo)vt(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,pe,0,ue):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,pe,0);else throw new Error("Unknown depthTexture format")}function Ot(P){const T=r.get(P),te=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){const fe=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),fe){const pe=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,fe.removeEventListener("dispose",pe)};fe.addEventListener("dispose",pe),T.__depthDisposeCallback=pe}T.__boundDepthTexture=fe}if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");const fe=P.texture.mipmaps;fe&&fe.length>0?Qe(T.__webglFramebuffer[0],P):Qe(T.__webglFramebuffer,P)}else if(te){T.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(i.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[fe]),T.__webglDepthbuffer[fe]===void 0)T.__webglDepthbuffer[fe]=s.createRenderbuffer(),lt(T.__webglDepthbuffer[fe],P,!1);else{const pe=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=T.__webglDepthbuffer[fe];s.bindRenderbuffer(s.RENDERBUFFER,ue),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,ue)}}else{const fe=P.texture.mipmaps;if(fe&&fe.length>0?i.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),lt(T.__webglDepthbuffer,P,!1);else{const pe=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ue),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,ue)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function Ft(P,T,te){const fe=r.get(P);T!==void 0&&we(fe.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),te!==void 0&&Ot(P)}function _t(P){const T=P.texture,te=r.get(P),fe=r.get(T);P.addEventListener("dispose",O);const pe=P.textures,ue=P.isWebGLCubeRenderTarget===!0,Oe=pe.length>1;if(Oe||(fe.__webglTexture===void 0&&(fe.__webglTexture=s.createTexture()),fe.__version=T.version,f.memory.textures++),ue){te.__webglFramebuffer=[];for(let Ue=0;Ue<6;Ue++)if(T.mipmaps&&T.mipmaps.length>0){te.__webglFramebuffer[Ue]=[];for(let Ge=0;Ge<T.mipmaps.length;Ge++)te.__webglFramebuffer[Ue][Ge]=s.createFramebuffer()}else te.__webglFramebuffer[Ue]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){te.__webglFramebuffer=[];for(let Ue=0;Ue<T.mipmaps.length;Ue++)te.__webglFramebuffer[Ue]=s.createFramebuffer()}else te.__webglFramebuffer=s.createFramebuffer();if(Oe)for(let Ue=0,Ge=pe.length;Ue<Ge;Ue++){const ke=r.get(pe[Ue]);ke.__webglTexture===void 0&&(ke.__webglTexture=s.createTexture(),f.memory.textures++)}if(P.samples>0&&vt(P)===!1){te.__webglMultisampledFramebuffer=s.createFramebuffer(),te.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let Ue=0;Ue<pe.length;Ue++){const Ge=pe[Ue];te.__webglColorRenderbuffer[Ue]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,te.__webglColorRenderbuffer[Ue]);const ke=u.convert(Ge.format,Ge.colorSpace),Se=u.convert(Ge.type),ze=L(Ge.internalFormat,ke,Se,Ge.colorSpace,P.isXRRenderTarget===!0),qe=Ve(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,qe,ze,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,te.__webglColorRenderbuffer[Ue])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(te.__webglDepthRenderbuffer=s.createRenderbuffer(),lt(te.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ue){i.bindTexture(s.TEXTURE_CUBE_MAP,fe.__webglTexture),xe(s.TEXTURE_CUBE_MAP,T);for(let Ue=0;Ue<6;Ue++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ge=0;Ge<T.mipmaps.length;Ge++)we(te.__webglFramebuffer[Ue][Ge],P,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,Ge);else we(te.__webglFramebuffer[Ue],P,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0);y(T)&&x(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Oe){for(let Ue=0,Ge=pe.length;Ue<Ge;Ue++){const ke=pe[Ue],Se=r.get(ke);i.bindTexture(s.TEXTURE_2D,Se.__webglTexture),xe(s.TEXTURE_2D,ke),we(te.__webglFramebuffer,P,ke,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,0),y(ke)&&x(s.TEXTURE_2D)}i.unbindTexture()}else{let Ue=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ue=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ue,fe.__webglTexture),xe(Ue,T),T.mipmaps&&T.mipmaps.length>0)for(let Ge=0;Ge<T.mipmaps.length;Ge++)we(te.__webglFramebuffer[Ge],P,T,s.COLOR_ATTACHMENT0,Ue,Ge);else we(te.__webglFramebuffer,P,T,s.COLOR_ATTACHMENT0,Ue,0);y(T)&&x(Ue),i.unbindTexture()}P.depthBuffer&&Ot(P)}function H(P){const T=P.textures;for(let te=0,fe=T.length;te<fe;te++){const pe=T[te];if(y(pe)){const ue=D(P),Oe=r.get(pe).__webglTexture;i.bindTexture(ue,Oe),x(ue),i.unbindTexture()}}}const xn=[],Et=[];function pt(P){if(P.samples>0){if(vt(P)===!1){const T=P.textures,te=P.width,fe=P.height;let pe=s.COLOR_BUFFER_BIT;const ue=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Oe=r.get(P),Ue=T.length>1;if(Ue)for(let ke=0;ke<T.length;ke++)i.bindFramebuffer(s.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Oe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer);const Ge=P.texture.mipmaps;Ge&&Ge.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let ke=0;ke<T.length;ke++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(pe|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(pe|=s.STENCIL_BUFFER_BIT)),Ue){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Oe.__webglColorRenderbuffer[ke]);const Se=r.get(T[ke]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Se,0)}s.blitFramebuffer(0,0,te,fe,0,0,te,fe,pe,s.NEAREST),m===!0&&(xn.length=0,Et.length=0,xn.push(s.COLOR_ATTACHMENT0+ke),P.depthBuffer&&P.resolveDepthBuffer===!1&&(xn.push(ue),Et.push(ue),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Et)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,xn))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ue)for(let ke=0;ke<T.length;ke++){i.bindFramebuffer(s.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.RENDERBUFFER,Oe.__webglColorRenderbuffer[ke]);const Se=r.get(T[ke]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Oe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.TEXTURE_2D,Se,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&m){const T=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function Ve(P){return Math.min(l.maxSamples,P.samples)}function vt(P){const T=r.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function je(P){const T=f.render.frame;g.get(P)!==T&&(g.set(P,T),P.update())}function at(P,T){const te=P.colorSpace,fe=P.format,pe=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||te!==Ls&&te!==Za&&(bt.getTransfer(te)===Pt?(fe!==_i||pe!==ha)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",te)),T}function Qt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(p.width=P.naturalWidth||P.width,p.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(p.width=P.displayWidth,p.height=P.displayHeight):(p.width=P.width,p.height=P.height),p}this.allocateTextureUnit=se,this.resetTextureUnits=oe,this.setTexture2D=de,this.setTexture2DArray=B,this.setTexture3D=Z,this.setTextureCube=Y,this.rebindTextures=Ft,this.setupRenderTarget=_t,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=Ot,this.setupFrameBufferTexture=we,this.useMultisampledRTT=vt}function UR(s,e){function i(r,l=Za){let u;const f=bt.getTransfer(l);if(r===ha)return s.UNSIGNED_BYTE;if(r===kd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Xd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===v0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===g0)return s.BYTE;if(r===_0)return s.SHORT;if(r===Wo)return s.UNSIGNED_SHORT;if(r===Vd)return s.INT;if(r===Lr)return s.UNSIGNED_INT;if(r===ra)return s.FLOAT;if(r===ua)return s.HALF_FLOAT;if(r===x0)return s.ALPHA;if(r===S0)return s.RGB;if(r===_i)return s.RGBA;if(r===Yo)return s.DEPTH_COMPONENT;if(r===jo)return s.DEPTH_STENCIL;if(r===y0)return s.RED;if(r===Wd)return s.RED_INTEGER;if(r===M0)return s.RG;if(r===qd)return s.RG_INTEGER;if(r===Yd)return s.RGBA_INTEGER;if(r===Fu||r===Hu||r===Gu||r===Vu)if(f===Pt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Fu)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Hu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Gu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Vu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Fu)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Hu)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Gu)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Vu)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===od||r===ld||r===ud||r===cd)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===od)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ld)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ud)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===cd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===fd||r===hd||r===dd)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===fd||r===hd)return f===Pt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===dd)return f===Pt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===pd||r===md||r===gd||r===_d||r===vd||r===xd||r===Sd||r===yd||r===Md||r===Ed||r===Td||r===bd||r===Ad||r===Rd)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===pd)return f===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===md)return f===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===gd)return f===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===_d)return f===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===vd)return f===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===xd)return f===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Sd)return f===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===yd)return f===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Md)return f===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ed)return f===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Td)return f===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===bd)return f===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ad)return f===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Rd)return f===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ku||r===Cd||r===wd)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===ku)return f===Pt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Cd)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===wd)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===E0||r===Dd||r===Ud||r===Ld)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===ku)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Dd)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ud)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ld)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===qo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const LR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,NR=`
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

}`;class PR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,r){if(this.texture===null){const l=new Vn,u=e.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Un({vertexShader:LR,fragmentShader:NR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new vi(new ec(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class OR extends Bs{constructor(e,i){super();const r=this;let l=null,u=1,f=null,d="local-floor",m=1,p=null,g=null,_=null,v=null,S=null,E=null;const A=new PR,y=i.getContextAttributes();let x=null,D=null;const L=[],w=[],I=new ot;let F=null;const O=new li;O.viewport=new en;const V=new li;V.viewport=new en;const U=[O,V],R=new JE;let G=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let me=L[Q];return me===void 0&&(me=new Oh,L[Q]=me),me.getTargetRaySpace()},this.getControllerGrip=function(Q){let me=L[Q];return me===void 0&&(me=new Oh,L[Q]=me),me.getGripSpace()},this.getHand=function(Q){let me=L[Q];return me===void 0&&(me=new Oh,L[Q]=me),me.getHandSpace()};function se(Q){const me=w.indexOf(Q.inputSource);if(me===-1)return;const Me=L[me];Me!==void 0&&(Me.update(Q.inputSource,Q.frame,p||f),Me.dispatchEvent({type:Q.type,data:Q.inputSource}))}function ve(){l.removeEventListener("select",se),l.removeEventListener("selectstart",se),l.removeEventListener("selectend",se),l.removeEventListener("squeeze",se),l.removeEventListener("squeezestart",se),l.removeEventListener("squeezeend",se),l.removeEventListener("end",ve),l.removeEventListener("inputsourceschange",de);for(let Q=0;Q<L.length;Q++){const me=w[Q];me!==null&&(w[Q]=null,L[Q].disconnect(me))}G=null,oe=null,A.reset(),e.setRenderTarget(x),S=null,v=null,_=null,l=null,D=null,ye.stop(),r.isPresenting=!1,e.setPixelRatio(F),e.setSize(I.width,I.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){u=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){d=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(Q){p=Q},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return _},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(Q){if(l=Q,l!==null){if(x=e.getRenderTarget(),l.addEventListener("select",se),l.addEventListener("selectstart",se),l.addEventListener("selectend",se),l.addEventListener("squeeze",se),l.addEventListener("squeezestart",se),l.addEventListener("squeezeend",se),l.addEventListener("end",ve),l.addEventListener("inputsourceschange",de),y.xrCompatible!==!0&&await i.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(I),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Re=null,we=null;y.depth&&(we=y.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Me=y.stencil?jo:Yo,Re=y.stencil?qo:Lr);const lt={colorFormat:i.RGBA8,depthFormat:we,scaleFactor:u};_=new XRWebGLBinding(l,i),v=_.createProjectionLayer(lt),l.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),D=new Si(v.textureWidth,v.textureHeight,{format:_i,type:ha,depthTexture:new O0(v.textureWidth,v.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Me={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:u};S=new XRWebGLLayer(l,i,Me),l.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),D=new Si(S.framebufferWidth,S.framebufferHeight,{format:_i,type:ha,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(d),ye.setContext(l),ye.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function de(Q){for(let me=0;me<Q.removed.length;me++){const Me=Q.removed[me],Re=w.indexOf(Me);Re>=0&&(w[Re]=null,L[Re].disconnect(Me))}for(let me=0;me<Q.added.length;me++){const Me=Q.added[me];let Re=w.indexOf(Me);if(Re===-1){for(let lt=0;lt<L.length;lt++)if(lt>=w.length){w.push(Me),Re=lt;break}else if(w[lt]===null){w[lt]=Me,Re=lt;break}if(Re===-1)break}const we=L[Re];we&&we.connect(Me)}}const B=new $,Z=new $;function Y(Q,me,Me){B.setFromMatrixPosition(me.matrixWorld),Z.setFromMatrixPosition(Me.matrixWorld);const Re=B.distanceTo(Z),we=me.projectionMatrix.elements,lt=Me.projectionMatrix.elements,Qe=we[14]/(we[10]-1),Ot=we[14]/(we[10]+1),Ft=(we[9]+1)/we[5],_t=(we[9]-1)/we[5],H=(we[8]-1)/we[0],xn=(lt[8]+1)/lt[0],Et=Qe*H,pt=Qe*xn,Ve=Re/(-H+xn),vt=Ve*-H;if(me.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(vt),Q.translateZ(Ve),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),we[10]===-1)Q.projectionMatrix.copy(me.projectionMatrix),Q.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const je=Qe+Ve,at=Ot+Ve,Qt=Et-vt,P=pt+(Re-vt),T=Ft*Ot/at*je,te=_t*Ot/at*je;Q.projectionMatrix.makePerspective(Qt,P,T,te,je,at),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Ee(Q,me){me===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(me.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(l===null)return;let me=Q.near,Me=Q.far;A.texture!==null&&(A.depthNear>0&&(me=A.depthNear),A.depthFar>0&&(Me=A.depthFar)),R.near=V.near=O.near=me,R.far=V.far=O.far=Me,(G!==R.near||oe!==R.far)&&(l.updateRenderState({depthNear:R.near,depthFar:R.far}),G=R.near,oe=R.far),O.layers.mask=Q.layers.mask|2,V.layers.mask=Q.layers.mask|4,R.layers.mask=O.layers.mask|V.layers.mask;const Re=Q.parent,we=R.cameras;Ee(R,Re);for(let lt=0;lt<we.length;lt++)Ee(we[lt],Re);we.length===2?Y(R,O,V):R.projectionMatrix.copy(O.projectionMatrix),N(Q,R,Re)};function N(Q,me,Me){Me===null?Q.matrix.copy(me.matrixWorld):(Q.matrix.copy(Me.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(me.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(me.projectionMatrix),Q.projectionMatrixInverse.copy(me.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Nd*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(v===null&&S===null))return m},this.setFoveation=function(Q){m=Q,v!==null&&(v.fixedFoveation=Q),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Q)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(R)};let ee=null;function xe(Q,me){if(g=me.getViewerPose(p||f),E=me,g!==null){const Me=g.views;S!==null&&(e.setRenderTargetFramebuffer(D,S.framebuffer),e.setRenderTarget(D));let Re=!1;Me.length!==R.cameras.length&&(R.cameras.length=0,Re=!0);for(let Qe=0;Qe<Me.length;Qe++){const Ot=Me[Qe];let Ft=null;if(S!==null)Ft=S.getViewport(Ot);else{const H=_.getViewSubImage(v,Ot);Ft=H.viewport,Qe===0&&(e.setRenderTargetTextures(D,H.colorTexture,H.depthStencilTexture),e.setRenderTarget(D))}let _t=U[Qe];_t===void 0&&(_t=new li,_t.layers.enable(Qe),_t.viewport=new en,U[Qe]=_t),_t.matrix.fromArray(Ot.transform.matrix),_t.matrix.decompose(_t.position,_t.quaternion,_t.scale),_t.projectionMatrix.fromArray(Ot.projectionMatrix),_t.projectionMatrixInverse.copy(_t.projectionMatrix).invert(),_t.viewport.set(Ft.x,Ft.y,Ft.width,Ft.height),Qe===0&&(R.matrix.copy(_t.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Re===!0&&R.cameras.push(_t)}const we=l.enabledFeatures;if(we&&we.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&_){const Qe=_.getDepthInformation(Me[0]);Qe&&Qe.isValid&&Qe.texture&&A.init(e,Qe,l.renderState)}}for(let Me=0;Me<L.length;Me++){const Re=w[Me],we=L[Me];Re!==null&&we!==void 0&&we.update(Re,me,p||f)}ee&&ee(Q,me),me.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:me}),E=null}const ye=new I0;ye.setAnimationLoop(xe),this.setAnimationLoop=function(Q){ee=Q},this.dispose=function(){}}}const br=new da,zR=new sn;function BR(s,e){function i(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function r(y,x){x.color.getRGB(y.fogColor.value,U0(s)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function l(y,x,D,L,w){x.isMeshBasicMaterial||x.isMeshLambertMaterial?u(y,x):x.isMeshToonMaterial?(u(y,x),_(y,x)):x.isMeshPhongMaterial?(u(y,x),g(y,x)):x.isMeshStandardMaterial?(u(y,x),v(y,x),x.isMeshPhysicalMaterial&&S(y,x,w)):x.isMeshMatcapMaterial?(u(y,x),E(y,x)):x.isMeshDepthMaterial?u(y,x):x.isMeshDistanceMaterial?(u(y,x),A(y,x)):x.isMeshNormalMaterial?u(y,x):x.isLineBasicMaterial?(f(y,x),x.isLineDashedMaterial&&d(y,x)):x.isPointsMaterial?m(y,x,D,L):x.isSpriteMaterial?p(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function u(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,i(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===Gn&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,i(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===Gn&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,i(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,i(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const D=e.get(x),L=D.envMap,w=D.envMapRotation;L&&(y.envMap.value=L,br.copy(w),br.x*=-1,br.y*=-1,br.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(br.y*=-1,br.z*=-1),y.envMapRotation.value.setFromMatrix4(zR.makeRotationFromEuler(br)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,y.aoMapTransform))}function f(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform))}function d(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function m(y,x,D,L){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*D,y.scale.value=L*.5,x.map&&(y.map.value=x.map,i(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function p(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function g(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function _(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function v(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function S(y,x,D){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Gn&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=D.texture,y.transmissionSamplerSize.value.set(D.width,D.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,x){x.matcap&&(y.matcap.value=x.matcap)}function A(y,x){const D=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(D.matrixWorld),y.nearDistance.value=D.shadow.camera.near,y.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function IR(s,e,i,r){let l={},u={},f=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(D,L){const w=L.program;r.uniformBlockBinding(D,w)}function p(D,L){let w=l[D.id];w===void 0&&(E(D),w=g(D),l[D.id]=w,D.addEventListener("dispose",y));const I=L.program;r.updateUBOMapping(D,I);const F=e.render.frame;u[D.id]!==F&&(v(D),u[D.id]=F)}function g(D){const L=_();D.__bindingPointIndex=L;const w=s.createBuffer(),I=D.__size,F=D.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,I,F),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,w),w}function _(){for(let D=0;D<d;D++)if(f.indexOf(D)===-1)return f.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(D){const L=l[D.id],w=D.uniforms,I=D.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let F=0,O=w.length;F<O;F++){const V=Array.isArray(w[F])?w[F]:[w[F]];for(let U=0,R=V.length;U<R;U++){const G=V[U];if(S(G,F,U,I)===!0){const oe=G.__offset,se=Array.isArray(G.value)?G.value:[G.value];let ve=0;for(let de=0;de<se.length;de++){const B=se[de],Z=A(B);typeof B=="number"||typeof B=="boolean"?(G.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,oe+ve,G.__data)):B.isMatrix3?(G.__data[0]=B.elements[0],G.__data[1]=B.elements[1],G.__data[2]=B.elements[2],G.__data[3]=0,G.__data[4]=B.elements[3],G.__data[5]=B.elements[4],G.__data[6]=B.elements[5],G.__data[7]=0,G.__data[8]=B.elements[6],G.__data[9]=B.elements[7],G.__data[10]=B.elements[8],G.__data[11]=0):(B.toArray(G.__data,ve),ve+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,oe,G.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(D,L,w,I){const F=D.value,O=L+"_"+w;if(I[O]===void 0)return typeof F=="number"||typeof F=="boolean"?I[O]=F:I[O]=F.clone(),!0;{const V=I[O];if(typeof F=="number"||typeof F=="boolean"){if(V!==F)return I[O]=F,!0}else if(V.equals(F)===!1)return V.copy(F),!0}return!1}function E(D){const L=D.uniforms;let w=0;const I=16;for(let O=0,V=L.length;O<V;O++){const U=Array.isArray(L[O])?L[O]:[L[O]];for(let R=0,G=U.length;R<G;R++){const oe=U[R],se=Array.isArray(oe.value)?oe.value:[oe.value];for(let ve=0,de=se.length;ve<de;ve++){const B=se[ve],Z=A(B),Y=w%I,Ee=Y%Z.boundary,N=Y+Ee;w+=Ee,N!==0&&I-N<Z.storage&&(w+=I-N),oe.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),oe.__offset=w,w+=Z.storage}}}const F=w%I;return F>0&&(w+=I-F),D.__size=w,D.__cache={},this}function A(D){const L={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(L.boundary=4,L.storage=4):D.isVector2?(L.boundary=8,L.storage=8):D.isVector3||D.isColor?(L.boundary=16,L.storage=12):D.isVector4?(L.boundary=16,L.storage=16):D.isMatrix3?(L.boundary=48,L.storage=48):D.isMatrix4?(L.boundary=64,L.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),L}function y(D){const L=D.target;L.removeEventListener("dispose",y);const w=f.indexOf(L.__bindingPointIndex);f.splice(w,1),s.deleteBuffer(l[L.id]),delete l[L.id],delete u[L.id]}function x(){for(const D in l)s.deleteBuffer(l[D]);f=[],l={},u={}}return{bind:m,update:p,dispose:x}}class FR{constructor(e={}){const{canvas:i=dE(),context:r=null,depth:l=!0,stencil:u=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=f;const E=new Uint32Array(4),A=new Int32Array(4);let y=null,x=null;const D=[],L=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ka,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let I=!1;this._outputColorSpace=$n;let F=0,O=0,V=null,U=-1,R=null;const G=new en,oe=new en;let se=null;const ve=new Ct(0);let de=0,B=i.width,Z=i.height,Y=1,Ee=null,N=null;const ee=new en(0,0,B,Z),xe=new en(0,0,B,Z);let ye=!1;const Q=new P0;let me=!1,Me=!1;const Re=new sn,we=new sn,lt=new $,Qe=new en,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ft=!1;function _t(){return V===null?Y:1}let H=r;function xn(C,q){return i.getContext(C,q)}try{const C={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Gd}`),i.addEventListener("webglcontextlost",Be,!1),i.addEventListener("webglcontextrestored",Ae,!1),i.addEventListener("webglcontextcreationerror",_e,!1),H===null){const q="webgl2";if(H=xn(q,C),H===null)throw xn(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Et,pt,Ve,vt,je,at,Qt,P,T,te,fe,pe,ue,Oe,Ue,Ge,ke,Se,ze,qe,Ye,Ce,it,X;function Le(){Et=new Z1(H),Et.init(),Ce=new UR(H,Et),pt=new V1(H,Et,e,Ce),Ve=new wR(H,Et),pt.reverseDepthBuffer&&v&&Ve.buffers.depth.setReversed(!0),vt=new J1(H),je=new gR,at=new DR(H,Et,Ve,je,pt,Ce,vt),Qt=new X1(w),P=new j1(w),T=new aT(H),it=new H1(H,T),te=new K1(H,T,vt,it),fe=new eA(H,te,T,vt),ze=new $1(H,pt,at),Ge=new k1(je),pe=new mR(w,Qt,P,Et,pt,it,Ge),ue=new BR(w,je),Oe=new vR,Ue=new TR(Et),Se=new F1(w,Qt,P,Ve,fe,S,m),ke=new RR(w,fe,pt),X=new IR(H,vt,pt,Ve),qe=new G1(H,Et,vt),Ye=new Q1(H,Et,vt),vt.programs=pe.programs,w.capabilities=pt,w.extensions=Et,w.properties=je,w.renderLists=Oe,w.shadowMap=ke,w.state=Ve,w.info=vt}Le();const Te=new OR(w,H);this.xr=Te,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const C=Et.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Et.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(C){C!==void 0&&(Y=C,this.setSize(B,Z,!1))},this.getSize=function(C){return C.set(B,Z)},this.setSize=function(C,q,ae=!0){if(Te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=C,Z=q,i.width=Math.floor(C*Y),i.height=Math.floor(q*Y),ae===!0&&(i.style.width=C+"px",i.style.height=q+"px"),this.setViewport(0,0,C,q)},this.getDrawingBufferSize=function(C){return C.set(B*Y,Z*Y).floor()},this.setDrawingBufferSize=function(C,q,ae){B=C,Z=q,Y=ae,i.width=Math.floor(C*ae),i.height=Math.floor(q*ae),this.setViewport(0,0,C,q)},this.getCurrentViewport=function(C){return C.copy(G)},this.getViewport=function(C){return C.copy(ee)},this.setViewport=function(C,q,ae,re){C.isVector4?ee.set(C.x,C.y,C.z,C.w):ee.set(C,q,ae,re),Ve.viewport(G.copy(ee).multiplyScalar(Y).round())},this.getScissor=function(C){return C.copy(xe)},this.setScissor=function(C,q,ae,re){C.isVector4?xe.set(C.x,C.y,C.z,C.w):xe.set(C,q,ae,re),Ve.scissor(oe.copy(xe).multiplyScalar(Y).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(C){Ve.setScissorTest(ye=C)},this.setOpaqueSort=function(C){Ee=C},this.setTransparentSort=function(C){N=C},this.getClearColor=function(C){return C.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor(...arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha(...arguments)},this.clear=function(C=!0,q=!0,ae=!0){let re=0;if(C){let j=!1;if(V!==null){const be=V.texture.format;j=be===Yd||be===qd||be===Wd}if(j){const be=V.texture.type,De=be===ha||be===Lr||be===Wo||be===qo||be===kd||be===Xd,Pe=Se.getClearColor(),Ie=Se.getClearAlpha(),$e=Pe.r,Ze=Pe.g,Xe=Pe.b;De?(E[0]=$e,E[1]=Ze,E[2]=Xe,E[3]=Ie,H.clearBufferuiv(H.COLOR,0,E)):(A[0]=$e,A[1]=Ze,A[2]=Xe,A[3]=Ie,H.clearBufferiv(H.COLOR,0,A))}else re|=H.COLOR_BUFFER_BIT}q&&(re|=H.DEPTH_BUFFER_BIT),ae&&(re|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Be,!1),i.removeEventListener("webglcontextrestored",Ae,!1),i.removeEventListener("webglcontextcreationerror",_e,!1),Se.dispose(),Oe.dispose(),Ue.dispose(),je.dispose(),Qt.dispose(),P.dispose(),fe.dispose(),it.dispose(),X.dispose(),pe.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",on),Te.removeEventListener("sessionend",Sn),On.stop()};function Be(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Ae(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const C=vt.autoReset,q=ke.enabled,ae=ke.autoUpdate,re=ke.needsUpdate,j=ke.type;Le(),vt.autoReset=C,ke.enabled=q,ke.autoUpdate=ae,ke.needsUpdate=re,ke.type=j}function _e(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Fe(C){const q=C.target;q.removeEventListener("dispose",Fe),nt(q)}function nt(C){Ut(C),je.remove(C)}function Ut(C){const q=je.get(C).programs;q!==void 0&&(q.forEach(function(ae){pe.releaseProgram(ae)}),C.isShaderMaterial&&pe.releaseShaderCache(C))}this.renderBufferDirect=function(C,q,ae,re,j,be){q===null&&(q=Ot);const De=j.isMesh&&j.matrixWorld.determinant()<0,Pe=er(C,q,ae,re,j);Ve.setMaterial(re,De);let Ie=ae.index,$e=1;if(re.wireframe===!0){if(Ie=te.getWireframeAttribute(ae),Ie===void 0)return;$e=2}const Ze=ae.drawRange,Xe=ae.attributes.position;let ft=Ze.start*$e,wt=(Ze.start+Ze.count)*$e;be!==null&&(ft=Math.max(ft,be.start*$e),wt=Math.min(wt,(be.start+be.count)*$e)),Ie!==null?(ft=Math.max(ft,0),wt=Math.min(wt,Ie.count)):Xe!=null&&(ft=Math.max(ft,0),wt=Math.min(wt,Xe.count));const Vt=wt-ft;if(Vt<0||Vt===1/0)return;it.setup(j,re,Pe,ae,Ie);let xt,St=qe;if(Ie!==null&&(xt=T.get(Ie),St=Ye,St.setIndex(xt)),j.isMesh)re.wireframe===!0?(Ve.setLineWidth(re.wireframeLinewidth*_t()),St.setMode(H.LINES)):St.setMode(H.TRIANGLES);else if(j.isLine){let Ke=re.linewidth;Ke===void 0&&(Ke=1),Ve.setLineWidth(Ke*_t()),j.isLineSegments?St.setMode(H.LINES):j.isLineLoop?St.setMode(H.LINE_LOOP):St.setMode(H.LINE_STRIP)}else j.isPoints?St.setMode(H.POINTS):j.isSprite&&St.setMode(H.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)Rs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),St.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(Et.get("WEBGL_multi_draw"))St.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Ke=j._multiDrawStarts,jt=j._multiDrawCounts,Tt=j._multiDrawCount,bn=Ie?T.get(Ie).bytesPerElement:1,xa=je.get(re).currentProgram.getUniforms();for(let kt=0;kt<Tt;kt++)xa.setValue(H,"_gl_DrawID",kt),St.render(Ke[kt]/bn,jt[kt])}else if(j.isInstancedMesh)St.renderInstances(ft,Vt,j.count);else if(ae.isInstancedBufferGeometry){const Ke=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,jt=Math.min(ae.instanceCount,Ke);St.renderInstances(ft,Vt,jt)}else St.render(ft,Vt)};function At(C,q,ae){C.transparent===!0&&C.side===aa&&C.forceSinglePass===!1?(C.side=Gn,C.needsUpdate=!0,_a(C,q,ae),C.side=Qa,C.needsUpdate=!0,_a(C,q,ae),C.side=aa):_a(C,q,ae)}this.compile=function(C,q,ae=null){ae===null&&(ae=C),x=Ue.get(ae),x.init(q),L.push(x),ae.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(x.pushLight(j),j.castShadow&&x.pushShadow(j))}),C!==ae&&C.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(x.pushLight(j),j.castShadow&&x.pushShadow(j))}),x.setupLights();const re=new Set;return C.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const be=j.material;if(be)if(Array.isArray(be))for(let De=0;De<be.length;De++){const Pe=be[De];At(Pe,ae,j),re.add(Pe)}else At(be,ae,j),re.add(be)}),x=L.pop(),re},this.compileAsync=function(C,q,ae=null){const re=this.compile(C,q,ae);return new Promise(j=>{function be(){if(re.forEach(function(De){je.get(De).currentProgram.isReady()&&re.delete(De)}),re.size===0){j(C);return}setTimeout(be,10)}Et.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let kn=null;function dn(C){kn&&kn(C)}function on(){On.stop()}function Sn(){On.start()}const On=new I0;On.setAnimationLoop(dn),typeof self<"u"&&On.setContext(self),this.setAnimationLoop=function(C){kn=C,Te.setAnimationLoop(C),C===null?On.stop():On.start()},Te.addEventListener("sessionstart",on),Te.addEventListener("sessionend",Sn),this.render=function(C,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(q),q=Te.getCamera()),C.isScene===!0&&C.onBeforeRender(w,C,q,V),x=Ue.get(C,L.length),x.init(q),L.push(x),we.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Q.setFromProjectionMatrix(we),Me=this.localClippingEnabled,me=Ge.init(this.clippingPlanes,Me),y=Oe.get(C,D.length),y.init(),D.push(y),Te.enabled===!0&&Te.isPresenting===!0){const be=w.xr.getDepthSensingMesh();be!==null&&Ja(be,q,-1/0,w.sortObjects)}Ja(C,q,0,w.sortObjects),y.finish(),w.sortObjects===!0&&y.sort(Ee,N),Ft=Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1,Ft&&Se.addToRenderList(y,C),this.info.render.frame++,me===!0&&Ge.beginShadows();const ae=x.state.shadowsArray;ke.render(ae,C,q),me===!0&&Ge.endShadows(),this.info.autoReset===!0&&this.info.reset();const re=y.opaque,j=y.transmissive;if(x.setupLights(),q.isArrayCamera){const be=q.cameras;if(j.length>0)for(let De=0,Pe=be.length;De<Pe;De++){const Ie=be[De];il(re,j,C,Ie)}Ft&&Se.render(C);for(let De=0,Pe=be.length;De<Pe;De++){const Ie=be[De];nl(y,C,Ie,Ie.viewport)}}else j.length>0&&il(re,j,C,q),Ft&&Se.render(C),nl(y,C,q);V!==null&&O===0&&(at.updateMultisampleRenderTarget(V),at.updateRenderTargetMipmap(V)),C.isScene===!0&&C.onAfterRender(w,C,q),it.resetDefaultState(),U=-1,R=null,L.pop(),L.length>0?(x=L[L.length-1],me===!0&&Ge.setGlobalState(w.clippingPlanes,x.state.camera)):x=null,D.pop(),D.length>0?y=D[D.length-1]:y=null};function Ja(C,q,ae,re){if(C.visible===!1)return;if(C.layers.test(q.layers)){if(C.isGroup)ae=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(q);else if(C.isLight)x.pushLight(C),C.castShadow&&x.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Q.intersectsSprite(C)){re&&Qe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(we);const De=fe.update(C),Pe=C.material;Pe.visible&&y.push(C,De,Pe,ae,Qe.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Q.intersectsObject(C))){const De=fe.update(C),Pe=C.material;if(re&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Qe.copy(C.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),Qe.copy(De.boundingSphere.center)),Qe.applyMatrix4(C.matrixWorld).applyMatrix4(we)),Array.isArray(Pe)){const Ie=De.groups;for(let $e=0,Ze=Ie.length;$e<Ze;$e++){const Xe=Ie[$e],ft=Pe[Xe.materialIndex];ft&&ft.visible&&y.push(C,De,ft,ae,Qe.z,Xe)}}else Pe.visible&&y.push(C,De,Pe,ae,Qe.z,null)}}const be=C.children;for(let De=0,Pe=be.length;De<Pe;De++)Ja(be[De],q,ae,re)}function nl(C,q,ae,re){const j=C.opaque,be=C.transmissive,De=C.transparent;x.setupLightsView(ae),me===!0&&Ge.setGlobalState(w.clippingPlanes,ae),re&&Ve.viewport(G.copy(re)),j.length>0&&$a(j,q,ae),be.length>0&&$a(be,q,ae),De.length>0&&$a(De,q,ae),Ve.buffers.depth.setTest(!0),Ve.buffers.depth.setMask(!0),Ve.buffers.color.setMask(!0),Ve.setPolygonOffset(!1)}function il(C,q,ae,re){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[re.id]===void 0&&(x.state.transmissionRenderTarget[re.id]=new Si(1,1,{generateMipmaps:!0,type:Et.has("EXT_color_buffer_half_float")||Et.has("EXT_color_buffer_float")?ua:ha,minFilter:Ur,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:bt.workingColorSpace}));const be=x.state.transmissionRenderTarget[re.id],De=re.viewport||G;be.setSize(De.z*w.transmissionResolutionScale,De.w*w.transmissionResolutionScale);const Pe=w.getRenderTarget();w.setRenderTarget(be),w.getClearColor(ve),de=w.getClearAlpha(),de<1&&w.setClearColor(16777215,.5),w.clear(),Ft&&Se.render(ae);const Ie=w.toneMapping;w.toneMapping=Ka;const $e=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),x.setupLightsView(re),me===!0&&Ge.setGlobalState(w.clippingPlanes,re),$a(C,ae,re),at.updateMultisampleRenderTarget(be),at.updateRenderTargetMipmap(be),Et.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let Xe=0,ft=q.length;Xe<ft;Xe++){const wt=q[Xe],Vt=wt.object,xt=wt.geometry,St=wt.material,Ke=wt.group;if(St.side===aa&&Vt.layers.test(re.layers)){const jt=St.side;St.side=Gn,St.needsUpdate=!0,ga(Vt,ae,re,xt,St,Ke),St.side=jt,St.needsUpdate=!0,Ze=!0}}Ze===!0&&(at.updateMultisampleRenderTarget(be),at.updateRenderTargetMipmap(be))}w.setRenderTarget(Pe),w.setClearColor(ve,de),$e!==void 0&&(re.viewport=$e),w.toneMapping=Ie}function $a(C,q,ae){const re=q.isScene===!0?q.overrideMaterial:null;for(let j=0,be=C.length;j<be;j++){const De=C[j],Pe=De.object,Ie=De.geometry,$e=De.group;let Ze=De.material;Ze.allowOverride===!0&&re!==null&&(Ze=re),Pe.layers.test(ae.layers)&&ga(Pe,q,ae,Ie,Ze,$e)}}function ga(C,q,ae,re,j,be){C.onBeforeRender(w,q,ae,re,j,be),C.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),j.onBeforeRender(w,q,ae,re,C,be),j.transparent===!0&&j.side===aa&&j.forceSinglePass===!1?(j.side=Gn,j.needsUpdate=!0,w.renderBufferDirect(ae,q,re,j,C,be),j.side=Qa,j.needsUpdate=!0,w.renderBufferDirect(ae,q,re,j,C,be),j.side=aa):w.renderBufferDirect(ae,q,re,j,C,be),C.onAfterRender(w,q,ae,re,j,be)}function _a(C,q,ae){q.isScene!==!0&&(q=Ot);const re=je.get(C),j=x.state.lights,be=x.state.shadowsArray,De=j.state.version,Pe=pe.getParameters(C,j.state,be,q,ae),Ie=pe.getProgramCacheKey(Pe);let $e=re.programs;re.environment=C.isMeshStandardMaterial?q.environment:null,re.fog=q.fog,re.envMap=(C.isMeshStandardMaterial?P:Qt).get(C.envMap||re.environment),re.envMapRotation=re.environment!==null&&C.envMap===null?q.environmentRotation:C.envMapRotation,$e===void 0&&(C.addEventListener("dispose",Fe),$e=new Map,re.programs=$e);let Ze=$e.get(Ie);if(Ze!==void 0){if(re.currentProgram===Ze&&re.lightsStateVersion===De)return Ni(C,Pe),Ze}else Pe.uniforms=pe.getUniforms(C),C.onBeforeCompile(Pe,w),Ze=pe.acquireProgram(Pe,Ie),$e.set(Ie,Ze),re.uniforms=Pe.uniforms;const Xe=re.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Xe.clippingPlanes=Ge.uniform),Ni(C,Pe),re.needsLights=tn(C),re.lightsStateVersion=De,re.needsLights&&(Xe.ambientLightColor.value=j.state.ambient,Xe.lightProbe.value=j.state.probe,Xe.directionalLights.value=j.state.directional,Xe.directionalLightShadows.value=j.state.directionalShadow,Xe.spotLights.value=j.state.spot,Xe.spotLightShadows.value=j.state.spotShadow,Xe.rectAreaLights.value=j.state.rectArea,Xe.ltc_1.value=j.state.rectAreaLTC1,Xe.ltc_2.value=j.state.rectAreaLTC2,Xe.pointLights.value=j.state.point,Xe.pointLightShadows.value=j.state.pointShadow,Xe.hemisphereLights.value=j.state.hemi,Xe.directionalShadowMap.value=j.state.directionalShadowMap,Xe.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Xe.spotShadowMap.value=j.state.spotShadowMap,Xe.spotLightMatrix.value=j.state.spotLightMatrix,Xe.spotLightMap.value=j.state.spotLightMap,Xe.pointShadowMap.value=j.state.pointShadowMap,Xe.pointShadowMatrix.value=j.state.pointShadowMatrix),re.currentProgram=Ze,re.uniformsList=null,Ze}function Li(C){if(C.uniformsList===null){const q=C.currentProgram.getUniforms();C.uniformsList=Xu.seqWithValue(q.seq,C.uniforms)}return C.uniformsList}function Ni(C,q){const ae=je.get(C);ae.outputColorSpace=q.outputColorSpace,ae.batching=q.batching,ae.batchingColor=q.batchingColor,ae.instancing=q.instancing,ae.instancingColor=q.instancingColor,ae.instancingMorph=q.instancingMorph,ae.skinning=q.skinning,ae.morphTargets=q.morphTargets,ae.morphNormals=q.morphNormals,ae.morphColors=q.morphColors,ae.morphTargetsCount=q.morphTargetsCount,ae.numClippingPlanes=q.numClippingPlanes,ae.numIntersection=q.numClipIntersection,ae.vertexAlphas=q.vertexAlphas,ae.vertexTangents=q.vertexTangents,ae.toneMapping=q.toneMapping}function er(C,q,ae,re,j){q.isScene!==!0&&(q=Ot),at.resetTextureUnits();const be=q.fog,De=re.isMeshStandardMaterial?q.environment:null,Pe=V===null?w.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Ls,Ie=(re.isMeshStandardMaterial?P:Qt).get(re.envMap||De),$e=re.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,Ze=!!ae.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),Xe=!!ae.morphAttributes.position,ft=!!ae.morphAttributes.normal,wt=!!ae.morphAttributes.color;let Vt=Ka;re.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Vt=w.toneMapping);const xt=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,St=xt!==void 0?xt.length:0,Ke=je.get(re),jt=x.state.lights;if(me===!0&&(Me===!0||C!==R)){const pn=C===R&&re.id===U;Ge.setState(re,C,pn)}let Tt=!1;re.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==jt.state.version||Ke.outputColorSpace!==Pe||j.isBatchedMesh&&Ke.batching===!1||!j.isBatchedMesh&&Ke.batching===!0||j.isBatchedMesh&&Ke.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Ke.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Ke.instancing===!1||!j.isInstancedMesh&&Ke.instancing===!0||j.isSkinnedMesh&&Ke.skinning===!1||!j.isSkinnedMesh&&Ke.skinning===!0||j.isInstancedMesh&&Ke.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Ke.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Ke.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Ke.instancingMorph===!1&&j.morphTexture!==null||Ke.envMap!==Ie||re.fog===!0&&Ke.fog!==be||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==Ge.numPlanes||Ke.numIntersection!==Ge.numIntersection)||Ke.vertexAlphas!==$e||Ke.vertexTangents!==Ze||Ke.morphTargets!==Xe||Ke.morphNormals!==ft||Ke.morphColors!==wt||Ke.toneMapping!==Vt||Ke.morphTargetsCount!==St)&&(Tt=!0):(Tt=!0,Ke.__version=re.version);let bn=Ke.currentProgram;Tt===!0&&(bn=_a(re,q,j));let xa=!1,kt=!1,Oi=!1;const Ht=bn.getUniforms(),An=Ke.uniforms;if(Ve.useProgram(bn.program)&&(xa=!0,kt=!0,Oi=!0),re.id!==U&&(U=re.id,kt=!0),xa||R!==C){Ve.buffers.depth.getReversed()?(Re.copy(C.projectionMatrix),mE(Re),gE(Re),Ht.setValue(H,"projectionMatrix",Re)):Ht.setValue(H,"projectionMatrix",C.projectionMatrix),Ht.setValue(H,"viewMatrix",C.matrixWorldInverse);const yn=Ht.map.cameraPosition;yn!==void 0&&yn.setValue(H,lt.setFromMatrixPosition(C.matrixWorld)),pt.logarithmicDepthBuffer&&Ht.setValue(H,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Ht.setValue(H,"isOrthographic",C.isOrthographicCamera===!0),R!==C&&(R=C,kt=!0,Oi=!0)}if(j.isSkinnedMesh){Ht.setOptional(H,j,"bindMatrix"),Ht.setOptional(H,j,"bindMatrixInverse");const pn=j.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),Ht.setValue(H,"boneTexture",pn.boneTexture,at))}j.isBatchedMesh&&(Ht.setOptional(H,j,"batchingTexture"),Ht.setValue(H,"batchingTexture",j._matricesTexture,at),Ht.setOptional(H,j,"batchingIdTexture"),Ht.setValue(H,"batchingIdTexture",j._indirectTexture,at),Ht.setOptional(H,j,"batchingColorTexture"),j._colorsTexture!==null&&Ht.setValue(H,"batchingColorTexture",j._colorsTexture,at));const ln=ae.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&ze.update(j,ae,bn),(kt||Ke.receiveShadow!==j.receiveShadow)&&(Ke.receiveShadow=j.receiveShadow,Ht.setValue(H,"receiveShadow",j.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(An.envMap.value=Ie,An.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),re.isMeshStandardMaterial&&re.envMap===null&&q.environment!==null&&(An.envMapIntensity.value=q.environmentIntensity),kt&&(Ht.setValue(H,"toneMappingExposure",w.toneMappingExposure),Ke.needsLights&&va(An,Oi),be&&re.fog===!0&&ue.refreshFogUniforms(An,be),ue.refreshMaterialUniforms(An,re,Y,Z,x.state.transmissionRenderTarget[C.id]),Xu.upload(H,Li(Ke),An,at)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(Xu.upload(H,Li(Ke),An,at),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Ht.setValue(H,"center",j.center),Ht.setValue(H,"modelViewMatrix",j.modelViewMatrix),Ht.setValue(H,"normalMatrix",j.normalMatrix),Ht.setValue(H,"modelMatrix",j.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const pn=re.uniformsGroups;for(let yn=0,yi=pn.length;yn<yi;yn++){const zi=pn[yn];X.update(zi,bn),X.bind(zi,bn)}}return bn}function va(C,q){C.ambientLightColor.needsUpdate=q,C.lightProbe.needsUpdate=q,C.directionalLights.needsUpdate=q,C.directionalLightShadows.needsUpdate=q,C.pointLights.needsUpdate=q,C.pointLightShadows.needsUpdate=q,C.spotLights.needsUpdate=q,C.spotLightShadows.needsUpdate=q,C.rectAreaLights.needsUpdate=q,C.hemisphereLights.needsUpdate=q}function tn(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(C,q,ae){const re=je.get(C);re.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),je.get(C.texture).__webglTexture=q,je.get(C.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:ae,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,q){const ae=je.get(C);ae.__webglFramebuffer=q,ae.__useDefaultFramebuffer=q===void 0};const al=H.createFramebuffer();this.setRenderTarget=function(C,q=0,ae=0){V=C,F=q,O=ae;let re=!0,j=null,be=!1,De=!1;if(C){const Ie=je.get(C);if(Ie.__useDefaultFramebuffer!==void 0)Ve.bindFramebuffer(H.FRAMEBUFFER,null),re=!1;else if(Ie.__webglFramebuffer===void 0)at.setupRenderTarget(C);else if(Ie.__hasExternalTextures)at.rebindTextures(C,je.get(C.texture).__webglTexture,je.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Xe=C.depthTexture;if(Ie.__boundDepthTexture!==Xe){if(Xe!==null&&je.has(Xe)&&(C.width!==Xe.image.width||C.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");at.setupDepthRenderbuffer(C)}}const $e=C.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(De=!0);const Ze=je.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ze[q])?j=Ze[q][ae]:j=Ze[q],be=!0):C.samples>0&&at.useMultisampledRTT(C)===!1?j=je.get(C).__webglMultisampledFramebuffer:Array.isArray(Ze)?j=Ze[ae]:j=Ze,G.copy(C.viewport),oe.copy(C.scissor),se=C.scissorTest}else G.copy(ee).multiplyScalar(Y).floor(),oe.copy(xe).multiplyScalar(Y).floor(),se=ye;if(ae!==0&&(j=al),Ve.bindFramebuffer(H.FRAMEBUFFER,j)&&re&&Ve.drawBuffers(C,j),Ve.viewport(G),Ve.scissor(oe),Ve.setScissorTest(se),be){const Ie=je.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ie.__webglTexture,ae)}else if(De){const Ie=je.get(C.texture),$e=q;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ie.__webglTexture,ae,$e)}else if(C!==null&&ae!==0){const Ie=je.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ie.__webglTexture,ae)}U=-1},this.readRenderTargetPixels=function(C,q,ae,re,j,be,De,Pe=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=je.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&De!==void 0&&(Ie=Ie[De]),Ie){Ve.bindFramebuffer(H.FRAMEBUFFER,Ie);try{const $e=C.textures[Pe],Ze=$e.format,Xe=$e.type;if(!pt.textureFormatReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pt.textureTypeReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=C.width-re&&ae>=0&&ae<=C.height-j&&(C.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Pe),H.readPixels(q,ae,re,j,Ce.convert(Ze),Ce.convert(Xe),be))}finally{const $e=V!==null?je.get(V).__webglFramebuffer:null;Ve.bindFramebuffer(H.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(C,q,ae,re,j,be,De,Pe=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=je.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&De!==void 0&&(Ie=Ie[De]),Ie)if(q>=0&&q<=C.width-re&&ae>=0&&ae<=C.height-j){Ve.bindFramebuffer(H.FRAMEBUFFER,Ie);const $e=C.textures[Pe],Ze=$e.format,Xe=$e.type;if(!pt.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pt.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ft=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,ft),H.bufferData(H.PIXEL_PACK_BUFFER,be.byteLength,H.STREAM_READ),C.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Pe),H.readPixels(q,ae,re,j,Ce.convert(Ze),Ce.convert(Xe),0);const wt=V!==null?je.get(V).__webglFramebuffer:null;Ve.bindFramebuffer(H.FRAMEBUFFER,wt);const Vt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await pE(H,Vt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,ft),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,be),H.deleteBuffer(ft),H.deleteSync(Vt),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,q=null,ae=0){const re=Math.pow(2,-ae),j=Math.floor(C.image.width*re),be=Math.floor(C.image.height*re),De=q!==null?q.x:0,Pe=q!==null?q.y:0;at.setTexture2D(C,0),H.copyTexSubImage2D(H.TEXTURE_2D,ae,0,0,De,Pe,j,be),Ve.unbindTexture()};const rl=H.createFramebuffer(),Pi=H.createFramebuffer();this.copyTextureToTexture=function(C,q,ae=null,re=null,j=0,be=null){be===null&&(j!==0?(Rs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),be=j,j=0):be=0);let De,Pe,Ie,$e,Ze,Xe,ft,wt,Vt;const xt=C.isCompressedTexture?C.mipmaps[be]:C.image;if(ae!==null)De=ae.max.x-ae.min.x,Pe=ae.max.y-ae.min.y,Ie=ae.isBox3?ae.max.z-ae.min.z:1,$e=ae.min.x,Ze=ae.min.y,Xe=ae.isBox3?ae.min.z:0;else{const ln=Math.pow(2,-j);De=Math.floor(xt.width*ln),Pe=Math.floor(xt.height*ln),C.isDataArrayTexture?Ie=xt.depth:C.isData3DTexture?Ie=Math.floor(xt.depth*ln):Ie=1,$e=0,Ze=0,Xe=0}re!==null?(ft=re.x,wt=re.y,Vt=re.z):(ft=0,wt=0,Vt=0);const St=Ce.convert(q.format),Ke=Ce.convert(q.type);let jt;q.isData3DTexture?(at.setTexture3D(q,0),jt=H.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(at.setTexture2DArray(q,0),jt=H.TEXTURE_2D_ARRAY):(at.setTexture2D(q,0),jt=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,q.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,q.unpackAlignment);const Tt=H.getParameter(H.UNPACK_ROW_LENGTH),bn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),xa=H.getParameter(H.UNPACK_SKIP_PIXELS),kt=H.getParameter(H.UNPACK_SKIP_ROWS),Oi=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,xt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,xt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,$e),H.pixelStorei(H.UNPACK_SKIP_ROWS,Ze),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Xe);const Ht=C.isDataArrayTexture||C.isData3DTexture,An=q.isDataArrayTexture||q.isData3DTexture;if(C.isDepthTexture){const ln=je.get(C),pn=je.get(q),yn=je.get(ln.__renderTarget),yi=je.get(pn.__renderTarget);Ve.bindFramebuffer(H.READ_FRAMEBUFFER,yn.__webglFramebuffer),Ve.bindFramebuffer(H.DRAW_FRAMEBUFFER,yi.__webglFramebuffer);for(let zi=0;zi<Ie;zi++)Ht&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,je.get(C).__webglTexture,j,Xe+zi),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,je.get(q).__webglTexture,be,Vt+zi)),H.blitFramebuffer($e,Ze,De,Pe,ft,wt,De,Pe,H.DEPTH_BUFFER_BIT,H.NEAREST);Ve.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ve.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(j!==0||C.isRenderTargetTexture||je.has(C)){const ln=je.get(C),pn=je.get(q);Ve.bindFramebuffer(H.READ_FRAMEBUFFER,rl),Ve.bindFramebuffer(H.DRAW_FRAMEBUFFER,Pi);for(let yn=0;yn<Ie;yn++)Ht?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,ln.__webglTexture,j,Xe+yn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,ln.__webglTexture,j),An?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,pn.__webglTexture,be,Vt+yn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,pn.__webglTexture,be),j!==0?H.blitFramebuffer($e,Ze,De,Pe,ft,wt,De,Pe,H.COLOR_BUFFER_BIT,H.NEAREST):An?H.copyTexSubImage3D(jt,be,ft,wt,Vt+yn,$e,Ze,De,Pe):H.copyTexSubImage2D(jt,be,ft,wt,$e,Ze,De,Pe);Ve.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ve.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else An?C.isDataTexture||C.isData3DTexture?H.texSubImage3D(jt,be,ft,wt,Vt,De,Pe,Ie,St,Ke,xt.data):q.isCompressedArrayTexture?H.compressedTexSubImage3D(jt,be,ft,wt,Vt,De,Pe,Ie,St,xt.data):H.texSubImage3D(jt,be,ft,wt,Vt,De,Pe,Ie,St,Ke,xt):C.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,be,ft,wt,De,Pe,St,Ke,xt.data):C.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,be,ft,wt,xt.width,xt.height,St,xt.data):H.texSubImage2D(H.TEXTURE_2D,be,ft,wt,De,Pe,St,Ke,xt);H.pixelStorei(H.UNPACK_ROW_LENGTH,Tt),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,bn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,xa),H.pixelStorei(H.UNPACK_SKIP_ROWS,kt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Oi),be===0&&q.generateMipmaps&&H.generateMipmap(jt),Ve.unbindTexture()},this.copyTextureToTexture3D=function(C,q,ae=null,re=null,j=0){return Rs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,q,ae,re,j)},this.initRenderTarget=function(C){je.get(C).__webglFramebuffer===void 0&&at.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?at.setTextureCube(C,0):C.isData3DTexture?at.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?at.setTexture2DArray(C,0):at.setTexture2D(C,0),Ve.unbindTexture()},this.resetState=function(){F=0,O=0,V=null,Ve.reset(),it.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=bt._getDrawingBufferColorSpace(e),i.unpackColorSpace=bt._getUnpackColorSpace()}}class Hs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const HR=new z0(-1,1,1,-1,0,1);class GR extends ma{constructor(){super(),this.setAttribute("position",new ui([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ui([0,2,0,0,2,0],2))}}const VR=new GR;class np{constructor(e){this._mesh=new vi(VR,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,HR)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}const Wu={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class kR extends Hs{constructor(e,i="tDiffuse"){super(),this.textureID=i,this.uniforms=null,this.material=null,e instanceof Un?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Zo.clone(e.uniforms),this.material=new Un({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new np(this.material)}render(e,i,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Vv extends Hs{constructor(e,i){super(),this.scene=e,this.camera=i,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,i,r){const l=e.getContext(),u=e.state;u.buffers.color.setMask(!1),u.buffers.depth.setMask(!1),u.buffers.color.setLocked(!0),u.buffers.depth.setLocked(!0);let f,d;this.inverse?(f=0,d=1):(f=1,d=0),u.buffers.stencil.setTest(!0),u.buffers.stencil.setOp(l.REPLACE,l.REPLACE,l.REPLACE),u.buffers.stencil.setFunc(l.ALWAYS,f,4294967295),u.buffers.stencil.setClear(d),u.buffers.stencil.setLocked(!0),e.setRenderTarget(r),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),u.buffers.color.setLocked(!1),u.buffers.depth.setLocked(!1),u.buffers.color.setMask(!0),u.buffers.depth.setMask(!0),u.buffers.stencil.setLocked(!1),u.buffers.stencil.setFunc(l.EQUAL,1,4294967295),u.buffers.stencil.setOp(l.KEEP,l.KEEP,l.KEEP),u.buffers.stencil.setLocked(!0)}}class XR extends Hs{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class WR{constructor(e,i){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),i===void 0){const r=e.getSize(new ot);this._width=r.width,this._height=r.height,i=new Si(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ua}),i.texture.name="EffectComposer.rt1"}else this._width=i.width,this._height=i.height;this.renderTarget1=i,this.renderTarget2=i.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new kR(Wu),this.copyPass.material.blending=la,this.clock=new ep}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,i){this.passes.splice(i,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const i=this.passes.indexOf(e);i!==-1&&this.passes.splice(i,1)}isLastEnabledPass(e){for(let i=e+1;i<this.passes.length;i++)if(this.passes[i].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const i=this.renderer.getRenderTarget();let r=!1;for(let l=0,u=this.passes.length;l<u;l++){const f=this.passes[l];if(f.enabled!==!1){if(f.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(l),f.render(this.renderer,this.writeBuffer,this.readBuffer,e,r),f.needsSwap){if(r){const d=this.renderer.getContext(),m=this.renderer.state.buffers.stencil;m.setFunc(d.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),m.setFunc(d.EQUAL,1,4294967295)}this.swapBuffers()}Vv!==void 0&&(f instanceof Vv?r=!0:f instanceof XR&&(r=!1))}}this.renderer.setRenderTarget(i)}reset(e){if(e===void 0){const i=this.renderer.getSize(new ot);this._pixelRatio=this.renderer.getPixelRatio(),this._width=i.width,this._height=i.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,i){this._width=e,this._height=i;const r=this._width*this._pixelRatio,l=this._height*this._pixelRatio;this.renderTarget1.setSize(r,l),this.renderTarget2.setSize(r,l);for(let u=0;u<this.passes.length;u++)this.passes[u].setSize(r,l)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}const zu={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class qR extends Hs{constructor(){super(),this.uniforms=Zo.clone(zu.uniforms),this.material=new XE({name:zu.name,uniforms:this.uniforms,vertexShader:zu.vertexShader,fragmentShader:zu.fragmentShader}),this._fsQuad=new np(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,i,r){this.uniforms.tDiffuse.value=r.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},bt.getTransfer(this._outputColorSpace)===Pt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===l0?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===u0?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===c0?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===f0?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===d0?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===p0?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===h0&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class YR extends Hs{constructor(e,i,r=null,l=null,u=null){super(),this.scene=e,this.camera=i,this.overrideMaterial=r,this.clearColor=l,this.clearAlpha=u,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ct}render(e,i,r){const l=e.autoClear;e.autoClear=!1;let u,f;this.overrideMaterial!==null&&(f=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(u=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:r),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(u),this.overrideMaterial!==null&&(this.scene.overrideMaterial=f),e.autoClear=l}}const jR={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ct(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Ps extends Hs{constructor(e,i=1,r,l){super(),this.strength=i,this.radius=r,this.threshold=l,this.resolution=e!==void 0?new ot(e.x,e.y):new ot(256,256),this.clearColor=new Ct(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let u=Math.round(this.resolution.x/2),f=Math.round(this.resolution.y/2);this.renderTargetBright=new Si(u,f,{type:ua}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let g=0;g<this.nMips;g++){const _=new Si(u,f,{type:ua});_.texture.name="UnrealBloomPass.h"+g,_.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(_);const v=new Si(u,f,{type:ua});v.texture.name="UnrealBloomPass.v"+g,v.texture.generateMipmaps=!1,this.renderTargetsVertical.push(v),u=Math.round(u/2),f=Math.round(f/2)}const d=jR;this.highPassUniforms=Zo.clone(d.uniforms),this.highPassUniforms.luminosityThreshold.value=l,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Un({uniforms:this.highPassUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader}),this.separableBlurMaterials=[];const m=[3,5,7,9,11];u=Math.round(this.resolution.x/2),f=Math.round(this.resolution.y/2);for(let g=0;g<this.nMips;g++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(m[g])),this.separableBlurMaterials[g].uniforms.invSize.value=new ot(1/u,1/f),u=Math.round(u/2),f=Math.round(f/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=i,this.compositeMaterial.uniforms.bloomRadius.value=.1;const p=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=p,this.bloomTintColors=[new $(1,1,1),new $(1,1,1),new $(1,1,1),new $(1,1,1),new $(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Zo.clone(Wu.uniforms),this.blendMaterial=new Un({uniforms:this.copyUniforms,vertexShader:Wu.vertexShader,fragmentShader:Wu.fragmentShader,blending:Yh,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ct,this._oldClearAlpha=1,this._basic=new Kd,this._fsQuad=new np(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,i){let r=Math.round(e/2),l=Math.round(i/2);this.renderTargetBright.setSize(r,l);for(let u=0;u<this.nMips;u++)this.renderTargetsHorizontal[u].setSize(r,l),this.renderTargetsVertical[u].setSize(r,l),this.separableBlurMaterials[u].uniforms.invSize.value=new ot(1/r,1/l),r=Math.round(r/2),l=Math.round(l/2)}render(e,i,r,l,u){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const f=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),u&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let d=this.renderTargetBright;for(let m=0;m<this.nMips;m++)this._fsQuad.material=this.separableBlurMaterials[m],this.separableBlurMaterials[m].uniforms.colorTexture.value=d.texture,this.separableBlurMaterials[m].uniforms.direction.value=Ps.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[m]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[m].uniforms.colorTexture.value=this.renderTargetsHorizontal[m].texture,this.separableBlurMaterials[m].uniforms.direction.value=Ps.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[m]),e.clear(),this._fsQuad.render(e),d=this.renderTargetsVertical[m];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,u&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(r),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=f}_getSeparableBlurMaterial(e){const i=[];for(let r=0;r<e;r++)i.push(.39894*Math.exp(-.5*r*r/(e*e))/e);return new Un({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ot(.5,.5)},direction:{value:new ot(.5,.5)},gaussianCoefficients:{value:i}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(e){return new Un({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Ps.BlurDirectionX=new ot(1,0);Ps.BlurDirectionY=new ot(0,1);const ZR=le.forwardRef((s,e)=>{const i=le.useRef(null),r=le.useRef(null),l=le.useRef(null);return le.useEffect(()=>{const u=i.current;if(!u)return;const f=new GE,d=new li(45,window.innerWidth/window.innerHeight,.1,1e3),m=new FR({alpha:!0,antialias:!0}),p={red:0,green:.3,blue:1,threshold:.2,strength:1,radius:1};m.outputColorSpace=$n;const g=new YR(f,d);d.position.set(0,-2,14),d.lookAt(0,0,0),m.setSize(window.innerWidth,window.innerHeight),u.innerHTML="",u.appendChild(m.domElement);const _=new Ps(new ot(window.innerWidth,window.innerHeight),0,0,0);_.threshold=p.threshold,_.strength=p.strength,_.radius=p.radius;const v=new WR(m);v.addPass(g),v.addPass(_);const S=new qR;v.addPass(S);const E={u_time:{type:"f",value:0},u_frequency:{type:"f",value:0},u_red:{type:"f",value:1},u_green:{type:"f",value:1},u_blue:{type:"f",value:1}};E.u_red.value=p.red,E.u_green.value=p.green,E.u_blue.value=p.blue;const A=`
                uniform float u_time;
                vec3 mod289(vec3 x)
                {
                    return x - floor(x * (1.0 / 289.0)) * 289.0;
                }
                
                vec4 mod289(vec4 x)
                {
                    return x - floor(x * (1.0 / 289.0)) * 289.0;
                }
                
                vec4 permute(vec4 x)
                {
                    return mod289(((x*34.0)+10.0)*x);
                }
                
                vec4 taylorInvSqrt(vec4 r)
                {
                    return 1.79284291400159 - 0.85373472095314 * r;
                }
                
                vec3 fade(vec3 t) {
                    return t*t*t*(t*(t*6.0-15.0)+10.0);
                }
                // Classic Perlin noise, periodic variant
                float pnoise(vec3 P, vec3 rep)
                {
                    vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period
                    vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period
                    Pi0 = mod289(Pi0);
                    Pi1 = mod289(Pi1);
                    vec3 Pf0 = fract(P); // Fractional part for interpolation
                    vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
                    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
                    vec4 iy = vec4(Pi0.yy, Pi1.yy);
                    vec4 iz0 = Pi0.zzzz;
                    vec4 iz1 = Pi1.zzzz;
                    vec4 ixy = permute(permute(ix) + iy);
                    vec4 ixy0 = permute(ixy + iz0);
                    vec4 ixy1 = permute(ixy + iz1);
                    vec4 gx0 = ixy0 * (1.0 / 7.0);
                    vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
                    gx0 = fract(gx0);
                    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
                    vec4 sz0 = step(gz0, vec4(0.0));
                    gx0 -= sz0 * (step(0.0, gx0) - 0.5);
                    gy0 -= sz0 * (step(0.0, gy0) - 0.5);
                    vec4 gx1 = ixy1 * (1.0 / 7.0);
                    vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
                    gx1 = fract(gx1);
                    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
                    vec4 sz1 = step(gz1, vec4(0.0));
                    gx1 -= sz1 * (step(0.0, gx1) - 0.5);
                    gy1 -= sz1 * (step(0.0, gy1) - 0.5);
                    vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
                    vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
                    vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
                    vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
                    vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
                    vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
                    vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
                    vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);
                    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
                    g000 *= norm0.x;
                    g010 *= norm0.y;
                    g100 *= norm0.z;
                    g110 *= norm0.w;
                    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
                    g001 *= norm1.x;
                    g011 *= norm1.y;
                    g101 *= norm1.z;
                    g111 *= norm1.w;
                    float n000 = dot(g000, Pf0);
                    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
                    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
                    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
                    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
                    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
                    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
                    float n111 = dot(g111, Pf1);
                    vec3 fade_xyz = fade(Pf0);
                    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
                    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
                    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
                    return 2.2 * n_xyz;
                }
                uniform float u_frequency;
                void main() {
                    float noise = 3.0 * pnoise(position + u_time, vec3(10.0));
                    float displacement = (u_frequency / 30.) * (noise / 10.);
                    vec3 newPosition = position + normal * displacement;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
                }
            `,y=`
                uniform float u_red;
                uniform float u_blue;
                uniform float u_green;
                void main() {
                    gl_FragColor = vec4(vec3(u_red, u_green, u_blue), 1. );
                }
            `,x=new Un({uniforms:E,vertexShader:A,fragmentShader:y}),D=new Jd(2,15),L=new vi(D,x);L.material.wireframe=!0,f.add(L);const w=new eT;d.add(w),l.current=new tT(w);const I=new nT(l.current,32);let F=0,O=0;document.addEventListener("mousemove",function(G){let oe=window.innerWidth/2,se=window.innerHeight/2;F=(G.clientX-oe)/100,O=(G.clientY-se)/100});const V=new ep;function U(){d.position.x+=(F-d.position.x)*.05,d.position.y+=(-O-d.position.y)*.5,d.lookAt(f.position),E.u_time.value=V.getElapsedTime(),E.u_frequency.value=I.getAverageFrequency(),v.render(),requestAnimationFrame(U)}U();const R=()=>{d.aspect=window.innerWidth/window.innerHeight,d.updateProjectionMatrix(),m.setSize(window.innerWidth,window.innerHeight),v.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",R),()=>{window.removeEventListener("resize",R),m.dispose(),f.clear(),u.contains(m.domElement)&&u.removeChild(m.domElement)}},[]),le.useImperativeHandle(e,()=>({playSound:u=>{r.current||(r.current=new QE),r.current.load(u,f=>{l.current&&(l.current.stop(),l.current.setBuffer(f),l.current.setLoop(!1),l.current.setVolume(.5),l.current.play())})}})),ct.jsx("div",{ref:i,style:{height:"100%",width:"100%"}})}),k0=s=>{const i=Array.from(s.toString()).map(Number).reduce((r,l)=>r+l,0);return i<10?i:k0(i)},KR=(s,e)=>s&&s.meta&&s.meta.domain&&s.type&&s.type==="edit"?s.meta.domain.includes(`${e}.wikipedia.org`):!1;function ja(s){const{role:e,name:i,url:r}=s;return ct.jsxs("div",{className:"credit",children:[ct.jsx("p",{className:"credit__role",children:e??""}),r?ct.jsx("a",{className:"credit__name",href:r,target:"_blank",children:i}):ct.jsx("p",{className:"credit__name",children:i})]})}function QR(){const s=le.useRef(null),e=le.useRef(null),i=le.useRef(null),r=le.useRef(!1),[l,u]=le.useState(!1),[f,d]=le.useState(Array.from(W_.keys())[0]),[m,p]=le.useState([]),{data:g}=RM("https://stream.wikimedia.org/v2/stream/recentchange");le.useEffect(()=>{if(KR(g,f)){p(y=>[...y,{id:g.id,title:g.title,url:g.title_url}]);let S=g.id&&typeof g.id=="number"?k0(g.id):1;(S<1||S>6)&&(S=1),console.log(g);let E=1;g.length&&g.length.old&&g.length.new&&(E=(Math.abs(g.length.old-g.length.new)%2+2)%2);const A=CM.get(S)??"/audio/C2v10.mp3";v(A,E)}},[g,f]),le.useEffect(()=>{p([])},[f]),le.useEffect(()=>{i.current&&i.current.scrollIntoView({behavior:"smooth"})},[m]);const _=S=>{const E=S.target.value;d(E)},v=(S,E)=>{!s.current||!e.current||(s.current.playNote(S,E,r?1:-1),e.current.playSound(S),r.current=!r.current)};return ct.jsxs("div",{className:"feed-page",children:[l?null:ct.jsx("div",{className:"toggle-audio",children:ct.jsx("button",{type:"button",style:{position:"fixed"},onClick:()=>u(!0),className:"toggle-audio__btn pulse",children:"Click to toggle audio"})}),ct.jsxs(wM,{buttonText:"Credits",buttonStyle:{position:"fixed",top:"24px",right:"24px"},children:[ct.jsx(ja,{role:"Designer",name:"Davide Rivolta",url:"https://www.daviderivolta.com/"}),ct.jsx(ja,{role:"Developer",name:"Davide Rivolta",url:"https://www.daviderivolta.com/"}),ct.jsx(ja,{role:"Inspired by",name:"Listen to Wikipedia",url:"http://listen.hatnote.com/"}),ct.jsx(ja,{role:"",name:"BitListen",url:"https://www.bitlisten.com/"}),ct.jsx(ja,{role:"Icosahedron by",name:"Wael Yasmina",url:"https://waelyasmina.net/articles/how-to-create-a-3d-audio-visualizer-using-three-js/"}),ct.jsx(ja,{role:"Tech stack",name:"React"}),ct.jsx(ja,{role:"",name:"Three js"}),ct.jsx(ja,{role:"",name:"Typescript"})]}),ct.jsx("select",{className:"select",onChange:S=>_(S),children:Array.from(W_).map(([S,E])=>ct.jsx("option",{value:S,defaultValue:0,children:E},S))}),l?ct.jsx("div",{className:"edits",children:m.map((S,E)=>ct.jsx("p",{ref:E===m.length-1?i:null,className:"edit",children:ct.jsx("a",{href:S.url,target:"_blank",className:"edit__url",children:S.title})},S.id))}):null,ct.jsx(DM,{ref:s,isAudio:l}),ct.jsx(ZR,{ref:e})]})}function JR(){return ct.jsx("p",{children:"NOT FOUND"})}function $R(){return ct.jsx(_M,{basename:"/wikibeat",children:ct.jsxs(Yy,{children:[ct.jsx(Wh,{path:"/",Component:QR}),ct.jsx(Wh,{path:"*",Component:JR})]})})}ty.createRoot(document.getElementById("root")).render(ct.jsx(le.StrictMode,{children:ct.jsx($R,{})}));
