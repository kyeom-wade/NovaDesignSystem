export const meta = {
  name: 'nova-figma-components',
  description: 'Generate Nova design-system React components from the SKT Figma "Item" page',
  phases: [
    { title: 'Generate', detail: 'one agent per component reads Figma design context and writes tsx/css/index' },
  ],
};

const FILE_KEY = 'OERQ6usD43e5xVjjy0A6V8';
const ROOT = '/Users/wade/NovaDesignSystem';
const COMPONENTS_DIR = ROOT + '/packages/component/src/components';
const TOKEN_VARS = ROOT + '/packages/token/src/generated/variables.css';

const DEFAULT_ITEMS = [{"name":"ButtonItem","id":"50943:30788","variants":104,"w":1391,"h":897},{"name":"TextItem","id":"51021:36122","variants":53,"w":782,"h":640},{"name":"TitleTextItem","id":"51082:49861","variants":16,"w":393,"h":1034},{"name":"ButtonIconItem","id":"51081:61398","variants":12,"w":177,"h":359},{"name":"InputItem","id":"50943:28032","variants":10,"w":826,"h":762},{"name":"NavigationTabItem","id":"51087:45622","variants":9,"w":362,"h":236},{"name":"BadgeItem","id":"50943:27966","variants":8,"w":300,"h":99},{"name":"CellPaymentItem","id":"51273:85926","variants":8,"w":393,"h":772},{"name":"CellRightTableItem","id":"51098:54763","variants":8,"w":393,"h":398},{"name":"CellTextItem","id":"50985:75650","variants":8,"w":393,"h":421},{"name":"TooltipItem","id":"50943:28013","variants":8,"w":432,"h":180},{"name":"CellRightItem","id":"50943:30682","variants":7,"w":107,"h":294},{"name":"CellTitleItem","id":"51048:38338","variants":7,"w":393,"h":355},{"name":"TitleSectionRightItem","id":"50943:30580","variants":7,"w":184,"h":293},{"name":"CardContentsListItem","id":"51084:42807","variants":6,"w":409,"h":569},{"name":"CellSelectedItem","id":"50985:75730","variants":6,"w":393,"h":344},{"name":"CellTableItem","id":"50985:75705","variants":6,"w":393,"h":299},{"name":"ThumbnailRoundItem","id":"50985:98026","variants":6,"w":352,"h":104},{"name":"ThumbnailSquareItem","id":"50943:27813","variants":6,"w":752,"h":216},{"name":"TitleSectionItem","id":"50985:80329","variants":6,"w":393,"h":415},{"name":"CellSheetItem","id":"51082:44667","variants":4,"w":393,"h":292},{"name":"CheckboxItem","id":"50943:30840","variants":4,"w":172,"h":58},{"name":"CheckboxTextItem","id":"50943:27986","variants":4,"w":348,"h":58},{"name":"ChipItem","id":"50943:28335","variants":4,"w":324,"h":77},{"name":"NavigationButtonItem","id":"51087:46531","variants":4,"w":807,"h":100},{"name":"RadioItem","id":"50943:30855","variants":4,"w":172,"h":58},{"name":"RadioTextItem","id":"50943:27973","variants":4,"w":348,"h":58},{"name":"ToogleItem","id":"51486:46290","variants":4,"w":232,"h":81},{"name":"AppBarItem","id":"51300:90701","variants":3,"w":148,"h":164},{"name":"CarouselGroupItem","id":"51529:29830","variants":3,"w":393,"h":845},{"name":"CarouselItem","id":"51093:41213","variants":3,"w":496,"h":315},{"name":"CellTextInfoItem","id":"50943:28269","variants":3,"w":433,"h":293},{"name":"ThumbnailRectangleItem","id":"51157:54958","variants":3,"w":649,"h":520},{"name":"TitleTextLeftItem","id":"50943:28006","variants":3,"w":80,"h":138},{"name":"BadgeIconItem","id":"50943:30627","variants":2,"w":318,"h":102},{"name":"BannerImageItem","id":"51243:74524","variants":2,"w":393,"h":244},{"name":"BottomGroupAiAreaItem","id":"51308:127243","variants":2,"w":433,"h":166},{"name":"BottomGroupAreaItem","id":"50990:41804","variants":2,"w":433,"h":172},{"name":"BottomGroupUpperItem","id":"51363:45164","variants":2,"w":393,"h":118},{"name":"DialogActionButtonItem","id":"50943:28567","variants":2,"w":401,"h":156},{"name":"IndicatorDotItem","id":"51715:81772","variants":2,"w":56,"h":44},{"name":"TabFixedItem","id":"51157:56812","variants":2,"w":413,"h":100},{"name":"TabScrollItem","id":"50943:28304","variants":2,"w":116,"h":75},{"name":"BottomSheetHandleItem","id":"50946:57023","variants":0,"w":393,"h":32},{"name":"CardProductVerticalListItem","id":"50946:38197","variants":0,"w":172,"h":371},{"name":"CaretItem","id":"51715:87224","variants":0,"w":1,"h":20},{"name":"CellBoxItem","id":"51273:84394","variants":0,"w":353,"h":124},{"name":"CellBrandItem","id":"51711:79865","variants":0,"w":353,"h":60},{"name":"CellProductItem","id":"51650:65033","variants":0,"w":353,"h":191},{"name":"ChipItemAIItem","id":"51032:40515","variants":0,"w":98,"h":44},{"name":"ChipItemQuicklinkItem","id":"50989:64700","variants":0,"w":92,"h":40},{"name":"IndicatorItem","id":"50946:57015","variants":0,"w":68,"h":4},{"name":"Loader","id":"51426:58757","variants":0,"w":25,"h":25},{"name":"TextGroupProductDetail","id":"51083:55039","variants":0,"w":353,"h":41},{"name":"TextGroupProductHorizontal","id":"50946:59518","variants":0,"w":305,"h":139},{"name":"TextGroupProductVertical","id":"50946:59494","variants":0,"w":172,"h":167}];

let items = DEFAULT_ITEMS;
try {
  if (Array.isArray(args) && args.length) items = args;
  else if (typeof args === 'string' && args.trim()) items = JSON.parse(args);
} catch (e) { items = DEFAULT_ITEMS; }

const REFERENCE = `
=== REFERENCE TEMPLATE (the existing Dialog component — match this exact style) ===

--- Dialog.tsx ---
import styles from "./Dialog.module.css";
// Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .Dialog (node 50982:21648)
// anatomy: container[ titleRow[ title ], subText[ text ], slot[ children ], actionRow[ secondaryBtn, primaryBtn ] ]
interface Props {
  title?: string;
  subText?: string;
  showSubText?: boolean;
  primaryLabel?: string;
  children?: React.ReactNode;
  onPrimary?: () => void;
}
export function Dialog({ title = "타이틀", subText = "텍스트", showSubText = true, primaryLabel = "확인", children, onPrimary }: Props) {
  return (
    <div className={styles.wrap} data-cx-component="Dialog">
      <div className={styles.titleRow}><span className={styles.title}>{title}</span></div>
      {showSubText && <div className={styles.subText}><p className={styles.subTextContent}>{subText}</p></div>}
      <div className={styles.slot}>{children}</div>
      <button type="button" className={styles.btnPrimary} onClick={onPrimary}>{primaryLabel}</button>
    </div>
  );
}

--- Dialog.module.css ---
/* Dialog — Figma node 50982:21648  (short anatomy notes here) */
.wrap {
  display: flex;
  flex-direction: column;
  background-color: var(--skt-color-bg-layer-floating, #ffffff);
  border-radius: var(--skt-radius-28, 28px);
  padding: var(--skt-spacing-28, 28px);
  font-family: var(--skt-typography-font-family-base, "Pretendard Variable", sans-serif);
}
.title { font-size: 20px; font-weight: 500; line-height: 1.3; letter-spacing: -0.05em; color: var(--skt-color-text-neutral-primary, #060c1f); }
.btnPrimary { background-color: var(--skt-color-fill-brand-primary, #3617ce); color: var(--skt-color-text-inverse-primary, #ffffff); }

--- Dialog/index.ts ---
export { Dialog } from "./Dialog";
=== END REFERENCE ===
`;

function buildPrompt(it) {
  const dir = `${COMPONENTS_DIR}/${it.name}`;
  return `You are generating ONE React component for the Nova design system from a Figma node.

COMPONENT: ${it.name}
FIGMA fileKey: ${FILE_KEY}
FIGMA nodeId: ${it.id}
(approx canvas ${it.w}x${it.h}, ${it.variants} variant symbols)

STEP 1 — Load the Figma MCP tools you need. Call ToolSearch with:
  query: "select:mcp__claude_ai_Figma__get_design_context,mcp__claude_ai_Figma__get_screenshot,mcp__claude_ai_Figma__get_variable_defs"
Then call get_design_context with fileKey="${FILE_KEY}" and nodeId="${it.id}" (clientFrameworks="react", clientLanguages="typescript,css"). This returns the real design (layout, text, colors, spacing). If it errors or is huge, fall back to get_screenshot for the same node to read the visual, and/or get_variable_defs to learn which design tokens the node uses.

STEP 2 — Read the available design tokens so your CSS uses real variables:
  Read ${TOKEN_VARS}  (these are the --skt-* CSS custom properties; pick the closest ones; ALWAYS include a literal fallback like var(--skt-color-..., #hex)).

STEP 3 — Implement the component following the REFERENCE TEMPLATE conventions below EXACTLY:
  - A function component: export function ${it.name}(props) { ... }
  - Use a CSS module: import styles from "./${it.name}.module.css"
  - First line after import is a comment: // Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .${it.name} (node ${it.id})
  - Then an anatomy comment describing the structure.
  - Root element MUST have data-cx-component="${it.name}".
  - Props: derive sensible, AI-friendly props from the VARIANTS (e.g. a Figma "Variants=Size=48*72" -> a 'size' enum prop; on/off states -> boolean props; text layers -> string props with Korean defaults matching the design). Give every prop a default so the component renders standalone.
  - Korean placeholder/default text is expected (this is a Korean product). Keep defaults from the design.
  - CSS: flexbox/grid, use --skt-* tokens with hex fallbacks, hardcode pixel values seen in the design where no token fits. No external deps, no Tailwind classes.
  - TypeScript strict-friendly: type the Props interface; for enums use string literal unions.

STEP 4 — Write EXACTLY these three files (use the Write tool, absolute paths):
  ${dir}/${it.name}.tsx
  ${dir}/${it.name}.module.css
  ${dir}/index.ts          ->  export { ${it.name} } from "./${it.name}";

STEP 5 — Return your structured result. The catalogEntry.props must be an object keyed by prop name, each value like { "type": "enum"|"string"|"boolean"|"number"|"node", "role": "...", optionally "values": [...], "defaultValue": ... }. Mirror the prop shapes used in the REFERENCE catalog style: enums MUST include a "values" array. Use kind = a short kebab-case noun. source = "react-component". version = "1.0.0".

${REFERENCE}

Do NOT touch any file outside ${dir}. Do NOT edit index.ts at src root or component-entries.ts — those are assembled separately. Return only the structured output.`;
}

const SCHEMA = {
  type: 'object',
  additionalProperties: false,
  properties: {
    name: { type: 'string' },
    success: { type: 'boolean' },
    exportStatement: { type: 'string', description: 'export { Name } from "./components/Name";' },
    catalogEntry: {
      type: 'object',
      additionalProperties: true,
      properties: {
        type: { type: 'string' },
        kind: { type: 'string' },
        source: { type: 'string' },
        version: { type: 'string' },
        description: { type: 'string' },
        aliases: { type: 'array', items: { type: 'string' } },
        props: { type: 'object', additionalProperties: true },
      },
      required: ['type', 'source', 'version', 'props'],
    },
    notes: { type: 'string' },
  },
  required: ['name', 'success', 'exportStatement', 'catalogEntry'],
};

phase('Generate');
log(`Generating ${items.length} components from Figma...`);

const results = await parallel(
  items.map((it) => () =>
    agent(buildPrompt(it), {
      label: `gen:${it.name}`,
      phase: 'Generate',
      schema: SCHEMA,
      model: 'sonnet',
    }).then((r) => r || { name: it.name, success: false, exportStatement: '', catalogEntry: null })
  )
);

const ok = results.filter((r) => r && r.success && r.catalogEntry);
const failed = results.filter((r) => !r || !r.success || !r.catalogEntry);
log(`Done: ${ok.length} ok, ${failed.length} failed`);

return { ok, failed, total: items.length };
