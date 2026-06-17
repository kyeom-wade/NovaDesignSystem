import type { Meta, StoryObj } from "@storybook/react-vite";
import { BottomGroupUpperItem } from "@cx/components";

const meta: Meta<typeof BottomGroupUpperItem> = {
  title: "cx/BottomGroupUpperItem",
  component: BottomGroupUpperItem as never,
  argTypes: {
    variant: { control: "select", options: ["Default", "Table"] },
    label: { control: "text" },
    value: { control: "text" },
    className: { control: false },
  },
  args: {
    variant: "Table",
    label: "타이틀",
    value: "내용 들어가는 부분",
  },
};
export default meta;
type Story = StoryObj<typeof BottomGroupUpperItem>;

export const Default: Story = {};

export const VariantDefault: Story = {
  args: {
    variant: "Default",
    label: "텍스트",
  },
};

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, padding: 24 }}>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>Default</p>
        <BottomGroupUpperItem {...args} variant="Default" label="텍스트" />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>Table</p>
        <BottomGroupUpperItem {...args} variant="Table" label="타이틀" value="내용 들어가는 부분" />
      </div>
    </div>
  ),
};

export const TableRows: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", padding: 24 }}>
      <BottomGroupUpperItem {...args} variant="Table" label="상품명" value="갤럭시 S24 Ultra" />
      <BottomGroupUpperItem {...args} variant="Table" label="색상" value="티타늄 블랙" />
      <BottomGroupUpperItem {...args} variant="Table" label="용량" value="256GB" />
      <BottomGroupUpperItem {...args} variant="Table" label="가격" value="1,699,000원" />
      <BottomGroupUpperItem {...args} variant="Table" label="배송비" value="무료" />
    </div>
  ),
};

export const DefaultListItems: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", padding: 24 }}>
      <BottomGroupUpperItem {...args} variant="Default" label="주문 내역 안내" />
      <BottomGroupUpperItem {...args} variant="Default" label="반품 및 환불 정책" />
      <BottomGroupUpperItem {...args} variant="Default" label="고객센터 문의" />
    </div>
  ),
};
