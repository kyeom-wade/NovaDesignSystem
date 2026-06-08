import type { Meta, StoryObj } from "@storybook/react-vite";
import { Chip } from "@cx/components";

const meta: Meta<typeof Chip> = {
  title: "cx/Chip",
  component: Chip as never,
  argTypes: {
    options: { control: false },
    selectedValue: { control: "text" },
    onSelect: { control: false },
    size: { control: "select", options: ["large"] },
  },
  args: {
    options: [
      { label: "전체", value: "all" },
      { label: "상품명", value: "product" },
      { label: "카테고리", value: "category" },
      { label: "브랜드", value: "brand" },
      { label: "가격", value: "price" },
    ],
    selectedValue: "all",
    size: "large",
  },
};
export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = {};

export const FirstSelected: Story = {
  args: {
    selectedValue: "all",
  },
};

export const MiddleSelected: Story = {
  args: {
    selectedValue: "category",
  },
};

export const LastSelected: Story = {
  args: {
    selectedValue: "price",
  },
};

export const ManyOptions: Story = {
  args: {
    options: [
      { label: "전체", value: "all" },
      { label: "스마트폰", value: "phone" },
      { label: "태블릿", value: "tablet" },
      { label: "노트북", value: "laptop" },
      { label: "웨어러블", value: "wearable" },
      { label: "액세서리", value: "accessory" },
      { label: "IoT", value: "iot" },
      { label: "기타", value: "etc" },
    ],
    selectedValue: "phone",
  },
};

export const States: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px", padding: "16px" }}>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#888" }}>첫 번째 선택됨</p>
        <Chip
          options={[
            { label: "텍스트", value: "1" },
            { label: "텍스트", value: "2" },
            { label: "텍스트", value: "3" },
          ]}
          selectedValue="1"
        />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#888" }}>두 번째 선택됨</p>
        <Chip
          options={[
            { label: "텍스트", value: "1" },
            { label: "텍스트", value: "2" },
            { label: "텍스트", value: "3" },
          ]}
          selectedValue="2"
        />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#888" }}>세 번째 선택됨</p>
        <Chip
          options={[
            { label: "텍스트", value: "1" },
            { label: "텍스트", value: "2" },
            { label: "텍스트", value: "3" },
          ]}
          selectedValue="3"
        />
      </div>
    </div>
  ),
};

export const RealWorldExample: Story = {
  args: {
    options: [
      { label: "추천순", value: "recommend" },
      { label: "인기순", value: "popular" },
      { label: "최신순", value: "latest" },
      { label: "낮은가격순", value: "price_asc" },
      { label: "높은가격순", value: "price_desc" },
      { label: "리뷰많은순", value: "review" },
    ],
    selectedValue: "recommend",
  },
};
