<template>
  <div class="profile">
    <div class="containers">
      <div class="sidebar"></div>
      <div class="dash">
        <div class="profile-container">
          <div class="profile-info">
            <div class="header text-center">
              <strong class="fw-bolder fs-4">Profile Info</strong>
            </div>
            <div>
              <p class="owner">Owner : {{ user.first_name }}</p>
              <p class="email">Email : {{ user.email }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { base } from "../../main";

export default {
  components: {},
  data() {
    return {
      user: null,
      accoutType: "FREE",
      spinner:true,
    };
  },
  mounted() {   
    const current_user = this.$cookies.get("token");
    if (!current_user) {
      location.replace("/login");
    }
    axios.get(`${base}users`).then((data) => {
      const d = data.data;
      const p = d.filter((user) => user.email == current_user);
      this.user = p[0];
      this.spinner = false;
    });
  },
};
</script>

<style scoped>
@media screen and (min-width: 1000px) {
  .profile {
    width: 600px !important;
    margin: auto;
  }
}
@media screen and (max-width: 820px) {
  .profile-container {
    width: 500px !important;
  }
}
@media screen and (max-width: 720px) {
  .profile-container {
    width: 450px !important;
  }
}
@media screen and (max-width: 680px) {
  .profile-container {
    width: 400px !important;
  }
}

h1,h2,h3,h4{
  color: rgb(18, 17, 17) !important;
  font-size: 30px;
}

@media screen and (max-width: 460px) {
  .profile-container {
    width: 100% !important;
    margin: auto;
  }
  .profile-info {
    width: 80% !important;
  }
  .profile-info p {
    font-size: 16px !important;
  }
}

.spinner {
  font-size: 100px;
  height: 200px;
}
.header h2 {
  text-align: center;
  font-weight: 900;
  margin-bottom: 20px;
}

.profile-info p {
  padding: 15px;
  border-radius: 20px;
  box-shadow: 1px 2px 1px rgb(199, 199, 199);
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  word-break: break-all;
}
.profile-info {
  width: 400px;
  margin: auto;
  margin-top: 40px;
}
.uses-cont {
  width: 400px;
  display: flex;
  text-align: center;
  margin: auto;
  margin-top: 10px;
}

.profile-container {
  width: 100%;
  margin: auto;
  border-radius: 20px;
}
</style>