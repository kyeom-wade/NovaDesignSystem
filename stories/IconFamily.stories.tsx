import type { Meta, StoryObj } from "@storybook/react-vite";
import { IconFamily } from "@cx/components";

const meta: Meta<typeof IconFamily> = {
  title: "cx/Icons/IconFamily",
  component: IconFamily as never,
  argTypes: {
    size: { control: "number" },
    color: { control: "color" },
    className: { control: false },
  },
  args: {
    size: 24,
    color: "currentColor",
  },
};
export default meta;
type Story = StoryObj<typeof IconFamily>;

export const Default: Story = {};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
      <IconFamily {...args} size={16} />
      <IconFamily {...args} size={20} />
      <IconFamily {...args} size={24} />
      <IconFamily {...args} size={32} />
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
        <IconFamily {...args} color="#000000" />
        <IconFamily {...args} color="#0066ff" />
        <IconFamily {...args} color="#e53935" />
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
        <IconFamily {...args} color="#ffffff" />
        <IconFamily {...args} color="#64b5f6" />
        <IconFamily {...args} color="#ef9a9a" />
      </div>
    </div>
  ),
};
