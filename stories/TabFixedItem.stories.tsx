import type { Meta, StoryObj } from "@storybook/react-vite";
import { TabFixedItem } from "@cx/components";

const meta: Meta<typeof TabFixedItem> = {
  title: "cx/TabFixedItem",
  component: TabFixedItem as never,
  argTypes: {
    label: { control: "text" },
    selected: { control: "boolean" },
    selection: { control: "boolean" },
    onClick: { control: false },
  },
  args: {
    label: "Label",
    selection: true,
  },
};
export default meta;
type Story = StoryObj<typeof TabFixedItem>;

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
    <div style={{ display: "flex", alignItems: "flex-start", width: "353px" }}>
      <TabFixedItem label="Label" selection={true} />
      <TabFixedItem label="Label" selection={false} />
    </div>
  ),
};

export const TabBar: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "0px", alignItems: "flex-start" }}>
      <TabFixedItem label="전체" selection={true} />
      <TabFixedItem label="인기" selection={false} />
      <TabFixedItem label="최신" selection={false} />
      <TabFixedItem label="추천" selection={false} />
    </div>
  ),
};
