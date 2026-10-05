"use strict";var s=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var n=s(function(g,a){
var e=require('@stdlib/ndarray-dtypes/dist'),u=require('@stdlib/stats-base-ndarray-nanmin/dist'),v=require('@stdlib/stats-base-ndarray-dnanmin/dist'),o=require('@stdlib/stats-base-ndarray-snanmin/dist'),c=require('@stdlib/ndarray-base-unary-reduce-strided1d-dispatch-factory/dist'),p=e("real_and_generic"),d=e("real_and_generic"),l={output:"same",casting:"none"},m={types:["float64","float32"],fcns:[v,o],default:u},q=c(m,[p],d,l);a.exports=q
});var f=n();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
