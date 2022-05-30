import api from '@/api'

export const mutation = {
	SET_LOADING: 'SET_LOADING',
	SET_EVENTS: 'SET_EVENTS',
	SET_FILTER: 'SET_FILTER',
	SET_ACTIVE_TAB: 'SET_ACTIVE_TAB',
}

export default {
	namespaced: true,
	state: {
		loading: false,
		events: [],
		filters: {},
		activeTab: ''
	},

	getters: {
		loading: state => state.loading,
		events: state => state.loading,
		activeTab: state => state.activeTab,
		filters: state => state.filters,
		getCurrentFilter: (state, getters) => state.filters[getters.activeTab],
	},

	mutations: {
		[mutation.SET_LOADING]: (state, isLoading) => {
			state.loading = isLoading
		},
		[mutation.SET_EVENTS]: (state, data) => {
			state.events = data || []
		},
		[mutation.SET_FILTER]: (state, data) => {
			// state.events = data
			// state.filters[state. activeTab] = data
			//console.log(data)
			Vue.prototype.$set(state.filters, state.activeTab, data)
		},
		[mutation.SET_ACTIVE_TAB]: (state, data) => {
			state.activeTab = data
		},
	},

	actions: {
		setLoading: ({ dispatch, commit }, value) => {
			commit(mutation.SET_LOADING, value)
		},
		initApp: ({ dispatch, commit }, value) => {
			
		},
		fetchEvents: ({ dispatch, commit, getters }, value) => {
			dispatch('setLoading', true)
			api.Events.getEvents()
			.then(({data}) => {
				setTimeout( () => {
					dispatch('setLoading', false)
					commit(mutation.SET_EVENTS, data)
				}, 5000)
			})
		},

		setActiveTab: ({ dispatch, commit }, value) => {
			commit(mutation.SET_ACTIVE_TAB, value)
		},
		setFilters: ({ dispatch, commit }, value) => {
			commit(mutation.SET_FILTER, value)
		},
	}
}
