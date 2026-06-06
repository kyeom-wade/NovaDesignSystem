import type { Meta, StoryObj } from "@storybook/react-vite";
import { ListSelected } from "@cx/components";

const meta: Meta<typeof ListSelected> = {
	title: "cx/ListSelected",
	component: ListSelected as never,
};
export default meta;
type Story = StoryObj<typeof ListSelected>;

export const Default: Story = {
	render: () => <ListSelected {...({"type":"radio","label":"라벨","price":"12,000원","buttonLabel":"라벨","checked":false,"showPrice":true,"showButton":true} as any)} />,
};
