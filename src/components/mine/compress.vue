<template>
  <div class="">
    <div class="mt-5">
        <!-- name changing -->

        <div class="edit-profile">
          <div class="edit-header">
            <h2>Create Token</h2>
          </div>
          <p class="text-center mt-3 mb-4">{{ token }}</p>
          <form @submit.prevent="create_token">
            <div class="info-fileds text-center">
              <button class="button">
                  Create Token
              </button>
            </div>
          </form>
          <p class="error">{{ license_error }}</p>
        </div>

        <!-- email changer -->
        <div class="text-center">
           <strong>Check all your token <a style="color:rgb(139 55 248)" href="/tokens"><i>here</i></a> </strong>
        </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { base } from "../../main";

export default {
  data() {
    return {
      email:null,
      token:null,
      license_error:null,
    };
  },
  mounted() {
    localStorage.setItem("images", JSON.stringify(this.names));
    this.email = this.$cookies.get("token")
  },
  methods: {
    create_token(){
      const context = {
        "email":this.email
      }
      axios.post(`${base}token/create/`,context).then(data=>{
        this.token = data.data.license
        console.log(data)
      })
      .catch(err=>{
        console.log(err.response)
        this.license_error = err.response.data.error
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
@media screen and (max-width: 460px) {
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
.button {
  margin-top: 13vh;
  background: linear-gradient(rgb(205, 130, 255), rgb(139, 55, 248));
  color: white;
  padding:11px;
  font-size: 18px;
  border-radius: 25px;
  text-decoration: none;
  font-size:18px;
  border: none;
  font-weight: bold;
  margin-bottom: 10px;
}

h1,h2,h3,h4{
  color: rgb(18, 17, 17) !important;
  font-size: 30px;
}
label {
  margin-left: 30px;
}
.success {
  text-align: center;
  color: #2dce89;
}
.error {
  text-align: center;
  color: red;
}
.dash {
  flex: 3;
}
.sidebar {
  flex: 1;
}
.containers {
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
}
input:focus {
  outline: 0;
}
.info-fileds input[type="submit"] {
  background: linear-gradient(rgb(205, 130, 255), rgb(139, 55, 248));
  color: white;
  font-size:18px;
}

.edit-header h2 {
  text-align: center;
  font-weight: bold;
}
.info-fileds input {
  width: 100% !important;
  border-radius: 20px;
  height: 45px;
  margin: 10px;
  border: 1px solid rgb(226, 226, 226);
  box-shadow: 2px 2px 2px rgb(238, 238, 238);
  padding: 10px;
  padding-left: 20px;
}
.edit-profile {
  width: 400px;
  margin: auto;
  margin-bottom: 50px;
  padding: 10px;
}
</style>
