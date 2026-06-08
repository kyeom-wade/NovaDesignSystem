import type { Meta, StoryObj } from "@storybook/react-vite";
import { LayoutHomePageStack } from "@cx/components";

const meta: Meta<typeof LayoutHomePageStack> = {
  title: "cx/LayoutHomePageStack",
  component: LayoutHomePageStack as never,
  argTypes: {
    variants: { control: "select", options: ["Task", "My", "Contents", "ContentWithBanner"] },
    taskTitle: { control: "text" },
    ctaLabel: { control: "text" },
    myTitle: { control: "text" },
    showBadge: { control: "boolean" },
    badgeText: { control: "text" },
    mySubtitle: { control: "text" },
    contentTitle: { control: "text" },
    contentSubText: { control: "text" },
    listSlot: { control: false },
    carouselSlot: { control: false },
    onCta: { control: false },
  },
  args: {
    variants: "Task",
    taskTitle: "지금 바로 개통하고 특별 혜택 받으세요. 타이틀 최대 2줄 노출됩니다.",
    ctaLabel: "1분 셀프 개통하기",
    myTitle: "나의 요금제",
    showBadge: true,
    badgeText: "NEW",
    mySubtitle: "5G 프리미엄 무제한",
    contentTitle: "추천 콘텐츠를 확인해보세요. 타이틀 최대 2줄 노출됩니다.",
    contentSubText: "전체보기",
  },
};
export default meta;
type Story = StoryObj<typeof LayoutHomePageStack>;

export const Default: Story = {};

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, padding: 24 }}>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>Task</p>
        <LayoutHomePageStack
          {...args}
          variants="Task"
          taskTitle="지금 바로 개통하고 특별 혜택 받으세요."
          ctaLabel="1분 셀프 개통하기"
        />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>My</p>
        <LayoutHomePageStack
          {...args}
          variants="My"
          myTitle="나의 요금제"
          showBadge={true}
          badgeText="NEW"
          mySubtitle="5G 프리미엄 무제한"
        />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>Contents</p>
        <LayoutHomePageStack
          {...args}
          variants="Contents"
          contentTitle="추천 콘텐츠를 확인해보세요."
          contentSubText="전체보기"
          listSlot={
            <div style={{ padding: "12px 0", color: "#555", fontSize: 14 }}>
              리스트 슬롯 영역
            </div>
          }
          carouselSlot={
            <div style={{ padding: "12px 0", color: "#555", fontSize: 14 }}>
              캐러셀 슬롯 영역
            </div>
          }
        />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>ContentWithBanner</p>
        <LayoutHomePageStack
          {...args}
          variants="ContentWithBanner"
          contentTitle="이달의 특별 혜택을 만나보세요."
          contentSubText="더보기"
          listSlot={
            <div style={{ padding: "12px 0", color: "#555", fontSize: 14 }}>
              리스트 슬롯 영역
            </div>
          }
          carouselSlot={
            <div style={{ padding: "12px 0", color: "#555", fontSize: 14 }}>
              캐러셀 슬롯 영역
            </div>
          }
        />
      </div>
    </div>
  ),
};

export const TaskVariant: Story = {
  args: {
    variants: "Task",
    taskTitle: "5G 요금제로 바꾸고 혜택을 받아보세요.",
    ctaLabel: "지금 신청하기",
  },
};

export const MyVariant: Story = {
  args: {
    variants: "My",
    myTitle: "나의 데이터 잔여량",
    showBadge: true,
    badgeText: "D-3",
    mySubtitle: "이번 달 10GB 남았습니다",
  },
};

export const MyVariantNoBadge: Story = {
  args: {
    variants: "My",
    myTitle: "나의 요금제",
    showBadge: false,
    mySubtitle: "5G 슬림 요금제",
  },
};

export const ContentsVariant: Story = {
  args: {
    variants: "Contents",
    contentTitle: "오늘의 추천 상품을 확인해보세요.",
    contentSubText: "전체보기",
    listSlot: (
      <div style={{ padding: "12px 0", color: "#555", fontSize: 14 }}>
        리스트 슬롯 영역
      </div>
    ),
    carouselSlot: (
      <div style={{ padding: "12px 0", color: "#555", fontSize: 14 }}>
        캐러셀 슬롯 영역
      </div>
    ),
  },
};

export const ContentWithBannerVariant: Story = {
  args: {
    variants: "ContentWithBanner",
    contentTitle: "이달의 특별 혜택을 만나보세요.",
    contentSubText: "더보기",
    listSlot: (
      <div style={{ padding: "12px 0", color: "#555", fontSize: 14 }}>
        리스트 슬롯 영역
      </div>
    ),
    carouselSlot: (
      <div style={{ padding: "12px 0", color: "#555", fontSize: 14 }}>
        캐러셀 슬롯 영역
      </div>
    ),
  },
};
