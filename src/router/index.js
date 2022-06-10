import VueRouter from 'vue-router'

import TasksList from '../view/TasksList'

Vue.use(VueRouter)

const router = () => {
	const r = 
	 new VueRouter({
		// Important to prevent hash changes!
		// Otherwise we'll get instances conflict
		mode: 'hash',
		routes: [
			{ 
				path: '/tasks', 
				component: TasksList,
				name: 'TasksList', 
				props: true,
				// children: [
				// 	{

				// 	}
				// ]
				
			},

			{
				path: '/', redirect: { name: 'TasksList' }
			},
			{
				path: '*', redirect: { name: 'TasksList' }
			}
		],
		
	});

	// r.beforeEach((to, from, next) => {
	// 	console.log(from)
	// 	console.log(to)
	// 	//next()
	// })

	return r
}

export default router