import{j as t,a as o,x as n}from"./iframe-DX1DL66T.js";const i=n`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,l=n`
  0% {
    stroke-dasharray: 1, 100;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 70, 100;
    stroke-dashoffset: -25;
  }
  100% {
    stroke-dasharray: 1, 100;
    stroke-dashoffset: -100;
  }
`,p=o.svg`
  width: calc(var(--spinner-size, 100) * 1px);
  height: calc(var(--spinner-size, 100) * 1px);
  color: var(--spinner-color, black);
  animation: ${i} 4s linear infinite;
  & .path {
    stroke: currentColor;
    stroke-linecap: round;
    stroke-width: calc(var(--spinner-stroke-width, 8) * 1px);
    animation: ${l} 2s ease-in-out infinite;
  }
`,c=({size:e=100,color:s,strokeWidth:a=8})=>{const r={};return e&&(r["--spinner-size"]=e),s&&(r["--spinner-color"]=s),a&&(r["--spinner-stroke-width"]=a),t.jsx(p,{style:r,viewBox:`0 0 ${e} ${e}`,role:"status","aria-label":"Loading",children:t.jsx("circle",{className:"path",cx:e/2,cy:e/2,r:e/2-a/2,fill:"none",pathLength:"100"})})};c.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"100",computed:!1}},color:{required:!1,tsType:{name:"string"},description:""},strokeWidth:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"8",computed:!1}}}};export{c as S};
