import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import BadgeIconButton from "./index";
import {
  PersonIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@/app/components/atoms/IconButton";
import { expect, fn, userEvent, within } from "storybook/test";

const iconButtons = {
  SearchIcon,
  ShoppingCartIcon,
  PersonIcon,
};
const meta: Meta<typeof BadgeIconButton> = {
  title: "Molecules/BadgeIconButton",
  component: BadgeIconButton,
  tags: ["autodocs"],
  args: {
    size: 24,
    onClick: fn(),
  },
  argTypes: {
    IconButton: {
      options: Object.keys(iconButtons),
      mapping: iconButtons,
      control: {
        type: "select",
        labels: {
          SearchIcon: "Search Icon",
          PersonIcon: "Person Icon",
          ShoppingCartIcon: "Shopping Cart Icon",
        },
      },
    },
    size: {
      control: { type: "number" },
      description: "아이콘 크기, 정사각형 모양",
      table: {
        type: {
          summary: "number",
        },
      },
    },
    badgeContent: {
      control: { type: "number" },
      description: "배찌에 나오는 숫자",
      table: {
        type: {
          summary: "number",
        },
      },
    },
    badgeBackgroundColor: {
      control: { type: "color" },
      description: "배찌의 색상",
      table: {
        type: {
          summary: "color",
        },
      },
    },
    iconBackgroundColor: {
      control: { type: "color" },
      description: "배찌의 색상",
      table: {
        type: {
          summary: "color",
        },
      },
    },
    onClick: {
      type: "function",
      description: "배찌 아이콘 버튼의 onClick 핸들러",
      action: "clicked",
    },
  },
  play: async ({ canvasElement, args, step }) => {
    await step("클릭 이벤트 발생시 prop으로 받은 onClick 호출", async () => {
      const canvas = within(canvasElement);
      const button = canvas.getByRole("button");
      await userEvent.click(button);
      await expect(args.onClick).toHaveBeenCalled();
    });
  },
};

export default meta;

type Story = StoryObj<typeof BadgeIconButton>;
export const SearchBadgeIcon: Story = {
  args: {
    IconButton: SearchIcon,
    badgeContent: 1,
    badgeBackgroundColor: "#ed9f28",
  },
};

export const PersonBadgeIcon: Story = {
  args: {
    IconButton: PersonIcon,
    badgeContent: 1,
    badgeBackgroundColor: "#d4001a",
  },
};

export const ShoppingCartBadgeIcon: Story = {
  args: {
    IconButton: ShoppingCartIcon,
    badgeContent: 1,
    badgeBackgroundColor: "#32bf00",
  },
};

export const NoBadgeContent: Story = {
  args: {
    IconButton: PersonIcon,
    badgeBackgroundColor: "#d4001a",
  },
};
