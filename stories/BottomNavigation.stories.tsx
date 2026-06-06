import type { Meta, StoryObj } from "@storybook/react-vite";
import { BottomNavigation } from "@cx/components";

const meta: Meta<typeof BottomNavigation> = {
	title: "cx/BottomNavigation",
	component: BottomNavigation as never,
};
export default meta;
type Story = StoryObj<typeof BottomNavigation>;

export const Default: Story = {
	render: () => <BottomNavigation {...({"items":[{"label":"항목","value":"값"},{"label":"항목2","value":"값2"}]} as any)} />,
};
