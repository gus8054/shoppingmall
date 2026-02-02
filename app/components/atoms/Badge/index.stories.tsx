import { Meta, StoryObj } from "@storybook/nextjs-vite";
import Badge from "./index";

// 1. Meta 설정 (기존 default export)
const meta: Meta<typeof Badge> = {
  title: "Atoms/Badge",
  component: Badge, // 컴포넌트 명시 필수
  tags: ["autodocs"], // 자동 문서 생성 (선택사항이지만 권장)
  argTypes: {
    content: {
      control: { type: "number" },
      description: "배지 내부 텍스트",
      table: {
        type: { summary: "number" },
      },
    },
    backgroundColor: {
      control: { type: "color" },
      description: "배지 색상",
      table: {
        type: { summary: "string" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;
export const Default: Story = {};
export const Orange: Story = {
  args: {
    content: 1,
    backgroundColor: "#ed9f28",
  },
};

export const Green: Story = {
  args: {
    content: 2,
    backgroundColor: "#32bf00",
  },
};

export const Red: Story = {
  args: {
    content: 10,
    backgroundColor: "#d4001a",
  },
};
