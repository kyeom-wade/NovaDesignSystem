import type { Meta, StoryObj } from "@storybook/react-vite";
import { IconDummy } from "@cx/components";

const meta: Meta<typeof IconDummy> = {
  title: "cx/Icons/IconDummy",
  component: IconDummy as never,
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
type Story = StoryObj<typeof IconDummy>;

export const Default: Story = {};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
      <IconDummy {...args} size={16} />
      <IconDummy {...args} size={20} />
      <IconDummy {...args} size={24} />
      <IconDummy {...args} size={32} />
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
        <IconDummy {...args} color="#1a1a2e" />
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
        <IconDummy {...args} color="#ffffff" />
      </div>
    </div>
  ),
};
