var myImage = document.querySelector('img');

myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');
  if(mySrc === './images/Metal_Gear_Solid_logo_2.png') {
    myImage.setAttribute('src', './images/Metal_Gear_Solid_logo.png')
  } else {
    myImage.setAttribute('src', './images/Metal_Gear_Solid_logo_2.png')
  }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() { 
  var myName = prompt('あなたの名前を入力してください。');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = "MetalGear はすばらしいよ、 " + myName;

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = "MetalGear はすばらしいよ、" + storedName;
  }
}

myButton.onclick = function() {
  setUserName();
}