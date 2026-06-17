import type { Meta, StoryObj } from "@storybook/react-vite";
import { TitleSectionItem } from "@cx/components";

const meta: Meta<typeof TitleSectionItem> = {
  title: "cx/TitleSectionItem",
  component: TitleSectionItem as never,
  argTypes: {
    title: { control: "text" },
    titleOption: { control: "boolean" },
    rightBadgeValue: { control: "text" },
    subTextContent: { control: "text" },
    rightItem: { control: "boolean" },
    optionLabel: { table: { disable: true } },
    leftBadgeValue: { table: { disable: true } },
    rightIcon: { control: false },
    onRightClick: { control: false },
    className: { control: false },
  },
  args: {
    title: "섹션 타이틀",
    titleOption: false,
    rightBadgeValue: "3",
    subTextContent: "서브 설명 텍스트",
    rightItem: true,
  },
};
export default meta;
type Story = StoryObj<typeof TitleSectionItem>;

export const Default: Story = {};

export const WithTitleOption: Story = {
  args: {
    titleOption: true,
    title: "상품 카테고리 타이틀",
    rightBadgeValue: "5",
    subTextContent: "상품에 대한 서브 설명입니다",
  },
};

export const WithoutRightItem: Story = {
  args: {
    rightItem: false,
    title: "우측 아이콘 없는 타이틀",
  },
};

export const States: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "16px" }}>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#888" }}>기본 (rightItem=true)</p>
        <TitleSectionItem {...args} rightItem={true} title="우측 아이콘 있음" />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#888" }}>우측 아이콘 없음 (rightItem=false)</p>
        <TitleSectionItem {...args} rightItem={false} title="우측 아이콘 없음" />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#888" }}>titleOption=true + rightItem=true</p>
        <TitleSectionItem
          {...args}
          titleOption={true}
          rightItem={true}
          title="옵션 + 아이콘"
          subTextContent="서브 텍스트"
        />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#888" }}>titleOption=true + rightItem=false</p>
        <TitleSectionItem
          {...args}
          titleOption={true}
          rightItem={false}
          title="옵션만 표시"
          subTextContent="서브 텍스트"
        />
      </div>
    </div>
  ),
};
