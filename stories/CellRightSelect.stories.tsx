import type { Meta, StoryObj } from "@storybook/react-vite";
import { CellRightSelect } from "@cx/components";

const variants = ["Radio", "Circle"] as const;

const meta: Meta<typeof CellRightSelect> = {
  title: "cx/CellRightSelect",
  component: CellRightSelect as never,
  parameters: {
    controls: {
      include: ["variants"],
    },
  },
  argTypes: {
    variants: { control: "select", options: variants },
  },
  args: {
    variants: "Radio",
  },
};
export default meta;
type Story = StoryObj<typeof CellRightSelect>;

export const Default: Story = {};

export const AllVariants: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div style={{ display: "grid", gap: 16, width: 353 }}>
      {variants.map((variant) => (
        <CellRightSelect key={variant} variants={variant} />
      ))}
    </div>
  ),
};
