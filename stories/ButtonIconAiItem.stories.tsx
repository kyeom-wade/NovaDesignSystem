import type { Meta, StoryObj } from "@storybook/react-vite";
import { ButtonIconAiItem, IconArrow, IconInfo } from "@cx/components";

const meta: Meta<typeof ButtonIconAiItem> = {
  title: "cx/ButtonIconAiItem",
  component: ButtonIconAiItem as never,
  argTypes: {
    icon: { control: false },
    children: { control: false },
    className: { control: false },
  },
};
export default meta;
type Story = StoryObj<typeof ButtonIconAiItem>;

export const Default: Story = {};

export const WithCustomIcon: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 24, alignItems: "center", padding: 24 }}>
      <ButtonIconAiItem {...args} icon={<IconArrow variant="right" />} />
      <ButtonIconAiItem {...args}>
        <IconInfo size={24} />
      </ButtonIconAiItem>
    </div>
  ),
};
