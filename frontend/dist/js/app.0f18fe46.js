(function(){"use strict";var e={7257:function(e,r,t){var n=t(9242),a=t(1020),o=t(3396);const u={id:"nav"};function l(e,r){const t=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",u,[(0,o.Wm)(t,{to:{name:"product-list"}},{default:(0,o.w5)((()=>[(0,o.Uk)(" Home")])),_:1}),(0,o.Wm)(t,{to:{name:"add-product"}},{default:(0,o.w5)((()=>[(0,o.Uk)("Add New Product")])),_:1}),(0,o.Wm)(t,{to:{name:"signup"}},{default:(0,o.w5)((()=>[(0,o.Uk)("Sign Up")])),_:1}),(0,o.Wm)(t,{to:{name:"login"}},{default:(0,o.w5)((()=>[(0,o.Uk)("Login")])),_:1})])}var i=t(89);const s={},d=(0,i.Z)(s,[["render",l]]);var c=d,p={__name:"App",setup(e){return(e,r)=>{const t=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(c),(0,o.Wm)(t)],64)}}};const v=p;var m=v,w=t(2483),_=t(4870),f=t(7139),g=(t(7658),t(4161));const y=(0,a.Q_)("product",(()=>{const e=(0,_.iH)([]),r=async()=>{const r=await g.Z.get("api/products/");e.value=r.data},t=async r=>{const t=await g.Z.post("api/products",r);e.value.push(t.data)},n=async r=>{const t=e.value.findIndex((e=>e._id===r._id));await g.Z.patch(`/api/products/${r._id}`,r),t>-1&&(e.value[t]=r)},a=async r=>{const t=e.value.findIndex((e=>e._id===r));await g.Z["delete"](`/api/products/${r}`),e.value.splice(t,1)};return{products:e,fetchProducts:r,addProduct:t,updateProduct:n,deleteProduct:a}})),h={class:"product-list-container"},$={class:"product-info"};var D={__name:"ProductList",setup(e){const r=y();return(0,o.bv)((async()=>{await r.fetchProducts()})),(e,t)=>{const n=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",h,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)((0,_.SU)(r).products,(e=>((0,o.wg)(),(0,o.iD)("div",{class:"product-container",key:e._id},[(0,o.Wm)(n,{to:{name:"product-detail",params:{id:e._id}}},{default:(0,o.w5)((()=>[(0,o._)("div",{class:"product-background",style:(0,f.j5)({"background-color":e.color||"grey"})},null,4),(0,o._)("div",$,[(0,o._)("span",null,(0,f.zw)(e.title),1),(0,o._)("span",null,"$"+(0,f.zw)(e.price),1)])])),_:2},1032,["to"])])))),128))])}}};const U=(0,i.Z)(D,[["__scopeId","data-v-78d5016a"]]);var b=U,k=t(4219),C=t(5420);const P=e=>((0,o.dD)("data-v-4d79bf71"),e=e(),(0,o.Cn)(),e),S={class:"error-msg"},H=P((()=>(0,o._)("br",null,null,-1))),E=P((()=>(0,o._)("br",null,null,-1))),Z=P((()=>(0,o._)("br",null,null,-1))),Y=P((()=>(0,o._)("br",null,null,-1))),z=P((()=>(0,o._)("br",null,null,-1)));var O={__name:"ProductForm",props:["isEdit"],setup(e){const r=e,t=(0,w.yj)(),a=(0,w.tv)(),u=y();(0,o.bv)((async()=>{if(r.isEdit){const e=await g.Z.get(`/api/products/${t.params.id}`);l.value=e.data}}));const l=(0,_.iH)({description:"",title:"",quantity:0,price:0,color:"#ffffff"}),i={title:{required:C.C1}},s=(0,k.Xw)(i,l);async function d(e){e.preventDefault();const r=await s.value.$validate();r&&(await u.addProduct(l.value),p(),a.push({name:"product-list"}))}async function c(e){e.preventDefault(),await u.updateProduct(l.value),a.push({name:"product-list"})}function p(){l.value.title="",l.value.description="",l.value.quantity=0,l.value.price=0}return(r,t)=>((0,o.wg)(),(0,o.iD)("form",null,[(0,o._)("div",{class:(0,f.C_)({error:(0,_.SU)(s).title.$errors.length})},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)((0,_.SU)(s).title.$errors,(e=>((0,o.wg)(),(0,o.iD)("div",{class:"input-errors",key:e.$uid},[(0,o._)("div",S,(0,f.zw)(e.$message),1)])))),128))],2),(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>l.value.title=e),type:"text",name:"name",placeholder:"Enter Product",class:(0,f.C_)({"input-error":(0,_.SU)(s).title.$error})},null,2),[[n.nr,l.value.title]]),H,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>l.value.description=e),type:"text",name:"description",placeholder:"Enter Description"},null,512),[[n.nr,l.value.description]]),E,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>l.value.color=e),type:"color"},null,512),[[n.nr,l.value.color]]),Z,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t[3]||(t[3]=e=>l.value.quantity=e),type:"number",name:"quantity",placeholder:"Enter Quantity"},null,512),[[n.nr,l.value.quantity]]),Y,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t[4]||(t[4]=e=>l.value.price=e),type:"number",name:"price",placeholder:"Enter Price"},null,512),[[n.nr,l.value.price]]),z,e.isEdit?((0,o.wg)(),(0,o.iD)("button",{key:0,onClick:c},"Edit Product")):((0,o.wg)(),(0,o.iD)("button",{key:1,onClick:d},"Add Product"))]))}};const q=(0,i.Z)(O,[["__scopeId","data-v-4d79bf71"]]);var W=q;const V=(0,o._)("h2",null,"Add New Product",-1);var x={__name:"AddProduct",setup(e){return(e,r)=>((0,o.wg)(),(0,o.iD)(o.HY,null,[V,(0,o.Wm)(W)],64))}};const j=x;var K=j;const A=(0,o._)("h2",null,"Edit Product",-1);var I={__name:"EditProduct",setup(e){return(e,r)=>((0,o.wg)(),(0,o.iD)(o.HY,null,[A,(0,o._)("h2",null,(0,f.zw)(e.$route.params.id),1),(0,o.Wm)(W,{isEdit:!0})],64))}};const L=I;var F=L;const N=(0,o._)("h1",null,"Product Page",-1),X=(0,o._)("button",null,"Edit",-1);var Q={__name:"ProductDetail",props:["id"],setup(e){const r=e,t=y(),n=(0,w.tv)(),a=(0,_.iH)([]);async function u(){await t.deleteProduct(a.value._id),n.push({name:"product-list"})}return(0,o.bv)((async()=>{const e=await g.Z.get(`/api/products/${r.id}`);a.value=e.data})),(r,t)=>{const n=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)(o.HY,null,[N,(0,o._)("div",null,(0,f.zw)(e.id),1),(0,o._)("div",null,(0,f.zw)(a.value.title),1),(0,o._)("div",null,(0,f.zw)(a.value.description),1),(0,o.Wm)(n,{to:{name:"edit-product",params:{id:a.value._id}}},{default:(0,o.w5)((()=>[X])),_:1},8,["to"]),(0,o._)("button",{onClick:u},"Delete")],64)}}};const T=Q;var B=T;function M(e,r){return(0,o.wg)(),(0,o.iD)("h2",null,"404 Page Not Found")}const G={},J=(0,i.Z)(G,[["render",M]]);var R=J;const ee=e=>((0,o.dD)("data-v-267c21f0"),e=e(),(0,o.Cn)(),e),re=ee((()=>(0,o._)("h2",null,"Sign Up",-1))),te={class:"error-msg"},ne={class:"error-msg"},ae={class:"error-msg"};var oe={__name:"SignUp",setup(e){const r=(0,w.tv)(),t=(0,_.iH)({username:"",email:"",password:""}),a={username:{required:C.C1},email:{required:C.C1,email:C.Do},password:{required:C.C1}},u=(0,k.Xw)(a,t);async function l(e){e.preventDefault();const n=await u.value.$validate();n&&(await g.Z.post("/api/users/register",t.value),i(),r.push({name:"product-list"}))}function i(){t.value.username="",t.value.email="",t.value.password=""}return(e,r)=>((0,o.wg)(),(0,o.iD)(o.HY,null,[re,(0,o._)("div",{class:(0,f.C_)({error:(0,_.SU)(u).username.$errors.length})},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)((0,_.SU)(u).username.$errors,(e=>((0,o.wg)(),(0,o.iD)("div",{class:"input-errors",key:e.$uid},[(0,o._)("div",te,(0,f.zw)(e.$message),1)])))),128))],2),(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":r[0]||(r[0]=e=>t.value.username=e),type:"text",name:"username",placeholder:"Enter username",class:(0,f.C_)({"input-error":(0,_.SU)(u).username.$error})},null,2),[[n.nr,t.value.username]]),(0,o._)("div",{class:(0,f.C_)({error:(0,_.SU)(u).email.$errors.length})},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)((0,_.SU)(u).email.$errors,(e=>((0,o.wg)(),(0,o.iD)("div",{class:"input-errors",key:e.$uid},[(0,o._)("div",ne,(0,f.zw)(e.$message),1)])))),128))],2),(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":r[1]||(r[1]=e=>t.value.email=e),type:"email",name:"email",placeholder:"Enter email",class:(0,f.C_)({"input-error":(0,_.SU)(u).email.$error})},null,2),[[n.nr,t.value.email]]),(0,o._)("div",{class:(0,f.C_)({error:(0,_.SU)(u).password.$errors.length})},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)((0,_.SU)(u).password.$errors,(e=>((0,o.wg)(),(0,o.iD)("div",{class:"input-errors",key:e.$uid},[(0,o._)("div",ae,(0,f.zw)(e.$message),1)])))),128))],2),(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":r[2]||(r[2]=e=>t.value.password=e),type:"password",name:"password",placeholder:"Enter password",class:(0,f.C_)({"input-error":(0,_.SU)(u).password.$error})},null,2),[[n.nr,t.value.password]]),(0,o._)("button",{onClick:l},"Sign Up")],64))}};const ue=(0,i.Z)(oe,[["__scopeId","data-v-267c21f0"]]);var le=ue;const ie=e=>((0,o.dD)("data-v-fdae0f44"),e=e(),(0,o.Cn)(),e),se=ie((()=>(0,o._)("h2",null,"Login",-1))),de={class:"error-msg"},ce={class:"error-msg"};var pe={__name:"LoginUser",setup(e){const r=(0,w.tv)(),t=(0,_.iH)({email:"",password:""}),a={email:{required:C.C1,email:C.Do},password:{required:C.C1}},u=(0,k.Xw)(a,t);async function l(e){e.preventDefault();const n=await u.value.$validate();n&&(await g.Z.post("/api/users/login",t.value),i(),r.push({name:"product-list"}))}function i(){t.value.email="",t.value.password=""}return(e,r)=>((0,o.wg)(),(0,o.iD)(o.HY,null,[se,(0,o._)("div",{class:(0,f.C_)({error:(0,_.SU)(u).email.$errors.length})},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)((0,_.SU)(u).email.$errors,(e=>((0,o.wg)(),(0,o.iD)("div",{class:"input-errors",key:e.$uid},[(0,o._)("div",de,(0,f.zw)(e.$message),1)])))),128))],2),(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":r[0]||(r[0]=e=>t.value.email=e),type:"email",name:"email",placeholder:"Enter email",class:(0,f.C_)({"input-error":(0,_.SU)(u).email.$error})},null,2),[[n.nr,t.value.email]]),(0,o._)("div",{class:(0,f.C_)({error:(0,_.SU)(u).password.$errors.length})},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)((0,_.SU)(u).password.$errors,(e=>((0,o.wg)(),(0,o.iD)("div",{class:"input-errors",key:e.$uid},[(0,o._)("div",ce,(0,f.zw)(e.$message),1)])))),128))],2),(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":r[1]||(r[1]=e=>t.value.password=e),type:"password",name:"password",placeholder:"Enter password",class:(0,f.C_)({"input-error":(0,_.SU)(u).password.$error})},null,2),[[n.nr,t.value.password]]),(0,o._)("button",{onClick:l},"Login")],64))}};const ve=(0,i.Z)(pe,[["__scopeId","data-v-fdae0f44"]]);var me=ve;const we=(0,w.p7)({history:(0,w.PO)("/"),routes:[{path:"/",name:"product-list",component:b},{path:"/add-product",name:"add-product",component:K},{path:"/edit-product/:id",name:"edit-product",component:F},{path:"/product/:id",name:"product-detail",component:B,props:!0},{path:"/home",redirect:"/"},{path:"/:catchAll(.*)",name:"not-found",component:R},{path:"/signup",name:"signup",component:le},{path:"/login",name:"login",component:me}]});var _e=we;const fe=(0,a.WB)(),ge=(0,n.ri)(m);ge.use(fe),ge.use(_e),ge.mount("#app")}},r={};function t(n){var a=r[n];if(void 0!==a)return a.exports;var o=r[n]={exports:{}};return e[n](o,o.exports,t),o.exports}t.m=e,function(){var e=[];t.O=function(r,n,a,o){if(!n){var u=1/0;for(d=0;d<e.length;d++){n=e[d][0],a=e[d][1],o=e[d][2];for(var l=!0,i=0;i<n.length;i++)(!1&o||u>=o)&&Object.keys(t.O).every((function(e){return t.O[e](n[i])}))?n.splice(i--,1):(l=!1,o<u&&(u=o));if(l){e.splice(d--,1);var s=a();void 0!==s&&(r=s)}}return r}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[n,a,o]}}(),function(){t.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(r,{a:r}),r}}(),function(){t.d=function(e,r){for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)}}(),function(){var e={143:0};t.O.j=function(r){return 0===e[r]};var r=function(r,n){var a,o,u=n[0],l=n[1],i=n[2],s=0;if(u.some((function(r){return 0!==e[r]}))){for(a in l)t.o(l,a)&&(t.m[a]=l[a]);if(i)var d=i(t)}for(r&&r(n);s<u.length;s++)o=u[s],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(d)},n=self["webpackChunkstorefrontclient"]=self["webpackChunkstorefrontclient"]||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))}();var n=t.O(void 0,[998],(function(){return t(7257)}));n=t.O(n)})();
//# sourceMappingURL=app.0f18fe46.js.map