import type { Meta, StoryObj } from "@storybook/react-vite";
import { ChipsRow } from "@cx/components";

const meta: Meta<typeof ChipsRow> = {
  title: "cx/ChipsRow",
  component: ChipsRow as never,
  argTypes: {
    rows: { control: false },
    paddingLeft: { control: "number" },
    className: { control: "text" },
  },
  args: {
    paddingLeft: 20,
  },
};
export default meta;
type Story = StoryObj<typeof ChipsRow>;

export const Default: Story = {};

const quicklinks = [
  { text: "쇼핑" },
  { text: "음식" },
  { text: "교통" },
  { text: "여행" },
  { text: "영화" },
  { text: "음악" },
];

const chips = [
  { text: "전체", selected: true },
  { text: "인기", selected: false },
  { text: "신상", selected: false },
  { text: "할인", selected: false },
];

export const WithIconsAndChips: Story = {
  args: {
    rows: [
      { quicklinks, chips },
    ],
  },
};

export const MultipleRows: Story = {
  args: {
    rows: [
      { quicklinks, chips },
      {
        quicklinks: [
          { text: "뉴스" },
          { text: "날씨" },
          { text: "스포츠" },
          { text: "금융" },
          { text: "건강" },
        ],
        chips: [
          { text: "오늘", selected: true },
          { text: "이번 주", selected: false },
          { text: "이번 달", selected: false },
        ],
      },
    ],
  },
};

export const States: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, padding: 16 }}>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>칩 선택 없음</p>
        <ChipsRow
          rows={[
            {
              chips: [
                { text: "전체", selected: false },
                { text: "인기", selected: false },
                { text: "신상", selected: false },
              ],
            },
          ]}
        />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>첫 번째 칩 선택됨</p>
        <ChipsRow
          rows={[
            {
              chips: [
                { text: "전체", selected: true },
                { text: "인기", selected: false },
                { text: "신상", selected: false },
              ],
            },
          ]}
        />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>두 번째 칩 선택됨</p>
        <ChipsRow
          rows={[
            {
              chips: [
                { text: "전체", selected: false },
                { text: "인기", selected: true },
                { text: "신상", selected: false },
              ],
            },
          ]}
        />
      </div>
    </div>
  ),
};

export const QuicklinksWithIcons: Story = {
  args: {
    rows: [
      {
        quicklinks: [
          { text: "쇼핑", iconSrc: "https://placehold.co/24x24", iconAlt: "쇼핑 아이콘" },
          { text: "음식", iconSrc: "https://placehold.co/24x24", iconAlt: "음식 아이콘" },
          { text: "교통", iconSrc: "https://placehold.co/24x24", iconAlt: "교통 아이콘" },
          { text: "여행", iconSrc: "https://placehold.co/24x24", iconAlt: "여행 아이콘" },
          { text: "영화", iconSrc: "https://placehold.co/24x24", iconAlt: "영화 아이콘" },
        ],
      },
    ],
  },
};

export const PaddingVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, padding: 16 }}>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>paddingLeft: 0</p>
        <ChipsRow rows={[{ quicklinks, chips }]} paddingLeft={0} />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>paddingLeft: 20 (기본값)</p>
        <ChipsRow rows={[{ quicklinks, chips }]} paddingLeft={20} />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888" }}>paddingLeft: 40</p>
        <ChipsRow rows={[{ quicklinks, chips }]} paddingLeft={40} />
      </div>
    </div>
  ),
};

export const ChipsOnly: Story = {
  args: {
    rows: [
      {
        chips: [
          { text: "전체", selected: true },
          { text: "인기", selected: false },
          { text: "신상", selected: false },
          { text: "할인", selected: false },
          { text: "추천", selected: false },
          { text: "브랜드", selected: false },
        ],
      },
    ],
  },
};

export const QuicklinksOnly: Story = {
  args: {
    rows: [
      {
        quicklinks: [
          { text: "홈" },
          { text: "쇼핑" },
          { text: "음식" },
          { text: "교통" },
          { text: "여행" },
          { text: "영화" },
          { text: "음악" },
          { text: "건강" },
        ],
      },
    ],
  },
};
