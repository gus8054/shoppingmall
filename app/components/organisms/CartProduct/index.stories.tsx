import type { Meta, StoryObj } from "@storybook/react";
import CartProduct from "./index";
import { expect, fn, userEvent, within } from "storybook/test";

const meta: Meta<typeof CartProduct> = {
  title: "Organisms/CartProduct",
  component: CartProduct,
  tags: ["autodocs"],
  argTypes: {
    id: {
      control: "number",
      description: "상품 ID",
      table: {
        type: { summary: "number" },
      },
    },
    title: {
      control: "text",
      description: "상품명",
      table: {
        type: { summary: "string" },
      },
    },
    imageUrl: {
      control: "text",
      description: "상품 이미지 URL",
      table: {
        type: { summary: "string" },
      },
    },
    price: {
      control: "number",
      description: "상품 가격",
      table: {
        type: { summary: "number" },
      },
    },
    onBuyButtonClick: {
      type: "function",
      description: "구입 버튼을 클릭했을 때의 이벤트 핸들러",
      action: "구입버튼 클릭 핸들러",
    },
    onRemoveButtonClick: {
      type: "function",
      description: "삭제 버튼을 클릭했을 때의 이벤트 핸들러",
      action: "[삭제/카트에서 삭제] 버튼 클릭 핸들러",
    },
  },
};

export default meta;

type Story = StoryObj<typeof CartProduct>;

// ----------------------------------------------------------------
// 1. 데스크탑 뷰 테스트 (기본)
// ----------------------------------------------------------------
export const DesktopView: Story = {
  args: {
    id: 1,
    imageUrl: "/images/shoes/3.jpg",
    title: "멋진 신발",
    price: 32000,
    onBuyButtonClick: fn(),
    onRemoveButtonClick: fn(),
  },
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);

    await step("상품 정보가 올바르게 표시된다", async () => {
      // 제목 확인
      await expect(canvas.getByText("멋진 신발")).toBeInTheDocument();
      // 가격 포맷팅 확인 (32000 -> 32,000원)
      await expect(canvas.getByText("32,000원")).toBeInTheDocument();

      // 이미지 렌더링 확인
      const image = canvas.getByRole("img");
      await expect(image).toHaveAttribute(
        "src",
        expect.stringContaining("/images/sample/1.jpg"),
      );
    });

    await step("구입 버튼 클릭 시 핸들러가 호출된다", async () => {
      const buyButton = canvas.getByRole("button", { name: "구입" });
      await userEvent.click(buyButton);
      // ID(1)과 함께 호출되었는지 확인
      await expect(args.onBuyButtonClick).toHaveBeenCalledWith(1);
    });

    await step("삭제 텍스트(Desktop) 클릭 시 핸들러가 호출된다", async () => {
      // Desktop 뷰에서는 "삭제" 버튼은 숨겨지고 "카트에서 삭제" 텍스트가 보입니다.
      // 따라서 텍스트를 클릭하여 테스트합니다.
      const removeText = canvas.getByText("카트에서 삭제");

      // 화면에 보이는지 확인 (display: block 인지)
      await expect(removeText).toBeVisible();

      await userEvent.click(removeText);
      await expect(args.onRemoveButtonClick).toHaveBeenCalledWith(1);
    });
  },
};

// ----------------------------------------------------------------
// 2. 모바일 뷰 테스트 (추가)// tdodo
// ----------------------------------------------------------------
export const MobileView: Story = {
  args: {
    ...DesktopView.args,
  },
  globals: {
    // 👇 Set viewport for all component stories
    viewport: { value: "mobile1", isRotated: false },
  },
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);

    await step(
      "모바일에서는 '삭제' 버튼이 표시되고 작동해야 한다",
      async () => {
        // 모바일에서는 "카트에서 삭제" 텍스트가 숨겨져야 함
        const removeText = canvas.queryByText("카트에서 삭제");
        // 요소는 존재하지만 display: none 상태일 수 있으므로 not.toBeVisible() 사용
        if (removeText) await expect(removeText).not.toBeVisible();

        // 대신 "삭제" 버튼(Danger Variant)이 보여야 함
        const removeButton = canvas.getByRole("button", { name: "삭제" });
        await expect(removeButton).toBeVisible();

        await userEvent.click(removeButton);
        await expect(args.onRemoveButtonClick).toHaveBeenCalledWith(1);
      },
    );
  },
};
