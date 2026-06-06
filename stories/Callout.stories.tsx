import type { Meta, StoryObj } from "@storybook/react-vite";
import { Callout } from "@cx/components";

const meta: Meta<typeof Callout> = {
	title: "cx/Callout",
	component: Callout,
};
export default meta;
type Story = StoryObj<typeof Callout>;

export const Default: Story = {
	args: { children: "구독 주기마다 요금이 정기 결제돼요" },
};

export const WithTitle: Story = {
	args: { title: "안내", children: "구독 주기마다 요금이 정기 결제돼요" },
};
