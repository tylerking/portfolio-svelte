import { getGlobalContent, getAboutContent } from '$lib/sanity/content'
import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = async () => {
	const [global, about] = await Promise.all([
		getGlobalContent(),
		getAboutContent()
	])

	return {
		global,
		about
	}
}
