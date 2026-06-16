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
        "Text",
        "TextIconSecondary",
        "TextIconPrimary",
        "TextItemButton",
        "Button",
      ],
    },
    text: { control: "text" },
    count: { control: "text" },
    buttonLabel: { control: "text" },
    onClick: { control: false },
    className: { control: false },
  },
  args: {
    variant: "Icon",
    text: "전체보기",
    count: "3개",
    buttonLabel: "버튼",
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
        <TitleGroupRightItem {...args} variant="TextButton" text="전체보기" />
      </div>
      <div>
        <p style={{ fontSize: 12, color: "#888", marginBottom: 8 }}>Text</p>
        <TitleGroupRightItem {...args} variant="Text" text="설명 텍스트" />
      </div>
      <div>
        <p style={{ fontSize: 12, color: "#888", marginBottom: 8 }}>TextIconSecondary</p>
        <TitleGroupRightItem {...args} variant="TextIconSecondary" text="더보기" />
      </div>
      <div>
        <p style={{ fontSize: 12, color: "#888", marginBottom: 8 }}>TextIconPrimary</p>
        <TitleGroupRightItem {...args} variant="TextIconPrimary" text="접기" />
      </div>
      <div>
        <p style={{ fontSize: 12, color: "#888", marginBottom: 8 }}>TextItemButton</p>
        <TitleGroupRightItem {...args} variant="TextItemButton" text="선택됨" count="3개" />
      </div>
      <div>
        <p style={{ fontSize: 12, color: "#888", marginBottom: 8 }}>Button</p>
        <TitleGroupRightItem {...args} variant="Button" buttonLabel="편집" />
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
    text: "전체보기",
  },
};

export const TextVariant: Story = {
  args: {
    variant: "Text",
    text: "설명 텍스트",
  },
};

export const TextIconSecondary: Story = {
  args: {
    variant: "TextIconSecondary",
    text: "더보기",
  },
};

export const TextIconPrimary: Story = {
  args: {
    variant: "TextIconPrimary",
    text: "접기",
  },
};

export const TextItemButton: Story = {
  args: {
    variant: "TextItemButton",
    text: "선택됨",
    count: "5개",
  },
};

export const ButtonVariant: Story = {
  args: {
    variant: "Button",
    buttonLabel: "편집",
  },
};
