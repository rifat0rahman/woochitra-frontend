<template>
  <div class="containers">
    <div class="sidebar">
      <sidebarVue />
    </div>
    <div class="dash">
      <div class="seo">
        <div class="seo-container">
          <div class="">
            <div class="header-text">
              <h1 class="text-center">Update Image MetaData</h1>
              <b>Rank Your Image By Changing The MetaData</b>
            </div>
            <form @submit.prevent="ImageCount">
              <div class="input-container">
                <label for="files">
                  <img src="../../images/file-upload.png" alt="metadata" />
                </label>
                <input
                  type="hidden"
                  id="base64Data"
                  class="form-control mb-2"
                />
                <input
                  type="file"
                  id="files"
                  name="files"
                  class="form-control mb-2"
                  @change="onFileChange"
                  hidden
                  required
                />
                <!-- img previws -->
                <div class="mult-img">
                  <div class="mult-preview">
                    <div>
                      <img class="preview" :ref="'image'" />
                    </div>
                  </div>
                </div>
                <!-- img preview -->

                <input
                  type="text"
                  placeholder="File Name"
                  id="name"
                  class="form-control mb-2"
                />
                <input
                  type="text"
                  placeholder="Sofware Name"
                  id="sofname"
                  class="form-control mb-2"
                />
                <div id="map"></div>

                <div style="display: none" id="search-box"></div>

                <input
                  type="text"
                  placeholder="Add Comments"
                  id="comments"
                  class="form-control mb-2"
                />
                <input
                  type="text"
                  placeholder="Add Subject"
                  id="subject"
                  class="form-control mb-2"
                />
                <input
                  type="text"
                  placeholder="Author Name"
                  id="authorname"
                  class="form-control mb-2"
                />
                <textarea
                  class="form-control mb-2"
                  id="copyright"
                  placeholder="Add Copyright Information here..."
                  cols="30"
                  rows="5"
                ></textarea>
                <button id="update" v-show="showcar">
                  Update And Download
                </button>
                <button v-show="!showcar">Update Account To Use</button>
                <span class="error">{{ error }}</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { base } from "../../main";
import sidebarVue from "../DeshboardCont/sidebar.vue";

export default {
  components: {
    sidebarVue,
  },
  data() {
    return {
      showcar: false,
      images: null,
      access: null,
      error: null,
      supported: {},
      usertype: null,
    };
  },
  mounted() {
    const token = this.$cookies.get("token");
    axios.get(`${base}consumers`).then((data) => {
      const user = data.data.filter((user) => user.user == token)[0];
      if (user.acessOnseo == false) {
        this.showcar = false;
      } else {
        this.showcar = true;
      }
    });
  },
  methods: {
    // for image preview

    onFileChange(e) {
      let vm = this;
      vm;
      var selectedFiles = e.target.files;
      this.images = selectedFiles[0];

      let reader = new FileReader();
      reader.onload = (e) => {
        e;
        this.$refs.image.src = reader.result;
      };

      reader.readAsDataURL(this.images);
    },

    //downloads counting
    ImageCount() {
      const token = this.$cookies.get("token");
      axios
        .get(`${base}consumers`)
        .then((data) => {
          const user = data.data.filter((user) => user.user == token);
          this.access = user[0].acessOnseo;
          this.usertype = user[0].account_type;
        })
        .then(() => {
          console.log(this.usertype)
          if (this.usertype != "Unlimited") {
            if (this.access == true) {
              axios.post(`${base}seoimages`, { token: token });
            } else {
              this.error = "This Feature is Only For The Paid User";
            }
          }
        });
    },
  },
};
</script>

<style scoped>
@media screen and (min-width: 1000px) {
  .containers {
    width: 1000px !important;
    margin: auto;
  }
}

@media screen and (max-width: 720px) {
  .input-container {
    width: 420px !important;
  }
}

@media screen and (max-width: 620px) {
  .input-container {
    width: 100% !important;
  }
}
@media screen and (max-width: 520px) {
  .input-container {
    width: 100% !important;
    padding: 20px !important;
  }
  .header-text {
    padding: 15px;
  }
  .text-center {
    font-size: 25px !important;
    padding: 5px !important;
  }

  .form-control {
    width: 98% !important;
  }

  .sidebar {
    flex: 0.2 !important;
  }
  .desh {
    flex: 90% !important;
  }
}

.form-control:focus {
  border: 1px solid rgb(224, 224, 224) !important;
  box-shadow: 1px 1px 1px rgb(224, 224, 224) !important;
}

button:focus {
  outline: none !important;
  border: none !important;
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
.error {
  padding: 10px !important;
  font-size: 17px;
  color: red;
}
button:focus {
  color: rgb(255, 255, 255);
}
button:hover {
  color: rgb(255, 255, 255);
  border: 1px solid white;
}
.mult-img img {
  width: 200px !important;
  margin: 20px;
}
.input-container img {
  width: 80px;
  position: relative;
  bottom: 30px;
  cursor: pointer;
}
button {
  width: 100%;
  color: rgb(255, 255, 255);
  font-size: 18px;
  border: 1px solid white;
  background: linear-gradient(rgb(255, 189, 67), rgb(255, 145, 0));
  padding: 9px;
  border-radius: 25px;
  margin-bottom: 20px;
  margin-top: 20px;
}
textarea {
  margin-bottom: 20px !important;
  border-radius: 15px;
  height: 85px;
  border: 1px solid rgb(228, 228, 228);
  box-shadow: 1px 1px 1px rgb(224, 224, 224);
}
.input-container {
  width: 500px;
  margin: auto;
  /* border: 1px solid rgb(238, 238, 238); */
  padding: 50px;
  text-align: center;
  border-radius: 5px;
  /* box-shadow: 1px 1px 1px rgb(221, 221, 221); */
  margin-bottom: 50px;
}
input:focus {
  outline: 0 !important;
  border: 0px !important;
  box-shadow: 0px !important;
}
input {
  margin-bottom: 20px !important;
  border-radius: 25px;
  height: 45px;
  border: 1px solid rgb(224, 224, 224);
  box-shadow: 1px 1px 1px rgb(224, 224, 224);
}
.header-text {
  text-align: center;
  margin-bottom: 40px !important;
}
.seo {
  margin-bottom: 50px;
}
</style>