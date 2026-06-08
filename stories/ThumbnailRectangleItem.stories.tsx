import type { Meta, StoryObj } from "@storybook/react-vite";
import { ThumbnailRectangleItem } from "@cx/components";

const meta: Meta<typeof ThumbnailRectangleItem> = {
  title: "cx/ThumbnailRectangleItem",
  component: ThumbnailRectangleItem as never,
  argTypes: {
    variant: {
      control: "select",
      options: ["48*72", "128*192", "393*480"],
    },
    src: { control: "text" },
    alt: { control: "text" },
    dimMultiply: { control: "boolean" },
  },
  args: {
    variant: "128*192",
    src: "https://picsum.photos/seed/nova/128/192",
    alt: "썸네일 이미지",
    dimMultiply: false,
  },
};
export default meta;
type Story = StoryObj<typeof ThumbnailRectangleItem>;

export const Default: Story = {};

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 24, flexWrap: "wrap", alignItems: "flex-end", padding: 16 }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
        <ThumbnailRectangleItem {...args} variant="48*72" src="https://picsum.photos/seed/nova1/48/72" />
        <p style={{ margin: 0, fontSize: 12, color: "#666" }}>48×72 (소형)</p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
        <ThumbnailRectangleItem {...args} variant="128*192" src="https://picsum.photos/seed/nova2/128/192" />
        <p style={{ margin: 0, fontSize: 12, color: "#666" }}>128×192 (중형)</p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
        <ThumbnailRectangleItem {...args} variant="393*480" src="https://picsum.photos/seed/nova3/393/480" />
        <p style={{ margin: 0, fontSize: 12, color: "#666" }}>393×480 (대형 / 풀블리드)</p>
      </div>
    </div>
  ),
};

export const DimMultiply: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 24, flexWrap: "wrap", alignItems: "flex-end", padding: 16 }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
        <ThumbnailRectangleItem {...args} dimMultiply={false} src="https://picsum.photos/seed/nova4/128/192" />
        <p style={{ margin: 0, fontSize: 12, color: "#666" }}>딤 없음</p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
        <ThumbnailRectangleItem {...args} dimMultiply={true} src="https://picsum.photos/seed/nova4/128/192" />
        <p style={{ margin: 0, fontSize: 12, color: "#666" }}>딤 적용</p>
      </div>
    </div>
  ),
};

export const Small: Story = {
  args: {
    variant: "48*72",
    src: "https://picsum.photos/seed/nova5/48/72",
    alt: "소형 썸네일",
  },
};

export const Large: Story = {
  args: {
    variant: "393*480",
    src: "https://picsum.photos/seed/nova6/393/480",
    alt: "대형 썸네일",
  },
};
