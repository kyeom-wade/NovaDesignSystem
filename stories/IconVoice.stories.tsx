import type { Meta, StoryObj } from "@storybook/react-vite";
import { IconVoice } from "@cx/components";

const meta: Meta<typeof IconVoice> = {
  title: "cx/Icons/IconVoice",
  component: IconVoice as never,
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
type Story = StoryObj<typeof IconVoice>;

export const Default: Story = {};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <IconVoice {...args} size={16} />
      <IconVoice {...args} size={20} />
      <IconVoice {...args} size={24} />
      <IconVoice {...args} size={32} />
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
        <IconVoice {...args} color="#000000" />
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
        <IconVoice {...args} color="#ffffff" />
      </div>
    </div>
  ),
};
