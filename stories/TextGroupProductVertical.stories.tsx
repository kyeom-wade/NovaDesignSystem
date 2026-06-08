import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextGroupProductVertical } from "@cx/components";

const meta: Meta<typeof TextGroupProductVertical> = {
  title: "cx/TextGroupProductVertical",
  component: TextGroupProductVertical as never,
  argTypes: {
    title: { control: "text" },
    subText: { control: "text" },
    showSubText: { control: "boolean" },
    rating: { control: "text" },
    bookingRate: { control: "text" },
    showSubGroup: { control: "boolean" },
    discount: { control: "text" },
    showDiscount: { control: "boolean" },
    price: { control: "text" },
    showPrice: { control: "boolean" },
    period: { control: "text" },
    showPeriod: { control: "boolean" },
    priceConditionLabel: { control: "text" },
    priceConditionValue: { control: "text" },
    showPriceCondition: { control: "boolean" },
    badges: { control: false },
    showBadgeGroup: { control: "boolean" },
  },
  args: {
    title: "상품명 최대 2줄 노출됩니다. 상품명 최대 2줄 노출됩니다.",
    subText: "카테고리",
    showSubText: true,
    rating: "평점 4.7",
    bookingRate: "예매율 21.4%",
    showSubGroup: true,
    discount: "7%",
    showDiscount: true,
    price: "999,999원",
    showPrice: true,
    period: "/12개월",
    showPeriod: true,
    priceConditionLabel: "선택 약정 적용 시",
    priceConditionValue: "74,250원",
    showPriceCondition: true,
    badges: ["베스트", "신상품", "추천"],
    showBadgeGroup: true,
  },
};
export default meta;
type Story = StoryObj<typeof TextGroupProductVertical>;

export const Default: Story = {};

export const TitleOnly: Story = {
  args: {
    showSubText: false,
    showSubGroup: false,
    showPrice: false,
    showBadgeGroup: false,
  },
};

export const WithSubText: Story = {
  args: {
    showSubText: true,
    showSubGroup: false,
    showPrice: false,
    showBadgeGroup: false,
  },
};

export const WithSubGroup: Story = {
  args: {
    showSubText: true,
    showSubGroup: true,
    showPrice: false,
    showBadgeGroup: false,
  },
};

export const PriceOnly: Story = {
  args: {
    showSubText: false,
    showSubGroup: false,
    showPrice: true,
    showDiscount: false,
    showPeriod: false,
    showPriceCondition: false,
    showBadgeGroup: false,
  },
};

export const PriceWithDiscount: Story = {
  args: {
    showSubText: false,
    showSubGroup: false,
    showPrice: true,
    showDiscount: true,
    showPeriod: false,
    showPriceCondition: false,
    showBadgeGroup: false,
  },
};

export const PriceWithPeriod: Story = {
  args: {
    showSubText: false,
    showSubGroup: false,
    showPrice: true,
    showDiscount: true,
    showPeriod: true,
    showPriceCondition: false,
    showBadgeGroup: false,
  },
};

export const FullPrice: Story = {
  args: {
    showSubText: false,
    showSubGroup: false,
    showPrice: true,
    showDiscount: true,
    showPeriod: true,
    showPriceCondition: true,
    showBadgeGroup: false,
  },
};

export const WithBadges: Story = {
  args: {
    showSubText: false,
    showSubGroup: false,
    showPrice: false,
    showBadgeGroup: true,
    badges: ["베스트", "신상품", "추천"],
  },
};

export const States: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px", padding: "24px" }}>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#888" }}>전체 정보 표시</p>
        <TextGroupProductVertical
          title="T우주패스 올 (인터넷+TV+모바일)"
          subText="결합상품"
          showSubText={true}
          showSubGroup={true}
          rating="평점 4.9"
          bookingRate="예매율 35.2%"
          showPrice={true}
          showDiscount={true}
          discount="15%"
          price="49,900원"
          showPeriod={true}
          period="/월"
          showPriceCondition={true}
          priceConditionLabel="선택 약정 24개월 적용 시"
          priceConditionValue="42,400원"
          showBadgeGroup={true}
          badges={["베스트", "추천", "혜택"]}
        />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#888" }}>가격 정보 없음</p>
        <TextGroupProductVertical
          title="갤럭시 S25 울트라 256GB"
          subText="스마트폰"
          showSubText={true}
          showSubGroup={true}
          rating="평점 4.5"
          bookingRate="예매율 18.7%"
          showPrice={false}
          showBadgeGroup={true}
          badges={["신상품", "인기"]}
        />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#888" }}>최소 정보 (제목만)</p>
        <TextGroupProductVertical
          title="아이폰 16 Pro 128GB"
          showSubText={false}
          showSubGroup={false}
          showPrice={false}
          showBadgeGroup={false}
        />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#888" }}>할인 없는 가격</p>
        <TextGroupProductVertical
          title="갤럭시 버즈3 프로"
          subText="액세서리"
          showSubText={true}
          showSubGroup={false}
          showPrice={true}
          showDiscount={false}
          price="259,000원"
          showPeriod={false}
          showPriceCondition={false}
          showBadgeGroup={true}
          badges={["신상품"]}
        />
      </div>
    </div>
  ),
};

export const ProductGrid: Story = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", padding: "24px" }}>
      <div style={{ width: "180px" }}>
        <TextGroupProductVertical
          title="T우주패스 올"
          subText="결합상품"
          showSubText={true}
          showSubGroup={true}
          rating="평점 4.9"
          bookingRate="예매율 35%"
          showPrice={true}
          showDiscount={true}
          discount="15%"
          price="49,900원"
          showPeriod={true}
          period="/월"
          showPriceCondition={true}
          priceConditionLabel="약정 적용 시"
          priceConditionValue="42,400원"
          showBadgeGroup={true}
          badges={["베스트", "추천"]}
        />
      </div>
      <div style={{ width: "180px" }}>
        <TextGroupProductVertical
          title="갤럭시 S25 256GB"
          subText="스마트폰"
          showSubText={true}
          showSubGroup={false}
          showPrice={true}
          showDiscount={true}
          discount="5%"
          price="1,099,000원"
          showPeriod={false}
          showPriceCondition={false}
          showBadgeGroup={true}
          badges={["신상품"]}
        />
      </div>
      <div style={{ width: "180px" }}>
        <TextGroupProductVertical
          title="아이폰 16 Pro 128GB"
          subText="스마트폰"
          showSubText={true}
          showSubGroup={true}
          rating="평점 4.7"
          bookingRate="예매율 22%"
          showPrice={true}
          showDiscount={false}
          price="1,350,000원"
          showPeriod={false}
          showPriceCondition={false}
          showBadgeGroup={true}
          badges={["인기"]}
        />
      </div>
      <div style={{ width: "180px" }}>
        <TextGroupProductVertical
          title="갤럭시 버즈3 프로"
          subText="액세서리"
          showSubText={true}
          showSubGroup={false}
          showPrice={true}
          showDiscount={true}
          discount="10%"
          price="259,000원"
          showPeriod={false}
          showPriceCondition={false}
          showBadgeGroup={false}
        />
      </div>
    </div>
  ),
};
