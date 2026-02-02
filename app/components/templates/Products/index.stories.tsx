import type { Meta, StoryObj } from "@storybook/react";
import { Product, User } from "@/app/types/data";
import ProductDetailTemplate from ".";

// 1. 더미 데이터 생성
const mockUser: User = {
  id: 1,
  username: "seller_king",
  displayName: "판매왕",
  email: "seller@example.com",
  profileImageUrl: "/images/userimage.jpg",
  description: "좋은 물건만 팝니다.",
};

const mockProduct: Product = {
  id: 301,
  category: "shoes",
  title: "나이키 러닝화",
  description:
    "한 번 신었습니다.상태는 A급이며, 박스 포함입니다.직거래는 강남역에서 가능합니다.네고 문의는 정중히 사양합니다.",
  imageUrl: "/images/shoes/3.jpg",
  blurDataUrl: "",
  price: 89000,
  condition: "used",
  owner: mockUser,
};

const meta: Meta<typeof ProductDetailTemplate> = {
  title: "Templates/ProductDetailTemplate",
  component: ProductDetailTemplate,
  parameters: {
    // 2. 전체 화면 레이아웃
    layout: "fullscreen",
    // 3. Next.js App Router 설정 (Link 지원)
    nextjs: {
      appDirectory: true,
    },
  },
  // 공통 Args 설정
  args: {
    product: mockProduct,
  },
};

export default meta;

type Story = StoryObj<typeof ProductDetailTemplate>;

/**
 * 1. 기본 상태
 * - 일반적인 상품 상세 페이지
 */
export const Default: Story = {};

/**
 * 2. 긴 설명 텍스트
 * - 설명이 매우 길 때 레이아웃이 깨지지 않는지 확인
 */
export const LongDescription: Story = {
  args: {
    product: {
      ...mockProduct,
      title: "매우 긴 설명이 있는 상품",
      description: `이 상품에 대한 설명을 아주 길게 작성해보겠습니다.
줄바꿈이 제대로 되는지 확인해야 합니다.

1. 상품의 특징
- 아주 튼튼합니다.
- 디자인이 예쁩니다.
- 가격이 합리적입니다.

2. 주의사항
- 교환/환불 불가합니다.
- 신중하게 구매해주세요.

(반복 텍스트)
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    },
  },
};

/**
 * 3. 다른 카테고리 (책)
 * - Breadcrumb 경로와 텍스트가 '책'으로 잘 바뀌는지 확인
 */
export const BookCategory: Story = {
  args: {
    product: {
      id: 202,
      category: "book",
      title: "언어의 품격",
      description: "필독서",
      imageUrl: "/images/books/2.jpg",
      blurDataUrl: "",
      price: 30000,
      condition: "new",
      owner: mockUser,
    },
  },
};
