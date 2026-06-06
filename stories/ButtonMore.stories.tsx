import type { Meta, StoryObj } from "@storybook/react-vite";
import { ButtonMore } from "@cx/components";

const meta: Meta<typeof ButtonMore> = {
	title: "cx/ButtonMore",
	component: ButtonMore as never,
};
export default meta;
type Story = StoryObj<typeof ButtonMore>;

export const Default: Story = {
	render: () => <ButtonMore {...({"label":"라벨"} as any)} />,
};
