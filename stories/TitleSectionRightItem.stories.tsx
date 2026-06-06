import type { Meta, StoryObj } from "@storybook/react-vite";
import { TitleSectionRightItem } from "@cx/components";

const meta: Meta<typeof TitleSectionRightItem> = {
	title: "cx/TitleSectionRightItem",
	component: TitleSectionRightItem as never,
};
export default meta;
type Story = StoryObj<typeof TitleSectionRightItem>;

export const Default: Story = {
	render: () => <TitleSectionRightItem {...({"type":"TextButton","label":"라벨","subText":"설명 텍스트입니다","children":"샘플 콘텐츠"} as any)} />,
};
