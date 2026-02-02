import{P as g}from"./index-d1Wr_xjN.js";import"./iframe-DX1DL66T.js";import"./preload-helper-PPVm8Dsz.js";import"./index.esm-DiMO85wI.js";import"./index-DJSC04U8.js";import"./index-HunV23Ce.js";import"./breakpoint-DsEcWJkq.js";import"./index-BVZwygx4.js";import"./index-BBGL2l39.js";import"./index-Db0nbS3D.js";import"./index-Bc7kkt5d.js";import"./styles-BeFhFhpp.js";import"./index-Du1bwFG5.js";import"./index-DYK867Bv.js";import"./index-Bqdko1ab.js";import"./index-BlJPpN_b.js";import"./index-CeZbahUD.js";import"./index-Ct1-5suO.js";const{createEvent:B,expect:a,fireEvent:v,fn:T,userEvent:n,waitFor:u,within:m}=__STORYBOOK_MODULE_TEST__,L={title:"Organisms/ProductForm",component:g,tags:["autodocs"],args:{onProductSave:T()},argTypes:{onProductSave:{action:"onProductSave"}}},r={play:async({canvasElement:l,step:o,args:i})=>{const t=m(l);await o("필수 입력값을 비우고 등록 버튼을 클릭한다",async()=>{const d=t.getByRole("button",{name:"등록"});await n.click(d)}),await o("각 필드에 에러 메시지가 표시되어야 한다",async()=>{await a(await t.findByText("이미지는 필수입력 사항입니다.")).toBeInTheDocument(),await a(await t.findByText("제목 입력은 필수입니다")).toBeInTheDocument(),await a(await t.findByText("개요 입력은 필수입니다")).toBeInTheDocument(),await a(await t.findByText("가격의 입력은 필수입니다")).toBeInTheDocument()}),await o("저장 핸들러가 호출되지 않아야 한다",async()=>{await a(i.onProductSave).not.toHaveBeenCalled()})}},p={play:async({canvasElement:l,step:o,args:i})=>{const t=m(l),d=new File(["(⌐■_■)"],"cool-shoes.png",{type:"image/png"});await o("1. 상품 이미지를 업로드한다 (Drag & Drop)",async()=>{const e=t.getByTestId("dropzone-input").parentElement,s=B.drop(e);Object.defineProperty(s,"dataTransfer",{value:{files:[d],types:["Files"]}}),await v(e,s),await u(()=>{const w=t.getAllByRole("img").find(y=>y.getAttribute("src")?.startsWith("blob:"));a(w).toBeInTheDocument()})}),await o("2. 텍스트 정보(제목, 개요, 가격)를 입력한다",async()=>{const c=t.getByPlaceholderText("상품 제목");await n.type(c,"나이키 한정판 신발");const e=t.getByPlaceholderText("최고의 상품입니다!");await n.type(e,"사이즈 270, 상태 매우 좋습니다.");const s=t.getByPlaceholderText("1000");await n.type(s,"150000")}),await o("3. 카테고리를 선택한다 (Dropdown Interaction)",async()=>{const c=t.getAllByText("신발");await n.click(c[0]);const e=await t.findByText("의류");await n.click(e)}),await o("4. 상품 상태를 변경한다 (Dropdown Interaction)",async()=>{const c=t.getAllByText("중고");await n.click(c[0]);const e=await t.findByText("신품");await n.click(e)}),await o("5. 등록 버튼 클릭 및 데이터 제출 확인",async()=>{const c=t.getByRole("button",{name:"등록"});await n.click(c),await u(()=>{a(i.onProductSave).toHaveBeenCalled();const e=i.onProductSave.mock.calls[0][0];a(e.title).toBe("나이키 한정판 신발"),a(e.price).toBe("150000"),a(e.category).toBe("clothes"),a(e.condition).toBe("new"),a(e.image).toHaveLength(1)})})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    step,
    args
  }) => {
    const canvas = within(canvasElement);
    await step("필수 입력값을 비우고 등록 버튼을 클릭한다", async () => {
      // 등록 버튼 클릭
      const submitButton = canvas.getByRole("button", {
        name: "등록"
      });
      await userEvent.click(submitButton);
    });
    await step("각 필드에 에러 메시지가 표시되어야 한다", async () => {
      // react-hook-form의 검증은 비동기이므로 findByText 사용
      await expect(await canvas.findByText("이미지는 필수입력 사항입니다.")).toBeInTheDocument();
      await expect(await canvas.findByText("제목 입력은 필수입니다")).toBeInTheDocument();
      await expect(await canvas.findByText("개요 입력은 필수입니다")).toBeInTheDocument();
      // 카테고리는 defaultValue가 없으므로 에러 발생
      // await expect(
      //   await canvas.findByText("카테고리 선택은 필수입니다"),
      // ).toBeInTheDocument();
      await expect(await canvas.findByText("가격의 입력은 필수입니다")).toBeInTheDocument();

      // 참고: '상품 상태'는 defaultValue="used"가 있어서 에러가 발생하지 않음
    });
    await step("저장 핸들러가 호출되지 않아야 한다", async () => {
      await expect(args.onProductSave).not.toHaveBeenCalled();
    });
  }
}`,...r.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    step,
    args
  }) => {
    const canvas = within(canvasElement);

    // 1. 이미지 파일 준비
    const file = new File(["(⌐■_■)"], "cool-shoes.png", {
      type: "image/png"
    });
    await step("1. 상품 이미지를 업로드한다 (Drag & Drop)", async () => {
      const dropzoneInput = canvas.getByTestId("dropzone-input");
      const dropzoneRoot = dropzoneInput.parentElement!;

      // 드롭 이벤트 시뮬레이션
      const dropEvent = createEvent.drop(dropzoneRoot);
      Object.defineProperty(dropEvent, "dataTransfer", {
        value: {
          files: [file],
          types: ["Files"]
        }
      });
      await fireEvent(dropzoneRoot, dropEvent);

      // 썸네일이 뜰 때까지 대기 (이미지 업로드 확인)
      await waitFor(() => {
        const images = canvas.getAllByRole("img");
        // Dropzone 아이콘 제외하고 업로드된 이미지(Blob) 찾기
        const uploadedImage = images.find(img => img.getAttribute("src")?.startsWith("blob:"));
        expect(uploadedImage).toBeInTheDocument();
      });
    });
    await step("2. 텍스트 정보(제목, 개요, 가격)를 입력한다", async () => {
      // 제목
      const titleInput = canvas.getByPlaceholderText("상품 제목");
      await userEvent.type(titleInput, "나이키 한정판 신발");

      // 개요 (TextArea)
      const descInput = canvas.getByPlaceholderText("최고의 상품입니다!");
      await userEvent.type(descInput, "사이즈 270, 상태 매우 좋습니다.");

      // 가격
      const priceInput = canvas.getByPlaceholderText("1000");
      await userEvent.type(priceInput, "150000");
    });
    await step("3. 카테고리를 선택한다 (Dropdown Interaction)", async () => {
      // [수정] defaultValue가 "shoes"이므로 화면엔 "신발"이라고 표시되어 있습니다.
      // 따라서 placeholder 대신 "신발" 텍스트를 클릭해야 드롭다운이 열립니다.

      const categoryTriggers = canvas.getAllByText("신발");
      await userEvent.click(categoryTriggers[0]);

      // [수정] 이미 '신발'이 선택되어 있으므로, 변경 테스트를 위해 다른 옵션('의류')을 선택합니다.
      const clothesOption = await canvas.findByText("의류");
      await userEvent.click(clothesOption);
    });
    await step("4. 상품 상태를 변경한다 (Dropdown Interaction)", async () => {
      // 1. 드롭다운 트리거 클릭 (기본값 'used' -> '중고' 텍스트가 보임)

      const conditionTriggers = canvas.getAllByText("중고");
      await userEvent.click(conditionTriggers[0]);

      // 2. 옵션 선택 ('신품'으로 변경)
      const newOption = await canvas.findByText("신품");
      await userEvent.click(newOption);
    });
    await step("5. 등록 버튼 클릭 및 데이터 제출 확인", async () => {
      const submitButton = canvas.getByRole("button", {
        name: "등록"
      });
      await userEvent.click(submitButton);
      await waitFor(() => {
        // onProductSave가 호출되었는지 확인
        expect(args.onProductSave).toHaveBeenCalled();

        // 호출된 인자 검증 (선택적)
        const formData = (args.onProductSave as Mock).mock.calls[0][0];
        expect(formData.title).toBe("나이키 한정판 신발");
        expect(formData.price).toBe("150000"); // input type="number"라도 string으로 올 수 있음
        expect(formData.category).toBe("clothes");
        expect(formData.condition).toBe("new");
        expect(formData.image).toHaveLength(1); // 이미지 배열 확인
      });
    });
  }
}`,...p.parameters?.docs?.source}}};const j=["ValidationError","SaveProduct"];export{p as SaveProduct,r as ValidationError,j as __namedExportsOrder,L as default};
