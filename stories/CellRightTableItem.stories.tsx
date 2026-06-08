import type { Meta, StoryObj } from "@storybook/react-vite";
import { CellRightTableItem } from "@cx/components";

const meta: Meta<typeof CellRightTableItem> = {
  title: "cx/CellRightTableItem",
  component: CellRightTableItem as never,
  argTypes: {
    variant: {
      control: "select",
      options: [
        "14Title",
        "14Primary",
        "14Secondary",
        "14TitleBlue",
        "14PrimaryBlue",
        "14SecondaryBlue",
        "16Title",
        "16TitleBlue",
      ],
    },
    label: { control: "text" },
    value: { control: "text" },
  },
  args: {
    variant: "14Title",
    label: "상품명",
    value: "갤럭시 S25 울트라",
  },
};
export default meta;
type Story = StoryObj<typeof CellRightTableItem>;

export const Default: Story = {};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, padding: 24 }}>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>14Title</p>
        <CellRightTableItem variant="14Title" label="이용 요금" value="55,000원" />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>14Primary</p>
        <CellRightTableItem variant="14Primary" label="데이터" value="무제한" />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>14Secondary</p>
        <CellRightTableItem variant="14Secondary" label="가입일" value="2024.03.15" />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>14TitleBlue</p>
        <CellRightTableItem variant="14TitleBlue" label="혜택" value="3개월 무료" />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>14PrimaryBlue</p>
        <CellRightTableItem variant="14PrimaryBlue" label="할인 금액" value="−10,000원" />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>14SecondaryBlue</p>
        <CellRightTableItem variant="14SecondaryBlue" label="적립 포인트" value="1,200P" />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>16Title</p>
        <CellRightTableItem variant="16Title" label="총 결제 금액" value="45,000원" />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>16TitleBlue</p>
        <CellRightTableItem variant="16TitleBlue" label="최종 할인가" value="39,900원" />
      </div>
    </div>
  ),
};

export const TableGroup: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", padding: 24 }}>
      <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>주문 요약 테이블</p>
      <CellRightTableItem variant="14Title" label="상품명" value="갤럭시 S25 울트라" />
      <CellRightTableItem variant="14Primary" label="색상" value="티타늄 블랙" />
      <CellRightTableItem variant="14Primary" label="저장 용량" value="512GB" />
      <CellRightTableItem variant="14Secondary" label="출고가" value="1,899,000원" />
      <CellRightTableItem variant="14SecondaryBlue" label="공시지원금" value="−200,000원" />
      <CellRightTableItem variant="16TitleBlue" label="실구매가" value="1,699,000원" />
    </div>
  ),
};

export const Size14vs16: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 40, padding: 24, flexWrap: "wrap" }}>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>14px 크기</p>
        <CellRightTableItem variant="14Title" label="요금제" value="5G 프리미어 플러스" />
        <CellRightTableItem variant="14Primary" label="월정액" value="85,000원" />
        <CellRightTableItem variant="14TitleBlue" label="할인 혜택" value="결합 할인 적용" />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>16px 크기</p>
        <CellRightTableItem variant="16Title" label="요금제" value="5G 프리미어 플러스" />
        <CellRightTableItem variant="16TitleBlue" label="할인 혜택" value="결합 할인 적용" />
      </div>
    </div>
  ),
};
