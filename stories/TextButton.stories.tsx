import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextButton } from "@cx/components";

const meta: Meta<typeof TextButton> = {
	title: "cx/TextButton",
	component: TextButton as never,
};
export default meta;
type Story = StoryObj<typeof TextButton>;

export const Default: Story = {
	render: () => <TextButton {...({"label":"라벨","underline":false} as any)} />,
};
