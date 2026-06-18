import type { Meta, StoryObj } from "@storybook/react-vite";
import { TabScrollItem } from "@cx/components";

const meta: Meta<typeof TabScrollItem> = {
  title: "cx/TabScrollItem",
  component: TabScrollItem as never,
  argTypes: {
    label: { control: "text" },
    selection: { control: "boolean" },
    selected: { control: false },
    className: { control: false },
    onClick: { control: false },
  },
  args: {
    label: "Label",
    selection: true,
  },
};
export default meta;
type Story = StoryObj<typeof TabScrollItem>;

export const Default: Story = {};

export const Selected: Story = {
  args: {
    label: "Label",
    selection: true,
  },
};

export const Unselected: Story = {
  args: {
    label: "Label",
    selection: false,
  },
};

export const States: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", alignItems: "center", padding: "16px" }}>
      <div>
        <p style={{ fontSize: "12px", color: "#888", marginBottom: "4px" }}>기본</p>
        <TabScrollItem label="Label" selection={false} />
      </div>
      <div>
        <p style={{ fontSize: "12px", color: "#888", marginBottom: "4px" }}>선택됨</p>
        <TabScrollItem label="Label" selection={true} />
      </div>
    </div>
  ),
};

export const TabGroup: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "0px", alignItems: "center", padding: "16px", borderBottom: "1px solid #eee" }}>
      <TabScrollItem label="Label" selection={true} />
      <TabScrollItem label="Label" selection={false} />
      <TabScrollItem label="Label" selection={false} />
      <TabScrollItem label="Label" selection={false} />
      <TabScrollItem label="Label" selection={false} />
    </div>
  ),
};
