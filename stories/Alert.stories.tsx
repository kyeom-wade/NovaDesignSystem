import type { Meta, StoryObj } from "@storybook/react-vite";
import { Alert } from "@cx/components";

const meta: Meta<typeof Alert> = {
  title: "cx/Alert",
  component: Alert as never,
  argTypes: {
    variant: { control: "select", options: ["neutral", "danger"] },
    title: { control: "text" },
    body: { control: "text" },
    showTitle: { control: "boolean" },
  },
  args: {
    variant: "neutral",
    title: "알림 제목",
    body: "알림 본문 내용입니다. 중요한 정보를 확인해 주세요.",
    showTitle: true,
  },
};
export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {};

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "24px" }}>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#666" }}>neutral</p>
        <Alert {...args} variant="neutral" />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#666" }}>danger</p>
        <Alert {...args} variant="danger" />
      </div>
    </div>
  ),
};

export const States: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "24px" }}>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#666" }}>제목 표시</p>
        <Alert {...args} showTitle={true} title="알림 제목" body="본문 내용이 여기에 표시됩니다." />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#666" }}>제목 숨김</p>
        <Alert {...args} showTitle={false} body="제목 없이 본문만 표시되는 알림입니다." />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#666" }}>danger + 제목 표시</p>
        <Alert {...args} variant="danger" showTitle={true} title="경고" body="이 작업은 되돌릴 수 없습니다. 주의하세요." />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#666" }}>danger + 제목 숨김</p>
        <Alert {...args} variant="danger" showTitle={false} body="오류가 발생했습니다. 다시 시도해 주세요." />
      </div>
    </div>
  ),
};
