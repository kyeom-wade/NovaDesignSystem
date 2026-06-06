import type { Meta, StoryObj } from "@storybook/react-vite";
import { Sheet } from "@cx/components";

const meta: Meta<typeof Sheet> = {
	title: "cx/Sheet",
	component: Sheet as never,
};
export default meta;
type Story = StoryObj<typeof Sheet>;

export const Default: Story = {
	render: () => <Sheet {...({"productName":"샘플 제목","price":"12,000원","priceUnit":"12,000원","priceNote":"12,000원"} as any)} />,
};
