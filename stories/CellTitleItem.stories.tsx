import type { Meta, StoryObj } from "@storybook/react-vite";
import { CellTitleItem } from "@cx/components";

const meta: Meta<typeof CellTitleItem> = {
  title: "cx/CellTitleItem",
  component: CellTitleItem as never,
  argTypes: {
    title: { control: "text" },
    rightItem: {
      control: "select",
      options: ["None", "Icon", "ButtonIcon", "TextButton", "TextInfo", "TextIcon", "ButtonSmall"],
    },
    rightText: { control: "text" },
    buttonLabel: { control: "text" },
    onButton: { control: false },
    onTextButton: { control: false },
    onButtonIcon: { control: false },
    className: { control: false },
  },
  args: {
    title: "리스트 타이틀",
    rightItem: "None",
    rightText: "텍스트",
    buttonLabel: "버튼",
  },
};
export default meta;
type Story = StoryObj<typeof CellTitleItem>;

export const Default: Story = {};

export const AllRightItems: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px", padding: "16px", maxWidth: "360px" }}>
      {(["None", "Icon", "ButtonIcon", "TextButton", "TextInfo", "TextIcon", "ButtonSmall"] as const).map((rightItem) => (
        <div key={rightItem}>
          <p style={{ fontSize: "11px", color: "#888", margin: "0 0 2px 0" }}>{rightItem}</p>
          <CellTitleItem {...args} rightItem={rightItem} />
        </div>
      ))}
    </div>
  ),
};

export const WithIcon: Story = {
  args: {
    title: "아이콘 항목",
    rightItem: "Icon",
  },
};

export const WithButtonIcon: Story = {
  args: {
    title: "닫기 버튼 항목",
    rightItem: "ButtonIcon",
  },
};

export const WithTextInfo: Story = {
  args: {
    title: "정보 텍스트 항목",
    rightItem: "TextInfo",
    rightText: "상세 정보",
  },
};

export const WithTextButton: Story = {
  args: {
    title: "텍스트 버튼 항목",
    rightItem: "TextButton",
    rightText: "더보기",
  },
};

export const WithTextIcon: Story = {
  args: {
    title: "텍스트 아이콘 항목",
    rightItem: "TextIcon",
    rightText: "이동",
  },
};

export const WithButtonSmall: Story = {
  args: {
    title: "소형 버튼 항목",
    rightItem: "ButtonSmall",
    buttonLabel: "변경",
  },
};

export const LongTitle: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px", padding: "16px", maxWidth: "360px" }}>
      <div>
        <p style={{ fontSize: "11px", color: "#888", margin: "0 0 2px 0" }}>긴 제목 — rightItem: None</p>
        <CellTitleItem {...args} title="매우 긴 리스트 타이틀 텍스트가 어떻게 처리되는지 확인합니다" rightItem="None" />
      </div>
      <div>
        <p style={{ fontSize: "11px", color: "#888", margin: "0 0 2px 0" }}>긴 제목 — rightItem: TextIcon</p>
        <CellTitleItem {...args} title="매우 긴 리스트 타이틀 텍스트가 어떻게 처리되는지 확인합니다" rightItem="TextIcon" rightText="이동" />
      </div>
      <div>
        <p style={{ fontSize: "11px", color: "#888", margin: "0 0 2px 0" }}>긴 제목 — rightItem: ButtonSmall</p>
        <CellTitleItem {...args} title="매우 긴 리스트 타이틀 텍스트가 어떻게 처리되는지 확인합니다" rightItem="ButtonSmall" buttonLabel="변경" />
      </div>
    </div>
  ),
};
