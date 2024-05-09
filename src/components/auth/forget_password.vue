<template>
  <div class="reset_password">
    <NavBarVue />
    <div class="container">
        <div class="login text-success" v-show="success">
            {{success}} <a href="/login">Login</a>
        </div>
      <p class="text-danger">{{ error }}</p>
      <form @submit.prevent="forget_email">
        <label>Password</label>
        <input
          type="password"
          v-model="password1"
          class="form-data"
          placeholder="must be up to 6 latters"
        /><br />
        <label>Confirm Password</label>
        <input
          type="password"
          v-model="password2"
          class="form-data"
          placeholder="must be up to 6 latters"
        /><br />
        <button class="mt-3">Update Password</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import NavBarVue from "../mine/NavBar.vue";
import { base } from "../../main";
export default {
  components: {
    NavBarVue,
  },
  data() {
    return {
      email: null,
      error: null,
      success:null,
    };
  },
  methods: {
    forget_email() {
      const email = localStorage.getItem("forget_email");
      const context = {
        "email": email,
        "password1":this.password1,
        "password2":this.password2
      };
      axios
        .post(`${base}forget_password`, context)
        .then((data) => {
            this.success = data.data.status
            localStorage.removeItem('forget_email')
            localStorage.removeItem('forget_verify')
        })
        .catch((err) => {
          this.error = err.response.data.status;
        });
    },
  },
};
</script>

<style scoped>
.text-danger {
  text-align: center;
}
label {
  margin-left: 30px;
  margin-top: 10px;
}
button {
  width: 100%;
  height: 45px;
  border: 1px solid rgb(218, 163, 255);
  border-radius: 25px;
  background: linear-gradient(rgb(205, 130, 255), rgb(139, 55, 248));
  margin: 7px;
  -webkit-box-shadow: 0 0 5px 1px rgb(228, 228, 228);
  -moz-box-shadow: 0 0 5px 1px rgb(255, 255, 255);
  box-shadow: 0 0 5px 1px rgb(219, 219, 219);
  padding: 5px;
  padding-left: 20px;
  color: white;
  font-size:18px;
}
input:focus {
  outline: none;
}
.container input {
  width: 100%;
  height: 45px;
  border: 1px solid rgb(218, 163, 255);;
  border-radius: 25px;
  margin: 7px;
  -webkit-box-shadow: 0 0 5px 1px rgb(228, 228, 228);
  -moz-box-shadow: 0 0 5px 1px rgb(255, 255, 255);
  box-shadow: 0 0 5px 1px rgb(219, 219, 219);
  padding: 5px;
  padding-left: 20px;
}
.container {
  width: 350px;
  margin-top: 50px !important;
}
.reset_password {
  margin-top: 150px;
  height: 40vh;
}
</style>