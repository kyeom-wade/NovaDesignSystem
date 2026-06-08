import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextGroupProductDetail } from "@cx/components";

const meta: Meta<typeof TextGroupProductDetail> = {
  title: "cx/TextGroupProductDetail",
  component: TextGroupProductDetail as never,
  argTypes: {
    subText: { control: "text" },
    titleText: { control: "text" },
    showToogle: { control: "boolean" },
    toogleSelected: { control: "boolean" },
    toogleLabel: { control: "text" },
    onToogle: { control: false },
  },
  args: {
    subText: "T 우주패스 TVING & Wavve 프리미엄",
    titleText: "TVING 프리미엄, Wavve 콘텐츠 팩 프리미엄",
    showToogle: true,
    toogleSelected: false,
    toogleLabel: "9,999",
  },
};
export default meta;
type Story = StoryObj<typeof TextGroupProductDetail>;

export const Default: Story = {};

export const WithoutToggle: Story = {
  args: {
    showToogle: false,
  },
};

export const Liked: Story = {
  args: {
    toogleSelected: true,
    toogleLabel: "10,000",
  },
};

export const States: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, padding: 16 }}>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>기본 (좋아요 미선택)</p>
        <TextGroupProductDetail
          subText="T 우주패스 Basic"
          titleText="넷플릭스 스탠다드 + 시즌 콘텐츠 팩"
          showToogle={true}
          toogleSelected={false}
          toogleLabel="5,231"
        />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>좋아요 선택됨</p>
        <TextGroupProductDetail
          subText="T 우주패스 TVING & Wavve 프리미엄"
          titleText="TVING 프리미엄, Wavve 콘텐츠 팩 프리미엄"
          showToogle={true}
          toogleSelected={true}
          toogleLabel="9,999"
        />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>토글 없음</p>
        <TextGroupProductDetail
          subText="T 우주패스 YouTube 프리미엄"
          titleText="YouTube Premium 월정액 구독 상품"
          showToogle={false}
        />
      </div>
    </div>
  ),
};

export const LongTitle: Story = {
  args: {
    subText: "특가 프로모션 상품",
    titleText: "T 우주패스 All 기준 월 최대 12개 상품을 하나의 요금으로 이용할 수 있는 구독 상품",
    toogleLabel: "12,345",
  },
};
