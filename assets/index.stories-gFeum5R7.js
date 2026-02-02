import{j as l,a as p}from"./iframe-Cc9-bgm5.js";import{P as g}from"./index-CebTjxoL.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CL8MZzlg.js";import"./image-DqrJi8nv.js";import"./use-merged-ref-BtNus-4z.js";import"./index-DQwQPlad.js";import"./index-HunV23Ce.js";import"./breakpoint-DsEcWJkq.js";import"./index-E1Q3WhCu.js";import"./styles-BeFhFhpp.js";const{expect:t,within:m}=__STORYBOOK_MODULE_TEST__,y=p.div`
  width: 400px;
  heigh: 400px;
`,R={title:"Organisms/ProductCard",component:g,tags:["autodocs"],argTypes:{title:{control:{type:"text"},description:"상품명",table:{type:{summary:"string"}}},price:{control:{type:"number"},description:"상품 가격",table:{type:{summary:"number"}}},imageUrl:{control:{type:"text"},description:"상품 이미지 URL",table:{type:{summary:"string"}}},blurDataUrl:{control:{type:"text"},description:"상품의 흐릿한 이미지의 데이터 URI 스킴",table:{type:{summary:"string"}}},variant:{options:["listing","small","detail"],control:{type:"radio"},description:"변경(표시 스타일)",table:{type:{summary:"listing | small | detail"},defaultValue:{summary:"listing"}}}},render:n=>l.jsx(y,{children:l.jsx(g,{...n})})},o={args:{variant:"listing",title:"멋진 신발",imageUrl:"images/shoes/3.jpg",price:2e4},play:async({canvasElement:n,step:i,args:a})=>{const e=m(n);await i("상품 이미지가 렌더링된다",async()=>{const s=e.getByRole("img");await t(s).toBeInTheDocument(),await t(s).toHaveAttribute("src",t.stringContaining(a.imageUrl))}),await i("상품명과 가격이 렌더링된다",async()=>{await t(e.getByRole("heading",{name:a.title})).toBeInTheDocument(),await t(e.getByText(`${a.price.toLocaleString()}원`)).toBeInTheDocument()})}},r={args:{variant:"small",title:"작은 멋진 신발",imageUrl:"images/shoes/3.jpg",price:2e4},play:async({canvasElement:n,step:i,args:a})=>{const e=m(n);await i("Small 모드에서도 상품 정보가 올바르게 표시된다",async()=>{const s=e.getByRole("img");await t(s).toBeInTheDocument(),await t(e.getByRole("heading",{name:a.title})).toBeInTheDocument(),await t(e.getByText(`${a.price.toLocaleString()}원`)).toBeInTheDocument()})}},c={args:{variant:"detail",title:"상세 페이지 신발",imageUrl:"images/shoes/3.jpg",price:2e4},play:async({canvasElement:n,step:i,args:a})=>{const e=m(n);await i("Detail 모드 상품 정보 확인",async()=>{const s=e.getByRole("img");await t(s).toBeInTheDocument(),await t(e.getByRole("heading",{name:a.title})).toBeInTheDocument(),await t(e.getByText(`${a.price.toLocaleString()}원`)).toBeInTheDocument()})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "listing",
    title: "멋진 신발",
    imageUrl: "images/shoes/3.jpg",
    price: 20000
  },
  play: async ({
    canvasElement,
    step,
    args
  }) => {
    const canvas = within(canvasElement);
    await step("상품 이미지가 렌더링된다", async () => {
      const image = canvas.getByRole("img");
      await expect(image).toBeInTheDocument();
      // Next.js Image 최적화 파라미터 무시하고 경로 확인
      await expect(image).toHaveAttribute("src", expect.stringContaining(args.imageUrl as string));
    });
    await step("상품명과 가격이 렌더링된다", async () => {
      // 제목 확인
      await expect(canvas.getByRole("heading", {
        name: args.title
      })).toBeInTheDocument();

      // 가격 확인 (20000 -> 20000원)
      // 컴포넌트 내부에서 {price}원 형태로 렌더링함 (toLocaleString 없음)
      await expect(canvas.getByText(\`\${args.price.toLocaleString()}원\`)).toBeInTheDocument();
    });
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "small",
    title: "작은 멋진 신발",
    imageUrl: "images/shoes/3.jpg",
    price: 20000
  },
  play: async ({
    canvasElement,
    step,
    args
  }) => {
    const canvas = within(canvasElement);
    await step("Small 모드에서도 상품 정보가 올바르게 표시된다", async () => {
      // 이미지 확인
      const image = canvas.getByRole("img");
      await expect(image).toBeInTheDocument();

      // 제목 확인 (Small 모드에서도 h2 태그 사용됨)
      await expect(canvas.getByRole("heading", {
        name: args.title
      })).toBeInTheDocument();

      // 가격 확인
      await expect(canvas.getByText(\`\${args.price.toLocaleString()}원\`)).toBeInTheDocument();
    });
  }
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "detail",
    title: "상세 페이지 신발",
    imageUrl: "images/shoes/3.jpg",
    price: 20000
  },
  play: async ({
    canvasElement,
    step,
    args
  }) => {
    const canvas = within(canvasElement);
    await step("Detail 모드 상품 정보 확인", async () => {
      const image = canvas.getByRole("img");
      await expect(image).toBeInTheDocument();
      await expect(canvas.getByRole("heading", {
        name: args.title
      })).toBeInTheDocument();
      await expect(canvas.getByText(\`\${args.price.toLocaleString()}원\`)).toBeInTheDocument();
    });
  }
}`,...c.parameters?.docs?.source}}};const U=["Listing","Small","Detail"];export{c as Detail,o as Listing,r as Small,U as __namedExportsOrder,R as default};
