import{B as u}from"./index-DEdjzqQS.js";import{e as r,f as c,S as s}from"./index-DSH215dh.js";import"./iframe-Cc9-bgm5.js";import"./preload-helper-PPVm8Dsz.js";import"./index-XrjHf75-.js";const{expect:l,fn:m,userEvent:B,within:C}=__STORYBOOK_MODULE_TEST__,t={SearchIcon:s,ShoppingCartIcon:c,PersonIcon:r},f={title:"Molecules/BadgeIconButton",component:u,tags:["autodocs"],args:{size:24,onClick:m()},argTypes:{IconButton:{options:Object.keys(t),mapping:t,control:{type:"select",labels:{SearchIcon:"Search Icon",PersonIcon:"Person Icon",ShoppingCartIcon:"Shopping Cart Icon"}}},size:{control:{type:"number"},description:"아이콘 크기, 정사각형 모양",table:{type:{summary:"number"}}},badgeContent:{control:{type:"number"},description:"배찌에 나오는 숫자",table:{type:{summary:"number"}}},badgeBackgroundColor:{control:{type:"color"},description:"배찌의 색상",table:{type:{summary:"color"}}},iconBackgroundColor:{control:{type:"color"},description:"배찌의 색상",table:{type:{summary:"color"}}},onClick:{type:"function",description:"배찌 아이콘 버튼의 onClick 핸들러",action:"clicked"}},play:async({canvasElement:d,args:g,step:p})=>{await p("클릭 이벤트 발생시 prop으로 받은 onClick 호출",async()=>{const i=C(d).getByRole("button");await B.click(i),await l(g.onClick).toHaveBeenCalled()})}},o={args:{IconButton:s,badgeContent:1,badgeBackgroundColor:"#ed9f28"}},n={args:{IconButton:r,badgeContent:1,badgeBackgroundColor:"#d4001a"}},e={args:{IconButton:c,badgeContent:1,badgeBackgroundColor:"#32bf00"}},a={args:{IconButton:r,badgeBackgroundColor:"#d4001a"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    IconButton: SearchIcon,
    badgeContent: 1,
    badgeBackgroundColor: "#ed9f28"
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    IconButton: PersonIcon,
    badgeContent: 1,
    badgeBackgroundColor: "#d4001a"
  }
}`,...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    IconButton: ShoppingCartIcon,
    badgeContent: 1,
    badgeBackgroundColor: "#32bf00"
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    IconButton: PersonIcon,
    badgeBackgroundColor: "#d4001a"
  }
}`,...a.parameters?.docs?.source}}};const _=["SearchBadgeIcon","PersonBadgeIcon","ShoppingCartBadgeIcon","NoBadgeContent"];export{a as NoBadgeContent,n as PersonBadgeIcon,o as SearchBadgeIcon,e as ShoppingCartBadgeIcon,_ as __namedExportsOrder,f as default};
