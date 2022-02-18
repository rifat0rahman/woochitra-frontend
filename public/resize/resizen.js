let percent = document.getElementById("percent");
let width = document.getElementById("width");
let height = document.getElementById("height");
let checkBox = document.getElementById("ShowWidthandHeight");
let checkBox2 = document.getElementById("ShowDimension");
let dimension = document.getElementById("dimension");

width.style.display = "none";
height.style.display = "none";

// for format changer
var pdf = new jsPDF();
let zipr = new JSZip();
var myMockContext;


// format changer
async function download(img) {
  var dl = document.createElement("a");
  document.body.appendChild(dl); // This line makes it work in Firefox.
  
  var svg = myMockContext.getSvg();

  if (window.ActiveXObject) {
    svgString = svg.xml;
  } else {
    var oSerializer = new XMLSerializer();
    svgString = oSerializer.serializeToString(svg);
  }
  dl.download = img.alt +'-picengine' + ".svg";
  dl.href = 'data:image/svg+xml;utf8,' + encodeURIComponent(svgString);
  if (files.length === 1) {
    dl.click();
  }

}


// follow up
const imgToCanvas_for_format = (width, height) => {
  const canvas = document.createElement("canvas");
  myMockContext = new C2S(width, height)
  let ctx;
  if (format === ".svg") {
    ctx = myMockContext;
  } else {
    ctx = canvas.getContext("2d");
  }

  canvas.width = width;
  canvas.height = height;

  return (image) => {
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    return canvas;
  };
};


let ImageFormatChanger = (files) => {
  function resize(file) {
    const img = new ImageObject();
    img.alt = file.name;
    img.ext = file.type;
    img.startSize = file.size;
    return load(file).then(resizeImg(img));
  }
  function resizeImg(img) {
    let image;
    return (src) => {
      return loadImg(src)
        .then((img) => {
          img.endWidth = img.naturalWidth;
          img.endHeight = img.naturalHeight;
          image = img;
          return imgToCanvas_for_format(img.endWidth, img.endHeight)(img);
        })
        .then((canvas) => {
          return resizeImages(
            canvas,
            img,
            image
          );
        })
        .then(() => {
          return {
            FileName: img.alt,
            OriginalSize: img.startSize,
            CompressedSize: img.finalSize,
          };
        });
    };
  }
  const resizeImages = (
    canvas,
    img,
    image
  ) => {
    const base64str = canvasToBase64(canvas);

    return base64str;
  };
  return Promise.all(
    files.map((file) => {
      return resize(file);
    })
  );
};





// iamge resizing..

function showWidthHeight() {
  // Get the checkbox
  // If the checkbox is checked, display the output text
  if (checkBox.checked == true) {
    width.style.display = "block";
    height.style.display = "block";
    percent.style.display = "none";
  } else {
    width.style.display = "none";
    height.style.display = "none";
    percent.style.display = "block";
  }
}

function showDimension() {
  // Get the checkbox
  // If the checkbox is checked, display the output text
  if (checkBox2.checked == true) {
    dimension.style.display = "block";
    percent.style.display = "none";
  } else {
    dimension.style.display = "none";
    percent.style.display = "block";
  }
}


let ImageResizer = (file, quality) => {
  function resize(file, quality) {

    // spinner
    var spinner = document.getElementById('spinner')
    spinner.removeAttribute('hidden')
    // spiner

    const img = new ImageObject(quality);
    img.alt = file.name;
    img.ext = file.type;
    img.startSize = file.size;
    return load(file).then(resizeImg(img));
  }
  function resizeImg(img) {
    let image;
    return (src) => {
      return loadImg(src)
        .then((img) => {
          img.endWidth = img.naturalWidth;
          img.endHeight = img.naturalHeight;
          image = img;
          return imgToCanvas(img.endWidth, img.endHeight)(img);
        })
        .then((canvas) => {
          return resizeImages(
            canvas,
            image,
            img,
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
          
          else if (format === ".svg") {
            download(img);
          }
          else {
            link.download = img.alt + "-picengine" + format;
            link.href = base64;
          }

          if (files.length === 1) {
            link.click();
          } 
          else if (files.length > 1) {
            if (format === ".pdf") {
              await zipr.file(img.alt + '.pdf', pdf.output('blob'));
            }
            else if (format == '.svg') {
              console.log('return')
            }
            else {
              await zipr.file(
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
          };

        });

    };

  }

  const resizeImages = (
    canvas,
    image,
    img,
    size,
    quality = 1,
    targetSize,
    targetQuality = 1
  ) => {
    // let canvas = document.createElement("canvas");
    let ctx = canvas.getContext("2d");
    canvas.height = canvas.width * (image.height / image.width);
    let oc = document.createElement("canvas"),
      octx = oc.getContext("2d");
    
    
    if (percent.value > 0) {
      oc.width = (image.width * percent.value) / 100;
      oc.height = (image.height * percent.value) / 100;
      
    } else if (dimension.value > 0) {
      let ratio = Math.min(dimension.value / image.width, dimension.value / image.height);
      oc.width = image.width * ratio;
      oc.height = image.height * ratio;
    } else {
      oc.width = width.value > 0 ? width.value : img.width;
      oc.height = height.value > 0 ? height.value : img.height;
    }

    if (oc.width <= 0) {
      oc.width = 2500
      oc.height = 2500
    }
    
    else {
      canvas.width = oc.width
      canvas.height = oc.height
    }
    
    octx.drawImage(image, 0, 0, oc.width, oc.height);
    octx.drawImage(oc, 0, 0, oc.width, oc.height);
    ctx.drawImage(
      oc,
      0,
      0,
      oc.width,
      oc.height,
      0,
      0,
      canvas.width,
      canvas.height
    );
    // for image compression
    const base64str = canvasToBase64(canvas, quality);
    return base64str;
  };
  return Promise.all(
    files.map((file) => {
      return resize(file, quality);
    })
  );

};


let holderr = []

let uploadr = document.getElementById("fileOpload");
uploadr.addEventListener(
  "change",
  function (e) {
    files = [...e.target.files];

    for (i in files) {
      holderr.push(files[i])    
    }
  },
  false
);


document.getElementById("btn").addEventListener("click", function()
{

  zipr = new JSZip()
  uploadr.value = null;
  const current_files = []
  names = JSON.parse(localStorage.getItem('images'))


  for (let i in holderr) {
    if (names.indexOf(holderr[i].name) !== -1){
      current_files.push(holderr[i])
    }
  }

  files = current_files

  ImageResizer(files)
  ImageFormatChanger(files)

  if (files.length > 1) {
    setTimeout(() => {
      zipr.generateAsync({ type: "blob" }).then(function (content) {
        // see FileSaver.js
        saveAs(content, "picengine.zip");
      });
    }, files.length * 1000);
    setTimeout(() => {
      // spinner
      var spinner = document.getElementById('spinner')
      spinner.setAttribute('hidden',true)
      // spiner
      zipr = []
    }, files.length * 1000);
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