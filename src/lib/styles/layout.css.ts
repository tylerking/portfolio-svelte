import { style } from '@vanilla-extract/css'
import { colors, fonts } from './theme.css'
import { spacing, typography, breakpoints } from './tokens'

export const outerContainer = style({
	margin: '0 auto',
	maxWidth: '1280px',
	minHeight: '100vh',
	padding: `0 ${spacing[6]}`,
	'@media': {
		[`screen and (max-width: ${breakpoints.mobile})`]: {
			padding: `${spacing[8]} ${spacing[4]}`
		}
	}
})

export const container = style({
	display: 'flex',
	gap: spacing[4],
	justifyContent: 'space-between',
	'@media': {
		[`screen and (max-width: ${breakpoints.mobile})`]: {
			flexDirection: 'column',
			gap: spacing[6]
		}
	}
})

export const logo = style({
	height: spacing[16],
	marginBottom: spacing[4],
	width: spacing[16]
})

export const content = style({
	paddingBottom: spacing[24],
	paddingTop: spacing[6],
	width: '700px',
	'@media': {
		[`screen and (max-width: ${breakpoints.mobile})`]: {
			paddingBottom: spacing[8],
			paddingTop: spacing[8],
			width: '100%'
		}
	}
})

export const section = style({
	marginBottom: spacing[16],
	paddingTop: spacing[4]
})

export const sectionTitle = style({
	fontFamily: fonts.heading,
	fontSize: typography.fontSizes['3xl'],
	fontWeight: typography.fontWeights.bold,
	marginBottom: spacing[4]
})

export const sectionContent = style({
	color: colors.foreground,
	lineHeight: typography.lineHeights.normal,
	marginBottom: spacing[8]
})

export const sectionIntro = style({
	marginBottom: spacing[8]
})