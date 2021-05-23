<script lang="ts">
    import Author from '$lib/Components/Author/index.svelte';
	export let title;
	export let author;
	export let date;
</script>

<div class="grid grid-cols-5 gap-4">
    <h1 class="text-left col-span-4">{title}</h1>
	<p class="inline-block justify-self-end">by: <Author name={author} /></p>
</div>
<div class="mt-5">
	<slot>
		<!-- the mdsvex content will be slotted in here -->
	</slot>
</div>
