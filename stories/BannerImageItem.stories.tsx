import type { Meta, StoryObj } from "@storybook/react-vite";
import { BannerImageItem } from "@cx/components";

const meta: Meta<typeof BannerImageItem> = {
  title: "cx/BannerImageItem",
  component: BannerImageItem as never,
  decorators: [
    (Story) => (
      <div style={{ width: 353 }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    variants: { control: "select", options: ["Medium", "Small"] },
    background: { control: "boolean" },
    imageSrc: { control: "text" },
    imageAlt: { control: "text" },
    ariaLabel: { control: "text" },
    variant: { table: { disable: true } },
    showBackground: { table: { disable: true } },
    children: { control: false },
    className: { control: false },
  },
  args: {
    variants: "Medium",
    background: true,
    imageSrc: "https://via.placeholder.com/80x80",
    imageAlt: "상품 이미지",
    ariaLabel: "배너 이미지 아이템",
  },
};
export default meta;
type Story = StoryObj<typeof BannerImageItem>;

export const Default: Story = {};

export const Small: Story = {
  args: {
    variants: "Small",
    imageSrc: "https://via.placeholder.com/58x40",
  },
};

export const WithoutBackground: Story = {
  args: {
    background: false,
  },
};

export const NoImage: Story = {
  args: {
    imageSrc: undefined,
  },
};

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, padding: 16 }}>
      <BannerImageItem {...args} variants="Medium" background={true} imageSrc="https://via.placeholder.com/80x80" />
      <BannerImageItem {...args} variants="Medium" background={false} imageSrc="https://via.placeholder.com/80x80" />
      <BannerImageItem {...args} variants="Small" background={true} imageSrc="https://via.placeholder.com/58x40" />
      <BannerImageItem {...args} variants="Small" background={false} imageSrc="https://via.placeholder.com/58x40" />
    </div>
  ),
};
