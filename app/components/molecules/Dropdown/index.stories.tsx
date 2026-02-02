import type { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "storybook/preview-api";
import Dropdown, { DropdownItemType } from "./index";
import { expect, fn, userEvent, waitFor, within } from "storybook/test";

const meta: Meta<typeof Dropdown> = {
  title: "Molecules/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  // 공통 기본값 설정
  args: {
    hasError: false,
    placeholder: "항목을 선택해주세요",
    options: [
      { value: "apple", label: "사과" },
      { value: "banana", label: "바나나" },
      { value: "orange", label: "오렌지" },
      { value: "grape1", label: "포도" },
    ],
    onChange: fn(),
  },
  argTypes: {
    options: {
      control: "object",
      description: "드롭다운 선택지 리스트",
    },
    value: {
      control: "text", // 혹은 'select'로 설정하여 테스트 가능
      description: "선택된 값 (Controlled prop)",
    },
    name: {
      control: "text",
      description: "input 요소의 name",
    },
    placeholder: {
      control: "text",
    },
    hasError: {
      control: "boolean",
    },
    onChange: { action: "changed" },
  },
  render: function Render(args) {
    const [{ value }, updateArgs] = useArgs();

    const handleChange = (item: DropdownItemType) => {
      updateArgs({ value: item.value }); // 화면 갱신
      args.onChange?.(item); // Actions 패널에 로그 남기기
    };
    return <Dropdown {...args} value={value} onChange={handleChange} />;
  },
  play: async ({ canvas, step, args }) => {
    const dropdownControl = canvas.getByTestId("dropdown-control");
    const dropdownMenu = canvas.getByTestId("dropdown-menu");
    const targetItem = args.options[1];
    await step("클릭시 메뉴 open", async () => {
      await userEvent.click(dropdownControl);
      await expect(dropdownMenu).toBeVisible();
    });

    await step("바깥 요소 클릭시 메뉴 close", async () => {
      await userEvent.click(document.body);
      await waitFor(() => {
        expect(dropdownMenu).not.toBeVisible();
      });
    });

    await step("다시 클릭시 메뉴 open", async () => {
      await userEvent.click(dropdownControl);
      await expect(dropdownMenu).toBeVisible();
    });

    await step("메뉴 아이템 클릭시 메뉴 close", async () => {
      // 메뉴가 열린 상태에서 '옵션 2' 텍스트를 가진 요소 찾기
      // within(dropdownMenu)를 사용하여 메뉴 내부에서만 검색
      const option = within(dropdownMenu).getByText(targetItem.label!);

      await userEvent.click(option);

      // 클릭 후 닫혔는지 확인
      await waitFor(() => {
        expect(dropdownMenu).not.toBeVisible();
      });
    });
    await step("선택한 아이템으로 변환", async () => {
      const selectedValueDisplay = within(dropdownControl).getByText(
        targetItem.label!,
      );
      await expect(selectedValueDisplay).toBeInTheDocument();
      await expect(selectedValueDisplay).toBeVisible();
      const dropdownInput =
        within(dropdownControl).getByTestId("dropdown-input");
      await expect(dropdownInput).toHaveValue(targetItem.value);
    });
    await step("prop으로 받은 onChange(item) 핸들러 호출", async () => {
      await expect(args.onChange).toHaveBeenCalledWith(targetItem);
    });
  },
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

// 1. 기본 상태
export const Normal: Story = {};

// 2. 초기값이 있는 상태
export const InitialValue: Story = {
  args: {
    value: "banana", // options에 있는 value와 일치해야 함
  },
};

// 3. 에러 상태
export const Error: Story = {
  args: {
    hasError: true,
  },
};

// 4. 옵션이 많은 경우 (스크롤 테스트)
export const Scrollable: Story = {
  args: {
    placeholder: "스크롤하여 선택하세요",
    options: Array.from({ length: 20 }, (_, k) => ({
      value: k,
      label: `${k}번 아이템`,
    })),
  },
};
