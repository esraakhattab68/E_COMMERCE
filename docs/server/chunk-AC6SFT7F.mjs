import './polyfills.server.mjs';
import{a as i}from"./chunk-WVUI6REW.mjs";import{s as a}from"./chunk-LOHHBPFK.mjs";import{S as n,Y as o}from"./chunk-SFVOZAT5.mjs";var b=(()=>{let t=class t{constructor(){this._HttpClient=o(a)}getAllBrands(r=1){return this._HttpClient.get(`${i.baseUrl}/api/v1/brands?page=${r}`)}getSpecificbrand(r){return this._HttpClient.get(`${i.baseUrl}/api/v1/brands/${r}`)}};t.\u0275fac=function(p){return new(p||t)},t.\u0275prov=n({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();export{b as a};
