import type { StorybookConfig } from "@storybook/react-vite";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
// .storybook → NovaDesignSystem 루트. cx 소스는 이 레포 내부 packages/*.
const CX_SRC = path.resolve(__dirname, "../packages/component/src");
const TOKEN_SRC = path.resolve(__dirname, "../packages/token/src");

const config: StorybookConfig = {
	stories: ["../stories/**/*.stories.@(ts|tsx)"],
	addons: [],
	framework: { name: "@storybook/react-vite", options: {} },
	async viteFinal(cfg) {
		cfg.resolve = cfg.resolve ?? {};
		const existing = Array.isArray(cfg.resolve.alias)
			? cfg.resolve.alias
			: Object.entries(cfg.resolve.alias ?? {}).map(([find, replacement]) => ({ find, replacement: replacement as string }));
		// @cx/* 를 이 레포 내부 소스로 해소 (workspace 소스 직접 번들)
		cfg.resolve.alias = [
			{ find: "@cx/components/catalog", replacement: path.join(CX_SRC, "catalog.ts") },
			{ find: "@cx/tokens/variables.css", replacement: path.join(TOKEN_SRC, "variables.css") },
			{ find: "@cx/tokens/tailwind.css", replacement: path.join(TOKEN_SRC, "tailwind.css") },
			{ find: "@cx/components", replacement: CX_SRC },
			{ find: "@cx/tokens", replacement: path.join(TOKEN_SRC, "index.ts") },
			...existing,
		];
		return cfg;
	},
};

export default config;
