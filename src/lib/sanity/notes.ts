import { toHTML } from '@portabletext/to-html'
import type { PortableTextBlock } from '@portabletext/types'
import { client } from './client'

export interface Note {
	title: string
	slug: string
	category: string
	status: string
	excerpt: string
}

export interface NoteDetail extends Note {
	overviewHtml: string
	whyHtml: string
	whenHtml: string
	exampleHtml: string
	codepenUrl?: string
	tradeOffsHtml: string
}

interface SanityNote {
	title?: string
	slug?: string
	category?: string
	status?: string
	excerpt?: string
	overview?: PortableTextBlock[]
	why?: PortableTextBlock[]
	when?: PortableTextBlock[]
	example?: PortableTextBlock[]
	codepenUrl?: string
	tradeOffs?: PortableTextBlock[]
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

export async function getNotes(): Promise<Note[]> {
	try {
		// GROQ query to fetch all notes ordered by creation date (newest first)
		const query = `*[_type == "note"] | order(_createdAt desc) {
			title,
			"slug": slug.current,
			category,
			status,
			excerpt
		}`

		const data = await client.fetch<SanityNote[]>(query)

		return data.map((item) => ({
			title: item.title || 'Untitled Note',
			slug: item.slug || '',
			category: item.category || '',
			status: item.status || '',
			excerpt: item.excerpt || ''
		}))
	} catch (error) {
		console.error('Error fetching notes from Sanity:', error)
		return []
	}
}

export async function getNoteBySlug(slug: string): Promise<NoteDetail | null> {
	try {
		// GROQ query to fetch a single note by slug
		const query = `*[_type == "note" && slug.current == $slug][0] {
			title,
			"slug": slug.current,
			category,
			status,
			excerpt,
			overview,
			why,
			when,
			example,
			codepenUrl,
			tradeOffs
		}`

		const data = await client.fetch<SanityNote | null>(query, { slug })

		if (!data) {
			return null
		}

		return {
			title: data.title || 'Untitled Note',
			slug: data.slug || '',
			category: data.category || '',
			status: data.status || '',
			excerpt: data.excerpt || '',
			overviewHtml: portableTextToHtml(data.overview),
			whyHtml: portableTextToHtml(data.why),
			whenHtml: portableTextToHtml(data.when),
			exampleHtml: portableTextToHtml(data.example),
			codepenUrl: data.codepenUrl || undefined,
			tradeOffsHtml: portableTextToHtml(data.tradeOffs)
		}
	} catch (error) {
		console.error('Error fetching note from Sanity:', error)
		return null
	}
}
