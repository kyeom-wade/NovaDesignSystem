import type { Meta, StoryObj } from "@storybook/react-vite";
import { Bottomsheet } from "@cx/components";

const meta: Meta<typeof Bottomsheet> = {
  title: "cx/Bottomsheet",
  component: Bottomsheet as never,
  argTypes: {
    variant: { control: "select", options: ["ButtonClose", "Handle"] },
    buttonClose: { control: "boolean" },
    actionButton: { control: "boolean" },
    showTitle: { control: "boolean" },
    heading: { control: "text" },
    title: { control: "text" },
    description: { control: "text" },
    subText: { control: "text" },
    description2: { control: "boolean" },
    showSubText: { control: "boolean" },
    tab: { control: "boolean" },
    showTab: { control: "boolean" },
    tabs: { control: false },
    activeTab: { control: "number" },
    onTabChange: { control: false },
    onClose: { control: false },
    showActionGroup: { control: "boolean" },
    primaryLabel: { control: "text" },
    upperItemLabel: { control: "text" },
    upperItemValue: { control: "text" },
    onPrimary: { control: false },
    children: { control: false },
    className: { control: false },
  },
  args: {
    heading: "Heading",
    description: "Description",
    description2: true,
    tab: true,
    activeTab: 0,
    primaryLabel: "Label",
    upperItemLabel: "타이틀",
    upperItemValue: "내용 들어가는 부분",
    tabs: [
      { label: "Label", selected: true },
      { label: "Label" },
      { label: "Label" },
      { label: "Label" },
    ],
  },
};
export default meta;
type Story = StoryObj<typeof Bottomsheet>;

const variants = [
  { buttonClose: true, actionButton: true, showTitle: true },
  { buttonClose: true, actionButton: true, showTitle: false },
  { buttonClose: true, actionButton: false, showTitle: true },
  { buttonClose: true, actionButton: false, showTitle: false },
  { buttonClose: false, actionButton: true, showTitle: true },
  { buttonClose: false, actionButton: true, showTitle: false },
  { buttonClose: false, actionButton: false, showTitle: true },
  { buttonClose: false, actionButton: false, showTitle: false },
];

export const Default: Story = {
  render: (args) => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 393px)",
        gap: 16,
        alignItems: "end",
        padding: 12,
        background: "#ffffff",
      }}
    >
      {variants.map((variant, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "flex-end",
            width: 393,
            height: 852,
          }}
        >
          <Bottomsheet {...args} {...variant} />
        </div>
      ))}
    </div>
  ),
};
