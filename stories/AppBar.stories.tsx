import type { Meta, StoryObj } from "@storybook/react-vite";
import { Appbar } from "@cx/components";

const meta: Meta<typeof Appbar> = {
  title: "cx/Appbar",
  component: Appbar as never,
  argTypes: {
    variant: { control: "select", options: ["1Depth", "2depth"] },
    title: { control: "text" },
    showLeftItem: { control: "boolean" },
    showRightItem: { control: "boolean" },
    rightItemCount: { control: "select", options: [1, 2, 3] },
    onBarcode: { control: false },
    onCart: { control: false },
    onMenu: { control: false },
    rightButtons: { control: false },
    leftButton: { control: false },
    className: { control: false },
  },
  args: {
    variant: "1Depth",
    title: "페이지명",
    showLeftItem: true,
    showRightItem: true,
    rightItemCount: 3,
  },
};
export default meta;
type Story = StoryObj<typeof Appbar>;

export const Default: Story = {};

export const Depth1: Story = {
  args: {
    variant: "1Depth",
  },
};

export const Depth2: Story = {
  args: {
    variant: "2depth",
    title: "상품 상세",
    showLeftItem: true,
    showRightItem: true,
    rightItemCount: 3,
  },
};

export const Depth2NoLeftItem: Story = {
  args: {
    variant: "2depth",
    title: "장바구니",
    showLeftItem: false,
    showRightItem: true,
    rightItemCount: 2,
  },
};

export const Depth2NoRightItem: Story = {
  args: {
    variant: "2depth",
    title: "주문 내역",
    showLeftItem: true,
    showRightItem: false,
  },
};

export const Depth2SingleRightButton: Story = {
  args: {
    variant: "2depth",
    title: "설정",
    showLeftItem: true,
    showRightItem: true,
    rightItemCount: 1,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px", padding: "16px" }}>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#666" }}>1Depth (홈 헤더)</p>
        <Appbar variant="1Depth" />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#666" }}>2depth — 아이콘 3개</p>
        <Appbar variant="2depth" title="상품 상세" showLeftItem showRightItem rightItemCount={3} />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#666" }}>2depth — 아이콘 2개</p>
        <Appbar variant="2depth" title="장바구니" showLeftItem showRightItem rightItemCount={2} />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#666" }}>2depth — 아이콘 1개</p>
        <Appbar variant="2depth" title="설정" showLeftItem showRightItem rightItemCount={1} />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#666" }}>2depth — 우측 버튼 없음</p>
        <Appbar variant="2depth" title="주문 내역" showLeftItem showRightItem={false} />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#666" }}>2depth — 뒤로가기 없음</p>
        <Appbar variant="2depth" title="공지사항" showLeftItem={false} showRightItem rightItemCount={2} />
      </div>
    </div>
  ),
};
