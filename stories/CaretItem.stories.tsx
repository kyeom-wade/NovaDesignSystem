import type { Meta, StoryObj } from "@storybook/react-vite";
import { CaretItem } from "@cx/components";

const meta: Meta<typeof CaretItem> = {
  title: "cx/CaretItem",
  component: CaretItem as never,
  argTypes: {
    variant: { control: "select", options: ["brand", "neutral", "inverse"] },
    height: { control: "number" },
    className: { control: "text" },
  },
  args: {
    variant: "brand",
    height: 20,
  },
};
export default meta;
type Story = StoryObj<typeof CaretItem>;

export const Default: Story = {};

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "32px", alignItems: "center", padding: "24px" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
        <CaretItem {...args} variant="brand" />
        <p style={{ margin: 0, fontSize: "12px" }}>brand</p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
        <CaretItem {...args} variant="neutral" />
        <p style={{ margin: 0, fontSize: "12px" }}>neutral</p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", background: "#1a1a1a", padding: "8px", borderRadius: "4px" }}>
        <CaretItem {...args} variant="inverse" />
        <p style={{ margin: 0, fontSize: "12px", color: "#fff" }}>inverse</p>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "32px", alignItems: "flex-end", padding: "24px" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
        <CaretItem {...args} height={12} />
        <p style={{ margin: 0, fontSize: "12px" }}>12px</p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
        <CaretItem {...args} height={16} />
        <p style={{ margin: 0, fontSize: "12px" }}>16px</p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
        <CaretItem {...args} height={20} />
        <p style={{ margin: 0, fontSize: "12px" }}>20px (기본)</p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
        <CaretItem {...args} height={28} />
        <p style={{ margin: 0, fontSize: "12px" }}>28px</p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
        <CaretItem {...args} height={36} />
        <p style={{ margin: 0, fontSize: "12px" }}>36px</p>
      </div>
    </div>
  ),
};
