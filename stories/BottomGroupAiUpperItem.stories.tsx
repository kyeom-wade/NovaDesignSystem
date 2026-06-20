import type { Meta, StoryObj } from "@storybook/react-vite";
import { BottomGroupAiUpperItem } from "@cx/components";

const meta: Meta<typeof BottomGroupAiUpperItem> = {
  title: "cx/BottomGroupAiUpperItem",
  component: BottomGroupAiUpperItem as never,
  argTypes: {
    caption: { control: "text" },
    iconAlt: { control: "text" },
    className: { control: false },
  },
  args: {
    caption: "텍스트",
  },
};
export default meta;
type Story = StoryObj<typeof BottomGroupAiUpperItem>;

export const Default: Story = {};
