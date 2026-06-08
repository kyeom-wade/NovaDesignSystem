import type { Meta, StoryObj } from "@storybook/react-vite";
import { IconHistory } from "@cx/components";

const meta: Meta<typeof IconHistory> = {
  title: "cx/Icons/IconHistory",
  component: IconHistory as never,
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
type Story = StoryObj<typeof IconHistory>;

export const Default: Story = {};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <IconHistory {...args} size={16} />
      <IconHistory {...args} size={20} />
      <IconHistory {...args} size={24} />
      <IconHistory {...args} size={32} />
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
        <IconHistory {...args} color="#1a1a2e" />
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
        <IconHistory {...args} color="#ffffff" />
      </div>
    </div>
  ),
};
