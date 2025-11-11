import type { RequestHandler } from './$types'
import { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET, PUBLIC_SANITY_WRITE_TOKEN } from '$env/static/public'

const PROJECT_ID = PUBLIC_SANITY_PROJECT_ID!
const DATASET = PUBLIC_SANITY_DATASET!
const TOKEN = PUBLIC_SANITY_WRITE_TOKEN!

export const POST: RequestHandler = async ({ request }) => {
  const form = await request.formData()
  if ((form.get('bot-field') as string | null)?.trim()) {
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    })
  }

  const name = (form.get('name') as string | null) ?? ''
  const email = (form.get('email') as string | null) ?? ''
  const phone = (form.get('phone') as string | null) ?? ''
  const reason = (form.get('reason') as string | null) ?? ''
  const message = (form.get('message') as string | null) ?? ''

  if (!name || !email || !message) {
    return new Response('Missing fields', { status: 400 })
  }

  const reasonLabels: Record<string, string> = {
    project: 'New Project',
    consultation: 'Consultation',
    collaboration: 'Collaboration',
    general: 'General Inquiry'
  }

  const title = reason && reasonLabels[reason]
    ? `${reasonLabels[reason]} from ${name}`
    : `Message from ${name}`

  const timestamp = Date.now()
  const document: Record<string, unknown> = {
    _type: 'messageType',
    title,
    fromName: name,
    fromEmail: email,
    body: [
      {
        _key: `block-${timestamp}`,
        _type: 'block',
        style: 'normal',
        children: [
          {
            _key: `span-${timestamp}-${Math.random().toString(36).substring(2, 9)}`,
            _type: 'span',
            text: message
          }
        ]
      }
    ],
    createdAt: new Date().toISOString()
  }

  if (reason) {
    document.reason = reason
  }

  if (phone) {
    document.fromPhone = phone
  }

  const mutations = {
    mutations: [
      {
        create: document
      }
    ]
  }

  const res = await fetch(
    `https://${PROJECT_ID}.api.sanity.io/v2023-10-01/data/mutate/${DATASET}?returnIds=true`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${TOKEN}`
      },
      body: JSON.stringify(mutations)
    }
  )

  if (!res.ok) {
    const text = await res.text()
    return new Response(JSON.stringify({ error: `Sanity error: ${text}` }), {
      status: 502,
      headers: { 'Content-Type': 'application/json' }
    })
  }

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  })
}
