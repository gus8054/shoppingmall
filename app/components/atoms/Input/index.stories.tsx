import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Input from "./index";
import { expect, fn, userEvent, within } from "storybook/test";

const meta: Meta<typeof Input> = {
  title: "Atoms/Input",
  component: Input,
  tags: ["autodocs"], // 자동 문서 생성 (선택 사항)
  args: {
    hasError: false,
    hasBorder: true,
    placeholder: "Placeholder",
    type: "text",
    onChange: fn(),
  },
  argTypes: {
    type: {
      options: ["text", "number", "password"],
      control: { type: "radio" },
      description: "input 타입",
      table: { type: { summary: "string" } },
    },
    hasBorder: {
      control: { type: "boolean" },
      description: "테두리 유무 플래그",
      table: { type: { summary: "boolean" } },
    },
    hasError: {
      control: { type: "boolean" },
      description: "검증 오류 플래그",
      table: { type: { summary: "boolean" } },
    },
    placeholder: {
      control: { type: "text" },
      description: "플레이스 홀더",
      table: { type: { summary: "string" } },
    },
    value: {
      control: { type: "text" },
      description: "값",
      table: { type: { summary: "string" } },
    },
    onChange: {
      type: "function",
      description: "onChange 핸들러",
      action: "changed",
    },
  },
  play: async ({ canvasElement, step, args }) => {
    await step(
      "change 이벤트 발생시 prop으로 전달받은 onChange 호출",
      async () => {
        const canvas = within(canvasElement);
        const input = canvas.getByTestId("input");
        await userEvent.type(input, "1");
        await expect(args.onChange).toHaveBeenCalled();
        await userEvent.clear(input);
      },
    );
  },
};
export default meta;

type Story = StoryObj<typeof Input>;

// 기본 스토리 (meta.args의 기본값이 적용됨)
export const TextType: Story = {};

export const NumberType: Story = {
  args: {
    type: "number",
    placeholder: "123",
  },
};
export const PasswordType: Story = {
  args: {
    type: "password",
    placeholder: "password",
  },
};
export const HasBorder: Story = {
  args: {
    hasBorder: true,
  },
};
export const HasError: Story = {
  args: {
    hasError: true,
  },
};
