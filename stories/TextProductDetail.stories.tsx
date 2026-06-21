import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextProductDetail } from "@cx/components";

const meta: Meta<typeof TextProductDetail> = {
  title: "cx/TextProductDetail",
  component: TextProductDetail as never,
  argTypes: {
    variants: { control: "select", options: ["ProductList", "ProductSummation", "ProductDetail", "Variants4"] },
    subtitle: { control: "text" },
    title: { control: "text" },
    value01: { control: "text" },
    value02: { control: "text" },
    value03: { control: "text" },
    value05: { control: "text" },
    count: { control: "text" },
    className: { control: false },
  },
  args: {
    variants: "ProductList",
  },
};
export default meta;
type Story = StoryObj<typeof TextProductDetail>;

export const ProductList: Story = { args: { variants: "ProductList" } };
export const ProductSummation: Story = { args: { variants: "ProductSummation" } };
export const ProductDetail: Story = { args: { variants: "ProductDetail" } };
export const Variants4: Story = { args: { variants: "Variants4" } };
