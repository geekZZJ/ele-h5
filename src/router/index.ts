import HomeView from '@/views/home/HomeView'
import MyView from '@/views/my/MyView'
import OrderView from '@/views/order/OrderView'
import TabsView from '@/views/tabs/TabsView'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/home' },
    {
      path: '/tabs',
      name: 'tabs',
      component: TabsView,
      children: [
        {
          path: '/home',
          name: 'home',
          component: HomeView
        },
        {
          path: '/order',
          name: 'order',
          component: OrderView
        },
        {
          path: '/my',
          name: 'my',
          component: MyView
        }
      ]
    }
  ]
})

export default router
