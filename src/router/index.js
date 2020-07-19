import Vue from 'vue'
import VueRouter from 'vue-router'
import Forecasting from '../views/Forecasting'
import Dashboard from '../views/Dashboard'
import Home from '../views/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    children: [
      {
        path: 'home',
        name: 'home',
        component: Home
      },
      {
        path: 'forecasting',
        name: 'forecasting',
        component: Forecasting
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
