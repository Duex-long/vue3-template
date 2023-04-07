import Index from '@/pages/index.vue'
import { RouteRecordRaw } from 'vue-router'
const routes:RouteRecordRaw[] = [
	{
		path: '/',
		component: Index
	},
	{
		path:'/login',
		name:'login',
		component: () => import('@/pages/Login.vue')
	},
	{
		path:'/project',
		name:'project',
		component: () => import('@/pages/project/Index.vue')
	}
]

export default routes
