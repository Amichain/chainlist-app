<script lang="ts">
	import utils from "$lib/utils";
	import {states} from "$lib/stores";
	import SadEmojiIcon from 'virtual:icons/hugeicons/sad-02'
</script>

<div class="flex-1 flex flex-col items-center justify-center gap-4 m-auto col-span-full">
	<SadEmojiIcon class="text-6xl" />
	<span class="text-center text-xl font-medium">No chain found for the selected filters</span>
	<div class="flex flex-col sm:flex-row items-center gap-4">
		<button class="btn btn-outline rounded-full !px-8" on:click={() => $states.isFiltersOpen = true}>Adjust filters</button>
		<button class="btn btn-outline rounded-full !px-8" on:click={utils.resetFilters}>Reset filters</button>
	</div>
</div>