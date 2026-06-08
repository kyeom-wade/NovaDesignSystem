import type { Meta, StoryObj } from "@storybook/react-vite";
import { CellSheetItem } from "@cx/components";

const meta: Meta<typeof CellSheetItem> = {
  title: "cx/CellSheetItem",
  component: CellSheetItem as never,
  argTypes: {
    variant: { control: "select", options: ["Price", "Notice"] },
    thumbnailSrc: { control: "text" },
    label: { control: "text" },
    price: { control: "text" },
    perMonth: { control: "text" },
    feeNote: { control: "text" },
    rightItem: { control: "boolean" },
    buttonLabel: { control: "text" },
    onRightItemClick: { control: false },
  },
  args: {
    variant: "Price",
    label: "iPhone 17 Pro 코스믹 오렌지 512G",
    price: "129,797원",
    perMonth: "/월",
    feeNote: "(부가세, 할부수수료 포함)",
    rightItem: false,
    buttonLabel: "버튼",
  },
};
export default meta;
type Story = StoryObj<typeof CellSheetItem>;

export const Default: Story = {};

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px", padding: "16px" }}>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#888" }}>Price</p>
        <CellSheetItem {...args} variant="Price" label="iPhone 17 Pro 코스믹 오렌지 512G" />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#888" }}>Notice</p>
        <CellSheetItem {...args} variant="Notice" label="장바구니에 상품을 담았어요" />
      </div>
    </div>
  ),
};

export const WithRightItem: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px", padding: "16px" }}>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#888" }}>Price + 화살표</p>
        <CellSheetItem
          {...args}
          variant="Price"
          label="갤럭시 S25 Ultra 티타늄 블랙 256G"
          price="89,000원"
          perMonth="/월"
          feeNote="(부가세 포함)"
          rightItem={true}
        />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#888" }}>Notice + 버튼</p>
        <CellSheetItem
          {...args}
          variant="Notice"
          label="장바구니에 상품을 담았어요"
          rightItem={true}
          buttonLabel="바로가기"
        />
      </div>
    </div>
  ),
};

export const States: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px", padding: "16px" }}>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#888" }}>기본 (rightItem 없음)</p>
        <CellSheetItem {...args} variant="Price" rightItem={false} />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#888" }}>오른쪽 아이템 있음</p>
        <CellSheetItem {...args} variant="Price" rightItem={true} />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#888" }}>알림 — 기본</p>
        <CellSheetItem {...args} variant="Notice" label="장바구니에 상품을 담았어요" rightItem={false} />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#888" }}>알림 — 버튼 포함</p>
        <CellSheetItem
          {...args}
          variant="Notice"
          label="장바구니에 상품을 담았어요"
          rightItem={true}
          buttonLabel="장바구니 보기"
        />
      </div>
    </div>
  ),
};
