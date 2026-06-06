import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextField } from "@cx/components";

const meta: Meta<typeof TextField> = {
	title: "cx/TextField",
	component: TextField as never,
};
export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
	render: () => <TextField {...({"label":"라벨","placeholder":"설명 텍스트입니다","helperText":"설명 텍스트입니다","value":"값","inputType":["항목1","항목2"],"state":"default","error":false,"button":false,"buttonLabel":"라벨"} as any)} />,
};
