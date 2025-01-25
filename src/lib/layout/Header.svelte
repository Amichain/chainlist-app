<script lang="ts">
	import {states} from "$lib/stores";
	import Logo from '$lib/layout/Logo.svelte'
	import ThemeSwitcher from '$lib/components/ThemeSwitcher.svelte';
	import HeaderSearch from "$lib/layout/HeaderSearch.svelte";
	import HeaderFilters from "$lib/layout/HeaderFilters.svelte";
	import HeaderSearchInput from "$lib/layout/HeaderSearchInput.svelte";
</script>

<div class="sticky top-0 navbar border-b border-base-content/10 bg-base-200 z-10">
	<div class="navbar-start gap-8">
		<a href="/" class="flex items-center gap-2 text-xl sm:text-2xl font-bold">
			<Logo />
			<span>Chainlist</span>
		</a>
	</div>
	<div class="navbar-center ml-auto mr-4 sm:mx-0">
		<HeaderSearch />
	</div>
	<div class="navbar-end justify-end gap-4 w-auto sm:w-1/2">
		<HeaderFilters />
		<ThemeSwitcher />
	</div>
</div>

{#if $states.isMobileSearchOpen}
	<div class="block sm:hidden sticky top-16 left-0 w-full p-4 border-y border-base-content/10 bg-base-200">
		<HeaderSearchInput />
	</div>
{/if}

<style lang="postcss">
	.navbar-start {
		padding-left: calc((100dvw - 1520px) / 2);
	}
	.navbar-end {
		padding-right: calc((100dvw - 1520px) / 2);
	}
</style>