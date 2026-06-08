import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextItem } from "@cx/components";

const meta: Meta<typeof TextItem> = {
  title: "cx/TextItem",
  component: TextItem as never,
  argTypes: {
    text: { control: "text" },
    size: {
      control: "select",
      options: ["11Etc", "13Body", "14Body", "16Body", "18Title", "20Title"],
    },
    weight: {
      control: "select",
      options: ["regular", "medium", "semibold"],
    },
    textLeft: { control: "boolean" },
    textRight: { control: "boolean" },
    iconLeft: { control: false },
    iconRight: { control: false },
    className: { control: false },
  },
  args: {
    text: "텍스트",
    size: "14Body",
    weight: "regular",
    textLeft: false,
    textRight: false,
  },
};
export default meta;
type Story = StoryObj<typeof TextItem>;

export const Default: Story = {};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, padding: 24 }}>
      {(["11Etc", "13Body", "14Body", "16Body", "18Title", "20Title"] as const).map((size) => (
        <div key={size} style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <p style={{ width: 80, fontSize: 12, color: "#888", margin: 0 }}>{size}</p>
          <TextItem text="텍스트 크기 비교" size={size} />
        </div>
      ))}
    </div>
  ),
};

export const AllWeights: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, padding: 24 }}>
      {(["regular", "medium", "semibold"] as const).map((weight) => (
        <div key={weight} style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <p style={{ width: 80, fontSize: 12, color: "#888", margin: 0 }}>{weight}</p>
          <TextItem text="텍스트 굵기 비교" size="16Body" weight={weight} />
        </div>
      ))}
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, padding: 24 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <p style={{ width: 120, fontSize: 12, color: "#888", margin: 0 }}>왼쪽 아이콘</p>
        <TextItem text="아이콘 왼쪽" size="14Body" textLeft />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <p style={{ width: 120, fontSize: 12, color: "#888", margin: 0 }}>오른쪽 아이콘</p>
        <TextItem text="아이콘 오른쪽" size="14Body" textRight />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <p style={{ width: 120, fontSize: 12, color: "#888", margin: 0 }}>양쪽 아이콘</p>
        <TextItem text="양쪽 아이콘" size="14Body" textLeft textRight />
      </div>
    </div>
  ),
};

export const SizeWeightMatrix: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, padding: 24 }}>
      {(["11Etc", "13Body", "14Body", "16Body", "18Title", "20Title"] as const).map((size) => (
        <div key={size}>
          <p style={{ fontSize: 11, color: "#aaa", margin: "0 0 8px 0" }}>{size}</p>
          <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
            {(["regular", "medium", "semibold"] as const).map((weight) => (
              <TextItem key={weight} text={`상품명 · ${weight}`} size={size} weight={weight} />
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};

export const ProductLabels: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, padding: 24 }}>
      <TextItem text="갤럭시 S24 Ultra" size="20Title" weight="semibold" />
      <TextItem text="256GB · 티타늄 블랙" size="16Body" weight="regular" />
      <TextItem text="₩1,299,000" size="18Title" weight="semibold" />
      <TextItem text="무료 배송 · 내일 도착" size="13Body" weight="medium" textLeft />
      <TextItem text="SKT 전용 특가" size="11Etc" weight="regular" />
    </div>
  ),
};
