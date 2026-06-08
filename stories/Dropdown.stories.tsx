import type { Meta, StoryObj } from "@storybook/react-vite";
import { Dropdown } from "@cx/components";

const meta: Meta<typeof Dropdown> = {
  title: "cx/Dropdown",
  component: Dropdown as never,
  argTypes: {
    label: { control: "text" },
    open: { control: "boolean" },
    selected: { control: "boolean" },
    children: { control: false },
    onToggle: { control: false },
  },
  args: {
    label: "옵션을 선택하세요",
    open: false,
    selected: false,
  },
};
export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {};

export const Open: Story = {
  args: {
    open: true,
    children: (
      <div style={{ display: "flex", flexDirection: "column", gap: "8px", padding: "4px 0" }}>
        <div style={{ padding: "8px 16px", cursor: "pointer" }}>서울</div>
        <div style={{ padding: "8px 16px", cursor: "pointer" }}>부산</div>
        <div style={{ padding: "8px 16px", cursor: "pointer" }}>대구</div>
        <div style={{ padding: "8px 16px", cursor: "pointer" }}>인천</div>
      </div>
    ),
  },
};

export const Selected: Story = {
  args: {
    label: "서울",
    selected: true,
  },
};

export const OpenAndSelected: Story = {
  args: {
    label: "서울",
    open: true,
    selected: true,
    children: (
      <div style={{ display: "flex", flexDirection: "column", gap: "8px", padding: "4px 0" }}>
        <div style={{ padding: "8px 16px", cursor: "pointer", fontWeight: "bold" }}>서울</div>
        <div style={{ padding: "8px 16px", cursor: "pointer" }}>부산</div>
        <div style={{ padding: "8px 16px", cursor: "pointer" }}>대구</div>
        <div style={{ padding: "8px 16px", cursor: "pointer" }}>인천</div>
      </div>
    ),
  },
};

export const States: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px", padding: "24px" }}>
      <div>
        <p style={{ marginBottom: "8px", fontSize: "12px", color: "#888" }}>기본 (미선택, 닫힘)</p>
        <Dropdown label="옵션을 선택하세요" open={false} selected={false} />
      </div>
      <div>
        <p style={{ marginBottom: "8px", fontSize: "12px", color: "#888" }}>선택됨 (닫힘)</p>
        <Dropdown label="서울특별시" open={false} selected={true} />
      </div>
      <div>
        <p style={{ marginBottom: "8px", fontSize: "12px", color: "#888" }}>열림 (미선택)</p>
        <Dropdown label="옵션을 선택하세요" open={true} selected={false}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ padding: "10px 16px", cursor: "pointer" }}>서울특별시</div>
            <div style={{ padding: "10px 16px", cursor: "pointer" }}>부산광역시</div>
            <div style={{ padding: "10px 16px", cursor: "pointer" }}>대구광역시</div>
          </div>
        </Dropdown>
      </div>
      <div>
        <p style={{ marginBottom: "8px", fontSize: "12px", color: "#888" }}>열림 (선택됨)</p>
        <Dropdown label="서울특별시" open={true} selected={true}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ padding: "10px 16px", cursor: "pointer", fontWeight: "bold" }}>서울특별시</div>
            <div style={{ padding: "10px 16px", cursor: "pointer" }}>부산광역시</div>
            <div style={{ padding: "10px 16px", cursor: "pointer" }}>대구광역시</div>
          </div>
        </Dropdown>
      </div>
    </div>
  ),
};

export const WithProductOptions: Story = {
  args: {
    label: "상품을 선택하세요",
    open: true,
    selected: false,
    children: (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "10px 16px", cursor: "pointer" }}>갤럭시 S25 Ultra — 256GB</div>
        <div style={{ padding: "10px 16px", cursor: "pointer" }}>갤럭시 S25 Ultra — 512GB</div>
        <div style={{ padding: "10px 16px", cursor: "pointer" }}>갤럭시 S25+ — 256GB</div>
        <div style={{ padding: "10px 16px", cursor: "pointer" }}>갤럭시 S25 — 128GB</div>
      </div>
    ),
  },
};
