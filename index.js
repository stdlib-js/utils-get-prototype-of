// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).getPrototypeOf=r()}(this,(function(){"use strict";var e=Object,r=/./,t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty;function o(e){return"number"==typeof e}function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function a(e,r,t){var n=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+i(o):i(o)+e,n&&(e="-"+e)),e}var c=String.prototype.toLowerCase,l=String.prototype.toUpperCase;function u(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!o(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=a(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=a(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===l.call(e.specifier)?l.call(t):c.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function s(e){return"string"==typeof e}var f=Math.abs,p=String.prototype.toLowerCase,g=String.prototype.toUpperCase,d=String.prototype.replace,b=/e\+(\d)$/,y=/e-(\d)$/,v=/^(\d+)$/,h=/^(\d+)e/,_=/\.0$/,w=/\.0*e/,m=/(\..*[^0])0*e/;function j(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!o(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":f(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=d.call(t,m,"$1e"),t=d.call(t,w,"e"),t=d.call(t,_,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=d.call(t,b,"e+0$1"),t=d.call(t,y,"e-0$1"),e.alternate&&(t=d.call(t,v,"$1."),t=d.call(t,h,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===g.call(e.specifier)?g.call(t):p.call(t)}function E(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function S(e,r,t){var n=r-e.length;return n<0?e:e=t?e+E(n):E(n)+e}var O=String.fromCharCode,k=isNaN,x=Array.isArray;function T(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function A(e){var r,t,n,o,i,c,l,f,p;if(!x(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(c="",l=1,f=0;f<e.length;f++)if(s(n=e[f]))c+=n;else{if(r=void 0!==n.precision,!(n=T(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,k(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,k(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!k(n.arg)){if((i=parseInt(n.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=k(i)?String(n.arg):O(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=j(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=a(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=S(n.arg,n.width,n.padRight)),c+=n.arg||"",l+=1}return c}var P=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function V(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function F(e){var r,t,n,o;for(t=[],o=0,n=P.exec(e);n;)(r=e.slice(o,P.lastIndex-n[0].length)).length&&t.push(r),t.push(V(n)),o=P.lastIndex,n=P.exec(e);return(r=e.slice(o)).length&&t.push(r),t}function C(e){return"string"==typeof e}function $(e){var r,t,n;if(!C(e))throw new TypeError($("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=F(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return A.apply(null,t)}var G,I=Object.prototype,B=I.toString,R=I.__defineGetter__,L=I.__defineSetter__,Z=I.__lookupGetter__,W=I.__lookupSetter__;G=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?n:function(e,r,t){var n,o,i,a;if("object"!=typeof e||null===e||"[object Array]"===B.call(e))throw new TypeError($("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===B.call(t))throw new TypeError($("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(Z.call(e,r)||W.call(e,r)?(n=e.__proto__,e.__proto__=I,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&R&&R.call(e,r,t.get),a&&L&&L.call(e,r,t.set),e};var M=G;function N(e,r,t){M(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function U(e){return"boolean"==typeof e}var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function z(){return X&&"symbol"==typeof Symbol.toStringTag}var q=Object.prototype.toString;var D=Object.prototype.hasOwnProperty;var H,J="function"==typeof Symbol?Symbol:void 0,K="function"==typeof J?J.toStringTag:"";H=z()?function(e){var r,t,n,o,i;if(null==e)return q.call(e);t=e[K],i=K,r=null!=(o=e)&&D.call(o,i);try{e[K]=void 0}catch(r){return q.call(e)}return n=q.call(e),r?e[K]=t:delete e[K],n}:function(e){return q.call(e)};var Q=H,Y=Boolean,ee=Boolean.prototype.toString;var re=z();function te(e){return"object"==typeof e&&(e instanceof Y||(re?function(e){try{return ee.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===Q(e)))}function ne(e){return U(e)||te(e)}function oe(){return new Function("return this;")()}N(ne,"isPrimitive",U),N(ne,"isObject",te);var ie="object"==typeof self?self:null,ae="object"==typeof window?window:null,ce="object"==typeof global?global:null,le="object"==typeof globalThis?globalThis:null;var ue=function(e){if(arguments.length){if(!U(e))throw new TypeError($("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return oe()}if(le)return le;if(ie)return ie;if(ae)return ae;if(ce)return ce;throw new Error("unexpected error. Unable to resolve global object.")}(),se=ue.document&&ue.document.childNodes,fe=Int8Array;var pe="function"==typeof Object.defineProperty?Object.defineProperty:null;var ge,de=Object.defineProperty,be=Object.prototype,ye=be.toString,ve=be.__defineGetter__,he=be.__defineSetter__,_e=be.__lookupGetter__,we=be.__lookupSetter__;ge=function(){try{return pe({},"x",{}),!0}catch(e){return!1}}()?de:function(e,r,t){var n,o,i,a;if("object"!=typeof e||null===e||"[object Array]"===ye.call(e))throw new TypeError($("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===ye.call(t))throw new TypeError($("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(_e.call(e,r)||we.call(e,r)?(n=e.__proto__,e.__proto__=be,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&ve&&ve.call(e,r,t.get),a&&he&&he.call(e,r,t.set),e};var me=ge;function je(){return/^\s*function\s*([^(]*)/i}var Ee=/^\s*function\s*([^(]*)/i;!function(e,r,t){me(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}(je,"REGEXP",Ee);var Se="function"==typeof Object.defineProperty?Object.defineProperty:null;var Oe,ke=Object.defineProperty,xe=Object.prototype,Te=xe.toString,Ae=xe.__defineGetter__,Pe=xe.__defineSetter__,Ve=xe.__lookupGetter__,Fe=xe.__lookupSetter__;Oe=function(){try{return Se({},"x",{}),!0}catch(e){return!1}}()?ke:function(e,r,t){var n,o,i,a;if("object"!=typeof e||null===e||"[object Array]"===Te.call(e))throw new TypeError($("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===Te.call(t))throw new TypeError($("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(Ve.call(e,r)||Fe.call(e,r)?(n=e.__proto__,e.__proto__=xe,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&Ae&&Ae.call(e,r,t.get),a&&Pe&&Pe.call(e,r,t.set),e};var Ce,$e=Oe;Ce=Array.isArray?Array.isArray:function(e){return"[object Array]"===Q(e)};var Ge=Ce;function Ie(e){return null!==e&&"object"==typeof e}var Be=function(e){if("function"!=typeof e)throw new TypeError($("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!Ge(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(Ie);function Re(e){var r,t,n,o;if(("Object"===(t=Q(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=Ee.exec(n.toString()))return r[1]}return Ie(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}!function(e,r,t){$e(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}(Ie,"isObjectLikeArray",Be);var Le="function"==typeof r||"object"==typeof fe||"function"==typeof se?function(e){return Re(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?Re(e).toLowerCase():r};var Ze,We,Me=Object.getPrototypeOf;We=Object.getPrototypeOf,Ze="function"===Le(We)?Me:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===Q(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var Ne=Ze;return function(r){return null==r?null:(r=e(r),Ne(r))}}));
//# sourceMappingURL=index.js.map
