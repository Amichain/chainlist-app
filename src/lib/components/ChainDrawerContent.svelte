<script lang="ts">
	import { currentChain } from '$lib/stores';
	import ClipboardCopyBtn from "$lib/components/ClipboardCopyBtn.svelte";
	import ExternalIcon from 'virtual:icons/hugeicons/link-square-01'

	let rows: { name: string; value: string, type?: string }[] = []
	$: rows = $currentChain ? [
		{ name: 'Name', value: [$currentChain.name] },
		{ name: 'ID', value: [$currentChain.chainId] },
		{
			name: 'RPC Url' + ($currentChain.rpc?.length > 1 ? 's' : ''),
			value: $currentChain.rpc
		},
		{
			name: 'WebSocket Url' + ($currentChain.ws?.length > 1 ? 's' : ''),
			value: $currentChain.ws
		},
		{ name: 'Explorers', value: $currentChain.explorers, type: 'links' },
		...($currentChain.testnet ? [{ name: 'Faucets', value: $currentChain.faucets }] : [])
	] : []
</script>

<div class="flex flex-col p-4 w-full">
	{#each rows as row}
		{#if Array.isArray(row.value) && row.value.length}
			<div class="flex justify-between gap-4 mb-2">
				<div class="py-1 min-w-[120px]">{row.name}</div>
				<div class="flex-1 flex flex-col max-w-[calc(100%-140px)]">
					{#if row.type === 'links'}
						{#each row.value as value}
							<a
								href={value.url}
								target="_blank"
								class="row-value hover:link"
							>
								<span>{value.name}</span>
								<ExternalIcon />
							</a>
						{/each}
					{:else}
						{#each row.value as value}
							<div class="row-value">
								<span>{value}</span>
								<ClipboardCopyBtn {value} />
							</div>
						{/each}
					{/if}
				</div>
			</div>
		{/if}
	{/each}
</div>

<style lang="postcss">
	.row-value {
		@apply flex items-center justify-end gap-3 max-w-full px-2 py-1 ml-auto;
	}
	.row-value:hover {
		@apply link;
	}
	.row-value span {
		@apply text-ellipsis whitespace-nowrap overflow-hidden;
	}
</style>