import type { Meta, StoryObj } from "@storybook/react-vite";
import { TitleSection } from "@cx/components";

const meta: Meta<typeof TitleSection> = {
	title: "cx/TitleSection",
	component: TitleSection as never,
};
export default meta;
type Story = StoryObj<typeof TitleSection>;

export const Default: Story = {
	render: () => <TitleSection {...({"title":"샘플 제목","subtitle":"설명 텍스트입니다","rightText":"라벨","children":"샘플 콘텐츠"} as any)} />,
};
