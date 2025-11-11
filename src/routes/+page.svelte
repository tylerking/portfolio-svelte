<script lang='ts'>
	import { section, sectionTitle, sectionContent } from '$lib/styles/layout.css'
	import ProjectCard from '$lib/components/project/ProjectCard.svelte'
	import PostCard from '$lib/components/blog/PostCard.svelte'
	import ContactForm from '$lib/components/forms/ContactForm.svelte'
	import type { PageData } from './$types'

	export let data: PageData

	$: projects = data.projects
	$: posts = data.posts
	$: about = data.about
</script>

<section id='profile' class={section}>
	<h2 class={sectionTitle}>About Me</h2>
	<div class={sectionContent}>
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html about.bio}
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

<section id='posts' class={section}>
	<h2 class={sectionTitle}>Blog Posts</h2>
	<div class={sectionContent}>
		{#each posts as post}
			<PostCard {post} />
		{/each}
	</div>
</section>

<section id='contact' class={section}>
	<h2 class={sectionTitle}>Contact</h2>
	<div class={sectionContent}>
		<ContactForm />
	</div>
</section>

<script context='module' lang='ts'>
  export const prerender = true
</script>