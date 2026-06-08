import type { Meta, StoryObj } from "@storybook/react-vite";
import { CellTextItem } from "@cx/components";

const meta: Meta<typeof CellTextItem> = {
  title: "cx/CellTextItem",
  component: CellTextItem as never,
  argTypes: {
    label: { control: "text" },
    rightItem: {
      control: "select",
      options: ["None", "Icon", "Toggle", "TextInfo", "TextButton", "LevelBadge", "TextIcon"],
    },
    variant: {
      control: "select",
      options: ["Default", "Bullet"],
    },
    rightText: { control: "text" },
    toggleChecked: { control: "boolean" },
    onRightButton: { control: false },
    onToggleChange: { control: false },
    className: { control: false },
  },
  args: {
    label: "리스트 텍스트",
    rightItem: "None",
    variant: "Default",
    rightText: "텍스트",
    toggleChecked: false,
  },
};
export default meta;
type Story = StoryObj<typeof CellTextItem>;

export const Default: Story = {};

export const AllRightItems: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "0px", maxWidth: "360px" }}>
      <p style={{ fontSize: "12px", color: "#888", margin: "0 0 8px 0" }}>rightItem 전체</p>
      <CellTextItem {...args} rightItem="None" label="None — 오른쪽 없음" />
      <CellTextItem {...args} rightItem="Icon" label="Icon — 아이콘" />
      <CellTextItem {...args} rightItem="TextInfo" label="TextInfo — 정보 텍스트" rightText="정보" />
      <CellTextItem {...args} rightItem="TextButton" label="TextButton — 버튼" rightText="더보기" />
      <CellTextItem {...args} rightItem="TextIcon" label="TextIcon — 텍스트+아이콘" rightText="이동" />
      <CellTextItem {...args} rightItem="LevelBadge" label="LevelBadge — 레벨 뱃지" />
      <CellTextItem {...args} rightItem="Toggle" label="Toggle — 꺼짐" toggleChecked={false} />
      <CellTextItem {...args} rightItem="Toggle" label="Toggle — 켜짐" toggleChecked={true} />
    </div>
  ),
};

export const Variants: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px", maxWidth: "360px" }}>
      <div>
        <p style={{ fontSize: "12px", color: "#888", margin: "0 0 8px 0" }}>Default</p>
        <CellTextItem {...args} variant="Default" label="기본 리스트 항목" />
        <CellTextItem {...args} variant="Default" label="두 번째 항목" rightItem="Icon" />
        <CellTextItem {...args} variant="Default" label="세 번째 항목" rightItem="TextInfo" rightText="설명" />
      </div>
      <div>
        <p style={{ fontSize: "12px", color: "#888", margin: "0 0 8px 0" }}>Bullet</p>
        <CellTextItem {...args} variant="Bullet" label="불릿 리스트 항목" />
        <CellTextItem {...args} variant="Bullet" label="두 번째 불릿 항목" />
        <CellTextItem {...args} variant="Bullet" label="세 번째 불릿 항목" />
      </div>
    </div>
  ),
};

export const ToggleStates: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "0px", maxWidth: "360px" }}>
      <p style={{ fontSize: "12px", color: "#888", margin: "0 0 8px 0" }}>Toggle 상태</p>
      <CellTextItem {...args} rightItem="Toggle" label="알림 수신" toggleChecked={false} />
      <CellTextItem {...args} rightItem="Toggle" label="마케팅 동의" toggleChecked={true} />
      <CellTextItem {...args} rightItem="Toggle" label="위치 정보 활용" toggleChecked={false} />
      <CellTextItem {...args} rightItem="Toggle" label="자동 로그인" toggleChecked={true} />
    </div>
  ),
};

export const SettingsList: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "0px", maxWidth: "360px" }}>
      <p style={{ fontSize: "12px", color: "#888", margin: "0 0 8px 0" }}>설정 목록 예시</p>
      <CellTextItem {...args} label="계정 정보" rightItem="Icon" />
      <CellTextItem {...args} label="비밀번호 변경" rightItem="Icon" />
      <CellTextItem {...args} label="현재 등급" rightItem="LevelBadge" />
      <CellTextItem {...args} label="포인트" rightItem="TextInfo" rightText="12,500P" />
      <CellTextItem {...args} label="쿠폰함" rightItem="TextButton" rightText="보기" />
      <CellTextItem {...args} label="고객센터" rightItem="TextIcon" rightText="전화 연결" />
    </div>
  ),
};
