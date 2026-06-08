import type { Meta, StoryObj } from "@storybook/react-vite";
import { IconLocation } from "@cx/components";

const meta: Meta<typeof IconLocation> = {
  title: "cx/Icons/IconLocation",
  component: IconLocation as never,
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
type Story = StoryObj<typeof IconLocation>;

export const Default: Story = {};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <IconLocation {...args} size={16} />
      <IconLocation {...args} size={20} />
      <IconLocation {...args} size={24} />
      <IconLocation {...args} size={32} />
    </div>
  ),
};

export const Colors: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 0 }}>
      <div style={{ background: "#ffffff", padding: 24, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <IconLocation {...args} color="#1a1a2e" />
      </div>
      <div style={{ background: "#1a1a2e", padding: 24, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <IconLocation {...args} color="#ffffff" />
      </div>
    </div>
  ),
};
