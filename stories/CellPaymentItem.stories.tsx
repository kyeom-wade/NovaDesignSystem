import type { Meta, StoryObj } from "@storybook/react-vite";
import { CellPaymentItem } from "@cx/components";

const meta: Meta<typeof CellPaymentItem> = {
  title: "cx/CellPaymentItem",
  component: CellPaymentItem as never,
  argTypes: {
    logoImage: { control: "boolean" },
    badge: { control: "boolean" },
    bottomButton: { control: "boolean" },
    label: { control: "text" },
    badgeLabel: { control: "text" },
    logoSrc: { control: "text" },
    cardBrand: { control: "text" },
    cardHeadlineSuffix: { control: "text" },
    cardBody: { control: "text" },
    selected: { control: "boolean" },
    onClick: { control: false },
    onCardClick: { control: false },
  },
  args: {
    logoImage: false,
    badge: false,
    bottomButton: false,
    label: "카드/계좌 간편결제",
    badgeLabel: "최근 결제",
    logoSrc: "https://www.figma.com/api/mcp/asset/5e7b8927-78d3-4c87-8b44-c27997df83e8",
    cardBrand: "11Pay",
    cardHeadlineSuffix: "로 쉽고 빠르게",
    cardBody: "이용을 위해 약관 동의를 진행해 주세요",
    selected: false,
  },
};
export default meta;
type Story = StoryObj<typeof CellPaymentItem>;

export const Default: Story = {};

export const Selected: Story = {
  args: {
    selected: true,
    label: "신한카드 간편결제",
  },
};

export const WithBadge: Story = {
  args: {
    badge: true,
    badgeLabel: "최근 결제",
    label: "삼성페이",
  },
};

export const WithLogoImage: Story = {
  args: {
    logoImage: true,
    label: "11Pay",
  },
};

export const WithBottomButton: Story = {
  args: {
    bottomButton: true,
    cardBrand: "11Pay",
    cardHeadlineSuffix: "로 쉽고 빠르게",
    cardBody: "이용을 위해 약관 동의를 진행해 주세요",
  },
};

export const States: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "0px", padding: "16px", maxWidth: "400px" }}>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#888" }}>기본 (미선택)</p>
        <CellPaymentItem label="카드/계좌 간편결제" selected={false} />
      </div>
      <div style={{ marginTop: "16px" }}>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#888" }}>선택됨</p>
        <CellPaymentItem label="카드/계좌 간편결제" selected={true} />
      </div>
      <div style={{ marginTop: "16px" }}>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#888" }}>뱃지 포함</p>
        <CellPaymentItem label="삼성페이" badge={true} badgeLabel="최근 결제" selected={false} />
      </div>
      <div style={{ marginTop: "16px" }}>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#888" }}>뱃지 + 선택됨</p>
        <CellPaymentItem label="삼성페이" badge={true} badgeLabel="최근 결제" selected={true} />
      </div>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "0px", padding: "16px", maxWidth: "400px" }}>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#888" }}>기본</p>
        <CellPaymentItem label="카드/계좌 간편결제" />
      </div>
      <div style={{ marginTop: "16px" }}>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#888" }}>로고 이미지 포함</p>
        <CellPaymentItem label="11Pay" logoImage={true} />
      </div>
      <div style={{ marginTop: "16px" }}>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#888" }}>뱃지 포함</p>
        <CellPaymentItem label="삼성페이" badge={true} badgeLabel="최근 결제" />
      </div>
      <div style={{ marginTop: "16px" }}>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#888" }}>로고 + 뱃지 포함</p>
        <CellPaymentItem label="11Pay" logoImage={true} badge={true} badgeLabel="최근 결제" />
      </div>
      <div style={{ marginTop: "16px" }}>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#888" }}>하단 CTA 카드 포함</p>
        <CellPaymentItem
          label="11Pay"
          bottomButton={true}
          cardBrand="11Pay"
          cardHeadlineSuffix="로 쉽고 빠르게"
          cardBody="이용을 위해 약관 동의를 진행해 주세요"
        />
      </div>
      <div style={{ marginTop: "16px" }}>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#888" }}>전체 옵션 + 선택됨</p>
        <CellPaymentItem
          label="11Pay"
          logoImage={true}
          badge={true}
          badgeLabel="최근 결제"
          bottomButton={true}
          cardBrand="11Pay"
          cardHeadlineSuffix="로 쉽고 빠르게"
          cardBody="이용을 위해 약관 동의를 진행해 주세요"
          selected={true}
        />
      </div>
    </div>
  ),
};
