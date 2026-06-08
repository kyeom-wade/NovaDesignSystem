import type { Meta, StoryObj } from "@storybook/react-vite";
import { IconMenu } from "@cx/components";

const meta: Meta<typeof IconMenu> = {
  title: "cx/Icons/IconMenu",
  component: IconMenu as never,
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
type Story = StoryObj<typeof IconMenu>;

export const Default: Story = {};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
      <IconMenu {...args} size={16} />
      <IconMenu {...args} size={20} />
      <IconMenu {...args} size={24} />
      <IconMenu {...args} size={32} />
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
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <IconMenu {...args} color="#1a1a2e" />
      </div>
      <div
        style={{
          background: "#1a1a2e",
          padding: 24,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <IconMenu {...args} color="#ffffff" />
      </div>
    </div>
  ),
};
