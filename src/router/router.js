// 路由配置
import Vue from 'vue'
import Router from 'vue-router'
import Login from '../page/login'
import Chart from '../page/chart'
import Table from '../page/table'
import UI from '../page/UI'
import Login1 from '../components/login1'

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
},
{
  path: '/Login1',
  name: 'Login1',
  component: Login1
}
  ]
})
