import Vue from 'vue'
import Router from 'vue-router'
import Login from '../page/login'
import Chart from '../page/chart'
import Table from '../page/table'
import UI from '../page/UI'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
},
    {
      path: '/Login',
      name: 'Login',
      component: Login
},
    {
      path: '/Chart',
      name: 'Chart',
      component: Chart
},
    {
      path: '/Table',
      name: 'Table',
      component: Table
},
{
  path: '/UI',
  name: 'UI',
  component: UI
}
  ]
})
