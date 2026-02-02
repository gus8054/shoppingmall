import{r as l,j as b,a as y}from"./iframe-DX1DL66T.js";import{t}from"./index-HunV23Ce.js";const p=24,n=10,i=10,a=1,$=y.textarea`
  color: ${t.colors.inputText};
  border: ${a}px solid ${t.colors.border};
  border-radius: 5px;
  outline: none;
  width: 100%;

  &[data-has-error="true"] {
    border-color: ${t.colors.danger};
  }

  line-height: 24px;
  padding-top: ${n}px;
  padding-bottom: ${i}px;
  padding-inline: 12px;
  resize: none;
  &::placeholder {
    color: ${t.colors.placeholder};
  }
`,A=({minRows:d=5,maxRows:u=10,hasError:h=!1,value:x,onChange:m,...o})=>{const c=l.useRef(null),f=d*p+n+i+a*2,r=u*p+n+i+a*2,s=l.useCallback(()=>{const e=c.current;if(!e)return;e.style.height="auto";const T=e.scrollHeight+a;e.style.height=`${Math.min(r,T)}px`},[r]),g=e=>{s(),m?.(e)};return l.useEffect(()=>{s()},[s]),b.jsx($,{ref:c,rows:d,onChange:g,value:x,"data-has-error":h,"aria-label":o["aria-label"]||o.placeholder,style:{minHeight:f,maxHeight:r},"data-testid":"textarea",...o})};A.__docgenInfo={description:"",methods:[],displayName:"TextArea",props:{minRows:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"5",computed:!1}},maxRows:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"10",computed:!1}},hasError:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};export{A as T};
