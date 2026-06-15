import type { Meta, StoryObj } from "@storybook/react-vite";
import { InputCaretItem } from "@cx/components";

const meta: Meta<typeof InputCaretItem> = {
  title: "cx/InputCaretItem",
  component: InputCaretItem as never,
  argTypes: {
    className: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof InputCaretItem>;

export const Default: Story = {};

export const InInputText: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "4px",
        width: "240px",
        height: "48px",
        padding: "0 16px",
        borderRadius: "12px",
        background: "#f4f5fa",
        color: "#060c1f",
        fontSize: "16px",
      }}
    >
      <InputCaretItem />
      <span>입력 중</span>
    </div>
  ),
};
