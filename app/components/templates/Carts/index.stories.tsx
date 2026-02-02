import type { Meta, StoryObj } from "@storybook/react";
import { Product, User } from "@/app/types/data";
import CartTemplate from ".";

// 1. 더미 데이터 생성 (Mock Data)
const mockUser: User = {
  id: 1,
  username: "shopper",
  displayName: "쇼핑왕",
  email: "shopper@example.com",
  profileImageUrl: "/images/sample/1.jpg",
  description: "쇼핑을 좋아합니다.",
};

const mockCartItems: Product[] = [
  {
    id: 205,
    category: "book",
    title: "행동",
    description: "필독서",
    imageUrl: "/images/books/5.jpg",
    blurDataUrl: "",
    price: 30000,
    condition: "new",
    owner: mockUser,
  },
  {
    id: 206,
    category: "book",
    title: "ETF",
    description: "필독서",
    imageUrl: "/images/books/6.jpg",
    blurDataUrl: "",
    price: 30000,
    condition: "new",
    owner: mockUser,
  },
  {
    id: 101,
    category: "clothes",
    title: "빈티지 데님 자켓",
    description: "상태 좋은 자켓입니다.",
    imageUrl: "/images/clothes/1.jpg",
    blurDataUrl: "",
    price: 35000,
    condition: "used",
    owner: mockUser,
  },
  {
    id: 102,
    category: "clothes",
    title: "여름용 린넨 셔츠",
    description: "시원해요.",
    imageUrl: "/images/clothes/2.png",
    blurDataUrl: "",
    price: 20000,
    condition: "new",
    owner: mockUser,
  },
];

const meta: Meta<typeof CartTemplate> = {
  title: "Templates/CartTemplate",
  component: CartTemplate,
  parameters: {
    // 2. 전체 화면 레이아웃 설정
    layout: "fullscreen",
    // 3. Next.js App Router 설정 (Link 컴포넌트 지원)
    nextjs: {
      appDirectory: true,
    },
  },
  // 공통 Args 설정
  args: {
    cart: mockCartItems,
  },
};

export default meta;

type Story = StoryObj<typeof CartTemplate>;

/**
 * 1. 기본 상태 (상품이 담겨 있을 때)
 * - 장바구니에 담긴 상품 리스트가 렌더링되는지 확인
 */
export const Default: Story = {};

/**
 * 2. 빈 장바구니 상태 (Empty State)
 * - cart props가 빈 배열일 때 UI 확인
 * - 현재 컴포넌트에는 '장바구니가 비었습니다' 같은 별도 UI가 없으므로,
 * 제목만 나오고 리스트가 없는 상태가 정상입니다.
 */
export const EmptyCart: Story = {
  args: {
    cart: [],
  },
};

/**
 * 3. 많은 상품이 담긴 상태
 * - 스크롤이 생길 정도로 많은 상품이 있을 때 레이아웃 확인
 */
export const ManyItems: Story = {
  args: {
    // 기존 아이템을 3번 복제하여 리스트를 늘림
    cart: [
      ...mockCartItems,
      ...mockCartItems.map((p) => ({ ...p, id: p.id + 10 })),
      ...mockCartItems.map((p) => ({ ...p, id: p.id + 20 })),
    ],
  },
};
