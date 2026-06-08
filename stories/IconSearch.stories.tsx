import type { Meta, StoryObj } from "@storybook/react-vite";
import { IconSearch } from "@cx/components";

const meta: Meta<typeof IconSearch> = {
  title: "cx/Icons/IconSearch",
  component: IconSearch as never,
  argTypes: {
    variant: { control: "select", options: ["line", "fill"] },
    size: { control: "number" },
    color: { control: "color" },
    className: { control: false },
  },
  args: {
    size: 24,
    color: "currentColor",
    variant: "line",
  },
};
export default meta;
type Story = StoryObj<typeof IconSearch>;

export const Default: Story = {};

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
      <IconSearch {...args} variant="line" />
      <IconSearch {...args} variant="fill" />
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
      <IconSearch {...args} size={16} />
      <IconSearch {...args} size={20} />
      <IconSearch {...args} size={24} />
      <IconSearch {...args} size={32} />
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
        <IconSearch {...args} color="#1a1a2e" />
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
        <IconSearch {...args} color="#ffffff" />
      </div>
    </div>
  ),
};
