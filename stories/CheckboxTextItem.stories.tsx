import type { Meta, StoryObj } from "@storybook/react-vite";
import { CheckboxTextItem } from "@cx/components";

const meta: Meta<typeof CheckboxTextItem> = {
  title: "cx/CheckboxTextItem",
  component: CheckboxTextItem as never,
  argTypes: {
    selection: { control: "boolean" },
    disabled: { control: "boolean" },
    label: { control: "text" },
    onChange: { control: false },
    className: { control: false },
  },
  args: {
    selection: false,
    disabled: false,
    label: "텍스트 항목",
  },
};
export default meta;
type Story = StoryObj<typeof CheckboxTextItem>;

export const Default: Story = {};

export const Selected: Story = {
  args: {
    selection: true,
    label: "선택된 항목",
  },
};

export const States: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, padding: 24 }}>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>미선택 / 활성</p>
        <CheckboxTextItem selection={false} disabled={false} label="기본 텍스트 항목" />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>선택 / 활성</p>
        <CheckboxTextItem selection={true} disabled={false} label="선택된 텍스트 항목" />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>미선택 / 비활성</p>
        <CheckboxTextItem selection={false} disabled={true} label="비활성 텍스트 항목" />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>선택 / 비활성</p>
        <CheckboxTextItem selection={true} disabled={true} label="선택+비활성 텍스트 항목" />
      </div>
    </div>
  ),
};

export const LabelVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, padding: 24 }}>
      <CheckboxTextItem selection={false} label="상품명" />
      <CheckboxTextItem selection={true} label="무선 이어폰 프리미엄 에디션" />
      <CheckboxTextItem selection={false} label="배송지 주소를 선택하세요" />
      <CheckboxTextItem selection={true} label="전체 동의" />
      <CheckboxTextItem selection={false} label="(필수) 이용약관 동의" />
      <CheckboxTextItem selection={false} label="(선택) 마케팅 정보 수신 동의" />
    </div>
  ),
};
