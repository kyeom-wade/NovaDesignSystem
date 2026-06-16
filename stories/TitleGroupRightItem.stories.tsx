import type { Meta, StoryObj } from "@storybook/react-vite";
import { TitleGroupRightItem } from "@cx/components";

const meta: Meta<typeof TitleGroupRightItem> = {
  title: "cx/TitleGroupRightItem",
  component: TitleGroupRightItem as never,
  argTypes: {
    variant: {
      control: "select",
      options: [
        "Icon",
        "TextButton",
        "TextIconSecondary",
        "Button",
        "ButtonIcon",
      ],
    },
    text: { control: "text" },
    buttonLabel: { control: "text" },
    onClick: { control: false },
    className: { control: false },
  },
  args: {
    variant: "Icon",
    text: "Label",
    buttonLabel: "Label",
  },
};
export default meta;
type Story = StoryObj<typeof TitleGroupRightItem>;

export const Default: Story = {};

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, padding: 24 }}>
      <div>
        <p style={{ fontSize: 12, color: "#888", marginBottom: 8 }}>Icon</p>
        <TitleGroupRightItem {...args} variant="Icon" />
      </div>
      <div>
        <p style={{ fontSize: 12, color: "#888", marginBottom: 8 }}>TextButton</p>
        <TitleGroupRightItem {...args} variant="TextButton" text="Label" />
      </div>
      <div>
        <p style={{ fontSize: 12, color: "#888", marginBottom: 8 }}>TextIconSecondary</p>
        <TitleGroupRightItem {...args} variant="TextIconSecondary" text="Label" />
      </div>
      <div>
        <p style={{ fontSize: 12, color: "#888", marginBottom: 8 }}>Button</p>
        <TitleGroupRightItem {...args} variant="Button" buttonLabel="Label" />
      </div>
      <div>
        <p style={{ fontSize: 12, color: "#888", marginBottom: 8 }}>ButtonIcon</p>
        <TitleGroupRightItem {...args} variant="ButtonIcon" />
      </div>
    </div>
  ),
};

export const IconVariant: Story = {
  args: {
    variant: "Icon",
  },
};

export const TextButtonVariant: Story = {
  args: {
    variant: "TextButton",
    text: "Label",
  },
};

export const TextIconSecondary: Story = {
  args: {
    variant: "TextIconSecondary",
    text: "Label",
  },
};

export const ButtonVariant: Story = {
  args: {
    variant: "Button",
    buttonLabel: "Label",
  },
};

export const ButtonIconVariant: Story = {
  args: {
    variant: "ButtonIcon",
  },
};
