<template>
  <div>
    <div>
      <div>
        <p class="format-header">Change Your Image Format</p>
        <p id="svgerror"></p>
        <div class="form-group">
          <label for="sel1">Select Format:</label>
          <select
            class="form-control"
            onchange="changeFormat(this)"
            id="format"
          >
            <option value=".png">PNG</option>
            <option value=".jpg">JPG</option>
            <option value=".webp">WEBP</option>
            <option v-if="$route.path != '/image-optimizations' " value=".svg">SVG</option>
            <option value=".pdf">PDF</option>
          </select>
        </div>
      </div>
      <div>
        <!-- spinner -->
        <div class="spinner" id="spinner" hidden>
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
        <!-- spinner -->
        {{  }}
        <div class="buttons" id="link-container">
          <!-- compress button rep download -->
        <div v-if="$route.path == '/image-optimizations' ">
          <button @click="ImageCount" id="compressbtn" v-if="access">
            Download Image
          </button>
        </div>
        <div v-if="$route.path == '/image-resizing' ">
          <button @click="ImageCount" id="btn" v-if="access">
            Download Image
          </button>
        </div>

          <button v-if="!access">Your Package has been finished</button>
        </div>


      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import { base } from "../main";

export default {
  data() {
    return {
      error: null,
      access: true,
      usertype: null,
    };
  },
  mounted() {
    const token = this.$cookies.get("token");
    axios.get(`${base}consumers`).then((data) => {
      const user = data.data.filter((user) => user.user == token)[0];
      this.usertype = user.account_type;
      if (user.acessOngen == false) {
        this.access = false;
      }
    });
  },

  methods: {
    ImageCount() {
      const token = this.$cookies.get("token");
      const count = JSON.parse(localStorage.getItem("images"))
      console.log(count)

      if (this.usertype != "Unlimited") {

        for(let i in count){
          axios
          .post(`${base}image-count`, { token: token })
          .then((data) => {
            data;
            console.log(i,'count')
          })
          .catch((err) => {
            this.error = err.response.data.status;
          });
          
        }

        
      }
    },
  },
};
</script>

<style scoped>
@media screen and (max-width: 460px) {
  .form-group {
    width: 80% !important;
  }
  .buttons {
    width: 90% !important;
  }
}
#svgerror {
  text-align: center;
  color: rgb(255, 123, 0);
}
.spinner {
  text-align: center;
  font-size: 30px;
  margin: 20px;
}
.buttons button {
  background: linear-gradient(rgb(255, 189, 67), rgb(255, 145, 0));
  border: 2px solid white;
  color: white;
  padding: 10px;
  font-size: 18px;
  border-radius: 25px;
  text-decoration: none;
  width: 100%;
  margin-bottom: 100px;
}
.buttons {
  width: 400px;
  margin: auto;
  padding-bottom: 20px;
}
.form-group select {
  border-radius: 25px;
  margin-top: 8px;
  border: 1px solid rgb(223, 223, 223);
  height: 45px;
  box-shadow: 1px 1px 1px rgb(226, 225, 225);
  padding: 10px;
}
.form-group {
  width: 400px;
  margin: auto !important;
  padding-bottom: 40px !important;
}
.format-header {
  text-align: center;
  margin-top: 40px;
  font-size: 22px;
}
</style>