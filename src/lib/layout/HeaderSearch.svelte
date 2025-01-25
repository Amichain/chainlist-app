<script lang="ts">
	import {states} from "$lib/stores";
	import SearchIcon from 'virtual:icons/hugeicons/search-01'
	import CloseSearchIcon from 'virtual:icons/hugeicons/search-remove'
	import HeaderSearchInput from "$lib/layout/HeaderSearchInput.svelte";

	const toggleMobileSearch = () => {
		$states.isMobileSearchOpen = !$states.isMobileSearchOpen
	}
</script>

<button class="flex sm:hidden btn btn-circle btn-ghost ml-auto" on:click={toggleMobileSearch}>
	{#if $states.isMobileSearchOpen}
		<CloseSearchIcon class="text-2xl" />
	{:else}
		<SearchIcon class="text-2xl" />
	{/if}
</button>

<HeaderSearchInput class="hidden sm:flex" />