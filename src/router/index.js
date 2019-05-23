import Vue from 'vue'
import Router from 'vue-router'
import GoodsList from '@/views/GoodsList'
import CheckOrder from '@/components/CheckOrder';


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'GoodsList',
    component: GoodsList
  },
  {
    path: '/CheckOrder',
    name: 'CheckOrder',
    component: CheckOrder

  }
  ]
})