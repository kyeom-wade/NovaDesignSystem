import type { Meta, StoryObj } from "@storybook/react-vite";
import { ButtonTextItem } from "@cx/components";

const meta: Meta<typeof ButtonTextItem> = {
  title: "cx/ButtonTextItem",
  component: ButtonTextItem as never,
  argTypes: {
    variants: { control: "select", options: ["Text", "Text+Icon"] },
    variant: { control: false },
    size: { control: "select", options: ["Small", "Medium", "Large", "XLarge"] },
    state: { control: "select", options: ["Default", "Disabled"] },
    danger: { control: "boolean" },
    label: { control: "text" },
    onClick: { control: false },
    className: { control: false },
  },
  args: {
    variants: "Text",
    size: "XLarge",
    state: "Default",
    danger: false,
    label: "Label",
  },
};
export default meta;
type Story = StoryObj<typeof ButtonTextItem>;

export const Default: Story = {};

const VARIANTS = ["Text", "Text+Icon"] as const;
const SIZES = ["XLarge", "Large", "Medium", "Small"] as const;
const STATES = ["Default", "Disabled"] as const;

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 48, padding: 24 }}>
      {SIZES.map((size) => (
        <div key={size}>
          <p style={{ margin: "0 0 12px", fontSize: 12, color: "#888", fontWeight: 600 }}>
            Size: {size}
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, max-content)", gap: "28px 40px", alignItems: "center" }}>
            {STATES.map((state) =>
              VARIANTS.map((variants) => (
                <ButtonTextItem
                  key={`${size}-${state}-${variants}`}
                  variants={variants}
                  size={size}
                  state={state}
                  label="Label"
                />
              )),
            )}
            {STATES.map((state) =>
              VARIANTS.map((variants) => (
                <ButtonTextItem
                  key={`${size}-${state}-${variants}-danger`}
                  variants={variants}
                  size={size}
                  state={state}
                  danger
                  label="Label"
                />
              )),
            )}
          </div>
        </div>
      ))}
    </div>
  ),
};

export const TextIcon: Story = {
  args: {
    variants: "Text+Icon",
  },
};

export const Danger: Story = {
  args: {
    danger: true,
  },
};
