$(document).ready(function() {
var guess;
var count = 0;
var rand = Math.floor(Math.random()*100) + 1;
var diff;
console.log ("right number is ", rand)
$("#guess").focus(function(){
	$("#message").text("");
	$(this).val("");
})

$("#submit").click(function(){
	console.log("MADE A GUESS");
guess = $("#guess").val();
	if (guess < 0 || guess > 100){
		$("#message").text ("You must choose between 1 and 100!");
	} else if (guess<rand) {
		console.log ("The magic number is higher");
		$("#message").text("The magic number is higher");
	} else if (guess>rand) {
		$("#message").text("The magic number is lower");
	} else {
		$("#message").text("Congratulations!! You guessed the number!");
		 $("#diff").text("");

	     
    }
	count = count + 1
	if (count == 1) {
		$("#count").text("1 Guess");
	} else {
		$("#count").text(count + " Guesses");
	}
	diff=Math.abs(rand-guess)
	if (diff >1 && diff < 6){
	   console.log ("HOT");
	   $("#diff").text("Your HOT");
    } else if (diff > 6 && diff < 12 ){
	   console.log("warm");
	   $("#diff").text("Your Warm");
    } else if (diff >12 && diff <17) {
	   console.log ("chilly");
	   $("#diff").text("Your Chilly");
    } else if(diff>17) {
       console.log("COLD");
       $("#diff").text("Your Cold");
    } else{
    	$("#diff").text("");

    }
	});
	
    $("#Answer").click(function(){
    	$("#answer").text("The Answer is " + rand);
    	$("#message").text("");
	      $("#guess").val("");
	      $("#diff").text("");

    })
    $('#newgame').click(function(){
	      count = 0
	      $("#count").text("0 Guesses");
	      $("#message").text("");
	      $("#guess").val("");
	      $("#diff").text("");
	      $("#answer").text("");
         rand = Math.floor(Math.random()*100)+1;
         console.log("right number is ", rand);
  
  })
    $("#endgame").click(function(){
    	  $("#answer").text("The Answer is " + rand);
          $("#message").text("");
	      $("#guess").val("");
	      $("#diff").text("");
  });
     




});