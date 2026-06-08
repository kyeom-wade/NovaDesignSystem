import type { Meta, StoryObj } from "@storybook/react-vite";
import { IconInfo } from "@cx/components";

const meta: Meta<typeof IconInfo> = {
  title: "cx/Icons/IconInfo",
  component: IconInfo as never,
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
type Story = StoryObj<typeof IconInfo>;

export const Default: Story = {};

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
      <IconInfo {...args} variant="line" />
      <IconInfo {...args} variant="fill" />
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
      <IconInfo {...args} size={16} />
      <IconInfo {...args} size={20} />
      <IconInfo {...args} size={24} />
      <IconInfo {...args} size={32} />
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
        <IconInfo {...args} color="#111111" />
        <IconInfo {...args} color="#0066ff" />
        <IconInfo {...args} color="#e53935" />
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
        <IconInfo {...args} color="#ffffff" />
        <IconInfo {...args} color="#82b4ff" />
        <IconInfo {...args} color="#ff8a80" />
      </div>
    </div>
  ),
};
