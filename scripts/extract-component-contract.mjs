// 컴포넌트 계약 추출기 — packages/component/src/components/*/*.tsx 의 Props 인터페이스(SSOT)를 파싱해
//   ① 인터랙션 슬롯(on<X> 핸들러 + 버튼 슬롯)  → 화면 동작의 '소스 슬롯' enum
//   ② prop 컨트롤 타입(boolean→switch, 유니온 리터럴→select(+options), string→text, number→number)
// 결과를 metadata/component-contract.json 으로 생성(=소스에서 도출된 캐시, 손유지 X).
//
// 실행: node scripts/extract-component-contract.mjs   (typescript 필요 — devDeps)
import ts from 'typescript';
import { readFileSync, readdirSync, writeFileSync, existsSync, statSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const COMPONENTS_DIR = path.join(ROOT, 'packages/component/src/components');
const OUT = path.join(ROOT, 'metadata/component-contract.json');

const SKIP = new Set(['className', 'children', 'style', 'key', 'ref', 'id']);

// PropertySignature 의 type 노드를 컨트롤로 분류.
function classifyControl(typeNode, sf) {
  if (!typeNode) return { control: 'text' };
  const t = typeNode.getText(sf);
  if (typeNode.kind === ts.SyntaxKind.BooleanKeyword) return { control: 'switch' };
  // 유니온 — 전부 string 리터럴이면 select(+options). number 리터럴이면 number-select.
  if (ts.isUnionTypeNode(typeNode)) {
    const lits = typeNode.types.filter((n) => ts.isLiteralTypeNode(n));
    const strs = lits.filter((n) => n.literal && ts.isStringLiteral(n.literal)).map((n) => n.literal.text);
    const nums = lits.filter((n) => n.literal && n.literal.kind === ts.SyntaxKind.NumericLiteral).map((n) => n.literal.text);
    // boolean 이 유니온에 섞인 경우(드묾)도 스위치로.
    if (typeNode.types.some((n) => n.kind === ts.SyntaxKind.BooleanKeyword)) return { control: 'switch' };
    if (strs.length && strs.length === lits.length) return { control: 'select', options: strs };
    if (nums.length && nums.length === lits.length) return { control: 'select', options: nums };
  }
  if (typeNode.kind === ts.SyntaxKind.StringKeyword) return { control: 'text' };
  if (typeNode.kind === ts.SyntaxKind.NumberKeyword) return { control: 'number' };
  // 함수/노드/배열/객체 등 — prop 입력 컨트롤 아님(슬롯 쪽에서 처리).
  if (/=>|ReactNode|ReactElement|\[\]|IconButtonProps|ButtonProps/.test(t)) return { control: 'node' };
  return { control: 'text' };
}

// 슬롯 분류 — 이름/타입으로 인터랙션 슬롯 판정.
function classifySlot(name, typeNode, sf) {
  const t = typeNode ? typeNode.getText(sf) : '';
  if (/^on[A-Z]/.test(name)) return 'handler';                      // onPrimary, onTextButton, onCart …
  if (/IconButtonProps|ButtonProps|\bButton\b/.test(t)) return 'buttonSlot'; // leftButton, rightButtons …
  return null;
}

// 파일에서 `interface Props` 또는 `type Props = { … }` 의 멤버를 뽑는다.
function propsMembers(sf) {
  let members = null;
  sf.forEachChild((node) => {
    if (members) return;
    if (ts.isInterfaceDeclaration(node) && node.name.text === 'Props') members = node.members;
    else if (ts.isTypeAliasDeclaration(node) && node.name.text === 'Props' && ts.isTypeLiteralNode(node.type)) members = node.type.members;
  });
  return members ?? [];
}

const result = {};
const comps = readdirSync(COMPONENTS_DIR).filter((d) => statSync(path.join(COMPONENTS_DIR, d)).isDirectory());
for (const name of comps) {
  const file = path.join(COMPONENTS_DIR, name, `${name}.tsx`);
  if (!existsSync(file)) continue;
  const sf = ts.createSourceFile(file, readFileSync(file, 'utf8'), ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const slots = [];
  const props = [];
  for (const m of propsMembers(sf)) {
    if (!ts.isPropertySignature(m) || !m.name) continue;
    const pname = m.name.getText(sf);
    if (SKIP.has(pname)) continue;
    const slot = classifySlot(pname, m.type, sf);
    if (slot) { slots.push({ name: pname, kind: slot }); continue; }
    const { control, options } = classifyControl(m.type, sf);
    if (control === 'node') continue; // 슬롯도 컨트롤도 아닌 노드형은 제외
    props.push(options ? { name: pname, control, options } : { name: pname, control });
  }
  result[name] = { slots, props };
}

writeFileSync(OUT, JSON.stringify(result, null, 2) + '\n');
const withSlots = Object.values(result).filter((c) => c.slots.length).length;
const withSwitch = Object.values(result).filter((c) => c.props.some((p) => p.control === 'switch')).length;
console.log(`컴포넌트 ${comps.length}개 → ${OUT}`);
console.log(`  인터랙션 슬롯 보유: ${withSlots}, boolean(switch) prop 보유: ${withSwitch}`);
