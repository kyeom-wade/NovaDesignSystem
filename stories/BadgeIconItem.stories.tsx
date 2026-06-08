import type { Meta, StoryObj } from "@storybook/react-vite";
import { BadgeIconItem } from "@cx/components";

const meta: Meta<typeof BadgeIconItem> = {
  title: "cx/BadgeIconItem",
  component: BadgeIconItem as never,
  argTypes: {
    text: { control: "text" },
    subText: { control: "text" },
    showSubText: { control: "boolean" },
    iconSrc: { control: "text" },
    iconAlt: { control: "text" },
    className: { control: false },
  },
  args: {
    text: "라벨",
    subText: "서브텍스트",
    showSubText: false,
    iconAlt: "아이콘",
  },
};
export default meta;
type Story = StoryObj<typeof BadgeIconItem>;

export const Default: Story = {};

export const WithSubText: Story = {
  args: {
    showSubText: true,
    text: "상품명",
    subText: "12,000원",
  },
};

export const States: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, padding: 24 }}>
      <p style={{ margin: 0, fontSize: 12, color: "#888" }}>서브텍스트 없음 (compact)</p>
      <BadgeIconItem {...args} showSubText={false} text="기본 라벨" />
      <p style={{ margin: 0, fontSize: 12, color: "#888" }}>서브텍스트 있음 (withSubText)</p>
      <BadgeIconItem {...args} showSubText={true} text="상품명" subText="39,900원" />
      <p style={{ margin: 0, fontSize: 12, color: "#888" }}>아이콘 URL 지정</p>
      <BadgeIconItem
        {...args}
        showSubText={false}
        text="이미지 아이콘"
        iconSrc="https://via.placeholder.com/16"
        iconAlt="플레이스홀더"
      />
      <p style={{ margin: 0, fontSize: 12, color: "#888" }}>서브텍스트 + 아이콘 URL</p>
      <BadgeIconItem
        {...args}
        showSubText={true}
        text="카테고리 상품"
        subText="특가"
        iconSrc="https://via.placeholder.com/16"
        iconAlt="카테고리"
      />
    </div>
  ),
};
