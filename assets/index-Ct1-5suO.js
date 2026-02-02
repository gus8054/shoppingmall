import{j as e,a as i}from"./iframe-DX1DL66T.js";import{a as p}from"./index-CeZbahUD.js";import{B as c}from"./index-Bc7kkt5d.js";import{F as m}from"./index-DYK867Bv.js";const l=i(c)`
  position: relative;
  background-color: #d2d2d2;
`,g=i.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  object-fit: contain;
`,u=i(m)`
  position: absolute;
  top: 0;
  right: 0;
  width: 30px;
  height: 30px;
  border-radius: 0 6px 0 6px;
  background-color: rgba(44, 44, 44, 0.66);
  cursor: pointer;
  align-items: center;
  justify-content: center;
`,f=({src:t,alt:o,height:n,width:s,onRemove:a})=>{const d=r=>{r.stopPropagation(),r.preventDefault(),t&&a?.(t)};return e.jsxs(l,{style:{height:n,width:s},children:[e.jsx(g,{src:t,alt:o??"image"}),e.jsx(u,{onClick:d,"data-testid":"remove-button",children:e.jsx(p,{width:24,height:24,color:"white"})})]})};f.__docgenInfo={description:"이미지 미리보기",methods:[],displayName:"ImagePreview",props:{src:{required:!1,tsType:{name:"string"},description:""},alt:{required:!1,tsType:{name:"string"},description:""},height:{required:!1,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"string"},description:""},onRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"(src: string) => void",signature:{arguments:[{type:{name:"string"},name:"src"}],return:{name:"void"}}},description:""}}};export{f as I};
