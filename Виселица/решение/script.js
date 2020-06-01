function randomWord(words){
	return words[Math.floor(Math.random()*words.length)]
}

function setName(name){
	if(name == null || name == ""){
		const names = ["Бальтозавр", "ЧИКИБАМБОНИ", "Губка Боб"]
		return randomWord(names)
	}

	return name
}

function chooseWord() {
	const slova = ["Собака", "Альбатрос", "Губка", "Телефон", "Ноутбук"];
	return randomWord(slova)
}

function updateScore(name, otvetMassiv, ostalosBukv, popytki) {
	alert(name + ", Ваше слово" + otvetMassiv.join(" ") + " Осталось " + ostalosBukv + " букв(ы). И " + popytki + " попыток. ")
}

function win(name,slovo) {
	alert(name + ",вы победили" + slovo.(" ") 
}

function lose(name,slovo) {
	alert(name + ",ты лох" + lose. + "проиграл"
}

function Viselitsa() {
	let tmpName = prompt("Введите свое имя...");
	const name = setName(tmpName);

	const slovo = chooseWord();	

	let otvetMassiv = [];
	for (let i = 0; i < slovo.length; i++) {
		otvetMassiv[i] = "_";
	}

	let ostalosBukv = slovo.length;
	let popytki = slovo.length - 2;
	

	while(popytki > 0 && ostalosBukv > 0) {
		updateScore(name, otvetMassiv, ostalosBukv, popytki);
		let bukva = prompt("Введите букву...");
        let ugadal = false;
		for(let i = 0; i < slovo.length; i++) {
				if(slovo[i] == bukva) {
					otvetMassiv[i] = bukva;
					ostalosBukv--;
					ugadal = true;
			}
		}
		if (ugadal == false)popytki--
	}
    if (popytki == 0) lose(name,slovo)
    else win(name,slovo)
}