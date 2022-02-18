<template>
  <div class="hello">
    <div class="containers">
      <div class="">
        <div class="upload-image">
          <label class="file-upload-logo" for="upload">
            <img src="../images/file-upload.png" alt="" class="file-log" />
          </label>
          <input
            type="file"
            id="upload"
            multiple
            data-show-upload="true"
            data-show-caption="true"
            @change="onFileChange"
            hidden
          />
        </div>
        <!-- preivew img -->
        <div class="ds" v-if="images.length > 1">
          <button @click="select_all()" id="select_all"><i class="fas fa-plus"></i> all</button>
          <button @click="delete_all()" id="remove_all">
            <i class="fas fa-trash-alt"></i> all
          </button>
        </div>

        <!-- mult files -->
        <div class="mult-img">
          <div class="mult-preview">
            <div id="canvas"></div>
          </div>
        </div>
        <div class="limit">
          <p>{{ limit }}</p>
        </div>
        <!-- preview img  -->

        <div class="compress-grp">
          <label for="sel1" class="compress-label"
            >Select Quality For Image Compression:</label
          ><br />
          <select
            class="compress-qu"
            onchange="changeQuality(this)"
            id="select"
          >
            <option value="0.85">Light</option>
            <option value="0.75">Normal</option>
            <option value="0.50">Aggressive</option>
            <option value="0.25">Ultra</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      seleted: true,
      images: [],
      names: [],
      limit: "",
      canvas: null,
      canvases: [],
    };
  },
  mounted() {
    localStorage.setItem("images", JSON.stringify(this.names));
  },
  methods: {
    async onFileChange(e) {
      let vm = this;
      vm;
      var selectedFiles = e.target.files;

      for (let i = 0; i < selectedFiles.length; i++) {
          setTimeout(() => {
          if (this.images.length == 20) {
            this.limit = "Reached the limit";
            return;
          }
          this.images.push(selectedFiles[i]);
        });
      }
      

      // canvas
      for (let i = 0; i < selectedFiles.length; i++) {
        if (i < 20) {
          setTimeout(() => {
            var container = document.getElementById('canvas')
            // parent div
            var parentDiv = document.createElement('div')
                parentDiv.id = `parent${selectedFiles[i].name}`

            // canvas size
            var myCanvas = document.createElement("canvas");
            myCanvas.width = "128";
            myCanvas.height = "128";

            // delte button
            var button = document.createElement("i");
            button.setAttribute("class", "fas fa-minus-circle");
            button.setAttribute("name", `${selectedFiles[i].name}`);
            button.setAttribute(
              "onclick",
              `delete_img('${selectedFiles[i].name}')`
            );

            button.style.position = "relative";
            button.style.left = "16px";
            button.style.top = "-132px";
            button.style.cursor = "pointer";
            
            button.style.visibility = "hidden";

            parentDiv.appendChild(button)
            parentDiv.appendChild(myCanvas)
            

            setTimeout(() => {
              button.style.visibility = "visible";
            }, selectedFiles.length * 100);
            // delete button
            // responsive
            var x = window.matchMedia("(max-width:460px)");
            if (x.matches) {
              myCanvas.width = "100";
              myCanvas.height = "100";
              button.style.top = "-110px";
            }


            var ctx = myCanvas.getContext("2d");

            myCanvas.style.margin = "10px";
            myCanvas.style.border = "0px solid black";

            myCanvas.setAttribute("id", selectedFiles[i].name);
            myCanvas.setAttribute(
              "onclick",
              `add_image('${selectedFiles[i].name}')`
            );

            // push the data to the iamges
            this.names.push(selectedFiles[i].name);
            localStorage.setItem("images", JSON.stringify(this.names));
            myCanvas.style.border = "1px solid skyblue";
            this.seleted = false

            // push the data to the images

            var img = new Image();

            img.onload = async function () {
              ctx.drawImage(img, 0, 0, myCanvas.width, myCanvas.height);
              myCanvas.toDataURL("image/jpeg");
            };

            // this.canvases.push(myCanvas)

            img.src = URL.createObjectURL(selectedFiles[i]);
            container.appendChild(parentDiv);
          });
        } else {
          return;
        }
      }

      // canvas

      for (let i = 0; i < this.images.length; i++) {
        let reader = new FileReader();
        reader.onload = (e) => {
          e;
          this.$refs.image[i].src = reader.result;
        };

        reader.readAsDataURL(this.images[i]);
      }
    },

    delete_all() {
      this.limit = "";
      let items = document.getElementById("canvas");
      items.innerHTML = "";
      this.names = [];
      this.images = [];
      this.demo_name = [];
      localStorage.setItem("images", JSON.stringify(this.names));
    },

    select_all() {
      let nodes = document.getElementById("canvas").childNodes;
      if (this.seleted == true) {
        for (let i in this.images) {
          this.names.push(this.images[i].name);
        }
        localStorage.setItem("images", JSON.stringify(this.names));
        this.seleted = false;

        
        // give canvas a selection idea
        for (var j = 0; j < nodes.length; j++) {
          if (nodes[j].id != "") {
            nodes[j].childNodes[1].style.border = "1px solid skyblue";
          }
        }
      } else {
        this.names = [];
        localStorage.setItem("images", JSON.stringify(this.names));
        this.seleted = true;

        // give canvas a selection idea
        for (var i = 0; i < nodes.length; i++) {
          nodes[i].childNodes[1].style.border = "none";
        }
      }
    },
  },
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media screen and (max-width: 460px) {
  .upload-image {
    width: 100% !important;
    text-align: center;
  }
  .compress-grp {
    width: 80% !important;
  }
  .file-log {
    width: 100px !important;
    position: static !important;
    margin: auto;
  }
}

#canvas {
  margin: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.dl-btn {
  font-size: 35px !important;
  margin-left: 30px;
}
.limit {
  text-align: center;
  color: red;
}
.ds button {
  padding: 10px;
  border-radius: 20px;
  margin: 10px;
  width: 100px;
  border: 2px solid white;
  background: linear-gradient(rgb(255, 166, 0), #c76f03);
}
.ds {
  margin-top: 40px;
  text-align: center;
  font-size: 15px;
}
#canvas {
  text-align: center;
}
.delete {
  position: relative;
  top: 25px;
  background: rgb(255, 255, 255);
  border-radius: 90px;
  left: 2px;
  font-weight: bold;
  color: black !important;
  font-size: 20px;
}
.exist img {
  width: 150px;
  height: 140px;
  object-fit: cover;
  margin: 10px;
  flex: 20%;
  border: 1px solid rgb(0, 183, 255);
}

.mult-img {
  display: flex;
  flex-wrap: wrap;
  margin: 10px;
  justify-content: space-around;
}

.prv-img img {
  width: 100%;
}
.prv-img {
  width: 200px;
  margin: auto;
  margin-top: 20px;
  cursor: pointer;
}

.file-log {
  width: 100px;
  position: relative;
  left: 140px;
}
.compress-qu:focus {
  outline: 0;
}
.compress-qu {
  width: 100%;
  height: 45px;
  border-radius: 15px;
  padding: 5px;
  border: 1px solid rgb(223, 223, 223);
  box-shadow: 1px 1px 1px rgb(221, 221, 221);
}
.compress-grp {
  margin-top: 50px !important;
  width: 400px;
  margin: auto;
}
.upload-image {
  width: 400px;
  margin: auto;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
