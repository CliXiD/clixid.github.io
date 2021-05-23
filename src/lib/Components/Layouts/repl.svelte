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
<div class="grid grid-cols-5 gap-4">
    <div class="col-span-3">
        <h2>Code</h2>
        <div class="shadow-md rounded-md bg-gray-100">
            <slot name="edit">
                <!-- the mdsvex content will be slotted in here -->
            </slot>
        </div>
	</div>
	<div class="col-span-2 content-center">
        <h2>Result</h2>
		<div class="shadow-md p-5 rounded-md bg-gray-100">
            <slot>
                <!-- the result goes here -->
            </slot>
        </div>
	</div>
</div>
