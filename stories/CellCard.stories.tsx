import type { Meta, StoryObj } from "@storybook/react-vite";
import { CellCard } from "@cx/components";

const meta: Meta<typeof CellCard> = {
  title: "cx/CellCard",
  component: CellCard as never,
  argTypes: {
    children: { control: false },
    slotHeight: { control: "number" },
    className: { control: "text" },
  },
  args: {
    slotHeight: 104,
  },
};
export default meta;
type Story = StoryObj<typeof CellCard>;

export const Default: Story = {
  args: {
    children: (
      <div style={{ padding: "16px" }}>
        <p style={{ margin: 0, fontWeight: 600 }}>제목</p>
        <p style={{ margin: "4px 0 0", fontSize: "14px", color: "#666" }}>설명 텍스트</p>
      </div>
    ),
  },
};

export const WithContent: Story = {
  args: {
    children: (
      <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "8px" }}>
        <p style={{ margin: 0, fontWeight: 700, fontSize: "16px" }}>상품명</p>
        <p style={{ margin: 0, fontSize: "14px", color: "#888" }}>상품 설명 텍스트가 여기에 표시됩니다.</p>
        <p style={{ margin: 0, fontWeight: 600, color: "#E00" }}>39,000원</p>
      </div>
    ),
  },
};

export const SlotHeights: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px", padding: "16px" }}>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#999" }}>slotHeight: 80</p>
        <CellCard slotHeight={80}>
          <div style={{ padding: "12px" }}>
            <p style={{ margin: 0 }}>라벨 텍스트</p>
          </div>
        </CellCard>
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#999" }}>slotHeight: 104 (기본값)</p>
        <CellCard slotHeight={104}>
          <div style={{ padding: "12px" }}>
            <p style={{ margin: 0 }}>라벨 텍스트</p>
          </div>
        </CellCard>
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#999" }}>slotHeight: 160</p>
        <CellCard slotHeight={160}>
          <div style={{ padding: "12px" }}>
            <p style={{ margin: 0 }}>라벨 텍스트</p>
          </div>
        </CellCard>
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#999" }}>slotHeight: 200</p>
        <CellCard slotHeight={200}>
          <div style={{ padding: "12px" }}>
            <p style={{ margin: 0 }}>라벨 텍스트</p>
          </div>
        </CellCard>
      </div>
    </div>
  ),
};

export const Empty: Story = {
  args: {
    children: undefined,
  },
};
