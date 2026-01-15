import { getProjects } from '$lib/sanity/projects'
import { getCaseStudies } from '$lib/sanity/caseStudies'
import { getNotes } from '$lib/sanity/notes'
import { getAboutContent, getApproachContent, getGlobalContent } from '$lib/sanity/content'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async () => {
	const [projects, caseStudies, notes, about, approach, global] = await Promise.all([
		getProjects(),
		getCaseStudies(),
		getNotes(),
		getAboutContent(),
		getApproachContent(),
		getGlobalContent()
	])

	return {
		projects,
		caseStudies,
		notes,
		about,
		approach,
		global
	}
}
