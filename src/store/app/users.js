import api from '@/api'


export const mutation = {
  SET_LOADING: 'SET_LOADING',
  SET_USERS: 'SET_USERS',
  SET_USERS_FILTER: 'SET_USERS_FILTER',
  SET_USER_LIST: 'SET_USER_LIST',
  SET_LOGIN_USER: 'SET_LOGIN_USER',
}

export default {
  namespaced: true,
  state: {
    loading: false,
    usersList: {},
    users: [],
    usersFilter: {
      filter: {},
      page: 0,
      limit: 10
    },
    loginUser: {}
  },

  getters: {
    users: state => state.users,
    usersList: state => state.usersList,
    loading: state => state.loading,
    usersFilter: state => state.usersFilter,
    loginUser: state => state.loginUser,
  },

  mutations: {
    [mutation.SET_LOADING]: (state, isLoading) => {
      state.loading = isLoading
    },
    [mutation.SET_USERS]: (state, data) => {
      state.users = data || []
    },
    [mutation.SET_USERS_FILTER]: (state, data) => {
      state.usersFilter = data
    },
    [mutation.SET_USER_LIST]: (state, data) => {
      state.usersList = data
    },
    [mutation.SET_LOGIN_USER]: (state, data) => {
      state.loginUser = data;
    },
  },

  actions: {
    setLoading: ({ dispatch, commit }, value) => {
      commit(mutation.SET_LOADING, value)
    },

    fetchUsers: ({ dispatch, commit }) => {
      dispatch('setLoading', true);
      api.Events.getAllUsers()
        .then(({ data }) => {
          let usersData = {};
          data.map((user) => {
            usersData[user.id] = user.username;
          })
          commit(mutation.SET_USER_LIST, usersData)
          dispatch('setLoading', false)
        })
    },

    fetchUsersFilter: ({ dispatch, commit }, filter) => {
      dispatch('setLoading', true);
      api.Events.getUsers(filter)
        .then(({ data }) => {
          commit(mutation.SET_USERS, data)
          dispatch('setLoading', false)
        })
    },
    
    setFilterUsers: ({ dispatch, commit }, filter) => {
      commit(mutation.SET_USERS_FILTER, filter)
      dispatch('fetchUsersFilter', filter);
    },

    login: ({ dispatch, commit }, form) => {
      api.Events.loginUser(form).then(({data}) => {
        localStorage.setItem('loginUser', data.id);
      })
    },
  },
}