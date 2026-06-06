import type { Meta, StoryObj } from "@storybook/react-vite";
import { OptionListItem } from "@cx/components";

const meta: Meta<typeof OptionListItem> = {
	title: "cx/OptionListItem",
	component: OptionListItem as never,
};
export default meta;
type Story = StoryObj<typeof OptionListItem>;

export const Default: Story = {
	render: () => <OptionListItem {...({"type":"List","label":"라벨","value":"값","selected":false} as any)} />,
};
