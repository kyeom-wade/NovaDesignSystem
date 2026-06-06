import type { Meta, StoryObj } from "@storybook/react-vite";
import { ListSelectedRightItem } from "@cx/components";

const meta: Meta<typeof ListSelectedRightItem> = {
	title: "cx/ListSelectedRightItem",
	component: ListSelectedRightItem as never,
};
export default meta;
type Story = StoryObj<typeof ListSelectedRightItem>;

export const Default: Story = {
	render: () => <ListSelectedRightItem {...({"label":"라벨","type":"buttonXsmallSolid"} as any)} />,
};
