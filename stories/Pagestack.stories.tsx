import type { Meta, StoryObj } from "@storybook/react-vite";
import { Pagestack } from "@cx/components";

const meta: Meta<typeof Pagestack> = {
	title: "cx/Pagestack",
	component: Pagestack as never,
};
export default meta;
type Story = StoryObj<typeof Pagestack>;

export const Default: Story = {
	render: () => <Pagestack {...({"title":"샘플 제목","showTitle":true,"children":"샘플 콘텐츠"} as any)} />,
};
