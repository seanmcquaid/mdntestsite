var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/headshot.jpg') {
      myImage.setAttribute ('src','images/jazzdevil.gif');
    } else {
      myImage.setAttribute ('src','images/headshot.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Hello, ' + myName;
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hello, ' + storedName + ". It's time you learn about Sean McQuaid!";
  }

  myButton.onclick = function() {
    setUserName();
  }