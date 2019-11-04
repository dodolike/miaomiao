import Vue from 'vue'
import Router from 'vue-router'
import cinema from './cinema'
import mine from './mine'
import movie from './movie'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
      cinema,
      mine,
      movie,
{path:"/*",
redirect:"/cinema/nowplaying"}
  ]
})
