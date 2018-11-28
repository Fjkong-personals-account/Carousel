import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/test'
import Test2 from '@/test2'
import Home from '@/home'
import Test3 from '@/test3'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component:Home,
      children:[
       {
        path: '/',
        component: Test
      },
      {
        path: '/home/test',
        component: Test
      },
      {
        path:'/home/test2',
        component:Test2
      },
      {
        path:'/home/test3',
        component:Test3
      },
      ]
    },
    
  ]
})
