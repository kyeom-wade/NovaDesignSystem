import type { Meta, StoryObj } from "@storybook/react-vite";
import { Thumbnail } from "@cx/components";

const meta: Meta<typeof Thumbnail> = {
  title: "cx/Thumbnail",
  component: Thumbnail as never,
  argTypes: {
    src: { control: "text" },
    alt: { control: "text" },
    dotCount: { control: "number" },
    activeIndex: { control: "number" },
    onDotClick: { control: false },
  },
  args: {
    src: "https://www.figma.com/api/mcp/asset/7dd2c32a-c2f4-44ac-b193-e948b7230443",
    alt: "상품 썸네일",
    dotCount: 6,
    activeIndex: 0,
  },
};
export default meta;
type Story = StoryObj<typeof Thumbnail>;

export const Default: Story = {};

export const SingleDot: Story = {
  args: {
    dotCount: 1,
    activeIndex: 0,
    alt: "단일 이미지",
  },
};

export const ThreeDots: Story = {
  args: {
    dotCount: 3,
    activeIndex: 1,
    alt: "3장 이미지 중간 활성",
  },
};

export const LastActive: Story = {
  args: {
    dotCount: 6,
    activeIndex: 5,
    alt: "마지막 페이지 활성",
  },
};

export const DotCounts: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, padding: 16 }}>
      {[1, 2, 3, 4, 6].map((count) => (
        <div key={count}>
          <p style={{ margin: "0 0 8px", fontSize: 12, color: "#666" }}>dotCount: {count}</p>
          <Thumbnail {...args} dotCount={count} activeIndex={0} />
        </div>
      ))}
    </div>
  ),
};

export const ActiveIndexVariants: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, padding: 16 }}>
      {[0, 1, 2, 3, 4, 5].map((idx) => (
        <div key={idx}>
          <p style={{ margin: "0 0 8px", fontSize: 12, color: "#666" }}>activeIndex: {idx}</p>
          <Thumbnail {...args} dotCount={6} activeIndex={idx} />
        </div>
      ))}
    </div>
  ),
};
