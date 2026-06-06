import type { Meta, StoryObj } from "@storybook/react-vite";
import { Coupon } from "@cx/components";

const meta: Meta<typeof Coupon> = {
	title: "cx/Coupon",
	component: Coupon as never,
};
export default meta;
type Story = StoryObj<typeof Coupon>;

export const Default: Story = {
	render: () => <Coupon {...({"title":"샘플 제목","description":"설명 텍스트입니다","benefitText":"값","conditionText":"설명 텍스트입니다","ctaLabel":"라벨","disabled":false} as any)} />,
};
