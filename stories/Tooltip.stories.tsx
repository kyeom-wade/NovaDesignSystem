import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tooltip } from "@cx/components";

const meta: Meta<typeof Tooltip> = {
	title: "cx/Tooltip",
	component: Tooltip as never,
};
export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
	render: () => <Tooltip {...({"label":"라벨","tailPosition":"Center"} as any)} />,
};
