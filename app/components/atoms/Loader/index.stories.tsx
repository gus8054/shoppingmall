import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import RectLoader from "./index";

const meta: Meta<typeof RectLoader> = {
  title: "Atoms/Loader",
  component: RectLoader,
  tags: ["autodocs"], // 자동 문서 생성 태그
  args: {
    width: 320,
    height: 320,
    variant: "square",
  },
  argTypes: {
    variant: {
      options: ["square", "circle"],
      control: { type: "radio" },
      description: "로더 모양",
      table: { type: { summary: "square | circle" } },
    },
    width: {
      control: "number",
      description: "가로폭",
      table: {
        type: { summary: "number" },
      },
    },
    height: {
      control: "number",
      description: "세로폭",
      table: {
        type: { summary: "number" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof RectLoader>;

// 별도의 render 함수 없이도 args가 자동으로 컴포넌트에 전달됩니다.
export const Square: Story = {};
export const Circle: Story = {
  args: {
    variant: "circle",
  },
};
