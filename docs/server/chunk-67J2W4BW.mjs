import './polyfills.server.mjs';
import{a as G}from"./chunk-ZRKVCTJN.mjs";import{a as I,b as d,c as B,d as M,f as k,g as $,h as j,i as O,k as z}from"./chunk-QKRQYRL7.mjs";import"./chunk-WVUI6REW.mjs";import{H as D,f as V}from"./chunk-LOHHBPFK.mjs";import{Hb as s,Ib as P,Ob as L,Qa as a,Qb as A,Rb as w,Y as x,aa as N,fb as u,hb as f,lb as m,pb as n,qb as i,rb as h,yb as q,zb as S}from"./chunk-SFVOZAT5.mjs";import"./chunk-VVCT4QZE.mjs";var T=(e,r)=>({"is-valid":e,"is-invalid":r}),H=e=>({"is-valid":e});function J(e,r){e&1&&(n(0,"p",17),s(1,"Name is required"),i())}function K(e,r){e&1&&(n(0,"p",17),s(1,"Name Should be more than or equal 3 chars"),i())}function Q(e,r){e&1&&(n(0,"p",17),s(1,"Name Should be less than or equal 20 chars"),i())}function U(e,r){if(e&1&&(n(0,"div",5),u(1,J,2,0,"p",17)(2,K,2,0)(3,Q,2,0),i()),e&2){let l,o=S();a(),m(1,(l=o.registerForm.get("name"))!=null&&l.getError("required")?1:(l=o.registerForm.get("name"))!=null&&l.getError("minlength")?2:(l=o.registerForm.get("name"))!=null&&l.getError("maxlength")?3:-1)}}function W(e,r){e&1&&(n(0,"p"),s(1,"Email Is Required"),i())}function X(e,r){e&1&&(n(0,"p"),s(1,"Enter Valid Email"),i())}function Y(e,r){if(e&1&&(n(0,"div",8),u(1,W,2,0,"p")(2,X,2,0),i()),e&2){let l,o=S();a(),m(1,(l=o.registerForm.get("email"))!=null&&l.getError("required")?1:(l=o.registerForm.get("email"))!=null&&l.getError("email")?2:-1)}}function Z(e,r){e&1&&(n(0,"p"),s(1,"phone Is Required"),i())}function ee(e,r){e&1&&(n(0,"p"),s(1,"Enter Valid phone"),i())}function te(e,r){if(e&1&&(n(0,"div",8),u(1,Z,2,0,"p")(2,ee,2,0),i()),e&2){let l,o=S();a(),m(1,(l=o.registerForm.get("phone"))!=null&&l.getError("required")?1:(l=o.registerForm.get("phone"))!=null&&l.getError("pattern")?2:-1)}}function ie(e,r){e&1&&(n(0,"p"),s(1,"password Is Required"),i())}function ne(e,r){e&1&&(n(0,"p"),s(1,"Enter Valid password"),i())}function re(e,r){if(e&1&&(n(0,"div",8),u(1,ie,2,0,"p")(2,ne,2,0),i()),e&2){let l,o=S();a(),m(1,(l=o.registerForm.get("password"))!=null&&l.getError("required")?1:(l=o.registerForm.get("password"))!=null&&l.getError("pattern")?2:-1)}}function le(e,r){e&1&&(n(0,"p",15),s(1,"password confirmation is incorrect"),i())}function oe(e,r){e&1&&(n(0,"span"),h(1,"i",18),i())}function ae(e,r){if(e&1&&(n(0,"p",15),s(1),i()),e&2){let l=S();a(),P(l.msgError)}}function se(e,r){e&1&&(n(0,"p"),s(1,"success"),i())}var he=(()=>{let r=class r{constructor(){this._AuthServiceService=x(G),this._FormBuilder=x(O),this._Router=x(D),this.msgSuccess=!1,this.msgError="",this.isLoading=!1,this.registerForm=this._FormBuilder.group({name:[null,[d.required,d.minLength(3),d.maxLength(20)]],email:[null,[d.required,d.email]],password:[null,[d.required,d.pattern(/^\w{6,}$/)]],rePassword:[null],phone:[null,[d.required,d.pattern(/^01[0125][0-9]{8}$/)]]},this.confirmPassword)}registerSubmit(){this.registerForm.valid?(this.isLoading=!0,this.registerSub=this._AuthServiceService.setRegisterForm(this.registerForm.value).subscribe({next:o=>{this.isLoading=!1,o.message=="success"&&(this.msgSuccess=!0,setTimeout(()=>{this._Router.navigate(["/login"])}))},error:o=>{this.msgError=o.error.message,this.isLoading=!1}})):(this.registerForm.setErrors({mismatch:!0}),this.registerForm.markAllAsTouched())}ngOnDestroy(){this.registerSub?.unsubscribe}confirmPassword(o){return o.get("password")?.value===o.get("rePassword")?.value?null:{mismatch:!0}}};r.\u0275fac=function(R){return new(R||r)},r.\u0275cmp=N({type:r,selectors:[["app-register"]],standalone:!0,features:[L],decls:34,vars:28,consts:[[1,"bg-main-light","shadow","p-2","my-2","rounded-4"],[1,"h2","text-main"],[3,"ngSubmit","formGroup"],["for","name"],["type","text","formControlName","name",1,"form-control",3,"ngClass"],[1,"alert","alert-danger","w-50"],["for","email"],["id","email","type","email","formControlName","email",1,"form-control",3,"ngClass"],[1,"w-50","alert","alert-danger"],["for","phone"],["id","phone","type","tel","formControlName","phone",1,"form-control",3,"ngClass"],["for","password"],["id","password","type","password","formControlName","password",1,"form-control",3,"ngClass"],["for","rePassword"],["id","rePassword","type","password","formControlName","rePassword",1,"form-control",3,"ngClass"],[1,"alert","alert-danger","w-50","m-0"],["type","submit",1,"btn-main","ms-auto","d-block"],[1,"m-0"],[1,"fas","fa-spin","fa","fa-spinner"]],template:function(R,t){if(R&1&&(n(0,"section",0)(1,"h1",1),s(2,"Register Now"),i(),n(3,"form",2),q("ngSubmit",function(){return t.registerSubmit()}),n(4,"div")(5,"label",3),s(6,"name"),i(),h(7,"input",4),u(8,U,4,1,"div",5),i(),n(9,"div")(10,"label",6),s(11,"email"),i(),h(12,"input",7),u(13,Y,3,1,"div",8),i(),n(14,"div")(15,"label",9),s(16,"phone"),i(),h(17,"input",10),u(18,te,3,1,"div",8),i(),n(19,"div")(20,"label",11),s(21,"password"),i(),h(22,"input",12),u(23,re,3,1,"div",8),i(),n(24,"div")(25,"label",13),s(26,"rePassword"),i(),h(27,"input",14),u(28,le,2,0,"p",15),i(),n(29,"button",16),s(30,"Register "),u(31,oe,2,0,"span"),i(),u(32,ae,2,1,"p",15)(33,se,2,0,"p"),i()()),R&2){let p,C,g,F,c,v,_,E,b,y;a(3),f("formGroup",t.registerForm),a(4),f("ngClass",w(14,T,!((p=t.registerForm.get("name"))!=null&&p.errors)&&((p=t.registerForm.get("name"))==null?null:p.touched),((p=t.registerForm.get("name"))==null?null:p.errors)&&((p=t.registerForm.get("name"))==null?null:p.touched))),a(),m(8,(C=t.registerForm.get("name"))!=null&&C.errors&&((C=t.registerForm.get("name"))!=null&&C.touched||(C=t.registerForm.get("name"))!=null&&C.dirty)?8:-1),a(4),f("ngClass",w(17,T,!((g=t.registerForm.get("email"))!=null&&g.errors)&&((g=t.registerForm.get("email"))==null?null:g.touched),((g=t.registerForm.get("email"))==null?null:g.errors)&&((g=t.registerForm.get("email"))==null?null:g.touched))),a(),m(13,(F=t.registerForm.get("email"))!=null&&F.errors&&((F=t.registerForm.get("email"))!=null&&F.touched||(F=t.registerForm.get("email"))!=null&&F.dirty)?13:-1),a(4),f("ngClass",w(20,T,!((c=t.registerForm.get("phone"))!=null&&c.errors)&&((c=t.registerForm.get("phone"))==null?null:c.touched),((c=t.registerForm.get("phone"))==null?null:c.errors)&&((c=t.registerForm.get("phone"))==null?null:c.touched))),a(),m(18,(v=t.registerForm.get("phone"))!=null&&v.errors&&((v=t.registerForm.get("phone"))!=null&&v.touched||(v=t.registerForm.get("phone"))!=null&&v.dirty)?18:-1),a(4),f("ngClass",w(23,T,!((_=t.registerForm.get("password"))!=null&&_.errors)&&((_=t.registerForm.get("password"))==null?null:_.touched),((_=t.registerForm.get("password"))==null?null:_.errors)&&((_=t.registerForm.get("password"))==null?null:_.touched))),a(),m(23,(E=t.registerForm.get("password"))!=null&&E.errors&&((E=t.registerForm.get("password"))!=null&&E.touched||(E=t.registerForm.get("password"))!=null&&E.dirty)?23:-1),a(4),f("ngClass",A(26,H,((b=t.registerForm.get("rePassword"))==null?null:b.errors)&&((b=t.registerForm.get("rePassword"))==null?null:b.touched))),a(),m(28,t.registerForm.getError("mismatch")&&((y=t.registerForm.get("rePassword"))!=null&&y.touched||(y=t.registerForm.get("rePassword"))!=null&&y.dirty)?28:-1),a(3),m(31,t.isLoading?31:-1),a(),m(32,t.msgError?32:-1),a(),m(33,t.msgSuccess?33:-1)}},dependencies:[z,k,I,B,M,$,j,V]});let e=r;return e})();export{he as RegisterComponent};
