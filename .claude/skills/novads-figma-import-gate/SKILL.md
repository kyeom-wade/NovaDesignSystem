---
name: novads-figma-import-gate
description: >-
  Validation gate for importing/generating a NovaDS (kyeom-wade/NovaDesignSystem)
  component from Figma — an end-to-end pipeline: validate → generate → land.
  A validation gate runs TWICE (on the Figma source, and again on the generated
  `.tsx`) against the NovaDS authoring rules — union-typed props, deprecated
  members, alias dups, toggle→target links, plus a Figma↔.tsx name-casing/slot
  cross-check. Only a component that passes both gates is generated faithfully,
  added to the barrel/catalog, and committed to the submodule. HARD-BLOCK with an
  evidence report when violations exist; never auto-fix a malformed component and
  never land it as-is. Use this skill whenever the user wants to pull, import,
  sync, generate, add, or "bring in" a Figma component into the NovaDS submodule,
  or asks "is this component clean / OK to import", even if they don't say
  "validate".
---

# NovaDS Figma Import Gate

## Why this exists

NovaDS components are authored from Figma. The ground-truth chain is fixed:

```
Figma → component .tsx (Props) → contract (gen-novads-contract) → abstraction
```

When a Figma component is poorly designed (a prop doing two jobs, deprecated
members, duplicate aliases, an implicit toggle→target relationship), an importer
that "just generates" produces a component that has to be guessed about
downstream — and someone ends up hardcoding the missing intent (e.g. inferring
that `title:boolean` secretly controls `pageTitle`). That guessing is exactly
what we want to stop.

So this gate does **not** fix and does **not** import-as-is. It reads the Figma
source, tells the author precisely what is malformed, and blocks generation until
the Figma component itself is corrected. A clean Figma component passes through;
a malformed one is reported and stopped.

## When to run

Run when a Figma component should enter the chain — a new pull, a re-sync, or a
batch. This skill takes it end to end: validate, and only if clean, generate and
land it in the repo.

## Pipeline — one skill, five steps

```
Step 1  Gate the Figma source        ─┐ gate #1: catch design defects
Step 2  Generate the component .tsx   │
Step 3  Re-gate the generated .tsx    ─┘ gate #2: catch generation defects
Step 4  Land in the repo
Step 5  Commit to the submodule
```

The gate runs **twice** on purpose. A Figma source can be malformed; and even a
clean source can be mis-generated (that is exactly how `AppBar.tsx` ended up with
`title: string | boolean`). Nothing lands unless **both** gates pass. Never
auto-fix and never land as-is — a blocked step stops the pipeline and reports.

Note on coverage: a well-typed Figma component exposes its prop interface through
`get_design_context` (e.g. it returned a typed `AppbarProps`), so R1/R2/R3/R7 are
checkable already at Step 1. An instance "blob" exposes only structure — those
rules then defer to Step 3 against the generated `.tsx`. Either way they are
checked before anything lands.

### Inputs

- **Figma**: `fileKey` + `nodeId` (from a figma.com URL
  `…?node-id=1-2` → fileKey, nodeId=`1:2`). A page/frame → list children with
  `get_metadata` and run the pipeline per component.
- **Target**: the NovaDS submodule
  (`web/lib/design/novads/upstream/packages/component/src/components/<Name>/`).

### Step 1 — Gate the Figma source

1. Load Figma MCP tools: `ToolSearch` for `mcp__claude_ai_Figma__get_metadata`,
   `get_design_context`, `get_variable_defs`. If the connector isn't
   authenticated, stop and tell the user to run `/mcp` — never guess the shape.
2. `get_metadata` → layer tree (anatomy, named slots). `get_design_context` →
   structure, the exact Figma component name (record casing verbatim), and the
   prop interface if exposed. `get_variable_defs` → bound tokens.
3. Run every rule whose source is available now (always R4-figma/R5-figma/
   R6-figma; plus R1/R2/R3/R7 if the prop interface was exposed). Capture concrete
   evidence. Emit the report (see "Report format").
4. **Gate.** ≥1 `error` → STOP. Report what to fix in Figma; the pipeline does not
   proceed. `warning`s surface but don't block.

### Step 2 — Generate the component `.tsx` (faithfully)

Only if Step 1 passed. Mirror the conventions in `wf-nova-components.mjs`:

- Header: `// Figma SSOT: <file> .<Name> (node <id>)` then `// anatomy: …`.
- `Props`/`interface` derived from the Figma props: on/off → `boolean`; variant
  set → string-literal union; text → `string` with a sensible default. Every prop
  gets a default so the component renders standalone. Tokens as
  `var(--skt-…, #fallback)`.
- Preserve the source faithfully: keep the `show{X}` toggle convention and named
  slots; do not invent relationships the source doesn't express.
- **Do not introduce or carry defects.** No `string | boolean` unions, no
  `@deprecated` members, no alias duplicates. If a faithful translation seems to
  require one, that means Step 1 missed something — STOP and report, don't paper
  over it.
- Also write `<Name>.module.css` and `index.ts` (`export { <Name> } from "./<Name>";`).

### Step 3 — Re-gate the generated `.tsx`

Run R1/R2/R3/R7 + R5-tsx/R6-tsx against the file just written, and the R4
cross-check: the `.tsx` export name and the downstream `component_id` must equal
the Figma name **exactly, including casing**. Emit the report.

**Gate.** ≥1 `error` → STOP and **revert the generated files** (don't leave a bad
component on disk). Report exactly what the generation got wrong. The output must
itself pass the gate before it can land.

### Step 4 — Land in the repo

Only if Step 3 passed:

- Place files under `packages/component/src/components/<Name>/`.
- Add the export to the `src/index.ts` barrel.
- Update the public catalog entry (type, render kind, props, variants, token
  roles) via the package catalog/mutation API — see the package README
  ("Catalog Contract" / "CRUD API").
- If the package ships `scripts/extract-component-contract.mjs`, run it so the
  contract reflects the new component.

### Step 5 — Commit to the submodule

The NovaDS submodule is its own repo (`kyeom-wade/NovaDesignSystem`); the consumer
later pulls via `git submodule update --remote`. Commit there with a clear
message, e.g. `feat(<Name>): import from Figma (node <id>)`. Do not push unless
asked. Then tell the user the consumer-side follow-up: bump the submodule pointer
and re-run `gen-novads-*` (registry/contract) in the platform repo.

## Rule Catalog

Each rule has an id, severity, and what to look for. `error` blocks; `warning`
is advisory. Treat the catalog as the current shared ruleset — when the team
adds or refines a rule, edit this section (it is the single source of truth for
the gate).

### R1 — One property, one job · `error` · checks: **.tsx**
A prop must not conflate two responsibilities via a union type or overloaded
variant (e.g. `title: string | boolean`, where boolean = visibility and string =
content). Visibility and content are separate concerns. Only visible in the
`.tsx` type. **Evidence:** the prop name + its conflated type.
**Fix direction (report, don't apply):** split into a boolean toggle + a value
prop (e.g. `showTitle: boolean` + `title: string`).

### R2 — No deprecated members · `error` · checks: **.tsx**
The component must not expose `@deprecated` props or legacy callbacks retained
"for compatibility" (e.g. `onBarcode/onCart/onMenu`, `showLeftItem`). Detected
via JSDoc `@deprecated` in the `.tsx`. **Evidence:** the prop name + the
deprecation note.

### R3 — No duplicate / alias properties · `error` · checks: **.tsx**
Two props that control the same thing (e.g. `leftItem` and a `showLeftItem`
alias) are ambiguous. **Evidence:** the pair + what they both control.

### R4 — Name fidelity (Figma ↔ .tsx) · `error` · checks: **cross**
The `.tsx` export name and the downstream `component_id` must match the Figma
component name *exactly, including casing*. Figma `Appbar` becoming `AppBar` in
code is drift that forces case-insensitive shims downstream and confuses every
reader. Also flag a camel/Pascal duplicate within one surface (`pageTitle` +
`PageTitle`). **Evidence:** Figma name vs `.tsx`/`component_id` name.

### R5 — Interaction slot convention · `error` · checks: **Figma + .tsx**
Interaction points must be classifiable. In Figma: clickable children are named,
distinct slots (not an unnamed repeated-instance blob). In `.tsx`: a self event
is `on{X}` (handler); a child button slot is typed `IconButtonProps`/`ButtonProps`
(buttonSlot). An interaction that is neither — or a clickable child exposed only
as a loose boolean — can't be classified. **Evidence:** the interaction + why it
doesn't match, on whichever side.

### R6 — Required structure metadata · `warning` · checks: **Figma + .tsx**
Figma: a clear, named layer tree + a stable node id (so anatomy is recoverable).
`.tsx`: the `// Figma SSOT: ...(node ...)` and `// anatomy:` header comments are
present and match the Figma node. **Evidence:** missing/empty structure or header.

### R7 — Explicit toggle ↔ dependent relationship · `error` · checks: **.tsx**
The core rule. When a boolean toggle gates another prop or slot (`title` →
`pageTitle`; `rightItem` → `rightButtons` + `rightItemCount`), the link must be
expressed — a typed/grouped relationship in the Props, or a naming convention
that ties them — not left for a reader to infer. If the only thing connecting
them is a comment or human knowledge, that is the finding: "toggle `X` appears to
gate `Y` but the link is not expressed in the contract." Do not resolve the
ambiguity; report it. **Evidence:** the toggle + the apparently-dependent member
+ why the link is implicit.

## Report format

ALWAYS use this exact structure, one block per validated component:

Status legend: ✅ pass · ❌ fail (error) · ⚠️ warn · ⬜ inconclusive (source not available).

```
## <ComponentName>  (Figma node <nodeId> · tsx <path or "not generated">)
Verdict: PASS | BLOCKED (<n> error, <m> warning, <k> inconclusive)

| Rule | Severity | Checks | Status | Evidence |
|------|----------|--------|--------|----------|
| R1 one-job prop      | error   | .tsx       | ✅/❌/⬜ | <evidence or "—"> |
| R2 no deprecated     | error   | .tsx       | ✅/❌/⬜ | ... |
| R3 no alias dup      | error   | .tsx       | ✅/❌/⬜ | ... |
| R4 name fidelity     | error   | cross      | ✅/❌/⬜ | <figma name vs tsx name> |
| R5 slot convention   | error   | figma+tsx  | ✅/❌/⬜ | ... |
| R6 structure meta    | warning | figma+tsx  | ✅/⚠️/⬜ | ... |
| R7 toggle↔dependent  | error   | .tsx       | ✅/❌/⬜ | ... |

→ <If BLOCKED: exactly what to fix (Figma vs .tsx) per failing rule, then "re-run the gate". If PASS: "clean — OK to accept." An inconclusive error is NOT a pass — say which rule couldn't be checked and why.>
```

For a batch, print one block per component, then a summary line:
`N components · P passed · B blocked · I inconclusive`.

## Hard rules

- **Never auto-fix.** Don't rewrite the Figma component, don't silently adapt
  props during generation, don't emit a "corrected" version. Report only.
- **Never import as-is** when blocked. A blocking violation stops generation
  entirely for that node.
- **Don't guess intent.** If a relationship or type is ambiguous, that ambiguity
  is itself the finding (R7) — surface it, don't resolve it.
