<script lang="ts">
	import ExternalIcon from 'virtual:icons/hugeicons/link-square-01'
	import WarningIcon from 'virtual:icons/hugeicons/alert-02'
	import CloseIcon from 'virtual:icons/hugeicons/cancel-01'

	let isClosed = false
</script>

{#if typeof window !== 'undefined' && !window.ethereum && !isClosed}
	<div class="wallet-not-detected-notice">
		<WarningIcon class="text-xl" />
		<span>No wallet detected!</span>
		<a class="btn" href="https://metamask.io/" target="_blank">
			<span>Install Metamask</span>
			<ExternalIcon />
		</a>
		<a class="btn" href="https://core.app/" target="_blank">
			<span>Install Core wallet</span>
			<ExternalIcon />
		</a>
		<button class="absolute right-4 btn btn-circle" on:click={() => isClosed = true}>
			<CloseIcon />
		</button>
	</div>
{/if}

<style lang="postcss">
	.wallet-not-detected-notice {
		@apply sticky bottom-0 z-50
		flex items-center justify-center gap-2
		w-full text-white font-medium p-2 bg-error;
	}
	.btn {
		@apply btn-xs btn-neutral text-white;
	}
</style>