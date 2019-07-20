// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index.js'
import store from './store/store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import VueBetterScroll from 'vue2-better-scroll'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper,VueBetterScroll)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

export default {
  components: {
    VueBetterScroll
  }
}
