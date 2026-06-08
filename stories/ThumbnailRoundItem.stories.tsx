import type { Meta, StoryObj } from "@storybook/react-vite";
import { ThumbnailRoundItem } from "@cx/components";

const meta: Meta<typeof ThumbnailRoundItem> = {
  title: "cx/ThumbnailRoundItem",
  component: ThumbnailRoundItem as never,
  argTypes: {
    size: { control: "select", options: ["16", "20", "24", "40", "48", "64"] },
    dimMultiply: { control: "boolean" },
    src: { control: "text" },
    alt: { control: "text" },
    className: { control: false },
  },
  args: {
    size: "40",
    dimMultiply: false,
    src: "https://picsum.photos/seed/nova/200/200",
    alt: "썸네일 이미지",
  },
};
export default meta;
type Story = StoryObj<typeof ThumbnailRoundItem>;

export const Default: Story = {};

export const NoImage: Story = {
  args: {
    src: undefined,
    alt: "",
  },
};

export const WithDimOverlay: Story = {
  args: {
    dimMultiply: true,
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "24px", alignItems: "center", padding: "24px", flexWrap: "wrap" }}>
      {(["16", "20", "24", "40", "48", "64"] as const).map((size) => (
        <div key={size} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
          <ThumbnailRoundItem {...args} size={size} />
          <p style={{ margin: 0, fontSize: "12px", color: "#666" }}>{size}px</p>
        </div>
      ))}
    </div>
  ),
};

export const SizesWithDim: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "24px", alignItems: "center", padding: "24px", flexWrap: "wrap" }}>
      {(["16", "20", "24", "40", "48", "64"] as const).map((size) => (
        <div key={size} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
          <ThumbnailRoundItem {...args} size={size} dimMultiply />
          <p style={{ margin: 0, fontSize: "12px", color: "#666" }}>{size}px + 딤</p>
        </div>
      ))}
    </div>
  ),
};

export const States: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "32px", alignItems: "center", padding: "24px", flexWrap: "wrap" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
        <ThumbnailRoundItem {...args} dimMultiply={false} />
        <p style={{ margin: 0, fontSize: "12px", color: "#666" }}>기본</p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
        <ThumbnailRoundItem {...args} dimMultiply />
        <p style={{ margin: 0, fontSize: "12px", color: "#666" }}>딤 오버레이</p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
        <ThumbnailRoundItem {...args} src={undefined} />
        <p style={{ margin: 0, fontSize: "12px", color: "#666" }}>이미지 없음</p>
      </div>
    </div>
  ),
  args: {
    size: "48",
  },
};
