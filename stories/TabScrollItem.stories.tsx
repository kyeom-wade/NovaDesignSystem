import type { Meta, StoryObj } from "@storybook/react-vite";
import { TabScrollItem } from "@cx/components";

const meta: Meta<typeof TabScrollItem> = {
  title: "cx/TabScrollItem",
  component: TabScrollItem as never,
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
type Story = StoryObj<typeof TabScrollItem>;

export const Default: Story = {};

export const Selected: Story = {
  args: {
    label: "선택됨",
    selected: true,
  },
};

export const States: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", alignItems: "center", padding: "16px" }}>
      <div>
        <p style={{ fontSize: "12px", color: "#888", marginBottom: "4px" }}>기본</p>
        <TabScrollItem label="전체" selected={false} />
      </div>
      <div>
        <p style={{ fontSize: "12px", color: "#888", marginBottom: "4px" }}>선택됨</p>
        <TabScrollItem label="인기" selected={true} />
      </div>
    </div>
  ),
};

export const TabGroup: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "0px", alignItems: "center", padding: "16px", borderBottom: "1px solid #eee" }}>
      <TabScrollItem label="전체" selected={true} />
      <TabScrollItem label="인기" selected={false} />
      <TabScrollItem label="신상품" selected={false} />
      <TabScrollItem label="혜택" selected={false} />
      <TabScrollItem label="이벤트" selected={false} />
    </div>
  ),
};
