import type { Meta, StoryObj } from "@storybook/react-vite";
import { BottomSheetSelectItem } from "@cx/components";

const meta: Meta<typeof BottomSheetSelectItem> = {
  title: "cx/BottomSheetSelectItem",
  component: BottomSheetSelectItem as never,
  argTypes: {
    selection: { control: "boolean" },
    selected: { control: false },
    disclosure: { control: "boolean" },
    title: { control: "text" },
    children: { control: false },
    className: { control: false },
  },
  args: {
    selection: false,
    disclosure: false,
    title: "섹션/콘텐츠 타이틀",
  },
};
export default meta;
type Story = StoryObj<typeof BottomSheetSelectItem>;

export const Default: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 20, padding: 20, width: 393 }}>
      <BottomSheetSelectItem {...args} selection={false} disclosure={false} />
      <BottomSheetSelectItem {...args} selection={false} disclosure />
      <BottomSheetSelectItem {...args} selection disclosure={false} />
      <BottomSheetSelectItem {...args} selection disclosure />
    </div>
  ),
};
