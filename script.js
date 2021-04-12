window.onload = function() {

	var buttons = function() {
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
			});
		}
	}

	var lives = 10;
	document.getElementById("lives").innerHTML = "You have " + lives + " lives";
	buttons();

	var selectRandomWord = function() {
		var words = ['cat', 'shark', 'spider', 'computer', 'javascript',
		'plug', 'camera', 'phone', 'programmer'];

		var word = words[Math.floor(Math.random() * words.length)]
		console.log(word);
		return word;
	}

	var space = "";
	var selectedWord = selectRandomWord();

	for (let i = 0; i < selectedWord.length; ++i) {
		space += "_";
	}
	//document.getElementById("guessWord").innerHTML = space;

	checkLetter = function(idButton) { 
		var ok = 0, win = 1;
		var wordStatus = "";
		for (let i = 0; i < selectedWord.length; ++i) {
			if (selectedWord[i] == idButton) {
				ok = 1;
				space = space.substring(0, i) + idButton + space.substring(i + 1);
			}
			console.log(space);

		}

		for (let k = 0; k < space.length; ++k) {
			wordStatus += space[k] + " ";
		}

		document.getElementById("guessWord").innerHTML = wordStatus;

		for (let j = 0; j < space.length; ++j) {
			if (space[j] == '_') {
				win = 0;
			}
		}
		if (win == 1) {
			document.getElementById("final").innerHTML = "You win!";
		}
		if (ok == 0 && win == 0) {
			comments();
		}
	}

	comments = function() {
		--lives;
		var drawMe = lives;
		drawArray[drawMe]();
		if (lives >= 0) {
			document.getElementById("lives").innerHTML = "You have " + lives + " lives";
		}
		if (lives < 1) {
			document.getElementById("final").innerHTML = "GAME OVER";	
		}
		console.log(lives);
	} 

	canvas =  function(){

	    myStickman = document.getElementById("myCanvas");
	    context = myStickman.getContext('2d');
	    context.beginPath();
	    context.strokeStyle = "#fff";
	    context.lineWidth = 2;
	};

	draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {
    
    	myStickman = document.getElementById("myCanvas");
		context = myStickman.getContext('2d');
	    context.moveTo($pathFromx, $pathFromy);
	    context.lineTo($pathTox, $pathToy);
	    context.stroke(); 
	}

	head = function() {
		myStickman = document.getElementById("myCanvas");
		context = myStickman.getContext('2d');
		context.beginPath();
		context.arc(60, 25, 10, 0, Math.PI*2, true);
		context.stroke();
    }

	frame1 = function() {
	    draw (0, 150, 150, 150);
	};
	   
	frame2 = function() {
	    draw (10, 0, 10, 600);
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

	drawArray = [rightLeg, leftLeg, rightArm, leftArm,  torso,  head, frame4, frame3, frame2, frame1];
}

function reloadPage() {
		window.location.reload();
	}

