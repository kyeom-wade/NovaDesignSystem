import type { Meta, StoryObj } from "@storybook/react-vite";
import { TitleTextItem } from "@cx/components";

const meta: Meta<typeof TitleTextItem> = {
  title: "cx/TitleTextItem",
  component: TitleTextItem as never,
  argTypes: {
    variants: { control: "select", options: ["16", "18"] },
    title: { control: "text" },
    subText: { control: "boolean" },
    subtitle: { control: "text" },
    textRight: { control: "boolean" },
    textRightValue: { control: "text" },
    subTextContent: { table: { disable: true } },
    optionText: { table: { disable: true } },
    optionLabel: { table: { disable: true } },
    textLeft: { table: { disable: true } },
    textLeftValue: { table: { disable: true } },
    titleSize: { table: { disable: true } },
    titleWeight: { table: { disable: true } },
    fluid: { table: { disable: true } },
    className: { control: false },
  },
  args: {
    variants: "16",
    title: "섹션/콘텐츠 타이틀",
    subText: false,
    subtitle: "서브 텍스트",
    textRight: false,
    textRightValue: "00",
  },
};

export default meta;
type Story = StoryObj<typeof TitleTextItem>;

export const Default: Story = {};

export const Size18: Story = {
  args: {
    variants: "18",
  },
};

export const WithSubText: Story = {
  args: {
    subText: true,
    subtitle: "서브 텍스트",
  },
};

export const WithRightText: Story = {
  args: {
    textRight: true,
    textRightValue: "00",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 20, padding: 24, width: 353 }}>
      <TitleTextItem variants="16" title="섹션/콘텐츠 타이틀" />
      <TitleTextItem variants="16" title="섹션/콘텐츠 타이틀" subText subtitle="서브 텍스트" />
      <TitleTextItem variants="16" title="섹션/콘텐츠 타이틀" textRight textRightValue="00" />
      <TitleTextItem variants="16" title="섹션/콘텐츠 타이틀" textRight textRightValue="00" subText subtitle="서브 텍스트" />
      <TitleTextItem variants="18" title="섹션/콘텐츠 타이틀" textRight textRightValue="00" />
      <TitleTextItem variants="18" title="섹션/콘텐츠 타이틀" textRight textRightValue="00" subText subtitle="서브 텍스트" />
      <TitleTextItem variants="18" title="섹션/콘텐츠 타이틀" subText subtitle="서브 텍스트" />
      <TitleTextItem variants="18" title="섹션/콘텐츠 타이틀" />
    </div>
  ),
};
