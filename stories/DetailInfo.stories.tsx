import type { Meta, StoryObj } from "@storybook/react-vite";
import { DetailInfo } from "@cx/components";

const meta: Meta<typeof DetailInfo> = {
  title: "cx/DetailInfo",
  component: DetailInfo as never,
  argTypes: {
    variants: { control: "select", options: ["Product", "Brand"] },
    category: { control: "text" },
    name: { control: "text" },
    originalPrice: { control: "text" },
    showDiscount: { control: "boolean" },
    discountRate: { control: "text" },
    salePrice: { control: "text" },
    showPeriod: { control: "boolean" },
    period: { control: "text" },
    showBadgeList: { control: "boolean" },
    badges: { control: false },
    showCouponButton: { control: "boolean" },
    couponLabel: { control: "text" },
    onCoupon: { control: false },
    showUsage: { control: "boolean" },
    usage: { control: "text" },
    showDetailInfoItem: { control: "boolean" },
    detailInfoLabel: { control: "text" },
    onDetailInfo: { control: false },
    likeCount: { control: "text" },
    onLike: { control: false },
  },
  args: {
    variants: "Product",
    category: "스마트폰",
    name: "갤럭시 S24 Ultra 256GB",
    originalPrice: "1,799,800원",
    showDiscount: true,
    discountRate: "15%",
    salePrice: "1,529,830원",
    showPeriod: true,
    period: "/24개월",
    showBadgeList: true,
    badges: ["NEW", "256GB", "공식인증"],
    showCouponButton: true,
    couponLabel: "쿠폰 받기",
    showUsage: true,
    usage: "SKT 공식 매장",
    showDetailInfoItem: true,
    detailInfoLabel: "인기 상품 더보기",
    likeCount: "1,234",
  },
};
export default meta;
type Story = StoryObj<typeof DetailInfo>;

export const Default: Story = {};

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px", padding: "24px" }}>
      <div>
        <p style={{ margin: "0 0 12px", fontSize: "13px", color: "#666", fontWeight: 600 }}>Product 변형</p>
        <DetailInfo
          {...args}
          variants="Product"
          category="스마트폰"
          name="갤럭시 S24 Ultra 256GB"
          originalPrice="1,799,800원"
          discountRate="15%"
          salePrice="1,529,830원"
          period="/24개월"
          badges={["NEW", "256GB", "공식인증"]}
          couponLabel="쿠폰 받기"
          usage="SKT 공식 매장"
          detailInfoLabel="인기 상품 더보기"
          likeCount="1,234"
        />
      </div>
      <div>
        <p style={{ margin: "0 0 12px", fontSize: "13px", color: "#666", fontWeight: 600 }}>Brand 변형</p>
        <DetailInfo
          {...args}
          variants="Brand"
          category="카페 > 커피전문점"
          name="스타벅스 코리아"
          badges={["공식", "BEST"]}
          likeCount="9,999"
        />
      </div>
    </div>
  ),
};

export const ProductVariant: Story = {
  args: {
    variants: "Product",
    category: "태블릿",
    name: "갤럭시 탭 S9+ 256GB",
    originalPrice: "1,199,000원",
    showDiscount: true,
    discountRate: "10%",
    salePrice: "1,079,100원",
    showPeriod: true,
    period: "/12개월",
    showBadgeList: true,
    badges: ["NEW", "WIFI", "LTE"],
    showCouponButton: true,
    couponLabel: "할인 쿠폰",
    showUsage: true,
    usage: "SKT 온라인 스토어",
    showDetailInfoItem: true,
    detailInfoLabel: "태블릿 Best 상품 더보기",
    likeCount: "567",
  },
};

export const BrandVariant: Story = {
  args: {
    variants: "Brand",
    category: "카페 > 커피전문점",
    name: "스타벅스 코리아",
    showBadgeList: true,
    badges: ["공식", "BEST", "인기"],
    likeCount: "9,999",
  },
};

export const States: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px", padding: "24px" }}>
      <div>
        <p style={{ margin: "0 0 12px", fontSize: "13px", color: "#666", fontWeight: 600 }}>할인 없음</p>
        <DetailInfo
          {...args}
          variants="Product"
          category="액세서리"
          name="갤럭시 버즈3 Pro"
          originalPrice="239,000원"
          showDiscount={false}
          salePrice="239,000원"
          showPeriod={false}
          showBadgeList={true}
          badges={["NEW"]}
          showCouponButton={true}
          couponLabel="쿠폰 받기"
          showUsage={true}
          usage="전국 매장"
          showDetailInfoItem={true}
          detailInfoLabel="이어폰 더보기"
        />
      </div>
      <div>
        <p style={{ margin: "0 0 12px", fontSize: "13px", color: "#666", fontWeight: 600 }}>배지 없음</p>
        <DetailInfo
          {...args}
          variants="Product"
          category="스마트워치"
          name="갤럭시 워치7"
          originalPrice="399,000원"
          showDiscount={true}
          discountRate="5%"
          salePrice="379,050원"
          showPeriod={true}
          period="/12개월"
          showBadgeList={false}
          showCouponButton={true}
          couponLabel="쿠폰 받기"
          showUsage={true}
          usage="온라인 전용"
          showDetailInfoItem={false}
        />
      </div>
      <div>
        <p style={{ margin: "0 0 12px", fontSize: "13px", color: "#666", fontWeight: 600 }}>쿠폰 버튼 없음</p>
        <DetailInfo
          {...args}
          variants="Product"
          category="노트북"
          name="갤럭시 북4 Pro"
          originalPrice="1,999,000원"
          showDiscount={true}
          discountRate="8%"
          salePrice="1,839,080원"
          showPeriod={false}
          showBadgeList={true}
          badges={["NEW", "256GB"]}
          showCouponButton={false}
          showUsage={true}
          usage="SKT 공식 매장"
          showDetailInfoItem={true}
          detailInfoLabel="노트북 전체 보기"
        />
      </div>
      <div>
        <p style={{ margin: "0 0 12px", fontSize: "13px", color: "#666", fontWeight: 600 }}>최소 구성</p>
        <DetailInfo
          {...args}
          variants="Product"
          category="스마트폰"
          name="갤럭시 A55"
          originalPrice="599,000원"
          showDiscount={false}
          salePrice="599,000원"
          showPeriod={false}
          showBadgeList={false}
          showCouponButton={false}
          showUsage={false}
          showDetailInfoItem={false}
        />
      </div>
    </div>
  ),
};
