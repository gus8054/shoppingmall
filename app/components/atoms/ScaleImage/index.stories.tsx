import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import ScaleImage from "./index";

const meta: Meta<typeof ScaleImage> = {
  title: "Atoms/ScaleImage",
  component: ScaleImage,
  tags: ["autodocs"],
  args: {
    width: "320px",
    height: "320px",
    src: "/images/sample/1.jpg",
  },
  argTypes: {
    width: {
      control: { type: "text" },
      description: "가로 폭",
      table: { type: { summary: "string" } },
    },
    height: {
      control: { type: "text" },
      description: "세로 폭",
      table: { type: { summary: "string" } },
    },
    src: {
      control: { type: "text" },
      description: "이미지 url",
      table: { type: { summary: "string" } },
    },
    alt: {
      control: { type: "text" },
      if: { arg: "src", truthy: false },
      description: "대체 텍스트",
      table: { type: { summary: "string" } },
    },
  },
};
export default meta;

type Story = StoryObj<typeof ScaleImage>;

export const Normal: Story = {};
