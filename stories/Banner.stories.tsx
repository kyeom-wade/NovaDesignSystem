import type { Meta, StoryObj } from "@storybook/react-vite";
import { Banner } from "@cx/components";

const meta: Meta<typeof Banner> = {
  title: "cx/Banner",
  component: Banner as never,
  argTypes: {
    variants: { control: "select", options: ["Small", "Medium"] },
    indicator: { control: "boolean" },
    title: { control: "text" },
    subText: { control: "text" },
    imageUrl: { control: "text" },
    imageAlt: { control: "text" },
    onClick: { control: false },
  },
  args: {
    variants: "Small",
    indicator: true,
    title: "T우주 x 신한카드 결제 혜택",
    subText: "우주패스 all, mini 무료 구독",
    imageUrl: "",
    imageAlt: "배너 이미지",
  },
};
export default meta;
type Story = StoryObj<typeof Banner>;

export const Default: Story = {};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 32, padding: 16 }}>
      <div>
        <p style={{ marginBottom: 8, fontWeight: 600 }}>Small (기본)</p>
        <Banner
          variants="Small"
          indicator={true}
          title="T우주 x 신한카드 결제 혜택"
          subText="우주패스 all, mini 무료 구독"
        />
      </div>
      <div>
        <p style={{ marginBottom: 8, fontWeight: 600 }}>Medium</p>
        <Banner
          variants="Medium"
          indicator={true}
          title={"iPhone 20 사전 예약 시\n에어팟 프로 증정"}
          subText="사전예약 클럽 멤버십 혜택"
        />
      </div>
    </div>
  ),
};

export const WithImage: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 32, padding: 16 }}>
      <div>
        <p style={{ marginBottom: 8, fontWeight: 600 }}>Small + 이미지</p>
        <Banner
          variants="Small"
          indicator={true}
          title="갤럭시 S25 특별 혜택"
          subText="지금 바로 확인하세요"
          imageUrl="https://placehold.co/80x72"
          imageAlt="갤럭시 S25"
        />
      </div>
      <div>
        <p style={{ marginBottom: 8, fontWeight: 600 }}>Medium + 이미지</p>
        <Banner
          variants="Medium"
          indicator={true}
          title={"갤럭시 S25 사전 예약 시\n버즈3 프로 증정"}
          subText="사전예약 혜택 지금 확인"
          imageUrl="https://placehold.co/112x112"
          imageAlt="갤럭시 S25"
        />
      </div>
    </div>
  ),
};

export const IndicatorOff: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 32, padding: 16 }}>
      <div>
        <p style={{ marginBottom: 8, fontWeight: 600 }}>Small — 인디케이터 없음</p>
        <Banner
          variants="Small"
          indicator={false}
          title="T우주 x 신한카드 결제 혜택"
          subText="우주패스 all, mini 무료 구독"
        />
      </div>
      <div>
        <p style={{ marginBottom: 8, fontWeight: 600 }}>Medium — 인디케이터 없음</p>
        <Banner
          variants="Medium"
          indicator={false}
          title={"iPhone 20 사전 예약 시\n에어팟 프로 증정"}
          subText="사전예약 클럽 멤버십 혜택"
        />
      </div>
    </div>
  ),
};
