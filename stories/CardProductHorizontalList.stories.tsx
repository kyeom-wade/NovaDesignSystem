import type { Meta, StoryObj } from "@storybook/react-vite";
import { CardProductHorizontalList } from "@cx/components";

const meta: Meta<typeof CardProductHorizontalList> = {
  title: "cx/CardProductHorizontalList",
  component: CardProductHorizontalList as never,
  argTypes: {
    category: { control: "text" },
    name: { control: "text" },
    benefit: { control: "text" },
    thumbnailSrc: { control: "text" },
    showThumbnail: { control: "boolean" },
    tagBadges: { control: false },
    showTagBadges: { control: "boolean" },
    iconBadges: { control: false },
    showIconBadges: { control: "boolean" },
    className: { control: false },
  },
  args: {
    category: "카페/아이스크림",
    name: "베스킨라빈스",
    benefit: "할인 ∙ 적립 ∙ 사용",
    showThumbnail: true,
    showTagBadges: true,
    showIconBadges: true,
    tagBadges: [
      { label: "스마트폰" },
      { label: "일반" },
      { label: "안심/보험" },
      { label: "유료" },
    ],
    iconBadges: [
      { text: "혜택1" },
      { text: "혜택2" },
      { text: "혜택3" },
      { text: "혜택4" },
    ],
  },
};
export default meta;
type Story = StoryObj<typeof CardProductHorizontalList>;

export const Default: Story = {};

export const NoThumbnail: Story = {
  args: {
    showThumbnail: false,
  },
};

export const WithThumbnail: Story = {
  args: {
    thumbnailSrc: "https://placehold.co/80x80/FF6B6B/FFFFFF?text=이미지",
    showThumbnail: true,
  },
};

export const TagBadgesOnly: Story = {
  args: {
    showTagBadges: true,
    showIconBadges: false,
  },
};

export const IconBadgesOnly: Story = {
  args: {
    showTagBadges: false,
    showIconBadges: true,
  },
};

export const NoBadges: Story = {
  args: {
    showTagBadges: false,
    showIconBadges: false,
  },
};

export const States: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "16px" }}>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#666" }}>기본 (썸네일 + 뱃지 전체)</p>
        <CardProductHorizontalList
          category="카페/아이스크림"
          name="베스킨라빈스"
          benefit="할인 ∙ 적립 ∙ 사용"
          showThumbnail
          showTagBadges
          showIconBadges
          tagBadges={[{ label: "스마트폰" }, { label: "일반" }, { label: "유료" }]}
          iconBadges={[{ text: "혜택1" }, { text: "혜택2" }, { text: "혜택3" }]}
        />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#666" }}>썸네일 없음</p>
        <CardProductHorizontalList
          category="편의점"
          name="GS25"
          benefit="할인 ∙ 사용"
          showThumbnail={false}
          showTagBadges
          showIconBadges
          tagBadges={[{ label: "일반" }, { label: "안심/보험" }]}
          iconBadges={[{ text: "혜택1" }, { text: "혜택2" }]}
        />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#666" }}>태그 뱃지만</p>
        <CardProductHorizontalList
          category="패스트푸드"
          name="맥도날드"
          benefit="할인 ∙ 적립"
          showThumbnail
          showTagBadges
          showIconBadges={false}
          tagBadges={[{ label: "스마트폰" }, { label: "유료" }, { label: "일반" }]}
        />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#666" }}>아이콘 뱃지만</p>
        <CardProductHorizontalList
          category="커피"
          name="스타벅스"
          benefit="적립 ∙ 사용"
          showThumbnail
          showTagBadges={false}
          showIconBadges
          iconBadges={[{ text: "아메리카노" }, { text: "라떼" }, { text: "프라푸치노" }]}
        />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#666" }}>뱃지 없음</p>
        <CardProductHorizontalList
          category="주유소"
          name="SK에너지"
          benefit="할인"
          showThumbnail
          showTagBadges={false}
          showIconBadges={false}
        />
      </div>
    </div>
  ),
};

export const WithIconBadgeImages: Story = {
  args: {
    category: "쇼핑",
    name: "11번가",
    benefit: "할인 ∙ 적립 ∙ 사용",
    showThumbnail: true,
    thumbnailSrc: "https://placehold.co/80x80/4ECDC4/FFFFFF?text=쇼핑",
    showTagBadges: true,
    showIconBadges: true,
    tagBadges: [{ label: "스마트폰" }, { label: "일반" }],
    iconBadges: [
      { iconSrc: "https://placehold.co/16x16/FF6B6B/FFFFFF?text=A", text: "혜택A" },
      { iconSrc: "https://placehold.co/16x16/4ECDC4/FFFFFF?text=B", text: "혜택B" },
      { iconSrc: "https://placehold.co/16x16/45B7D1/FFFFFF?text=C", text: "혜택C" },
    ],
  },
};

export const MultipleProducts: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "0px", padding: "16px" }}>
      <CardProductHorizontalList
        category="카페/아이스크림"
        name="베스킨라빈스"
        benefit="할인 ∙ 적립 ∙ 사용"
        showThumbnail
        showTagBadges
        showIconBadges
        tagBadges={[{ label: "스마트폰" }, { label: "일반" }]}
        iconBadges={[{ text: "혜택1" }, { text: "혜택2" }]}
      />
      <CardProductHorizontalList
        category="편의점"
        name="CU편의점"
        benefit="할인 ∙ 사용"
        showThumbnail
        showTagBadges
        showIconBadges
        tagBadges={[{ label: "일반" }, { label: "안심/보험" }]}
        iconBadges={[{ text: "음료" }, { text: "과자" }]}
      />
      <CardProductHorizontalList
        category="패스트푸드"
        name="버거킹"
        benefit="적립"
        showThumbnail
        showTagBadges
        showIconBadges
        tagBadges={[{ label: "유료" }, { label: "스마트폰" }]}
        iconBadges={[{ text: "버거" }, { text: "사이드" }, { text: "음료" }]}
      />
    </div>
  ),
};
