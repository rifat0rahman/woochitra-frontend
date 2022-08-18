<template>
  <div class="reset_password">
    <NavBarVue />
    <div class="heading">
        <p>Please check your email to get the 6 digit verification code</p>
      </div>
    <div class="container">
      <p class="text-danger">{{ error }}</p>
      <form @submit.prevent="forget_verify">
        <label for="">verify  code</label>
        <input
          type="verify"
          required
          v-model="verify"
          class="form-data"
          placeholder="put your verify code"
        /><br />
        <button>Verify Code</button>
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
      verify: null,
      error: null,
    };
  },
  methods: {
    forget_verify() {
      const email = localStorage.getItem("forget_email");
      const context = {
        code: this.verify,
        email: email,
      };
      axios
        .post(`${base}forget_verify`, context)
        .then((data) => {
          localStorage.setItem("forget_verify", data.data.user);
          location.replace("/forget-password");
        })
        .catch((err) => {
          this.error = err.response.data.status;
        });
    },
  },
};
</script>

<style scoped>
.heading {
  text-align: center;
  margin-top: 50px;
  margin-bottom: 40px;
}
.text-danger {
  text-align: center;
}
label {
  margin-left: 30px;
}
button {
  width: 100%;
  height: 45px;
  border: 1px solid rgb(218, 163, 255);;
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