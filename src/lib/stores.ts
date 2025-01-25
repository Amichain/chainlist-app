import type {Chain} from "@amichain/chainlist";
import { chains as allChains } from '@amichain/chainlist';
import { writable } from 'svelte/store';

export const states = writable<{
	isMobileSearchOpen: boolean;
	loadingTvls: boolean;
	isFiltersOpen: boolean;
}>({
	loadingTvls: true,
	isMobileSearchOpen: false,
	isFiltersOpen: false
})
export const currentChain = writable<Chain | null>(null)
export const resultsNumber = writable(Object.values(allChains).length)
export const filters = writable<{
	query: string;
	testnet: boolean;
	noExplorer: boolean;
	noWebsite: boolean;
	orderBy: string;
	order: string;
}>({
	query: '',
	testnet: false,
	noExplorer: false,
	noWebsite: false,
	orderBy: 'tvl',
	order: 'asc',
})
export const llamaChains = writable<{
	gecko_id: string;
	tvl: number;
	tokenSymbol: string;
	cmcId: string;
	name: string;
	chainId: number;
}[]>([])

const createThemeStore = () => {
	const { subscribe, update, set } = writable('dark')
	return {
		subscribe,
		update: (theme: 'dark' | 'light') => {
			update(() => (theme ?? 'dark'))
			if(typeof window !== 'undefined') {
				localStorage.setItem('theme', theme ?? 'dark')
			}
		},
		set: (theme: 'dark' | 'light') => {
			set(theme ?? 'dark')
			if(typeof window !== 'undefined') {
				localStorage.setItem('theme', theme ?? 'dark')
			}
		},
	}
}
export const theme = createThemeStore()