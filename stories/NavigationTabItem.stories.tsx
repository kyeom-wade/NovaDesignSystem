import type { Meta, StoryObj } from "@storybook/react-vite";
import { NavigationTabItem } from "@cx/components";

const meta: Meta<typeof NavigationTabItem> = {
  title: "cx/NavigationTabItem",
  component: NavigationTabItem as never,
  argTypes: {
    variant: { control: "select", options: ["Benefit", "Shopping", "My"] },
    selection: { control: "select", options: ["Selected", "Unselected", "Indeterminate"] },
    label: { control: "text" },
    onClick: { control: false },
    className: { control: false },
  },
  args: {
    variant: "Benefit",
    selection: "Selected",
    label: "",
  },
};
export default meta;
type Story = StoryObj<typeof NavigationTabItem>;

export const Default: Story = {};

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 32, padding: 24, alignItems: "flex-start" }}>
      <div>
        <p style={{ fontSize: 12, color: "#666", marginBottom: 8 }}>Benefit</p>
        <NavigationTabItem {...args} variant="Benefit" />
      </div>
      <div>
        <p style={{ fontSize: 12, color: "#666", marginBottom: 8 }}>Shopping</p>
        <NavigationTabItem {...args} variant="Shopping" />
      </div>
      <div>
        <p style={{ fontSize: 12, color: "#666", marginBottom: 8 }}>My</p>
        <NavigationTabItem {...args} variant="My" />
      </div>
    </div>
  ),
};

export const States: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 32, padding: 24 }}>
      {(["Benefit", "Shopping", "My"] as const).map((variant) => (
        <div key={variant}>
          <p style={{ fontSize: 12, color: "#666", marginBottom: 8 }}>{variant}</p>
          <div style={{ display: "flex", gap: 16 }}>
            {(["Selected", "Unselected", "Indeterminate"] as const).map((selection) => (
              <div key={selection} style={{ textAlign: "center" }}>
                <p style={{ fontSize: 11, color: "#999", marginBottom: 4 }}>{selection}</p>
                <NavigationTabItem {...args} variant={variant} selection={selection} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};

export const Selected: Story = {
  args: {
    selection: "Selected",
  },
};

export const Unselected: Story = {
  args: {
    selection: "Unselected",
  },
};

export const Indeterminate: Story = {
  args: {
    selection: "Indeterminate",
  },
};

export const CustomLabel: Story = {
  args: {
    variant: "Shopping",
    selection: "Selected",
    label: "커스텀 라벨",
  },
};
