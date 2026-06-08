import type { Meta, StoryObj } from "@storybook/react-vite";
import { Divider } from "@cx/components";

const meta: Meta<typeof Divider> = {
  title: "cx/Divider",
  component: Divider as never,
  argTypes: {
    variant: { control: "select", options: ["contents", "section"] },
    className: { control: false },
  },
  args: {
    variant: "contents",
  },
};
export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 32, padding: 24 }}>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>contents (1px)</p>
        <Divider variant="contents" />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>section (4px)</p>
        <Divider variant="section" />
      </div>
    </div>
  ),
};
