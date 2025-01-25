<script lang="ts">
	import {filters} from "$lib/stores";
	import SearchIcon from 'virtual:icons/hugeicons/search-01'
	import CloseIcon from 'virtual:icons/hugeicons/cancel-01'

	let className = ''
	export { className as class }
</script>

<div class="relative flex items-center gap-2 !pr-0 input input-bordered rounded-full {className}">
	<input type="text" class="grow" placeholder="Search" bind:value={$filters.query} />
	{#if $filters.query.length}
		<button class="absolute right-12 btn btn-circle btn-ghost" on:click={() => $filters.query = ''}>
			<CloseIcon class="" />
		</button>
	{/if}
	<button class="btn btn-circle btn-ghost">
		<SearchIcon class="text-xl" />
	</button>
</div>