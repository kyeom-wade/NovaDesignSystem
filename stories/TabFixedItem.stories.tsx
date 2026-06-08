import type { Meta, StoryObj } from "@storybook/react-vite";
import { TabFixedItem } from "@cx/components";

const meta: Meta<typeof TabFixedItem> = {
  title: "cx/TabFixedItem",
  component: TabFixedItem as never,
  argTypes: {
    label: { control: "text" },
    selected: { control: "boolean" },
    onClick: { control: false },
  },
  args: {
    label: "탭명",
    selected: false,
  },
};
export default meta;
type Story = StoryObj<typeof TabFixedItem>;

export const Default: Story = {};

export const Selected: Story = {
  args: {
    label: "선택됨",
    selected: true,
  },
};

export const States: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "0px", alignItems: "flex-start" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
        <p style={{ margin: 0, fontSize: "12px", color: "#888" }}>기본</p>
        <TabFixedItem label="전체" selected={false} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
        <p style={{ margin: 0, fontSize: "12px", color: "#888" }}>선택</p>
        <TabFixedItem label="전체" selected={true} />
      </div>
    </div>
  ),
};

export const TabBar: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "0px", alignItems: "flex-start" }}>
      <TabFixedItem label="전체" selected={true} />
      <TabFixedItem label="인기" selected={false} />
      <TabFixedItem label="최신" selected={false} />
      <TabFixedItem label="추천" selected={false} />
    </div>
  ),
};
