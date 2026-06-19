import type { Meta, StoryObj } from "@storybook/react-vite";
import { CellText } from "@cx/components";

const meta: Meta<typeof CellText> = {
  title: "cx/CellText",
  component: CellText as never,
  parameters: {
    controls: {
      include: ["rightItem", "size", "variants"],
    },
  },
  argTypes: {
    rightItem: { control: "boolean" },
    size: { control: "select", options: ["15", "16"] },
    variants: { control: "select", options: ["Text", "Title"] },
  },
  args: {
    rightItem: true,
    size: "16",
    variants: "Title",
  },
};
export default meta;
type Story = StoryObj<typeof CellText>;

export const Default: Story = {};

export const AllVariants: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, width: 353 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <CellText variants="Title" size="16" rightItem />
        <CellText variants="Text" size="16" rightItem />
        <CellText variants="Title" size="15" rightItem />
        <CellText variants="Text" size="15" rightItem />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <CellText variants="Title" size="16" rightItem={false} />
        <CellText variants="Text" size="16" rightItem={false} />
        <CellText variants="Title" size="15" rightItem={false} />
        <CellText variants="Text" size="15" rightItem={false} />
      </div>
    </div>
  ),
};
