<template>
  <div>
    <nav class="navbar fixed-top navbar-expand-md navbar-light bg-light">
      <div class="container-fluid logo">
        <img src="../../images/logo-png.png" alt="logo" class="navbar-brand" />
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
                <li class="nav-item activate">
                  <router-link class="nav-link" aria-current="page" to="/"
                    >Home</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link
                    class="nav-link"
                    aria-current="page"
                    to="/pricing-plan"
                    >Pricing</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link
                    class="nav-link"
                    aria-current="page"
                    to="/deshboard"
                    >Deshboard</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link
                    class="nav-link"
                    aria-current="page"
                    to="/profile"
                    >Profile</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link
                    class="nav-link"
                    aria-current="page"
                    to="/premium"
                    >Premium</router-link
                  >
                </li>
                <!-- <li class="nav-item">
                  <router-link
                    class="nav-link"
                    aria-current="page"
                    to="/setting"
                    >Settings</router-link
                  >
                </li> -->
                <li class="nav-item">
                  <a class="nav-link" @click="logout" v-if="log == true"
                    >LogOut</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <!-- fo can -->
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div class="dropdown dropstart">
        <a
          class="nav-link usericon"
          href="#"
          role="button"
          id="dropdownMenuLink"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img src="../../images/user.png" alt="" />
        </a>

        <ul
          class="dropdown-menu dropdown-menu-dark"
          aria-labelledby="dropdownMenuLink"
        >
          <li><a class="dropdown-item" href="/profile">Profile</a></li>
          <li><a class="dropdown-item" href="/premium">Premium</a></li>
          <!-- <li><a class="dropdown-item" href="/setting">Settings</a></li> -->
          <li>
            <a class="dropdown-item" @click="logout" v-if="log == true"
              >LogOut</a
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import axios from "axios";
import { base } from "../../main";

export default {
  data() {
    return {
      log: false,
    };
  },
  mounted() {
    const token = this.$cookies.get("token");
    if (token) {
      this.log = true;
    }
  },
  methods: {
    logout() {
      axios.post(`${base}logout`).then(() => {
        this.$cookies.remove("token");
        location.replace("/");
      });
    },
  },
};
</script>

<style scoped>
@media screen and (max-width: 775px) {
  .usericon {
    display: none;
  }
}

.usericon img {
  width: 40px !important;
  margin-right: 20px;
}

.others {
  margin-top: 100px;
  padding: 20px;
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
.router-link-exact-active {
  color: #ec850a !important;
}
.deshpage {
  background: linear-gradient(87deg, #2dce89, #2dcecc) !important;
}
</style>