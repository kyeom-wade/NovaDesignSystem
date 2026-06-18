import type { Meta, StoryObj } from "@storybook/react-vite";
import { BottomSheetHandleItem } from "@cx/components";

const meta: Meta<typeof BottomSheetHandleItem> = {
  title: "cx/BottomSheetHandleItem",
  component: BottomSheetHandleItem as never,
  argTypes: {
    width: { control: "text" },
    className: { control: false },
  },
  args: {
    width: 393,
  },
};
export default meta;
type Story = StoryObj<typeof BottomSheetHandleItem>;

export const Default: Story = {};
