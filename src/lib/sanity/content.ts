import { toHTML } from '@portabletext/to-html'
import type { PortableTextBlock } from '@portabletext/types'
import { client } from './client'

export interface Global {
	title: string
	description: string
}

export interface About {
	name: string
	title: string
	subtitle: string
	bio: string
}

export interface ApproachStep {
	step: string
	description: string
	icon: string
}

export interface Approach {
	title: string
	overview: string
	steps: ApproachStep[]
}

// Helper function to convert Sanity Portable Text to HTML
function portableTextToHtml(portableText: PortableTextBlock[] | null | undefined): string {
	if (!portableText) return ''

	try {
		return toHTML(portableText)
	} catch (error) {
		console.error('Error converting Portable Text to HTML:', error)
		return ''
	}
}

export async function getGlobalContent(): Promise<Global> {
	try {
		// GROQ query to fetch the global singleton document
		const query = `*[_type == "global" && _id == "global"][0]{
			siteTitle,
			description
		}`

		const data = await client.fetch(query)

		if (!data) {
			throw new Error('No global content found')
		}

		return {
			title: data.siteTitle || 'Tyler King',
			description: data.description || 'Software Engineer & Creative Technologist'
		}
	} catch (error) {
		console.error('Error fetching global content from Sanity:', error)

		return {
			title: 'Tyler King',
			description: 'Software Engineer & Creative Technologist'
		}
	}
}

export async function getAboutContent(): Promise<About> {
	try {
		// GROQ query to fetch the about singleton document
		const query = `*[_type == "about" && _id == "about"][0]{
			name,
			title,
			subtitle,
			bio
		}`

		const data = await client.fetch(query)

		if (!data) {
			throw new Error('No about content found')
		}

		return {
			name: data.name || 'Tyler King',
			title: data.title || 'About Me',
			subtitle: data.subtitle || '',
			bio: portableTextToHtml(data.bio) || '<p>No bio available</p>'
		}
	} catch (error) {
		console.error('Error fetching about content from Sanity:', error)

		return {
			name: 'Tyler King',
			title: 'About Me',
			subtitle: '',
			bio: '<p>Based in Portland, I\'m a self-taught developer who started coding as a teenager when the web was still finding its identity. I learned HTML when table layouts were the standard and watched JavaScript evolve from a simple scripting language into the powerhouse it is today.</p><p>My career has taken me from the Midwest to Los Angeles and finally to the Pacific Northwest, working across creative agencies, advertising, SEO, bioscience, risk analytics, and clean energy startups. I\'ve always had strong opinions about technology. While others were embracing Flash, I argued that JavaScript would ultimately dominate web development. History proved me right.</p><p>Today, I work remotely as a consultant, helping companies solve complex technical challenges and build modern web applications. I specialize in bridging the gap between creative vision and technical execution, bringing deep experience in both frontend and backend development to every project.</p>'
		}
	}
}

export async function getApproachContent(): Promise<Approach> {
	try {
		const query = `*[_type == "approach" && _id == "approach"][0]{
			title,
			overview,
			steps
		}`

		const data = await client.fetch(query)

		if (!data) {
			throw new Error('No approach content found')
		}

		const steps: ApproachStep[] = (data.steps || []).map((s: any) => ({
			step: s.step || '',
			description: s.description || '',
			icon: s.icon || 'iconoir-check'
		}))

		return {
			title: data.title || 'My Approach',
			overview: data.overview || '',
			steps
		}
	} catch (error) {
		console.error('Error fetching approach content from Sanity:', error)

		return {
			title: 'My Approach',
			overview: '',
			steps: []
		}
	}
}
