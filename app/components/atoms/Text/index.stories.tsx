import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Text from "./index";

const longText = `It is a long established fact that a reader will be
distracted by the readable content of a page when looking at its layout.
The point of using Lorem Ipsum is that it has a more - or - less normal
distribution of letters, as opposed to using Content here, content here,
making it look like readable English.Many desktop publishing packages and
web page editors now use Lorem Ipsum as their default model text, and a
search for lorem ipsum will uncover many web sites still in their infancy.
Various versions have evolved over the years, sometimes by accident,
sometimes on purpose(injected humour and the like).`;

const meta: Meta<typeof Text> = {
  title: "Atoms/Text",
  component: Text,
  tags: ["autodocs"],
  args: {
    variant: "medium",
    children: longText,
  },
  argTypes: {
    variant: {
      options: [
        "extraSmall",
        "small",
        "medium",
        "mediumLarge",
        "large",
        "extraLarge",
      ],
      control: "select",
      description: "텍스트 변형",
      table: {
        type: {
          summary: "extraSmall , small, medium, mediumLarge, large, extraLarge",
        },
        defaultValue: { summary: "medium" },
      },
    },
    children: {
      control: "text",
      description: "텍스트",
      table: {
        type: { summary: "string" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const ExtraSmall: Story = {
  args: {
    variant: "extraSmall",
  },
};

export const Small: Story = {
  args: {
    variant: "small",
  },
};

export const Medium: Story = {
  args: {
    variant: "medium",
  },
};

export const Large: Story = {
  args: {
    variant: "large",
  },
};

export const ExtraLarge: Story = {
  args: {
    variant: "extraLarge",
  },
};
export const CustomText: Story = {
  args: {
    style: {
      color: "tomato",
      fontSize: "3rem",
    },
  },
};
