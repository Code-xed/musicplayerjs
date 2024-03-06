async function getMetaData(file) {
  // data: ArrayBuffer, File or DataView
  //let fileBA = await fileToByteArray(file);
  //return fileBA;
  console.log("fucj");
}

function fileToByteArray(file) {
  return new Promise((resolve, reject) => {
    try {
      let reader = new FileReader();
      let fileByteArray = [];
      reader.readAsArrayBuffer(file);
      reader.onloadend = (evt) => {
        if (evt.target.readyState == FileReader.DONE) {
          let arrayBuffer = evt.target.result;
          let arrayeight = new Uint8Array(arrayBuffer);
          for (let byte of arrayeight) {
            fileByteArray.push(byte);
          }
        }
        resolve(fileByteArray);
      }
    }
    catch (e) {
      reject(e);
    }
  })
}

export default getMetaData;