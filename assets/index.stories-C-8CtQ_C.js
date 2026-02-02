import{j as n}from"./iframe-DX1DL66T.js";import{S as t,C as i,P as l,a as p,b as u,c as d,d as m,e as I,G as y,f as x}from"./index-CeZbahUD.js";import"./preload-helper-PPVm8Dsz.js";const{expect:C,fn:b,userEvent:g,within:h}=__STORYBOOK_MODULE_TEST__,S={title:"Atoms/IconButton",component:t,tags:["autodocs"],args:{width:32,height:32,color:"black",backgroundColor:"gray",borderRadius:"8px",onClick:b()},argTypes:{width:{control:{type:"number"},description:"아이콘 버튼 너비",table:{type:{summary:"number"}}},height:{control:{type:"number"},description:"아이콘 버튼 높이",table:{type:{summary:"number"}}},color:{control:{type:"color"},description:"아이콘 색상",table:{type:{summary:"string"}}},backgroundColor:{control:{type:"color"},description:"아이콘 버튼 배경 색상",table:{type:{summary:"string"}}},borderRadius:{control:{type:"text"},description:"아이콘 버튼 테두리 곡률",table:{type:{summary:"string"}}},onClick:{type:"function",description:"onClick 이벤트 핸들러",table:{type:{summary:"function"}},action:"clicked"}},play:async({args:o,step:c,canvasElement:s})=>{await c("클릭 이벤트에 prop으로 받은 onClick 핸들러 호출",async()=>{const a=h(s);await g.click(a.getByRole("button")),C(o.onClick).toHaveBeenCalled()})}},r={},e={render:o=>n.jsxs("div",{children:[n.jsx(t,{...o}),n.jsx(i,{...o}),n.jsx(l,{...o}),n.jsx(p,{...o}),n.jsx(u,{...o}),n.jsx(d,{...o}),n.jsx(m,{...o}),n.jsx(I,{...o}),n.jsx(y,{...o}),n.jsx(x,{...o})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => <div>\r
      <SearchIcon {...args} />\r
      <CloudUploadIcon {...args} />\r
      <PersonOutlineIcon {...args} />\r
      <CloseIcon {...args} />\r
      <CancelIcon {...args} />\r
      <CheckBoxOutlineBlankIcon {...args} />\r
      <CheckBoxIcon {...args} />\r
      <PersonIcon {...args} />\r
      <GitHubIcon {...args} />\r
      <ShoppingCartIcon {...args} />\r
    </div>
}`,...e.parameters?.docs?.source}}};const O=["SearchIconButton","IconButtons"];export{e as IconButtons,r as SearchIconButton,O as __namedExportsOrder,S as default};
