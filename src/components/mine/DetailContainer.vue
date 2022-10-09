<template>
  <div class="top">
    <NavBarVue />
      <Home/>
  </div>
</template>

<script>
// import PageDetailVue from './PageDetail.vue'
// import PageExVue from './PageEx.vue'
import NavBarVue from './NavBar.vue'
import Home from '../AAhome.vue'
// import HomeSoftwareVue from '../../pages/HomeSoftware.vue'
export default {
    components:{
        // PageDetailVue,
        // PageExVue,
        NavBarVue,
        Home
        // HomeSoftwareVue
    }
}
</script>