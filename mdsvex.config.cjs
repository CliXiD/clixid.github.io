module.exports = {
	extensions: [".svelte.md", ".md", ".svx"],
	layout: {
		blogs: 'src/lib/Components/Layouts/blog.svelte',
		repl: 'src/lib/Components/Layouts/repl.svelte',
		_: 'src/lib/Components/Layouts/index.svelte'
	},
	smartypants: {
		dashes: "oldschool",
	},
	remarkPlugins: [
		[require("remark-github"), {
			// Use your own repository
			repository: "https://github.com/svelte-add/mdsvex.git",
		}],
		require("remark-abbr"),
	],
	rehypePlugins: [
		require("rehype-slug"),
		[require("rehype-autolink-headings"), {
			behavior: "wrap",
		}],
	],
};
