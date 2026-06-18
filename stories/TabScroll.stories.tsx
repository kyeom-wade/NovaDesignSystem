import type { Meta, StoryObj } from "@storybook/react-vite";
import { TabScroll } from "@cx/components";

const meta: Meta<typeof TabScroll> = {
  title: "cx/TabScroll",
  component: TabScroll as never,
  argTypes: {
    labels: { control: "object" },
    selectedIndex: { control: "number" },
    onTabChange: { control: false },
  },
  args: {
    labels: ["Label", "Label", "Label", "Label", "Label", "Label", "Label", "Label", "Label", "Label"],
    selectedIndex: 0,
  },
};
export default meta;
type Story = StoryObj<typeof TabScroll>;

export const Default: Story = {};
