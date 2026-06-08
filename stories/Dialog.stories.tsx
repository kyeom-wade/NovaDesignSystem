import type { Meta, StoryObj } from "@storybook/react-vite";
import { Dialog } from "@cx/components";

const meta: Meta<typeof Dialog> = {
  title: "cx/Dialog",
  component: Dialog as never,
  argTypes: {
    title: { control: "text" },
    subText: { control: "text" },
    showSubText: { control: "boolean" },
    showContents: { control: "boolean" },
    children: { control: false },
    secondaryLabel: { control: "text" },
    primaryLabel: { control: "text" },
    onSecondary: { control: false },
    onPrimary: { control: false },
  },
  args: {
    title: "섹션/콘텐츠 타이틀",
    subText: "이 작업을 계속 진행하시겠습니까? 취소하면 변경사항이 저장되지 않습니다.",
    showSubText: true,
    showContents: false,
    secondaryLabel: "취소",
    primaryLabel: "확인",
  },
};
export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {};

export const WithSubText: Story = {
  args: {
    showSubText: true,
    subText: "서비스 이용약관에 동의하시면 다음 단계로 진행할 수 있습니다.",
    secondaryLabel: "취소",
    primaryLabel: "동의",
  },
};

export const WithoutSubText: Story = {
  args: {
    showSubText: false,
    title: "삭제하시겠습니까?",
    secondaryLabel: "취소",
    primaryLabel: "삭제",
  },
};

export const WithSlotContent: Story = {
  args: {
    title: "배송지 선택",
    showSubText: false,
    showContents: true,
    secondaryLabel: "취소",
    primaryLabel: "선택",
    children: (
      <div style={{ display: "flex", flexDirection: "column", gap: "8px", padding: "4px 0" }}>
        <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <input type="radio" name="addr" defaultChecked />
          <span>서울특별시 강남구 테헤란로 123</span>
        </label>
        <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <input type="radio" name="addr" />
          <span>경기도 성남시 분당구 판교로 456</span>
        </label>
      </div>
    ),
  },
};

export const States: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px", padding: "24px" }}>
      <div>
        <p style={{ marginBottom: "8px", fontWeight: "bold" }}>서브텍스트 있음</p>
        <Dialog
          title="알림"
          subText="변경사항을 저장하시겠습니까?"
          showSubText={true}
          showContents={false}
          secondaryLabel="취소"
          primaryLabel="저장"
        />
      </div>
      <div>
        <p style={{ marginBottom: "8px", fontWeight: "bold" }}>서브텍스트 없음</p>
        <Dialog
          title="삭제하시겠습니까?"
          showSubText={false}
          showContents={false}
          secondaryLabel="취소"
          primaryLabel="삭제"
        />
      </div>
      <div>
        <p style={{ marginBottom: "8px", fontWeight: "bold" }}>슬롯 콘텐츠 있음</p>
        <Dialog
          title="상품 선택"
          subText="구매할 상품을 선택해 주세요."
          showSubText={true}
          showContents={true}
          secondaryLabel="취소"
          primaryLabel="구매"
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <div style={{ padding: "8px", background: "#f5f5f5", borderRadius: "4px" }}>갤럭시 S25 — 1,299,000원</div>
            <div style={{ padding: "8px", background: "#f5f5f5", borderRadius: "4px" }}>갤럭시 탭 S10 — 899,000원</div>
          </div>
        </Dialog>
      </div>
    </div>
  ),
};
