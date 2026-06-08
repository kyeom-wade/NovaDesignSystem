import type { Meta, StoryObj } from "@storybook/react-vite";
import { IconAccessory } from "@cx/components";

const meta: Meta<typeof IconAccessory> = {
  title: "cx/Icons/IconAccessory",
  component: IconAccessory as never,
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
type Story = StoryObj<typeof IconAccessory>;

export const Default: Story = {};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <IconAccessory {...args} size={16} />
      <IconAccessory {...args} size={20} />
      <IconAccessory {...args} size={24} />
      <IconAccessory {...args} size={32} />
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
        <IconAccessory {...args} color="#1a1a2e" />
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
        <IconAccessory {...args} color="#ffffff" />
      </div>
    </div>
  ),
};
