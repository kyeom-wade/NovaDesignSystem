import type { Meta, StoryObj } from "@storybook/react-vite";
import { TitleTextRightItem } from "@cx/components";

const meta: Meta<typeof TitleTextRightItem> = {
  title: "cx/TitleTextRightItem",
  component: TitleTextRightItem as never,
  argTypes: {
    variants: { control: "select", options: ["Icon", "Badge"] },
    badgeLabel: { control: "text" },
    iconLabel: { control: "text" },
    className: { control: false },
  },
  args: {
    variants: "Icon",
    badgeLabel: "Label",
    iconLabel: "정보",
  },
};

export default meta;
type Story = StoryObj<typeof TitleTextRightItem>;

export const Default: Story = {};

export const Icon: Story = {
  args: {
    variants: "Icon",
  },
};

export const Badge: Story = {
  args: {
    variants: "Badge",
    badgeLabel: "Label",
  },
};

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, padding: 24 }}>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>variants="Icon"</p>
        <TitleTextRightItem {...args} variants="Icon" />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>variants="Badge"</p>
        <TitleTextRightItem {...args} variants="Badge" badgeLabel="Label" />
      </div>
    </div>
  ),
};
