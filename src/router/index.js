import VueRouter from 'vue-router'

import TasksList from '../view/TasksList'
import TaskForm from '../view/TaskForm'
import UsersList from '../view/UsersList'
import NotFound from '../view/NotFound'
import Login from '../view/Login'
import TaskAdEdit from '../view/TaskAdEdit'

Vue.use(VueRouter)

const router = () => {
	const r =
		new VueRouter({
			mode: 'hash',
			routes: [
				{
					path: '/tasks',
					component: TasksList,
					name: 'TasksList',
					props: true,
				},
				{
					path: '/task/:id',
					name: 'TaskForm',
					component: TaskForm,
					props: true,
				},
				{
					path: '/users',
					name: 'UsersList',
					component: UsersList,
					props: true,
				},
				{
					path: '/',
					name: 'Login',
					component: Login,
					props: true,
				},
				{ 
					path: '/adEditTask/:id?', 
					name: 'TaskAdEdit',
					component: TaskAdEdit, 
					props: true,
				},
				{ 
					path: '*', 
					name: 'NotFound',
					component: NotFound, 
					props: true,
				},
			],

		});

	return r
}

export default router