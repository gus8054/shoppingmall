import type { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "storybook/preview-api";
import styled from "styled-components";
import InputImages, { FileData } from "./index";
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

const meta: Meta<typeof InputImages> = {
  title: "Molecules/InputImages",
  component: InputImages,
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: { type: "text" },
      description: "Dropzone의 input요소에 전달할 name",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    hasError: {
      control: "boolean",
      description: "Dropzone의 에러 플래그",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    width: {
      control: "text",
      description: "Dropzone의 가로폭",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    height: {
      control: "text",
      description: "Dropzone의 세로폭",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    images: {
      control: "object",
      description: "입력된 이미지 배열",
      table: {
        type: { summary: "FileData[]" },
      },
    },
    maximumNumber: {
      control: "number",
      description: "최대 등록 가능한 이미지 수",
      table: {
        type: { summary: "number" },
      },
    },
    onChange: {
      type: "function",
      description: "이미지가 추가/삭제되었을 때의 이벤트 핸들러",
      action: "change",
    },
  },
};

export default meta;

type Story = StoryObj<typeof InputImages>;

const Container = styled.div`
  width: 100%;
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr;
`;
// -------------------------------------------------------------
// 1. 통합 인터랙션 테스트 (추가 및 삭제)
// -------------------------------------------------------------
export const Interaction: Story = {
  args: {
    images: [],
    maximumNumber: 5, // 기본 최대 개수 넉넉하게
    width: "100%",
    height: "200px",
    onChange: fn(),
  },
  render: function Render(args) {
    const [{ images }, updateArgs] = useArgs();

    const handleChange = (newImages: FileData[]) => {
      // 1. Storybook args 업데이트 (화면 갱신)
      updateArgs({ images: newImages });
      // 2. 스파이 함수 호출 (검증용)
      args.onChange?.(newImages);
    };
    return (
      <Container>
        <InputImages {...args} images={images} onChange={handleChange} />
      </Container>
    );
  },
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);

    // Dropzone의 Root 찾기 (이전 Dropzone 테스트와 동일한 로직)
    const dropzoneInput = canvas.getByTestId("dropzone-input");
    const dropzoneRoot = dropzoneInput.parentElement!;

    // 테스트용 파일 준비
    const imageUrl = "/images/sample/1.jpg"; // public 폴더 이미지
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    const file = new File([blob], "test-image.jpg", { type: "image/jpeg" });

    await step("1. 이미지 드래그 앤 드롭 (파일 추가)", async () => {
      // 드롭 이벤트 생성 및 데이터 주입
      const dropEvent = createEvent.drop(dropzoneRoot);
      Object.defineProperty(dropEvent, "dataTransfer", {
        value: {
          files: [file],
          types: ["Files"],
        },
      });

      // 드롭 실행
      await fireEvent(dropzoneRoot, dropEvent);

      // 검증: ImagePreview가 생성되었는지 확인
      await waitFor(() => {
        const previews = canvas.getAllByRole("img");
        // Dropzone 아이콘 외에 미리보기 이미지가 추가되었는지 확인
        // ImagePreview의 기본 alt는 id가 없으면 undefined -> "image"가 될 수 있음
        // 여기서는 role="img" 개수로 판단하거나, src 속성 확인
        const uploadedImage = previews.find((img) =>
          img.getAttribute("src")?.startsWith("blob:"),
        );
        expect(uploadedImage).toBeInTheDocument();
      });

      // 검증: onChange 호출 확인
      await expect(args.onChange).toHaveBeenCalled();
    });

    await step("2. 이미지 삭제 버튼 클릭 (파일 제거)", async () => {
      // 스파이 초기화
      (args.onChange as Mock).mockClear();

      // 삭제 버튼 찾기 (ImagePreview 내부의 CloseBox -> svg 부모)
      // 화면에 이미지가 하나 추가되었으므로, 해당 미리보기의 닫기 버튼을 찾음
      const removeButtons = await canvas.findAllByTestId("remove-button");

      // [주의] Dropzone 아이콘(1개) + 미리보기 닫기 아이콘(1개) = 총 2개가 됨
      // 보통 마지막 아이콘이 방금 추가된 이미지의 닫기 버튼일 확률이 높음
      const closeIcon = removeButtons[removeButtons.length - 1];
      const closeButton = closeIcon?.closest("div");

      if (!closeButton) throw new Error("삭제 버튼을 찾을 수 없습니다.");

      await userEvent.click(closeButton);

      // 검증: 이미지가 사라졌는지 확인
      await waitFor(() => {
        const previews = canvas.queryAllByRole("img");
        const uploadedImage = previews.find((img) =>
          img.getAttribute("src")?.startsWith("blob:"),
        );
        expect(uploadedImage).toBeUndefined();
      });

      // 검증: onChange 호출 확인 (빈 배열로 돌아갔는지)
      await expect(args.onChange).toHaveBeenCalledWith([]);
    });
  },
};
// -------------------------------------------------------------
// 2. 최대 개수 제한 테스트 (Max Limit)
// -------------------------------------------------------------
export const MaxLimitReached: Story = {
  args: {
    maximumNumber: 1, // 최대 1개까지만 허용
    images: [],
  },
  render: function Render(args) {
    const [{ images }, updateArgs] = useArgs();

    const handleChange = (newImages: FileData[]) => {
      // 1. Storybook args 업데이트 (화면 갱신)
      updateArgs({ images: newImages });
      // 2. 스파이 함수 호출 (검증용)
      args.onChange?.(newImages);
    };
    return (
      <Container>
        <InputImages {...args} images={images} onChange={handleChange} />
      </Container>
    );
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const dropzoneInput = canvas.getByTestId("dropzone-input");
    const dropzoneRoot = dropzoneInput.parentElement!;

    // 파일 준비
    const imageUrl = "/images/sample/1.jpg";
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    const file = new File([blob], "limit-test.jpg", { type: "image/jpeg" });

    await step("1. 이미지 1개 업로드 (최대치 도달)", async () => {
      const dropEvent = createEvent.drop(dropzoneRoot);
      Object.defineProperty(dropEvent, "dataTransfer", {
        value: { files: [file], types: ["Files"] },
      });
      await fireEvent(dropzoneRoot, dropEvent);

      // 이미지가 렌더링될 때까지 대기
      await waitFor(() => {
        const previews = canvas.getAllByRole("img");
        const uploadedImage = previews.find((img) =>
          img.getAttribute("src")?.startsWith("blob:"),
        );
        expect(uploadedImage).toBeInTheDocument();
      });
    });

    await step("2. Dropzone이 숨겨졌는지 확인", async () => {
      // 컴포넌트 로직: isDropzoneDisplay = "none"
      // Dropzone을 감싸는 Box의 스타일이 display: none인지 확인

      // DropzoneRoot(드롭존 영역)의 부모 Box가 숨겨짐
      const dropzoneContainer = dropzoneRoot.parentElement;

      await waitFor(() => {
        expect(dropzoneContainer).toHaveStyle("display: none");
      });
    });
  },
};
