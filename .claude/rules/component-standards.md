---
paths:
  - "src/components/**/*.{vue,ts}"
  - "src/views/**/*.vue"
  - "src/composables/**/*.ts"
  - "src/stores/**/*.ts"
  - "src/types/**/*.ts"
---

# Component Standards

## Naming Conventions

| Type | Convention | Example |
|------|-----------|---------|
| DS components | `Ds` prefix | `DsText`, `DsButton`, `DsCard` |
| Views | `View` suffix | `TypographyView`, `ColorsView` |
| Stores | `.store.ts` suffix | `theme.store.ts` |
| Composables | `use` prefix | `useTypography.ts` |
| Types | `.types.ts` suffix | `typography.types.ts` |

## Component Structure Order

```vue
<script setup lang="ts">
// 1. imports
// 2. interface Props / Emits
// 3. defineProps / defineEmits / defineModel
// 4. stores / composables
// 5. computed / refs / reactive
// 6. functions
// 7. lifecycle hooks
</script>

<template>
  <!-- single root element preferred -->
</template>

<style lang="scss" scoped>
/* BEM: .block__element--modifier */
</style>
```

## Props Rules

- Always use `interface Props` — never inline objects in `defineProps`
- Always provide defaults via `withDefaults`
- Use `tag` prop (type `TextTag`) for semantic HTML polymorphism instead of slots or render functions
