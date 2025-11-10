import type { PortableTextBlock } from '@portabletext/types'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import imageUrlBuilder from '@sanity/image-url'
import { client } from './client'

export interface Technology {
	name: string
	description: string
	category?: string
	url?: string
}

export interface Project {
	id: string
	title: string
	description: string
	tech: Technology[]
	image?: string
	imageAlt?: string
	demo?: string
	source?: string
}

interface SanityTechnology {
	name?: string
	description?: string
	category?: string
	url?: string
}

interface SanityProject {
	_id: string
	title?: string
	description?: PortableTextBlock[]
	technologies?: SanityTechnology[]
	order?: number
	site?: string
	source?: string
	image?: SanityImageSource
}

// Helper to build image URLs from Sanity
const builder = imageUrlBuilder(client)

function urlFor(source: SanityImageSource) {
	return builder.image(source)
}

// Helper function to convert Sanity Portable Text to plain text
function portableTextToPlainText(portableText: PortableTextBlock[] | null | undefined): string {
	if (!portableText || !Array.isArray(portableText)) return ''

	return portableText
		.map(block => {
			if (block._type === 'block' && 'children' in block) {
				return block.children
					.map((child) => ('text' in child ? child.text : ''))
					.join('')
			}
			return ''
		})
		.join(' ')
		.trim()
}

export async function getProjects(): Promise<Project[]> {
	try {
		// GROQ query to fetch all projects with technology references
		const query = `*[_type == "project"] | order(order desc) {
			_id,
			title,
			description,
			"technologies": technologies[]-> {
				name,
				description,
				category,
				url
			},
			order,
			site,
			source,
			image
		}`

		const data = await client.fetch<SanityProject[]>(query)

		return data.map((item) => {
			let descriptionText = 'No description available'
			if (item.description) {
				descriptionText = portableTextToPlainText(item.description) || 'No description available'
			}

			// Build image URL if image exists
			let imageUrl: string | undefined
			if (item.image) {
				imageUrl = urlFor(item.image).width(800).url()
			}

			// Map technologies to include name and description for tooltips
			const technologies: Technology[] = (item.technologies || [])
				.filter((tech): tech is SanityTechnology => tech !== null && tech !== undefined)
				.map((tech) => ({
					name: tech.name || 'Unknown',
					description: tech.description || '',
					category: tech.category,
					url: tech.url
				}))

			return {
				id: item._id,
				title: item.title || 'Untitled Project',
				description: descriptionText,
				tech: technologies,
				image: imageUrl,
				imageAlt: item.title,
				demo: item.site,
				source: item.source
			}
		})
	} catch (error) {
		console.error('Error fetching projects from Sanity:', error)
		return []
	}
}
