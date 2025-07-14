import {filters} from "$lib/stores";

export default {
	resetFilters: () => {
		filters.set({
			query: '',
			testnet: false,
			noExplorer: false,
			noWebsite: false,
			orderBy: 'name',
			order: 'asc'
		})
	}
}