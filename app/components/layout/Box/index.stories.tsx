import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Box from ".";
import styled from "styled-components";

const meta = {
  // 👇 The component you're working on
  title: "Layout/Box",
  component: Box,
  tags: ["autodocs"],
} satisfies Meta<typeof Box>;

export default meta;
// 👇 Type helper to reduce boilerplate
type Story = StoryObj<typeof meta>;

const ChildComponent = styled.div`
  width: 100px;
  height: 100px;
  background-color: tomato;
  &:nth-child(2n) {
    background-color: gray;
  }
`;
// 👇 A story named Primary that renders `<Button primary label="Button" />`
export const Primary: Story = {
  render: (args) => (
    <Box {...args}>
      <ChildComponent />
      <ChildComponent />
      <ChildComponent />
      <ChildComponent />
      <ChildComponent />
    </Box>
  ),
};
