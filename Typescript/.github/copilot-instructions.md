# AI Coding Assistant Instructions for this repo

Purpose: Help AI code agents be immediately productive in this small TypeScript tutorial repository.

Quick summary
- This is a minimal TypeScript workspace containing example source files at the repository root. The primary example is `datatypes.ts` which demonstrates basic TypeScript types and runtime logging.
- Build is TypeScript-only (no bundler). `package.json` includes `typescript` as a dependency and `tsconfig.json` drives compilation.

Project layout (important files)
- `datatypes.ts` — canonical example and main source to modify.
- `datatypes.js`, `datatypes.d.ts` — generated/compiled artifacts.
- `package.json` — contains `typescript` dependency and placeholder `test` script.
- `tsconfig.json` — compiler options; note `module: "nodenext"`, `target: "esnext"`, `declaration: true`, and `strict: true`.

What an AI should know before editing
- Files live at repository root (not in `src/`); `tsconfig.json` currently does not set `outDir` or `rootDir`, so `npx tsc` will emit JS and declaration files next to the TS source.
- Keep the existing TypeScript settings (strict mode, declaration output) unless a clear repo-wide reason exists to change them.
- This repo is a learning/demo project — changes should be minimal, explanatory, and avoid introducing heavy toolchains without updating `package.json` and docs.

Common tasks & exact commands
- Compile TypeScript: `npx tsc` (uses local dependency). This will generate `.js`, `.map`, and `.d.ts` files next to `.ts` files.
- Run compiled example: `node datatypes.js` (after compile).
- Add Node type definitions if needed for runtime-only code: `npm install --save-dev @types/node` and consider adding `"types": ["node"]` to `tsconfig.json`.

Coding conventions & patterns discovered
- Example code uses top-level examples and `console.log` for output — follow the same minimal, illustrative style for new examples.
- Prefer explicit typing (the repo shows `let age: number`, `let empList: string[]`) — new code should embrace `strict` typing rather than rely on `any`.
- Do not introduce a `src/` layout or change compiler layout without also updating `tsconfig.json` and documenting the change in this file.

When adding features or tests
- If you add build/test tooling, update `package.json` scripts (e.g., add `build`, `start`, `test`) and document the commands here.
- There are no tests currently. If you introduce tests, prefer TypeScript-native test runners (e.g., `vitest` or `jest` with `ts-jest`) and add step-by-step install + run commands in this file.

Integration points & external dependencies
- Only external dependency: `typescript` (see `package.json`). There are no network services or other integrations.

Patch & PR guidance for AI agents
- Keep changes narrowly scoped and self-contained. Each PR should:
  - Explain why `tsconfig.json` changes are needed (if any).
  - Include exact commands to reproduce build and run locally.
  - Avoid generating large unrelated refactors (e.g., converting layout to monorepo) in a single PR.

Examples (copyable)
- Compile and run:
```
npx tsc
node datatypes.js
```
- Install Node types (if you need node globals at compile time):
```
npm install --save-dev @types/node
```

If you find existing `.github/copilot-instructions.md` content when merging
- Merge preserving useful guidance, keep the repo-specific commands above, and remove generic or irrelevant suggestions.

Questions / follow-up
- If you'd like, I can add example `package.json` scripts (`build`, `start`) and a brief `README.md` showing these commands. Ask me to proceed.
