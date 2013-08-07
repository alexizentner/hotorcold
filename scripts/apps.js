$(document).ready(function() {
//set variables
  var guess;
  var count = 0;
  var diff;
  var rand = Math.floor(Math.random()*100) + 1;
// check that computer number generated in console 
  console.log ("right number is ", rand)
// person playing guesses
$("#guess").focus(function(){
	$("#message").text("");
	$(this).val("");
})
$("#submit").click(function(){
	console.log("MADE A GUESS");
//guess made and now told higher/lower/correct guess
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
//count of guesses and printed
	count = count + 1
	if (count == 1) {
		$("#count").text("1 Guess");
	} else {
		$("#count").text(count + " Guesses");
	}
//difference between guess and random and printed hot/cold and picture
	diff=Math.abs(rand-guess)
	if (diff >=1 && diff < 6){
	   console.log ("HOT");
	   $("#diff").text("Your HOT");
	   $('#cold').hide();
       $('#hot').show();
    } else if (diff >= 6 && diff < 12 ){
	   console.log("warm");
	   $("#diff").text("Your Warm");
	   $('#cold').hide();
       $('#hot').show();
    } else if (diff >=12 && diff <17) {
	   console.log ("chilly");
	   $("#diff").text("Your Chilly");
	   $('#hot').hide();
       $('#cold').show();
    } else if(diff>=17) {
       console.log("COLD");
       $("#diff").text("Your Cold");
       $('#hot').hide();
       $('#cold').show();
    } else{
    	$("#diff").text("");

    }
	});
// button to get answer and hide other text and pic
	  $("#Answer").click(function(){
    	$("#answer").text("The Answer is " + rand);
    	  $("#message").text("");
	      $("#guess").val("");
	      $("#diff").text("");
	      $('#hot').hide();
          $('#cold').hide();

    })
// button to start new game, reset random number and hide text and pic
    $('#newgame').click(function(){
	      count = 0
	      $("#count").text("0 Guesses");
	      $("#message").text("");
	      $("#guess").val("");
	      $("#diff").text("");
	      $("#answer").text("");
	      $('#hot').hide();
          $('#cold').hide();
         rand = Math.floor(Math.random()*100)+1;
         console.log("right number is ", rand);
    })
//button to endgame, get answer and hide text and pics
    $("#endgame").click(function(){
    	  $("#answer").text("The Answer is " + rand);
          $("#message").text("");
	      $("#guess").val("");
	      $("#diff").text("");
	      $('#hot').hide();
          $('#cold').hide();
  });
     




});