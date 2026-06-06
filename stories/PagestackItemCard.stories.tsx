import type { Meta, StoryObj } from "@storybook/react-vite";
import { PagestackItemCard } from "@cx/components";

const meta: Meta<typeof PagestackItemCard> = {
	title: "cx/PagestackItemCard",
	component: PagestackItemCard as never,
};
export default meta;
type Story = StoryObj<typeof PagestackItemCard>;

export const Default: Story = {
	render: () => <PagestackItemCard {...({"children":"샘플 콘텐츠"} as any)} />,
};
