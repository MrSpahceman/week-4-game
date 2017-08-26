
//Creating an object array of my crystals as encouraged by instructor
var crysTals = [
	{	
		thumbnail1:"RedRuby",
		
	},	
	
	{
		thumbnail2:"YellowDiamond",
		
	},

	{
		thumbnail3:"GreenRuby",
 		
	},
	
];
//======Business Logic up front////////////
//console logging the object to make sure this part was atleast running all the time on new game
console.log(crysTals);

// logging number of wins/losses;Attempted
var winCounter = 0;
var lossCounter = 0;
//attempting to code the win loss logic but I could never get the images to display their value properly
var userScore = ".";
function winLoss(){
	 
  if (userScore === targetNumber) {

    // Add to the win counter
    winCounter++;

    // Give the user an alert
    alert("You win!");
  }

  // If number a loss 
  else if (userScore >= targetNumber) {

    // Add to the loss counter
    lossCounter++;

    // Give the user an alert
    alert("You lose");
  }
}

//tyring to make each of my crystals have different random values; unable to add them all together.
	$(".thumbnail1").on("click", function(userScore) {
		alert("clicked")
		 Math.floor(Math.random() * 8);
		$("#userScore").text( Math.floor(Math.random() * 8));
		});

	$(".thumbnail2").on("click", function(userScore) {
		alert("clicked")
		 Math.floor(Math.random() * 20);
		$("#userScore").text( Math.floor(Math.random() * 20));
		});

	$(".thumbnail3").on("click", function(userScore) {
		alert("clicked")
		 Math.floor(Math.random() * 30);
		$("#userScore").text( Math.floor(Math.random() * 30));
		});


//Display portions of code and user input events
// random number to guess and to be displayed to the user to hit between 0 and 100  
var targetNumber= Math.floor(Math.random() *100);
$("#number-to-guess").text(targetNumber);

// I dont know the syntax for method to add a value to each thumbnail. I've tried to add all thumbnails 1,2,3. only thumbnail 1 worked


// var PowerOptions = Math.floor(Math.random() * 30);
// 	$(."thumbnail1").txt("#rubyValue")

//I was able to get the code below to work for each individual image with the value of 1. 
// $(".thumbnail1"  ).on("click", function(){
// 	counter += 1
// 	alert('yes' + counter );});
// var counter =0;
// $(".thumbnail2"  ).on("click", function(){
// 	counter += 1
// 	alert('yes' + counter );});
// var counter =0;
// $(".thumbnail3"  ).on("click", function(){
// 	counter += 1
// 	alert('yes' + counter );});