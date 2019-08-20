import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home' // home页面
import Login from './views/login' // 引入login页面

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      conponent: Login
    },
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})
