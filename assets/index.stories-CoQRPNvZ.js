import{j as e}from"./iframe-DX1DL66T.js";import{L as x}from"./link-BYqRWSI0.js";import{L as f}from"./index-B0GHn6yD.js";import{F as c}from"./index-DYK867Bv.js";import{t as i}from"./index-HunV23Ce.js";import{B as s}from"./index-Bc7kkt5d.js";import{B as h}from"./index-CqcdOydM.js";import{B as n}from"./index-CyuEUWs9.js";import{P as j}from"./index-BXYvIbTj.js";import{S as y}from"./index-CQJWbjlo.js";import{T as m}from"./index-BBGL2l39.js";import{U as b}from"./index-CUbv00_6.js";import{B as k}from"./index-DJSC04U8.js";import"./preload-helper-PPVm8Dsz.js";import"./use-merged-ref-CTM7XOGm.js";import"./index-BcQrVmYF.js";import"./index-B4nsSBpD.js";import"./image-tM7Ss0e2.js";import"./index-CeZbahUD.js";import"./index-Bby81AOW.js";import"./index-Clfr_93Y.js";import"./index-BfiTq1cO.js";import"./index-DppskLWb.js";import"./index-BcEcySLt.js";import"./styles-BeFhFhpp.js";import"./breakpoint-DsEcWJkq.js";import"./index-Cr6iHytw.js";const U={book:"책",shoes:"신발",clothes:"의류"};function l({product:r}){return e.jsx(f,{children:e.jsxs(c,{style:{paddingBlock:`${i.space.medium}px`,paddingInline:`${i.space.large}px`,marginBottom:`${i.space.extraLarge}px`,justifyContent:"center",flexDirection:{base:"column",md:"row"},gap:`${i.space.extraLarge}px`},children:[e.jsxs(s,{children:[e.jsxs(h,{children:[e.jsx(n,{href:"/",children:"홈"}),e.jsx(n,{href:"/search",children:"검색"}),e.jsx(n,{href:`/search/${r.category}`,children:U[r.category]}),e.jsx(n,{href:"#",children:r.title})]}),e.jsx(c,{style:{paddingBlock:`${i.space.medium}px`,justifyContent:"stretch"},children:e.jsx(j,{variant:"detail",title:r.title,price:r.price,imageUrl:r.imageUrl})}),e.jsx(y,{}),e.jsxs(s,{style:{paddingTop:`${i.space.small}px`},children:[e.jsx(m,{as:"h2",variant:"large",style:{marginBlock:`${i.space.medium}px`,display:"block"},children:"판매자"}),e.jsx(x,{href:`/users/${r.owner.id}`,children:e.jsx(b,{variant:"small",username:r.owner.username,profileImageUrl:r.owner.profileImageUrl,numberOfProducts:100})})]})]}),e.jsx(s,{style:{padding:`${i.space.large}px`},children:e.jsxs(c,{style:{justifyContent:"flex-start",flexDirection:"column",gap:`${i.space.extraLarge}px`},children:[e.jsx(s,{children:r.description.split(`
`).map((u,g)=>e.jsx(m,{as:"p",children:u},g))}),e.jsx(k,{style:{"--button-width":"100%","--button-width-md":"400px",height:"66px"},onClick:()=>{},children:"카트에 추가"})]})})]})})}l.__docgenInfo={description:"",methods:[],displayName:"ProductDetailTemplate",props:{product:{required:!0,tsType:{name:"Product"},description:""}}};const p={id:1,username:"seller_king",displayName:"판매왕",email:"seller@example.com",profileImageUrl:"images/userimage.jpg",description:"좋은 물건만 팝니다."},d={id:301,category:"shoes",title:"나이키 러닝화",description:"한 번 신었습니다.상태는 A급이며, 박스 포함입니다.직거래는 강남역에서 가능합니다.네고 문의는 정중히 사양합니다.",imageUrl:"images/shoes/3.jpg",blurDataUrl:"",price:89e3,condition:"used",owner:p},W={title:"Templates/ProductDetailTemplate",component:l,parameters:{layout:"fullscreen",nextjs:{appDirectory:!0}},args:{product:d}},t={},o={args:{product:{...d,title:"매우 긴 설명이 있는 상품",description:`이 상품에 대한 설명을 아주 길게 작성해보겠습니다.
줄바꿈이 제대로 되는지 확인해야 합니다.

1. 상품의 특징
- 아주 튼튼합니다.
- 디자인이 예쁩니다.
- 가격이 합리적입니다.

2. 주의사항
- 교환/환불 불가합니다.
- 신중하게 구매해주세요.

(반복 텍스트)
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}}},a={args:{product:{id:202,category:"book",title:"언어의 품격",description:"필독서",imageUrl:"images/books/2.jpg",blurDataUrl:"",price:3e4,condition:"new",owner:p}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source},description:{story:`1. 기본 상태\r
- 일반적인 상품 상세 페이지`,...t.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    product: {
      ...mockProduct,
      title: "매우 긴 설명이 있는 상품",
      description: \`이 상품에 대한 설명을 아주 길게 작성해보겠습니다.
줄바꿈이 제대로 되는지 확인해야 합니다.

1. 상품의 특징
- 아주 튼튼합니다.
- 디자인이 예쁩니다.
- 가격이 합리적입니다.

2. 주의사항
- 교환/환불 불가합니다.
- 신중하게 구매해주세요.

(반복 텍스트)
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\`
    }
  }
}`,...o.parameters?.docs?.source},description:{story:`2. 긴 설명 텍스트\r
- 설명이 매우 길 때 레이아웃이 깨지지 않는지 확인`,...o.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    product: {
      id: 202,
      category: "book",
      title: "언어의 품격",
      description: "필독서",
      imageUrl: "images/books/2.jpg",
      blurDataUrl: "",
      price: 30000,
      condition: "new",
      owner: mockUser
    }
  }
}`,...a.parameters?.docs?.source},description:{story:`3. 다른 카테고리 (책)\r
- Breadcrumb 경로와 텍스트가 '책'으로 잘 바뀌는지 확인`,...a.parameters?.docs?.description}}};const X=["Default","LongDescription","BookCategory"];export{a as BookCategory,t as Default,o as LongDescription,X as __namedExportsOrder,W as default};
