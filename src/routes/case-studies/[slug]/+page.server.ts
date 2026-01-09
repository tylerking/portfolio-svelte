import { error } from '@sveltejs/kit'
import { getCaseStudyBySlug } from '$lib/sanity/caseStudies'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ params }) => {
	const caseStudy = await getCaseStudyBySlug(params.slug)

	if (!caseStudy) {
		throw error(404, 'Case study not found')
	}

	return {
		caseStudy
	}
}
