import type { Meta, StoryObj } from "@storybook/react-vite";
import { CardInfoList } from "@cx/components";

const meta: Meta<typeof CardInfoList> = {
  title: "cx/CardInfoList",
  component: CardInfoList as never,
  argTypes: {
    variant: { control: "select", options: ["Brand", "Coupon", "Place", "ListCardMap"] },
    thumbnailSrc: { control: "text" },
    iconSrc: { control: "text" },
    mapSrc: { control: "text" },
    mainText: { control: "text" },
    subText: { control: "text" },
    showSubText: { control: "boolean" },
    badges: { control: false },
    rightButtonLabel: { control: "text" },
    showRightButton: { control: "boolean" },
    onRightButtonClick: { control: false },
    className: { control: false },
  },
  args: {
    variant: "Brand",
    mainText: "SKT 우수 매장",
    subText: "서울특별시 중구 을지로 65",
    showSubText: true,
    badges: [{ label: "할인" }, { label: "적립" }, { label: "사용" }],
    rightButtonLabel: "사용",
    showRightButton: false,
  },
};
export default meta;
type Story = StoryObj<typeof CardInfoList>;

export const Default: Story = {};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, padding: 24 }}>
      <div>
        <p style={{ marginBottom: 8, fontSize: 12, color: "#888" }}>Brand</p>
        <CardInfoList
          variant="Brand"
          mainText="T멤버십 제휴 매장"
          subText="브랜드 설명 텍스트"
          showSubText
          badges={[{ label: "할인" }, { label: "적립" }]}
        />
      </div>
      <div>
        <p style={{ marginBottom: 8, fontSize: 12, color: "#888" }}>Coupon</p>
        <CardInfoList
          variant="Coupon"
          mainText="할인 쿠폰 상품명"
          subText="유효기간 2026.12.31"
          showSubText
          badges={[{ label: "할인" }, { label: "사용" }]}
          rightButtonLabel="쿠폰 사용"
          showRightButton
        />
      </div>
      <div>
        <p style={{ marginBottom: 8, fontSize: 12, color: "#888" }}>Place</p>
        <CardInfoList
          variant="Place"
          mainText="강남구 삼성동 CGV"
          subText="서울특별시 강남구 봉은사로 524"
          showSubText
          rightButtonLabel="길찾기"
          showRightButton
        />
      </div>
      <div>
        <p style={{ marginBottom: 8, fontSize: 12, color: "#888" }}>ListCardMap</p>
        <CardInfoList variant="ListCardMap" />
      </div>
    </div>
  ),
};

export const WithBadges: Story = {
  args: {
    variant: "Brand",
    mainText: "T멤버십 혜택 매장",
    subText: "다양한 혜택을 누려보세요",
    showSubText: true,
    badges: [{ label: "할인" }, { label: "적립" }, { label: "사용" }, { label: "무료" }],
  },
};

export const NoBadges: Story = {
  args: {
    variant: "Brand",
    mainText: "일반 매장",
    subText: "설명 텍스트",
    showSubText: true,
    badges: [],
  },
};

export const WithRightButton: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, padding: 24 }}>
      <div>
        <p style={{ marginBottom: 8, fontSize: 12, color: "#888" }}>Coupon — 버튼 있음</p>
        <CardInfoList
          variant="Coupon"
          mainText="스타벅스 아메리카노 1잔"
          subText="유효기간 2026.06.30"
          showSubText
          badges={[{ label: "할인" }]}
          rightButtonLabel="쿠폰 사용"
          showRightButton
        />
      </div>
      <div>
        <p style={{ marginBottom: 8, fontSize: 12, color: "#888" }}>Place — 버튼 있음</p>
        <CardInfoList
          variant="Place"
          mainText="롯데시네마 월드타워점"
          subText="서울특별시 송파구 올림픽로 300"
          showSubText
          rightButtonLabel="길찾기"
          showRightButton
        />
      </div>
    </div>
  ),
};

export const SubTextHidden: Story = {
  args: {
    variant: "Brand",
    mainText: "부가 설명 없는 매장",
    showSubText: false,
    badges: [{ label: "할인" }],
  },
};
