import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

type Theme = 'light' | 'dark'

export const useThemeStore = defineStore('theme', () => {
  const theme = ref<Theme>(
    (localStorage.getItem('ds-theme') as Theme) ?? 'light'
  )

  function applyTheme(value: Theme) {
    document.documentElement.dataset.theme = value === 'dark' ? 'dark' : ''
    localStorage.setItem('ds-theme', value)
  }

  function toggleTheme() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
  }

  watch(theme, applyTheme, { immediate: true })

  return { theme, toggleTheme }
})
