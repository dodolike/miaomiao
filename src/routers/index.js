import Vue from 'vue'
import Router from 'vue-router'
import cinema from './cinema'
import mine from './mine'
import local from './local'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
      cinema,
      mine,
      local,
      {
        path:'/*',
        redirect:()=> cinema
      }
  ]
})
