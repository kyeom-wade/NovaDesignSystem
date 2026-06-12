import type { Meta, StoryObj } from "@storybook/react-vite";
import { CardItem } from "@cx/components";

const meta: Meta<typeof CardItem> = {
  title: "cx/CardItem",
  component: CardItem as never,
  argTypes: {
    variants: { control: "select", options: ["Filled", "Line"] },
    children: { control: false },
    className: { control: false },
  },
  args: {
    variants: "Filled",
  },
};

export default meta;
type Story = StoryObj<typeof CardItem>;

const SlotPreview = () => (
  <div style={{ width: "100%", height: "100%", background: "rgba(5, 42, 142, 0.03)" }} />
);

export const Default: Story = {
  args: {
    children: <SlotPreview />,
  },
};

export const Line: Story = {
  args: {
    variants: "Line",
    children: <SlotPreview />,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, padding: 24 }}>
      <CardItem variants="Filled">
        <SlotPreview />
      </CardItem>
      <CardItem variants="Line">
        <SlotPreview />
      </CardItem>
    </div>
  ),
};
