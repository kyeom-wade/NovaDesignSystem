import type { Meta, StoryObj } from "@storybook/react-vite";
import { CellSelectedItem } from "@cx/components";

const meta: Meta<typeof CellSelectedItem> = {
  title: "cx/CellSelectedItem",
  component: CellSelectedItem as never,
  argTypes: {
    variant: { control: "select", options: ["radioButton", "checkbox"] },
    rightItem: { control: "select", options: ["None", "Icon", "Text"] },
    label: { control: "text" },
    rightText: { control: "text" },
    selected: { control: "boolean" },
    disabled: { control: "boolean" },
    onChange: { control: false },
    className: { control: false },
  },
  args: {
    variant: "radioButton",
    rightItem: "None",
    label: "항목 텍스트",
    rightText: "보조 텍스트",
    selected: false,
    disabled: false,
  },
};
export default meta;
type Story = StoryObj<typeof CellSelectedItem>;

export const Default: Story = {};

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, padding: 24 }}>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>radioButton</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <CellSelectedItem {...args} variant="radioButton" label="라디오 버튼 — 기본" />
          <CellSelectedItem {...args} variant="radioButton" label="라디오 버튼 — 선택됨" selected />
          <CellSelectedItem {...args} variant="radioButton" label="라디오 버튼 — 비활성" disabled />
        </div>
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>checkbox</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <CellSelectedItem {...args} variant="checkbox" label="체크박스 — 기본" />
          <CellSelectedItem {...args} variant="checkbox" label="체크박스 — 선택됨" selected />
          <CellSelectedItem {...args} variant="checkbox" label="체크박스 — 비활성" disabled />
        </div>
      </div>
    </div>
  ),
};

export const RightItems: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, padding: 24 }}>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>rightItem: None</p>
        <CellSelectedItem {...args} rightItem="None" label="우측 항목 없음" />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>rightItem: Icon (chevron)</p>
        <CellSelectedItem {...args} rightItem="Icon" label="우측 아이콘" />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>rightItem: Text</p>
        <CellSelectedItem {...args} rightItem="Text" label="우측 텍스트" rightText="부가 정보" />
      </div>
    </div>
  ),
};

export const States: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, padding: 24 }}>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>기본 (미선택)</p>
        <CellSelectedItem {...args} selected={false} disabled={false} label="기본 상태" />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>선택됨</p>
        <CellSelectedItem {...args} selected disabled={false} label="선택된 상태" />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>비활성 (미선택)</p>
        <CellSelectedItem {...args} selected={false} disabled label="비활성 상태" />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>비활성 (선택됨)</p>
        <CellSelectedItem {...args} selected disabled label="비활성 + 선택됨" />
      </div>
    </div>
  ),
};

export const VariantByRightItem: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 32, padding: 24 }}>
      {(["radioButton", "checkbox"] as const).map((variant) => (
        <div key={variant}>
          <p style={{ margin: "0 0 8px", fontWeight: 600, fontSize: 13 }}>{variant}</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {(["None", "Icon", "Text"] as const).map((rightItem) => (
              <CellSelectedItem
                key={rightItem}
                {...args}
                variant={variant}
                rightItem={rightItem}
                label={`${variant} / rightItem: ${rightItem}`}
                rightText="상세 정보"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};
