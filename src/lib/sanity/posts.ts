import { toHTML } from '@portabletext/to-html'
import type { PortableTextBlock } from '@portabletext/types'
import { client } from './client'

export interface Post {
	title: string
	slug: string
	date: string
	excerpt: string
}

export interface PostDetail extends Post {
	content: PortableTextBlock[] | null
	contentHtml: string
}

interface SanityPost {
	title?: string
	slug?: string
	createdAt?: string
	blurb?: string
	body?: PortableTextBlock[]
}

// Helper function to format date as season + year (e.g., "Spring 2024")
function formatSeasonDate(dateString: string): string {
	const date = new Date(dateString)
	const month = date.getMonth()
	const year = date.getFullYear()

	let season: string
	if (month >= 2 && month <= 4) {
		season = 'Spring'
	} else if (month >= 5 && month <= 7) {
		season = 'Summer'
	} else if (month >= 8 && month <= 10) {
		season = 'Fall'
	} else {
		season = 'Winter'
	}

	return `${season} ${year}`
}

// Helper function to convert Sanity Portable Text to HTML
function portableTextToHtml(portableText: PortableTextBlock[] | null | undefined): string {
	if (!portableText) return ''

	try {
		return toHTML(portableText, {
			components: {
				types: {
					code: ({ value }: { value: { code?: string; language?: string; filename?: string } }) => {
						const code = value.code || ''
						const language = value.language || 'text'
						const filename = value.filename

						// Escape HTML in code
						const escapedCode = code
							.replace(/&/g, '&amp;')
							.replace(/</g, '&lt;')
							.replace(/>/g, '&gt;')
							.replace(/"/g, '&quot;')
							.replace(/'/g, '&#039;')

						return `
							<div class="code-block">
								${filename ? `<div class="code-filename">${filename}</div>` : ''}
								<pre><code class="language-${language}">${escapedCode}</code></pre>
							</div>
						`
					}
				}
			}
		})
	} catch (error) {
		console.error('Error converting Portable Text to HTML:', error)
		return ''
	}
}

export async function getPosts(): Promise<Post[]> {
	try {
		// GROQ query to fetch all posts ordered by creation date (newest first)
		const query = `*[_type == "post"] | order(createdAt desc) {
			title,
			"slug": slug.current,
			createdAt,
			blurb
		}`

		const data = await client.fetch<SanityPost[]>(query)

		return data.map((item) => ({
			title: item.title || 'Untitled Post',
			slug: item.slug || '',
			date: item.createdAt ? formatSeasonDate(item.createdAt) : '',
			excerpt: item.blurb || ''
		}))
	} catch (error) {
		console.error('Error fetching posts from Sanity:', error)
		return []
	}
}

export async function getPostBySlug(slug: string): Promise<PostDetail | null> {
	try {
		// GROQ query to fetch a single post by slug
		const query = `*[_type == "post" && slug.current == $slug][0] {
			title,
			"slug": slug.current,
			createdAt,
			blurb,
			body
		}`

		const data = await client.fetch<SanityPost | null>(query, { slug })

		if (!data) {
			return null
		}

		return {
			title: data.title || 'Untitled Post',
			slug: data.slug || '',
			date: data.createdAt ? formatSeasonDate(data.createdAt) : '',
			excerpt: data.blurb || '',
			content: data.body || null,
			contentHtml: portableTextToHtml(data.body)
		}
	} catch (error) {
		console.error('Error fetching post from Sanity:', error)
		return null
	}
}
