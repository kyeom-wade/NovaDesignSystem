import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tab } from "@cx/components";

const meta: Meta<typeof Tab> = {
	title: "cx/Tab",
	component: Tab as never,
};
export default meta;
type Story = StoryObj<typeof Tab>;

export const Default: Story = {
	render: () => <Tab {...({"items":[{"label":"항목","value":"값"},{"label":"항목2","value":"값2"}]} as any)} />,
};
