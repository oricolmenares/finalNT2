import Vue from 'vue'
import VueRouter from 'vue-router'
import ConversorVue from '../components/ConversorVue.vue'
import TablaRespuestas from '../components/TablaRespuestas.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ConversorVue',
    component: ConversorVue
  },
  {
    path: '/tabla',
    name: 'TablaRespuestas',
    component: TablaRespuestas
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
