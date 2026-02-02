import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Button from "./index";
import { expect, fn, userEvent, within } from "storybook/test";

// 1. Meta 설정
const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  tags: ["autodocs"], // 자동 문서화 활성화
  args: {
    variant: "none",
    disabled: false,
    children: "BUTTON",
    onClick: fn(),
  },
  // 공통 기본값 설정 (argTypes의 defaultValue 대신 사용)
  argTypes: {
    variant: {
      options: ["none", "primary", "secondary", "danger"],
      control: { type: "radio" },
      description: "버튼 변형",
      table: {
        type: { summary: "none | primary | secondary | danger" },
      },
    },
    disabled: {
      control: { type: "boolean" },
      description: "disabled 플래그",
      table: {
        type: { summary: "boolean" },
      },
    },
    children: {
      control: { type: "text" },
      description: "버튼 텍스트",
      table: {
        type: { summary: "string" },
      },
    },
    onClick: {
      type: "function",
      description: "onClick 이벤트 핸들러",
      table: {
        type: { summary: "function" },
      },
      action: "clicked",
    },
  },
  play: async ({ args, canvasElement, step }) => {
    await step("클릭시 onClick prop 핸들러함수 호출", async () => {
      const canvas = within(canvasElement);
      await userEvent.click(canvas.getByRole("button"));
      await expect(args.onClick).toHaveBeenCalled();
    });
  },
};

export default meta;

// 2. Story 타입 정의
type Story = StoryObj<typeof Button>;

// 3. 개별 스토리 정의
export const Basic: Story = {};
export const Primary: Story = {
  args: {
    variant: "primary",
  },
};
export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};
export const Danger: Story = {
  args: {
    variant: "danger",
  },
};
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
export const RandomSize: Story = {
  args: {
    style: {
      padding: 16,
    },
  },
};
