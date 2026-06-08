import type { Meta, StoryObj } from "@storybook/react-vite";
import { IconDropdown } from "@cx/components";

const meta: Meta<typeof IconDropdown> = {
  title: "cx/Icons/IconDropdown",
  component: IconDropdown as never,
  argTypes: {
    variant: { control: "select", options: ["DropdownDown", "DropdownUp"] },
    size: { control: "number" },
    color: { control: "color" },
    className: { control: false },
  },
  args: {
    variant: "DropdownDown",
    size: 24,
    color: "currentColor",
  },
};
export default meta;
type Story = StoryObj<typeof IconDropdown>;

export const Default: Story = {};

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
      <IconDropdown {...args} variant="DropdownDown" />
      <IconDropdown {...args} variant="DropdownUp" />
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
      <IconDropdown {...args} size={16} />
      <IconDropdown {...args} size={20} />
      <IconDropdown {...args} size={24} />
      <IconDropdown {...args} size={32} />
    </div>
  ),
};

export const Colors: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 0 }}>
      <div
        style={{
          background: "#ffffff",
          padding: 24,
          display: "flex",
          gap: 16,
          alignItems: "center",
        }}
      >
        <IconDropdown {...args} color="#000000" />
        <IconDropdown {...args} color="#0066ff" />
        <IconDropdown {...args} color="#e53935" />
      </div>
      <div
        style={{
          background: "#1a1a2e",
          padding: 24,
          display: "flex",
          gap: 16,
          alignItems: "center",
        }}
      >
        <IconDropdown {...args} color="#ffffff" />
        <IconDropdown {...args} color="#64b5f6" />
        <IconDropdown {...args} color="#ef9a9a" />
      </div>
    </div>
  ),
};
