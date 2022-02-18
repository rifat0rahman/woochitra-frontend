// var pdf = new jsPDF();
// var myMockContext;


// async function download(img) {
//   var dl = document.createElement("a");
//   document.body.appendChild(dl); // This line makes it work in Firefox.
//   var svg= myMockContext.getSvg();
//   if (window.ActiveXObject) {
//       svgString = svg.xml;
//   } else {
//       var oSerializer = new XMLSerializer();
//       svgString = oSerializer.serializeToString(svg);
//   }
//   dl.download = img.alt + ".svg";
//   //   return "data:image/svg+xml," + encodeURIComponent(svgAsXML);
//   dl.href='data:image/svg+xml;utf8,' + encodeURIComponent(svgString);
//   if(files.length === 1)
//   {
//     dl.click();
//   }
// }

// // follow up
// const imgToCanvas_for_format = (width, height) => {
//   const canvas = document.createElement("canvas");
//   myMockContext = new C2S(width,height)
//   let ctx;
//   if(format === ".svg")
//   {
//     ctx = myMockContext;
//   }else{
//     ctx = canvas.getContext("2d");
//   }

//   canvas.width = width;
//   canvas.height = height;

//   return (image) => {
//     ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
//     return canvas;
//   };
// };


// let ImageFormatChanger = (file) => {
//   function resize(file) {
//     const img = new ImageObject();
//     img.alt = file.name;
//     img.ext = file.type;
//     img.startSize = file.size;
//     return load(file).then(resizeImg(img));
//   }
//   function resizeImg(img) {
//     let image;
//     return (src) => {
//       return loadImg(src)
//         .then((img) => {
//           img.endWidth = img.naturalWidth;
//           img.endHeight = img.naturalHeight;
//           image = img;
//           return imgToCanvas_for_format(img.endWidth, img.endHeight)(img);
//         })
//         .then((canvas) => {
//           //console.log(image)
//           return resizeImages(
//             canvas,
//             img,
//             image
//           );
//         })
//         // .then(async (base64) => {
//         //   img.finalSize = sizebase64(base64);
//         //   let link = document.createElement("a");
//         //   if(format === ".pdf")
//         //   {
//         //     pdf.addImage(base64, 'JPEG', 0, 0, 210, 190);
//         //     if(file.length === 1)
//         //     {
//         //       pdf.save(img.alt + "-awkward110" + format)
//         //     }
//         //   }
//         //   else if(format === ".svg")
//         //   {
//         //     download(img);
//         //   }
//         //   else{
//         //   link.download = img.alt + "-awkward110" + format;
//         //   link.href = base64;
//         //   }
//         //   // link.innerText = "Download Image"
//         //   // link.className = "btn btn-success";
//         //   // let container = document.getElementById("link-container")
//         //   // container.appendChild(link)
//         //   if (files.length === 1) {
//         //     link.click();
//         //   } else if (files.length > 1) {
//         //     if(format === ".pdf")
//         //     {
//         //       await zip.file(img.alt + '.pdf', pdf.output('blob'));
//         //     }
//         //     else{
//         //     await zip.file(
//         //       img.alt + "-awkward110" + format,
//         //       base64.split("base64,")[1],
//         //       { base64: true }
//         //     );
//         //   }
//         // }
//         //   // link.click()
//         //   return data(base64);
//         // })
//         .then(() => {
//           return {
//             FileName: img.alt,
//             OriginalSize: img.startSize,
//             CompressedSize: img.finalSize,
//           };
//         });
//     };
//   }
//   const resizeImages = (
//     canvas,
//     img,
//     image
//   ) => {
//     const base64str = canvasToBase64(canvas);

//     return base64str;
//   };
//   return Promise.all(
//     files.map((file) => {
//       return resize(file);
//     })
//   );
// };


// const formatbtn = document.getElementById("formatbtn");
// upload.addEventListener(
//   "change",
//   function (e) {
//     files = [...e.target.files];
//   },
//   false
// );

