import type { Meta, StoryObj } from "@storybook/react-vite";
import { CellPayment } from "@cx/components";

const meta: Meta<typeof CellPayment> = {
  title: "cx/CellPayment",
  component: CellPayment as never,
  parameters: {
    controls: {
      include: ["badge", "card", "label", "thumbnail"],
    },
  },
  argTypes: {
    badge: { control: "boolean" },
    card: { control: "boolean" },
    label: { control: "text" },
    thumbnail: { control: "boolean" },
  },
  args: {
    badge: true,
    card: true,
    label: "Label",
    thumbnail: true,
  },
};
export default meta;
type Story = StoryObj<typeof CellPayment>;

export const Default: Story = {};
