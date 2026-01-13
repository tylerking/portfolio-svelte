import { style } from '@vanilla-extract/css'
import { colors, fonts } from '$lib/styles/theme.css'
import { spacing, typography, borderRadius, transitions } from '$lib/styles/tokens'

export const projectCard = style({
	display: 'flex',
	marginBottom: spacing[12],
	'@media': {
		'screen and (max-width: 768px)': {
			flexDirection: 'column'
		}
	}
})

export const projectContent = style({
	flex: 1
})

export const projectHeader = style({
	alignItems: 'center',
	display: 'flex',
	justifyContent: 'space-between',
	marginBottom: spacing[2]
})

export const projectTitle = style({
	color: colors.foreground,
	fontFamily: fonts.accent,
	fontSize: typography.fontSizes.lg,
	fontWeight: typography.fontWeights.semibold,
	margin: 0,
	textDecoration: 'none',
	transition: `color ${transitions.fast}`,
	':hover': {
		color: colors.teal
	}
})

export const projectActions = style({
	alignItems: 'center',
	display: 'flex',
	gap: spacing[3]
})

export const projectAction = style({
	color: colors.teal,
	fontSize: typography.fontSizes.lg,
	transition: `color ${transitions.fast}`,
	':hover': {
		opacity: 0.8
	}
})

export const projectDescription = style({
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
