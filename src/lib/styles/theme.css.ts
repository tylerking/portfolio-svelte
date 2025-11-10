import { createTheme, createThemeContract } from '@vanilla-extract/css'
import { colors as colorTokens, typography } from './tokens'

export const colors = createThemeContract({
	background: null,
	foreground: null,
	teal: null,
	purple: null,
	border: null,
	muted: null,
	chipBackground: null,
	chipText: null
})

export const lightTheme = createTheme(colors, {
	background: colorTokens.white,
	foreground: colorTokens.black,
	teal: colorTokens.teal.light,
	purple: colorTokens.purple.light,
	border: colorTokens.gray[200],
	muted: colorTokens.gray[500],
	chipBackground: colorTokens.gray[200],
	chipText: colorTokens.gray[700]
})

export const darkTheme = createTheme(colors, {
	background: colorTokens.black,
	foreground: colorTokens.white,
	teal: colorTokens.teal.dark,
	purple: colorTokens.purple.dark,
	border: colorTokens.gray[700],
	muted: colorTokens.gray[400],
	chipBackground: colorTokens.gray[800],
	chipText: colorTokens.gray[300]
})

export const fonts = typography.fonts