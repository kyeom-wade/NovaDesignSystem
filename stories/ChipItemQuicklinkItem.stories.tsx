import type { Meta, StoryObj } from "@storybook/react-vite";
import { ChipItemQuicklinkItem } from "@cx/components";

const meta: Meta<typeof ChipItemQuicklinkItem> = {
  title: "cx/ChipItemQuicklinkItem",
  component: ChipItemQuicklinkItem as never,
  argTypes: {
    text: { control: "text" },
    iconSrc: { control: "text" },
    iconAlt: { control: "text" },
    onClick: { control: false },
    className: { control: false },
  },
  args: {
    text: "텍스트",
    iconAlt: "아이콘",
  },
};
export default meta;
type Story = StoryObj<typeof ChipItemQuicklinkItem>;

export const Default: Story = {};

export const WithIcon: Story = {
  args: {
    text: "홈",
    iconSrc: "https://placehold.co/20x20/4F46E5/ffffff?text=H",
    iconAlt: "홈 아이콘",
  },
};

export const NoIcon: Story = {
  args: {
    text: "라벨",
    iconSrc: undefined,
  },
};

export const AllItems: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px", padding: "16px" }}>
      <div>
        <p style={{ fontSize: "12px", color: "#888", marginBottom: "8px" }}>아이콘 없음</p>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          <ChipItemQuicklinkItem text="홈" />
          <ChipItemQuicklinkItem text="검색" />
          <ChipItemQuicklinkItem text="마이페이지" />
          <ChipItemQuicklinkItem text="설정" />
        </div>
      </div>
      <div>
        <p style={{ fontSize: "12px", color: "#888", marginBottom: "8px" }}>아이콘 있음</p>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          <ChipItemQuicklinkItem
            text="홈"
            iconSrc="https://placehold.co/20x20/4F46E5/ffffff?text=H"
            iconAlt="홈"
          />
          <ChipItemQuicklinkItem
            text="검색"
            iconSrc="https://placehold.co/20x20/10B981/ffffff?text=S"
            iconAlt="검색"
          />
          <ChipItemQuicklinkItem
            text="마이페이지"
            iconSrc="https://placehold.co/20x20/F59E0B/ffffff?text=M"
            iconAlt="마이페이지"
          />
          <ChipItemQuicklinkItem
            text="설정"
            iconSrc="https://placehold.co/20x20/EF4444/ffffff?text=C"
            iconAlt="설정"
          />
        </div>
      </div>
    </div>
  ),
};

export const QuicklinkBar: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", padding: "16px", flexWrap: "wrap", alignItems: "center", background: "#f8f8f8", borderRadius: "12px" }}>
      <ChipItemQuicklinkItem
        text="요금제"
        iconSrc="https://placehold.co/20x20/4F46E5/ffffff?text=요"
        iconAlt="요금제"
      />
      <ChipItemQuicklinkItem
        text="데이터"
        iconSrc="https://placehold.co/20x20/06B6D4/ffffff?text=데"
        iconAlt="데이터"
      />
      <ChipItemQuicklinkItem
        text="혜택"
        iconSrc="https://placehold.co/20x20/F59E0B/ffffff?text=혜"
        iconAlt="혜택"
      />
      <ChipItemQuicklinkItem
        text="고객센터"
        iconSrc="https://placehold.co/20x20/10B981/ffffff?text=고"
        iconAlt="고객센터"
      />
      <ChipItemQuicklinkItem
        text="매장찾기"
        iconSrc="https://placehold.co/20x20/EF4444/ffffff?text=매"
        iconAlt="매장찾기"
      />
    </div>
  ),
};
