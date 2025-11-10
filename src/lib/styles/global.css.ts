import { globalStyle } from '@vanilla-extract/css'
import { colors, fonts } from './theme.css'
import { transitions } from './tokens'

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
	fontSize: '0.875rem',
	height: '100%',
	transition: `background-color ${transitions.normal}, color ${transitions.normal}`
})

globalStyle('#root', {
	height: '100%'
})

globalStyle('h1, h2, h3, h4, h5, h6', {
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