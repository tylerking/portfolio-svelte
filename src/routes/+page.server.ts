import { getProjects } from '$lib/sanity/projects'
// import { getPosts } from '$lib/sanity/posts'
import { getAboutContent } from '$lib/sanity/content'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async () => {
	const [projects, /* posts, */ about] = await Promise.all([
		getProjects(),
		// getPosts(),
		getAboutContent()
	])

	return {
		projects,
		// posts,
		about
	}
}