import { Meta, StoryObj } from "@storybook/nextjs-vite";
import ProductCardCarousel from ".";
import ProductCard from "../ProductCard";
import { expect, within } from "storybook/test";

const meta: Meta<typeof ProductCardCarousel> = {
  title: "Organisms/ProductCardCarousel",
  component: ProductCardCarousel,
  subcomponents: { ProductCard },
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
};

export default meta;

type Story = StoryObj<typeof ProductCardCarousel>;

// 테스트용 더미 데이터
const products = [
  {
    id: 1,
    title: "인간 관계론",
    price: 10000,
    imageUrl: "/images/books/1.jpg",
  },
  {
    id: 2,
    title: "언어의 품격",
    price: 20000,
    imageUrl: "/images/books/2.jpg",
  },
  {
    id: 3,
    title: "소통의 기술",
    price: 30000,
    imageUrl: "/images/books/3.jpg",
  },
  {
    id: 4,
    title: "대화의 기술",
    price: 40000,
    imageUrl: "/images/books/4.jpg",
  },
  { id: 5, title: "행동", price: 40000, imageUrl: "/images/books/5.jpg" },
  { id: 6, title: "ETF", price: 40000, imageUrl: "/images/books/6.jpg" },
];

export const Desktop: Story = {
  // render 함수를 사용하여 자식(children)을 직접 구성합니다.
  render: (args) => (
    <ProductCardCarousel {...args}>
      {products.map((p) => (
        // 캐러셀 아이템들이 찌그러지지 않도록 Box로 감싸고 min-width를 주는 것이 일반적입니다.
        // <Box key={p.id} style={{ flex: "0 0 240px", marginRight: "16px" }}>
        <ProductCard
          key={p.id}
          title={p.title}
          price={p.price}
          imageUrl={p.imageUrl}
          variant="small"
        />
        // </Box>
      ))}
    </ProductCardCarousel>
  ),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("모든 상품 카드가 렌더링되어야 한다", async () => {
      // 1. 모든 ProductCard의 제목(heading)을 찾습니다.
      const productHeadings = canvas.getAllByRole("heading");

      // 2. 전달한 데이터 개수(4개)만큼 렌더링되었는지 확인합니다.
      expect(productHeadings).toHaveLength(products.length);

      // 3. 첫 번째 상품과 마지막 상품이 잘 들어갔는지 텍스트 확인
      expect(
        canvas.getByRole("heading", { name: "Product 1" }),
      ).toBeInTheDocument();
      expect(
        canvas.getByRole("heading", { name: "Product 4" }),
      ).toBeInTheDocument();
    });
  },
};
export const Mobile: Story = {
  globals: {
    viewport: "mobile1",
  },
  render: Desktop.render,
  play: Desktop.play,
};
