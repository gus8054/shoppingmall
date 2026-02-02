import{j as t,a as s}from"./iframe-DX1DL66T.js";import{S as m}from"./index-Cr6iHytw.js";import{T as i}from"./index-BBGL2l39.js";import{B as o}from"./index-Bc7kkt5d.js";import{t as e}from"./index-HunV23Ce.js";const p=s.div`
  position: relative;
  width: 100%;
`,c=s.div`
  width: 100%;
  z-index: 99;
  position: relative;
  &[data-variant="listing"] {
    min-width: 240px;
    height: 240px;
  }
  &[data-variant="small"] {
    min-width: 160px;
    height: 160px;
  }
  &[data-variant="detail"] {
    min-width: 540px;
    height: 540px;
  }
`,x=s.div`
  position: absolute;
  z-index: 100;
  top: 0px;
  left: 0px;
`,g=({title:n,price:l,imageUrl:r,blurDataUrl:d,variant:a="listing"})=>t.jsxs(p,{children:[a!=="small"&&t.jsx(x,{children:t.jsxs(o,{style:{backgroundColor:"rgba(255,255,255,0.7)",padding:`${e.space.small}px`},children:[t.jsx(i,{as:"h2",style:{"--text-font-size":`${e.fontSizes.medium}px`,"--text-font-size-md":`${e.fontSizes.mediumLarge}px`,"--text-letter-spacing":`${e.letterSpacings.medium}px`,"--text-letter-spacing-md":`${e.letterSpacings.mediumLarge}px`,"--text-line-height":`${e.lineHeights.medium}px`,"--text-line-height-md":`${e.lineHeights.mediumLarge}px`,display:"block",margin:0,paddingInline:e.space.medium,paddingBlock:0,fontWeight:"bold"},children:n}),t.jsxs(i,{variant:"medium",as:"span",style:{"--text-font-size":`${e.fontSizes.small}px`,"--text-font-size-md":`${e.fontSizes.medium}px`,"--text-letter-spacing":`${e.letterSpacings.small}px`,"--text-letter-spacing-md":`${e.letterSpacings.medium}px`,"--text-line-height":`${e.lineHeights.small}px`,"--text-line-height-md":`${e.lineHeights.medium}px`,paddingInline:e.space.medium,paddingBlock:0,margin:0},children:[l.toLocaleString(),"원"]})]})}),t.jsx(c,{"data-variant":a,children:d?t.jsx(m,{alt:"product card image",src:r,placeholder:"blur",blurDataURL:d,style:{objectFit:"cover"}}):t.jsx(m,{alt:"product card image",src:r,style:{objectFit:"cover"}})}),a==="small"&&t.jsxs(o,{style:{marginTop:`${e.space.small}px`},children:[t.jsx(i,{as:"h2",variant:"medium",style:{margin:e.space.extraSmall,padding:e.space.extraSmall,fontWeight:"bold"},children:n}),t.jsxs(i,{as:"span",variant:"small",children:[l.toLocaleString(),"원"]})]})]});g.__docgenInfo={description:"상품 카드",methods:[],displayName:"ProductCard",props:{title:{required:!0,tsType:{name:"string"},description:""},price:{required:!0,tsType:{name:"number"},description:""},imageUrl:{required:!0,tsType:{name:"string"},description:""},blurDataUrl:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"listing" | "small" | "detail"',elements:[{name:"literal",value:'"listing"'},{name:"literal",value:'"small"'},{name:"literal",value:'"detail"'}]},description:"",defaultValue:{value:'"listing"',computed:!1}}}};export{g as P};
