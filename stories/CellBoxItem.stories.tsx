import type { Meta, StoryObj } from "@storybook/react-vite";
import { CellBoxItem } from "@cx/components";

const meta: Meta<typeof CellBoxItem> = {
  title: "cx/CellBoxItem",
  component: CellBoxItem as never,
  argTypes: {
    children: { control: false },
    className: { control: false },
  },
  args: {
    children: null,
  },
};
export default meta;
type Story = StoryObj<typeof CellBoxItem>;

export const Default: Story = {};
