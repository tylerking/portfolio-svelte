<script lang='ts'>
	import { section, sectionTitle, sectionContent } from '$lib/styles/layout.css'
	import type { PageData } from './$types'

	export let data: PageData

	$: caseStudy = data.caseStudy
</script>

<svelte:head>
	<title>{caseStudy.title} - Tyler King</title>
</svelte:head>

<article class={section}>
	<h1 class={sectionTitle}>{caseStudy.title}</h1>

	<div class={sectionContent}>
		<p>{caseStudy.overview}</p>
	</div>

	<div class={sectionContent}>
		<h2>Problem</h2>
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html caseStudy.problemHtml}
	</div>

	<div class={sectionContent}>
		<h2>Solution</h2>
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html caseStudy.solutionHtml}
	</div>

	<div class={sectionContent}>
		<h2>Outcome</h2>
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html caseStudy.outcomeHtml}
	</div>

	{#if caseStudy.visuals && caseStudy.visuals.length > 0}
		<div class={sectionContent}>
			<h2>Visuals</h2>
			{#each caseStudy.visuals as visual}
				<figure style="margin: 0 0 24px 0;">
					<img src={visual.url} alt={visual.alt} class="bordered" style="max-width: 600px; width: 100%; height: auto;" />
					{#if visual.caption}
						<figcaption style="font-size: 14px; color: var(--color-muted); margin-top: 8px;">{visual.caption}</figcaption>
					{/if}
				</figure>
			{/each}
		</div>
	{/if}
</article>
