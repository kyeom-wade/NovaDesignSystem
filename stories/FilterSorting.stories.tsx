import type { Meta, StoryObj } from "@storybook/react-vite";
import { FilterSorting } from "@cx/components";

const meta: Meta<typeof FilterSorting> = {
	title: "cx/FilterSorting",
	component: FilterSorting,
};
export default meta;
type Story = StoryObj<typeof FilterSorting>;

export const Default: Story = {
	args: { countLabel: "전체 256개", sortLabel: "인기순", filterLabel: "필터" },
};
