<template>
  <div class="top">
    <NavBarVue />
      <HomeSoftwareVue/>
  </div>
</template>

<script>
// import PageDetailVue from './PageDetail.vue'
// import PageExVue from './PageEx.vue'
import NavBarVue from './NavBar.vue'
import HomeSoftwareVue from '../pages/HomeSoftware.vue'
export default {
    components:{
        // PageDetailVue,
        // PageExVue,
        NavBarVue,
        HomeSoftwareVue
    }
}
</script>

<style scoped>
</style>