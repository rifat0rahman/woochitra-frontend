<template>
  <div class="sidebar">
    <main>
      <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-light">
        <a
          href="/"
          class="
            d-flex
            align-items-center
            mb-3 mb-md-0
            me-md-auto
            text-white text-decoration-none
            logo
          "
        >
          <img src="../../images/logo-png.png" alt="" />
        </a>
        <hr />
        <ul class="nav nav-pills flex-column mb-auto">
          <li class="nav-item">
            <a href="/dashboard" class="nav-link text-white">
              <i class="fas fa-tachometer-alt"></i
              ><span class="icon-t">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="/create-token" class="nav-link text-white"> 
            <i class="fas fa-compress-arrows-alt"></i><span class="icon-t">Create</span> </a>
          </li>
          <li>
            <a href="/tokens" class="nav-link text-white"> 
            <i class="fas fa-crop"></i><span class="icon-t">Tokens</span> </a>
          </li>
          <li>
            <router-link to="/setting" class="nav-link text-white">
            <i class="fas fa-cogs"></i><span class="icon-t">Settings</span>
            </router-link>
          </li>
            <li>
            <a href="https://contentboom.pro/download/" class="nav-link text-white" target="_blank">
            <i class="fas fa-download"></i><span class="icon-t">Download</span>
            </a>
            
          </li>
          <li>
            <a href="#"  @click="logout" class="nav-link text-white">
            <i class="fas fa-sign-out-alt"></i><span class="icon-t">LogOut</span>
            </a>
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>

<script>
import axios from "axios";
import { base } from "../../main";
export default {
  data() {
    return {
      username: null,
    };
  },
  mounted() {
    const token = this.$cookies.get("token");
    axios.get(`${base}users`).then((data) => {
      const current = data.data.filter((user) => user.email == token);
      this.username = current[0].username;
    });
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
@media screen and (max-width: 900px) {
  .sidebar {
    width: 220px !important;
  }
}
@media screen and (max-width: 750px) {
  .sidebar {
    width: 200px !important;
  }
  a .icon-t{
    font-size: 15px !important;
  }
}

@media screen and (max-width: 640px) {
  .sidebar {
    width: 100px !important;
  }
  a .icon-t{
    display: none;
  }
  i{
    text-align: center;
    width: 50px !important;
    font-size: 30px !important;
  }
  .logo img{
    width: 70px !important;
  }
  .profile img{
    margin-left:7px;
  }

}
@media screen and (max-width: 520px) {
  .sidebar {
    width: 80px !important;
  }
  .logo img{
    width: 60px !important;
  }
  i{
    width: 40px !important;
  }
  .profile img{
    margin-left: 5px;
  }
}
@media screen and (max-width:460px) {
  .sidebar {
    width:40px !important;
    border: none !important;
  }
  .logo img{
    width: 40px !important;
  }
  i{
    width:10px !important;
    font-size: 20px !important;
  }
  .profile img{
    margin-left: 5px;
  }
}



i{
  margin-right: 5px;
  font-size: 22px;
  color: rgb(24, 20, 9);
  cursor: pointer;
}
.router-link-exact-active {
  color: orange !important;
}
.profile {
  margin-top: 50px;
  font-size: 18px !important;
}
.profile img {
  width: 30px;
  margin-right: 10px;
}
ul {
  margin-top: 30px;
}
.nav-link {
  font-size: 20px;
  margin: 15px;
  font-weight: 600;
  text-align: left !important;
  position: relative;
  left: -30px !important;
}
.mb-3 {
  box-shadow: none;
  border: none !important;
}
.logo img {
  width: 100px;
}
.bg-light {
  background: white !important;
}
.text-white {
  color: black !important;
  font-family: inherit;
}
.flex-column {
  height: 100%;
}
main {
  height: 100%;
}
.sidebar {
  height:1000px;
  border-right: 1px solid rgb(228, 228, 228);
  width: 250px;
}
</style>