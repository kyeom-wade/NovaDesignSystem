import type { Meta, StoryObj } from "@storybook/react-vite";
import { IndicatorItem } from "@cx/components";

const meta: Meta<typeof IndicatorItem> = {
  title: "cx/IndicatorItem",
  component: IndicatorItem as never,
  argTypes: {
    count: { control: "number" },
    activeIndex: { control: "number" },
    onDotClick: { control: false },
    ariaLabel: { control: "text" },
  },
  args: {
    count: 6,
    activeIndex: 0,
    ariaLabel: "페이지 인디케이터",
  },
};
export default meta;
type Story = StoryObj<typeof IndicatorItem>;

export const Default: Story = {};

export const ActiveDots: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px", padding: "24px" }}>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#666" }}>첫 번째 활성 (activeIndex: 0)</p>
        <IndicatorItem count={5} activeIndex={0} />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#666" }}>두 번째 활성 (activeIndex: 1)</p>
        <IndicatorItem count={5} activeIndex={1} />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#666" }}>가운데 활성 (activeIndex: 2)</p>
        <IndicatorItem count={5} activeIndex={2} />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#666" }}>마지막 활성 (activeIndex: 4)</p>
        <IndicatorItem count={5} activeIndex={4} />
      </div>
    </div>
  ),
};

export const DotCounts: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px", padding: "24px" }}>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#666" }}>3개</p>
        <IndicatorItem count={3} activeIndex={0} />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#666" }}>5개</p>
        <IndicatorItem count={5} activeIndex={0} />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#666" }}>6개 (기본값)</p>
        <IndicatorItem count={6} activeIndex={0} />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#666" }}>8개</p>
        <IndicatorItem count={8} activeIndex={0} />
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#666" }}>10개</p>
        <IndicatorItem count={10} activeIndex={0} />
      </div>
    </div>
  ),
};

export const Interactive: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "24px" }}>
      <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#666" }}>점을 클릭하면 콘솔에 인덱스가 출력됩니다</p>
      <IndicatorItem
        count={6}
        activeIndex={2}
        onDotClick={(index) => console.log("클릭된 인덱스:", index)}
        ariaLabel="슬라이드 인디케이터"
      />
    </div>
  ),
};
