import type { Meta, StoryObj } from "@storybook/react-vite";
import { CellTextInfoItem } from "@cx/components";

const meta: Meta<typeof CellTextInfoItem> = {
  title: "cx/CellTextInfoItem",
  component: CellTextInfoItem as never,
  argTypes: {
    rightItem: { control: "select", options: ["None", "Badge", "Text"] },
    label: { control: "text" },
    badgeLabel: { control: "text" },
    rightText: { control: "text" },
    subText: { control: "text" },
    dateText: { control: "text" },
  },
  args: {
    rightItem: "None",
    label: "상품명 텍스트 일이삼사오육칠팔구십",
    badgeLabel: "NEW",
    rightText: "+500P",
    subText: "카테고리",
    dateText: "2026.06.08",
  },
};
export default meta;
type Story = StoryObj<typeof CellTextInfoItem>;

export const Default: Story = {};

export const RightBadge: Story = {
  args: {
    rightItem: "Badge",
    label: "신규 혜택 안내",
    badgeLabel: "NEW",
    subText: "혜택",
    dateText: "2026.06.08",
  },
};

export const RightText: Story = {
  args: {
    rightItem: "Text",
    label: "포인트 적립 내역",
    rightText: "+1,000P",
    subText: "포인트",
    dateText: "2026.06.07",
  },
};

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "24px" }}>
      <div>
        <p style={{ fontSize: "12px", color: "#888", marginBottom: "8px" }}>rightItem: None</p>
        <CellTextInfoItem {...args} rightItem="None" label="기본 텍스트 항목" subText="분류" dateText="2026.06.08" />
      </div>
      <div>
        <p style={{ fontSize: "12px", color: "#888", marginBottom: "8px" }}>rightItem: Badge</p>
        <CellTextInfoItem {...args} rightItem="Badge" label="배지가 있는 항목" badgeLabel="NEW" subText="신규" dateText="2026.06.08" />
      </div>
      <div>
        <p style={{ fontSize: "12px", color: "#888", marginBottom: "8px" }}>rightItem: Text</p>
        <CellTextInfoItem {...args} rightItem="Text" label="오른쪽 텍스트 항목" rightText="+500P" subText="포인트" dateText="2026.06.08" />
      </div>
    </div>
  ),
};

export const BadgeVariants: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "24px" }}>
      <div>
        <p style={{ fontSize: "12px", color: "#888", marginBottom: "8px" }}>배지: NEW</p>
        <CellTextInfoItem {...args} rightItem="Badge" badgeLabel="NEW" label="신규 이벤트 안내" subText="이벤트" dateText="2026.06.08" />
      </div>
      <div>
        <p style={{ fontSize: "12px", color: "#888", marginBottom: "8px" }}>배지: HOT</p>
        <CellTextInfoItem {...args} rightItem="Badge" badgeLabel="HOT" label="인기 상품 정보" subText="상품" dateText="2026.06.07" />
      </div>
      <div>
        <p style={{ fontSize: "12px", color: "#888", marginBottom: "8px" }}>배지: SALE</p>
        <CellTextInfoItem {...args} rightItem="Badge" badgeLabel="SALE" label="할인 혜택 안내" subText="혜택" dateText="2026.06.06" />
      </div>
    </div>
  ),
};

export const LongLabel: Story = {
  args: {
    rightItem: "None",
    label: "아주 긴 텍스트가 들어가는 경우 레이아웃이 어떻게 보이는지 확인하는 항목입니다",
    subText: "카테고리",
    dateText: "2026.06.08",
  },
};
