import { style } from '@vanilla-extract/css'
import { colors } from '$lib/styles/theme.css'
import { spacing, typography } from '$lib/styles/tokens'

export const authorCard = style({
	alignItems: 'center',
	borderTop: `2px solid ${colors.border}`,
	display: 'flex',
	gap: spacing[4],
	marginTop: spacing[12],
	padding: spacing[6]
})

export const authorAvatarWrapper = style({
	borderRadius: '50%',
	flexShrink: 0,
	height: spacing[16],
	overflow: 'hidden',
	position: 'relative',
	width: spacing[16],
	'::after': {
		background: 'rgba(0, 120, 140, 0.2)',
		content: '""',
		height: '100%',
		left: 0,
		mixBlendMode: 'multiply',
		pointerEvents: 'none',
		position: 'absolute',
		top: 0,
		width: '100%'
	}
})

export const authorAvatar = style({
	filter: 'grayscale(100%)',
	height: '100%',
	objectFit: 'cover',
	width: '100%'
})

export const authorInfo = style({
	flex: 1
})

export const authorName = style({
	color: colors.foreground,
	fontSize: typography.fontSizes.lg,
	fontWeight: typography.fontWeights.bold,
	marginBottom: spacing[1]
})

export const authorBio = style({
	color: colors.foreground,
	fontSize: typography.fontSizes.sm,
	lineHeight: typography.lineHeights.normal,
	marginBottom: spacing[3]
})

export const authorSocialLinks = style({
	display: 'flex',
	gap: spacing[3]
})

export const authorSocialLink = style({
	color: colors.teal,
	fontSize: typography.fontSizes.xl,
	textDecoration: 'none',
	':hover': {
		opacity: 0.8
	}
})
