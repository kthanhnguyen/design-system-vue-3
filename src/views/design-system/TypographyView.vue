<script setup lang="ts">
import DsText from '@/components/ds/typography/DsText.vue'
import type { TypographySpec, ButtonTypographySpec } from '@/types'

const textSpecs: TypographySpec[] = [
  { scale: 'h1',    label: 'H1. Headline', weight: 'Semi Bold', size: 48, line: 58,  spacing: 0, category: 'heading'  },
  { scale: 'h2',    label: 'H2. Headline', weight: 'Semi Bold', size: 40, line: 48,  spacing: 0, category: 'heading'  },
  { scale: 'h3',    label: 'H3. Headline', weight: 'Semi Bold', size: 32, line: 38,  spacing: 0, category: 'heading'  },
  { scale: 'h4',    label: 'H4. Headline', weight: 'Semi Bold', size: 28, line: 34,  spacing: 0, category: 'heading'  },
  { scale: 'h5',    label: 'H5. Headline', weight: 'Semi Bold', size: 24, line: 28,  spacing: 0, category: 'heading'  },
  { scale: 's1',    label: 'S1. Subtitle', weight: 'Semi Bold', size: 18, line: 28,  spacing: 0, category: 'subtitle' },
  { scale: 's2',    label: 'S2. Subtitle', weight: 'Semi Bold', size: 16, line: 24,  spacing: 0, category: 'subtitle' },
  { scale: 'b1',    label: 'B1. Body',     weight: 'Regular',   size: 16, line: 24,  spacing: 0, category: 'body'     },
  { scale: 'b2',    label: 'B2. Body',     weight: 'Medium',    size: 16, line: 24,  spacing: 0, category: 'body'     },
  { scale: 'b3',    label: 'B3. Body',     weight: 'Regular',   size: 14, line: 20,  spacing: 0, category: 'body'     },
  { scale: 'b4',    label: 'B4. Body',     weight: 'Medium',    size: 14, line: 20,  spacing: 0, category: 'body'     },
  { scale: 'c1',    label: 'C1. Caption',  weight: 'Regular',   size: 12, line: 16,  spacing: 0, category: 'caption'  },
  { scale: 'c2',    label: 'C2. Caption',  weight: 'Medium',    size: 12, line: 16,  spacing: 0, category: 'caption'  },
  { scale: 'c3',    label: 'C3. Caption',  weight: 'Medium',    size: 10, line: 14,  spacing: 0, category: 'caption'  },
  { scale: 'label', label: 'LABEL',        weight: 'Medium',    size: 12, line: 16,  spacing: 0, category: 'label'    },
]

const buttonSpecs: ButtonTypographySpec[] = [
  { scale: 'giant',  label: 'Giant',  weight: 'Semi Bold', size: 18, line: 24, spacing: 0 },
  { scale: 'large',  label: 'Large',  weight: 'Semi Bold', size: 16, line: 20, spacing: 0 },
  { scale: 'medium', label: 'Medium', weight: 'Semi Bold', size: 14, line: 16, spacing: 0 },
  { scale: 'small',  label: 'Small',  weight: 'Semi Bold', size: 12, line: 16, spacing: 0 },
  { scale: 'tiny',   label: 'Tiny',   weight: 'Semi Bold', size: 10, line: 12, spacing: 0 },
]

const dividerCategories = new Set(['subtitle', 'body', 'caption', 'label'])

function hasDividerBefore(spec: TypographySpec, index: number): boolean {
  if (index === 0) return false
  const prev = textSpecs[index - 1]
  return prev.category !== spec.category && dividerCategories.has(spec.category)
}
</script>

<template>
  <div class="typography-view">
    <!-- Page title -->
    <DsText scale="h1" class="typography-view__title">Typography</DsText>

    <!-- Text Font section -->
    <section class="type-section">
      <DsText scale="s1" tag="h2" class="type-section__heading">Text Font</DsText>

      <div class="type-table">
        <!-- Header -->
        <div class="type-table__header">
          <span>Typeface</span>
          <span>Weight</span>
          <span>Size</span>
          <span>Line</span>
          <span>Spacing</span>
        </div>

        <div class="type-table__divider" />

        <!-- Rows -->
        <template v-for="(spec, i) in textSpecs" :key="spec.scale">
          <div v-if="hasDividerBefore(spec, i)" class="type-table__divider" />
          <div class="type-table__row">
            <div class="type-table__preview">
              <DsText :scale="spec.scale" tag="span">{{ spec.label }}</DsText>
            </div>
            <span class="type-table__meta">{{ spec.weight }}</span>
            <span class="type-table__meta">{{ spec.size }}</span>
            <span class="type-table__meta">{{ spec.line }}</span>
            <span class="type-table__meta">{{ spec.spacing }}</span>
          </div>
        </template>
      </div>
    </section>

    <!-- Button Font section -->
    <section class="type-section">
      <DsText scale="s1" tag="h2" class="type-section__heading">Button Font</DsText>

      <div class="type-table">
        <div class="type-table__header">
          <span>Typeface</span>
          <span>Weight</span>
          <span>Size</span>
          <span>Line</span>
          <span>Spacing</span>
        </div>

        <div class="type-table__divider" />

        <div
          v-for="spec in buttonSpecs"
          :key="spec.scale"
          class="type-table__row"
        >
          <div class="type-table__preview">
            <span :class="`btn-text btn-text--${spec.scale}`">{{ spec.label }}</span>
          </div>
          <span class="type-table__meta">{{ spec.weight }}</span>
          <span class="type-table__meta">{{ spec.size }}</span>
          <span class="type-table__meta">{{ spec.line }}</span>
          <span class="type-table__meta">{{ spec.spacing }}</span>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.typography-view {
  display: flex;
  flex-direction: column;
  gap: var(--space-12);

  &__title {
    color: var(--color-text-primary);
  }
}

.type-section {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);

  &__heading {
    color: var(--color-text-primary);
    padding-bottom: var(--space-4);
    border-bottom: 1px solid var(--color-border-default);
  }
}

.type-table {
  display: flex;
  flex-direction: column;

  &__header {
    display: grid;
    grid-template-columns: 1fr 120px 80px 80px 80px;
    padding: var(--space-3) 0;
    color: var(--color-text-tertiary);
    font-size: var(--text-b3-size);
    font-weight: var(--font-weight-regular);
    line-height: var(--text-b3-line);
  }

  &__divider {
    height: 1px;
    background-color: var(--color-border-default);
    margin: var(--space-2) 0;
  }

  &__row {
    display: grid;
    grid-template-columns: 1fr 120px 80px 80px 80px;
    align-items: center;
    padding: var(--space-4) 0;
    color: var(--color-text-primary);
  }

  &__preview {
    display: flex;
    align-items: center;
  }

  &__meta {
    font-size: var(--text-b3-size);
    font-weight: var(--font-weight-regular);
    line-height: var(--text-b3-line);
    color: var(--color-text-secondary);
  }
}

// Button font scales (not using DsText since these are btn-specific)
.btn-text {
  font-family: var(--font-family-base);
  font-weight: var(--font-weight-semibold);
  letter-spacing: 0;

  &--giant  { font-size: var(--btn-giant-size);  line-height: var(--btn-giant-line);  }
  &--large  { font-size: var(--btn-large-size);  line-height: var(--btn-large-line);  }
  &--medium { font-size: var(--btn-medium-size); line-height: var(--btn-medium-line); }
  &--small  { font-size: var(--btn-small-size);  line-height: var(--btn-small-line);  }
  &--tiny   { font-size: var(--btn-tiny-size);   line-height: var(--btn-tiny-line);   }
}
</style>
