import{B as p}from"./index-C49t8kUY.js";import"./iframe-CDGzgA9E.js";import"./preload-helper-PPVm8Dsz.js";import"./index-HunV23Ce.js";import"./breakpoint-DsEcWJkq.js";const{expect:m,fn:l,userEvent:u,within:y}=__STORYBOOK_MODULE_TEST__,_={title:"Atoms/Button",component:p,tags:["autodocs"],args:{variant:"none",disabled:!1,children:"BUTTON",onClick:l()},argTypes:{variant:{options:["none","primary","secondary","danger"],control:{type:"radio"},description:"버튼 변형",table:{type:{summary:"none | primary | secondary | danger"}}},disabled:{control:{type:"boolean"},description:"disabled 플래그",table:{type:{summary:"boolean"}}},children:{control:{type:"text"},description:"버튼 텍스트",table:{type:{summary:"string"}}},onClick:{type:"function",description:"onClick 이벤트 핸들러",table:{type:{summary:"function"}},action:"clicked"}},play:async({args:t,canvasElement:c,step:i})=>{await i("클릭시 onClick prop 핸들러함수 호출",async()=>{const d=y(c);await u.click(d.getByRole("button")),await m(t.onClick).toHaveBeenCalled()})}},a={},r={args:{variant:"primary"}},e={args:{variant:"secondary"}},s={args:{variant:"danger"}},o={args:{disabled:!0}},n={args:{style:{padding:16}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary"
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "secondary"
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "danger"
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    style: {
      padding: 16
    }
  }
}`,...n.parameters?.docs?.source}}};const k=["Basic","Primary","Secondary","Danger","Disabled","RandomSize"];export{a as Basic,s as Danger,o as Disabled,r as Primary,n as RandomSize,e as Secondary,k as __namedExportsOrder,_ as default};
