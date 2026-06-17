import type { Meta, StoryObj } from "@storybook/react-vite";
import { BottomGroupAreaItem } from "@cx/components";

const meta: Meta<typeof BottomGroupAreaItem> = {
  title: "cx/BottomGroupAreaItem",
  component: BottomGroupAreaItem as never,
  argTypes: {
    variants: { control: "select", options: ["1 Botton", "2 Botton"] },
    primaryLabel: { control: "text" },
    secondaryLabel: { control: "text" },
    onPrimary: { control: false },
    onSecondary: { control: false },
  },
  args: {
    variants: "1 Botton",
    primaryLabel: "확인",
    secondaryLabel: "취소",
  },
};
export default meta;
type Story = StoryObj<typeof BottomGroupAreaItem>;

export const Default: Story = {};

export const OneButton: Story = {
  args: {
    variants: "1 Botton",
    primaryLabel: "구매하기",
  },
};

export const TwoButtons: Story = {
  args: {
    variants: "2 Botton",
    primaryLabel: "구매하기",
    secondaryLabel: "장바구니",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px", padding: "16px", width: "393px" }}>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#666" }}>1 Botton</p>
        <BottomGroupAreaItem variants="1 Botton" primaryLabel="확인" />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#666" }}>2 Botton</p>
        <BottomGroupAreaItem variants="2 Botton" primaryLabel="구매하기" secondaryLabel="취소" />
      </div>
    </div>
  ),
};

export const ProductActions: Story = {
  args: {
    variants: "2 Botton",
    primaryLabel: "바로 구매",
    secondaryLabel: "장바구니 담기",
  },
};

export const ConfirmCancel: Story = {
  args: {
    variants: "2 Botton",
    primaryLabel: "확인",
    secondaryLabel: "취소",
  },
};
