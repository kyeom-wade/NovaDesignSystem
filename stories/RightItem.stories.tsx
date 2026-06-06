import type { Meta, StoryObj } from "@storybook/react-vite";
import { RightItem } from "@cx/components";

const meta: Meta<typeof RightItem> = {
	title: "cx/RightItem",
	component: RightItem as never,
};
export default meta;
type Story = StoryObj<typeof RightItem>;

export const Default: Story = {
	render: () => <RightItem {...({"type":"Icon","label":"라벨"} as any)} />,
};
