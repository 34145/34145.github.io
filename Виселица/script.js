function randomWord(words){
	return words[Math.floor(Math.random()*words.length)]
}

function setName(){
	let name = $('#name').val()
	$('#names').remove();
	if(name == null || name == ""){
		const names = ["Бальтозавр", "ЧИКИБАМБОНИ", "Губка Боб"]
		return randomWord(names)
	}
	Viselitsa(name);
}
//Функцыя, которая спрашивает имя
function getName(){
	$('body').append('<div id="names"><p>Ведите своё имя</p><input type="text" id="name"><input type="submit" id="button" onclick="setName()"></div>');
	$('#play').remove();
}


function chooseWord() {

	const slova = ["собака", "альбатрос", "губка", "телефон", "ноутбук"];
	return randomWord(slova)
}

function updateScore(name, otvetMassiv, ostalosBukv, popytki) {
	alert(name + ", Ваше слово " + otvetMassiv.join(" ") + " Осталось " + ostalosBukv + " букв(ы). И " + popytki + " попыток. ")
}

function win(name, slovo) {
	alert(name + ",вы победили. Мы загадали '" + slovo +"'.") 
}

function lose(name, slovo) {
	alert(name + ",ты проиграл. Мы загадали '" + slovo +"'.")
}


function Viselitsa(name) {
	const slovo = chooseWord();	

	let otvetMassiv = [];
	for (let i = 0; i < slovo.length; i++) {
		otvetMassiv[i] = "_";
	}

	let ostalosBukv = slovo.length;
	let popytki = slovo.length - 2;
	

	while(popytki > 0 && ostalosBukv > 0) {
		updateScore(name, otvetMassiv, ostalosBukv, popytki);
		let bukva = prompt("Введите букву...").toLowerCase();
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