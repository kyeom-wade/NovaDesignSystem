import type { Meta, StoryObj } from "@storybook/react-vite";
import { CellBrandItem } from "@cx/components";

const meta: Meta<typeof CellBrandItem> = {
  title: "cx/CellBrandItem",
  component: CellBrandItem as never,
  argTypes: {
    thumbnailSrc: { control: "text" },
    subTitle: { control: "text" },
    showSubTitle: { control: "boolean" },
    mainText: { control: "text" },
    subText: { control: "text" },
    showSubText: { control: "boolean" },
    rightButtonLabel: { control: "text" },
    rightButton: { control: "boolean" },
    onRightButtonClick: { control: false },
    className: { control: false },
  },
  args: {
    mainText: "SKT 브랜드 상품명",
    subText: "부가 설명 텍스트",
    showSubText: true,
    subTitle: "서브타이틀",
    showSubTitle: false,
    rightButtonLabel: "사용",
    rightButton: true,
  },
};
export default meta;
type Story = StoryObj<typeof CellBrandItem>;

export const Default: Story = {};

export const WithSubTitle: Story = {
  args: {
    showSubTitle: true,
    subTitle: "브랜드 카테고리",
    mainText: "T멤버십 브랜드",
    subText: "최대 10% 할인 혜택",
  },
};

export const WithThumbnail: Story = {
  args: {
    thumbnailSrc: "https://placehold.co/48x48/ff0000/ffffff?text=SKT",
    mainText: "SKT 공식 브랜드",
    subText: "다양한 혜택을 만나보세요",
    showSubTitle: true,
    subTitle: "통신사 브랜드",
  },
};

export const NoRightButton: Story = {
  args: {
    rightButton: false,
    mainText: "버튼 없는 브랜드 항목",
    subText: "우측 버튼이 없는 레이아웃",
  },
};

export const States: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px", padding: "16px" }}>
      <p style={{ margin: "0 0 4px", fontSize: "12px", color: "#888" }}>기본 (subText 표시)</p>
      <CellBrandItem
        mainText="기본 브랜드 항목"
        subText="서브 텍스트 있음"
        showSubText={true}
        rightButton={true}
        rightButtonLabel="사용"
      />
      <p style={{ margin: "8px 0 4px", fontSize: "12px", color: "#888" }}>subText 숨김</p>
      <CellBrandItem
        mainText="서브텍스트 없는 항목"
        showSubText={false}
        rightButton={true}
        rightButtonLabel="사용"
      />
      <p style={{ margin: "8px 0 4px", fontSize: "12px", color: "#888" }}>subTitle 표시</p>
      <CellBrandItem
        mainText="서브타이틀 포함 항목"
        subTitle="카테고리 라벨"
        showSubTitle={true}
        subText="추가 설명 텍스트"
        showSubText={true}
        rightButton={true}
        rightButtonLabel="적용"
      />
      <p style={{ margin: "8px 0 4px", fontSize: "12px", color: "#888" }}>우측 버튼 없음</p>
      <CellBrandItem
        mainText="버튼 없는 항목"
        subText="우측 액션 없음"
        showSubText={true}
        rightButton={false}
      />
    </div>
  ),
};

export const WithThumbnails: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px", padding: "16px" }}>
      <p style={{ margin: "0 0 4px", fontSize: "12px", color: "#888" }}>썸네일 있음</p>
      <CellBrandItem
        thumbnailSrc="https://placehold.co/48x48/e53935/ffffff?text=T"
        mainText="T멤버십"
        subText="통신사 멤버십 혜택"
        showSubText={true}
        rightButton={true}
        rightButtonLabel="사용"
      />
      <p style={{ margin: "8px 0 4px", fontSize: "12px", color: "#888" }}>썸네일 없음 (플레이스홀더)</p>
      <CellBrandItem
        mainText="이미지 없는 브랜드"
        subText="플레이스홀더 표시"
        showSubText={true}
        rightButton={true}
        rightButtonLabel="사용"
      />
      <p style={{ margin: "8px 0 4px", fontSize: "12px", color: "#888" }}>썸네일 + subTitle 조합</p>
      <CellBrandItem
        thumbnailSrc="https://placehold.co/48x48/1976d2/ffffff?text=B"
        mainText="베네핏 브랜드"
        subTitle="파트너 혜택"
        showSubTitle={true}
        subText="할인 쿠폰 제공"
        showSubText={true}
        rightButton={true}
        rightButtonLabel="받기"
      />
    </div>
  ),
};
