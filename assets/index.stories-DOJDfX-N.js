import{j as w}from"./iframe-CDGzgA9E.js";import{F as u}from"./index-C1jrqxe9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CpEbstW8.js";import"./index-HunV23Ce.js";import"./breakpoint-DsEcWJkq.js";import"./index-D6FLQ6KA.js";import"./styles-BeFhFhpp.js";import"./index-BDbDLZuO.js";import"./index-Cwh1y6CM.js";import"./index-iEeUj9Iw.js";const{useArgs:d}=__STORYBOOK_MODULE_PREVIEW_API__,{expect:e,fn:g,userEvent:r,waitFor:p,within:C}=__STORYBOOK_MODULE_TEST__,E={title:"Molecules/FilterGroup",component:u,tags:["autodocs"],args:{title:"카테고리 선택",items:[{label:"의류",name:"clothes"},{label:"책",name:"books"},{label:"전자제품",name:"electronics"}],value:[],onChange:g()},argTypes:{title:{control:"text",description:"제목",table:{type:{summary:"string"}}},items:{control:"object",description:"옵션 목록",table:{type:{summary:"array"}}},value:{control:"object",description:"선택된 값 배열",table:{type:{summary:"array"}}},onChange:{type:"function",description:"onChange 이벤트 핸들러",action:"change"}}},i={render:function(t){const[{value:n},a]=d(),o=c=>{a({value:c}),t.onChange?.(c)};return w.jsx(u,{...t,value:n,onChange:o})},play:async({canvasElement:h,step:t,args:n})=>{const a=C(h),o=a.getByText("의류"),c=a.getByText("책"),s=a.getByLabelText("의류",{selector:"input"}),l=a.getByLabelText("책",{selector:"input"});await t("1. 초기 렌더링 확인",async()=>{await e(a.getByText("카테고리 선택")).toBeInTheDocument(),await e(s).not.toBeChecked(),await e(l).not.toBeChecked()}),await t("2. '의류' 아이템 선택 (Label Click)",async()=>{await r.click(o),await p(async()=>{await e(s).toBeChecked(),await e(n.onChange).toHaveBeenCalledWith(["clothes"])})}),await t("3. '책' 아이템 추가 선택 (Multiple Check)",async()=>{await r.click(c),await p(async()=>{await e(s).toBeChecked(),await e(l).toBeChecked()}),await e(n.onChange).toHaveBeenCalledWith(["clothes","books"])}),await t("4. '의류' 아이템 해제 (Uncheck)",async()=>{await r.click(o),await p(async()=>{await e(s).not.toBeChecked(),await e(l).toBeChecked()}),await e(n.onChange).toHaveBeenCalledWith(["books"])})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  // 제어 컴포넌트 동작 구현
  render: function Render(args) {
    // 1. 스토리북의 현재 args(상태)를 가져옵니다.
    const [{
      value
    }, updateArgs] = useArgs();
    const handleChange = (newValue: string[]) => {
      // 2. 값이 변경되면 스토리북의 args를 업데이트하여 화면을 다시 그립니다.
      updateArgs({
        value: newValue
      });
      // 3. Actions 패널에 로그를 남기기 위해 기존 핸들러 호출
      args.onChange?.(newValue);
    };
    return <FilterGroup {...args} value={value} onChange={handleChange} />;
  },
  play: async ({
    canvasElement,
    step,
    args
  }) => {
    const canvas = within(canvasElement);

    // [핵심 변경 1] 숨겨진 input 대신, 클릭 가능한 '라벨 텍스트'를 찾습니다.
    // getByText는 눈에 보이는 텍스트 노드를 반환하므로 클릭이 가능합니다.
    const clothesLabel = canvas.getByText("의류");
    const booksLabel = canvas.getByText("책");

    // 검증을 위해 숨겨진 input 요소도 찾아둡니다 (hidden: true 옵션 필수)
    // 이것은 클릭용이 아니라, checked 상태 확인용입니다.
    const clothesInput = canvas.getByLabelText("의류", {
      selector: "input"
    });
    const booksInput = canvas.getByLabelText("책", {
      selector: "input"
    });
    await step("1. 초기 렌더링 확인", async () => {
      await expect(canvas.getByText("카테고리 선택")).toBeInTheDocument();
      // 초기에는 체크되지 않은 상태여야 함
      await expect(clothesInput).not.toBeChecked();
      await expect(booksInput).not.toBeChecked();
    });
    await step("2. '의류' 아이템 선택 (Label Click)", async () => {
      // [핵심 변경 2] 눈에 보이는 라벨 텍스트를 클릭합니다.
      // Label > Text를 클릭하면 이벤트 버블링으로 인해 CheckBox의 onChange가 트리거됩니다.
      await userEvent.click(clothesLabel);
      await waitFor(async () => {
        // 검증: Input의 상태가 checked로 변했는지 확인
        await expect(clothesInput).toBeChecked();

        // 검증: onChange 핸들러 호출 확인
        await expect(args.onChange).toHaveBeenCalledWith(["clothes"]);
      });
    });
    await step("3. '책' 아이템 추가 선택 (Multiple Check)", async () => {
      await userEvent.click(booksLabel);
      await waitFor(async () => {
        // 검증: 둘 다 체크 상태
        await expect(clothesInput).toBeChecked();
        await expect(booksInput).toBeChecked();
      });

      // 검증: 데이터 누적 확인
      await expect(args.onChange).toHaveBeenCalledWith(["clothes", "books"]);
    });
    await step("4. '의류' 아이템 해제 (Uncheck)", async () => {
      await userEvent.click(clothesLabel);
      await waitFor(async () => {
        // 검증: 의류는 해제, 책은 유지
        await expect(clothesInput).not.toBeChecked();
        await expect(booksInput).toBeChecked();
      });

      // 검증: 데이터 제거 확인
      await expect(args.onChange).toHaveBeenCalledWith(["books"]);
    });
  }
}`,...i.parameters?.docs?.source}}};const O=["Standard"];export{i as Standard,O as __namedExportsOrder,E as default};
