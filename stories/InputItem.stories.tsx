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
    label: { control: "boolean" },
    labelText: { control: "text" },
    helpText: { control: "boolean" },
    helpTextContent: { control: "text" },
    button: { control: "boolean" },
    buttonLabel: { control: "text" },
    placeholder: { control: "text" },
    onButtonClick: { control: false },
    className: { control: false },
  },
  args: {
    states: "Default",
    error: false,
    label: true,
    labelText: "이름",
    helpText: true,
    helpTextContent: "이름을 입력해 주세요",
    button: true,
    buttonLabel: "확인",
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
          <InputItem {...args} states={s} error={true} helpTextContent="올바르지 않은 값입니다" />
        </div>
      ))}
    </div>
  ),
};

export const WithoutButton: Story = {
  args: {
    button: false,
    labelText: "이메일",
    placeholder: "example@email.com",
    helpTextContent: "이메일 주소를 입력해 주세요",
  },
};

export const WithoutLabel: Story = {
  args: {
    label: false,
    helpText: false,
    placeholder: "검색어를 입력하세요",
    buttonLabel: "검색",
  },
};

export const TypingWithCaret: Story = {
  args: {
    states: "Typing",
    labelText: "상품명",
    placeholder: "갤럭시 S25 울트라",
    helpTextContent: "입력 중...",
    buttonLabel: "등록",
  },
};

export const TypedValue: Story = {
  args: {
    states: "Typed",
    labelText: "배송지",
    placeholder: "서울특별시 중구 을지로 65",
    helpTextContent: "배송지가 입력되었습니다",
    buttonLabel: "변경",
  },
};

export const Disabled: Story = {
  args: {
    states: "Disabled",
    labelText: "휴대폰 번호",
    placeholder: "010-1234-5678",
    helpTextContent: "수정이 불가능한 항목입니다",
    buttonLabel: "인증",
  },
};
