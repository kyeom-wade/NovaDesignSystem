import type { Meta, StoryObj } from "@storybook/react-vite";
import { Banner } from "@cx/components";

const meta: Meta<typeof Banner> = {
  title: "cx/Banner",
  component: Banner as never,
  decorators: [
    (Story) => (
      <div style={{ width: 393 }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    variants: { control: "select", options: ["Small", "Medium"] },
    indicator: { control: "boolean" },
    title: { control: "text" },
    subtitle: { control: "text" },
    imageSrc: { control: "text" },
    imageUrl: { table: { disable: true } },
    subText: { table: { disable: true } },
    imageAlt: { control: "text" },
    activeIndex: { control: { type: "number", min: 0, max: 5 } },
    onClick: { control: false },
    className: { control: false },
  },
  args: {
    variants: "Small",
    indicator: true,
    title: "Title",
    subtitle: "Subtitle",
    imageSrc: "https://via.placeholder.com/58x40",
    imageAlt: "배너 이미지",
    activeIndex: 0,
  },
};
export default meta;
type Story = StoryObj<typeof Banner>;

export const Default: Story = {};

export const Medium: Story = {
  args: {
    variants: "Medium",
    imageSrc: "https://via.placeholder.com/80x80",
  },
};

export const IndicatorOff: Story = {
  args: {
    indicator: false,
  },
};

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 32, padding: 16 }}>
      <Banner {...args} variants="Small" indicator title="Title" subtitle="Subtitle" imageSrc="https://via.placeholder.com/58x40" />
      <Banner {...args} variants="Small" indicator={false} title="Title" subtitle="Subtitle" imageSrc="https://via.placeholder.com/58x40" />
      <Banner {...args} variants="Medium" indicator title="Title" subtitle="Subtitle" imageSrc="https://via.placeholder.com/80x80" />
      <Banner {...args} variants="Medium" indicator={false} title="Title" subtitle="Subtitle" imageSrc="https://via.placeholder.com/80x80" />
    </div>
  ),
};
