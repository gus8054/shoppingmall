import{U as m}from"./index-CUbv00_6.js";import"./iframe-DX1DL66T.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bby81AOW.js";import"./image-tM7Ss0e2.js";import"./use-merged-ref-CTM7XOGm.js";import"./index-BBGL2l39.js";import"./index-HunV23Ce.js";import"./breakpoint-DsEcWJkq.js";import"./index-Bc7kkt5d.js";import"./styles-BeFhFhpp.js";import"./index-DYK867Bv.js";const{expect:e,within:c}=__STORYBOOK_MODULE_TEST__,f={title:"Organisms/UserProfile",component:m,tags:["autodocs"],argTypes:{variant:{options:["normal","small"],control:{type:"radio"},description:"변형(표시 스타일)",table:{type:{summary:"normal | small"},defaultValue:{summary:"normal"}}},username:{control:{type:"text"},description:"사용자명",table:{type:{summary:"string"}}},profileImageUrl:{control:{type:"text"},description:"사용자 이미지 URL",table:{type:{summary:"string"}}},numberOfProducts:{control:{type:"number"},description:"사용자 소유한 상품 수",table:{type:{summary:"number"}}},description:{control:{type:"text"},description:"사용자 설명",table:{type:{summary:"string"}}}}},s={args:{variant:"small",username:"테스트 사용자",profileImageUrl:"images/userimage.jpg",numberOfProducts:2e3,description:"샘플 텍스트"},play:async({canvasElement:o,step:n,args:t})=>{const a=c(o);await n("사용자명과 상품 개수 텍스트가 표시된다",async()=>{await e(a.getByText(t.username)).toBeInTheDocument(),await e(a.getByText(`${t.numberOfProducts}개 제품 게시 완료`)).toBeInTheDocument()}),await n("Small 모드에서는 설명(Description)이 렌더링되지 않는다",async()=>{const r=a.queryByText(t.description);await e(r).not.toBeInTheDocument()}),await n("프로필 이미지가 올바른 소스로 렌더링된다",async()=>{const r=a.getByRole("img");await e(r).toBeInTheDocument(),await e(r).toHaveAttribute("src",e.stringContaining(t.profileImageUrl))})}},i={args:{variant:"normal",username:"테스트 사용자",profileImageUrl:"images/userimage.jpg",numberOfProducts:50,description:"안녕하세요! 좋은 상품 많이 팝니다."},play:async({canvasElement:o,step:n,args:t})=>{const a=c(o);await n("사용자명과 상품 개수가 표시된다",async()=>{await e(a.getByText(t.username)).toBeInTheDocument(),await e(a.getByText(`${t.numberOfProducts}개 제품 게시 완료`)).toBeInTheDocument()}),await n("Normal 모드에서는 설명(Description)이 표시된다",async()=>{await e(a.getByText(t.description)).toBeInTheDocument()}),await n("프로필 이미지가 표시된다",async()=>{const r=a.getByRole("img");await e(r).toBeInTheDocument(),await e(r).toHaveAttribute("src",e.stringContaining(t.profileImageUrl))})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "small",
    username: "테스트 사용자",
    profileImageUrl: "images/userimage.jpg",
    numberOfProducts: 2000,
    description: "샘플 텍스트"
  },
  play: async ({
    canvasElement,
    step,
    args
  }) => {
    const canvas = within(canvasElement);
    await step("사용자명과 상품 개수 텍스트가 표시된다", async () => {
      await expect(canvas.getByText(args.username)).toBeInTheDocument();
      // "2000개 제품 게시 완료" 텍스트 조합 확인
      await expect(canvas.getByText(\`\${args.numberOfProducts}개 제품 게시 완료\`)).toBeInTheDocument();
    });
    await step("Small 모드에서는 설명(Description)이 렌더링되지 않는다", async () => {
      // queryByText는 요소를 찾지 못하면 null을 반환합니다. (getByText는 에러 발생)
      // 따라서 '없음'을 확인할 때는 queryBy...를 사용해야 합니다.
      const descriptionElement = canvas.queryByText(args.description as string);
      await expect(descriptionElement).not.toBeInTheDocument();
    });
    await step("프로필 이미지가 올바른 소스로 렌더링된다", async () => {
      const image = canvas.getByRole("img");
      await expect(image).toBeInTheDocument();
      // Next.js 이미지 최적화 파라미터 무시하고 경로 포함 여부 확인
      await expect(image).toHaveAttribute("src", expect.stringContaining(args.profileImageUrl));
    });
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "normal",
    username: "테스트 사용자",
    profileImageUrl: "images/userimage.jpg",
    numberOfProducts: 50,
    description: "안녕하세요! 좋은 상품 많이 팝니다."
  },
  play: async ({
    canvasElement,
    step,
    args
  }) => {
    const canvas = within(canvasElement);
    await step("사용자명과 상품 개수가 표시된다", async () => {
      await expect(canvas.getByText(args.username)).toBeInTheDocument();
      await expect(canvas.getByText(\`\${args.numberOfProducts}개 제품 게시 완료\`)).toBeInTheDocument();
    });
    await step("Normal 모드에서는 설명(Description)이 표시된다", async () => {
      // Small과 달리 여기서는 요소가 있어야 하므로 getByText 사용 가능
      await expect(canvas.getByText(args.description as string)).toBeInTheDocument();
    });
    await step("프로필 이미지가 표시된다", async () => {
      const image = canvas.getByRole("img");
      await expect(image).toBeInTheDocument();
      await expect(image).toHaveAttribute("src", expect.stringContaining(args.profileImageUrl));
    });
  }
}`,...i.parameters?.docs?.source}}};const D=["Small","Normal"];export{i as Normal,s as Small,D as __namedExportsOrder,f as default};
