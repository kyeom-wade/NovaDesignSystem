import type { Meta, StoryObj } from "@storybook/react-vite";
import { PaymentLogoItem } from "@cx/components";

const meta: Meta<typeof PaymentLogoItem> = {
	title: "cx/PaymentLogoItem",
	component: PaymentLogoItem as never,
};
export default meta;
type Story = StoryObj<typeof PaymentLogoItem>;

export const Default: Story = {
	render: () => <PaymentLogoItem {...({} as any)} />,
};
