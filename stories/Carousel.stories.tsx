import type { Meta, StoryObj } from "@storybook/react-vite";
import { Carousel } from "@cx/components";

const sampleItems = [
  {
    imageSrc: undefined,
    imageAlt: "갤럭시 S25 이미지",
    itemTitle: "갤럭시 S25 울트라 256GB 티타늄블랙",
    price: "1,899,800원",
    priceConditionLabel: "선택 약정 적용 시",
    priceCondition: "79,158원",
    showDim: false,
  },
  {
    imageSrc: undefined,
    imageAlt: "아이폰 16 이미지",
    itemTitle: "아이폰 16 Pro 256GB 디저트 티타늄",
    price: "1,650,000원",
    priceConditionLabel: "선택 약정 적용 시",
    priceCondition: "68,750원",
    showDim: false,
  },
  {
    imageSrc: undefined,
    imageAlt: "갤럭시 Z폴드 이미지",
    itemTitle: "갤럭시 Z 폴드6 512GB 네이비",
    price: "2,299,000원",
    priceConditionLabel: "선택 약정 적용 시",
    priceCondition: "95,791원",
    showDim: false,
  },
  {
    imageSrc: undefined,
    imageAlt: "픽셀 9 이미지",
    itemTitle: "구글 픽셀 9 Pro 256GB 오비사이디언",
    price: "1,399,000원",
    priceConditionLabel: "선택 약정 적용 시",
    priceCondition: "58,291원",
    showDim: false,
  },
];

const dimmedItems = sampleItems.map((item) => ({ ...item, showDim: true }));

const minimalItems = [
  {
    imageAlt: "상품 이미지",
    itemTitle: "상품명 텍스트",
    price: "999,999원",
  },
  {
    imageAlt: "상품 이미지",
    itemTitle: "상품명 텍스트",
    price: "888,888원",
  },
  {
    imageAlt: "상품 이미지",
    itemTitle: "상품명 텍스트",
    price: "777,777원",
  },
];

const meta: Meta<typeof Carousel> = {
  title: "cx/Carousel",
  component: Carousel as never,
  argTypes: {
    title: { control: "text" },
    showMoreIcon: { control: "boolean" },
    onMore: { control: false },
    items: { control: false },
  },
  args: {
    title: "추천 상품",
    showMoreIcon: true,
    items: sampleItems,
  },
};
export default meta;
type Story = StoryObj<typeof Carousel>;

export const Default: Story = {};

export const WithMoreIcon: Story = {
  args: {
    title: "인기 스마트폰",
    showMoreIcon: true,
    items: sampleItems,
  },
};

export const WithoutMoreIcon: Story = {
  args: {
    title: "추천 단말기",
    showMoreIcon: false,
    items: sampleItems,
  },
};

export const WithDimOverlay: Story = {
  args: {
    title: "품절 임박 상품",
    showMoreIcon: true,
    items: dimmedItems,
  },
};

export const MinimalItems: Story = {
  args: {
    title: "간단 상품 목록",
    showMoreIcon: false,
    items: minimalItems,
  },
};

export const States: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px", padding: "24px" }}>
      <div>
        <p style={{ marginBottom: "8px", fontWeight: "bold", fontSize: "14px" }}>더보기 아이콘 있음</p>
        <Carousel title="더보기 있는 캐러셀" showMoreIcon={true} items={sampleItems} />
      </div>
      <div>
        <p style={{ marginBottom: "8px", fontWeight: "bold", fontSize: "14px" }}>더보기 아이콘 없음</p>
        <Carousel title="더보기 없는 캐러셀" showMoreIcon={false} items={sampleItems} />
      </div>
      <div>
        <p style={{ marginBottom: "8px", fontWeight: "bold", fontSize: "14px" }}>딤 오버레이 적용</p>
        <Carousel title="딤 오버레이 캐러셀" showMoreIcon={true} items={dimmedItems} />
      </div>
      <div>
        <p style={{ marginBottom: "8px", fontWeight: "bold", fontSize: "14px" }}>가격 조건 없음</p>
        <Carousel title="단순 가격 표시" showMoreIcon={false} items={minimalItems} />
      </div>
    </div>
  ),
};
