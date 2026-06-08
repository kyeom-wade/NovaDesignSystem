import type { Meta, StoryObj } from "@storybook/react-vite";
import { CarouselGroupItem } from "@cx/components";

const meta: Meta<typeof CarouselGroupItem> = {
  title: "cx/CarouselGroupItem",
  component: CarouselGroupItem as never,
  argTypes: {
    variant: { control: "select", options: ["Small", "Medium", "Large"] },
    title: { control: "text" },
    subText: { control: "text" },
    price: { control: "text" },
    discountRate: { control: "text" },
    priceUnit: { control: "text" },
    priceConditionLabel: { control: "text" },
    priceConditionAmount: { control: "text" },
    rating: { control: "text" },
    bookingRate: { control: "text" },
    badges: { control: false },
    src: { control: "text" },
  },
  args: {
    variant: "Small",
    title: "상품명 최대 2줄 노출됩니다. 상품명 텍스트 예시입니다.",
    subText: "서브 텍스트",
    price: "99,900원",
    discountRate: "10%",
    priceUnit: "/12개월",
    priceConditionLabel: "선택 약정 적용 시",
    priceConditionAmount: "74,250원",
    rating: "평점 4.7",
    bookingRate: "예매율 21.4%",
    badges: ["혜택", "추천"],
  },
};
export default meta;
type Story = StoryObj<typeof CarouselGroupItem>;

export const Default: Story = {};

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "48px", padding: "24px" }}>
      <div>
        <p style={{ marginBottom: "12px", fontWeight: "bold", fontSize: "14px" }}>Small</p>
        <CarouselGroupItem
          {...args}
          variant="Small"
          title="스몰 상품명 최대 2줄 노출됩니다."
          price="89,900원"
          priceConditionLabel="선택 약정 적용 시"
          priceConditionAmount="74,250원"
        />
      </div>
      <div>
        <p style={{ marginBottom: "12px", fontWeight: "bold", fontSize: "14px" }}>Medium</p>
        <CarouselGroupItem
          {...args}
          variant="Medium"
          title="미디엄 상품명 예시입니다."
          rating="평점 4.5"
          bookingRate="예매율 18.2%"
        />
      </div>
      <div>
        <p style={{ marginBottom: "12px", fontWeight: "bold", fontSize: "14px" }}>Large</p>
        <CarouselGroupItem
          {...args}
          variant="Large"
          title="라지 상품명 최대 2줄 노출됩니다."
          subText="서브 텍스트 설명"
          price="129,000원"
          discountRate="15%"
          priceUnit="/24개월"
          badges={["혜택", "추천", "인기"]}
        />
      </div>
    </div>
  ),
};

export const SmallVariant: Story = {
  args: {
    variant: "Small",
    title: "스마트폰 최신 모델 상품명 2줄 노출",
    price: "89,900원",
    priceConditionLabel: "선택 약정 적용 시",
    priceConditionAmount: "74,250원",
  },
};

export const MediumVariant: Story = {
  args: {
    variant: "Medium",
    title: "공연 및 이벤트 상품명 예시",
    rating: "평점 4.8",
    bookingRate: "예매율 35.2%",
  },
};

export const LargeVariant: Story = {
  args: {
    variant: "Large",
    title: "요금제 및 구독 상품명 예시",
    subText: "월정액 서비스",
    price: "55,000원",
    discountRate: "20%",
    priceUnit: "/월",
    badges: ["신규", "혜택", "추천"],
  },
};

export const LargeWithManyBadges: Story = {
  args: {
    variant: "Large",
    title: "다중 배지 표시 상품명 예시입니다.",
    subText: "프리미엄 구독",
    price: "99,000원",
    discountRate: "25%",
    priceUnit: "/월",
    badges: ["신규", "혜택", "추천", "인기"],
  },
};
