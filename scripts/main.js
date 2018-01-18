
// calls function below to generate 6 random colors upon page load
var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");  // assigns var to CSS value of square
var pickedColor = pickColor(); // this calls the pickColor func below
var colorDisplay = document.getElementById('colorDisplay'); // accessing colorDisplay Id in the DOM
var messageDisplay = document.querySelector('#message'); // accessing DOM span msg#
var h1 = document.querySelector("h1"); // turing the h1 value the same color as clickedColor correct value


colorDisplay.textContent = pickedColor; // updating the DOM element with the new information
	
for(var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];  //<---this line connects the CSS styling to the above array
	squares[i].addEventListener('click', function() { //click event
		 
		var clickedColor = this.style.backgroundColor;  // assignment of correct RGB color
		if(clickedColor === pickedColor) { 
			messageDisplay.textContent = "You are Correct!"; // accessing DOM span element to show msg when correct
			changeColors(clickedColor); //calls the changeColors func below
			h1.style.backgroundColor = clickedColor; // 
		} else {
			this.style.backgroundColor = "#232323"; //changes the color to the same as background if wrong
			messageDisplay.textContent = "Try Again!"; // accessing DOM span element to show msg when wrong
		}	
	});
}

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
	var random = Math.floor(Math.random() * colors.length) // we will use the length of the array to generate the color, saving to a var...
	return colors[random];
	// then use the var (random #) to access an element within the array at that index and returns it
}

function generateRandomColors(num){
	// make an array based on original RGB 
	var arr = []
	// repeat "num" times
	for(var i = 0; i < num; i++) {
		// get rand color and push to array with randomColor func below
		arr.push(randomColor())
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




