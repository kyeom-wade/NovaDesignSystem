import type { Meta, StoryObj } from "@storybook/react-vite";
import { AppBar, Icon } from "@cx/components";

// 디자인 SSOT: Figma SKT_GenUI AppBar (node 9343:20263) — 4 boolean 슬롯 조합
//   LeftItem ↔ showBack / Title ↔ title / RightItem ↔ rightItem / Logo ↔ showLogo
// cx 계약(component-entries): { title, showBack, showLogo, rightItem, onBack }
//   · showLogo는 showBack이 없을 때만 렌더(상호배타, 우선순위 showBack) — AppBar.tsx 구현 기준
const meta: Meta<typeof AppBar> = {
	title: "cx/AppBar",
	component: AppBar,
};
export default meta;
type Story = StoryObj<typeof AppBar>;

// RightItem 슬롯 = 우측 액션 아이콘(node). Figma는 장바구니·메뉴·스캔·닫기 등을 둔다.
const ShopMenu = (
	<>
		<Icon name="shopping" size={24} />
		<Icon name="menu" size={24} />
	</>
);

// 1) RightItem=On, Title=On, LeftItem=On, Logo=Off
export const BackTitleRight: Story = {
	render: () => <AppBar showBack title="결제하기" rightItem={ShopMenu} />,
};

// 2) RightItem=Off, Title=On, LeftItem=On, Logo=Off
export const BackTitle: Story = {
	render: () => <AppBar showBack title="결제하기" />,
};

// 3) RightItem=Off, Title=Off, LeftItem=On, Logo=Off
export const BackOnly: Story = {
	render: () => <AppBar showBack />,
};

// 4) RightItem=On, Title=Off, LeftItem=On, Logo=Off
export const BackRight: Story = {
	render: () => <AppBar showBack rightItem={ShopMenu} />,
};

// 5) RightItem=On(닫기), Title=Off, LeftItem=Off — 완료/인트로형 닫기 전용
export const CloseOnly: Story = {
	render: () => <AppBar rightItem={<Icon name="close" size={24} />} />,
};

// 6) Logo=On, RightItem=On, LeftItem=Off — 홈/허브 진입
export const LogoRight: Story = {
	render: () => (
		<AppBar
			showLogo
			rightItem={
				<>
					<Icon name="barcode" size={24} />
					<Icon name="shopping" size={24} />
					<Icon name="menu" size={24} />
				</>
			}
		/>
	),
};
