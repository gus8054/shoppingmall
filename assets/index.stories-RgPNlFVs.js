import{j as n,r as p,a as d}from"./iframe-CDGzgA9E.js";import{S as m}from"./index-BjixTkDp.js";import{u,G as b,a as x}from"./index-B1aUc94V.js";import{B as g}from"./index-C49t8kUY.js";import"./preload-helper-PPVm8Dsz.js";import"./index-HunV23Ce.js";import"./breakpoint-DsEcWJkq.js";const y=d.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1200;
`,s=()=>{const e=u();return n.jsx(n.Fragment,{children:n.jsx(p.Activity,{mode:e?"visible":"hidden",children:n.jsx(y,{"data-testid":"global-spinner",children:n.jsx(m,{})})})})};s.__docgenInfo={description:"글로벌 스피너",methods:[],displayName:"GlobalSpinner"};const{expect:i,userEvent:S,waitFor:l,within:w}=__STORYBOOK_MODULE_TEST__,E={title:"Organisms/GlobalSpinner",component:s,tags:["autodocs"],decorators:[e=>n.jsx(b,{children:n.jsx(e,{})})]},a={render:function(){const t=x(),o=()=>{t(!0),setTimeout(()=>{t(!1)},3e3)};return n.jsxs(n.Fragment,{children:[n.jsx(s,{}),n.jsx(g,{onClick:o,children:"스피너 표시"})]})},play:async({canvasElement:e,step:t})=>{const o=w(e),r=o.getByTestId("global-spinner"),c=o.getByRole("button",{name:"스피너 표시"});await t("1. 초기 상태: 스피너가 숨겨져 있어야 한다",async()=>{await i(r).not.toBeVisible()}),await t("2. 버튼 클릭: 스피너가 나타나야 한다 (3초간 유지)",async()=>{await S.click(c),await l(()=>{i(r).toBeVisible()})}),await t("3. 5초 후 자동 숨김 확인",async()=>{await l(()=>{i(r).not.toBeVisible()},{timeout:5e3})})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  // 2. render 함수는 컴포넌트처럼 동작하므로 Hooks를 사용할 수 있습니다.
  render: function Render() {
    const setGlobalSpinner = useGlobalSpinnerActionsContext();
    const handleClick = () => {
      setGlobalSpinner(true);
      // 3초 후에 닫는다
      setTimeout(() => {
        setGlobalSpinner(false);
      }, 3000);
    };
    return <>\r
        <GlobalSpinner />\r
        <Button onClick={handleClick}>스피너 표시</Button>\r
      </>;
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);

    // 1. 요소 찾기
    // GlobalSpinnerWrapper는 position: fixed라서 canvas(Story Root) 밖으로 나갈 수도 있지만,
    // layout 설정에 따라 canvas 안에 있을 수도 있습니다.
    // 만약 못 찾는다면 canvasElement.ownerDocument.body 등으로 범위를 넓혀야 합니다.
    // 여기서는 data-testid로 찾습니다.
    const spinnerWrapper = canvas.getByTestId("global-spinner");
    const triggerButton = canvas.getByRole("button", {
      name: "스피너 표시"
    });
    await step("1. 초기 상태: 스피너가 숨겨져 있어야 한다", async () => {
      // Activity mode="hidden"일 때 화면에 보이지 않는지 확인
      await expect(spinnerWrapper).not.toBeVisible();
    });
    await step("2. 버튼 클릭: 스피너가 나타나야 한다 (3초간 유지)", async () => {
      await userEvent.click(triggerButton);

      // 상태 변경 후 리렌더링 대기
      await waitFor(() => {
        expect(spinnerWrapper).toBeVisible();
      });
    });

    // 참고: 5초 뒤 꺼지는 것을 테스트하려면 timeout 옵션을 늘려야 합니다.
    // 하지만 단위 테스트에서 5초 대기는 권장하지 않으므로 생략하거나,
    // render 함수의 setTimeout 시간을 prop으로 받아 짧게 조절하는 것이 좋습니다.

    await step("3. 5초 후 자동 숨김 확인", async () => {
      await waitFor(() => {
        expect(spinnerWrapper).not.toBeVisible();
      }, {
        timeout: 5000
      }); // 5초보다 길게 설정
    });
  }
}`,...a.parameters?.docs?.source}}};const _=["WithContextProvider"];export{a as WithContextProvider,_ as __namedExportsOrder,E as default};
