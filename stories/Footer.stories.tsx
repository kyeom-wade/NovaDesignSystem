import type { Meta, StoryObj } from "@storybook/react-vite";
import { Footer } from "@cx/components";

const meta: Meta<typeof Footer> = {
	title: "cx/Footer",
	component: Footer as never,
};
export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
	render: () => <Footer {...({"title":"샘플 제목","description":"설명 텍스트입니다","links":["항목1","항목2"]} as any)} />,
};
