import type { Meta, StoryObj } from "@storybook/react-vite";
import { TitleContentsSectionComplete } from "@cx/components";

const meta: Meta<typeof TitleContentsSectionComplete> = {
  title: "cx/TitleContentsSectionComplete",
  component: TitleContentsSectionComplete as never,
  argTypes: {
    subLabel: { control: "text" },
    showTitleSubText: { control: "boolean" },
    showThumbnail: { control: "boolean" },
    thumbnailSrc: { control: "text" },
    title: { control: "text" },
    description: { control: "text" },
  },
  args: {
    subLabel: "갤럭시 S29 ∙ SM-S942NV",
    showTitleSubText: true,
    showThumbnail: true,
    thumbnailSrc: "",
    title: "축하드려요 지훈님,\n개통이 완료되었어요",
    description: "지금부터 새로운 휴대폰 사용이 가능해요.",
  },
};
export default meta;
type Story = StoryObj<typeof TitleContentsSectionComplete>;

export const Default: Story = {};

export const WithThumbnail: Story = {
  args: {
    showThumbnail: true,
    thumbnailSrc: "https://placehold.co/40x40/cccccc/999999?text=IMG",
    subLabel: "갤럭시 Z 폴드7 ∙ SM-F956N",
    title: "개통이 완료되었어요",
    description: "새 기기를 마음껏 즐겨보세요.",
  },
};

export const WithoutSubText: Story = {
  args: {
    showTitleSubText: false,
    title: "가입이 완료되었어요",
    description: "서비스를 이용하실 수 있습니다.",
  },
};

export const WithoutThumbnail: Story = {
  args: {
    showThumbnail: false,
    subLabel: "갤럭시 S29 ∙ SM-S942NV",
    title: "축하드려요,\n개통이 완료되었어요",
    description: "지금부터 새로운 휴대폰 사용이 가능해요.",
  },
};

export const States: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "48px", padding: "24px" }}>
      <div>
        <p style={{ fontSize: "12px", color: "#888", marginBottom: "8px" }}>서브텍스트 + 썸네일 표시</p>
        <TitleContentsSectionComplete
          showTitleSubText={true}
          showThumbnail={true}
          thumbnailSrc="https://placehold.co/40x40/4a90e2/ffffff?text=S"
          subLabel="갤럭시 S29 ∙ SM-S942NV"
          title="축하드려요 지훈님,\n개통이 완료되었어요"
          description="지금부터 새로운 휴대폰 사용이 가능해요."
        />
      </div>
      <div>
        <p style={{ fontSize: "12px", color: "#888", marginBottom: "8px" }}>서브텍스트만 표시 (썸네일 없음)</p>
        <TitleContentsSectionComplete
          showTitleSubText={true}
          showThumbnail={false}
          subLabel="갤럭시 Z 폴드7 ∙ SM-F956N"
          title="개통이 완료되었어요"
          description="새 기기를 마음껏 즐겨보세요."
        />
      </div>
      <div>
        <p style={{ fontSize: "12px", color: "#888", marginBottom: "8px" }}>서브텍스트 숨김</p>
        <TitleContentsSectionComplete
          showTitleSubText={false}
          title="가입이 완료되었어요"
          description="서비스 이용이 가능합니다."
        />
      </div>
    </div>
  ),
};
