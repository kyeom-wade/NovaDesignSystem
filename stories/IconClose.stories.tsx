import type { Meta, StoryObj } from "@storybook/react-vite";
import { IconClose } from "@cx/components";

const meta: Meta<typeof IconClose> = {
  title: "cx/Icons/IconClose",
  component: IconClose as never,
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
type Story = StoryObj<typeof IconClose>;

export const Default: Story = {};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
      <IconClose {...args} size={16} />
      <IconClose {...args} size={20} />
      <IconClose {...args} size={24} />
      <IconClose {...args} size={32} />
    </div>
  ),
};

export const Colors: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "0" }}>
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <IconClose {...args} color="#1a1a2e" />
      </div>
      <div
        style={{
          backgroundColor: "#1a1a2e",
          padding: "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <IconClose {...args} color="#ffffff" />
      </div>
    </div>
  ),
};
