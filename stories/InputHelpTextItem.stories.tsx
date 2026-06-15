import type { Meta, StoryObj } from "@storybook/react-vite";
import { InputHelpTextItem } from "@cx/components";

const meta: Meta<typeof InputHelpTextItem> = {
  title: "cx/InputHelpTextItem",
  component: InputHelpTextItem as never,
  argTypes: {
    children: { control: "text" },
    danger: { control: "boolean" },
    className: { control: false },
  },
  args: {
    children: "Help Text",
    danger: false,
  },
};

export default meta;
type Story = StoryObj<typeof InputHelpTextItem>;

export const Default: Story = {};

export const Danger: Story = {
  args: {
    danger: true,
  },
};

export const States: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, padding: 24 }}>
      <InputHelpTextItem {...args} danger={false}>Help Text</InputHelpTextItem>
      <InputHelpTextItem {...args} danger={true}>Help Text</InputHelpTextItem>
    </div>
  ),
};
