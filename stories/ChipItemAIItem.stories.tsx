import type { Meta, StoryObj } from "@storybook/react-vite";
import { ChipItemAIItem } from "@cx/components";

const meta: Meta<typeof ChipItemAIItem> = {
  title: "cx/ChipItemAIItem",
  component: ChipItemAIItem as never,
  argTypes: {
    text: { control: "text" },
    onClick: { control: false },
    className: { control: false },
  },
  args: {
    text: "AI 추천",
  },
};
export default meta;
type Story = StoryObj<typeof ChipItemAIItem>;

export const Default: Story = {};

export const Labels: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap", padding: 16, alignItems: "center" }}>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#666" }}>다양한 라벨</p>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <ChipItemAIItem text="AI 추천" />
          <ChipItemAIItem text="AI 요약" />
          <ChipItemAIItem text="AI 검색" />
          <ChipItemAIItem text="AI 분석" />
          <ChipItemAIItem text="AI 번역" />
        </div>
      </div>
    </div>
  ),
};

export const Interactive: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap", padding: 16, alignItems: "center" }}>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#666" }}>클릭 이벤트</p>
        <div style={{ display: "flex", gap: 8 }}>
          <ChipItemAIItem text="AI 추천" onClick={() => alert("AI 추천 클릭됨")} />
          <ChipItemAIItem text="AI 요약" onClick={() => alert("AI 요약 클릭됨")} />
        </div>
      </div>
    </div>
  ),
};
