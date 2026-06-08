import type { Meta, StoryObj } from "@storybook/react-vite";
import { BannerImageItem } from "@cx/components";

const meta: Meta<typeof BannerImageItem> = {
  title: "cx/BannerImageItem",
  component: BannerImageItem as never,
  argTypes: {
    variant: { control: "select", options: ["Medium", "Small"] },
    showBackground: { control: "boolean" },
    imageSrc: { control: "text" },
    imageAlt: { control: "text" },
    children: { control: false },
    ariaLabel: { control: "text" },
  },
  args: {
    variant: "Medium",
    showBackground: false,
    imageSrc: "https://via.placeholder.com/80x80",
    imageAlt: "상품 이미지",
    ariaLabel: "배너 이미지 아이템",
  },
};
export default meta;
type Story = StoryObj<typeof BannerImageItem>;

export const Default: Story = {
  args: {
    children: (
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <p style={{ margin: 0, fontSize: 12, color: "#888" }}>라벨</p>
        <p style={{ margin: 0, fontSize: 16, fontWeight: 700 }}>상품명 텍스트</p>
        <p style={{ margin: 0, fontSize: 14, color: "#e00" }}>12,900원</p>
      </div>
    ),
  },
};

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, padding: 16 }}>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 13, color: "#555" }}>Medium (기본)</p>
        <BannerImageItem {...args} variant="Medium">
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <p style={{ margin: 0, fontSize: 12, color: "#888" }}>라벨</p>
            <p style={{ margin: 0, fontSize: 16, fontWeight: 700 }}>상품명 텍스트</p>
            <p style={{ margin: 0, fontSize: 14, color: "#e00" }}>12,900원</p>
          </div>
        </BannerImageItem>
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 13, color: "#555" }}>Small</p>
        <BannerImageItem {...args} variant="Small">
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <p style={{ margin: 0, fontSize: 11, color: "#888" }}>라벨</p>
            <p style={{ margin: 0, fontSize: 14, fontWeight: 700 }}>상품명 텍스트</p>
            <p style={{ margin: 0, fontSize: 12, color: "#e00" }}>9,900원</p>
          </div>
        </BannerImageItem>
      </div>
    </div>
  ),
};

export const WithBackground: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, padding: 16 }}>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 13, color: "#555" }}>Medium — 배경 있음</p>
        <BannerImageItem {...args} variant="Medium" showBackground={true}>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <p style={{ margin: 0, fontSize: 12, color: "#888" }}>설명 텍스트</p>
            <p style={{ margin: 0, fontSize: 16, fontWeight: 700 }}>제목 텍스트</p>
            <p style={{ margin: 0, fontSize: 14, color: "#e00" }}>19,900원</p>
          </div>
        </BannerImageItem>
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 13, color: "#555" }}>Small — 배경 있음</p>
        <BannerImageItem {...args} variant="Small" showBackground={true}>
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <p style={{ margin: 0, fontSize: 11, color: "#888" }}>설명 텍스트</p>
            <p style={{ margin: 0, fontSize: 14, fontWeight: 700 }}>제목 텍스트</p>
            <p style={{ margin: 0, fontSize: 12, color: "#e00" }}>7,500원</p>
          </div>
        </BannerImageItem>
      </div>
    </div>
  ),
};

export const NoImage: Story = {
  args: {
    imageSrc: undefined,
    variant: "Medium",
    children: (
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <p style={{ margin: 0, fontSize: 12, color: "#888" }}>이미지 없음</p>
        <p style={{ margin: 0, fontSize: 16, fontWeight: 700 }}>상품명 텍스트</p>
        <p style={{ margin: 0, fontSize: 14, color: "#e00" }}>5,900원</p>
      </div>
    ),
  },
};

export const VariantAndBackground: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, padding: 16 }}>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 13, color: "#555" }}>Medium / 배경 없음</p>
        <BannerImageItem {...args} variant="Medium" showBackground={false}>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <p style={{ margin: 0, fontSize: 12, color: "#888" }}>라벨</p>
            <p style={{ margin: 0, fontSize: 16, fontWeight: 700 }}>제목</p>
            <p style={{ margin: 0, fontSize: 14, color: "#e00" }}>15,000원</p>
          </div>
        </BannerImageItem>
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 13, color: "#555" }}>Medium / 배경 있음</p>
        <BannerImageItem {...args} variant="Medium" showBackground={true}>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <p style={{ margin: 0, fontSize: 12, color: "#888" }}>라벨</p>
            <p style={{ margin: 0, fontSize: 16, fontWeight: 700 }}>제목</p>
            <p style={{ margin: 0, fontSize: 14, color: "#e00" }}>15,000원</p>
          </div>
        </BannerImageItem>
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 13, color: "#555" }}>Small / 배경 없음</p>
        <BannerImageItem {...args} variant="Small" showBackground={false}>
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <p style={{ margin: 0, fontSize: 11, color: "#888" }}>라벨</p>
            <p style={{ margin: 0, fontSize: 14, fontWeight: 700 }}>제목</p>
            <p style={{ margin: 0, fontSize: 12, color: "#e00" }}>9,900원</p>
          </div>
        </BannerImageItem>
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 13, color: "#555" }}>Small / 배경 있음</p>
        <BannerImageItem {...args} variant="Small" showBackground={true}>
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <p style={{ margin: 0, fontSize: 11, color: "#888" }}>라벨</p>
            <p style={{ margin: 0, fontSize: 14, fontWeight: 700 }}>제목</p>
            <p style={{ margin: 0, fontSize: 12, color: "#e00" }}>9,900원</p>
          </div>
        </BannerImageItem>
      </div>
    </div>
  ),
};
