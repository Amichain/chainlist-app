<script lang="ts">
	import { theme } from '$lib/stores';
	import SunIcon from 'virtual:icons/hugeicons/sun-03';
	import MoonIcon from 'virtual:icons/hugeicons/moon-02';

	let className = '';
	export { className as class };
	export let iconClass = '';

	$: if (typeof localStorage !== 'undefined') {
		$theme = localStorage.getItem('theme') as string;
	}

	const toggle = () => {
		$theme = $theme === 'dark' ? 'light' : 'dark';
		document.body.setAttribute('data-theme', $theme);
		localStorage.setItem('theme', $theme);
	};
</script>

<button
	class="btn btn-circle btn-ghost swap swap-rotate {$theme === 'dark'
		? 'swap-active'
		: ''} {className}"
	on:click={toggle}
>
	<SunIcon class="swap-on text-2xl {iconClass}" />
	<MoonIcon class="swap-off text-2xl {iconClass}" />
</button>
