import{T as m}from"./index-_YNy_pbL.js";import"./iframe-Cc9-bgm5.js";import"./preload-helper-PPVm8Dsz.js";import"./index-HunV23Ce.js";const{expect:p,fn:i,userEvent:t,within:l}=__STORYBOOK_MODULE_TEST__,w={title:"Atoms/TextArea",component:m,tags:["autodocs"],args:{minRows:5,maxRows:10,hasError:!1,onChange:i()},argTypes:{placeholder:{control:"text",description:"플레이스홀더",table:{type:{summary:"string"}}},minRows:{control:"number",description:"최소 행 수",table:{type:{summary:"number"}}},maxRows:{control:"number",description:"최대 행 수",table:{type:{summary:"number"}}},hasError:{control:"boolean",description:"변형 에러 플래그",table:{type:{summary:"boolean"}}},onChange:{type:"function",description:"onChange 이벤트 핸들러",table:{type:{summary:"function"}},action:"changed"}},play:async({args:s,canvasElement:n,step:c})=>{await c("change 이벤트 발생시 prop으로 받은 onChange 핸들러 호출",async()=>{const o=l(n).getByTestId("textarea");await t.type(o,"t"),await p(s.onChange).toHaveBeenCalled(),await t.clear(o)})}},r={args:{placeholder:"placeholder"}},e={name:"Error",args:{hasError:!0}},a={args:{minRows:10,maxRows:10}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "placeholder"
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Error",
  // 사이드바에 'Error'로 표시됨
  args: {
    hasError: true
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    minRows: 10,
    maxRows: 10
  }
}`,...a.parameters?.docs?.source}}};const E=["Normal","ErrorStory","BigArea"];export{a as BigArea,e as ErrorStory,r as Normal,E as __namedExportsOrder,w as default};
