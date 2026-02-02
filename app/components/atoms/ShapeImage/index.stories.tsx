import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import ShapeImage from "./index";

const meta: Meta<typeof ShapeImage> = {
  title: "Atoms/ShapeImage",
  component: ShapeImage,
  tags: ["autodocs"],
  args: {
    shape: "square",
    width: 320,
    height: 320,
  },
  argTypes: {
    shape: {
      options: ["circle", "square"],
      control: "radio",
      description: "이미지 형태",
      table: {
        type: { summary: "circle | square" },
        defaultValue: { summary: "square" },
      },
    },
    src: {
      control: "text",
      description: "이미지 URL",
      table: {
        type: { summary: "string" },
      },
    },
    alt: {
      control: "text",
      if: { arg: "src", truthy: false },
      description: "대체 텍스트",
      table: {
        type: {
          summary: "string",
        },
      },
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

type Story = StoryObj<typeof ShapeImage>;

export const Circle: Story = {
  args: {
    src: "/images/sample/1.jpg",
    shape: "circle",
  },
};

export const Square: Story = {
  args: {
    src: "/images/sample/1.jpg",
    shape: "square",
  },
};
