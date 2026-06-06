import type { Meta, StoryObj } from "@storybook/react-vite";
import { ButtonMoreProductItem } from "@cx/components";

const meta: Meta<typeof ButtonMoreProductItem> = {
	title: "cx/ButtonMoreProductItem",
	component: ButtonMoreProductItem as never,
};
export default meta;
type Story = StoryObj<typeof ButtonMoreProductItem>;

export const Default: Story = {
	render: () => <ButtonMoreProductItem {...({"label":"라벨","logoColor":"값"} as any)} />,
};
