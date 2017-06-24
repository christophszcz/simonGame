var colors = ['red', 'yellow', 'blue', 'yellow'], number, simon = [], you = [];
 
function randomNumber(){
	number = Math.floor(Math.random() * 4);
	console.log(randomNumber);
}

function startGame(){
	for(i = 0 ; i < 20; i ++){
		randomNumber();
		simon[i] = colors[number];
	}
}

startGame();
console.log(simon);