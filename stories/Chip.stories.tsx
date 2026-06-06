import type { Meta, StoryObj } from "@storybook/react-vite";
import { Chip } from "@cx/components";

const meta: Meta<typeof Chip> = {
	title: "cx/Chip",
	component: Chip as never,
};
export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = {
	render: () => <Chip {...({"children":"샘플 콘텐츠","selected":false} as any)} />,
};
