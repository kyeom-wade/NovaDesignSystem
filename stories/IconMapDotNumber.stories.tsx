import type { Meta, StoryObj } from "@storybook/react-vite";
import { IconMapDotNumber } from "@cx/components";

const meta: Meta<typeof IconMapDotNumber> = {
  title: "cx/Icons/IconMapDotNumber",
  component: IconMapDotNumber as never,
  argTypes: {
    variant: { control: "select", options: ["1", "2", "3", "4", "5"] },
    size: { control: "number" },
    color: { control: "color" },
    className: { control: false },
  },
  args: {
    size: 24,
    color: "var(--skt-color-palette-gray-1000, #060C1F)",
    variant: "1",
  },
};
export default meta;
type Story = StoryObj<typeof IconMapDotNumber>;

export const Default: Story = {};

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
      {(["1", "2", "3", "4", "5"] as const).map((v) => (
        <IconMapDotNumber key={v} {...args} variant={v} />
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 16, alignItems: "flex-end" }}>
      {[16, 20, 24, 32].map((s) => (
        <IconMapDotNumber key={s} {...args} size={s} />
      ))}
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
        <IconMapDotNumber {...args} />
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
        <IconMapDotNumber {...args} color="#ffffff" />
      </div>
    </div>
  ),
};
