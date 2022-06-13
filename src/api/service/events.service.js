export default api => {
	api.Events = {

		// TASKS
		getTasks(data) {
			return api.instance.request({
				method: 'post',
				url: 'tasks',
				data: data
			})
		},

		getTask(id) {	
			return api.instance.request({
				method: 'get',
				url: `tasks/${id}`,
			})
		},

		addTask(data){
			return api.instance.request({
				method: 'put',
				url:'tasks/createOrEdit',
				data: data
			})
		},

		deleteTask(id){
			return api.instance.request({
				method: 'delete',
				url:`tasks/${id}`,
			})
		},
        
		// USERS
		getAllUsers() {	
			return api.instance.request({
				method: 'get',
				url: 'users/all',
			})
		},

		getUsers(data) {
			return api.instance.request({
				method: 'post',
				url: 'users',
				data: data
			})
		},

		loginUser(form) {
      return api.instance.request({
        method: 'post',
        url: 'users/login',
        data: form,
      })
    },
	}
}