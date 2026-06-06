import type { Meta, StoryObj } from "@storybook/react-vite";
import { AccordionNoticeInfo } from "@cx/components";

const meta: Meta<typeof AccordionNoticeInfo> = {
	title: "cx/AccordionNoticeInfo",
	component: AccordionNoticeInfo as never,
};
export default meta;
type Story = StoryObj<typeof AccordionNoticeInfo>;

export const Default: Story = {
	render: () => <AccordionNoticeInfo {...({"title":"샘플 제목","description":"설명 텍스트입니다","expanded":false} as any)} />,
};
