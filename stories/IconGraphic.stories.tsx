import type { Meta, StoryObj } from "@storybook/react-vite";
import { IconGraphic } from "@cx/components";

const meta: Meta<typeof IconGraphic> = {
  title: "cx/Icons/IconGraphic",
  component: IconGraphic as never,
  argTypes: {
    variant: {
      control: "select",
      options: [
        "Family",
        "Data",
        "Bill",
        "Device",
        "Content",
        "Point",
        "Subscribe",
        "DataUnlimited",
        "Message",
        "Search",
        "Video",
        "Dummy",
      ],
    },
    size: { control: "number" },
    className: { control: false },
  },
  args: {
    variant: "Family",
    size: 24,
  },
};
export default meta;
type Story = StoryObj<typeof IconGraphic>;

export const Default: Story = {};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
      {(
        [
          "Family",
          "Data",
          "Bill",
          "Device",
          "Content",
          "Point",
          "Subscribe",
          "DataUnlimited",
          "Message",
          "Search",
          "Video",
          "Dummy",
        ] as const
      ).map((v) => (
        <div key={v} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
          <IconGraphic variant={v} size={24} />
          <span style={{ fontSize: 11, color: "#666" }}>{v}</span>
        </div>
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 24, alignItems: "flex-end" }}>
      {([16, 20, 24, 32] as const).map((s) => (
        <div key={s} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
          <IconGraphic variant="Family" size={s} />
          <span style={{ fontSize: 11, color: "#666" }}>{s}px</span>
        </div>
      ))}
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 0 }}>
      <div
        style={{
          background: "#ffffff",
          padding: 24,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
        }}
      >
        <IconGraphic variant="Family" size={32} />
        <span style={{ fontSize: 11, color: "#333" }}>Light bg</span>
      </div>
      <div
        style={{
          background: "#1a1a2e",
          padding: 24,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
        }}
      >
        <IconGraphic variant="Family" size={32} />
        <span style={{ fontSize: 11, color: "#ccc" }}>Dark bg</span>
      </div>
    </div>
  ),
};
