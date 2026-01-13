import { style, globalStyle } from '@vanilla-extract/css'
import { colors } from '$lib/styles/theme.css'
import { colors as colorTokens, spacing, typography, borderRadius, transitions } from '$lib/styles/tokens'

export const chatBotButton = style({
	alignItems: 'center',
	backgroundColor: colors.teal,
	border: 'none',
	borderRadius: '50%',
	bottom: spacing[6],
	boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
	color: colors.background,
	cursor: 'pointer',
	display: 'flex',
	fontSize: typography.fontSizes['2xl'],
	height: spacing[16],
	justifyContent: 'center',
	position: 'fixed',
	right: spacing[6],
	transition: `all ${transitions.normal}`,
	width: spacing[16],
	zIndex: 1100,
	':hover': {
		boxShadow: '0 6px 16px rgba(0, 0, 0, 0.2)',
		transform: 'scale(1.1)'
	}
})

export const chatBotWindow = style({
	backgroundColor: colors.background,
	border: `2px solid ${colors.border}`,
	borderRadius: borderRadius.lg,
	bottom: '90px',
	boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
	display: 'flex',
	flexDirection: 'column',
	height: '600px',
	position: 'fixed',
	right: spacing[6],
	transition: `all ${transitions.normal}`,
	visibility: 'hidden',
	width: '380px',
	zIndex: 1099,
	'@media': {
		'screen and (max-width: 768px)': {
			bottom: spacing[4],
			height: 'calc(100vh - 32px)',
			left: spacing[4],
			right: spacing[4],
			width: 'calc(100vw - 32px)'
		}
	}
})

export const chatWindowOpen = style({
	opacity: 1,
	pointerEvents: 'auto',
	transform: 'translateY(0)',
	visibility: 'visible'
})

export const chatWindowClosed = style({
	opacity: 0,
	pointerEvents: 'none',
	transform: 'translateY(20px)'
})

export const chatHeader = style({
	alignItems: 'center',
	backgroundColor: colors.teal,
	borderTopLeftRadius: borderRadius.lg,
	borderTopRightRadius: borderRadius.lg,
	color: colors.background,
	display: 'flex',
	justifyContent: 'space-between',
	padding: spacing[4]
})

export const chatHeaderTitle = style({
	fontSize: typography.fontSizes.lg,
	fontWeight: typography.fontWeights.bold,
	margin: 0
})

export const chatHeaderSubtitle = style({
	fontSize: typography.fontSizes.xs,
	margin: 0,
	opacity: 0.9
})

export const chatHeaderButton = style({
	alignItems: 'center',
	background: 'none',
	border: 'none',
	color: colorTokens.white,
	cursor: 'pointer',
	display: 'flex',
	fontSize: typography.fontSizes.xl,
	justifyContent: 'center',
	padding: spacing[1],
	transition: `opacity ${transitions.fast}`,
	':hover': {
		opacity: 0.8
	}
})

export const chatMessages = style({
	display: 'flex',
	flex: 1,
	flexDirection: 'column',
	gap: spacing[3],
	overflowY: 'auto',
	padding: spacing[4]
})

export const chatMessage = style({
	borderRadius: borderRadius.base,
	fontSize: typography.fontSizes.sm,
	lineHeight: typography.lineHeights.normal,
	maxWidth: '80%',
	padding: spacing[3]
})

export const chatMessageUser = style({
	alignSelf: 'flex-end',
	backgroundColor: colors.teal,
	color: colors.background
})

export const chatMessageBot = style({
	alignSelf: 'flex-start',
	backgroundColor: colors.chipBackground,
	color: colors.foreground
})

export const chatInputContainer = style({
	borderTop: `1px solid ${colors.border}`,
	display: 'flex',
	gap: spacing[2],
	padding: spacing[4]
})

export const chatInput = style({
	backgroundColor: colors.background,
	border: `1px solid ${colors.border}`,
	borderRadius: borderRadius.base,
	color: colors.foreground,
	flex: 1,
	fontSize: typography.fontSizes.sm,
	padding: spacing[3],
	':focus': {
		borderColor: colors.teal,
		outline: `2px solid ${colors.teal}`,
		outlineOffset: '2px'
	},
	':disabled': {
		cursor: 'not-allowed',
		opacity: 0.5
	}
})

export const chatSendButton = style({
	alignItems: 'center',
	backgroundColor: colors.teal,
	border: 'none',
	borderRadius: borderRadius.base,
	color: colors.background,
	cursor: 'pointer',
	display: 'flex',
	fontSize: typography.fontSizes.lg,
	justifyContent: 'center',
	padding: spacing[3],
	transition: `opacity ${transitions.fast}`,
	':hover': {
		opacity: 0.9
	},
	':disabled': {
		cursor: 'not-allowed',
		opacity: 0.5
	}
})

// Global styles for message content
globalStyle(`${chatMessage} .message-content`, {
	marginBottom: spacing[1]
})

globalStyle(`${chatMessage} .sources`, {
	borderTop: `1px solid ${colors.border}`,
	marginTop: spacing[2],
	opacity: 0.7,
	paddingTop: spacing[2]
})

globalStyle(`${chatMessage} .typing-indicator`, {
	fontStyle: 'italic',
	opacity: 0.7
})
