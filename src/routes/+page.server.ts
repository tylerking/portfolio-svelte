import { getProjects } from '$lib/sanity/projects'
import { getCaseStudies } from '$lib/sanity/caseStudies'
import { getAboutContent, getApproachContent } from '$lib/sanity/content'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async () => {
	const [projects, caseStudies, about, approach] = await Promise.all([
		getProjects(),
		getCaseStudies(),
		getAboutContent(),
		getApproachContent()
	])

	return {
		projects,
		caseStudies,
		about,
		approach
	}
}
