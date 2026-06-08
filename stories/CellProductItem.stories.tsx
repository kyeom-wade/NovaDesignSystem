import type { Meta, StoryObj } from "@storybook/react-vite";
import { CellProductItem } from "@cx/components";

const meta: Meta<typeof CellProductItem> = {
  title: "cx/CellProductItem",
  component: CellProductItem as never,
  argTypes: {
    thumbnailSrc: { control: "text" },
    brand: { control: "text" },
    productName: { control: "text" },
    showAdultWarning: { control: "boolean" },
    adultWarningText: { control: "text" },
    showCloseButton: { control: "boolean" },
    onClose: { control: false },
    showCellBox: { control: "boolean" },
    benefitText: { control: "text" },
    tableRows: { control: false },
    className: { control: false },
  },
  args: {
    brand: "브랜드명 / 패스명",
    productName: "상품명 최대 2줄 이후 말줄임 처리됩니다",
    showAdultWarning: true,
    adultWarningText: "19세 미만은 구독할 수 없는 상품입니다.",
    showCloseButton: true,
    showCellBox: true,
    benefitText: "배달의민족 5,000원 쿠폰 + 배민 3,000원 쿠폰",
    tableRows: [
      { label: "타이틀", value: "내용 들어가는 부분" },
      { label: "타이틀", value: "내용 들어가는 부분" },
    ],
  },
};
export default meta;
type Story = StoryObj<typeof CellProductItem>;

export const Default: Story = {};

export const WithThumbnail: Story = {
  args: {
    thumbnailSrc: "https://placehold.co/80x80/E0E0E0/999999?text=상품",
    brand: "T우주 / 구독패스",
    productName: "배달의민족 무료배달 구독권",
  },
};

export const NoAdultWarning: Story = {
  args: {
    showAdultWarning: false,
    brand: "T우주 / 일반상품",
    productName: "일반 구독 상품 예시",
  },
};

export const NoCellBox: Story = {
  args: {
    showCellBox: false,
    brand: "브랜드명 / 패스명",
    productName: "혜택 정보 없는 간단 상품",
  },
};

export const NoCloseButton: Story = {
  args: {
    showCloseButton: false,
    brand: "T우주 / 구독패스",
    productName: "닫기 불가 상품 예시",
  },
};

export const MultipleTableRows: Story = {
  args: {
    brand: "T우주 / 프리미엄 패스",
    productName: "다양한 혜택이 포함된 프리미엄 상품",
    showAdultWarning: false,
    showCellBox: true,
    benefitText: "월정액 구독 시 전 혜택 제공",
    tableRows: [
      { label: "데이터", value: "무제한 제공" },
      { label: "통화", value: "기본 300분" },
      { label: "부가 혜택", value: "OTT 3종 무료" },
    ],
  },
};

export const States: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px", padding: "24px" }}>
      <div>
        <p style={{ marginBottom: "8px", fontSize: "12px", color: "#666" }}>기본 (성인 경고 + 닫기 + 혜택박스)</p>
        <CellProductItem
          brand="T우주 / 구독패스"
          productName="배달의민족 무료배달 구독권"
          showAdultWarning={true}
          showCloseButton={true}
          showCellBox={true}
          benefitText="배달의민족 5,000원 쿠폰 + 배민 3,000원 쿠폰"
          tableRows={[
            { label: "타이틀", value: "내용 들어가는 부분" },
            { label: "타이틀", value: "내용 들어가는 부분" },
          ]}
        />
      </div>
      <div>
        <p style={{ marginBottom: "8px", fontSize: "12px", color: "#666" }}>성인 경고 없음</p>
        <CellProductItem
          brand="T우주 / 일반상품"
          productName="일반 구독 상품명 예시"
          showAdultWarning={false}
          showCloseButton={true}
          showCellBox={true}
          benefitText="Netflix 스탠다드 무료 이용권"
          tableRows={[
            { label: "혜택", value: "월 1회 제공" },
          ]}
        />
      </div>
      <div>
        <p style={{ marginBottom: "8px", fontSize: "12px", color: "#666" }}>혜택 박스 없음</p>
        <CellProductItem
          brand="브랜드명 / 패스명"
          productName="혜택 정보가 없는 간단 상품"
          showAdultWarning={false}
          showCloseButton={true}
          showCellBox={false}
        />
      </div>
      <div>
        <p style={{ marginBottom: "8px", fontSize: "12px", color: "#666" }}>닫기 버튼 없음</p>
        <CellProductItem
          brand="T우주 / 구독패스"
          productName="닫기 불가 상품 예시"
          showAdultWarning={true}
          showCloseButton={false}
          showCellBox={true}
          benefitText="특별 할인 쿠폰 제공"
          tableRows={[
            { label: "할인", value: "최대 3,000원" },
          ]}
        />
      </div>
      <div>
        <p style={{ marginBottom: "8px", fontSize: "12px", color: "#666" }}>썸네일 포함</p>
        <CellProductItem
          thumbnailSrc="https://placehold.co/80x80/7B68EE/FFFFFF?text=T"
          brand="T우주 / 프리미엄"
          productName="유튜브 프리미엄 구독권 월정액"
          showAdultWarning={false}
          showCloseButton={true}
          showCellBox={true}
          benefitText="유튜브 광고 없이 시청 + 오프라인 저장"
          tableRows={[
            { label: "제공 기간", value: "1개월" },
            { label: "이용 기기", value: "최대 3대" },
          ]}
        />
      </div>
    </div>
  ),
};
