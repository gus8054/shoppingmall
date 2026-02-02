import{j as e,a as t}from"./iframe-Cc9-bgm5.js";import{B as u}from"./index-XrjHf75-.js";const d=t.div`
  position: relative;
  display: inline-flex;
  align-items: center;
`,p=t.div`
  position: absolute;
  top: -7px;
  right: -10px;
`,l=({IconButton:i,size:r=24,badgeContent:n,badgeBackgroundColor:o,iconBackgroundColor:a,onClick:s})=>e.jsxs(d,{children:[e.jsx(i,{width:r,height:r,backgroundColor:a,onClick:s}),n&&e.jsx(p,{"data-testid":"badge-wrapper",children:e.jsx(u,{content:n,backgroundColor:o})})]});l.__docgenInfo={description:"배지가 달린 아이콘 버튼",methods:[],displayName:"BadgeIconButton",props:{IconButton:{required:!0,tsType:{name:"ComponentType",elements:[{name:"signature",type:"object",raw:`{\r
  width: number;\r
  height: number;\r
  color?: string;\r
  backgroundColor?: string;\r
  borderRadius?: string;\r
  onClick?: () => void;\r
}`,signature:{properties:[{key:"width",value:{name:"number",required:!0}},{key:"height",value:{name:"number",required:!0}},{key:"color",value:{name:"string",required:!1}},{key:"backgroundColor",value:{name:"string",required:!1}},{key:"borderRadius",value:{name:"string",required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}}],raw:"ComponentType<IconButtonProp>"},description:""},badgeContent:{required:!1,tsType:{name:"number"},description:""},badgeBackgroundColor:{required:!1,tsType:{name:"string"},description:""},iconBackgroundColor:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"24",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};export{l as B};
