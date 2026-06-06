import type { Meta, StoryObj } from "@storybook/react-vite";
import { ButtonMoreProduct } from "@cx/components";

const meta: Meta<typeof ButtonMoreProduct> = {
	title: "cx/ButtonMoreProduct",
	component: ButtonMoreProduct as never,
};
export default meta;
type Story = StoryObj<typeof ButtonMoreProduct>;

export const Default: Story = {
	render: () => <ButtonMoreProduct {...({"label":"라벨","logoColor":"값"} as any)} />,
};
