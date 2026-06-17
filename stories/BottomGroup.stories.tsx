import type { Meta, StoryObj } from "@storybook/react-vite";
import { BottomGroup } from "@cx/components";

const meta: Meta<typeof BottomGroup> = {
  title: "cx/BottomGroup",
  component: BottomGroup as never,
  argTypes: {
    variants: { control: "select", options: ["Normal"] },
    upperItem: { control: "boolean" },
    upperItemVariants: { control: "select", options: ["Default", "Table"] },
    upperItemLabel: { control: "text" },
    upperItemValue: { control: "text" },
    areaItemVariants: { control: "select", options: ["1 Botton", "2 Botton"] },
    primaryLabel: { control: "text" },
    secondaryLabel: { control: "text" },
    onPrimary: { control: false },
    onSecondary: { control: false },
    className: { control: false },
  },
  args: {
    variants: "Normal",
    upperItem: true,
    upperItemVariants: "Default",
    upperItemLabel: "텍스트",
    upperItemValue: "내용 들어가는 부분",
    areaItemVariants: "1 Botton",
    primaryLabel: "Label",
    secondaryLabel: "Label",
  },
};
export default meta;
type Story = StoryObj<typeof BottomGroup>;

export const Default: Story = {};

export const WithoutUpperItem: Story = {
  args: {
    upperItem: false,
  },
};

export const TableUpperItem: Story = {
  args: {
    upperItem: true,
    upperItemVariants: "Table",
    upperItemLabel: "타이틀",
    upperItemValue: "내용 들어가는 부분",
  },
};

export const TwoButtons: Story = {
  args: {
    areaItemVariants: "2 Botton",
    secondaryLabel: "Label",
    primaryLabel: "Label",
  },
};

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px", padding: "24px" }}>
      <div>
        <p style={{ marginBottom: "8px", fontSize: "12px", color: "#888" }}>Normal / upperItem Default / 1 Botton</p>
        <BottomGroup
          {...args}
          variants="Normal"
          upperItem={true}
          upperItemVariants="Default"
          upperItemLabel="텍스트"
          areaItemVariants="1 Botton"
          primaryLabel="Label"
        />
      </div>
      <div>
        <p style={{ marginBottom: "8px", fontSize: "12px", color: "#888" }}>Normal / upperItem Table / 1 Botton</p>
        <BottomGroup
          {...args}
          variants="Normal"
          upperItem={true}
          upperItemVariants="Table"
          upperItemLabel="타이틀"
          upperItemValue="내용 들어가는 부분"
          areaItemVariants="1 Botton"
          primaryLabel="Label"
        />
      </div>
      <div>
        <p style={{ marginBottom: "8px", fontSize: "12px", color: "#888" }}>Normal / without upperItem / 1 Botton</p>
        <BottomGroup
          {...args}
          variants="Normal"
          upperItem={false}
          areaItemVariants="1 Botton"
          primaryLabel="Label"
        />
      </div>
      <div>
        <p style={{ marginBottom: "8px", fontSize: "12px", color: "#888" }}>Normal / upperItem Default / 2 Botton</p>
        <BottomGroup
          {...args}
          variants="Normal"
          upperItem={true}
          upperItemVariants="Default"
          upperItemLabel="텍스트"
          areaItemVariants="2 Botton"
          secondaryLabel="Label"
          primaryLabel="Label"
        />
      </div>
    </div>
  ),
};
