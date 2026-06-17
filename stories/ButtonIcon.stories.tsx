import type { Meta, StoryObj } from "@storybook/react-vite";
import { ButtonIcon, IconArrow, IconInfo } from "@cx/components";

const meta: Meta<typeof ButtonIcon> = {
  title: "cx/ButtonIcon",
  component: ButtonIcon as never,
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
type Story = StoryObj<typeof ButtonIcon>;

export const Default: Story = {};

export const Variants: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 24, alignItems: "center", padding: 24 }}>
      {(["Large", "Medium", "Small"] as const).map((variant) => (
        <ButtonIcon key={variant} {...args} variant={variant} />
      ))}
    </div>
  ),
};

export const WithCustomIcon: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 24, alignItems: "center", padding: 24 }}>
      <ButtonIcon {...args} variant="Large" icon={<IconArrow variant="right" />} />
      <ButtonIcon {...args} variant="Medium">
        <IconInfo size={16} />
      </ButtonIcon>
      <ButtonIcon {...args} variant="Small" icon={<IconArrow variant="right" />} />
    </div>
  ),
};
