import type { Meta, StoryObj } from "@storybook/react-vite";
import { Radio } from "@cx/components";

const meta: Meta<typeof Radio> = {
	title: "cx/Radio",
	component: Radio,
};
export default meta;
type Story = StoryObj<typeof Radio>;

export const Unchecked: Story = { args: { label: "신용카드", checked: false } };
export const Checked: Story = { args: { label: "신용카드", checked: true } };
