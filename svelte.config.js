import { mdsvex } from "mdsvex";
import { mdsvexConfig } from "./mdsvex.config.js";
import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: [".svelte", ...mdsvexConfig.extensions],
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		mdsvex(mdsvexConfig),
		preprocess({
			postcss: true,
		}),
	],
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		appDir: 'app',
		target: '#svelte',
		adapter: adapter({
			// default options are shown
			pages: 'docs',
			assets: 'docs',
			fallback: null
		})
	}
};

export default config;
