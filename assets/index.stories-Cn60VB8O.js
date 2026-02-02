import{j as m}from"./iframe-CDGzgA9E.js";import{H as d,A as y,S as h}from"./index-B9FRpGlo.js";import"./preload-helper-PPVm8Dsz.js";import"./link-CBTWYtb5.js";import"./use-merged-ref-Dv4IccwR.js";import"./index-C78pMRlf.js";import"./image-DjX4fqcg.js";import"./index-C49t8kUY.js";import"./index-HunV23Ce.js";import"./breakpoint-DsEcWJkq.js";import"./index-iEeUj9Iw.js";import"./index-CSwRuuFq.js";import"./index-D6FLQ6KA.js";import"./styles-BeFhFhpp.js";import"./index-Cwh1y6CM.js";import"./index-D03ueV-v.js";import"./index-B5-31sXg.js";import"./index-BjixTkDp.js";const{expect:a,fn:r,within:l}=__STORYBOOK_MODULE_TEST__,k={title:"Organisms/Header",component:d,tags:["autodocs"],parameters:{layout:"fullscreen"},decorators:[(o,t)=>{const{cart:e=[],authUser:n,isLoading:s=!1}=t.args;return m.jsx(y.Provider,{value:{authUser:n,isLoading:s,signin:r(),signout:r(),mutate:r()},children:m.jsx(h.Provider,{value:{cart:e,addProductToCart:r(),removeProductFromCart:r()},children:m.jsx(o,{})})})}]},i={args:{authUser:void 0,isLoading:!1,cart:[]},play:async({canvasElement:o,step:t})=>{const e=l(o);await t("메뉴 링크들이 정상적으로 표시된다",async()=>{await a(e.getByText("모두")).toBeInTheDocument(),await a(e.getByText("의류")).toBeInTheDocument(),await a(e.getByText("책")).toBeInTheDocument(),await a(e.getByText("신발")).toBeInTheDocument()}),await t("등록 버튼이 표시된다",async()=>{await a(e.getByRole("button",{name:"등록"})).toBeInTheDocument()}),await t("로그인하지 않았으므로 프로필 이미지가 없어야 한다",async()=>{const n=e.queryByTestId("profile-shape-image");a(n).not.toBeInTheDocument()})}},g={id:1,username:"dummy",displayName:"Hana Kim",email:"hana.kim@example.com",profileImageUrl:"/images/userimage.jpg",description:""},p={args:{authUser:g,isLoading:!1,cart:[]},play:async({canvasElement:o,step:t,args:e})=>{const n=l(o);await t("로그인 유저의 프로필 이미지가 표시된다",async()=>{const s=n.getByTestId("profile-shape-image");await a(s).toBeInTheDocument(),await a(s).toHaveAttribute("src",a.stringContaining(e.authUser?.profileImageUrl))}),await t("프로필 이미지를 감싸는 링크가 유저 상세 페이지로 연결된다",async()=>{const u=n.getByTestId("profile-shape-image").closest("a");await a(u).toHaveAttribute("href",`/users/${e.authUser?.id}`)})}},c={args:{authUser:g,isLoading:!1,cart:[{id:1,category:"book",title:"Product",description:"",imageUrl:"/images/sample/1.jpg",blurDataUrl:"",price:1e4,condition:"used",owner:g}]},play:async({canvasElement:o,step:t,args:e})=>{const n=l(o);await t("장바구니 배지에 상품 개수가 표시된다",async()=>{const s=n.getByText(e.cart.length.toString());await a(s).toBeInTheDocument(),await a(s).toBeVisible()}),await t("로그인 상태이므로 프로필 이미지도 유지되어야 한다",async()=>{await a(n.getByTestId("profile-shape-image")).toBeInTheDocument()})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    // Context에 주입될 Mock 데이터
    authUser: undefined,
    isLoading: false,
    cart: []
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step("메뉴 링크들이 정상적으로 표시된다", async () => {
      // 데스크탑 뷰 기준 메뉴 텍스트 확인
      await expect(canvas.getByText("모두")).toBeInTheDocument();
      await expect(canvas.getByText("의류")).toBeInTheDocument();
      await expect(canvas.getByText("책")).toBeInTheDocument();
      await expect(canvas.getByText("신발")).toBeInTheDocument();
    });
    await step("등록 버튼이 표시된다", async () => {
      await expect(canvas.getByRole("button", {
        name: "등록"
      })).toBeInTheDocument();
    });
    await step("로그인하지 않았으므로 프로필 이미지가 없어야 한다", async () => {
      // authUser가 없으면 PersonIcon이 뜨고, ShapeImage는 없어야 함
      const profileImage = canvas.queryByTestId("profile-shape-image");
      expect(profileImage).not.toBeInTheDocument();
    });
  }
}`,...i.parameters?.docs?.source},description:{story:"로그인하지 않은 상태",...i.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    authUser: dummyUser,
    isLoading: false,
    cart: []
  },
  play: async ({
    canvasElement,
    step,
    args
  }) => {
    const canvas = within(canvasElement);
    await step("로그인 유저의 프로필 이미지가 표시된다", async () => {
      // data-testid="profile-shape-image" 요소 확인
      const profileImage = canvas.getByTestId("profile-shape-image");
      await expect(profileImage).toBeInTheDocument();

      // 이미지 src가 올바른지 확인 (props로 전달된 유저 정보와 일치하는지)
      await expect(profileImage).toHaveAttribute("src", expect.stringContaining((args as ContextArgsType).authUser?.profileImageUrl as string));
    });
    await step("프로필 이미지를 감싸는 링크가 유저 상세 페이지로 연결된다", async () => {
      const profileImage = canvas.getByTestId("profile-shape-image");
      // 이미지를 감싸는 가장 가까운 링크(a 태그) 찾기
      const profileLink = profileImage.closest("a");
      await expect(profileLink).toHaveAttribute("href", \`/users/\${(args as ContextArgsType).authUser?.id}\`);
    });
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    authUser: dummyUser,
    isLoading: false,
    cart: [{
      id: 1,
      category: "book",
      title: "Product",
      description: "",
      imageUrl: "/images/sample/1.jpg",
      blurDataUrl: "",
      price: 10000,
      condition: "used",
      owner: dummyUser
    }]
  },
  play: async ({
    canvasElement,
    step,
    args
  }) => {
    const canvas = within(canvasElement);
    await step("장바구니 배지에 상품 개수가 표시된다", async () => {
      // 장바구니 아이템 개수인 "1" 텍스트가 뱃지에 표시되어야 함
      // BadgeIconButton 구현상 텍스트로 렌더링 된다고 가정
      const badgeCount = canvas.getByText((args as ContextArgsType).cart!.length.toString());
      await expect(badgeCount).toBeInTheDocument();
      await expect(badgeCount).toBeVisible();
    });
    await step("로그인 상태이므로 프로필 이미지도 유지되어야 한다", async () => {
      await expect(canvas.getByTestId("profile-shape-image")).toBeInTheDocument();
    });
  }
}`,...c.parameters?.docs?.source},description:{story:"로그인 + 장바구니 1개",...c.parameters?.docs?.description}}};const P=["NoLogin","Login","LoginWithCart"];export{p as Login,c as LoginWithCart,i as NoLogin,P as __namedExportsOrder,k as default};
