
//this code change my h1 in hello world


let myImage = document.querySelector('img');


myImage.onclick = function(){
  let mySrc= myImage.getAttribute('src');

  if(mySrc === "img/Nico1.jpg") {
    myImage.setAttribute('src',"img/Nico2.jpg");
  } else {
    myImage.setAttribute('src',"img/Nico1.jpg");
  }

}