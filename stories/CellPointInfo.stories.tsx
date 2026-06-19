import type { Meta, StoryObj } from "@storybook/react-vite";
import { CellPointInfo } from "@cx/components";

const variants = ["Add", "Discount"] as const;

const meta: Meta<typeof CellPointInfo> = {
  title: "cx/CellPointInfo",
  component: CellPointInfo as never,
  parameters: {
    controls: {
      include: ["caption01", "caption02", "title", "value", "variants"],
    },
  },
  argTypes: {
    caption01: { control: "text" },
    caption02: { control: "text" },
    title: { control: "text" },
    value: { control: "text" },
    variants: { control: "select", options: variants },
  },
  args: {
    caption01: "2026.01.01",
    caption02: "Caption",
    title: "Title",
    value: "99,999원",
    variants: "Add",
  },
};
export default meta;
type Story = StoryObj<typeof CellPointInfo>;

export const Default: Story = {};

export const AllVariants: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div style={{ display: "grid", gap: 20, width: 353 }}>
      {variants.map((variant) => (
        <CellPointInfo key={variant} variants={variant} />
      ))}
    </div>
  ),
};
