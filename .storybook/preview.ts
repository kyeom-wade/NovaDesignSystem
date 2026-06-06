import type { Preview } from "@storybook/react-vite";
// cx 토큰 CSS 변수(색·간격) — 실제 컴포넌트 스타일에 필요
import "@cx/tokens/variables.css";

const preview: Preview = {
	parameters: {
		layout: "centered",
		controls: { expanded: true },
	},
};

export default preview;
