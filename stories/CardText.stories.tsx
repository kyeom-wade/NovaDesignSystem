import type { Meta, StoryObj } from "@storybook/react-vite";
import { CardText } from "@cx/components";

const meta: Meta<typeof CardText> = {
	title: "cx/CardText",
	component: CardText,
};
export default meta;
type Story = StoryObj<typeof CardText>;

export const Default: Story = {
	args: { title: "미납 요금 안내", description: "납부기한이 지난 미납 요금이 있습니다." },
};
