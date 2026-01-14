<script lang='ts' context='module'>
	export interface Technology {
		name: string
		description?: string
	}

	export interface Project {
		title: string
		description: string
		source?: string
		demo?: string
		tech?: Technology[]
	}
</script>

<script lang='ts'>
	import {
		card,
		cardContent,
		cardHeader,
		cardTitle,
		cardActions,
		cardAction,
		cardDescription,
		techStack,
		techTag
	} from '$lib/styles/card.css'

	export let project: Project
</script>

<div class={card}>
	<div class={cardContent}>
		<div class={cardHeader}>
			{#if project.source}
				<a href={project.source} target='_blank' rel='noopener noreferrer' class={cardTitle} title={project.title}>
					{project.title}
				</a>
			{:else}
				<h3 class={cardTitle}>{project.title}</h3>
			{/if}
			{#if project.demo}
				<div class={cardActions}>
					<a href={project.demo} target='_blank' rel='noopener noreferrer' class={cardAction} title='View Demo'>
						<i class='iconoir-open-in-window'></i>
					</a>
				</div>
			{/if}
		</div>
		<p class={cardDescription}>{project.description}</p>
		{#if project.tech && project.tech.length > 0}
			<div class={techStack}>
				{#each project.tech as tech}
					<span class={techTag} title={tech.description || tech.name}>{tech.name}</span>
				{/each}
			</div>
		{:else}
			<div class={techStack}>
				<span class={techTag} title='No technologies listed'>Miscellaneous</span>
			</div>
		{/if}
	</div>
</div>
