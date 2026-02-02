import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import SigninPage from ".";
import { fn } from "storybook/test";
import SigninTemplate from ".";

const meta: Meta<typeof SigninPage> = {
  title: "Templates/SigninTemplate",
  component: SigninTemplate,
  args: {
    onSignin: fn(),
  },
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof SigninPage>;

/**
 * 기본 로그인 페이지
 * 쿼리 파라미터가 없는 상태
 */
export const Default: Story = {};
