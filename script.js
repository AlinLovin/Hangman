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
	buttons();
	var words = ['cat', 'shark', 'spider', 'computer', 'javascript',
	'plug', 'camera', 'phone', 'programmer'];

	var word = words[Math.floor(Math.random() * words.length)]
	console.log(word);

	var space = "";
	for (let i = 0; i < word.length; ++i) {
		space += "_";
	}
	document.getElementById("guessWord").innerHTML = space;
	

/*
	selectWord = function() {
		var lives = 10;
		buttons();
		var words = ['cat', 'shark', 'spider', 'computer', 'javascript',
		'plug', 'camera', 'phone', 'programmer'];

		var word = words[Math.floor(Math.random() * words.length)]
		console.log(word);

		var space = "";
		for (let i = 0; i < word.length; ++i) {
			space += "_";
		}
	}
	selectWord();*/

	checkLetter = function(idButton) { 
		var ok = 0, win = 1;
		for (let i = 0; i < word.length; ++i) {
			if (word[i] == idButton) {
				ok = 1;
				space = space.substring(0, i) + idButton + space.substring(i + 1);
			}
			console.log(space);
			document.getElementById("guessWord").innerHTML = space;
		}
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
		if (lives > 0) {
			document.getElementById("lives").innerHTML = "You have " + lives + " lives";
		}
		if (lives < 1) {
			document.getElementById("final").innerHTML = "GAME OVER";	
		}
		console.log(lives);
	} 

}

