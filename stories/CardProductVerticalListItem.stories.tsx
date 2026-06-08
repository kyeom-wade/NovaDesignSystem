import type { Meta, StoryObj } from "@storybook/react-vite";
import { CardProductVerticalListItem } from "@cx/components";

const meta: Meta<typeof CardProductVerticalListItem> = {
  title: "cx/CardProductVerticalListItem",
  component: CardProductVerticalListItem as never,
  argTypes: {
    imageSrc: { control: "text" },
    dimMultiply: { control: "boolean" },
    title: { control: "text" },
    subText: { control: "text" },
    rating: { control: "text" },
    bookingRate: { control: "text" },
    discountRate: { control: "text" },
    price: { control: "text" },
    installment: { control: "text" },
    priceConditionLabel: { control: "text" },
    priceConditionValue: { control: "text" },
    badges: { control: false },
    onClick: { control: false },
  },
  args: {
    title: "상품명 최대 2줄까지 노출됩니다. 상품명 최대 2줄까지 노출됩니다.",
    subText: "브랜드명",
    rating: "평점 4.7",
    bookingRate: "예매율 21.4%",
    discountRate: "7%",
    price: "999,999원",
    installment: "/12개월",
    priceConditionLabel: "선택 약정 적용 시",
    priceConditionValue: "74,250원",
    dimMultiply: true,
    badges: [{ label: "혜택" }, { label: "신규" }, { label: "추천" }],
  },
};
export default meta;
type Story = StoryObj<typeof CardProductVerticalListItem>;

export const Default: Story = {};

export const WithImage: Story = {
  args: {
    imageSrc: "https://picsum.photos/seed/product1/160/160",
    title: "갤럭시 S25 울트라",
    subText: "Samsung",
    discountRate: "15%",
    price: "1,499,400원",
    installment: "/24개월",
    priceConditionLabel: "공시 지원금 적용 시",
    priceConditionValue: "62,475원",
    badges: [{ label: "공시지원" }, { label: "단독특가" }],
  },
};

export const NoDimOverlay: Story = {
  args: {
    imageSrc: "https://picsum.photos/seed/product2/160/160",
    dimMultiply: false,
    title: "아이폰 16 Pro Max",
    subText: "Apple",
    discountRate: "10%",
    price: "1,799,000원",
    installment: "/24개월",
  },
};

export const NoBadges: Story = {
  args: {
    title: "배지 없는 상품",
    subText: "카테고리",
    badges: [],
    priceConditionLabel: "",
    priceConditionValue: "",
  },
};

export const NoPriceCondition: Story = {
  args: {
    title: "조건 없는 상품명",
    subText: "통신사",
    priceConditionLabel: undefined,
    priceConditionValue: undefined,
    badges: [{ label: "특가" }],
  },
};

export const NoInstallment: Story = {
  args: {
    title: "일시불 상품",
    subText: "브랜드",
    installment: "",
    price: "89,000원",
    priceConditionLabel: "",
    priceConditionValue: "",
    badges: [],
  },
};

export const States: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "24px", flexWrap: "wrap", padding: "16px" }}>
      <div>
        <p style={{ marginBottom: "8px", fontSize: "12px", color: "#888" }}>기본 (썸네일 없음)</p>
        <CardProductVerticalListItem
          title="기본 상품명"
          subText="브랜드"
          rating="평점 4.5"
          bookingRate="예매율 18%"
          discountRate="5%"
          price="599,000원"
          installment="/12개월"
          priceConditionLabel="선택 약정 적용 시"
          priceConditionValue="49,916원"
          badges={[{ label: "혜택" }, { label: "추천" }]}
        />
      </div>
      <div>
        <p style={{ marginBottom: "8px", fontSize: "12px", color: "#888" }}>이미지 + Dim 있음</p>
        <CardProductVerticalListItem
          imageSrc="https://picsum.photos/seed/phone1/160/160"
          dimMultiply={true}
          title="갤럭시 버즈 3 Pro"
          subText="Samsung"
          rating="평점 4.8"
          bookingRate="예매율 32%"
          discountRate="20%"
          price="249,000원"
          installment="/6개월"
          priceConditionLabel="약정 할인 적용 시"
          priceConditionValue="20,750원"
          badges={[{ label: "신규" }]}
        />
      </div>
      <div>
        <p style={{ marginBottom: "8px", fontSize: "12px", color: "#888" }}>이미지 + Dim 없음</p>
        <CardProductVerticalListItem
          imageSrc="https://picsum.photos/seed/phone2/160/160"
          dimMultiply={false}
          title="아이패드 Air M3"
          subText="Apple"
          rating="평점 4.9"
          bookingRate="예매율 45%"
          discountRate="8%"
          price="979,000원"
          installment="/24개월"
          priceConditionLabel="공시 지원금 적용 시"
          priceConditionValue="40,791원"
          badges={[{ label: "단독" }, { label: "인기" }, { label: "특가" }]}
        />
      </div>
      <div>
        <p style={{ marginBottom: "8px", fontSize: "12px", color: "#888" }}>클릭 가능</p>
        <CardProductVerticalListItem
          title="클릭 가능한 상품"
          subText="통신사"
          rating="평점 4.3"
          bookingRate="예매율 12%"
          discountRate="3%"
          price="299,000원"
          installment="/12개월"
          badges={[{ label: "이벤트" }]}
          onClick={() => alert("상품 클릭!")}
        />
      </div>
    </div>
  ),
};

export const MinimalContent: Story = {
  args: {
    title: "최소 정보 상품",
    subText: "",
    rating: "",
    bookingRate: "",
    discountRate: "",
    price: "120,000원",
    installment: "",
    priceConditionLabel: "",
    priceConditionValue: "",
    badges: [],
  },
};
