import Index from '@/pages/index.vue'
import { RouteRecordRaw } from 'vue-router'
import { defineAsyncComponent } from 'vue'
const routes:RouteRecordRaw[] = [
	{
		path: '/',
		component: Index
	},
	{
		path:'/login',
		component: () => import('@/pages/Login.vue')
	}
]

export default routes
