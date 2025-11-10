export const colors = {
	black: '#1A1A1A',
	white: '#FAFAFA',
	teal: {
		light: '#00788C',
		dark: '#008FA6',
	},
	purple: {
		light: '#1d1160',
		dark: '#8271E6',
	},
	gray: {
		100: '#f3f4f6',
		200: '#e5e7eb',
		300: '#d1d5db',
		400: '#9ca3af',
		500: '#6b7280',
		600: '#4b5563',
		700: '#374151',
		800: '#1f2937',
		900: '#111827'
	}
} as const

export const typography = {
	fonts: {
		heading: '"Space Mono", monospace',
		body: '"Nunito", sans-serif',
		accent: '"Titillium Web", sans-serif'
	},
	fontSizes: {
		xs: '0.75rem',
		sm: '0.875rem',
		base: '1rem',
		lg: '1.125rem',
		xl: '1.25rem',
		'2xl': '1.5rem',
		'3xl': '1.875rem',
		'4xl': '2.25rem',
		'5xl': '3rem'
	},
	fontWeights: {
		light: 300,
		normal: 400,
		medium: 500,
		semibold: 600,
		bold: 700
	},
	lineHeights: {
		tight: 1.25,
		normal: 1.5,
		relaxed: 1.625
	}
} as const

export const spacing = {
	0: '0',
	1: '0.25rem',
	2: '0.5rem',
	3: '0.75rem',
	4: '1rem',
	5: '1.25rem',
	6: '1.5rem',
	8: '2rem',
	10: '2.5rem',
	12: '3rem',
	16: '4rem',
	20: '5rem',
	24: '6rem'
} as const

export const borderRadius = {
	none: '0',
	sm: '0.125rem',
	base: '0.25rem',
	md: '0.375rem',
	lg: '0.5rem',
	xl: '0.75rem',
	'2xl': '1rem',
	full: '9999px'
} as const

export const transitions = {
	fast: '0.2s ease',
	normal: '0.3s ease',
	slow: '0.5s ease'
} as const

export const breakpoints = {
	mobile: '768px'
} as const