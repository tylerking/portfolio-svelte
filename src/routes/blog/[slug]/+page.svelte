<script lang='ts'>
	import { onMount } from 'svelte'
	import { theme } from '$lib/stores/theme'
	import { section, sectionTitle, sectionContent } from '$lib/styles/layout.css'
	import { postDate } from '$lib/components/blog/PostCard.css'
	import AuthorCard from '$lib/components/author/AuthorCard.svelte'
	import type { PageData } from './$types'
	import hljs from 'highlight.js/lib/core'
	import javascript from 'highlight.js/lib/languages/javascript'
	import typescript from 'highlight.js/lib/languages/typescript'
	import python from 'highlight.js/lib/languages/python'
	import bash from 'highlight.js/lib/languages/bash'
	import css from 'highlight.js/lib/languages/css'
	import xml from 'highlight.js/lib/languages/xml' // for HTML
	import json from 'highlight.js/lib/languages/json'

	// Register languages
	hljs.registerLanguage('javascript', javascript)
	hljs.registerLanguage('typescript', typescript)
	hljs.registerLanguage('python', python)
	hljs.registerLanguage('bash', bash)
	hljs.registerLanguage('css', css)
	hljs.registerLanguage('html', xml)
	hljs.registerLanguage('xml', xml)
	hljs.registerLanguage('json', json)
	hljs.registerLanguage('jsx', javascript)
	hljs.registerLanguage('svelte', xml)

	export let data: PageData

	$: post = data.post
	$: htmlContent = post.contentHtml || ''
	$: highlightTheme = $theme === 'light' ? 'a11y-light' : 'a11y-dark'

	onMount(() => {
		document.querySelectorAll('pre code').forEach((block) => {
			hljs.highlightElement(block as HTMLElement)
			;(block as HTMLElement).setAttribute('tabindex', '0')
		})
	})
</script>

<svelte:head>
	<title>{post.title} - Tyler King</title>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/{highlightTheme}.min.css">
</svelte:head>

<article class={section}>
	<time class={postDate}>{post.date}</time>
	<h1 class={sectionTitle}>{post.title}</h1>
	<div class={sectionContent}>
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html htmlContent}
	</div>
	<AuthorCard />
</article>
