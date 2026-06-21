import type { Meta, StoryObj } from "@storybook/react-vite";
import { CarouselItem } from "@cx/components";

const meta: Meta<typeof CarouselItem> = {
  title: "cx/CarouselItem",
  component: CarouselItem as never,
  argTypes: {
    variants: { control: "select", options: ["Small", "Medium", "Large"] },
    title: { control: "text" },
    subtitle: { control: "text" },
    price: { control: "text" },
    discount: { control: "text" },
    rating: { control: "text" },
    className: { control: false },
  },
  args: {
    variants: "Small",
  },
};
export default meta;
type Story = StoryObj<typeof CarouselItem>;

export const Small: Story = { args: { variants: "Small" } };
export const Medium: Story = { args: { variants: "Medium" } };
export const Large: Story = { args: { variants: "Large" } };
