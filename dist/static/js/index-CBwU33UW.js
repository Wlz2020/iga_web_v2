const __vite__fileDeps=["static/js/index-DPKk95nr.js","static/js/file_resource_ip-CqpJS14O.js","static/js/@vue-BBQRpdja.js","static/js/view-ui-plus-CrRxXv_S.js","static/js/vue-BKTCAqZv.js","static/css/view-ui-plus-Bo4RdC2F.css","static/js/ismobilejs-CHLuctl-.js","static/js/pinia-Bq8jJuVT.js","static/js/pinia-plugin-persistedstate-RV7uh3T-.js","static/js/mitt-DJ65BbbF.js","static/js/vue-router-DqCXtq_T.js","static/css/index-bx6BcPei.css","static/css/animate-B-gXXBrj.css","static/js/index-B_kRh3Ch.js","static/js/swiper-BrhU_mWG.js","static/css/swiper-DMjVsepR.css","static/js/go-home-VOEFhhJL.js","static/css/index-CZZh-g0O.css","static/js/index-CJHtiFL6.js","static/css/index-cgspKwCk.css","static/js/index-BDamLvcj.js","static/css/index-DJ-ANdqw.css","static/js/index-BdEeSUSt.js","static/js/StudentWorksDetail-BmsqqMHY.js","static/css/StudentWorksDetail-CHbmNN-M.css","static/css/index-DruY970k.css","static/js/index-BrKpGELz.js","static/css/index-DQlpqj8i.css","static/js/index-CaKndJLr.js","static/css/index-CrfczgnM.css","static/js/index-4Nnz12t8.js","static/css/index-jeRofNH-.css","static/js/index-du2wRIUu.js","static/js/AddressView-tH_nNsB6.js","static/css/AddressView-DGCJ1rmH.css","static/css/index-DV-1K9-j.css","static/js/index-FJuCOHDW.js","static/css/index-DQ0bACoL.css","static/js/index-Chwrp8kT.js","static/css/index-CNTQrPfo.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
/* empty css                    */import{V as j}from"./view-ui-plus-CrRxXv_S.js";import{i as q}from"./ismobilejs-CHLuctl-.js";import{r as I,aU as P,aK as d,Y as A,a5 as p,Z as n,bd as h,k as N,F as k,aS as b,b6 as R,az as H,X as S,aN as D,aL as B,a3 as $,aj as ee,W as T,U as te}from"./@vue-BBQRpdja.js";import{d as F,c as oe}from"./pinia-Bq8jJuVT.js";import{s as ne}from"./pinia-plugin-persistedstate-RV7uh3T-.js";import{m as se}from"./mitt-DJ65BbbF.js";import{c as ae,a as re}from"./vue-router-DqCXtq_T.js";import"./vue-BKTCAqZv.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const e of o)if(e.type==="childList")for(const c of e.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function a(o){const e={};return o.integrity&&(e.integrity=o.integrity),o.referrerPolicy&&(e.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?e.credentials="include":o.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(o){if(o.ep)return;o.ep=!0;const e=a(o);fetch(o.href,e)}})();const G=()=>{const t=navigator.userAgent||navigator.vendor||window.opera,s=q(t).any;return console.log(s?"是移动设备或平板":"是桌面设备"),s};window.addEventListener("resize",()=>G());window.addEventListener("pageshow",function(t){t.persisted&&G()});const ie=G();(function(s,a){var i=a.documentElement,o=s.devicePixelRatio||1;function e(){var r=null;ie?r=i.clientWidth/600:r=i.clientWidth/1920,i.style.fontSize=r+"px"}if(e(),s.addEventListener("resize",e),s.addEventListener("pageshow",function(r){r.persisted&&e()}),o>=2){var c=a.createElement("body"),l=a.createElement("div");l.style.border="5px solid transparent",c.appendChild(l),i.appendChild(c),l.offsetHeight===1&&i.classList.add("hairlines"),i.removeChild(c)}})(window,document);const Y=se(),ce=F("menuStore",()=>{const t=I(!1),s=I(!1);function a(o){t.value=o}function i(o){s.value=o}return{menuShowIconStatus:t,menuOpenStatus:s,changeMenuShowIconStatus:a,changeMenuOpenStatus:i}},{persist:{storage:sessionStorage}}),C=(t,s)=>{const a=t.__vccOpts||t;for(const[i,o]of s)a[i]=o;return a},le={},ue={class:"icon-box"};function de(t,s){const a=P("Icon");return d(),A("div",ue,[p(a,{type:"ios-add",class:"icon"})])}const g=C(le,[["render",de],["__scopeId","data-v-b3811b52"]]),z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA/SURBVHgB7c9RDYAwEAXBB8E3VnB6tAqa9LM3k6yATQAAAAAAANh0VdWbRuZwpZE7zRg+3TP6AgAAAAAAAGs/QssIJUwWz7UAAAAASUVORK5CYII=",Ae={class:"remove-icon"},me=["src"],ve={__name:"IconRemove",setup(t){return(s,a)=>(d(),A("div",Ae,[n("img",{src:h(z),alt:"",srcset:""},null,8,me)]))}},pe=C(ve,[["__scopeId","data-v-20987988"]]),fe={class:"icon-box"},_e=["src"],he={__name:"IconClose",setup(t){return(s,a)=>(d(),A("div",fe,[n("img",{src:h(z),alt:"",srcset:""},null,8,_e)]))}},ge=C(he,[["__scopeId","data-v-af6757cc"]]),u=Object.freeze({Home:"Home",About:"About",AboutUs:"AboutUs",OurTeam:"OurTeam",ContachUs:"ContachUs",Works:"Works",StudentWorks:"StudentWorks",StudentWorksDetail:"StudentWorksDetail",Offers:"Offers",OurOffers:"OurOffers",School:"School",OurSchool:"OurSchool",UsSchool:"UsSchool",UkSchool:"UkSchool",OtherSchool:"OtherSchool",Service:"Service",OurService:"OurService"});function Q(t,s,a,i){t.push({name:s,query:a,params:i})}const Ee="data:image/png;base64,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",K="/static/png/iga_stu-DxbB-7ZU.png";function Oe(t){return t.toString().padStart(5,"0")}function x(t,s,a,i){const o=parseInt(t),e=parseInt(s),c=Math.ceil(a/1e3*60),l=Math.ceil((e-o)/c);var r=o,E=0,v;function w(){v=setInterval(function(){E++,r+=l,r>=e&&(clearInterval(v),r=e),typeof i=="function"&&i(Oe(r)),E>=c&&clearInterval(v)},1e3/60)}return w(),{restartAnimation:function(){clearInterval(v),r=o,E=0,w()}}}const X=t=>(D("data-v-b5da7c25"),t=t(),B(),t),Se={class:"p-relative"},Ie={class:"top"},we={class:"box1"},Ce={class:"img-icon-wrap"},ke=["src"],be=X(()=>n("div",{class:"box2 samall_lcd_sign_font"},"OFFERS",-1)),Re=X(()=>n("div",{class:"box3 samall_lcd_sign_font"},"WORLDWIOE",-1)),Ue={class:"bottom"},Te={class:"area-box"},Me={class:"name samall_lcd_sign_font"},We={class:"num seven_Segment_font"},Ve={key:0,class:"en_font_bold mask-layer"},ye={__name:"OfferPreview",setup(t){const s={all:"700",arr:[{name:"U.S.",num:"00400"},{name:"U.K.",num:"00200"},{name:"OTHERS",num:"00090"}]},a=I({all:"0",arr:[{name:"U.S.",num:"0"},{name:"U.K.",num:"0"},{name:"OTHERS",num:"0"}]});function i(e=2e3){const c=[],l=x("0",s.all,e,r=>{a.value.all=r});return c.push(l),s.arr.forEach((r,E)=>{const v=x("0",r.num,e,w=>{a.value.arr[E].num=w});c.push(v)}),{instances:c,clearAllInstances(){c.forEach(r=>{r.stopAnimation()})}}}const o=I(!1);return N(()=>{i(2e3),Y.on("bus-offers-slide-active-index",e=>{e===0&&i(2e3)})}),(e,c)=>(d(),A("div",Se,[n("div",{class:H([{filter:o.value},"offer-preview-view"]),onMouseover:c[0]||(c[0]=(...l)=>e.onMouseover&&e.onMouseover(...l)),onMouseout:c[1]||(c[1]=(...l)=>e.onMouseout&&e.onMouseout(...l))},[n("div",Ie,[n("div",we,[n("div",Ce,[n("img",{src:h(K),alt:""},null,8,ke)])]),be,Re]),n("div",Ue,[n("div",null,[(d(!0),A(k,null,b(String(a.value.all).split(""),(l,r)=>(d(),A("div",{class:"all seven_Segment_font",key:r},[n("div",null,R(l),1)]))),128))]),n("div",Te,[(d(!0),A(k,null,b(a.value.arr,(l,r)=>(d(),A("div",{key:r,class:"area-box-item"},[n("div",Me,R(l.name),1),n("div",We,R(l.num)+"+",1)]))),128))])])],34),o.value?(d(),A("div",Ve,"VIEW MORES")):S("",!0)]))}},He=C(ye,[["__scopeId","data-v-b5da7c25"]]),W=t=>(D("data-v-e636547a"),t=t(),B(),t),De={class:"p-relative school-map"},Be=$('<div class="bar" data-v-e636547a></div><div class="bar" data-v-e636547a></div><div class="bar" data-v-e636547a></div><div class="bar" data-v-e636547a></div><div class="cricle" data-v-e636547a></div><div class="line1" data-v-e636547a></div><div class="line2" data-v-e636547a></div><div class="dot" data-v-e636547a></div><div class="studio-dot" data-v-e636547a></div>',9),Ge={class:"img-container"},Qe=["src"],xe=W(()=>n("div",{class:"en_font_bold direction ani-fadeOutInOut n-direction"},"N",-1)),Le=W(()=>n("div",{class:"en_font_bold direction ani-fadeOutInOut s-direction"},"S",-1)),Pe=W(()=>n("div",{class:"en_font_bold direction ani-fadeOutInOut w-direction"},"W",-1)),Ne=W(()=>n("div",{class:"en_font_bold direction ani-fadeOutInOut e-direction"},"E",-1)),Fe={__name:"SchoolMap",setup(t){return(s,a)=>(d(),A("div",De,[Be,n("div",Ge,[n("img",{src:h(K),alt:"",srcset:""},null,8,Qe)]),xe,Le,Pe,Ne]))}},Ye=C(Fe,[["__scopeId","data-v-e636547a"]]),ze="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAALCAYAAADiBKTLAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABSSURBVHgB7dWhDQAgDETRC8HDCGwKm7ESG5Q2oEhQIE70mVb+pKIAEREpYKaBWZYGZhpYPfSnMzTq0sHLYkcAr7FnAiM78z53BSMPfGXf5hY4ASy+YySr1TCrAAAAAElFTkSuQmCC",Ke=t=>(D("data-v-15902735"),t=t(),B(),t),Xe={class:"service-preview-view en_font_bold"},Je={class:"item"},Ze=Ke(()=>n("div",{class:"name"},"SERVICE   LIST",-1)),je={key:0,class:"more ani-fadeIn-fast"},qe={key:0,class:"icon ani-fadeIn-fast"},$e=["src"],et={__name:"ServicePreview",setup(t){const s=I(!1);function a(i){s.value=!!i}return(i,o)=>(d(),A("div",Xe,[n("div",{class:"list",onMouseover:o[0]||(o[0]=e=>a(1)),onMouseleave:o[1]||(o[1]=e=>a(0))},[n("div",Je,[Ze,s.value?(d(),A("div",je,"EXPLORE   MORE")):S("",!0)]),(d(),A(k,null,b(5,e=>n("div",{class:"item item-icon",key:e},[s.value?(d(),A("div",qe,[n("img",{src:h(ze),alt:""},null,8,$e)])):S("",!0)])),64))],32)]))}},tt=C(et,[["__scopeId","data-v-15902735"]]),ot=F("backHomeFlagStore",()=>{const t=I(!1);function s(a){t.value=a}return{isBackHomeFlagStatus:t,changeBackHomeFlagStatus:s}},{}),nt=["src"],st={class:"menu-icon-wrap"},at={key:0,class:"content-box-wrap"},rt={class:"content-box"},it={class:"menu-list"},ct={class:"top-wrap"},lt={class:"menu-contain"},ut=["onMouseover","onClick"],dt={class:"bottom-wrap"},At={class:"menu-contain"},mt=["onMouseover"],vt={class:"menu-details"},pt={class:"item-box"},ft=["onClick"],_t={__name:"MenuView",setup(t){const s=ce(),a=ot(),i=I(!1);function o(O){l.value.classList.toggle("ani-fadeIn-fast",O),i.value=O,s.changeMenuOpenStatus(O),Y.emit("bus-show-menu",O)}const e=[{name:"ABOUT",items:[{name:"ABOUT US",routerName:u.AboutUs},{name:"OUR TEAM",routerName:u.OurTeam},{name:"CONTACT US",routerName:u.ContachUs}]},{name:"SHOWCASE",items:[{name:"STUDENTS' WORKS",routerName:u.StudentWorks}]},{name:"OUR OFFERS"}],c=[{name:"OUR SERVICE"},{name:"SCHOOLS"}],l=I(null),r=I(e[0]);function E(){r.value=e[0]}function v(O){r.value=O}const w=ee(),{$router:M}=w.proxy;function U(O){o(!1),Q(M,O)}function Z(){a.changeBackHomeFlagStatus(!0),Q(M,u.Home)}return N(()=>{E()}),(O,f)=>h(s).menuShowIconStatus?(d(),A("div",{key:0,class:"menu-view en_font_bold",ref_key:"menuViewRef",ref:l},[n("div",{class:"logo-wrap",onClick:Z},[n("img",{src:h(Ee)},null,8,nt)]),n("div",st,[i.value?(d(),T(pe,{key:1,class:"menu-remove-content-wrap",onClick:f[1]||(f[1]=m=>o(!1))})):(d(),T(g,{key:0,class:"menu-add-content-wrap",onClick:f[0]||(f[0]=m=>o(!0))}))]),i.value?(d(),A("div",at,[n("div",rt,[n("div",it,[n("div",ct,[p(g),p(g),p(g),p(g),n("div",lt,[(d(),A(k,null,b(e,m=>n("div",{class:H(["item",{active:m.name===r.value.name}]),onMouseover:y=>v(m),onClick:y=>m.name==="OUR OFFERS"&&U(h(u).OurOffers),key:m.name}," ["+R(m.name)+"] ",43,ut)),64))])]),n("div",dt,[p(g),p(g),n("div",At,[(d(),A(k,null,b(c,m=>n("div",{class:H(["item",{active:m.name===r.value.name}]),onMouseover:y=>v(m),key:m.name}," ["+R(m.name)+"] ",43,mt)),64))])])]),n("div",vt,[p(ge,{onClick:f[2]||(f[2]=m=>o(!1))}),p(g),p(g),p(g),n("div",pt,[["ABOUT","SHOWCASE"].includes(r.value.name)?(d(!0),A(k,{key:0},b(r.value.items,m=>(d(),A("div",{class:"item ani-fadeIn-fast",key:m.name,onClick:y=>U(m.routerName)}," ["+R(m.name)+"] ",9,ft))),128)):S("",!0),["OUR OFFERS"].includes(r.value.name)?(d(),T(He,{key:1,onClick:f[3]||(f[3]=m=>U(h(u).OurOffers)),class:"offer-preview-wrap ani-fadeIn-fast"})):S("",!0),["OUR SERVICE"].includes(r.value.name)?(d(),T(tt,{key:2,onClick:f[4]||(f[4]=m=>U(h(u).OurService)),class:"ani-fadeIn-fast"})):S("",!0),["SCHOOLS"].includes(r.value.name)?(d(),T(Ye,{key:3,onClick:f[5]||(f[5]=m=>U(h(u).OurSchool)),class:"school-map-wrap ani-fadeIn-fast"})):S("",!0)])])])])):S("",!0)],512)):S("",!0)}},ht=C(_t,[["__scopeId","data-v-33100ecc"]]),gt={class:"page-layout-view mainBgColor"},Et={__name:"App",setup(t){return(s,a)=>{const i=P("RouterView");return d(),A("div",gt,[p(i),p(ht)])}}},Ot=C(Et,[["__scopeId","data-v-79a2d24d"]]),St="modulepreload",It=function(t){return"/"+t},L={},_=function(s,a,i){let o=Promise.resolve();if(a&&a.length>0){document.getElementsByTagName("link");const e=document.querySelector("meta[property=csp-nonce]"),c=(e==null?void 0:e.nonce)||(e==null?void 0:e.getAttribute("nonce"));o=Promise.all(a.map(l=>{if(l=It(l),l in L)return;L[l]=!0;const r=l.endsWith(".css"),E=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${E}`))return;const v=document.createElement("link");if(v.rel=r?"stylesheet":St,r||(v.as="script",v.crossOrigin=""),v.href=l,c&&v.setAttribute("nonce",c),document.head.appendChild(v),r)return new Promise((w,M)=>{v.addEventListener("load",w),v.addEventListener("error",()=>M(new Error(`Unable to preload CSS for ${l}`)))})}))}return o.then(()=>s()).catch(e=>{const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=e,window.dispatchEvent(c),!c.defaultPrevented)throw e})},wt=[{path:"/",children:[{name:u.Home,path:"",component:()=>_(()=>import("./index-DPKk95nr.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]))},{path:"/about",name:u.About,children:[{path:"/about-us",name:u.AboutUs,component:()=>_(()=>import("./index-B_kRh3Ch.js"),__vite__mapDeps([13,14,2,15,16,3,4,5,6,7,8,9,10,17,12]))},{path:"/our-team",name:u.OurTeam,component:()=>_(()=>import("./index-CJHtiFL6.js"),__vite__mapDeps([18,14,2,15,16,1,3,4,5,6,7,8,9,10,19,12]))},{path:"/our-team",name:u.ContachUs,component:()=>_(()=>import("./index-BDamLvcj.js"),__vite__mapDeps([20,16,2,3,4,5,6,7,8,9,10,21,12]))}]},{path:"/works",name:u.Works,children:[{path:"/student-works",name:u.StudentWorks,component:()=>_(()=>import("./index-BdEeSUSt.js"),__vite__mapDeps([22,14,2,15,16,23,1,24,3,4,5,6,7,8,9,10,25,12]))},{path:"/student-works-detail",name:u.StudentWorksDetail,component:()=>_(()=>import("./StudentWorksDetail-BmsqqMHY.js").then(t=>t.a),__vite__mapDeps([23,14,2,15,1,24]))}]},{path:"/offers",name:u.Offers,children:[{path:"/our-offers",name:u.OurOffers,component:()=>_(()=>import("./index-BrKpGELz.js"),__vite__mapDeps([26,14,2,15,16,3,4,5,6,7,8,9,10,27,12]))}]},{path:"/service",name:u.Service,children:[{path:"/our-service",name:u.OurService,component:()=>_(()=>import("./index-CaKndJLr.js"),__vite__mapDeps([28,16,2,3,4,5,6,7,8,9,10,29,12]))}]},{path:"/school",name:u.School,children:[{path:"/our-school",name:u.OurSchool,component:()=>_(()=>import("./index-4Nnz12t8.js"),__vite__mapDeps([30,2,16,3,4,5,6,7,8,9,10,31,12]))},{path:"/us-school",name:u.UsSchool,component:()=>_(()=>import("./index-du2wRIUu.js"),__vite__mapDeps([32,33,2,34,1,3,4,5,6,7,8,9,10,35,12]))},{path:"/uk-school",name:u.UkSchool,component:()=>_(()=>import("./index-FJuCOHDW.js"),__vite__mapDeps([36,33,2,34,1,3,4,5,6,7,8,9,10,37,12]))},{path:"/other-school",name:u.OtherSchool,component:()=>_(()=>import("./index-Chwrp8kT.js"),__vite__mapDeps([38,33,2,34,1,3,4,5,6,7,8,9,10,39,12]))}]}]}],Ct=ae({history:re("/"),routes:wt}),J=oe();J.use(ne);const V=te(Ot);V.use(J);V.use(Ct);V.use(j);V.mount("#app");export{ge as I,He as O,u as R,C as _,ot as a,ze as b,K as c,Y as e,x as s,Q as t,ce as u};