import{r,j as n,a as u}from"./iframe-Cc9-bgm5.js";import{C as k}from"./index-DSH215dh.js";import{t as o}from"./index-HunV23Ce.js";import{T}from"./index-DQwQPlad.js";const w=a=>"dataTransfer"in a,q=a=>a instanceof HTMLInputElement,m=a=>w(a)?Array.from(a.dataTransfer.files):q(a.target)&&a.target.files?Array.from(a.target.files):[],E=u.div`
  border: 1px dashed ${o.colors.border};
  &[data-is-focused="true"] {
    border-color: ${o.colors.black};
  }
  &[data-has-error="true"] {
    border-color: ${o.colors.danger};
  }

  border-radius: 8px;
  cursor: pointer;
`,z=u.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  /* 마우스 이벤트를 무시하게 만듦 */
  pointer-events: none;
`,I=u.input`
  display: none;
`,A=({name:a,acceptedFileTypes:s=["image/png","image/jpeg","image/jpg","image/gif"],width:f="100%",height:g="200px",hasError:v=!1,onDrop:p,onChange:d})=>{const[h,i]=r.useState(!1),c=r.useRef(null),l=r.useCallback(e=>{const t=e.filter(F=>s.includes(F.type));e.length>0&&t.length===0&&console.warn("지원하지 않은 형식입니다"),p?.(t),d?.(t)},[s,d,p]),y=r.useCallback(e=>{e.preventDefault(),i(!0)},[]),D=r.useCallback(e=>{e.preventDefault(),i(!1)},[]),j=r.useCallback(e=>{e.preventDefault()},[]),x=r.useCallback(e=>{e.preventDefault(),i(!1);const t=m(e);l(t)},[l]),b=r.useCallback(()=>{c.current?.click()},[]),C=r.useCallback(e=>{e.preventDefault(),i(!1);const t=m(e);l(t),e.target.value=""},[l]);return n.jsxs(E,{onDrop:x,onDragEnter:y,onDragOver:j,onDragLeave:D,onClick:b,"data-is-focused":h,"data-has-error":v,style:{width:f,height:g},children:[n.jsx(I,{type:"file",ref:c,name:a,accept:s.join(","),onChange:C,multiple:!0,"data-testid":"dropzone-input"}),n.jsxs(z,{children:[n.jsx(k,{width:24,height:24}),n.jsx(T,{variant:"small",children:"기기에서 업로드"})]})]})};A.__docgenInfo={description:`드롭존\r
파일의 입력을 받는다`,methods:[],displayName:"Dropzone",props:{name:{required:!1,tsType:{name:"string"},description:""},acceptedFileTypes:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:`| "image/png"\r
| "image/jpeg"\r
| "image/jpg"\r
| "image/gif"\r
| "video/mp4"\r
| "video/quicktime"\r
| "application/pdf"`,elements:[{name:"literal",value:'"image/png"'},{name:"literal",value:'"image/jpeg"'},{name:"literal",value:'"image/jpg"'},{name:"literal",value:'"image/gif"'},{name:"literal",value:'"video/mp4"'},{name:"literal",value:'"video/quicktime"'},{name:"literal",value:'"application/pdf"'}]}],raw:"FileType[]"},description:"",defaultValue:{value:'["image/png", "image/jpeg", "image/jpg", "image/gif"]',computed:!1}},width:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"100%"',computed:!1}},height:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"200px"',computed:!1}},hasError:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onDrop:{required:!1,tsType:{name:"signature",type:"function",raw:"(files: File[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"File"}],raw:"File[]"},name:"files"}],return:{name:"void"}}},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(files: File[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"File"}],raw:"File[]"},name:"files"}],return:{name:"void"}}},description:""}}};export{A as D};
