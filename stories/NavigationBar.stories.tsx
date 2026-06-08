import type { Meta, StoryObj } from "@storybook/react-vite";
import { NavigationBar } from "@cx/components";

const meta: Meta<typeof NavigationBar> = {
  title: "cx/NavigationBar",
  component: NavigationBar as never,
  argTypes: {
    activeTab: { control: "select", options: ["Benefit", "Shopping", "My"] },
    disclosure: { control: "boolean" },
    aiPlaceholder: { control: "text" },
    onAiClick: { control: false },
    onVoiceClick: { control: false },
    onBenefitClick: { control: false },
    onShoppingClick: { control: false },
    onMyClick: { control: false },
  },
  args: {
    activeTab: "Benefit",
    disclosure: false,
    aiPlaceholder: "T에 대해 무엇이든 물어보세요",
  },
};
export default meta;
type Story = StoryObj<typeof NavigationBar>;

export const Default: Story = {};

export const ActiveTabs: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, padding: 16 }}>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#666" }}>activeTab: Benefit</p>
        <NavigationBar activeTab="Benefit" disclosure={false} />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#666" }}>activeTab: Shopping</p>
        <NavigationBar activeTab="Shopping" disclosure={false} />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#666" }}>activeTab: My</p>
        <NavigationBar activeTab="My" disclosure={false} />
      </div>
    </div>
  ),
};

export const DisclosureExpanded: Story = {
  args: {
    disclosure: true,
    activeTab: "Benefit",
  },
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, padding: 16 }}>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#666" }}>disclosure=false, activeTab=Benefit (AI 확장, 메뉴 축소)</p>
        <NavigationBar activeTab="Benefit" disclosure={false} />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#666" }}>disclosure=false, activeTab=Shopping</p>
        <NavigationBar activeTab="Shopping" disclosure={false} />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#666" }}>disclosure=false, activeTab=My</p>
        <NavigationBar activeTab="My" disclosure={false} />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#666" }}>disclosure=true, activeTab=Benefit (AI 축소, 메뉴 확장)</p>
        <NavigationBar activeTab="Benefit" disclosure={true} />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#666" }}>disclosure=true, activeTab=Shopping</p>
        <NavigationBar activeTab="Shopping" disclosure={true} />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#666" }}>disclosure=true, activeTab=My</p>
        <NavigationBar activeTab="My" disclosure={true} />
      </div>
    </div>
  ),
};

export const CustomPlaceholder: Story = {
  args: {
    activeTab: "Benefit",
    disclosure: false,
    aiPlaceholder: "궁금한 것을 검색해보세요",
  },
};
