<script lang='ts'>
	import { section, sectionTitle, sectionContent, sectionIntro } from '$lib/styles/layout.css'
	import ProjectCard from '$lib/components/project/ProjectCard.svelte'
	import CaseStudyCard from '$lib/components/case-study/CaseStudyCard.svelte'
	import ContactForm from '$lib/components/forms/ContactForm.svelte'
	import type { PageData } from './$types'

	export let data: PageData

	$: projects = data.projects
	$: caseStudies = data.caseStudies
	$: about = data.about
	$: approach = data.approach
</script>

<section id='profile' class={section}>
	<h2 class={sectionTitle}>About Me</h2>
	<div class={sectionContent}>
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html about.bio}
	</div>
</section>

<section id='approach' class={section}>
	<h2 class={sectionTitle}>{approach.title}</h2>
	<div class={sectionContent}>
		{#if approach.overview}
			<p>{approach.overview}</p>
		{/if}
		{#if approach.steps && approach.steps.length > 0}
			{#each approach.steps as step}
				<div class="approach-card">
					<div class="approach-icon">
						<i class={step.icon}></i>
					</div>
					<div class="approach-content">
						<h3 class="approach-title">{step.step}</h3>
						<p class="approach-description">{step.description}</p>
					</div>
				</div>
			{/each}
		{/if}
	</div>
</section>

<section id='case-studies' class={section}>
	<h2 class={sectionTitle}>Case Studies</h2>
	<div class={sectionContent}>
		{#each caseStudies as caseStudy}
			<CaseStudyCard {caseStudy} />
		{/each}
	</div>
</section>

<section id='projects' class={section}>
	<h2 class={sectionTitle}>Open Source</h2>
	<div class={sectionContent}>
		{#each projects as project}
			<ProjectCard {project} />
		{/each}
	</div>
</section>

<section id='contact' class={section}>
	<h2 class={sectionTitle}>Contact</h2>
	<div class={sectionContent}>
		<p class={sectionIntro}>I'm open to full-time roles, contract work, and consulting opportunities.</p>
		<ContactForm />
	</div>
</section>
