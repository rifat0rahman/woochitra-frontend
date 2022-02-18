<template>
  <div class="top">
    <NavBarVue />
      <PageExVue/>
      <PageDetailVue/>
  </div>
</template>

<script>
import PageDetailVue from './PageDetail.vue'
import PageExVue from './PageEx.vue'
import NavBarVue from './NavBar.vue'
export default {
    components:{
        PageDetailVue,
        PageExVue,
        NavBarVue,
    }
}
</script>

<style scoped>
</style>