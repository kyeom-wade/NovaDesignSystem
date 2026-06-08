import type { Meta, StoryObj } from "@storybook/react-vite";
import { IconNavigate } from "@cx/components";

const meta: Meta<typeof IconNavigate> = {
  title: "cx/Icons/IconNavigate",
  component: IconNavigate as never,
  argTypes: {
    variant: {
      control: "select",
      options: ["Dummy", "Benefit", "Shop", "My", "AI", "TAgent"],
    },
    size: { control: "number" },
    color: { control: "color" },
    className: { control: false },
  },
  args: {
    variant: "Dummy",
    size: 24,
    color: "currentColor",
  },
};
export default meta;
type Story = StoryObj<typeof IconNavigate>;

export const Default: Story = {};

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
      {(["Dummy", "Benefit", "Shop", "My", "AI", "TAgent"] as const).map(
        (v) => (
          <div
            key={v}
            style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}
          >
            <IconNavigate {...args} variant={v} />
            <span style={{ fontSize: 11 }}>{v}</span>
          </div>
        )
      )}
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 24, alignItems: "flex-end" }}>
      {[16, 20, 24, 32].map((s) => (
        <div
          key={s}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}
        >
          <IconNavigate {...args} size={s} />
          <span style={{ fontSize: 11 }}>{s}px</span>
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
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          padding: 24,
          background: "#ffffff",
        }}
      >
        <IconNavigate {...args} color="#1a1a2e" />
        <span style={{ fontSize: 11, color: "#1a1a2e" }}>Light</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          padding: 24,
          background: "#1a1a2e",
        }}
      >
        <IconNavigate {...args} color="#ffffff" />
        <span style={{ fontSize: 11, color: "#ffffff" }}>Dark</span>
      </div>
    </div>
  ),
};
