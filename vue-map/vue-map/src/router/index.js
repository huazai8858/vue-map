import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/hello/world'},
    {
      path: '/hello',
      component: resolve => require(['@/components/Hello'], resolve),
      children: [
        { path: '/hello', redirect: '/hello/world'},
        {
          path: 'world',
          component: resolve => require(['@/components/World'], resolve)
        },
        {
          path: 'ajax',
          component: resolve => require(['@/components/ajax'], resolve)
        }
      ]

    },
    { path: '/table', component: resolve => require(['@/components/table'], resolve) },
    { path: '/shoppingCart', component: resolve => require(['@/components/ShoppingCart'], resolve) },
    { path: '/map', component: resolve => require(['@/components/map'], resolve) },
    { path: '/trendMap', component: resolve => require(['@/components/trendMap'], resolve) }
  ]
})
