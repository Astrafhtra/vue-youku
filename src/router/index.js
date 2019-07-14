import Vue from 'vue'
import Router from 'vue-router'
import huiyuan from '@/pages/huiyuan/huiyuan'
import index from '@/pages/index/index'
import tv from '@/pages/juji/tv'
import movie from '@/pages/movie/movie'
import zy from '@/pages/zy/zy'
import user from '@/pages/user/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
    },
    {
      path: '/index',
      name: 'index',
      component: index,
    },
    {
      path: '/zy',
      name: 'zy',
      component: zy,
    },
    {
      path: '/vip',
      name: 'vip',
      component: huiyuan,
    },
    {
      path: '/tv',
      name: 'tv',
      component: tv,
    },
    {
      path:'/movie',
      name:'movie',
      component:movie
    },
    {
      path:'/user',
      name:'user',
      component:user
    }
  ]
})
