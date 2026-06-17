import type { Meta, StoryObj } from "@storybook/react-vite";
import { TitleGroupItem } from "@cx/components";

const meta: Meta<typeof TitleGroupItem> = {
  title: "cx/TitleGroupItem",
  component: TitleGroupItem as never,
  argTypes: {
    fontSize: {
      control: "select",
      options: ["16", "18"],
      description: "16: Accordion title, 18: Section title",
    },
    title: { control: "text" },
    subtitle: { control: "boolean" },
    subtitle2: { control: "text" },
    textRightItem: { control: "boolean" },
    rightItem: { control: "boolean" },
    badgeLabel: { control: "text" },
    rightLabel: { control: "text" },
    rightArrowVariant: {
      control: "select",
      options: ["up", "down", "left", "right"],
    },
    rightContent: { control: false },
    onClick: { control: false },
    onKeyDown: { control: false },
    role: { control: false },
    tabIndex: { control: false },
    className: { control: false },
  },
  args: {
    fontSize: "16",
    title: "Title",
    subtitle: true,
    subtitle2: "Subtitle",
    textRightItem: true,
    rightItem: true,
    badgeLabel: "Label",
    rightLabel: "Label",
    rightArrowVariant: "up",
  },
};
export default meta;
type Story = StoryObj<typeof TitleGroupItem>;

export const Default: Story = {};

export const FontSize18: Story = {
  args: {
    fontSize: "18",
  },
};

export const WithoutRightItem: Story = {
  args: {
    rightItem: false,
  },
};

export const WithoutSubtitle: Story = {
  args: {
    subtitle: false,
  },
};

export const WithoutTextRightItem: Story = {
  args: {
    textRightItem: false,
  },
};

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "16px", width: "353px" }}>
      <TitleGroupItem {...args} fontSize="16" title="Accordion title" />
      <TitleGroupItem {...args} fontSize="16" title="No subtitle" subtitle={false} />
      <TitleGroupItem {...args} fontSize="16" title="No right item" rightItem={false} />
      <TitleGroupItem {...args} fontSize="18" title="Section title" />
      <TitleGroupItem {...args} fontSize="18" title="No inline item" textRightItem={false} />
      <TitleGroupItem {...args} fontSize="18" title="No right item" rightItem={false} />
    </div>
  ),
};
