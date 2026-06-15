import type { Meta, StoryObj } from "@storybook/react-vite";
import { InputTypeItem } from "@cx/components";

const meta: Meta<typeof InputTypeItem> = {
  title: "cx/InputTypeItem",
  component: InputTypeItem as never,
  argTypes: {
    state: {
      control: "select",
      options: ["Default", "Focused", "Typing", "Completed", "Disabled"],
    },
    danger: { control: "boolean" },
    text: { control: "text" },
    onClear: { control: false },
    className: { control: false },
  },
  args: {
    state: "Default",
    danger: false,
    text: "텍스트를 입력하세요",
  },
};

export default meta;
type Story = StoryObj<typeof InputTypeItem>;

export const Default: Story = {};

export const Typing: Story = {
  args: {
    state: "Typing",
  },
};

export const Danger: Story = {
  args: {
    danger: true,
  },
};

export const States: Story = {
  render: (args) => (
    <div style={{ display: "grid", gridTemplateColumns: "353px 353px", gap: "12px 40px", padding: 24 }}>
      {(["Default", "Focused", "Typing", "Completed", "Disabled"] as const).map((state) => (
        <InputTypeItem key={`normal-${state}`} {...args} state={state} danger={false} />
      ))}
      {(["Default", "Focused", "Typing", "Completed", "Disabled"] as const).map((state) => (
        <InputTypeItem key={`danger-${state}`} {...args} state={state} danger />
      ))}
    </div>
  ),
};
