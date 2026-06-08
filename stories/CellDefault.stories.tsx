import type { Meta, StoryObj } from "@storybook/react-vite";
import { CellDefault } from "@cx/components";

const meta: Meta<typeof CellDefault> = {
  title: "cx/CellDefault",
  component: CellDefault as never,
  argTypes: {
    title: { control: "text" },
    showTitle: { control: "boolean" },
    children: { control: false },
    className: { control: false },
  },
  args: {
    title: "리스트 타이틀",
    showTitle: true,
  },
};
export default meta;
type Story = StoryObj<typeof CellDefault>;

export const Default: Story = {
  args: {
    children: (
      <div style={{ padding: "12px", background: "#f5f5f5", borderRadius: "8px" }}>
        셀 콘텐츠 영역
      </div>
    ),
  },
};

export const WithoutTitle: Story = {
  args: {
    showTitle: false,
    children: (
      <div style={{ padding: "12px", background: "#f5f5f5", borderRadius: "8px" }}>
        타이틀 없는 셀 콘텐츠
      </div>
    ),
  },
};

export const States: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px", padding: "16px" }}>
      <div>
        <p style={{ marginBottom: "8px", fontSize: "12px", color: "#888" }}>타이틀 표시</p>
        <CellDefault title="리스트 타이틀" showTitle={true}>
          <div style={{ padding: "12px", background: "#f5f5f5", borderRadius: "8px" }}>
            셀 콘텐츠 영역
          </div>
        </CellDefault>
      </div>
      <div>
        <p style={{ marginBottom: "8px", fontSize: "12px", color: "#888" }}>타이틀 숨김</p>
        <CellDefault title="리스트 타이틀" showTitle={false}>
          <div style={{ padding: "12px", background: "#f5f5f5", borderRadius: "8px" }}>
            타이틀 없는 셀 콘텐츠
          </div>
        </CellDefault>
      </div>
      <div>
        <p style={{ marginBottom: "8px", fontSize: "12px", color: "#888" }}>콘텐츠 없음</p>
        <CellDefault title="빈 셀" showTitle={true} />
      </div>
    </div>
  ),
};

export const WithRichContent: Story = {
  args: {
    title: "상품 목록",
    showTitle: true,
    children: (
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid #eee" }}>
          <span>상품명</span>
          <span style={{ fontWeight: "bold" }}>29,900원</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid #eee" }}>
          <span>설명 텍스트</span>
          <span style={{ color: "#999" }}>라벨</span>
        </div>
      </div>
    ),
  },
};
