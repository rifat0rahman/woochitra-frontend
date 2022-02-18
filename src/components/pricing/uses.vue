<template>
  <div class="containers">
    <div class="sidebar">
      <sidebarVue />
    </div>
    <div class="dash">
      <div class="col-container">
        <div class="col1">
          <b>Basic Image Downloaded</b>
          <h4></h4>
          <p>
            <span class="rem">{{ status.basic_image_count }} times</span>
          </p>
        </div>
        <div class="col2">
          <b>Basic Image Download Remaining</b>
          <h4></h4>
          <span class="rem">{{ status.basic_credits }} times</span>
        </div>
        <div class="col2">
          <b>Premium Image Downloaded</b><br />
          <p></p>
          <span class="rem">{{ status.premium_image_count }} times</span>
        </div>
        <div class="col2">
          <b>Premium Image Download Remaining</b>
          <h4></h4>
          <span class="rem">{{ status.premium_credits }} times</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import sidebarVue from "../DeshboardCont/sidebar.vue";
import { base } from "../../main";

export default {
  components: {
    sidebarVue,
  },
  data() {
    return {
      status: null,
    };
  },
  mounted() {
    const token = this.$cookies.get("token");
    axios.get(`${base}consumers`).then((data) => {
      const consumer = data.data.filter((user) => user.user == token)[0]
      this.status = consumer
      
    });
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
.col2 span {
  color: rgb(255, 102, 0);
  font-size: 19px;
}
.col2 h4 {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 15px;
  margin-top: 15px;
}
.col2 b {
  font-size: 20px;
}

.col2 img {
  width: 60px;
  float: right;
}
.col1 span {
  color: rgb(255, 106, 6);
}
.col1 h4 {
  font-size: 32px;
  margin: 10px;
  font-weight: bold;
}
.col1 b {
  font-size: 20px;
}
.col1 img {
  width: 60px;
  float: right;
  margin: 20px;
}
.col1,
.col2,
.col3 {
  flex: 60%;
  margin: 10px;
  padding: 20px;
  border: 1px solid rgb(243, 242, 242);
  box-shadow: 1px 2px 1px rgb(206, 206, 206);
  border-radius: 15px;
  background: rgb(255, 255, 255);
}
.col-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  /* background: linear-gradient(87deg, #2dce89, #2dcecc) !important; */
  padding: 20px;
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
</style>