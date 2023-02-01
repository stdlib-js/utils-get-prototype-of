// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).getPrototypeOf=e()}(this,(function(){"use strict";var t=Object,e=/./,r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n,o=Object.defineProperty,u=Object.prototype,i=u.toString,c=u.__defineGetter__,l=u.__defineSetter__,f=u.__lookupGetter__,a=u.__lookupSetter__;n=function(){try{return r({},"x",{}),!0}catch(t){return!1}}()?o:function(t,e,r){var n,o,p,y;if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&(f.call(t,e)||a.call(t,e)?(n=t.__proto__,t.__proto__=u,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),p="get"in r,y="set"in r,o&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&c&&c.call(t,e,r.get),y&&l&&l.call(t,e,r.set),t};var p=n;function y(t,e,r){p(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function b(t){return"boolean"==typeof t}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function v(){return s&&"symbol"==typeof Symbol.toStringTag}var d=Object.prototype.toString;var _=Object.prototype.hasOwnProperty;var j,g="function"==typeof Symbol?Symbol.toStringTag:"";j=v()?function(t){var e,r,n,o,u;if(null==t)return d.call(t);r=t[g],u=g,e=null!=(o=t)&&_.call(o,u);try{t[g]=void 0}catch(e){return d.call(t)}return n=d.call(t),e?t[g]=r:delete t[g],n}:function(t){return d.call(t)};var m=j,w=Boolean.prototype.toString;var h=v();function O(t){return"object"==typeof t&&(t instanceof Boolean||(h?function(t){try{return w.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===m(t)))}function S(t){return b(t)||O(t)}function P(){return new Function("return this;")()}y(S,"isPrimitive",b),y(S,"isObject",O);var A="object"==typeof self?self:null,E="object"==typeof window?window:null,T="object"==typeof global?global:null;var B=function(t){if(arguments.length){if(!b(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return P()}if(A)return A;if(E)return E;if(T)return T;throw new Error("unexpected error. Unable to resolve global object.")}(),x=B.document&&B.document.childNodes,V=Int8Array;function k(){return/^\s*function\s*([^(]*)/i}var C,F=/^\s*function\s*([^(]*)/i;y(k,"REGEXP",F),C=Array.isArray?Array.isArray:function(t){return"[object Array]"===m(t)};var G=C;function L(t){return null!==t&&"object"==typeof t}var M=function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!G(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(L);function I(t){var e,r,n,o;if(("Object"===(r=m(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=F.exec(n.toString()))return e[1]}return L(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}y(L,"isObjectLikeArray",M);var N="function"==typeof e||"object"==typeof V||"function"==typeof x?function(t){return I(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?I(t).toLowerCase():e};var R,U,X=Object.getPrototypeOf;U=Object.getPrototypeOf,R="function"===N(U)?X:function(t){var e=function(t){return t.__proto__}(t);return e||null===e?e:"[object Function]"===m(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var q=R;return function(e){return null==e?null:(e=t(e),q(e))}}));
//# sourceMappingURL=index.js.map