import type { Meta, StoryObj } from "@storybook/react-vite";
import { Footer } from "@cx/components";

const meta: Meta<typeof Footer> = {
  title: "cx/Footer",
  component: Footer as never,
  argTypes: {
    variant: { control: "select", options: ["Main", "Product"] },
    termLabel: { control: "text" },
    financeTermLabel: { control: "text" },
    privacyLabel: { control: "text" },
    businessName: { control: "text" },
    ceo: { control: "text" },
    businessRegNo: { control: "text" },
    address: { control: "text" },
    mailOrderRegNo: { control: "text" },
    tel: { control: "text" },
    email: { control: "text" },
    copyright: { control: "text" },
    onTermClick: { control: false },
    onFinanceTermClick: { control: false },
    onPrivacyClick: { control: false },
  },
  args: {
    variant: "Main",
    termLabel: "이용약관",
    financeTermLabel: "전자금융거래 이용약관",
    privacyLabel: "개인정보처리방침",
    businessName: "SK플래닛(주)",
    ceo: "유재욱",
    businessRegNo: "815-81-01244",
    address: "경기도 성남시 분당구 판교로 264(삼평동)",
    mailOrderRegNo: "2014-경기성남-0036",
    tel: "1800-0133",
    email: "gifticon@skplanet.com",
    copyright: "Copyright ©️ SK Planet All Rights Reserved",
  },
};
export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {};

export const MainVariant: Story = {
  args: {
    variant: "Main",
  },
};

export const ProductVariant: Story = {
  args: {
    variant: "Product",
  },
};

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "48px", padding: "24px" }}>
      <div>
        <p style={{ marginBottom: "12px", fontWeight: "bold", fontSize: "14px" }}>Main</p>
        <Footer {...args} variant="Main" />
      </div>
      <div>
        <p style={{ marginBottom: "12px", fontWeight: "bold", fontSize: "14px" }}>Product</p>
        <Footer {...args} variant="Product" />
      </div>
    </div>
  ),
};

export const WithCallbacks: Story = {
  args: {
    variant: "Main",
    onTermClick: () => alert("이용약관 클릭"),
    onFinanceTermClick: () => alert("전자금융거래 이용약관 클릭"),
    onPrivacyClick: () => alert("개인정보처리방침 클릭"),
  },
};

export const CustomBusinessInfo: Story = {
  args: {
    variant: "Main",
    businessName: "노바 커머스(주)",
    ceo: "홍길동",
    businessRegNo: "123-45-67890",
    address: "서울특별시 강남구 테헤란로 123",
    mailOrderRegNo: "2024-서울강남-1234",
    tel: "1588-0000",
    email: "support@nova.com",
    copyright: "Copyright ©️ Nova Commerce All Rights Reserved",
  },
};
