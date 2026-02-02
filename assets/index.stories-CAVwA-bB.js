import{j as i}from"./iframe-CDGzgA9E.js";import{P as p}from"./index-DmwzJlyU.js";import{P as c}from"./index-DxX9Wpjq.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cwh1y6CM.js";import"./styles-BeFhFhpp.js";import"./breakpoint-DsEcWJkq.js";import"./index-HunV23Ce.js";import"./index-BMn-eKPd.js";import"./image-DjX4fqcg.js";import"./use-merged-ref-Dv4IccwR.js";import"./index-CpEbstW8.js";import"./index-D6FLQ6KA.js";const{expect:n,within:l}=__STORYBOOK_MODULE_TEST__,j={title:"Organisms/ProductCardCarousel",component:p,subcomponents:{ProductCard:c},tags:["autodocs"],parameters:{layout:"padded"}},s=[{id:1,title:"인간 관계론",price:1e4,imageUrl:"/images/books/1.jpg"},{id:2,title:"언어의 품격",price:2e4,imageUrl:"/images/books/2.jpg"},{id:3,title:"소통의 기술",price:3e4,imageUrl:"/images/books/3.jpg"},{id:4,title:"대화의 기술",price:4e4,imageUrl:"/images/books/4.jpg"},{id:5,title:"행동",price:4e4,imageUrl:"/images/books/5.jpg"},{id:6,title:"ETF",price:4e4,imageUrl:"/images/books/6.jpg"}],t={render:a=>i.jsx(p,{...a,children:s.map(e=>i.jsx(c,{title:e.title,price:e.price,imageUrl:e.imageUrl,variant:"small"},e.id))}),play:async({canvasElement:a,step:e})=>{const o=l(a);await e("모든 상품 카드가 렌더링되어야 한다",async()=>{const d=o.getAllByRole("heading");n(d).toHaveLength(s.length),n(o.getByRole("heading",{name:"Product 1"})).toBeInTheDocument(),n(o.getByRole("heading",{name:"Product 4"})).toBeInTheDocument()})}},r={globals:{viewport:"mobile1"},render:t.render,play:t.play};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  // render 함수를 사용하여 자식(children)을 직접 구성합니다.
  render: args => <ProductCardCarousel {...args}>\r
      {products.map(p =>
    // 캐러셀 아이템들이 찌그러지지 않도록 Box로 감싸고 min-width를 주는 것이 일반적입니다.
    // <Box key={p.id} style={{ flex: "0 0 240px", marginRight: "16px" }}>
    <ProductCard key={p.id} title={p.title} price={p.price} imageUrl={p.imageUrl} variant="small" />
    // </Box>
    )}\r
    </ProductCardCarousel>,
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step("모든 상품 카드가 렌더링되어야 한다", async () => {
      // 1. 모든 ProductCard의 제목(heading)을 찾습니다.
      const productHeadings = canvas.getAllByRole("heading");

      // 2. 전달한 데이터 개수(4개)만큼 렌더링되었는지 확인합니다.
      expect(productHeadings).toHaveLength(products.length);

      // 3. 첫 번째 상품과 마지막 상품이 잘 들어갔는지 텍스트 확인
      expect(canvas.getByRole("heading", {
        name: "Product 1"
      })).toBeInTheDocument();
      expect(canvas.getByRole("heading", {
        name: "Product 4"
      })).toBeInTheDocument();
    });
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  globals: {
    viewport: "mobile1"
  },
  render: Desktop.render,
  play: Desktop.play
}`,...r.parameters?.docs?.source}}};const D=["Desktop","Mobile"];export{t as Desktop,r as Mobile,D as __namedExportsOrder,j as default};
