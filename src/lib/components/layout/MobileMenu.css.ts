import { style } from '@vanilla-extract/css'
import { colors } from '$lib/styles/theme.css'
import { spacing, transitions, breakpoints } from '$lib/styles/tokens'

export const hamburger = style({
	display: 'none',
	'@media': {
		[`screen and (max-width: ${breakpoints.mobile})`]: {
			background: 'none',
			border: 'none',
			cursor: 'pointer',
			display: 'flex',
			flexDirection: 'column',
			gap: '6px',
			height: '44px',
			justifyContent: 'center',
			padding: spacing[2],
			position: 'fixed',
			right: spacing[4],
			top: spacing[4],
			width: '44px',
			zIndex: 1000
		}
	}
})

export const hamburgerLine = style({
	background: colors.foreground,
	borderRadius: '2px',
	height: '3px',
	transformOrigin: 'center',
	transition: `all ${transitions.fast}`,
	width: '28px'
})

export const hamburgerLineOpen = style({
	selectors: {
		'&:nth-child(1)': {
			transform: 'translateY(9px) rotate(45deg)'
		},
		'&:nth-child(2)': {
			opacity: 0
		},
		'&:nth-child(3)': {
			transform: 'translateY(-9px) rotate(-45deg)'
		}
	}
})

export const mobileMenu = style({
	display: 'none',
	'@media': {
		[`screen and (max-width: ${breakpoints.mobile})`]: {
			background: colors.background,
			bottom: 0,
			flexDirection: 'column',
			gap: spacing[4],
			left: 0,
			padding: spacing[8],
			paddingTop: spacing[20],
			position: 'fixed',
			right: 0,
			top: 0,
			zIndex: 999
		}
	}
})

export const mobileMenuOpen = style({
	'@media': {
		[`screen and (max-width: ${breakpoints.mobile})`]: {
			display: 'flex'
		}
	}
})
