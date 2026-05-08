---
paths:
  - "**/*.scss"
  - "src/components/**/*.vue"
  - "src/views/**/*.vue"
---

# Styling Conventions

## Hybrid Approach: CSS Variables + SCSS

| Tool | Use for |
|------|---------|
| CSS custom properties | Design tokens, theming, runtime values |
| SCSS | Nesting, BEM structure, `@use` mixins, component-scoped styles |

## BEM Naming

```scss
.ds-text            // block
.ds-text__label     // element
.ds-text--truncate  // modifier
```

## Token Usage

```scss
// Correct — always use tokens
font-size: var(--text-b1-size);
color: var(--color-text-primary);
padding: var(--space-4);

// Wrong — never hardcode
font-size: 16px;
color: #111827;
padding: 16px;
```

## Dark Mode

Applied via `data-theme="dark"` on `<html>`. Token overrides live in `_colors.scss` under `[data-theme='dark']`.

## SCSS Mixin Usage

```scss
// Only when a mixin adds real value
@use '@/assets/styles/mixins/typography' as mix;
@include mix.text-style('b1');
```
