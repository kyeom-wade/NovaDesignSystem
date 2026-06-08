import type { Meta, StoryObj } from "@storybook/react-vite";
import { IconArrow } from "@cx/components";

const meta: Meta<typeof IconArrow> = {
  title: "cx/Icons/IconArrow",
  component: IconArrow as never,
  argTypes: {
    variant: { control: "select", options: ["up", "down", "left", "right"] },
    size: { control: "number" },
    color: { control: "color" },
    className: { control: false },
  },
  args: {
    variant: "up",
    size: 24,
    color: "currentColor",
  },
};
export default meta;
type Story = StoryObj<typeof IconArrow>;

export const Default: Story = {};

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
      <IconArrow {...args} variant="up" />
      <IconArrow {...args} variant="down" />
      <IconArrow {...args} variant="left" />
      <IconArrow {...args} variant="right" />
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
      <IconArrow {...args} size={16} />
      <IconArrow {...args} size={20} />
      <IconArrow {...args} size={24} />
      <IconArrow {...args} size={32} />
    </div>
  ),
};

export const Colors: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 0 }}>
      <div
        style={{
          background: "#ffffff",
          padding: 24,
          display: "flex",
          gap: 16,
          alignItems: "center",
        }}
      >
        <IconArrow {...args} color="#000000" />
        <IconArrow {...args} color="#0066ff" />
        <IconArrow {...args} color="#e53935" />
      </div>
      <div
        style={{
          background: "#1a1a2e",
          padding: 24,
          display: "flex",
          gap: 16,
          alignItems: "center",
        }}
      >
        <IconArrow {...args} color="#ffffff" />
        <IconArrow {...args} color="#64b5f6" />
        <IconArrow {...args} color="#ef9a9a" />
      </div>
    </div>
  ),
};
