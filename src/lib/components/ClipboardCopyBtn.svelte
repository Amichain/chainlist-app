<script lang="ts">
	import ClipboardIcon from 'virtual:icons/hugeicons/copy-02';

	let className = '';
	export { className as class };
	export let value: string;

	let isTooltipOpen = false;
	const copy = () => {
		navigator.clipboard.writeText(value);
		isTooltipOpen = true;
		setTimeout(() => {
			isTooltipOpen = false;
		}, 1000);
	};
</script>

<button
	class="{isTooltipOpen ? 'tooltip tooltip-open' : ''} {className}"
	data-tip="Copied !"
	on:click|preventDefault={copy}
>
	<ClipboardIcon />
</button>
