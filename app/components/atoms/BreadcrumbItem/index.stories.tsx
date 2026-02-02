import { Meta, StoryObj } from "@storybook/nextjs-vite";
import BreadcrumbItem from ".";

// 1. Meta 설정
const meta: Meta<typeof BreadcrumbItem> = {
  title: "Atoms/BreadcrumbItem",
  tags: ["autodocs"], // 자동 문서 생성 (선택사항이지만 권장)
  component: BreadcrumbItem,
  args: {
    href: "#",
  },
};

export default meta;

// 2. Story 타입 정의
type Story = StoryObj<typeof BreadcrumbItem>;

// 3. Story 정의
export const OneItem: Story = {
  args: {
    children: "one",
  },
};
export const TwoItems: Story = {
  render: () => {
    return (
      <ol>
        <BreadcrumbItem href="#">one</BreadcrumbItem>
        <BreadcrumbItem href="#">two</BreadcrumbItem>
      </ol>
    );
  },
};

export const ThreeItems: Story = {
  render: () => {
    return (
      <ol>
        <BreadcrumbItem href="#">one</BreadcrumbItem>
        <BreadcrumbItem href="#">two</BreadcrumbItem>
        <BreadcrumbItem href="#">three</BreadcrumbItem>
      </ol>
    );
  },
};
