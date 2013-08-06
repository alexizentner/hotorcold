$(document).ready(function() {
var count = 0;
var rand = Math.floor(Math.random()*100) + 1;
console.log ("right number is ", rand)
$("#guess").focus(function(){
	$("#message").text("");
	$(this).val("");
})
$("#submit").click(function(){
	count = count + 1
	if (count == 1) {
		$("#count").text("1 Guess");
	} else {
		$("#count").text(count + " Guesses");
	}
	
	console.log("MADE A GUESS");
	guess = $("#guess").val();
	if (guess < 0 || guess > 100){
		console.log ("You must choose between 1 and 100!");
	} else if (guess<rand) {
		$("#message").text("The magic number is higher");
	} else if (guess>rand) {
		$("#message").text("The magic number is lower");
	} else {
		$("#message").text("Congratulations!! You guessed the number!");
}
})


});