import type { Meta, StoryObj } from "@storybook/react-vite";
import { IconWon } from "@cx/components";

const meta: Meta<typeof IconWon> = {
  title: "cx/Icons/IconWon",
  component: IconWon as never,
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
type Story = StoryObj<typeof IconWon>;

export const Default: Story = {};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
      <IconWon {...args} size={16} />
      <IconWon {...args} size={20} />
      <IconWon {...args} size={24} />
      <IconWon {...args} size={32} />
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
        <IconWon {...args} color="#1a1a2e" />
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
        <IconWon {...args} color="#ffffff" />
      </div>
    </div>
  ),
};
