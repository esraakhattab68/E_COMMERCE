import './polyfills.server.mjs';
import{a as F}from"./chunk-DWM5VDBH.mjs";import{a as v,b as n,c as S,d as b,f as y,g as x,h as C,i as _,k as E}from"./chunk-QKRQYRL7.mjs";import"./chunk-WVUI6REW.mjs";import{E as g}from"./chunk-LOHHBPFK.mjs";import{Hb as o,Ob as h,Qa as c,Y as s,aa as u,hb as p,pb as i,qb as t,rb as m,yb as f}from"./chunk-SFVOZAT5.mjs";import"./chunk-VVCT4QZE.mjs";var R=(()=>{let r=class r{constructor(){this._FormBuilder=s(_),this._ActivatedRoute=s(g),this._OrdersService=s(F),this.cartId="",this.orders=this._FormBuilder.group({details:[null,[n.required]],phone:[null,[n.required,n.pattern(/^01[0125][0-9]{8}$/)]],city:[null,[n.required]]})}orderSubmit(){this._OrdersService.checkOut(this.cartId,this.orders.value).subscribe({next:e=>{console.log(e),e.status==="success"&&window.open(e.session.url,"_self")},error:e=>{console.log(e)}})}ngOnInit(){this._ActivatedRoute.paramMap.subscribe({next:e=>{this.cartId=e.get("id")},error:e=>{console.log(e)}})}};r.\u0275fac=function(l){return new(l||r)},r.\u0275cmp=u({type:r,selectors:[["app-orders"]],standalone:!0,features:[h],decls:18,vars:1,consts:[[1,"my-2","rounded-4","bg-main-light","shadow","p-2","w-75","mx-auto"],[1,"text-center"],[3,"ngSubmit","formGroup"],[1,"my-1"],["for","details"],["formControlName","details","id","details",1,"form-control"],["for","phone"],["formControlName","phone","id","phone","type","tel",1,"form-control"],["for","city"],["formControlName","city","id","city","type","text",1,"form-control"],["type","submit",1,"btn-main"]],template:function(l,d){l&1&&(i(0,"section",0)(1,"h1",1),o(2,"shippingAddress"),t(),i(3,"form",2),f("ngSubmit",function(){return d.orderSubmit()}),i(4,"div",3)(5,"label",4),o(6,"Details"),t(),m(7,"textarea",5),t(),i(8,"div",3)(9,"label",6),o(10,"Phone"),t(),m(11,"input",7),t(),i(12,"div",3)(13,"label",8),o(14,"City"),t(),m(15,"input",9),t(),i(16,"button",10),o(17,"Check Out"),t()()()),l&2&&(c(3),p("formGroup",d.orders))},dependencies:[E,y,v,S,b,x,C]});let a=r;return a})();export{R as OrdersComponent};
