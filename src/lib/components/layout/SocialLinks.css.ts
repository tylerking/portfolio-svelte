import { style } from '@vanilla-extract/css'
import { colors } from '$lib/styles/theme.css'
import { spacing, typography } from '$lib/styles/tokens'

export const socialLink = style({
	color: colors.teal,
	fontSize: typography.fontSizes['2xl'],
	marginLeft: spacing[3],
	marginTop: spacing[2],
	textDecoration: 'none',
	':hover': {
		opacity: 0.8
	}
})
