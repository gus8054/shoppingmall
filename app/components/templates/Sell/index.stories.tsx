import type { Meta, StoryObj } from "@storybook/react";
import SellTemplate from ".";

const meta: Meta<typeof SellTemplate> = {
  title: "Templates/SellTemplate",
  component: SellTemplate,
  parameters: {
    // 1. 전체 화면 레이아웃 설정
    layout: "fullscreen",
    // 2. Next.js App Router 설정 (Link 등 지원)
    nextjs: {
      appDirectory: true,
    },
  },
  // 공통 Args 설정
  args: {},
};

export default meta;

type Story = StoryObj<typeof SellTemplate>;

/**
 * 1. 기본 상태
 * - 상품 등록 페이지의 전체적인 레이아웃 확인
 * - 데스크톱 뷰에서는 로고가 보이고, 모바일에서는 숨겨지는지 확인
 */
export const Default: Story = {};
