---
paths:
  - "src/assets/styles/tokens/**/*"
  - "src/assets/styles/**/*.scss"
---

# Adding New Design Tokens

Follow these steps when adding a new CSS custom property token:

1. Add the CSS custom property to the relevant token file in `src/assets/styles/tokens/`
2. If theming is needed, add the dark-mode override under `[data-theme='dark']` in `_colors.scss`
3. Add the corresponding SCSS variable/map entry if programmatic access is needed

**Never create a new token file** without exporting it from both `tokens/_index.scss` and `tokens/index.scss`.
