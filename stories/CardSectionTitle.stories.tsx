import type { Meta, StoryObj } from "@storybook/react-vite";
import { CardSectionTitle } from "@cx/components";

const meta: Meta<typeof CardSectionTitle> = {
	title: "cx/CardSectionTitle",
	component: CardSectionTitle as never,
};
export default meta;
type Story = StoryObj<typeof CardSectionTitle>;

export const Default: Story = {
	render: () => <CardSectionTitle {...({"title":"샘플 제목","children":"샘플 콘텐츠"} as any)} />,
};
