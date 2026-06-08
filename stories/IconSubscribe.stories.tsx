import type { Meta, StoryObj } from "@storybook/react-vite";
import { IconSubscribe } from "@cx/components";

const meta: Meta<typeof IconSubscribe> = {
  title: "cx/Icons/IconSubscribe",
  component: IconSubscribe as never,
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
type Story = StoryObj<typeof IconSubscribe>;

export const Default: Story = {};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <IconSubscribe {...args} size={16} />
      <IconSubscribe {...args} size={20} />
      <IconSubscribe {...args} size={24} />
      <IconSubscribe {...args} size={32} />
    </div>
  ),
};

export const Colors: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 0 }}>
      <div style={{ background: "#ffffff", padding: 24, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <IconSubscribe {...args} color="#1a1a2e" />
      </div>
      <div style={{ background: "#1a1a2e", padding: 24, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <IconSubscribe {...args} color="#ffffff" />
      </div>
    </div>
  ),
};
