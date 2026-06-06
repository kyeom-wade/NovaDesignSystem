import type { Meta, StoryObj } from "@storybook/react-vite";
import { ButtonSection } from "@cx/components";

const meta: Meta<typeof ButtonSection> = {
	title: "cx/ButtonSection",
	component: ButtonSection as never,
};
export default meta;
type Story = StoryObj<typeof ButtonSection>;

export const Default: Story = {
	render: () => <ButtonSection {...({"leftLabel":"라벨","rightLabel":"라벨","children":"샘플 콘텐츠"} as any)} />,
};
