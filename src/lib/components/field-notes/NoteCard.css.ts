import { style, styleVariants } from '@vanilla-extract/css'
import { colors } from '$lib/styles/theme.css'
import { spacing, typography, borderRadius, breakpoints } from '$lib/styles/tokens'

export const noteGrid = style({
	display: 'grid',
	gap: spacing[6],
	gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
	'@media': {
		[`screen and (max-width: ${breakpoints.mobile})`]: {
			gridTemplateColumns: '1fr'
		}
	}
})

export const noteCard = style({
	border: `1px solid ${colors.border}`,
	borderRadius: borderRadius.md,
	display: 'flex',
	flexDirection: 'column',
	padding: spacing[6],
	width: '100%'
})

export const noteCategory = style({
	color: colors.muted,
	fontSize: typography.fontSizes.sm,
	letterSpacing: '0.04em',
	marginBottom: spacing[2],
	textTransform: 'uppercase'
})

export const noteExcerpt = style({
	lineHeight: typography.lineHeights.normal
})

export const noteBody = style({
	flex: 1
})

export const noteRule = style({
	border: 'none',
	borderTop: `1px solid ${colors.border}`,
	margin: `${spacing[4]} 0`
})

export const noteFooter = style({
	marginTop: 'auto'
})

export const noteStatus = style({
	alignItems: 'center',
	color: colors.muted,
	display: 'flex',
	fontSize: typography.fontSizes.sm,
	gap: spacing[2]
})

export const noteStatusDot = style({
	borderRadius: borderRadius.full,
	height: '8px',
	width: '8px'
})

export const noteStatusDotVariant = styleVariants({
	experimental: { backgroundColor: '#8B5CF6' },
	emerging: { backgroundColor: '#F59E0B' },
	stabilizing: { backgroundColor: '#3B82F6' },
	established: { backgroundColor: '#10B981' }
})
