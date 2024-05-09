<template>
  <div class="containers">
    <div class="sidebar">
      <sidebarVue />
    </div>
    <div class="dash">
      <div class="settings">
        <!-- name changing -->

        <div class="edit-profile">
          <div class="edit-header">
            <h2>Use License</h2>
          </div>
          <p class="success">{{ license_error }}</p>
          <form @submit.prevent="active_license">
            <div class="info-fileds">
              <label for="name">Your License</label><br />
              <input
                type="text"
                name="name"
                v-model="license"
                placeholder="put your license"
                required
              /><br />
              <div class="text-center">
                  <button class="button ms-3">Activate License</button>
              </div>
            </div>
          </form>
        </div>

        <!-- email changer -->
        <!-- name changing -->

        <div class="edit-profile">
          <div class="edit-header">
            <h2>Change Name</h2>
          </div>
          <p class="success">{{ name_change }}</p>
          <form @submit.prevent="change_name">
            <div class="info-fileds">
              <label for="name">Change Name</label><br />
              <input
                type="text"
                name="name"
                v-model="name"
                placeholder="put your new name"
                required
              /><br />
              <div class="text-center">
                  <button class="button ms-3">Change Name</button>
              </div>
            </div>
          </form>
        </div>

        <!-- email changer -->
        <div class="edit-profile" v-show="key">
          <div class="edit-header">
            <h2>Change Email</h2>
            <p></p>
            <p class="error" style="text-align-center">{{ em_error }}</p>
            <p class="success">{{ em_success }}</p>
            <p></p>
          </div>
          <form @submit.prevent="change_email">
            <div class="info-fileds">
              <label for="name">Change Email</label><br />
              <input
                type="email"
                name="newpass2"
                placeholder="put your new email here"
                v-model="new_email"
                required
              /><br />
              <div class="text-center">
                  <button class="button ms-3">Change Email</button>
              </div>
            </div>
          </form>
        </div>
        <!-- verify -->

        <div class="edit-profile" v-show="!key">
          <div class="edit-header">
            <p>please your email to get the 6 digit verication code</p>
            <p></p>
            <p class="error" style="text-align-center">{{ em_error }}</p>
            <p></p>
          </div>
          <form @submit.prevent="verify">
            <div class="info-fileds">
              <label for="name">Verify Email</label><br />
              <input
                type="text"
                name="newpass2"
                v-model="code"
                placeholder="123456"
                required
              /><br />
              <div class="text-center">
                  <button class="button ms-3">Verify Email</button>
              </div>
            </div>
          </form>
        </div>

        <!-- password changing -->
        <div class="edit-profile">
          <div class="edit-header">
            <h2>Change Password</h2>
            <p></p>
            <p class="error" style="text-align-center">{{ error }}</p>
            <p class="success">{{ success }}</p>
            <p></p>
          </div>
          <form @submit.prevent="change_password">
            <div class="info-fileds">
              <label for="name">Current Password*</label><br />
              <input
                type="password"
                name="oldpass"
                placeholder="put your current password"
                v-model="pass.old_pass"
                required
              /><br />
              <label for="name">New Passwod*</label><br />
              <input
                type="password"
                name="newpass1"
                placeholder="put your new passord"
                v-model="pass.new_pass"
                required
              /><br />
              <label for="name">Again New Password*</label><br />
              <input
                type="password"
                name="newpass2"
                placeholder="put your new password again"
                v-model="pass.ag_new_pass"
                required
              /><br />
              <div class="text-center">
                  <button class="button ms-3">Change Password</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import sidebarVue from "./sidebar.vue";
import { base } from "../../main";

export default {
  components: {
    sidebarVue,
  },
  data() {
    return {
      pass: {
        user: null,
        old_pass: null,
        new_pass: null,
        ag_new_pass: null,
      },
      code: null,
      success: null,
      error: null,
      em_error: null,
      em_success: null,
      new_email: null,
      key: true,
      name_change: null,
      license:null,
      license_error:null,
      name : null,
    };
  },
  mounted() {
    const token = this.$cookies.get("token");
    this.new_email = token;
    this.pass.user = token;
    if (!token) {
      location.replace("/login");
    }
  },


  methods: {
    change_password() {
      axios
        .post(`${base}change_password`, this.pass)
        .then((data) => {
          this.success = data.data.status;
          this.error = null;
          this.pass.old_pass = "";
          this.pass.new_pass = "";
          this.pass.ag_new_pass = "";
        })
        .catch((err) => {
          this.success = null;
          this.error = err.response.data.status;
        });
    },
    // change email
    change_email() {
      const token = this.$cookies.get("token");
      const context = {
        email: token,
        new_email: this.new_email,
      };
      this.key = false;
      axios
        .post(`${base}change_email`, context)
        .then((data) => {
          data;
          this.em_error = null;
          this.$cookies.set("new_email", this.new_email);
        })
        .catch((err) => {
          this.key = true;
          this.em_error = err.response.data.status;
          this.em_success = null;
        });
    },
    // verify
    verify() {
      const token = this.$cookies.get("token");
      const context = {
        email: token,
        new_email: this.$cookies.get("new_email"),
        code: this.code,
      };
      axios
        .post(`${base}update_email`, context)
        .then((data) => {
          const el = data.data.email;
          this.$cookies.set("token", el);
          this.$cookies.set("new_email", "");
          this.key = true
          this.em_success = 'Email has been changed';
          this.em_error = '';
          this.new_email = el
        })
        .catch((err) => {
          this.em_error = err.response.data.status;
          this.em_success = null;
        });
    },
    change_name() {
      const token = this.$cookies.get("token");
      const context = {
        email: token,
        name: this.name,
      };
      axios.post(`${base}change_name`, context).then(() => {
        this.name_change = "Name has been changed";
      });
    },
    // _________license_________//
    active_license(){
      const token = this.$cookies.get("token");
      const context = {
        "email":token,
        "license_code":this.license
      }
      axios.post(`${base}license`,context).then(data=>{
        this.license_error = data.data.status
      })
      .catch(err=>{
        this.license_error = err.response.data.status
      })
    }
  },
};
</script>

// csss here
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

.button {
  background: linear-gradient(rgb(205, 130, 255), rgb(139, 55, 248));
  color: white;
  padding:8px;
  font-size: 18px;
  border-radius: 25px;
  text-decoration: none;
  font-size:18px;
  border: none;
  font-weight: bold;
  margin-bottom: 20px;
  width: 100% !important;
}

.info-fileds input[value="Change password"] {
  background: linear-gradient(rgb(205, 130, 255), rgb(139, 55, 248));
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