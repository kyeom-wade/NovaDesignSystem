import type { Meta, StoryObj } from "@storybook/react-vite";
import { Accordion } from "@cx/components";

const meta: Meta<typeof Accordion> = {
  title: "cx/Accordion",
  component: Accordion as never,
  argTypes: {
    variants: { control: "select", options: ["Info", "Product", "Price", "Notice"] },
    disclosure: { control: "boolean" },
    heading: { control: "text" },
    subText: { control: "text" },
    thumbnailSrc: { control: "text" },
    rightText: { control: "text" },
    rightSubText: { control: "text" },
    badge: { control: "boolean" },
    subTextGroup: { control: "boolean" },
    caption: { control: "boolean" },
    caption01: { control: "text" },
    caption02: { control: "text" },
    children: { control: false },
    onClick: { control: false },
    className: { control: false },
  },
  args: {
    variants: "Info",
    disclosure: false,
    heading: "섹션/콘텐츠 타이틀",
    subText: "서브 텍스트",
    rightText: "Text",
    rightSubText: "Text",
    badge: true,
    subTextGroup: true,
    caption: true,
    caption01: "Caption",
    caption02: "Caption",
  },
};
export default meta;
type Story = StoryObj<typeof Accordion>;

const SlotPreview = ({ label = "아코디언 내용이 이곳에 표시됩니다." }: { label?: string }) => (
  <div style={{ width: "100%", height: 100, fontSize: 14, color: "#555" }}>
    {label}
  </div>
);

export const Default: Story = {};

export const Disclosed: Story = {
  args: {
    disclosure: true,
    children: <SlotPreview />,
  },
};

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, padding: 24 }}>
      <Accordion {...args} variants="Info" disclosure={false} />
      <Accordion {...args} variants="Info" disclosure={true}>
        <SlotPreview label="Info 내용이 여기에 표시됩니다." />
      </Accordion>
      <Accordion {...args} variants="Product" heading="섹션/콘텐츠 타이틀" subText="서브 텍스트" disclosure={false} />
      <Accordion {...args} variants="Product" heading="섹션/콘텐츠 타이틀" subText="서브 텍스트" disclosure={true}>
        <SlotPreview label="Product 내용이 여기에 표시됩니다." />
      </Accordion>
      <Accordion {...args} variants="Price" heading="섹션/콘텐츠 타이틀" disclosure={false} />
      <Accordion {...args} variants="Price" heading="섹션/콘텐츠 타이틀" disclosure={true}>
        <SlotPreview label="Price 내용이 여기에 표시됩니다." />
      </Accordion>
      <Accordion {...args} variants="Notice" heading="Heading" disclosure={false} />
      <Accordion {...args} variants="Notice" heading="Heading" disclosure={true}>
        <SlotPreview label="Notice 내용이 여기에 표시됩니다." />
      </Accordion>
    </div>
  ),
};

export const ProductWithThumbnail: Story = {
  args: {
    variants: "Product",
    heading: "갤럭시 S24 울트라",
    subText: "월 89,000원",
    thumbnailSrc: "https://via.placeholder.com/40x40",
    disclosure: false,
  },
};

export const ProductWithThumbnailDisclosed: Story = {
  args: {
    variants: "Product",
    heading: "갤럭시 S24 울트라",
    subText: "월 89,000원",
    thumbnailSrc: "https://via.placeholder.com/40x40",
    rightText: "Text",
    rightSubText: "Text",
    disclosure: true,
    children: <SlotPreview label="상품 상세 설명이 여기에 표시됩니다." />,
  },
};

export const PriceDisclosed: Story = {
  args: {
    variants: "Price",
    heading: "섹션/콘텐츠 타이틀",
    disclosure: true,
    children: <SlotPreview label="가격 세부 내용이 여기에 표시됩니다." />,
  },
};

export const Notice: Story = {
  args: {
    variants: "Notice",
    heading: "Heading",
    badge: true,
    subTextGroup: true,
    caption: true,
    caption01: "Caption",
    caption02: "Caption",
    disclosure: false,
  },
};

export const NoticeDisclosed: Story = {
  args: {
    variants: "Notice",
    heading: "Heading",
    badge: true,
    subTextGroup: true,
    caption: true,
    caption01: "Caption",
    caption02: "Caption",
    disclosure: true,
    children: <SlotPreview label="Notice 확장 내용이 여기에 표시됩니다." />,
  },
};
