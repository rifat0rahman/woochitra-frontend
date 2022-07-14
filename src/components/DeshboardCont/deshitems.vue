<template>
  <div>
    <div class="current">
      <h2>Current Status</h2>
    </div>
    <div class="col-container">
      <div class="col1">
        <img src="../../images/gears.png" alt="" /><br />
        <b>Your Plan</b>
        <h4>{{ status.account_type }}</h4>
      </div>
      <div class="col2">
        <img src="../../images/package.png" alt="" /><br />
        <b>Token Remains</b>
        <h4 v-if="accounttype == null">{{ status.token_credits }} </h4>
        <h1 class="display-1" v-else>∞</h1>
      </div>
      <div class="col3">
        <img src="../../images/high-quality.png" alt="" /><br />
        <b v-show="status.status == 'licensed'">Type</b><br>
        <b v-if="status.status == 'licensed'"> Licensed </b>
        <b class="display-1" v-else>Not licensed </b>
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
      status: null,
      available: null,
      accounttype:null,
    };
  },
  mounted() {
    const token = this.$cookies.get("token");
    axios.get(`${base}consumers`).then((data) => {
      const consumer = data.data.filter((user) => user.user == token)[0];
      this.status = consumer;

      if (consumer.account_type == 'Unlimited'){
        this.accounttype = consumer.account_type
      }
    });
  },
};
</script>

<style scoped>
@media screen and (max-width: 700px) {
  .col1,
  .col2,
  .col3 {
    flex: 100% !important;
  }
}
@media screen and (max-width:460px) {
  .col1,
  .col2,
  .col3 {
    margin: 0px !important;
    padding: 0px !important;
    margin-bottom: 50px !important;
  }
  
}

.current h2{
  font-weight: 900;
}
.current {
  text-align: center;
  margin-top:80px;
}
.col3 img {
  width: 70px;
  margin-bottom: 20px;
}
.col3 h4 {
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 15px;
  margin-top: 15px;
}

.col2 h4 {
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 15px;
  margin-top: 15px;
}
.col3 b {
  font-size: 20px;
}
.col2 b {
  font-size: 20px;
}

.col2 img {
  width: 70px;
}
.col1 span {
  color: rgb(255, 106, 6);
}
.col1 h4 {
  font-size: 28px;
  font-weight: bold;
  margin-top: 20px;
}
.col1 b {
  font-size: 20px;
}
.col1 img {
  width: 70px;
  margin-bottom: 10px;
}
.col1,
.col2,
.col3 {
  flex: 30%;
  margin: 10px;
  padding: 20px;
  border: 1px solid rgb(243, 242, 242);
  box-shadow: 1px 2px 1px rgb(206, 206, 206);
  border-radius: 15px;
  background: rgb(255, 255, 255);
  text-align: center;
}
.col-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  /* background: linear-gradient(87deg, #2dce89, #2dcecc) !important; */
  padding: 20px;
}
</style>