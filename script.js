window.onload = function() {
	var lives = 10;
	var underscores = "";
	document.getElementById("lives").innerHTML = "You have " + lives + " lives";

	// I display the buttons and give them ID as a letter.
	var generateButtons = function() {
		var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
		'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 
		'w', 'x', 'y', 'z'];
		for (let i = 0; i < alphabet.length; i++) {
			var btn = document.createElement("BUTTON");
			btn.innerHTML = alphabet[i];
			btn.id = alphabet[i];
			document.body.appendChild(btn);
	
			btn.addEventListener ("click", function() {
				checkLetter(this.id);
				this.id = "";
			});
		}
	}
	generateButtons();

	// I set the word random.
	var selectRandomWord = function() {
		var words = ['cat', 'shark', 'spider', 'computer', 'javascript',
		'plug', 'camera', 'phone', 'programmer'];

		var word = words[Math.floor(Math.random() * words.length)]
		return word;
	}
	var randomWord = selectRandomWord();

	// Replace each letter of the word random with the '_' character.
	var underscoresWord = function() {
		var wordLines = "";
		for (let i = 0; i < randomWord.length; ++i) {
			wordLines += "_";
		}
		return wordLines;
	}

	// I add the ' ' character between each '_' character and display the random word status.
	displayWordStatus = function() {
		var wordStatus = "";
		var wordLines = "";
		for (let i = 0; i < randomWord.length; ++i) {
			wordLines += "_";
		}

		for (let k = 0; k < wordLines.length; ++k) {
			wordStatus += wordLines[k] + " ";
		}
		document.getElementById("guessWord").innerHTML = wordStatus;
	}
	displayWordStatus();

	// I check if the ID of the pressed button is found in the random word and and display the random word status.
	checkLetter = function(idButton) {
		var isEqual = 0, win = 1;
		var wordStatus = ""; 
		if (underscores == "") {
			underscores = underscoresWord();
		}
		
		if (idButton != "") {
			for (let i = 0; i < randomWord.length; ++i) {
				if (randomWord[i] == idButton) {
					isEqual = 1;
					underscores = underscores.substring(0, i) + idButton + underscores.substring(i + 1);
				}
			}

			for (let k = 0; k < underscores.length; ++k) {
				wordStatus += underscores[k] + " ";
			}

			document.getElementById("guessWord").innerHTML = wordStatus;

			for (let j = 0; j < underscores.length; ++j) {
				if (underscores[j] == '_') {
					win = 0;
				}
			}
			if (win == 1) {
				document.getElementById("final").innerHTML = "You win!";
			}
			if (isEqual == 0 && win == 0) {
				statusGame();
			}
		}
	}

	// I call each drawing function in the drawArray according to the number of lives and display the game status. 
	statusGame = function() {
		--lives;
		var drawHangman = lives;
		drawArray[drawHangman]();
		if (lives >= 0) {
			document.getElementById("lives").innerHTML = "You have " + lives + " lives";
		}
		if (lives < 1) {
			document.getElementById("final").innerHTML = "GAME OVER";	
		}
	}

	// I draw the character according to the parameters in each function in the drawArray.
	draw = function(x, y, width, height) {
    	var hangman = document.getElementById("hangmanCanvas");
		var context = hangman.getContext('2d');
	    context.moveTo(x, y);
	    context.lineTo(width, height);
	    context.stroke(); 
	}

	head = function() {
		var hangman = document.getElementById("hangmanCanvas");
        var context = hangman.getContext('2d');
		context.beginPath();
		context.arc(60, 25, 10, 0, Math.PI*2, true);
		context.stroke();
    }

	frame1 = function() {
	    draw (0, 150, 150, 150);
	};
	   
	frame2 = function() {
	    draw (10, 0, 10, 150);
	};
	  
	frame3 = function() {
	    draw (0, 5, 70, 5);
    };
	  
	frame4 = function() {
	    draw (60, 5, 60, 15);
	};
	  
	torso = function() {
	   draw (60, 36, 60, 70);
	};
	  
	rightArm = function() {
	    draw (60, 46, 100, 50);
	};
  
	leftArm = function() {
	    draw (60, 46, 20, 50);
	};
	  
	rightLeg = function() {
	    draw (60, 70, 100, 100);
	};
	  
	leftLeg = function() {
	    draw (60, 70, 20, 100);
	};

	drawArray = [rightLeg, leftLeg, leftArm, rightArm,  torso,  head, frame4, frame3, frame2, frame1];
}

function reloadPage() {
	window.location.reload();
}

