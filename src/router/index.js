import Vue from 'vue'
import Router from 'vue-router'
import Order from '@/components/Order'
import Home from '@/components/Home'
import Contact from '@/components/Contact'
import Questions from '@/components/Questions'
import Hello from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/title24-website',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/hello/:name',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/questions',
      name: 'Questions',
      component: Questions
    }
  ]
})