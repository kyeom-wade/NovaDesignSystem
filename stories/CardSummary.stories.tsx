import type { Meta, StoryObj } from "@storybook/react-vite";
import { CardSummary } from "@cx/components";

const meta: Meta<typeof CardSummary> = {
	title: "cx/CardSummary",
	component: CardSummary,
};
export default meta;
type Story = StoryObj<typeof CardSummary>;

export const Default: Story = {
	args: {
		subText: "이번 달 청구 요금",
		title: "42,350원",
		items: [
			{ label: "기본료", value: "39,000원" },
			{ label: "부가서비스", value: "3,350원" },
		],
	},
};

export const WithButton: Story = {
	args: {
		subText: "이번 달 청구 요금",
		title: "42,350원",
		buttonLabel: "상세",
		items: [{ label: "할인", value: "-5,000원" }],
	},
};
