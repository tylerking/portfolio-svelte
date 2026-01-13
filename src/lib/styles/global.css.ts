import { globalStyle } from '@vanilla-extract/css'
import { colors, fonts } from './theme.css'
import { transitions, borderRadius } from './tokens'

globalStyle('*', {
	boxSizing: 'border-box',
	margin: 0,
	padding: 0
})

globalStyle('html', {
	height: '100%'
})

globalStyle('body', {
	backgroundColor: colors.background,
	color: colors.foreground,
	fontFamily: fonts.body,
	fontSize: '1rem',
	height: '100%',
	transition: `background-color ${transitions.normal}, color ${transitions.normal}`
})

globalStyle('#root', {
	height: '100%'
})

globalStyle('h1, h2, h3, h4, h5, h6', {
	color: colors.teal,
	fontFamily: fonts.heading
})

globalStyle('a', {
	color: colors.teal,
	textDecoration: 'none',
	transition: `opacity ${transitions.fast}`
})

globalStyle('a:hover', {
	opacity: 0.8
})

globalStyle('p', {
	marginBottom: '1rem'
})

globalStyle('p:last-child', {
	marginBottom: 0
})

globalStyle('ul, ol', {
	lineHeight: '1.5',
	marginBottom: '1rem',
	paddingLeft: '1.5rem'
})

globalStyle('ul:last-child, ol:last-child', {
	marginBottom: 0
})

globalStyle('li', {
	marginBottom: '0.5rem'
})

globalStyle('li:last-child', {
	marginBottom: 0
})

globalStyle('ul ul, ul ol, ol ul, ol ol', {
	marginBottom: '0.5rem',
	marginTop: '0.5rem'
})

globalStyle('nav i', {
	fontSize: '1rem'
})

// Code block styles
globalStyle('.code-block', {
	border: `1px solid ${colors.border}`,
	borderRadius: '8px',
	marginBottom: '1.5rem',
	overflow: 'hidden'
})

globalStyle('.code-filename', {
	backgroundColor: colors.border,
	borderBottom: `1px solid ${colors.border}`,
	color: colors.foreground,
	fontFamily: 'monospace',
	fontSize: '0.875rem',
	padding: '0.5rem 1rem'
})

globalStyle('.code-block pre', {
	margin: 0,
	overflow: 'auto'
})

globalStyle('.code-block code', {
	fontFamily: 'monospace',
	fontSize: '0.75rem',
	lineHeight: '1.6'
})

// Reusable bordered element style
globalStyle('.bordered', {
	border: `2px solid ${colors.border}`,
	borderRadius: borderRadius.base
})

// Approach step card styles
globalStyle('.approach-card', {
	display: 'flex',
	alignItems: 'flex-start',
	gap: '16px',
	padding: '16px',
	marginBottom: '12px',
	position: 'relative'
})

globalStyle('.approach-icon', {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	width: '44px',
	height: '44px',
	flexShrink: 0,
	borderRadius: '10px',
	backgroundColor: colors.border,
	color: colors.teal,
	fontSize: '20px',
	position: 'relative',
	zIndex: 1
})

globalStyle('.approach-card:not(:last-child) .approach-icon::after', {
	content: '""',
	position: 'absolute',
	top: '100%',
	left: '50%',
	transform: 'translateX(-50%)',
	width: '2px',
	height: 'calc(100% + 12px + 32px)',
	backgroundColor: colors.border
})

globalStyle('.approach-content', {
	flex: 1
})

globalStyle('.approach-title', {
	fontSize: '1.125rem',
	fontWeight: 600,
	marginBottom: '8px',
	color: colors.foreground
})

globalStyle('.approach-description', {
	color: colors.muted,
	lineHeight: 1.6,
	margin: 0
})