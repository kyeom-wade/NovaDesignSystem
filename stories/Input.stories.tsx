import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "@cx/components";

const meta: Meta<typeof Input> = {
  title: "cx/Input",
  component: Input as never,
  argTypes: {
    variants: { control: "select", options: ["1Input", "2Input", "3Input"] },
    labelText: { control: "text" },
    placeholder: { control: "text" },
    buttonLabel: { control: "text" },
    helpTextContent: { control: "text" },
    label: { control: "boolean" },
    helpText: { control: "boolean" },
    className: { control: false },
  },
  args: {
    variants: "1Input",
    labelText: "라벨",
    placeholder: "텍스트를 입력하세요",
    buttonLabel: "확인",
    helpTextContent: "도움말 텍스트",
    label: true,
    helpText: true,
  },
};
export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 32, padding: 24 }}>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>1Input — 단일 행 (레이블 + 버튼 + 도움말)</p>
        <Input {...args} variants="1Input" />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>2Input — 두 행 (버튼 없음 + 도움말)</p>
        <Input {...args} variants="2Input" />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>3Input — 세 행 (첫째 행 버튼 + 도움말)</p>
        <Input {...args} variants="3Input" />
      </div>
    </div>
  ),
};

export const WithoutLabel: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 32, padding: 24 }}>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>label=false / 1Input</p>
        <Input {...args} variants="1Input" label={false} />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>label=false / 2Input</p>
        <Input {...args} variants="2Input" label={false} />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>label=false / 3Input</p>
        <Input {...args} variants="3Input" label={false} />
      </div>
    </div>
  ),
};

export const UseCases: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 32, padding: 24 }}>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>주소 입력</p>
        <Input
          variants="2Input"
          labelText="배송지 주소"
          placeholder="우편번호 검색"
          buttonLabel="검색"
          helpTextContent="정확한 주소를 입력해 주세요."
        />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>인증번호 입력</p>
        <Input
          variants="1Input"
          labelText="인증번호"
          placeholder="인증번호 6자리 입력"
          buttonLabel="인증"
          helpTextContent="문자로 발송된 인증번호를 입력해 주세요."
        />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>상품명 + 수량 입력 (3Input)</p>
        <Input
          variants="3Input"
          labelText="주문 정보"
          placeholder="상품명을 입력하세요"
          buttonLabel="추가"
          helpTextContent="최대 50자까지 입력할 수 있습니다."
        />
      </div>
    </div>
  ),
};
