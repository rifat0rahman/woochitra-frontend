<template>
  <div class="footer">
      <div class="footer-container">
          <div class="cols">
              <img src="../images/logo-png.png" alt="">
          </div>
          <div class="cols">
              <h1>Legal</h1>
              <a href="/picengine-tos">Terms of service</a><br>
              <a href="/privacy-policy">Privacy policy</a><br>
          </div>
          <div class="cols">
              <h1>Community</h1>
              <a href="">Facebook </a><br>
              <!-- <a href="">Twitter</a><br> -->
              <a href="">Linkedin</a>
          </div>
          <div class="cols">
              <h1>Product </h1>
              <a href="/pricing-plan">Pricing</a><br>
              <a href="/contact-us">Help center</a>
          </div>
      </div>
      <div class="footer-footer">
          <hr>
          <b>Copyright © 2021 Satak Support All rights reserved.</b>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@media screen and (max-width:850px) {
  .cols{
    flex:100% !important;
    margin: 0px !important;
    margin-bottom: 10px !important;
}
}
.footer-footer{
    text-align:center;
    padding: 5px;
    color: rgb(83, 83, 83);
}
.cols h1{
    margin-bottom:20px;
    font-weight: bolder;
    color: rgb(14, 14, 14);
    font-size: 23px;
}
.cols a:hover{
    color: rgb(228, 137, 0);
    transition: 0.2s ease;
}
.cols a{
    color: rgb(88, 88, 88);
    text-decoration: none;
    font-size:19px;
    line-height: 2;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 500 !important;
}
.cols img{
    width:180px;
}
.cols{
    flex:20%;
    margin:20px;
}
.footer-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 50px;
}
.footer{
    background: rgb(243, 243, 243);
}
</style>