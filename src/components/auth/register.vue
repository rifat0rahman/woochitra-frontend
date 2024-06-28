<template>
  <div class="all-register">
    <NavBarVue />
    <div class="reg-container">
      <div class="register">
        <div class="header-text">
          <b>Register to Content Boom</b>
        </div>
        <div>
          <div class="spinner" v-show="!spinner">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
          <form @submit.prevent="register" v-show="spinner">
            <p class="error">{{ error }}</p>
            <label for="email">Name</label><br />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              v-model="userInfo.name"
              required
            /><br />
            <label for="email">Email</label><br />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              v-model="userInfo.email"
              required
            /><br />
            <label for="password">Password</label><br />
            <input
              type="password"
              name="password"
              placeholder="Must be minimum 6 characters"
              v-model="userInfo.password1"
              required
            /><br />
            <label for="password">Confirm Password</label><br />
            <input
              type="password"
              name="password"
              placeholder="Must be minimum 6 characters"
              v-model="userInfo.password2"
              required
            /><br />
            <input type="submit" value="Register" />
          </form>
        </div>
        <span class="redirect-login"
          >Already have an account? <a href="/login">Login</a></span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { base } from "../../main";
import axios from "axios";
import NavBarVue from "../mine/NavBar.vue";
export default {
  components: {
    NavBarVue,
  },
  data() {
    return {
      userInfo: {
        email: null,
        password1: null,
        password2: null,
        name:null,
      },
      error: null,
      spinner: true
    };
  },
  mounted() {
    const token = this.$cookies.get("token");
    // appsumo-code
    if (token) {
      location.replace("/dashboard");
    }
  },

  methods: {
    register() {
      this.spinner = false
      axios
        .post(`${base}register`, this.userInfo)
        .then(() => {
          this.$cookies.set("initial_email", this.userInfo.email, "1200s");
          // initail email and pass
          this.$cookies.set(
            "initial_password",
            this.userInfo.password1,
            "1200s"
          );
          this.$cookies.set(
            "initial_name",
            this.userInfo.name,
            "1200s"
          );
          location.replace("/verify_account");
        })
        .catch((err) => {
          this.spinner = true
          this.error = "*" + err.response.data.status + "*";
        });
    },
  },
};
</script>

<style scoped>
@media screen and (max-width: 620px) {
  .reg-container {
    width: 500px !important;
    margin: auto;
  }
}
@media screen and (max-width: 520px) {
  .reg-container {
    width: 450px !important;
  }
}
@media screen and (max-width:460px) {
  .reg-container {
    width:100% !important;
    padding: 0px !important;
    padding-top: 50px !important;
    margin: 0px !important;
  }
  label{
    margin-top: 20px;
  }
  .reg-container input{
    margin: 0px !important;
  }
}



.spinner-border{
  width: 100px;
  height: 100px;
  font-size: 50px !important;
}
.spinner{
  text-align: center;
  font-size: 40px;
  height: 20vh;
  margin-top:100px;
}
.error {
  font-size: 16px;
  color: red;
  text-align: center;
}
label {
  margin-left: 30px;
}
.redirect-login {
  margin: 40px;
  font-size: 17px;
}
input:focus {
  outline: 0;
}
.header-text {
  font-size: 28px;
  text-align: center;
  margin-bottom: 20px;
}
input[type="submit"] {
  margin-top: 20px !important;
  background: linear-gradient(rgb(205, 130, 255), rgb(139, 55, 248));
  color: white;
  font-size: 18px;
  margin-bottom: 20px !important;
}
.register input {
  width: 100%;
  height: 45px;
  border: 1px solid rgb(218, 163, 255);
  border-radius: 25px;
  margin: 7px;
  -webkit-box-shadow: 0 0 5px 1px rgb(228, 228, 228);
  -moz-box-shadow: 0 0 5px 1px rgb(255, 255, 255);
  box-shadow: 0 0 5px 1px rgb(219, 219, 219);
  padding: 5px;
  padding-left: 30px;
}

.register {
  width: 350px;
  margin: auto;
}
.reg-container {
  width: 600px;
  margin: auto;
  padding: 50px;
}
.all-register {
  margin-top: 100px;
}
</style>