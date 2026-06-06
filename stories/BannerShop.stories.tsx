import type { Meta, StoryObj } from "@storybook/react-vite";
import { BannerShop } from "@cx/components";

const meta: Meta<typeof BannerShop> = {
	title: "cx/BannerShop",
	component: BannerShop as never,
};
export default meta;
type Story = StoryObj<typeof BannerShop>;

export const Default: Story = {
	render: () => <BannerShop {...({"subtitle":"설명 텍스트입니다","titleLine1":"샘플 제목","titleLine2":"샘플 제목"} as any)} />,
};
