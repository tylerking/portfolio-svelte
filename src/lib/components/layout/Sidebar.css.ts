import { style } from '@vanilla-extract/css'
import { colors, fonts } from '$lib/styles/theme.css'
import { spacing, typography, breakpoints } from '$lib/styles/tokens'

export const sidebar = style({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',
	maxHeight: '100vh',
	padding: `${spacing[8]} 0 ${spacing[8]} ${spacing[8]}`,
	position: 'sticky',
	top: 0,
	width: '400px',
	'@media': {
		[`screen and (max-width: ${breakpoints.mobile})`]: {
			maxHeight: 'none',
			padding: 0,
			position: 'relative',
			width: '100%'
		}
	}
})

export const sidebarContent = style({
	display: 'flex',
	flexDirection: 'column'
})

export const name = style({
	color: colors.teal,
	display: 'block',
	fontFamily: fonts.heading,
	fontSize: '3.5rem',
	fontWeight: typography.fontWeights.bold,
	marginBottom: spacing[2],
	textDecoration: 'none',
	':hover': {
		opacity: 1
	},
	'@media': {
		[`screen and (max-width: ${breakpoints.mobile})`]: {
			fontSize: typography.fontSizes['4xl']
		}
	}
})

export const title = style({
	color: colors.foreground,
	fontFamily: fonts.body,
	fontSize: typography.fontSizes.lg,
	fontWeight: typography.fontWeights.normal,
	marginBottom: spacing[2]
})

export const description = style({
	color: colors.foreground,
	fontFamily: fonts.body,
	fontSize: typography.fontSizes.sm,
	fontWeight: typography.fontWeights.normal,
	lineHeight: typography.lineHeights.normal,
	marginBottom: spacing[3]
})

export const socialLinks = style({
	alignItems: 'center',
	display: 'flex',
	justifyContent: 'space-between',
	marginRight: spacing[3]
})

export const navigation = style({
	display: 'flex',
	flexDirection: 'column',
	marginTop: spacing[16],
	'@media': {
		[`screen and (max-width: ${breakpoints.mobile})`]: {
			display: 'none'
		}
	}
})
