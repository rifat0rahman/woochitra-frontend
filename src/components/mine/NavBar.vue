<template>
  <div class="NavPage">
    <nav class="navbar fixed-top navbar-expand-md navbar-light bg-light">
      <div class="container-fluid logo">
        <a href="/"
          ><img src="../../images/logo-png.png" alt="logo" class="navbar-brand"
        /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
        >
          <!-- of canvas -->
          <div
            class="offcanvas offcanvas-start"
            tabindex="-1"
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
          >
            <div class="offcanvas-header">
              <button
                type="button"
                class="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
                <li class="nav-item mobile-nav">
                  <router-link class="nav-link" aria-current="page" to="/"
                    ></router-link
                  >
                </li>
                <li class="nav-item mobile-nav">
                  <router-link
                    class="nav-link"
                    aria-current="page"
                    to="/pricing-plan"
                    >Pricing</router-link
                  >
                </li>
                <!-- <li class="nav-item mobile-nav">
                  <a
                    class="nav-link"
                    aria-current="page"
                    target="_blank"
                    href="https://blog.picengine.io/"
                    >Blog</a
                  >
                </li> -->
                <li class="nav-item mobile-nav">
                  <router-link
                    class="nav-link"
                    aria-current="page"
                    to="/contact-us"
                    >Contact</router-link
                  >
                </li>
                <li class="nav-item" v-show="!access">
                  <a class="nav-link" aria-current="page" href="/login"
                    >Login</a
                  >
                </li>
                <li class="nav-item" v-show="access">
                  <a class="nav-link" aria-current="page" href="/dashboard"
                    >Dashboard</a
                  >
                </li>
              </ul>
            </div>
          </div>

          <!-- fo canvs -->
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
            <li class="nav-item">
                  <router-link class="nav-link" aria-current="page" to="/"
                    >
                    <!-- home -->
                    </router-link
                  >
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link"
                aria-current="page"
                to="/pricing-plan"
                >
                <!-- pricing -->
                </router-link
              >
            </li>
            <!-- <li class="nav-item">
              <a
                class="nav-link"
                aria-current="page"
                target="_blank"
                href="https://blog.picengine.io/"
                >Blog</a
              >
            </li> -->
            <li class="nav-item">
              <router-link class="nav-link" aria-current="page" to="/contact-us"
                >
                <!-- Contact -->
                </router-link
              >
            </li>
            <li class="nav-item" v-show="!access">
              <a class="nav-link" aria-current="page" href="/login">
              <!-- Login -->
              </a>
            </li>
            <li class="nav-item" v-show="access">
              <a class="nav-link" aria-current="page" href="/dashboard"
                >
                <!-- Dashboard -->
                </a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      access: false,
      hidden: true,
    };
  },
  mounted() {
    const token = this.$cookies.get("token");
    if (this.$route.name == "pricing") {
      this.hidden = false;
    }
    if (token) {
      this.access = true;
    }
  },
};
</script>

<style scoped>
 @media screen and (min-width: 1600px) {
  .container-fluid {
    width: 1600px !important;
  }
} 
@media screen and (max-width: 460px) {
  .logo img {
    margin-left: 20px !important;
    width: 90px !important;
  }
}

.mobile-nav {
  margin-bottom: 20px;
}
.navbar {
  height: 100px;
}
.bg-light {
  background-color: #ffffff !important;
}
.logo img {
  width: 120px;
  margin-left: 100px;
}
.navbar-nav .nav-link {
  align-items: center;
  cursor: pointer;
  display: flex;
  font-size: 20px;
  font-weight: 600 !important;
  letter-spacing: 0;
  line-height: 17px;
  color: rgb(30, 30, 30) !important;
  padding-left: 41px !important;
}
.navbar-nav .nav-link:hover {
  color: rgb(191, 95, 255) !important;
  transition: 0.3s ease-in;
}
.router-link-exact-active {
  color: rgb(191, 95, 255) !important;
}
</style>
