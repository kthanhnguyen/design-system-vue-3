<script setup lang="ts">
import { computed } from 'vue'
import type { TextScale, TextTag } from '@/types'

interface Props {
  scale: TextScale
  tag?: TextTag
  color?: string
  truncate?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  tag: undefined,
  color: undefined,
  truncate: false,
})

// Derive a semantic HTML tag when not explicitly provided
const defaultTagMap: Record<TextScale, TextTag> = {
  h1: 'h1', h2: 'h2', h3: 'h3', h4: 'h4', h5: 'h5',
  s1: 'h6', s2: 'h6',
  b1: 'p',  b2: 'p',  b3: 'p',  b4: 'p',
  c1: 'span', c2: 'span', c3: 'span',
  label: 'label',
}

const resolvedTag = computed(() => props.tag ?? defaultTagMap[props.scale])
</script>

<template>
  <component
    :is="resolvedTag"
    :class="['ds-text', `ds-text--${scale}`, { 'ds-text--truncate': truncate }]"
    :style="color ? { color } : undefined"
  >
    <slot />
  </component>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/mixins/typography' as mix;

.ds-text {
  font-family: var(--font-family-base);
  letter-spacing: 0;

  &--truncate {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  // --- Headings ---
  &--h1 { font-size: var(--text-h1-size); line-height: var(--text-h1-line); font-weight: var(--text-h1-weight); }
  &--h2 { font-size: var(--text-h2-size); line-height: var(--text-h2-line); font-weight: var(--text-h2-weight); }
  &--h3 { font-size: var(--text-h3-size); line-height: var(--text-h3-line); font-weight: var(--text-h3-weight); }
  &--h4 { font-size: var(--text-h4-size); line-height: var(--text-h4-line); font-weight: var(--text-h4-weight); }
  &--h5 { font-size: var(--text-h5-size); line-height: var(--text-h5-line); font-weight: var(--text-h5-weight); }

  // --- Subtitles ---
  &--s1 { font-size: var(--text-s1-size); line-height: var(--text-s1-line); font-weight: var(--text-s1-weight); }
  &--s2 { font-size: var(--text-s2-size); line-height: var(--text-s2-line); font-weight: var(--text-s2-weight); }

  // --- Body ---
  &--b1 { font-size: var(--text-b1-size); line-height: var(--text-b1-line); font-weight: var(--text-b1-weight); }
  &--b2 { font-size: var(--text-b2-size); line-height: var(--text-b2-line); font-weight: var(--text-b2-weight); }
  &--b3 { font-size: var(--text-b3-size); line-height: var(--text-b3-line); font-weight: var(--text-b3-weight); }
  &--b4 { font-size: var(--text-b4-size); line-height: var(--text-b4-line); font-weight: var(--text-b4-weight); }

  // --- Captions ---
  &--c1 { font-size: var(--text-c1-size); line-height: var(--text-c1-line); font-weight: var(--text-c1-weight); }
  &--c2 { font-size: var(--text-c2-size); line-height: var(--text-c2-line); font-weight: var(--text-c2-weight); }
  &--c3 { font-size: var(--text-c3-size); line-height: var(--text-c3-line); font-weight: var(--text-c3-weight); }

  // --- Label ---
  &--label {
    font-size: var(--text-label-size);
    line-height: var(--text-label-line);
    font-weight: var(--text-label-weight);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
}
</style>
