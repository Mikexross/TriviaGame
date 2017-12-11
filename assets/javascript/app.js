$('#start').on('click', function() { 
 	game.start(); 
});
// put all questions into an array along with answers in a seperate array.
var questions = [{
        question: "What is Scary Terry's catchphrase?",
        answers: ["I'm walking here!","Pass me a burger!","Biiitch", "Boo! Scared you!"], 

        correctAnswer: "Biiitch"
    },
    {
        question: "What is it that Rick uses to travel between dimensions and universes?",
        answers: [
            "Portal Gun",
            "Trampoline",
            "Golden Trumpet",
            "Magic Carpet"
        ],
        correctAnswer: "Portal Gun"
    },
    {
        question: "The Sigerian Scammers are trying to get the secret formula to....??",
        answers: [
            "Morty's secret pie recipe",
            "Krabby Patty",
            "Concentrated Dark Matter",
            "Laffy Taffy"
        ],
        correctAnswer: "Concentrated Dark Matter"
    },
    {
        question: "What did Snuffles change his name to in the episode 'Lawnmower Dog?'",
        answers: ["Snowflake", "Snowball", "Fluffy",
            "Steven"
        ],
        correctAnswer: "Snowball"
    }];





//create game functions


//FUNCTIONS
var game = {
	correct: 0, 
	incorrect: 0, 
	counter: 30, 
	countdown: function() { 
		game.counter--; 
		$('#counter').html(game.counter);
		if(game.counter <=0) {
			console.log("Time is up!"); 
			game.done(); 
		} 
	}, 
	start: function(){
		timer = setInterval(game.countdown, 1000); 
		$('#subwrapper').prepend('<h2> Time Remaining: <span id="counter"> 30</span> Seconds</h2>'); 
		$('#start').remove();  
		for (var i = 0; i < questions.length; i++) {
			$('#subwrapper').append('<h2>' + questions[i].question + '</h2>');
			for (var j = 0; j < questions[i].answers.length; j++) {
				$("#subwrapper").append(" <input type='radio' name='question-"+ i +"' value='" + questions[i].answers[j] + "'> " + questions[i].answers[j]); 
			}
		}
	}, 

	//When this timer gets to zero, we need to do the game done fcn to check whether question was correct or incorrect
	//It has to do this for each and every question on the page 
	//FIRST check thru each of the input types to check if any of the buttons are marked as checked
	done: function () { 
		//comparing the checked vs. correct at the 0th position in the array 
		$.each($("input[name='question-0']:checked"), function() {
			if($(this).val()==questions[0].correctAnswer) {
				game.correct++; 
			} else {
				game.incorrect++; 
			}	
		});
		//comparing the checked vs. the correct at the 1 position in the array 
		$.each($("input[name='question-1']:checked"), function() {
			if($(this).val()==questions[1].correctAnswer) {
				game.correct++; 
			} else {
				game.incorrect++; 
			}	
		});
		//comparing the checked vs. correct at the 2 position in the array 
		$.each($("input[name='question-2']:checked"), function() {
			if($(this).val()==questions[2].correctAnswer) {
				game.correct++; 
			} else {
				game.incorrect++; 
			}	
		});
		//comparing the checked vs. correct at the 3 position in the array
		$.each($("input[name='question-3']:checked"), function() {
			if($(this).val()==questions[3].correctAnswer) {
				game.correct++; 
			} else {
				game.incorrect++; 
			}	
		}); 
		
	this.result(); 
	}, 
	result: function() { 
	clearInterval(timer); 
	$('#subwrapper h3').remove();
	$('#subwrapper').html("<h3>All done!</h3>"); 
	$('#subwrapper').append("<h3>Correct Answers: "+this.correct+"</h3>");
	$('#subwrapper').append("<h3>Incorrect Answers: "+this.incorrect+"</h3>");
	$('#subwrapper').append("<h3>Unanswered: "+(questions.length-(this.incorrect+this.correct))+"</h3>");
	}
}