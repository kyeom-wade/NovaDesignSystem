import type { Meta, StoryObj } from "@storybook/react-vite";
import { ButtonItem } from "@cx/components";

const meta: Meta<typeof ButtonItem> = {
  title: "cx/ButtonItem",
  component: ButtonItem as never,
  argTypes: {
    variants: {
      control: "select",
      options: ["Primary", "Secondary", "Ouline"],
    },
    variant: { control: false },
    size: {
      control: "select",
      options: ["Small", "Medium", "Large", "XLarge"],
    },
    state: {
      control: "select",
      options: ["Default", "Loading", "Disabled"],
    },
    danger: { control: "boolean" },
    icon: { control: "boolean" },
    showIcon: { control: false },
    label: { control: "text" },
  },
  args: {
    label: "Label",
    variants: "Primary",
    size: "XLarge",
    state: "Default",
    danger: false,
    icon: true,
  },
};
export default meta;
type Story = StoryObj<typeof ButtonItem>;

export const Default: Story = {};

const VARIANTS = ["Primary", "Secondary", "Ouline"] as const;
const SIZES = ["XLarge", "Large", "Medium", "Small"] as const;
const STATES = ["Default", "Loading", "Disabled"] as const;

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 48, padding: 24 }}>
      {SIZES.map((size) => (
        <div key={size}>
          <p style={{ marginBottom: 12, fontSize: 12, color: "#888", fontWeight: 600 }}>
            Size: {size}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {STATES.map((state) => (
              <div key={state} style={{ display: "flex", gap: 20, flexWrap: "wrap", alignItems: "center" }}>
                {VARIANTS.map((variants) => (
                  <ButtonItem
                    key={`${size}-${state}-${variants}`}
                    variants={variants}
                    size={size}
                    state={state}
                    danger={false}
                    label="Label"
                    icon
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};

export const DangerOn: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 48, padding: 24 }}>
      {SIZES.map((size) => (
        <div key={size}>
          <p style={{ marginBottom: 12, fontSize: 12, color: "#888", fontWeight: 600 }}>
            Size: {size}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {STATES.map((state) => (
              <div key={state} style={{ display: "flex", gap: 20, flexWrap: "wrap", alignItems: "center" }}>
                {VARIANTS.map((variants) => (
                  <ButtonItem
                    key={`${size}-${state}-${variants}-danger`}
                    variants={variants}
                    size={size}
                    state={state}
                    danger
                    label="Label"
                    icon
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};

export const WithoutIcon: Story = {
  args: {
    icon: false,
  },
};
