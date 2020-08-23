
//this code change my h1 in hello world


let myImage = document.querySelector('img');
let myButton= document.querySelector('button');
let myHeading= document.querySelector('h1');

//for prompt 
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome to my site, ' + storedName;
}

myImage.onclick = function(){
  let mySrc= myImage.getAttribute('src');

  if(mySrc === "img/Nico1.jpg") {
    myImage.setAttribute('src',"img/Nico2.jpg");
  } else {
    myImage.setAttribute('src',"img/Nico1.jpg");
  }

}

function setUserName() {
  let myName = prompt('mitti lo nome tio');

  localStorage.setItem('name',myName);
  myHeading.textContent='Welcome to my site, ' + myName;

}


myButton.onclick=function(){
  setUserName();
}