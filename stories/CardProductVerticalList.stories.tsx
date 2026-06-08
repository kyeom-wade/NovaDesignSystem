import type { Meta, StoryObj } from "@storybook/react-vite";
import { CardProductVerticalList } from "@cx/components";

const meta: Meta<typeof CardProductVerticalList> = {
  title: "cx/CardProductVerticalList",
  component: CardProductVerticalList as never,
  argTypes: {
    items: { control: false },
    className: { control: "text" },
  },
  args: {
    items: [
      {
        title: "상품명 최대 2줄까지 노출됩니다. 상품명 최대 2줄까지 노출됩니다.",
        subText: "브랜드명",
        rating: "평점 4.7",
        bookingRate: "예매율 21.4%",
        discountRate: "7%",
        price: "999,999원",
        installment: "/12개월",
        priceConditionLabel: "선택 약정 적용 시",
        priceConditionValue: "74,250원",
        badges: [{ label: "혜택" }, { label: "특가" }, { label: "추천" }],
        dimMultiply: false,
      },
      {
        title: "두 번째 상품명 예시입니다.",
        subText: "카테고리",
        rating: "평점 4.3",
        bookingRate: "예매율 12.0%",
        discountRate: "15%",
        price: "59,000원",
        installment: "/6개월",
        priceConditionLabel: "할인 적용 시",
        priceConditionValue: "50,150원",
        badges: [{ label: "신상" }, { label: "인기" }],
        dimMultiply: false,
      },
    ],
  },
};
export default meta;
type Story = StoryObj<typeof CardProductVerticalList>;

export const Default: Story = {};

export const WithDimOverlay: Story = {
  args: {
    items: [
      {
        title: "딤 오버레이 적용 상품",
        subText: "브랜드명",
        rating: "평점 4.9",
        bookingRate: "예매율 35.2%",
        discountRate: "20%",
        price: "129,000원",
        installment: "/24개월",
        priceConditionLabel: "약정 적용 시",
        priceConditionValue: "99,000원",
        badges: [{ label: "특가" }, { label: "한정" }],
        dimMultiply: true,
      },
      {
        title: "딤 오버레이 없는 상품",
        subText: "카테고리",
        rating: "평점 4.1",
        bookingRate: "예매율 8.5%",
        discountRate: "5%",
        price: "45,000원",
        dimMultiply: false,
      },
    ],
  },
  render: (args) => (
    <div style={{ padding: "16px" }}>
      <p style={{ marginBottom: "8px", fontSize: "12px", color: "#888" }}>dimMultiply: true / false 비교</p>
      <CardProductVerticalList {...args} />
    </div>
  ),
};

export const WithThumbnailImages: Story = {
  args: {
    items: [
      {
        imageSrc: "https://picsum.photos/seed/product1/160/160",
        title: "이미지가 있는 상품 카드",
        subText: "브랜드명",
        rating: "평점 4.8",
        bookingRate: "예매율 18.7%",
        discountRate: "10%",
        price: "79,000원",
        installment: "/12개월",
        priceConditionLabel: "선택 약정 시",
        priceConditionValue: "71,100원",
        badges: [{ label: "신상" }, { label: "추천" }],
        dimMultiply: false,
      },
      {
        imageSrc: "https://picsum.photos/seed/product2/160/160",
        title: "두 번째 이미지 상품입니다.",
        subText: "카테고리명",
        rating: "평점 4.5",
        bookingRate: "예매율 25.0%",
        discountRate: "30%",
        price: "199,000원",
        badges: [{ label: "BEST" }],
        dimMultiply: true,
      },
    ],
  },
};

export const MinimalItems: Story = {
  args: {
    items: [
      {
        title: "최소 정보 상품명",
        price: "39,000원",
      },
      {
        title: "두 번째 최소 정보 상품",
        price: "55,000원",
        discountRate: "8%",
      },
    ],
  },
  render: (args) => (
    <div style={{ padding: "16px" }}>
      <p style={{ marginBottom: "8px", fontSize: "12px", color: "#888" }}>가격·제목만 있는 최소 구성</p>
      <CardProductVerticalList {...args} />
    </div>
  ),
};

export const NoBadges: Story = {
  args: {
    items: [
      {
        title: "배지 없는 상품",
        subText: "브랜드",
        rating: "평점 4.0",
        bookingRate: "예매율 10.0%",
        discountRate: "5%",
        price: "25,000원",
        badges: [],
      },
      {
        title: "배지 없는 두 번째 상품",
        subText: "카테고리",
        rating: "평점 3.8",
        bookingRate: "예매율 6.2%",
        price: "18,000원",
        badges: [],
      },
    ],
  },
};

export const SingleItem: Story = {
  args: {
    items: [
      {
        title: "단일 상품 카드 예시입니다.",
        subText: "단독 브랜드",
        rating: "평점 5.0",
        bookingRate: "예매율 99.9%",
        discountRate: "50%",
        price: "150,000원",
        installment: "/36개월",
        priceConditionLabel: "최대 혜택 적용 시",
        priceConditionValue: "75,000원",
        badges: [{ label: "역대급" }, { label: "한정판" }, { label: "SALE" }],
        dimMultiply: false,
      },
    ],
  },
};

export const ManyItems: Story = {
  args: {
    items: Array.from({ length: 5 }, (_, i) => ({
      title: `상품명 ${i + 1} — 타이틀 최대 2줄 노출됩니다.`,
      subText: `브랜드 ${i + 1}`,
      rating: `평점 ${(4 + i * 0.1).toFixed(1)}`,
      bookingRate: `예매율 ${10 + i * 5}.0%`,
      discountRate: `${5 + i * 3}%`,
      price: `${(50000 + i * 10000).toLocaleString()}원`,
      installment: "/12개월",
      priceConditionLabel: "약정 적용 시",
      priceConditionValue: `${(45000 + i * 9000).toLocaleString()}원`,
      badges: [{ label: "혜택" }, { label: "추천" }],
      dimMultiply: i % 2 === 0,
    })),
  },
  render: (args) => (
    <div style={{ padding: "16px" }}>
      <p style={{ marginBottom: "8px", fontSize: "12px", color: "#888" }}>5개 아이템 목록</p>
      <CardProductVerticalList {...args} />
    </div>
  ),
};

export const Clickable: Story = {
  args: {
    items: [
      {
        title: "클릭 가능한 상품 카드",
        subText: "브랜드명",
        rating: "평점 4.6",
        bookingRate: "예매율 14.3%",
        discountRate: "12%",
        price: "88,000원",
        badges: [{ label: "클릭" }],
        dimMultiply: false,
        onClick: () => alert("상품 카드 클릭됨"),
      },
      {
        title: "두 번째 클릭 가능 상품",
        subText: "카테고리",
        rating: "평점 4.2",
        bookingRate: "예매율 9.1%",
        price: "33,000원",
        badges: [{ label: "터치" }],
        dimMultiply: false,
        onClick: () => alert("두 번째 카드 클릭됨"),
      },
    ],
  },
};
