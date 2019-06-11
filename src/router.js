import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import BugFocus from './views/BugFocus.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/BugFocus/:id',
      name: 'BugFocus',
      props: true,
      component: BugFocus
    }
  ]
})
