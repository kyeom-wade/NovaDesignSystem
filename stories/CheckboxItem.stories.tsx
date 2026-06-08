import type { Meta, StoryObj } from "@storybook/react-vite";
import { CheckboxItem } from "@cx/components";

const meta: Meta<typeof CheckboxItem> = {
	title: "cx/CheckboxItem",
	component: CheckboxItem as never,
	argTypes: {
		checked: { control: "boolean" },
		disabled: { control: "boolean" },
		label: { control: "text" },
		showLabel: { control: "boolean" },
		onChange: { control: false },
		className: { control: false },
	},
	args: {
		checked: false,
		disabled: false,
		label: "항목",
		showLabel: true,
	},
};
export default meta;
type Story = StoryObj<typeof CheckboxItem>;

export const Default: Story = {};

export const States: Story = {
	name: "States",
	render: () => (
		<div style={{ display: "flex", flexDirection: "column", gap: 24, padding: 24 }}>
			<div>
				<p style={{ marginBottom: 12, fontSize: 12, color: "#888", fontWeight: 600 }}>
					Unchecked / Checked
				</p>
				<div style={{ display: "flex", gap: 20, alignItems: "center" }}>
					<CheckboxItem checked={false} label="미선택" showLabel />
					<CheckboxItem checked={true} label="선택됨" showLabel />
				</div>
			</div>
			<div>
				<p style={{ marginBottom: 12, fontSize: 12, color: "#888", fontWeight: 600 }}>
					Disabled
				</p>
				<div style={{ display: "flex", gap: 20, alignItems: "center" }}>
					<CheckboxItem checked={false} disabled label="비활성 미선택" showLabel />
					<CheckboxItem checked={true} disabled label="비활성 선택됨" showLabel />
				</div>
			</div>
		</div>
	),
};

export const WithoutLabel: Story = {
	name: "Without Label",
	render: () => (
		<div style={{ display: "flex", flexDirection: "column", gap: 24, padding: 24 }}>
			<div>
				<p style={{ marginBottom: 12, fontSize: 12, color: "#888", fontWeight: 600 }}>
					showLabel: false
				</p>
				<div style={{ display: "flex", gap: 20, alignItems: "center" }}>
					<CheckboxItem checked={false} showLabel={false} />
					<CheckboxItem checked={true} showLabel={false} />
					<CheckboxItem checked={false} disabled showLabel={false} />
					<CheckboxItem checked={true} disabled showLabel={false} />
				</div>
			</div>
		</div>
	),
};

export const List: Story = {
	name: "List Example",
	render: () => (
		<div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 12 }}>
			<p style={{ marginBottom: 8, fontSize: 12, color: "#888", fontWeight: 600 }}>
				목록 선택 예시
			</p>
			<CheckboxItem checked={true} label="전체 동의" showLabel />
			<CheckboxItem checked={true} label="이용약관 동의 (필수)" showLabel />
			<CheckboxItem checked={false} label="개인정보 수집 동의 (필수)" showLabel />
			<CheckboxItem checked={false} label="마케팅 수신 동의 (선택)" showLabel />
			<CheckboxItem checked={false} disabled label="서비스 이용 불가 항목" showLabel />
		</div>
	),
};
