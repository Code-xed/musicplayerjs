// https://github.com/mikolalysenko/drag-and-drop-files
import getMetaData from './id3tag.js';
import * as jsm from './jsmediatags.min.js';

function killEvent(e) {
  e.stopPropagation()
  e.preventDefault()
  return false
}
async function showMetaData(data) {
  let songurl = URL.createObjectURL(data);
  let song = document.getElementById("song");
  song.src = songurl;
  getMetaData(data);
 // console.log(mdata);
}
function showhMetaData(data) {
  console.log(data);
  let songurl = URL.createObjectURL(data);
  let song = document.getElementById("song");
  song.src = songurl;
  getMetaData(data, function(err, result) {
    if (err) throw err;
    console.log(result);
    if (result.picture) {
      var picture = result.picture[0];
      var url = URL.createObjectURL(new Blob([picture.data], { 'type': 'image/' + picture.format }));
      var image = document.getElementById('myimg');
      image.src = url;
    }
    /*
    var div = document.getElementById('info');
    div.innerText = JSON.stringify(result, undefined, 2);*/
  });
}

function handleFilePick(event) {
  let file = event.currentTarget.files[0];
  showMetaData(file);
  killEvent(event);
}

document.querySelector("#filepick").addEventListener("change", handleFilePick);
/*
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  var url = document.querySelector("input").value;
  var xhr = new XMLHttpRequest();
  xhr.responseType = "arraybuffer";
  xhr.open("get", url, true);
  xhr.onload = function(e) {
    showMetaData(e.target.response);
  }
  xhr.send();
});
*/
console.log('Hello World!');

