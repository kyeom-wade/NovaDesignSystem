import type { Meta, StoryObj } from "@storybook/react-vite";
import { CellTableItem } from "@cx/components";

const meta: Meta<typeof CellTableItem> = {
  title: "cx/CellTableItem",
  component: CellTableItem as never,
  argTypes: {
    ratio: { control: "select", options: ["20", "30", "40"] },
    textSize: { control: "select", options: ["13", "14"] },
    label: { control: "text" },
    value: { control: "text" },
  },
  args: {
    ratio: "20",
    textSize: "13",
    label: "항목명",
    value: "내용 텍스트",
  },
};
export default meta;
type Story = StoryObj<typeof CellTableItem>;

export const Default: Story = {};

export const AllRatios: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 4, padding: 16 }}>
      <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>ratio: 20 (기본 — 20%)</p>
      <CellTableItem {...args} ratio="20" label="항목명" value="내용 텍스트가 들어가는 부분" />
      <p style={{ margin: "8px 0", fontSize: 12, color: "#888" }}>ratio: 30 (90px 고정)</p>
      <CellTableItem {...args} ratio="30" label="상품명" value="노바 디자인 시스템 상품 이름" />
      <p style={{ margin: "8px 0", fontSize: 12, color: "#888" }}>ratio: 40 (120px 고정)</p>
      <CellTableItem {...args} ratio="40" label="배송지" value="서울특별시 중구 을지로 65" />
    </div>
  ),
};

export const AllTextSizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 4, padding: 16 }}>
      <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>textSize: 13</p>
      <CellTableItem {...args} textSize="13" label="결제금액" value="99,000원" />
      <p style={{ margin: "8px 0", fontSize: 12, color: "#888" }}>textSize: 14</p>
      <CellTableItem {...args} textSize="14" label="결제금액" value="99,000원" />
    </div>
  ),
};

export const TableList: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 0, padding: 16, maxWidth: 360 }}>
      <CellTableItem {...args} label="주문번호" value="20240608-001234" />
      <CellTableItem {...args} label="상품명" value="갤럭시 S25 Ultra 512GB" />
      <CellTableItem {...args} label="수량" value="1개" />
      <CellTableItem {...args} label="결제금액" value="1,599,000원" />
      <CellTableItem {...args} label="배송지" value="서울특별시 중구 을지로 65" />
      <CellTableItem {...args} label="배송상태" value="배송 준비중" />
    </div>
  ),
};

export const RatioAndSizeCombinations: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, padding: 16 }}>
      {(["20", "30", "40"] as const).map((ratio) =>
        (["13", "14"] as const).map((textSize) => (
          <div key={`${ratio}-${textSize}`}>
            <p style={{ margin: "0 0 6px", fontSize: 12, color: "#888" }}>
              ratio={ratio} / textSize={textSize}
            </p>
            <CellTableItem ratio={ratio} textSize={textSize} label="라벨" value="값 텍스트" />
          </div>
        ))
      )}
    </div>
  ),
};
