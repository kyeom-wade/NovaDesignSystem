import type { Meta, StoryObj } from "@storybook/react-vite";
import { TabFixed } from "@cx/components";

const meta: Meta<typeof TabFixed> = {
  title: "cx/TabFixed",
  component: TabFixed as never,
  argTypes: {
    variants: { control: "select", options: ["1Tab", "2Tab", "3Tab", "4Tab"] },
    selectedIndex: { control: "number" },
    labels: { control: "object" },
    onTabChange: { control: false },
  },
  args: {
    selectedIndex: 0,
    labels: ["Label", "Label", "Label", "Label"],
  },
};
export default meta;
type Story = StoryObj<typeof TabFixed>;

export const Default: Story = {
  render: (args) => (
    <div
      style={{
        width: 393,
        height: 336,
        boxSizing: "border-box",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: 20,
      }}
    >
      <TabFixed {...args} variants="1Tab" />
      <TabFixed {...args} variants="2Tab" />
      <TabFixed {...args} variants="3Tab" />
      <TabFixed {...args} variants="4Tab" />
    </div>
  ),
};
