<script lang="ts">
	import Lazy from 'svelte-lazy';
	import { getIconUrl } from '@amichain/chainlist';
	import ChainLogoPlaceHolder from "$lib/components/ChainLogoPlaceHolder.svelte";
	import ChainLogoPreloader from "$lib/components/ChainLogoPreloader.svelte";
	export let chainId: number;

	let src;
	let noImg = false
	const loadImg = () => {
		const iconUrl = getIconUrl(chainId)
		if(iconUrl) {
			const img = new Image();
			img.src = iconUrl
			img.onload = () => {
				src = img.src
			}
			img.onerror = () => {
				noImg = true
			}
		}
	}
</script>

{#if !noImg}
	<Lazy
		placeholder={ChainLogoPreloader}
		height="128px"
		width="128px"
		keep={true}
		fade={{ delay: 0, duration: 200 }}
		onload={loadImg}
	>
		{#if src}
			<img
				{src}
				alt="Chain #{chainId} icon"
				height="128px"
				width="128px"
			/>
		{:else}
			<ChainLogoPlaceHolder />
		{/if}
	</Lazy>
{:else}
	<ChainLogoPlaceHolder />
{/if}

<style lang="postcss">
	:global(.svelte-lazy-placeholder svg) {
		height: 128px;
		width: 128px;
	}
	:global(.svelte-lazy-content img) {
		@apply object-contain;
		height: 128px;
		width: 128px;
	}
</style>
