
import Vuex from 'vuex'

import tasks from './app/tasks'
import users from './app/users'


Vue.use(Vuex)

const store = () => {
	return new Vuex.Store({
		modules: {
			tasks,
			users
		}
	})
}

export default store
