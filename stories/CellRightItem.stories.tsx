import type { Meta, StoryObj } from "@storybook/react-vite";
import { CellRightItem } from "@cx/components";

const meta: Meta<typeof CellRightItem> = {
  title: "cx/CellRightItem",
  component: CellRightItem as never,
  argTypes: {
    variants: {
      control: "select",
      options: ["Icon", "TextInfo", "TextButton", "TextIcon", "ButtonSmall", "LevelBadge", "ButtonIcon"],
    },
    text: { control: "text" },
    buttonLabel: { control: "text" },
    onTextButtonClick: { control: false },
    onButtonIconClick: { control: false },
    className: { control: false },
  },
  args: {
    variants: "Icon",
    text: "텍스트",
    buttonLabel: "버튼",
  },
};
export default meta;
type Story = StoryObj<typeof CellRightItem>;

export const Default: Story = {};

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "24px" }}>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#888" }}>Icon</p>
        <CellRightItem {...args} variants="Icon" />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#888" }}>TextInfo</p>
        <CellRightItem {...args} variants="TextInfo" text="상세 정보" />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#888" }}>TextButton</p>
        <CellRightItem {...args} variants="TextButton" text="더보기" />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#888" }}>TextIcon</p>
        <CellRightItem {...args} variants="TextIcon" text="설명 보기" />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#888" }}>ButtonSmall</p>
        <CellRightItem {...args} variants="ButtonSmall" buttonLabel="선택" />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#888" }}>LevelBadge</p>
        <CellRightItem {...args} variants="LevelBadge" />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#888" }}>ButtonIcon</p>
        <CellRightItem {...args} variants="ButtonIcon" />
      </div>
    </div>
  ),
};

export const TextVariants: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", padding: "24px", alignItems: "center" }}>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#888" }}>TextInfo — 가격</p>
        <CellRightItem {...args} variants="TextInfo" text="29,900원" />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#888" }}>TextInfo — 상품명</p>
        <CellRightItem {...args} variants="TextInfo" text="갤럭시 S25" />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#888" }}>TextButton — 더보기</p>
        <CellRightItem {...args} variants="TextButton" text="더보기" />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#888" }}>TextButton — 변경</p>
        <CellRightItem {...args} variants="TextButton" text="변경" />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#888" }}>TextIcon — 라벨</p>
        <CellRightItem {...args} variants="TextIcon" text="라벨" />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#888" }}>TextIcon — 설정</p>
        <CellRightItem {...args} variants="TextIcon" text="설정" />
      </div>
    </div>
  ),
};

export const ButtonVariants: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", padding: "24px", alignItems: "center" }}>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#888" }}>ButtonSmall — 선택</p>
        <CellRightItem {...args} variants="ButtonSmall" buttonLabel="선택" />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#888" }}>ButtonSmall — 변경</p>
        <CellRightItem {...args} variants="ButtonSmall" buttonLabel="변경" />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#888" }}>ButtonSmall — 추가</p>
        <CellRightItem {...args} variants="ButtonSmall" buttonLabel="추가" />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#888" }}>ButtonIcon — 닫기</p>
        <CellRightItem {...args} variants="ButtonIcon" />
      </div>
    </div>
  ),
};
