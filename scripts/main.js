var numSquares = 9;

// calls function below to generate 6 random colors upon page load
// var colors = generateRandomColors(numSquares);

var colors = [];
// var pickedColor = pickColor(); // this calls the pickColor func below
var pickedColor;

var squares = document.querySelectorAll(".square");  // assigns var to CSS value of square
var colorDisplay = document.getElementById('colorDisplay'); // accessing colorDisplay Id in the DOM
var messageDisplay = document.querySelector('#message'); // accessing DOM span msg#
var h1 = document.querySelector("h1"); // turing the h1 value the same color as clickedColor correct value
var resetButton = document.querySelector('#reset'); // accessing the reset button in the DOM

// **************first draft code********************
// var easyBtn = document.querySelector("#easyBtn");
// var hardBtn = document.querySelector("#hardBtn");
//****************************************************

//****************this will loop thru all btns now and future  ones*****
var modeButtons = document.querySelectorAll('.mode');

init();

function init(){
	// mode button event listeners
	for (var i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener('click', function(){
		modeButtons[0].classList.remove('selected');
		modeButtons[1].classList.remove('selected');
		modeButtons[2].classList.remove('selected');
		this.classList.add('selected');
		// this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
		
		if (this.textContent === 'Easy')
			numSquares = 3;
	    else
	     if (this.textContent === 'Hard')
			numSquares = 6;
		else
		 if (this.textContent === 'Expert') 
			numSquares = 9;
		
		reset();
	});
}

// sets up the square listeners
for(var i = 0; i < squares.length; i++) {
	// squares[i].style.backgroundColor = colors[i];  //<---this line connects the CSS styling to the above array
	squares[i].addEventListener('click', function() { //click event
		 
		var clickedColor = this.style.backgroundColor;  // assignment of correct RGB color
		if(clickedColor === pickedColor) { 
			messageDisplay.textContent = "You are Correct!"; // accessing DOM span element to show msg when correct
			resetButton.textContent = "Play Again?" // reset to play again
			changeColors(clickedColor); //calls the changeColors func below
			h1.style.backgroundColor = clickedColor; // 
		} else {
			this.style.backgroundColor = "#232323"; //changes the color to the same as background if wrong
			messageDisplay.textContent = "Try Again!"; // accessing DOM span element to show msg when wrong
		}	
	});
}

	reset();
}

function reset() {
	//generate all new colors using numSquare var
	colors = generateRandomColors(numSquares);
	// pick a new random color from array
	pickedColor = pickColor();
	// change color disp to match picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	// change colors of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "lavender";
}
//  **************1st draft code**************
// easyBtn.addEventListener('click', function (){
// 	hardBtn.classList.remove('selected');
// 	easyBtn.classList.add('selected');
// 	numSquares = 3;
// 	colors = generateRandomColors(numSquares);	
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i < squares.length; i++) {
// 		if (colors[i]){
// 			squares[i].style.backgroundColor = colors[i];
// 		}	else {
// 			squares[i].style.display = 'none';
// 		}
// 	}
// });

// hardBtn.addEventListener('click', function (){
// 	hardBtn.classList.add('selected');
// 	easyBtn.classList.remove('selected');
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);	
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i < squares.length; i++) {
// 		squares[i].style.backgroundColor = colors[i];
// 		squares[i].style.display = 'block';
// 	}
// });


// DOM button to change colors upon click
// resetButton.addEventListener('click', function(){
// 	//generate all new colors using generateRandomColors func below
// 	colors = generateRandomColors(numSquares);
// 	// pick a new random color from array
// 	pickedColor = pickColor();
// 	// change color disp to match picked color
// 	colorDisplay.textContent = pickedColor;
// 	this.textContent = "New Colors";
// 	messageDisplay.textContent = "";
// 	// change colors of squares
// 	for(var i = 0; i < squares.length; i++) {  
// 		squares[i].style.backgroundColor = colors[i]; 
// 	}
// 	h1.style.backgroundColor = "lavender";
// });
//******************************************************


resetButton.addEventListener('click', function(){
	reset ();
});




// function to change color of h1 and all other squares when the correct square is chosen
function changeColors(color) {  //takes single arg of the color string 
	// loop thru all squares..
	for(var i =0; i < squares.length; i++) {
	// then change all squares to match correct color
	squares[i].style.backgroundColor = color;
	}
}
// function to pick a random number within colors array and then use to access the color out of the array and return it (called at top of code)
function pickColor(){
	var random = Math.floor(Math.random() * colors.length); // we will use the length of the array to generate the color, saving to a var...
	return colors[random];
	// then use the var (random #) to access an element within the array at that index and returns it
}

function generateRandomColors(num){
	// make an array based on original RGB 
	var arr = [];
	// repeat "num" times
	for(var i = 0; i < num; i++) {
		// get rand color and push to array with randomColor func below
		arr.push(randomColor());
	}
	// return the array to the DOM
	return arr;

}
// this is called within the generateRandomColors function above
function randomColor() {
	// pick red green and blue from  RGE colors 0 - 255
	var r = Math.floor(Math.random() * 256); // always +1 of num needed  
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	// create a string that takes in all the info above and return the info to be shown in the DOM
	return "rgb(" + r + ", " + g + ", " + b + ")";  // be sure to include the spaces after the commas b/c === in clickedColor is strict
}




