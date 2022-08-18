import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import VueSilentbox from 'vue-silentbox'
// import {VueMasonryPlugin} from 'vue-masonry'
import VueMeta from 'vue-meta'

// Vue.use(VueMasonryPlugin)
Vue.use(VueSilentbox)
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(VueAwesomeSwiper)
Vue.use(VueMeta, {
    refreshOnceOnNavigation: true
})



import 'bootstrap/dist/css/bootstrap.css'
import '../src/assets/css/fontawesome-all.min.css'
import 'swiper/dist/css/swiper.css'
import 'animate.css/animate.min.css'
import '../src/assets/scss/style.scss'
import 'slick-carousel/slick/slick.css'


export const base = 'https://dashboardz.pythonanywhere.com/'
// export const base = 'http://127.0.0.1:8000/'


Vue.config.productionTip = false

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init()

// for cookie 
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
Vue.$cookies.config('30d')
// set default config

new Vue({
  render: h => h(App),
  router
}).$mount('#app')



