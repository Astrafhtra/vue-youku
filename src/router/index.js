import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index/index'
import tv from '@/pages/juji/tv'
import movie from '@/pages/movie/movie'
import zy from '@/pages/zy/zy'
import user from '@/pages/user/index'
import video from '@/pages/video/video'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      childrens:[
        
      ]
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
      component: () => import('@/pages/vip/vip'),
    },
    {
      path: '/vip-pay',
      name: 'vip-pay',
      component: () => import('@/pages/vip/vip-pay'),
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
      path:'/video',
      name:'video',
      component:video
    },
    {
      path:'/user',
      name:'user',
      component:user
    }
  ]
})
