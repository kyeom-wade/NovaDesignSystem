import type { Meta, StoryObj } from "@storybook/react-vite";
import { IconDownload } from "@cx/components";

const meta: Meta<typeof IconDownload> = {
  title: "cx/Icons/IconDownload",
  component: IconDownload as never,
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
type Story = StoryObj<typeof IconDownload>;

export const Default: Story = {};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <IconDownload {...args} size={16} />
      <IconDownload {...args} size={20} />
      <IconDownload {...args} size={24} />
      <IconDownload {...args} size={32} />
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
        <IconDownload {...args} color="#1a1a2e" />
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
        <IconDownload {...args} color="#ffffff" />
      </div>
    </div>
  ),
};
