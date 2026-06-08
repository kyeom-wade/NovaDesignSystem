import type { Meta, StoryObj } from "@storybook/react-vite";
import { Loader } from "@cx/components";

const meta: Meta<typeof Loader> = {
  title: "cx/Loader",
  component: Loader as never,
  argTypes: {
    color: { control: "select", options: ["brand", "neutral", "inverse"] },
    size: { control: "select", options: ["small", "medium", "large"] },
    label: { control: "text" },
    className: { control: false },
  },
  args: {
    color: "brand",
    size: "medium",
    label: "로딩 중",
  },
};
export default meta;
type Story = StoryObj<typeof Loader>;

export const Default: Story = {};

export const Colors: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "32px", alignItems: "center", padding: "24px", flexWrap: "wrap" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
        <Loader {...args} color="brand" />
        <p style={{ margin: 0, fontSize: "12px" }}>brand</p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
        <Loader {...args} color="neutral" />
        <p style={{ margin: 0, fontSize: "12px" }}>neutral</p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", background: "#1a1a1a", padding: "12px", borderRadius: "8px" }}>
        <Loader {...args} color="inverse" />
        <p style={{ margin: 0, fontSize: "12px", color: "#fff" }}>inverse</p>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "32px", alignItems: "center", padding: "24px", flexWrap: "wrap" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
        <Loader {...args} size="small" />
        <p style={{ margin: 0, fontSize: "12px" }}>small</p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
        <Loader {...args} size="medium" />
        <p style={{ margin: 0, fontSize: "12px" }}>medium</p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
        <Loader {...args} size="large" />
        <p style={{ margin: 0, fontSize: "12px" }}>large</p>
      </div>
    </div>
  ),
};

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px", padding: "24px" }}>
      {(["small", "medium", "large"] as const).map((size) => (
        <div key={size} style={{ display: "flex", gap: "32px", alignItems: "center", flexWrap: "wrap" }}>
          <p style={{ margin: 0, width: "60px", fontSize: "12px", color: "#666" }}>{size}</p>
          <Loader {...args} size={size} color="brand" />
          <Loader {...args} size={size} color="neutral" />
          <div style={{ background: "#1a1a1a", padding: "8px", borderRadius: "6px" }}>
            <Loader {...args} size={size} color="inverse" />
          </div>
        </div>
      ))}
    </div>
  ),
};
