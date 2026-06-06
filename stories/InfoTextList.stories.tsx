import type { Meta, StoryObj } from "@storybook/react-vite";
import { InfoTextList } from "@cx/components";

const meta: Meta<typeof InfoTextList> = {
	title: "cx/InfoTextList",
	component: InfoTextList as never,
};
export default meta;
type Story = StoryObj<typeof InfoTextList>;

export const Default: Story = {
	render: () => <InfoTextList {...({"title":"샘플 제목","category":"설명 텍스트입니다","date":["항목1","항목2"],"rightText":"값"} as any)} />,
};
