import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import TextArea from "./index";
import { expect, fn, userEvent, within } from "storybook/test";

const meta: Meta<typeof TextArea> = {
  title: "Atoms/TextArea",
  component: TextArea,
  tags: ["autodocs"],
  args: {
    minRows: 5,
    maxRows: 10,
    hasError: false,
    onChange: fn(),
  },
  argTypes: {
    placeholder: {
      control: "text",
      description: "플레이스홀더",
      table: {
        type: { summary: "string" },
      },
    },
    minRows: {
      control: "number",
      description: "최소 행 수",
      table: {
        type: { summary: "number" },
      },
    },
    maxRows: {
      control: "number",
      description: "최대 행 수",
      table: {
        type: { summary: "number" },
      },
    },
    hasError: {
      control: "boolean",
      description: "변형 에러 플래그",
      table: {
        type: { summary: "boolean" },
      },
    },
    onChange: {
      type: "function",
      description: "onChange 이벤트 핸들러",
      table: {
        type: { summary: "function" },
      },
      action: "changed",
    },
  },
  play: async ({ args, canvasElement, step }) => {
    await step(
      "change 이벤트 발생시 prop으로 받은 onChange 핸들러 호출",
      async () => {
        const canvas = within(canvasElement);
        const textarea = canvas.getByTestId("textarea");
        await userEvent.type(textarea, "t");
        await expect(args.onChange).toHaveBeenCalled();
        await userEvent.clear(textarea);
      },
    );
  },
};

export default meta;

type Story = StoryObj<typeof TextArea>;

// 기본 스토리 (meta.args의 기본값 적용)
export const Normal: Story = {
  args: {
    placeholder: "placeholder",
  },
};

// 에러 스토리
export const ErrorStory: Story = {
  name: "Error", // 사이드바에 'Error'로 표시됨
  args: {
    hasError: true,
  },
};

export const BigArea: Story = {
  args: {
    minRows: 10,
    maxRows: 10,
  },
};
