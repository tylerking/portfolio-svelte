import { style } from '@vanilla-extract/css'
import { colors, fonts } from '$lib/styles/theme.css'
import { spacing, typography, borderRadius, transitions } from '$lib/styles/tokens'

export const caseStudyCard = style({
	display: 'flex',
	marginBottom: spacing[12],
	'@media': {
		'screen and (max-width: 768px)': {
			flexDirection: 'column'
		}
	}
})

export const caseStudyImage = style({
	border: `2px solid ${colors.border}`,
	borderRadius: borderRadius.base,
	display: 'block',
	flexShrink: 0,
	height: '140px',
	objectFit: 'cover',
	width: '200px'
})

export const caseStudyContent = style({
	flex: 1,
	marginLeft: '20px',
	'@media': {
		'screen and (max-width: 768px)': {
			marginLeft: 0,
			marginTop: spacing[3]
		}
	}
})

export const caseStudyTitle = style({
	color: colors.foreground,
	display: 'block',
	fontFamily: fonts.accent,
	fontSize: typography.fontSizes.lg,
	fontWeight: typography.fontWeights.semibold,
	marginBottom: spacing[2],
	textDecoration: 'none',
	transition: `color ${transitions.fast}`,
	':hover': {
		color: colors.teal
	}
})

export const caseStudyExcerpt = style({
	lineHeight: typography.lineHeights.normal,
	marginBottom: spacing[2]
})

export const techStack = style({
	display: 'flex',
	flexWrap: 'wrap',
	gap: spacing[2]
})

export const techTag = style({
	background: colors.chipBackground,
	borderRadius: borderRadius.base,
	color: colors.chipText,
	cursor: 'help',
	fontSize: typography.fontSizes.xs,
	padding: `${spacing[1]} ${spacing[2]}`
})
