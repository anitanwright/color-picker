 var colors = [
 	"rgb(255, 0, 0)",
 	"rgb(255, 255, 0)",
 	"rgb(0, 255, 0)",
 	"rgb(0, 255, 255)",
 	"rgb(0, 0, 255)",
 	"rgb(255, 0, 255)"

 ]

// select all the colors within, loop thru and then assign to the squares

var squares = document.querySelectorAll(".square");  // assigns var to CSS value of square

var pickedColor = colors[3];  //assignment of item 3 in array
var colorDisplay = document.getElementById('colorDisplay'); // accessing colorDisplay Id in the DOM
var messageDisplay = document.querySelector('#message'); // DOM span msg#

colorDisplay.textContent = pickedColor; // updating the DOM element with the new information
	
for(var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];  //<---this line connects the CSS styling to the above array
	squares[i].addEventListener('click', function() { //click event
		 
		var clickedColor = this.style.backgroundColor;  // assignment of correct RGB color
		if(clickedColor === pickedColor) { 
			messageDisplay.textContent = "You are Correct!"; // accessing DOM span element to show msg when correct
			changeColors(clickedColor); //calls the changeColors func below
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





