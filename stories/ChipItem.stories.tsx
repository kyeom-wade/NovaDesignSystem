import type { Meta, StoryObj } from "@storybook/react-vite";
import { ChipItem } from "@cx/components";

const meta: Meta<typeof ChipItem> = {
  title: "cx/ChipItem",
  component: ChipItem as never,
  argTypes: {
    size: { control: "select", options: ["large", "small"] },
    selected: { control: "boolean" },
    text: { control: "text" },
    onClick: { control: false },
    className: { control: false },
  },
  args: {
    size: "large",
    selected: true,
    text: "텍스트",
  },
};
export default meta;
type Story = StoryObj<typeof ChipItem>;

export const Default: Story = {};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "12px", alignItems: "center", padding: "16px" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "center" }}>
        <p style={{ margin: 0, fontSize: "12px", color: "#666" }}>large</p>
        <ChipItem {...args} size="large" text="라벨" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "center" }}>
        <p style={{ margin: 0, fontSize: "12px", color: "#666" }}>small</p>
        <ChipItem {...args} size="small" text="라벨" />
      </div>
    </div>
  ),
};

export const States: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "16px" }}>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#666" }}>selected</p>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          <ChipItem {...args} selected={true} size="large" text="선택됨" />
          <ChipItem {...args} selected={true} size="small" text="선택됨" />
        </div>
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#666" }}>unselected</p>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          <ChipItem {...args} selected={false} size="large" text="미선택" />
          <ChipItem {...args} selected={false} size="small" text="미선택" />
        </div>
      </div>
    </div>
  ),
};

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "16px" }}>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#666" }}>large × selected</p>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          <ChipItem {...args} size="large" selected={true} text="전체" />
          <ChipItem {...args} size="large" selected={true} text="의류" />
          <ChipItem {...args} size="large" selected={false} text="가전" />
          <ChipItem {...args} size="large" selected={false} text="식품" />
        </div>
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#666" }}>small × selected</p>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          <ChipItem {...args} size="small" selected={true} text="전체" />
          <ChipItem {...args} size="small" selected={true} text="의류" />
          <ChipItem {...args} size="small" selected={false} text="가전" />
          <ChipItem {...args} size="small" selected={false} text="식품" />
        </div>
      </div>
    </div>
  ),
};
