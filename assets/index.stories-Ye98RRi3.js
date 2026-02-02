import{j as o,a as s}from"./iframe-CDGzgA9E.js";import{F as e}from"./index-Cwh1y6CM.js";import"./preload-helper-PPVm8Dsz.js";import"./styles-BeFhFhpp.js";import"./breakpoint-DsEcWJkq.js";const d={title:"Layout/Flex",component:e,tags:["autodocs"]},r=s.div`
  width: 100px;
  height: 100px;
  background-color: tomato;
  &:nth-child(2n) {
    background-color: gray;
  }
`,n={render:t=>o.jsxs(e,{...t,style:{flexDirection:{base:"row",sm:"column",md:"row",lg:"column"}},children:[o.jsx(r,{}),o.jsx(r,{}),o.jsx(r,{}),o.jsx(r,{}),o.jsx(r,{})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <Flex {...args} style={{
    flexDirection: {
      base: "row",
      sm: "column",
      md: "row",
      lg: "column"
    }
  }}>\r
      <ChildComponent />\r
      <ChildComponent />\r
      <ChildComponent />\r
      <ChildComponent />\r
      <ChildComponent />\r
    </Flex>
}`,...n.parameters?.docs?.source}}};const p=["Primary"];export{n as Primary,p as __namedExportsOrder,d as default};
