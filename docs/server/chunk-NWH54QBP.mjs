import './polyfills.server.mjs';
import{a as N}from"./chunk-ZRKVCTJN.mjs";import{a as A,b as _,c as R,d as k,f as q,g as D,h as V,i as G,k as I}from"./chunk-QKRQYRL7.mjs";import"./chunk-WVUI6REW.mjs";import{H as T,I as b,f as y}from"./chunk-LOHHBPFK.mjs";import{Hb as a,Ib as L,Ob as x,Qa as r,Rb as S,Y as h,aa as E,fb as p,hb as v,lb as u,pb as o,qb as i,rb as C,yb as w,zb as F}from"./chunk-SFVOZAT5.mjs";import"./chunk-VVCT4QZE.mjs";var B=(e,n)=>({"is-valid":e,"is-invalid":n});function M(e,n){e&1&&(o(0,"p"),a(1,"Email Is Required"),i())}function j(e,n){e&1&&(o(0,"p"),a(1,"Enter Valid Email"),i())}function P(e,n){if(e&1&&(o(0,"div",5),p(1,M,2,0,"p")(2,j,2,0),i()),e&2){let m,l=F();r(),u(1,(m=l.loginForm.get("email"))!=null&&m.getError("required")?1:(m=l.loginForm.get("email"))!=null&&m.getError("email")?2:-1)}}function U(e,n){e&1&&(o(0,"p"),a(1,"password Is Required"),i())}function $(e,n){e&1&&(o(0,"p"),a(1,"Enter Valid password"),i())}function z(e,n){if(e&1&&(o(0,"div",5),p(1,U,2,0,"p")(2,$,2,0),i()),e&2){let m,l=F();r(),u(1,(m=l.loginForm.get("password"))!=null&&m.getError("required")?1:(m=l.loginForm.get("password"))!=null&&m.getError("pattern")?2:-1)}}function H(e,n){e&1&&(o(0,"span"),C(1,"i",12),i())}function J(e,n){if(e&1&&(o(0,"p",11),a(1),i()),e&2){let m=F();r(),L(m.msgError)}}function K(e,n){e&1&&(o(0,"p"),a(1,"success"),i())}var ie=(()=>{let n=class n{constructor(){this._AuthServiceService=h(N),this._FormBuilder=h(G),this._Router=h(T),this.msgSuccess=!1,this.msgError="",this.isLoading=!1,this.loginForm=this._FormBuilder.group({email:[null,[_.required,_.email]],password:[null,[_.required,_.pattern(/^\w{6,}$/)]]})}loginSubmit(){this.loginForm.valid?(this.isLoading=!0,this._AuthServiceService.setloginForm(this.loginForm.value).subscribe({next:l=>{this.isLoading=!1,l.message=="success"&&(this.msgSuccess=!0,setTimeout(()=>{localStorage.setItem("userToken",l.token),this._AuthServiceService.saveUserData,this._Router.navigate(["/home"])}))},error:l=>{this.msgError=l.error.message,this.isLoading=!1}})):(this.loginForm.setErrors({mismatch:!0}),this.loginForm.markAllAsTouched())}};n.\u0275fac=function(f){return new(f||n)},n.\u0275cmp=E({type:n,selectors:[["app-login"]],standalone:!0,features:[x],decls:22,vars:14,consts:[[1,"bg-main-light","shadow","p-2","my-2","rounded-4"],[1,"h2","text-main"],[3,"ngSubmit","formGroup"],["for","email"],["id","email","type","email","formControlName","email",1,"form-control",3,"ngClass"],[1,"w-50","alert","alert-danger"],["for","password"],["id","password","type","password","formControlName","password",1,"form-control",3,"ngClass"],[1,"d-flex","align-items-center","justify-content-end","gap-4"],["routerLink","/forget",1,"link-primary"],["type","submit",1,"btn-main"],[1,"alert","alert-danger","w-50","m-0"],[1,"fas","fa-spin","fa","fa-spinner"]],template:function(f,t){if(f&1&&(o(0,"section",0)(1,"h1",1),a(2,"login Now"),i(),o(3,"form",2),w("ngSubmit",function(){return t.loginSubmit()}),o(4,"div")(5,"label",3),a(6,"email"),i(),C(7,"input",4),p(8,P,3,1,"div",5),i(),o(9,"div")(10,"label",6),a(11,"password"),i(),C(12,"input",7),p(13,z,3,1,"div",5),i(),o(14,"div",8)(15,"a",9),a(16,"ForgetPassword"),i(),o(17,"button",10),a(18,"Login "),p(19,H,2,0,"span"),i()(),p(20,J,2,1,"p",11)(21,K,2,0,"p"),i()()),f&2){let s,g,d,c;r(3),v("formGroup",t.loginForm),r(4),v("ngClass",S(8,B,!((s=t.loginForm.get("email"))!=null&&s.errors)&&((s=t.loginForm.get("email"))==null?null:s.touched),((s=t.loginForm.get("email"))==null?null:s.errors)&&((s=t.loginForm.get("email"))==null?null:s.touched))),r(),u(8,(g=t.loginForm.get("email"))!=null&&g.errors&&((g=t.loginForm.get("email"))!=null&&g.touched||(g=t.loginForm.get("email"))!=null&&g.dirty)?8:-1),r(4),v("ngClass",S(11,B,!((d=t.loginForm.get("password"))!=null&&d.errors)&&((d=t.loginForm.get("password"))==null?null:d.touched),((d=t.loginForm.get("password"))==null?null:d.errors)&&((d=t.loginForm.get("password"))==null?null:d.touched))),r(),u(13,(c=t.loginForm.get("password"))!=null&&c.errors&&((c=t.loginForm.get("password"))!=null&&c.touched||(c=t.loginForm.get("password"))!=null&&c.dirty)?13:-1),r(6),u(19,t.isLoading?19:-1),r(),u(20,t.msgError?20:-1),r(),u(21,t.msgSuccess?21:-1)}},dependencies:[I,q,A,R,k,D,V,y,b]});let e=n;return e})();export{ie as LoginComponent};
