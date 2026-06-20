import type { Meta, StoryObj } from "@storybook/react-vite";
import { CellRightItem } from "@cx/components";

const variants = [
  "Icon",
  "ButtonIcon",
  "Text",
  "TextButton",
  "TextIcon",
  "ButtonSmall",
  "LevelBadge",
  "Switch",
] as const;

const meta: Meta<typeof CellRightItem> = {
  title: "cx/CellRightItem",
  component: CellRightItem as never,
  parameters: {
    controls: {
      include: ["variants"],
    },
  },
  argTypes: {
    variants: { control: "select", options: variants },
  },
  args: {
    variants: "Icon",
  },
};
export default meta;
type Story = StoryObj<typeof CellRightItem>;

export const Default: Story = {};

export const AllVariants: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "96px 1fr",
        rowGap: 16,
        columnGap: 16,
        alignItems: "center",
        width: 220,
      }}
    >
      {variants.map((variant) => (
        <div key={variant} style={{ display: "contents" }}>
          <span style={{ color: "rgba(12, 27, 65, 0.67)", fontSize: 12, lineHeight: 1.3 }}>
            {variant}
          </span>
          <CellRightItem variants={variant} />
        </div>
      ))}
    </div>
  ),
};
