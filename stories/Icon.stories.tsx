import type { Meta, StoryObj } from "@storybook/react-vite";
import { Icon } from "@cx/components";

const NAMES = [
	// System (currentColor)
	"back", "close", "menu", "my", "my-fill", "search", "plus", "info", "download", "heart", "heart-fill",
	"bubble", "bubble-fill", "dropdown", "voice", "time", "barcode", "shopping", "shopping-fill",
	"arrow-up", "arrow-down", "arrow-left", "arrow-right",
	"ai-search",
	// Graphic (원색)
	"tlogo", "percent", "money", "call", "payment", "benefit", "subscribe", "terminal", "datagraph",
	"datashare", "rateplan", "familydata", "mobileplan", "pointdata", "calender", "data", "all",
	"family", "bill", "content", "device", "point", "tw", "tu",
];

const meta: Meta<typeof Icon> = {
	title: "cx/Icon",
	component: Icon,
};
export default meta;
type Story = StoryObj<typeof Icon>;

export const Single: Story = { args: { name: "back", size: 24 } };

export const AllIcons: Story = {
	render: () => (
		<div style={{ display: "grid", gridTemplateColumns: "repeat(6, 72px)", gap: 12, color: "#05001a" }}>
			{NAMES.map((name) => (
				<div key={name} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, fontSize: 10, color: "#6b7280" }}>
					<Icon name={name} size={24} />
					<span>{name}</span>
				</div>
			))}
		</div>
	),
};

export const Colored: Story = { args: { name: "heart", size: 32, color: "#ff0738" } };
