import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import CheckBox from "./index";
import { expect, fn, userEvent, within } from "storybook/test";

const meta: Meta<typeof CheckBox> = {
  title: "Molecules/CheckBox",
  component: CheckBox,
  tags: ["autodocs"],
  args: {
    label: "Label",
    checked: true,
    onChange: fn(),
  },
  argTypes: {
    label: {
      control: "text",
      description: "표시 라벨",
      table: {
        type: { summary: "string" },
      },
    },
    checked: {
      control: "boolean",
      description: "체크 여부",
      table: {
        type: { summary: "boolean" },
      },
    },
    onChange: {
      description: "값이 변화했을 때의 이벤트 핸들러",
      table: {
        type: { summary: "function" },
      },
      action: "changed",
    },
  },
  play: async ({ args, step, canvasElement }) => {
    const canvas = within(canvasElement);

    await step("체크박스 클릭시 prop으로 전달받은 onChange 호출", async () => {
      const label = canvas.getByTestId("checkbox-label");
      await userEvent.click(label);
      await expect(args.onChange).toHaveBeenCalled();
    });
  },
};

export default meta;

type Story = StoryObj<typeof CheckBox>;

export const Check: Story = {};
export const UnCheck: Story = {
  args: {
    checked: false,
  },
};
