<template>
  <div class="p-4">
      <div class="edit-header mb-5">
        <h2>Your Tokens ({{tokens.length}})</h2>
      </div>
      <div class="edit-profile">
        <table class="table">
          <thead>
            <tr>
              <th>No.</th>
              <th scope="col">Token</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(token,index) in tokens" :key="token.id">
              <td>{{index+1}}</td>
              <td>{{token.license}}</td>
            </tr>
          </tbody>
        </table>
      </div>

  </div>
</template>

<script>
import axios from "axios";
import { base } from "../main";
export default {
  data() {
    return {
      tokens:[],
      email:null
    };
  },
  mounted() {
    this.email = this.$cookies.get("token")
    localStorage.setItem("images", JSON.stringify(this.names));
    this.get_token()
  },
  methods: {
    get_token(){
      const context = {
        "email":this.email
      }
      axios.post(`${base}token/get/`,context).then(data=>{
        this.tokens = data.data
      })
    }
  },
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media screen and (min-width: 1000px) {
  .containers {
    width: 1000px !important;
    margin: auto;
  }
}
h1,h2,h3,h4{
  color: rgb(18, 17, 17) !important;
  font-size: 30px;
}
@media screen and (max-width: 600px) {
  .edit-profile {
    width: 100% !important;
  }
  .dash {
    flex: 6 !important;
  }
  .sidebar {
    flex: 1 !important;
  }
  input {
    margin: 0px !important;
    margin-bottom: 10px !important;
  }
}
.edit-header h2 {
  text-align: center;
  font-weight: bold;
}
.edit-profile {
  width: 600px;
  margin: auto;
  margin-bottom: 50px;
  padding: 10px;
  
  color: white;
  font-size:18px;
}
</style>
