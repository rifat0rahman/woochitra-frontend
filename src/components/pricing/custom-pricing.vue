<template>
  <div class="contact">
    <NavBarVue/>
    <div v-if="!success">
      <div class="slick" v-show="slick">
        <div class="spinner-border text-warning" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      <div class="contact-container" v-show="!slick">
        <div class="header-text">
          <b>Submit the form to contact us</b>
        </div>
        <form @submit.prevent="contact">
          <label for="">Name</label><br />
          <input type="text" placeholder="your name" v-model="name" /><br />
          <label for="">Email</label><br />
          <input
            type="email"
            placeholder="your email"
            v-model="email"
            required
          /><br />
          <label for="">Details</label><br />
          <textarea
            rows="50"
            placeholder="describe your details"
            v-model="details"
            required
          ></textarea>
          <div class="button">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
    <div class="success" v-show="success">
      <h2>Thanks for contacting with us! we will reply you soon</h2>
      <a href="/dashboard">Dashboard</a>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { base } from "../../main";
import NavBarVue from "../mine/NavBar.vue";
export default {
  data() {
    return {
      name: null,
      email: null,
      details: null,
      slick: false,
      success: false,
    };
  },
  components: {
    NavBarVue,
  },
  methods: {
    contact() {
      this.slick = true;
      const info = {
        name: this.name,
        details: this.details,
        email: this.email,
      };
      axios.post(`${base}send_email`, info).then(() => {
        this.slick = false;
        this.success = true;
      });
    },
  },
};
</script>

<style scoped>
@media screen and (max-width: 550px) {
  .contact {
    width: 100% !important;
    margin: auto !important;
    margin-top: 100px !important;
    padding: 20px !important;
  }
  .contact-container {
    width: 100% !important;
    margin: auto;
    padding: 0px !important;
  }
  form input,
  textarea,
  button {
    width: 100%;
    margin-bottom: 20px;
    height: 45px;
    border-radius: 25px;
    border: 1px solid rgb(245, 245, 245);
    padding: 0px !important;
    box-shadow: 0px 0px 2px 2px rgb(238, 238, 238);
    padding-left: 15px !important;
  }
}
label{
  padding-left: 15px;
}
.success a {
  background: linear-gradient(rgb(255, 189, 67), rgb(255, 145, 0));
  padding: 10px;
  border: 2px solid rgb(255, 255, 255);
  text-decoration: none;
  border-radius: 25px;
  font-size: 17px;
  color: rgb(255, 255, 255);
  margin: 10px !important;
 
}

.success h2 {
  font-size: 24px;
  margin: 25px;
}
.success {
  text-align: center;
  margin: 5px;
  margin-bottom: 80px;
  color: rgb(19, 19, 19);
}
.slick {
  text-align: center;
}

.spinner-border {
  width: 5rem;
  height: 7rem;
  font-weight: 600;
  text-align: center;
}
label {
  margin-left: 5px;
  margin-bottom: 5px;
}
.header-text {
  text-align: center;
  font-size: 25px;
  padding-bottom: 30px;
}
button {
  background: linear-gradient(rgb(255, 189, 67), rgb(255, 145, 0));
  font-size: 20px;
  margin-top: 20px;
  color: white;
}
textarea {
  height: 70px !important;
}
input,
textarea:focus {
  outline: 0;
}
form input,
textarea,
button {
  width: 100%;
  margin-bottom: 20px;
  height: 45px;
  border-radius: 25px;
  border: 1px solid rgb(245, 245, 245);
  padding: 8px;
  box-shadow: 0px 0px 2px 2px rgb(238, 238, 238);
  padding-left: 15px;
}
.contact-container {
  width: 400px;
  margin: auto;
}
.contact {
  width: 500px;
  border: 2px solid rgb(238, 238, 238);
  margin: auto;
  margin-top: 150px;
  margin-bottom: 200px;
  padding: 50px;
  padding-bottom: 70px;
  border-radius: 10px;
}
</style>