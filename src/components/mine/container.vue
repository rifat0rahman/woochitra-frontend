<template>
  <div class="all-container">
    <div class="sidebar">
      <sidebar/>
    </div>
    <div class="cont">
      <compressVue/>
      <formatVue />
    </div>
  </div>
</template>

<script>
import compressVue from './compress.vue';
import Sidebar from '../DeshboardCont/sidebar.vue';
import formatVue from './format.vue';

export default {
  components:{
    compressVue,
    formatVue,
    Sidebar,
  }
};
</script>

<style scoped>
@media screen and (min-width: 1000px) {
  .all-container {
    width: 1000px;
    margin: auto;
  }
}
@media screen and (max-width:460px) {
  .cont{
    flex: 5 !important;
  }
  .sidebar{
    flex: .5 !important;
  }
}


.cont{
  flex: 3;
}
.sidebar{
  flex: 1;
}
.all-container {
  margin-top:50px;
  color: rgb(0, 0, 0);
  position: relative;
  display: flex;
  flex-wrap: wrap;
}
.header-text{
    padding:50px;
}
.header-text h1{
    margin-top: 10px;
    font-size:58px;
}
.header-text h3{
    margin-top:40px;
    line-height: 38px;
}
</style>