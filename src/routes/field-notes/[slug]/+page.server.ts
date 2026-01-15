import { error } from '@sveltejs/kit'
import { getNoteBySlug } from '$lib/sanity/notes'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ params }) => {
	const note = await getNoteBySlug(params.slug)

	if (!note) {
		throw error(404, 'Note not found')
	}

	return {
		note
	}
}
