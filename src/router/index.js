import Vue from 'vue'
import VueRouter from 'vue-router'
// import DetailContainer from '../components/mine/DetailContainer.vue'
import Deshboard from '../components/mine/deshboard.vue'
import verify_account from '../components/auth/verify_account.vue'

import settings from '../components/DeshboardCont/settings.vue'
import login from '../components/auth/login.vue'
import register from '../components/auth/register.vue'
import Pricing from '../components/pricing/pricingPlan.vue'
import seo from '../components/seo/seo.vue'
import uses from '../components/pricing/uses.vue'

import customPricing from '../components/pricing/custom-pricing.vue'
import contact from '../components/pricing/contact-us.vue'

import cancel from '../components/pricing/cancel.vue'

import container from '../components/mine/container.vue'
import containerres from '../components/mine/container-res.vue'


import tos from '../components/Policy/tos.vue'

import privacypolicy from '../components/Policy/pp.vue'

import forget_email from '../components/auth/forget_email.vue'
import forget_verify from '../components/auth/forget_verify.vue'
import forget_password from '../components/auth/forget_password.vue'



Vue.use(VueRouter)

const routes = [
    {
      path: "/",
      name: "Home",
      component: login,
    },
    {
        path: "/dashboard",
        name: "dashboard",
        component: Deshboard,
      },
      {
        path: "/setting",
        name: "settings",
        component: settings,
      },
      {
        path: "/login",
        name: "login",
        component: login,
      },
      {
        path: "/register",
        name: "register",
        component: register,
      },
      {
        path: "/pricing-plan",
        name: "pricing",
        component: Pricing,
      },
      {
        path: "/metadata",
        name: "seo",
        component:seo,
      },
      {
        path: "/total-uses",
        name: "uses",
        component:uses,
      },
      {
        path: "/cancel",
        name: "cancel",
        component:cancel,
      },
      {
        path: "/contact-us",
        name: "contact",
        component:contact,
      },
      {
        path: "/custom-plan",
        name: "custompricing",
        component:customPricing,
      },
      {
        path:'/create-token',
        component:container,
      },
      {
        path:'/verify_account',
        component:verify_account,
      },
      {
        path:'/terms-of-service',
        component:tos,
      },
      {
        path:'/privacy-policy',
        component:privacypolicy,
      },
      {
        path:'/forget-email',
        component:forget_email,
      },
      {
        path:'/forget-verify',
        component:forget_verify,
      },
      {
        path:'/forget-password',
        component:forget_password,
      },
      {
        path:'/tokens',
        component:containerres,
      },
  
  ];
  
const router = new VueRouter({
    routes,
    mode: 'history',
})

export default router;