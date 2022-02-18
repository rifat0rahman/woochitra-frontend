let zip = new JSZip();
let files;
let promises = [];
var pdf = new jsPDF();

class ImageObject {
  constructor(quality) {
    this.alt = null;
    this.ext = null;
    this.startSize = null;
    this.size = 4 * 1000 * 1000;
    this.finalSize = null;
    this.quality = quality;
    this.maxWidth = 1920;
    this.maxHeight = 1920;
  }
}


// my func
async function add_image(name) {
  let names = JSON.parse(localStorage.getItem('images'))

  
  let el = document.getElementById(name)

  const if_exists = names.includes(name)
  let index = names.indexOf(name)

  if (if_exists == true){
    names.splice(index,1)
    localStorage.setItem('images',JSON.stringify(names))
    el.style.border = 'none'
  }
  else{
    names.push(name)
    localStorage.setItem('images',JSON.stringify(names))
    el.style.border = '1px solid skyblue'
  }


}


function delete_img(name) {
  let names = JSON.parse(localStorage.getItem('images'))


  let container = document.getElementById('canvas')
  // reload if this is the last
  if (container.childNodes.length == 1){
    window.location.reload()
  }

  let parent = document.getElementById(`parent${name}`)
  let button = document.getElementsByName(name)
      button[0].style.display = 'none';

    container.removeChild(parent)
    

  let index = names.indexOf(name)
  names.splice(index,1)
  localStorage.setItem('images',JSON.stringify(names))
}
// my func



let format = document.getElementById("format").value;
const changeFormat = (e) => {
  format = e.value;
  if (format == '.svg'){
    var svgerror = document.getElementById('svgerror')
    svgerror.innerHTML = '*Note:- only one image processes at a time'
  }
  else{
    var svgerror = document.getElementById('svgerror')
    svgerror.innerHTML = ''
  }
};

const sizebase64 = (base64) => {
  const len = base64.replace(/^data:image\/\w+;base64,/, "").length;
  return (len - 814) / 1.37;
};

const mime = (base64) => {
  return base64.split(";")[0].match(/jpeg|png|gif/)[0];
};

const data = (base64) => {
  return base64.replace(/^data:image\/\w+;base64,/, "");
};

const base64ToFile = (base64, mime = "image/jpeg") => {
  const byteString = window.atob(base64);
  const content = [];
  for (let i = 0; i < byteString.length; i++) {
    content[i] = byteString.charCodeAt(i);
  }
  return new window.Blob([new Uint8Array(content)], { type: mime });
};

const imgToCanvas = (width, height) => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = width;
  canvas.height = height;

  return (image) => {
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    return canvas;
  };
};

const canvasToBase64 = (canvas, quality = 0.75) => {
  const base64 = canvas.toDataURL("image/jpeg", quality);
  return base64;
};

const load = (file) => {
  return new Promise((resolve) => {
    const fileReader = new window.FileReader();
    fileReader.addEventListener(
      "load",
      (e) => {
        resolve(e.target.result);
      },
      false
    );
    fileReader.readAsDataURL(file);
  });
};

const loadImg = (src) => {
  return new Promise((resolve) => {
    const img = new window.Image();
    img.addEventListener(
      "load",
      () => {
        resolve(img);
      },
      false
    );
    img.src = src;
  });
};


let ImageCompressor = (file, quality) => {
  function compress(file, quality) {

  // spinner
  var spinner = document.getElementById('spinner')
  spinner.removeAttribute('hidden')
  // spiner

    const img = new ImageObject(quality);
    img.alt = file.name;
    img.ext = file.type;
    img.startSize = file.size;
    return load(file).then(compressImg(img));
  }
  function compressImg(img) {
    return (src) => {
      return loadImg(src)
        .then((img) => {
          img.endWidth = img.naturalWidth;
          img.endHeight = img.naturalHeight;
          return imgToCanvas(img.endWidth, img.endHeight)(img);
        })
        .then((canvas) => {
          return loopCompression(
            canvas,
            img.startSize,
            img.quality,
            img.size,
            img.minQuality
          );
        })
        .then(async (base64) => {
          img.finalSize = sizebase64(base64);
          let link = document.createElement("a");

          if (format === ".pdf") {
            pdf.addImage(base64, 'JPEG', 0, 0, 210, 190);
            if (file.length === 1) {
              pdf.save(img.alt + "-picengine" + format)
            }
          }

          else{
            link.download = img.alt + "-picengine" + format;
          }

          link.href = base64;
          if (files.length === 1) {
            link.click();
          }
          
          else if (files.length > 1) {
            
            if (format === ".pdf") {
              await zip.file(img.alt + '.pdf', pdf.output('blob'));
            }

            else{
              await zip.file(
                img.alt + "-picengine" + format,
                base64.split("base64,")[1],
                { base64: true }
              );
            }

          }

          // link.click()
          return data(base64);
        })
        .then(() => {
          return {
            FileName: img.alt,
            OriginalSize: img.startSize,
            CompressedSize: img.finalSize,
            ext: img.ext,
            quality: img.quality,
            ReducedSize:
              ((img.startSize - img.finalSize) / img.startSize) * 100,
          };
        });
    };
  }
  const loopCompression = (
    canvas,
    size,
    quality = 1,
    targetSize,
    targetQuality = 1
  ) => {
    const base64str = canvasToBase64(canvas, quality);
    const newSize = sizebase64(base64str);
    if (newSize > targetSize) {
      return loopCompression(
        canvas,
        newSize,
        quality - 0.1,
        targetSize,
        targetQuality
      );
    }

    if (quality > targetQuality) {
      return loopCompression(
        canvas,
        newSize,
        quality - 0.1,
        targetSize,
        targetQuality
      );
    }

    if (quality < 0.25) {
      return base64str;
    }
    return base64str;
  };
  return Promise.all(
    files.map((file) => {
      return compress(file, quality);
    })
  );
};


let quality = parseFloat(document.getElementById("select").value);
const changeQuality = (e) => {
  quality = parseFloat(e.value);
};


// downalod things
let holder = []

const upload = document.getElementById("upload");
const compressbtn = document.getElementById("compressbtn");
upload.addEventListener(
  "change",
  function (e) {
    files = [...e.target.files];

    for (i in files) {
      holder.push(files[i])    
    }
  },
  false
);




compressbtn.addEventListener("click", async function () {

  zip = new JSZip()
  upload.value = null;
  const current_files = []
  names = JSON.parse(localStorage.getItem('images'))

  console.log(holder)
  for (let i in holder) {
    if (names.indexOf(holder[i].name) !== -1){
      current_files.push(holder[i])
    }
  }

  files = current_files

  ImageCompressor(files, quality);


  if (files.length > 1) {
    setTimeout(() => {
      zip.generateAsync({ type: "blob" }).then(function (content) {
        // see FileSaver.js
        saveAs(content, "picengine.zip");
      });
    }, files.length * 500);
    setTimeout(() => {
      // spinner
      var spinner = document.getElementById('spinner')
      spinner.setAttribute('hidden',true)
      // spiner
      zip = []
    }, files.length * 500);
  }
  
  else {
    setTimeout(() => {
      // spinner
      var spinner = document.getElementById('spinner')
      spinner.setAttribute('hidden',true)
      // spiner
    }, files.length * 100);
  }

});
