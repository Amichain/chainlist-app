import 'unplugin-icons/types/svelte'
import type { MetaMaskInpageProvider } from "@metamask/providers";

declare global {
	namespace App {

	}
	interface Window {
		ethereum?: MetaMaskInpageProvider
	}
}

export {};
