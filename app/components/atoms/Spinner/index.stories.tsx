import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import styled from "styled-components";
import Spinner from "./index";

// 1. 래퍼 컴포넌트 정의 (기존 유지)
const SpinnerWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1199;
  background-color: rgba(255, 255, 255, 0.5);
`;

const meta: Meta<typeof Spinner> = {
  title: "Atoms/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  args: {
    size: 50,
    strokeWidth: 4,
    color: "tomato",
  },
  decorators: [
    (Story) => {
      return (
        <SpinnerWrapper>
          <Story />
        </SpinnerWrapper>
      );
    },
  ],
  argTypes: {
    size: {
      control: "number",
      description: "크기",
      table: {
        type: { summary: "number" },
      },
    },
    strokeWidth: {
      control: "number",
      description: "선 폭",
      table: {
        type: { summary: "number" },
      },
    },
    color: {
      control: { type: "color" },
      description: "색상",
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Normal: Story = {};
