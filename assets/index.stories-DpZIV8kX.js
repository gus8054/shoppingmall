import{C as u}from"./index-WZKs94F3.js";import"./iframe-DX1DL66T.js";import"./preload-helper-PPVm8Dsz.js";import"./image-tM7Ss0e2.js";import"./use-merged-ref-CTM7XOGm.js";import"./link-BYqRWSI0.js";import"./index-DJSC04U8.js";import"./index-HunV23Ce.js";import"./breakpoint-DsEcWJkq.js";import"./index-BBGL2l39.js";import"./index-Bc7kkt5d.js";import"./styles-BeFhFhpp.js";import"./index-DYK867Bv.js";const{expect:t,fn:m,userEvent:r,within:p}=__STORYBOOK_MODULE_TEST__,D={title:"Organisms/CartProduct",component:u,tags:["autodocs"],argTypes:{id:{control:"number",description:"상품 ID",table:{type:{summary:"number"}}},title:{control:"text",description:"상품명",table:{type:{summary:"string"}}},imageUrl:{control:"text",description:"상품 이미지 URL",table:{type:{summary:"string"}}},price:{control:"number",description:"상품 가격",table:{type:{summary:"number"}}},onBuyButtonClick:{type:"function",description:"구입 버튼을 클릭했을 때의 이벤트 핸들러",action:"구입버튼 클릭 핸들러"},onRemoveButtonClick:{type:"function",description:"삭제 버튼을 클릭했을 때의 이벤트 핸들러",action:"[삭제/카트에서 삭제] 버튼 클릭 핸들러"}}},o={args:{id:1,imageUrl:"images/shoes/3.jpg",title:"멋진 신발",price:32e3,onBuyButtonClick:m(),onRemoveButtonClick:m()},play:async({canvasElement:c,step:n,args:i})=>{const a=p(c);await n("상품 정보가 올바르게 표시된다",async()=>{await t(a.getByText("멋진 신발")).toBeInTheDocument(),await t(a.getByText("32,000원")).toBeInTheDocument();const e=a.getByRole("img");await t(e).toHaveAttribute("src",t.stringContaining("images/sample/1.jpg"))}),await n("구입 버튼 클릭 시 핸들러가 호출된다",async()=>{const e=a.getByRole("button",{name:"구입"});await r.click(e),await t(i.onBuyButtonClick).toHaveBeenCalledWith(1)}),await n("삭제 텍스트(Desktop) 클릭 시 핸들러가 호출된다",async()=>{const e=a.getByText("카트에서 삭제");await t(e).toBeVisible(),await r.click(e),await t(i.onRemoveButtonClick).toHaveBeenCalledWith(1)})}},s={args:{...o.args},globals:{viewport:{value:"mobile1",isRotated:!1}},play:async({canvasElement:c,step:n,args:i})=>{const a=p(c);await n("모바일에서는 '삭제' 버튼이 표시되고 작동해야 한다",async()=>{const e=a.queryByText("카트에서 삭제");e&&await t(e).not.toBeVisible();const l=a.getByRole("button",{name:"삭제"});await t(l).toBeVisible(),await r.click(l),await t(i.onRemoveButtonClick).toHaveBeenCalledWith(1)})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    id: 1,
    imageUrl: "images/shoes/3.jpg",
    title: "멋진 신발",
    price: 32000,
    onBuyButtonClick: fn(),
    onRemoveButtonClick: fn()
  },
  play: async ({
    canvasElement,
    step,
    args
  }) => {
    const canvas = within(canvasElement);
    await step("상품 정보가 올바르게 표시된다", async () => {
      // 제목 확인
      await expect(canvas.getByText("멋진 신발")).toBeInTheDocument();
      // 가격 포맷팅 확인 (32000 -> 32,000원)
      await expect(canvas.getByText("32,000원")).toBeInTheDocument();

      // 이미지 렌더링 확인
      const image = canvas.getByRole("img");
      await expect(image).toHaveAttribute("src", expect.stringContaining("images/sample/1.jpg"));
    });
    await step("구입 버튼 클릭 시 핸들러가 호출된다", async () => {
      const buyButton = canvas.getByRole("button", {
        name: "구입"
      });
      await userEvent.click(buyButton);
      // ID(1)과 함께 호출되었는지 확인
      await expect(args.onBuyButtonClick).toHaveBeenCalledWith(1);
    });
    await step("삭제 텍스트(Desktop) 클릭 시 핸들러가 호출된다", async () => {
      // Desktop 뷰에서는 "삭제" 버튼은 숨겨지고 "카트에서 삭제" 텍스트가 보입니다.
      // 따라서 텍스트를 클릭하여 테스트합니다.
      const removeText = canvas.getByText("카트에서 삭제");

      // 화면에 보이는지 확인 (display: block 인지)
      await expect(removeText).toBeVisible();
      await userEvent.click(removeText);
      await expect(args.onRemoveButtonClick).toHaveBeenCalledWith(1);
    });
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...DesktopView.args
  },
  globals: {
    // 👇 Set viewport for all component stories
    viewport: {
      value: "mobile1",
      isRotated: false
    }
  },
  play: async ({
    canvasElement,
    step,
    args
  }) => {
    const canvas = within(canvasElement);
    await step("모바일에서는 '삭제' 버튼이 표시되고 작동해야 한다", async () => {
      // 모바일에서는 "카트에서 삭제" 텍스트가 숨겨져야 함
      const removeText = canvas.queryByText("카트에서 삭제");
      // 요소는 존재하지만 display: none 상태일 수 있으므로 not.toBeVisible() 사용
      if (removeText) await expect(removeText).not.toBeVisible();

      // 대신 "삭제" 버튼(Danger Variant)이 보여야 함
      const removeButton = canvas.getByRole("button", {
        name: "삭제"
      });
      await expect(removeButton).toBeVisible();
      await userEvent.click(removeButton);
      await expect(args.onRemoveButtonClick).toHaveBeenCalledWith(1);
    });
  }
}`,...s.parameters?.docs?.source}}};const V=["DesktopView","MobileView"];export{o as DesktopView,s as MobileView,V as __namedExportsOrder,D as default};
