import type { Meta, StoryObj } from "@storybook/react-vite";
import { CardContentsLine } from "@cx/components";

const meta: Meta<typeof CardContentsLine> = {
	title: "cx/CardContentsLine",
	component: CardContentsLine as never,
};
export default meta;
type Story = StoryObj<typeof CardContentsLine>;

export const Default: Story = {
	render: () => <CardContentsLine {...({"children":"샘플 콘텐츠"} as any)} />,
};
