import type { Meta, StoryObj } from "@storybook/react-vite";
import { IndicatorDotItem } from "@cx/components";

const meta: Meta<typeof IndicatorDotItem> = {
  title: "cx/IndicatorDotItem",
  component: IndicatorDotItem as never,
  argTypes: {
    selected: { control: "boolean" },
    disabled: { control: "boolean" },
    label: { control: "text" },
    onClick: { control: false },
    className: { control: "text" },
  },
  args: {
    selected: false,
    disabled: false,
    label: "페이지 1",
  },
};
export default meta;
type Story = StoryObj<typeof IndicatorDotItem>;

export const Default: Story = {};

export const Selected: Story = {
  args: {
    selected: true,
    label: "페이지 1 (선택됨)",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: "페이지 1 (비활성)",
  },
};

export const States: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px", padding: "24px" }}>
      <div>
        <p style={{ marginBottom: "8px", fontSize: "12px", color: "#888" }}>기본 (Unselected)</p>
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <IndicatorDotItem label="페이지 1" />
          <IndicatorDotItem label="페이지 2" />
          <IndicatorDotItem label="페이지 3" />
        </div>
      </div>
      <div>
        <p style={{ marginBottom: "8px", fontSize: "12px", color: "#888" }}>선택됨 (Selected)</p>
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <IndicatorDotItem selected label="페이지 1" />
          <IndicatorDotItem label="페이지 2" />
          <IndicatorDotItem label="페이지 3" />
        </div>
      </div>
      <div>
        <p style={{ marginBottom: "8px", fontSize: "12px", color: "#888" }}>비활성 (Disabled)</p>
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <IndicatorDotItem disabled label="페이지 1" />
          <IndicatorDotItem disabled label="페이지 2" />
          <IndicatorDotItem disabled label="페이지 3" />
        </div>
      </div>
      <div>
        <p style={{ marginBottom: "8px", fontSize: "12px", color: "#888" }}>선택됨 + 비활성 (Selected + Disabled)</p>
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <IndicatorDotItem selected disabled label="페이지 1" />
          <IndicatorDotItem disabled label="페이지 2" />
          <IndicatorDotItem disabled label="페이지 3" />
        </div>
      </div>
    </div>
  ),
};

export const IndicatorGroup: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px", padding: "24px" }}>
      <div>
        <p style={{ marginBottom: "8px", fontSize: "12px", color: "#888" }}>슬라이더 인디케이터 (3개)</p>
        <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
          <IndicatorDotItem selected label="페이지 1" />
          <IndicatorDotItem label="페이지 2" />
          <IndicatorDotItem label="페이지 3" />
        </div>
      </div>
      <div>
        <p style={{ marginBottom: "8px", fontSize: "12px", color: "#888" }}>슬라이더 인디케이터 (5개)</p>
        <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
          <IndicatorDotItem label="페이지 1" />
          <IndicatorDotItem label="페이지 2" />
          <IndicatorDotItem selected label="페이지 3" />
          <IndicatorDotItem label="페이지 4" />
          <IndicatorDotItem label="페이지 5" />
        </div>
      </div>
      <div>
        <p style={{ marginBottom: "8px", fontSize: "12px", color: "#888" }}>슬라이더 인디케이터 (마지막 선택)</p>
        <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
          <IndicatorDotItem label="페이지 1" />
          <IndicatorDotItem label="페이지 2" />
          <IndicatorDotItem label="페이지 3" />
          <IndicatorDotItem label="페이지 4" />
          <IndicatorDotItem selected label="페이지 5" />
        </div>
      </div>
    </div>
  ),
};
