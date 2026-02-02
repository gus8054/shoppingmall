import{r as o,j as i,a as v}from"./iframe-CDGzgA9E.js";import{B as q}from"./index-D6FLQ6KA.js";import{F as b}from"./index-Cwh1y6CM.js";import{D as h}from"./index-DWygYfj0.js";import{I as k}from"./index-Bj--E9kF.js";const j=v(b)`
  & > *:not(:first-child) {
    margin-top: 8px;
  }
`,I=({name:d,images:r=[],maximumNumber:s,hasError:p,width:u,height:c,onChange:t})=>{const f=s&&r.length<s?"block":"none",m=o.useCallback(n=>{const e=r.find(l=>l.src===n),a=r.filter(l=>l.src!==n);e&&(e.file&&e.src&&(URL.revokeObjectURL(e.src),delete e.src),t?.(a))},[r,t]),g=o.useCallback(n=>{const e=[];for(const a of n)!r.find(y=>y.file===a)&&(!s||r.length+e.length<s)&&e.push({file:a,src:URL.createObjectURL(a)});t?.([...r,...e])},[r,s,t]);return i.jsxs(j,{style:{flexDirection:"column"},children:[i.jsx(o.Activity,{mode:r?"visible":"hidden",children:r.map((n,e)=>i.jsx(k,{alt:n.id,src:n.src,height:c,onRemove:m},e))}),i.jsx(q,{style:{display:f},children:i.jsx(h,{acceptedFileTypes:["image/gif","image/jpeg","image/jpg","image/png"],name:d,height:c,width:u,hasError:p,onDrop:g})})]})};I.__docgenInfo={description:"입력 이미지",methods:[],displayName:"InputImages",props:{name:{required:!1,tsType:{name:"string"},description:""},images:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  id?: string;\r
  src?: string;\r
  file?: File;\r
  selected?: boolean;\r
  chosen?: boolean;\r
}`,signature:{properties:[{key:"id",value:{name:"string",required:!1}},{key:"src",value:{name:"string",required:!1}},{key:"file",value:{name:"File",required:!1}},{key:"selected",value:{name:"boolean",required:!1}},{key:"chosen",value:{name:"boolean",required:!1}}]}}],raw:"FileData[]"},description:"",defaultValue:{value:"[]",computed:!1}},maximumNumber:{required:!1,tsType:{name:"number"},description:""},hasError:{required:!1,tsType:{name:"boolean"},description:""},width:{required:!1,tsType:{name:"string"},description:""},height:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(images: FileData[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  id?: string;\r
  src?: string;\r
  file?: File;\r
  selected?: boolean;\r
  chosen?: boolean;\r
}`,signature:{properties:[{key:"id",value:{name:"string",required:!1}},{key:"src",value:{name:"string",required:!1}},{key:"file",value:{name:"File",required:!1}},{key:"selected",value:{name:"boolean",required:!1}},{key:"chosen",value:{name:"boolean",required:!1}}]}}],raw:"FileData[]"},name:"images"}],return:{name:"void"}}},description:""}}};export{I};
