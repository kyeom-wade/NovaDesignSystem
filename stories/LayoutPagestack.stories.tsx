import type { Meta, StoryObj } from "@storybook/react-vite";
import { LayoutPagestack } from "@cx/components";

const meta: Meta<typeof LayoutPagestack> = {
  title: "cx/LayoutPagestack",
  component: LayoutPagestack as never,
  argTypes: {
    contentsTitle: { control: "boolean" },
    title: { control: "text" },
    titleSwap: { control: false },
    children: { control: false },
  },
  args: {
    contentsTitle: true,
    title: "섹션/콘텐츠 타이틀",
  },
};
export default meta;
type Story = StoryObj<typeof LayoutPagestack>;

export const Default: Story = {
  args: {
    children: (
      <div style={{ padding: "16px", background: "#f5f5f5", borderRadius: "8px" }}>
        <p style={{ margin: 0 }}>페이지 콘텐츠 영역입니다.</p>
      </div>
    ),
  },
};

export const WithoutTitle: Story = {
  args: {
    contentsTitle: false,
    children: (
      <div style={{ padding: "16px", background: "#f5f5f5", borderRadius: "8px" }}>
        <p style={{ margin: 0 }}>타이틀 없이 콘텐츠만 표시되는 영역입니다.</p>
      </div>
    ),
  },
};

export const WithCustomTitleSwap: Story = {
  args: {
    contentsTitle: true,
    titleSwap: (
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <span style={{ fontWeight: "bold", fontSize: "18px" }}>커스텀 타이틀</span>
        <span style={{ fontSize: "12px", color: "#888" }}>전체보기</span>
      </div>
    ),
    children: (
      <div style={{ padding: "16px", background: "#f5f5f5", borderRadius: "8px" }}>
        <p style={{ margin: 0 }}>커스텀 타이틀 슬롯이 적용된 콘텐츠 영역입니다.</p>
      </div>
    ),
  },
};

export const WithRichContent: Story = {
  args: {
    title: "추천 상품",
    children: (
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {["상품명 A", "상품명 B", "상품명 C"].map((name) => (
          <div
            key={name}
            style={{
              padding: "12px 16px",
              background: "#fff",
              border: "1px solid #e0e0e0",
              borderRadius: "8px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>{name}</span>
            <span style={{ color: "#0066ff", fontWeight: "bold" }}>29,900원</span>
          </div>
        ))}
      </div>
    ),
  },
};

export const States: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px", padding: "16px" }}>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#888" }}>타이틀 표시 (기본)</p>
        <LayoutPagestack contentsTitle={true} title="섹션 타이틀">
          <div style={{ padding: "16px", background: "#f5f5f5", borderRadius: "8px" }}>
            <p style={{ margin: 0 }}>콘텐츠 영역</p>
          </div>
        </LayoutPagestack>
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#888" }}>타이틀 숨김</p>
        <LayoutPagestack contentsTitle={false}>
          <div style={{ padding: "16px", background: "#f5f5f5", borderRadius: "8px" }}>
            <p style={{ margin: 0 }}>콘텐츠 영역</p>
          </div>
        </LayoutPagestack>
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#888" }}>커스텀 타이틀 슬롯</p>
        <LayoutPagestack
          contentsTitle={true}
          titleSwap={
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
              <span style={{ fontWeight: "bold" }}>커스텀 타이틀</span>
              <button style={{ fontSize: "12px", background: "none", border: "none", color: "#0066ff", cursor: "pointer" }}>더보기</button>
            </div>
          }
        >
          <div style={{ padding: "16px", background: "#f5f5f5", borderRadius: "8px" }}>
            <p style={{ margin: 0 }}>콘텐츠 영역</p>
          </div>
        </LayoutPagestack>
      </div>
    </div>
  ),
};
