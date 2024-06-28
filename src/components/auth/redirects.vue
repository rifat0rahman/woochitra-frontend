<template>
    <div class="verify">
      Proccessing..
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import { base } from "../../main";
  export default {
    data() {
      return {
        license_key:null,
      };
    },
    mounted() {
      this.$cookies.set(
            "sumo_code",
            this.$route.query.code,
            "1200s"
          );
        // call for the appsumo-code
      axios.get(`${base}app-sumo/api-code/?code=${this.$route.query.code}`)
      const context = {
        email: this.$cookies.get('token'),
        sumo_code:this.$route.query.code
      }
      const token = this.$cookies.get('token')
      if(token){
        axios.post(`${base}app-sumo/old-user-appsumo`, context).then(data=>{
            this.$cookies.set('sumo_code','')
            location.replace('/dashboard')
            console.log(data)
        })
      }
      else{
        location.replace('/register')
      }
    },

    methods: {
    },
  };
  </script>