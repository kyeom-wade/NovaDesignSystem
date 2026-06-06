import type { Meta, StoryObj } from "@storybook/react-vite";
import { ButtonTextUnderline } from "@cx/components";

const meta: Meta<typeof ButtonTextUnderline> = {
	title: "cx/ButtonTextUnderline",
	component: ButtonTextUnderline,
};
export default meta;
type Story = StoryObj<typeof ButtonTextUnderline>;

export const Default: Story = { args: { label: "약관 보기" } };
