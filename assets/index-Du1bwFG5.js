import{r as s,j as e,a as n}from"./iframe-DX1DL66T.js";import{T as w}from"./index-BBGL2l39.js";import{F as y}from"./index-DYK867Bv.js";import{t as a}from"./index-HunV23Ce.js";const j=n.div`
  position: relative;
  // height: 38px;
`,D=n.div`
  position: relative;
  overflow: hidden;
  background-color: #ffffff;
  border: 1px solid ${a.colors.border};

  &[data-has-error="true"] {
    border-color: ${a.colors.danger};
  }
  border-radius: 5px;
  outline: none;
  padding: 8px 52px 8px 12px;
  user-select: none;
  cursor: pointer;
`,k=n.div`
  color: ${a.colors.text};
`,q=n.div`
  color: #757575;
  font-size: ${a.fontSizes[1]};
  min-height: 20px;
  line-height: 20px;
`,T=n.div`
  border-color: #222222 transparent transparent;
  border-width: 5px 5px 0;
  &[data-is-open="true"] {
    border-color: transparent transparent transparent;
    border-width: 0 5px 5px;
  }
  border-style: solid;
  position: absolute;
  right: 10px;
  top: 16px;
`,E=n.div`
  background-color: #ffffff;
  border: 1px solid ${a.colors.border};
  box-shadow:
    0px 5px 5px -3px rgb(0 0 0 / 20%),
    0px 8px 10px 1px rgb(0 0 0 / 10%),
    0px 3px 14px 2px rgb(0 0 0 / 12%);
  // box-sizing: border-box;
  border-radius: 5px;
  margin-top: -1px;
  max-height: 200px;
  overflow-y: auto;
  position: absolute;
  top: 100%;
  width: 100%;
  z-index: 1000;
`,I=n.div`
  padding: 8px 12px 8px 12px;
  &:hover {
    background-color: #f9f9f9;
  }
`,c=({item:o})=>e.jsx(y,{style:{alignItems:"center"},children:e.jsx(w,{variant:"small",children:o.label??o.value})}),C=({options:o,value:m,name:x,placeholder:f,hasError:g,onChange:b})=>{const[i,d]=s.useState(!1),l=s.useRef(null),p=o.find(r=>r.value===m),h=()=>{d(r=>!r)},v=r=>{d(!1),b?.(r)},t=s.useCallback(r=>{const u=l.current;u&&!u.contains(r.target)&&d(!1)},[]);return s.useEffect(()=>(i&&(document.addEventListener("click",t),document.addEventListener("touchend",t)),()=>{document.removeEventListener("click",t),document.removeEventListener("touchend",t)}),[i,t]),e.jsxs(j,{ref:l,children:[e.jsxs(D,{"data-has-error":g,onClick:h,"data-testid":"dropdown-control",children:[p?e.jsx(k,{children:e.jsx(c,{item:p})}):e.jsx(q,{children:f}),e.jsx("input",{"data-testid":"dropdown-input",type:"hidden",name:x,value:p?.value??""}),e.jsx(T,{"data-is-open":i})]}),e.jsx(s.Activity,{mode:i?"visible":"hidden",children:e.jsx(E,{"data-testid":"dropdown-menu",children:o.map(r=>e.jsx(I,{onClick:()=>v(r),children:e.jsx(c,{item:r})},r.value))})})]})};C.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  value: string | number;\r
  label?: string;\r
}`,signature:{properties:[{key:"value",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}},{key:"label",value:{name:"string",required:!1}}]}}],raw:"DropdownItemType[]"},description:""},value:{required:!1,tsType:{name:"union",raw:"string | number | null",elements:[{name:"string"},{name:"number"},{name:"null"}]},description:""},name:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},hasError:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: DropdownItemType) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{\r
  value: string | number;\r
  label?: string;\r
}`,signature:{properties:[{key:"value",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}},{key:"label",value:{name:"string",required:!1}}]}},name:"item"}],return:{name:"void"}}},description:""}}};export{C as D};
