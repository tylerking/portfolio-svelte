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
		caseStudyCard,
		caseStudyImage,
		caseStudyContent,
		caseStudyTitle,
		caseStudyExcerpt,
		techStack,
		techTag
	} from './CaseStudyCard.css'

	export let caseStudy: CaseStudy
</script>

<article class={caseStudyCard}>
	<img
		src={caseStudy.thumbnail || 'https://placehold.co/800x400/1a1a1a/888888?text=No+Image'}
		alt={caseStudy.title}
		class={caseStudyImage}
	/>
	<div class={caseStudyContent}>
		<a href='/case-studies/{caseStudy.slug}' class={caseStudyTitle}>{caseStudy.title}</a>
		<p class={caseStudyExcerpt}>{caseStudy.excerpt}</p>
		{#if caseStudy.technology && caseStudy.technology.length > 0}
			<div class={techStack}>
				{#each caseStudy.technology as tech}
					<span class={techTag} title={tech.description || tech.name}>{tech.name}</span>
				{/each}
			</div>
		{/if}
	</div>
</article>
