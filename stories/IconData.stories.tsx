import type { Meta, StoryObj } from "@storybook/react-vite";
import { IconData } from "@cx/components";

const meta: Meta<typeof IconData> = {
  title: "cx/Icons/IconData",
  component: IconData as never,
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
type Story = StoryObj<typeof IconData>;

export const Default: Story = {};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", alignItems: "flex-end", gap: "16px" }}>
      <IconData {...args} size={16} />
      <IconData {...args} size={20} />
      <IconData {...args} size={24} />
      <IconData {...args} size={32} />
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
        <IconData {...args} color="#1a1a2e" />
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
        <IconData {...args} color="#ffffff" />
      </div>
    </div>
  ),
};
