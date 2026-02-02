import type { Meta, StoryObj } from "@storybook/react";
import { Product, User } from "@/app/types/data";
import SearchTemplate from ".";
import { fn } from "storybook/test";

// 1. 더미 데이터 생성
const mockUser: User = {
  id: 1,
  username: "story-user",
  displayName: "Test User",
  email: "test@example.com",
  profileImageUrl: "/images/sample/1.jpg",
  description: "Test",
};

const mockProducts: Product[] = [
  {
    id: 301,
    category: "shoes",
    title: "나이키 러닝화",
    description: "한 번 신었습니다.",
    imageUrl: "/images/shoes/3.jpg",
    blurDataUrl: "",
    price: 89000,
    condition: "used",
    owner: mockUser,
  },
  {
    id: 302,
    category: "shoes",
    title: "나이키 러닝화",
    description: "한 번 신었습니다.",
    imageUrl: "/images/shoes/4.jpg",
    blurDataUrl: "",
    price: 89000,
    condition: "used",
    owner: mockUser,
  },
  {
    id: 201,
    category: "book",
    title: "인간 관계론",
    description: "공부하기 좋은 책",
    imageUrl: "/images/books/1.jpg",
    blurDataUrl: "",
    price: 15000,
    condition: "used",
    owner: mockUser,
  },
  {
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
  {
    id: 203,
    category: "book",
    title: "소통의 기술",
    description: "필독서",
    imageUrl: "/images/books/3.jpg",
    blurDataUrl: "",
    price: 30000,
    condition: "new",
    owner: mockUser,
  },
  {
    id: 204,
    category: "book",
    title: "대화의 기술",
    description: "필독서",
    imageUrl: "/images/books/4.jpg",
    blurDataUrl: "",
    price: 30000,
    condition: "new",
    owner: mockUser,
  },
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
  {
    id: 103,
    category: "clothes",
    title: "빈티지 데님 자켓",
    description: "상태 좋은 자켓입니다.",
    imageUrl: "/images/clothes/3.png",
    blurDataUrl: "",
    price: 35000,
    condition: "used",
    owner: mockUser,
  },
  {
    id: 104,
    category: "clothes",
    title: "여름용 린넨 셔츠",
    description: "시원해요.",
    imageUrl: "/images/clothes/4.png",
    blurDataUrl: "",
    price: 20000,
    condition: "new",
    owner: mockUser,
  },
  {
    id: 105,
    category: "clothes",
    title: "빈티지 데님 자켓",
    description: "상태 좋은 자켓입니다.",
    imageUrl: "/images/clothes/5.jpg",
    blurDataUrl: "",
    price: 35000,
    condition: "used",
    owner: mockUser,
  },
  {
    id: 106,
    category: "clothes",
    title: "여름용 린넨 셔츠",
    description: "시원해요.",
    imageUrl: "/images/clothes/6.jpg",
    blurDataUrl: "",
    price: 20000,
    condition: "new",
    owner: mockUser,
  },
];

const meta: Meta<typeof SearchTemplate> = {
  title: "Templates/SearchTemplate",
  component: SearchTemplate,
  parameters: {
    layout: "fullscreen",
    nextjs: {
      appDirectory: true,
    },
  },
  // 공통 Args 설정
  args: {
    handleFilterGroupChange: fn(), // 이벤트 핸들러 모킹
    products: mockProducts, // 기본적으로 상품이 있는 상태
    slug: [],
    conditions: [],
  },
};

export default meta;

type Story = StoryObj<typeof SearchTemplate>;

/**
 * 1. 기본 상태 (상품 목록 있음)
 * - 필터나 카테고리가 선택되지 않은 초기 검색 화면
 */
export const Default: Story = {};

/**
 * 2. 상품이 없는 경우 (Empty State)
 * - 검색 결과가 0건일 때 UI 확인
 */
export const EmptyResult: Story = {
  args: {
    products: [],
  },
};

/**
 * 3. 카테고리 선택 상태 ('신발')
 * - Breadcrumb: 홈 > 검색 > 신발
 * - 실제 로직에서는 신발 데이터만 필터링되어야 하지만,
 * 스토리북에서는 UI 확인용이므로 mockProducts를 그대로 보여주거나
 * 신발 데이터만 직접 filtering해서 넣어줄 수 있습니다.
 */
export const CategorySelected: Story = {
  args: {
    slug: ["shoes"],
    // 시각적 일관성을 위해 신발 데이터만 주입해봅니다.
    products: mockProducts.filter((p) => p.category === "shoes"),
  },
};

/**
 * 4. 필터 선택 상태 ('중고 상품')
 * - 필터 체크박스 활성화 확인
 */
export const ConditionSelected: Story = {
  args: {
    conditions: ["used"],
    // 시각적 일관성을 위해 중고 상품만 주입
    products: mockProducts.filter((p) => p.condition === "used"),
  },
};
