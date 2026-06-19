import type { Meta, StoryObj } from "@storybook/react-vite";
import { CellText } from "@cx/components";

const meta: Meta<typeof CellText> = {
  title: "cx/CellText",
  component: CellText as never,
  parameters: {
    controls: {
      include: ["description", "rightItem", "size", "title", "variants"],
    },
  },
  argTypes: {
    description: { control: "text" },
    rightItem: { control: "boolean" },
    size: { control: "select", options: ["15", "16"] },
    title: { control: "text" },
    variants: { control: "select", options: ["Text", "Title"] },
  },
  args: {
    description: "내용 들어가는 부분",
    rightItem: true,
    size: "16",
    title: "타이틀",
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
        <CellText variants="Title" size="16" rightItem title="타이틀" />
        <CellText variants="Text" size="16" rightItem description="내용 들어가는 부분" />
        <CellText variants="Title" size="15" rightItem title="타이틀" />
        <CellText variants="Text" size="15" rightItem description="내용 들어가는 부분" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <CellText variants="Title" size="16" rightItem={false} title="타이틀" />
        <CellText variants="Text" size="16" rightItem={false} description="내용 들어가는 부분" />
        <CellText variants="Title" size="15" rightItem={false} title="타이틀" />
        <CellText variants="Text" size="15" rightItem={false} description="내용 들어가는 부분" />
      </div>
    </div>
  ),
};
