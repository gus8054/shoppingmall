import type { Meta, StoryObj } from "@storybook/react";
import Breadcrumb from "./index";
import BreadcrumbItem from "../../atoms/BreadcrumbItem";

const meta: Meta<typeof Breadcrumb> = {
  title: "Molecules/Breadcrumb",
  component: Breadcrumb,
  subcomponents: { BreadcrumbItem },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Breadcrumb>;

export const Empty: Story = {};
export const OneItem: Story = {
  render: (args) => (
    <Breadcrumb {...args}>
      <BreadcrumbItem href={"#"}>1</BreadcrumbItem>
    </Breadcrumb>
  ),
};
export const SeveralItems: Story = {
  render: (args) => (
    <Breadcrumb {...args}>
      <BreadcrumbItem href="#">Top</BreadcrumbItem>
      <BreadcrumbItem href="#">Clothes</BreadcrumbItem>
      <BreadcrumbItem href="#">Item</BreadcrumbItem>
    </Breadcrumb>
  ),
};
