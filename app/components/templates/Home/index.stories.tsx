import type { Meta, StoryObj } from "@storybook/react";
import { Product, User } from "@/app/types/data";
import HomeTemplate from ".";

// 1. 더미 데이터 생성
// ProductList 컴포넌트가 반복적으로 사용되므로, 각 카테고리별 샘플 데이터를 만듭니다.

const mockUser: User = {
  id: 1,
  username: "story-user",
  displayName: "스토리북유저",
  email: "test@example.com",
  profileImageUrl: "/images/userimage.jpg",
  description: "Test User",
};

// 의류 데이터 샘플 (2개)
const clothesProducts: Product[] = [
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

// 책 데이터 샘플 (2개)
const bookProducts: Product[] = [
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
];

// 신발 데이터 샘플 (1개)
const shoesProducts: Product[] = [
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
];

const meta: Meta<typeof HomeTemplate> = {
  title: "Templates/HomeTemplate",
  component: HomeTemplate,
  parameters: {
    // 전체 화면 레이아웃
    layout: "fullscreen",
    // Next.js App Router 링크 지원
    nextjs: {
      appDirectory: true,
    },
  },
  // 공통 Args 설정 (실제 Server Component가 받는 props 구조와 동일하게 주입)
  args: {
    clothesProducts,
    bookProducts,
    shoesProducts,
  },
};

export default meta;

type Story = StoryObj<typeof HomeTemplate>;

export const Default: Story = {};
