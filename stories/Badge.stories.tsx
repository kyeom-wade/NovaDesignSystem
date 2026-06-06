import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "@cx/components";

const meta: Meta<typeof Badge> = {
	title: "cx/Badge",
	component: Badge as never,
};
export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
	render: () => <Badge {...({"children":"샘플 콘텐츠","variant":"gray"} as any)} />,
};
