import{j as e}from"./iframe-CDGzgA9E.js";import{L as y}from"./index-CTiA3zzx.js";import{F as g}from"./index-Cwh1y6CM.js";import{t as s}from"./index-HunV23Ce.js";import{B as a}from"./index-D6FLQ6KA.js";import{B as x}from"./index-Qlt9pp9M.js";import{B as p}from"./index-DKjQ4b84.js";import{L as h}from"./link-CBTWYtb5.js";import{U as T}from"./index-CuslZQ8w.js";import{S as B}from"./index-DBZyuCWk.js";import{P as f}from"./index-CMkWT_JE.js";import{P as U}from"./index-DxX9Wpjq.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B9FRpGlo.js";import"./index-C78pMRlf.js";import"./image-DjX4fqcg.js";import"./use-merged-ref-Dv4IccwR.js";import"./index-C49t8kUY.js";import"./breakpoint-DsEcWJkq.js";import"./index-iEeUj9Iw.js";import"./index-CSwRuuFq.js";import"./index-D03ueV-v.js";import"./index-B5-31sXg.js";import"./index-BjixTkDp.js";import"./index-B05QkCvJ.js";import"./index-CpEbstW8.js";import"./styles-BeFhFhpp.js";import"./index-DOAhUtaP.js";import"./index-BMn-eKPd.js";function l({user:t,products:o}){return e.jsx(y,{children:e.jsx(g,{style:{paddingBlock:`${s.space.medium}px`,paddingInline:`${s.space.large}px`,justifyContent:"center"},children:e.jsxs(a,{style:{width:"1180px"},children:[e.jsx(a,{style:{marginBottom:`${s.space.medium}px`},children:e.jsxs(x,{children:[e.jsx(p,{href:"/",children:"홈"}),e.jsx(p,{href:"#",children:t.username})]})}),e.jsxs(a,{children:[e.jsx(a,{style:{marginBottom:`${s.space.small}px`},children:e.jsx(T,{username:`${t.username} (${t.displayName})`,profileImageUrl:t.profileImageUrl,numberOfProducts:100,description:t.description})}),e.jsx(a,{style:{marginBottom:`${s.space.small}px`},children:e.jsx(B,{})}),e.jsx(f,{numberPerRow:6,numberPerRowForMobile:2,children:o?.map(r=>e.jsx("div",{children:e.jsx(h,{href:`/products/${r.id}`,style:{textDecoration:"none"},children:e.jsx(U,{variant:"small",title:r.title,price:r.price,imageUrl:r.imageUrl})})},r.id))})]})]})})})}l.__docgenInfo={description:"",methods:[],displayName:"UserTemplate",props:{user:{required:!0,tsType:{name:"User"},description:""},products:{required:!1,tsType:{name:"Array",elements:[{name:"Product"}],raw:"Product[]"},description:""}}};const{expect:m,within:d}=__STORYBOOK_MODULE_TEST__,n={id:1,username:"KDH user",displayName:"동현",email:"test@example.com",profileImageUrl:"/images/userimage.jpg",description:"안녕하세요! 동현샵의 동현입니다."},w=[{id:206,category:"book",title:"ETF",description:"필독서",imageUrl:"/images/books/6.jpg",blurDataUrl:"",price:3e4,condition:"new",owner:n},{id:101,category:"clothes",title:"빈티지 데님 자켓",description:"상태 좋은 자켓입니다.",imageUrl:"/images/clothes/1.jpg",blurDataUrl:"",price:35e3,condition:"used",owner:n},{id:102,category:"clothes",title:"여름용 린넨 셔츠",description:"시원해요.",imageUrl:"/images/clothes/2.png",blurDataUrl:"",price:2e4,condition:"new",owner:n},{id:103,category:"clothes",title:"빈티지 데님 자켓",description:"상태 좋은 자켓입니다.",imageUrl:"/images/clothes/3.png",blurDataUrl:"",price:35e3,condition:"used",owner:n},{id:104,category:"clothes",title:"여름용 린넨 셔츠",description:"시원해요.",imageUrl:"/images/clothes/4.png",blurDataUrl:"",price:2e4,condition:"new",owner:n},{id:105,category:"clothes",title:"빈티지 데님 자켓",description:"상태 좋은 자켓입니다.",imageUrl:"/images/clothes/5.jpg",blurDataUrl:"",price:35e3,condition:"used",owner:n},{id:106,category:"clothes",title:"여름용 린넨 셔츠",description:"시원해요.",imageUrl:"/images/clothes/6.jpg",blurDataUrl:"",price:2e4,condition:"new",owner:n}],X={title:"Templates/UserTemplate",component:l,parameters:{layout:"fullscreen",nextjs:{appDirectory:!0}},args:{user:n,products:w}},i={play:async({canvasElement:t})=>{const o=d(t);await m(o.getByText("story-user (스토리북유저)")).toBeInTheDocument(),await m(o.getByText("안녕하세요! Storybook으로 UI를 테스트하고 있습니다.")).toBeInTheDocument();const r=["멋진 운동화","따뜻한 겨울 코트","Next.js 완벽 가이드"];for(const u of r)await m(o.getByText(u)).toBeInTheDocument()}},c={args:{products:[]},play:async({canvasElement:t})=>{const o=d(t);await m(o.getByText("story-user (스토리북유저)")).toBeInTheDocument();const r=o.queryByText("멋진 운동화");await m(r).not.toBeInTheDocument()}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // 1-1. 사용자 프로필 정보 확인
    // username과 displayName이 합쳐진 텍스트를 찾습니다.
    await expect(canvas.getByText("story-user (스토리북유저)")).toBeInTheDocument();

    // description 확인
    await expect(canvas.getByText("안녕하세요! Storybook으로 UI를 테스트하고 있습니다.")).toBeInTheDocument();

    // 1-2. 상품 개수 확인 (mockProducts 길이만큼 렌더링 되었는지)
    // ProductCard의 제목으로 요소들을 찾습니다.
    const productTitles = ["멋진 운동화", "따뜻한 겨울 코트", "Next.js 완벽 가이드"];
    for (const title of productTitles) {
      await expect(canvas.getByText(title)).toBeInTheDocument();
    }
  }
}`,...i.parameters?.docs?.source},description:{story:`1. 기본 렌더링 테스트\r
- 사용자 정보가 올바르게 표시되는지 확인\r
- 상품 리스트가 렌더링되는지 확인`,...i.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    products: []
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // 사용자 정보는 여전히 보여야 함
    await expect(canvas.getByText("story-user (스토리북유저)")).toBeInTheDocument();

    // 상품 리스트 영역이 비어있는지 확인 (ProductCard가 없어야 함)
    // queryByText는 요소를 못 찾으면 null을 반환합니다. (getByText는 에러 발생)
    const productCard = canvas.queryByText("멋진 운동화");
    await expect(productCard).not.toBeInTheDocument();
  }
}`,...c.parameters?.docs?.source},description:{story:`2. 상품이 없는 경우 (Empty State)\r
- 상품이 없을 때 에러 없이 사용자 정보만 잘 나오는지 확인`,...c.parameters?.docs?.description}}};const Z=["Default","EmptyProducts"];export{i as Default,c as EmptyProducts,Z as __namedExportsOrder,X as default};
