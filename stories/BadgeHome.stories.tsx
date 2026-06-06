import type { Meta, StoryObj } from "@storybook/react-vite";
import { BadgeHome } from "@cx/components";

const meta: Meta<typeof BadgeHome> = {
	title: "cx/BadgeHome",
	component: BadgeHome as never,
};
export default meta;
type Story = StoryObj<typeof BadgeHome>;

export const Default: Story = {
	render: () => <BadgeHome {...({"label":"라벨"} as any)} />,
};
