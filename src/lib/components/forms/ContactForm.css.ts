import { style } from '@vanilla-extract/css'
import { colors } from '$lib/styles/theme.css'
import { spacing, typography, borderRadius, transitions } from '$lib/styles/tokens'

export const contactForm = style({
	display: 'flex',
	flexDirection: 'column',
	gap: spacing[4],
	maxWidth: '500px'
})

export const formGroup = style({
	display: 'flex',
	flexDirection: 'column',
	gap: spacing[2]
})

export const formLabel = style({
	color: colors.foreground,
	fontSize: typography.fontSizes.sm,
	fontWeight: typography.fontWeights.medium
})

export const formInput = style({
	backgroundColor: colors.background,
	border: `1px solid ${colors.border}`,
	borderRadius: borderRadius.base,
	color: colors.foreground,
	fontSize: typography.fontSizes.base,
	padding: spacing[3],
	':focus': {
		borderColor: colors.teal,
		outline: `2px solid ${colors.teal}`,
		outlineOffset: '2px'
	}
})

export const formTextarea = style({
	backgroundColor: colors.background,
	border: `1px solid ${colors.border}`,
	borderRadius: borderRadius.base,
	color: colors.foreground,
	fontSize: typography.fontSizes.base,
	minHeight: '120px',
	padding: spacing[3],
	resize: 'vertical',
	':focus': {
		borderColor: colors.teal,
		outline: `2px solid ${colors.teal}`,
		outlineOffset: '2px'
	}
})

export const formSelect = style({
	backgroundColor: colors.background,
	border: `1px solid ${colors.border}`,
	borderRadius: borderRadius.base,
	color: colors.foreground,
	fontSize: typography.fontSizes.base,
	padding: spacing[3],
	':focus': {
		borderColor: colors.teal,
		outline: `2px solid ${colors.teal}`,
		outlineOffset: '2px'
	}
})

export const submitButton = style({
	alignSelf: 'flex-start',
	backgroundColor: colors.teal,
	border: 'none',
	borderRadius: borderRadius.base,
	color: colors.background,
	cursor: 'pointer',
	fontSize: typography.fontSizes.base,
	fontWeight: typography.fontWeights.medium,
	padding: `${spacing[3]} ${spacing[6]}`,
	transition: `background-color ${transitions.fast}`,
	':hover': {
		opacity: 0.9
	},
	':disabled': {
		opacity: 0.6,
		cursor: 'not-allowed'
	}
})

export const successMessage = style({
	backgroundColor: 'rgba(16, 185, 129, 0.1)',
	border: `1px solid rgba(16, 185, 129, 0.3)`,
	borderRadius: borderRadius.base,
	color: 'rgb(16, 185, 129)',
	padding: spacing[4],
	marginBottom: spacing[4],
	textAlign: 'center',
	fontSize: typography.fontSizes.base,
	fontWeight: typography.fontWeights.medium
})

export const errorMessage = style({
	backgroundColor: 'rgba(239, 68, 68, 0.1)',
	border: `1px solid rgba(239, 68, 68, 0.3)`,
	borderRadius: borderRadius.base,
	color: 'rgb(239, 68, 68)',
	padding: spacing[4],
	marginBottom: spacing[4],
	textAlign: 'center',
	fontSize: typography.fontSizes.base,
	fontWeight: typography.fontWeights.medium
})
