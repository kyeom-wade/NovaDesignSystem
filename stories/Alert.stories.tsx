import type { Meta, StoryObj } from "@storybook/react-vite";
import { Alert } from "@cx/components";

const meta: Meta<typeof Alert> = {
  title: "cx/Alert",
  component: Alert as never,
  argTypes: {
    danger: { control: "boolean" },
    title: { control: "text" },
    description: { control: "text" },
    titleText: { control: "boolean" },
    variant: { table: { disable: true } },
    body: { table: { disable: true } },
    showTitle: { table: { disable: true } },
    className: { control: false },
  },
  args: {
    danger: false,
    title: "Title",
    description: "Description",
    titleText: true,
  },
};
export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {};

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "24px" }}>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#666" }}>danger=false</p>
        <Alert {...args} danger={false} title="Title" description="Description" />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#666" }}>danger=true</p>
        <Alert {...args} danger title="Title" description="Description" />
      </div>
    </div>
  ),
};

export const States: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "24px" }}>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#666" }}>제목 표시</p>
        <Alert {...args} titleText={true} title="Title" description="Description" />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#666" }}>제목 숨김</p>
        <Alert {...args} titleText={false} description="Description" />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#666" }}>danger + 제목 표시</p>
        <Alert {...args} danger titleText={true} title="Title" description="Description" />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#666" }}>danger + 제목 숨김</p>
        <Alert {...args} danger titleText={false} description="Description" />
      </div>
    </div>
  ),
};
