import{j as r}from"./iframe-DX1DL66T.js";import{L as u}from"./index-B0GHn6yD.js";import{F as c}from"./index-DYK867Bv.js";import{t as s}from"./index-HunV23Ce.js";import{B as n}from"./index-Bc7kkt5d.js";import{B as g}from"./index-CqcdOydM.js";import{B as l}from"./index-CyuEUWs9.js";import{T as x}from"./index-BBGL2l39.js";import{C as y}from"./index-WZKs94F3.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BcQrVmYF.js";import"./link-BYqRWSI0.js";import"./use-merged-ref-CTM7XOGm.js";import"./index-B4nsSBpD.js";import"./image-tM7Ss0e2.js";import"./index-DJSC04U8.js";import"./breakpoint-DsEcWJkq.js";import"./index-CeZbahUD.js";import"./index-Bby81AOW.js";import"./index-Clfr_93Y.js";import"./index-BfiTq1cO.js";import"./index-DppskLWb.js";import"./index-CQJWbjlo.js";import"./index-BcEcySLt.js";import"./styles-BeFhFhpp.js";function d({cart:e=[]}){return r.jsx(u,{children:r.jsx(c,{style:{paddingBlock:`${s.space.medium}px`,paddingInline:`${s.space.large}px`,justifyContent:"center",flexDirection:"column"},children:r.jsxs(n,{children:[r.jsxs(g,{children:[r.jsx(l,{href:"/",children:"홈"}),r.jsx(l,{href:"#",children:"카트"})]}),r.jsxs(n,{children:[r.jsx(x,{style:{display:"block",marginBlock:`${s.space.large}px`},variant:"large",as:"h1",children:"카트"}),r.jsx(c,{style:{flexDirection:"column",gap:`${s.space.large}px`},children:e.map(t=>r.jsx(y,{id:t.id,imageUrl:t.imageUrl,title:t.title,price:t.price,onRemoveButtonClick:()=>{},onBuyButtonClick:()=>{}},t.id))})]})]})})})}d.__docgenInfo={description:"",methods:[],displayName:"CartTemplate",props:{cart:{required:!1,tsType:{name:"Array",elements:[{name:"Product"}],raw:"Product[]"},description:"",defaultValue:{value:"[]",computed:!1}}}};const m={id:1,username:"shopper",displayName:"쇼핑왕",email:"shopper@example.com",profileImageUrl:"images/sample/1.jpg",description:"쇼핑을 좋아합니다."},p=[{id:205,category:"book",title:"행동",description:"필독서",imageUrl:"images/books/5.jpg",blurDataUrl:"",price:3e4,condition:"new",owner:m},{id:206,category:"book",title:"ETF",description:"필독서",imageUrl:"images/books/6.jpg",blurDataUrl:"",price:3e4,condition:"new",owner:m},{id:101,category:"clothes",title:"빈티지 데님 자켓",description:"상태 좋은 자켓입니다.",imageUrl:"images/clothes/1.jpg",blurDataUrl:"",price:35e3,condition:"used",owner:m},{id:102,category:"clothes",title:"여름용 린넨 셔츠",description:"시원해요.",imageUrl:"images/clothes/2.png",blurDataUrl:"",price:2e4,condition:"new",owner:m}],O={title:"Templates/CartTemplate",component:d,parameters:{layout:"fullscreen",nextjs:{appDirectory:!0}},args:{cart:p}},o={},a={args:{cart:[]}},i={args:{cart:[...p,...p.map(e=>({...e,id:e.id+10})),...p.map(e=>({...e,id:e.id+20}))]}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source},description:{story:`1. 기본 상태 (상품이 담겨 있을 때)\r
- 장바구니에 담긴 상품 리스트가 렌더링되는지 확인`,...o.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    cart: []
  }
}`,...a.parameters?.docs?.source},description:{story:`2. 빈 장바구니 상태 (Empty State)\r
- cart props가 빈 배열일 때 UI 확인\r
- 현재 컴포넌트에는 '장바구니가 비었습니다' 같은 별도 UI가 없으므로,\r
제목만 나오고 리스트가 없는 상태가 정상입니다.`,...a.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    // 기존 아이템을 3번 복제하여 리스트를 늘림
    cart: [...mockCartItems, ...mockCartItems.map(p => ({
      ...p,
      id: p.id + 10
    })), ...mockCartItems.map(p => ({
      ...p,
      id: p.id + 20
    }))]
  }
}`,...i.parameters?.docs?.source},description:{story:`3. 많은 상품이 담긴 상태\r
- 스크롤이 생길 정도로 많은 상품이 있을 때 레이아웃 확인`,...i.parameters?.docs?.description}}};const V=["Default","EmptyCart","ManyItems"];export{o as Default,a as EmptyCart,i as ManyItems,V as __namedExportsOrder,O as default};
