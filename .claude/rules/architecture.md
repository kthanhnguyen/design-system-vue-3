# Architecture Rules

1. **One responsibility per file.** Components render UI. Composables manage logic. Stores manage global state. Never mix.
2. **Design tokens are the source of truth.** All spacing, color, and typography values must come from CSS custom properties defined in `src/assets/styles/tokens/`. Never hardcode pixel/color values in component styles.
3. **SCSS `@use`, never `@import`.** All SCSS module access goes through `@use`. The global token injection is handled by `vite.config.ts` `additionalData`.
4. **Barrel exports per folder.** Every `components/ds/*` subfolder exports via `index.ts`. Consumers import from the folder, not the file.
5. **No business logic in views.** Views compose components and call stores/composables. Complex logic belongs in composables.
6. **Lazy-load all routes.** All `component:` entries in `routes.ts` use `() => import(...)`.

## AI Agent Prohibitions

- **Never hardcode values** — always reference CSS custom properties or SCSS token maps
- **Never use `@import`** in SCSS — use `@use` with namespaces
- **Never create a new token file** without exporting it from `tokens/_index.scss` and `tokens/index.scss`
- **Never put styles in `<style>` without `scoped`** unless it is a global base file under `assets/styles/base/`
- **Always add TypeScript types** for component props — no `any`, no untyped objects
- **When adding a new `DsX` component**, follow the 6-step checklist in `.claude/rules/new-ds-component.md` exactly
- **Do not install utility CSS frameworks** (Tailwind, UnoCSS) — the token system replaces them
- **Prefer `computed` over methods** for derived values in components
- **Pinia stores use setup syntax** (`defineStore('id', () => { ... })`) — not options API stores
- **Keep views thin** — if a view exceeds ~80 lines of `<script>`, extract logic into a composable
