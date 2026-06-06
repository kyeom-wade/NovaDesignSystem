import type { Meta, StoryObj } from "@storybook/react-vite";
import { BadgeIcon } from "@cx/components";

const meta: Meta<typeof BadgeIcon> = {
	title: "cx/BadgeIcon",
	component: BadgeIcon as never,
};
export default meta;
type Story = StoryObj<typeof BadgeIcon>;

export const Default: Story = {
	render: () => <BadgeIcon {...({"label":"라벨","subLabel":"설명 텍스트입니다"} as any)} />,
};
