<script lang='ts' context='module'>
	export interface Technology {
		name: string
		description?: string
	}

	export interface CaseStudy {
		slug: string
		title: string
		excerpt: string
		thumbnail?: string
		technology?: Technology[]
	}
</script>

<script lang='ts'>
	import {
		card,
		cardImage,
		cardContentWithImage,
		cardHeader,
		cardTitle,
		cardDescription,
		techStack,
		techTag
	} from '$lib/styles/card.css'

	export let caseStudy: CaseStudy
</script>

<article class={card}>
	<img
		src={caseStudy.thumbnail || 'https://placehold.co/800x400/1a1a1a/888888?text=No+Image'}
		alt={caseStudy.title}
		class={cardImage}
	/>
	<div class={cardContentWithImage}>
		<div class={cardHeader}>
			<a href='/case-studies/{caseStudy.slug}' class={cardTitle}>{caseStudy.title}</a>
		</div>
		<p class={cardDescription}>{caseStudy.excerpt}</p>
		{#if caseStudy.technology && caseStudy.technology.length > 0}
			<div class={techStack}>
				{#each caseStudy.technology as tech}
					<span class={techTag} title={tech.description || tech.name}>{tech.name}</span>
				{/each}
			</div>
		{/if}
	</div>
</article>
