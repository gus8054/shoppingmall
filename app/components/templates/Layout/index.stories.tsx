import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Layout from ".";
import styled from "styled-components";

const EmptyBody = styled.div`
  width: 100vw;
  height: 90vh;
  background-color: #dedede;
`;
const meta = {
  title: "Templates/LayoutTemplate",
  component: Layout,
  tags: ["autodocs"],
  args: {
    children: <EmptyBody />,
  },
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Layout>;

export default meta;
// 👇 Type helper to reduce boilerplate
type Story = StoryObj<typeof meta>;

// 👇 A story named Primary that renders `<Button primary label="Button" />`
export const DesktopView: Story = {};
export const MobileView: Story = {
  globals: {
    viewport: { value: "mobile2", isRotated: false },
  },
};
