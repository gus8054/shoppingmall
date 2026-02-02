import{I as m}from"./index-BVZwygx4.js";import"./iframe-DX1DL66T.js";import"./preload-helper-PPVm8Dsz.js";import"./index-HunV23Ce.js";const{expect:i,fn:l,userEvent:n,within:u}=__STORYBOOK_MODULE_TEST__,w={title:"Atoms/Input",component:m,tags:["autodocs"],args:{hasError:!1,hasBorder:!0,placeholder:"Placeholder",type:"text",onChange:l()},argTypes:{type:{options:["text","number","password"],control:{type:"radio"},description:"input 타입",table:{type:{summary:"string"}}},hasBorder:{control:{type:"boolean"},description:"테두리 유무 플래그",table:{type:{summary:"boolean"}}},hasError:{control:{type:"boolean"},description:"검증 오류 플래그",table:{type:{summary:"boolean"}}},placeholder:{control:{type:"text"},description:"플레이스 홀더",table:{type:{summary:"string"}}},value:{control:{type:"text"},description:"값",table:{type:{summary:"string"}}},onChange:{type:"function",description:"onChange 핸들러",action:"changed"}},play:async({canvasElement:p,step:c,args:d})=>{await c("change 이벤트 발생시 prop으로 전달받은 onChange 호출",async()=>{const t=u(p).getByTestId("input");await n.type(t,"1"),await i(d.onChange).toHaveBeenCalled(),await n.clear(t)})}},e={},r={args:{type:"number",placeholder:"123"}},a={args:{type:"password",placeholder:"password"}},o={args:{hasBorder:!0}},s={args:{hasError:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    type: "number",
    placeholder: "123"
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    type: "password",
    placeholder: "password"
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    hasBorder: true
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    hasError: true
  }
}`,...s.parameters?.docs?.source}}};const E=["TextType","NumberType","PasswordType","HasBorder","HasError"];export{o as HasBorder,s as HasError,r as NumberType,a as PasswordType,e as TextType,E as __namedExportsOrder,w as default};
