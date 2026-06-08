import type { Meta, StoryObj } from "@storybook/react-vite";
import { IconLink } from "@cx/components";

const meta: Meta<typeof IconLink> = {
  title: "cx/Icons/IconLink",
  component: IconLink as never,
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
type Story = StoryObj<typeof IconLink>;

export const Default: Story = {};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <IconLink {...args} size={16} />
      <IconLink {...args} size={20} />
      <IconLink {...args} size={24} />
      <IconLink {...args} size={32} />
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
        <IconLink {...args} color="#1a1a2e" />
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
        <IconLink {...args} color="#ffffff" />
      </div>
    </div>
  ),
};
