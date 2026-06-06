import type { Meta, StoryObj } from "@storybook/react-vite";
import { SearchBar } from "@cx/components";

const meta: Meta<typeof SearchBar> = {
	title: "cx/SearchBar",
	component: SearchBar as never,
};
export default meta;
type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {
	render: () => <SearchBar {...({"placeholder":"설명 텍스트입니다","value":"값","variant":"search"} as any)} />,
};
