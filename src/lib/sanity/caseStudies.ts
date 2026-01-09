import { toHTML } from '@portabletext/to-html'
import type { PortableTextBlock } from '@portabletext/types'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import imageUrlBuilder from '@sanity/image-url'
import { client } from './client'

export interface Technology {
	name: string
	description?: string
}

export interface CaseStudy {
	title: string
	slug: string
	excerpt: string
	thumbnail?: string
	technology?: Technology[]
}

export interface Visual {
	url: string
	alt: string
	caption: string
}

export interface CaseStudyDetail extends CaseStudy {
	problemHtml: string
	solutionHtml: string
	outcomeHtml: string
	visuals: Visual[]
}

interface SanityTechnology {
	name?: string
	description?: string
}

interface SanityVisual {
	asset?: SanityImageSource
	alt?: string
	caption?: string
}

interface SanityCaseStudy {
	title?: string
	slug?: string
	excerpt?: string
	thumbnail?: SanityImageSource
	overview?: string
	technology?: SanityTechnology[]
	problem?: PortableTextBlock[]
	solution?: PortableTextBlock[]
	outcome?: PortableTextBlock[]
	visuals?: SanityVisual[]
}

// Helper to build image URLs from Sanity
const builder = imageUrlBuilder(client)

function urlFor(source: SanityImageSource) {
	return builder.image(source)
}

// Helper function to check if a URL is external
function isExternalUrl(url: string): boolean {
	return url.startsWith('http://') || url.startsWith('https://')
}

// Helper function to convert Sanity Portable Text to HTML
function portableTextToHtml(portableText: PortableTextBlock[] | null | undefined): string {
	if (!portableText) return ''

	try {
		return toHTML(portableText, {
			components: {
				marks: {
					link: ({ children, value }) => {
						const href = value?.href || ''
						if (isExternalUrl(href)) {
							return `<a href="${href}" target="_blank" rel="noopener noreferrer">${children}</a>`
						}
						return `<a href="${href}">${children}</a>`
					}
				}
			}
		})
	} catch (error) {
		console.error('Error converting Portable Text to HTML:', error)
		return ''
	}
}

export async function getCaseStudies(): Promise<CaseStudy[]> {
	try {
		const query = `*[_type == "caseStudy"] | order(_createdAt desc) {
			title,
			"slug": slug.current,
			excerpt,
			thumbnail,
			"technology": tools[]-> { name, description }
		}`

		const data = await client.fetch<SanityCaseStudy[]>(query)

		return data.map((item) => {
			let thumbnailUrl: string | undefined
			if (item.thumbnail) {
				thumbnailUrl = urlFor(item.thumbnail).width(800).url()
			}

			const technology: Technology[] = (item.technology || [])
				.filter((tech): tech is SanityTechnology => tech !== null && tech !== undefined)
				.map((tech) => ({
					name: tech.name || 'Unknown',
					description: tech.description
				}))

			return {
				title: item.title || 'Untitled Case Study',
				slug: item.slug || '',
				excerpt: item.excerpt || '',
				thumbnail: thumbnailUrl,
				technology
			}
		})
	} catch (error) {
		console.error('Error fetching case studies from Sanity:', error)
		return []
	}
}

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudyDetail | null> {
	try {
		const query = `*[_type == "caseStudy" && slug.current == $slug][0] {
			title,
			"slug": slug.current,
			excerpt,
			overview,
			"technology": tools[]-> { name, description },
			problem,
			solution,
			outcome,
			visuals
		}`

		const data = await client.fetch<SanityCaseStudy | null>(query, { slug })

		if (!data) {
			return null
		}

		const technology: Technology[] = (data.technology || [])
			.filter((tech): tech is SanityTechnology => tech !== null && tech !== undefined)
			.map((tech) => ({
				name: tech.name || 'Unknown',
				description: tech.description
			}))

		// Process visuals
		const visuals: Visual[] = (data.visuals || [])
			.filter((v): v is SanityVisual => v !== null && v !== undefined && v.asset !== undefined)
			.map((v) => ({
				url: urlFor(v.asset!).width(1200).url(),
				alt: v.alt || '',
				caption: v.caption || ''
			}))

		return {
			title: data.title || 'Untitled Case Study',
			slug: data.slug || '',
			excerpt: data.excerpt || '',
			overview: data.overview || '',
			technology,
			problemHtml: portableTextToHtml(data.problem),
			solutionHtml: portableTextToHtml(data.solution),
			outcomeHtml: portableTextToHtml(data.outcome),
			visuals
		}
	} catch (error) {
		console.error('Error fetching case study from Sanity:', error)
		return null
	}
}
