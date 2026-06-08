import type { Meta, StoryObj } from "@storybook/react-vite";
import { IconPlus } from "@cx/components";

const meta: Meta<typeof IconPlus> = {
  title: "cx/Icons/IconPlus",
  component: IconPlus as never,
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
type Story = StoryObj<typeof IconPlus>;

export const Default: Story = {};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
      <IconPlus {...args} size={16} />
      <IconPlus {...args} size={20} />
      <IconPlus {...args} size={24} />
      <IconPlus {...args} size={32} />
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
        <IconPlus {...args} color="#000000" />
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
        <IconPlus {...args} color="#ffffff" />
      </div>
    </div>
  ),
};
