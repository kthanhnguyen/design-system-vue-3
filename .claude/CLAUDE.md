# Design System — CLAUDE.md

## Stack

| Layer     | Tool                        |
|-----------|-----------------------------|
| Framework | Vue 3 + Composition API     |
| Language  | TypeScript (strict)         |
| Build     | Vite                        |
| State     | Pinia                       |
| Routing   | Vue Router 4                |
| Styling   | CSS Variables + SCSS Hybrid |

## Project Structure

```
src/
├── assets/styles/
│   ├── tokens/          # Design tokens as CSS custom properties
│   │   ├── _typography.scss
│   │   ├── _colors.scss
│   │   └── _spacing.scss
│   ├── mixins/          # SCSS utility mixins (no output by themselves)
│   │   └── _typography.scss
│   ├── base/            # Reset + global body styles
│   │   └── _reset.scss
│   └── main.scss        # Single entry point — imported once in main.ts
├── components/
│   └── ds/              # Design system components (prefix: Ds)
├── composables/         # Reusable Composition API logic (prefix: use)
├── router/
│   ├── index.ts         # createRouter
│   └── routes.ts        # RouteRecordRaw[] array
├── stores/              # Pinia stores (suffix: .store.ts)
├── types/               # Shared TypeScript types (suffix: .types.ts)
└── views/               # Route-level components (suffix: View.vue)
    └── design-system/
```

Rules are organized in `.claude/rules/` — see that directory for architecture, component standards, styling conventions, typography scale, and checklists for adding new components and tokens.
