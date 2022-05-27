
import VueRouter from 'vue-router'

import ListView from '../view/ListView'
import SubListView from '../view/SubListView'

Vue.use(VueRouter)

const router = () => {
	const r = 
	 new VueRouter({
		// Important to prevent hash changes!
		// Otherwise we'll get instances conflict
		mode: 'hash',
		routes: [
			{ 
				// path: '/user/:id', 
				path: '/user/:color', 
				name: 'ListView1',
				component: ListView, 
				props: true,
				children: [
					{
						path: 'subuser',
						name: 'SubListView',
						component: SubListView,
						props: true,
						// beforEnter: (to, from, next) => {
						// 	console.log(from)
						// 	console.log(to)
						// 	//next()
						// }
					},
				]
			},

			// {
			// 	path: '/', redirect: { name: 'ListView1' }
			// },
			// {
			// 	path: '*', redirect: { name: 'ListView1' }
			// }
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