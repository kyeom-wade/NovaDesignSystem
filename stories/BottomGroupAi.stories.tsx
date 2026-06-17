import type { Meta, StoryObj } from "@storybook/react-vite";
import { BottomGroupAi } from "@cx/components";

const meta: Meta<typeof BottomGroupAi> = {
  title: "cx/BottomGroupAi",
  component: BottomGroupAi as never,
  argTypes: {
    variants: { control: "select", options: ["Ai"] },
    aiUpperItem: { control: "boolean" },
    aiLabelText: { control: "text" },
    primaryLabel: { control: "text" },
    secondaryLabel: { control: "text" },
    onPrimary: { control: false },
    onSecondary: { control: false },
    className: { control: false },
  },
  args: {
    variants: "Ai",
    aiUpperItem: true,
    aiLabelText: "텍스트",
    primaryLabel: "Label",
    secondaryLabel: "Label",
  },
};

export default meta;
type Story = StoryObj<typeof BottomGroupAi>;

export const Default: Story = {};

export const WithoutUpperItem: Story = {
  args: {
    aiUpperItem: false,
  },
};

export const CustomLabels: Story = {
  args: {
    aiLabelText: "AI 추천",
    secondaryLabel: "선물하기",
    primaryLabel: "구독하기",
  },
};
