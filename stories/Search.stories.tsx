import type { Meta, StoryObj } from "@storybook/react-vite";
import { Search } from "@cx/components";

const meta: Meta<typeof Search> = {
  title: "cx/Search",
  component: Search as never,
  argTypes: {
    state: {
      control: "select",
      options: ["Default", "Focused", "Typing", "Completed", "Disabled"],
    },
    placeholder: { control: "text" },
    value: { control: "text" },
    onClear: { control: false },
    onSearch: { control: false },
  },
  args: {
    state: "Default",
    placeholder: "검색",
    value: "노바 디자인 시스템",
  },
};
export default meta;
type Story = StoryObj<typeof Search>;

export const Default: Story = {};

export const States: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, padding: 24, maxWidth: 360 }}>
      <div>
        <p style={{ margin: "0 0 6px", fontSize: 12, color: "#888" }}>Default</p>
        <Search {...args} state="Default" />
      </div>
      <div>
        <p style={{ margin: "0 0 6px", fontSize: 12, color: "#888" }}>Focused</p>
        <Search {...args} state="Focused" />
      </div>
      <div>
        <p style={{ margin: "0 0 6px", fontSize: 12, color: "#888" }}>Typing</p>
        <Search {...args} state="Typing" value="SKT 요금제" />
      </div>
      <div>
        <p style={{ margin: "0 0 6px", fontSize: 12, color: "#888" }}>Completed</p>
        <Search {...args} state="Completed" value="갤럭시 S25 울트라" />
      </div>
      <div>
        <p style={{ margin: "0 0 6px", fontSize: 12, color: "#888" }}>Disabled</p>
        <Search {...args} state="Disabled" />
      </div>
    </div>
  ),
};

export const WithValue: Story = {
  args: {
    state: "Completed",
    value: "5G 무제한 요금제",
  },
};

export const Typing: Story = {
  args: {
    state: "Typing",
    value: "스마트폰 추천",
  },
};

export const Disabled: Story = {
  args: {
    state: "Disabled",
    placeholder: "검색 불가",
  },
};
