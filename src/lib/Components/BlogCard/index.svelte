<script lang="typescript">
	import Author from '$lib/Components/Author/index.svelte';
	import logo from '$lib/Components/Header/svelte-logo.svg';
	export let name;
	export let title;
	export let summary;
	export let href;
	export let src = logo;
	let clazz;
	export { clazz as class };
</script>

<div class="bg-white shadow-xl jutify-items-center relative rounded-lg overflow-show">
	<a {href}>
		<div class="absolute z-10 -top-3 -right-3">
			<div class="h-12 w-12"><Author {name} /></div>
		</div>
		<div class="p-4">
			<img class="h-30 m-auto" {src} alt={title} />
		</div>
		<div class="p-4">
			<p class="uppercase tracking-wide text-center text-sm font-bold text-gray-700">{title}</p>
			<p class="uppercase tracking-wide text-center text-xs text-gray-700">{summary}</p>
		</div>
	</a>
</div>
