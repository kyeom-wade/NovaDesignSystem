import type { Meta, StoryObj } from "@storybook/react-vite";
import { CheckboxItem } from "@cx/components";

const meta: Meta<typeof CheckboxItem> = {
  title: "cx/CheckboxItem",
  component: CheckboxItem as never,
  parameters: {
    controls: {
      include: ["selection", "state", "variant"],
    },
  },
  argTypes: {
    selection: { control: "boolean" },
    state: { control: "select", options: ["Default", "Disabled"] },
    variant: { control: "select", options: ["Circle", "Line"] },
  },
  args: {
    selection: false,
    state: "Default",
    variant: "Circle",
  },
};
export default meta;
type Story = StoryObj<typeof CheckboxItem>;

export const Default: Story = {};

export const AllVariants: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        <CheckboxItem variant="Circle" state="Default" selection={false} />
        <CheckboxItem variant="Circle" state="Disabled" selection={false} />
        <CheckboxItem variant="Circle" state="Default" selection />
        <CheckboxItem variant="Circle" state="Disabled" selection />
      </div>
      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        <CheckboxItem variant="Line" state="Default" selection={false} />
        <CheckboxItem variant="Line" state="Disabled" selection={false} />
        <CheckboxItem variant="Line" state="Default" selection />
      </div>
    </div>
  ),
};
