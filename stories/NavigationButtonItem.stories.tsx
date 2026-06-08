import type { Meta, StoryObj } from "@storybook/react-vite";
import { NavigationButtonItem } from "@cx/components";

const meta: Meta<typeof NavigationButtonItem> = {
  title: "cx/NavigationButtonItem",
  component: NavigationButtonItem as never,
  argTypes: {
    variant: { control: "select", options: ["AI", "Menu"] },
    disclosureAi: { control: "boolean" },
    disclosureMenu: { control: "select", options: ["Default", "On", "Off"] },
    aiPlaceholder: { control: "text" },
    onVoiceClick: { control: false },
    onClick: { control: false },
    className: { control: false },
  },
  args: {
    variant: "AI",
    disclosureAi: true,
    disclosureMenu: "Default",
    aiPlaceholder: "T에 대해 무엇이든 물어보세요",
  },
};
export default meta;
type Story = StoryObj<typeof NavigationButtonItem>;

export const Default: Story = {};

export const AIExpanded: Story = {
  args: {
    variant: "AI",
    disclosureAi: true,
    aiPlaceholder: "T에 대해 무엇이든 물어보세요",
  },
};

export const AICollapsed: Story = {
  args: {
    variant: "AI",
    disclosureAi: false,
  },
};

export const AllAIStates: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px", padding: "24px" }}>
      <div>
        <p style={{ marginBottom: "8px", fontSize: "12px", color: "#666" }}>AI 확장 (disclosureAi: true)</p>
        <NavigationButtonItem {...args} variant="AI" disclosureAi={true} aiPlaceholder="T에 대해 무엇이든 물어보세요" />
      </div>
      <div>
        <p style={{ marginBottom: "8px", fontSize: "12px", color: "#666" }}>AI 축소 (disclosureAi: false)</p>
        <NavigationButtonItem {...args} variant="AI" disclosureAi={false} />
      </div>
    </div>
  ),
};

export const MenuDefault: Story = {
  args: {
    variant: "Menu",
    disclosureMenu: "Default",
  },
};

export const MenuOn: Story = {
  args: {
    variant: "Menu",
    disclosureMenu: "On",
  },
};

export const MenuOff: Story = {
  args: {
    variant: "Menu",
    disclosureMenu: "Off",
  },
};

export const AllMenuStates: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px", padding: "24px" }}>
      <div>
        <p style={{ marginBottom: "8px", fontSize: "12px", color: "#666" }}>Menu Default — 혜택 단일 아이콘</p>
        <NavigationButtonItem {...args} variant="Menu" disclosureMenu="Default" />
      </div>
      <div>
        <p style={{ marginBottom: "8px", fontSize: "12px", color: "#666" }}>Menu On — 단일 탭 (중간 상태)</p>
        <NavigationButtonItem {...args} variant="Menu" disclosureMenu="On" />
      </div>
      <div>
        <p style={{ marginBottom: "8px", fontSize: "12px", color: "#666" }}>Menu Off — 쇼핑 + 마이 두 탭</p>
        <NavigationButtonItem {...args} variant="Menu" disclosureMenu="Off" />
      </div>
    </div>
  ),
};

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px", padding: "24px" }}>
      <div>
        <p style={{ marginBottom: "12px", fontSize: "14px", fontWeight: 600, color: "#333" }}>AI 변형</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div>
            <p style={{ marginBottom: "8px", fontSize: "12px", color: "#666" }}>확장</p>
            <NavigationButtonItem {...args} variant="AI" disclosureAi={true} aiPlaceholder="T에 대해 무엇이든 물어보세요" />
          </div>
          <div>
            <p style={{ marginBottom: "8px", fontSize: "12px", color: "#666" }}>축소</p>
            <NavigationButtonItem {...args} variant="AI" disclosureAi={false} />
          </div>
        </div>
      </div>
      <div>
        <p style={{ marginBottom: "12px", fontSize: "14px", fontWeight: 600, color: "#333" }}>Menu 변형</p>
        <div style={{ display: "flex", gap: "24px", alignItems: "flex-start", flexWrap: "wrap" }}>
          <div>
            <p style={{ marginBottom: "8px", fontSize: "12px", color: "#666" }}>Default</p>
            <NavigationButtonItem {...args} variant="Menu" disclosureMenu="Default" />
          </div>
          <div>
            <p style={{ marginBottom: "8px", fontSize: "12px", color: "#666" }}>On</p>
            <NavigationButtonItem {...args} variant="Menu" disclosureMenu="On" />
          </div>
          <div>
            <p style={{ marginBottom: "8px", fontSize: "12px", color: "#666" }}>Off</p>
            <NavigationButtonItem {...args} variant="Menu" disclosureMenu="Off" />
          </div>
        </div>
      </div>
    </div>
  ),
};
