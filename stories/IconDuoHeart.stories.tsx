import type { Meta, StoryObj } from "@storybook/react-vite";
import { IconDuoHeart } from "@cx/components";

const meta: Meta<typeof IconDuoHeart> = {
  title: "cx/Icons/IconDuoHeart",
  component: IconDuoHeart as never,
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
type Story = StoryObj<typeof IconDuoHeart>;

export const Default: Story = {};

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
      <IconDuoHeart {...args} variant="line" />
      <IconDuoHeart {...args} variant="fill" />
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
      <IconDuoHeart {...args} size={16} />
      <IconDuoHeart {...args} size={20} />
      <IconDuoHeart {...args} size={24} />
      <IconDuoHeart {...args} size={32} />
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
        <IconDuoHeart {...args} color="#1a1a2e" />
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
        <IconDuoHeart {...args} color="#ffffff" />
      </div>
    </div>
  ),
};
