// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){if(r.__esModule)return r;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(e){var n=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:function(){return r[e]}})})),t}var t=/./,e="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return e({},"x",{}),!0}catch(r){return!1}},o=Object.defineProperty,u=Object.prototype,i=u.toString,c=u.__defineGetter__,a=u.__defineSetter__,f=u.__lookupGetter__,l=u.__lookupSetter__;var p=function(r,t,e){var n,o,p,y;if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(f.call(r,t)||l.call(r,t)?(n=r.__proto__,r.__proto__=u,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),p="get"in e,y="set"in e,o&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&c&&c.call(r,t,e.get),y&&a&&a.call(r,t,e.set),r},y=o,v=p,b=n()?y:v;var s=function(r,t,e){b(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})},_=s;var j=function(r){return"boolean"==typeof r};var d=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var g=function(){return d&&"symbol"==typeof Symbol.toStringTag},m=Object.prototype.toString,w=m;var O=function(r){return w.call(r)},h=Object.prototype.hasOwnProperty;var P=function(r,t){return null!=r&&h.call(r,t)},S="function"==typeof Symbol?Symbol.toStringTag:"",E=P,A=S,B=m;var T=O,k=function(r){var t,e,n;if(null==r)return B.call(r);e=r[A],t=E(r,A);try{r[A]=void 0}catch(t){return B.call(r)}return n=B.call(r),t?r[A]=e:delete r[A],n},x=g()?k:T,G=Boolean.prototype.toString;var M=x,V=function(r){try{return G.call(r),!0}catch(r){return!1}},C=g();var F=function(r){return"object"==typeof r&&(r instanceof Boolean||(C?V(r):"[object Boolean]"===M(r)))},L=j,R=F;var X=_,z=function(r){return L(r)||R(r)},D=F;X(z,"isPrimitive",j),X(z,"isObject",D);var I="object"==typeof self?self:null,N="object"==typeof window?window:null,U=z.isPrimitive,q=function(){return new Function("return this;")()},H=I,J=N,K=r(Object.freeze({__proto__:null}));var Q=function(r){if(arguments.length){if(!U(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return q()}if(H)return H;if(J)return J;if(K)return K;throw new Error("unexpected error. Unable to resolve global object.")},W=Q(),Y=W.document&&W.document.childNodes,Z=Int8Array,$=t,rr=Y,tr=Z;var er=function(){return"function"==typeof $||"object"==typeof tr||"function"==typeof rr};var nr=function(){return/^\s*function\s*([^(]*)/i},or=nr;_(or,"REGEXP",nr());var ur=or,ir=x;var cr=Array.isArray?Array.isArray:function(r){return"[object Array]"===ir(r)};var ar=function(r){return null!==r&&"object"==typeof r};_(ar,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!cr(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(ar));var fr=ar;var lr=x,pr=ur.REGEXP,yr=function(r){return fr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var vr=function(r){var t,e,n;if(("Object"===(e=lr(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=pr.exec(n.toString()))return t[1]}return yr(r)?"Buffer":e},br=vr;var sr=vr;var _r=function(r){var t;return null===r?"null":"object"===(t=typeof r)?br(r).toLowerCase():t},jr=function(r){return sr(r).toLowerCase()},dr=er()?jr:_r;var gr=function(r){return"function"===dr(r)},mr=Object.getPrototypeOf;var wr=function(r){return r.__proto__},Or=x,hr=wr;var Pr=function(r){var t=hr(r);return t||null===t?t:"[object Function]"===Or(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null},Sr=mr,Er=Pr,Ar=gr(Object.getPrototypeOf)?Sr:Er;var Br=function(r){return null==r?null:(r=Object(r),Ar(r))};export{Br as default};
//# sourceMappingURL=mod.js.map
