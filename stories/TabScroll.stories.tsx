import type { Meta, StoryObj } from "@storybook/react-vite";
import { TabScroll } from "@cx/components";

const meta: Meta<typeof TabScroll> = {
  title: "cx/TabScroll",
  component: TabScroll as never,
  argTypes: {
    labels: { control: false },
    selectedIndex: { control: "number" },
    onTabChange: { control: false },
  },
  args: {
    labels: ["전체", "인기", "신상품", "할인", "브랜드", "기획전", "특가", "세일"],
    selectedIndex: 0,
  },
};
export default meta;
type Story = StoryObj<typeof TabScroll>;

export const Default: Story = {};

export const SecondTabSelected: Story = {
  args: {
    selectedIndex: 1,
  },
};

export const ManyTabs: Story = {
  args: {
    labels: ["전체", "스마트폰", "태블릿", "노트북", "액세서리", "케이스", "충전기", "이어폰", "스피커", "스마트워치"],
    selectedIndex: 0,
  },
};

export const FewTabs: Story = {
  args: {
    labels: ["전체", "인기", "신상품"],
    selectedIndex: 2,
  },
};

export const AllSelectedStates: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, padding: 16 }}>
      {[0, 1, 2, 3].map((idx) => (
        <div key={idx}>
          <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>selectedIndex={idx}</p>
          <TabScroll {...args} selectedIndex={idx} />
        </div>
      ))}
    </div>
  ),
  args: {
    labels: ["홈", "카테고리", "혜택", "마이페이지"],
    selectedIndex: 0,
  },
};

export const ShortLabels: Story = {
  args: {
    labels: ["A", "B", "C", "D", "E", "F"],
    selectedIndex: 0,
  },
};

export const LongLabels: Story = {
  args: {
    labels: ["전체상품보기", "오늘의특가상품", "신규입고상품", "인기급상승상품", "브랜드기획전"],
    selectedIndex: 0,
  },
};
