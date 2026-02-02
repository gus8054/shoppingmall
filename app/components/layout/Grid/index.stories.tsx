import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import styled from "styled-components";
import Grid from ".";

const meta = {
  // 👇 The component you're working on
  title: "Layout/Grid",
  component: Grid,
  tags: ["autodocs"],
} satisfies Meta<typeof Grid>;

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
    <Grid {...args}>
      <ChildComponent />
      <ChildComponent />
      <ChildComponent />
      <ChildComponent />
      <ChildComponent />
    </Grid>
  ),
};
