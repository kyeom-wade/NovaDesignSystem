import type { Meta, StoryObj } from "@storybook/react-vite";
import { ToogleItem } from "@cx/components";

const meta: Meta<typeof ToogleItem> = {
  title: "cx/ToogleItem",
  component: ToogleItem as never,
  argTypes: {
    variant: { control: "select", options: ["None", "Text"] },
    selection: { control: "boolean" },
    label: { control: "text" },
    onClick: { control: false },
    ariaLabel: { control: "text" },
  },
  args: {
    variant: "Text",
    selection: false,
    label: "9,999",
    ariaLabel: "좋아요",
  },
};
export default meta;
type Story = StoryObj<typeof ToogleItem>;

export const Default: Story = {};

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "32px", alignItems: "center", padding: "24px", flexWrap: "wrap" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
        <p style={{ margin: 0, fontSize: "12px", color: "#888" }}>Text (기본)</p>
        <ToogleItem {...args} variant="Text" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
        <p style={{ margin: 0, fontSize: "12px", color: "#888" }}>None (아이콘만)</p>
        <ToogleItem {...args} variant="None" />
      </div>
    </div>
  ),
};

export const States: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "32px", alignItems: "center", padding: "24px", flexWrap: "wrap" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
        <p style={{ margin: 0, fontSize: "12px", color: "#888" }}>미선택</p>
        <ToogleItem {...args} selection={false} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
        <p style={{ margin: 0, fontSize: "12px", color: "#888" }}>선택됨</p>
        <ToogleItem {...args} selection={true} />
      </div>
    </div>
  ),
};

export const VariantAndStates: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "32px", alignItems: "flex-start", padding: "24px", flexWrap: "wrap" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
        <p style={{ margin: 0, fontSize: "12px", color: "#888" }}>Text / 미선택</p>
        <ToogleItem {...args} variant="Text" selection={false} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
        <p style={{ margin: 0, fontSize: "12px", color: "#888" }}>Text / 선택됨</p>
        <ToogleItem {...args} variant="Text" selection={true} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
        <p style={{ margin: 0, fontSize: "12px", color: "#888" }}>None / 미선택</p>
        <ToogleItem {...args} variant="None" selection={false} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
        <p style={{ margin: 0, fontSize: "12px", color: "#888" }}>None / 선택됨</p>
        <ToogleItem {...args} variant="None" selection={true} />
      </div>
    </div>
  ),
};

export const CustomLabel: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "24px", alignItems: "center", padding: "24px", flexWrap: "wrap" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
        <p style={{ margin: 0, fontSize: "12px", color: "#888" }}>0</p>
        <ToogleItem {...args} variant="Text" label="0" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
        <p style={{ margin: 0, fontSize: "12px", color: "#888" }}>99</p>
        <ToogleItem {...args} variant="Text" label="99" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
        <p style={{ margin: 0, fontSize: "12px", color: "#888" }}>9,999</p>
        <ToogleItem {...args} variant="Text" label="9,999" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
        <p style={{ margin: 0, fontSize: "12px", color: "#888" }}>99,999</p>
        <ToogleItem {...args} variant="Text" label="99,999" />
      </div>
    </div>
  ),
};
