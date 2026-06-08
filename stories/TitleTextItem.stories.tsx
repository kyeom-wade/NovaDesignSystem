import type { Meta, StoryObj } from "@storybook/react-vite";
import { TitleTextItem } from "@cx/components";

const meta: Meta<typeof TitleTextItem> = {
  title: "cx/TitleTextItem",
  component: TitleTextItem as never,
  argTypes: {
    optionText: { control: "boolean" },
    optionLabel: { control: "text" },
    subText: { control: "boolean" },
    subTextContent: { control: "text" },
    textLeft: { control: "boolean" },
    textLeftValue: { control: "text" },
    textRight: { control: "boolean" },
    textRightValue: { control: "text" },
    title: { control: "text" },
  },
  args: {
    title: "섹션/콘텐츠 타이틀",
    optionText: false,
    optionLabel: "옵션 텍스트",
    subText: false,
    subTextContent: "서브 텍스트 설명입니다",
    textLeft: false,
    textLeftValue: "01",
    textRight: false,
    textRightValue: "3",
  },
};
export default meta;
type Story = StoryObj<typeof TitleTextItem>;

export const Default: Story = {};

export const WithOptionLabel: Story = {
  args: {
    optionText: true,
    optionLabel: "카테고리 라벨",
    title: "섹션 타이틀",
  },
};

export const WithSubText: Story = {
  args: {
    subText: true,
    subTextContent: "타이틀 아래에 표시되는 보조 설명 텍스트입니다",
    title: "메인 타이틀",
  },
};

export const WithLeftBadge: Story = {
  args: {
    textLeft: true,
    textLeftValue: "01",
    title: "번호가 있는 타이틀",
  },
};

export const WithRightBadge: Story = {
  args: {
    textRight: true,
    textRightValue: "5",
    title: "오른쪽 뱃지 타이틀",
  },
};

export const AllFeatures: Story = {
  args: {
    optionText: true,
    optionLabel: "상품 카테고리",
    textLeft: true,
    textLeftValue: "02",
    textRight: true,
    textRightValue: "7",
    title: "모든 요소 조합 타이틀",
    subText: true,
    subTextContent: "상품에 대한 부가 설명이 여기에 표시됩니다",
  },
};

export const Combinations: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, padding: 24 }}>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>기본 타이틀</p>
        <TitleTextItem title="기본 섹션 타이틀" />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>옵션 라벨 + 타이틀</p>
        <TitleTextItem optionText title="서비스 안내" optionLabel="공지사항" />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>타이틀 + 서브텍스트</p>
        <TitleTextItem
          title="이용 약관"
          subText
          subTextContent="서비스 이용 전 반드시 확인해 주세요"
        />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>왼쪽 번호 뱃지</p>
        <TitleTextItem textLeft textLeftValue="03" title="세 번째 항목 설명" />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>왼쪽 번호 + 오른쪽 카운트 뱃지</p>
        <TitleTextItem textLeft textLeftValue="04" textRight textRightValue="12" title="인기 상품 목록" />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>전체 요소 조합</p>
        <TitleTextItem
          optionText
          optionLabel="추천"
          textLeft
          textLeftValue="01"
          textRight
          textRightValue="9"
          title="오늘의 특가 상품"
          subText
          subTextContent="한정 수량으로 조기 마감될 수 있습니다"
        />
      </div>
    </div>
  ),
};
