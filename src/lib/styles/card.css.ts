import { style } from '@vanilla-extract/css'
import { colors, fonts } from './theme.css'
import { spacing, typography, borderRadius, transitions } from './tokens'

// Shared card container
export const card = style({
	display: 'flex',
	marginBottom: spacing[12],
	'@media': {
		'screen and (max-width: 768px)': {
			flexDirection: 'column'
		}
	}
})

// Shared card image
export const cardImage = style({
	border: `2px solid ${colors.border}`,
	borderRadius: borderRadius.base,
	display: 'block',
	flexShrink: 0,
	height: '140px',
	objectFit: 'cover',
	width: '200px'
})

// Shared card content wrapper
export const cardContent = style({
	flex: 1
})

// Shared card content wrapper with image (has left margin)
export const cardContentWithImage = style({
	flex: 1,
	marginLeft: '20px',
	'@media': {
		'screen and (max-width: 768px)': {
			marginLeft: 0,
			marginTop: spacing[3]
		}
	}
})

// Shared card header
export const cardHeader = style({
	alignItems: 'center',
	display: 'flex',
	justifyContent: 'space-between',
	marginBottom: spacing[2]
})

// Shared card title
export const cardTitle = style({
	color: colors.foreground,
	fontFamily: fonts.accent,
	fontSize: typography.fontSizes.lg,
	fontWeight: typography.fontWeights.semibold,
	margin: 0,
	textDecoration: 'underline',
	textDecorationColor: colors.teal,
	transition: `color ${transitions.fast}`,
	':hover': {
		color: colors.teal
	}
})

// Shared card description
export const cardDescription = style({
	lineHeight: typography.lineHeights.normal,
	marginBottom: spacing[2]
})

// Shared card actions
export const cardActions = style({
	alignItems: 'center',
	display: 'flex',
	gap: spacing[3]
})

export const cardAction = style({
	color: colors.teal,
	fontSize: typography.fontSizes.lg,
	transition: `color ${transitions.fast}`,
	':hover': {
		opacity: 0.8
	}
})

// Shared tech stack
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
