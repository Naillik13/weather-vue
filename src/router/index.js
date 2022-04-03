import { createRouter, createWebHistory } from 'vue-router'
import SearchView from '../views/SearchView.vue'
import WeatherView from '../views/WeatherView.vue'


const routes = [
  {
    path: '/',
    name: 'search',
    component: SearchView
  },
  {
    path: '/weather',
    name: 'weather',
    component: WeatherView,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
