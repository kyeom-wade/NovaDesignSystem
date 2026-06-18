import type { Meta, StoryObj } from "@storybook/react-vite";
import { SwitchItem } from "@cx/components";

const meta: Meta<typeof SwitchItem> = {
  title: "cx/SwitchItem",
  component: SwitchItem as never,
  argTypes: {
    selection: { control: "boolean" },
    selected: { control: false },
    state: { control: "select", options: ["Default", "Disabled"] },
    onClick: { control: false },
    className: { control: false },
    ariaLabel: { control: "text" },
  },
  args: {
    selection: false,
    state: "Default",
    ariaLabel: "Switch",
  },
};
export default meta;
type Story = StoryObj<typeof SwitchItem>;

export const Default: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 20, alignItems: "center", padding: 20 }}>
      <SwitchItem {...args} selection={false} state="Default" />
      <SwitchItem {...args} selection={false} state="Disabled" />
      <SwitchItem {...args} selection={true} state="Default" />
      <SwitchItem {...args} selection={true} state="Disabled" />
    </div>
  ),
};
