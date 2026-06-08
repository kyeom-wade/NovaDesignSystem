import type { Meta, StoryObj } from "@storybook/react-vite";
import { CellCart } from "@cx/components";

const meta: Meta<typeof CellCart> = {
  title: "cx/CellCart",
  component: CellCart as never,
  argTypes: {
    title: { control: "text" },
    showTitle: { control: "boolean" },
    onClose: { control: false },
    thumbnailSrc: { control: "text" },
    brandName: { control: "text" },
    productName: { control: "text" },
    showAdultNotice: { control: "boolean" },
    adultNoticeText: { control: "text" },
    summaryRows: { control: false },
    totalLabel: { control: "text" },
    totalValue: { control: "text" },
    showChangeButton: { control: "boolean" },
    changeButtonLabel: { control: "text" },
    onChangeButton: { control: false },
  },
  args: {
    title: "리스트 타이틀",
    showTitle: true,
    brandName: "브랜드명 / 패스명",
    productName: "상품명 최대 2줄 이후 말줄임",
    showAdultNotice: true,
    adultNoticeText: "19세 미만은 구독할 수 없는 상품입니다.",
    summaryRows: [
      { label: "상품 금액", value: "53,000원" },
      { label: "첫 구독 할인가", value: "-5,000원" },
    ],
    totalLabel: "이용 금액",
    totalValue: "1개월 / 48,000원",
    showChangeButton: true,
    changeButtonLabel: "상품 옵션 변경하기",
  },
};
export default meta;
type Story = StoryObj<typeof CellCart>;

export const Default: Story = {};

export const NoTitle: Story = {
  args: {
    showTitle: false,
  },
};

export const NoAdultNotice: Story = {
  args: {
    showAdultNotice: false,
  },
};

export const NoChangeButton: Story = {
  args: {
    showChangeButton: false,
  },
};

export const WithThumbnail: Story = {
  args: {
    thumbnailSrc: "https://placehold.co/72x72/e0e0e0/888?text=상품",
    productName: "T아이디 구독 서비스 프리미엄 플랜",
    brandName: "SKT / T아이디",
  },
};

export const MultipleSummaryRows: Story = {
  args: {
    summaryRows: [
      { label: "상품 금액", value: "120,000원" },
      { label: "멤버십 할인", value: "-12,000원" },
      { label: "쿠폰 할인", value: "-5,000원" },
      { label: "포인트 사용", value: "-3,000원" },
    ],
    totalLabel: "최종 결제 금액",
    totalValue: "1개월 / 100,000원",
    productName: "프리미엄 구독 서비스 패키지",
    brandName: "SKT / T아이디",
  },
};

export const States: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, padding: 24 }}>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>타이틀 + 닫기 버튼 표시</p>
        <CellCart
          showTitle
          title="장바구니 상품"
          brandName="브랜드명 / 패스명"
          productName="상품명 최대 2줄 이후 말줄임"
          showAdultNotice
          adultNoticeText="19세 미만은 구독할 수 없는 상품입니다."
          summaryRows={[
            { label: "상품 금액", value: "53,000원" },
            { label: "첫 구독 할인가", value: "-5,000원" },
          ]}
          totalLabel="이용 금액"
          totalValue="1개월 / 48,000원"
          showChangeButton
          changeButtonLabel="상품 옵션 변경하기"
        />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>타이틀 없음</p>
        <CellCart
          showTitle={false}
          brandName="브랜드명 / 패스명"
          productName="상품명 최대 2줄 이후 말줄임"
          showAdultNotice={false}
          summaryRows={[
            { label: "상품 금액", value: "53,000원" },
            { label: "첫 구독 할인가", value: "-5,000원" },
          ]}
          totalLabel="이용 금액"
          totalValue="1개월 / 48,000원"
          showChangeButton
          changeButtonLabel="상품 옵션 변경하기"
        />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>성인 안내 없음 + 옵션 변경 버튼 없음</p>
        <CellCart
          showTitle
          title="장바구니 상품"
          brandName="SKT / T아이디"
          productName="T아이디 구독 서비스"
          showAdultNotice={false}
          summaryRows={[
            { label: "상품 금액", value: "9,900원" },
          ]}
          totalLabel="이용 금액"
          totalValue="1개월 / 9,900원"
          showChangeButton={false}
        />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>썸네일 이미지 포함</p>
        <CellCart
          showTitle
          title="선택한 상품"
          thumbnailSrc="https://placehold.co/72x72/e0e0e0/888?text=상품"
          brandName="T월드 / 공식몰"
          productName="갤럭시 S24 액세서리 구독 패키지 프리미엄"
          showAdultNotice={false}
          summaryRows={[
            { label: "상품 금액", value: "120,000원" },
            { label: "멤버십 할인", value: "-12,000원" },
            { label: "쿠폰 할인", value: "-5,000원" },
          ]}
          totalLabel="최종 결제 금액"
          totalValue="1개월 / 103,000원"
          showChangeButton
          changeButtonLabel="상품 옵션 변경하기"
        />
      </div>
    </div>
  ),
};
