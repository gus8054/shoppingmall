import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  SearchIcon,
  CloudUploadIcon,
  PersonOutlineIcon,
  CloseIcon,
  CancelIcon,
  CheckBoxOutlineBlankIcon,
  CheckBoxIcon,
  PersonIcon,
  GitHubIcon,
  ShoppingCartIcon,
} from "./";
import { expect, fn, userEvent, within } from "storybook/test";

const meta: Meta<typeof SearchIcon> = {
  title: "Atoms/IconButton",
  component: SearchIcon, // 메인 컴포넌트 명시
  tags: ["autodocs"], // 자동 문서 생성 태그 (선택 사항)
  args: {
    width: 32,
    height: 32,
    color: "black",
    backgroundColor: "gray",
    borderRadius: "8px",
    onClick: fn(),
  },
  argTypes: {
    width: {
      control: { type: "number" },
      description: "아이콘 버튼 너비",
      table: { type: { summary: "number" } },
    },
    height: {
      control: { type: "number" },
      description: "아이콘 버튼 높이",
      table: { type: { summary: "number" } },
    },
    color: {
      control: { type: "color" },
      description: "아이콘 색상",
      table: { type: { summary: "string" } },
    },
    backgroundColor: {
      control: { type: "color" },
      description: "아이콘 버튼 배경 색상",
      table: { type: { summary: "string" } },
    },
    borderRadius: {
      control: { type: "text" },
      description: "아이콘 버튼 테두리 곡률",
      table: { type: { summary: "string" } },
    },
    onClick: {
      type: "function",
      description: "onClick 이벤트 핸들러",
      table: { type: { summary: "function" } },
      action: "clicked",
    },
  },
  play: async ({ args, step, canvasElement }) => {
    await step("클릭 이벤트에 prop으로 받은 onClick 핸들러 호출", async () => {
      const canvas = within(canvasElement);
      await userEvent.click(canvas.getByRole("button"));
      expect(args.onClick).toHaveBeenCalled();
    });
  },
};

export default meta;

type Story = StoryObj<typeof SearchIcon>;

export const SearchIconButton: Story = {};

export const IconButtons: Story = {
  render: (args) => (
    <div>
      <SearchIcon {...args} />
      <CloudUploadIcon {...args} />
      <PersonOutlineIcon {...args} />
      <CloseIcon {...args} />
      <CancelIcon {...args} />
      <CheckBoxOutlineBlankIcon {...args} />
      <CheckBoxIcon {...args} />
      <PersonIcon {...args} />
      <GitHubIcon {...args} />
      <ShoppingCartIcon {...args} />
    </div>
  ),
};
