import type { Meta, StoryObj } from "@storybook/react-vite";
import { RadioItem } from "@cx/components";

const meta: Meta<typeof RadioItem> = {
  title: "cx/RadioItem",
  component: RadioItem as never,
  argTypes: {
    selected: { control: "boolean" },
    disabled: { control: "boolean" },
    label: { control: "text" },
    showLabel: { control: "boolean" },
    onChange: { control: false },
    className: { control: false },
  },
  args: {
    selected: false,
    disabled: false,
    label: "항목",
    showLabel: true,
  },
};
export default meta;
type Story = StoryObj<typeof RadioItem>;

export const Default: Story = {};

export const Selected: Story = {
  args: {
    selected: true,
    label: "선택된 항목",
    showLabel: true,
  },
};

export const States: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, padding: 24 }}>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>기본 (미선택)</p>
        <RadioItem {...args} selected={false} label="미선택 항목" showLabel />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>선택됨</p>
        <RadioItem {...args} selected label="선택된 항목" showLabel />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>비활성화 (미선택)</p>
        <RadioItem {...args} selected={false} disabled label="비활성화 항목" showLabel />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>비활성화 (선택됨)</p>
        <RadioItem {...args} selected disabled label="비활성화 선택 항목" showLabel />
      </div>
    </div>
  ),
};

export const WithoutLabel: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 16, padding: 24, alignItems: "center" }}>
      <RadioItem {...args} selected={false} showLabel={false} />
      <RadioItem {...args} selected showLabel={false} />
      <RadioItem {...args} selected={false} disabled showLabel={false} />
      <RadioItem {...args} selected disabled showLabel={false} />
    </div>
  ),
};

export const LabelVariants: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, padding: 24 }}>
      <RadioItem {...args} label="일반 텍스트 항목" showLabel />
      <RadioItem {...args} label="상품명 라벨" showLabel selected />
      <RadioItem {...args} label="설명이 포함된 긴 라벨 텍스트 항목" showLabel />
      <RadioItem {...args} label="가격 옵션 선택" showLabel disabled />
    </div>
  ),
};
