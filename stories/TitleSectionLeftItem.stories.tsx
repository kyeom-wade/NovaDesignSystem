import type { Meta, StoryObj } from "@storybook/react-vite";
import { TitleSectionLeftItem } from "@cx/components";

const meta: Meta<typeof TitleSectionLeftItem> = {
	title: "cx/TitleSectionLeftItem",
	component: TitleSectionLeftItem as never,
};
export default meta;
type Story = StoryObj<typeof TitleSectionLeftItem>;

export const Default: Story = {
	render: () => <TitleSectionLeftItem {...({"type":"Text","count":"값","children":"샘플 콘텐츠"} as any)} />,
};
