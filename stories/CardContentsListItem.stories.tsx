import type { Meta, StoryObj } from "@storybook/react-vite";
import { CardContentsListItem } from "@cx/components";

const meta: Meta<typeof CardContentsListItem> = {
  title: "cx/CardContentsListItem",
  component: CardContentsListItem as never,
  argTypes: {
    variant: {
      control: "select",
      options: ["Profile", "Data", "Barcode", "Product", "Benefit", "TaskCard"],
    },
    profileName: { control: "text" },
    profilePhone: { control: "text" },
    actionLabel: { control: "text" },
    onAction: { control: false },
    title: { control: "text" },
    showTitle: { control: "boolean" },
    badgeText: { control: "text" },
    showBadge: { control: "boolean" },
    subTitle: { control: "text" },
    barcodeNumbers: { control: false },
    barcodeTime: { control: "text" },
    mainText: { control: "text" },
    priceText: { control: "text" },
    subTexts: { control: false },
    badges: { control: false },
    thumbnailSrc: { control: "text" },
    taskTitle: { control: "text" },
    taskBody: { control: "text" },
    taskImageSrc: { control: "text" },
  },
  args: {
    variant: "Profile",
    profileName: "박지훈님",
    profilePhone: "010-1234-5678",
    actionLabel: "버튼",
    title: "타이틀",
    showTitle: true,
    badgeText: "Badge",
    showBadge: true,
    subTitle: "서브타이틀",
    barcodeNumbers: ["1234", "4561", "1506", "4932"],
    barcodeTime: "19:58",
    mainText: "상품명 텍스트",
    priceText: "월99,000원",
    subTexts: ["혜택 설명", "추가 설명"],
    badges: ["할인", "적립", "사용"],
    taskTitle: "Task Title",
    taskBody: "내용 텍스트",
  },
};
export default meta;
type Story = StoryObj<typeof CardContentsListItem>;

export const Default: Story = {};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, padding: 24 }}>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>Profile</p>
        <CardContentsListItem
          variant="Profile"
          profileName="박지훈님"
          profilePhone="010-1234-5678"
          actionLabel="변경"
        />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>Data</p>
        <CardContentsListItem
          variant="Data"
          title="데이터 타이틀"
          badgeText="NEW"
          showBadge
          subTitle="서브타이틀 설명 텍스트"
        />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>Barcode</p>
        <CardContentsListItem
          variant="Barcode"
          barcodeNumbers={["1234", "4561", "1506", "4932"]}
          barcodeTime="19:58"
        />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>Product</p>
        <CardContentsListItem
          variant="Product"
          mainText="프리미엄 요금제"
          priceText="월99,000원"
        />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>Benefit</p>
        <CardContentsListItem
          variant="Benefit"
          mainText="멤버십 혜택"
          subTexts={["혜택 설명", "추가 혜택"]}
          badges={["할인", "적립", "사용"]}
        />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>TaskCard</p>
        <CardContentsListItem
          variant="TaskCard"
          taskTitle="오늘의 할 일"
          taskBody="내용 텍스트를 확인하세요"
        />
      </div>
    </div>
  ),
};

export const ProfileVariant: Story = {
  args: {
    variant: "Profile",
    profileName: "김민지님",
    profilePhone: "010-9876-5432",
    actionLabel: "수정",
  },
};

export const DataVariant: Story = {
  args: {
    variant: "Data",
    title: "데이터 타이틀",
    badgeText: "NEW",
    showBadge: true,
    showTitle: true,
    subTitle: "서브타이틀 설명 텍스트",
  },
};

export const DataWithoutBadge: Story = {
  args: {
    variant: "Data",
    title: "뱃지 없는 타이틀",
    showBadge: false,
    showTitle: true,
    subTitle: "서브타이틀 설명 텍스트",
  },
};

export const DataWithoutTitle: Story = {
  args: {
    variant: "Data",
    showTitle: false,
    subTitle: "타이틀 없이 서브타이틀만 표시",
  },
};

export const BarcodeVariant: Story = {
  args: {
    variant: "Barcode",
    barcodeNumbers: ["1234", "4561", "1506", "4932"],
    barcodeTime: "23:59",
  },
};

export const ProductVariant: Story = {
  args: {
    variant: "Product",
    mainText: "프리미엄 요금제 5G",
    priceText: "월99,000원",
  },
};

export const BenefitVariant: Story = {
  args: {
    variant: "Benefit",
    mainText: "멤버십 혜택",
    subTexts: ["혜택 설명 텍스트", "추가 설명 텍스트"],
    badges: ["할인", "적립", "사용"],
  },
};

export const BenefitSingleSubText: Story = {
  args: {
    variant: "Benefit",
    mainText: "단일 혜택 항목",
    subTexts: ["혜택 설명 텍스트"],
    badges: ["적립"],
  },
};

export const TaskCardVariant: Story = {
  args: {
    variant: "TaskCard",
    taskTitle: "오늘의 할 일",
    taskBody: "미완료된 항목을 확인하세요",
  },
};
