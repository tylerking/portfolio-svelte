<script lang='ts'>
	import type { Theme } from '$lib/stores/theme'
	import { themeToggle, themeToggleThumb } from './ThemeToggle.css'

	export let currentTheme: Theme
	export let onToggle: () => void
</script>

<button class={themeToggle} on:click={onToggle} title='Toggle theme' data-theme={currentTheme}>
	<span class={themeToggleThumb}>
		{#if currentTheme === 'light'}
			<i class='iconoir-half-moon'></i>
		{:else}
			<i class='iconoir-sun-light'></i>
		{/if}
	</span>
</button>
