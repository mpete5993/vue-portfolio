import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import StockView from '../views/StockView.vue'
import ShoppingPage from '../views/ShoppingView.vue'
import BattleshipView from '../views/BattleshipView.vue'
import ExpenseView from '../views/ExpenseView.vue'
import WeatherView from '../views/WeatherView.vue'
import InvoiceView from '../views/InvoiceView.vue'
import EcommerceView from '../views/EcommerceView.vue'
import RealEstateView from '../views/RealEstateView.vue'
import RecipeView from '../views/RecipeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/stock',
      name: 'stock',
      component: StockView
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: ShoppingPage
    },
    {
      path: '/invoice',
      name: 'invoice',
      component: InvoiceView
    },
    {
      path: '/battleship',
      name: 'battleship',
      component: BattleshipView
    },
    {
      path: '/recipes',
      name: 'recipes',
      component: RecipeView
    },
    {
      path: '/expense',
      name: 'expense',
      component: ExpenseView
    },
    {
      path: '/weather',
      name: 'weather',
      component: WeatherView
    },
    {
      path: '/real-estate',
      name: 'real-estate',
      component: RealEstateView
    },
    {
      path: '/ecommerce',
      name: 'ecommerce',
      component: EcommerceView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
