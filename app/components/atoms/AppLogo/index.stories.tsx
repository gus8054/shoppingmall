import { Meta, StoryObj } from "@storybook/nextjs-vite";
import AppLogo from ".";

const meta = {
  title: "Atoms/AppLogo",
  component: AppLogo,
  tags: ["autodocs"],
  argTypes: {
    width: {
      control: { type: "number" },
      description: "로고",
      table: {
        type: { summary: "number" },
      },
    },
  },
} satisfies Meta<typeof AppLogo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Logo: Story = {
  args: {},
};
