import type { Meta, StoryObj } from "@storybook/react-vite";
import { InputClearButtonItem } from "@cx/components";

const meta: Meta<typeof InputClearButtonItem> = {
  title: "cx/InputClearButtonItem",
  component: InputClearButtonItem as never,
  argTypes: {
    state: { control: "select", options: ["Default", "Disabled"] },
    "aria-label": { control: "text" },
    onClick: { control: false },
    className: { control: false },
  },
  args: {
    state: "Default",
    "aria-label": "입력 내용 지우기",
  },
};

export default meta;
type Story = StoryObj<typeof InputClearButtonItem>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    state: "Disabled",
  },
};

export const States: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 16, alignItems: "center", padding: 24 }}>
      <InputClearButtonItem {...args} state="Default" />
      <InputClearButtonItem {...args} state="Disabled" />
    </div>
  ),
};
