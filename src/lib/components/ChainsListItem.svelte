<script lang="ts">
	import { currentChain } from '$lib/stores';
	import ChainLogo from "$lib/components/ChainLogo.svelte";

	export let chain: Chain
</script>

{#if chain}
	<button class="chain-item" on:click={() => $currentChain = chain}>
		<div class="icon">
			{#key chain}
				<ChainLogo chainId={chain.chainId} />
			{/key}
		</div>
		<div class="flex flex-col">
			<span class="name">{chain.name}</span>
			<span class="text-sm">Chain ID {chain.chainId}</span>
		</div>
	</button>
{/if}

<style lang="postcss">
	.chain-item {
		@apply flex flex-col items-center gap-4
		p-4 py-6 rounded-2xl bg-black/10
		border-2 border-base-content/10
		transition-all;
	}
	.chain-item:hover {
		@apply border-base-content bg-base-300 scale-105;
	}
	.chain-item .name {
		@apply text-xl font-medium;
	}
</style>