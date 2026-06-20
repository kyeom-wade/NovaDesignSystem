import type { Meta, StoryObj } from "@storybook/react-vite";
import { ButtonIconItem, IconArrow, IconInfo } from "@cx/components";

const meta: Meta<typeof ButtonIconItem> = {
  title: "cx/ButtonIconItem",
  component: ButtonIconItem as never,
  argTypes: {
    variant: { control: "select", options: ["Large", "Medium", "Small"] },
    icon: { control: false },
    children: { control: false },
    className: { control: false },
  },
  args: {
    variant: "Large",
  },
};
export default meta;
type Story = StoryObj<typeof ButtonIconItem>;

export const Default: Story = {};

export const Variants: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 24, alignItems: "center", padding: 24 }}>
      {(["Large", "Medium", "Small"] as const).map((variant) => (
        <ButtonIconItem key={variant} {...args} variant={variant} />
      ))}
    </div>
  ),
};

export const WithCustomIcon: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 24, alignItems: "center", padding: 24 }}>
      <ButtonIconItem {...args} variant="Large" icon={<IconArrow variant="right" />} />
      <ButtonIconItem {...args} variant="Medium">
        <IconInfo size={16} />
      </ButtonIconItem>
      <ButtonIconItem {...args} variant="Small" icon={<IconArrow variant="right" />} />
    </div>
  ),
};
