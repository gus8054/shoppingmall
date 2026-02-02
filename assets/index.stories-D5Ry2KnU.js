import{j as b}from"./iframe-DX1DL66T.js";import{D as g}from"./index-Du1bwFG5.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BBGL2l39.js";import"./index-HunV23Ce.js";import"./breakpoint-DsEcWJkq.js";import"./index-DYK867Bv.js";import"./styles-BeFhFhpp.js";const{useArgs:y}=__STORYBOOK_MODULE_PREVIEW_API__,{expect:e,fn:_,userEvent:c,waitFor:w,within:m}=__STORYBOOK_MODULE_TEST__,O={title:"Molecules/Dropdown",component:g,tags:["autodocs"],args:{hasError:!1,placeholder:"항목을 선택해주세요",options:[{value:"apple",label:"사과"},{value:"banana",label:"바나나"},{value:"orange",label:"오렌지"},{value:"grape1",label:"포도"}],onChange:_()},argTypes:{options:{control:"object",description:"드롭다운 선택지 리스트"},value:{control:"text",description:"선택된 값 (Controlled prop)"},name:{control:"text",description:"input 요소의 name"},placeholder:{control:"text"},hasError:{control:"boolean"},onChange:{action:"changed"}},render:function(a){const[{value:s},t]=y(),o=r=>{t({value:r.value}),a.onChange?.(r)};return b.jsx(g,{...a,value:s,onChange:o})},play:async({canvas:n,step:a,args:s})=>{const t=n.getByTestId("dropdown-control"),o=n.getByTestId("dropdown-menu"),r=s.options[1];await a("클릭시 메뉴 open",async()=>{await c.click(t),await e(o).toBeVisible()}),await a("바깥 요소 클릭시 메뉴 close",async()=>{await c.click(document.body),await w(()=>{e(o).not.toBeVisible()})}),await a("다시 클릭시 메뉴 open",async()=>{await c.click(t),await e(o).toBeVisible()}),await a("메뉴 아이템 클릭시 메뉴 close",async()=>{const l=m(o).getByText(r.label);await c.click(l),await w(()=>{e(o).not.toBeVisible()})}),await a("선택한 아이템으로 변환",async()=>{const l=m(t).getByText(r.label);await e(l).toBeInTheDocument(),await e(l).toBeVisible();const h=m(t).getByTestId("dropdown-input");await e(h).toHaveValue(r.value)}),await a("prop으로 받은 onChange(item) 핸들러 호출",async()=>{await e(s.onChange).toHaveBeenCalledWith(r)})}},i={},p={args:{value:"banana"}},d={args:{hasError:!0}},u={args:{placeholder:"스크롤하여 선택하세요",options:Array.from({length:20},(n,a)=>({value:a,label:`${a}번 아이템`}))}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    value: "banana" // options에 있는 value와 일치해야 함
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    hasError: true
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "스크롤하여 선택하세요",
    options: Array.from({
      length: 20
    }, (_, k) => ({
      value: k,
      label: \`\${k}번 아이템\`
    }))
  }
}`,...u.parameters?.docs?.source}}};const S=["Normal","InitialValue","Error","Scrollable"];export{d as Error,p as InitialValue,i as Normal,u as Scrollable,S as __namedExportsOrder,O as default};
