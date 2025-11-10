import { style } from '@vanilla-extract/css'
import { colors } from '$lib/styles/theme.css'
import { spacing, typography, transitions } from '$lib/styles/tokens'

export const themeToggle = style({
	background: colors.teal,
	border: 'none',
	borderRadius: spacing[6],
	cursor: 'pointer',
	height: spacing[6],
	padding: 0,
	position: 'relative',
	transition: `background-color ${transitions.fast}`,
	width: spacing[12],
	':hover': {
		opacity: 0.8
	}
})

export const themeToggleThumb = style({
	alignItems: 'center',
	background: colors.background,
	borderRadius: '50%',
	color: colors.teal,
	display: 'flex',
	fontSize: typography.fontSizes.xs,
	height: 'calc(1.5rem - 4px)',
	justifyContent: 'center',
	left: '2px',
	position: 'absolute',
	top: '2px',
	transition: `transform ${transitions.fast}`,
	width: 'calc(1.5rem - 4px)',
	selectors: {
		'[data-theme="light"] &': {
			transform: 'translateX(1.5rem)'
		}
	}
})
