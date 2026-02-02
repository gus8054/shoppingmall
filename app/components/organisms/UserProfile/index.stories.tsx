import type { Meta, StoryObj } from "@storybook/react";
import UserProfile from "./index";
import { expect, within } from "storybook/test";

const meta: Meta<typeof UserProfile> = {
  title: "Organisms/UserProfile",
  component: UserProfile,
  tags: ["autodocs"], // 자동 문서화
  argTypes: {
    variant: {
      options: ["normal", "small"],
      control: { type: "radio" },
      description: "변형(표시 스타일)",
      table: {
        type: { summary: "normal | small" },
        defaultValue: { summary: "normal" },
      },
    },
    username: {
      control: { type: "text" },
      description: "사용자명",
      table: {
        type: { summary: "string" },
      },
    },
    profileImageUrl: {
      control: { type: "text" },
      description: "사용자 이미지 URL",
      table: {
        type: { summary: "string" },
      },
    },
    numberOfProducts: {
      control: { type: "number" },
      description: "사용자 소유한 상품 수",
      table: {
        type: { summary: "number" },
      },
    },
    description: {
      control: { type: "text" },
      description: "사용자 설명",
      table: {
        type: { summary: "string" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof UserProfile>;

// ----------------------------------------------------------------
// 1. Small Variant 테스트
// 핵심: 설명(Description) 텍스트가 화면에 나오지 않아야 함
// ----------------------------------------------------------------
export const Small: Story = {
  args: {
    variant: "small",
    username: "테스트 사용자",
    profileImageUrl: "/images/userimage.jpg",
    numberOfProducts: 2000,
    description: "샘플 텍스트",
  },
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);

    await step("사용자명과 상품 개수 텍스트가 표시된다", async () => {
      await expect(canvas.getByText(args.username)).toBeInTheDocument();
      // "2000개 제품 게시 완료" 텍스트 조합 확인
      await expect(
        canvas.getByText(`${args.numberOfProducts}개 제품 게시 완료`),
      ).toBeInTheDocument();
    });

    await step(
      "Small 모드에서는 설명(Description)이 렌더링되지 않는다",
      async () => {
        // queryByText는 요소를 찾지 못하면 null을 반환합니다. (getByText는 에러 발생)
        // 따라서 '없음'을 확인할 때는 queryBy...를 사용해야 합니다.
        const descriptionElement = canvas.queryByText(
          args.description as string,
        );
        await expect(descriptionElement).not.toBeInTheDocument();
      },
    );

    await step("프로필 이미지가 올바른 소스로 렌더링된다", async () => {
      const image = canvas.getByRole("img");
      await expect(image).toBeInTheDocument();
      // Next.js 이미지 최적화 파라미터 무시하고 경로 포함 여부 확인
      await expect(image).toHaveAttribute(
        "src",
        expect.stringContaining(args.profileImageUrl),
      );
    });
  },
};

// ----------------------------------------------------------------
// 2. Normal Variant 테스트
// 핵심: 설명(Description) 텍스트가 화면에 나와야 함
// ----------------------------------------------------------------
export const Normal: Story = {
  args: {
    variant: "normal",
    username: "테스트 사용자",
    profileImageUrl: "/images/userimage.jpg",
    numberOfProducts: 50,
    description: "안녕하세요! 좋은 상품 많이 팝니다.",
  },
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);

    await step("사용자명과 상품 개수가 표시된다", async () => {
      await expect(canvas.getByText(args.username)).toBeInTheDocument();
      await expect(
        canvas.getByText(`${args.numberOfProducts}개 제품 게시 완료`),
      ).toBeInTheDocument();
    });

    await step("Normal 모드에서는 설명(Description)이 표시된다", async () => {
      // Small과 달리 여기서는 요소가 있어야 하므로 getByText 사용 가능
      await expect(
        canvas.getByText(args.description as string),
      ).toBeInTheDocument();
    });

    await step("프로필 이미지가 표시된다", async () => {
      const image = canvas.getByRole("img");
      await expect(image).toBeInTheDocument();
      await expect(image).toHaveAttribute(
        "src",
        expect.stringContaining(args.profileImageUrl),
      );
    });
  },
};
