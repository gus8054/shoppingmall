import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Separator from "./index";

const meta: Meta<typeof Separator> = {
  title: "Atoms/Separator",
  component: Separator,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Separator>;

export const Normal: Story = {};
export const WithText: Story = {
  args: {
    children: "TEXT",
  },
};
