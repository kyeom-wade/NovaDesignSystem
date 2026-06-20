import type { Meta, StoryObj } from "@storybook/react-vite";
import { CellSheet } from "@cx/components";

const variants = ["Price", "Notice"] as const;

const meta: Meta<typeof CellSheet> = {
  title: "cx/CellSheet",
  component: CellSheet as never,
  parameters: {
    controls: {
      include: ["caption", "cellRightItem", "subtitle", "title", "value01", "value02", "variants"],
    },
  },
  argTypes: {
    caption: { control: "text" },
    cellRightItem: { control: "boolean" },
    subtitle: { control: "text" },
    title: { control: "text" },
    value01: { control: "text" },
    value02: { control: "text" },
    variants: { control: "select", options: variants },
  },
  args: {
    caption: "Caption",
    cellRightItem: true,
    subtitle: "Subtitle",
    title: "Title",
    value01: "99,999원",
    value02: "/Period",
    variants: "Price",
  },
};
export default meta;
type Story = StoryObj<typeof CellSheet>;

export const Default: Story = {};

export const AllVariants: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div style={{ display: "grid", gap: 16, width: 353 }}>
      {variants.map((variant) => (
        <CellSheet key={variant} variants={variant} cellRightItem />
      ))}
    </div>
  ),
};
