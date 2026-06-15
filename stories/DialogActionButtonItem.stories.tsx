import type { Meta, StoryObj } from "@storybook/react-vite";
import { DialogActionButtonItem } from "@cx/components";

const meta: Meta<typeof DialogActionButtonItem> = {
  title: "cx/DialogActionButtonItem",
  component: DialogActionButtonItem as never,
  argTypes: {
    options: { control: "select", options: ["2Button", "1Button"] },
    primaryLabel: { control: "text" },
    secondaryLabel: { control: "text" },
    onPrimary: { control: false },
    onSecondary: { control: false },
  },
  args: {
    options: "2Button",
    primaryLabel: "확인",
    secondaryLabel: "취소",
  },
};
export default meta;
type Story = StoryObj<typeof DialogActionButtonItem>;

export const Default: Story = {};

export const OneButton: Story = {
  args: {
    options: "1Button",
    primaryLabel: "확인",
  },
};

export const TwoButtons: Story = {
  args: {
    options: "2Button",
    primaryLabel: "확인",
    secondaryLabel: "취소",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px", padding: "24px" }}>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#888" }}>2Buttons</p>
        <DialogActionButtonItem options="2Button" primaryLabel="확인" secondaryLabel="취소" />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#888" }}>1Button</p>
        <DialogActionButtonItem options="1Button" primaryLabel="확인" />
      </div>
    </div>
  ),
};

export const CustomLabels: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px", padding: "24px" }}>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#888" }}>구매 확인</p>
        <DialogActionButtonItem options="2Button" primaryLabel="구매하기" secondaryLabel="닫기" />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#888" }}>삭제 확인</p>
        <DialogActionButtonItem options="2Button" primaryLabel="삭제" secondaryLabel="취소" />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#888" }}>단독 버튼</p>
        <DialogActionButtonItem options="1Button" primaryLabel="닫기" />
      </div>
    </div>
  ),
};
