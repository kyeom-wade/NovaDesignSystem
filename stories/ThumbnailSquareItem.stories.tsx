import type { Meta, StoryObj } from "@storybook/react-vite";
import { ThumbnailSquareItem } from "@cx/components";

const meta: Meta<typeof ThumbnailSquareItem> = {
  title: "cx/ThumbnailSquareItem",
  component: ThumbnailSquareItem as never,
  argTypes: {
    size: {
      control: "select",
      options: ["40", "48", "64", "128", "160", "172"],
    },
    dimMultiply: { control: "boolean" },
    src: { control: "text" },
    alt: { control: "text" },
  },
  args: {
    size: "64",
    dimMultiply: false,
    src: "https://www.figma.com/api/mcp/asset/bb6f546f-472a-4fc7-812f-bbf3d1b0becf",
    alt: "썸네일 이미지",
  },
};
export default meta;
type Story = StoryObj<typeof ThumbnailSquareItem>;

export const Default: Story = {};

export const WithDimOverlay: Story = {
  args: {
    dimMultiply: true,
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 24, padding: 24, alignItems: "flex-end" }}>
      {(["40", "48", "64", "128", "160", "172"] as const).map((size) => (
        <div key={size} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <ThumbnailSquareItem {...args} size={size} />
          <p style={{ margin: 0, fontSize: 11, color: "#888" }}>{size}px</p>
        </div>
      ))}
    </div>
  ),
};

export const States: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, padding: 24 }}>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>기본 (dimMultiply 없음)</p>
        <ThumbnailSquareItem {...args} size="64" dimMultiply={false} />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>딤 오버레이 적용 (dimMultiply)</p>
        <ThumbnailSquareItem {...args} size="64" dimMultiply={true} />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>큰 사이즈 128px (중앙 정렬 이미지)</p>
        <ThumbnailSquareItem {...args} size="128" dimMultiply={false} />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>큰 사이즈 128px + 딤 오버레이</p>
        <ThumbnailSquareItem {...args} size="128" dimMultiply={true} />
      </div>
    </div>
  ),
};
