import type { Meta, StoryObj } from "@storybook/react-vite";
import { CellLeftSelect } from "@cx/components";

const variants = ["Radio", "Check"] as const;

const meta: Meta<typeof CellLeftSelect> = {
  title: "cx/CellLeftSelect",
  component: CellLeftSelect as never,
  parameters: {
    controls: {
      include: ["cellRightItem", "variants"],
    },
  },
  argTypes: {
    cellRightItem: { control: "boolean" },
    variants: { control: "select", options: variants },
  },
  args: {
    cellRightItem: true,
    variants: "Radio",
  },
};
export default meta;
type Story = StoryObj<typeof CellLeftSelect>;

export const Default: Story = {};

export const AllVariants: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div style={{ display: "grid", gap: 16, width: 353 }}>
      {variants.map((variant) => (
        <CellLeftSelect key={variant} variants={variant} cellRightItem />
      ))}
    </div>
  ),
};
