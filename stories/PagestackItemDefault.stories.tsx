import type { Meta, StoryObj } from "@storybook/react-vite";
import { PagestackItemDefault } from "@cx/components";

const meta: Meta<typeof PagestackItemDefault> = {
	title: "cx/PagestackItemDefault",
	component: PagestackItemDefault as never,
};
export default meta;
type Story = StoryObj<typeof PagestackItemDefault>;

export const Default: Story = {
	render: () => <PagestackItemDefault {...({"children":"샘플 콘텐츠"} as any)} />,
};
