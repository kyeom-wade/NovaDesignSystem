export const meta = {
  name: 'nova-figma-icons',
  description: 'Generate Nova icon components (inline SVG) from the SKT Figma IconItem set',
  phases: [
    { title: 'Icons', detail: 'one agent per icon frame extracts SVG and writes a React icon component' },
  ],
};

const FILE_KEY = 'OERQ6usD43e5xVjjy0A6V8';
const ROOT = '/Users/wade/NovaDesignSystem';
const COMPONENTS_DIR = ROOT + '/packages/component/src/components';
const TOKEN_VARS = ROOT + '/packages/token/src/generated/variables.css';

// name = sanitized component name; figmaName = original Figma layer name; id = node id; variants = symbol count
const DEFAULT_ITEMS = [
  {"name":"IconGraphic","figmaName":"IconItem/Graphic","id":"51561:34948","variants":12},
  {"name":"IconNavigate","figmaName":"IconItem/Navigate","id":"51561:35049","variants":6},
  {"name":"IconLogo","figmaName":"IconItem/Logo","id":"51561:60017","variants":9},
  {"name":"IconItem","figmaName":"IconItem","id":"51561:60021","variants":7},
  {"name":"IconSearch","figmaName":"IconItem/Nomal/Search","id":"51578:64591","variants":2},
  {"name":"IconCalender","figmaName":"IconItem/Nomal/Calender","id":"51578:64653","variants":1},
  {"name":"IconDropdown","figmaName":"IconItem/Nomal/Dropdown","id":"51578:64728","variants":2},
  {"name":"IconBubble","figmaName":"IconItem/Nomal/Bubble","id":"51578:64729","variants":2},
  {"name":"IconHeart","figmaName":"IconItem/Nomal/Heart","id":"51578:64730","variants":2},
  {"name":"IconDuoHeart","figmaName":"IconItem/Nomal/DuoHeart","id":"51625:63423","variants":2},
  {"name":"IconInfo","figmaName":"IconItem/Nomal/Info","id":"51578:64731","variants":2},
  {"name":"IconFilter","figmaName":"IconItem/Nomal/Filter","id":"51578:64734","variants":2},
  {"name":"IconCart","figmaName":"IconItem/Nomal/Cart","id":"51578:64735","variants":2},
  {"name":"IconArrow","figmaName":"IconItem/Nomal/Arrow","id":"51578:64737","variants":4},
  {"name":"IconLocation","figmaName":"IconItem/Nomal/Location","id":"51578:64788","variants":1},
  {"name":"Icon0","figmaName":"IconItem/Nomal/0","id":"51578:64790","variants":1},
  {"name":"IconDummy","figmaName":"IconItem/Nomal/Dummy","id":"51578:64791","variants":1},
  {"name":"IconEvent","figmaName":"IconItem/Nomal/Event","id":"51578:64793","variants":1},
  {"name":"IconCategory","figmaName":"IconItem/Nomal/Category","id":"51578:64794","variants":1},
  {"name":"IconVip","figmaName":"IconItem/Nomal/Vip","id":"51578:64828","variants":1},
  {"name":"IconMovie","figmaName":"IconItem/Nomal/Movie","id":"51578:64839","variants":1},
  {"name":"IconGlobal","figmaName":"IconItem/Nomal/Global","id":"51578:64849","variants":1},
  {"name":"IconDevice","figmaName":"IconItem/Nomal/Device","id":"51578:64850","variants":1},
  {"name":"IconData","figmaName":"IconItem/Nomal/Data","id":"51578:64851","variants":1},
  {"name":"IconBack","figmaName":"IconItem/Nomal/Back","id":"51578:64852","variants":1},
  {"name":"IconWon","figmaName":"IconItem/Nomal/Won","id":"51578:64865","variants":1},
  {"name":"IconPlus","figmaName":"IconItem/Nomal/Plus","id":"51578:64866","variants":1},
  {"name":"IconLink","figmaName":"IconItem/Nomal/Link","id":"51578:64876","variants":1},
  {"name":"IconFamily","figmaName":"IconItem/Nomal/Family","id":"51578:64877","variants":1},
  {"name":"IconAccessory","figmaName":"IconItem/Nomal/Accessory","id":"51578:64903","variants":1},
  {"name":"IconService","figmaName":"IconItem/Nomal/Service","id":"51578:64906","variants":1},
  {"name":"IconSubscribe","figmaName":"IconItem/Nomal/Subscribe","id":"51578:64950","variants":1},
  {"name":"IconDownload","figmaName":"IconItem/Nomal/Download","id":"51578:64951","variants":1},
  {"name":"IconVoice","figmaName":"IconItem/Nomal/Voice","id":"51578:64955","variants":1},
  {"name":"IconHistory","figmaName":"IconItem/Nomal/History","id":"51578:64956","variants":1},
  {"name":"IconMenu","figmaName":"IconItem/Nomal/Menu","id":"51578:64957","variants":1},
  {"name":"IconBarcode","figmaName":"IconItem/Nomal/Barcode","id":"51578:64958","variants":1},
  {"name":"IconClose","figmaName":"IconItem/Nomal/Close","id":"51578:64959","variants":1},
  {"name":"IconMapDotNumber","figmaName":"IconItem/Nomal/MapDotNumber","id":"51693:75652","variants":5},
];

let items = DEFAULT_ITEMS;
try {
  if (Array.isArray(args) && args.length) items = args;
  else if (typeof args === 'string' && args.trim()) items = JSON.parse(args);
} catch (e) { items = DEFAULT_ITEMS; }

function buildPrompt(it) {
  const dir = `${COMPONENTS_DIR}/${it.name}`;
  return `You are generating ONE React ICON component for the Nova design system by extracting the real SVG from a Figma node.

COMPONENT NAME: ${it.name}
FIGMA layer name: ${it.figmaName}
FIGMA fileKey: ${FILE_KEY}
FIGMA nodeId: ${it.id}
variant symbols in this frame: ${it.variants}

STEP 1 — Load Figma tools: call ToolSearch with
  query: "select:mcp__claude_ai_Figma__get_design_context,mcp__claude_ai_Figma__get_screenshot"
Then call get_design_context with fileKey="${FILE_KEY}", nodeId="${it.id}", clientFrameworks="react", clientLanguages="typescript,css". This returns the node, INCLUDING its SVG vector markup. Extract the actual <svg> contents — the viewBox and all <path>/<g>/<rect>/<circle> elements with their 'd'/coordinates. If the design context does not include raw SVG, call get_screenshot for the node to read the glyph shape and reproduce a faithful SVG path.

STEP 2 — Read tokens: Read ${TOKEN_VARS} to find color tokens (the --skt-color-* set). Icons should default to currentColor so they inherit text color, but you may map a Figma fill to a --skt-color-* token as the default color.

STEP 3 — Implement an inline-SVG icon component following these EXACT conventions:
  - export function ${it.name}(props)
  - import styles from "./${it.name}.module.css"
  - First line after import: // Figma SSOT: SKT-Next_UI-Draft_3.2--Token-Test- .${it.figmaName} (node ${it.id})
  - Then a one-line anatomy comment.
  - Render a real <svg> with the extracted viewBox (e.g. viewBox="0 0 24 24") and the actual path data from Figma. width/height = the 'size' prop. Set fill / stroke to "currentColor" (or the 'color' prop) so the icon is themeable; preserve fill-rule/clip-rule if present. Keep multi-color glyphs (logos) with their real colors instead of currentColor.
  - Root <svg> MUST have data-cx-component="${it.name}" and className={styles.root}.
  - Props (ALL optional, with defaults so it renders standalone):
      size?: number (default to the icon's natural size from Figma, usually 24)
      color?: string (default "currentColor")
      className?: string
      ${it.variants > 1 ? "variant?: a string-literal union enum covering the distinct glyph variants you find in this frame (e.g. directions for Arrow, filled/line for state icons). Render the matching SVG per variant. Give it a sensible default." : ""}
  - ${it.variants > 1 ? "Because this frame has multiple variants, include each variant's SVG path and switch on the 'variant' prop." : "This frame is a single glyph."}
  - module.css: minimal — a .root class with display:inline-block, vertical-align:middle, flex-shrink:0. No hardcoded color (color comes from currentColor).
  - No external dependencies. Self-contained inline SVG only. Do NOT reference remote Figma asset URLs — inline the vector paths.

STEP 4 — Write EXACTLY three files (Write tool, absolute paths):
  ${dir}/${it.name}.tsx
  ${dir}/${it.name}.module.css
  ${dir}/index.ts   ->  export { ${it.name} } from "./${it.name}";

STEP 5 — Return structured output. catalogEntry.props: each value { "type": "number"|"string"|"enum", "role": one of [layout, styleVariant, content, data], optionally "values":[...] for enum, "defaultValue": ... }. Use source="react-component", version="1.0.0", kind="icon". Put the glyph meaning in 'description'.

Do NOT touch any file outside ${dir}. Do NOT edit the root index.ts or component-entries.ts. Return only the structured output.`;
}

const SCHEMA = {
  type: 'object',
  additionalProperties: false,
  properties: {
    name: { type: 'string' },
    success: { type: 'boolean' },
    exportStatement: { type: 'string' },
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

phase('Icons');
log(`Generating ${items.length} icon components from Figma...`);

const results = await parallel(
  items.map((it) => () =>
    agent(buildPrompt(it), {
      label: `icon:${it.name}`,
      phase: 'Icons',
      schema: SCHEMA,
      model: 'sonnet',
    }).then((r) => r || { name: it.name, success: false, exportStatement: '', catalogEntry: null })
  )
);

const ok = results.filter((r) => r && r.success && r.catalogEntry);
const failed = results.filter((r) => !r || !r.success || !r.catalogEntry);
log(`Done: ${ok.length} ok, ${failed.length} failed`);
return { ok, failed, total: items.length };
