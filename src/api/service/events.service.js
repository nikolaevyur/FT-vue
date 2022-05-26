export default api => {
	api.Events = {
		getEvents() {
            return api.instance.request({
                method: 'get',
                url: `events`,
            })
        },
	}
}