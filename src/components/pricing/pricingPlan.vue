<template>
  <div class="pricingPlan">
    <NavBarVue />
    <div>
      <div class="top">
        <b style="color:black"> A pricing plan that grows with your business </b>
      </div>
      <div class="price-container">
        <div class="cols">
          <b class="header-text">Solo Plan</b>
          <p>Perfect for starting with us!</p>
          <div class="price">
            <b>$6.99/m</b>
          </div>
          <div class="numprocess">
            <span><strong>WooCommerce Store</strong></span><br />
            <b>01</b><br />
            <p></p>
            <p></p>
          </div>
          <div class="button">
            <a :href="base + '28oaFD2L9fdgcH628h'" v-show="button_icon">Select Plan</a>
          </div>
        </div>

        <div class="cols">
          <b class="header-text">Freelancer Plan</b>
          <p>Always like the Standard!</p>
          <div class="price">
            <b>$16.99/m</b>
          </div>
          <div class="numprocess">
            <span><strong>WooCommerce Store</strong></span><br />
            <b>05</b><br />
            <p></p>
            <p></p>
          </div>
          <div class="button">
            <a :href="base + 'dR69Bz71p7KO7mM28g'" v-show="button_icon">Select Plan</a>
          </div>
        </div>

        <div class="cols">
          <b class="header-text">Studio Plan</b>
          <p>Make your self comfortable!</p>
          <div class="price">
            <b>$46.99/m</b>
          </div>
          <div class="numprocess">
            <span><strong>WooCommerce Store</strong></span><br />
            <b>25</b><br />
            <p></p>
            <p></p>
          </div>
          <div class="button">
            <a :href="base + '28o8xvgBZ2qubD26ov'" v-show="button_icon">Select Plan</a>
          </div>
        </div>
        <div class="cols">
          <b class="header-text">Agency Plan</b>
          <p>Make plans as per your requirements</p>
          <div class="price">
            <b>$96.99/m</b>
          </div>
          <div class="numprocess">
            <span><strong>WooCommerce Store</strong></span><br />
            <b>100</b><br />
            <p></p>
            <p></p>
          </div>
          <div class="button">
            <a :href="base + 'dR69Bz2L97KO22s4gm'" v-show="button_icon">Select Plan</a>
          </div>
        </div>
      </div>
    </div>
    <div class="skip">
      <a href="/dashboard">{{error}}</a>
    </div>
  </div>
</template>

<script>
import NavBarVue from "../mine/NavBar.vue";

export default {
  components: {
    NavBarVue,
  },
  data() {
    return {
      base: 'https://buy.stripe.com/',
      error: null,
      button_icon: true,
    };
  },
  mounted() {
    const token = this.$cookies.get("token");
    if (!token) {
      this.error = "Get Started";
      this.button_icon = false;
    }
    else{
      this.error = 'Have a license'
    }
  },
};
</script>

<style scoped>
@media screen and (min-width: 1000px) {
  .pricingPlan {
    width: 1000px !important;
    margin: auto;
  }
}

@media screen and (max-width: 800px) {
  .cols {
    flex:40% !important;
    margin-left: 10px !important;
    margin-right: 10px !important;
  }
  .top {
    width: 400px !important;
  }
  .top b {
    font-size: 28px !important;
  }
}
@media screen and (max-width: 600px) {
  .cols {
    flex: 70% !important;
    margin-left: 50px !important;
    margin-right: 50px !important;
  }
  .top {
    width: 400px !important;
  }
  .top b {
    font-size: 28px !important;
  }
}
@media screen and (max-width: 460px) {
  .skip a{
    font-size: 13px !important;
  }
  .top {
    width:100% !important;
    padding: 5px !important;
  }
  .top b {
    font-size: 28px !important;
  }
  .top h4{
    margin-top: 30px !important;
  }
}


.skip a{
  border: 1px solid rgb(191, 95, 255);
  padding: 15px;
  text-decoration: none;
  color: rgb(255, 255, 255);
  border-radius: 25px;
  font-size:18px;
  background: linear-gradient(rgb(205, 130, 255), rgb(139, 55, 248));
}
.skip{
  text-align: center;
  margin:50px;
  margin-bottom: 150px;
}

.top h4 {
  font-size: 22px;
  margin-top: 10px;
}
.top b {
  font-size: 35px;
  font-family: arial;
}
.top {
  width: 660px;
  margin: auto;
  text-align: center;
  padding-top: 40px !important;
  margin-bottom: 50px;
}
.header-text {
  color: rgb(191, 95, 255);
  font-size: 25px !important;
  font-family: arial;
}
.cols p {
  font-size: 18px;
  margin: 20px;
}
.button {
  margin-top: 40px;
  margin-bottom: 20px;
}
.button a {
  background: linear-gradient(rgb(205, 130, 255), rgb(139, 55, 248));
  color: white;
  padding:13px;
  font-size: 18px;
  border-radius: 25px;
  text-decoration: none;
  font-size:18px;
}
.numprocess b {
  padding: 20px !important;
  font-size: 20px !important;
}
.cols .price b {
  font-size: 35px !important;
  position: relative;
  top: 30%;
}
.cols .price {
  padding: 5px;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 90px;

  /* background: linear-gradient(rgb(253, 187, 65), rgb(255, 145, 0)); */
  /* box-shadow: 2px 2px 2px rgb(223, 222, 222); */
}
.cols b {
  font-size: 20px;
}
.cols {
  width: 100px;
  flex:20%;
  margin: 5px;
  text-align: center;
  border: 1px solid rgb(230, 230, 230);
  padding:20px;
  border-radius: 15px;
  box-shadow: 2px 2px 1px whitesmoke;
}
.price-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.pricingPlan {
  margin-top: 110px;
  margin-bottom: 100px;
}
</style>