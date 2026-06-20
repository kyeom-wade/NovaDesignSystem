import type { Meta, StoryObj } from "@storybook/react-vite";
import { Appbar } from "@cx/components";

const meta: Meta<typeof Appbar> = {
  title: "cx/Appbar",
  component: Appbar as never,
  parameters: {
    controls: {
      include: ["leftItem", "pageTitle", "rightItem", "title", "variants"],
    },
  },
  argTypes: {
    leftItem: { control: "boolean" },
    pageTitle: { control: "text" },
    rightItem: { control: "boolean" },
    title: { control: "boolean" },
    variants: { control: "select", options: ["Default", "Inverse"] },
  },
  args: {
    leftItem: true,
    pageTitle: "PageTitle",
    rightItem: true,
    title: true,
    variants: "Default",
  },
};
export default meta;
type Story = StoryObj<typeof Appbar>;

export const Default: Story = {};
