import type { Meta, StoryObj } from "@storybook/react-vite";
import { IconHeart } from "@cx/components";

const meta: Meta<typeof IconHeart> = {
  title: "cx/Icons/IconHeart",
  component: IconHeart as never,
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
type Story = StoryObj<typeof IconHeart>;

export const Default: Story = {};

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
      <IconHeart {...args} variant="line" />
      <IconHeart {...args} variant="fill" />
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
      <IconHeart {...args} size={16} />
      <IconHeart {...args} size={20} />
      <IconHeart {...args} size={24} />
      <IconHeart {...args} size={32} />
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
          gap: 16,
          alignItems: "center",
        }}
      >
        <IconHeart {...args} color="#111111" variant="line" />
        <IconHeart {...args} color="#111111" variant="fill" />
      </div>
      <div
        style={{
          background: "#1a1a2e",
          padding: 24,
          display: "flex",
          gap: 16,
          alignItems: "center",
        }}
      >
        <IconHeart {...args} color="#ffffff" variant="line" />
        <IconHeart {...args} color="#ffffff" variant="fill" />
      </div>
    </div>
  ),
};
