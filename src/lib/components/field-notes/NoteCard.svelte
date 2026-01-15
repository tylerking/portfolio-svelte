<script lang='ts' context='module'>
	export interface Note {
		slug: string
		title: string
		category?: string
		status?: string
		excerpt: string
	}
</script>

<script lang='ts'>
	import {
		noteCard,
		noteCategory,
		noteExcerpt,
		noteBody,
		noteRule,
		noteFooter,
		noteStatus,
		noteStatusDot,
		noteStatusDotVariant
	} from './NoteCard.css'
	import { cardTitle } from '$lib/styles/card.css'

	export let note: Note
</script>

<article class={noteCard}>
	{#if note.category}
		<div class={noteCategory}>{note.category}</div>
	{/if}
	<a href='/field-notes/{note.slug}' class={cardTitle}>{note.title}</a>
	<div class={noteBody}>
		<p class={noteExcerpt}>{note.excerpt}</p>
	</div>
	<div class={noteFooter}>
		<hr class={noteRule} />
		{#if note.status}
			<div class={noteStatus}>
				<span class={`${noteStatusDot} ${noteStatusDotVariant[note.status]}`}></span>
				{note.status.charAt(0).toUpperCase() + note.status.slice(1)}
			</div>
		{/if}
	</div>
</article>
