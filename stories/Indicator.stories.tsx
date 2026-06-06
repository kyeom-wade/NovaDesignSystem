import type { Meta, StoryObj } from "@storybook/react-vite";
import { Indicator } from "@cx/components";

const meta: Meta<typeof Indicator> = {
	title: "cx/Indicator",
	component: Indicator as never,
};
export default meta;
type Story = StoryObj<typeof Indicator>;

export const Default: Story = {
	render: () => <Indicator {...({"count":"값","activeIndex":"값"} as any)} />,
};
