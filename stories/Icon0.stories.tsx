import type { Meta, StoryObj } from "@storybook/react-vite";
import { Icon0 } from "@cx/components";

const meta: Meta<typeof Icon0> = {
  title: "cx/Icons/Icon0",
  component: Icon0 as never,
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
type Story = StoryObj<typeof Icon0>;

export const Default: Story = {};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
      <Icon0 {...args} size={16} />
      <Icon0 {...args} size={20} />
      <Icon0 {...args} size={24} />
      <Icon0 {...args} size={32} />
    </div>
  ),
};

export const Colors: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "0" }}>
      <div
        style={{
          background: "#ffffff",
          padding: "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon0 {...args} color="#1a1a2e" />
      </div>
      <div
        style={{
          background: "#1a1a2e",
          padding: "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon0 {...args} color="#ffffff" />
      </div>
    </div>
  ),
};
