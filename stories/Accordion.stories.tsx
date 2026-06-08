import type { Meta, StoryObj } from "@storybook/react-vite";
import { Accordion } from "@cx/components";

const meta: Meta<typeof Accordion> = {
  title: "cx/Accordion",
  component: Accordion as never,
  argTypes: {
    variants: { control: "select", options: ["Info", "Product", "Price"] },
    disclosure: { control: "boolean" },
    title: { control: "text" },
    subText: { control: "text" },
    thumbnailSrc: { control: "text" },
    children: { control: false },
    onClick: { control: false },
    className: { control: false },
  },
  args: {
    variants: "Info",
    disclosure: false,
    title: "섹션 타이틀",
    subText: "서브 텍스트",
  },
};
export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {};

export const Disclosed: Story = {
  args: {
    disclosure: true,
    children: (
      <div style={{ padding: "12px 0", color: "#555", fontSize: 14 }}>
        아코디언 내용이 이곳에 표시됩니다. 상세 설명이나 추가 정보를 여기에 작성하세요.
      </div>
    ),
  },
};

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, padding: 24 }}>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>Info (닫힘)</p>
        <Accordion {...args} variants="Info" disclosure={false} />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>Info (열림)</p>
        <Accordion {...args} variants="Info" disclosure={true}>
          <div style={{ padding: "12px 0", fontSize: 14, color: "#555" }}>
            정보 내용이 여기에 표시됩니다.
          </div>
        </Accordion>
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>Product (닫힘)</p>
        <Accordion {...args} variants="Product" title="상품명" subText="월 89,000원" disclosure={false} />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>Product (열림)</p>
        <Accordion {...args} variants="Product" title="상품명" subText="월 89,000원" disclosure={true}>
          <div style={{ padding: "12px 0", fontSize: 14, color: "#555" }}>
            상품 상세 설명이 여기에 표시됩니다.
          </div>
        </Accordion>
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>Price (닫힘)</p>
        <Accordion {...args} variants="Price" title="가격 안내" disclosure={false} />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>Price (열림)</p>
        <Accordion {...args} variants="Price" title="가격 안내" disclosure={true}>
          <div style={{ padding: "12px 0", fontSize: 14, color: "#555" }}>
            가격 세부 내용이 여기에 표시됩니다.
          </div>
        </Accordion>
      </div>
    </div>
  ),
};

export const ProductWithThumbnail: Story = {
  args: {
    variants: "Product",
    title: "갤럭시 S24 울트라",
    subText: "월 89,000원",
    thumbnailSrc: "https://via.placeholder.com/56x56",
    disclosure: false,
  },
};

export const ProductWithThumbnailDisclosed: Story = {
  args: {
    variants: "Product",
    title: "갤럭시 S24 울트라",
    subText: "월 89,000원",
    thumbnailSrc: "https://via.placeholder.com/56x56",
    disclosure: true,
    children: (
      <div style={{ padding: "12px 0", fontSize: 14, color: "#555" }}>
        <p style={{ margin: "0 0 4px" }}>색상: 티타늄 블랙</p>
        <p style={{ margin: "0 0 4px" }}>저장 용량: 256GB</p>
        <p style={{ margin: 0 }}>약정 기간: 24개월</p>
      </div>
    ),
  },
};
