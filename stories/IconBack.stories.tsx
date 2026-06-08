import type { Meta, StoryObj } from "@storybook/react-vite";
import { IconBack } from "@cx/components";

const meta: Meta<typeof IconBack> = {
  title: "cx/Icons/IconBack",
  component: IconBack as never,
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
type Story = StoryObj<typeof IconBack>;

export const Default: Story = {};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <IconBack {...args} size={16} />
      <IconBack {...args} size={20} />
      <IconBack {...args} size={24} />
      <IconBack {...args} size={32} />
    </div>
  ),
};

export const Colors: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 0 }}>
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: 24,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <IconBack {...args} color="#1a1a2e" />
      </div>
      <div
        style={{
          backgroundColor: "#1a1a2e",
          padding: 24,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <IconBack {...args} color="#ffffff" />
      </div>
    </div>
  ),
};
