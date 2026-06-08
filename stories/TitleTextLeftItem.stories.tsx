import type { Meta, StoryObj } from "@storybook/react-vite";
import { TitleTextLeftItem } from "@cx/components";

const meta: Meta<typeof TitleTextLeftItem> = {
  title: "cx/TitleTextLeftItem",
  component: TitleTextLeftItem as never,
  argTypes: {
    variant: { control: "select", options: ["Text", "Icon", "Badge"] },
    textValue: { control: "text" },
    iconAlt: { control: "text" },
    badgeLabel: { control: "text" },
    className: { control: false },
  },
  args: {
    variant: "Text",
    textValue: "1",
    iconAlt: "정보 아이콘",
    badgeLabel: "NEW",
  },
};
export default meta;
type Story = StoryObj<typeof TitleTextLeftItem>;

export const Default: Story = {};

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, padding: 24 }}>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>variant="Text"</p>
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <TitleTextLeftItem {...args} variant="Text" textValue="1" />
          <TitleTextLeftItem {...args} variant="Text" textValue="2" />
          <TitleTextLeftItem {...args} variant="Text" textValue="10" />
        </div>
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>variant="Icon"</p>
        <TitleTextLeftItem {...args} variant="Icon" iconAlt="정보 아이콘" />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>variant="Badge"</p>
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <TitleTextLeftItem {...args} variant="Badge" badgeLabel="NEW" />
          <TitleTextLeftItem {...args} variant="Badge" badgeLabel="HOT" />
          <TitleTextLeftItem {...args} variant="Badge" badgeLabel="추천" />
        </div>
      </div>
    </div>
  ),
};

export const TextVariant: Story = {
  args: {
    variant: "Text",
    textValue: "3",
  },
};

export const IconVariant: Story = {
  args: {
    variant: "Icon",
    iconAlt: "정보 아이콘",
  },
};

export const BadgeVariant: Story = {
  args: {
    variant: "Badge",
    badgeLabel: "NEW",
  },
};
