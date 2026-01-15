<script lang='ts'>
	import { onMount } from 'svelte'
	import { theme } from '$lib/stores/theme'
	import { section, sectionTitle, sectionContent } from '$lib/styles/layout.css'
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

	$: note = data.note
	$: highlightTheme = $theme === 'light' ? 'a11y-light' : 'a11y-dark'

	onMount(() => {
		document.querySelectorAll('pre code').forEach((block) => {
			hljs.highlightElement(block as HTMLElement)
			;(block as HTMLElement).setAttribute('tabindex', '0')
		})
	})
</script>

<svelte:head>
	<title>{note.title} - Tyler King</title>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/{highlightTheme}.min.css">
</svelte:head>

<article class={section}>
	<h1 class={sectionTitle}>{note.title}</h1>
	<div class={sectionContent}>
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html note.overviewHtml}
	</div>
	<div class={sectionContent}>
		<h2>Why</h2>
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html note.whyHtml}
	</div>
	<div class={sectionContent}>
		<h2>When</h2>
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html note.whenHtml}
	</div>
	<div class={sectionContent}>
		<h2>Example</h2>
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html note.exampleHtml}
		{#if note.codepenUrl}
			<div style="margin-top: 1.5rem;">
				<iframe
					title="CodePen Embed"
					src={`${note.codepenUrl.replace('/pen/', '/embed/')}?default-tab=result`}
					loading="lazy"
					allow="accelerometer; camera; encrypted-media; geolocation; gyroscope; microphone; midi; clipboard-read; clipboard-write"
					sandbox="allow-forms allow-modals allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts"
					style="width: 100%; height: 420px; border: 0; border-radius: 8px;"
				></iframe>
			</div>
		{/if}
	</div>
	<div class={sectionContent}>
		<h2>Trade-offs</h2>
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html note.tradeOffsHtml}
	</div>
</article>
