import{x as k,B as s,aM as Ie,n as ze,bh as be,$ as G,v as X,j as T,D as x,A as L,aP as E,a8 as se,Y as ye,r as U,a4 as ve,bi as He,bj as Ae,C as Z,aY as W,t as f,q as p,s as z,H as m,a1 as B,y as we,z as me,bk as Se,a5 as ie,I as le,a2 as ae,a$ as Re,ad as P,N as Ne,aX as Pe,_ as _e,a as Te,b as ke,o as Me,c as Fe,d as O,e as Y,p as Ee,f as Ke,bl as Le,bm as V,bn as Oe}from"./index.acdfabe8.js";import{t as $e,N as je,f as Be}from"./Tooltip.cf125c47.js";const Ve=k({name:"ChevronDownFilled",render(){return s("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}});function De(e,i,t,n){return{itemColorHoverInverted:"#0000",itemColorActiveInverted:i,itemColorActiveHoverInverted:i,itemColorActiveCollapsedInverted:i,itemTextColorInverted:e,itemTextColorHoverInverted:t,itemTextColorChildActiveInverted:t,itemTextColorChildActiveHoverInverted:t,itemTextColorActiveInverted:t,itemTextColorActiveHoverInverted:t,itemTextColorHorizontalInverted:e,itemTextColorHoverHorizontalInverted:t,itemTextColorChildActiveHorizontalInverted:t,itemTextColorChildActiveHoverHorizontalInverted:t,itemTextColorActiveHorizontalInverted:t,itemTextColorActiveHoverHorizontalInverted:t,itemIconColorInverted:e,itemIconColorHoverInverted:t,itemIconColorActiveInverted:t,itemIconColorActiveHoverInverted:t,itemIconColorChildActiveInverted:t,itemIconColorChildActiveHoverInverted:t,itemIconColorCollapsedInverted:e,itemIconColorHorizontalInverted:e,itemIconColorHoverHorizontalInverted:t,itemIconColorActiveHorizontalInverted:t,itemIconColorActiveHoverHorizontalInverted:t,itemIconColorChildActiveHorizontalInverted:t,itemIconColorChildActiveHoverHorizontalInverted:t,arrowColorInverted:e,arrowColorHoverInverted:t,arrowColorActiveInverted:t,arrowColorActiveHoverInverted:t,arrowColorChildActiveInverted:t,arrowColorChildActiveHoverInverted:t,groupTextColorInverted:n}}const Ue=e=>{const{borderRadius:i,textColor3:t,primaryColor:n,textColor2:l,textColor1:a,fontSize:d,dividerColor:c,hoverColor:v,primaryColorHover:I}=e;return Object.assign({borderRadius:i,color:"#0000",groupTextColor:t,itemColorHover:v,itemColorActive:G(n,{alpha:.1}),itemColorActiveHover:G(n,{alpha:.1}),itemColorActiveCollapsed:G(n,{alpha:.1}),itemTextColor:l,itemTextColorHover:l,itemTextColorActive:n,itemTextColorActiveHover:n,itemTextColorChildActive:n,itemTextColorChildActiveHover:n,itemTextColorHorizontal:l,itemTextColorHoverHorizontal:I,itemTextColorActiveHorizontal:n,itemTextColorActiveHoverHorizontal:n,itemTextColorChildActiveHorizontal:n,itemTextColorChildActiveHoverHorizontal:n,itemIconColor:a,itemIconColorHover:a,itemIconColorActive:n,itemIconColorActiveHover:n,itemIconColorChildActive:n,itemIconColorChildActiveHover:n,itemIconColorCollapsed:a,itemIconColorHorizontal:a,itemIconColorHoverHorizontal:I,itemIconColorActiveHorizontal:n,itemIconColorActiveHoverHorizontal:n,itemIconColorChildActiveHorizontal:n,itemIconColorChildActiveHoverHorizontal:n,itemHeight:"42px",arrowColor:l,arrowColorHover:l,arrowColorActive:n,arrowColorActiveHover:n,arrowColorChildActive:n,arrowColorChildActiveHover:n,colorInverted:"#0000",borderColorHorizontal:"#0000",fontSize:d,dividerColor:c},De("#BBB",n,"#FFF","#AAA"))},qe=Ie({name:"Menu",common:ze,peers:{Tooltip:$e,Dropdown:be},self:Ue}),Ge=qe,$=X("n-menu"),J=X("n-submenu"),Q=X("n-menu-item-group"),D=8;function ee(e){const i=T($),{props:t,mergedCollapsedRef:n}=i,l=T(J,null),a=T(Q,null),d=x(()=>t.mode==="horizontal"),c=x(()=>d.value?t.dropdownPlacement:"tmNodes"in e?"right-start":"right"),v=x(()=>{var u;return Math.max((u=t.collapsedIconSize)!==null&&u!==void 0?u:t.iconSize,t.iconSize)}),I=x(()=>{var u;return!d.value&&e.root&&n.value&&(u=t.collapsedIconSize)!==null&&u!==void 0?u:t.iconSize}),S=x(()=>{if(d.value)return;const{collapsedWidth:u,indent:H,rootIndent:w}=t,{root:A,isGroup:R}=e,N=w===void 0?H:w;if(A)return n.value?u/2-v.value/2:N;if(a)return H/2+a.paddingLeftRef.value;if(l)return(R?H/2:H)+l.paddingLeftRef.value}),b=x(()=>{const{collapsedWidth:u,indent:H,rootIndent:w}=t,{value:A}=v,{root:R}=e;return d.value||!R||!n.value?D:(w===void 0?H:w)+A+D-(u+A)/2});return{dropdownPlacement:c,activeIconSize:I,maxIconSize:v,paddingLeft:S,iconMarginRight:b,NMenu:i,NSubmenu:l}}const oe={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},ue=Object.assign(Object.assign({},oe),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),We=k({name:"MenuOptionGroup",props:ue,setup(e){L(J,null);const i=ee(e);L(Q,{paddingLeftRef:i.paddingLeft});const{mergedClsPrefixRef:t,props:n}=T($);return function(){const{value:l}=t,a=i.paddingLeft.value,{nodeProps:d}=n,c=d==null?void 0:d(e.tmNode.rawNode);return s("div",{class:`${l}-menu-item-group`,role:"group"},s("div",Object.assign({},c,{class:[`${l}-menu-item-group-title`,c==null?void 0:c.class],style:[(c==null?void 0:c.style)||"",a!==void 0?`padding-left: ${a}px;`:""]}),E(e.title),e.extra?s(se,null," ",E(e.extra)):null),s("div",null,e.tmNodes.map(v=>te(v,n))))}}}),he=k({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0}},setup(e){const{props:i}=T($);return{menuProps:i,style:x(()=>{const{paddingLeft:t}=e;return{paddingLeft:t&&`${t}px`}}),iconStyle:x(()=>{const{maxIconSize:t,activeIconSize:n,iconMarginRight:l}=e;return{width:`${t}px`,height:`${t}px`,fontSize:`${n}px`,marginRight:`${l}px`}})}},render(){const{clsPrefix:e,tmNode:i,menuProps:{renderIcon:t,renderLabel:n,renderExtra:l,expandIcon:a}}=this,d=t?t(i.rawNode):E(this.icon);return s("div",{onClick:c=>{var v;(v=this.onClick)===null||v===void 0||v.call(this,c)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},d&&s("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[d]),s("div",{class:`${e}-menu-item-content-header`,role:"none"},n?n(i.rawNode):E(this.title),this.extra||l?s("span",{class:`${e}-menu-item-content-header__extra`}," ",l?l(i.rawNode):E(this.extra)):null),this.showArrow?s(ye,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>a?a(i.rawNode):s(Ve,null)}):null)}}),pe=Object.assign(Object.assign({},oe),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:{type:Boolean,default:!1},icon:Function,onClick:Function}),Ye=k({name:"Submenu",props:pe,setup(e){const i=ee(e),{NMenu:t,NSubmenu:n}=i,{props:l,mergedCollapsedRef:a,mergedThemeRef:d}=t,c=x(()=>{const{disabled:u}=e;return n!=null&&n.mergedDisabledRef.value||l.disabled?!0:u}),v=U(!1);L(J,{paddingLeftRef:i.paddingLeft,mergedDisabledRef:c}),L(Q,null);function I(){const{onClick:u}=e;u&&u()}function S(){c.value||(a.value||t.toggleExpand(e.internalKey),I())}function b(u){v.value=u}return{menuProps:l,mergedTheme:d,doSelect:t.doSelect,inverted:t.invertedRef,isHorizontal:t.isHorizontalRef,mergedClsPrefix:t.mergedClsPrefixRef,maxIconSize:i.maxIconSize,activeIconSize:i.activeIconSize,iconMarginRight:i.iconMarginRight,dropdownPlacement:i.dropdownPlacement,dropdownShow:v,paddingLeft:i.paddingLeft,mergedDisabled:c,mergedValue:t.mergedValueRef,childActive:ve(()=>t.activePathRef.value.includes(e.internalKey)),collapsed:x(()=>l.mode==="horizontal"?!1:a.value?!0:!t.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:x(()=>!c.value&&(l.mode==="horizontal"||a.value)),handlePopoverShowChange:b,handleClick:S}},render(){var e;const{mergedClsPrefix:i,menuProps:{renderIcon:t,renderLabel:n}}=this,l=()=>{const{isHorizontal:d,paddingLeft:c,collapsed:v,mergedDisabled:I,maxIconSize:S,activeIconSize:b,title:u,childActive:H,icon:w,handleClick:A,menuProps:{nodeProps:R},dropdownShow:N,iconMarginRight:q,tmNode:K,mergedClsPrefix:j}=this,M=R==null?void 0:R(K.rawNode);return s("div",Object.assign({},M,{class:[`${j}-menu-item`,M==null?void 0:M.class],role:"menuitem"}),s(he,{tmNode:K,paddingLeft:c,collapsed:v,disabled:I,iconMarginRight:q,maxIconSize:S,activeIconSize:b,title:u,showArrow:!d,childActive:H,clsPrefix:j,icon:w,hover:N,onClick:A}))},a=()=>s(Ae,null,{default:()=>{const{tmNodes:d,collapsed:c}=this;return c?null:s("div",{class:`${i}-submenu-children`,role:"menu"},d.map(v=>te(v,this.menuProps)))}});return this.root?s(He,Object.assign({size:"large"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,trigger:"hover",disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:t,renderLabel:n}),{default:()=>s("div",{class:`${i}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},l(),this.isHorizontal?null:a())}):s("div",{class:`${i}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},l(),a())}}),fe=Object.assign(Object.assign({},oe),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),Xe=k({name:"MenuOption",props:fe,setup(e){const i=ee(e),{NSubmenu:t,NMenu:n}=i,{props:l,mergedClsPrefixRef:a,mergedCollapsedRef:d}=n,c=t?t.mergedDisabledRef:{value:!1},v=x(()=>c.value||e.disabled);function I(b){const{onClick:u}=e;u&&u(b)}function S(b){v.value||(n.doSelect(e.internalKey,e.tmNode.rawNode),I(b))}return{mergedClsPrefix:a,dropdownPlacement:i.dropdownPlacement,paddingLeft:i.paddingLeft,iconMarginRight:i.iconMarginRight,maxIconSize:i.maxIconSize,activeIconSize:i.activeIconSize,mergedTheme:n.mergedThemeRef,menuProps:l,dropdownEnabled:ve(()=>e.root&&d.value&&l.mode!=="horizontal"&&!v.value),selected:x(()=>n.mergedValueRef.value===e.internalKey),mergedDisabled:v,handleClick:S}},render(){const{mergedClsPrefix:e,mergedTheme:i,tmNode:t,menuProps:{renderLabel:n,nodeProps:l}}=this,a=l==null?void 0:l(t.rawNode);return s("div",Object.assign({},a,{role:"menuitem",class:[`${e}-menu-item`,a==null?void 0:a.class]}),s(je,{theme:i.peers.Tooltip,themeOverrides:i.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>n?n(t.rawNode):E(this.title),trigger:()=>s(he,{tmNode:t,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),Ze=k({name:"MenuDivider",setup(){const e=T($),{mergedClsPrefixRef:i,isHorizontalRef:t}=e;return()=>t.value?null:s("div",{class:`${i.value}-menu-divider`})}}),Je=Z(ue),Qe=Z(fe),eo=Z(pe);function oo(e){return e.type==="divider"||e.type==="render"}function to(e){return e.type==="divider"}function te(e,i){const{rawNode:t}=e;if(oo(t))return to(t)?s(Ze,Object.assign({key:e.key},t.props)):void 0;const{labelField:n}=i,{key:l,level:a,isGroup:d}=e,c=Object.assign(Object.assign({},t),{title:t.title||t[n],extra:t.titleExtra||t.extra,key:l,internalKey:l,level:a,root:a===0,isGroup:d});return e.children?e.isGroup?s(We,W(c,Je,{tmNode:e,tmNodes:e.children,key:l})):s(Ye,W(c,eo,{key:l,rawNodes:t[i.childrenField],tmNodes:e.children,tmNode:e})):s(Xe,W(c,Qe,{key:l,tmNode:e}))}const ce=[f("&::before","background-color: var(--n-item-color-hover);"),m("arrow",`
 color: var(--n-arrow-color-hover);
 `),m("icon",`
 color: var(--n-item-icon-color-hover);
 `),p("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[f("a",`
 color: var(--n-item-text-color-hover);
 `),m("extra",`
 color: var(--n-item-text-color-hover);
 `)])],de=[m("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),p("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[f("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),m("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],ro=f([p("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[z("horizontal",`
 display: inline-flex;
 padding-bottom: 0;
 `,[p("submenu","margin: 0;"),p("menu-item","margin: 0;"),p("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[f("&::before","display: none;"),z("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),p("menu-item-content",[z("selected",[m("icon","color: var(--n-item-icon-color-active-horizontal);"),p("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[f("a","color: var(--n-item-text-color-active-horizontal);"),m("extra","color: var(--n-item-text-color-active-horizontal);")])]),z("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[p("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[f("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),m("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),m("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),B("disabled",[B("selected, child-active",[f("&:focus-within",de)]),z("selected",[_(null,[m("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),p("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[f("a","color: var(--n-item-text-color-active-hover-horizontal);"),m("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),z("child-active",[_(null,[m("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),p("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[f("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),m("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),_("border-bottom: 2px solid var(--n-border-color-horizontal);",de)]),p("menu-item-content-header",[f("a","color: var(--n-item-text-color-horizontal);")])])]),z("collapsed",[p("menu-item-content",[z("selected",[f("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),p("menu-item-content-header","opacity: 0;"),m("arrow","opacity: 0;"),m("icon","color: var(--n-item-icon-color-collapsed);")])]),p("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),p("menu-item-content",`
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 padding-right: 18px;
 transition:
 background-color .3s var(--n-bezier),
 padding-left .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[f("> *","z-index: 1;"),f("&::before",`
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),z("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),z("collapsed",[m("arrow","transform: rotate(0);")]),z("selected",[f("&::before","background-color: var(--n-item-color-active);"),m("arrow","color: var(--n-arrow-color-active);"),m("icon","color: var(--n-item-icon-color-active);"),p("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[f("a","color: var(--n-item-text-color-active);"),m("extra","color: var(--n-item-text-color-active);")])]),z("child-active",[p("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[f("a",`
 color: var(--n-item-text-color-child-active);
 `),m("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),m("arrow",`
 color: var(--n-arrow-color-child-active);
 `),m("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),B("disabled",[B("selected, child-active",[f("&:focus-within",ce)]),z("selected",[_(null,[m("arrow","color: var(--n-arrow-color-active-hover);"),m("icon","color: var(--n-item-icon-color-active-hover);"),p("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[f("a","color: var(--n-item-text-color-active-hover);"),m("extra","color: var(--n-item-text-color-active-hover);")])])]),z("child-active",[_(null,[m("arrow","color: var(--n-arrow-color-child-active-hover);"),m("icon","color: var(--n-item-icon-color-child-active-hover);"),p("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[f("a","color: var(--n-item-text-color-child-active-hover);"),m("extra","color: var(--n-item-text-color-child-active-hover);")])])]),z("selected",[_(null,[f("&::before","background-color: var(--n-item-color-active-hover);")])]),_(null,ce)]),m("icon",`
 grid-area: icon;
 color: var(--n-item-icon-color);
 transition:
 color .3s var(--n-bezier),
 font-size .3s var(--n-bezier),
 margin-right .3s var(--n-bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `),m("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),p("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
 color: var(--n-item-text-color);
 `,[f("a",`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[f("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),m("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),p("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[p("menu-item-content",`
 height: var(--n-item-height);
 `),p("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[Be({duration:".2s"})])]),p("menu-item-group",[p("menu-item-group-title",`
 margin-top: 6px;
 color: var(--n-group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)])]),p("menu-tooltip",[f("a",`
 color: inherit;
 text-decoration: none;
 `)]),p("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function _(e,i){return[z("hover",e,i),f("&:hover",e,i)]}const no=Object.assign(Object.assign({},me.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array,dropdownPlacement:{type:String,default:"bottom"}}),io=k({name:"Menu",props:no,setup(e){const{mergedClsPrefixRef:i,inlineThemeDisabled:t}=we(e),n=me("Menu","-menu",ro,Ge,e,i),l=T(Se,null),a=x(()=>{var h;const{collapsed:C}=e;if(C!==void 0)return C;if(l){const{collapseModeRef:o,collapsedRef:g}=l;if(o.value==="width")return(h=g.value)!==null&&h!==void 0?h:!1}return!1}),d=x(()=>{const{keyField:h,childrenField:C}=e;return Pe(e.items||e.options,{getChildren(o){return o[C]},getKey(o){var g;return(g=o[h])!==null&&g!==void 0?g:o.name}})}),c=x(()=>new Set(d.value.treeNodes.map(h=>h.key))),{watchProps:v}=e,I=U(null);v!=null&&v.includes("defaultValue")?ie(()=>{I.value=e.defaultValue}):I.value=e.defaultValue;const S=le(e,"value"),b=ae(S,I),u=U([]),H=()=>{u.value=e.defaultExpandAll?d.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||d.value.getPath(b.value,{includeSelf:!1}).keyPath};v!=null&&v.includes("defaultExpandedKeys")?ie(H):H();const w=Re(e,["expandedNames","expandedKeys"]),A=ae(w,u),R=x(()=>d.value.treeNodes),N=x(()=>d.value.getPath(b.value).keyPath);L($,{props:e,mergedCollapsedRef:a,mergedThemeRef:n,mergedValueRef:b,mergedExpandedKeysRef:A,activePathRef:N,mergedClsPrefixRef:i,isHorizontalRef:x(()=>e.mode==="horizontal"),invertedRef:le(e,"inverted"),doSelect:q,toggleExpand:j});function q(h,C){const{"onUpdate:value":o,onUpdateValue:g,onSelect:y}=e;g&&P(g,h,C),o&&P(o,h,C),y&&P(y,h,C),I.value=h}function K(h){const{"onUpdate:expandedKeys":C,onUpdateExpandedKeys:o,onExpandedNamesChange:g,onOpenNamesChange:y}=e;C&&P(C,h),o&&P(o,h),g&&P(g,h),y&&P(y,h),u.value=h}function j(h){const C=Array.from(A.value),o=C.findIndex(g=>g===h);if(~o)C.splice(o,1);else{if(e.accordion&&c.value.has(h)){const g=C.findIndex(y=>c.value.has(y));g>-1&&C.splice(g,1)}C.push(h)}K(C)}const M=h=>{const C=d.value.getPath(h!=null?h:b.value,{includeSelf:!1}).keyPath;if(!C.length)return;const o=Array.from(A.value),g=new Set([...o,...C]);e.accordion&&c.value.forEach(y=>{g.has(y)&&!C.includes(y)&&g.delete(y)}),K(Array.from(g))},ne=x(()=>{const{inverted:h}=e,{common:{cubicBezierEaseInOut:C},self:o}=n.value,{borderRadius:g,borderColorHorizontal:y,fontSize:Ce,itemHeight:ge,dividerColor:xe}=o,r={"--n-divider-color":xe,"--n-bezier":C,"--n-font-size":Ce,"--n-border-color-horizontal":y,"--n-border-radius":g,"--n-item-height":ge};return h?(r["--n-group-text-color"]=o.groupTextColorInverted,r["--n-color"]=o.colorInverted,r["--n-item-text-color"]=o.itemTextColorInverted,r["--n-item-text-color-hover"]=o.itemTextColorHoverInverted,r["--n-item-text-color-active"]=o.itemTextColorActiveInverted,r["--n-item-text-color-child-active"]=o.itemTextColorChildActiveInverted,r["--n-item-text-color-child-active-hover"]=o.itemTextColorChildActiveInverted,r["--n-item-text-color-active-hover"]=o.itemTextColorActiveHoverInverted,r["--n-item-icon-color"]=o.itemIconColorInverted,r["--n-item-icon-color-hover"]=o.itemIconColorHoverInverted,r["--n-item-icon-color-active"]=o.itemIconColorActiveInverted,r["--n-item-icon-color-active-hover"]=o.itemIconColorActiveHoverInverted,r["--n-item-icon-color-child-active"]=o.itemIconColorChildActiveInverted,r["--n-item-icon-color-child-active-hover"]=o.itemIconColorChildActiveHoverInverted,r["--n-item-icon-color-collapsed"]=o.itemIconColorCollapsedInverted,r["--n-item-text-color-horizontal"]=o.itemTextColorHorizontalInverted,r["--n-item-text-color-hover-horizontal"]=o.itemTextColorHoverHorizontalInverted,r["--n-item-text-color-active-horizontal"]=o.itemTextColorActiveHorizontalInverted,r["--n-item-text-color-child-active-horizontal"]=o.itemTextColorChildActiveHorizontalInverted,r["--n-item-text-color-child-active-hover-horizontal"]=o.itemTextColorChildActiveHoverHorizontalInverted,r["--n-item-text-color-active-hover-horizontal"]=o.itemTextColorActiveHoverHorizontalInverted,r["--n-item-icon-color-horizontal"]=o.itemIconColorHorizontalInverted,r["--n-item-icon-color-hover-horizontal"]=o.itemIconColorHoverHorizontalInverted,r["--n-item-icon-color-active-horizontal"]=o.itemIconColorActiveHorizontalInverted,r["--n-item-icon-color-active-hover-horizontal"]=o.itemIconColorActiveHoverHorizontalInverted,r["--n-item-icon-color-child-active-horizontal"]=o.itemIconColorChildActiveHorizontalInverted,r["--n-item-icon-color-child-active-hover-horizontal"]=o.itemIconColorChildActiveHoverHorizontalInverted,r["--n-arrow-color"]=o.arrowColorInverted,r["--n-arrow-color-hover"]=o.arrowColorHoverInverted,r["--n-arrow-color-active"]=o.arrowColorActiveInverted,r["--n-arrow-color-active-hover"]=o.arrowColorActiveHoverInverted,r["--n-arrow-color-child-active"]=o.arrowColorChildActiveInverted,r["--n-arrow-color-child-active-hover"]=o.arrowColorChildActiveHoverInverted,r["--n-item-color-hover"]=o.itemColorHoverInverted,r["--n-item-color-active"]=o.itemColorActiveInverted,r["--n-item-color-active-hover"]=o.itemColorActiveHoverInverted,r["--n-item-color-active-collapsed"]=o.itemColorActiveCollapsedInverted):(r["--n-group-text-color"]=o.groupTextColor,r["--n-color"]=o.color,r["--n-item-text-color"]=o.itemTextColor,r["--n-item-text-color-hover"]=o.itemTextColorHover,r["--n-item-text-color-active"]=o.itemTextColorActive,r["--n-item-text-color-child-active"]=o.itemTextColorChildActive,r["--n-item-text-color-child-active-hover"]=o.itemTextColorChildActiveHover,r["--n-item-text-color-active-hover"]=o.itemTextColorActiveHover,r["--n-item-icon-color"]=o.itemIconColor,r["--n-item-icon-color-hover"]=o.itemIconColorHover,r["--n-item-icon-color-active"]=o.itemIconColorActive,r["--n-item-icon-color-active-hover"]=o.itemIconColorActiveHover,r["--n-item-icon-color-child-active"]=o.itemIconColorChildActive,r["--n-item-icon-color-child-active-hover"]=o.itemIconColorChildActiveHover,r["--n-item-icon-color-collapsed"]=o.itemIconColorCollapsed,r["--n-item-text-color-horizontal"]=o.itemTextColorHorizontal,r["--n-item-text-color-hover-horizontal"]=o.itemTextColorHoverHorizontal,r["--n-item-text-color-active-horizontal"]=o.itemTextColorActiveHorizontal,r["--n-item-text-color-child-active-horizontal"]=o.itemTextColorChildActiveHorizontal,r["--n-item-text-color-child-active-hover-horizontal"]=o.itemTextColorChildActiveHoverHorizontal,r["--n-item-text-color-active-hover-horizontal"]=o.itemTextColorActiveHoverHorizontal,r["--n-item-icon-color-horizontal"]=o.itemIconColorHorizontal,r["--n-item-icon-color-hover-horizontal"]=o.itemIconColorHoverHorizontal,r["--n-item-icon-color-active-horizontal"]=o.itemIconColorActiveHorizontal,r["--n-item-icon-color-active-hover-horizontal"]=o.itemIconColorActiveHoverHorizontal,r["--n-item-icon-color-child-active-horizontal"]=o.itemIconColorChildActiveHorizontal,r["--n-item-icon-color-child-active-hover-horizontal"]=o.itemIconColorChildActiveHoverHorizontal,r["--n-arrow-color"]=o.arrowColor,r["--n-arrow-color-hover"]=o.arrowColorHover,r["--n-arrow-color-active"]=o.arrowColorActive,r["--n-arrow-color-active-hover"]=o.arrowColorActiveHover,r["--n-arrow-color-child-active"]=o.arrowColorChildActive,r["--n-arrow-color-child-active-hover"]=o.arrowColorChildActiveHover,r["--n-item-color-hover"]=o.itemColorHover,r["--n-item-color-active"]=o.itemColorActive,r["--n-item-color-active-hover"]=o.itemColorActiveHover,r["--n-item-color-active-collapsed"]=o.itemColorActiveCollapsed),r}),F=t?Ne("menu",x(()=>e.inverted?"a":"b"),ne,e):void 0;return{mergedClsPrefix:i,controlledExpandedKeys:w,uncontrolledExpanededKeys:u,mergedExpandedKeys:A,uncontrolledValue:I,mergedValue:b,activePath:N,tmNodes:R,mergedTheme:n,mergedCollapsed:a,cssVars:t?void 0:ne,themeClass:F==null?void 0:F.themeClass,onRender:F==null?void 0:F.onRender,showOption:M}},render(){const{mergedClsPrefix:e,mode:i,themeClass:t,onRender:n}=this;return n==null||n(),s("div",{role:i==="horizontal"?"menubar":"menu",class:[`${e}-menu`,t,`${e}-menu--${i}`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},this.tmNodes.map(l=>te(l,this.$props)))}});const re=e=>(Ee("data-v-11e38771"),e=e(),Ke(),e),lo={class:"menubox"},ao=re(()=>O("div",{class:"logo"},[O("img",{src:Le})],-1)),co=re(()=>O("h1",null,"\u5F8C\u53F0\u7BA1\u7406\u7CFB\u7D71",-1)),so=re(()=>O("hr",null,null,-1)),vo={__name:"AdminLayout",setup(e){const i=U(null),t=Te([{label:()=>s(V,{to:{path:"/"}},{default:()=>"\u56DE\u9996\u9801"}),key:"back"},{label:()=>s(V,{to:{path:"/admin/products"}},{default:()=>"\u5546\u54C1\u7BA1\u7406"}),key:"products"},{label:()=>s(V,{to:{path:"/admin/orders"}},{default:()=>"\u8A02\u55AE\u7BA1\u7406"}),key:"orders"},{label:()=>s(V,{to:{path:"/admin/users"}},{default:()=>"\u6703\u54E1\u7BA1\u7406"}),key:"users"}]);return(n,l)=>{const a=io,d=Oe,c=ke("RouterView");return Me(),Fe(se,null,[O("div",lo,[ao,co,so,Y(a,{value:i.value,"onUpdate:value":l[0]||(l[0]=v=>i.value=v),options:t},null,8,["value","options"])]),Y(d,{right:100}),Y(c)],64)}}},ho=_e(vo,[["__scopeId","data-v-11e38771"]]);export{ho as default};
