import{d as h,r as p,o as c,c as u,a as o,w as s,b as e,u as k,e as y,f as B,g as n,h as C,_ as L}from"./index-465e1cad.js";import{a as N}from"./axios-bff3f665.js";const V={class:"head"},b=e("div",null,[e("div",{class:"logo"}),e("div",{class:"title"},[e("h1",null,[e("span",null,"文"),y("易通")])])],-1),I={class:"nav"},R=e("div",{class:"outside_menu_item"},[e("span",null,"首页")],-1),S=e("div",{class:"outside_menu_item"},[e("span",null,"检索引擎")],-1),$=e("div",{class:"outside_menu_item"},[e("span",null,"在线商城")],-1),z=e("div",{class:"outside_menu_item"},[e("span",null,"智慧云端")],-1),E={key:0,class:"isLogin"},T={key:1,class:"isLogin2"},U=e("div",{class:"person_image"},[e("img",{src:"#",alt:""})],-1),j={class:"dropdown_column"},q={class:"el-dropdown-link"},A=e("div",{class:"dropdown_item"},"个人中心",-1),D=e("div",{class:"dropdown_item"},"我要反馈",-1),F=e("div",{class:"dropdown_item"},"切换账号",-1),G=e("div",{class:"dropdown_item"},"退出登录",-1),H=h({__name:"header",setup(v){N.defaults.baseURL="/api";const r=B(),m=p("home"),l=(t,_)=>{console.log(t,_)};let a=p(0);function i(){r.push("/login")}return(t,_)=>{const d=n("el-menu-item"),f=n("el-icon"),x=n("el-dropdown-menu"),w=n("el-dropdown"),g=n("el-menu");return c(),u("div",V,[o(g,{"default-active":m.value,class:"head_",mode:"horizontal",ellipsis:!0,onSelect:l,router:""},{default:s(()=>[b,e("div",I,[o(d,{index:"home"},{default:s(()=>[R]),_:1}),o(d,{index:"2"},{default:s(()=>[S]),_:1}),o(d,{index:"3"},{default:s(()=>[$]),_:1}),o(d,{index:"4"},{default:s(()=>[z]),_:1}),k(a)==0?(c(),u("div",E,[e("div",{class:"login_text",onClick:_[0]||(_[0]=K=>i())},"登录")])):(c(),u("div",T,[U,e("div",j,[o(w,{"hide-on-click":!1},{dropdown:s(()=>[o(x,null,{default:s(()=>[A,D,F,G]),_:1})]),default:s(()=>[e("span",q,[o(f,{class:"el-icon--right"})])]),_:1})])]))])]),_:1},8,["default-active"])])}}});const J=h({__name:"index",setup(v){return(r,m)=>{const l=n("el-header"),a=n("router-view"),i=n("el-main"),t=n("el-container");return c(),C(t,{class:"con"},{default:s(()=>[o(l,{class:"he"},{default:s(()=>[o(H)]),_:1}),o(i,{class:"m"},{default:s(()=>[o(a)]),_:1})]),_:1})}}});const P=L(J,[["__scopeId","data-v-277f88c7"]]);export{P as default};