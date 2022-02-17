
let myImage = document.querySelector('img');

myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/Shark-Knight-Gawr-Gura-by-ZERONIS.jpg') {
		myImage.setAttribute('src', 'images/Yui.jpeg');
	} else {
		myImage.setAttribute('src', 'images/Shark-Knight-Gawr-Gura-by-ZERONIS.jpg');
	}
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'My first test page, ' + myName;
  }
}


if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'My first test page, ' + storedName;
}


myButton.onclick = function() {
  setUserName();
}
