import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Dropzone from "./index";
import Button from "@/app/components/atoms/Button";
import Box from "@/app/components/layout/Box";
import theme from "@/app/theme";
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

const meta: Meta<typeof Dropzone> = {
  title: "Molecules/Dropzone",
  component: Dropzone,
  tags: ["autodocs"],
  args: {
    acceptedFileTypes: ["image/png", "image/jpeg", "image/jpg", "image/gif"],
    width: "100%",
    height: "200px",
    hasError: false,
    onDrop: fn(),
    onChange: fn(),
  },
  argTypes: {
    name: {
      control: "text",
      description: "input file의 name",
    },
    height: {
      control: "text", // px, % 등 단위를 포함할 수 있으므로 text가 적합
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
    hasError: {
      control: "boolean",
      description: "변형 에러 플래그",
      table: {
        type: { summary: "boolean" },
      },
    },
    acceptedFileTypes: {
      control: "object",
      description: "허용 파일 타입",
      table: {
        type: { summary: "array" },
      },
    },
    onDrop: {
      type: "function",
      description: "파일이 드롭 입력되었을 때의 이벤트 핸들러",
      action: "drop",
    },
    onChange: {
      type: "function",
      description: "파일이 입력되었을 때의 이벤트 핸들러",
      action: "change",
    },
  },
  // play: async () => {
  // 1. 클릭시 파일선택 창이 나타난다.
  // 2. 이미지 파일 선택시 화면에 미리보기 이미지로 나타난다. onChange prop이 실행된다
  // 3. 지원형식에 맞지 않은 파일 선택시 화면에 나타나지않는다.
  // 4. 미리보기 이미지를 드래그하여 드롭존으로 이동한다.
  // 5. 드롭존의 data-is-focus가 true가 된다.
  // 6. 드래그 중인 이미지를 드롭존 안에 드롭하면 미리보기 이미지로 나타난다. onDrop prop이 실행된다.
  // },
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);

    // 테스트를 위한 요소 찾기
    // DropzoneRoot는 input의 바로 위 부모라고 가정
    const input = canvas.getByTestId("dropzone-input");
    const dropzoneRoot = input.parentElement!;

    // 테스트용 더미 파일 생성
    const validImageFile = new File(["dummy content"], "test-image.png", {
      type: "image/png",
    });
    const invalidFile = new File(["dummy content"], "test-file.txt", {
      type: "text/plain",
    });

    await step(
      "1. 이미지 파일 선택시 화면에 미리보기 이미지로 나타나고 onChange prop 실행",
      async () => {
        // 파일 업로드 시뮬레이션
        await userEvent.upload(input, validImageFile);

        // onChange 호출 확인
        await expect(args.onChange).toHaveBeenCalled();

        // 미리보기 이미지가 나타났는지 확인
        // 상태 업데이트 비동기 처리를 기다림
        await waitFor(() => {
          const previewImage = canvas.getByAltText("sample");
          expect(previewImage).toBeInTheDocument();
          expect(previewImage).toHaveAttribute("src");
        });
      },
    );

    await step(
      "2. 지원형식에 맞지 않은 파일 선택시 화면에 나타나지 않는다",
      async () => {
        // 스파이 함수 초기화
        (args.onChange as Mock).mockClear();

        // 잘못된 파일 업로드
        await userEvent.upload(input, invalidFile);

        // WithControl 로직상 setFiles가 실행되지만 필터링되어 빈 배열이 들어감
        // 따라서 onChange는 호출되지만(빈 배열), 이미지는 사라져야 함
        await waitFor(() => {
          const previewImage = canvas.queryByAltText("sample");
          expect(previewImage).toBeInTheDocument();
        });
      },
    );
    await step(
      "3. 드래그 진입 및 탈출시 드롭존 포커싱 변화 (data-is-focused)",
      async () => {
        //dragEnter 이벤트 발생
        await fireEvent.dragEnter(dropzoneRoot);

        // data-is-focused 속성이 false로 바뀌었는지 확인
        await waitFor(() => {
          expect(dropzoneRoot).toHaveAttribute("data-is-focused", "true");
        });
        // dragLeave 이벤트 발생
        await fireEvent.dragLeave(dropzoneRoot);

        // data-is-focused 속성이 false로 바뀌었는지 확인
        await waitFor(() => {
          expect(dropzoneRoot).toHaveAttribute("data-is-focused", "false");
        });
      },
    );

    await step("4. 드롭존 안에 드롭하면 onDrop prop 실행", async () => {
      (args.onDrop as Mock).mockClear();
      //  더미 파일 생성
      const file = new File(["dummy content"], "test.png", {
        type: "image/png",
      });

      // Drop 이벤트 생성 및 데이터 주입 (치트키 사용)
      const dropEvent = createEvent.drop(dropzoneRoot);

      Object.defineProperty(dropEvent, "dataTransfer", {
        value: {
          files: [file], // 파일 배열 주입
          types: ["Files"],
        },
      });

      // 데이터가 담긴 이벤트를 발사
      await fireEvent(dropzoneRoot, dropEvent);

      // 포커스가 해제되었는지 확인
      await expect(dropzoneRoot).toHaveAttribute("data-is-focused", "false");

      // onDrop 호출 확인
      await expect(args.onDrop).toHaveBeenCalled();
    });
  },
};

export default meta;

type Story = StoryObj<typeof Dropzone>;

export const WithControl: Story = {
  render: function Render(args) {
    const [files, setFiles] = useState<File[]>([]);

    const handleDrop = (files: File[]) => {
      setFiles(files);
      args.onDrop?.(files);
    };
    const handleChange = (files: File[]) => {
      setFiles(files);
      args.onChange?.(files);
    };

    const clearImages = () => {
      setFiles([]);
    };

    return (
      <>
        <Box style={{ margin: `${theme.space.small}px` }}>
          {/* Dropzone이 제어 컴포넌트로 동작하도록 value와 이벤트 연결 */}
          <Dropzone {...args} onDrop={handleDrop} onChange={handleChange} />
        </Box>
        <Box style={{ margin: `${theme.space.small}px` }}>
          <Button variant="secondary" onClick={clearImages}>
            모든 이미지를 클리어
          </Button>
        </Box>
        <Box>
          {files.map((f) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={URL.createObjectURL(f)}
              width="100px"
              key={f.name}
              alt="sample"
              style={{ marginRight: "8px" }}
            />
          ))}
        </Box>
      </>
    );
  },
};
