<template>
  <div class="p-2">
      <div class="edit-header">
        <h2>Your Tokens ({{tokens.length}})</h2>
      </div>
        <!-- search token -->
      <div class="edit-profile">
        <form @submit.prevent="search_token">
          <div class="info-fileds text-center">
            <input
              type="text"
              name="name"
              v-model="searchQuery"
              placeholder="search with website"
            /><br />
            <div class="text-center">
                <button class="button ms-3">Search Token</button>
            </div>
          </div>
        </form>
      </div>
      <!-- email changer -->
  <!-- boostrap testing -->
    <div class="accordion" id="accordionExample">
      <div class="accordion-item" v-for="(token,index) in fake_tokens" :key="token.id">
        <h2 class="accordion-header" id="headingThree">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#collapseThree'+index" aria-expanded="false" aria-controls="collapseThree">
            {{token.license}}
          </button>
        </h2>
        <div :id="'collapseThree' + index" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <div>
              <strong>License</strong>: <span class="fs-6 ms-2"><i>{{token.license}}</i></span>
            </div>
            <div>
              <strong>Linked Site</strong>: <a class="fs-6 ms-2" target="_blank" :href="token.website"><i>{{token.website}}</i></a>
            </div>
            <div>
              <strong>Expired</strong>: <span class="fs-6 ms-2"><i>{{token.expired}}</i></span>
            </div>
            <div>
              <form @submit.prevent="delete_token(token.license)">
                <div class="w-25">
                  <button class="delete">
                      Delete
                  </button>
                </div>
            </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  <!-- boostrap testing end -->
  </div>
</template>

<script>
import axios from "axios";
import { base } from "../../main";
export default {
  data() {
    return {
      searchQuery: null,
      tokens:[],
      fake_tokens:[],
      email:null,
      deleted:'',
    };
  },

  mounted() {
    this.email = this.$cookies.get("token")
    localStorage.setItem("images", JSON.stringify(this.names));
    this.get_token()
  },
  methods: {
      delete_token(t){
        const context = {
          "email":this.email,
          "token":t
        }
        console.log("o",context)
        axios.post(`${base}token/delete/`,context).then(data=>{
          console.log(data.data)
          if (data.data=="deleted"){
            this.deleted = data.data
            this.$router.go();
          }
          this.get_token()
        })
    },
    get_token(){
      const context = {
        "email":this.email
      }
      axios.post(`${base}token/get/`,context).then(data=>{
        this.tokens = data.data
        console.log("tokens",this.tokens)
        this.fake_tokens = this.tokens
      })
    },
    search_token(){
      if (this.searchQuery){
        this.fake_tokens = this.tokens.filter((token)=>{
          if(token.website){
            return token.website.indexOf(this.searchQuery) > -1
          }
        })        
      }
      else {
        this.fake_tokens = this.tokens
      }

    }
  },
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.accordion-button:focus{
  color: black;
  outline: 2px solid rgb(217, 198, 255) !important;
  transition: 1 ease;
  background: white;
}
.accordion-button{
  color: black;
  box-shadow: none !important;
  background: white;
  
}
.accordion-item{
  margin-bottom: 10px;
  border: 1px solid rgb(214, 197, 255);
}
.delete{
  background: linear-gradient(rgb(205, 130, 255), rgb(139, 55, 248));
  color: white;
  border-radius:5px;
  text-decoration: none;
  font-size:12px;
  border: none;
  font-weight: bold;
  width: 50% !important;
  height:25px;
}
.info-fileds input {
  width: 50% !important;
  border-radius: 20px;
  height: 35px;
  border: 1px solid rgb(226, 226, 226);
  box-shadow: 2px 2px 2px rgb(238, 238, 238);
  padding: 5px;
  padding-left: 20px;
  margin: 5px;
}
.button {
  background: linear-gradient(rgb(205, 130, 255), rgb(139, 55, 248));
  color: white;
  font-size: 18px;
  border-radius: 25px;
  text-decoration: none;
  font-size:18px;
  border: none;
  font-weight: bold;
  width: 50% !important;
  height: 35px;
}

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
