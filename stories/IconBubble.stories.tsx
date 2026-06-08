import type { Meta, StoryObj } from "@storybook/react-vite";
import { IconBubble } from "@cx/components";

const meta: Meta<typeof IconBubble> = {
  title: "cx/Icons/IconBubble",
  component: IconBubble as never,
  argTypes: {
    variant: { control: "select", options: ["line", "fill"] },
    size: { control: "number" },
    color: { control: "color" },
    className: { control: false },
  },
  args: {
    size: 24,
    color: "currentColor",
    variant: "line",
  },
};
export default meta;
type Story = StoryObj<typeof IconBubble>;

export const Default: Story = {};

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
      <IconBubble {...args} variant="line" />
      <IconBubble {...args} variant="fill" />
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
      <IconBubble {...args} size={16} />
      <IconBubble {...args} size={20} />
      <IconBubble {...args} size={24} />
      <IconBubble {...args} size={32} />
    </div>
  ),
};

export const Colors: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 0 }}>
      <div style={{ background: "#ffffff", padding: 24, display: "flex", gap: 16 }}>
        <IconBubble {...args} color="#111111" variant="line" />
        <IconBubble {...args} color="#111111" variant="fill" />
      </div>
      <div style={{ background: "#1a1a2e", padding: 24, display: "flex", gap: 16 }}>
        <IconBubble {...args} color="#ffffff" variant="line" />
        <IconBubble {...args} color="#ffffff" variant="fill" />
      </div>
    </div>
  ),
};
