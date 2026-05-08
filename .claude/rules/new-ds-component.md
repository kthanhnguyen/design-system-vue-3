---
paths:
  - "src/components/ds/**/*"
  - "src/views/design-system/**/*"
---

# Adding a New Design System Component

Follow these 6 steps in order every time a new `DsX` component is created:

1. Create the component file: `src/components/ds/<category>/<DsComponent>.vue`
2. Export from the category barrel: `src/components/ds/<category>/index.ts`
3. Re-export from the top-level barrel: `src/components/ds/index.ts`
4. Add TypeScript types: `src/types/<category>.types.ts`
5. Add a showcase route in `src/router/routes.ts` under `/design-system` (lazy-loaded)
6. Create the showcase view: `src/views/design-system/<Category>View.vue`
