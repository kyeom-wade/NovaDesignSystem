import type { Meta, StoryObj } from "@storybook/react-vite";
import { BottomSheetHandleItem } from "@cx/components";

const meta: Meta<typeof BottomSheetHandleItem> = {
  title: "cx/BottomSheetHandleItem",
  component: BottomSheetHandleItem as never,
  argTypes: {
    width: { control: "text" },
    className: { control: false },
  },
  args: {
    width: 393,
  },
};
export default meta;
type Story = StoryObj<typeof BottomSheetHandleItem>;

export const Default: Story = {};

export const Widths: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, padding: 16 }}>
      <div>
        <p style={{ margin: "0 0 4px", fontSize: 12, color: "#888" }}>기본 (393px)</p>
        <BottomSheetHandleItem width={393} />
      </div>
      <div>
        <p style={{ margin: "0 0 4px", fontSize: 12, color: "#888" }}>좁은 (320px)</p>
        <BottomSheetHandleItem width={320} />
      </div>
      <div>
        <p style={{ margin: "0 0 4px", fontSize: 12, color: "#888" }}>넓은 (480px)</p>
        <BottomSheetHandleItem width={480} />
      </div>
      <div>
        <p style={{ margin: "0 0 4px", fontSize: 12, color: "#888" }}>100% 너비</p>
        <BottomSheetHandleItem width="100%" />
      </div>
    </div>
  ),
};
