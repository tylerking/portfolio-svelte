<script lang='ts'>
	import {
		hamburger,
		hamburgerLine,
		hamburgerLineOpen,
		mobileMenu,
		mobileMenuOpen
	} from './MobileMenu.css'
	import Navigation from './Navigation.svelte'

	export let isOpen: boolean = false
	export let isHomePage: boolean = true
	export let activeSection: string = 'profile'
	export let onToggle: () => void
	export let onNavigate: (sectionId: string) => void
</script>

<button class={hamburger} on:click={onToggle} aria-label='Toggle menu'>
	<span class={`${hamburgerLine} ${isOpen ? hamburgerLineOpen : ''}`}></span>
	<span class={`${hamburgerLine} ${isOpen ? hamburgerLineOpen : ''}`}></span>
	<span class={`${hamburgerLine} ${isOpen ? hamburgerLineOpen : ''}`}></span>
</button>

<div class={`${mobileMenu} ${isOpen ? mobileMenuOpen : ''}`}>
	<Navigation {isHomePage} {activeSection} {onNavigate} />
</div>
