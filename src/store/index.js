import Vuex from 'vuex'

import app from './app'
import app1 from './app/app1'

Vue.use(Vuex)

const store = () => {
	return new Vuex.Store({
		modules: {
			app,
			app1
		}
	})
}

export default store
