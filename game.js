function getRandomInt() {
	return Math.floor(Math.random() * 255);
}

function getRandomIntIn5() {
	return Math.floor(Math.random() * 6);
}

function getRandomRgb() {
	return "RGB(" + getRandomInt() + ", " + getRandomInt() + ", " + getRandomInt() + ")";
}


//set random rgb to square
var squares = document.querySelectorAll(".square");
for(var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = getRandomRgb();
}

//display random rgb to html
var rgbDisplay = document.querySelector("#rgbDisplay");
rgbDisplay.textContent = squares[getRandomIntIn5()].style.backgroundColor.toUpperCase();


//if square clicked was wrong, remove it and display try again;
for(var i = 0; i < squares.length; i++) {
	squares[i].addEventListener("click", function() {
		this.style.transition = "all 1s";
		if(this.style.backgroundColor !== rgbDisplay.textContent.toLowerCase()) {
			document.querySelector("#stateDisplay").textContent = "Try Again!";
			this.style.backgroundColor = "#272626";
		} else {
			document.querySelector("#playAgain").textContent = "PLAY AGAIN?"
			document.querySelector("#stateDisplay").textContent = "Correct!";
			turnAllSquare(this.style.backgroundColor);
			document.querySelector(".jumbotron").style.backgroundColor = this.style.backgroundColor;
			//and turn all square and jumbotron to rgbAnswer color
		}
	});
}

function turnAllSquare(color) {
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

