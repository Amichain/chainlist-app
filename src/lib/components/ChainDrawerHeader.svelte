<script lang="ts">
	import numeral from "numeral";
	import {currentChain, llamaChains} from '$lib/stores';
	import ChainLogo from "$lib/components/ChainLogo.svelte";
	import CoinMarketCapLogo from "$lib/logos/CoinMarketCapLogo.svelte";
	import CoinGeckoLogo from "$lib/logos/CoinGeckoLogo.svelte";
	import DefiLlamaLogo from "$lib/logos/DefiLlamaLogo.svelte";
	import ExternalIcon from 'virtual:icons/hugeicons/link-square-01'
	import CloseIcon from 'virtual:icons/hugeicons/cancel-01'
	import AddWalletIcon from 'virtual:icons/hugeicons/wallet-add-02'

	$: currentLlamaChain = $llamaChains.find(tvl => tvl.chainId === $currentChain.chainId)

	const connect = () => {
		if(typeof window !== "undefined") {
			if(!window.ethereum) {
				alert('No wallet detected!')
			} else {
				try {
					window.ethereum.request({
						method: 'wallet_addEthereumChain',
						params: [{
							chainId: '0x' + Number($currentChain.chainId).toString(16),
							rpcUrls: $currentChain.rpc,
							chainName: $currentChain.name,
							nativeCurrency: $currentChain.nativeCurrency,
							blockExplorerUrls: $currentChain.explorer
						}]
					});
				} catch (e) {
					console.error(e)
				}
			}
		}
	}
</script>

{#if $currentChain}
	<div class="sticky top-0 flex flex-wrap items-center gap-4 p-4 w-full bg-base-300">
		<div class="icon">
			<ChainLogo chainId={$currentChain.chainId} />
		</div>
		<div class="flex flex-col gap-2">
			{#if $currentChain.testnet}
				<span class="badge badge-neutral">testnet</span>
			{/if}
			<span class="text-xl font-bold ml-0.5">{$currentChain.name} - {$currentChain.nativeCurrency.symbol}</span>
			<div class="flex items-center gap-3">
				{#if $currentChain.website}
					<a href={$currentChain.website} target="_blank" class="external-link">
						<span>Website</span>
						<ExternalIcon class="text-lg" />
					</a>
				{/if}
				{#if $currentChain.explorers?.[0]?.url}
					<a href={$currentChain.explorers?.[0]?.url} target="_blank" class="external-link">
						<span>Explorer</span>
						<ExternalIcon class="text-lg" />
					</a>
				{/if}
				{#if currentLlamaChain && currentLlamaChain.gecko_id}
					<a href="https://coinmarketcap.com/currencies/{currentLlamaChain.gecko_id}" target="_blank" class="external-link-secondary">
						<CoinMarketCapLogo />
					</a>
					<a href="https://www.coingecko.com/en/coins/{currentLlamaChain.gecko_id}" target="_blank" class="external-link-secondary">
						<CoinGeckoLogo />
					</a>
				{/if}
			</div>
			{#if currentLlamaChain && currentLlamaChain.tvl > 0}
				<div class="flex items-center gap-2">
					<span class="font-medium">TVL</span>
					<span>{numeral(currentLlamaChain.tvl).format('0.00 a').toUpperCase()}$</span>
					<a href="https://defillama.com/chain/{currentLlamaChain.name}" target="_blank">
						<DefiLlamaLogo height="20" width="20" />
					</a>
				</div>
			{/if}
		</div>
		<button class="sm:hidden absolute top-4 right-4 btn btn-circle" on:click={() => $currentChain = null}>
			<CloseIcon class="text-2xl" />
		</button>
		<button class="btn btn-primary gap-4 w-full px-8 text-lg rounded-full ml-auto" on:click={connect}>
			<AddWalletIcon class="text-xl" />
			<span>Add to Wallet</span>
		</button>
	</div>
{/if}

<style lang="postcss">
	.external-link {
		@apply btn btn-xs text-sm border rounded-full;
		@apply border-base-content/70 !important;
	}
	.external-link-secondary {
		@apply flex items-center justify-center rounded-full;
		height: 1.5rem;
		width: 1.5rem;
	}
	:global(.external-link-secondary svg) {
		@apply h-full w-full;
	}
</style>