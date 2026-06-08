import type { Meta, StoryObj } from "@storybook/react-vite";
import { IconGlobal } from "@cx/components";

const meta: Meta<typeof IconGlobal> = {
  title: "cx/Icons/IconGlobal",
  component: IconGlobal as never,
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
type Story = StoryObj<typeof IconGlobal>;

export const Default: Story = {};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <IconGlobal {...args} size={16} />
      <IconGlobal {...args} size={20} />
      <IconGlobal {...args} size={24} />
      <IconGlobal {...args} size={32} />
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
        <IconGlobal {...args} color="#1a1a2e" />
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
        <IconGlobal {...args} color="#ffffff" />
      </div>
    </div>
  ),
};
