import type { Meta, StoryObj } from "@storybook/react-vite";
import { UnderlineTab } from "@cx/components";

const meta: Meta<typeof UnderlineTab> = {
	title: "cx/UnderlineTab",
	component: UnderlineTab as never,
};
export default meta;
type Story = StoryObj<typeof UnderlineTab>;

export const Default: Story = {
	render: () => <UnderlineTab {...({"items":[{"label":"항목","value":"값"},{"label":"항목2","value":"값2"}],"activeIndex":0} as any)} />,
};
