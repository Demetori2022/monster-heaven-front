import{_ as B,af as C,a as P,r as I,D as N,o as r,c as g,d as t,e as o,w as n,h as U,S as $,ay as z,a8 as D,an as A,aq as u,p as E,f as F,az as h,ap as l,ao as L,g as M,i as T,aA as j,aB as G}from"./index.f125aac1.js";import{_ as H}from"./Pagination.91de6501.js";import{_ as J}from"./InputNumber.53495b2c.js";import{_ as K}from"./Space.d2c3ea46.js";import"./Input.49f1073f.js";import"./Tag.3f075507.js";const O=s=>(E("data-v-4c1ceb8b"),s=s(),F(),s),Q={id:"product"},R={id:"container"},W=O(()=>t("h1",{class:"title"},"\u5546\u54C1\u5217\u8868",-1)),X={class:"imgbox"},Y=["src"],Z={class:"content"},ee={style:{"white-space":"pre"}},te={style:{"white-space":"pre"}},ne={class:"cart-button"},oe=M(" \u52A0\u5165\u8CFC\u7269\u8ECA "),se={__name:"ProductView",setup(s){const v=C(),{addCart:f}=v,p=P([]),a=I(1),_=12,d=N(()=>p.slice(a.value*_-_,a.value*_));return(async()=>{try{const{data:c}=await U.get("/products");p.push(...c.result.map(i=>({...i,quantity:1}))),console.log(c)}catch{$.fire({icon:"error",title:"\u5931\u6557",text:"\u4F3A\u670D\u5668\u932F\u8AA4"})}})(),(c,i)=>{const y=J,b=K,w=T,x=j,S=G,k=z,V=H;return r(),g("div",Q,[t("div",R,[W,o(k,{cols:"1 s:2 m:3 l:4",responsive:"screen"},{default:n(()=>[(r(!0),g(D,null,A(u(d),(e,q)=>(r(),h(S,{key:q},{default:n(()=>[u(d).length>0?(r(),h(x,{key:e._id},{cover:n(()=>[t("div",X,[t("img",{src:e.image},null,8,Y)])]),default:n(()=>[t("div",Z,[t("p",ee,l(e.name),1),t("h2",null," \u5546\u54C1\u50F9\u683C : "+l(e.price),1),t("h3",te,l(e.description),1),o(b,{vertical:""},{default:n(()=>[o(y,{"button-placement":"both",value:e.quantity,"onUpdate:value":m=>e.quantity=m,placeholder:"\u8CFC\u8CB7\u6578\u91CF",min:0},null,8,["value","onUpdate:value"])]),_:2},1024),t("div",ne,[o(w,{onClick:m=>u(f)({product:e._id,quantity:e.quantity}),strong:"",round:"",type:"warning"},{default:n(()=>[oe]),_:2},1032,["onClick"])])])]),_:2},1024)):L("",!0)]),_:2},1024))),128))]),_:1}),o(V,{page:a.value,"onUpdate:page":i[0]||(i[0]=e=>a.value=e),"page-count":Math.ceil(p.length/_)},null,8,["page","page-count"])])])}}},le=B(se,[["__scopeId","data-v-4c1ceb8b"]]);export{le as default};
