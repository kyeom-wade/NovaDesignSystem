import type { Meta, StoryObj } from "@storybook/react-vite";
import { CellRightTable } from "@cx/components";

const variants = ["18Semi", "16Semi", "16reg", "15reg"] as const;

const meta: Meta<typeof CellRightTable> = {
  title: "cx/CellRightTable",
  component: CellRightTable as never,
  parameters: {
    controls: {
      include: ["description", "title", "variants"],
    },
  },
  argTypes: {
    description: { control: "text" },
    title: { control: "text" },
    variants: { control: "select", options: variants },
  },
  args: {
    description: "내용 들어가는 부분",
    title: "타이틀",
    variants: "18Semi",
  },
};
export default meta;
type Story = StoryObj<typeof CellRightTable>;

export const Default: Story = {};

export const AllVariants: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, width: 353 }}>
      {variants.map((variant) => (
        <CellRightTable key={variant} variants={variant} />
      ))}
    </div>
  ),
};
