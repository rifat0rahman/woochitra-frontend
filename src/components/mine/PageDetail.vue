<template>
  <div class="pagedetails">
    <div class="snap">
      <!-- first section -->
      <div class="meta-data">
        <div class="leading">
          <p>Make your images go viral</p>
        </div>
        <div class="line"></div>
        <div class="circle"></div>
        <!-- <div class="bottom-text">
          <p>works fine</p>
        </div> -->
      </div>
      <div class="containers">
        <div class="cols-one" data-aos="zoom">
          <img src="../images/Image Resize - Pic Engine.webp" alt="" />
        </div>
        <div class="circle"></div>

        <div class="details-section" data-aos="zoom">
          <div class="lay-text">
            <p class="header">Image metadata updater</p>
            <p class="details">
              If it's the pictures that make your product stand out, be sure
              they're up to date. Pic Engine will automatically update all your
              images with current information. With our Image Metadata Updater,
              you can easily update the copyright year, title, keywords, and
              other necessary changes for better rankings.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- second section -->
    <!-- section -->
    <div class="snap">
      <!-- first section -->
      <div class="meta-data">
        <div class="leading">
          <p>Keep your pictures in perfect proportions</p>
        </div>
        <div class="line"></div>
        <div class="circle"></div>
        <!-- <div class="bottom-text">
          <p>works fine</p>
        </div> -->
      </div>
      <div class="containers">
        <div class="cols-one" data-aos="zoom">
          <img src="../images/Image Metadata Update - Pic Engine.webp" alt="" />
        </div>
        <div class="circle">
        </div>
        <div class="details-section" data-aos="zoom">
          <div class="lay-text">
            <p class="header">Image Resizer</p>
            <p class="details">
              You know how it's hard to find a decent-quality image that's not
              too big? With Pic Engine, you'll never have to worry about that
              problem again. Just upload the image and let us resize it for you!
              With PicEngine you don't need to worry about awkwardly cropped
              images on your site. The web has long been plagued with these
              issues, but we're here to solve them for you!
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- second section -->
    <div class="snap">
      <!-- first section -->
      <div class="meta-data">
        <div class="leading">
          <p>Converts images to the most compatible formats</p>
        </div>
        <div class="line"></div>
        <div class="circle"></div>
        <!-- <div class="bottom-text">
          <p>works fine</p>
        </div> -->
      </div>
      <div class="containers">
        <div class="cols-one" data-aos="zoom">
          <img src="../images/Image Format Change - Pic Engine.webp" alt="" />
        </div>
        <div class="circle"></div>

        <div class="details-section" data-aos="zoom">
          <div class="lay-text">
            <p class="header">Image Format Changer</p>
            <p class="details">
              You know that feeling when you visit a website and you have to
              wait for the page to load, like a turtle? Or worse, the images
              don't even show up? Pic Engine is here to save the day. WiFth just
              one click, it downloads image's format from JPEG to PNG and even
              WebP, so you can see everything right away.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- testing code -->

    <!-- testing code -->
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@media screen and (min-width: 1000px) {
  .snap {
    width: 1000px;
    margin: auto;
  }
}
@media screen and (max-width: 850px) {
  .lay-text {
    width: 350px !important;
    margin: 0px;
  }
  .containers img {
    width: 45% !important;
    margin: 0px;
  }
}
@media screen and (max-width: 750px) {
  .lay-text {
    position: static !important;
    text-align: center !important;
    margin: auto !important;
    width: 80% !important;
  }

  .containers img {
    width: 90% !important;
    margin: auto;
    top: 0px;
  }

}
@media screen and (max-width: 460px) {
  .line,
  .circle {
    display: none;
  }
  .containers {
    background: #000 !important;
  }
  .details-section {
    margin-top: 80px !important;
  }
  .lay-text{
    padding:5px;
    width: 100% !important;
  }
  .lay-text p{
    font-size: 17px  !important;
  }
  .lay-text .header{
    font-size: 25px !important;
  }
  .leading{
    font-size: 25px !important;
  }
}

.before {
  color: rgb(255, 255, 255);
}
.after {
  color: rgb(255, 255, 255);
  float: right;
  margin-right: 5px;
}

/* testing code */
.bottom-text {
  color: rgb(214, 214, 214);
  font-size: 18px;
  font-family: serif;
}
.circle {
  width: 30px;
  height: 30px;
  border: 1px solid rgb(255, 255, 255);
  margin: auto;
  margin-top: 2px;
  border-radius: 90px;
  z-index: 9;
}
.line {
  height:200px;
  background: linear-gradient(rgb(255, 255, 255), rgb(90, 89, 89)) no-repeat
    center/2px 100%;
}
.leading {
  font-size: 22px;
  font-weight: 900;
  font-size: 30px;
}
.meta-data {
  text-align: center;
}
/* testing code */

.cols-two p {
  font-size: 22px;
  line-height: 1.5;
}
.cols-two h1 {
  font-weight: bolder;
  font-size: 38px;
  margin-bottom: 15px;
  font-size: 52px;
  font-family: arial;
}
.details {
  margin-top: 40px;
  font-size:18px;
  color: rgb(235, 235, 235);
  line-height: 1.9rem;
}
.details-section {
  position: relative;
}
.lay-text {
  position: absolute;
  width: 400px;
  left: 50%;
  top: -20px;
  margin-left: 10px;
  font-size: 30px;
}
.containers .cols-one img {
  width: 50%;
  z-index: -10 !important;
  padding-left: 10px;
  border-radius: 10px;
  position: relative;
  bottom: 10px;
  padding: 5px;
}
.containers .cols-two {
  flex: 1;
}
.containers .cols-one {
  flex: 2;
}
.containers {
  height: 700px;
  align-content: center;
  position: relative;
  background: linear-gradient(rgb(0, 0, 0), rgb(39, 39, 39), rgb(255, 255, 255))
    no-repeat center/2px 100%;

  padding-bottom: 20px !important;
}
.snap {
  padding-top:0px;
  padding-bottom:100px;
}
.pagedetails {
  background: #000000;
  color: white !important;
  padding-bottom: 80px;
}
</style>