import type { Meta, StoryObj } from "@storybook/react-vite";
import { CardInfo } from "@cx/components";

const meta: Meta<typeof CardInfo> = {
	title: "cx/CardInfo",
	component: CardInfo,
};
export default meta;
type Story = StoryObj<typeof CardInfo>;

export const Brand: Story = {
	args: { type: "Brand", label: "편의점", title: "세븐일레븐", badges: ["할인", "적립", "사용"], logoColor: "#016a41" },
};

export const Place: Story = {
	args: { type: "Place", pinNumber: 1, distance: "47m", placeName: "논현럭키점", actionLabel: "전화" },
};
