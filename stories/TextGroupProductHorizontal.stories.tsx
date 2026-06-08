import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextGroupProductHorizontal } from "@cx/components";

const meta: Meta<typeof TextGroupProductHorizontal> = {
  title: "cx/TextGroupProductHorizontal",
  component: TextGroupProductHorizontal as never,
  argTypes: {
    subTitle: { control: "text" },
    mainText: { control: "text" },
    subText: { control: "text" },
    showDiscount: { control: "boolean" },
    discountAmount: { control: "text" },
    discountRate: { control: "text" },
    showPeriod: { control: "boolean" },
    showPrice: { control: "boolean" },
    priceValue: { control: "text" },
    showSubTextGroup: { control: "boolean" },
    subText1: { control: "text" },
    subText2: { control: "text" },
    extraCount: { control: "text" },
    showBadgeGroup: { control: "boolean" },
    badges: { control: false },
  },
  args: {
    subTitle: "서브타이틀",
    mainText: "상품명 텍스트",
    subText: "보조 텍스트",
    showDiscount: true,
    discountAmount: "- 999,999원",
    discountRate: "7%",
    showPeriod: true,
    showPrice: true,
    priceValue: "99,000",
    showSubTextGroup: true,
    subText1: "텍스트1",
    subText2: "텍스트2",
    extraCount: "+2",
    showBadgeGroup: true,
    badges: ["할인", "적립", "사용"],
  },
};
export default meta;
type Story = StoryObj<typeof TextGroupProductHorizontal>;

export const Default: Story = {};

export const NoDiscount: Story = {
  args: {
    showDiscount: false,
    discountAmount: undefined,
    discountRate: undefined,
  },
};

export const NoPriceGroup: Story = {
  args: {
    showPrice: false,
  },
};

export const NoSubTextGroup: Story = {
  args: {
    showSubTextGroup: false,
  },
};

export const NoBadgeGroup: Story = {
  args: {
    showBadgeGroup: false,
  },
};

export const MinimalContent: Story = {
  args: {
    subTitle: undefined,
    subText: undefined,
    showDiscount: false,
    showPeriod: false,
    showPrice: true,
    priceValue: "29,000",
    showSubTextGroup: false,
    showBadgeGroup: false,
    badges: [],
  },
};

export const States: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px", padding: "24px" }}>
      <div>
        <p style={{ fontSize: "12px", color: "#888", marginBottom: "8px" }}>전체 표시</p>
        <TextGroupProductHorizontal
          subTitle="서브타이틀"
          mainText="상품명 전체 표시"
          subText="보조 텍스트"
          showDiscount={true}
          discountAmount="- 999,999원"
          discountRate="7%"
          showPeriod={true}
          showPrice={true}
          priceValue="99,000"
          showSubTextGroup={true}
          subText1="텍스트1"
          subText2="텍스트2"
          extraCount="+2"
          showBadgeGroup={true}
          badges={["할인", "적립", "사용"]}
        />
      </div>
      <div>
        <p style={{ fontSize: "12px", color: "#888", marginBottom: "8px" }}>할인 없음</p>
        <TextGroupProductHorizontal
          subTitle="서브타이틀"
          mainText="할인 없는 상품"
          subText="보조 텍스트"
          showDiscount={false}
          showPeriod={true}
          showPrice={true}
          priceValue="55,000"
          showSubTextGroup={true}
          subText1="텍스트1"
          subText2="텍스트2"
          extraCount="+1"
          showBadgeGroup={true}
          badges={["적립"]}
        />
      </div>
      <div>
        <p style={{ fontSize: "12px", color: "#888", marginBottom: "8px" }}>가격 그룹 없음</p>
        <TextGroupProductHorizontal
          subTitle="서브타이틀"
          mainText="가격 미표시 상품"
          subText="보조 텍스트"
          showDiscount={false}
          showPrice={false}
          showSubTextGroup={true}
          subText1="텍스트1"
          subText2="텍스트2"
          extraCount="+3"
          showBadgeGroup={true}
          badges={["할인", "적립"]}
        />
      </div>
      <div>
        <p style={{ fontSize: "12px", color: "#888", marginBottom: "8px" }}>최소 구성</p>
        <TextGroupProductHorizontal
          subTitle={undefined}
          mainText="최소 구성 상품"
          subText={undefined}
          showDiscount={false}
          showPeriod={false}
          showPrice={true}
          priceValue="29,000"
          showSubTextGroup={false}
          showBadgeGroup={false}
          badges={[]}
        />
      </div>
    </div>
  ),
};

export const BadgeVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px", padding: "24px" }}>
      <div>
        <p style={{ fontSize: "12px", color: "#888", marginBottom: "8px" }}>배지 1개</p>
        <TextGroupProductHorizontal
          mainText="상품명"
          showDiscount={true}
          discountAmount="- 10,000원"
          discountRate="10%"
          showPeriod={true}
          showPrice={true}
          priceValue="90,000"
          showSubTextGroup={false}
          showBadgeGroup={true}
          badges={["할인"]}
        />
      </div>
      <div>
        <p style={{ fontSize: "12px", color: "#888", marginBottom: "8px" }}>배지 3개</p>
        <TextGroupProductHorizontal
          mainText="상품명"
          showDiscount={true}
          discountAmount="- 50,000원"
          discountRate="20%"
          showPeriod={true}
          showPrice={true}
          priceValue="200,000"
          showSubTextGroup={false}
          showBadgeGroup={true}
          badges={["할인", "적립", "사용"]}
        />
      </div>
      <div>
        <p style={{ fontSize: "12px", color: "#888", marginBottom: "8px" }}>배지 없음</p>
        <TextGroupProductHorizontal
          mainText="상품명"
          showDiscount={false}
          showPeriod={false}
          showPrice={true}
          priceValue="15,000"
          showSubTextGroup={false}
          showBadgeGroup={false}
          badges={[]}
        />
      </div>
    </div>
  ),
};
