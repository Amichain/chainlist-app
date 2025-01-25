<script lang="ts">
	import ChevronUpIcon from 'virtual:icons/hugeicons/arrow-up-01'

	let isVisible = false
	const onScroll = () => {
		isVisible = document.body.scrollTop > 20 || document.documentElement.scrollTop > 20;
	}
	const backToTop = () => {
		window.scrollTo({top: 0, behavior: 'smooth'})
	}
</script>

<svelte:window on:scroll={onScroll} />

{#if isVisible}
	<button
		class="fixed bottom-4 right-4 btn btn-circle btn-outline bg-base-300"
        on:click={backToTop}
	>
		<ChevronUpIcon class="text-xl" />
	</button>
{/if}
