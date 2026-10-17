import { sveltekit } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-node';
import tailwindcss from '@tailwindcss/vite';
import { sveltePreprocess } from 'svelte-preprocess';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
			preprocess: sveltePreprocess(),
			adapter: adapter({
				precompress: true
			})
		})
	]
});
