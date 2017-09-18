var squares = document.querySelectorAll(".square");
var rgbDisplay = document.querySelector("#rgbDisplay");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var numOfSquare = 6;
var resetButton = document.querySelector("#reset");
// //disappear all squares
// var squares = document.querySelectorAll(".square");
// for(var i = 0; i < 6; i++) {
// 	squares[i].style.backgroundColor = "#232323";
// }

//give numOfSquare 3 or 6 on
resetColor();

resetButton.addEventListener("click", resetColor);

easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	this.classList.add("selected");
});

hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	this.classList.add("selected");
});


//if square clicked was wrong, remove it and display try again;
for(var i = 0; i < numOfSquare; i++) {
	squares[i].addEventListener("click", function() {
		if(this.style.backgroundColor !== rgbDisplay.textContent.toLowerCase()) {
			document.querySelector("#stateDisplay").textContent = "Try Again!";
			this.style.backgroundColor = "#232323";
		} else {
			document.querySelector("#reset").textContent = "PLAY AGAIN?";
			document.querySelector("#stateDisplay").textContent = "Correct!";
			turnAllSquare(this.style.backgroundColor);
			document.querySelector(".jumbotron").style.backgroundColor = this.style.backgroundColor;
			//and turn all square and jumbotron to rgbAnswer color
		}
	});
}

function getRandomInt() {
	return Math.floor(Math.random() * 255);
}

function getRandomIntIn5() {
	return Math.floor(Math.random() * 6);
}

function getRandomRgb() {
	return "RGB(" + getRandomInt() + ", " + getRandomInt() + ", " + getRandomInt() + ")";
}

function resetColor() {
	for(var i = 0; i < numOfSquare; i++) {
		squares[i].style.backgroundColor = getRandomRgb();
		//display random rgb to html
		rgbDisplay.textContent = squares[getRandomIntIn5()].style.backgroundColor.toUpperCase();
		document.querySelector("#stateDisplay").textContent = " ";
	}
}

function turnAllSquare(color) {
	for(var i = 0; i < numOfSquare; i++) {
		squares[i].style.backgroundColor = color;
	}
}



