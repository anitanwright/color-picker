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

colorDisplay.textContent = pickedColor; // updating the DOM element with the new information
	
for(var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];  //<---this line connects the CSS styling to the above array
	squares[i].addEventListener('click', function() { //click event
		 
		var clickedColor = this.style.backgroundColor;  // assignment of correct RGB color
		if(clickedColor === pickedColor) { 
			alert('correct!');
		} else {
			alert('wrong!');
		}	
	});
}





