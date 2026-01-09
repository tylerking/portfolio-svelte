<script lang='ts'>
	import { navLink, navLinkActive } from './Navigation.css'

	export let isHomePage: boolean = true
	export let activeSection: string = 'profile'
	export let onNavigate: (sectionId: string) => void

	const navItems = [
		{ id: 'profile', icon: 'iconoir-user', label: 'About Me' },
		{ id: 'approach', icon: 'iconoir-compass', label: 'My Approach' },
		{ id: 'case-studies', icon: 'iconoir-suitcase', label: 'Case Studies' },
		{ id: 'projects', icon: 'iconoir-code', label: 'Open Source' },
		{ id: 'contact', icon: 'iconoir-mail', label: 'Contact' }
	]

	function handleClick(e: MouseEvent, sectionId: string) {
		if (isHomePage) {
			e.preventDefault()
			onNavigate(sectionId)
		}
	}
</script>

{#each navItems as item}
	<a
		href='/#{item.id}'
		class={isHomePage && activeSection === item.id ? navLinkActive : navLink}
		on:click={(e) => handleClick(e, item.id)}
	>
		<i class={item.icon}></i> {item.label}
	</a>
{/each}
