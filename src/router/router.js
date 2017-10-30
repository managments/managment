// 路由配置
import Vue from 'vue'
import Router from 'vue-router'
import Login from '../page/mainPage/login'
import Chart from '../page/mainPage/chart'
import Table from '../page/mainPage/table'
import UI from '../page/mainPage/UI'
import Login1 from '../components/login1'
import mainLogin from '../page/mainLogin'
import mainPage from '../page/mainPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainLogin',
      component: mainLogin
},
// 登陆界面
{ path:'/mainLogin',component:mainLogin},
// 主界面
{ path:'/mainPage',component:mainPage,children:[
  {
    path: '/',
    name: 'Login',
    component: Login
}, {
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
},
]},
  ]
})
