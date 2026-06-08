import type { Meta, StoryObj } from "@storybook/react-vite";
import { ButtonIconItem } from "@cx/components";

const meta: Meta<typeof ButtonIconItem> = {
  title: "cx/ButtonIconItem",
  component: ButtonIconItem as never,
  argTypes: {
    size: { control: "select", options: ["Small", "Medium", "Large"] },
    fill: { control: "boolean" },
    state: { control: "select", options: ["Default", "Disabled"] },
    "aria-label": { control: "text" },
    onClick: { control: false },
    className: { control: false },
  },
  args: {
    size: "Large",
    fill: true,
    state: "Default",
    "aria-label": "닫기",
  },
};
export default meta;
type Story = StoryObj<typeof ButtonIconItem>;

export const Default: Story = {};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 24, alignItems: "center", padding: 24 }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
        <p style={{ margin: 0, fontSize: 12, color: "#888" }}>Small</p>
        <ButtonIconItem {...args} size="Small" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
        <p style={{ margin: 0, fontSize: 12, color: "#888" }}>Medium</p>
        <ButtonIconItem {...args} size="Medium" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
        <p style={{ margin: 0, fontSize: 12, color: "#888" }}>Large</p>
        <ButtonIconItem {...args} size="Large" />
      </div>
    </div>
  ),
};

export const FillVariants: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 24, alignItems: "center", padding: 24 }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
        <p style={{ margin: 0, fontSize: 12, color: "#888" }}>배경 있음</p>
        <ButtonIconItem {...args} fill={true} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
        <p style={{ margin: 0, fontSize: 12, color: "#888" }}>배경 없음</p>
        <ButtonIconItem {...args} fill={false} />
      </div>
    </div>
  ),
};

export const States: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 24, alignItems: "center", padding: 24 }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
        <p style={{ margin: 0, fontSize: 12, color: "#888" }}>기본</p>
        <ButtonIconItem {...args} state="Default" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
        <p style={{ margin: 0, fontSize: 12, color: "#888" }}>비활성화</p>
        <ButtonIconItem {...args} state="Disabled" />
      </div>
    </div>
  ),
};

export const AllCombinations: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, padding: 24 }}>
      {(["Small", "Medium", "Large"] as const).map((size) => (
        <div key={size} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <p style={{ margin: 0, fontSize: 13, fontWeight: 600, color: "#444" }}>{size}</p>
          <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
            {(["Default", "Disabled"] as const).map((state) =>
              ([true, false] as const).map((fill) => (
                <div
                  key={`${size}-${state}-${String(fill)}`}
                  style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}
                >
                  <p style={{ margin: 0, fontSize: 11, color: "#888" }}>
                    {state} / {fill ? "배경" : "투명"}
                  </p>
                  <ButtonIconItem {...args} size={size} state={state} fill={fill} />
                </div>
              ))
            )}
          </div>
        </div>
      ))}
    </div>
  ),
};
