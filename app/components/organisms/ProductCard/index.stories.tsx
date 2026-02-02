import type { Meta, StoryObj } from "@storybook/react";
import ProductCard from "./index";
import { expect, within } from "storybook/test";
import styled from "styled-components";

const Container = styled.div`
  width: 400px;
  heigh: 400px;
`;
const meta: Meta<typeof ProductCard> = {
  title: "Organisms/ProductCard",
  component: ProductCard,
  tags: ["autodocs"], // 자동 문서 생성 (Docs 탭)
  argTypes: {
    title: {
      control: { type: "text" },
      description: "상품명",
      table: {
        type: { summary: "string" },
      },
    },
    price: {
      control: { type: "number" },
      description: "상품 가격",
      table: {
        type: { summary: "number" },
      },
    },
    imageUrl: {
      control: { type: "text" },
      description: "상품 이미지 URL",
      table: {
        type: { summary: "string" },
      },
    },
    blurDataUrl: {
      control: { type: "text" },
      description: "상품의 흐릿한 이미지의 데이터 URI 스킴",
      table: {
        type: { summary: "string" },
      },
    },
    variant: {
      options: ["listing", "small", "detail"],
      control: { type: "radio" },
      description: "변경(표시 스타일)",
      table: {
        type: { summary: "listing | small | detail" },
        defaultValue: { summary: "listing" },
      },
    },
  },
  render: (args) => (
    <Container>
      <ProductCard {...args} />
    </Container>
  ),
};

export default meta;

type Story = StoryObj<typeof ProductCard>;

// ----------------------------------------------------------------
// 1. Listing 카드 테스트 (기본 오버레이 스타일)
// ----------------------------------------------------------------
export const Listing: Story = {
  args: {
    variant: "listing",
    title: "멋진 신발",
    imageUrl: "/images/shoes/3.jpg",
    price: 20000,
  },
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);

    await step("상품 이미지가 렌더링된다", async () => {
      const image = canvas.getByRole("img");
      await expect(image).toBeInTheDocument();
      // Next.js Image 최적화 파라미터 무시하고 경로 확인
      await expect(image).toHaveAttribute(
        "src",
        expect.stringContaining(args.imageUrl as string),
      );
    });

    await step("상품명과 가격이 렌더링된다", async () => {
      // 제목 확인
      await expect(
        canvas.getByRole("heading", { name: args.title }),
      ).toBeInTheDocument();

      // 가격 확인 (20000 -> 20000원)
      // 컴포넌트 내부에서 {price}원 형태로 렌더링함 (toLocaleString 없음)
      await expect(
        canvas.getByText(`${args.price.toLocaleString()}원`),
      ).toBeInTheDocument();
    });
  },
};

// ----------------------------------------------------------------
// 2. Small 카드 테스트 (하단 텍스트 스타일)
// ----------------------------------------------------------------
export const Small: Story = {
  args: {
    variant: "small",
    title: "작은 멋진 신발",
    imageUrl: "/images/shoes/3.jpg",
    price: 20000,
  },
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);

    await step("Small 모드에서도 상품 정보가 올바르게 표시된다", async () => {
      // 이미지 확인
      const image = canvas.getByRole("img");
      await expect(image).toBeInTheDocument();

      // 제목 확인 (Small 모드에서도 h2 태그 사용됨)
      await expect(
        canvas.getByRole("heading", { name: args.title }),
      ).toBeInTheDocument();

      // 가격 확인
      await expect(
        canvas.getByText(`${args.price.toLocaleString()}원`),
      ).toBeInTheDocument();
    });
  },
};

// ----------------------------------------------------------------
// 3. Detail 카드 테스트 (큰 이미지 오버레이 스타일)
// ----------------------------------------------------------------
export const Detail: Story = {
  args: {
    variant: "detail",
    title: "상세 페이지 신발",
    imageUrl: "/images/shoes/3.jpg",
    price: 20000,
  },
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);

    await step("Detail 모드 상품 정보 확인", async () => {
      const image = canvas.getByRole("img");
      await expect(image).toBeInTheDocument();
      await expect(
        canvas.getByRole("heading", { name: args.title }),
      ).toBeInTheDocument();
      await expect(
        canvas.getByText(`${args.price.toLocaleString()}원`),
      ).toBeInTheDocument();
    });
  },
};
