import type { Meta, StoryObj } from "@storybook/react-vite";
import { TabFixed } from "@cx/components";

const meta: Meta<typeof TabFixed> = {
  title: "cx/TabFixed",
  component: TabFixed as never,
  argTypes: {
    variants: { control: "select", options: ["1Tab", "2Tab", "3Tab", "4Tab"] },
    selectedIndex: { control: "number" },
    labels: { control: false },
    onTabChange: { control: false },
  },
  args: {
    variants: "2Tab",
    selectedIndex: 0,
    labels: ["홈", "혜택", "마이", "설정"],
  },
};
export default meta;
type Story = StoryObj<typeof TabFixed>;

export const Default: Story = {};

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 32, padding: 24 }}>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>1Tab</p>
        <TabFixed {...args} variants="1Tab" labels={["홈"]} selectedIndex={0} />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>2Tab</p>
        <TabFixed {...args} variants="2Tab" labels={["홈", "마이"]} selectedIndex={0} />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>3Tab</p>
        <TabFixed {...args} variants="3Tab" labels={["홈", "혜택", "마이"]} selectedIndex={0} />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>4Tab</p>
        <TabFixed {...args} variants="4Tab" labels={["홈", "혜택", "마이", "설정"]} selectedIndex={0} />
      </div>
    </div>
  ),
};

export const States: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 32, padding: 24 }}>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>첫 번째 탭 선택</p>
        <TabFixed {...args} variants="3Tab" labels={["홈", "혜택", "마이"]} selectedIndex={0} />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>두 번째 탭 선택</p>
        <TabFixed {...args} variants="3Tab" labels={["홈", "혜택", "마이"]} selectedIndex={1} />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>세 번째 탭 선택</p>
        <TabFixed {...args} variants="3Tab" labels={["홈", "혜택", "마이"]} selectedIndex={2} />
      </div>
    </div>
  ),
};

export const FourTabSelected: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 32, padding: 24 }}>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>4탭 — 홈 선택</p>
        <TabFixed {...args} variants="4Tab" labels={["홈", "혜택", "마이", "설정"]} selectedIndex={0} />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>4탭 — 혜택 선택</p>
        <TabFixed {...args} variants="4Tab" labels={["홈", "혜택", "마이", "설정"]} selectedIndex={1} />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>4탭 — 마이 선택</p>
        <TabFixed {...args} variants="4Tab" labels={["홈", "혜택", "마이", "설정"]} selectedIndex={2} />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>4탭 — 설정 선택</p>
        <TabFixed {...args} variants="4Tab" labels={["홈", "혜택", "마이", "설정"]} selectedIndex={3} />
      </div>
    </div>
  ),
};
