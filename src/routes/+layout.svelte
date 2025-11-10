<script lang='ts'>
	import { onMount } from 'svelte'
	import { page } from '$app/stores'
	import { theme } from '$lib/stores/theme'
	import { lightTheme, darkTheme } from '$lib/styles/theme.css'
	import { outerContainer, container, content } from '$lib/styles/layout.css'
	import Sidebar from '$lib/components/layout/Sidebar.svelte'
	import MobileMenu from '$lib/components/layout/MobileMenu.svelte'
	import ChatBot from '$lib/components/chatbot/ChatBot.svelte'
	import '$lib/styles/global.css'
	import type { LayoutData } from './$types'

	export let data: LayoutData

	let currentTheme: 'light' | 'dark' = 'dark'
	let activeSection = 'profile'
	let mobileMenuIsOpen = false

	$: isBlogPost = $page.url.pathname.startsWith('/blog/')
	$: isHomePage = $page.url.pathname === '/'
	$: about = data.about

	function scrollToSection(sectionId: string) {
		const element = document.getElementById(sectionId)
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' })
			activeSection = sectionId
			mobileMenuIsOpen = false
		}
	}

	function toggleMobileMenu() {
		mobileMenuIsOpen = !mobileMenuIsOpen
	}

	function updateActiveSection() {
		const sections = ['profile', 'projects', 'posts', 'contact']
		const scrollPosition = window.scrollY + 100

		for (let i = sections.length - 1; i >= 0; i--) {
			const element = document.getElementById(sections[i])
			if (element && element.offsetTop <= scrollPosition) {
				activeSection = sections[i]
				break
			}
		}
	}

	onMount(() => {
		theme.init()

		if (isHomePage) {
			updateActiveSection()
			window.addEventListener('scroll', updateActiveSection)

			return () => {
				window.removeEventListener('scroll', updateActiveSection)
			}
		}
	})

	$: {
		if (typeof document !== 'undefined') {
			document.documentElement.className = currentTheme === 'light' ? lightTheme : darkTheme
			localStorage.setItem('theme', currentTheme)
		}
	}

	theme.subscribe(value => {
		currentTheme = value
	})

	function toggleTheme() {
		theme.toggle()
	}
</script>

<MobileMenu
	isOpen={mobileMenuIsOpen}
	{isBlogPost}
	{activeSection}
	onToggle={toggleMobileMenu}
	onNavigate={scrollToSection}
/>

<div class={outerContainer}>
	<div class={container}>
		<Sidebar
			personName={about.name}
			personTitle={about.title}
			personSubtitle={about.subtitle}
			{currentTheme}
			{isBlogPost}
			{activeSection}
			onThemeToggle={toggleTheme}
			onNavigate={scrollToSection}
		/>

		<main class={content}>
			<slot />
		</main>
	</div>
</div>

<ChatBot />