import type { Meta, StoryObj } from "@storybook/react";
import ProductForm from "./index";
import {
  createEvent,
  expect,
  fireEvent,
  fn,
  Mock,
  userEvent,
  waitFor,
  within,
} from "storybook/test";

const meta: Meta<typeof ProductForm> = {
  title: "Organisms/ProductForm",
  component: ProductForm,
  tags: ["autodocs"],
  args: {
    onProductSave: fn(),
  },
  argTypes: {
    onProductSave: {
      action: "onProductSave",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ProductForm>;

// ----------------------------------------------------------------
// 1. 유효성 검사 테스트 (빈 값 제출)
// ----------------------------------------------------------------
export const ValidationError: Story = {
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);

    await step("필수 입력값을 비우고 등록 버튼을 클릭한다", async () => {
      // 등록 버튼 클릭
      const submitButton = canvas.getByRole("button", { name: "등록" });
      await userEvent.click(submitButton);
    });

    await step("각 필드에 에러 메시지가 표시되어야 한다", async () => {
      // react-hook-form의 검증은 비동기이므로 findByText 사용
      await expect(
        await canvas.findByText("이미지는 필수입력 사항입니다."),
      ).toBeInTheDocument();
      await expect(
        await canvas.findByText("제목 입력은 필수입니다"),
      ).toBeInTheDocument();
      await expect(
        await canvas.findByText("개요 입력은 필수입니다"),
      ).toBeInTheDocument();
      // 카테고리는 defaultValue가 없으므로 에러 발생
      // await expect(
      //   await canvas.findByText("카테고리 선택은 필수입니다"),
      // ).toBeInTheDocument();
      await expect(
        await canvas.findByText("가격의 입력은 필수입니다"),
      ).toBeInTheDocument();

      // 참고: '상품 상태'는 defaultValue="used"가 있어서 에러가 발생하지 않음
    });

    await step("저장 핸들러가 호출되지 않아야 한다", async () => {
      await expect(args.onProductSave).not.toHaveBeenCalled();
    });
  },
};

// ----------------------------------------------------------------
// 2. 정상 등록 테스트 (이미지 업로드 + 폼 입력)
// ----------------------------------------------------------------
export const SaveProduct: Story = {
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);

    // 1. 이미지 파일 준비
    const file = new File(["(⌐■_■)"], "cool-shoes.png", { type: "image/png" });

    await step("1. 상품 이미지를 업로드한다 (Drag & Drop)", async () => {
      const dropzoneInput = canvas.getByTestId("dropzone-input");
      const dropzoneRoot = dropzoneInput.parentElement!;

      // 드롭 이벤트 시뮬레이션
      const dropEvent = createEvent.drop(dropzoneRoot);
      Object.defineProperty(dropEvent, "dataTransfer", {
        value: {
          files: [file],
          types: ["Files"],
        },
      });
      await fireEvent(dropzoneRoot, dropEvent);

      // 썸네일이 뜰 때까지 대기 (이미지 업로드 확인)
      await waitFor(() => {
        const images = canvas.getAllByRole("img");
        // Dropzone 아이콘 제외하고 업로드된 이미지(Blob) 찾기
        const uploadedImage = images.find((img) =>
          img.getAttribute("src")?.startsWith("blob:"),
        );
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
      const submitButton = canvas.getByRole("button", { name: "등록" });
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
  },
};
