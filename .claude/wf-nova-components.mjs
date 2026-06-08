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

const DEFAULT_ITEMS = [{"name":"Accordion","id":"50943:29095","variants":6,"w":393,"h":948},{"name":"NavigationBar","id":"51287:55934","variants":6,"w":433,"h":476},{"name":"Search","id":"50943:30637","variants":5,"w":433,"h":425},{"name":"TabFixed","id":"50943:27881","variants":4,"w":393,"h":340},{"name":"CardInfoList","id":"50943:29055","variants":4,"w":393,"h":566},{"name":"LayoutHomePageStack","id":"50965:20813","variants":4,"w":433,"h":1109},{"name":"Bottomsheet","id":"51333:109243","variants":4,"w":433,"h":1284},{"name":"Dropdown","id":"51504:27857","variants":4,"w":393,"h":578},{"name":"FilterBar","id":"51157:52598","variants":3,"w":433,"h":236},{"name":"Input","id":"51521:25412","variants":3,"w":393,"h":590},{"name":"Appbar","id":"51664:73057","variants":2,"w":433,"h":180},{"name":"Divider","id":"50943:27999","variants":2,"w":433,"h":65},{"name":"Footer","id":"50943:30545","variants":2,"w":433,"h":796},{"name":"Banner","id":"50990:58936","variants":2,"w":433,"h":284},{"name":"DetailInfo","id":"51083:55311","variants":2,"w":433,"h":542},{"name":"Alert","id":"51243:75943","variants":2,"w":393,"h":224},{"name":"BottomGroup","id":"51228:76344","variants":2,"w":433,"h":336},{"name":"Thumbnail","id":"51521:64384","variants":1,"w":433,"h":520},{"name":"CardProductHorizontalList","id":"50964:30879","variants":0,"w":353,"h":219},{"name":"TabScroll","id":"50964:27233","variants":0,"w":393,"h":47},{"name":"Chip","id":"50964:29387","variants":0,"w":393,"h":57},{"name":"LayoutPagestack","id":"50943:28865","variants":0,"w":393,"h":154},{"name":"Dialog","id":"50982:21648","variants":0,"w":353,"h":283},{"name":"TitleContentsSectionComplete","id":"50943:30595","variants":0,"w":393,"h":133},{"name":"CellDefault","id":"51819:84096","variants":0,"w":353,"h":138},{"name":"ChipsRow","id":"51161:52982","variants":0,"w":393,"h":102},{"name":"CardProductVerticalList","id":"51529:31707","variants":0,"w":352,"h":371},{"name":"Carousel","id":"51819:84703","variants":0,"w":353,"h":269},{"name":"CellCart","id":"51558:29668","variants":0,"w":353,"h":296},{"name":"CellCard","id":"50985:53834","variants":0,"w":393,"h":152}];

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
