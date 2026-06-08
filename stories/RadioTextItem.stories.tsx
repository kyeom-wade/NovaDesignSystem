import type { Meta, StoryObj } from "@storybook/react-vite";
import { RadioTextItem } from "@cx/components";

const meta: Meta<typeof RadioTextItem> = {
  title: "cx/RadioTextItem",
  component: RadioTextItem as never,
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
    label: "텍스트",
  },
};
export default meta;
type Story = StoryObj<typeof RadioTextItem>;

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
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>Off / 기본</p>
        <RadioTextItem selection={false} disabled={false} label="선택 안 됨" />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>On / 선택됨</p>
        <RadioTextItem selection={true} disabled={false} label="선택됨" />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>Off / 비활성</p>
        <RadioTextItem selection={false} disabled={true} label="비활성 (미선택)" />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>On / 비활성 선택됨</p>
        <RadioTextItem selection={true} disabled={true} label="비활성 (선택됨)" />
      </div>
    </div>
  ),
};

export const RadioGroup: Story = {
  render: () => {
    const items = ["항목 A", "항목 B", "항목 C", "항목 D"];
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 8, padding: 24 }}>
        {items.map((label, i) => (
          <RadioTextItem key={label} selection={i === 0} disabled={false} label={label} />
        ))}
      </div>
    );
  },
};
