import { writable } from 'svelte/store'
import { browser } from '$app/environment'

export type Theme = 'light' | 'dark'

function createThemeStore() {
	const { subscribe, set, update } = writable<Theme>('light')

	return {
		subscribe,
		toggle: () => update(theme => theme === 'light' ? 'dark' : 'light'),
		set: (theme: Theme) => set(theme),
		init: () => {
			if (browser) {
				const stored = localStorage.getItem('theme') as Theme
				const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches
				const initialTheme = stored || (prefersLight ? 'light' : 'light')
				set(initialTheme)
			}
		}
	}
}

export const theme = createThemeStore()