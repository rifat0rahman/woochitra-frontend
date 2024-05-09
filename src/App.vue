<template>
  <div id="app">
    <div class="containers">
      <div class="dash">
        <router-view />
      </div>
    </div>
    <!-- <footerVue class="footer"/> -->
  </div>
</template>

<script>
import axios from 'axios'
// import footerVue from './components/mine/footer.vue'
import { base } from './main'

export default {
  name: 'App',
  components: {
    // compressVue,
    // formatVue,
    // resizeVue,
  //  footerVue,
    
  },
  mounted(){
    const context = {
      "token": this.$cookies.get("token")
    }
      axios.post(`${base}check_validation`,context)
  }
}
</script>

<style scoped>

</style>
