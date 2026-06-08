import type { Meta, StoryObj } from "@storybook/react-vite";
import { TooltipItem } from "@cx/components";

const meta: Meta<typeof TooltipItem> = {
  title: "cx/TooltipItem",
  component: TooltipItem as never,
  argTypes: {
    direction: {
      control: "select",
      options: [
        "BottomLeft",
        "BottomCenter",
        "BottomRight",
        "TopLeft",
        "TopCenter",
        "TopRight",
        "Left",
        "Right",
      ],
    },
    text: { control: "text" },
    className: { control: false },
  },
  args: {
    direction: "BottomLeft",
    text: "툴팁 내용이 표시됩니다",
  },
};
export default meta;
type Story = StoryObj<typeof TooltipItem>;

export const Default: Story = {};

export const AllDirections: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "48px", padding: "48px", alignItems: "flex-start" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
        <p style={{ margin: 0, fontSize: "12px", color: "#666" }}>BottomLeft</p>
        <TooltipItem {...args} direction="BottomLeft" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
        <p style={{ margin: 0, fontSize: "12px", color: "#666" }}>BottomCenter</p>
        <TooltipItem {...args} direction="BottomCenter" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
        <p style={{ margin: 0, fontSize: "12px", color: "#666" }}>BottomRight</p>
        <TooltipItem {...args} direction="BottomRight" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
        <p style={{ margin: 0, fontSize: "12px", color: "#666" }}>TopLeft</p>
        <TooltipItem {...args} direction="TopLeft" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
        <p style={{ margin: 0, fontSize: "12px", color: "#666" }}>TopCenter</p>
        <TooltipItem {...args} direction="TopCenter" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
        <p style={{ margin: 0, fontSize: "12px", color: "#666" }}>TopRight</p>
        <TooltipItem {...args} direction="TopRight" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
        <p style={{ margin: 0, fontSize: "12px", color: "#666" }}>Left</p>
        <TooltipItem {...args} direction="Left" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
        <p style={{ margin: 0, fontSize: "12px", color: "#666" }}>Right</p>
        <TooltipItem {...args} direction="Right" />
      </div>
    </div>
  ),
};

export const BottomVariants: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "48px", padding: "32px", alignItems: "flex-start" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
        <p style={{ margin: 0, fontSize: "12px", color: "#666" }}>BottomLeft</p>
        <TooltipItem {...args} direction="BottomLeft" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
        <p style={{ margin: 0, fontSize: "12px", color: "#666" }}>BottomCenter</p>
        <TooltipItem {...args} direction="BottomCenter" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
        <p style={{ margin: 0, fontSize: "12px", color: "#666" }}>BottomRight</p>
        <TooltipItem {...args} direction="BottomRight" />
      </div>
    </div>
  ),
};

export const TopVariants: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "48px", padding: "32px", alignItems: "flex-start" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
        <p style={{ margin: 0, fontSize: "12px", color: "#666" }}>TopLeft</p>
        <TooltipItem {...args} direction="TopLeft" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
        <p style={{ margin: 0, fontSize: "12px", color: "#666" }}>TopCenter</p>
        <TooltipItem {...args} direction="TopCenter" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
        <p style={{ margin: 0, fontSize: "12px", color: "#666" }}>TopRight</p>
        <TooltipItem {...args} direction="TopRight" />
      </div>
    </div>
  ),
};

export const SideVariants: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "48px", padding: "32px", alignItems: "center" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
        <p style={{ margin: 0, fontSize: "12px", color: "#666" }}>Left</p>
        <TooltipItem {...args} direction="Left" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
        <p style={{ margin: 0, fontSize: "12px", color: "#666" }}>Right</p>
        <TooltipItem {...args} direction="Right" />
      </div>
    </div>
  ),
};

export const LongText: Story = {
  args: {
    direction: "BottomCenter",
    text: "상품 관련 추가 설명이나 안내 문구가 여기에 표시됩니다",
  },
};

export const ShortText: Story = {
  args: {
    direction: "BottomLeft",
    text: "라벨",
  },
};
