# Nova Design System

cx 컴포넌트의 **SSOT(단일 출처)**. `ewoooo/rnd-wireframer` 프로토타입에서 컴포넌트·토큰을 이관해 우리가 소유·확장한다. 컴포넌트와 스토리북을 **한 레포에서** 관리한다.

> `rnd-wireframer`는 이관 시점부터 **동결된 프로토타입**이다. cx 컴포넌트의 살아있는 출처는 이 레포 하나다 — 더 이상 rnd-wireframer를 참조·동기화하지 않는다.

## 구성

```
packages/
├── component/   @cx/components — cx 컴포넌트 (91개, Icon 내장). source-only(빌드 없음, src TS 직접 export)
└── token/       @cx/tokens     — 디자인 토큰 CSS 변수·tailwind
stories/         88개 *.stories.tsx (title: "cx/*") — 컴포넌트 카탈로그
.storybook/      Storybook 10 (react-vite). @cx/* 를 내부 packages/* 소스로 alias 해소
```

의존 관계: `@cx/components` → `@cx/tokens` 뿐, 외부 런타임 의존은 `react`(peer) 뿐.

## 실행

```bash
npm install
npm run storybook        # http://localhost:6006 — 컴포넌트 카탈로그
npm run build-storybook  # 정적 빌드(storybook-static/) → Pages/Vercel 배포용
```

## 소비처 (consumer)

`production-agent`의 `tools/sb-renderer`가 이 레포를 **submodule**로 당겨 `@cx/components`를 렌더에 사용한다. 컴포넌트를 고치면 여기서 커밋 → 소비처에서 `git submodule update --remote`로 의도적으로 당긴다.

## 정합 우선순위 (ground truth)

`Figma → 컴포넌트 .tsx(Props) → component-entries.ts(계약) → 추상화(소비처 components.json·뷰어)`. 항상 위에서 아래로. 컴포넌트 `.tsx`의 Props가 최종 근거다.
