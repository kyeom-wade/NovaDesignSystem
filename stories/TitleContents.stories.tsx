import type { Meta, StoryObj } from "@storybook/react-vite";
import { TitleContents } from "@cx/components";

const meta: Meta<typeof TitleContents> = {
	title: "cx/TitleContents",
	component: TitleContents as never,
};
export default meta;
type Story = StoryObj<typeof TitleContents>;

export const Default: Story = {
	render: () => <TitleContents {...({"title":"샘플 제목","showButton":true,"expanded":true} as any)} />,
};
