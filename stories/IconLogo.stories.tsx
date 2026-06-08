import type { Meta, StoryObj } from "@storybook/react-vite";
import { IconLogo } from "@cx/components";

const meta: Meta<typeof IconLogo> = {
  title: "cx/Icons/IconLogo",
  component: IconLogo as never,
  argTypes: {
    variant: {
      control: "select",
      options: ["Default", "Event", "Bill", "Percent", "Data", "Point", "Call", "TW", "TU"],
    },
    size: { control: "number" },
    color: { control: "color" },
    className: { control: false },
  },
  args: {
    variant: "Default",
    size: 24,
    color: "currentColor",
  },
};
export default meta;
type Story = StoryObj<typeof IconLogo>;

export const Default: Story = {};

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
      {(["Default", "Event", "Bill", "Percent", "Data", "Point", "Call", "TW", "TU"] as const).map(
        (variant) => (
          <div key={variant} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
            <IconLogo {...args} variant={variant} />
            <span style={{ fontSize: 11, color: "#666" }}>{variant}</span>
          </div>
        )
      )}
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
      {[16, 20, 24, 32].map((size) => (
        <div key={size} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
          <IconLogo {...args} size={size} />
          <span style={{ fontSize: 11, color: "#666" }}>{size}px</span>
        </div>
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
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          flex: 1,
        }}
      >
        <IconLogo {...args} />
        <span style={{ fontSize: 11, color: "#333" }}>Light background</span>
      </div>
      <div
        style={{
          background: "#1a1a2e",
          padding: 24,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          flex: 1,
        }}
      >
        <IconLogo {...args} />
        <span style={{ fontSize: 11, color: "#ccc" }}>Dark background</span>
      </div>
    </div>
  ),
};
