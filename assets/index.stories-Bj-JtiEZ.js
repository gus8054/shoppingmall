import{S as s}from"./index-CSwRuuFq.js";import"./iframe-CDGzgA9E.js";import"./preload-helper-PPVm8Dsz.js";import"./image-DjX4fqcg.js";import"./use-merged-ref-Dv4IccwR.js";const p={title:"Atoms/ShapeImage",component:s,tags:["autodocs"],args:{shape:"square",width:320,height:320},argTypes:{shape:{options:["circle","square"],control:"radio",description:"이미지 형태",table:{type:{summary:"circle | square"},defaultValue:{summary:"square"}}},src:{control:"text",description:"이미지 URL",table:{type:{summary:"string"}}},alt:{control:"text",if:{arg:"src",truthy:!1},description:"대체 텍스트",table:{type:{summary:"string"}}},width:{control:"number",description:"가로폭",table:{type:{summary:"number"}}},height:{control:"number",description:"세로폭",table:{type:{summary:"number"}}}}},e={args:{src:"/images/sample/1.jpg",shape:"circle"}},r={args:{src:"/images/sample/1.jpg",shape:"square"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    src: "/images/sample/1.jpg",
    shape: "circle"
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    src: "/images/sample/1.jpg",
    shape: "square"
  }
}`,...r.parameters?.docs?.source}}};const i=["Circle","Square"];export{e as Circle,r as Square,i as __namedExportsOrder,p as default};
