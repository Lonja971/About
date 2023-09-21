q = document.querySelector('.q');
red = document.querySelector('.red');
green = document.querySelector('.green');
yellow = document.querySelector('.yellow');
brown = document.querySelector('.brown');
blue = document.querySelector('.blue');
blueviolet = document.querySelector('.blueviolet');
white = document.querySelector('.white');
black = document.querySelector('.black');
gray = document.querySelector('.gray');

q.addEventListener("mouseleave", function (event) {
	q.style.backgroundColor = "white";
});

red.addEventListener("click", function (event) {
	q.style.backgroundColor = "red";
});
green.addEventListener("click", function (event) {
	q.style.backgroundColor = "green";
});
yellow.addEventListener("click", function (event) {
	q.style.backgroundColor = "yellow";
});
brown.addEventListener("click", function (event) {
	q.style.backgroundColor = "brown";
});
blue.addEventListener("click", function (event) {
	q.style.backgroundColor = "blue";
});
blueviolet.addEventListener("click", function (event) {
	q.style.backgroundColor = "blueviolet";
});
white.addEventListener("click", function (event) {
	q.style.backgroundColor = "white";
});
black.addEventListener("click", function (event) {
	q.style.backgroundColor = "black";
});
gray.addEventListener("click", function (event) {
	q.style.backgroundColor = "gray";
});