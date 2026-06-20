import type { Meta, StoryObj } from "@storybook/react-vite";
import { CheckboxLeftTextItem } from "@cx/components";

const variants = ["Circle", "Line"] as const;
const sizes = ["Medium", "Small"] as const;

const meta: Meta<typeof CheckboxLeftTextItem> = {
  title: "cx/CheckboxLeftTextItem",
  component: CheckboxLeftTextItem as never,
  parameters: {
    controls: {
      include: ["checked", "label", "size", "state", "variants"],
    },
  },
  argTypes: {
    checked: { control: "boolean" },
    label: { control: "text" },
    size: { control: "select", options: sizes },
    state: { control: "boolean" },
    variants: { control: "select", options: variants },
  },
  args: {
    checked: false,
    label: "Label",
    size: "Medium",
    state: true,
    variants: "Circle",
  },
};
export default meta;
type Story = StoryObj<typeof CheckboxLeftTextItem>;

export const Default: Story = {};

export const AllVariants: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(8, 94px)", gap: 16 }}>
      {sizes.map((size) =>
        variants.flatMap((variant) =>
          [true, false].flatMap((state) =>
            [false, true].map((checked) => (
              <CheckboxLeftTextItem
                key={`${variant}-${size}-${state}-${checked}`}
                variants={variant}
                size={size}
                state={state}
                checked={checked}
              />
            ))
          )
        )
      )}
    </div>
  ),
};
