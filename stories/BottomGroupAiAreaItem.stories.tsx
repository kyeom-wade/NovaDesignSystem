import type { Meta, StoryObj } from "@storybook/react-vite";
import { BottomGroupAiAreaItem } from "@cx/components";

const meta: Meta<typeof BottomGroupAiAreaItem> = {
  title: "cx/BottomGroupAiAreaItem",
  component: BottomGroupAiAreaItem as never,
  argTypes: {
    variants: { control: "select", options: ["1 Botton", "2 Botton"] },
    variant: { control: false },
    primaryLabel: { control: "text" },
    secondaryLabel: { control: "text" },
    onPrimary: { control: false },
    onSecondary: { control: false },
    iconAlt: { control: "text" },
    className: { control: false },
  },
  args: {
    variants: "1 Botton",
    primaryLabel: "Label",
    secondaryLabel: "Label",
    iconAlt: "AI 홈 아이콘",
  },
};
export default meta;
type Story = StoryObj<typeof BottomGroupAiAreaItem>;

export const Default: Story = {};

export const SingleButton: Story = {
  args: {
    variants: "1 Botton",
    primaryLabel: "Label",
  },
};

export const TwoButtons: Story = {
  args: {
    variants: "2 Botton",
    primaryLabel: "Label",
    secondaryLabel: "Label",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px", padding: "16px", width: "393px" }}>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#888" }}>1 Botton (단일 버튼)</p>
        <BottomGroupAiAreaItem
          variants="1 Botton"
          primaryLabel="Label"
          iconAlt="AI 홈 아이콘"
        />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#888" }}>2 Botton (두 버튼 분할)</p>
        <BottomGroupAiAreaItem
          variants="2 Botton"
          primaryLabel="Label"
          secondaryLabel="Label"
          iconAlt="AI 홈 아이콘"
        />
      </div>
    </div>
  ),
};

export const CustomLabels: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px", padding: "16px", width: "393px" }}>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#888" }}>주문하기</p>
        <BottomGroupAiAreaItem
          variants="1 Botton"
          primaryLabel="주문하기"
          iconAlt="AI 홈 아이콘"
        />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#888" }}>장바구니 | 바로구매</p>
        <BottomGroupAiAreaItem
          variants="2 Botton"
          primaryLabel="바로구매"
          secondaryLabel="장바구니"
          iconAlt="AI 홈 아이콘"
        />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#888" }}>찜하기 | 구매하기</p>
        <BottomGroupAiAreaItem
          variants="2 Botton"
          primaryLabel="구매하기"
          secondaryLabel="찜하기"
          iconAlt="AI 홈 아이콘"
        />
      </div>
    </div>
  ),
};
