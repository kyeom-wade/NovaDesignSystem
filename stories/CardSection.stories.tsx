import type { Meta, StoryObj } from "@storybook/react-vite";
import { CardSection } from "@cx/components";

const meta: Meta<typeof CardSection> = {
	title: "cx/CardSection",
	component: CardSection as never,
};
export default meta;
type Story = StoryObj<typeof CardSection>;

export const Default: Story = {
	render: () => <CardSection {...({"children":"샘플 콘텐츠"} as any)} />,
};
