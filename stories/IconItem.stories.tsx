import type { Meta, StoryObj } from "@storybook/react-vite";
import { IconItem } from "@cx/components";

const meta: Meta<typeof IconItem> = {
  title: "cx/Icons/IconItem",
  component: IconItem as never,
  argTypes: {
    variant: {
      control: "select",
      options: ["10", "12", "16", "20", "24", "32", "40"],
    },
    size: { control: "number" },
    color: { control: "color" },
    className: { control: false },
  },
  args: {
    variant: "24",
    color: "currentColor",
  },
};
export default meta;
type Story = StoryObj<typeof IconItem>;

export const Default: Story = {};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      {(["10", "12", "16", "20", "24", "32", "40"] as const).map((v) => (
        <div key={v} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
          <IconItem variant={v} />
          <span style={{ fontSize: 11, color: "#666" }}>{v}</span>
        </div>
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      {[16, 20, 24, 32].map((s) => (
        <div key={s} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
          <IconItem size={s} />
          <span style={{ fontSize: 11, color: "#666" }}>{s}px</span>
        </div>
      ))}
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 32 }}>
      <div
        style={{
          background: "#ffffff",
          padding: 24,
          borderRadius: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          border: "1px solid #e5e5e5",
        }}
      >
        <IconItem size={24} color="#000000" />
        <span style={{ fontSize: 11, color: "#666" }}>Light bg</span>
      </div>
      <div
        style={{
          background: "#1a1a2e",
          padding: 24,
          borderRadius: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
        }}
      >
        <IconItem size={24} color="#ffffff" />
        <span style={{ fontSize: 11, color: "#aaa" }}>Dark bg</span>
      </div>
    </div>
  ),
};
