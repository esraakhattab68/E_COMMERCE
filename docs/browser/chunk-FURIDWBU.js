import{a as y}from"./chunk-ISBZADDV.js";import"./chunk-DWQM2S5T.js";import{j as P,w as I}from"./chunk-4RJNZPSR.js";import{Ib as c,Na as h,Pb as v,Ra as r,Rb as b,X as d,aa as u,da as p,ea as m,ib as l,ob as _,pb as x,qb as s,rb as o,sb as C,ua as f}from"./chunk-TQSYPXNJ.js";var g=class{constructor(){this.change=new f,this.instances={},this.DEFAULT_ID="DEFAULT_PAGINATION_ID"}defaultId(){return this.DEFAULT_ID}register(e){return e.id==null&&(e.id=this.DEFAULT_ID),this.instances[e.id]?this.updateInstance(e):(this.instances[e.id]=e,!0)}updateInstance(e){let t=!1;for(let i in this.instances[e.id])e[i]!==this.instances[e.id][i]&&(this.instances[e.id][i]=e[i],t=!0);return t}getCurrentPage(e){return this.instances[e]?this.instances[e].currentPage:1}setCurrentPage(e,t){if(this.instances[e]){let i=this.instances[e],a=Math.ceil(i.totalItems/i.itemsPerPage);t<=a&&1<=t&&(this.instances[e].currentPage=t,this.change.emit(e))}}setTotalItems(e,t){this.instances[e]&&0<=t&&(this.instances[e].totalItems=t,this.change.emit(e))}setItemsPerPage(e,t){this.instances[e]&&(this.instances[e].itemsPerPage=t,this.change.emit(e))}getInstance(e=this.DEFAULT_ID){return this.instances[e]?this.clone(this.instances[e]):{}}clone(e){var t={};for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);return t}},le=Number.MAX_SAFE_INTEGER;var L=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=m({type:n}),n.\u0275inj=d({providers:[g],imports:[[P]]}),n})();var S=(n,e)=>e._id,T=n=>["/branddetails",n];function E(n,e){if(n&1&&(s(0,"div",3)(1,"div",4)(2,"header",5),C(3,"img",6),o()()()),n&2){let t=e.$implicit;r(2),l("routerLink",b(3,T,t._id)),r(),l("src",t.image,h)("alt",t.name)}}var _e=(()=>{let e=class e{constructor(){this._BrandsService=u(y),this.brands=[]}ngOnInit(){this._BrandsService.getAllBrands().subscribe({next:i=>{this.brands=i.data,console.log("brands",i)}})}};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=p({type:e,selectors:[["app-brands"]],standalone:!0,features:[v],decls:6,vars:0,consts:[[1,"py-4"],[1,"text-center","text-main",2,"font-family","'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"],[1,"row","g-4","justify-content-center","m-0"],[1,"col-sm-6","col-md-4","col-lg-3","col-xl-2"],[1,"product","h-100"],["role","button",3,"routerLink"],[1,"w-100",3,"src","alt"]],template:function(a,k){a&1&&(s(0,"section",0)(1,"h2",1),c(2,"All Brands"),o(),s(3,"div",2),_(4,E,4,5,"div",3,S),o()()),a&2&&(r(4),x(k.brands))},dependencies:[L,I]});let n=e;return n})();export{_e as BrandsComponent};
