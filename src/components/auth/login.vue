<template>
  <div class="all-register">
    <NavBarVue />
    <div class="reg-container">
      <div class="register">
        <div class="header-text">
          <b>Login to Content Boom</b>
        </div>
        <div>
          <form @submit.prevent="login">
            <p class="error">{{error}}</p>
            <label for="email">Email</label><br />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              v-model="userInfo.email"
            /><br />
            <a href="/forget-email" class="forgot">forgot password</a><br>
            <label for="password">Password</label><br />
            <input
              type="password"
              name="password"
              placeholder="Must be minimum 6 characters"
              v-model="userInfo.password"
            /><br />
            <input type="submit" value="Login" />
          </form>
        </div>
        <span class="redirect-login"
          >Don’t have an account? <a href="/register">Register</a></span
        >
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import { base } from "../../main";
import NavBarVue from "../mine/NavBar.vue";

export default {
  components: {
    NavBarVue,
  },
  data() {
    return {
      userInfo: {
        email: null,
        password: null,
      },
      error:null,
    };
  },
  mounted(){
    const token = this.$cookies.get('token')
    if(token){
      location.replace('/dashboard')
    }
  },
  methods: {
    login() {
      axios
        .post(`${base}login`, this.userInfo)
        .then((data) => {
          this.$cookies.set('token',data.data.status);
          location.replace('/dashboard')
        })
        .catch((err) => {
          this.error = '*' + err.response.data.status +'*'
          
        });
    },
  },
};
</script>

<style scoped>
@media screen and (max-width:620px) {
  .reg-container {
    width: 500px !important;
    margin:auto;
  }
}
@media screen and (max-width:520px) {
  .reg-container {
    width: 450px !important;
  }
}
@media screen and (max-width:520px) {
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

.forgot{
  float: right;
  color: rgb(41, 41, 41);
}
.forget{
  text-align: center;
  margin-top: 50px;
}
.error{
  color: red;
  font-size: 16px;
  text-align: center;
}
label {
  margin-left:30px;
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
  font-size: 18px;
  color: white;
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
  padding-left:20px;
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
  margin-bottom: 200px;
}
</style>