import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@cx/components";

const meta: Meta<typeof Button> = {
	title: "cx/Button",
	component: Button as never,
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
	render: () => <Button {...({"label":"라벨","variant":"primary","fullWidth":false} as any)} />,
};
