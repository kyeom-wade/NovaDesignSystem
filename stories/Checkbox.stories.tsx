import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox } from "@cx/components";

const meta: Meta<typeof Checkbox> = {
	title: "cx/Checkbox",
	component: Checkbox,
};
export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Unchecked: Story = { args: { label: "약관에 동의합니다", checked: false } };
export const Checked: Story = { args: { label: "약관에 동의합니다", checked: true } };
