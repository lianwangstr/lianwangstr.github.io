
const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

let myVariable;
myVariable = 'Bob';
let myVariable2 = 100;
let myVariable3 = false;
let myVariable4 = [1, 'Lake', 'Mike', 11]

/*
Everything in between is a comment.
*/
// This is also a comment

function iceCreamCho() {
	let iceCream = 'chocolate';
	if (iceCream === 'chocolate') {
		alert('Yay, I love chocolate ice cream!')
	} else {
		alert('Awwww, but chocolate is my favorite...');
	}
}

function multiply(num1, num2) {
	let result = num1 * num2;
	return result;
}

document.querySelector('html').addEventListener('click', function() {
	alert('Ouch! Stop poking me!');
});
/*
document.querySelector('html').addEventListener('click', () => {
	alert('Ouch! Stop poking me!');
});
*/
// anonymous function



