import{S as l}from"./index-CPFzs5F8.js";import"./iframe-Cc9-bgm5.js";import"./preload-helper-PPVm8Dsz.js";import"./index.esm-CUakne-n.js";import"./index-D3KhzZZf.js";import"./index-HunV23Ce.js";import"./breakpoint-DsEcWJkq.js";import"./index-Bp6lTtfk.js";import"./index-DQwQPlad.js";import"./index-E1Q3WhCu.js";import"./styles-BeFhFhpp.js";const{expect:t,fn:y,userEvent:o,within:u}=__STORYBOOK_MODULE_TEST__,f={title:"Organisms/SigninForm",component:l,tags:["autodocs"],args:{onSignin:y()},argTypes:{onSignin:{description:"로그인 버튼을 클릭했을 때의 이벤트 핸들러",table:{type:{summary:"function"}},action:"onSignin"}}},e={play:async({canvasElement:r,args:s})=>{const n=u(r),i=n.getByRole("button",{name:"로그인"});await o.click(i);const c=await n.findByText("사용자명은 필수입니다"),p=await n.findByText("비밀번호는 필수입니다");await t(c).toBeInTheDocument(),await t(p).toBeInTheDocument(),await t(s.onSignin).not.toHaveBeenCalled()}},a={play:async({canvasElement:r,args:s})=>{const n=u(r),i=n.getByPlaceholderText("사용자명");await o.type(i,"testuser");const c=n.getByPlaceholderText("비밀번호");await o.type(c,"password123");const p=n.getByRole("button",{name:"로그인"});await o.click(p);const m=n.queryByText("사용자명은 필수입니다"),d=n.queryByText("비밀번호는 필수입니다");t(m).not.toBeInTheDocument(),t(d).not.toBeInTheDocument(),await t(s.onSignin).toHaveBeenCalledWith("testuser","password123")}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);

    // 1. 제출 버튼 클릭
    const submitButton = canvas.getByRole("button", {
      name: "로그인"
    });
    await userEvent.click(submitButton);

    // 2. 유효성 검사 에러 메시지 확인
    // react-hook-form의 검증은 비동기로 일어나므로 findByText를 사용해 기다립니다.
    const usernameError = await canvas.findByText("사용자명은 필수입니다");
    const passwordError = await canvas.findByText("비밀번호는 필수입니다");
    await expect(usernameError).toBeInTheDocument();
    await expect(passwordError).toBeInTheDocument();

    // 3. 핸들러가 호출되지 않았는지 확인
    await expect(args.onSignin).not.toHaveBeenCalled();
  }
}`,...e.parameters?.docs?.source},description:{story:"시나리오 1: 아무것도 입력하지 않고 제출했을 때 (유효성 검사 테스트)",...e.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);

    // 1. 사용자명 입력
    // placeholder를 기준으로 요소를 찾습니다.
    const usernameInput = canvas.getByPlaceholderText("사용자명");
    await userEvent.type(usernameInput, "testuser");

    // 2. 비밀번호 입력
    const passwordInput = canvas.getByPlaceholderText("비밀번호");
    await userEvent.type(passwordInput, "password123");

    // 3. 제출 버튼 클릭
    const submitButton = canvas.getByRole("button", {
      name: "로그인"
    });
    await userEvent.click(submitButton);

    // 4. 에러 메시지가 없는지 확인 (queryByText는 없으면 null 반환)
    const usernameError = canvas.queryByText("사용자명은 필수입니다");
    const passwordError = canvas.queryByText("비밀번호는 필수입니다");
    expect(usernameError).not.toBeInTheDocument();
    expect(passwordError).not.toBeInTheDocument();

    // 5. onSignin 핸들러가 입력한 값과 함께 호출되었는지 확인
    await expect(args.onSignin).toHaveBeenCalledWith("testuser", "password123");
  }
}`,...a.parameters?.docs?.source},description:{story:"시나리오 2: 올바른 값을 입력하고 제출했을 때 (성공 테스트)",...a.parameters?.docs?.description}}};const D=["ValidationError","ValidLogin"];export{a as ValidLogin,e as ValidationError,D as __namedExportsOrder,f as default};
