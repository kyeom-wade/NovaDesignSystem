import type { Meta, StoryObj } from "@storybook/react-vite";
import { AppBarItem, IconClose, IconMenu, IconSearch } from "@cx/components";

const meta: Meta<typeof AppBarItem> = {
  title: "cx/AppBarItem",
  component: AppBarItem as never,
  argTypes: {
    count: { control: "select", options: [1, 2, 3] },
    buttons: { control: false },
    className: { control: "text" },
  },
  args: {
    count: 1,
    buttons: [],
  },
};
export default meta;
type Story = StoryObj<typeof AppBarItem>;

export const Default: Story = {};

export const OneButton: Story = {
  args: {
    count: 1,
    buttons: [{ "aria-label": "검색", children: <IconSearch /> }],
  },
};

export const TwoButtons: Story = {
  args: {
    count: 2,
    buttons: [
      { "aria-label": "검색", children: <IconSearch /> },
      { "aria-label": "메뉴", children: <IconMenu /> },
    ],
  },
};

export const ThreeButtons: Story = {
  args: {
    count: 3,
    buttons: [
      { "aria-label": "검색", children: <IconSearch /> },
      { "aria-label": "메뉴", children: <IconMenu /> },
      { "aria-label": "닫기", children: <IconClose /> },
    ],
  },
};

export const AllCounts: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, padding: 24 }}>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>count=1</p>
        <AppBarItem count={1} buttons={[{ "aria-label": "검색", children: <IconSearch /> }]} />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>count=2</p>
        <AppBarItem
          count={2}
          buttons={[
            { "aria-label": "검색", children: <IconSearch /> },
            { "aria-label": "메뉴", children: <IconMenu /> },
          ]}
        />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>count=3</p>
        <AppBarItem
          count={3}
          buttons={[
            { "aria-label": "검색", children: <IconSearch /> },
            { "aria-label": "메뉴", children: <IconMenu /> },
            { "aria-label": "닫기", children: <IconClose /> },
          ]}
        />
      </div>
    </div>
  ),
};

export const WithIconGroup: Story = {
  args: {
    count: 3,
    buttons: [
      {
        "aria-label": "검색",
        children: <IconSearch />,
      },
      {
        "aria-label": "메뉴",
        children: <IconMenu />,
      },
      {
        "aria-label": "닫기",
        children: <IconClose />,
      },
    ],
  },
};

export const WithClickHandlers: Story = {
  args: {
    count: 2,
    buttons: [
      {
        "aria-label": "검색",
        children: <IconSearch />,
        onClick: () => alert("검색 버튼 클릭"),
      },
      {
        "aria-label": "메뉴",
        children: <IconMenu />,
        onClick: () => alert("메뉴 버튼 클릭"),
      },
    ],
  },
};
