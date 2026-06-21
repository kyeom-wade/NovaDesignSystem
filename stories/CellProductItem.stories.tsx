import type { Meta, StoryObj } from "@storybook/react-vite";
import { CellProductItem } from "@cx/components";

const meta: Meta<typeof CellProductItem> = {
  title: "cx/CellProductItem",
  component: CellProductItem as never,
  argTypes: {
    thumbnailSrc: { control: "text" },
    subtitle: { control: "text" },
    title: { control: "text" },
    helpText: { control: "boolean" },
    helpTextLabel: { control: "text" },
    closeButton: { control: "boolean" },
    onClose: { control: false },
    className: { control: false },
  },
  args: {
    subtitle: "브랜드명 / 패스명",
    title: "상품명 최대 2줄 이후 말줄임 상품명 최대 2줄 이후 말줄임",
    helpText: true,
    helpTextLabel: "19세 미만은 구독할 수 없는 상품입니다.",
    closeButton: true,
  },
};
export default meta;
type Story = StoryObj<typeof CellProductItem>;

export const Default: Story = {};

export const WithThumbnail: Story = {
  args: {
    thumbnailSrc: "https://placehold.co/96x96/7B68EE/FFFFFF?text=T",
    subtitle: "T우주 / 구독패스",
    title: "배달의민족 무료배달 구독권",
  },
};

export const NoHelpText: Story = {
  args: {
    helpText: false,
    subtitle: "T우주 / 일반상품",
    title: "일반 구독 상품 예시",
  },
};

export const NoCloseButton: Story = {
  args: {
    closeButton: false,
    subtitle: "T우주 / 구독패스",
    title: "닫기 불가 상품 예시",
  },
};
