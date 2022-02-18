<template>
  <div class="landing-page">
    <div class="wrappers">
      <div class="header-text">
        <!-- live text writer -->
        <div id="live-text">
          <h1>Optimize your Images.</h1>
          <h1>
            <span
              class="wrap typewrite"
              data-period="2000"
              data-type='[ "For Speed", "For Traffic", "For Revenue","For Success" ]'
            ></span>
          </h1>
          <h3 class="my-5" style="padding-top: 25px">
            Winning the SEO battle with images
          </h3>
        </div>
      </div>
      <!-- get started button -->
      <div class="started">
        <a href="/register">Get Started</a>
      </div>
      <!-- ***image slider starts from here*** -->
      <div class="slider-wrapper">
        <h1 class="slider-text">Lighter images for fast website</h1>
        <div class="top-line"></div>
        <div class="circle"></div>
        <div class="wrapper" data-aos="zoom">
          <span class="before">Before : 400kb</span>
          <span class="after">After : 101kb</span>
          <div class="images">
            <div class="img-1"></div>
            <div class="img-2"></div>
          </div>
          <div class="slider">
            <div class="drag-line">
              <span></span>
            </div>
            <input type="range" min="0" max="100" value="50" />
          </div>
        </div>
        <div class="circle"></div>
        <div class="details" data-aos="zoom">
          <div class="det-cont">
            <h1 class="top-text">Image Compressor</h1>
            <p>
              Pic Engine reduces the size of images by up to 80% without
              reducing quality. This means pages load faster, visitors consume
              more content, and you're able to serve more visitors each month.
              Get your website loading in seconds and keep your audience hooked
              by using Pic Engine to create lightweight images.
            </p>
          </div>
        </div>
      </div>
      <!-- image slider ends here -->
    </div>
  </div>
</template>


<script>
export default {
  mounted() {
    // for photo comparing
    const slider = document.querySelector(".slider input");
    const img = document.querySelector(".images .img-2");
    const dragLine = document.querySelector(".slider .drag-line");
    slider.oninput = () => {
      let sliderVal = slider.value;
      dragLine.style.left = sliderVal + "%";
      img.style.width = sliderVal + "%";
    };

    // ends here

    // for type writer
    var TxtType = function (el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = "";
      this.tick();
      this.isDeleting = false;
    };

    TxtType.prototype.tick = function () {
      var i = this.loopNum % this.toRotate.length;
      var fullTxt = this.toRotate[i];

      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

      var that = this;
      var delta = 200 - Math.random() * 100;

      if (this.isDeleting) {
        delta /= 2;
      }

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === "") {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }

      setTimeout(function () {
        that.tick();
      }, delta);
    };

    window.onload = function () {
      var elements = document.getElementsByClassName("typewrite");
      for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute("data-type");
        var period = elements[i].getAttribute("data-period");
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
      }
      // INJECT CSS
      var css = document.createElement("style");
      css.type = "text/css";
      css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
      document.body.appendChild(css);
    };

    // ends here
  },
};
</script>

<style scoped>
@media screen and (min-width: 1000px) {
  .wrappers {
    width: 1000px;
    margin: auto;
  }
}

@media screen and (max-width: 980px) {
  .wrapper {
    width: 450px !important;
  }
}
@media screen and (max-width: 940px) {
  .wrapper {
    width: 420px !important;
  }
}

@media screen and (max-width: 850px) {
  .wrapper {
    width: 380px !important;
  }
}

@media screen and (max-width: 760px) {
  .header-img {
    width: 600px !important;
    margin: auto !important;
  }
  .header-img img {
    width: 100% !important;
    margin: auto !important;
  }
  .wrapper {
    width: 600px !important;
    margin: auto;
    height: 450px !important;
    top: -20px;
  }
  .slider .drag-line {
    height: 450px !important;
  }
  .slider .drag-line::before,
  .slider .drag-line::after {
    width: 100%;
    height: 220px !important;
  }
  .det-cont {
    position: static !important;
    width: 80%;
    text-align: center !important;
    margin: auto;
  }
}

@media screen and (max-width: 660px) {
  .header-img img {
    width: 100% !important;
    margin: auto !important;
  }
  .wrapper {
    width: 500px !important;
    margin: auto;
    height: 450px !important;
    top: -20px;
  }
  .slider .drag-line {
    height: 470px !important;
  }
  .slider .drag-line::before,
  .slider .drag-line::after {
    width: 100%;
    height: 250px !important;
  }
}

@media screen and (max-width: 560px) {
  .wrapper {
    width: 450px !important;
    margin: auto;
    height: 450px !important;
    top: -50px;
    background: #000 !important;
  }
  .slider-wrapper {
    background: #000 !important;
  }
  .top-line,
  .circle {
    opacity: 0;
  }
}
/* mobile responsive */
@media screen and (max-width: 460px) {
  .slider-wrapper {
    background: #000 !important;
  }
  .wrapper {
    width: 95% !important;
    margin: auto;
    margin-top: 100px !important;
    background: #000 !important;
  }

  .top-text {
    text-align: center !important;
  }
  .header-text h1 {
    font-size: 30px !important;
  }

  .top-line,
  .circle {
    display: none;
  }
  /* mobile responsive */
  @media screen and (max-width: 460px) {
    .slider-wrapper {
      background: #000 !important;
      height: 900px !important;
    }
    .wrapper {
      width: 98% !important;
      height: 280px !important;
      margin: auto;
      margin-top: 100px !important;
      background: #000 !important;
    }
    .slider .drag-line {
      height: 280px !important;
    }
    .slider .drag-line::before,
    .slider .drag-line::after {
      width: 100%;
      height: 220px !important;
    }

    .det-cont {
      position: static !important;
      width: 100%;
      text-align: center !important;
      margin: auto;
      padding: 5px;
    }
    .det-cont h1 {
      font-size: 25px !important;
    }
    .slider-text {
      font-size: 25px !important;
    }
    .landing-page {
      padding-bottom: 10px !important;
    }
    .top-text {
      text-align: center !important;
    }
    .header-text h1 {
      font-size: 30px !important;
    }

    .top-line,
    .circle {
      display: none;
    }
  }
}
@media screen and (max-width: 400px) {
  .wrapper {
    height: 250px !important;
  }
  .det-cont p {
    font-size: 17px !important;
  }
  .slider-wrapper{
    margin-bottom:0px !important;
  }
}
/* iamg */
.det-cont {
  position: absolute;
  left: 51%;
  margin-top: -15px !important;
}
.details p {
  margin-top: 40px;
  font-size: 18px;
  color: rgb(235, 235, 235);
  line-height: 1.9rem;
}
.details h1 {
  font-size: 30px;
  margin-bottom: 30px;
}
.details {
  position: relative;
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
.top-line {
  height: 200px;
  background: linear-gradient(rgb(255, 255, 255), rgb(90, 89, 89)) no-repeat
    center/2px 100%;
}

.slider-text {
  text-align: center;
  font-size: 30px;
  font-weight: 900;
}

.started a:hover {
  color: rgb(255, 255, 255);
  background: rgb(255, 141, 35);
  transition: 0.5s ease;
}
.started a {
  text-decoration: none;
  font-size: 25px;
  color: rgb(255, 255, 255);
  padding: 15px;
  border: 1px solid rgb(255, 123, 0);
  border-radius: 25px;
  box-shadow: 1px 1px 0px 2px rgb(255, 146, 44);
  font-weight: 800 !important;
  font-family: Arial, Helvetica, sans-serif;
}
.started {
  text-align: center;
  margin-bottom: 110px;
}
.slider-wrapper {
  padding-bottom: 200px !important;
  position: relative;
  padding: 10px;
  background: linear-gradient(
      rgb(0, 0, 0),
      rgb(14, 14, 14),
      rgb(5, 5, 5),
      rgb(253, 253, 253)
    )
    no-repeat center/2px 100%;
  margin-bottom: 40px;
  height: 1050px;
}
.wrapper {
  position: relative;
  height: 350px;
  width: 480px;
  overflow: hidden;
  bottom: 30px;
}
.wrapper .images {
  height: 100%;
  width: 100%;
  display: flex;
}
.wrapper .images .img-1 {
  height: 100%;
  width: 100%;
  background: url("../images/front2.webp") no-repeat;
  background-size: cover;
}
.wrapper .images .img-2 {
  position: absolute;
  height: 100%;
  width: 50%;
  background: url("../images/front2.webp") no-repeat;
  background-size: cover;
}

.wrapper .slider {
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 99;
}
.wrapper .slider input {
  width: 100%;
  outline: none;
  background: none;
  -webkit-appearance: none;
}
.slider input::-webkit-slider-thumb {
  height: 680px;
  width: 3px;
  background: none;
  -webkit-appearance: none;
  cursor: col-resize;
}
.slider .drag-line {
  width: 3px;
  height: 350px;
  position: absolute;
  left: 49.85%;
  pointer-events: none;
}
.slider .drag-line::before,
.slider .drag-line::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 170px;
  background: #fff;
}
.slider .drag-line::before {
  top: 20px;
}
.slider .drag-line::after {
  bottom: 0;
}
.slider .drag-line span {
  height: 42px;
  width: 42px;
  border: 3px solid #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  transform: translate(-50%, -50%);
}
.slider .drag-line span::before,
.slider .drag-line span::after {
  position: absolute;
  content: "";
  top: 50%;
  border: 10px solid transparent;
  border-bottom-width: 0px;
  border-right-width: 0px;
  transform: translate(-50%, -50%) rotate(45deg);
}
.slider .drag-line span::before {
  left: 40%;
  border-left-color: #fff;
}
.slider .drag-line span::after {
  left: 60%;
  border-top-color: #fff;
}
/* imga siled */

.header-text {
  text-align: center;
  margin-top: 100px;
  padding-top: 70px;
  padding-bottom: 70px;
}
.header-text h1 {
  margin-top: 10px;
  font-size: 58px;
  padding-bottom: 20px !important;
  font-weight: 900 !important;
  font-family: Arial, Helvetica, sans-serif;
}
.header-text h3 {
  margin-top: 40px;
  line-height: 38px;
}

.before {
  color: rgb(236, 236, 236);
  font-style: italic;
  font-size: 12px;
}
.after {
  color: rgb(224, 223, 223);
  float: right;
  margin-right: 9px;
  font-style: italic;
  font-size: 12px;
  position: relative;
  top: 5px;
}
.header-img img {
  width: 100%;
}
.header-img {
  width: 900px;
  margin: auto;
  padding-bottom: 50px;
}
.landing-page {
  background-image: linear-gradient(rgb(0, 0, 0), rgb(0, 0, 0));
  color: rgb(255, 255, 255);
  padding-bottom: 100px;
}
</style>

