import api from '@/api'


export const mutation = {
  SET_LOADING: 'SET_LOADING',
  SET_TASKS: 'SET_TASKS',
  SET_FILTER: 'SET_FILTER',
  SET_CURRENT_TASK: 'CURRENT_TASK',

}

export default {
  namespaced: true,
  state: {
    loading: true,
    currentTask: {},
    tasks: [],
    filter: {
      filter: {},
      page: 0,
      limit: 10
    },
  },

  getters: {
    loading: state => state.loading,
    tasks: state => state.tasks,
    filter: state => state.filter,
    currentTask: state => state.currentTask,

  },

  mutations: {
    [mutation.SET_LOADING]: (state, isLoading) => {
      state.loading = isLoading
    },
    [mutation.SET_TASKS]: (state, data) => {
      state.tasks = data || []
    },
    [mutation.SET_FILTER]: (state, data) => {
      state.filter = data
    },
    [mutation.SET_CURRENT_TASK]: (state, data) => {
      state.currentTask = data || {}
    },
  },

  actions: {
    setLoading: ({ dispatch, commit }, value) => {
      commit(mutation.SET_LOADING, value)
    },

    fetchTasks: ({ dispatch, commit }, filter) => {
      dispatch('setLoading', true)
      api.Events.getTasks(filter)
        .then(({ data }) => {
          commit(mutation.SET_TASKS, data);
          dispatch('setLoading', false);
        })
    },

    getTask: ({ dispatch, commit }, id) => {
      dispatch('setLoading', true);
      api.Events.getTask(id)
        .then(({ data }) => {
          commit(mutation.SET_CURRENT_TASK, data)
          dispatch('setLoading', false)
        })
    },

    setFilter: ({ dispatch, commit }, filter) => {
      commit(mutation.SET_FILTER, filter)
      dispatch('fetchTasks', filter);
    },
  },
}