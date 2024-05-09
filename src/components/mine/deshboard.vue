<template>
  <div class="deshpage">
    <div class="containers">
      <div class="sidebar">
        <sidebarVue />
      </div>
      <div class="dash">
        <div class="spinner" v-show="spinner">
          <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
        <div v-show="!spinner">
          <profileVue />
          <deshitemsVue />
          <!-- <containerVue /> -->
          <!-- <div class="upgrade">
            <a href="/pricing-plan">Upgrade Plan</a>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import containerVue from "./container.vue";
import deshitemsVue from "../DeshboardCont/deshitems.vue";
import profileVue from "../DeshboardCont/profile.vue";
import sidebarVue from "../DeshboardCont/sidebar.vue";

export default {
  components: {
    deshitemsVue,
    sidebarVue,
    profileVue,
  },
  data() {
    return {
      spinner: true,
    };
  },
  mounted() {
    const token = this.$cookies.get("token");
    if (!token) {
      location.replace("/login");
    }
    setTimeout(() => {
      this.spinner = false;
    },2000);
  },
};
</script>

<style scoped>
@media screen and (min-width: 1000px) {
  .deshpage {
    width: 1000px !important;
    margin: auto;
  }
}
@media screen and (max-width: 460px) {
  .dash {
    flex: 5 !important;
  }
  .sidebar {
    flex: 0.4 !important;
  }
}

.spinner-border{
  width: 100px !important;
  height:100px !important;
  margin-top: 100px;
}
.upgrade a {
  border: 2px solid #6063fa;
  padding: 15px;
  border-radius: 25px;
  text-decoration: none;
  color: black;
  font-weight: 700;
  font-size: 22px;
  box-shadow: 2px 2px 1px 2px #5F61E7;
}
.upgrade {
  text-align: center;
  margin-top: 70px;
  margin-bottom: 100px;
}
.dash {
  flex: 3;
}
.sidebar {
  flex: 1;
}
.containers {
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
}
.usericon img {
  width: 40px !important;
  margin-right: 20px;
}

.navbar {
  height: 100px;
}
.bg-light {
  background-color: rgb(255, 255, 255) !important;
}
.logo img {
  width: 120px;
  margin-left: 100px;
}
.navbar-nav .nav-link {
  align-items: center;
  cursor: pointer;
  display: flex;
  margin-right: 25px;
  font-size: 19px;
  font-weight: 600 !important;
  letter-spacing: 0;
  line-height: 17px;
  color: rgb(34, 34, 34);
}
.navbar-nav .nav-link:hover {
  color: #ff9a04 !important;
  transition: 0.3s ease-in;
}

.deshpage {
  color: black !important;
}
</style>
