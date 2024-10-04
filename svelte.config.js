import adapter from '@sveltejs/adapter-node';
import { sveltePreprocess } from 'svelte-preprocess'

/** @type {import("@sveltejs/kit").Config} */
const config = {
	preprocess: sveltePreprocess({ postcss: true }),

	kit: {
		adapter: adapter({
			precompress: true
		})
	}
};

export default config;
