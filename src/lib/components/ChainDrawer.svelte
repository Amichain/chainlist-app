<script lang="ts">
	import { currentChain } from '$lib/stores';
	import ChainDrawerHeader from "$lib/components/ChainDrawerHeader.svelte";
	import ChainDrawerContent from "$lib/components/ChainDrawerContent.svelte";
</script>

<div class="drawer">
	<input type="checkbox" class="hidden drawer-toggle" bind:checked={$currentChain} />
	<div class="drawer-side z-20">
		<button class="drawer-overlay" aria-label="Close" on:click={() => $currentChain = null}></button>
		<div class="drawer-content">
			{#if $currentChain}
				<ChainDrawerHeader />
				<ChainDrawerContent />
			{/if}
		</div>
	</div>
</div>

<style lang="postcss">
	.drawer-content {
		@apply flex flex-col w-screen max-w-lg h-screen
		border-r border-base-content/20
		overflow-y-auto overflow-x-hidden bg-base-100;
	}
</style>