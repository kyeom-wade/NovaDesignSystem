import type { Meta, StoryObj } from "@storybook/react-vite";
import { Bottomsheet } from "@cx/components";

const meta: Meta<typeof Bottomsheet> = {
  title: "cx/Bottomsheet",
  component: Bottomsheet as never,
  argTypes: {
    variant: { control: "select", options: ["ButtonClose", "Handle"] },
    title: { control: "text" },
    subText: { control: "text" },
    showSubText: { control: "boolean" },
    showTab: { control: "boolean" },
    tabs: { control: false },
    activeTab: { control: "number" },
    onTabChange: { control: false },
    onClose: { control: false },
    showActionGroup: { control: "boolean" },
    primaryLabel: { control: "text" },
    secondaryLabel: { control: "text" },
    onPrimary: { control: false },
    onSecondary: { control: false },
    aiHintText: { control: "text" },
    children: { control: false },
  },
  args: {
    variant: "ButtonClose",
    title: "섹션/콘텐츠 타이틀",
    subText: "서브 텍스트 설명이 들어갑니다",
    showSubText: true,
    showTab: true,
    activeTab: 0,
    showActionGroup: true,
    primaryLabel: "구독하기",
    secondaryLabel: "선물하기",
    aiHintText: "AI가 추천하는 상품입니다",
    tabs: [
      { label: "전체", selected: true },
      { label: "인기" },
      { label: "신상품" },
      { label: "혜택" },
      { label: "이벤트" },
      { label: "더보기" },
    ],
  },
};
export default meta;
type Story = StoryObj<typeof Bottomsheet>;

export const Default: Story = {
  args: {
    children: (
      <div style={{ padding: "16px" }}>
        <p style={{ margin: 0, fontSize: 14, color: "#444" }}>
          바텀시트 본문 영역입니다. 다양한 콘텐츠를 여기에 배치할 수 있습니다.
        </p>
      </div>
    ),
  },
};

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 48, padding: 24 }}>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888", fontWeight: 600 }}>
          variant: ButtonClose
        </p>
        <Bottomsheet
          {...args}
          variant="ButtonClose"
          title="섹션/콘텐츠 타이틀"
          subText="서브 텍스트 설명이 들어갑니다"
        >
          <div style={{ padding: "16px" }}>
            <p style={{ margin: 0, fontSize: 14, color: "#444" }}>
              ButtonClose 변형입니다. 우측 상단에 X 버튼이 표시됩니다.
            </p>
          </div>
        </Bottomsheet>
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888", fontWeight: 600 }}>
          variant: Handle
        </p>
        <Bottomsheet {...args} variant="Handle">
          <div style={{ padding: "16px" }}>
            <p style={{ margin: 0, fontSize: 14, color: "#444" }}>
              Handle 변형입니다. 상단에 드래그 핸들이 표시됩니다.
            </p>
          </div>
        </Bottomsheet>
      </div>
    </div>
  ),
};

export const WithoutActionGroup: Story = {
  args: {
    showActionGroup: false,
    children: (
      <div style={{ padding: "16px" }}>
        <p style={{ margin: 0, fontSize: 14, color: "#444" }}>
          액션 그룹이 없는 바텀시트입니다. 단순 정보 표시에 적합합니다.
        </p>
      </div>
    ),
  },
};

export const WithoutTabs: Story = {
  args: {
    showTab: false,
    children: (
      <div style={{ padding: "16px" }}>
        <p style={{ margin: 0, fontSize: 14, color: "#444" }}>
          탭이 없는 바텀시트입니다.
        </p>
      </div>
    ),
  },
};

export const SubTextStates: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 48, padding: 24 }}>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888", fontWeight: 600 }}>
          showSubText: true
        </p>
        <Bottomsheet {...args} showSubText={true} subText="서브 텍스트가 표시됩니다">
          <div style={{ padding: "16px" }}>
            <p style={{ margin: 0, fontSize: 14, color: "#444" }}>본문 내용</p>
          </div>
        </Bottomsheet>
      </div>
      <div>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888", fontWeight: 600 }}>
          showSubText: false
        </p>
        <Bottomsheet {...args} showSubText={false}>
          <div style={{ padding: "16px" }}>
            <p style={{ margin: 0, fontSize: 14, color: "#444" }}>본문 내용</p>
          </div>
        </Bottomsheet>
      </div>
    </div>
  ),
};

export const ProductContent: Story = {
  args: {
    title: "인기 상품 목록",
    subText: "지금 가장 많이 찾는 상품",
    showSubText: true,
    showTab: true,
    showActionGroup: true,
    primaryLabel: "바로 구매",
    secondaryLabel: "찜하기",
    aiHintText: "T AI가 회원님의 취향을 분석했습니다",
    tabs: [
      { label: "스마트폰", selected: true },
      { label: "태블릿" },
      { label: "웨어러블" },
      { label: "액세서리" },
    ],
    children: (
      <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: 12 }}>
        {[
          { name: "갤럭시 S25 울트라", price: "1,799,800원" },
          { name: "아이폰 16 Pro", price: "1,550,000원" },
          { name: "갤럭시 Z 폴드6", price: "2,099,400원" },
        ].map((item) => (
          <div
            key={item.name}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "12px",
              background: "#f7f8fa",
              borderRadius: 8,
            }}
          >
            <span style={{ fontSize: 14, fontWeight: 500 }}>{item.name}</span>
            <span style={{ fontSize: 14, color: "#3617ce", fontWeight: 600 }}>
              {item.price}
            </span>
          </div>
        ))}
      </div>
    ),
  },
};

export const HandleVariantWithContent: Story = {
  args: {
    variant: "Handle",
    showTab: true,
    showActionGroup: true,
    primaryLabel: "신청하기",
    secondaryLabel: "자세히 보기",
    aiHintText: "AI 추천 요금제입니다",
    tabs: [
      { label: "5G", selected: true },
      { label: "LTE" },
      { label: "시니어" },
      { label: "청소년" },
    ],
    children: (
      <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: 12 }}>
        {[
          { plan: "5G 프리미어 플러스", data: "완전 무제한", price: "월 89,000원" },
          { plan: "5G 슬림", data: "10GB", price: "월 55,000원" },
        ].map((item) => (
          <div
            key={item.plan}
            style={{
              padding: "14px",
              border: "1px solid #e0e0e0",
              borderRadius: 10,
            }}
          >
            <p style={{ margin: "0 0 4px", fontSize: 15, fontWeight: 600 }}>{item.plan}</p>
            <p style={{ margin: "0 0 4px", fontSize: 13, color: "#666" }}>{item.data}</p>
            <p style={{ margin: 0, fontSize: 14, color: "#3617ce", fontWeight: 600 }}>
              {item.price}
            </p>
          </div>
        ))}
      </div>
    ),
  },
};
