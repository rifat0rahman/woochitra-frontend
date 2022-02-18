import Vue from 'vue'
import App from './App.vue'
import router from './router'

export const base = 'https://app.picengine.io/'
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



