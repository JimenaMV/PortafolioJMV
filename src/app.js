//console.log("enlazado");

let bg = document.querySelector('#plants-01');
let middle = document.querySelector('#plants-02');
let front = document.querySelector('#plants-03');
let name = document.querySelector('#name');

window.addEventListener('scroll', function () {
	let value = window.scrollY;
	bg.style.top = value * 0.8 + 'px';
	middle.style.top = value * 1.2 + 'px';
	front.style.top = value * 0.4 + 'px';
	name.style.top = value * 1 + 'px';
});
