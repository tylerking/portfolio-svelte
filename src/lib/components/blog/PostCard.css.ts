import { style } from '@vanilla-extract/css'
import { colors, fonts } from '$lib/styles/theme.css'
import { spacing, typography } from '$lib/styles/tokens'

export const postCard = style({
	marginBottom: spacing[8]
})

export const postDate = style({
	color: colors.muted,
	display: 'block',
	fontSize: typography.fontSizes.sm,
	marginBottom: spacing[2]
})

export const postTitle = style({
	color: colors.teal,
	fontFamily: fonts.heading,
	fontSize: typography.fontSizes.xl,
	marginBottom: spacing[2]
})

export const postExcerpt = style({
	lineHeight: typography.lineHeights.normal
})
