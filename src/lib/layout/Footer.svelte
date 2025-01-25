<script lang="ts">
	import Logo from "$lib/layout/Logo.svelte";
	import AmiChainLogo from "$lib/logos/AmiChainLogo.svelte";
	import AmiChainMonoLogo from "$lib/logos/AmiChainMonoLogo.svelte";
	import GithubIcon from 'virtual:icons/hugeicons/github'
	import AddIcon from 'virtual:icons/hugeicons/plus-sign'
	import DocIcon from 'virtual:icons/hugeicons/doc-02'
	import ApiIcon from 'virtual:icons/hugeicons/api'
	import IconIcon from 'virtual:icons/hugeicons/ico'
	import XIcon from 'virtual:icons/hugeicons/new-twitter-rectangle'
	import LinkedInIcon from 'virtual:icons/hugeicons/linkedin-01'
	import DiscordIcon from 'virtual:icons/hugeicons/discord'
	import TelegramIcon from 'virtual:icons/hugeicons/telegram'
</script>

<div class="main-footer">
	<div class="col gap-4">
		<div class="flex flex-col">
			<a href="/" class="flex items-center gap-2 text-2xl font-bold mr-auto">
				<Logo />
				<span>Chainlist</span>
			</a>
			<a
				href="https://amichain.org"
				target="_blank"
				class="inline-flex items-center gap-1 text-lg font-medium ml-16"
			>
				<span>By</span>
				<AmiChainLogo height="22" width="22" />
				<span>AmiChain</span>
			</a>
		</div>
		<div class="flex flex-col">
			<a href="https://github.com/amichain/chainlist" class="btn" target="_blank">
				<AddIcon />
				<span>Add your chain</span>
			</a>
			<a href="https://github.com/amichain/chainlist" class="btn" target="_blank">
				<AddIcon />
				<span>Add your RPC</span>
			</a>
		</div>
	</div>
	<div class="col">
		<div class="title">Links</div>
		<ul>
			<li>
				<a href="https://amichain.org" target="_blank">
					<AmiChainMonoLogo height="22" width="22" class="ml-0.5 mr-[1px]" />
					<span>AmiChain EcoSystem</span>
				</a>
			</li>
			<li>
				<a href="https://docs.amichain.org/chainlist" target="_blank">
					<DocIcon />
					<span>Documentation</span>
				</a>
			</li>
		</ul>
	</div>
	<div class="col">
		<div class="title">Developers</div>
		<ul>
			<li>
				<a href="https://github.com/amichain/chainlist-app" target="_blank">
					<GithubIcon />
					<span>Source code</span>
				</a>
			</li>
			<li>
				<a href="https://github.com/amichain/chainlist" target="_blank">
					<GithubIcon />
					<span>SDK</span>
				</a>
			</li>
			<li>
				<a href="https://docs.amichain.org/chainlist/api" target="_blank">
					<ApiIcon />
					<span>API</span>
				</a>
			</li>
			<li>
				<a href="https://github.com/amichain/chain-icons" target="_blank">
					<IconIcon />
					<span>Icons</span>
				</a>
			</li>
		</ul>
	</div>
	<div class="col">
		<div class="title">Social links</div>
		<ul>
			<li>
				<a href="https://x.com/amiavax" target="_blank">
					<XIcon />
					<span>Twitter / X</span>
				</a>
			</li>
			<li>
				<a href="https://discord.com/invite/zxkTcFEE4U" target="_blank">
					<DiscordIcon />
					<span>Discord</span>
				</a>
			</li>
			<li>
				<a href="https://t.me/amiavax" target="_blank">
					<TelegramIcon />
					<span>Telegram</span>
				</a>
			</li>
			<li>
				<a href="https://www.linkedin.com/company/amiavax" target="_blank">
					<LinkedInIcon />
					<span>LinkedIn</span>
				</a>
			</li>
		</ul>
	</div>
</div>

<style lang="postcss">
	.main-footer {
		@apply grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8
		border-t border-base-content/10 bg-base-200;
		padding-left: calc((100% - 1520px) / 2);
		padding-right: calc((100% - 1520px) / 2);
	}
	.main-footer .col {
		@apply flex flex-col py-4 lg:py-8 px-16 lg:px-4;
	}
	.main-footer .col .title {
		@apply text-xl font-medium;
	}
	.main-footer .col ul {
		@apply flex flex-col gap-1 py-2 mr-auto;
	}
	.main-footer .col li {
		@apply text-base font-medium;
	}
	.main-footer .col a {
		@apply flex items-center gap-2;
	}
	.main-footer .col a:not(.btn):hover {
		@apply link;
	}
	.main-footer .col a.btn {
		@apply btn-sm btn-outline rounded-full mr-auto mb-2;
	}
	:global(.main-footer .col a svg) {
		@apply text-xl;
	}
</style>