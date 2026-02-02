import type { Meta, StoryObj } from "@storybook/react";
import { Product, User } from "@/app/types/data";
import { expect, within } from "storybook/test";
import UserTemplate from ".";

// 1. 더미 데이터 생성
const mockUser: User = {
  id: 1,
  username: "KDH user",
  displayName: "동현",
  email: "test@example.com",
  profileImageUrl: "/images/userimage.jpg", // public 폴더에 샘플 이미지가 있다고 가정하거나 웹 URL 사용
  description: "안녕하세요! 동현샵의 동현입니다.",
};

const mockProducts: Product[] = [
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

const meta: Meta<typeof UserTemplate> = {
  title: "Templates/UserTemplate",
  component: UserTemplate,
  parameters: {
    // 2. 전체 화면 레이아웃 설정
    layout: "fullscreen",
    // 3. Next.js App Router 설정 (next/link 지원)
    nextjs: {
      appDirectory: true,
    },
  },
  // 공통 Args 설정
  args: {
    user: mockUser,
    products: mockProducts,
  },
};

export default meta;

type Story = StoryObj<typeof UserTemplate>;

/**
 * 1. 기본 렌더링 테스트
 * - 사용자 정보가 올바르게 표시되는지 확인
 * - 상품 리스트가 렌더링되는지 확인
 */
export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // 1-1. 사용자 프로필 정보 확인
    // username과 displayName이 합쳐진 텍스트를 찾습니다.
    await expect(
      canvas.getByText("story-user (스토리북유저)"),
    ).toBeInTheDocument();

    // description 확인
    await expect(
      canvas.getByText("안녕하세요! Storybook으로 UI를 테스트하고 있습니다."),
    ).toBeInTheDocument();

    // 1-2. 상품 개수 확인 (mockProducts 길이만큼 렌더링 되었는지)
    // ProductCard의 제목으로 요소들을 찾습니다.
    const productTitles = [
      "멋진 운동화",
      "따뜻한 겨울 코트",
      "Next.js 완벽 가이드",
    ];

    for (const title of productTitles) {
      await expect(canvas.getByText(title)).toBeInTheDocument();
    }
  },
};

/**
 * 2. 상품이 없는 경우 (Empty State)
 * - 상품이 없을 때 에러 없이 사용자 정보만 잘 나오는지 확인
 */
export const EmptyProducts: Story = {
  args: {
    products: [],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // 사용자 정보는 여전히 보여야 함
    await expect(
      canvas.getByText("story-user (스토리북유저)"),
    ).toBeInTheDocument();

    // 상품 리스트 영역이 비어있는지 확인 (ProductCard가 없어야 함)
    // queryByText는 요소를 못 찾으면 null을 반환합니다. (getByText는 에러 발생)
    const productCard = canvas.queryByText("멋진 운동화");
    await expect(productCard).not.toBeInTheDocument();
  },
};
