import type { Meta, StoryObj } from "@storybook/react";
import Header from "./index";
import { expect, fn, within } from "storybook/test";
import { ShoppingCartContext } from "@/app/contexts/ShoppingCartContext";
import { AuthContext } from "@/app/contexts/AuthContext";
import { Product, User } from "@/app/types/data";

type ContextArgsType = {
  cart: Product[];
  authUser: User | undefined;
  isLoading: boolean;
};

const meta: Meta<typeof Header> = {
  title: "Organisms/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen", // 헤더는 보통 꽉 찬 화면에서 확인합니다.
  },
  decorators: [
    (Story, context) => {
      // args에서 전달된 값을 Context value로 사용합니다.
      const {
        cart = [],
        authUser,
        isLoading = false,
      } = context.args as ContextArgsType;

      return (
        <AuthContext.Provider
          value={{
            authUser,
            isLoading,
            signin: fn(), // 빈 함수나 스파이 함수 주입
            signout: fn(),
            mutate: fn(),
          }}>
          <ShoppingCartContext.Provider
            value={{
              cart,
              addProductToCart: fn(),
              removeProductFromCart: fn(),
            }}>
            <Story />
          </ShoppingCartContext.Provider>
        </AuthContext.Provider>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<typeof Header>;

/**
 * 로그인하지 않은 상태
 */
export const NoLogin: Story = {
  args: {
    // Context에 주입될 Mock 데이터
    authUser: undefined,
    isLoading: false,
    cart: [],
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("메뉴 링크들이 정상적으로 표시된다", async () => {
      // 데스크탑 뷰 기준 메뉴 텍스트 확인
      await expect(canvas.getByText("모두")).toBeInTheDocument();
      await expect(canvas.getByText("의류")).toBeInTheDocument();
      await expect(canvas.getByText("책")).toBeInTheDocument();
      await expect(canvas.getByText("신발")).toBeInTheDocument();
    });

    await step("등록 버튼이 표시된다", async () => {
      await expect(
        canvas.getByRole("button", { name: "등록" }),
      ).toBeInTheDocument();
    });

    await step(
      "로그인하지 않았으므로 프로필 이미지가 없어야 한다",
      async () => {
        // authUser가 없으면 PersonIcon이 뜨고, ShapeImage는 없어야 함
        const profileImage = canvas.queryByTestId("profile-shape-image");
        expect(profileImage).not.toBeInTheDocument();
      },
    );
  },
};

/**
 * 로그인 상태
 */
const dummyUser = {
  id: 1,
  username: "dummy",
  displayName: "Hana Kim",
  email: "hana.kim@example.com",
  profileImageUrl: "/images/userimage.jpg",
  description: "",
};
export const Login: Story = {
  args: {
    authUser: dummyUser,
    isLoading: false,
    cart: [],
  },
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);

    await step("로그인 유저의 프로필 이미지가 표시된다", async () => {
      // data-testid="profile-shape-image" 요소 확인
      const profileImage = canvas.getByTestId("profile-shape-image");
      await expect(profileImage).toBeInTheDocument();

      // 이미지 src가 올바른지 확인 (props로 전달된 유저 정보와 일치하는지)
      await expect(profileImage).toHaveAttribute(
        "src",
        expect.stringContaining(
          (args as ContextArgsType).authUser?.profileImageUrl as string,
        ),
      );
    });

    await step(
      "프로필 이미지를 감싸는 링크가 유저 상세 페이지로 연결된다",
      async () => {
        const profileImage = canvas.getByTestId("profile-shape-image");
        // 이미지를 감싸는 가장 가까운 링크(a 태그) 찾기
        const profileLink = profileImage.closest("a");
        await expect(profileLink).toHaveAttribute(
          "href",
          `/users/${(args as ContextArgsType).authUser?.id}`,
        );
      },
    );
  },
};
/**
 * 로그인 + 장바구니 1개
 */
export const LoginWithCart: Story = {
  args: {
    authUser: dummyUser,
    isLoading: false,
    cart: [
      {
        id: 1,
        category: "book",
        title: "Product",
        description: "",
        imageUrl: "/images/sample/1.jpg",
        blurDataUrl: "",
        price: 10000,
        condition: "used",
        owner: dummyUser,
      },
    ],
  },
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);

    await step("장바구니 배지에 상품 개수가 표시된다", async () => {
      // 장바구니 아이템 개수인 "1" 텍스트가 뱃지에 표시되어야 함
      // BadgeIconButton 구현상 텍스트로 렌더링 된다고 가정
      const badgeCount = canvas.getByText(
        (args as ContextArgsType).cart!.length.toString(),
      );
      await expect(badgeCount).toBeInTheDocument();
      await expect(badgeCount).toBeVisible();
    });

    await step(
      "로그인 상태이므로 프로필 이미지도 유지되어야 한다",
      async () => {
        await expect(
          canvas.getByTestId("profile-shape-image"),
        ).toBeInTheDocument();
      },
    );
  },
};
