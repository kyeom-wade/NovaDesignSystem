import type { Meta, StoryObj } from "@storybook/react-vite";
import { BottomGroup } from "@cx/components";

const meta: Meta<typeof BottomGroup> = {
  title: "cx/BottomGroup",
  component: BottomGroup as never,
  argTypes: {
    variant: { control: "select", options: ["Default", "Ai"] },
    showAiLabel: { control: "boolean" },
    aiLabelText: { control: "text" },
    showSecondaryButton: { control: "boolean" },
    secondaryLabel: { control: "text" },
    primaryLabel: { control: "text" },
    showUpperItem: { control: "boolean" },
    upperItemText: { control: "text" },
    onPrimary: { control: false },
    onSecondary: { control: false },
    className: { control: false },
  },
  args: {
    variant: "Ai",
    showAiLabel: true,
    aiLabelText: "AI가 추천하는 구독 서비스",
    showSecondaryButton: true,
    secondaryLabel: "선물하기",
    primaryLabel: "구독하기",
    showUpperItem: true,
    upperItemText: "리스트 텍스트",
  },
};
export default meta;
type Story = StoryObj<typeof BottomGroup>;

export const Default: Story = {};

export const AiSingleButton: Story = {
  args: {
    variant: "Ai",
    showAiLabel: true,
    aiLabelText: "AI 추천 요금제",
    showSecondaryButton: false,
    primaryLabel: "구독하기",
  },
};

export const AiNoLabel: Story = {
  args: {
    variant: "Ai",
    showAiLabel: false,
    showSecondaryButton: true,
    secondaryLabel: "선물하기",
    primaryLabel: "구독하기",
  },
};

export const DefaultVariant: Story = {
  args: {
    variant: "Default",
    showUpperItem: true,
    upperItemText: "월 11,000원 (VAT 포함)",
    primaryLabel: "신청하기",
  },
};

export const DefaultNoUpperItem: Story = {
  args: {
    variant: "Default",
    showUpperItem: false,
    primaryLabel: "확인",
  },
};

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px", padding: "24px" }}>
      <div>
        <p style={{ marginBottom: "8px", fontSize: "12px", color: "#888" }}>Ai — 라벨 + 2버튼</p>
        <BottomGroup
          {...args}
          variant="Ai"
          showAiLabel={true}
          aiLabelText="AI가 추천하는 구독 서비스"
          showSecondaryButton={true}
          secondaryLabel="선물하기"
          primaryLabel="구독하기"
        />
      </div>
      <div>
        <p style={{ marginBottom: "8px", fontSize: "12px", color: "#888" }}>Ai — 라벨 + 1버튼</p>
        <BottomGroup
          {...args}
          variant="Ai"
          showAiLabel={true}
          aiLabelText="AI 추천 요금제"
          showSecondaryButton={false}
          primaryLabel="구독하기"
        />
      </div>
      <div>
        <p style={{ marginBottom: "8px", fontSize: "12px", color: "#888" }}>Ai — 라벨 없음</p>
        <BottomGroup
          {...args}
          variant="Ai"
          showAiLabel={false}
          showSecondaryButton={true}
          secondaryLabel="선물하기"
          primaryLabel="구독하기"
        />
      </div>
      <div>
        <p style={{ marginBottom: "8px", fontSize: "12px", color: "#888" }}>Default — 상단 텍스트 포함</p>
        <BottomGroup
          {...args}
          variant="Default"
          showUpperItem={true}
          upperItemText="월 11,000원 (VAT 포함)"
          primaryLabel="신청하기"
        />
      </div>
      <div>
        <p style={{ marginBottom: "8px", fontSize: "12px", color: "#888" }}>Default — 버튼만</p>
        <BottomGroup
          {...args}
          variant="Default"
          showUpperItem={false}
          primaryLabel="확인"
        />
      </div>
    </div>
  ),
};
