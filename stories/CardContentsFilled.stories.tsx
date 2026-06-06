import type { Meta, StoryObj } from "@storybook/react-vite";
import { CardContentsFilled } from "@cx/components";

const meta: Meta<typeof CardContentsFilled> = {
	title: "cx/CardContentsFilled",
	component: CardContentsFilled as never,
};
export default meta;
type Story = StoryObj<typeof CardContentsFilled>;

export const Default: Story = {
	render: () => <CardContentsFilled {...({"title":"샘플 제목","description":"설명 텍스트입니다"} as any)} />,
};
