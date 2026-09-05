"use strict";var e=function(r,t){return function(){try{return t||r((t={exports:{}}).exports,t),t.exports}catch(q){throw (t=0, q)}};};var u=e(function(w,i){
var P=Object.getPrototypeOf;i.exports=P
});var s=e(function(z,n){
function O(r){return r.__proto__}n.exports=O
});var f=e(function(A,p){
var y=require('@stdlib/utils-native-class/dist'),c=require('@stdlib/object-ctor/dist'),x=s();function _(r){var t=x(r);return t||t===null?t:y(r.constructor)==="[object Function]"?r.constructor.prototype:r instanceof c?c.prototype:null}p.exports=_
});var l=e(function(B,a){
var b=require('@stdlib/assert-is-function/dist'),j=u(),F=f(),o;b(Object.getPrototypeOf)?o=j:o=F;a.exports=o
});var g=e(function(D,v){
var d=require('@stdlib/object-ctor/dist'),m=l();function C(r){return r==null?null:(r=d(r),m(r))}v.exports=C
});var h=g();module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
