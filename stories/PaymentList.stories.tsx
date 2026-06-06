import type { Meta, StoryObj } from "@storybook/react-vite";
import { PaymentList } from "@cx/components";

const meta: Meta<typeof PaymentList> = {
	title: "cx/PaymentList",
	component: PaymentList,
};
export default meta;
type Story = StoryObj<typeof PaymentList>;

export const Default: Story = {
	args: { label: "카드/계좌 간편결제", badge: "최근 결제", selected: true },
};

export const WithCard: Story = {
	args: {
		label: "카드/계좌 간편결제",
		badge: "최근 결제",
		selected: true,
		showCard: true,
		cardTitleHighlight: "11Pay",
		cardTitle: "로 쉽고 빠르게",
		cardSubText: "이용을 위해 약관 동의를 진행해 주세요",
	},
};
