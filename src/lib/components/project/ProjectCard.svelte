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
		projectCard,
		projectContent,
		projectHeader,
		projectTitle,
		projectActions,
		projectAction,
		projectDescription,
		techStack,
		techTag
	} from './ProjectCard.css'

	export let project: Project
</script>

<div class={projectCard}>
	<div class={projectContent}>
		<div class={projectHeader}>
			{#if project.source}
				<a href={project.source} target='_blank' rel='noopener noreferrer' class={projectTitle} title={project.title}>
					{project.title}
				</a>
			{:else}
				<h3 class={projectTitle}>{project.title}</h3>
			{/if}
			{#if project.demo}
				<div class={projectActions}>
					<a href={project.demo} target='_blank' rel='noopener noreferrer' class={projectAction} title='View Demo'>
						<i class='iconoir-open-in-window'></i>
					</a>
				</div>
			{/if}
		</div>
		<p class={projectDescription}>{project.description}</p>
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
