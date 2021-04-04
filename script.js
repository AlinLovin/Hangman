window.onload = function() {
	var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
	'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 
	'w', 'x', 'y', 'z'];

	var buttons = function() {
		for (let i = 0; i < alphabet.length; i++) {
			var btn = document.createElement("BUTTON");
			btn.innerHTML = alphabet[i];
			btn.id = alphabet[i];
			document.body.appendChild(btn);
	
			btn.addEventListener ("click", function() {
				getAlertBonus(this.id);
				//console.log(this.id);
			});
		}
	}

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
	//console.log(space[2] + "  " + space.length);

	getAlertBonus = function(idButton) {
		for (let i = 0; i < word.length; ++i) {
			if (word[i] == idButton) {
				space[2] = idButton;
				console.log(space[i] + " - " + i);
				space = space.substring(0, i) + idButton + space.substring(i + 1);
			}
			console.log(space);
			document.getElementById("guessWord").innerHTML = space;
		}
	}


}

