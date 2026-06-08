import type { Meta, StoryObj } from "@storybook/react-vite";
import { CellBoxItem } from "@cx/components";

const meta: Meta<typeof CellBoxItem> = {
  title: "cx/CellBoxItem",
  component: CellBoxItem as never,
  argTypes: {
    children: { control: false },
    className: { control: "text" },
  },
  args: {
    children: "텍스트",
  },
};
export default meta;
type Story = StoryObj<typeof CellBoxItem>;

export const Default: Story = {};

export const WithText: Story = {
  args: {
    children: "상품명",
  },
};

export const WithRichContent: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px", padding: "16px" }}>
      <p style={{ margin: 0, fontWeight: "bold" }}>다양한 콘텐츠 예시</p>
      <CellBoxItem>
        <span style={{ fontWeight: "bold" }}>제목</span>
      </CellBoxItem>
      <CellBoxItem>
        <div>
          <div style={{ fontWeight: "bold" }}>상품명</div>
          <div style={{ fontSize: "12px", color: "#888" }}>설명 텍스트</div>
        </div>
      </CellBoxItem>
      <CellBoxItem>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span>라벨</span>
          <span style={{ color: "#0066cc" }}>가격</span>
        </div>
      </CellBoxItem>
      <CellBoxItem>
        <div style={{ textAlign: "center", padding: "8px" }}>버튼 영역</div>
      </CellBoxItem>
    </div>
  ),
};

export const Multiple: Story = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", padding: "16px" }}>
      <p style={{ width: "100%", margin: 0, fontWeight: "bold" }}>여러 항목 나열</p>
      <CellBoxItem>항목 1</CellBoxItem>
      <CellBoxItem>항목 2</CellBoxItem>
      <CellBoxItem>항목 3</CellBoxItem>
      <CellBoxItem>항목 4</CellBoxItem>
    </div>
  ),
};
