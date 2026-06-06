import type { Meta, StoryObj } from "@storybook/react-vite";
import { HomeCardCarousel } from "@cx/components";

const meta: Meta<typeof HomeCardCarousel> = {
	title: "cx/HomeCardCarousel",
	component: HomeCardCarousel as never,
};
export default meta;
type Story = StoryObj<typeof HomeCardCarousel>;

export const Default: Story = {
	render: () => <HomeCardCarousel {...({"subtitle":"설명 텍스트입니다","titleLine1":"샘플 제목","titleLine2":"샘플 제목","children":"샘플 콘텐츠"} as any)} />,
};
