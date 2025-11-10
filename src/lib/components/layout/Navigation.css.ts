import { style } from '@vanilla-extract/css'
import { colors } from '$lib/styles/theme.css'
import { spacing, typography, transitions } from '$lib/styles/tokens'

export const navLink = style({
	alignItems: 'center',
	background: 'none',
	border: 'none',
	color: colors.foreground,
	cursor: 'pointer',
	display: 'flex',
	fontSize: typography.fontSizes.sm,
	fontWeight: typography.fontWeights.normal,
	gap: spacing[2],
	letterSpacing: '0.1em',
	padding: `${spacing[3]} 0`,
	textAlign: 'left',
	textTransform: 'none',
	transition: `color ${transitions.fast}`,
	':hover': {
		color: colors.teal
	}
})

export const navLinkActive = style({
	alignItems: 'center',
	background: 'none',
	border: 'none',
	color: colors.teal,
	cursor: 'pointer',
	display: 'flex',
	fontSize: typography.fontSizes.sm,
	fontWeight: typography.fontWeights.normal,
	gap: spacing[2],
	letterSpacing: '0.1em',
	padding: `${spacing[3]} 0`,
	textAlign: 'left',
	textTransform: 'none',
	transition: `color ${transitions.fast}`,
	':hover': {
		color: colors.teal
	}
})
