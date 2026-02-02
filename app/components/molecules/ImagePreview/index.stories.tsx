import type { Meta, StoryObj } from "@storybook/react";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ImagePreview from "./index";
import Dropzone from "@/app/components/molecules/Dropzone";
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

const meta: Meta<typeof ImagePreview> = {
  title: "Molecules/ImagePreview",
  component: ImagePreview,
  args: {
    alt: "image",
    onRemove: fn(),
  },
  tags: ["autodocs"],
  argTypes: {
    src: {
      control: "text",
      description: "이미지 URL",
      table: {
        type: { summary: "string" },
      },
    },
    alt: {
      control: "text",
      description: "대체 텍스트",
      table: {
        type: { summary: "string" },
      },
    },
    height: {
      control: "text",
      description: "세로폭",
      table: {
        type: { summary: "string" },
      },
    },
    width: {
      control: "text",
      description: "가로폭",
      table: {
        type: { summary: "string" },
      },
    },
    onRemove: {
      type: "function",
      description: "삭제 버튼을 클릭했을 때의 이벤트 핸들러",
      action: "onClick 핸들러",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ImagePreview>;

const Container = styled.div`
  margin: 16px;
  width: 288px;
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr;
`;

// Dropzone과 함께 사용하는 예제 스토리
export const WithDropzone: Story = {
  render: function Render(args) {
    const [files, setFiles] = useState<File[]>([]);
    // 미리보기 URL들을 저장할 상태 (메모리 누수 방지를 위해 별도 관리)
    const [previewUrls, setPreviewUrls] = useState<string[]>([]);

    // 파일이 추가될 때마다 미리보기 URL 생성
    useEffect(() => {
      const newUrls = files.map((file) => URL.createObjectURL(file));
      setPreviewUrls(newUrls);

      // 클린업: 컴포넌트 언마운트나 파일 변경 시 기존 URL 해제 (메모리 관리)
      return () => {
        newUrls.forEach((url) => URL.revokeObjectURL(url));
      };
    }, [files]);

    const handleDrop = (filteredFiles: File[]) => {
      setFiles(filteredFiles);
    };

    const handleRemove = (src: string) => {
      // 1. 해당 src를 가진 인덱스를 찾음
      const index = previewUrls.indexOf(src);
      if (index === -1) return;

      // 2. 파일 배열과 URL 배열에서 해당 인덱스 제거
      const newFiles = files.filter((_, i) => i !== index);
      setFiles(newFiles);

      // 3. 로그 출력
      args.onRemove?.(src);
    };

    return (
      <>
        {/* Dropzone에는 파일 추가 핸들러 연결 */}
        <Dropzone onDrop={handleDrop} />
        <Container>
          {/* 업로드된 이미지 목록 표시 */}
          {previewUrls.map((src) => (
            <ImagePreview
              key={src} // URL을 키로 사용
              src={src}
              width="100px"
              {...args} // 나머지 args (alt, height 등) 전달
              onRemove={handleRemove}
            />
          ))}
        </Container>
      </>
    );
  },
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);

    // Dropzone의 input 찾기 (이벤트를 발생시킬 타겟)
    // Dropzone 컴포넌트 내부 구조에 따라 input을 찾고 그 부모(Root)를 타겟팅
    const dropzoneInput = canvas.getByTestId("dropzone-input");
    const dropzoneRoot = dropzoneInput.parentElement!;

    // 테스트용 파일 생성 (fetch 사용)
    const imageUrl = "/images/sample/1.jpg"; // public 폴더에 파일이 있어야 함
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    const file = new File([blob], "1.jpg", { type: "image/jpeg" });

    await step("1. 이미지를 드롭하여 업로드", async () => {
      // DataTransfer 객체 조작을 위한 이벤트 생성
      const dropEvent = createEvent.drop(dropzoneRoot);
      Object.defineProperty(dropEvent, "dataTransfer", {
        value: {
          files: [file],
          types: ["Files"],
        },
      });

      // 드롭 이벤트 발사
      await fireEvent(dropzoneRoot, dropEvent);
    });

    await step("2. 미리보기 이미지 생성 확인", async () => {
      await waitFor(() => {
        const images = canvas.getAllByRole("img");
        // Dropzone 아이콘(svg) 등을 제외하고 실제 미리보기 이미지가 떴는지 확인
        // ImagePreview의 alt가 "Sample Image" 이므로 이것으로 찾음
        const previewImage = images.find(
          (img) => img.getAttribute("alt") === args.alt,
        );
        expect(previewImage).toBeInTheDocument();
        expect(previewImage).toHaveAttribute(
          "src",
          expect.stringContaining("blob:"),
        );
      });
    });

    await step("3. 삭제 버튼 클릭 및 제거 확인", async () => {
      // onRemove 스파이 초기화
      (args.onRemove as Mock).mockClear();

      // 렌더링된 ImagePreview 내부의 삭제 버튼 찾기
      // 여기서는 화면에 하나만 있다고 가정하고 svg의 부모 div를 찾음
      // (실무에서는 data-testid="remove-button" 추가를 강력 권장합니다)
      const closeIcon = canvasElement.querySelectorAll("svg")[1]; // 0번은 dropzone 아이콘, 1번이 close 아이콘
      const closeButton = closeIcon?.closest("div");

      if (!closeButton) throw new Error("삭제 버튼을 찾을 수 없습니다.");

      // 버튼 클릭
      await userEvent.click(closeButton);

      // 검증 1: onRemove 호출됨
      await expect(args.onRemove).toHaveBeenCalled();

      // 검증 2: 이미지가 화면에서 사라짐
      await waitFor(() => {
        // alt="Sample Image"인 이미지가 없어야 함
        const image = canvas.queryByAltText(args.alt as string);
        expect(image).not.toBeInTheDocument();
      });
    });
  },
};
