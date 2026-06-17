import type { Meta, StoryObj } from "@storybook/react-vite";
import { BadgeItem } from "@cx/components";

const meta: Meta<typeof BadgeItem> = {
  title: "cx/BadgeItem",
  component: BadgeItem as never,
  argTypes: {
    color: { control: "select", options: ["Neutral", "Strong", "Brand", "Inverse"] },
    size: { control: "select", options: ["Small", "Large"] },
    label: { control: "text" },
    text: { control: false },
    className: { control: false },
  },
  args: {
    color: "Neutral",
    size: "Small",
    label: "Label",
  },
};
export default meta;
type Story = StoryObj<typeof BadgeItem>;

export const Default: Story = {};

export const AllColors: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", padding: "16px", alignItems: "center" }}>
      {(["Neutral", "Strong", "Brand", "Inverse"] as const).map((color) => (
        <div key={color} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
          <p style={{ margin: 0, fontSize: "12px", color: "#666" }}>{color}</p>
          <BadgeItem {...args} color={color} />
        </div>
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", padding: "16px", alignItems: "center" }}>
      {(["Small", "Large"] as const).map((size) => (
        <div key={size} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
          <p style={{ margin: 0, fontSize: "12px", color: "#666" }}>{size}</p>
          <BadgeItem {...args} size={size} />
        </div>
      ))}
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px", padding: "16px" }}>
      {(["Small", "Large"] as const).map((size) => (
        <div key={size}>
          <p style={{ margin: "0 0 8px", fontSize: "13px", fontWeight: 600, color: "#333" }}>{size}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
            {(["Neutral", "Strong", "Brand", "Inverse"] as const).map((color) => (
              <BadgeItem key={color} size={size} color={color} label="Label" />
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};
