<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
import { useThemeStore } from '@/stores/theme.store'

const themeStore = useThemeStore()
</script>

<template>
  <div class="ds-layout">
    <aside class="ds-sidebar">
      <div class="ds-sidebar__brand">
        <span class="ds-sidebar__title">Design System</span>
      </div>
      <nav class="ds-sidebar__nav">
        <p class="ds-sidebar__section">Foundation</p>
        <RouterLink to="/design-system/typography" class="ds-sidebar__link">
          Typography
        </RouterLink>
      </nav>
      <button class="ds-sidebar__theme-btn" @click="themeStore.toggleTheme">
        {{ themeStore.theme === 'light' ? 'Dark Mode' : 'Light Mode' }}
      </button>
    </aside>

    <main class="ds-content">
      <RouterView />
    </main>
  </div>
</template>

<style lang="scss" scoped>
.ds-layout {
  display: flex;
  min-height: 100vh;
  background-color: var(--color-bg-primary);
}

.ds-sidebar {
  width: 220px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  border-right: 1px solid var(--color-border-default);
  padding: var(--space-6) var(--space-4);
  gap: var(--space-6);
  position: sticky;
  top: 0;
  height: 100vh;

  &__brand {
    padding-bottom: var(--space-4);
    border-bottom: 1px solid var(--color-border-default);
  }

  &__title {
    font-size: var(--text-s1-size);
    font-weight: var(--font-weight-semibold);
    line-height: var(--text-s1-line);
    color: var(--color-text-primary);
  }

  &__nav {
    display: flex;
    flex-direction: column;
    gap: var(--space-1);
    flex: 1;
  }

  &__section {
    font-size: var(--text-c3-size);
    font-weight: var(--font-weight-medium);
    line-height: var(--text-c3-line);
    color: var(--color-text-tertiary);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    padding: var(--space-3) var(--space-2) var(--space-1);
  }

  &__link {
    display: block;
    padding: var(--space-2) var(--space-3);
    border-radius: var(--radius-md);
    font-size: var(--text-b3-size);
    font-weight: var(--font-weight-medium);
    line-height: var(--text-b3-line);
    color: var(--color-text-secondary);
    transition: background-color 0.15s, color 0.15s;

    &:hover {
      background-color: var(--color-bg-tertiary);
      color: var(--color-text-primary);
    }

    &.router-link-active {
      background-color: var(--color-primary-50);
      color: var(--color-primary-600);
      font-weight: var(--font-weight-semibold);
    }
  }

  &__theme-btn {
    padding: var(--space-2) var(--space-3);
    border-radius: var(--radius-md);
    border: 1px solid var(--color-border-default);
    background: transparent;
    color: var(--color-text-secondary);
    font-size: var(--text-b3-size);
    font-weight: var(--font-weight-medium);
    cursor: pointer;
    transition: background-color 0.15s;

    &:hover {
      background-color: var(--color-bg-tertiary);
    }
  }
}

.ds-content {
  flex: 1;
  padding: var(--space-12) var(--space-16);
  max-width: 960px;
}
</style>
