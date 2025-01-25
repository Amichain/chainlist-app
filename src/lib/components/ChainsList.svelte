<script lang="ts">
	import type { Chain } from '@amichain/chainlist'
	import { chains } from '@amichain/chainlist'
	import { filters, llamaChains, resultsNumber, states } from "$lib/stores";
	import ChainsListItem from '$lib/components/ChainsListItem.svelte';
	import ChainsListNoResults from "$lib/components/ChainsListNoResults.svelte";
	import ChainListPreloader from "$lib/components/ChainListPreloader.svelte";

	$: filteredChains = (Object.values(chains) as Chain[])
		.filter(c => {
			if($filters.testnet === false && c.testnet) {
				return false
			}
			if($filters.noExplorer === false && !c.explorers.length) {
				return false
			}
			if($filters.noWebsite === false && !c.website) {
				return false
			}
			if($filters.orderBy === 'tvl' && !$llamaChains.find(tvl => tvl.chainId === c.chainId)?.tvl) {
				return false
			}
			if($filters.query?.length && !isNaN(Number($filters.query))) {
				return c.chainId === Number($filters.query)
			}
			return c.name.toLowerCase().indexOf($filters.query.toLowerCase()) !== -1
		})
		.sort((a, b) => {
			if($filters.orderBy === 'name') {
				return $filters.order === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
			} else if($filters.orderBy === 'tvl') {
				const tvlA = $llamaChains.find(tvl => tvl.chainId === a.chainId)?.tvl ?? 0
				const tvlB = $llamaChains.find(tvl => tvl.chainId === b.chainId)?.tvl ?? 0
				return $filters.order === 'asc' ? tvlB - tvlA : tvlA - tvlB
			} else {
				return $filters.order === 'asc' ? a.chainId - b.chainId : b.chainId - a.chainId
			}
		})
	$: $resultsNumber = filteredChains.length
</script>

<div class="p-2">
	<span>{$resultsNumber} / {Object.values(chains).length} chain{$resultsNumber > 1 ? 's' : ''} found</span>
</div>
<div class="chain-list">
	{#if $states.loadingTvls}
		<ChainListPreloader />
	{:else}
		{#each filteredChains as chain}
			{#if chain}
				<ChainsListItem {chain} />
			{/if}
		{:else}
			<ChainsListNoResults />
		{/each}
	{/if}
</div>

<style lang="postcss">
	.chain-list {
		@apply flex-1 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2 sm:gap-8 items-start;
	}
</style>
