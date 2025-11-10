import { sveltekit } from '@sveltejs/kit/vite'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
	plugins: [
		vanillaExtractPlugin({
			identifiers: 'short'
		}),
		sveltekit()
	],
	resolve: {
		alias: {
			$lib: path.resolve('./src/lib')
		}
	}
})