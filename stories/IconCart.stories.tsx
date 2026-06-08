import type { Meta, StoryObj } from "@storybook/react-vite";
import { IconCart } from "@cx/components";

const meta: Meta<typeof IconCart> = {
  title: "cx/Icons/IconCart",
  component: IconCart as never,
  argTypes: {
    variant: { control: "select", options: ["line", "fill"] },
    size: { control: "number" },
    color: { control: "color" },
    className: { control: false },
  },
  args: {
    variant: "line",
    size: 24,
    color: "currentColor",
  },
};
export default meta;
type Story = StoryObj<typeof IconCart>;

export const Default: Story = {};

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
      <IconCart {...args} variant="line" />
      <IconCart {...args} variant="fill" />
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
      <IconCart {...args} size={16} />
      <IconCart {...args} size={20} />
      <IconCart {...args} size={24} />
      <IconCart {...args} size={32} />
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
        <IconCart {...args} color="#000000" />
        <IconCart {...args} color="#0066ff" />
        <IconCart {...args} color="#e53935" />
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
        <IconCart {...args} color="#ffffff" />
        <IconCart {...args} color="#64b5f6" />
        <IconCart {...args} color="#ef9a9a" />
      </div>
    </div>
  ),
};
