<script lang='ts'>
	import type { Theme } from '$lib/stores/theme'
	import type { SocialLink } from './SocialLinks.svelte'
	import {
		sidebar,
		sidebarContent,
		name,
		title,
		description,
		socialLinks,
		navigation
	} from './Sidebar.css'
	import ThemeToggle from './ThemeToggle.svelte'
	import SocialLinks from './SocialLinks.svelte'
	import Navigation from './Navigation.svelte'

	export let personName: string
	export let personTitle: string
	export let personSubtitle: string | undefined = undefined
	export let currentTheme: Theme
	export let isHomePage: boolean
	export let activeSection: string
	export let onThemeToggle: () => void
	export let onNavigate: (sectionId: string) => void

	const socialLinksData: SocialLink[] = [
		{ url: 'https://linkedin.com/in/doitliketyler', icon: 'iconoir-linkedin', title: 'LinkedIn' },
		{ url: 'https://github.com/tylerking', icon: 'iconoir-github', title: 'GitHub' },
		{ url: 'https://codepen.io/tylerking', icon: 'iconoir-codepen', title: 'CodePen' }
	]
</script>

<aside class={sidebar}>
	<div class={sidebarContent}>
		<h1 class={name}><a href='/'>{personName}</a></h1>
		<p class={title}>{personTitle}</p>
		{#if personSubtitle}
			<p class={description}>{personSubtitle}</p>
		{/if}
		<div class={socialLinks}>
			<ThemeToggle {currentTheme} onToggle={onThemeToggle} />
			<SocialLinks links={socialLinksData} />
		</div>
		<nav class={navigation}>
			<Navigation {isHomePage} {activeSection} {onNavigate} />
		</nav>
	</div>
</aside>
