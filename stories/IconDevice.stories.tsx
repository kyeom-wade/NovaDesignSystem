import type { Meta, StoryObj } from "@storybook/react-vite";
import { IconDevice } from "@cx/components";

const meta: Meta<typeof IconDevice> = {
  title: "cx/Icons/IconDevice",
  component: IconDevice as never,
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
type Story = StoryObj<typeof IconDevice>;

export const Default: Story = {};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <IconDevice {...args} size={16} />
      <IconDevice {...args} size={20} />
      <IconDevice {...args} size={24} />
      <IconDevice {...args} size={32} />
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
        <IconDevice {...args} color="#111111" />
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
        <IconDevice {...args} color="#ffffff" />
      </div>
    </div>
  ),
};
