<template>
  <div class="verify">
    <div class="heading">
      <p>Please check your email to get the 6 digit verification code</p>
    </div>
    <p class="error">{{error}}</p>
    <div class="cont-verify">
      <form @submit.prevent="verify" class="verify-form">
        <label>put the 6 digit code here</label><br />
        <input type="text" placeholder="123456" v-model="code" required /><br />
        <button>Verify</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { base } from "../../main";
export default {
  data() {
    return {
      code:null,
      error:null,
    };
  },
  mounted() {
    const token = this.$cookies.get('token')
    if(token){
      location.replace('/')
    }
  },
  methods: {
    verify() {
      const context = {
        email: this.$cookies.get("initial_email"),
        password: this.$cookies.get("initial_password"),
        name :this.$cookies.get("initial_name"),
        code: this.code,
        sumo_code:this.$cookies.get('sumo_code')
      };

      axios.post(`${base}create_account`, context).then((data) => {
        this.$cookies.set("token", data.data.user);
        this.$cookies.set('initial_password','')
        this.$cookies.set('initial_email','')
        this.$cookies.set('sumo_code','')

        location.replace('/setting')
      })
      .catch(err=>{
        this.error = err.response.data.status
      })
    },
  },
};
</script>

<style scoped>
.error{
  color: red;
  text-align: center;
}
label {
  padding-left: 20px;
}
input:focus{
  outline: none;
}
button {
  width: 100%;
  border-radius: 25px;
  border: 1px solid rgb(228, 228, 228);
  height: 40px;
  font-size:18px;
  background: linear-gradient(rgb(255, 189, 67), rgb(255, 145, 0));
  color: white;
}
input {
  width: 100%;
  margin-bottom: 10px;
  height: 40px;
  border-radius: 25px;
  border: 1px solid rgb(228, 228, 228);
  box-shadow: 1px 1px 1px 1px rgb(224, 224, 224);
  padding: 5px;
  padding-left: 20px;
}
.cont-verify {
  width: 300px;
  margin: auto;
}
.heading {
  text-align: center;
  margin-top: 50px;
  margin-bottom: 40px;
}
.verify {
  height: 50vh;
}
</style>