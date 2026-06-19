import type { Meta, StoryObj } from "@storybook/react-vite";
import { CellLeftTable } from "@cx/components";

const meta: Meta<typeof CellLeftTable> = {
  title: "cx/CellLeftTable",
  component: CellLeftTable as never,
  parameters: {
    controls: {
      include: ["variants"],
    },
  },
  argTypes: {
    variants: { control: "select", options: ["Small", "Medium"] },
  },
  args: {
    variants: "Small",
  },
};
export default meta;
type Story = StoryObj<typeof CellLeftTable>;

export const Default: Story = {};

export const AllVariants: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, width: 353 }}>
      <CellLeftTable variants="Small" />
      <CellLeftTable variants="Medium" />
    </div>
  ),
};
