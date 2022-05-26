
import axios from 'axios'

const
	requireService = require.context('./service', false, /.service.js$/),
	instance = axios.create({
		baseURL: 'api/',
		responseType: 'json',
		headers: {
			'Content-Type': 'application/json',
			'Cache-Control': 'no-cache',
			'Pragma': 'no-cache',
		}
	})

export const intercept = fn => fn(instance.interceptors)

intercept(({ request, response }) => {
	request.use(config => {
		return config
	})

	response.use(config => {
		return config
	}, error => {
		return Promise.reject(error.response)
	})
})

class Api {
	constructor () {
		this.instance = instance

		// Register local services
		requireService.keys().forEach(filename => requireService(filename).default(this))
	}

	install () {
		Vue.prototype.$api = this
	}
}

export default new Api()
