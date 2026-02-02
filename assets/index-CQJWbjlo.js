import{r as a,j as o,a as s}from"./iframe-DX1DL66T.js";const i=s.div`
  height: 24px;
  color: #e5e7eb;
  display: flex;
  align-items: center;
  width: 100%;

  &::before,
  &::after {
    content: "";
    flex: 1;
    border-bottom: 1px solid #e5e7eb;
  }

  &::before {
    margin-right: calc(var(--separator-margin-right-before, 0) * 1px);
  }
  &::after {
    margin-left: calc(var(--separator-margin-left-after, 0) * 1px);
  }
`,n=({children:r})=>{const t=a.Children.count(r)>0,e={};return t&&(e["--separator-margin-right-before"]=8,e["--separator-margin-left-after"]=8),o.jsx(i,{style:e,children:r})};n.__docgenInfo={description:"",methods:[],displayName:"Separator",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""}}};export{n as S};
