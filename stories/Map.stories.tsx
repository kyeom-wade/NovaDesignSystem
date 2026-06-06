import type { Meta, StoryObj } from "@storybook/react-vite";
import { Map } from "@cx/components";

const meta: Meta<typeof Map> = {
	title: "cx/Map",
	component: Map as never,
};
export default meta;
type Story = StoryObj<typeof Map>;

export const Default: Story = {
	render: () => <Map {...({} as any)} />,
};
