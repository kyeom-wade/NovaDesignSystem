import type { Meta, StoryObj } from "@storybook/react-vite";
import { TitleContentsRightItem } from "@cx/components";

const meta: Meta<typeof TitleContentsRightItem> = {
	title: "cx/TitleContentsRightItem",
	component: TitleContentsRightItem as never,
};
export default meta;
type Story = StoryObj<typeof TitleContentsRightItem>;

export const Default: Story = {
	render: () => <TitleContentsRightItem {...({"type":"Icon","label":"라벨"} as any)} />,
};
