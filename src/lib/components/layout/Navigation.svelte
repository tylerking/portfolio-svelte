<script lang='ts'>
	import { navLink, navLinkActive } from './Navigation.css'

	export let isBlogPost: boolean = false
	export let activeSection: string = 'profile'
	export let onNavigate: (sectionId: string) => void

	const navItems = [
		{ id: 'profile', icon: 'iconoir-profile-circle', label: 'About Me' },
		{ id: 'projects', icon: 'iconoir-code', label: 'Open Source' },
		{ id: 'posts', icon: 'iconoir-post', label: 'Blog Posts' },
		{ id: 'contact', icon: 'iconoir-send-mail', label: 'Contact' }
	]
</script>

{#if isBlogPost}
	<a href='/' class={navLink}>
		<i class='iconoir-nav-arrow-left'></i> Back home
	</a>
{:else}
	{#each navItems as item}
		<button
			class={activeSection === item.id ? navLinkActive : navLink}
			on:click={() => onNavigate(item.id)}
		>
			<i class={item.icon}></i> {item.label}
		</button>
	{/each}
{/if}
