import type { Meta, StoryObj } from "@storybook/react-vite";
import { BottomGroupAiAreaItem } from "@cx/components";

const meta: Meta<typeof BottomGroupAiAreaItem> = {
  title: "cx/BottomGroupAiAreaItem",
  component: BottomGroupAiAreaItem as never,
  argTypes: {
    variant: { control: "select", options: ["1 Botton", "2 Botton"] },
    primaryLabel: { control: "text" },
    secondaryLabel: { control: "text" },
    onPrimary: { control: false },
    onSecondary: { control: false },
    iconAlt: { control: "text" },
    className: { control: false },
  },
  args: {
    variant: "1 Botton",
    primaryLabel: "구독하기",
    secondaryLabel: "선물하기",
    iconAlt: "AI 홈 아이콘",
  },
};
export default meta;
type Story = StoryObj<typeof BottomGroupAiAreaItem>;

export const Default: Story = {};

export const SingleButton: Story = {
  args: {
    variant: "1 Botton",
    primaryLabel: "구독하기",
  },
};

export const TwoButtons: Story = {
  args: {
    variant: "2 Botton",
    primaryLabel: "구독하기",
    secondaryLabel: "선물하기",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px", padding: "16px" }}>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#888" }}>1 Botton (단일 버튼)</p>
        <BottomGroupAiAreaItem
          variant="1 Botton"
          primaryLabel="구독하기"
          iconAlt="AI 홈 아이콘"
        />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#888" }}>2 Botton (두 버튼 분할)</p>
        <BottomGroupAiAreaItem
          variant="2 Botton"
          primaryLabel="구독하기"
          secondaryLabel="선물하기"
          iconAlt="AI 홈 아이콘"
        />
      </div>
    </div>
  ),
};

export const CustomLabels: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px", padding: "16px" }}>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#888" }}>주문하기</p>
        <BottomGroupAiAreaItem
          variant="1 Botton"
          primaryLabel="주문하기"
          iconAlt="AI 홈 아이콘"
        />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#888" }}>장바구니 | 바로구매</p>
        <BottomGroupAiAreaItem
          variant="2 Botton"
          primaryLabel="바로구매"
          secondaryLabel="장바구니"
          iconAlt="AI 홈 아이콘"
        />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#888" }}>찜하기 | 구매하기</p>
        <BottomGroupAiAreaItem
          variant="2 Botton"
          primaryLabel="구매하기"
          secondaryLabel="찜하기"
          iconAlt="AI 홈 아이콘"
        />
      </div>
    </div>
  ),
};
