import type { Meta, StoryObj } from "@storybook/react-vite";
import { OptionList } from "@cx/components";

const meta: Meta<typeof OptionList> = {
	title: "cx/OptionList",
	component: OptionList as never,
};
export default meta;
type Story = StoryObj<typeof OptionList>;

export const Default: Story = {
	render: () => <OptionList {...({"title":"샘플 제목","description":"설명 텍스트입니다","items":[{"label":"항목","value":"값"},{"label":"항목2","value":"값2"}]} as any)} />,
};
