import type { Meta, StoryObj } from "@storybook/react-vite";
import { CarouselItem } from "@cx/components";

const meta: Meta<typeof CarouselItem> = {
  title: "cx/CarouselItem",
  component: CarouselItem as never,
  argTypes: {
    variant: { control: "select", options: ["Small", "Medium", "Large"] },
    title: { control: "text" },
    subText: { control: "text" },
    price: { control: "text" },
    discountRate: { control: "text" },
    discountedPrice: { control: "text" },
    priceUnit: { control: "text" },
    rating: { control: "text" },
    bookingRate: { control: "text" },
    conditionLabel: { control: "text" },
    conditionPrice: { control: "text" },
    badges: { control: false },
    imageSrc: { control: "text" },
    imageAlt: { control: "text" },
  },
  args: {
    variant: "Small",
    title: "갤럭시 S25 울트라 티타늄 블랙 256GB",
    subText: "최신 AI 기능 탑재 플래그십 스마트폰",
    price: "1,599,000원",
    discountRate: "20%",
    discountedPrice: "89,900원",
    priceUnit: "/월",
    rating: "평점 4.8",
    bookingRate: "예매율 34.2%",
    conditionLabel: "선택 약정 적용 시",
    conditionPrice: "74,250원",
    badges: ["사전예약", "특가"],
    imageSrc: undefined,
    imageAlt: "상품 이미지",
  },
};
export default meta;
type Story = StoryObj<typeof CarouselItem>;

export const Default: Story = {};

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "24px", flexWrap: "wrap", padding: "24px", alignItems: "flex-start" }}>
      <div>
        <p style={{ fontSize: "12px", color: "#888", marginBottom: "8px" }}>Small</p>
        <CarouselItem
          {...args}
          variant="Small"
          title="갤럭시 S25 울트라 티타늄 블랙 256GB"
          price="1,599,000원"
          conditionLabel="선택 약정 적용 시"
          conditionPrice="74,250원"
        />
      </div>
      <div>
        <p style={{ fontSize: "12px", color: "#888", marginBottom: "8px" }}>Medium</p>
        <CarouselItem
          {...args}
          variant="Medium"
          title="범죄도시 4 액션 블록버스터"
          rating="평점 4.8"
          bookingRate="예매율 34.2%"
        />
      </div>
      <div>
        <p style={{ fontSize: "12px", color: "#888", marginBottom: "8px" }}>Large</p>
        <CarouselItem
          {...args}
          variant="Large"
          title="갤럭시 S25 플러스 아이시 블루"
          subText="최신 AI 기능 탑재 플래그십"
          discountRate="20%"
          discountedPrice="89,900원"
          priceUnit="/월"
          badges={["사전예약", "특가"]}
        />
      </div>
    </div>
  ),
};

export const SmallVariant: Story = {
  args: {
    variant: "Small",
    title: "갤럭시 S25 울트라 티타늄 블랙 256GB",
    price: "1,599,000원",
    conditionLabel: "선택 약정 적용 시",
    conditionPrice: "74,250원",
  },
};

export const MediumVariant: Story = {
  args: {
    variant: "Medium",
    title: "범죄도시 4 액션 블록버스터 최신 영화",
    rating: "평점 4.8",
    bookingRate: "예매율 34.2%",
  },
};

export const LargeVariant: Story = {
  args: {
    variant: "Large",
    title: "갤럭시 S25 플러스 아이시 블루 256GB",
    subText: "최신 AI 기능 탑재 플래그십 스마트폰",
    discountRate: "20%",
    discountedPrice: "89,900원",
    priceUnit: "/월",
    badges: ["사전예약", "특가"],
  },
};

export const WithImage: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "24px", flexWrap: "wrap", padding: "24px", alignItems: "flex-start" }}>
      <div>
        <p style={{ fontSize: "12px", color: "#888", marginBottom: "8px" }}>Small + 이미지</p>
        <CarouselItem
          {...args}
          variant="Small"
          title="갤럭시 S25 울트라 티타늄 블랙"
          price="1,599,000원"
          conditionLabel="선택 약정 적용 시"
          conditionPrice="74,250원"
          imageSrc="https://picsum.photos/seed/phone1/160/160"
          imageAlt="스마트폰 이미지"
        />
      </div>
      <div>
        <p style={{ fontSize: "12px", color: "#888", marginBottom: "8px" }}>Medium + 이미지</p>
        <CarouselItem
          {...args}
          variant="Medium"
          title="범죄도시 4 액션 블록버스터"
          rating="평점 4.8"
          bookingRate="예매율 34.2%"
          imageSrc="https://picsum.photos/seed/movie1/160/200"
          imageAlt="영화 포스터"
        />
      </div>
      <div>
        <p style={{ fontSize: "12px", color: "#888", marginBottom: "8px" }}>Large + 이미지</p>
        <CarouselItem
          {...args}
          variant="Large"
          title="갤럭시 S25 플러스 아이시 블루"
          subText="최신 AI 기능 탑재 플래그십"
          discountRate="20%"
          discountedPrice="89,900원"
          priceUnit="/월"
          badges={["사전예약", "특가"]}
          imageSrc="https://picsum.photos/seed/phone2/280/180"
          imageAlt="스마트폰 이미지"
        />
      </div>
    </div>
  ),
};

export const LargeWithBadges: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "24px", flexWrap: "wrap", padding: "24px", alignItems: "flex-start" }}>
      <div>
        <p style={{ fontSize: "12px", color: "#888", marginBottom: "8px" }}>배지 1개</p>
        <CarouselItem
          {...args}
          variant="Large"
          title="갤럭시 S25 플러스 아이시 블루 256GB"
          subText="최신 AI 기능 탑재 플래그십"
          discountRate="15%"
          discountedPrice="79,900원"
          priceUnit="/월"
          badges={["신규가입"]}
        />
      </div>
      <div>
        <p style={{ fontSize: "12px", color: "#888", marginBottom: "8px" }}>배지 2개</p>
        <CarouselItem
          {...args}
          variant="Large"
          title="갤럭시 S25 울트라 티타늄 블랙 256GB"
          subText="최강 성능의 플래그십 스마트폰"
          discountRate="20%"
          discountedPrice="99,900원"
          priceUnit="/월"
          badges={["사전예약", "특가"]}
        />
      </div>
      <div>
        <p style={{ fontSize: "12px", color: "#888", marginBottom: "8px" }}>배지 없음</p>
        <CarouselItem
          {...args}
          variant="Large"
          title="아이폰 16 프로 맥스 블랙 티타늄"
          subText="애플 인텔리전스 탑재 최신 아이폰"
          discountRate="10%"
          discountedPrice="109,900원"
          priceUnit="/월"
          badges={[]}
        />
      </div>
    </div>
  ),
};
