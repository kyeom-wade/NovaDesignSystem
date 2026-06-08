import type { Meta, StoryObj } from "@storybook/react-vite";
import { FilterBar } from "@cx/components";

const meta: Meta<typeof FilterBar> = {
  title: "cx/FilterBar",
  component: FilterBar as never,
  argTypes: {
    rightItem: { control: "select", options: ["None", "1Item", "2Item"] },
    divider: { control: "boolean" },
    count: { control: "number" },
    countUnit: { control: "text" },
    countLabel: { control: "text" },
    sortLabel: { control: "text" },
    filterLabel: { control: "text" },
    onSort: { control: false },
    onFilter: { control: false },
    className: { control: false },
  },
  args: {
    rightItem: "None",
    divider: true,
    count: 256,
    countUnit: "개",
    countLabel: "전체",
    sortLabel: "인기순",
    filterLabel: "필터",
  },
};
export default meta;
type Story = StoryObj<typeof FilterBar>;

export const Default: Story = {};

export const RightItemVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
      <div>
        <p style={{ margin: "12px 0 4px", fontSize: 12, color: "#888" }}>None — 카운트 레이블만 표시</p>
        <FilterBar rightItem="None" count={128} countLabel="전체" countUnit="개" divider />
      </div>
      <div>
        <p style={{ margin: "12px 0 4px", fontSize: 12, color: "#888" }}>1Item — 필터 버튼 포함</p>
        <FilterBar rightItem="1Item" count={64} countLabel="상품" countUnit="개" filterLabel="필터" divider />
      </div>
      <div>
        <p style={{ margin: "12px 0 4px", fontSize: 12, color: "#888" }}>2Item — 정렬 + 필터 버튼 포함</p>
        <FilterBar rightItem="2Item" count={32} countLabel="검색결과" countUnit="건" sortLabel="인기순" filterLabel="필터" divider />
      </div>
    </div>
  ),
};

export const DividerStates: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
      <div>
        <p style={{ margin: "12px 0 4px", fontSize: 12, color: "#888" }}>divider 활성화</p>
        <FilterBar rightItem="2Item" count={99} countLabel="전체" countUnit="개" sortLabel="최신순" filterLabel="필터" divider={true} />
      </div>
      <div>
        <p style={{ margin: "12px 0 4px", fontSize: 12, color: "#888" }}>divider 비활성화</p>
        <FilterBar rightItem="2Item" count={99} countLabel="전체" countUnit="개" sortLabel="최신순" filterLabel="필터" divider={false} />
      </div>
    </div>
  ),
};

export const SortLabels: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
      {(["인기순", "최신순", "낮은 가격순", "높은 가격순", "리뷰 많은 순"] as const).map((label) => (
        <div key={label}>
          <p style={{ margin: "12px 0 4px", fontSize: 12, color: "#888" }}>{label}</p>
          <FilterBar rightItem="2Item" count={256} countLabel="상품" countUnit="개" sortLabel={label} filterLabel="필터" divider />
        </div>
      ))}
    </div>
  ),
};

export const WithCallbacks: Story = {
  args: {
    rightItem: "2Item",
    count: 42,
    countLabel: "검색결과",
    countUnit: "건",
    sortLabel: "인기순",
    filterLabel: "필터",
    divider: true,
    onSort: () => alert("정렬 버튼 클릭"),
    onFilter: () => alert("필터 버튼 클릭"),
  },
};
