<script lang='ts' context='module'>
	export interface SocialLink {
		url: string
		icon: string
		title: string
	}
</script>

<script lang='ts'>
	import { socialLink } from './SocialLinks.css'

	export let links: SocialLink[] = []
</script>

<div style="display: flex; gap: var(--spacing-3); align-items: center;">
	{#each links as link}
		<a href={link.url} target='_blank' rel='noopener noreferrer' class={socialLink} title={link.title}>
			<i class={link.icon}></i>
		</a>
	{/each}
</div>
