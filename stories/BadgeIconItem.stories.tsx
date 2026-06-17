import type { Meta, StoryObj } from "@storybook/react-vite";
import { BadgeIconItem } from "@cx/components";

const meta: Meta<typeof BadgeIconItem> = {
  title: "cx/BadgeIconItem",
  component: BadgeIconItem as never,
  argTypes: {
    label: { control: "text" },
    caption: { control: "text" },
    subtext: {
      control: "select",
      options: ["Subtext2", "On"],
    },
    iconSrc: { control: "text" },
    iconAlt: { control: "text" },
    text: { table: { disable: true } },
    subText: { table: { disable: true } },
    showSubText: { table: { disable: true } },
    className: { control: false },
  },
  args: {
    label: "Label",
    caption: "Caption",
    subtext: "Subtext2",
    iconAlt: "아이콘",
  },
};
export default meta;
type Story = StoryObj<typeof BadgeIconItem>;

export const Default: Story = {};

export const WithSubText: Story = {
  args: {
    subtext: "On",
    label: "Label",
    caption: "Caption",
  },
};

export const States: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, padding: 24 }}>
      <BadgeIconItem {...args} subtext="Subtext2" label="Label" />
      <BadgeIconItem {...args} subtext="On" label="Label" caption="Caption" />
      <p style={{ margin: 0, fontSize: 12, color: "#888" }}>아이콘 URL 지정</p>
      <BadgeIconItem
        {...args}
        subtext="Subtext2"
        label="Label"
        iconSrc="https://via.placeholder.com/16"
        iconAlt="플레이스홀더"
      />
      <p style={{ margin: 0, fontSize: 12, color: "#888" }}>서브텍스트 + 아이콘 URL</p>
      <BadgeIconItem
        {...args}
        subtext="On"
        label="Label"
        caption="Caption"
        iconSrc="https://via.placeholder.com/16"
        iconAlt="카테고리"
      />
    </div>
  ),
};
