import{A as f}from"./AddressView-CDubw9-C.js";import{_ as I,e as g}from"./index-BDNQleSl.js";import{r as v,k as S,aK as c,Y as n,Z as o,a5 as E,F as T,aS as R,bd as A,b6 as i,az as l,X as N,aN as L,aL as M}from"./@vue-BBQRpdja.js";/* empty css                    */import"./view-ui-plus-CfVxQ_if.js";import"./vue-0wBdmfjE.js";import"./ismobilejs-CHLuctl-.js";import"./pinia-Bq8jJuVT.js";import"./pinia-plugin-persistedstate-RV7uh3T-.js";import"./mitt-DJ65BbbF.js";import"./vue-router-DqCXtq_T.js";const d={AALTO_UNIVERSITY:"AALTO UNIVERSITY",SHERIDAN_COLLEGE:"SHERIDAN COLLEGE",RMIT:"RMIT"},h=[{school:d.AALTO_UNIVERSITY,img:"https://file.igagame.com/img/school/school-Aalto.PNG",name1:"[阿尔托大学]",name2:"AALTO UNIVERSITY",desc:"阿尔托大学（Aalto University）是一所古老而创新力强的北欧著名高等学府，主要位于芬兰，其由在各自领域内顶级的三所大学——赫尔辛基理工大学、赫尔辛基经济学院和赫尔辛基艺术设计大学合并而成。该校为北欧五校联盟成员之一，是享有盛誉的多学科综合性大学。"},{school:d.SHERIDAN_COLLEGE,img:"https://file.igagame.com/img/school/school-Sheridan.PNG",name1:"[谢尔丹学院]",name2:"SHERIDAN COLLEGE",desc:"谢尔丹学院（Sheridan College）是一所加拿大综合类公立高等学院，建立于1967年。学院有三大校区，都位于加拿大第一大城市多伦多附近。谢尔丹的课程设置以就业为导向，重点培养学生的职业适应能力和应变能力。作为世界知名的数字媒体和动画领导者，Sheridan在教育下一代游戏设计师方面具有独特优势。"},{school:d.RMIT,img:"https://file.igagame.com/img/school/school-RMIT.PNG",name1:"[皇家墨尔本理工大学]",name2:"RMIT | RMIT University",desc:"皇家墨尔本理工大学（RMIT University）位于澳洲墨尔本市，是一所综合型公立大学，也是澳洲国内唯一被英国皇室授予皇家衔称的大学机构。根据2009年度“泰晤士高等教育-QS世界大学排名”，RMIT为澳洲最优秀的10所大学之一。该校建立了专门的游戏研究小组，专注于世界领先的游戏方向研究，为学生提供丰富的学习体验。"}],O=t=>(L("data-v-d956fcf8"),t=t(),M(),t),V={class:"content"},b={class:"left"},C={class:"middle"},G=["onMouseover"],U=O(()=>o("div",{class:"dot"},null,-1)),w={class:"name"},y={class:"right"},D={class:"photo ani-fadeIn"},k={class:"photo-view"},H=["src"],Y={class:"name ani-fadeIn"},B={class:"ch_font_bold ch-name ch_font_light"},F={class:"en_font_bold en-name"},P={class:"desc ch_font_light"},x={__name:"OtherSchool",setup(t){const r=v(!1),s=v("");function p(e){s.value=h.find(_=>_.school===e)}function u(e){return s.value.school===e}return S(()=>{s.value=h[0],g.on("bus-show-menu",e=>{r.value=e})}),(e,_)=>(c(),n("div",{class:l(["ani-fadeIn our-school-view en_font_bold",{filter:r.value}])},[o("div",V,[o("div",b,[E(f,{name:"OTHER"})]),o("div",C,[(c(!0),n(T,null,R(A(h),(a,m)=>(c(),n("div",{key:a.school,class:l(["school","school"+(m+1)]),onMouseover:z=>p(a.school)},[U,o("div",w,"["+i(a.school)+"]",1),u(a.school)?(c(),n("div",{key:0,class:l(["school-tip en_font_bold ani-fadeIn","school"+(m+1)+"-tip"])},null,2)):N("",!0)],42,G))),128))]),o("div",y,[o("div",D,[o("div",k,[o("img",{src:s.value.img},null,8,H)])]),o("div",Y,[o("div",B,i(s.value.name1),1),o("div",F,i(s.value.name2),1)]),o("div",P,i(s.value.desc),1)])])],2))}},eo=I(x,[["__scopeId","data-v-d956fcf8"]]);export{eo as default};