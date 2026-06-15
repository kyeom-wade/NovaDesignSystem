import type { Meta, StoryObj } from "@storybook/react-vite";
import { InputItem } from "@cx/components";

const meta: Meta<typeof InputItem> = {
  title: "cx/InputItem",
  component: InputItem as never,
  argTypes: {
    states: {
      control: "select",
      options: ["Default", "Focused", "Typing", "Typed", "Disabled"],
    },
    error: { control: "boolean" },
    button: { control: "boolean" },
    buttonLabel: { control: "text" },
    placeholder: { control: "text" },
    onButtonClick: { control: false },
    className: { control: false },
  },
  args: {
    states: "Default",
    error: false,
    button: true,
    buttonLabel: "버튼",
    placeholder: "텍스트를 입력하세요",
  },
};
export default meta;
type Story = StoryObj<typeof InputItem>;

export const Default: Story = {};

export const AllStates: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, padding: 24 }}>
      {(["Default", "Focused", "Typing", "Typed", "Disabled"] as const).map((s) => (
        <div key={s}>
          <p style={{ margin: "0 0 6px", fontSize: 12, color: "#888" }}>{s}</p>
          <InputItem {...args} states={s} />
        </div>
      ))}
    </div>
  ),
};

export const ErrorState: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, padding: 24 }}>
      {(["Default", "Focused", "Typing", "Typed"] as const).map((s) => (
        <div key={s}>
          <p style={{ margin: "0 0 6px", fontSize: 12, color: "#888" }}>{s} + Error</p>
          <InputItem {...args} states={s} error={true} />
        </div>
      ))}
    </div>
  ),
};

export const WithoutButton: Story = {
  args: {
    button: false,
    placeholder: "example@email.com",
  },
};

export const TypingWithCaret: Story = {
  args: {
    states: "Typing",
    placeholder: "갤럭시 S25 울트라",
    buttonLabel: "등록",
  },
};

export const TypedValue: Story = {
  args: {
    states: "Typed",
    placeholder: "서울특별시 중구 을지로 65",
    buttonLabel: "변경",
  },
};

export const Disabled: Story = {
  args: {
    states: "Disabled",
    placeholder: "010-1234-5678",
    buttonLabel: "인증",
  },
};
