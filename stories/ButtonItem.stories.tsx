import type { Meta, StoryObj } from "@storybook/react-vite";
import { ButtonItem } from "@cx/components";

const meta: Meta<typeof ButtonItem> = {
	title: "cx/ButtonItem",
	component: ButtonItem as never,
	argTypes: {
		variant: {
			control: "select",
			options: ["Primary", "Secondary", "Outline", "Text", "TextIcon"],
		},
		size: {
			control: "select",
			options: ["Small", "Medium", "Large", "XLarge"],
		},
		state: {
			control: "select",
			options: ["Default", "Loading", "Disabled"],
		},
		danger: { control: "boolean" },
		icon: { control: "boolean" },
		showIcon: { control: false },
		label: { control: "text" },
	},
	args: {
		label: "버튼",
		variant: "Primary",
		size: "Large",
		state: "Default",
		danger: false,
		icon: true,
	},
};
export default meta;
type Story = StoryObj<typeof ButtonItem>;

// ─── Interactive (Controls 패널로 조작) ───────────────────────────────────
export const Default: Story = {};

// ─── Variants × Sizes (Danger Off) ───────────────────────────────────────
const VARIANTS = ["Primary", "Secondary", "Outline", "Text", "TextIcon"] as const;
const SIZES = ["XLarge", "Large", "Medium", "Small"] as const;

export const AllVariants: Story = {
	name: "All Variants (Danger Off)",
	render: () => (
		<div style={{ display: "flex", flexDirection: "column", gap: 32, padding: 24 }}>
			{SIZES.map((size) => (
				<div key={size}>
					<p style={{ marginBottom: 12, fontSize: 12, color: "#888", fontWeight: 600 }}>
						Size: {size}
					</p>
					<div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
						{VARIANTS.map((variant) => (
							<ButtonItem
								key={variant}
								variant={variant}
								size={size}
								state="Default"
								danger={false}
								label={variant === "TextIcon" ? "더보기" : "버튼"}
								icon={variant !== "Text"}
							/>
						))}
					</div>
				</div>
			))}
		</div>
	),
};

// ─── Danger On ────────────────────────────────────────────────────────────
export const DangerOn: Story = {
	name: "Danger On",
	render: () => (
		<div style={{ display: "flex", flexDirection: "column", gap: 32, padding: 24 }}>
			{SIZES.map((size) => (
				<div key={size}>
					<p style={{ marginBottom: 12, fontSize: 12, color: "#888", fontWeight: 600 }}>
						Size: {size}
					</p>
					<div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
						{(["Primary", "Secondary", "Outline"] as const).map((variant) => (
							<ButtonItem
								key={variant}
								variant={variant}
								size={size}
								state="Default"
								danger={true}
								label="삭제"
							/>
						))}
					</div>
				</div>
			))}
		</div>
	),
};

// ─── Loading ──────────────────────────────────────────────────────────────
export const Loading: Story = {
	name: "State: Loading",
	render: () => (
		<div style={{ display: "flex", flexDirection: "column", gap: 32, padding: 24 }}>
			{SIZES.map((size) => (
				<div key={size}>
					<p style={{ marginBottom: 12, fontSize: 12, color: "#888", fontWeight: 600 }}>
						Size: {size}
					</p>
					<div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
						{(["Primary", "Secondary", "Outline"] as const).map((variant) => (
							<ButtonItem
								key={variant}
								variant={variant}
								size={size}
								state="Loading"
								danger={false}
								label="버튼"
							/>
						))}
					</div>
				</div>
			))}
		</div>
	),
};

// ─── Disabled ─────────────────────────────────────────────────────────────
export const Disabled: Story = {
	name: "State: Disabled",
	render: () => (
		<div style={{ display: "flex", flexDirection: "column", gap: 32, padding: 24 }}>
			{SIZES.map((size) => (
				<div key={size}>
					<p style={{ marginBottom: 12, fontSize: 12, color: "#888", fontWeight: 600 }}>
						Size: {size}
					</p>
					<div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
						{VARIANTS.map((variant) => (
							<ButtonItem
								key={variant}
								variant={variant}
								size={size}
								state="Disabled"
								danger={false}
								label={variant === "TextIcon" ? "더보기" : "버튼"}
								icon={variant !== "Text"}
							/>
						))}
					</div>
				</div>
			))}
		</div>
	),
};

// ─── Icon (showIcon prop) ─────────────────────────────────────────────────
export const WithIcon: Story = {
	name: "With Icon",
	render: () => (
		<div style={{ display: "flex", flexDirection: "column", gap: 32, padding: 24 }}>
			{SIZES.map((size) => (
				<div key={size}>
					<p style={{ marginBottom: 12, fontSize: 12, color: "#888", fontWeight: 600 }}>
						Size: {size}
					</p>
					<div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
						{(["Primary", "Secondary", "Outline"] as const).map((variant) => (
							<ButtonItem
								key={variant}
								variant={variant}
								size={size}
								state="Default"
								danger={false}
								label="버튼"
								icon={true}
							/>
						))}
						<ButtonItem variant="TextIcon" size={size} state="Default" label="더보기" icon />
					</div>
				</div>
			))}
		</div>
	),
};
